import {afterEach,describe,expect,it,vi} from 'vitest';
import {flightDuration,gaitFrames,projectileFrames,splitImpact} from '../src/ui/battleGeometry';
import {BattleTimeline} from '../src/ui/battleTimeline';
import {pixelSprite} from '../src/ui/pixel';
import {SPIRITS,BOSS_ART} from '../src/data/gameContent';
afterEach(()=>vi.unstubAllGlobals());
describe('readable travel and impact',()=>{
 it('uses discrete alternating strides instead of scrolling through atlas gutters',()=>{
  const frames=gaitFrames(['0%','33%','67%'],'21%');
  expect(frames.map(f=>f.backgroundPosition)).toEqual(['0% 21%','33% 21%','0% 21%','67% 21%','0% 21%']);
  expect(frames.every(f=>f.easing==='steps(1,end)')).toBe(true);
 });
 it('lands every straight or arcing shot on its target in either direction',()=>{
  for(const dx of [-420,90,420])for(const arc of [-90,0,75]){
   const frames=projectileFrames({x:400,y:100},{x:400+dx,y:240},arc);
   expect(frames[0].transform).toMatch(/^translate\(0px,0px\)/);
   expect(frames[12].transform).toMatch(new RegExp(`^translate\\(${dx}px,140px\\)`));
   const angle=Number(String(frames[6].transform).split('rotate(')[1].split('rad')[0]);
   expect(Math.sign(Math.cos(angle))).toBe(Math.sign(dx));
  }
 });
 it('keeps short mobile shots readable while bounding long desktop flights',()=>{
  expect(flightDuration({x:0,y:0},{x:30,y:0})).toBe(320);
  expect(flightDuration({x:0,y:0},{x:900,y:0})).toBe(620);
 });
 it('conserves damage and shields across multi-hit visual sequences',()=>{
  for(const total of [0,1,2,97,1999])for(const count of [1,2,3,9]){
   const parts=splitImpact(total,count);expect(parts.reduce((a,b)=>a+b,0)).toBe(total);expect(parts.every(n=>n>=0&&Number.isInteger(n))).toBe(true);
  }
 });
 it('uses a persistent complete sprite or complete three-part rig for every combatant',()=>{
  for(const s of [...SPIRITS,...BOSS_ART])for(const awakening of [0,5]){
   const markup=pixelSprite(s.id,'battle-sprite',awakening);
   expect(markup).toContain('--sprite:url(');expect(markup).not.toContain('idle-part');
   if(markup.includes('single-pose')){expect(markup).toContain('rig-upper');expect(markup).toContain('rig-left');expect(markup).toContain('rig-right');}
  }
  expect(pixelSprite('gumiho')).toContain('idle-part');
 });
});
describe('shared animation and impact clock',()=>{
 function setup(speed=1){
  let now=0,id=0;const callbacks=new Map<number,FrameRequestCallback>(),doc={hidden:false};
  vi.stubGlobal('performance',{now:()=>now});vi.stubGlobal('document',doc);
  vi.stubGlobal('requestAnimationFrame',(cb:FrameRequestCallback)=>{callbacks.set(++id,cb);return id;});
  vi.stubGlobal('cancelAnimationFrame',(n:number)=>callbacks.delete(n));
  const controller=new AbortController();let paused=false;
  const clock=new BattleTimeline(controller.signal,speed,()=>paused);
  const animation={currentTime:0,playState:'paused',pause:vi.fn(),cancel:vi.fn(()=>{animation.playState='idle';})};
  const el={animate:()=>animation} as unknown as Element;
  const step=(ms=20)=>{now+=ms;const ready=[...callbacks.values()];callbacks.clear();ready.forEach(cb=>cb(now));};
  return {clock,controller,animation,el,step,doc,callbacks,pause:(v:boolean)=>{paused=v;}};
 }
 it('freezes sprite/shot time and damage deadlines together during pause or hidden tabs',async()=>{
  const h=setup(2);h.clock.animate(h.el,[],400);const arrived=vi.fn();const pending=h.clock.wait(100).then(arrived);
  h.step();expect(h.animation.currentTime).toBe(40);h.pause(true);h.step();h.step();expect(h.animation.currentTime).toBe(40);expect(arrived).not.toHaveBeenCalled();
  h.pause(false);h.doc.hidden=true;h.step();expect(h.animation.currentTime).toBe(40);
  h.doc.hidden=false;h.step();h.step();await pending;expect(arrived).toHaveBeenCalledOnce();h.clock.dispose();
 });
 it('holds the contact pose briefly and then resumes the same timeline',()=>{
  const h=setup();h.clock.animate(h.el,[],400);h.step();h.clock.hitStop(40);h.step();h.step();expect(h.animation.currentTime).toBe(20);h.step();expect(h.animation.currentTime).toBe(40);h.clock.dispose();
 });
 it('aborting releases pending impacts and cancels all animation frames',async()=>{
  const h=setup();h.clock.animate(h.el,[],400);const pending=h.clock.wait(400);h.controller.abort();await pending;
  expect(h.animation.cancel).toHaveBeenCalledOnce();expect(h.callbacks.size).toBe(0);h.clock.dispose();
 });
});
