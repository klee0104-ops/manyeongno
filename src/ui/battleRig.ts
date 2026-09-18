import type { Gesture } from '../data/combatChoreography';
import { approachFrames, gaitFrames, strikeFrames } from './battleGeometry';
import { BattleTimeline } from './battleTimeline';

/** Real alternating sheet strides, or anchored two-foot articulation for single poses. */
export class BattleRig {
 private poses:Animation[]=[];
 constructor(private sprite:HTMLElement,private clock:BattleTimeline,private reduced:boolean){}
 private pose(el:Element|null,frames:Keyframe[],duration:number,options:KeyframeAnimationOptions={}){
  if(this.reduced)return;const a=this.clock.animate(el,frames,duration,options);if(a)this.poses.push(a);
 }
 reset(frame=0){this.poses.forEach(a=>a.cancel());this.poses=[];this.sprite.style.backgroundPosition=`var(--frame-${frame}) var(--row)`;}
 prepare(direction:number,melee:boolean){
  this.reset();this.pose(this.sprite,[{rotate:'0deg',translate:'0 0'},{rotate:`${-direction*(melee?6:3)}deg`,translate:`${melee?-direction*3:0}px 2px`}],180);
 }
 travel(art:HTMLElement,x:number,y:number,gesture:Gesture,direction:number,duration:number,returning=false){
  this.reset();if(this.reduced)return;
  const frames=returning?[{transform:`translate(${x}px,${y}px)`},{transform:`translate(${x*.5}px,${y*.5-3}px)`,offset:.5},{transform:'translate(0px,0px)'}]:approachFrames(x,y,gesture);
  this.clock.animate(art,frames,duration,{easing:'cubic-bezier(.25,.1,.45,1)'});
  const stride=gesture==='shield'||gesture==='slam'?190:145;
  this.pose(this.sprite,[{translate:'0 0',rotate:`${direction*4}deg`},{translate:'0 -3px',rotate:`${direction*7}deg`,offset:.5},{translate:'0 0',rotate:`${direction*4}deg`}],stride,{iterations:Infinity});
  const css=getComputedStyle(this.sprite);
  if(!this.sprite.classList.contains('single-pose')){
   this.pose(this.sprite,gaitFrames([0,1,2].map(i=>css.getPropertyValue(`--frame-${i}`).trim()),css.getPropertyValue('--row').trim()),stride*2,{iterations:Infinity});
  }else{
   for(const [i,leg] of Array.from(this.sprite.querySelectorAll('.rig-leg')).entries()){
    const sign=i===0?1:-1;
    this.pose(leg,[{transform:`translateX(${sign*-2}px) rotate(${sign*-9}deg)`},{transform:`translateX(${sign*2}px) rotate(${sign*9}deg)`,offset:.5},{transform:`translateX(${sign*-2}px) rotate(${sign*-9}deg)`}],stride*2,{iterations:Infinity});
   }
   this.pose(this.sprite.querySelector('.rig-upper'),[{translate:'0 0',rotate:'-1deg'},{translate:'0 -1px',rotate:'1deg',offset:.5},{translate:'0 0',rotate:'-1deg'}],stride*2,{iterations:Infinity});
  }
 }
 strike(gesture:Gesture,direction:number,duration:number){
  this.reset(3);this.pose(this.sprite,strikeFrames(gesture,direction),duration);
  this.pose(this.sprite.querySelector('.rig-upper'),[{rotate:`${-direction*5}deg`},{rotate:`${direction*8}deg`,offset:.6},{rotate:'0deg'}],duration);
 }
 dispose(){this.reset();this.sprite.style.backgroundPosition='';}
}
