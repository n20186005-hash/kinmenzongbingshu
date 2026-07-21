import { Converter } from 'opencc-js';
import { food, foodByTime, foodCombos, foodTopThree } from '../data/site';
import { nearbySpots } from '../data/nearby';
import type { TranslatedLocale } from './content';

const convertToHans = Converter({ from: 'tw', to: 'cn' });

export function toHans(text: string) {
  return convertToHans(text);
}

function simplifyDeep<T>(value: T): T {
  if (typeof value === 'string') return toHans(value) as T;
  if (Array.isArray(value)) return value.map(simplifyDeep) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, simplifyDeep(item)])) as T;
  }
  return value;
}

export const hansFood = simplifyDeep(food);
export const hansFoodByTime = simplifyDeep(foodByTime);
export const hansFoodCombos = simplifyDeep(foodCombos);
export const hansFoodTopThree = simplifyDeep(foodTopThree);
export const hansNearbySpots = simplifyDeep(nearbySpots);

export const englishFood = [
  {
    id: 'zhuanji', num: '01', name: 'Zhuanji Cantonese Congee', tagline: 'A classic first breakfast in Kinmen',
    recommend: 'Cantonese congee with fried dough', img: 'food-congee.jpg', illust: true,
    desc: 'Kinmen congee is cooked until the rice grains almost disappear, then finished with meatballs, egg and other ingredients. It works well before the headquarters opens at 09:00.',
    hours: 'Mon–Sat 06:00–12:30; closed Sun', distance: '2–3 minutes on foot', address: 'No. 50, Sec. 1, Juguang Road',
    goodFor: 'First visit · breakfast · two or more people', tip: 'It is busiest in the morning and some items may sell out.', cash: true,
  },
  {
    id: 'keji', num: '02', name: 'Keji Cantonese Congee', tagline: 'A more flexible alternative',
    recommend: 'Cantonese congee and fried dough', img: 'food-congee2.jpg', illust: true,
    desc: 'Another old-town congee shop near the memorial arch and Mofan Street. It normally stays open slightly later and has no fixed weekly closing day.',
    hours: 'Daily 06:00–13:00', distance: 'About 120 m away', address: 'Near Sec. 1, Juguang Road',
    goodFor: 'Later breakfast · Sunday · flexible plans', tip: 'Choose one congee shop; there is little reason to queue for both.', cash: true,
  },
  {
    id: 'heji', num: '03', name: 'Heji Fried Dough', tagline: 'Literally beside the headquarters',
    recommend: 'Fried dough and sweet twin buns', img: 'food-youtiao.jpg', illust: true,
    desc: 'A traditional window counter described by official food material as a century-old shop beside the headquarters. The fried dough is soft and airy; the twin bun is chewier and lightly sweet.',
    hours: 'Morning, until sold out', distance: 'Beside the headquarters', address: 'No. 43, Caishichang Road',
    goodFor: 'Quick snack · with congee · old Jincheng breakfast', tip: 'Opening is short and stock may finish early, so go in the morning.', cash: true,
  },
  {
    id: 'yongkuan', num: '04', name: 'Yongkuan Savoury Rice Cake', tagline: 'A distinctive Kinmen snack',
    recommend: 'Fried savoury cake with house chilli sauce', img: 'food-saltycake.jpg', illust: true,
    desc: 'Made with indica rice and taro, the cake is lightly crisp outside and soft inside, with a mild flavour that benefits from a little house chilli sauce. It is also suitable for vegetarians.',
    hours: 'Daily 05:30–10:30 and 14:30–17:30', distance: 'About 100 m away', address: 'No. 44, Sec. 1, Juguang Road',
    goodFor: 'A traditional snack uncommon elsewhere in Taiwan', tip: 'Order a small portion and combine it with congee or an oyster fritter.', cash: true,
  },
  {
    id: 'odian', num: '05', name: 'Oyster Fritter House', tagline: 'The strongest afternoon choice',
    recommend: 'Oyster fritter and sesame balls', img: 'food-oyster.jpg', illust: true,
    desc: 'Under the Qiu Liang-gong memorial arch, the shop fries Kinmen oysters and vegetables in a crisp batter. Sesame balls come with mung bean, peanut and red bean fillings.',
    hours: 'Fri–Wed 14:30–19:00; closed Thu', distance: '2–3 minutes on foot', address: 'No. 59, Sec. 1, Juguang Road',
    goodFor: 'An afternoon snack after the headquarters', tip: 'Food is fried to order. Share a portion, then continue to tofu pudding.', cash: true,
  },
  {
    id: 'douhua', num: '06', name: 'Grandpa’s Handmade Tofu Pudding', tagline: 'The best place for a seated break',
    recommend: 'Tofu pudding, grass jelly and lemon juice', img: 'food-douhua.jpg', illust: true,
    desc: 'The tofu pudding is smooth and toppings are prepared daily. Seasonal cold and hot desserts are available, with air-conditioned indoor seating useful after a summer walk.',
    hours: 'Tue–Sun 10:30–20:00; closed Mon', distance: 'About 95 m away', address: 'No. 15, Mofan Street',
    goodFor: 'Families · older visitors · hot afternoons · before the night tour', tip: 'Combine a savoury oyster fritter with dessert on Mofan Street.', cash: true,
  },
  {
    id: 'yuchuan', num: '07', name: 'Yuchuan Dining Room', tagline: 'For a complete sit-down meal',
    recommend: 'Sorghum braised-pork rice and medicinal-herb chicken soup', img: 'food-porkrice.jpg', illust: true,
    desc: 'A practical lunch or dinner choice using Kinmen ingredients in home-style dishes. It suits families and older travellers and may accept reservations.',
    hours: 'Lunch and dinner; times vary', distance: 'Within central Houpu', address: 'Houpu old town',
    goodFor: 'Families · older visitors · a full meal · before the night tour', tip: 'Hours change, so check on the day or reserve ahead.', cash: false,
  },
] as const;

