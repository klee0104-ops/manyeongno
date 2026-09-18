/** One clock owns travel, sprite frames, missiles and damage timing. */
export class BattleTimeline {
 private time=0;
 private frame=0;
 private previous=performance.now();
 private stopped=false;
 private freeze=0;
 private animations:{animation:Animation;start:number}[]=[];
 private waits:{end:number;resolve:()=>void}[]=[];
 constructor(private signal:AbortSignal,private speed:number,private paused:()=>boolean){
  signal.addEventListener('abort',this.dispose,{once:true});
  if(signal.aborted)this.dispose();else this.frame=requestAnimationFrame(this.tick);
 }
 private tick=(now:number)=>{
  if(this.stopped)return;
  const dt=Math.min(50,Math.max(0,now-this.previous));this.previous=now;
  if(!this.paused()&&!document.hidden){
   if(this.freeze>0)this.freeze=Math.max(0,this.freeze-dt);
   else this.time+=dt*this.speed;
   for(const entry of this.animations)if(entry.animation.playState!=='idle')entry.animation.currentTime=this.time-entry.start;
   this.waits=this.waits.filter(w=>{if(w.end<=this.time){w.resolve();return false;}return true;});
  }
  this.frame=requestAnimationFrame(this.tick);
 };
 animate(el:Element|null,frames:Keyframe[],duration:number,options:KeyframeAnimationOptions={}){
  if(!el||this.stopped)return;
  const animation=el.animate(frames,{duration,easing:'linear',fill:'both',...options});
  animation.pause();animation.currentTime=0;
  this.animations.push({animation,start:this.time});return animation;
 }
 wait(ms:number){return this.stopped?Promise.resolve():new Promise<void>(resolve=>this.waits.push({end:this.time+ms,resolve}));}
 /** Short contact hold, bounded even at 3x; no black flash or opacity swap. */
 hitStop(ms:number){this.freeze=Math.max(this.freeze,ms/Math.sqrt(this.speed));}
 dispose=()=>{
  if(this.stopped)return;this.stopped=true;cancelAnimationFrame(this.frame);
  this.animations.forEach(({animation})=>animation.cancel());this.animations=[];
  this.waits.forEach(w=>w.resolve());this.waits=[];this.signal.removeEventListener('abort',this.dispose);
 };
}
