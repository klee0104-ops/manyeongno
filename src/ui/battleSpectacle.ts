import { ELEMENT_HAN } from '../data/gameContent';
import type { Element as Affinity } from '../types/unit';
import type { BattleTimeline } from './battleTimeline';
import { effectArt } from './combatEffects';
type Make=(parent:Element,cls:string,html?:string,color?:string)=>HTMLElement;
/** Geometry and elemental art sit around the fighters, never replace their sprites. */
export function chargeSpectacle(field:HTMLElement,art:HTMLElement,element:Affinity,color:string,ultimate:boolean,clock:BattleTimeline,fx:Make,reduced:boolean){
 const ring=fx(art,`spell-orbit ${ultimate?'grand-orbit':''}`,'',color);
 ring.innerHTML=`<i></i><i></i><b>${ELEMENT_HAN[element]}</b>`;
 clock.animate(ring,[{opacity:0,transform:'translate(-50%,-50%) scale(.4) rotate(-30deg)'},{opacity:ultimate?.85:.5,transform:'translate(-50%,-50%) scale(1) rotate(0deg)',offset:.3},{opacity:0,transform:'translate(-50%,-50%) scale(1.3) rotate(45deg)'}],ultimate?1000:650);
 if(!ultimate||reduced)return;
 const aura=fx(field,'ultimate-aura','',color);
 clock.animate(aura,[{opacity:0},{opacity:.65,offset:.3},{opacity:0}],950);
 for(let i=0;i<8;i++){
  const mote=fx(art,'charge-mote','',color),angle=i*Math.PI/4;
  clock.animate(mote,[{opacity:0,transform:`translate(${Math.cos(angle)*85}px,${Math.sin(angle)*70}px) scale(.4)`},{opacity:1,offset:.4},{opacity:0,transform:'translate(0,0) scale(1.3)'}],550+i*25);
 }
}
export function contactSpectacle(field:HTMLElement,host:HTMLElement,element:Affinity,effect:string,color:string,ultimate:boolean,clock:BattleTimeline,fx:Make,reduced:boolean){
 const count=reduced?1:ultimate?7:3,range=ultimate?100:48;
 for(let i=0;i<count;i++){
  const plume=fx(host,`element-surge surge-${element} ${ultimate?'grand-surge':''}`,effectArt(effect),color);
  const x=(i-(count-1)/2)*range/count,y=element==='금'?0:8;
  const twist=element==='금'?(i%2?48:-48):element==='수'?i*45:0;
  const start=element==='토'?'0.5 0.05':element==='화'?'.4 .15':'.15';
  clock.animate(plume,[{opacity:0,translate:`${x}px ${y+25}px`,scale:start,rotate:`${twist-15}deg`},{opacity:.88,translate:`${x}px ${y-(ultimate?25:10)}px`,scale:element==='화'?'.85 1.4':'1',rotate:`${twist}deg`,offset:.24},{opacity:0,translate:`${x*1.7}px ${y-(element==='토'?0:60)}px`,scale:'1.2',rotate:`${twist+20}deg`}],ultimate?600:380,{delay:i*28});
 }
 if(!ultimate||reduced)return;
 const wave=fx(host,'ultimate-shockwave','',color);
 clock.animate(wave,[{opacity:.95,transform:'translate(-50%,-50%) scale(.08)'},{opacity:.65,offset:.2},{opacity:0,transform:'translate(-50%,-50%) scale(1.5)'}],550);
 const flash=fx(field,'ultimate-contact-light','',color);
 clock.animate(flash,[{opacity:.22},{opacity:0}],130);
}