export const englishFoodByTime = [
  ['06:00–09:00', 'Zhuanji or Keji congee with Heji fried dough'],
  ['09:00–10:30', 'Yongkuan savoury cake, then the headquarters'],
  ['11:00–13:00', 'Keji congee or a full meal at Yuchuan'],
  ['14:30–17:30', 'Oyster fritter and Yongkuan savoury cake'],
  ['15:00–19:00', 'Oyster fritter followed by tofu pudding'],
  ['Dinner', 'Yuchuan, then the Houpu night tour'],
] as const;

export const englishFoodCombos = [
  { title: 'First visit to Kinmen', route: 'Zhuanji congee → Military Headquarters → Mofan Street → tofu pudding', note: 'Best in the morning and covers both heritage and local food.' },
  { title: 'Afternoon snack walk', route: 'Headquarters → savoury cake → oyster fritter → memorial arch → tofu pudding → Mofan Street', note: 'Entirely walkable; share portions so you can try more.' },
  { title: 'Before the night tour', route: '17:00 headquarters → dinner at Yuchuan → return by 19:20', note: 'Keeps the visit, dinner and guided walk in one compact area.' },
] as const;

export const englishFoodTopThree = [
  { label: 'Breakfast', name: 'Zhuanji congee' },
  { label: 'Afternoon', name: 'Oyster Fritter House' },
  { label: 'Dessert', name: 'Handmade tofu pudding' },
] as const;

export interface EnglishNearbySpot {
  slug: string; href: string; name: string; image: string; imageAlt: string;
  distance: string; walk: string; stay: string; heritage: string; note: string;
  lead: string; history: string; highlights: { title: string; text: string }[];
  tips: string[]; officialUrl: string; mapQuery: string;
}

const originalSpot = (slug: string) => nearbySpots.find((spot) => spot.slug === slug)!;

