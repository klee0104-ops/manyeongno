import type { GameSave, Reward } from './adventure';
import { recoverStamina } from './adventure';
import { campaign, staminaCap, today, totalClears } from './campaign';
import { spiritById } from '../data/gameContent';
import type { Element } from '../types/unit';
export const DAILY_DUNGEONS=[
 {id:'gold',name:'도깨비 금고',mark:'財',element:'금',boss:'coin-ghost',chapter:4,subtitle:'잠든 엽전의 주인을 물리치고 금화를 모으세요.',reward:'금화',color:'#e3be75'},
 {id:'essence',name:'생명의 수림',mark:'生',element:'목',boss:'mansudogun',chapter:1,subtitle:'천년목의 시련을 넘어 요괴 정수를 얻으세요.',reward:'요괴 정수',color:'#a7d2a0'},
 {id:'forge',name:'홍염의 대장간',mark:'鍛',element:'화',boss:'red-oni',chapter:4,subtitle:'붉은 모루를 지키는 오니에게 강화석을 얻으세요.',reward:'강화석',color:'#ee9980'},
 {id:'awakening',name:'별빛 각성전',mark:'覺',element:'수',boss:'ancient-dragon',chapter:7,subtitle:'별의 수호자를 넘어 전용 각성석과 혼돈 파편을 얻으세요.',reward:'각성 재료',color:'#a5b9e8'},
] as const;
export type DailyId=typeof DAILY_DUNGEONS[number]['id'];
export interface ChallengeRun {id:string;kind:'daily'|'maze';dungeon:DailyId;tier:number;floor:number;day:string}
export interface ChallengeSave {day:string;entries:Record<DailyId,number>;bestTiers:Record<DailyId,number>;mazeBest:number;active?:ChallengeRun}
export interface ChallengeReward extends Reward {enhance:number;chaos:number;awakeId?:string;awakeCount:number;floor?:number}
const emptyRecord=()=>({gold:0,essence:0,forge:0,awakening:0});
export function challenges(s:GameSave):ChallengeSave {return s.challenges??(s.challenges={day:today(),entries:emptyRecord(),bestTiers:emptyRecord(),mazeBest:0});}
export const dailyDefinition=(id:string)=>DAILY_DUNGEONS.find(d=>d.id===id);
export const dailyRemaining=(s:GameSave,id:DailyId,now=Date.now())=>s.challenges?.day===today(now)?Math.max(0,3-s.challenges.entries[id]):3;
export const dailyTierUnlocked=(s:GameSave,tier:number)=>Number.isInteger(tier)&&tier>=1&&tier<=3&&totalClears(s)>=[0,10,30][tier-1];
export const mazeFloor=(s:GameSave)=>(s.challenges?.mazeBest??0)+1;
export const mazeElement=(floor:number):Element=>(['목','화','토','금','수'] as Element[])[(floor-1)%5];
export const mazeRule=(floor:number)=>({목:'생명의 결계 · 적 생명 +30%',화:'홍염의 결계 · 적 공격 +25%',토:'암석의 결계 · 적 방어 +45%',금:'검의 결계 · 적 공격·방어 +12%',수:'물결의 결계 · 적 생명 +15%, 보호막 8%'}[mazeElement(floor)]);
export function challengeGate(s:GameSave,kind:'daily'|'maze',id:string='gold',tier=1,now=Date.now()):string|null {
 if(!s.party.length)return '출전할 요괴를 먼저 편성하세요.';
 if(kind==='daily'){
  const d=dailyDefinition(id);if(!d)return '존재하지 않는 일일 던전입니다.';
  if(!dailyTierUnlocked(s,tier))return '2단계는 탐험 10곳, 3단계는 탐험 30곳을 정화하면 열립니다.';
  if(!dailyRemaining(s,d.id,now))return '오늘의 입장 횟수를 모두 사용했습니다. 한국 시간 자정에 다시 열립니다.';
 }
 if(s.stamina<(kind==='daily'?8:5))return '행동력이 부족합니다. 회복 후 다시 도전하세요.';
 return null;
}
export function beginChallenge(s:GameSave,kind:'daily'|'maze',id='gold',tier=1,now=Date.now()):ChallengeRun|string {
 recoverStamina(s,now);const error=challengeGate(s,kind,id,tier,now);if(error)return error;
 const c=challenges(s),day=today(now);if(c.day!==day){c.day=day;c.entries=emptyRecord();}
 if(s.stamina===staminaCap(s))s.staminaAt=now;s.stamina-=kind==='daily'?8:5;
 const dungeon=(dailyDefinition(id)?.id??'gold');if(kind==='daily')c.entries[dungeon]++;
 const run:ChallengeRun={id:`trial-${now}-${Math.random().toString(36).slice(2,10)}`,kind,dungeon,tier:kind==='daily'?tier:1,floor:kind==='maze'?mazeFloor(s):0,day};c.active=run;return {...run};
}
export function previewChallengeReward(s:GameSave,run:Pick<ChallengeRun,'kind'|'dungeon'|'tier'|'floor'>):ChallengeReward {
 const r:ChallengeReward={gold:0,gems:0,dust:0,first:false,enhance:0,chaos:0,awakeCount:0};
 if(run.kind==='maze'){
  const f=run.floor;r.gold=600+Math.min(100000,f*140);r.dust=8+Math.min(250,Math.floor(f*1.5));r.gems=f%5===0?100:0;r.enhance=f%5===0?5:1;r.chaos=f%5===0?2:0;r.first=true;r.floor=f;return r;
 }
 const t=run.tier;r.gold=run.dungeon==='gold'?3000*t:400*t;r.dust=run.dungeon==='essence'?60*t:8*t;r.enhance=run.dungeon==='forge'?12*t:0;
 if(run.dungeon==='awakening'){r.chaos=2*t;r.awakeCount=t;r.awakeId=campaign(s).leader;}
 return r;
}
/** A persisted admission ticket can be settled once, and never grants campaign clears. */
export function settleChallenge(s:GameSave,run:ChallengeRun,won:boolean):ChallengeReward|null {
 const c=challenges(s);if(c.active?.id!==run.id)return null;
 const ticket=c.active;delete c.active;if(!won)return null;
 if(ticket.kind==='maze'&&ticket.floor!==c.mazeBest+1)return null;
 const r=previewChallengeReward(s,ticket),camp=campaign(s);
 s.gold+=r.gold;s.dust+=r.dust;s.gems+=r.gems;camp.enhanceStones+=r.enhance;camp.chaos+=r.chaos;
 if(r.awakeId)camp.awakeStones[r.awakeId]=(camp.awakeStones[r.awakeId]??0)+r.awakeCount;
 if(ticket.kind==='maze')c.mazeBest=ticket.floor;else c.bestTiers[ticket.dungeon]=Math.max(c.bestTiers[ticket.dungeon],ticket.tier);
 return r;
}
export const challengeTitle=(run:ChallengeRun)=>run.kind==='maze'?`끝없는 미궁 · ${run.floor}층`:`${dailyDefinition(run.dungeon)!.name} · ${run.tier}단계`;
export const challengeRewardText=(r:ChallengeReward)=>[r.gold?`금화 ${r.gold.toLocaleString()}`:'',r.dust?`요괴 정수 ${r.dust}`:'',r.gems?`경계석 ${r.gems}`:'',r.enhance?`강화석 ${r.enhance}`:'',r.chaos?`혼돈 파편 ${r.chaos}`:'',r.awakeId?`${spiritById(r.awakeId).name} 각성석 ${r.awakeCount}`:''].filter(Boolean).join(' · ');
export function validChallenges(v:ChallengeSave):boolean {
 if(!v||typeof v!=='object'||Array.isArray(v))return false;
 const int=(n:unknown,max=1e9)=>typeof n==='number'&&Number.isInteger(n)&&n>=0&&n<=max;
 const date=(d:unknown)=>typeof d==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(d);
 const record=(r:unknown)=>!!r&&typeof r==='object'&&!Array.isArray(r)&&Object.keys(r).length===4&&DAILY_DUNGEONS.every(d=>int((r as Record<string,unknown>)[d.id],3));
 if(!date(v.day)||!record(v.entries)||!record(v.bestTiers)||!int(v.mazeBest,1000000))return false;
 const a=v.active;if(a===undefined)return true;
 return !!a&&typeof a==='object'&&typeof a.id==='string'&&/^trial-[a-z0-9-]{1,60}$/.test(a.id)&&['daily','maze'].includes(a.kind)&&!!dailyDefinition(a.dungeon)&&int(a.tier,3)&&a.tier>0&&int(a.floor,1000001)&&date(a.day)&&(a.kind==='daily'?a.floor===0:a.floor===v.mazeBest+1);
}
