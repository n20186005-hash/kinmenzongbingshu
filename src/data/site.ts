// ============================================================
// 全站唯一資料來源 —— 首頁、FAQ、結構化資料、路線、交通頁面
// 全部讀取此檔案，避免出現多個開放時間版本 (doc.md §14)
// ============================================================

export const site = {
  brand: '金門總兵署遊客指南',
  brandEn: 'Kinmen Zong Bing Shu',
  subtitle: '獨立遊客指南',
  domain: 'kinmenzongbingshu.com',
  tagline: '到訪前知道怎麼安排，進入後知道怎麼看。',
  verifiedAt: '2026-07-20',
  googleReviewedAt: '2026-09-13',
};

// 單景點 SEO 實體綁定配置（對應需求中的變數表）
// DOMAIN_NAME / ATTRACTION_FULL_NAME / CITY_NAME / STATE_PROVINCE / COUNTRY_NAME /
// COUNTRY_CODE_2LETTER / POSTAL_CODE / LATITUDE / LONGITUDE / MAPS_SHARE_URL /
// MAPS_EMBED_SRC / NEARBY_LANDMARK_1 / NEARBY_LANDMARK_2 / GOVT_TOURISM_URL
export const attraction = {
  domainName: 'kinmenzongbingshu.com',
  name: '清金門鎮總兵署',
  nameFull: '清金門鎮總兵署（浯江新莊）',
  nameEn: 'Kinmen Military Headquarters of the Qing Dynasty',
  googleNameEn: 'Troops Headquarters',
  aliases: ['金門總兵署', '金門鎮總兵署', '浯江新莊', '浯江新庄', 'Kinmen Zong Bing Shu', 'Troops Headquarters'],
  address: '金門縣金城鎮北門里浯江街53號',
  addressLocality: '金城鎮',
  addressRegion: '金門縣',
  addressCountry: 'TW',
  postalCode: '893',
  plusCode: 'C8J9+W9 Beimen Village',
  coordinates: { lat: 24.432258, lng: 118.3183799 },
  // Google Maps 分享短連結（MAPS_SHARE_URL）
  mapsShareUrl: 'https://maps.app.goo.gl/tHLfKByzmUA8UU1o8',
  googleMapsUrl: 'https://www.google.com/maps/place/%E6%B8%85%E9%87%91%E9%97%A8%E9%95%87%E6%80%BB%E5%85%B5%E7%BD%B2%EF%BC%88%E6%B5%AF%E6%B1%9F%E6%96%B0%E5%BA%84%EF%BC%89/@24.432258,118.3183799,17z/data=!3m1!4b1!4m6!3m5!1s0x3414a26be6328a4b:0xac746e7a9b378777!8m2!3d24.432258!4d118.3183799!16s%2Fm%2F010prc7g?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D',
  // Google Maps 嵌入代碼（MAPS_EMBED_SRC）
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.5338212660386!2d118.3183799!3d24.432258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414a26be6328a4b%3A0xac746e7a9b378777!2z5riF6YeR6Zeo6ZWH5oC75YW1572y77yI5rWv5rGf5paw5bqE77yJ!5e0!3m2!1szh-CN!2stw!4v1784544987453!5m2!1szh-CN!2stw',
  // 附近核心地標（NEARBY_LANDMARK_1 / NEARBY_LANDMARK_2）
  nearbyLandmarks: ['模範街', '邱良功母節孝坊'],
  nearbyLandmarksEn: ['Mofan Street', 'Qiu Liang-gong’s Mother Chastity Arch'],
  // 官方旅遊局連結（GOVT_TOURISM_URL）
  govtTourismUrl: 'https://kinmen.travel/zh-tw/Travel/Attraction/393',
  govtTourismUrlEn: 'https://kinmen.travel/en/travel/attraction/1271',
  admission: '免費',
  openingHours: { opens: '09:00', closes: '22:00' },
  suggestedMinutes: '30–60 分鐘',
  phone: '082-371717',
  phoneInternational: '+886 82 371 717',
  builtNote: '明代許獬故宅「叢青軒」，清康熙二十一年（1682）由總兵陳龍改建為官署。',
};

