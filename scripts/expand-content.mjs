import fs from 'node:fs';
const rows = [
// id, name, rarity, element, region index, role, appearance for atlas production
['fox-god','천년호신',5,'화',2,'술사','majestic golden nine-tailed fox, white-red shrine robes, sun disk, fire beads'],
['wolf-star','천랑성군',5,'토',4,'수호','silver wolf-headed celestial king, broad indigo-gold armor, round star shield and spear'],
['sword-founder','검선조사',5,'금',1,'공격','elderly white-haired sword sage, black-white robes, long silver sword, floating jade sword ring'],
['ancient-dragon','태고용왕',5,'수',3,'술사','long turquoise coiled water dragon with pearl crown, ivory horns, flowing whiskers'],
['judge','명부지기 판관',4,'목',5,'술사','green-robed underworld magistrate, tall black hat, huge brush and book'],
['fire-fox','천년불여우',4,'화',0,'공격','orange quadruped fox with three blazing tails and golden forehead jewel'],
['soul-flame','혼불대신',4,'화',2,'술사','tall purple-red floating ghost flame wearing a cracked smiling mask, many small soul wisps'],
['red-oni','적안오니대장',4,'토',2,'수호','stocky blue oni with red eyes, heavy brown armor, huge stone club and shield'],
['thunder-bird','황금뇌익조왕',4,'금',3,'공격','golden eagle spirit with lightning wings and jeweled head crest'],
['silver-guard','은검호법',4,'금',1,'수호','silver-armored female guardian, short dark blue hair, large diamond shield and spear'],
['silver-wolf','은빛초원늑대왕',4,'수',4,'공격','large silver quadruped wolf with blue moon runes and flowing dark mane'],
['ferryman','명계뱃사공',4,'수',5,'수호','hooded blue-grey skeletal ferryman, wide straw hat, long wooden oar and lantern'],
['bamboo-spirit','대나무정령',3,'목',2,'치유','tiny slender green bamboo stalk creature, leafy bamboo arms, tiny bamboo flute'],
['fire-bandit','화적귀',3,'화',2,'공격','small red fiery masked bandit with two daggers and spiky orange hair'],
['canyon-hawk','협곡매',3,'화',1,'공격','brown-red flying hawk with long fiery tail feathers'],
['stone-general','석장군상',3,'토',1,'수호','heavy grey stone general statue with square helmet, huge rectangular shield and poleaxe'],
['ovoo-stone','오보의 수호석',3,'토',4,'수호','stacked round guardian stones with blue prayer ribbons, little glowing eyes and stone arms'],
['bronze-bell','황동성종',3,'금',3,'술사','animated bronze temple bell with elephant pattern, little limbs, golden sound rings'],
['immortal-crane','신선의 학',3,'금',1,'치유','elegant white crane with red crown, black wing tips, jade ribbon'],
['river-messenger','강여신의 사자',3,'수',3,'술사','blue water otter spirit holding a pearl on lotus leaf, flowing aquatic scarf'],
['ice-river','얼음강 정령',3,'수',4,'수호','small translucent icy bear with crystal shoulders, snowflake shield'],
['jungle-frog','정글독개구리요괴',2,'목',3,'공격','bright lime poison frog with purple spots, leaf cape, reed blowpipe'],
['jungle-monkey','정글원숭이요괴',2,'목',3,'공격','brown jungle monkey with leaf headband, curled tail, bamboo staff'],
['wildfire-fox','들불여우',2,'화',0,'공격','small russet fox cub with one flame tail and leaf ear'],
['temple-snake','사원방울뱀',2,'화',3,'술사','coiled coral red rattlesnake with gold bell tail and small temple crown'],
['fire-prankster','도깨비불장난꾼',2,'화',2,'술사','mischievous tiny orange fireball goblin holding two sparklers'],
['alley-ghost','골목장난귀',2,'토',2,'공격','round tan alley goblin with big ears, striped scarf and sling'],
['dry-bones','마른강뼈다귀요괴',2,'토',4,'공격','little sand-colored skeleton lizard with bone club and cracked pot helmet'],
['shrine-bellkeeper','산신당종지기',2,'토',0,'수호','small stout stone child with straw rain cape, bronze handbell and wooden shield'],
['festival-mask','축제탈요괴',2,'금',2,'술사','floating white theatrical festival mask with flowing red tassels and two paper arms'],
['steppe-falcon','초원매',2,'금',4,'공격','grey-white falcon perched with spread wings and blue ankle ribbons'],
['rusted-sword','녹슨검귀',2,'금',1,'공격','sentient rusty broken sword floating in pale silver ghost cloth'],
['hot-spring-ghost','온천물귀신',2,'수',2,'치유','round turquoise steam ghost with towel on head, little wooden bath bucket'],
['brook-child','냇가동자',2,'수',0,'치유','short blue-haired water child wearing white-blue short hanbok, reed flute and fish companion'],
['waterfall-drake','폭포이무기새끼',2,'수',1,'술사','tiny teal serpentine dragon with tiny horns and waterfall tail'],
['bamboo-fairy','대나무잎요정',1,'목',2,'치유','tiny green leaf fairy with bamboo-leaf wings and acorn hood'],
['floating-moss','부유이끼정령',1,'목',5,'수호','floating moss-covered stone with tiny roots, gold eyes and small sprout'],
['firefly','반딧불정령',1,'화',0,'치유','cute golden firefly spirit with translucent wings and glowing orange abdomen'],
['mosquito','모기귀',1,'화',3,'공격','small red mosquito imp with big eyes, long nose and transparent wings'],
['campfire','모닥불정령',1,'화',4,'술사','cute orange campfire creature sitting on three brown logs, coal eyes'],
['eyeball-goblin','눈알도깨비',1,'토',0,'수호','single-eyed tan goblin with stubby legs, stone shield and little horn'],
['pebble-goblin','돌멩이도깨비',1,'토',4,'수호','round brown pebble goblin with tiny arms and square rock fists'],
['mud-child','진흙동자',1,'토',3,'수호','little reddish clay child statue with lotus leaf hat and clay bowl'],
['rat','쥐요괴',1,'금',2,'공격','small grey rat yokai with coin in paws, tied red headband and curled tail'],
['pebble-spirit','조약돌정령',1,'금',4,'수호','smooth silver pebble sprite with crystalline metallic fins and purple eyes'],
['coin-ghost','엽전귀신',1,'금',2,'술사','floating old bronze coin with square hole face, small ghost arms and red string'],
['waterdrop','물방울귀신',1,'수',3,'치유','clear blue teardrop-shaped water ghost with bright face and two little fins'],
['mudwater','흙탕물귀',1,'수',1,'술사','round murky olive-blue puddle creature with floating twig hat and mud bubbles'],
['dew-spirit','이슬방울정령',1,'수',1,'치유','tiny pale aqua dewdrop fairy carried on a curved green leaf, glasslike wings'],
['story-swordsman','검선',4,'금',1,'공격','elderly grey-bearded wandering swordsman with weathered straw hat, white robes and iron sword'],
['story-priestess','여우무녀',4,'화',2,'술사','black-haired fox shrine maiden, red ears, amber-white robes and fan of red paper talismans'],
['story-dancer','사원무희',4,'목',3,'치유','brown-skinned temple dancer, black braided hair, ornate gold crown, emerald flowing scarf and lotus'],
['story-prophet','초원예언자',4,'수',4,'술사','elderly steppe shaman with white braids, indigo deel, bone necklace and crooked star staff'],
];
const regions=['적요림','운봉협','백귀정','나가라 사원','초원의 하늘','경계의 끝'];
const data=rows.map(([id,name,rarity,element,region,role,look],i)=>({id,name,rarity,element,region:regions[region],role,atlas:i<24?'roster-a':i<48?'roster-b':'roster-c',art:i%24,title:`${regions[region]}에 깃든 ${['','작은 영혼','신비한 인연','오랜 전설','수호의 의지','태초의 신격'][rarity]}`,skill:role==='치유'?'생명의 결':role==='수호'?'수호의 결':role==='공격'?'파사의 일격':'오행의 파동',ultimate:`${name} · 진명 해방`,quote:'다시 만날 인연은 길 위에 남는다.',flavorText:`${regions[region]}의 ${name}. ${element}의 기운을 품고 ${role==='치유'?'동료의 상처를 치유한다':role==='수호'?'전열에서 동료들을 지킨다':role==='공격'?'빠른 일격으로 적의 빈틈을 노린다':'신비한 술법으로 전장의 흐름을 바꾼다'}.`,storyOnly:String(id).startsWith('story-'),look}));
fs.writeFileSync('src/data/expandedRoster.ts',`import type { Spirit } from './gameContent';\nexport const EXPANDED:Spirit[]=${JSON.stringify(data.map(({look,...d})=>d),null,2)};\n`);
for(let page=0;page<3;page++){
 const units=data.slice(page*24,page*24+24);
 const last=page===2;
 const prompt=`Use case: stylized-concept. Asset: production RPG pixel-art creature atlas. Exactly ${last?'THREE columns by TWO rows (6 cells), landscape 1536x1024':'FOUR columns by SIX rows (24 cells), portrait 1024x1536'}. Every cell contains ONE completely different creature, full body, 20px transparent padding on every side, feet aligned near cell bottom. Transparent alpha background, NO words, NO borders, no shadows outside cells. Strict hard square pixel edges, high-end detailed 16-bit pixel art, cute 2.5-head humanoids and varied animal shapes. Korean/East Asian fantasy, consistent lighting and pixel scale, face THREE-QUARTER RIGHT in action-ready pose. Human women must have distinct weapons, silhouettes, hairstyles. Row-major ordered list, left to right then next row:\n${units.map((d,i)=>`${i+1}. ${d.look}`).join('\n')}${last?'\n6. stocky dark purple corrupted wild boar monster with big ivory tusks and smoky mane, on four legs.':''}\nPrecisely equal cells; each character must remain fully inside its own cell. Do not merge characters or omit any. No smooth painted rendering, pixel art only.`;
 fs.writeFileSync(`tmp/roster-${'abc'[page]}-prompt.txt`,prompt);
}
console.log(`Added ${data.length} unique yokai definitions; total summon roster 60 plus legacy fox and four companions.`);
