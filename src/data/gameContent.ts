/**
 * Art-directed chapter-one roster. Existing names/lore follow DESIGN_REFERENCE §17.
 * ⚠️ PLACEHOLDER: 구미호·홍도깨비, skill names, story, item stats and economy are
 * original playable-prototype content, not claimed to be the missing full design.
 */
import type { Element, UnitDefinition } from '../types/unit';
import { EXPANDED } from './expandedRoster';
import { CHOREOGRAPHIES } from './combatChoreography';
export type Role = '공격' | '수호' | '치유' | '술사';
export interface Spirit extends UnitDefinition {
  role: Role; title: string; atlas: 'spirits' | 'monsters' | 'roster-a' | 'roster-b' | 'roster-c' | 'bosses'; art: number; storyOnly?:boolean;
  skill: string; ultimate: string; quote: string;
}
export const SPIRITS: Spirit[] = [
  { id:'gumiho', name:'구미호', rarity:5, element:'화', region:'적요림', role:'술사', title:'달빛에 피어난 아홉 인연', atlas:'spirits', art:5, skill:'여우불', ultimate:'구미화연', quote:'길을 잃었다면, 내 손을 잡아.', flavorText:'달이 가장 밝은 밤, 아홉 갈래의 꼬리가 숲의 길을 비춘다. 사람을 홀린다는 소문과 달리 길 잃은 영혼을 집으로 데려다주는 다정한 요괴.' },
  { id:'samsindongja', name:'삼신동자', rarity:5, element:'목', region:'적요림', role:'치유', title:'천 년의 생명을 품은 아이', atlas:'spirits', art:0, skill:'산삼의 숨결', ultimate:'만령소생', quote:'아프지 마. 내가 곁에 있을게.', flavorText:'천년 묵은 산삼이 화한 동자신. 순수한 자에게 단 한 번의 치유를 베푼다는 전설이 있다.' },
  { id:'mangeomhon', name:'만검혼', rarity:5, element:'금', region:'운봉협', role:'공격', title:'잊힌 검들의 마지막 노래', atlas:'spirits', art:1, skill:'백검난무', ultimate:'만검귀종', quote:'부러진 검에도, 지킬 것은 남아 있다.', flavorText:'부러지고 버려진 모든 검의 원념이 뭉쳐 태어난 검령. 주인을 잃은 검의 기억을 하나도 잊지 않는다.' },
  { id:'jeogyeom', name:'적염귀왕', rarity:5, element:'화', region:'백귀정', role:'공격', title:'꺼지지 않는 붉은 맹세', atlas:'spirits', art:2, skill:'적염권', ultimate:'귀왕강림', quote:'내 불꽃은 동료를 태우지 않아.', flavorText:'백귀의 왕좌를 버리고 세상을 걷는 어린 귀왕. 작은 몸 안에 산을 태울 만큼 뜨거운 불씨를 품었다.' },
  { id:'simyeon', name:'심연마갈', rarity:5, element:'수', region:'나가라 사원', role:'술사', title:'깊은 물결의 속삭임', atlas:'spirits', art:3, skill:'청해의 파문', ultimate:'심연해일', quote:'고요한 물이 가장 깊은 법이지.', flavorText:'아무도 닿지 못하는 심연의 문을 지키는 물의 정령. 파도에 실려 온 이름들을 오래도록 기억한다.' },
  { id:'jibu', name:'지부신구', rarity:5, element:'토', region:'초원의 하늘', role:'수호', title:'세월을 등에 진 수호자', atlas:'spirits', art:4, skill:'현무의 결계', ultimate:'대지불멸', quote:'천천히 가도 괜찮아. 함께라면.', flavorText:'대지의 기억을 등에 새긴 신령한 거북. 무너진 길 위에 새 발판을 놓으며 여행자를 지킨다.' },
  { id:'sangun', name:'산군', rarity:3, element:'목', region:'적요림', role:'수호', title:'산신당의 충직한 파수꾼', atlas:'monsters', art:0, skill:'산군의 포효', ultimate:'백호진격', quote:'이 숲에서만큼은, 내가 지킨다.', flavorText:'적요림 산신당의 옛 수호자. 산신령을 대신해 자원한 호랑이 정령.' },
  { id:'jungnimbaem', name:'죽림뱀', rarity:2, element:'목', region:'운봉협', role:'공격', title:'대나무 사이 작은 그림자', atlas:'monsters', art:1, skill:'죽엽비수', ultimate:'녹림쇄도', quote:'쉿, 대나무가 이야기를 하고 있어.', flavorText:'죽림 수련장의 대나무 틈에 서식하며 문파 제자들의 수련을 지켜보다 눌러앉았다.' },
  { id:'japchojeongryeong', name:'잡초정령', rarity:1, element:'목', region:'운봉협', role:'치유', title:'작지만 질긴 생명', atlas:'monsters', art:2, skill:'새싹 치유', ultimate:'초록빛 축복', quote:'내일도 여기서 자랄 거야!', flavorText:'협곡 바위틈 어디에나 뿌리내리는 끈질긴 잡초에서 태어난 가장 흔한 정령.' },
  { id:'heugmu-imugiwang', name:'흑무 이무기왕', rarity:4, element:'목', region:'운봉협', role:'술사', title:'안개 너머 잠든 용의 꿈', atlas:'monsters', art:3, skill:'흑무탄', ultimate:'암룡승천', quote:'아직 용은 아니지만, 언젠가는.', flavorText:'협곡 아래 봉인되어 있던 사룡의 곁에서 살아남아 자라난 새끼.' },
  { id:'mansudogun', name:'만수도군', rarity:5, element:'목', region:'적요림', role:'치유', title:'만 그루 나무의 오랜 벗', atlas:'monsters', art:4, skill:'녹음의 축복', ultimate:'만수개화', quote:'천 년을 기다려도, 봄은 돌아오지.', flavorText:'오경수호신. 적요림 숲 하나만을 돌본다는 지역 산신. 사람들에게는 오래된 목격담으로만 전해진다.' },
  { id:'dokkaebi', name:'홍도깨비', rarity:4, element:'화', region:'적요림', role:'수호', title:'불꽃 방망이의 주인', atlas:'monsters', art:5, skill:'도깨비 강타', ultimate:'백귀야행', quote:'한 판 놀아볼 테냐?', flavorText:'잊힌 산길에서 방망이를 두드리는 도깨비. 웃음소리는 크지만 약한 이에게는 한없이 마음이 약하다.' },
];
SPIRITS.find(d=>d.id==='dokkaebi')!.name='도깨비감투대장';
SPIRITS.find(d=>d.id==='dokkaebi')!.element='토';
SPIRITS.push(...EXPANDED);
const BOSS_IDS=['boar-shadow','underworld-reaper','shrine-shadow','cursed-dragon','gwijang','honwon'];
const BOSS_NAMES=['그림자 멧돼지','흑차사','산신령의 그림자','폭주 사룡','귀장','혼원'];
export const BOSS_ART:Spirit[]=BOSS_IDS.map((id,i)=>({...SPIRITS[0],id,name:BOSS_NAMES[i],atlas:'bosses',art:i,role:'공격',element:(['토','목','목','수','금','화'] as Element[])[i],skill:['그림자 돌진','명부의 사슬','검은 뿌리','사룡의 숨결','경계 절단','태초의 균열'][i],ultimate:['침식의 포효','망자의 행렬','뒤틀린 산신당','암룡승천','육계 봉인','혼원 귀환'][i]}));
export const spiritById = (id: string): Spirit => SPIRITS.find(s=>s.id===id) ?? BOSS_ART.find(s=>s.id===id) ?? SPIRITS[0];
for(const spirit of [...SPIRITS,...BOSS_ART]){const identity=CHOREOGRAPHIES[spirit.id];if(identity){spirit.skill=identity.skill;spirit.ultimate=identity.ultimate;}}
export const ELEMENT_COLOR: Record<Element,string> = { 목:'#92c98b', 화:'#ec907c', 토:'#cfb680', 금:'#d3dce7', 수:'#78c6df' };
export const ELEMENT_HAN: Record<Element,string> = { 목:'木', 화:'火', 토:'土', 금:'金', 수:'水' };
export const RARITY_NAMES = ['','잡귀','영물','신수','신장','신격'];
export type EquipSlot = 'weapon' | 'armor' | 'relic' | 'talisman';
export interface RelicDef { id:string; name:string; slot:EquipSlot; art:number; element:Element; stat:'atk'|'def'|'hp'; value:number; lore:string; grade?:number }
export const RELICS: RelicDef[] = [
  {id:'jade-sword',name:'청령옥검',slot:'weapon',art:0,element:'목',stat:'atk',value:48,lore:'오래된 산신당에 잠들어 있던 비취빛 검.'},
  {id:'phoenix-robe',name:'적봉의 장포',slot:'armor',art:1,element:'화',stat:'def',value:36,lore:'불사조의 깃을 수놓은 붉은 비단 예복.'},
  {id:'moon-pendant',name:'월영 목걸이',slot:'relic',art:2,element:'수',stat:'hp',value:260,lore:'밤하늘의 달 한 조각을 담은 푸른 신물.'},
  {id:'spirit-scroll',name:'벽사의 영부',slot:'talisman',art:3,element:'화',stat:'atk',value:52,lore:'사악한 기운을 물리치는 정화의 부적.'},
  {id:'forest-ring',name:'녹림의 가락지',slot:'relic',art:4,element:'목',stat:'hp',value:240,lore:'만수도군의 축복을 품은 옥빛 가락지.'},
  {id:'crimson-flask',name:'홍옥 영롱병',slot:'armor',art:5,element:'화',stat:'def',value:40,lore:'붉은 안개가 사용자를 감싸 보호하는 영병.'},
];
export const SLOT_NAMES: Record<EquipSlot,string> = {weapon:'병기',armor:'보구',relic:'영패',talisman:'부적'};
export const GEAR_SLOTS:EquipSlot[]=['weapon','armor','relic','talisman'];
export const GEAR_GRADES=['','범상','정련','희귀','영웅','전설'];
for(const element of ['목','화','토','금','수'] as Element[])for(const slot of GEAR_SLOTS)for(let grade=1;grade<=5;grade++){
  const idx=GEAR_SLOTS.indexOf(slot),prefix={목:'청림',화:'적염',토:'현암',금:'백은',수:'청해'}[element];
  RELICS.push({id:`gear-${['목','화','토','금','수'].indexOf(element)}-${slot}-${grade}`,name:`${prefix} ${['영검','수호경','영패','진명부'][idx]}`,slot,element,grade,art:[0,5,2,3][idx],stat:slot==='armor'?'def':slot==='relic'?'hp':'atk',value:Math.round([30,24,160,22][idx]*2.4**(grade-1)),lore:`${element}의 기운을 새긴 ${GEAR_GRADES[grade]} ${SLOT_NAMES[slot]}. 같은 오행의 장비를 모으면 공명이 깊어진다.`});
}
export const STAT_NAMES = { atk:'공격력', def:'방어력', hp:'생명력' };
export const STAGE_NAMES = ['숲의 들머리','이슬 맺힌 오솔길','반딧불의 인도','길 잃은 영혼','울음 그친 산신당','여우비 내리는 길','안개 속의 속삭임','오래된 약속','달빛 징검다리','그림자 도깨비','부서진 수호석','메아리의 골짜기','잠들지 않는 숲','영혼이 머무는 샘','흑무의 습격','붉어진 나뭇잎','잊힌 신의 이름','결계 너머','천년목의 뿌리','적요림의 심장'];
export const STAGE_STORIES = [
  '숲이 유난히 조용한 밤. 길 위에 떨어진 작은 부적이 희미한 빛을 내기 시작했다. 구미호는 말없이 당신을 돌아본다.',
  '발끝에 걸린 이슬마다 누군가의 기억이 어른거린다. 숲의 정령들이 전하려는 이야기에 귀를 기울여 보자.',
  '깊은 숲에서 산신당의 종소리가 들린다. 사라진 수호자의 흔적을 따라, 인연의 실이 이어진다.',
  '천년목의 심장이 검은 안개에 잠겨 있다. 함께 걸어온 요괴들과 마지막 결계를 넘어 숲의 빛을 되찾자.',
];