// Google 評分／評論（最新一次核實，頁面須註明來源）
export const googleRating = {
  value: 4.4,
  count: 6212,
  best: 5,
  worst: 1,
  source: 'Google 地圖',
  sourceEn: 'Google Maps',
  sourceUrl: 'https://maps.app.goo.gl/tHLfKByzmUA8UU1o8',
  reviewedAt: '2026-09-13',
};

// 現場夜遊（後浦美麗小鎮之旅）
export const nightWalk = {
  time: '19:30',
  meetPoint: '總兵署現場報名',
  note: '每日 19:30 在總兵署現場報名，路線從總兵署出發，經書院、宗祠、廟宇、洋樓與牌坊，終點為模範街，全程免費並提供解說。',
};

// 首頁資訊卡
export const quickFacts = [
  { label: '開放時間', value: '09:00 – 22:00', tag: 'official' },
  { label: '門票', value: '免費', tag: 'official' },
  { label: '建議停留', value: '30–60 分鐘', tag: 'onsite' },
  { label: '最近交通', value: '金城站步行約 195 米', tag: 'official' },
  { label: '夜間導覽', value: '19:30 現場報名', tag: 'check' },
  { label: 'Google 評分', value: '4.4 ★（6,212 則）', tag: 'check' },
] as const;

// 主導航
export const nav = [
  { label: '參觀與路線', href: '/visit/' },
  { label: '室內地圖', href: '/map/' },
  { label: '必看重點', href: '/highlights/' },
  { label: '歷史沿革', href: '/history/' },
  { label: '交通', href: '/transport/' },
  { label: '周邊順遊', href: '/nearby/' },
  { label: '後浦夜遊', href: '/houpu-night-walk/' },
];

// 底部移動端導航
export const bottomNav = [
  { label: '首頁', href: '/', icon: 'home' },
  { label: '地圖', href: '/map/', icon: 'map' },
  { label: '開始參觀', href: '/visit/#routes', icon: 'play' },
  { label: '附近', href: '/nearby/', icon: 'near' },
];

// 內部空間點位 (doc.md §7-2 編號)
export const rooms = [
  { id: 'main-gate',   num: '01', name: '頭門', minutes: 3, image: 'main-gate.jpg',
    summary: '總兵署的正面門樓，門額高懸，是參觀的起點與拍照的第一站。',
    see: ['門樓輪廓', '門額匾', '磚紅外牆'] },
  { id: 'front-courtyard', num: '02', name: '前庭', minutes: 3, image: 'front-courtyard.jpg',
    summary: '進門後的開闊中軸庭院，兩側迴廊對稱，體現清代官署的空間秩序。',
    see: ['中軸線', '對稱迴廊', '石埕'] },
  { id: 'main-hall',   num: '03', name: '大堂', minutes: 5, image: 'main-hall-interior.jpg',
    summary: '總兵處理公開軍政事務的核心空間，陳設官案、匾額與人物場景。',
    see: ['官案', '中軸匾額', '人物模型'] },
  { id: 'side-offices', num: '04', name: '東西科房', minutes: 4, image: 'banners.jpg',
    summary: '大堂兩側的辦事房，展示清代官署編制、旗幟與文書運作。',
    see: ['清代旗幟', '文書陳設', '編制說明'] },
  { id: 'passage-hall', num: '05', name: '川堂', minutes: 3, image: 'walkway.jpg',
    summary: '連線大堂與內署的過渡空間，是四進院落之間的轉折點。',
    see: ['廊道結構', '木構樑架', '光影'] },
  { id: 'inner-office', num: '06', name: '內署', minutes: 4, image: 'courtyard2.jpg',
    summary: '總兵日常辦公與議事的半私密空間，較大堂更貼近生活。',
    see: ['辦公陳設', '內院', '樑柱'] },
  { id: 'residence',   num: '07', name: '內宅', minutes: 3, image: 'courtyard.jpg',
    summary: '官員及家眷的居住區，展現官署「前衙後宅」的格局。',
    see: ['起居陳設', '後進院落', '生活空間'] },
  { id: 'exhibits',    num: '08', name: '戰船與兵器展', minutes: 5, image: 'ship-models.jpg',
    summary: '展出清代水師戰船模型、官服與兵器，呼應金門海防的歷史定位。',
    see: ['戰船模型', '官服', '兵器'] },
  { id: 'kapok-tree',  num: '09', name: '後院木棉', minutes: 3, image: 'main-hall-tree.jpg',
    summary: '後院參天木棉，春季開花時是全署最上鏡的角落，也是參觀的收尾。',
    see: ['百年木棉', '花期紅花', '古木與大堂同框'] },
];

