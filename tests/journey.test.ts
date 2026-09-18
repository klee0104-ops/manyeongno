import { describe, expect, it } from 'vitest';
import { createGame, validateSave } from '../src/systems/adventure';
import { campaign } from '../src/systems/campaign';
import { canWatchStory, guideComplete, guideTasks, pendingStageStory, storyKey } from '../src/systems/journey';
import { updateProfile } from '../src/systems/profile';
import { storyShots } from '../src/ui/storyPlayer';
import { createBattle, advanceBattle } from '../src/systems/liveBattle';
import { SPIRITS, BOSS_ART } from '../src/data/gameContent';
import manifest from '../public/audio/story/manifest.json';

describe('connected journey progression',()=>{
 it('unlocks each middle story only after its normal stage and queues it once',()=>{
  const s=createGame();expect(canWatchStory(s,1,'prologue')).toBe(true);
  for(const stage of [5,10,15,20]){
   const part=stage===20?'outro':`mid${stage}` as 'mid5'|'mid10'|'mid15';
   expect(canWatchStory(s,1,part)).toBe(false);expect(pendingStageStory(s,1,stage)).toBeNull();
   campaign(s).ratings[`1-${stage}-1`]=3;expect(canWatchStory(s,1,part)).toBe(false);
   campaign(s).ratings[`1-${stage}-0`]=3;expect(pendingStageStory(s,1,stage)).toBe(part);
   campaign(s).seenScenes.push(storyKey(1,part));expect(pendingStageStory(s,1,stage)).toBeNull();
  }
  expect(pendingStageStory(s,1,6)).toBeNull();expect(canWatchStory(s,3,'intro')).toBe(false);
 });
 it('round-trips all 101 scene records without invalidating existing saves',()=>{
  const s=createGame();expect(validateSave(s)).toBe(true);
  campaign(s).seenScenes=['prologue',...Array.from({length:20},(_,i)=>['intro','mid5','mid10','mid15','outro'].map(p=>`${p}-${i+1}`)).flat()];
  expect(validateSave(JSON.parse(JSON.stringify(s)))).toBe(true);
  campaign(s).seenScenes.push('mid6-1');expect(validateSave(s)).toBe(false);
 });
 it('tracks tutorial tasks from actual growth, victory and claimed rewards',()=>{
  const s=createGame();expect(guideTasks(s).filter(t=>t.done)).toHaveLength(0);
  s.owned[0].level=2;expect(guideTasks(s)[0].done).toBe(true);expect(guideComplete(s)).toBe(false);
  campaign(s).ratings['1-1-0']=3;s.claimed.push('first-clear');expect(guideComplete(s)).toBe(true);
 });
 it('provides recorded narration and valid art actors for every added scene',()=>{
  const clips:Record<string,{text:string}>=manifest.clips;const ids=new Set<string>();
  const scenes=[...storyShots(1,'prologue'),...Array.from({length:20},(_,i)=>['mid5','mid10','mid15'].flatMap(p=>storyShots(i+1,p as 'mid5'|'mid10'|'mid15'))).flat()];
  expect(scenes).toHaveLength(64);
  for(const shot of scenes){expect(ids.has(shot.id)).toBe(false);ids.add(shot.id);expect(clips[shot.id].text).toBe(shot.caption);if(shot.actor)expect([...SPIRITS,...BOSS_ART].some(d=>d.id===shot.actor),shot.actor).toBe(true);}
 });
});
describe('local profile editing',()=>{
 it('persists nickname, owned avatar and title without resetting the journey',()=>{
  const s=createGame();campaign(s).ratings['1-1-0']=3;const gold=s.gold;
  expect(updateProfile(s,'  달빛 영술사  ','samsindongja','wanderer')).toBeNull();
  const restored=JSON.parse(JSON.stringify(s));expect(validateSave(restored)).toBe(true);
  expect(restored.profileName).toBe('달빛 영술사');expect(restored.profileAvatar).toBe('samsindongja');expect(restored.gold).toBe(gold);expect(restored.campaign.ratings['1-1-0']).toBe(3);
 });
 it('rejects an empty or overlong name, unowned portraits and locked titles atomically',()=>{
  const s=createGame(),before=JSON.stringify(s);
  for(const [name,avatar,title] of [[' ','gumiho','wanderer'],['가'.repeat(17),'gumiho','wanderer'],['영술사','honwon','wanderer'],['영술사','gumiho','legend']]){expect(updateProfile(s,name,avatar,title)).toBeTruthy();expect(JSON.stringify(s)).toBe(before);}
 });
 it('rejects malformed optional profile fields while accepting older saves',()=>{
  const s=createGame();expect(validateSave(s)).toBe(true);s.profileAvatar='missing';expect(validateSave(s)).toBe(false);delete s.profileAvatar;s.profileTitle='missing';expect(validateSave(s)).toBe(false);
 });
});
it('reports absorbed damage separately from health loss for shield feedback',()=>{
 const b=createBattle(createGame(),1);b.queue=['gumiho'];const actor=b.party.find(u=>u.id==='gumiho')!;actor.gauge=0;actor.cooldown1=9;actor.cooldown2=9;
 b.enemies.forEach(u=>u.shield=1e6);const hp=new Map(b.enemies.map(u=>[u.id,u.hp]));
 const event=advanceBattle(b,true,()=>.5)!;const hit=event.hits.find(h=>h.kind==='damage')!;
 expect(hit.absorbed).toBe(hit.amount);expect(b.enemies.find(u=>u.id===hit.id)!.hp).toBe(hp.get(hit.id));
});
