import { describe,it,expect } from 'vitest';
import { createGame,validateSave,beginStage,stageReward,sweep,summon,awaken,enhance,equip,ownedStats } from '../src/systems/adventure';
import { campaign,rating,unlockedChapter,unlockedStage,refineEquipment,craftEquipment,attendance,dailyReward,exchangeAwake,exchangeShards,claimCodex,staminaCap,reincarnate } from '../src/systems/campaign';
import { CAMPAIGN,DIFFICULTIES,stageKey } from '../src/data/campaign';
import { SPIRITS,RELICS,GEAR_SLOTS,BOSS_ART } from '../src/data/gameContent';
import { createBattle,advanceBattle } from '../src/systems/liveBattle';
import { pixelSprite,fullIllustration } from '../src/ui/pixel';

describe('v0.4 campaign and save migration',()=>{
 it('preserves all legacy ownership, equipment and pity and migrates clears to 3 stars once',()=>{
  const s=createGame(1000);s.cleared=[1,2,3];s.owned[0].awakening=2;s.owned[0].shards=9;s.banner.pullsSinceLastFiveStar=77;s.equipment[3].owner='gumiho';
  const before=JSON.stringify({owned:s.owned,equipment:s.equipment,banner:s.banner});const c=campaign(s);
  expect(c.ratings).toEqual({'1-1-0':3,'1-2-0':3,'1-3-0':3});c.chaos=0;campaign(s);expect(c.chaos).toBe(0);
  expect(JSON.stringify({owned:s.owned,equipment:s.equipment,banner:s.banner})).toBe(before);expect(validateSave(s)).toBe(true);
 });
 it('opens the next chapter only through its previous boss and tracks four separate difficulties',()=>{
  const s=createGame();for(let st=1;st<=20;st++)stageReward(s,st,1000,1,'쉬움',st===1?2:3);
  expect(unlockedChapter(s)).toBe(2);expect(unlockedStage(s,2,1,'쉬움')).toBe(true);expect(unlockedStage(s,3,1,'쉬움')).toBe(false);
  expect(unlockedStage(s,1,1,'보통')).toBe(true);expect(unlockedStage(s,1,1,'어려움')).toBe(false);
  expect(rating(s,1,1,'쉬움')).toBe(2);expect(rating(s,1,1,'보통')).toBe(0);stageReward(s,1,1000,1,'쉬움',1);expect(rating(s,1,1,'쉬움')).toBe(2);
 });
 it('requires a three-star record for sweeping and charges batches atomically',()=>{
  const s=createGame(1000);stageReward(s,1,1000,1,'쉬움',2);expect(typeof sweep(s,1)).toBe('string');
  stageReward(s,1,1000,1,'쉬움',3);s.stamina=12;s.staminaAt=Date.now();const before=s.gold;expect(typeof sweep(s,1,1,'쉬움',5)).toBe('string');expect(s.stamina).toBe(12);expect(s.gold).toBe(before);
  const c=campaign(s);c.sweepTickets=5;expect(typeof sweep(s,1,1,'쉬움',5,true)).toBe('object');expect(c.sweepTickets).toBe(0);expect(s.stamina).toBe(12);
 });
 it('charges first attempts six stamina and later clears use difficulty costs; hell has weekly entry limit',()=>{
  const s=createGame(1000),c=campaign(s);for(const d of DIFFICULTIES)for(let st=1;st<=20;st++)c.ratings[stageKey(1,st,d)]=3;
  delete c.ratings[stageKey(1,1,'보통')];s.stamina=120;s.staminaAt=1000;expect(beginStage(s,1,1000,1,'보통')).toBeNull();expect(s.stamina).toBe(114);
  stageReward(s,1,1000,1,'보통');expect(beginStage(s,1,1000,1,'보통')).toBeNull();expect(s.stamina).toBe(106);
  for(let n=0;n<3;n++)expect(beginStage(s,1,1000,1,'지옥')).toBeNull();const before=s.stamina;expect(beginStage(s,1,1000,1,'지옥')).toContain('주 3회');expect(s.stamina).toBe(before);
  expect(beginStage(s,1,1000+7*86400000,1,'지옥')).toBeNull();
 });
 it('awards companions and one-time gear correctly across every chapter',()=>{
  const s=createGame();for(let ch=1;ch<=20;ch++)for(let st=1;st<=20;st++)stageReward(s,st,1000,ch,'쉬움');
  expect(unlockedChapter(s)).toBe(20);expect(Object.keys(campaign(s).ratings)).toHaveLength(400);expect(staminaCap(s)).toBe(220);
  expect(s.owned.filter(u=>u.id.startsWith('story-'))).toHaveLength(4);const gear=s.equipment.length;stageReward(s,20,1000,20,'쉬움');expect(s.equipment.length).toBe(gear);expect(validateSave(s)).toBe(true);
 });
 it('prevents repeated attendance and daily claims and retains units through prestige',()=>{
  const s=createGame(1000);campaign(s);expect(attendance(s,1000)).toBeNull();const gold=s.gold;expect(attendance(s,1000)).toBeTruthy();expect(s.gold).toBe(gold);
  s.stamina=40;expect(dailyReward(s,1000)).toBeNull();expect(dailyReward(s,1000)).toBeTruthy();expect(s.stamina).toBe(60);
  const c=campaign(s);c.ratings['20-20-0']=3;c.ending='seal';const units=JSON.stringify(s.owned);expect(reincarnate(s)).toBeNull();expect(s.owned).toEqual(JSON.parse(units));expect(c.prestige).toBe(1);expect(c.ratings).toEqual({});expect(reincarnate(s)).toBeTruthy();
 });
 it('rejects malformed expansion fields',()=>{
  const s=createGame(),c=campaign(s);for(const patch of [{chapter:21},{difficulty:'<img>'},{ratings:{'999-1-0':3}},{awakeStones:{gumiho:Infinity}},{seals:{gumiho:6}},{ending:'evil'},{lastAttendance:3},{leader:'honwon'}])expect(validateSave({...s,campaign:{...c,...patch}})).toBe(false);
 });
 it('rejects a five-entry hell sweep even after the weekly limit resets, without charging anything',()=>{
  const s=createGame(),c=campaign(s);for(const d of DIFFICULTIES)for(let st=1;st<=20;st++)c.ratings[stageKey(1,st,d)]=3;
  c.hellWeek='0';c.hellEntries=3;c.sweepTickets=5;s.stamina=120;s.staminaAt=Date.now();
  const before=JSON.stringify(s);expect(typeof sweep(s,1,1,'지옥',5,true)).toBe('string');expect(JSON.stringify(s)).toBe(before);
 });
 it('claims codex milestones once and exchanges exactly one dedicated stone into five breakthrough shards',()=>{
  const s=createGame(),c=campaign(s);expect(claimCodex(s,100)).toBeTruthy();
  s.owned=SPIRITS.map(d=>({id:d.id,level:1,awakening:0,breakthrough:0,shards:0}));const gems=s.gems;
  expect(claimCodex(s,100)).toBeNull();expect(s.gems).toBe(gems+2000);expect(claimCodex(s,100)).toBeTruthy();expect(s.gems).toBe(gems+2000);
  c.awakeStones.gumiho=1;expect(exchangeShards(s,'gumiho')).toBeNull();expect(s.owned.find(u=>u.id==='gumiho')!.shards).toBe(5);expect(exchangeShards(s,'gumiho')).toBeTruthy();expect(validateSave(s)).toBe(true);
 });
 it('does not consume the daily stamina gift while stamina is full',()=>{
  const s=createGame();expect(dailyReward(s)).toBeTruthy();s.stamina-=20;expect(dailyReward(s)).toBeNull();expect(s.stamina).toBe(staminaCap(s));
 });
});
describe('four-slot growth and roster coverage',()=>{
 it('contains the planned 60 creatures, legacy fox, and four story companions without shared art cells',()=>{
  expect(SPIRITS).toHaveLength(65);expect(SPIRITS.filter(d=>!d.storyOnly&&d.id!=='gumiho')).toHaveLength(60);
  expect(new Set(SPIRITS.map(d=>d.id)).size).toBe(65);expect(new Set(SPIRITS.map(d=>`${d.atlas}:${d.art}`)).size).toBe(65);
  for(const d of [...SPIRITS,...BOSS_ART]){expect(pixelSprite(d.id)).not.toContain('NaN');expect(fullIllustration(d.id)).not.toContain('undefined');}
 });
 it('refines three unenhanced unequipped pieces and preserves the chosen element',()=>{
  const s=createGame();for(let i=0;i<3;i++)expect(craftEquipment(s,'weapon','수')).toBeNull();
  const pieces=s.equipment.filter(e=>e.defId==='gear-4-weapon-1');const before=s.equipment.length;expect(refineEquipment(s,pieces[0].uid)).toBeNull();expect(s.equipment.length).toBe(before-2);expect(s.equipment.some(e=>e.defId==='gear-4-weapon-2')).toBe(true);
  const invalid=s.equipment.find(e=>e.owner)!;expect(refineEquipment(s,invalid.uid)).toBeTruthy();expect(validateSave(s)).toBe(true);
 });
 it('enhances exactly to +15 and all four slots activate the full set bonus',()=>{
  const s=createGame();s.gold=1e6;campaign(s).enhanceStones=100;
  for(const [i,slot] of GEAR_SLOTS.entries()){s.equipment.push({uid:`test-${i}`,defId:`gear-1-${slot}-3`,owner:null,level:0});equip(s,`test-${i}`,'gumiho');}
  expect(ownedStats(s,'gumiho').setCount).toBe(4);
  for(let i=0;i<15;i++)expect(enhance(s,'test-0')).toBeNull();const before=s.gold;expect(enhance(s,'test-0')).toBeTruthy();expect(s.gold).toBe(before);expect(validateSave(s)).toBe(true);
 });
 it('uses duplicate high-rarity stones and paid exchange, then changes the fifth awakened form',()=>{
  const s=createGame();s.owned[0].level=50;s.owned[0].awakening=4;s.gold=1e6;s.dust=1000;const c=campaign(s);c.chaos=5;
  for(let i=0;i<5;i++)expect(exchangeAwake(s,'gumiho')).toBeNull();expect(awaken(s,'gumiho')).toBeNull();expect(s.owned[0].awakening).toBe(5);expect(c.awakeStones.gumiho).toBe(0);
  expect(fullIllustration('gumiho',5)).toContain('awakened-atlas');expect(pixelSprite('jibu','',5)).toContain('pixel-awakened');
  s.banner.pullsSinceLastFiveStar=79;s.banner.pickupGuaranteedNext=true;summon(s,1,()=>.99);expect(c.awakeStones.gumiho).toBe(1);expect(s.owned[0].shards).toBe(0);
 });
 it('all 400 encounters terminate with reachable endgame stats and use the correct named boss',()=>{
  const s=createGame();s.party=['samsindongja','mangeomhon','jeogyeom','simyeon','jibu'];s.owned=s.party.map(id=>({id,level:130,awakening:5,breakthrough:3,shards:0}));
  for(let ch=1;ch<=20;ch++)for(let st=1;st<=20;st++){
   const b=createBattle(s,st,ch);let steps=0;while(!b.winner&&steps++<2000)advanceBattle(b,true,()=>.5);
   expect(b.winner,`${ch}-${st}`).toBe('party');expect(steps).toBeLessThan(2000);expect(b.waves).toBe(2);if(st===20)expect(b.enemies[0].name).toBe(CAMPAIGN[ch-1].boss);
  }
 });
 it('equipment definitions cover all five elements in each of four slots and five grades',()=>{
  expect(RELICS.filter(d=>d.grade)).toHaveLength(100);
 });
});
