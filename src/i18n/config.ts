import { attraction } from '../data/site';

export type Locale = 'zh-Hant-TW' | 'zh-Hans' | 'en';

export const defaultLocale: Locale = 'zh-Hant-TW';

export const localeConfig = {
  'zh-Hant-TW': {
    prefix: '',
    hreflang: 'zh-Hant-TW',
    htmlLang: 'zh-Hant-TW',
    ogLocale: 'zh_TW',
    shortLabel: '繁中',
  },
  'zh-Hans': {
    prefix: '/zh-cn',
    hreflang: 'zh-Hans',
    htmlLang: 'zh-Hans',
    ogLocale: 'zh_CN',
    shortLabel: '简中',
  },
  en: {
    prefix: '/en',
    hreflang: 'en',
    htmlLang: 'en',
    ogLocale: 'en_US',
    shortLabel: 'EN',
  },
} as const;

export const translatedPaths = [
  '/',
  '/about/',
  '/corrections/',
  '/credits/',
  '/visit/',
  '/map/',
  '/highlights/',
  '/history/',
  '/inside/',
  '/houpu-night-walk/',
  '/nearby/',
  '/nearby/memorial-arch/',
  '/nearby/general-residence/',
  '/nearby/wujiang-academy/',
  '/nearby/kuige/',
  '/nearby/city-god-temple/',
  '/nearby/food/',
  '/nearby/houpu-old-street/',
  '/nearby/model-street/',
  '/routes/',
  '/scooter-parking/',
  '/services/',
  '/sources/',
  '/transport/',
  '/transport/jincheng-bus-station/',
  '/transport/kinmen-airport/',
  '/transport/shuitou-pier/',
  '/transport/e-scooter/',
  '/routes/20-minute/',
  '/routes/45-minute/',
  '/routes/90-minute/',
] as const;

const translatedPathSet = new Set<string>(translatedPaths);

export const localeUi = {
  'zh-Hant-TW': {
    brand: '金門總兵署遊客指南',
    titleSuffix: '金門總兵署遊客指南',
    brandShort: '金門總兵署',
    subtitle: '獨立遊客指南',
    home: '首頁',
    homeTitle: '清金門鎮總兵署（浯江新莊）｜開放時間、免費夜間導覽與交通指南',
    defaultDescription: '清金門鎮總兵署（浯江新莊）位於金門縣金城鎮：全館免費參觀、開放至 22:00，每日 19:30 現場報名免費後浦夜間導覽。附公車、電動車交通與 20／45／90 分鐘參觀路線。',
    start: '開始參觀',
    menu: '選單',
    language: '語言',
    currentLanguage: '繁體中文',
    more: '更多',
    independentNotice: '本站為獨立遊客指南，與金門縣政府、景點管理單位及官方觀光機構無隸屬關係。開放時間和活動可能臨時調整，出發前請再次確認最新公告。',
    copyright: '獨立遊客指南（非官方網站）。景點照片依 CC 授權署名使用。',
    nav: [
      ['參觀與路線', '/visit/'], ['室內地圖', '/map/'], ['必看重點', '/highlights/'],
      ['歷史沿革', '/history/'], ['訪客服務', '/services/'], ['交通', '/transport/'], ['周邊順遊', '/nearby/'],
      ['後浦夜遊', '/houpu-night-walk/'],
    ],
    footerNav: [['參觀資訊', '/visit/'], ['三條路線', '/visit/#routes'], ['訪客服務', '/services/'], ['室內地圖', '/map/'], ['後浦夜遊', '/houpu-night-walk/']],
    bottomNav: [
      { label: '導覽', href: attraction.googleMapsUrl, icon: 'navigate', external: true },
      { label: '夜遊 19:30', href: '/houpu-night-walk/', icon: 'moon' },
      { label: '交通', href: '/transport/', icon: 'bus' },
      { label: '參觀', href: '/visit/', icon: 'play' },
      { label: '地圖', href: '/map/', icon: 'map' },
    ],
  },
  'zh-Hans': {
    brand: '金门总兵署游客指南',
    titleSuffix: '金门总兵署游客指南',
    brandShort: '金门总兵署',
    subtitle: '独立游客指南',
    home: '首页',
    homeTitle: '清金门镇总兵署（浯江新庄）｜开放时间、免费夜间导览与交通指南',
    defaultDescription: '清金门镇总兵署（浯江新庄）位于金门县金城镇：全馆免费参观、开放至 22:00，每日 19:30 现场报名免费后浦夜间导览。附公车、电动车交通与 20／45／90 分钟参观路线。',
    start: '开始参观',
    menu: '菜单',
    language: '语言',
    currentLanguage: '简体中文',
    more: '更多',
    independentNotice: '本站为独立游客指南，与金门县政府、景点管理单位及官方观光机构无隶属关系。开放时间和活动可能临时调整，出发前请再次确认最新公告。',
    copyright: '独立游客指南（非官方网站）。景点照片依 CC 授权署名使用。',
    nav: [['参观与路线', '/visit/'], ['室内地图', '/map/'], ['必看重点', '/highlights/'], ['历史沿革', '/history/'], ['访客服务', '/services/'], ['交通', '/transport/'], ['周边顺游', '/nearby/'], ['后浦夜游', '/houpu-night-walk/']],
    footerNav: [['参观信息', '/visit/'], ['三条路线', '/visit/#routes'], ['访客服务', '/services/'], ['室内地图', '/map/'], ['后浦夜游', '/houpu-night-walk/']],
    bottomNav: [
      { label: '导航', href: attraction.googleMapsUrl, icon: 'navigate', external: true },
      { label: '夜游 19:30', href: '/houpu-night-walk/', icon: 'moon' },
      { label: '交通', href: '/transport/', icon: 'bus' },
      { label: '参观', href: '/visit/', icon: 'play' },
      { label: '地图', href: '/map/', icon: 'map' },
    ],
  },
  en: {
    brand: 'Kinmen Military Headquarters Visitor Guide',
    // 英文 <title> 尾綴直接帶入 Google 地圖名稱，強化實體對齊（同時控制標題長度）
    titleSuffix: 'Troops Headquarters Visitor Guide',
    brandShort: 'Kinmen Military Headquarters',
    subtitle: 'Independent Visitor Guide',
    home: 'Home',
    homeTitle: 'Kinmen Military Headquarters (Troops Headquarters) | Free Entry, Hours & 19:30 Night Tour',
    defaultDescription: 'Visit Kinmen Military Headquarters of the Qing Dynasty, also known as Troops Headquarters, in Jincheng, Kinmen. Free admission, open until 22:00, and a free guided Houpu night tour with on-site registration at 19:30. Includes bus, scooter and parking directions.',
    start: 'Plan your visit',
    menu: 'Menu',
    language: 'Language',
    currentLanguage: 'English',
    more: 'More',
    independentNotice: 'This is an independent visitor guide with no affiliation to the Kinmen County Government or the attraction operator. Hours and activities may change; check official notices before departure.',
    copyright: 'Independent visitor guide, not an official website. Attraction photos are used under their respective Creative Commons licences.',
    nav: [['Plan your visit', '/visit/'], ['Map', '/map/'], ['Highlights', '/highlights/'], ['History', '/history/'], ['Visitor services', '/services/'], ['Getting here', '/transport/'], ['Nearby', '/nearby/'], ['Night tour', '/houpu-night-walk/']],
    footerNav: [['Visit information', '/visit/'], ['Timed routes', '/visit/#routes'], ['Visitor services', '/services/'], ['Map', '/map/'], ['Night tour', '/houpu-night-walk/']],
    bottomNav: [
      { label: 'Directions', href: attraction.googleMapsUrl, icon: 'navigate', external: true },
      { label: 'Night tour', href: '/houpu-night-walk/', icon: 'moon' },
      { label: 'Transport', href: '/transport/', icon: 'bus' },
      { label: 'Visit', href: '/visit/', icon: 'play' },
      { label: 'Map', href: '/map/', icon: 'map' },
    ],
  },
} as const;