// 三條路線
export const routes = [
  { id: '20-minute', minutes: 20, name: '20 分鐘快速路線', badge: '趕時間',
    desc: '適合趕飛機、趕船或順路經過。',
    stops: ['頭門', '大堂', '戰船與兵器展', '後院木棉', '出口'] },
  { id: '45-minute', minutes: 45, name: '45 分鐘標準路線', badge: '推薦',
    desc: '預設推薦路線，完整走完四進院落。',
    stops: ['頭門', '前庭', '大堂', '東西科房', '川堂', '內署', '內宅', '戰船展', '後院木棉'] },
  { id: '90-minute', minutes: 90, name: '90 分鐘深度路線', badge: '深度',
    desc: '加入歷史與建築脈絡，適合歷史愛好者。',
    stops: ['許獬與叢青軒', '頭門與門額', '大堂與總兵官職', '科房與文書', '水師與海防', '內署內宅', '後院與後浦發展'] },
];

// 必看重點
export const highlights = [
  { name: '頭門與門額', image: 'main-gate.jpg', note: '磚紅門樓是全署的門面，最適合第一張定位照。' },
  { name: '前庭中軸線', image: 'front-courtyard.jpg', note: '一眼望穿的對稱軸線，清代官署的空間語言。' },
  { name: '大堂', image: 'main-hall-interior.jpg', note: '官案、匾額與人物場景還原總兵升堂議事。' },
  { name: '戰船與兵器', image: 'ship-models.jpg', note: '水師戰船模型呼應金門海防重鎮的身份。' },
  { name: '後院木棉', image: 'main-hall-tree.jpg', note: '參天古木，春季木棉花開時最上鏡。' },
];

// 交通
export const transport = [
  { id: 'jincheng-bus-station', from: '金城車站', dist: '步行約 195 米', minutes: '約 3 分鐘',
    desc: '金城車站是金門西半島公車樞紐，出站沿浯江街步行即可抵達，是最方便的到達方式。' },
  { id: 'kinmen-airport', from: '金門機場（尚義機場）', dist: '約 8 公里', minutes: '車程約 15–20 分鐘',
    desc: '搭乘 3 路公車往金城，或搭出租車直達金城市區；自駕亦可停金城公有停車場後步行。' },
  { id: 'shuitou-pier', from: '水頭碼頭', dist: '約 4 公里', minutes: '車程約 12–15 分鐘',
    desc: '小三通旅客的主要入口。搭 7 路公車往金城，或轉出租車。返程同樣從金城車站接駁回碼頭。' },
];

