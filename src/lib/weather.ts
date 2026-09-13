/**
 * 景點即時天氣、多日預報與「可執行建議」引擎
 *
 * 這支模組在 Astro 元件的 frontmatter（伺服器端）執行，於建置／請求時取得氣象資料，
 * 並在模組層級快取，避免同一輪建置重複發出請求；前端另有一次帶時效快取的刷新。
 *
 * buildAdvice() 是純函式：伺服器端與瀏覽器端共用同一套判斷邏輯，
 * 因此不會出現「重新整理後建議文案與資料不一致」的情況。
 */

export type WeatherIcon =
  | 'clear'
  | 'partly'
  | 'cloud'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'shower'
  | 'thunder'
  | 'snow';

export interface CurrentWeather {
  time: string;
  temperature: number;
  apparent: number;
  humidity: number;
  precipitation: number;
  weatherCode: number;
  windSpeed: number;
  windGust: number;
  isDay: boolean;
}

export interface DailyWeather {
  date: string;
  code: number;
  max: number;
  min: number;
  precipProbability: number | null;
  precipSum: number | null;
  uvIndex: number | null;
  windMax: number | null;
  gustMax: number | null;
  sunrise: string | null;
  sunset: string | null;
}

export interface WeatherSnapshot {
  current: CurrentWeather;
  daily: DailyWeather[];
  fetchedAt: string;
  timezone: string;
}

export interface WeatherCodeInfo {
  icon: WeatherIcon;
  zh: string;
  hans: string;
  en: string;
  /** 帶傘提示強度 */
  umbrella: 0 | 1 | 2 | 3;
}

const CODES: Record<number, WeatherCodeInfo> = {
  0: { icon: 'clear', zh: '晴朗', hans: '晴朗', en: 'Clear sky', umbrella: 0 },
  1: { icon: 'clear', zh: '大致晴朗', hans: '大致晴朗', en: 'Mainly clear', umbrella: 0 },
  2: { icon: 'partly', zh: '局部多雲', hans: '局部多云', en: 'Partly cloudy', umbrella: 0 },
  3: { icon: 'cloud', zh: '陰天', hans: '阴天', en: 'Overcast', umbrella: 1 },
  45: { icon: 'fog', zh: '有霧', hans: '有雾', en: 'Fog', umbrella: 1 },
  48: { icon: 'fog', zh: '霧凇', hans: '雾凇', en: 'Depositing rime fog', umbrella: 1 },
  51: { icon: 'drizzle', zh: '毛毛雨', hans: '毛毛雨', en: 'Light drizzle', umbrella: 2 },
  53: { icon: 'drizzle', zh: '細雨', hans: '细雨', en: 'Moderate drizzle', umbrella: 2 },
  55: { icon: 'drizzle', zh: '持續細雨', hans: '持续细雨', en: 'Dense drizzle', umbrella: 2 },
  56: { icon: 'drizzle', zh: '凍毛雨', hans: '冻毛雨', en: 'Light freezing drizzle', umbrella: 2 },
  57: { icon: 'drizzle', zh: '凍雨', hans: '冻雨', en: 'Freezing drizzle', umbrella: 2 },
  61: { icon: 'rain', zh: '小雨', hans: '小雨', en: 'Slight rain', umbrella: 2 },
  63: { icon: 'rain', zh: '下雨', hans: '下雨', en: 'Moderate rain', umbrella: 3 },
  65: { icon: 'rain', zh: '大雨', hans: '大雨', en: 'Heavy rain', umbrella: 3 },
  66: { icon: 'rain', zh: '凍雨', hans: '冻雨', en: 'Light freezing rain', umbrella: 3 },
  67: { icon: 'rain', zh: '強凍雨', hans: '强冻雨', en: 'Freezing rain', umbrella: 3 },
  71: { icon: 'snow', zh: '小雪', hans: '小雪', en: 'Slight snow', umbrella: 2 },
  73: { icon: 'snow', zh: '下雪', hans: '下雪', en: 'Moderate snow', umbrella: 2 },
  75: { icon: 'snow', zh: '大雪', hans: '大雪', en: 'Heavy snow', umbrella: 3 },
  77: { icon: 'snow', zh: '雪粒', hans: '雪粒', en: 'Snow grains', umbrella: 2 },
  80: { icon: 'shower', zh: '陣雨', hans: '阵雨', en: 'Slight rain showers', umbrella: 2 },
  81: { icon: 'shower', zh: '較強陣雨', hans: '较强阵雨', en: 'Moderate rain showers', umbrella: 3 },
  82: { icon: 'shower', zh: '強陣雨', hans: '强阵雨', en: 'Violent rain showers', umbrella: 3 },
  85: { icon: 'snow', zh: '陣雪', hans: '阵雪', en: 'Slight snow showers', umbrella: 2 },
  86: { icon: 'snow', zh: '強陣雪', hans: '强阵雪', en: 'Heavy snow showers', umbrella: 3 },
  95: { icon: 'thunder', zh: '雷雨', hans: '雷雨', en: 'Thunderstorm', umbrella: 3 },
  96: { icon: 'thunder', zh: '雷雨伴冰雹', hans: '雷雨伴冰雹', en: 'Thunderstorm with hail', umbrella: 3 },
  99: { icon: 'thunder', zh: '強雷雨伴冰雹', hans: '强雷雨伴冰雹', en: 'Thunderstorm with heavy hail', umbrella: 3 },
};

