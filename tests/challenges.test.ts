import { describe,it,expect } from 'vitest';
import { createGame,validateSave,stageReward } from '../src/systems/adventure';
import { campaign } from '../src/systems/campaign';
import { beginChallenge,settleChallenge,dailyRemaining,dailyTierUnlocked,challenges,mazeFloor,DAILY_DUNGEONS,type ChallengeRun } from '../src/systems/challenges';
import { createChallengeBattle } from '../src/systems/challengeBattle';
import { advanceBattle } from '../src/systems/liveBattle';
import { autoExploreStop } from '../src/systems/autoExplore';
import { combatPlaybackSpeed } from '../src/ui/battleSpeed';
const now=Date.parse('2026-09-18T14:59:00Z');
const start=(s:ReturnType<typeof createGame>,kind:'daily'|'maze'='daily',id='gold',tier=1,time=now)=>{
 const run=beginChallenge(s,kind,id,tier,time);expect(typeof run).toBe('object');return run as ChallengeRun;
};
describe('daily admission and save compatibility',()=>{
 it('limits each dungeon separately, counts losses, and resets at Korean midnight',()=>{
  const s=createGame(now);
  for(let i=0;i<3;i++){const run=start(s);expect(settleChallenge(s,run,false)).toBeNull();}
  expect(dailyRemaining(s,'gold',now)).toBe(0);expect(dailyRemaining(s,'forge',now)).toBe(3);
  const before=s.stamina;expect(beginChallenge(s,'daily','gold',1,now)).toMatch(/횟수/);expect(s.stamina).toBe(before);
  const tomorrow=now+60000;expect(dailyRemaining(s,'gold',tomorrow)).toBe(3);start(s,'daily','gold',1,tomorrow);expect(dailyRemaining(s,'gold',tomorrow)).toBe(2);
 });
 it('does not charge locked tiers or insufficient stamina',()=>{
  const s=createGame(now);const before=s.stamina;expect(beginChallenge(s,'daily','forge',2,now)).toMatch(/10곳/);expect(s.stamina).toBe(before);
  expect(beginChallenge(s,'daily','invalid',1,now)).toMatch(/존재/);s.stamina=4;
  expect(beginChallenge(s,'maze','gold',1,now)).toMatch(/행동력/);expect(s.stamina).toBe(4);expect(s.challenges).toBeUndefined();
 });
 it('unlocks higher tiers from distinct normal campaign clears',()=>{
  const s=createGame(now);expect(dailyTierUnlocked(s,2)).toBe(false);
  for(let i=1;i<=10;i++)stageReward(s,i,now);expect(dailyTierUnlocked(s,2)).toBe(true);expect(dailyTierUnlocked(s,3)).toBe(false);
  for(let i=1;i<=20;i++)stageReward(s,i,now,2);expect(dailyTierUnlocked(s,3)).toBe(true);
 });
 it('round-trips legacy saves and active tickets and rejects malformed records',()=>{
  const s=createGame(now);expect(validateSave(s)).toBe(true);const run=start(s);
  const loaded=JSON.parse(JSON.stringify(s));expect(validateSave(loaded)).toBe(true);expect(settleChallenge(loaded,run,true)?.gold).toBe(3000);
  for(const patch of [{mazeBest:-1},{entries:{gold:4,essence:0,forge:0,awakening:0}},{active:{...run,tier:99}},{active:{...run,kind:'maze',floor:99}}])expect(validateSave({...s,challenges:{...s.challenges,...patch}})).toBe(false);
 });
});
describe('atomic challenge rewards',()=>{
 it('settles once without changing campaign clears, quests, or stories',()=>{
  const s=createGame(now),c=campaign(s),ratings=JSON.stringify(c.ratings),scenes=JSON.stringify(c.seenScenes),gold=s.gold;
  const run=start(s);expect(settleChallenge(s,run,true)?.gold).toBe(3000);expect(s.gold).toBe(gold+3000);expect(settleChallenge(s,run,true)).toBeNull();expect(s.gold).toBe(gold+3000);
  expect(JSON.stringify(c.ratings)).toBe(ratings);expect(JSON.stringify(c.seenScenes)).toBe(scenes);expect(s.cleared).toEqual([]);
 });
 it('uses the persisted ticket, rejects stale tickets, and grants the correct resource',()=>{
  for(const d of DAILY_DUNGEONS){const s=createGame(now);campaign(s);const run=start(s,'daily',d.id),old={...run};run.dungeon='gold';run.tier=3;
   const r=settleChallenge(s,run,true)!;if(d.id==='forge')expect(r.enhance).toBe(12);if(d.id==='essence')expect(r.dust).toBe(60);if(d.id==='awakening'){expect(r.chaos).toBe(2);expect(campaign(s).awakeStones[r.awakeId!]).toBe(1);}
   start(s,'maze');expect(settleChallenge(s,old,true)).toBeNull();
  }
 });
 it('advances maze floors only on a win and awards milestone currency every fifth floor',()=>{
  const s=createGame(now);expect(mazeFloor(s)).toBe(1);const failed=start(s,'maze');settleChallenge(s,failed,false);expect(mazeFloor(s)).toBe(1);
  for(let f=1;f<=5;f++){const run=start(s,'maze'),r=settleChallenge(s,run,true)!;expect(run.floor).toBe(f);expect(r.gems).toBe(f===5?100:0);expect(mazeFloor(s)).toBe(f+1);expect(validateSave(s)).toBe(true);}
 });
});
describe('playable challenge encounters',()=>{
 it('spawns the daily boss after the opening wave and resolves in the live battle engine',()=>{
  for(const d of DAILY_DUNGEONS){const s=createGame(now);s.owned.forEach(u=>u.level=50);const b=createChallengeBattle(s,start(s,'daily',d.id));
   expect(b.waves).toBe(2);expect(b.enemies.every(u=>u.element===d.element)).toBe(true);b.enemies.forEach(u=>u.hp=0);advanceBattle(b,true,()=>.5);
   expect(b.wave).toBe(2);expect(b.enemies[0].spiritId).toBe(d.boss);expect(b.enemies[0].boss).toBe(true);
   for(let n=0;n<600&&!b.winner;n++)advanceBattle(b,true,()=>.5);expect(b.winner).toBe('party');
  }
 });
 it('has stronger later floors, a fifth-floor boss, and real elemental modifiers',()=>{
  const s=createGame(now),run=start(s,'maze'),b1=createChallengeBattle(s,run),b6=createChallengeBattle(s,{...run,floor:6}),b5=createChallengeBattle(s,{...run,floor:5});
  expect(b6.enemies[0].maxHp).toBeGreaterThan(b1.enemies[0].maxHp);expect(b5.waves).toBe(1);expect(b5.enemies[0].boss).toBe(true);expect(b5.enemies[0].shield).toBeGreaterThan(0);
  challenges(s).mazeBest=4;expect(mazeFloor(s)).toBe(5);
 });
});
describe('safe continuous exploration and faster playback',()=>{
 it('continues an unlocked stage and stops for stamina, defeat, stories, or a chapter end',()=>{
  const s=createGame(now);stageReward(s,1,now);expect(autoExploreStop(s,1,1,'쉬움',true)).toBeNull();
  s.stamina=0;expect(autoExploreStop(s,1,1,'쉬움',true)).toMatch(/행동력/);s.stamina=100;
  expect(autoExploreStop(s,1,1,'쉬움',false)).toMatch(/패배/);stageReward(s,5,now);expect(autoExploreStop(s,1,5,'쉬움',true)).toMatch(/이야기/);
  campaign(s).seenScenes.push('mid5-1');expect(autoExploreStop(s,1,5,'쉬움',true)).toBeNull();
  stageReward(s,20,now);campaign(s).seenScenes.push('outro-1');expect(autoExploreStop(s,1,20,'쉬움',true)).toMatch(/이번 장/);
 });
 it('makes 2x brisker and keeps 4x faster without an old 3x cap',()=>{expect(combatPlaybackSpeed(1)).toBe(1);expect(combatPlaybackSpeed(2)).toBeGreaterThan(2);expect(combatPlaybackSpeed(4)).toBeGreaterThan(combatPlaybackSpeed(2)*1.8);});
});