// 常見問題
export const faqs = [
  { q: '參觀清金門鎮總兵署需要多久？', a: '一般遊客建議安排 30–60 分鐘。趕時間可走 20 分鐘快速路線，歷史愛好者可安排 90 分鐘深度路線。' },
  { q: '門票多少錢？', a: '免費參觀，無需購票。' },
  { q: '開放時間是幾點？', a: '每日 09:00–22:00。開放時間可能因維修、天氣或活動臨時調整，出發前請再次確認。' },
  { q: '晚上可以進去嗎？', a: '可以，開放至 22:00，是金門少數開放到晚上的古蹟。每日 19:30 在署內現場報名後浦夜遊，可銜接夜間行程。' },
  { q: '適合帶小孩嗎？', a: '適合。院落平坦、動線短，戰船模型與人物場景對孩子較有吸引力，建議走 20–45 分鐘路線。' },
  { q: '適合長輩同行嗎？', a: '適合。全程以平地院落為主，動線不長，可放慢節奏走標準路線，中途庭院與廊道可休息。' },
  { q: '下雨天值得去嗎？', a: '值得。多數看點為室內廳堂與有頂廊道，雨天亦可參觀，反而人較少。' },
  { q: '可以拍照嗎？', a: '可以拍照。頭門、前庭中軸線與後院木棉是最上鏡的三個位置。請勿使用閃光燈觸碰文物與展品。' },
  { q: '地牢在哪裡？', a: '署內設有清代刑獄（地牢）展示區，位於院落一側，沿參觀動線指示牌即可找到。' },
  { q: '木棉花什麼時候開？', a: '後院木棉一般在春季（約 3–4 月）開花，花期時是全署最上鏡的角落。' },
  { q: '有廁所和無障礙設施嗎？', a: '署內設有公共廁所；主要庭院為平地，多數區域可無障礙通行，部分老建築門檻請留意。' },
  { q: '總兵署和模範街怎麼一起安排？', a: '兩地步行約幾分鐘即達。可先參觀總兵署，再步行經浯江書院、邱良功母節孝坊前往模範街，構成金城後浦半日遊。' },
];

// 交通類長尾問題（對應「金城車站到機場公車」「金門機場到金城車站公車」「金門電動車免駕照」等搜尋）
export const transportFaqs = [
  { q: '金城車站到總兵署要走多久？', a: '出站後步行約 195 米、3 分鐘以內。沿浯江街方向走，很快就能看到總兵署的磚紅門樓。' },
  { q: '金城車站到機場公車怎麼搭？', a: '在金城車站搭乘往尚義機場方向的公車（3 路），車程約 15–20 分鐘。趕飛機請另外加上候車、還車與報到時間。' },
  { q: '金門機場到金城車站公車幾號？要多久？', a: '從尚義機場搭 3 路公車往金城，車程約 15–20 分鐘；抵達金城車站後步行約 3 分鐘就是總兵署。班距依平假日與時段不同，出發前請查金門公車動態。' },
  { q: '水頭碼頭到金城車站怎麼走？', a: '搭 7 路公車往金城車站，車程約 12–15 分鐘，再步行約 3 分鐘到總兵署；也可在碼頭搭計程車直達金城市區。' },
  { q: '金門電動車免駕照嗎？', a: '只有「微型電動二輪車」免機車駕照，但仍須年滿 14 歲、完成實名登記與強制險、全程配戴合格安全帽、最高時速 25 公里且不得載人。一般電動機車與燃油機車仍需要相應駕照。' },
  { q: '可以騎車直接騎到總兵署門口嗎？', a: '建議不要。後浦老城區巷弄狹窄，請把車輛停在金城市區的合法車格或公有停車場，再步行進入。' },
  { q: '公車時刻表要去哪裡查？', a: '班次與時刻會因平假日、季節與臨時調整而變動，請以金門縣公車動態資訊的即時資料為準，本站不提供固定時刻表。' },
];

