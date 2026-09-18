import { describe, it, expect } from 'vitest';
import { createGame, validateSave, beginStage, stageReward, sweep, summon, levelUp, ownedStats, equip, enhance, recoverStamina, claimQuest, claimOffline, changeSlot, breakthrough, awaken } from '../src/systems/adventure';
import { createBattle, advanceBattle, requestUltimate, type LiveBattle } from '../src/systems/liveBattle';

function finish(b:LiveBattle){let steps=0;while(!b.winner&&steps++<2000)advanceBattle(b,true,()=>0.5);expect(steps).toBeLessThan(2000);return b;}
describe('adventure transactions and persistence',()=>{
  it('rejects malformed, duplicate, injected and non-finite save values',()=>{
    const fresh=createGame();expect(validateSave(JSON.parse(JSON.stringify(fresh)))).toBe(true);
    for(const bad of [null,{}, {...fresh,gold:-1},{...fresh,gems:Infinity},{...fresh,stamina:121},{...fresh,owned:[{...fresh.owned[0],id:'<img onerror=x>'}]},{...fresh,party:['gumiho','gumiho']},{...fresh,cleared:[5]}])expect(validateSave(bad)).toBe(false);
    const bad=createGame();bad.equipment[1].uid=bad.equipment[0].uid;expect(validateSave(bad)).toBe(false);
  });
  it('does not spend resources on locked or unaffordable stage attempts',()=>{
    const s=createGame();const before=JSON.stringify(s);expect(beginStage(s,10)).toBeTruthy();expect(s.stamina).toBe(120);
    s.stamina=2;expect(beginStage(s,1)).toBeTruthy();expect(s.stamina).toBe(2);expect(s.gold).toBe(JSON.parse(before).gold);
  });
  it('progresses only after victory and pays first-clear gems only once',()=>{
    const s=createGame(1000);expect(beginStage(s,1,1000)).toBeNull();expect(s.cleared).toEqual([]);expect(s.stamina).toBe(114);
    expect(stageReward(s,1,1000).first).toBe(true);const gems=s.gems;const again=stageReward(s,1,2000);expect(again.first).toBe(false);expect(again.gems).toBe(0);expect(s.gems).toBe(gems);expect(s.cleared).toEqual([1]);
    expect(beginStage(s,2,2000)).toBeNull();expect(sweep(s,3)).toBeTypeOf('string');
  });
  it('recovers stamina with a cap, including clock rollback',()=>{
    const s=createGame(1000);s.stamina=100;recoverStamina(s,601000);expect(s.stamina).toBe(102);recoverStamina(s,100);expect(s.stamina).toBe(102);recoverStamina(s,1e9);expect(s.stamina).toBe(120);
  });
  it('preserves pity across serialization and ensures ten-pull four-star guarantee',()=>{
    const s=createGame();s.banner.pullsSinceLastFiveStar=79;s.banner.pickupGuaranteedNext=true;
    const reloaded=JSON.parse(JSON.stringify(s));expect(validateSave(reloaded)).toBe(true);
    const result=summon(reloaded,1,()=>0.99);expect(typeof result).not.toBe('string');if(typeof result==='string')return;
    expect(result[0].spirit.id).toBe('gumiho');expect(reloaded.banner.pullsSinceLastFiveStar).toBe(0);expect(reloaded.campaign.awakeStones.gumiho).toBe(1);
    const ten=summon(s,10,()=>0.5);if(typeof ten==='string')throw new Error(ten);expect(ten.length).toBe(10);expect(ten.some(r=>r.spirit.rarity>=4)).toBe(true);expect(validateSave(s)).toBe(true);
  });
  it('does not mutate on insufficient summon currency',()=>{
    const s=createGame();s.gems=0;const before=JSON.stringify(s);expect(summon(s,10)).toBeTypeOf('string');expect(JSON.stringify(s)).toBe(before);
  });
  it('equipment replacement is exclusive and both equipment and growth affect battle stats',()=>{
    const s=createGame(),before=ownedStats(s,'gumiho');expect(equip(s,'starter-0','gumiho')).toBeNull();expect(ownedStats(s,'gumiho').atk).toBeGreaterThan(before.atk);
    equip(s,'starter-3','gumiho');expect(s.equipment.find(e=>e.uid==='starter-0')!.owner).toBe('gumiho');
    equip(s,'starter-4','gumiho');expect(s.equipment.find(e=>e.uid==='starter-2')!.owner).toBeNull();
    equip(s,'starter-1','gumiho');expect(ownedStats(s,'gumiho').setBonus).toBe(true);
    const old=ownedStats(s,'gumiho').atk;enhance(s,'starter-3');expect(ownedStats(s,'gumiho').atk).toBeGreaterThan(old);
    levelUp(s,'gumiho');expect(s.owned[0].level).toBe(2);expect(validateSave(s)).toBe(true);
  });
  it('cannot level, awaken or breakthrough for free and swaps formation without duplicate units',()=>{
    const s=createGame();s.gold=0;s.dust=0;const before=JSON.stringify(s);expect(levelUp(s,'gumiho')).toBeTruthy();expect(awaken(s,'gumiho')).toBeTruthy();expect(breakthrough(s,'gumiho')).toBeTruthy();expect(JSON.stringify(s)).toBe(before);
    const previous=s.party[0];changeSlot(s,0,'gumiho');expect(s.party[0]).toBe('gumiho');expect(s.party[2]).toBe(previous);expect(new Set(s.party).size).toBe(5);
  });
  it('quest and offline rewards cannot be claimed twice',()=>{
    const s=createGame(1000);expect(claimQuest(s,'stage-20')).toBeTruthy();expect(claimQuest(s,'welcome')).toBeNull();const gold=s.gold;expect(claimQuest(s,'welcome')).toBeTruthy();expect(s.gold).toBe(gold);
    stageReward(s,1,1000);expect(claimOffline(s,601000)).toBe(400);expect(claimOffline(s,601000)).toBe(0);
  });
  it('only gives a boss equipment drop once',()=>{const s=createGame();stageReward(s,5);expect(s.equipment.length).toBe(7);stageReward(s,5);expect(s.equipment.length).toBe(7);});
});
describe('live combat integration',()=>{
  it('wins the onboarding stage and never changes persistent health',()=>{
    const s=createGame();const before=JSON.stringify(s);const b=finish(createBattle(s,1));expect(b.winner).toBe('party');expect(b.events.some(e=>e.hits.some(h=>h.kind==='heal'))).toBe(true);expect(b.events.some(e=>e.hits.some(h=>h.kind==='shield'))).toBe(true);expect(JSON.stringify(s)).toBe(before);
  });
  it('manual ultimate fires with auto ultimate disabled and cannot fire without gauge',()=>{
    const b=createBattle(createGame(),10);expect(requestUltimate(b,'gumiho')).toBe(false);b.party.find(u=>u.id==='gumiho')!.gauge=100;
    expect(requestUltimate(b,'gumiho')).toBe(true);const e=advanceBattle(b,false,()=>0.5);expect(e?.actor).toBe('gumiho');expect(e?.ultimate).toBe(true);expect(b.party.find(u=>u.id==='gumiho')!.gauge).toBe(0);
  });
  it('only a tank in front takes first enemy hits and damage remains bounded',()=>{
    const b=createBattle(createGame(),20);let found=false;for(let i=0;i<20;i++){const e=advanceBattle(b,true,()=>0.5);if(e?.actor.startsWith('enemy')){expect(e.hits.filter(h=>h.kind==='damage')[0].id).toBe('sangun');found=true;break;}}
    expect(found).toBe(true);expect(b.party.every(u=>u.hp>=0&&u.hp<=u.maxHp)).toBe(true);
  });
  it('all chapter stages terminate and a levelled party can complete both boss waves',()=>{
    const s=createGame();s.owned.forEach(u=>u.level=20);for(let n=1;n<=20;n++){const b=finish(createBattle(s,n));expect(b.winner,`stage ${n}`).toBe('party');if(n===20){expect(b.wave).toBe(2);expect(b.enemies[0].boss).toBe(true);}}
  });
  it('boss enrages at half health and finished combat cannot emit more actions',()=>{
    const b=createBattle(createGame(),20);b.enemies.forEach(u=>u.hp=0);advanceBattle(b);b.enemies[0].hp=b.enemies[0].maxHp*.5;
    advanceBattle(b,true,()=>0.5);expect(b.enemies[0].enraged).toBe(true);const result=finish(b);const count=result.events.length;expect(advanceBattle(result)).toBeNull();expect(result.events.length).toBe(count);
  });
});
