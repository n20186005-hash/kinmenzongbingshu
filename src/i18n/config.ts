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
    brandShort: '金門總兵署',
    subtitle: '獨立遊客指南',
    home: '首頁',
    homeTitle: '清金門鎮總兵署遊客指南｜開放時間、地圖、交通與後浦夜遊',
    defaultDescription: '準備參觀清金門鎮總兵署？查看開放時間、門票、交通停車、20／45／90 分鐘參觀路線、室內地圖及後浦夜遊安排。',
    start: '開始參觀',
    menu: '選單',
    language: '語言',
    currentLanguage: '繁體中文',
    more: '更多',
    independentNotice: '本站為獨立遊客指南，與金門縣政府、景點管理單位及官方觀光機構無隸屬關係。開放時間和活動可能臨時調整，出發前請再次確認最新公告。',
    copyright: '獨立遊客指南（非官方網站）。景點照片依 CC 授權署名使用。',
    nav: [
      ['參觀與路線', '/visit/'], ['室內地圖', '/map/'], ['必看重點', '/highlights/'],
      ['歷史沿革', '/history/'], ['交通', '/transport/'], ['周邊順遊', '/nearby/'],
      ['後浦夜遊', '/houpu-night-walk/'],
    ],
    footerNav: [['參觀資訊', '/visit/'], ['三條路線', '/visit/#routes'], ['室內地圖', '/map/'], ['後浦夜遊', '/houpu-night-walk/']],
    bottomNav: [['首頁', '/', 'home'], ['地圖', '/map/', 'map'], ['開始參觀', '/visit/#routes', 'play'], ['附近', '/nearby/', 'near']],
  },
  'zh-Hans': {
    brand: '金门总兵署游客指南',
    brandShort: '金门总兵署',
    subtitle: '独立游客指南',
    home: '首页',
    homeTitle: '清金门镇总兵署游客指南｜开放时间、地图、交通与后浦夜游',
    defaultDescription: '准备参观清金门镇总兵署？查看开放时间、门票、交通、20／45／90 分钟参观路线、室内地图及后浦夜游安排。',
    start: '开始参观',
    menu: '菜单',
    language: '语言',
    currentLanguage: '简体中文',
    more: '更多',
    independentNotice: '本站为独立游客指南，与金门县政府、景点管理单位及官方观光机构无隶属关系。开放时间和活动可能临时调整，出发前请再次确认最新公告。',
    copyright: '独立游客指南（非官方网站）。景点照片依 CC 授权署名使用。',
    nav: [['参观与路线', '/visit/'], ['室内地图', '/map/'], ['必看重点', '/highlights/'], ['历史沿革', '/history/'], ['交通', '/transport/'], ['周边顺游', '/nearby/'], ['后浦夜游', '/houpu-night-walk/']],
    footerNav: [['参观信息', '/visit/'], ['三条路线', '/visit/#routes'], ['室内地图', '/map/'], ['后浦夜游', '/houpu-night-walk/']],
    bottomNav: [['首页', '/', 'home'], ['地图', '/map/', 'map'], ['开始参观', '/visit/#routes', 'play'], ['附近', '/nearby/', 'near']],
  },
  en: {
    brand: 'Kinmen Military Headquarters Visitor Guide',
    brandShort: 'Kinmen Military Headquarters',
    subtitle: 'Independent Visitor Guide',
    home: 'Home',
    homeTitle: 'Kinmen Military Headquarters Visitor Guide: Hours, Map and Routes',
    defaultDescription: 'Plan your visit to the Kinmen Military Headquarters of the Qing Dynasty with opening hours, maps, timed routes, transport and the Houpu evening walk.',
    start: 'Plan your visit',
    menu: 'Menu',
    language: 'Language',
    currentLanguage: 'English',
    more: 'More',
    independentNotice: 'This is an independent visitor guide with no affiliation to the Kinmen County Government or the attraction operator. Hours and activities may change; check official notices before departure.',
    copyright: 'Independent visitor guide, not an official website. Attraction photos are used under their respective Creative Commons licences.',
    nav: [['Plan your visit', '/visit/'], ['Map', '/map/'], ['Highlights', '/highlights/'], ['History', '/history/'], ['Getting here', '/transport/'], ['Nearby', '/nearby/'], ['Night tour', '/houpu-night-walk/']],
    footerNav: [['Visit information', '/visit/'], ['Timed routes', '/visit/#routes'], ['Map', '/map/'], ['Night tour', '/houpu-night-walk/']],
    bottomNav: [['Home', '/', 'home'], ['Map', '/map/', 'map'], ['Start', '/visit/#routes', 'play'], ['Nearby', '/nearby/', 'near']],
  },
} as const;

export const localizedAttraction = {
  'zh-Hant-TW': {
    name: '清金門鎮總兵署',
    aliases: ['金門總兵署', '金門鎮總兵署', '浯江新莊'],
    address: '金門縣金城鎮浯江街53號',
    imageAlt: '清金門鎮總兵署外觀',
  },
  'zh-Hans': {
    name: '清金门镇总兵署',
    aliases: ['金门总兵署', '金门镇总兵署', '浯江新庄'],
    address: '金门县金城镇浯江街53号',
    imageAlt: '清金门镇总兵署外观',
  },
  en: {
    name: 'Kinmen Military Headquarters of the Qing Dynasty',
    aliases: ['Kinmen Zong Bing Shu', 'Qing Kinmen Military Headquarters'],
    address: 'No. 53, Wujiang Street, Jincheng Township, Kinmen County, Taiwan',
    imageAlt: 'Exterior of the Kinmen Military Headquarters of the Qing Dynasty',
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