// 總兵署附近美食（後浦老城區，步行約 1–6 分鐘）
export const food = [
  {
    id: 'zhuanji', num: '01', name: '傳記廣東粥', tagline: '第一次來金門的早餐首選',
    recommend: '廣東粥 ＋ 油條', img: 'food-congee.jpg', illust: true,
    desc: '金門廣東粥不是廣東常見的米粒粥，而是把米熬到幾乎看不見米粒，再加入肉丸、蛋花等配料。適合先吃早餐，再等總兵署 09:00 開放。',
    hours: '週一至週六 06:00–12:30（週日休）', distance: '步行約 2–3 分鐘', address: '莒光路一段 50 號',
    goodFor: '第一次來金門 · 早餐 · 兩人以上', tip: '上午較熱門，太晚可能部分品項售完。', cash: true,
  },
  {
    id: 'keji', num: '02', name: '科記廣東粥', tagline: '時間更寬鬆的替代選擇',
    recommend: '廣東粥、油條', img: 'food-congee2.jpg', illust: true,
    desc: '同樣位於節孝坊與模範街周邊。營業到 13:00，比傳記晚半小時結束，也沒有固定週休，是行程不確定時更穩妥的選擇。',
    hours: '每天 06:00–13:00（無固定週休）', distance: '距總兵署約 120 米', address: '莒光路一段周邊',
    goodFor: '睡得較晚 · 週日到訪 · 求穩', tip: '傳記更熱門，科記營業時間更穩定；沒必要兩家都吃。', cash: true,
  },
  {
    id: 'heji', num: '03', name: '和記油條', tagline: '真正意義上的「總兵署旁邊」',
    recommend: '油條、雙胞胎', img: 'food-youtiao.jpg', illust: true,
    desc: '傳統視窗式小店，官方金門美食資料稱其為位於總兵署旁的百年老店，只賣油條和雙胞胎等簡單炸物。油條偏鬆軟，雙胞胎帶韌性與微甜。',
    hours: '早上營業，售完為止', distance: '總兵署旁', address: '菜市場路 43 號',
    goodFor: '快速吃一點 · 配廣東粥 · 老金城早餐', tip: '營業時段短且可能提早售完，建議早上前往並當天確認。', cash: true,
  },
  {
    id: 'yongkuan', num: '04', name: '永寬鹹粿店', tagline: '最有地方特色的小吃之一',
    recommend: '炸鹹粿 ＋ 自制辣醬', img: 'food-saltycake.jpg', illust: true,
    desc: '以在來米和芋頭製作，外皮炸得微酥，裡面比蘿蔔糕更軟、更綿密，保留傳統柴燒香氣；調味較淡，建議加一點店家辣醬。素食者也可食用。',
    hours: '05:30–10:30、14:30–17:30（每日）', distance: '距總兵署約 100 米', address: '莒光路一段 44 號',
    goodFor: '想吃臺灣本島少見的金門古早味', tip: '一人買小份，與廣東粥、蚵嗲組成小吃路線。', cash: true,
  },
  {
    id: 'odian', num: '05', name: '蚵嗲之家', tagline: '下午最值得排的一家',
    recommend: '蚵嗲、芝麻球', img: 'food-oyster.jpg', illust: true,
    desc: '位於邱良功母節孝坊下方，招牌蚵嗲以金門石蚵和蔬菜作餡，現炸後外酥內鮮。芝麻球有綠豆、花生、紅豆等口味。',
    hours: '週五至週三 14:30–19:00（週四休）', distance: '步行約 2–3 分鐘', address: '莒光路一段 59 號',
    goodFor: '下午參觀完總兵署後吃', tip: '現炸需等候，油感較重，建議兩人分食，再去喝豆花。', cash: true,
  },
  {
    id: 'douhua', num: '06', name: '阿公ㄟ手工豆花', tagline: '參觀後休息最佳選擇',
    recommend: '手工豆花、仙草奶凍、檸檬汁', img: 'food-douhua.jpg', illust: true,
    desc: '豆花口感偏綿密，配料當天製作；夏季有仙草冰和檸檬汁，天冷有熱豆花、燒仙草和紅豆湯。店內有空調與內用座位，適合夏天走完總兵署後休息。',
    hours: '週二至週日 10:30–20:00（週一休）', distance: '距總兵署約 95 米', address: '模範街 15 號',
    goodFor: '親子 · 長輩 · 炎熱下午 · 等夜遊', tip: '蚵嗲之家吃鹹食，再走到模範街吃豆花。', cash: true,
  },
  {
    id: 'yuchuan', num: '07', name: '雨川食堂', tagline: '想坐下來好好吃一餐',
    recommend: '高粱肉燥飯、一條根雞湯、乾貝辣拌麵', img: 'food-porkrice.jpg', illust: true,
    desc: '想要有座位、能完整吃午餐或晚餐，可選雨川。特色是把金門食材融入家常料理：肉燥飯用高粱米麩增香，一條根雞湯加枸杞與地瓜，口味溫和，也可預約。',
    hours: '午晚餐時段（時段易變動）', distance: '後浦老城區內', address: '後浦老城區',
    goodFor: '家庭 · 長輩同行 · 正餐 · 夜遊前', tip: '營業時段容易變動，建議當天查詢或預約。', cash: false,
  },
];

