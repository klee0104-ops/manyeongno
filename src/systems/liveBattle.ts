/** Incremental presentation-independent battle: §11 waves, §15 damage/skills, §16 rows.
 * ⚠️ PLACEHOLDER: unique healing/shield/AOE coefficients, enemy lineups and start gauge.
 */
import { SPIRITS, spiritById, type Role } from '../data/gameContent';
import type { Element } from '../types/unit';
import { ownedStats, type GameSave } from './adventure';
import { calculateDamage } from './damage';
import { effectiveElementMultiplier } from './battle';
import { DEFAULT_SKILL_COEFFICIENTS } from '../config/skillCoefficients';
import { effectiveSkillCoefficients, type SkillSlot } from './skills';
import { calculateEnemyStat, splitEnemyStat } from './enemyStat';
import { stageTypeForStageNum } from '../data/chapters';
import { chapterInfo } from '../data/campaign';
import type { Difficulty } from '../types/stage';

export interface Fighter {
  id:string; spiritId:string; name:string; side:'party'|'enemy'; element:Element; role:Role;
  hp:number; maxHp:number; atk:number; def:number; gauge:number; shield:number;
  rarity:1|2|3|4|5; awakening:0|1|2|3|4|5; breakthrough:0|1|2|3;
  turns:number; slot:number; boss:boolean; enraged:boolean; damage:number;
  cooldown1:number;cooldown2:number;ultimateCooldown:number;
}
export interface Hit {id:string;amount:number;kind:'damage'|'heal'|'shield';crit:boolean;absorbed?:number}
export interface BattleEvent {actor:string;label:string;hits:Hit[];ultimate:boolean;message:string;wave?:boolean;slot?:SkillSlot;phaseChange?:boolean}
export interface LiveBattle {
  stage:number;party:Fighter[];enemies:Fighter[];wave:number;waves:number;round:number;
  queue:string[];winner:'party'|'enemy'|null;events:BattleEvent[];requested:string|null;
  chapter:number;difficulty:Difficulty;
}
function enemiesFor(stage:number,wave:number,waves:number,chapter=1,difficulty:Difficulty='쉬움'):Fighter[] {
  const meta=chapterInfo(chapter);
  const isBoss=stage===20&&wave===waves;
  const type=wave===waves&&![5,15].includes(stage)?stageTypeForStageNum(stage):'일반전';
  const stats=splitEnemyStat(calculateEnemyStat({region:meta.region,stageNum:stage,stageType:type,chapterStepInRegion:meta.chapterStepInRegion,difficulty}));
  const pool=SPIRITS.filter(d=>(d.region===meta.region||chapter>=17)&&d.rarity<=3&&!d.storyOnly);
  const bossIds=['boar-shadow','underworld-reaper','shrine-shadow','waterfall-drake','red-oni','cursed-dragon','cursed-dragon','alley-ghost','fire-bandit','red-oni','stone-general','thunder-bird','cursed-dragon','silver-wolf','silver-wolf','silver-wolf','stone-general','gwijang','gwijang','honwon'];
  const ids=isBoss?[bossIds[chapter-1]]:stage===10&&wave===waves?[pool[(chapter+stage)%pool.length].id]:Array.from({length:[5,15].includes(stage)?4:4+(stage%3)},(_,i)=>pool[(stage+i+wave)%pool.length].id);
  return ids.map((id,i)=>{
    const d=spiritById(id);const hp=Math.round(stats.hp);
    const elite=[5,15].includes(stage)&&wave===1&&i===0;
    return {id:`enemy-${wave}-${i}`,spiritId:id,name:isBoss?meta.boss:`${elite?'정예 ':''}침식된 ${d.name}`,side:'enemy',element:d.element,role:d.role==='치유'?'술사':d.role,hp:elite?Math.round(hp*1.6):hp,maxHp:elite?Math.round(hp*1.6):hp,atk:Math.round(stats.atk),def:Math.round(stats.def),gauge:0,shield:difficulty==='지옥'&&isBoss?Math.round(hp*.15):0,rarity:isBoss?5:d.rarity,awakening:0,breakthrough:0,turns:0,slot:i,boss:isBoss,enraged:false,damage:0,cooldown1:0,cooldown2:0,ultimateCooldown:0};
  });
}
export function createBattle(s:GameSave,stage:number,chapter=1,difficulty:Difficulty='쉬움'):LiveBattle {
  const waves=2;
  const party=s.party.map((id,i):Fighter=>{
    const d=spiritById(id),u=s.owned.find(x=>x.id===id)!,stats=ownedStats(s,id);
    return {id,spiritId:id,name:d.name,side:'party',element:d.element,role:d.role,hp:stats.hp,maxHp:stats.hp,atk:stats.atk,def:stats.def,gauge:50,shield:0,rarity:d.rarity,awakening:u.awakening as Fighter['awakening'],breakthrough:u.breakthrough as Fighter['breakthrough'],turns:0,slot:i,boss:false,enraged:false,damage:0,cooldown1:0,cooldown2:0,ultimateCooldown:0};
  });
  // §14-7 three-breakthrough party support, prototype +5% attack per supporter.
  const support=party.filter(u=>u.breakthrough===3).length;party.forEach(u=>u.atk=Math.round(u.atk*(1+support*0.05)));
  const leader=party.find(u=>u.id===s.campaign?.leader)??party[0];party.forEach(u=>{if(leader.role==='수호')u.def=Math.round(u.def*1.08);else if(leader.role==='치유'){u.hp=Math.round(u.hp*1.08);u.maxHp=u.hp;}else u.atk=Math.round(u.atk*1.08);});
  return {stage,chapter,difficulty,party,enemies:enemiesFor(stage,1,waves,chapter,difficulty),wave:1,waves,round:0,queue:[],winner:null,events:[],requested:null};
}
export function requestUltimate(b:LiveBattle,id:string):boolean {
  const u=b.party.find(f=>f.id===id);if(!u||u.hp<=0||u.gauge<100||u.ultimateCooldown>0||b.winner)return false;b.requested=id;return true;
}
const alive=(arr:Fighter[])=>arr.filter(u=>u.hp>0);
export function advanceBattle(b:LiveBattle,autoUltimate=true,rng=Math.random):BattleEvent|null {
  if(b.winner)return null;
  if(!alive(b.party).length){b.winner='enemy';return null;}
  if(!alive(b.enemies).length){
    if(b.wave===b.waves){b.winner='party';return null;}
    b.wave++;b.enemies=enemiesFor(b.stage,b.wave,b.waves,b.chapter,b.difficulty);b.queue=[];
    const e={actor:'',label:`제 ${b.wave} 진영`,hits:[],ultimate:false,message:`새로운 적이 나타났습니다 · WAVE ${b.wave}`,wave:true};b.events.push(e);return e;
  }
  if(b.round>=120){b.winner='enemy';return null;}
  if(!b.queue.length){b.round++;b.queue=[...alive(b.party),...alive(b.enemies)].map(u=>u.id);}
  let actor:Fighter|undefined;
  let manual=false;
  if(b.requested){actor=b.party.find(u=>u.id===b.requested&&u.hp>0&&u.gauge>=100);manual=!!actor;b.requested=null;if(actor)b.queue=b.queue.filter(id=>id!==actor!.id);}
  while(!actor&&b.queue.length){const id=b.queue.shift();actor=[...b.party,...b.enemies].find(u=>u.id===id&&u.hp>0);}
  if(!actor)return null;
  actor.turns++;actor.gauge=Math.min(100,actor.gauge+3);
  actor.cooldown1=Math.max(0,actor.cooldown1-1);actor.cooldown2=Math.max(0,actor.cooldown2-1);actor.ultimateCooldown=Math.max(0,actor.ultimateCooldown-1);
  const allies=alive(actor.side==='party'?b.party:b.enemies),opponents=alive(actor.side==='party'?b.enemies:b.party);
  if(!opponents.length)return null;
  const ultimate=actor.gauge>=100&&actor.ultimateCooldown===0&&(actor.side==='enemy'||autoUltimate);
  const slot:SkillSlot=(ultimate||manual)?'ultimate':actor.rarity>=3&&actor.cooldown2===0?'skill2':actor.cooldown1===0?'skill1':'basicAttack';
  if(slot==='skill2')actor.cooldown2=4;if(slot==='skill1')actor.cooldown1=3;if(slot==='ultimate')actor.ultimateCooldown=actor.awakening>=4?3:4;
  const isUlt=slot==='ultimate';const skill=slot!=='basicAttack';
  const coeffs=effectiveSkillCoefficients(DEFAULT_SKILL_COEFFICIENTS[actor.rarity],{awakening:actor.awakening,breakthrough:actor.breakthrough});
  const coefficient=slot==='skill2'?(coeffs.skill2??coeffs.skill1):coeffs[slot];
  actor.gauge=isUlt?0:Math.min(100,actor.gauge+(slot==='basicAttack'?10:slot==='skill1'?8:5));
  const d=spiritById(actor.spiritId);
  const label=isUlt?d.ultimate:skill?d.skill:'기본 공격';
  const hits:Hit[]=[];
  if(actor.role==='치유'&&skill&&actor.side==='party'){
    const targets=isUlt?allies:[...allies].sort((a,c)=>a.hp/a.maxHp-c.hp/c.maxHp).slice(0,2);
    for(const t of targets){const amount=Math.min(t.maxHp-t.hp,Math.round(actor.atk*(isUlt?2.2:1.4)));t.hp+=amount;hits.push({id:t.id,amount,kind:'heal',crit:false});}
  }else{
    const front=opponents.filter(u=>u.slot<2),line=front.length?front:opponents;const target=[...line].sort((a,c)=>Number(c.role==='수호')-Number(a.role==='수호')||a.hp/a.maxHp-c.hp/c.maxHp)[0];
    const targets=(actor.role==='술사'&&skill)||isUlt?opponents:[target];
    for(const t of targets){
      const crit=rng()<0.05;
      const hard=b.difficulty==='어려움'||b.difficulty==='지옥';
      const damage=Math.round(calculateDamage({attackerAtk:actor.atk,skillCoefficientPct:coefficient*(targets.length>1?0.6:1),defenderDef:t.def,elementMultiplier:effectiveElementMultiplier(actor.element,t.element,slot,actor.breakthrough),isCrit:crit,critDamagePct:150,buffPct:0, debuffPct:0,randomRoll:0.95+rng()*0.1}).finalDamage*(hard?(actor.side==='enemy'?1.15:.9):1));
      const absorbed=Math.min(t.shield,damage);t.shield-=absorbed;t.hp=Math.max(0,t.hp-(damage-absorbed));t.gauge=Math.min(100,t.gauge+5);actor.damage+=damage;
      hits.push({id:t.id,amount:damage,kind:'damage',crit,absorbed});
      if(t.boss&&!t.enraged&&t.hp>0&&t.hp<=t.maxHp/2){t.enraged=true;t.atk=Math.round(t.atk*1.3);t.gauge=100;if(b.difficulty==='지옥')t.shield=Math.round(t.maxHp*.2);}
    }
    if(actor.role==='수호'&&skill){const targets=isUlt?allies:allies.filter(u=>u.slot<2);for(const t of targets){const amount=Math.round(actor.def*(isUlt?2.5:1.3));t.shield=Math.min(t.maxHp*0.5,t.shield+amount);hits.push({id:t.id,amount,kind:'shield',crit:false});}}
  }
  const phaseChange=b.enemies.some(t=>t.boss&&t.enraged)&&!b.events.some(e=>e.phaseChange);
  const e:BattleEvent={actor:actor.id,label,hits,ultimate:isUlt,slot,phaseChange,message:`${actor.name} · ${label}`};b.events.push(e);
  if(!alive(b.party).length)b.winner='enemy';else if(!alive(b.enemies).length&&b.wave===b.waves)b.winner='party';
  return e;
}
