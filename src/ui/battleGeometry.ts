import type { Gesture, Delivery } from '../data/combatChoreography';
export interface BattleRect {x:number;y:number;width:number;height:number}
export interface Point {x:number;y:number}
/** Discrete UV changes: interpolation between atlas cells samples empty gutters. */
export function gaitFrames(frames:string[],row:string):Keyframe[]{
 return [0,1,0,2,0].map((index,i)=>({backgroundPosition:`${frames[index]} ${row}`,offset:i/4,easing:'steps(1,end)'}));
}
/** Exact contact endpoints and a tangent for the projectile's leading edge. */
export function projectileFrames(start:Point,end:Point,arc=0):Keyframe[]{
 const dx=end.x-start.x,dy=end.y-start.y;
 return Array.from({length:13},(_,i)=>{const t=i/12,x=dx*t,y=dy*t+4*arc*t*(1-t),angle=Math.atan2(dy+4*arc*(1-2*t),dx);
  return {transform:`translate(${x}px,${y}px) rotate(${angle}rad)`,offset:t};});
}
export const flightDuration=(start:Point,end:Point)=>Math.max(320,Math.min(620,Math.hypot(end.x-start.x,end.y-start.y)/.85));
/** Split presentation only; engine damage and shield absorption are conserved. */
export function splitImpact(amount:number,count:number):number[]{
 return Array.from({length:count},(_,i)=>Math.floor(amount*(i+1)/count)-Math.floor(amount*i/count));
}
/** Resolve contact against feet, with a gap so the attacker never covers the victim. */
export function contactOffset(actor:BattleRect,target:BattleRect,direction:number,delivery:Delivery){
 if(delivery!=='melee')return {x:0,y:0};
 const gap=(actor.width+target.width)*.37;
 return {x:target.x+target.width/2-(actor.x+actor.width/2)-direction*gap,y:target.y+target.height-actor.y-actor.height};
}
export function approachFrames(x:number,y:number,gesture:Gesture):Keyframe[]{
 const arc=gesture==='wing'?-34:gesture==='pounce'?-22:gesture==='bite'?-7:-3;
 return [{transform:'translate(0px,0px)'},{transform:`translate(${x*.5}px,${y*.5+arc}px)`,offset:.5},{transform:`translate(${x}px,${y}px)`}];
}
export function strikeFrames(gesture:Gesture,direction:number,combo=1):Keyframe[]{
 const poses:Record<Gesture,[number,number,number]>={slash:[-16,22,9],thrust:[-6,5,15],punch:[-9,13,14],slam:[-24,26,5],pounce:[-7,12,10],bite:[-5,8,12],fan:[-14,14,3],cast:[-3,3,2],shield:[-7,7,7],staff:[-8,7,2],wing:[-12,12,6],spin:[-26,32,8]};
 const [back,hit,reach]=poses[gesture];
 if(combo>1)return [...Array.from({length:combo},(_,i)=>[{rotate:`${back*direction}deg`,translate:`${-3*direction}px 1px`,offset:i/combo},{rotate:`${hit*direction*(gesture==='slash'&&i%2?-1:1)}deg`,translate:`${reach*direction}px -2px`,offset:(i+.6)/combo}]).flat(),{rotate:'0deg',translate:'0px 0px',offset:1}];
 return [{rotate:`${back*direction}deg`,translate:`${-3*direction}px 1px`},{rotate:`${hit*direction}deg`,translate:`${reach*direction}px -2px`,offset:.6},{rotate:'0deg',translate:'0px 0px'}];
}