export const foodByTime = [
  ['06:00–09:00', '傳記廣東粥或科記廣東粥 ＋ 和記油條'],
  ['09:00–10:30', '永寬鹹粿 ＋ 總兵署參觀'],
  ['11:00–13:00', '科記廣東粥，或雨川食堂吃正餐'],
  ['14:30–17:30', '蚵嗲之家 ＋ 永寬鹹粿'],
  ['15:00–19:00', '蚵嗲之家 ＋ 阿公ㄟ豆花'],
  ['晚餐時段', '雨川食堂，之後銜接後浦夜遊'],
];

export const foodCombos = [
  { title: '第一次來金門', route: '傳記廣東粥 → 清金門鎮總兵署 → 模範街 → 阿公ㄟ豆花', note: '適合上午安排，景點與飲食都能覆蓋。' },
  { title: '下午小吃路線', route: '總兵署 → 永寬鹹粿 → 蚵嗲之家 → 節孝坊 → 阿公ㄟ豆花 → 模範街', note: '全程步行即可，建議兩人共享，避免一下吃得太飽。' },
  { title: '夜遊前路線', route: '17:00 參觀總兵署 → 雨川食堂晚餐 → 19:20 回到總兵署附近集合', note: '把總兵署、晚餐和後浦夜間導覽安排在同一區域。' },
];

export const foodTopThree = [
  { label: '早餐', name: '傳記廣東粥' },
  { label: '下午小吃', name: '蚵嗲之家' },
  { label: '甜品休息', name: '阿公ㄟ手工豆花' },
];

