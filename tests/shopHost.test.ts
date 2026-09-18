import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ShopHost } from '../src/ui/shopHost';

class TestAudio {
 static instances:TestAudio[]=[];
 paused=true;volume=0;onplaying:(()=>void)|null=null;onended:(()=>void)|null=null;onerror:(()=>void)|null=null;
 pause=vi.fn(()=>{this.paused=true;});remove=vi.fn();setAttribute=vi.fn();
 play=vi.fn(()=>{this.paused=false;return Promise.resolve();});
 constructor(readonly src:string){TestAudio.instances.push(this);}
}
let preferences:Map<string,string>;
beforeEach(()=>{
 preferences=new Map();TestAudio.instances=[];
 vi.stubGlobal('localStorage',{getItem:(key:string)=>preferences.get(key)??null,setItem:(key:string,value:string)=>preferences.set(key,value)});
 vi.stubGlobal('document',{addEventListener:vi.fn(),querySelector:()=>null});
 vi.stubGlobal('Audio',TestAudio);
});
afterEach(()=>vi.unstubAllGlobals());
describe('shop narration controls',()=>{
 it('keeps automatic speech off while allowing one explicit replay',()=>{
  preferences.set('manyeongno:narration','off');const host=new ShopHost(vi.fn());
  host.speak('welcome');expect(TestAudio.instances).toHaveLength(0);
  host.toggleReplay('welcome');expect(TestAudio.instances).toHaveLength(1);
  expect(host.voiceEnabled).toBe(false);
  host.toggleReplay('welcome');expect(TestAudio.instances[0].pause).toHaveBeenCalled();
  host.speak('general');expect(TestAudio.instances).toHaveLength(1);
 });
 it('stops current speech immediately when muted and remembers it for later visits',()=>{
  const duck=vi.fn(),host=new ShopHost(duck);host.speak('welcome');
  TestAudio.instances[0].onplaying?.();expect(duck).toHaveBeenLastCalledWith(true);
  host.toggleVoice();expect(TestAudio.instances[0].pause).toHaveBeenCalled();
  expect(duck).toHaveBeenLastCalledWith(false);
  expect(new ShopHost(vi.fn()).voiceEnabled).toBe(false);
 });
 it('ignores late events from an old recording after changing counters',()=>{
  const duck=vi.fn(),host=new ShopHost(duck);host.speak('welcome');const old=TestAudio.instances[0];
  host.speak('general');const current=TestAudio.instances[1];current.onplaying?.();
  duck.mockClear();old.onplaying?.();old.onended?.();old.onerror?.();
  expect(duck).not.toHaveBeenCalled();expect(current.pause).not.toHaveBeenCalled();
 });
 it('allows a failed recording to be retried and releases music ducking',()=>{
  const duck=vi.fn(),host=new ShopHost(duck);host.speak('general');TestAudio.instances[0].onerror?.();
  expect(duck).toHaveBeenLastCalledWith(false);host.toggleReplay('general');
  expect(TestAudio.instances).toHaveLength(2);expect(TestAudio.instances[1].src).toContain('audio/shop/general.wav');
 });
 it('keeps mute working for the current visit when browser storage is unavailable',()=>{
  vi.stubGlobal('localStorage',{getItem:()=>{throw Error('blocked');},setItem:()=>{throw Error('blocked');}});
  const host=new ShopHost(vi.fn());host.toggleVoice();host.speak('welcome');
  expect(host.voiceEnabled).toBe(false);expect(TestAudio.instances).toHaveLength(0);
 });
 it('retains the new preference when storage can be read but cannot be written',()=>{
  vi.stubGlobal('localStorage',{getItem:()=>null,setItem:()=>{throw Error('quota');}});
  const host=new ShopHost(vi.fn());host.toggleVoice();host.speak('welcome');
  expect(host.voiceEnabled).toBe(false);expect(TestAudio.instances).toHaveLength(0);
 });
});