const FALLBACK_INFO: WeatherCodeInfo = {
  icon: 'cloud',
  zh: '多雲',
  hans: '多云',
  en: 'Cloudy',
  umbrella: 1,
};

export function weatherCodeInfo(code: number | null | undefined): WeatherCodeInfo {
  if (code === null || code === undefined) return FALLBACK_INFO;
  return CODES[code] ?? FALLBACK_INFO;
}

export function weatherLabel(code: number | null | undefined, locale: string): string {
  const info = weatherCodeInfo(code);
  if (locale === 'en') return info.en;
  if (locale === 'zh-Hans') return info.hans;
  return info.zh;
}

/* ------------------------------------------------------------------ *
 * 觀測與預報欄位
 * ------------------------------------------------------------------ */

export const ENDPOINT = 'https://api.open-meteo.com/v1/forecast';

export const CURRENT_FIELDS = [
  'temperature_2m',
  'relative_humidity_2m',
  'apparent_temperature',
  'precipitation',
  'weather_code',
  'wind_speed_10m',
  'wind_gusts_10m',
  'is_day',
].join(',');

export const DAILY_FIELDS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'precipitation_probability_max',
  'precipitation_sum',
  'uv_index_max',
  'wind_speed_10m_max',
  'wind_gusts_10m_max',
  'sunrise',
  'sunset',
].join(',');

export const FORECAST_DAYS = '7';

/** 供伺服器端與瀏覽器端共用的查詢參數。 */
export function buildQuery(latitude: number | string, longitude: number | string, timezone = 'Asia/Taipei') {
  return new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: CURRENT_FIELDS,
    daily: DAILY_FIELDS,
    timezone,
    forecast_days: FORECAST_DAYS,
    wind_speed_unit: 'kmh',
  });
}

export interface RawWeatherPayload {
  current?: Record<string, number | string | null>;
  daily?: Record<string, (number | string | null)[]>;
  timezone?: string;
}