export const englishNearbySpots: EnglishNearbySpot[] = [
  {
    ...originalSpot('memorial-arch'), slug: 'memorial-arch', href: '/nearby/memorial-arch/', name: 'Qiu Liang-gong’s Mother Chastity Arch', imageAlt: 'The illuminated stone memorial arch at night', distance: 'About 90 m', walk: 'About 2 minutes on foot', stay: 'Allow 10–15 minutes', heritage: 'National monument',
    note: 'A richly carved stone arch completed in 1812 and one of Houpu’s clearest historic landmarks.', lead: 'The arch stands within a busy old-town street: examine its carving by day or return when it is illuminated after dark.',
    history: 'Completed in 1812, the arch honoured Madam Xu, mother of Kinmen-born commander Qiu Liang-gong, for remaining widowed and raising her son. Its scale and preservation have made it one of the best-known commemorative arches in the region.',
    highlights: [{ title: 'Four pillars and three bays', text: 'Granite and dark stone support layered roofs that give the façade height and depth.' }, { title: 'Figures and auspicious animals', text: 'Beams, brackets and bases contain stories, flowers, birds and stone lions.' }, { title: 'A monument in daily life', text: 'Shops and traffic surround the old arch, showing how heritage remains embedded in Houpu.' }],
    tips: ['Blue hour combines the lighting with the street scene.', 'Watch for traffic when stepping back to photograph the arch.', 'Combine it with Lingji Temple and Mofan Street.'], mapQuery: 'Qiu Liang-gong memorial arch Kinmen',
  },
  {
    ...originalSpot('general-residence'), slug: 'general-residence', href: '/nearby/general-residence/', name: 'General’s Residence', imageAlt: 'Red-brick façade of the General’s Residence', distance: 'About 80 m', walk: 'About 2 minutes on foot', stay: 'Allow 10–20 minutes', heritage: 'County monument',
    note: 'The late-Qing residence of General Lu Chengjin, hidden in a lane close to the headquarters.', lead: 'A short walk into the lanes off Zhupu North Road reveals a red-brick mansion marked by the General’s Residence plaque.',
    history: 'The residence of late-Qing general Lu Chengjin was probably built in the Guangxu era. Its three sequential halls and side wings follow Minnan residential tradition, while restrained decoration reflects the owner’s official status.',
    highlights: [{ title: 'Three-part residence', text: 'Courtyards and halls deepen along a central axis, creating a clear hierarchy.' }, { title: 'Double-happiness brickwork', text: 'A prominent motif is associated with a family celebration during construction.' }, { title: 'Plaque and decoration', text: 'Look for carved brackets, plasterwork, painting and the entrance plaque.' }],
    tips: ['Use No. 24 Zhupu North Road to locate the lane.', 'Interior access may change; follow signs on arrival.', 'It makes an easy first stop after the headquarters.'], mapQuery: 'General Residence Kinmen Zhupu North Road',
  },
  {
    ...originalSpot('wujiang-academy'), slug: 'wujiang-academy', href: '/nearby/wujiang-academy/', name: 'Wujiang Academy', imageAlt: 'Red-brick Zhu Xi shrine at Wujiang Academy', distance: 'A few minutes away', walk: 'About 4–5 minutes on foot', stay: 'Allow 15–25 minutes', heritage: 'Zhu Xi Shrine is a national monument',
    note: 'A major educational site whose Zhu Xi shrine preserves Kinmen’s scholarly tradition.', lead: 'Quiet brick courtyards and the Zhu Xi shrine contrast strongly with the nearby market streets.',
    history: 'Founded during the Qing Qianlong era, Wujiang Academy became an important centre of learning. The Zhu Xi shrine honours the philosopher whose service in Tong’an influenced Kinmen’s educational culture.',
    highlights: [{ title: 'Zhu Xi Shrine', text: 'A Minnan red-brick building with a plaque inscribed by historian Qian Mu.' }, { title: 'Teaching halls', text: 'The plan shows how teaching, ritual and accommodation shared the academy.' }, { title: 'Stone records', text: 'Inscriptions concerning academy funding are important evidence for local education.' }],
    tips: ['Keep voices low in ritual and display areas.', 'Morning light is gentle in the brick courtyards.', 'Combine it with the General’s Residence and City God Temple.'], mapQuery: 'Wujiang Academy Kinmen',
  },
  {
    ...originalSpot('kuige'), slug: 'kuige', href: '/nearby/kuige/', name: 'Kuige (Kuixing Pavilion)', imageAlt: 'The hexagonal Kuixing Pavilion in Kinmen', distance: 'A few minutes away', walk: 'About 4–6 minutes on foot', stay: 'Allow 10–15 minutes', heritage: 'County monument',
    note: 'A hexagonal Qing pavilion dedicated to the deity of literature and examination success.', lead: 'Small in scale but conspicuous among the shophouses, Kuige has two levels and sharply lifted roof ridges.',
    history: 'Merchant Lin Feizhang funded the pavilion, begun in 1836 and completed two years later. The enshrined Kuixing represents literary achievement and the hopes of local examination candidates.',
    highlights: [{ title: 'Hexagonal, two-storey form', text: 'The unusual plan and stacked eaves change shape as you walk around.' }, { title: 'Kuixing belief', text: 'The pavilion is tangible evidence of Houpu’s scholarly aspirations.' }, { title: 'Minnan roofline', text: 'Upturned ridges, scrollwork and red tiles create a light silhouette.' }],
    tips: ['A vertical frame captures the complete pavilion.', 'A wide lens helps in the confined surroundings.', 'Continue to the memorial arch and Mofan Street.'], mapQuery: 'Kuixing Pavilion Kinmen',
  },
  {
    ...originalSpot('city-god-temple'), slug: 'city-god-temple', href: '/nearby/city-god-temple/', name: 'Wudao City God Temple', imageAlt: 'Forecourt and decorated main hall of Wudao City God Temple', distance: 'A few minutes away', walk: 'About 5–7 minutes on foot', stay: 'Allow 15–25 minutes', heritage: 'Houpu religious centre',
    note: 'A centre of belief that grew with the headquarters; its annual procession is a major Kinmen tradition.', lead: 'More than a temple, this stop explains how a military-administrative centre developed into a market and community.',
    history: 'When the headquarters moved to Houpu in 1680, City God worship was also brought from the old walled city. The procession on the twelfth day of the fourth lunar month now draws participants from across Kinmen.',
    highlights: [{ title: 'Rich temple decoration', text: 'Dragon columns, carving, painting and layered brackets cover the façade.' }, { title: 'City God of the district', text: 'The cult reflects the interaction of official administration and local belief.' }, { title: 'Annual procession', text: 'Sedan chairs and performance troupes make this one of Houpu’s busiest events.' }],
    tips: ['Keep your voice low and ask before photographing worship.', 'Allow extra time during festivals and traffic controls.', 'The forecourt gives a good overview of the roof and stonework.'], mapQuery: 'Wudao City God Temple Kinmen',
  },
  {
    ...originalSpot('model-street'), slug: 'model-street', href: '/nearby/model-street/', name: 'Mofan Street', imageAlt: 'Red-brick arcades along Mofan Street', distance: 'A few minutes away', walk: 'About 3–5 minutes on foot', stay: 'Allow 20–40 minutes', heritage: 'Historic district',
    note: 'Houpu’s most photogenic old street, lined with consistent red-brick shophouses and arcades.', lead: 'The best-known red-brick arcade street in central Houpu.', history: '', highlights: [], tips: [], mapQuery: 'Mofan Street Kinmen',
  },
];

export function localizedNearby(locale: TranslatedLocale) {
  return locale === 'en' ? englishNearbySpots : hansNearbySpots;
}
