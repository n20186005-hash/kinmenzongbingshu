export type NearbySpot = {
  slug: string;
  href: string;
  name: string;
  image: string;
  imageAlt: string;
  distance: string;
  walk: string;
  stay: string;
  heritage: string;
  note: string;
  lead: string;
  history: string;
  highlights: { title: string; text: string }[];
  tips: string[];
  officialUrl: string;
  mapQuery: string;
};

export const nearbySpots: NearbySpot[] = [
  {
    slug: 'memorial-arch',
    href: '/nearby/memorial-arch/',
    name: '邱良功母節孝坊',
    image: 'spot-arch.jpg',
    imageAlt: '入夜後的邱良功母節孝坊實景',
    distance: '約 90 米',
    walk: '步行約 2 分鐘',
    stay: '建議 10–15 分鐘',
    heritage: '國定古蹟',
    note: '建於 1812 年的石造牌坊，雕刻層次豐富，是後浦最醒目的歷史地標。',
    lead: '牌坊立在後浦熱鬧街區中，白天適合細看石雕，入夜後燈光亮起，又是另一種氣氛。',
    history: '清嘉慶十七年（1812），為旌表金門籍將領邱良功之母許氏守節教子的事蹟而建。牌坊規模宏偉、儲存完整，常被譽為「臺閩第一坊」。',
    highlights: [
      { title: '四柱三間', text: '整座牌坊以泉州花崗石與青鬥石構成，層層樓簷讓立面顯得高聳而細密。' },
      { title: '人物與瑞獸石雕', text: '靠近看梁枋、雀替與基座，可找到人物故事、花鳥和石獅等豐富雕飾。' },
      { title: '街區中的古蹟', text: '古老石坊與周圍店家並存，最能感受後浦古蹟融入日常生活的樣子。' },
    ],
    tips: ['傍晚藍調時刻最適合同時拍到牌坊燈光與街景。', '牌坊位在道路與店鋪之間，拍照時請留意車輛。', '可與靈濟古寺、模範街排在同一段步行路線。'],
    officialUrl: 'https://kinmen.travel/zh-tw/travel/attraction/397',
    mapQuery: '邱良功母節孝坊 金門',
  },
  {
    slug: 'general-residence',
    href: '/nearby/general-residence/',
    name: '將軍第',
    image: 'spot-general.jpg',
    imageAlt: '金門將軍第紅磚宅第正立面實景',
    distance: '約 80 米',
    walk: '步行約 2 分鐘',
    stay: '建議 10–20 分鐘',
    heritage: '縣定古蹟',
    note: '清末溫州總兵盧成金的府第，藏在巷弄裡的三落閩南官宅。',
    lead: '從總兵署走進珠浦北路的巷弄，很快就能看到門額寫著「將軍第」的紅磚大厝。',
    history: '將軍第是清末武顯將軍盧成金的府第，約建於清光緒年間。宅第為三落大厝帶護龍，佈局遵循閩南傳統，也以較為內斂的官宅裝飾顯示主人身份。',
    highlights: [
      { title: '三落大厝', text: '從前落、中庭到正廳沿中軸展開，能看出傳統大宅層層深入的空間秩序。' },
      { title: '雙喜磚雕', text: '正面牆堵嵌有醒目的雙喜圖樣，據說與建宅時家中辦喜事有關。' },
      { title: '門額與彩繪', text: '「將軍第」門額、木雕插角、泥塑和彩繪都值得放慢腳步細看。' },
    ],
    tips: ['入口在巷內，跟著珠浦北路 24 號尋找較不容易錯過。', '宅第內部開放狀況可能調整，抵達後以現場公告為準。', '這裡離總兵署很近，適合安排為參觀後的第一站。'],
    officialUrl: 'https://kinmen.travel/zh-tw/travel/attraction/398',
    mapQuery: '將軍第 金門 珠浦北路24號',
  },
  {
    slug: 'wujiang-academy',
    href: '/nearby/wujiang-academy/',
    name: '浯江書院',
    image: 'spot-academy.jpg',
    imageAlt: '浯江書院內朱子祠紅磚建築實景',
    distance: '數分鐘步行',
    walk: '步行約 4–5 分鐘',
    stay: '建議 15–25 分鐘',
    heritage: '朱子祠為國定古蹟',
    note: '後浦重要的文教空間，院內朱子祠儲存了金門崇文重教的歷史。',
    lead: '紅磚院落與朱子祠共同組成安靜的文教空間，和幾條街外的熱鬧市場形成鮮明對比。',
    history: '浯江書院創建於清乾隆年間，是金門重要書院。現今院區內的朱子祠紀念曾在同安任職並影響金門文風的朱熹，祠內仍可見碑刻與傳統建築裝飾。',
    highlights: [
      { title: '朱子祠', text: '祠宇採用閩南紅磚建築，門上可見錢穆題寫的「朱子祠」匾額。' },
      { title: '講堂與學舍', text: '從院落配置可以理解傳統書院講學、祭祀與居住並置的空間關係。' },
      { title: '碑刻文物', text: '院內留有書院膏火相關碑記，是認識金門教育史的重要線索。' },
    ],
    tips: ['院區適合安靜參觀，請避免在祭祀與展示空間大聲喧譁。', '上午光線較柔和，紅磚院落也比較好拍。', '和將軍第、城隍廟相距不遠，可依官方夜遊路線順序串聯。'],
    officialUrl: 'https://kinmen.travel/zh-tw/travel/attraction/1489',
    mapQuery: '浯江書院 金門',
  },
  {
    slug: 'kuige',
    href: '/nearby/kuige/',
    name: '奎閣（魁星樓）',
    image: 'spot-kuige.jpg',
    imageAlt: '金門奎閣魁星樓六角樓閣實景',
    distance: '數分鐘步行',
    walk: '步行約 4–6 分鐘',
    stay: '建議 10–15 分鐘',
    heritage: '縣定古蹟',
    note: '建於清道光年間的六角樓閣，是後浦士子祈求文運的獨特地標。',
    lead: '奎閣體量不大，卻以六角形、上下兩層與高高翹起的屋脊，在後浦街屋間格外醒目。',
    history: '奎閣由後浦商人林斐章捐資，始建於清道光十六年（1836），兩年後完成。樓內奉祀魁星，寄託地方士子振興文風、科舉登第的願望。',
    highlights: [
      { title: '六角雙層樓閣', text: '少見的平面與層疊屋簷讓建築從每個角度看都有不同輪廓。' },
      { title: '魁星信仰', text: '魁星象徵文運與功名，奎閣也是後浦崇文傳統的另一處具體見證。' },
      { title: '閩南屋脊', text: '燕尾、卷草與紅瓦層層向上，仰拍最能表現樓閣的輕巧感。' },
    ],
    tips: ['直幅構圖最適合拍下完整的雙層樓閣。', '建築周邊空間不大，使用廣角鏡頭會比較容易取景。', '可接著走到邱良功母節孝坊和模範街。'],
    officialUrl: 'https://kinmen.travel/zh-tw/travel/attraction/391',
    mapQuery: '奎閣 魁星樓 金門',
  },
  {
    slug: 'city-god-temple',
    href: '/nearby/city-god-temple/',
    name: '浯島城隍廟',
    image: 'spot-city-god-temple.jpg',
    imageAlt: '浯島城隍廟廟埕與華麗正殿實景',
    distance: '數分鐘步行',
    walk: '步行約 5–7 分鐘',
    stay: '建議 15–25 分鐘',
    heritage: '後浦信仰中心',
    note: '隨著總兵署遷治後浦而興盛，農曆四月十二迎城隍是金門重要民俗。',
    lead: '這裡不只是廟宇，也是認識後浦如何從軍事行政中心發展為街市與信仰中心的關鍵一站。',
    history: '清康熙十九年（1680），總兵署遷治後浦，城隍信仰也由金門城分靈至此。每年農曆四月十二舉行的迎城隍活動，以遶境、神轎與藝陣凝聚全島信眾，已成為國家重要民俗。',
    highlights: [
      { title: '華麗廟飾', text: '龍柱、石雕、彩繪與層疊斗栱構成繁複立面，值得從廟埕慢慢觀察。' },
      { title: '邑主城隍', text: '城隍信仰與後浦設治歷史緊密相連，反映官署與民間信仰的互動。' },
      { title: '四月十二迎城隍', text: '遶境時神轎、藝陣與蜈蚣座齊聚，是後浦一年中最熱鬧的日子之一。' },
    ],
    tips: ['進入廟內請放低音量，拍攝神像或儀式前先詢問廟方。', '遇祭典時人潮與交通管制較多，建議預留更多時間。', '平日也可從廟埕細看石雕與屋頂裝飾。'],
    officialUrl: 'https://kinmen.travel/zh-tw/travel/attraction/811',
    mapQuery: '浯島城隍廟 金門',
  },
  {
    slug: 'model-street',
    href: '/nearby/model-street/',
    name: '模範街',
    image: 'model-street.jpg',
    imageAlt: '金門模範街紅磚連廊實景',
    distance: '數分鐘步行',
    walk: '步行約 3–5 分鐘',
    stay: '建議 20–40 分鐘',
    heritage: '歷史街區',
    note: '整齊的紅磚洋樓街屋與連續拱廊，是後浦最上鏡的老街。',
    lead: '後浦最具代表性的紅磚連廊式老街。',
    history: '',
    highlights: [],
    tips: [],
    officialUrl: 'https://kinmen.travel/zh-tw/travel/attraction/555',
    mapQuery: '模範街 金門',
  },
];
