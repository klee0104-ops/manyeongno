import {describe,it,expect,vi,afterEach} from 'vitest';
import {SPIRITS,BOSS_ART} from '../src/data/gameContent';
import {CHOREOGRAPHIES,combatTechnique} from '../src/data/combatChoreography';
import {contactOffset,approachFrames} from '../src/ui/battleGeometry';
import {createGame,validateSave} from '../src/systems/adventure';
import {createBattle,advanceBattle} from '../src/systems/liveBattle';
import {CombatVoice} from '../src/ui/combatVoice';
import lines from '../public/audio/combat/lines.json';
afterEach(()=>{vi.unstubAllGlobals();vi.useRealTimers();});
describe('physical contact choreography',()=>{
 it('stops melee actors in front of a target with feet aligned, in both directions',()=>{
  const a={x:50,y:200,width:100,height:100},t={x:500,y:80,width:140,height:140};
  const offset=contactOffset(a,t,1,'melee');expect(a.y+a.height+offset.y).toBe(t.y+t.height);expect(a.x+a.width/2+offset.x).toBeLessThan(t.x+t.width/2);
  const reverse=contactOffset(t,a,-1,'melee');expect(t.x+t.width/2+reverse.x).toBeGreaterThan(a.x+a.width/2);
  expect(approachFrames(offset.x,offset.y,'pounce')[2].transform).toBe(`translate(${offset.x}px,${offset.y}px)`);
 });
 it('never sends ranged, ground or healing casters towards their recipients',()=>{
  for(const delivery of ['projectile','ground','beam','aura'] as const)expect(contactOffset({x:0,y:0,width:80,height:80},{x:400,y:200,width:90,height:90},1,delivery)).toEqual({x:0,y:0});
 });
 it('distinguishes a shield bash from planting a ward and leaves healers in place',()=>{
  expect(combatTechnique('jibu','basicAttack').delivery).toBe('melee');expect(combatTechnique('jibu','skill2').delivery).toBe('ground');
  expect(combatTechnique('samsindongja','skill2',true).delivery).toBe('aura');
  expect(combatTechnique('jeogyeom','skill2').gesture).toBe('punch');expect(combatTechnique('mangeomhon','ultimate').pattern).toBe('rain');expect(combatTechnique('gumiho','ultimate').count).toBe(9);
 });
 it('provides an explicit weapon and individual named skills for all 71 combatants',()=>{
  const roster=[...SPIRITS,...BOSS_ART];expect(roster).toHaveLength(71);
  for(const spirit of roster){const p=CHOREOGRAPHIES[spirit.id];expect(p).toBeDefined();expect(p.weapon).toBeTruthy();expect(new Set([p.skill,p.skill2,p.ultimate]).size).toBe(3);expect(spirit.skill).toBe(p.skill);expect(spirit.ultimate).toBe(p.ultimate);}
  expect(new Set(roster.map(d=>CHOREOGRAPHIES[d.id].skill2)).size).toBe(71);
 });
 it('battle logs, voice text and the technique displayed use the same name',()=>{
  const s=createGame(),b=createBattle(s,1);const event=advanceBattle(b,true,()=>.5)!;
  expect(event.label).toBe(combatTechnique(event.actor,event.slot!).label);
  for(const spirit of [...SPIRITS,...BOSS_ART])for(const slot of ['skill1','skill2','ultimate'] as const){const clip=lines.find(l=>l.id===spirit.id&&l.slot===slot);expect(clip?.text).toBe(combatTechnique(spirit.id,slot).label+'!');}
 });
 it('keeps old saves compatible and validates the optional voice switch',()=>{const save=createGame();expect(validateSave(save)).toBe(true);expect(validateSave({...save,battleVoice:false})).toBe(true);expect(validateSave({...save,battleVoice:'on'})).toBe(false);});
});
describe('callout cancellation',()=>{
 function audioStub(){const clips:{play:ReturnType<typeof vi.fn>;pause:ReturnType<typeof vi.fn>;onended?:()=>void}[]=[];vi.stubGlobal('window',globalThis);vi.stubGlobal('document',{hidden:false});vi.stubGlobal('Audio',class{play=vi.fn(()=>Promise.resolve());pause=vi.fn();constructor(){clips.push(this);}});return clips;}
 it('ends and unducks a voice immediately on retreat/abort',async()=>{const clips=audioStub(),duck=vi.fn(),voice=new CombatVoice(duck),controller=new AbortController();const speaking=voice.speak('gumiho','skill1',1,.5,controller.signal);controller.abort();await speaking;expect(clips[0].pause).toHaveBeenCalled();expect(duck).toHaveBeenLastCalledWith(false);});
 it('does not queue overlapping callouts and ignores basic attacks',async()=>{const clips=audioStub(),voice=new CombatVoice(vi.fn()),signal=new AbortController().signal;const first=voice.speak('gumiho','skill1',1,.5,signal),second=voice.speak('jeogyeom','skill2',1,.5,signal);await first;expect(clips[0].pause).toHaveBeenCalled();voice.stop();await second;await voice.speak('gumiho','basicAttack',1,.5,signal);expect(clips).toHaveLength(2);});
});
