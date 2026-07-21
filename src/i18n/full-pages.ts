import type { TranslatedLocale } from './content';

export interface LocalizedSection {
  title: string;
  text: string;
  bullets?: string[];
}

export interface LocalizedFullPage {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  image?: string;
  facts?: [string, string][];
  sections: LocalizedSection[];
  links?: [string, string][];
}

const zhHans: LocalizedFullPage[] = [
  {
    path: '/about/', title: '关于我们', eyebrow: '关于本站',
    description: '了解金门总兵署游客指南的编辑原则、独立性与信息核实方式。',
    intro: '这是一个帮助游客安排行程和理解现场的独立指南，不是政府或景点管理单位的官方网站。',
    sections: [
      { title: '我们提供什么', text: '内容围绕到访前决策、现场参观和后浦周边顺游整理，尽量把开放时间、交通、路线与历史背景放在同一套清晰结构中。' },
      { title: '我们不是官方网站', text: '本站与金门县政府、景点管理单位和官方观光机构无隶属关系。临时闭馆、活动和交通变化应以现场或官方最新公告为准。' },
      { title: '如何保证可信', text: '优先使用政府及景点官方资料，并记录核实日期；实地经验与编辑建议会明确和官方事实区分。', bullets: ['开放时间和票价优先采用官方来源', '路线时长属于游客规划建议', '发现错误后记录修正'] },
    ],
    links: [['查看资料来源', '/sources/'], ['回报错误', '/corrections/']],
  },
  {
    path: '/corrections/', title: '纠错与修正', eyebrow: '纠错',
    description: '回报金门总兵署游客指南中的错误，并查看本站的信息修正原则。',
    intro: '如果开放时间、交通、现场设施或文字说明已经变化，请把具体页面和正确信息告诉我们。',
    sections: [
      { title: '如何回报', text: '请提供出错页面、需要修改的内容、你看到信息的日期，以及可核实的官方链接或现场照片。资料越具体，越容易快速复核。' },
      { title: '我们如何处理', text: '编辑会先与官方资料或多个可靠来源交叉核实，再更新页面与核实日期。无法确认的内容会保留提醒，而不会直接写成确定事实。' },
      { title: '修正记录', text: '重大变更会说明调整原因；单纯错字、标点和不影响事实的表达优化不单独列出。' },
    ],
    links: [['查看核实方式', '/sources/'], ['了解本站', '/about/']],
  },
  {
    path: '/credits/', title: '照片来源与授权', eyebrow: '照片版权',
    description: '本站景点照片的来源、作者署名与 Creative Commons 授权说明。',
    intro: '本站使用自有图片及依授权可再利用的景点照片；版权仍属于各自作者。',
    sections: [
      { title: '授权原则', text: '来自 Wikimedia Commons 的图片依各文件页标示的 CC BY 或 CC BY-SA 条款使用，并保留作者、来源和授权信息。' },
      { title: '图片处理', text: '为了网页加载速度，图片可能裁切、缩放或转换为 WebP，但不会改变照片所表达的景点事实。' },
      { title: '权利人联系', text: '若署名、授权版本或来源链接有误，请通过纠错页提供文件信息，我们会优先处理。' },
    ],
    links: [['回报版权问题', '/corrections/'], ['查看资料来源', '/sources/']],
  },
  {
    path: '/history/', title: '从丛青轩到海防中枢', eyebrow: '历史沿革', image: 'historic.jpg',
    description: '清金门镇总兵署的历史：从明代许獬故宅，到清代海防军政中心及今天的文化展示空间。',
    intro: '这座建筑先是明代文人的宅园，1682 年改建为官署，之后长期见证金门的海防与地方治理。',
    facts: [['明代', '许獬故宅“丛青轩”'], ['1682 年', '总兵陈龙改建官署'], ['清代', '金门海防军政中心'], ['今天', '历史建筑与文化展示空间']],
    sections: [
      { title: '明代：丛青轩', text: '这里原为明代金门文人许獬的故宅。宅园名“丛青轩”，为后来官署选址留下了历史基础。' },
      { title: '1682 年：改建总兵署', text: '清康熙二十一年，总兵陈龙把原址改建为官署，形成前衙后宅、沿中轴展开的院落格局。' },
      { title: '清代：海防与治理', text: '总兵负责一地军事防务。金门位于海峡要冲，总兵署既处理军政，也与后浦城镇、市场和信仰空间的发展密切相关。' },
      { title: '近现代：保存与展示', text: '官署功能结束后，建筑经过修复并作为文化空间开放。今天可从厅堂、科房、内宅与战船展理解过去的制度和生活。' },
    ],
    links: [['查看内部空间', '/inside/'], ['选择参观路线', '/visit/#routes']],
  },
  {
    path: '/inside/', title: '总兵署里面有什么', eyebrow: '内部空间', image: 'main-hall-interior.jpg',
    description: '逐一认识清金门镇总兵署的头门、前庭、大堂、科房、内署、内宅、战船展与后院木棉。',
    intro: '参观动线沿中轴由公共办公区走向较私密的内署和内宅，最后到战船展与后院。',
    sections: [
      { title: '01 头门与前庭', text: '从砖红门楼进入后，可沿前庭中轴观察左右回廊和官署对称布局。', bullets: ['门额与门楼轮廓', '石埕中轴线', '两侧回廊'] },
      { title: '02 大堂与东西科房', text: '大堂是公开处理军政事务的核心，两侧科房展示人员编制、旗帜和文书运作。', bullets: ['官案与匾额', '人物场景', '文书与旗帜'] },
      { title: '03 川堂、内署与内宅', text: '穿过川堂后，空间从公开办公逐渐转为日常议事和居住区域，可理解“前衙后宅”的格局。' },
      { title: '04 战船展与后院木棉', text: '战船模型、官服与兵器回应金门海防历史；后院古木则是路线最自然的收尾。' },
    ],
    links: [['打开室内地图', '/map/'], ['查看必看重点', '/highlights/']],
  },
  {
    path: '/nearby/', title: '总兵署附近还能去哪', eyebrow: '周边顺游', image: 'model-street.jpg',
    description: '金门总兵署附近景点与步行路线，包括节孝坊、将军第、浯江书院、奎阁、城隍庙和模范街。',
    intro: '后浦核心景点集中，参观总兵署后不用开车，步行就能继续安排半小时到两小时。',
    facts: [['30 分钟', '节孝坊＋模范街'], ['60 分钟', '加入将军第或浯江书院'], ['约 2 小时', '完成后浦老街深度路线']],
    sections: [
      { title: '邱良功母节孝坊', text: '1812 年建成的国定古迹，以层次丰富的石雕成为后浦最醒目的地标之一。' },
      { title: '将军第', text: '清末武将卢成金的三落闽南官宅，藏在总兵署附近巷弄中。' },
      { title: '浯江书院与奎阁', text: '两处都体现后浦崇文传统，可结合朱子祠、碑刻与魁星信仰一起理解。' },
      { title: '城隍庙与模范街', text: '一处连接地方信仰与设治历史，一处以红砖街屋和连续拱廊呈现近代街区风貌。' },
    ],
    links: [['后浦两小时路线', '/nearby/houpu-old-street/'], ['附近美食', '/nearby/food/'], ['模范街指南', '/nearby/model-street/']],
  },
  {
    path: '/nearby/memorial-arch/', title: '邱良功母节孝坊', eyebrow: '附近景点', image: 'spot-arch.jpg',
    description: '邱良功母节孝坊参观指南：历史、石雕看点及从金门总兵署步行前往的信息。',
    intro: '这座 1812 年石牌坊距离总兵署约 90 米，是后浦街区最容易辨认的国定古迹。',
    facts: [['距离', '约 90 米'], ['步行', '约 2 分钟'], ['建议停留', '10–15 分钟'], ['类别', '国定古迹']],
    sections: [
      { title: '为什么建造', text: '牌坊为表彰金门籍将领邱良功之母许氏守节教子而建，反映清代旌表制度与地方社会价值。' },
      { title: '现场看点', text: '以泉州花岗石和青斗石构成四柱三间，梁枋、雀替和基座可见人物、花鸟及瑞兽雕刻。' },
      { title: '到访提示', text: '傍晚可同时拍到牌坊灯光和街景；建筑位于道路与店铺之间，取景时注意车辆。' },
    ], links: [['返回附近景点', '/nearby/'], ['继续到模范街', '/nearby/model-street/']],
  },
  {
    path: '/nearby/general-residence/', title: '将军第', eyebrow: '附近景点', image: 'spot-general.jpg',
    description: '金门将军第参观指南：清末官宅历史、三落大厝看点及步行信息。',
    intro: '清末温州总兵卢成金的府第，距离总兵署约 80 米，是一座内敛的三落闽南官宅。',
    facts: [['距离', '约 80 米'], ['步行', '约 2 分钟'], ['建议停留', '10–20 分钟'], ['类别', '县定古迹']],
    sections: [
      { title: '官宅历史', text: '宅第约建于清光绪年间，以三落大厝带护龙的布局呈现主人身份和传统家族生活。' },
      { title: '现场看点', text: '留意“将军第”门额、双喜砖雕、木雕插角、泥塑和彩绘，以及由前落逐层深入正厅的中轴。' },
      { title: '到访提示', text: '入口在珠浦北路巷内，内部开放状况可能调整，请以现场公告为准。' },
    ], links: [['返回附近景点', '/nearby/'], ['后浦深度路线', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/wujiang-academy/', title: '浯江书院', eyebrow: '附近景点', image: 'spot-academy.jpg',
    description: '浯江书院与朱子祠参观指南：历史、建筑、碑刻与步行信息。',
    intro: '清乾隆年间创设的重要书院，院内朱子祠保存金门崇文重教的历史线索。',
    facts: [['步行', '约 4–5 分钟'], ['建议停留', '15–25 分钟'], ['重点', '朱子祠、讲堂与碑刻']],
    sections: [
      { title: '书院历史', text: '浯江书院是金门重要传统教育空间；朱子祠纪念曾影响金门文风的朱熹。' },
      { title: '现场看点', text: '可看闽南红砖祠宇、讲堂与学舍布局，以及与书院经费和教育相关的碑刻。' },
      { title: '到访提示', text: '院区适合安静参观。上午光线柔和，红砖院落较容易拍摄。' },
    ], links: [['返回附近景点', '/nearby/'], ['继续到奎阁', '/nearby/kuige/']],
  },
  {
    path: '/nearby/kuige/', title: '奎阁（魁星楼）', eyebrow: '附近景点', image: 'spot-kuige.jpg',
    description: '金门奎阁参观指南：魁星信仰、六角双层楼阁与拍照建议。',
    intro: '建于清道光年间的六角楼阁，寄托后浦士子祈求文运与科举登第的愿望。',
    facts: [['步行', '约 4–6 分钟'], ['建议停留', '10–15 分钟'], ['类别', '县定古迹']],
    sections: [
      { title: '建筑与信仰', text: '奎阁始建于 1836 年，楼内奉祀魁星；六角平面、上下双层和翘起屋脊形成独特轮廓。' },
      { title: '怎么观看', text: '绕建筑一周观察不同角度，仰看燕尾、卷草和红瓦层次，直幅构图最容易拍完整。' },
      { title: '顺游安排', text: '可与浯江书院、邱良功母节孝坊和模范街串成一条步行路线。' },
    ], links: [['返回附近景点', '/nearby/'], ['后浦深度路线', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/city-god-temple/', title: '浯岛城隍庙', eyebrow: '附近景点', image: 'spot-city-god-temple.jpg',
    description: '浯岛城隍庙参观指南：后浦设治历史、迎城隍民俗与庙宇看点。',
    intro: '总兵署迁治后浦后兴盛的地方信仰中心，也是理解官署、街市与民间社会关系的重要一站。',
    facts: [['步行', '约 5–7 分钟'], ['建议停留', '15–25 分钟'], ['重点活动', '农历四月十二迎城隍']],
    sections: [
      { title: '设治与信仰', text: '1680 年总兵署迁治后浦，城隍信仰也从金门城分灵至此，逐渐成为街区信仰中心。' },
      { title: '现场看点', text: '从庙埕观察龙柱、石雕、彩绘和层叠斗拱；农历四月十二遶境是金门重要民俗。' },
      { title: '参拜礼仪', text: '进入庙内请放低音量，拍摄神像、信众或仪式前先询问庙方。' },
    ], links: [['返回附近景点', '/nearby/'], ['后浦深度路线', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/model-street/', title: '模范街', eyebrow: '附近景点', image: 'model-street.jpg',
    description: '金门模范街参观指南：红砖连廊式老街、拍照建议及从总兵署步行路线。',
    intro: '后浦最具代表性的红砖连廊街区，从总兵署步行几分钟即可抵达。',
    facts: [['步行', '约 3–5 分钟'], ['建议停留', '20–40 分钟'], ['特色', '红砖街屋与连续拱廊']],
    sections: [
      { title: '模范街是什么', text: '街区在近代规划中形成整齐立面，结合闽南红砖、西式拱廊和商业店屋功能。' },
      { title: '重点看什么', text: '留意连续拱券、二层女儿墙、砖砌细节，以及街屋尺度如何形成一致的步行空间。' },
      { title: '拍照建议', text: '清晨人少，傍晚光线温暖；拍摄店面和行人时请尊重隐私并避免阻挡通道。' },
    ], links: [['返回附近景点', '/nearby/'], ['后浦深度路线', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/food/', title: '总兵署附近吃什么', eyebrow: '附近美食', image: 'food-street.jpg',
    description: '金门总兵署附近美食：广东粥、油条、咸粿、蚵嗲、豆花与正餐安排。',
    intro: '后浦老城区步行范围内，从早餐到下午小吃和晚餐都能解决，可直接接在参观路线前后。',
    facts: [['早餐', '广东粥＋油条'], ['下午', '咸粿＋蚵嗲'], ['甜品', '手工豆花'], ['正餐', '金门风味家常菜']],
    sections: [
      { title: '早餐：传记或科记广东粥', text: '金门广东粥把米熬到几乎看不见米粒，再加肉丸和蛋花。传记较热门，科记营业时间通常更宽松。' },
      { title: '顺路小吃：和记油条与永宽咸粿', text: '和记就在总兵署旁，适合配粥；永宽咸粿以在来米和芋头制作，可少量分食。' },
      { title: '下午：蚵嗲之家', text: '以金门石蚵和蔬菜作馅，现炸外酥内鲜。热门时段需要等候，建议两人分食。' },
      { title: '休息：阿公手工豆花', text: '位于模范街，有内用座位，适合炎热下午、亲子或长辈同行。' },
      { title: '正餐：雨川食堂', text: '提供高粱肉燥饭、一条根鸡汤等地方风味，营业时间容易变化，建议当天查询。' },
    ], links: [['查看附近景点', '/nearby/'], ['安排后浦夜游', '/houpu-night-walk/']],
  },
  {
    path: '/nearby/houpu-old-street/', title: '后浦老街深度路线', eyebrow: '两小时步行', image: 'model-street.jpg',
    description: '从金门总兵署出发，串联节孝坊、将军第、浯江书院、奎阁、城隍庙和模范街。',
    intro: '约两小时看完后浦从军政、教育、信仰到近代商业街区的发展。全程以步行为主。',
    facts: [['总时长', '约 2 小时'], ['交通', '全程步行'], ['起点', '清金门镇总兵署'], ['终点', '模范街']],
    sections: [
      { title: '1. 总兵署 → 将军第', text: '先完成总兵署参观，再走进附近巷弄看清末武将官宅，约预留 15 分钟。' },
      { title: '2. 浯江书院 → 奎阁', text: '从传统书院、朱子祠走到魁星楼，理解后浦重视教育和科举的历史。' },
      { title: '3. 浯岛城隍庙', text: '把总兵署迁治与地方信仰、街市形成联系起来，庙内参观约 15–20 分钟。' },
      { title: '4. 节孝坊 → 模范街', text: '最后细看石牌坊雕刻，再进入红砖连廊街区休息或用餐。' },
    ], links: [['附近景点总览', '/nearby/'], ['附近美食', '/nearby/food/']],
  },
  {
    path: '/routes/', title: '选择参观路线', eyebrow: '20／45／90 分钟',
    description: '按停留时间选择金门总兵署 20、45 或 90 分钟参观路线。',
    intro: '第一次到访优先选择 45 分钟标准路线；时间紧张或希望深入理解历史时，可改选另外两条。',
    sections: [
      { title: '20 分钟快速路线', text: '依次看头门、大堂、战船与兵器展、后院木棉，适合赶飞机、赶船或顺路停留。' },
      { title: '45 分钟标准路线', text: '完整走过主要院落、科房、内署和展厅，是最均衡的首次参观方案。' },
      { title: '90 分钟深度路线', text: '在完整动线中加入丛青轩、总兵制度、海防背景和后浦发展的阅读时间。' },
    ], links: [['20 分钟路线', '/routes/20-minute/'], ['45 分钟路线', '/routes/45-minute/'], ['90 分钟路线', '/routes/90-minute/']],
  },
  {
    path: '/scooter-parking/', title: '总兵署停车指南', eyebrow: '停车后步行',
    description: '金门总兵署机车、电动机车、共享车辆与汽车停车建议。',
    intro: '后浦巷道较窄，最稳妥的方式是在金城市区合法车格或公共停车场停好，再步行前往。',
    sections: [
      { title: '一般机车与电动机车', text: '依现场标线停入普通机车格；专用、月租、充电和换电车格必须按标示使用。' },
      { title: '共享与微型电动二轮车', text: '共享车辆要在 App 或业者指定站点归还；微型电动二轮车也须遵守停车标线。' },
      { title: '汽车', text: '使用金城市区公共停车场或合法路边车格，不要为了靠近正门驶入狭窄巷道。' },
      { title: '夜游期间', text: '19:30 夜游会步行经过后浦街区，建议把车留在合法停车场，结束后再步行返回取车。' },
    ], links: [['交通总览', '/transport/'], ['机车与电动车选择', '/transport/e-scooter/']],
  },
  {
    path: '/sources/', title: '资料来源与核实方式', eyebrow: '资料来源',
    description: '金门总兵署游客指南采用的官方来源、内容核实方式和可信度分级。',
    intro: '会影响出行决策的信息优先采用政府、景点管理单位及公共交通机构的资料。',
    sections: [
      { title: '主要来源', text: '包括金门观光旅游网、金门县政府公开资料、文化资产资料、公共运输资讯和景点现场公告。' },
      { title: '可信度分级', text: '官方发布用于开放时间、票价、地址和交通；现场观察用于动线、步行感受与建议停留时间；编辑建议用于路线组合。' },
      { title: '时间敏感信息', text: '营业时间、活动、租车和公车可能变化。页面会标示核实日期，但出发前仍应查看最新官方公告。' },
      { title: '发现冲突时', text: '以景点现场和主管机关最新公告为最高优先，并通过纠错页更新本站。' },
    ], links: [['回报错误', '/corrections/'], ['了解本站', '/about/']],
  },
  {
    path: '/transport/', title: '金门总兵署怎么去', eyebrow: '交通与停车',
    description: '从水头码头、金门机场和金城车站前往金门总兵署，以及停车和骑行建议。',
    intro: '总兵署位于金城后浦核心区。无论从机场或码头出发，先到金城，再步行进入老城最简单。',
    sections: [
      { title: '从金城车站', text: '距离约 195 米，沿浯江街步行约 3 分钟，是最方便的公共交通到达点。' },
      { title: '从金门机场', text: '距离约 8 公里，出租车或自驾通常约 15–20 分钟，也可搭公车前往金城站。' },
      { title: '从水头码头', text: '距离约 4 公里，车程约 12–15 分钟。携带行李可搭出租车，也可搭往金城方向的公车。' },
      { title: '自驾与骑车', text: '导航至金城市区公共停车场，合法停车后步行。不要把狭窄巷道当作临时停车空间。' },
    ], links: [['金城车站路线', '/transport/jincheng-bus-station/'], ['金门机场路线', '/transport/kinmen-airport/'], ['水头码头路线', '/transport/shuitou-pier/'], ['机车与电动车', '/transport/e-scooter/']],
  },
  {
    path: '/transport/jincheng-bus-station/', title: '从金城车站到总兵署', eyebrow: '交通路线',
    description: '从金城车站步行前往清金门镇总兵署的分步路线。',
    intro: '两地约 195 米，正常步行约 3 分钟，不需要转车。',
    facts: [['距离', '约 195 米'], ['时间', '步行约 3 分钟'], ['方式', '全程步行']],
    sections: [
      { title: '分步路线', text: '从金城车站出口进入市区，沿浯江街方向步行，看到砖红色门楼和总兵署标示即可抵达。' },
      { title: '携带行李', text: '路程很短，但老城人行空间局部较窄；大件行李可先寄放或直接搭出租车到方便下车的位置。' },
      { title: '返程', text: '原路回到金城车站，可转搭前往机场、水头码头和岛内其他地区的公车。' },
    ], links: [['交通总览', '/transport/'], ['开始参观', '/visit/']],
  },
  {
    path: '/transport/kinmen-airport/', title: '从金门机场到总兵署', eyebrow: '交通路线',
    description: '从金门机场搭出租车、公车或自驾前往清金门镇总兵署。',
    intro: '机场距离金城市区约 8 公里，出租车或自驾通常约 15–20 分钟。',
    facts: [['距离', '约 8 公里'], ['车程', '约 15–20 分钟'], ['公共交通', '搭往金城方向公车']],
    sections: [
      { title: '出租车', text: '行李较多、多人同行或时间有限时最直接；告诉司机前往金城的清金门镇总兵署。' },
      { title: '公车', text: '搭往金城方向的公车，在金城车站下车，再沿浯江街步行约 3 分钟。候车和转乘时间应另外预留。' },
      { title: '租车或自驾', text: '抵达金城后使用公共停车场或合法车格，再步行进入后浦街区。' },
      { title: '返程', text: '回程赶飞机时要加上还车、加油、候车和报到时间，不要只按地图车程倒推。' },
    ], links: [['交通总览', '/transport/'], ['停车指南', '/scooter-parking/']],
  },
  {
    path: '/transport/e-scooter/', title: '金门租机车、电动车怎么选', eyebrow: '租车与骑行',
    description: '金门燃油机车、一般电动机车与微型电动二轮车的选择、证照及停车提醒。',
    intro: '三类车辆的证照、载人、速度和归还规则不同，租车前应先确认车辆类别和合约。',
    sections: [
      { title: '燃油机车', text: '适合跨区域移动和双人同行，须持符合台湾规定的有效驾驶执照并佩戴安全帽。' },
      { title: '一般电动机车', text: '驾驶要求通常与同级机车一致。租用前确认续航、充换电方式和还车地点。' },
      { title: '微型电动二轮车', text: '不等于自行车，也不是完全没有规则；应确认年龄、登记、保险、载人和道路限制。' },
      { title: '共享车辆', text: '只能在服务范围及指定站点租还。开始行程前检查 App 中的停车区、电量和计费方式。' },
      { title: '到总兵署后', text: '在金城市区合法停车，再改用步行游览后浦，避免骑入狭窄巷道寻找最近位置。' },
    ], links: [['停车指南', '/scooter-parking/'], ['交通总览', '/transport/']],
  },
];

const en: LocalizedFullPage[] = [
  {
    path: '/about/', title: 'About this guide', eyebrow: 'About',
    description: 'Learn how this independent Kinmen Military Headquarters visitor guide is researched and maintained.',
    intro: 'This independent guide helps visitors plan a trip and understand the site. It is not an official government or attraction website.',
    sections: [
      { title: 'What the guide covers', text: 'The site combines practical planning, on-site routes and nearby Houpu attractions in one consistent guide, from opening hours and transport to history and architecture.' },
      { title: 'Independent, not official', text: 'The guide has no affiliation with the Kinmen County Government, the attraction operator or an official tourism body. Current on-site and official notices take priority.' },
      { title: 'Editorial standards', text: 'Official sources are preferred for facts, while walking times and itinerary suggestions are clearly treated as planning advice.', bullets: ['Official sources for hours and admission', 'On-site experience for practical guidance', 'Corrections recorded after verification'] },
    ], links: [['Sources and methods', '/sources/'], ['Report a correction', '/corrections/']],
  },
  {
    path: '/corrections/', title: 'Corrections', eyebrow: 'Report an issue',
    description: 'Report an error in the visitor guide and learn how corrections are checked.',
    intro: 'If opening hours, transport, facilities or an explanation have changed, please identify the page and provide a reliable source.',
    sections: [
      { title: 'What to include', text: 'Provide the page address, the statement that needs changing, the date you observed the issue and an official link or on-site photograph where possible.' },
      { title: 'How reports are handled', text: 'Information is checked against an official notice or more than one reliable source before the page and verification date are updated.' },
      { title: 'Correction record', text: 'Material factual changes are documented. Typographical and stylistic edits that do not alter meaning are not listed separately.' },
    ], links: [['Research methods', '/sources/'], ['About the guide', '/about/']],
  },
  {
    path: '/credits/', title: 'Photo credits and licences', eyebrow: 'Photo credits',
    description: 'Sources, attribution and Creative Commons licensing for photographs used by this guide.',
    intro: 'The guide uses original images and reusable attraction photographs. Copyright remains with the respective photographers.',
    sections: [
      { title: 'Licensing', text: 'Images from Wikimedia Commons are used under the CC BY or CC BY-SA terms shown on each file page, with the photographer, source and licence retained.' },
      { title: 'Image processing', text: 'Photographs may be cropped, resized or converted to WebP for responsive delivery without changing the factual subject represented.' },
      { title: 'Rights enquiries', text: 'If an attribution, licence version or source link is inaccurate, submit the file details through the corrections page.' },
    ], links: [['Report a rights issue', '/corrections/'], ['View sources', '/sources/']],
  },
  {
    path: '/history/', title: 'From Congqing Xuan to a coastal defence headquarters', eyebrow: 'History', image: 'historic.jpg',
    description: 'The history of the Kinmen Military Headquarters, from a Ming scholar’s residence to Qing coastal administration and a modern heritage site.',
    intro: 'The site began as a Ming-period residence and was rebuilt as a military headquarters in 1682, becoming closely tied to Kinmen’s coastal defence and Houpu’s growth.',
    facts: [['Ming period', 'Residence of scholar Xu Xie'], ['1682', 'Rebuilt as a military headquarters'], ['Qing period', 'Military and administrative centre'], ['Today', 'Heritage and exhibition space']],
    sections: [
      { title: 'Ming origins', text: 'The site was associated with the residence and garden of Kinmen scholar Xu Xie, known as Congqing Xuan.' },
      { title: 'Rebuilt in 1682', text: 'General Chen Long converted the site into an official compound with courtyards arranged along a central axis and a front-office, rear-residence pattern.' },
      { title: 'Coastal defence and administration', text: 'The regional commander handled military defence. Kinmen’s position in the strait made the compound important to both security and local government.' },
      { title: 'Preservation and interpretation', text: 'After its administrative role ended, the complex was restored and opened as a cultural site explaining official work, domestic life and maritime defence.' },
    ], links: [['Explore the interior', '/inside/'], ['Choose a visit route', '/visit/#routes']],
  },
  {
    path: '/inside/', title: 'What is inside the headquarters?', eyebrow: 'Interior spaces', image: 'main-hall-interior.jpg',
    description: 'A room-by-room introduction to the gate, courtyards, main hall, offices, residence, maritime exhibits and rear garden.',
    intro: 'The route moves along the central axis from public administrative rooms to inner offices and living quarters, then finishes with displays and the rear courtyard.',
    sections: [
      { title: '01 Main Gate and Front Courtyard', text: 'Enter through the brick-red gate and use the paved axis and symmetrical corridors to read the compound’s ordered layout.', bullets: ['Gate plaque and façade', 'Central stone paving', 'Covered side corridors'] },
      { title: '02 Main Hall and Side Offices', text: 'The main hall supported public military administration, while the side rooms explain staff, banners and document work.' },
      { title: '03 Passage Hall, Inner Office and Residence', text: 'Beyond the passage hall, the compound becomes increasingly private and reveals the front-office, rear-residence arrangement.' },
      { title: '04 Maritime gallery and kapok tree', text: 'Warship models, uniforms and weapons introduce coastal defence; the old kapok tree makes a natural final stop.' },
    ], links: [['Open the indoor map', '/map/'], ['See the highlights', '/highlights/']],
  },
  {
    path: '/nearby/', title: 'What else is near the headquarters?', eyebrow: 'Nearby Houpu', image: 'model-street.jpg',
    description: 'Nearby Houpu sights and walking routes covering the memorial arch, General’s Residence, Wujiang Academy, Kuige, City God Temple and Mofan Street.',
    intro: 'Central Houpu is compact. After the headquarters, continue on foot for anything from a 30-minute extension to a two-hour old-town walk.',
    facts: [['30 minutes', 'Memorial arch and Mofan Street'], ['60 minutes', 'Add a residence or academy'], ['About 2 hours', 'Complete the Houpu heritage route']],
    sections: [
      { title: 'Qiu Liang-gong Memorial Arch', text: 'A richly carved stone arch completed in 1812 and one of Houpu’s most recognisable landmarks.' },
      { title: 'General’s Residence', text: 'A late-Qing, three-courtyard Minnan residence hidden in lanes very close to the headquarters.' },
      { title: 'Wujiang Academy and Kuige', text: 'Together they reveal Houpu’s educational tradition through an academy, Zhu Xi shrine and Kuixing worship.' },
      { title: 'City God Temple and Mofan Street', text: 'The temple links belief to the town’s administrative history, while Mofan Street represents a later brick-arcade commercial district.' },
    ], links: [['Two-hour Houpu walk', '/nearby/houpu-old-street/'], ['Food nearby', '/nearby/food/'], ['Mofan Street guide', '/nearby/model-street/']],
  },
  {
    path: '/nearby/memorial-arch/', title: 'Qiu Liang-gong’s Mother Chastity Arch', eyebrow: 'Nearby sight', image: 'spot-arch.jpg',
    description: 'History, stone carving details and walking information for the Qiu Liang-gong memorial arch near the headquarters.',
    intro: 'Completed in 1812, this stone arch stands about 90 metres from the headquarters and is a nationally designated monument.',
    facts: [['Distance', 'About 90 m'], ['Walk', 'About 2 minutes'], ['Suggested time', '10–15 minutes'], ['Status', 'National monument']],
    sections: [
      { title: 'Why it was built', text: 'The arch honoured Madam Xu, mother of Kinmen-born commander Qiu Liang-gong, for raising her son while remaining widowed.' },
      { title: 'What to see', text: 'Four pillars form three bays in granite and dark stone. Look closely for figures, flowers, birds, lions and other auspicious carvings.' },
      { title: 'Visiting tips', text: 'Blue hour combines the lit arch with the surrounding street. Watch for traffic when composing photographs.' },
    ], links: [['All nearby sights', '/nearby/'], ['Continue to Mofan Street', '/nearby/model-street/']],
  },
  {
    path: '/nearby/general-residence/', title: 'General’s Residence', eyebrow: 'Nearby sight', image: 'spot-general.jpg',
    description: 'A guide to the late-Qing General’s Residence near the Kinmen Military Headquarters.',
    intro: 'The residence of late-Qing general Lu Chengjin is about 80 metres away, tucked into a lane near the headquarters.',
    facts: [['Distance', 'About 80 m'], ['Walk', 'About 2 minutes'], ['Suggested time', '10–20 minutes'], ['Status', 'County monument']],
    sections: [
      { title: 'History and layout', text: 'Built around the Guangxu era, the residence follows a three-courtyard Minnan plan with side wings and restrained official decoration.' },
      { title: 'What to see', text: 'Notice the General’s Residence plaque, double-happiness brickwork, carved timber brackets, plaster ornament and painted details.' },
      { title: 'Visiting tips', text: 'Find the entrance near No. 24 Zhupu North Road. Interior access can change, so follow notices on site.' },
    ], links: [['All nearby sights', '/nearby/'], ['Houpu heritage walk', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/wujiang-academy/', title: 'Wujiang Academy', eyebrow: 'Nearby sight', image: 'spot-academy.jpg',
    description: 'History, architecture and practical information for Wujiang Academy and its Zhu Xi shrine.',
    intro: 'Founded in the Qing Qianlong era, this important academy preserves evidence of Kinmen’s strong educational tradition.',
    facts: [['Walk', 'About 4–5 minutes'], ['Suggested time', '15–25 minutes'], ['Highlights', 'Zhu Xi shrine, halls and steles']],
    sections: [
      { title: 'Academy history', text: 'Wujiang Academy was a major traditional learning space. Its shrine honours Zhu Xi, whose work influenced education in Kinmen.' },
      { title: 'What to see', text: 'Look for Minnan red-brick architecture, the relationship between teaching and ritual spaces, and inscribed stone records.' },
      { title: 'Visiting tips', text: 'Keep voices low in ritual and display areas. Morning light is generally gentle in the brick courtyards.' },
    ], links: [['All nearby sights', '/nearby/'], ['Continue to Kuige', '/nearby/kuige/']],
  },
  {
    path: '/nearby/kuige/', title: 'Kuige (Kuixing Pavilion)', eyebrow: 'Nearby sight', image: 'spot-kuige.jpg',
    description: 'A guide to Kuige, Houpu’s hexagonal pavilion dedicated to Kuixing and literary success.',
    intro: 'This compact, two-storey pavilion dates to the Daoguang era and reflects the town’s hopes for scholarship and examination success.',
    facts: [['Walk', 'About 4–6 minutes'], ['Suggested time', '10–15 minutes'], ['Status', 'County monument']],
    sections: [
      { title: 'Architecture and belief', text: 'Begun in 1836, the pavilion has a rare hexagonal plan, stacked roofs and upturned ridges, and enshrines the literary deity Kuixing.' },
      { title: 'How to look', text: 'Walk around the small structure to see how its outline changes. A vertical composition works well for photography.' },
      { title: 'Combine your visit', text: 'Link Kuige with Wujiang Academy, the memorial arch and Mofan Street on foot.' },
    ], links: [['All nearby sights', '/nearby/'], ['Houpu heritage walk', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/city-god-temple/', title: 'Wudao City God Temple', eyebrow: 'Nearby sight', image: 'spot-city-god-temple.jpg',
    description: 'History, festival traditions and architectural details of Houpu’s City God Temple.',
    intro: 'This active temple helps explain how Houpu grew from a military-administrative centre into a market town and community.',
    facts: [['Walk', 'About 5–7 minutes'], ['Suggested time', '15–25 minutes'], ['Major festival', '12th day of the fourth lunar month']],
    sections: [
      { title: 'Administration and belief', text: 'After the military headquarters moved to Houpu in 1680, City God worship also became established here as the town expanded.' },
      { title: 'What to see', text: 'From the forecourt, examine dragon columns, stone carving, painted decoration and layered bracket sets. The annual procession is a major Kinmen tradition.' },
      { title: 'Temple etiquette', text: 'Keep voices low and ask before photographing deities, worshippers or ceremonies.' },
    ], links: [['All nearby sights', '/nearby/'], ['Houpu heritage walk', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/model-street/', title: 'Mofan Street', eyebrow: 'Nearby sight', image: 'model-street.jpg',
    description: 'A visitor guide to Mofan Street’s red-brick arcades, photography and walk from the headquarters.',
    intro: 'Houpu’s best-known red-brick arcade street is only a few minutes from the military headquarters.',
    facts: [['Walk', 'About 3–5 minutes'], ['Suggested time', '20–40 minutes'], ['Character', 'Brick shophouses and continuous arcades']],
    sections: [
      { title: 'What is Mofan Street?', text: 'The planned street combines Minnan brickwork, Western-influenced arches and commercial shophouse functions in a consistent façade.' },
      { title: 'What to notice', text: 'Look for repeated arches, upper parapets, masonry details and the human scale created by narrow units and a covered walkway.' },
      { title: 'Photography', text: 'Early morning is quieter and late afternoon gives warmer light. Respect shopfronts and keep the walkway clear.' },
    ], links: [['All nearby sights', '/nearby/'], ['Houpu heritage walk', '/nearby/houpu-old-street/']],
  },
  {
    path: '/nearby/food/', title: 'Where to eat near the headquarters', eyebrow: 'Food nearby', image: 'food-street.jpg',
    description: 'A practical guide to congee, fried dough, savoury rice cake, oyster fritters, tofu pudding and meals in central Houpu.',
    intro: 'Breakfast, afternoon snacks and dinner are all available within walking distance, making food easy to combine with a visit.',
    facts: [['Breakfast', 'Kinmen congee and fried dough'], ['Afternoon', 'Rice cake and oyster fritter'], ['Dessert', 'Handmade tofu pudding'], ['Meal', 'Kinmen-style home cooking']],
    sections: [
      { title: 'Breakfast: Zhuanji or Keji congee', text: 'Kinmen-style congee cooks rice until the grains almost disappear, then adds meatballs and egg. Zhuanji is better known; Keji often offers more flexible hours.' },
      { title: 'Quick snacks: Heji and Yongkuan', text: 'Heji’s fried dough is right beside the headquarters. Yongkuan makes a soft savoury rice-and-taro cake suited to sharing.' },
      { title: 'Afternoon: oyster fritters', text: 'The popular shop near the memorial arch fries Kinmen oysters with vegetables to order. Allow time to queue.' },
      { title: 'A cool break: handmade tofu pudding', text: 'The Mofan Street shop has seating and is useful for families, older visitors or a hot afternoon.' },
      { title: 'A full meal', text: 'Yuchuan serves local-style dishes such as sorghum-flavoured braised pork rice. Check current hours before visiting.' },
    ], links: [['Nearby sights', '/nearby/'], ['Houpu evening walk', '/houpu-night-walk/']],
  },
  {
    path: '/nearby/houpu-old-street/', title: 'Two-hour Houpu heritage walk', eyebrow: 'Old-town route', image: 'model-street.jpg',
    description: 'A two-hour walk from the headquarters to a residence, academy, pavilion, temple, memorial arch and Mofan Street.',
    intro: 'Follow Houpu’s development from military government through education and belief to a modern commercial street. The route is entirely walkable.',
    facts: [['Duration', 'About 2 hours'], ['Transport', 'On foot'], ['Start', 'Military Headquarters'], ['Finish', 'Mofan Street']],
    sections: [
      { title: '1. Headquarters to General’s Residence', text: 'Finish the headquarters first, then enter a nearby lane for the late-Qing official residence. Allow about 15 minutes there.' },
      { title: '2. Wujiang Academy to Kuige', text: 'Connect a traditional academy and Zhu Xi shrine with the Kuixing pavilion to understand Houpu’s educational culture.' },
      { title: '3. City God Temple', text: 'Relate the move of the headquarters to the growth of local belief and a market community.' },
      { title: '4. Memorial arch to Mofan Street', text: 'Finish with detailed stone carving, then rest or eat among the red-brick arcades.' },
    ], links: [['All nearby sights', '/nearby/'], ['Food nearby', '/nearby/food/']],
  },
  {
    path: '/routes/', title: 'Choose a visit route', eyebrow: '20, 45 or 90 minutes',
    description: 'Choose a 20-, 45- or 90-minute route through the Kinmen Military Headquarters.',
    intro: 'The 45-minute route is the best default for a first visit. Use the shorter or longer option according to your schedule and interest.',
    sections: [
      { title: '20-minute express route', text: 'Prioritise the Main Gate, Main Hall, warship gallery and rear kapok tree before a flight, ferry or brief stop.' },
      { title: '45-minute standard route', text: 'Cover the main courtyards, side offices, inner rooms and exhibition spaces at a balanced pace.' },
      { title: '90-minute in-depth route', text: 'Add reading time for the site’s Ming origins, Qing command system, maritime defence and the growth of Houpu.' },
    ], links: [['20-minute route', '/routes/20-minute/'], ['45-minute route', '/routes/45-minute/'], ['90-minute route', '/routes/90-minute/']],
  },
  {
    path: '/scooter-parking/', title: 'Parking near the headquarters', eyebrow: 'Park and walk',
    description: 'Parking guidance for scooters, electric scooters, shared vehicles and cars in central Jincheng.',
    intro: 'Houpu’s lanes are narrow. Use a legal space or public car park in central Jincheng, then walk to the headquarters.',
    sections: [
      { title: 'Scooters and electric scooters', text: 'Use ordinary scooter bays where permitted. Reserved, monthly, charging and battery-swap spaces must be used according to their signs.' },
      { title: 'Shared and micro electric vehicles', text: 'Shared vehicles must be returned within the operator’s service area or designated stations. Micro electric two-wheelers still follow parking markings.' },
      { title: 'Cars', text: 'Use a public car park or legal roadside bay. Do not enter narrow old-town lanes merely to park closer to the entrance.' },
      { title: 'During the evening walk', text: 'Leave the vehicle legally parked, complete the Houpu walk on foot and return afterwards.' },
    ], links: [['Transport overview', '/transport/'], ['Scooters and electric vehicles', '/transport/e-scooter/']],
  },
  {
    path: '/sources/', title: 'Sources and verification', eyebrow: 'Research',
    description: 'Official sources, verification methods and confidence levels used by this visitor guide.',
    intro: 'Information that affects a visit is checked first against government, attraction and public transport sources.',
    sections: [
      { title: 'Primary sources', text: 'Sources include the official Kinmen tourism website, Kinmen County Government material, heritage records, public transport information and notices at the attraction.' },
      { title: 'Levels of evidence', text: 'Official publication supports hours, admission, address and transport. On-site observation supports route conditions and suggested time. Editorial advice supports itinerary combinations.' },
      { title: 'Time-sensitive details', text: 'Business hours, events, rental services and buses can change. Check current official notices even when a verification date is shown.' },
      { title: 'Conflicting information', text: 'The latest notice from the attraction or responsible authority takes priority, and this guide is corrected after confirmation.' },
    ], links: [['Report a correction', '/corrections/'], ['About the guide', '/about/']],
  },
  {
    path: '/transport/', title: 'Getting to the headquarters', eyebrow: 'Transport and parking',
    description: 'Travel from Shuitou Pier, Kinmen Airport or Jincheng Bus Station, with parking and scooter advice.',
    intro: 'The headquarters is in central Houpu. From the airport or ferry terminal, reach Jincheng first and enter the old town on foot.',
    sections: [
      { title: 'From Jincheng Bus Station', text: 'The station is about 195 metres away. Walk along Wujiang Street for roughly three minutes.' },
      { title: 'From Kinmen Airport', text: 'The airport is about 8 km away. Taxi or car commonly takes 15–20 minutes, and buses run towards Jincheng.' },
      { title: 'From Shuitou Pier', text: 'The pier is about 4 km away, usually 12–15 minutes by road. A taxi is simplest with luggage; Jincheng-bound buses are another option.' },
      { title: 'Driving or riding', text: 'Use a legal space or public car park in central Jincheng, then explore Houpu on foot.' },
    ], links: [['From Jincheng Station', '/transport/jincheng-bus-station/'], ['From Kinmen Airport', '/transport/kinmen-airport/'], ['From Shuitou Pier', '/transport/shuitou-pier/'], ['Scooters and electric vehicles', '/transport/e-scooter/']],
  },
  {
    path: '/transport/jincheng-bus-station/', title: 'From Jincheng Bus Station', eyebrow: 'Transport route',
    description: 'Step-by-step walking directions from Jincheng Bus Station to the Kinmen Military Headquarters.',
    intro: 'The headquarters is about 195 metres away, a straightforward walk of roughly three minutes.',
    facts: [['Distance', 'About 195 m'], ['Time', 'About 3 minutes'], ['Mode', 'Walk']],
    sections: [
      { title: 'Walking route', text: 'Leave the station towards central Jincheng and follow Wujiang Street until the brick-red gate and attraction signs come into view.' },
      { title: 'With luggage', text: 'The distance is short, but pedestrian space can narrow. Consider storing large luggage or using a taxi drop-off point.' },
      { title: 'Return journey', text: 'Walk back the same way for buses towards the airport, Shuitou Pier and other parts of Kinmen.' },
    ], links: [['Transport overview', '/transport/'], ['Plan your visit', '/visit/']],
  },
  {
    path: '/transport/kinmen-airport/', title: 'From Kinmen Airport', eyebrow: 'Transport route',
    description: 'Travel from Kinmen Airport to the headquarters by taxi, public bus or rental vehicle.',
    intro: 'The airport is about 8 km from Jincheng. A taxi or car normally takes around 15–20 minutes.',
    facts: [['Distance', 'About 8 km'], ['Drive', 'About 15–20 minutes'], ['Public transport', 'Jincheng-bound bus']],
    sections: [
      { title: 'Taxi', text: 'The most direct option with luggage, a small group or limited time. Ask for the Qing Kinmen Military Headquarters in Jincheng.' },
      { title: 'Public bus', text: 'Take a Jincheng-bound service, alight at Jincheng Bus Station and walk about three minutes. Allow additional waiting time.' },
      { title: 'Rental vehicle', text: 'On reaching central Jincheng, use a public car park or legal bay and enter Houpu on foot.' },
      { title: 'Returning for a flight', text: 'Add time for fuel, vehicle return, bus waiting and check-in instead of relying on driving time alone.' },
    ], links: [['Transport overview', '/transport/'], ['Parking guide', '/scooter-parking/']],
  },
  {
    path: '/transport/e-scooter/', title: 'Choosing a scooter or electric vehicle', eyebrow: 'Renting and riding',
    description: 'Differences between petrol scooters, electric scooters, micro electric two-wheelers and shared vehicles in Kinmen.',
    intro: 'Licensing, passengers, speed and return rules differ. Confirm the exact vehicle category and rental agreement before setting out.',
    sections: [
      { title: 'Petrol scooters', text: 'Useful for longer island trips and two riders, but require a licence valid under Taiwan rules and an approved helmet.' },
      { title: 'Electric scooters', text: 'Licence requirements normally follow the relevant scooter class. Confirm range, charging or battery swaps and the return location.' },
      { title: 'Micro electric two-wheelers', text: 'These are not ordinary bicycles and are still regulated. Check age, registration, insurance, passenger and road restrictions.' },
      { title: 'Shared vehicles', text: 'Rent and return only within the operator’s service area or stations. Check parking zones, battery level and pricing in the app.' },
      { title: 'At the headquarters', text: 'Park legally in central Jincheng and explore Houpu on foot instead of riding through narrow lanes.' },
    ], links: [['Parking guide', '/scooter-parking/'], ['Transport overview', '/transport/']],
  },
];

export const fullPagesByLocale: Record<TranslatedLocale, LocalizedFullPage[]> = {
  'zh-Hans': zhHans,
  en,
};

export function getFullPage(locale: TranslatedLocale, path: string) {
  return fullPagesByLocale[locale].find((page) => page.path === path);
}