// 照片版權（來自維基共享資源，須署名）
export const photoCredits = [
  { file: 'hero-exterior.jpg', title: '總兵署外觀', author: 'P95521708', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Military_Headquarters_of_Qing_Dynasty_DSC_3289.jpg' },
  { file: 'main-gate.jpg', title: '頭門', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Qing_Military_Governor_Office_-_main_gate_-_DSCF9418.JPG' },
  { file: 'plaque.jpg', title: '門額匾', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Qing_Military_Governor_Office_-_plaque_-_DSCF9419.JPG' },
  { file: 'courtyard.jpg', title: '中庭', author: '寺人孟子', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E6%B8%85%E9%87%91%E9%96%80%E9%8E%AE%E7%B8%BD%E5%85%B5%E7%BD%B2%E4%B8%AD%E5%BA%AD.jpg' },
  { file: 'front-courtyard.jpg', title: '前庭', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Qing_Military_Governor_Office_-_main_courtyard_-_DSCF9421.JPG' },
  { file: 'main-hall-interior.jpg', title: '大堂內部', author: '寺人孟子', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E6%B8%85%E9%87%91%E9%96%80%E9%8E%AE%E7%B8%BD%E5%85%B5%E7%BD%B2%E5%A4%A7%E5%A0%82%E5%85%A7%E9%83%A8.jpg' },
  { file: 'main-hall-tree.jpg', title: '參天古木與大堂', author: 'Tim8016', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E5%8F%83%E5%A4%A9%E5%8F%A4%E6%9C%A8%E8%88%87%E6%B8%85%E9%87%91%E9%96%80%E9%8E%AE%E7%B8%BD%E5%85%B5%E7%BD%B2%E5%A4%A7%E5%A0%82.jpg' },
  { file: 'ship-models.jpg', title: '戰船模型', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Qing_Military_Governor_Office_-_ship_models_-_DSCF9429.JPG' },
  { file: 'banners.jpg', title: '清代旗幟與科房', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Qing_Military_Governor_Office_-_Qing_banners_-_DSCF9426.JPG' },
  { file: 'walkway.jpg', title: '廊道', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Qing_Military_Governor_Office_-_a_walkway_-_DSCF9424.JPG' },
  { file: 'courtyard2.jpg', title: '內院', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_Qing_Military_Governor_Office_-_courtyard_-_DSCF9430.JPG' },
  { file: 'historic.jpg', title: '古蹟外觀', author: '張雅倫', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E6%B8%85%E9%87%91%E9%96%80%E9%8E%AE%E7%B8%BD%E5%85%B5%E7%BD%B2%E5%8F%A4%E8%B9%9F.jpg' },
  { file: 'exterior2.jpg', title: '總兵署外觀（二）', author: '寺人孟子', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E6%B8%85%E9%87%91%E9%96%80%E9%8E%AE%E7%B8%BD%E5%85%B5%E7%BD%B2(2).jpg' },
  { file: 'exterior-day.jpg', title: '白天外觀', author: 'tomscoffin', license: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:2012-06-05_Kinmen_Military_Headquarters_of_Qing_Dynasty.jpg' },
  { file: 'food-street.jpg', title: '金門模範街', author: '林高志', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E9%87%91%E9%96%80%E6%A8%A1%E7%AF%84%E8%A1%97.jpg' },
  { file: 'model-street.jpg', title: '模範街街景', author: 'Shoestring', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Mo_fan_Street,_Kinmen,_Taiwan.JPG' },
  { file: 'food-congee.jpg', title: '廣東粥（示意）', author: 'Shoestring', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Cantonese_rice_porridge.JPG' },
  { file: 'food-youtiao.jpg', title: '油條（示意）', author: 'Popo le Chien', license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Youtiao.jpg' },
  { file: 'food-oyster.jpg', title: '蚵嗲（示意）', author: 'Rick888chen', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E8%9A%B5%E5%97%B2_oyster_fritter.jpg' },
  { file: 'food-douhua.jpg', title: '豆花（示意）', author: 'Hiroooooo', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Douhua(%E8%B1%86%E8%8A%B1).jpg' },
  { file: 'spot-arch.jpg', title: '邱良功母節孝坊', author: 'Jennifer25172466', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E9%87%91%E9%96%80%E9%82%B1%E8%89%AF%E5%8A%9F%E6%AF%8D%E7%AF%80%E5%AD%9D%E5%9D%8A.jpg' },
  { file: 'spot-kuige.jpg', title: '奎閣', author: 'riNux', license: 'CC BY-SA 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E9%87%91%E9%96%80%E5%A5%8E%E9%96%A3.jpg' },
  { file: 'spot-general.jpg', title: '將軍第', author: 'Allervous', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:%E9%87%91%E9%96%80%E5%B0%87%E8%BB%8D%E7%AC%AC.jpg' },
  { file: 'spot-academy.jpg', title: '浯江書院內朱子祠', author: 'Vmenkov', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kinmen_-_Zhu_Zi_Ci_-_DSCF9438.JPG' },
  { file: 'spot-city-god-temple.jpg', title: '浯島城隍廟', author: '總統府', license: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:06.15_%E7%B8%BD%E7%B5%B1%E5%8F%83%E6%8B%9C%E3%80%8C%E6%B5%AF%E5%B3%B6%E5%9F%8E%E9%9A%8D%E5%BB%9F%E3%80%8D_(48071745601).jpg' },
];
