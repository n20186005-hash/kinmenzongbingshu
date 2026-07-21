import type { Locale } from './config';

export type TranslatedLocale = Exclude<Locale, 'zh-Hant-TW'>;

const shared = {
  hours: '09:00–22:00',
  admission: 'Free',
  addressHans: '金门县金城镇浯江街53号',
  addressEn: 'No. 53, Wujiang Street, Jincheng Township, Kinmen County, Taiwan',
};

export const localizedContent = {
  'zh-Hans': {
    attractionName: '清金门镇总兵署',
    home: {
      eyebrow: 'Kinmen Zong Bing Shu',
      title: '清金门镇总兵署游客指南',
      intro: '开放时间、门票、参观地图与后浦夜游安排。免费参观，普通游客建议安排 30–60 分钟。',
      start: '开始参观',
      chooseRoute: '选择游览时长',
      openMap: '打开地图',
      factsTitle: '到访前先知道',
      routesTitle: '你有多少时间？',
      highlightsTitle: '五个不可错过的看点',
      nightTitle: '晚上接上后浦夜游',
      nightText: '每天 19:30 在总兵署现场报名，免费解说，路线最终抵达模范街。',
    },
    facts: [
      ['开放时间', shared.hours], ['门票', '免费'], ['建议停留', '30–60 分钟'],
      ['最近交通', '金城站步行约 3 分钟'], ['夜间导览', '19:30 现场报名'],
    ],
    rooms: [
      { id: 'main-gate', num: '01', name: '头门', minutes: 3, image: 'main-gate.jpg', summary: '总兵署正面门楼，是参观起点与第一处定位地标。', see: ['门楼轮廓', '门额', '砖红外墙'] },
      { id: 'front-courtyard', num: '02', name: '前庭', minutes: 3, image: 'front-courtyard.jpg', summary: '开阔而对称的中轴庭院，体现清代官署的空间秩序。', see: ['中轴线', '两侧回廊', '石埕'] },
      { id: 'main-hall', num: '03', name: '大堂', minutes: 5, image: 'main-hall-interior.jpg', summary: '总兵处理公开军政事务的核心空间。', see: ['官案', '匾额', '人物模型'] },
      { id: 'side-offices', num: '04', name: '东西科房', minutes: 4, image: 'banners.jpg', summary: '大堂两侧的办事房，展示官署编制与文书运作。', see: ['旗帜', '文书陈设', '编制说明'] },
      { id: 'passage-hall', num: '05', name: '川堂', minutes: 3, image: 'walkway.jpg', summary: '连接大堂与内署的过渡空间。', see: ['廊道', '木构梁架', '院落光影'] },
      { id: 'inner-office', num: '06', name: '内署', minutes: 4, image: 'courtyard2.jpg', summary: '总兵日常办公与议事的半私密空间。', see: ['办公陈设', '内院', '梁柱'] },
      { id: 'residence', num: '07', name: '内宅', minutes: 3, image: 'courtyard.jpg', summary: '官员及家眷的居住区，体现前衙后宅格局。', see: ['起居陈设', '后进院落', '生活空间'] },
      { id: 'exhibits', num: '08', name: '战船与兵器展', minutes: 5, image: 'ship-models.jpg', summary: '以战船模型、官服和兵器说明金门海防历史。', see: ['战船模型', '官服', '兵器'] },
      { id: 'kapok-tree', num: '09', name: '后院木棉', minutes: 3, image: 'main-hall-tree.jpg', summary: '后院古木是参观收尾，也是春季最上镜的位置。', see: ['古木', '春季花期', '庭院视角'] },
    ],
    routes: [
      { id: '20-minute', minutes: 20, name: '20 分钟快速路线', badge: '赶时间', desc: '适合赶飞机、赶船或顺路经过。', stopIds: ['main-gate', 'main-hall', 'exhibits', 'kapok-tree'] },
      { id: '45-minute', minutes: 45, name: '45 分钟标准路线', badge: '推荐', desc: '完整走过主要院落与展厅，第一次来建议选这条。', stopIds: ['main-gate', 'front-courtyard', 'main-hall', 'side-offices', 'passage-hall', 'inner-office', 'residence', 'exhibits', 'kapok-tree'] },
      { id: '90-minute', minutes: 90, name: '90 分钟深度路线', badge: '深度', desc: '加入丛青轩、总兵制度、海防与后浦发展。', stopIds: ['main-gate', 'front-courtyard', 'main-hall', 'side-offices', 'passage-hall', 'inner-office', 'residence', 'exhibits', 'kapok-tree'] },
    ],
    highlights: [
      ['头门与门额', 'main-gate.jpg', '先看门楼、门额与建筑正立面。'],
      ['前庭中轴线', 'front-courtyard.jpg', '从中轴观察官署四进院落的秩序。'],
      ['大堂', 'main-hall-interior.jpg', '官案与人物场景说明总兵公开议事功能。'],
      ['战船与兵器', 'ship-models.jpg', '了解金门作为海防重镇的历史。'],
      ['后院木棉', 'main-hall-tree.jpg', '春季花期尤其值得停留拍照。'],
    ],
    visit: {
      title: '开放时间、门票与参观路线',
      intro: '总兵署免费开放，位于金城后浦核心区。按你拥有的时间选择快速、标准或深度路线。',
      basic: '基本信息',
      today: '参观建议',
      tips: ['上午先参观总兵署，再步行前往市场与模范街。', '正午可利用室内厅堂与廊道避开日晒。', '傍晚参观后用餐，再回到总兵署参加 19:30 后浦夜游。'],
    },
    map: { title: '互动室内地图', intro: '选择点位，查看空间用途、建议停留时间与重点。', where: '我现在在哪里？', all: '全部点位', select: '选择一个点位', next: '下一站', minutes: '建议停留约' },
    highlightsPage: { title: '五个不可错过的看点', intro: '时间有限时，至少看完这五处。' },
    night: { title: '后浦夜游怎么参加', intro: '每天 19:30 从总兵署附近出发，现场报名、免费参加。', register: '参加方式', details: [['集合时间', '19:30 前抵达'], ['报名方式', '总兵署现场报名'], ['费用', '免费'], ['终点', '模范街']], reminder: '活动可能因天气、节庆或临时安排调整，出发前请查看官方公告。' },
    transport: { title: '从水头码头前往总兵署', intro: '水头码头距离金城市区约 4 公里，车程通常约 12–15 分钟。', options: [['出租车', '最直接，适合携带行李或多人同行。'], ['公车', '搭往金城方向的公车，在金城站下车后步行约 3 分钟。'], ['机车或汽车', '导航至金城市区停车场，再步行进入后浦老城。']], returnTitle: '返程提醒', returnText: '赶船时请预留候船与通关时间，不要只按地图车程倒推。' },
    faqTitle: '游客常见问题',
    faqs: [
      ['参观需要多久？', '一般建议 30–60 分钟；赶时间可走 20 分钟路线。'],
      ['需要门票吗？', '不需要，免费参观。'],
      ['开放时间是几点？', '目前公开时间为每天 09:00–22:00，临时调整以官方公告为准。'],
      ['晚上可以参观吗？', '可以，开放至 22:00，并可衔接 19:30 后浦夜游。'],
      ['适合小孩和长辈吗？', '主要动线较短且多为平地，但老建筑门槛仍需留意。'],
      ['下雨天值得去吗？', '多数看点位于厅堂与有顶廊道，适合安排为雨天景点。'],
      ['可以拍照吗？', '一般参观区域可以拍照，请遵守现场告示并避免触碰展品。'],
      ['怎么去模范街？', '从总兵署步行数分钟即可抵达，可与节孝坊和浯江书院一起安排。'],
    ],
  },
  en: {
    attractionName: 'Kinmen Military Headquarters of the Qing Dynasty',
    home: {
      eyebrow: 'Independent Visitor Guide',
      title: 'Kinmen Military Headquarters Visitor Guide',
      intro: 'Opening hours, free admission, an indoor map, timed routes and practical advice for joining the Houpu evening walk.',
      start: 'Start your visit',
      chooseRoute: 'Choose a timed route',
      openMap: 'Open the indoor map',
      factsTitle: 'Plan before you arrive',
      routesTitle: 'How much time do you have?',
      highlightsTitle: 'Five things not to miss',
      nightTitle: 'Continue with the Houpu evening walk',
      nightText: 'Register on site at 19:30. The free guided walk starts near the headquarters and ends at Mofan Street.',
    },
    facts: [
      ['Opening hours', shared.hours], ['Admission', shared.admission], ['Suggested visit', '30–60 minutes'],
      ['Nearest transport', '3-minute walk from Jincheng Bus Station'], ['Evening walk', 'Register at 19:30'],
    ],
    rooms: [
      { id: 'main-gate', num: '01', name: 'Main Gate', minutes: 3, image: 'main-gate.jpg', summary: 'The front gate and the clearest landmark for starting your visit.', see: ['Gate façade', 'Name plaque', 'Brick-red walls'] },
      { id: 'front-courtyard', num: '02', name: 'Front Courtyard', minutes: 3, image: 'front-courtyard.jpg', summary: 'A symmetrical courtyard that reveals the central axis of the compound.', see: ['Central axis', 'Side corridors', 'Stone paving'] },
      { id: 'main-hall', num: '03', name: 'Main Hall', minutes: 5, image: 'main-hall-interior.jpg', summary: 'The principal space for public military and administrative affairs.', see: ['Official desk', 'Plaques', 'Figure display'] },
      { id: 'side-offices', num: '04', name: 'Side Offices', minutes: 4, image: 'banners.jpg', summary: 'Working rooms that explain staffing, documents and administration.', see: ['Banners', 'Document displays', 'Office organisation'] },
      { id: 'passage-hall', num: '05', name: 'Passage Hall', minutes: 3, image: 'walkway.jpg', summary: 'The transition between the public main hall and the inner offices.', see: ['Covered passage', 'Timber frame', 'Courtyard views'] },
      { id: 'inner-office', num: '06', name: 'Inner Office', minutes: 4, image: 'courtyard2.jpg', summary: 'A more private space for daily work and meetings.', see: ['Office display', 'Inner court', 'Timber columns'] },
      { id: 'residence', num: '07', name: 'Residence', minutes: 3, image: 'courtyard.jpg', summary: 'Living quarters illustrating the front-office, rear-residence layout.', see: ['Domestic display', 'Rear courtyard', 'Living spaces'] },
      { id: 'exhibits', num: '08', name: 'Warship and Weapons Gallery', minutes: 5, image: 'ship-models.jpg', summary: 'Models, uniforms and weapons introduce Kinmen’s maritime defence history.', see: ['Warship models', 'Official dress', 'Weapons'] },
      { id: 'kapok-tree', num: '09', name: 'Kapok Tree', minutes: 3, image: 'main-hall-tree.jpg', summary: 'The old tree in the rear courtyard is a memorable final stop.', see: ['Old tree', 'Spring blossom', 'Courtyard view'] },
    ],
    routes: [
      { id: '20-minute', minutes: 20, name: '20-minute express route', badge: 'Quick', desc: 'For a short stop before a flight or ferry.', stopIds: ['main-gate', 'main-hall', 'exhibits', 'kapok-tree'] },
      { id: '45-minute', minutes: 45, name: '45-minute standard route', badge: 'Recommended', desc: 'The best first-visit route through the main courtyards and galleries.', stopIds: ['main-gate', 'front-courtyard', 'main-hall', 'side-offices', 'passage-hall', 'inner-office', 'residence', 'exhibits', 'kapok-tree'] },
      { id: '90-minute', minutes: 90, name: '90-minute in-depth route', badge: 'In depth', desc: 'Adds the site’s Ming origins, military administration and coastal defence.', stopIds: ['main-gate', 'front-courtyard', 'main-hall', 'side-offices', 'passage-hall', 'inner-office', 'residence', 'exhibits', 'kapok-tree'] },
    ],
    highlights: [
      ['Main Gate and plaque', 'main-gate.jpg', 'Begin with the façade, plaque and brick-red entrance.'],
      ['Central courtyard axis', 'front-courtyard.jpg', 'Use the main axis to understand the compound’s ordered layout.'],
      ['Main Hall', 'main-hall-interior.jpg', 'The official desk and figures evoke public administrative work.'],
      ['Warships and weapons', 'ship-models.jpg', 'A concise introduction to Kinmen’s maritime defence role.'],
      ['Rear kapok tree', 'main-hall-tree.jpg', 'A photogenic final stop, especially during spring blossom.'],
    ],
    visit: {
      title: 'Opening hours, admission and visit routes',
      intro: 'Admission is free. Choose an express, standard or in-depth route according to the time you have.',
      basic: 'Essential information',
      today: 'When to visit',
      tips: ['Visit in the morning, then continue to the market and Mofan Street.', 'The halls and covered corridors provide useful shelter around midday.', 'Visit in late afternoon, have dinner nearby and return for the 19:30 evening walk.'],
    },
    map: { title: 'Interactive indoor map', intro: 'Select a stop to see its purpose, suggested time and main details.', where: 'Where am I?', all: 'All stops', select: 'Select a stop', next: 'Next stop', minutes: 'Suggested time' },
    highlightsPage: { title: 'Five things not to miss', intro: 'If time is limited, prioritise these five features.' },
    night: { title: 'How to join the Houpu evening walk', intro: 'A free guided walk normally leaves from near the headquarters at 19:30. Register on site.', register: 'How it works', details: [['Meeting time', 'Arrive before 19:30'], ['Registration', 'Register on site'], ['Cost', 'Free'], ['End point', 'Mofan Street']], reminder: 'The walk may change because of weather, festivals or temporary arrangements. Check current official notices before setting out.' },
    transport: { title: 'From Shuitou Pier to the headquarters', intro: 'Shuitou Pier is about 4 km from central Jincheng. The drive commonly takes around 12–15 minutes.', options: [['Taxi', 'The simplest choice with luggage or for a small group.'], ['Public bus', 'Take a Jincheng-bound bus, get off at Jincheng Bus Station and walk about three minutes.'], ['Scooter or car', 'Navigate to a public car park in Jincheng, then enter the old town on foot.']], returnTitle: 'Returning to the pier', returnText: 'Allow extra time for the ferry terminal and immigration procedures; do not work backwards from driving time alone.' },
    faqTitle: 'Frequently asked questions',
    faqs: [
      ['How long does a visit take?', 'Most visitors need 30–60 minutes. Use the 20-minute route if you are short on time.'],
      ['Is there an admission fee?', 'No. Admission is free.'],
      ['What are the opening hours?', 'The published hours are 09:00–22:00 daily. Temporary changes may apply.'],
      ['Can I visit in the evening?', 'Yes. The site is normally open until 22:00 and can be combined with the 19:30 Houpu walk.'],
      ['Is it suitable for children and older visitors?', 'The route is compact and largely level, although historic thresholds require care.'],
      ['Is it worth visiting when it rains?', 'Many displays are inside halls or along covered corridors, making it a practical rainy-day stop.'],
      ['May I take photographs?', 'Photography is generally allowed in visitor areas. Follow on-site signs and do not touch exhibits.'],
      ['How do I reach Mofan Street?', 'It is only a few minutes away on foot and combines easily with the memorial arch and Wujiang Academy.'],
    ],
  },
} as const;

export function getLocalizedContent(locale: TranslatedLocale) {
  return localizedContent[locale];
}
