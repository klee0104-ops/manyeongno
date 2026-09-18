export type Delivery='melee'|'projectile'|'ground'|'beam'|'aura';
export type Gesture='slash'|'thrust'|'punch'|'slam'|'pounce'|'bite'|'fan'|'cast'|'shield'|'staff'|'wing'|'spin';
export type Pattern='single'|'fan'|'orbit'|'cross'|'eruption'|'ripple'|'chain'|'rain'|'bloom'|'ward'|'breath';
export type CombatSlot='basicAttack'|'skill1'|'skill2'|'ultimate';
export interface Choreography {id:string;weapon:string;gesture:Gesture;delivery:Delivery;effect:string;pattern:Pattern;skill:string;skill2:string;ultimate:string;seal:string;tempo:number}
type Row=[string,string,Gesture,Delivery,string,Pattern,string,string,string,string,number];
// Deliberate identities for every collectible and boss, including the modest spirits.
const rows:Row[]=[
 ['gumiho','영혼의 방울·붉은 부적','cast','projectile','foxfire','orbit','여우불','홍련 부적','구미화연','狐',1],
 ['samsindongja','인삼 지팡이','staff','projectile','leaf','bloom','산삼의 숨결','삼신의 새싹','만령소생','生',1.1],
 ['mangeomhon','장검·부유검','slash','melee','blade','cross','백검난무','비검 연참','만검귀종','劍',.86],
 ['jeogyeom','용암 권갑','punch','melee','fist','eruption','적염권','홍련 연권','귀왕강림','炎',.9],
 ['simyeon','쌍월 물결 부채','fan','projectile','tide','fan','청해의 파문','쌍월 수무','심연해일','海',1.05],
 ['jibu','현무 방패·돌망치','shield','melee','stone','ward','현무의 결계','현무 방벽','대지불멸','玄',1.2],
 ['sangun','백호 발톱','pounce','melee','claw','cross','산군의 포효','산림 수호격','백호진격','虎',1.03],
 ['jungnimbaem','대나무 독니','bite','melee','fang','fan','죽엽비수','죽림 독무','녹림쇄도','竹',.8],
 ['japchojeongryeong','꽃가루','staff','projectile','bloom','bloom','새싹 치유','풀잎 이슬','초록빛 축복','芽',1.15],
 ['heugmu-imugiwang','흑무 용주','cast','beam','mist','breath','흑무탄','독룡의 숨','암룡승천','龍',1.1],
 ['mansudogun','천년목 지팡이','staff','ground','roots','bloom','녹음의 축복','천년목의 숨','만수개화','森',1.2],
 ['dokkaebi','가시 방망이','slam','melee','club','eruption','도깨비 강타','방망이 지진','백귀야행','鬼',1.12],
 ['fox-god','천년 영화','cast','projectile','foxfire','rain','천년의 불씨','구화 성진','천호천화','靈',1.18],
 ['wolf-star','별빛 수호 발톱','pounce','melee','claw','ward','성랑의 발톱','별무리 방벽','천랑성진','星',1.14],
 ['sword-founder','태허 고검','thrust','melee','blade','rain','태허 일섬','천검 낙성','검선무극','仙',.94],
 ['ancient-dragon','태고 용주','cast','beam','tide','breath','용왕의 수류','창해 용식','태고창해','滄',1.25],
 ['judge','명부 붓·사슬','cast','ground','chain','chain','명부의 낙인','인과의 사슬','생사판결','判',1.16],
 ['fire-fox','화염 꼬리','spin','melee','foxfire','orbit','화미 선회','천년 잔화','불여우 윤무','焰',.88],
 ['soul-flame','혼불 등잔','cast','projectile','lantern','orbit','혼등 점화','혼백 유성','백혼등제','魂',1.04],
 ['red-oni','오니 철퇴','slam','melee','club','ward','적안 철퇴','오니 성벽','귀문진압','門',1.22],
 ['thunder-bird','뇌익 깃날','wing','melee','storm','chain','뇌익 강습','금뢰 연쇄','황금천뢰','雷',.83],
 ['silver-guard','은빛 검패','shield','melee','blade','ward','은검 반격','은빛 호법진','불괴은성','護',1.06],
 ['silver-wolf','서리 송곳니','bite','melee','ice','cross','빙랑 추격','서리 발톱','월하빙아','狼',.82],
 ['ferryman','망자 노','slam','melee','tide','ripple','명하 노격','나룻배 결계','망자도하','渡',1.19],
 ['bamboo-spirit','대나무 가지','staff','projectile','leaf','bloom','죽순의 숨','대숲의 위로','청죽만생','筍',1.13],
 ['fire-bandit','불붙은 도끼','slash','melee','flame','cross','화적 도끼','불길 가르기','홍염약탈','斧',.98],
 ['canyon-hawk','열풍 날개','wing','melee','feather','fan','협곡 급강하','열풍 깃날','홍풍천격','隼',.79],
 ['stone-general','석창·석갑','thrust','melee','stone','ward','석창 찌르기','장군의 석갑','천암진군','將',1.26],
 ['ovoo-stone','오보 성석','shield','ground','stone','ripple','성석 울림','초원의 돌벽','대초원 결계','岩',1.3],
 ['bronze-bell','황동 범종','cast','beam','bell','ripple','황동 종울림','파사의 공명','금종진혼','鐘',1.17],
 ['immortal-crane','학의 깃','wing','projectile','feather','bloom','백학의 깃','선풍 치유','천학귀환','鶴',1.04],
 ['river-messenger','강물 리본','fan','projectile','tide','chain','하신의 물살','물결 사슬','강여신의 부름','江',1.1],
 ['ice-river','얼음 방패','shield','ground','ice','ward','빙하 돌출','얼음강 장벽','만년빙하','氷',1.2],
 ['jungle-frog','독액 혀','bite','projectile','venom','single','맹독 혓바닥','독비늘 비','독연못 도약','毒',.84],
 ['jungle-monkey','정글 나무봉','spin','melee','club','cross','덩굴 봉술','원숭이 연타','정글난무','猿',.86],
 ['wildfire-fox','들불 앞발','pounce','melee','flame','single','들불 덮치기','산불 꼬리','야화질주','野',.81],
 ['temple-snake','불의 방울','cast','projectile','bell','orbit','사원 방울불','염사 주문','화륜사무','蛇',1.02],
 ['fire-prankster','장난 불꽃','spin','projectile','flame','fan','불씨 던지기','도깨비 폭죽','장난불 축제','戱',.91],
 ['alley-ghost','골목 그림자 손','punch','melee','mist','cross','그림자 손짓','골목 뒤치기','밤거리 장난','影',.89],
 ['dry-bones','뼈 곤봉','slam','melee','bone','single','뼈다귀 강타','백골 조각비','마른강 진동','骨',1.08],
 ['shrine-bellkeeper','산신당 종추','shield','melee','bell','ward','종추 받기','산신당 수호종','산울림 결계','守',1.18],
 ['festival-mask','축제 탈·부채','fan','projectile','mask','fan','탈춤 바람','금빛 탈놀이','백면축제','面',.97],
 ['steppe-falcon','은빛 깃날','wing','melee','feather','cross','초원 쪼기','은익 급습','창공비상','翼',.76],
 ['rusted-sword','녹슨 장검','slash','melee','blade','single','녹슨 베기','잔검 떨림','유검의 원한','銹',1.02],
 ['hot-spring-ghost','따뜻한 온천수','cast','projectile','steam','bloom','온천의 온기','치유의 수증기','만물온탕','溫',1.2],
 ['brook-child','조약돌 물수제비','fan','projectile','ripple','ripple','시냇물 손길','물수제비','냇가의 노래','溪',1.02],
 ['waterfall-drake','폭포 용식','cast','beam','tide','breath','폭포 물줄기','이무기 수포','천폭승천','瀑',1.09],
 ['bamboo-fairy','나뭇잎 부채','fan','projectile','leaf','bloom','죽엽 치유','잎새 춤','푸른잎 축복','葉',.95],
 ['floating-moss','이끼 갑옷','shield','ground','roots','ward','이끼 감싸기','뿌리 버팀','녹음의 요새','苔',1.27],
 ['firefly','반딧불 빛','wing','projectile','lantern','bloom','반딧불 위로','작은 등불','별빛 반딧불','燈',.93],
 ['mosquito','불침','thrust','melee','needle','single','불침 찌르기','혈염 돌격','홍침질주','針',.74],
 ['campfire','모닥불 불씨','cast','projectile','flame','eruption','모닥불 튀기','장작 불기둥','밤불의 춤','火',1.12],
 ['eyeball-goblin','수호의 눈','shield','beam','eye','ward','눈빛 응시','석안 결계','천리안 수호','眼',1.1],
 ['pebble-goblin','돌 주먹','punch','melee','stone','single','돌주먹 콩','돌멩이 막기','바위두드림','石',1.03],
 ['mud-child','진흙 손','punch','ground','mud','ward','진흙 뭉치','흙벽 쌓기','대지의 품','土',1.15],
 ['rat','날카로운 이빨','bite','melee','fang','single','앞니 콕','잔발 재습','군서질주','鼠',.73],
 ['pebble-spirit','금속 조약돌','shield','melee','coin','ripple','조약돌 박치기','작은 돌울림','금석의 약속','礫',1.14],
 ['coin-ghost','엽전 고리','spin','projectile','coin','orbit','엽전 던지기','금전 연환','천금낙우','錢',.99],
 ['waterdrop','물방울','cast','projectile','ripple','bloom','방울의 위로','맑은 물방울','생명의 샘','水',1.08],
 ['mudwater','흙탕 파도','fan','ground','mud','ripple','흙탕 물결','탁류 소용돌이','진창범람','濁',1.16],
 ['dew-spirit','이슬 결정','cast','projectile','ice','bloom','새벽 이슬','이슬의 반짝임','여명정화','露',1.01],
 ['story-swordsman','경계의 검','thrust','melee','blade','cross','경계 일섬','청명 검로','무상검결','斬',.87],
 ['story-priestess','여우 신부','cast','projectile','talisman','orbit','여우 신탁','홍부 제령','천호무제','巫',1.13],
 ['story-dancer','치유 비단','spin','projectile','petal','bloom','비단의 기도','연화 치유무','만화소생','花',1.07],
 ['story-prophet','예언의 수경','cast','beam','ripple','chain','수경 예언','별물의 궤적','미래의 해류','占',1.21],
 ['boar-shadow','그림자 엄니','pounce','melee','fang','eruption','그림자 돌진','침식 엄니','침식의 포효','衝',1.28],
 ['underworld-reaper','명부의 사슬낫','slash','melee','chain','chain','명부의 사슬','흑차사 수확','망자의 행렬','冥',1.16],
 ['shrine-shadow','뒤틀린 뿌리','staff','ground','roots','eruption','검은 뿌리','그늘의 속박','뒤틀린 산신당','陰',1.3],
 ['cursed-dragon','사룡의 용식','cast','beam','mist','breath','사룡의 숨결','저주의 용주','암룡승천','咒',1.24],
 ['gwijang','경계의 검','slash','melee','blade','chain','경계 절단','육계의 칼날','육계 봉인','界',1.02],
 ['honwon','태초의 균열','cast','ground','rift','eruption','태초의 균열','무극 파동','혼원 귀환','混',1.32],
];
export const CHOREOGRAPHIES:Record<string,Choreography>=Object.fromEntries(rows.map(([id,weapon,gesture,delivery,effect,pattern,skill,skill2,ultimate,seal,tempo])=>[id,{id,weapon,gesture,delivery,effect,pattern,skill,skill2,ultimate,seal,tempo}]));
export const choreography=(id:string)=>CHOREOGRAPHIES[id]??CHOREOGRAPHIES.gumiho;
export function combatTechnique(id:string,slot:CombatSlot,support=false){
 const p=choreography(id),special=slot!=='basicAttack',ultimate=slot==='ultimate';
 let delivery=p.delivery,pattern:Pattern=special?p.pattern:'single',effect=p.effect;
 if(support){delivery='aura';pattern=p.pattern==='ward'?'ward':'bloom';}
 // A shield is planted for an area ward; ordinary attacks still make real contact.
 else if(special&&p.pattern==='ward'){delivery='ground';effect=id==='jibu'?'stone':p.effect;}
 else if(ultimate&&p.delivery==='melee'&&['rain','chain'].includes(p.pattern)){delivery='projectile';}
 if(id==='jungnimbaem'&&special)delivery='projectile';
 if(id==='mangeomhon'&&ultimate){delivery='projectile';pattern='rain';}
 if(id==='simyeon'&&ultimate){delivery='beam';pattern='breath';}
 return {...p,delivery,pattern,effect,label:slot==='basicAttack'?'기본 공격':p[slot==='skill1'?'skill':slot],count:ultimate?(id==='gumiho'?9:5):special?(pattern==='single'?1:3):1,special,ultimate};
}
