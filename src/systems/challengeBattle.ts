import type { GameSave } from './adventure';
import { createBattle, type Fighter } from './liveBattle';
import { DAILY_DUNGEONS, mazeElement, mazeRule, challengeTitle, type ChallengeRun } from './challenges';
import { SPIRITS, spiritById } from '../data/gameContent';
export function createChallengeBattle(s:GameSave,run:ChallengeRun){
 const daily=DAILY_DUNGEONS.find(d=>d.id===run.dungeon)!;
 const ch=run.kind==='daily'?daily.chapter:Math.min(20,1+Math.floor((run.floor-1)/10));
 const b=createBattle(s,run.kind==='daily'||run.floor%5===0?20:1,ch,'쉬움');
 b.waves=run.kind==='daily'?2:1;b.challengeTitle=challengeTitle(run);
 b.challengeRule=run.kind==='daily'?`${daily.element} 속성 수호자 · ${run.tier}단계 · 입장 시 횟수 차감`:mazeRule(run.floor);
 const scale=run.kind==='daily'?[1,3.8,15][run.tier-1]:Math.exp(Math.min(19,(run.floor-1)*.095));
 b.spawnEnemies=(wave:number):Fighter[]=>{
  const element=run.kind==='daily'?daily.element:mazeElement(run.floor),boss=run.kind==='daily'?wave===2:run.floor%5===0;
  const pool=SPIRITS.filter(d=>d.element===element&&d.rarity<=3&&!d.storyOnly);
  const ids=boss?[run.kind==='daily'?daily.boss:DAILY_DUNGEONS[(Math.floor(run.floor/5)-1)%4].boss]:Array.from({length:3+(run.kind==='maze'&&run.floor>10?1:0)},(_,i)=>pool[(i+run.floor+run.tier)%pool.length].id);
  return ids.map((id,i)=>{const d=spiritById(id),rule=run.kind==='maze';
   const hp=Math.round((boss?2400:650)*scale*(rule&&element==='목'?1.3:rule&&element==='수'?1.15:1));
   return {id:`enemy-${wave}-${i}`,spiritId:id,name:boss?d.name:`${run.kind==='maze'?'미궁의':'결계의'} ${d.name}`,side:'enemy',element,role:d.role==='치유'?'술사':d.role,hp,maxHp:hp,atk:Math.round((boss?155:83)*scale*(rule&&element==='화'?1.25:rule&&element==='금'?1.12:1)),def:Math.round((boss?65:28)*scale*(rule&&element==='토'?1.45:rule&&element==='금'?1.12:1)),gauge:boss?65:0,shield:rule&&element==='수'?Math.round(hp*.08):0,rarity:boss?5:d.rarity,awakening:0,breakthrough:0,turns:0,slot:i,boss,enraged:false,damage:0,cooldown1:0,cooldown2:boss?1:3,ultimateCooldown:0};});
 };
 b.enemies=b.spawnEnemies(1);return b;
}
