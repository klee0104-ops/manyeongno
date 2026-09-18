/** Pure economy/state layer. §12 stamina, §14 gacha/growth/equipment, §16 formation.
 * ⚠️ PLACEHOLDER: rewards, item economy, starter grants, level costs and unique skill
 * effects are prototype balancing. The supplied design did not specify them.
 */
import { SPIRITS, RELICS, spiritById, type EquipSlot, type Spirit } from '../data/gameContent';
import { computeBattleStats } from '../config/unitBaseStats';
import { BASE_LEVEL_CAP } from '../config/skillCoefficients';
import { GachaBanner, type GachaBannerState } from './gacha';
import type { Difficulty } from '../types/stage';
import { campaign, campaignGate, campaignReward, recordEntry, rating, stageCost, staminaCap, codexBonus, validCampaign, hellRemaining, type CampaignSave } from './campaign';

export interface Owned { id:string; level:number; awakening:number; breakthrough:number; shards:number }
export interface Equipment { uid:string; defId:string; level:number; owner:string|null }
export interface GameSave {
  version:2; gold:number; gems:number; dust:number; stamina:number; staminaAt:number;
  owned:Owned[]; party:string[]; cleared:number[]; equipment:Equipment[];
  banner:GachaBannerState; totalPulls:number; claimed:string[]; offlineAt:number;
  sound:boolean; tutorial:boolean; profileName?:string; musicVolume?:number;
  campaign?:CampaignSave;
}
export const SAVE_KEY='manyeongno:adventure:v2';
export const createGame=(now=Date.now()):GameSave=>({
  version:2,gold:12500,gems:6000,dust:160,stamina:120,staminaAt:now,
  owned:['gumiho','samsindongja','jeogyeom','sangun','jungnimbaem'].map(id=>({id,level:1,awakening:0,breakthrough:0,shards:0})),
  party:['sangun','jeogyeom','gumiho','samsindongja','jungnimbaem'],cleared:[],
  equipment:RELICS.slice(0,6).map((d,i)=>({uid:`starter-${i}`,defId:d.id,level:0,owner:i===0?'jeogyeom':i===1?'sangun':i===2?'gumiho':null})),
  banner:{pullsSinceLastFiveStar:0,pickupGuaranteedNext:false},totalPulls:0,claimed:[],offlineAt:now,sound:false,tutorial:false,
});
const finiteInt=(v:unknown,min=0,max=1e9):v is number=>typeof v==='number'&&Number.isFinite(v)&&Number.isInteger(v)&&v>=min&&v<=max;
export function validateSave(raw:unknown):raw is GameSave {
  if(!raw || typeof raw!=='object') return false;
  const s=raw as GameSave;
  if(s.version!==2 || !['gold','gems','dust','totalPulls'].every(k=>finiteInt(s[k as keyof GameSave])) || !finiteInt(s.stamina,0,220))return false;
  if(s.campaign!==undefined&&!validCampaign(s.campaign))return false;
  if(!finiteInt(s.staminaAt,0,9e15)||!finiteInt(s.offlineAt,0,9e15)||typeof s.sound!=='boolean'||typeof s.tutorial!=='boolean')return false;
  if(s.profileName!==undefined&&(typeof s.profileName!=='string'||!s.profileName.trim()||Array.from(s.profileName).length>16))return false;
  if(s.musicVolume!==undefined&&(typeof s.musicVolume!=='number'||!Number.isFinite(s.musicVolume)||s.musicVolume<0||s.musicVolume>1))return false;
  if(!Array.isArray(s.owned)||!s.owned.length||s.owned.length>SPIRITS.length)return false;
  if(!s.owned.every(u=>u&&SPIRITS.some(d=>d.id===u.id)&&finiteInt(u.level,1,130)&&finiteInt(u.awakening,0,5)&&finiteInt(u.breakthrough,0,3)&&finiteInt(u.shards)))return false;
  if(new Set(s.owned.map(u=>u.id)).size!==s.owned.length)return false;
  if(!Array.isArray(s.party)||!s.party.length||s.party.length>5||new Set(s.party).size!==s.party.length||!s.party.every(id=>s.owned.some(u=>u.id===id)))return false;
  if(!Array.isArray(s.cleared)||s.cleared.some(n=>!finiteInt(n,1,20))||new Set(s.cleared).size!==s.cleared.length)return false;
  if(s.cleared.some(n=>n>1&&!s.cleared.includes(n-1)))return false;
  if(s.stamina>staminaCap(s))return false;
  if(s.campaign&&!s.party.includes(s.campaign.leader))return false;
  if(!Array.isArray(s.equipment)||s.equipment.length>2000||!s.equipment.every(e=>e&&typeof e.uid==='string'&&/^[a-z0-9-]{1,80}$/.test(e.uid)&&RELICS.some(r=>r.id===e.defId)&&finiteInt(e.level,0,15)&&(e.owner===null||s.owned.some(u=>u.id===e.owner))))return false;
  if(new Set(s.equipment.map(e=>e.uid)).size!==s.equipment.length)return false;
  const slots=s.equipment.filter(e=>e.owner).map(e=>`${e.owner}:${RELICS.find(r=>r.id===e.defId)!.slot}`);
  if(new Set(slots).size!==slots.length)return false;
  return !!s.banner&&finiteInt(s.banner.pullsSinceLastFiveStar,0,79)&&typeof s.banner.pickupGuaranteedNext==='boolean'&&Array.isArray(s.claimed)&&s.claimed.every(x=>typeof x==='string'&&/^[a-z0-9-]{1,50}$/.test(x));
}
export function recoverStamina(s:GameSave,now=Date.now()):void {
  const cap=staminaCap(s);if(s.stamina>=cap){s.stamina=cap;s.staminaAt=now;return;}
  const ticks=Math.max(0,Math.floor((now-s.staminaAt)/300000));
  s.stamina=Math.min(cap,s.stamina+ticks);
  s.staminaAt=s.stamina>=cap?now:Math.min(now,s.staminaAt+ticks*300000);
}
export function ownedStats(s:GameSave,id:string) {
  const u=s.owned.find(x=>x.id===id)??{level:1,awakening:0,breakthrough:0};
  const d=spiritById(id), base=computeBattleStats(d.rarity,d.element,u.level);
  // PDF does not specify the growth curve. Exponential late-level growth makes
  // the documented x200 final region reachable without scaling to the player.
  const growth=1.055**Math.max(0,u.level-20);base.atk*=growth;base.def*=growth;base.hp*=growth;
  const equipped=s.equipment.filter(e=>e.owner===id);
  for(const e of equipped){const item=RELICS.find(r=>r.id===e.defId)!;base[item.stat]+=Math.round(item.value*(1+e.level*0.15));}
  const setCount=equipped.filter(e=>RELICS.find(r=>r.id===e.defId)!.element===d.element).length,setBonus=setCount>=2;
  const boost=1+u.awakening*0.1+(u.breakthrough>0?0.08:0)+(setCount===4?.25:setBonus?.12:0)+codexBonus(s)+(s.campaign?.prestige??0)*.1;
  base.atk=Math.round(base.atk*boost);base.def=Math.round(base.def*boost);base.hp=Math.round(base.hp*boost);base.maxHp=base.hp;
  return {...base,setBonus,setCount,power:Math.round(base.atk*4+base.def*3+base.hp*0.6)};
}
export const partyPower=(s:GameSave)=>s.party.reduce((v,id)=>v+ownedStats(s,id).power,0);
export const levelCost=(level:number)=>({gold:150+level*90,dust:3+Math.floor(level/5)});
export function levelUp(s:GameSave,id:string):string|null {
  const u=s.owned.find(x=>x.id===id);if(!u)return '아직 보유하지 않은 요괴입니다.';
  if(u.level>=BASE_LEVEL_CAP[spiritById(id).rarity]+u.awakening*10)return '최대 레벨입니다. 각성으로 한도를 높이세요.';
  const cost=levelCost(u.level);if(s.gold<cost.gold||s.dust<cost.dust)return '금화 또는 요괴 정수가 부족합니다.';
  s.gold-=cost.gold;s.dust-=cost.dust;u.level++;return null;
}
export function awaken(s:GameSave,id:string):string|null {
  const u=s.owned.find(x=>x.id===id);if(!u)return '아직 보유하지 않은 요괴입니다.';
  if(u.awakening>=5)return '최대 각성입니다.';
  if(u.level<(u.awakening+1)*10)return `레벨 ${(u.awakening+1)*10}에 각성할 수 있습니다.`;
  const cost=(u.awakening+1)*2500,c=campaign(s),stones=u.awakening+1;
  if(s.gold<cost||(c.awakeStones[id]??0)<stones||c.chaos<stones)return `금화 ${cost} · 전용 각성석 ${stones} · 혼돈 파편 ${stones}개가 필요합니다.`;
  s.gold-=cost;c.awakeStones[id]-=stones;c.chaos-=stones;u.awakening++;return null;
}
export function breakthrough(s:GameSave,id:string):string|null {
  const u=s.owned.find(x=>x.id===id);if(!u)return '아직 보유하지 않은 요괴입니다.';
  if(u.breakthrough>=3)return '최대 돌파입니다.';
  if(u.shards<5)return '같은 요괴의 혼편 5개가 필요합니다.';
  u.shards-=5;u.breakthrough++;return null;
}
export function equip(s:GameSave,uid:string,owner:string|null):string|null {
  const e=s.equipment.find(x=>x.uid===uid);if(!e)return '신물을 찾지 못했습니다.';
  if(owner&&!s.owned.some(u=>u.id===owner))return '보유 요괴를 선택하세요.';
  const slot=RELICS.find(r=>r.id===e.defId)!.slot;
  if(owner)s.equipment.filter(x=>x.owner===owner&&RELICS.find(r=>r.id===x.defId)!.slot===slot).forEach(x=>x.owner=null);
  e.owner=owner;return null;
}
export function enhance(s:GameSave,uid:string):string|null {
  const e=s.equipment.find(x=>x.uid===uid);if(!e)return '신물을 찾지 못했습니다.';
  if(e.level>=15)return '최대 강화입니다.';
  const cost=(e.level+1)*350,c=campaign(s);if(s.gold<cost||c.enhanceStones<1)return '금화 또는 강화석이 부족합니다.';
  s.gold-=cost;c.enhanceStones--;e.level++;return null;
}
export function changeSlot(s:GameSave,slot:number,id:string):void {
  if(slot<0||slot>=5||!s.owned.some(u=>u.id===id))return;
  const old=s.party.indexOf(id);if(old>=0)[s.party[old],s.party[slot]]=[s.party[slot],s.party[old]];else s.party[slot]=id;
  s.party=s.party.filter(Boolean);
}
export function beginStage(s:GameSave,stage:number,now=Date.now(),chapter=1,difficulty:Difficulty='쉬움'):string|null {
  recoverStamina(s,now);
  const error=campaignGate(s,chapter,stage,difficulty,now);if(error)return error;
  const cost=stageCost(s,chapter,stage,difficulty);
  if(s.stamina<cost)return '행동력이 부족합니다. 자연 회복을 기다리거나 경계석으로 충전하세요.';
  if(!s.party.length)return '요괴를 편성해 주세요.';
  if(s.stamina===staminaCap(s))s.staminaAt=now;s.stamina-=cost;recordEntry(s,difficulty,now);return null;
}
export interface Reward {gold:number;gems:number;dust:number;first:boolean;item?:string}
export function stageReward(s:GameSave,stage:number,now=Date.now(),chapter=1,difficulty:Difficulty='쉬움',stars=3):Reward {
  return campaignReward(s,chapter,stage,difficulty,stars,now);
}
export function sweep(s:GameSave,stage:number,chapter=1,difficulty:Difficulty='쉬움',count=1,useTicket=false):Reward|string {
  if(rating(s,chapter,stage,difficulty)<3)return '해당 난이도에서 별 3개로 완료한 스테이지만 소탕할 수 있습니다.';
  if(!finiteInt(count,1,5))return '소탕은 한 번에 1~5회 가능합니다.';
  const c=campaign(s);recoverStamina(s);const error=campaignGate(s,chapter,stage,difficulty);if(error)return error;
  if(difficulty==='지옥'&&count>hellRemaining(s))return '이번 주 남은 명계 입장 횟수가 부족합니다.';
  const cost=stageCost(s,chapter,stage,difficulty)*count;
  if(useTicket?c.sweepTickets<count:s.stamina<cost)return useTicket?'소탕권이 부족합니다.':'행동력이 부족합니다.';
  if(useTicket)c.sweepTickets-=count;else {if(s.stamina===staminaCap(s))s.staminaAt=Date.now();s.stamina-=cost;}
  const sum:Reward={gold:0,dust:0,gems:0,first:false};for(let i=0;i<count;i++){recordEntry(s,difficulty,Date.now());const r=stageReward(s,stage,Date.now(),chapter,difficulty);sum.gold+=r.gold;sum.dust+=r.dust;sum.gems+=r.gems;}return sum;
}
export interface SummonResult {spirit:Spirit;isNew:boolean;guaranteed:boolean}
export function summon(s:GameSave,count:1|10,rng=Math.random):SummonResult[]|string {
  const price=count===10?2700:300;if(s.gems<price)return '경계석이 부족합니다. 탐험과 임무로 경계석을 모아보세요.';
  s.gems-=price;const banner=new GachaBanner(rng,s.banner);
  const pulls=count===10?banner.pullTen():[banner.pull()];
  const result=pulls.map(p=>{
    const pool=SPIRITS.filter(d=>!d.storyOnly&&d.rarity===p.rarity&&(p.rarity!==5||d.id!=='gumiho'));
    const spirit=p.isPickup?spiritById('gumiho'):pool[Math.min(pool.length-1,Math.floor(rng()*pool.length))];
    const owned=s.owned.find(u=>u.id===spirit.id);if(owned){const c=campaign(s);s.dust+=spirit.rarity*10;c.seals[spirit.id]=Math.min(5,(c.seals[spirit.id]??0)+1);if(spirit.rarity<=3)owned.shards++;else c.awakeStones[spirit.id]=(c.awakeStones[spirit.id]??0)+1;}else s.owned.push({id:spirit.id,level:1,awakening:0,breakthrough:0,shards:0});
    return {spirit,isNew:!owned,guaranteed:p.guaranteed};
  });
  s.banner=banner.getState();s.totalPulls+=count;return result;
}
export const QUESTS=[
  {id:'welcome',name:'첫 인연의 선물',desc:'만령로에 오신 것을 환영합니다',goal:1,progress:(_s:GameSave)=>1,gold:1500,gems:600,dust:20},
  {id:'stage-1',name:'숲으로 내딛는 첫걸음',desc:'스테이지 1개 클리어',goal:1,progress:(s:GameSave)=>s.cleared.length,gold:1200,gems:300,dust:20},
  {id:'stage-5',name:'산신당의 불빛',desc:'스테이지 5개 클리어',goal:5,progress:(s:GameSave)=>s.cleared.length,gold:3000,gems:600,dust:40},
  {id:'collect',name:'함께 걷는 영혼',desc:'서로 다른 요괴 8종 수집',goal:8,progress:(s:GameSave)=>s.owned.length,gold:2000,gems:500,dust:30},
  {id:'summon',name:'부적 너머의 인연',desc:'요괴 소환 10회',goal:10,progress:(s:GameSave)=>s.totalPulls,gold:1500,gems:300,dust:20},
  {id:'stage-20',name:'적요림의 수호자',desc:'챕터 1의 모든 스테이지 클리어',goal:20,progress:(s:GameSave)=>s.cleared.length,gold:10000,gems:2700,dust:100},
];
export function claimQuest(s:GameSave,id:string):string|null {
  const q=QUESTS.find(x=>x.id===id);if(!q||s.claimed.includes(id)||q.progress(s)<q.goal)return '아직 받을 수 없는 보상입니다.';
  s.claimed.push(id);s.gold+=q.gold;s.gems+=q.gems;s.dust+=q.dust;return null;
}
export function offlineReward(s:GameSave,now=Date.now()):number {
  return s.cleared.length?Math.min(480,Math.max(0,Math.floor((now-s.offlineAt)/60000)))*40:0;
}
export function claimOffline(s:GameSave,now=Date.now()):number {
  const gold=offlineReward(s,now);s.gold+=gold;s.offlineAt=now;return gold;
}
export function equipmentInSlot(s:GameSave,id:string,slot:EquipSlot){return s.equipment.find(e=>e.owner===id&&RELICS.find(r=>r.id===e.defId)!.slot===slot);}
