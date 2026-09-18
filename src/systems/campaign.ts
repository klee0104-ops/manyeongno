import type { GameSave, Reward } from './adventure';
import type { Difficulty } from '../types/stage';
import { STAMINA_COST } from '../types/stage';
import { DIFFICULTIES, REWARD_MULT, chapterInfo, stageKey } from '../data/campaign';
import { RELICS, GEAR_SLOTS, SPIRITS } from '../data/gameContent';

export interface CampaignSave {
 ratings:Record<string,number>; chapter:number; difficulty:Difficulty; leader:string;
 enhanceStones:number; chaos:number; awakeStones:Record<string,number>; seals:Record<string,number>;
 sweepTickets:number; attendance:number; lastAttendance:string; dailyClaims:string[];
 hellWeek:string; hellEntries:number; seenScenes:string[]; ending:''|'seal'|'unite'; prestige:number;
}
export function campaign(s:GameSave):CampaignSave {
 if(!s.campaign)s.campaign={ratings:Object.fromEntries(s.cleared.map(n=>[stageKey(1,n,'쉬움'),3])),chapter:1,difficulty:'쉬움',leader:s.party[0],enhanceStones:40,chaos:10,awakeStones:{},seals:{},sweepTickets:5,attendance:0,lastAttendance:'',dailyClaims:[],hellWeek:'',hellEntries:0,seenScenes:[],ending:'',prestige:0};
 return s.campaign;
}
export const rating=(s:GameSave,ch:number,st:number,d:Difficulty)=>s.campaign?.ratings[stageKey(ch,st,d)]??(ch===1&&d==='쉬움'&&s.cleared.includes(st)?3:0);
export function unlockedChapter(s:GameSave){let c=1;while(c<20&&rating(s,c,20,'쉬움'))c++;return c;}
export function unlockedStage(s:GameSave,ch:number,st:number,d:Difficulty){
 if(ch<1||ch>20||st<1||st>20||!Number.isInteger(ch)||!Number.isInteger(st)||!DIFFICULTIES.includes(d)||ch>unlockedChapter(s))return false;
 const tier=DIFFICULTIES.indexOf(d);
 return (!tier||rating(s,ch,20,DIFFICULTIES[tier-1])>0)&&(st===1||rating(s,ch,st-1,d)>0);
}
export const totalClears=(s:GameSave)=>Object.keys(s.campaign?.ratings??{}).filter(k=>k.endsWith('-0')).length||s.cleared.length;
export const accountLevel=(s:GameSave)=>Math.min(100,Math.floor(totalClears(s)/4));
export const staminaCap=(s:GameSave)=>120+accountLevel(s);
export const stageCost=(s:GameSave,ch:number,st:number,d:Difficulty)=>rating(s,ch,st,d)?STAMINA_COST[d]:6;
export const today=(now=Date.now())=>new Date(now+9*3600000).toISOString().slice(0,10);
const week=(now:number)=>String(Math.floor((now+9*3600000-3*86400000)/(7*86400000)));
export const hellRemaining=(s:GameSave,now=Date.now())=>s.campaign?.hellWeek===week(now)?Math.max(0,3-s.campaign.hellEntries):3;
export function campaignGate(s:GameSave,ch:number,st:number,d:Difficulty,now=Date.now()):string|null {
 if(!unlockedStage(s,ch,st,d))return '앞선 스테이지와 이전 난이도의 챕터 보스를 먼저 정화하세요.';
 const c=campaign(s);if(d==='지옥'&&c.hellWeek===week(now)&&c.hellEntries>=3)return '명계 난이도는 계정당 주 3회 입장할 수 있습니다. 월요일에 초기화됩니다.';
 return null;
}
export function recordEntry(s:GameSave,d:Difficulty,now:number){if(d!=='지옥')return;const c=campaign(s);if(c.hellWeek!==week(now)){c.hellWeek=week(now);c.hellEntries=0;}c.hellEntries++;}
export function campaignReward(s:GameSave,ch:number,st:number,d:Difficulty,stars:number,now=Date.now()):Reward {
 const c=campaign(s),key=stageKey(ch,st,d),first=!rating(s,ch,st,d),mult=REWARD_MULT[d];
 const r:Reward={gold:Math.round((400+80*st)*(1+(ch-1)*.6)*mult),dust:Math.round((8+Math.floor(st/3)+ch*2)*mult),gems:first?80:0,first};
 c.ratings[key]=Math.max(rating(s,ch,st,d),Math.min(3,Math.max(1,Math.floor(stars))));
 s.gold+=r.gold;s.dust+=r.dust;s.gems+=r.gems;
 c.enhanceStones+=st%5===0?5:1;if(st%5===0)c.chaos+=d==='쉬움'?1:2;
 if(ch===1&&d==='쉬움'&&!s.cleared.includes(st)){s.cleared.push(st);if(s.cleared.length===1)s.offlineAt=now;}
 if(first&&st%5===0&&s.equipment.length<2000){
  const grade=Math.min(5,1+Math.floor((ch-1)/5)+Math.floor(DIFFICULTIES.indexOf(d)/2));
  const item=RELICS.find(x=>x.id===`gear-${(ch+st/5)%5}-${GEAR_SLOTS[(st/5-1)%4]}-${grade}`)!;
  s.equipment.push({uid:`drop-${ch}-${st}-${DIFFICULTIES.indexOf(d)}-${c.prestige}`,defId:item.id,level:0,owner:null});r.item=item.name;
 }
 if(first&&st===20&&d==='쉬움'){
  const companion=({5:'story-swordsman',9:'story-priestess',11:'story-dancer',14:'story-prophet'} as Record<number,string>)[ch];
  if(companion&&!s.owned.some(u=>u.id===companion))s.owned.push({id:companion,level:Math.min(40,ch*3),awakening:0,breakthrough:0,shards:0});
 }
 return r;
}
export function refineEquipment(s:GameSave,uid:string):string|null {
 const selected=s.equipment.find(e=>e.uid===uid);if(!selected)return '장비를 선택하세요.';
 const def=RELICS.find(d=>d.id===selected.defId)!,grade=def.grade??3;
 if(grade>=5)return '전설 장비는 더 제련할 수 없습니다.';
 if(selected.owner||selected.level>0)return '장착하지 않은 +0 장비만 제련할 수 있습니다.';
 const materials=s.equipment.filter(e=>!e.owner&&e.level===0&&RELICS.some(d=>d.id===e.defId&&d.slot===def.slot&&(d.grade??3)===grade));
 if(materials.length<3)return `같은 부위·등급의 미장착 +0 장비 3개가 필요합니다. 현재 ${materials.length}개`;
 const cost=grade*1500;if(s.gold<cost)return `금화 ${cost}개가 필요합니다.`;
 const consume=[selected,...materials.filter(e=>e.uid!==uid).slice(0,2)];
 const next=RELICS.find(d=>d.slot===def.slot&&d.element===def.element&&d.grade===grade+1)!;
 s.gold-=cost;s.equipment=s.equipment.filter(e=>!consume.includes(e));s.equipment.push({uid:`refine-${Date.now()}-${Math.floor(Math.random()*100000)}`,defId:next.id,level:0,owner:null});return null;
}
export function craftEquipment(s:GameSave,slot:string,element:string):string|null {
 const d=RELICS.find(x=>x.slot===slot&&x.element===element&&x.grade===1);if(!d)return '제작할 부위와 오행을 선택하세요.';
 if(s.equipment.length>=2000)return '장비 보관함이 가득 찼습니다.';
 if(s.gold<600||s.dust<15)return '제작에는 금화 600과 요괴 정수 15가 필요합니다.';
 s.gold-=600;s.dust-=15;s.equipment.push({uid:`craft-${Date.now()}-${Math.floor(Math.random()*100000)}`,defId:d.id,level:0,owner:null});return null;
}
export function exchangeAwake(s:GameSave,id:string):string|null {
 if(!s.owned.some(u=>u.id===id))return '보유한 요괴를 선택하세요.';
 if(s.dust<100)return '각성석 교환에는 요괴 정수 100이 필요합니다.';
 s.dust-=100;const c=campaign(s);c.awakeStones[id]=(c.awakeStones[id]??0)+1;return null;
}
export function exchangeShards(s:GameSave,id:string):string|null {
 const u=s.owned.find(u=>u.id===id),c=campaign(s);if(!u||!(c.awakeStones[id]>0))return '해당 요괴의 전용 각성석 1개가 필요합니다.';
 c.awakeStones[id]--;u.shards+=5;return null;
}
export function attendance(s:GameSave,now=Date.now()):string|null {
 const c=campaign(s),date=today(now);if(c.lastAttendance>=date)return '오늘의 출석 선물을 이미 받았습니다.';
 c.lastAttendance=date;c.attendance=c.attendance%30+1;s.gold+=1000;s.gems+=100;c.sweepTickets++;
 if([7,14,21,30].includes(c.attendance)){s.gems+=500;c.chaos+=5;c.enhanceStones+=10;}return null;
}
export function dailyReward(s:GameSave,now=Date.now()):string|null {
 const c=campaign(s),date=today(now);if(c.dailyClaims.includes(date))return '오늘의 행동력을 이미 받았습니다.';
 if(s.stamina>=staminaCap(s))return '행동력이 가득 찼습니다. 탐험을 다녀온 뒤 받으세요.';
 c.dailyClaims=[date];s.stamina=Math.min(staminaCap(s),s.stamina+20);return null;
}
export function codexBonus(s:GameSave){const c=s.campaign,counts=['목','화','토','금','수'].map(e=>s.owned.filter(u=>SPIRITS.find(d=>d.id===u.id)?.element===e).length),sets=counts.reduce((n,v)=>n+(v>=20?.025:v>=10?.015:v>=5?.005:0),0);return Math.min(.2,s.owned.length*.001+(c?Object.values(c.seals).reduce((a,v)=>a+v,0)*.0003:0)+sets);}
export function codexPercent(s:GameSave){return s.owned.filter(u=>SPIRITS.some(d=>d.id===u.id&&!d.storyOnly&&d.id!=='gumiho')).length/60*100;}
export function claimCodex(s:GameSave,percent:number):string|null {const id=`dex-${percent}`;if(![10,30,50,70,100].includes(percent)||s.claimed.includes(id)||codexPercent(s)<percent)return '아직 받을 수 없는 도감 보상입니다.';s.claimed.push(id);s.gems+=percent*20;s.dust+=percent*3;campaign(s).chaos+=Math.ceil(percent/10);return null;}
export function reincarnate(s:GameSave):string|null {
 const c=campaign(s);if(!c.ending||!rating(s,20,20,'쉬움'))return '마지막 장을 완료하고 결말을 선택하면 환생할 수 있습니다.';
 c.prestige++;c.ratings={};c.chapter=1;c.difficulty='쉬움';c.ending='';c.seenScenes=[];s.cleared=[];s.stamina=staminaCap(s);s.gems+=2700;return null;
}
export function validCampaign(raw:CampaignSave):boolean {
 if(!raw||typeof raw!=='object')return false;
 const int=(n:unknown,max=1e9):n is number=>typeof n==='number'&&Number.isInteger(n)&&n>=0&&n<=max;
 const record=(r:unknown,max:number)=>!!r&&typeof r==='object'&&!Array.isArray(r)&&Object.entries(r).length<=2000&&Object.entries(r).every(([k,v])=>/^[a-z0-9-]{1,80}$/.test(k)&&int(v,max));
 return record(raw.ratings,3)&&Object.keys(raw.ratings).every(k=>/^([1-9]|1\d|20)-([1-9]|1\d|20)-[0-3]$/.test(k))&&int(raw.chapter,20)&&raw.chapter>0&&DIFFICULTIES.includes(raw.difficulty)&&SPIRITS.some(d=>d.id===raw.leader)&&['enhanceStones','chaos','sweepTickets','hellEntries','prestige'].every(k=>int(raw[k as keyof CampaignSave]))&&record(raw.awakeStones,1e6)&&record(raw.seals,5)&&int(raw.attendance,30)&&typeof raw.lastAttendance==='string'&&/^\d{4}-\d{2}-\d{2}$|^$/.test(raw.lastAttendance)&&typeof raw.hellWeek==='string'&&/^-?\d{1,10}$|^$/.test(raw.hellWeek)&&Array.isArray(raw.dailyClaims)&&raw.dailyClaims.length<=2&&raw.dailyClaims.every(x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x))&&Array.isArray(raw.seenScenes)&&raw.seenScenes.length<=128&&raw.seenScenes.every(x=>typeof x==='string'&&/^(prologue|(intro|outro|mid5|mid10|mid15)-([1-9]|1\d|20))$/.test(x))&&['','seal','unite'].includes(raw.ending);
}
export const collectedJades=(s:GameSave)=>[3,7,10,13,16,17].filter(ch=>rating(s,ch,20,'쉬움')).map(ch=>chapterInfo(ch).jade!);