const num = (value: unknown, fallback = 0): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const numOrNull = (value: unknown): number | null => {
  if (value === null || value === undefined || value === '') return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

/** 把原始回應整理成站內統一結構；資料不完整時回傳 null。 */
export function normalizeWeather(data: RawWeatherPayload, fetchedAt = new Date().toISOString()): WeatherSnapshot | null {
  const current = data?.current;
  const daily = data?.daily;
  if (!current || !Array.isArray(daily?.time)) return null;

  const days: DailyWeather[] = (daily.time as string[]).map((date, index) => ({
    date,
    code: num(daily.weather_code?.[index]),
    max: num(daily.temperature_2m_max?.[index]),
    min: num(daily.temperature_2m_min?.[index]),
    precipProbability: numOrNull(daily.precipitation_probability_max?.[index]),
    precipSum: numOrNull(daily.precipitation_sum?.[index]),
    uvIndex: numOrNull(daily.uv_index_max?.[index]),
    windMax: numOrNull(daily.wind_speed_10m_max?.[index]),
    gustMax: numOrNull(daily.wind_gusts_10m_max?.[index]),
    sunrise: (daily.sunrise?.[index] as string) ?? null,
    sunset: (daily.sunset?.[index] as string) ?? null,
  }));

  if (!days.length) return null;

  return {
    current: {
      time: String(current.time ?? ''),
      temperature: num(current.temperature_2m),
      apparent: num(current.apparent_temperature),
      humidity: num(current.relative_humidity_2m),
      precipitation: num(current.precipitation),
      weatherCode: num(current.weather_code),
      windSpeed: num(current.wind_speed_10m),
      windGust: num(current.wind_gusts_10m),
      isDay: num(current.is_day, 1) === 1,
    },
    daily: days,
    fetchedAt,
    timezone: data.timezone ?? 'Asia/Taipei',
  };
}

let memo: Promise<WeatherSnapshot | null> | null = null;

async function requestSnapshot(): Promise<WeatherSnapshot | null> {
  const latitude = 24.432258;
  const longitude = 118.3183799;
  const url = `${ENDPOINT}?${buildQuery(latitude, longitude).toString()}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) return null;
    return normalizeWeather((await response.json()) as RawWeatherPayload);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 取得天氣快照。同一輪建置只發出一次請求；失敗時回傳 null，由前端接手。
 */
export function getWeatherSnapshot(): Promise<WeatherSnapshot | null> {
  if (!memo) memo = requestSnapshot();
  return memo;
}

/* ------------------------------------------------------------------ *
 * 風級換算
 * ------------------------------------------------------------------ */

const BEAUFORT_LOWER_BOUNDS = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];

/** 公里/小時 → 蒲福風級（0–12）。 */
export function beaufort(kmh: number): number {
  let level = 0;
  for (let index = 0; index < BEAUFORT_LOWER_BOUNDS.length; index += 1) {
    if (kmh >= BEAUFORT_LOWER_BOUNDS[index]) level = index + 1;
  }
  return level;
}

/* ------------------------------------------------------------------ *
 * 建議引擎
 * ------------------------------------------------------------------ */

export type AdviceLocale = 'zh-Hant' | 'zh-Hans' | 'en';

export function adviceLocale(locale: string): AdviceLocale {
  if (locale === 'en') return 'en';
  if (locale === 'zh-Hans') return 'zh-Hans';
  return 'zh-Hant';
}

const L = (locale: AdviceLocale, zh: string, hans: string, en: string): string =>
  locale === 'en' ? en : locale === 'zh-Hans' ? hans : zh;

export interface AdviceFacts {
  code: number;
  isDay: boolean;
  month: number;
  temp: number;
  apparent: number;
  humidity: number;
  windKmh: number;
  gustKmh: number;
  uvIndex: number | null;
  precipProb: number | null;
  precipSumMm: number | null;
  maxTemp: number | null;
  minTemp: number | null;
}

export interface AdviceItem {
  id: string;
  text: string;
}

export interface AdviceAlert {
  id: string;
  title: string;
  text: string;
}

export interface WeatherAdvice {
  headline: string;
  alerts: AdviceAlert[];
  dress: AdviceItem[];
  plan: AdviceItem[];
  pack: AdviceItem[];
  context: string;
}

export interface WeatherChip {
  label: string;
  value: string;
  tone: 'plain' | 'warn' | 'danger';
}

const DRIZZLE_CODES = new Set([51, 53, 55, 56, 57]);
const LIGHT_RAIN_CODES = new Set([61, 80]);
const HEAVY_RAIN_CODES = new Set([63, 65, 66, 67, 81, 82]);
const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);
const THUNDER_CODES = new Set([95, 96, 99]);
const FOG_CODES = new Set([45, 48]);
const CALM_CODES = new Set([0, 1, 2]);

export function adviceFactsFromSnapshot(snapshot: WeatherSnapshot): AdviceFacts {
  const today = snapshot.daily[0] ?? null;
  const month = Number(snapshot.current.time.slice(5, 7)) || new Date().getMonth() + 1;
  return {
    code: snapshot.current.weatherCode,
    isDay: snapshot.current.isDay,
    month,
    temp: snapshot.current.temperature,
    apparent: snapshot.current.apparent,
    humidity: snapshot.current.humidity,
    windKmh: Math.max(snapshot.current.windSpeed, today?.windMax ?? 0),
    gustKmh: Math.max(snapshot.current.windGust, today?.gustMax ?? 0),
    uvIndex: today?.uvIndex ?? null,
    precipProb: today?.precipProbability ?? null,
    precipSumMm: today?.precipSum ?? null,
    maxTemp: today?.max ?? null,
    minTemp: today?.min ?? null,
  };
}

/** 紫外線分級（口語化，避免專業術語）。 */
export function uvLevel(uv: number | null): 0 | 1 | 2 | 3 | 4 {
  if (uv === null) return 0;
  if (uv < 3) return 0;
  if (uv < 5) return 1;
  if (uv < 8) return 2;
  if (uv < 11) return 3;
  return 4;
}

export function uvLabel(locale: AdviceLocale, uv: number | null): string {
  const labels = [
    L(locale, '弱', '弱', 'Low'),
    L(locale, '中等', '中等', 'Moderate'),
    L(locale, '強', '强', 'High'),
    L(locale, '很強', '很强', 'Very high'),
    L(locale, '極強', '极强', 'Extreme'),
  ];
  return labels[uvLevel(uv)];
}

export function windLabel(locale: AdviceLocale, level: number): string {
  if (level <= 2) return L(locale, '微風', '微风', 'Light breeze');
  if (level <= 4) return L(locale, `${level} 級`, `${level} 级`, `Force ${level}`);
  if (level <= 6) return L(locale, `${level} 級偏大`, `${level} 级偏大`, `Force ${level}`);
  return L(locale, `${level} 級以上強風`, `${level} 级以上强风`, `Force ${level}+ gale`);
}

/** 頂部快速判讀用的資訊籤。 */
export function weatherChips(facts: AdviceFacts, locale: AdviceLocale): WeatherChip[] {
  const chips: WeatherChip[] = [];
  const windLevel = beaufort(facts.windKmh);

  if (facts.maxTemp !== null && facts.minTemp !== null) {
    chips.push({
      label: L(locale, '今日氣溫', '今日气温', 'Today'),
      value: `${Math.round(facts.maxTemp)}–${Math.round(facts.minTemp)}°C`,
      tone: 'plain',
    });
  }

  chips.push({
    label: L(locale, '體感', '体感', 'Feels like'),
    value: `${Math.round(facts.apparent)}°C`,
    tone: 'plain',
  });

  chips.push({
    label: L(locale, '紫外線', '紫外线', 'UV'),
    value: uvLabel(locale, facts.uvIndex),
    tone: uvLevel(facts.uvIndex) >= 2 ? 'warn' : 'plain',
  });

  chips.push({
    label: L(locale, '風勢', '风势', 'Wind'),
    value: windLabel(locale, windLevel),
    tone: windLevel >= 7 ? 'danger' : windLevel >= 5 ? 'warn' : 'plain',
  });

  if (facts.precipProb !== null) {
    chips.push({
      label: L(locale, '降雨機率', '降雨概率', 'Rain chance'),
      value: `${Math.round(facts.precipProb)}%`,
      tone: facts.precipProb >= 60 ? 'warn' : 'plain',
    });
  }

  return chips;
}

const dedupe = (items: AdviceItem[]): AdviceItem[] => {
  const seen = new Set<string>();
  return items.filter((item) => (seen.has(item.id) ? false : (seen.add(item.id), true)));
};

/**
 * 依天氣組合輸出「直接可執行」的建議。
 * 只輸出命中的條件，未命中的條目不會出現在畫面上。
 */
export function buildAdvice(facts: AdviceFacts, locale: AdviceLocale): WeatherAdvice {
  const windLevel = beaufort(facts.windKmh);
  const gustLevel = beaufort(facts.gustKmh);
  const rainProb = facts.precipProb ?? 0;
  const precipSum = facts.precipSumMm ?? 0;

  const drizzle = DRIZZLE_CODES.has(facts.code);
  const lightRain = LIGHT_RAIN_CODES.has(facts.code);
  const heavyRain = HEAVY_RAIN_CODES.has(facts.code);
  const snow = SNOW_CODES.has(facts.code);
  const thunder = THUNDER_CODES.has(facts.code);
  const fog = FOG_CODES.has(facts.code);
  const calmSky = CALM_CODES.has(facts.code);
  const overcast = facts.code === 3;
  const wet = drizzle || lightRain || heavyRain || snow || thunder;
  const heavyWet = heavyRain || thunder || precipSum >= 40;

  const hot = facts.apparent >= 32 || facts.temp >= 32 || (facts.maxTemp ?? -99) >= 32;
  const extremeHot = facts.apparent >= 36 || (facts.maxTemp ?? -99) >= 36;
  const cold = facts.maxTemp !== null && facts.maxTemp <= 10;
  const diurnal =
    facts.maxTemp !== null && facts.minTemp !== null && facts.maxTemp - facts.minTemp > 8;
  const humid = facts.humidity >= 80;
  const uv = uvLevel(facts.uvIndex);
  const gale = windLevel >= 7 || gustLevel >= 7;
  const windy = !gale && (windLevel >= 5 || gustLevel >= 5);
  const springFogSeason = facts.month >= 3 && facts.month <= 5;
  const monsoonSeason = facts.month >= 10 || facts.month <= 3;

  const alerts: AdviceAlert[] = [];
  const dress: AdviceItem[] = [];
  const plan: AdviceItem[] = [];
  const pack: AdviceItem[] = [];

  /* --- 風險提醒（優先度最高） --- */
  if (thunder) {
    alerts.push({
      id: 'alert-thunder',
      title: L(locale, '雷雨', '雷雨', 'Thunderstorms'),
      text: L(
        locale,
        '有雷電發生，不要在樹下、涼亭或空曠處停留，也不要登山、海邊戲水；水上與露天項目可能臨時關閉。',
        '有雷电发生，不要在树下、凉亭或空旷处停留，也不要登山、海边戏水；水上与露天项目可能临时关闭。',
        'Lightning is likely. Avoid trees, open shelters and exposed ground, and stay out of the water; rides and boat trips may close at short notice.',
      ),
    });
  }

  if (gale) {
    alerts.push({
      id: 'alert-gale',
      title: L(locale, '強風', '强风', 'Strong wind'),
      text: L(
        locale,
        '風力很強，遠離廣告看板、工地圍籬與海邊礁石；招牌、樹枝可能掉落，騎車請放慢並留意側風。',
        '风力很强，远离广告看板、工地围篱与海边礁石；招牌、树枝可能掉落，骑车请放慢并留意侧风。',
        'Winds are strong. Keep clear of signage, hoardings and coastal rocks; signs and branches may fall, and crosswinds make riding risky.',
      ),
    });
  }

  if (heavyWet) {
    alerts.push({
      id: 'alert-heavy-rain',
      title: L(locale, '較強降雨', '较强降雨', 'Heavy rainfall'),
      text: L(
        locale,
        '降雨較強，避開低窪地、溪床與易積水路段；古厝內外石板遇水濕滑，走路請放慢。',
        '降雨较强，避开低洼地、溪床与易积水路段；古厝内外石板遇水湿滑，走路请放慢。',
        'Rainfall is heavy. Avoid low-lying ground, stream beds and flood-prone roads, and take care on wet stone paving inside and outside the courtyards.',
      ),
    });
  }

  if (extremeHot) {
    alerts.push({
      id: 'alert-heat',
      title: L(locale, '高溫', '高温', 'High heat'),
      text: L(
        locale,
        '體感溫度偏高，容易中暑；避開 11–15 時外出，隨身補充水分，出現頭暈、噁心請立即到室內陰涼處休息。',
        '体感温度偏高，容易中暑；避开 11–15 时外出，随时补充水分，出现头晕、恶心请立即到室内阴凉处休息。',
        'It will feel dangerously hot. Avoid 11:00–15:00 outdoors, keep drinking water, and move indoors at once if you feel dizzy or nauseous.',
      ),
    });
  }

  if (fog) {
    alerts.push({
      id: 'alert-fog',
      title: L(locale, '濃霧', '浓雾', 'Dense fog'),
      text: L(
        locale,
        '能見度差，不適合看海、看山與遠景；往返離島的班機與船班容易延誤或取消，請預留彈性並先查航班。',
        '能见度差，不适合看海、看山与远景；往返离岛的班机与船班容易延误或取消，请预留弹性并先查航班。',
        'Visibility is poor, so coastal and hilltop views are wasted. Flights and ferries to the outlying islands are often delayed or cancelled — build in slack and check before travelling.',
      ),
    });
  }

  if (cold) {
    alerts.push({
      id: 'alert-cold',
      title: L(locale, '低溫', '低温', 'Cold'),
      text: L(
        locale,
        '氣溫明顯偏低，長輩與幼童減少長時間戶外停留，注意保暖與心血管狀況。',
        '气温明显偏低，长辈与幼童减少长时间户外停留，注意保暖与心血管状况。',
        'It is markedly cold. Limit long outdoor stays for older visitors and small children, and dress warmly.',
      ),
    });
  }

  /* --- 出行穿搭 --- */
  if (hot) {
    dress.push({
      id: 'dress-hot',
      text: L(
        locale,
        '氣溫偏高，建議輕薄透氣的短袖與排汗衣料，避免深色厚重衣物。',
        '气温偏高，建议轻薄透气的短袖与排汗衣料，避免深色厚重衣物。',
        'It is hot — choose light, breathable short sleeves and moisture-wicking fabrics rather than dark, heavy clothing.',
      ),
    });
  } else if (cold) {
    dress.push({
      id: 'dress-cold',
      text: L(
        locale,
        '氣溫偏低，穿發熱衣加厚外套，並備圍巾、帽子與手套。',
        '气温偏低，穿发热衣加厚外套，并备围巾、帽子与手套。',
        'It is cold — layer a thermal base under a thick jacket, and bring a scarf, hat and gloves.',
      ),
    });
  } else {
    dress.push({
      id: 'dress-mild',
      text: L(
        locale,
        '氣溫舒適，長袖或薄外套即可，方便隨溫度增減。',
        '气温舒适，长袖或薄外套即可，方便随温度增减。',
        'Temperatures are comfortable — a long-sleeved top or light jacket is enough and easy to layer.',
      ),
    });
  }

  if (humid && hot) {
    dress.push({
      id: 'dress-humid',
      text: L(
        locale,
        '濕度高、體感更悶熱，透氣排汗材質比純棉舒服，也建議多帶一件替換上衣。',
        '湿度高、体感更闷热，透气排汗材质比纯棉舒服，也建议多带一件替换上衣。',
        'Humidity makes it feel stickier than the number suggests; synthetic wicking fabrics beat cotton, and a spare top helps.',
      ),
    });
  }

  if (diurnal) {
    dress.push({
      id: 'dress-diurnal',
      text: L(
        locale,
        `早晚與白天溫差約 ${Math.round((facts.maxTemp ?? 0) - (facts.minTemp ?? 0))} 度，帶一件可增減的外套。`,
        `早晚与白天温差约 ${Math.round((facts.maxTemp ?? 0) - (facts.minTemp ?? 0))} 度，带一件可增减的外套。`,
        `Day–night range is about ${Math.round((facts.maxTemp ?? 0) - (facts.minTemp ?? 0))}°C, so carry a layer you can add or remove.`,
      ),
    });
  }

  if (gale || windy) {
    dress.push({
      id: 'dress-wind',
      text: L(
        locale,
        '風勢偏大，建議防風外套與合身長褲，避免寬鬆長裙與容易吹落的帽子。',
        '风势偏大，建议防风外套与合身长裤，避免宽松长裙与容易吹落的帽子。',
        'It is windy — wear a windproof jacket and fitted trousers, and skip loose skirts or hats that blow away.',
      ),
    });
  }

  if (wet) {
    dress.push({
      id: 'dress-wet',
      text: L(
        locale,
        '有雨，選防水外套或快乾材質，鞋子以止滑為優先。',
        '有雨，选防水外套或快干材质，鞋子以止滑为优先。',
        'With rain about, wear a waterproof or quick-drying outer layer and choose shoes with grip.',
      ),
    });
  }

  if (monsoonSeason && (gale || windy)) {
    dress.push({
      id: 'dress-monsoon',
      text: L(
        locale,
        '正值東北季風季節，風大時體感會再低 2–3 度，防風比厚重更有效。',
        '正值东北季风季节，风大时体感会再低 2–3 度，防风比厚重更有效。',
        'This is northeast-monsoon season: wind can knock 2–3°C off the feels-like temperature, so blocking wind matters more than piling on weight.',
      ),
    });
  }

  /* --- 遊玩安排 --- */
  if (calmSky && !heavyWet && !gale) {
    plan.push({
      id: 'plan-clear',
      text: L(
        locale,
        '天氣晴好，適合戶外與老街步行；清晨與傍晚光線最適合拍照。',
        '天气晴好，适合户外与老街步行；清晨与傍晚光线最适合拍照。',
        'Clear skies — ideal for walking the old street and courtyards, with the best light early and late in the day.',
      ),
    });
  }

  if (overcast || facts.code === 2) {
    plan.push({
      id: 'plan-soft-light',
      text: L(
        locale,
        '雲量較多、光線柔和，磚牆與木構細節反而更好拍，也適合長時間在戶外走動。',
        '云量较多、光线柔和，砖墙与木构细节反而更好拍，也适合长时间在户外走动。',
        'With more cloud and softer light, bricks and timber details actually photograph better, and long outdoor strolls are comfortable.',
      ),
    });
  }

  if (rainProb >= 60) {
    plan.push({
      id: 'plan-rain-likely',
      text: L(
        locale,
        '降雨機率高，行程以室內展館與廊道為主，海邊與登山建議改期。',
        '降雨概率高，行程以室内展馆与廊道为主，海边与登山建议改期。',
        'Rain is likely — lean on indoor galleries and covered corridors, and postpone coastal or hill walks.',
      ),
    });
  } else if (lightRain || drizzle) {
    plan.push({
      id: 'plan-light-rain',
      text: L(
        locale,
        '有短暫小雨，露天行程體驗較差，可縮短戶外時間、增加室內展間停留。',
        '有短暂小雨，露天行程体验较差，可缩短户外时间、增加室内展间停留。',
        'Light rain now and then: shorten the outdoor stretches and spend longer in the indoor display rooms.',
      ),
    });
  }

  if (heavyWet) {
    plan.push({
      id: 'plan-indoor',
      text: L(
        locale,
        '不建議安排戶外行程，以室內景點為主；低窪與溪谷路段請避開。',
        '不建议安排户外行程，以室内景点为主；低洼与溪谷路段请避开。',
        'Skip outdoor itineraries and focus on indoor sights; avoid low-lying and stream-side roads.',
      ),
    });
  }

  if (extremeHot) {
    plan.push({
      id: 'plan-heat-peak',
      text: L(
        locale,
        '把戶外行程排在 11 時前與 15 時後，正午時段留在室內吹涼、補水。',
        '把户外行程排在 11 时前与 15 时后，正午时段留在室内吹凉、补水。',
        'Schedule outdoor stops before 11:00 and after 15:00, and stay indoors with water at midday.',
      ),
    });
  } else if (hot) {
    plan.push({
      id: 'plan-hot',
      text: L(
        locale,
        '縮短連續戶外時間，每小時找有遮蔭或空調處休息一次。',
        '缩短连续户外时间，每小时找有遮荫或空调处休息一次。',
        'Break up long outdoor stretches — rest in shade or air conditioning once an hour.',
      ),
    });
  }

  if (windy) {
    plan.push({
      id: 'plan-windy',
      text: L(
        locale,
        '風勢偏大，海邊船班與露天設施可能停航停運，海線行程建議改期。',
        '风势偏大，海边船班与露天设施可能停航停运，海线行程建议改期。',
        'It is blustery — boat services and open-air facilities may close, so consider rescheduling the coast.',
      ),
    });
  }

  if (gale || windy || thunder || heavyWet) {
    plan.push({
      id: 'plan-coast-hill',
      text: L(
        locale,
        '後浦是市區步行行程，影響有限；但海邊與太武山的風雨明顯更強，浪區、礁石與山頂請不要靠近。',
        '后浦是市区步行行程，影响有限；但海边与太武山的风雨明显更强，浪区、礁石与山顶请不要靠近。',
        'Houpu itself is a sheltered town walk, but the coast and Taiwu Mountain see far stronger wind and rain — stay away from surf zones, wet rocks and the summit in these conditions.',
      ),
    });
  }

  if (fog) {
    plan.push({
      id: 'plan-fog',
      text: L(
        locale,
        '能見度差，觀景、看海與看山的行程可改為室內展館或老街店鋪。',
        '能见度差，观景、看海与看山的行程可改为室内展馆或老街店铺。',
        'Visibility is poor — swap viewpoint, sea and mountain stops for indoor galleries or old-street shops.',
      ),
    });
  }

  if (springFogSeason && !fog) {
    plan.push({
      id: 'plan-fog-season',
      text: L(
        locale,
        '春季是金門的霧季，班機與船班容易受濃霧影響，回程請預留緩衝時間。',
        '春季是金门的雾季，班机与船班容易受浓雾影响，回程请预留缓冲时间。',
        'Spring is Kinmen’s fog season — flights and ferries are easily disrupted, so allow buffer time for your return.',
      ),
    });
  }

  /* --- 隨身物品 --- */
  if (rainProb >= 60 || wet) {
    pack.push({
      id: 'pack-rain',
      text: L(locale, '摺傘或輕便雨衣', '折叠伞或轻便雨衣', 'Folding umbrella or light rain jacket'),
    });
  }

  if (gale || (windy && wet)) {
    pack.push({
      id: 'pack-rain-shell',
      text: L(
        locale,
        '雨衣優先，長柄傘在強風中容易損壞',
        '雨衣优先，长柄伞在强风中容易损坏',
        'A rain jacket rather than a long umbrella, which fails in strong wind',
      ),
    });
  }

  if (uv >= 2) {
    pack.push({
      id: 'pack-sun',
      text: L(
        locale,
        '防曬乳（SPF30 以上）、遮陽帽、太陽眼鏡',
        '防晒霜（SPF30 以上）、遮阳帽、太阳镜',
        'Sunscreen SPF30+, sun hat and sunglasses',
      ),
    });
  } else if (uv === 1 && facts.isDay) {
    pack.push({
      id: 'pack-sun-mild',
      text: L(locale, '薄防曬或帽子', '薄防晒或帽子', 'Light sunscreen or a hat'),
    });
  }

  if (extremeHot) {
    pack.push({
      id: 'pack-water-plus',
      text: L(
        locale,
        '充足飲用水、電解質飲料或鹽糖',
        '充足饮用水、电解质饮料或盐糖',
        'Plenty of water plus an electrolyte drink or salt sweets',
      ),
    });
  } else if (hot || facts.humidity >= 80) {
    pack.push({
      id: 'pack-water',
      text: L(locale, '充足飲用水', '充足饮用水', 'Plenty of drinking water'),
    });
  }

  if (hot && humid) {
    pack.push({
      id: 'pack-towel',
      text: L(
        locale,
        '吸汗毛巾、濕紙巾與一件替換上衣',
        '吸汗毛巾、湿纸巾与一件替换上衣',
        'Sweat towel, wet wipes and a spare top',
      ),
    });
  }

  if (cold) {
    pack.push({
      id: 'pack-warm',
      text: L(locale, '厚外套、圍巾', '厚外套、围巾', 'Thick jacket and scarf'),
    });
  } else if (diurnal) {
    pack.push({
      id: 'pack-layer',
      text: L(locale, '一件薄外套', '一件薄外套', 'One light extra layer'),
    });
  }

  if (fog) {
    pack.push({
      id: 'pack-mask',
      text: L(locale, '口罩', '口罩', 'Face mask'),
    });
  }

  if (alerts.length) {
    pack.push({
      id: 'pack-phone',
      text: L(
        locale,
        '手機與行動電源（查航班、看公告、緊急聯絡）',
        '手机与移动电源（查航班、看公告、紧急联络）',
        'Phone and power bank for flight checks, notices and emergencies',
      ),
    });
  }

  /* --- 一句話結論 --- */
  let headline: string;
  if (thunder && gale) {
    headline = L(locale, '雷雨加上強風，行程請改以室內為主', '雷雨加上强风，行程请改以室内为主', 'Thunderstorms and strong wind — switch to an indoor plan');
  } else if (alerts.length) {
    headline = L(
      locale,
      `${alerts[0].title}風險，今天的行程請保守安排`,
      `${alerts[0].title}风险，今天的行程请保守安排`,
      `${alerts[0].title} risk today — keep the plan conservative`,
    );
  } else if (rainProb >= 60) {
    headline = L(locale, '今天降雨機率高，出門記得帶傘', '今天降雨概率高，出门记得带伞', 'Rain is likely today — take an umbrella');
  } else if (wet) {
    headline = L(locale, '今天有雨，記得帶雨具', '今天有雨，记得带雨具', 'Some rain today — bring rain gear');
  } else if (extremeHot) {
    headline = L(locale, '天氣炎熱，避開正午時段', '天气炎热，避开正午时段', 'Very hot — avoid the midday hours');
  } else if (uv >= 3) {
    headline = L(locale, '紫外線很強，記得防曬', '紫外线很强，记得防晒', 'UV is very high — protect your skin');
  } else if (hot) {
    headline = L(locale, '天氣偏熱，多補水、少曬正午', '天气偏热，多补水、少晒正午', 'Warm today — drink often and dodge midday sun');
  } else if (cold) {
    headline = L(locale, '天氣偏冷，注意保暖', '天气偏冷，注意保暖', 'Cold today — dress warmly');
  } else if (windy || gale) {
    headline = L(locale, '風勢偏大，帽子與海線行程要留意', '风势偏大，帽子与海线行程要留意', 'Windy — mind hats and any coastal plans');
  } else if (overcast || facts.code === 2) {
    headline = L(locale, '光線柔和，適合拍照與長時間散步', '光线柔和，适合拍照与长时间散步', 'Soft light — good for photos and long walks');
  } else {
    headline = L(locale, '天氣平穩，可以照原定計畫走', '天气平稳，可以照原定计划走', 'Settled weather — stick to your plan');
  }

  /* --- 地理環境定位說明 --- */
  const context = L(
    locale,
    '本景點位於金城後浦市區，屬市區步行型動線：雨、風與體感溫度影響最大，幾乎沒有地形風險；若行程延伸到海邊或太武山，請以更嚴格的風雨標準判斷，並留意浪區與礁石濕滑。',
    '本景点位于金城后浦市区，属市区步行型动线：雨、风与体感温度影响最大，几乎没有地形风险；若行程延伸到海边或太武山，请以更严格的风雨标准判断，并留意浪区与礁石湿滑。',
    'The site sits in central Jincheng/Houpu on a town walking route: rain, wind and feels-like temperature matter most, and there is almost no terrain risk. If you extend to the coast or Taiwu Mountain, apply stricter wind and rain thresholds and watch for surf zones and slippery rocks.',
  );

  return {
    headline,
    alerts,
    dress: dedupe(dress).slice(0, 4),
    plan: dedupe(plan).slice(0, 4),
    pack: dedupe(pack).slice(0, 5),
    context,
  };
}