export const localizedAttraction = {
  'zh-Hant-TW': {
    name: '清金門鎮總兵署（浯江新莊）',
    shortName: '清金門鎮總兵署',
    aliases: ['金門總兵署', '金門鎮總兵署', '浯江新莊', 'Kinmen Zong Bing Shu', 'Troops Headquarters'],
    address: '金門縣金城鎮北門里浯江街53號',
    addressLocality: '金城鎮',
    addressRegion: '金門縣',
    addressCountry: 'TW',
    postalCode: '893',
    imageAlt: '清金門鎮總兵署（浯江新莊）外觀 — 金門縣金城鎮主要地標',
  },
  'zh-Hans': {
    name: '清金门镇总兵署（浯江新庄）',
    shortName: '清金门镇总兵署',
    aliases: ['金门总兵署', '金门镇总兵署', '浯江新庄', 'Kinmen Zong Bing Shu', 'Troops Headquarters'],
    address: '金门县金城镇北门里浯江街53号',
    addressLocality: '金城镇',
    addressRegion: '金门县',
    addressCountry: 'TW',
    postalCode: '893',
    imageAlt: '清金门镇总兵署（浯江新庄）外观 — 金门县金城镇主要地标',
  },
  en: {
    name: 'Kinmen Military Headquarters of the Qing Dynasty (Wujiang Xinzhuang)',
    shortName: 'Kinmen Military Headquarters',
    aliases: ['Kinmen Zong Bing Shu', 'Qing Kinmen Military Headquarters', 'Troops Headquarters', 'Wujiang Xinzhuang'],
    address: 'No. 53, Wujiang Street, Beimen Village, Jincheng Township, Kinmen County 893, Taiwan',
    addressLocality: 'Jincheng Township',
    addressRegion: 'Kinmen County',
    addressCountry: 'TW',
    postalCode: '893',
    imageAlt: 'Exterior of the Kinmen Military Headquarters of the Qing Dynasty — a landmark in Jincheng, Kinmen',
  },
} as const;

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === '/zh-cn' || pathname.startsWith('/zh-cn/')) return 'zh-Hans';
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  const prefix = localeConfig[locale].prefix;
  if (!prefix) return pathname;
  const stripped = pathname.slice(prefix.length);
  return stripped || '/';
}

export function localizedPath(locale: Locale, basePath: string): string {
  const prefix = localeConfig[locale].prefix;
  if (!prefix) return basePath;
  return basePath === '/' ? `${prefix}/` : `${prefix}${basePath}`;
}

export function getLanguageAlternates(pathname: string) {
  const locale = getLocaleFromPath(pathname);
  const basePath = stripLocalePrefix(pathname);
  const locales: Locale[] = translatedPathSet.has(basePath)
    ? ['zh-Hant-TW', 'zh-Hans', 'en']
    : [locale];

  return locales.map((item) => ({
    locale: item,
    hreflang: localeConfig[item].hreflang,
    label: localeConfig[item].shortLabel,
    path: localizedPath(item, basePath),
  }));
}
