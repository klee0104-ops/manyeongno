import { describe,it,expect } from 'vitest';
import { createGame,validateSave,levelUp,stageReward } from '../src/systems/adventure';
import { SPIRITS } from '../src/data/gameContent';
import { COMBAT_STYLES, combatStyle } from '../src/data/combatStyles';
import { createBattle,advanceBattle } from '../src/systems/liveBattle';

describe('local profile upgrade',()=>{
  it('loads old progress without a profile and keeps it while adding a nickname',()=>{
    const old=createGame(1000);levelUp(old,'gumiho');stageReward(old,1,1000);
    const serialized=JSON.stringify(old);expect(validateSave(JSON.parse(serialized))).toBe(true);
    const upgraded={...JSON.parse(serialized),profileName:'달빛 영술사',musicVolume:.45};
    expect(validateSave(upgraded)).toBe(true);
    delete upgraded.profileName;delete upgraded.musicVolume;
    expect(JSON.stringify(upgraded)).toBe(serialized);
  });
  it('rejects malformed profile fields while accepting mute volume and Korean names',()=>{
    const s=createGame();expect(validateSave({...s,profileName:'구미호와 함께',musicVolume:0})).toBe(true);
    for(const fields of [{profileName:''},{profileName:' '.repeat(2)},{profileName:123},{profileName:'가'.repeat(17)},{musicVolume:NaN},{musicVolume:Infinity},{musicVolume:-.1},{musicVolume:2}])expect(validateSave({...s,...fields})).toBe(false);
  });
});
describe('distinct combat identities',()=>{
  it('gives every spirit a distinct visual weapon and action style',()=>{
    expect(SPIRITS.every(s=>combatStyle(s.id).weapon&&combatStyle(s.id).motion)).toBe(true);
    expect(new Set(Object.values(COMBAT_STYLES).map(s=>s.effect)).size).toBe(12);
    expect(new Set(SPIRITS.map(s=>`${s.atlas}:${s.art}`)).size).toBe(SPIRITS.length);
  });
  it('the earth guardian shields the front line, consistent with her shield sprite',()=>{
    const s=createGame();s.owned.push({id:'jibu',level:1,awakening:0,breakthrough:0,shards:0});s.party[0]='jibu';
    const b=createBattle(s,1);const event=advanceBattle(b,true,()=>.5)!;
    expect(event.actor).toBe('jibu');expect(event.hits.filter(h=>h.kind==='shield').map(h=>h.id)).toEqual(s.party.slice(0,2));
    expect(b.party[0].shield).toBeGreaterThan(0);expect(b.party[1].shield).toBeGreaterThan(0);
  });
});
