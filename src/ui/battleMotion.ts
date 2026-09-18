import type { LiveBattle, BattleEvent, Hit } from '../systems/liveBattle';
import { combatTechnique, type CombatSlot } from '../data/combatChoreography';
import { ELEMENT_COLOR } from '../data/gameContent';
import { effectArt } from './combatEffects';
import { contactOffset, projectileFrames, flightDuration, splitImpact, type Point } from './battleGeometry';
import { BattleTimeline } from './battleTimeline';
import { BattleRig } from './battleRig';
import { prepareBattleTextures } from './battleTextures';

type Callout=(id:string,slot:CombatSlot,signal:AbortSignal)=>Promise<void>;
/** Continuous actor travel and actual projectile arrival share one pausable timeline. */
export async function animateBattleEvent(b:LiveBattle,e:BattleEvent,speed:number,signal:AbortSignal,impactSound:(heavy:boolean,kind:string)=>void,speak?:Callout,isPaused:()=>boolean=()=>false):Promise<void>{
 const field=document.querySelector<HTMLElement>('.battlefield');if(!field||signal.aborted)return;
 await prepareBattleTextures(field,signal);if(signal.aborted)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const clock=new BattleTimeline(signal,Math.min(3,Math.max(1,speed)),isPaused),temporary:HTMLElement[]=[];
 let rig:BattleRig|undefined;
 const add=(parent:Element,tag:string,cls:string,html='')=>{const el=document.createElement(tag);el.className=cls;el.innerHTML=html;el.setAttribute('aria-hidden','true');parent.append(el);temporary.push(el);return el;};
 const fx=(parent:Element,cls:string,html='',color='')=>{const el=add(parent,'span',cls,html);el.style.animation='none';if(color)el.style.setProperty('--fx',color);return el;};
 const cleanup=()=>{rig?.dispose();clock.dispose();temporary.forEach(el=>el.remove());field.classList.remove('motion-controlled');};
 signal.addEventListener('abort',cleanup,{once:true});
 try{
  if(e.wave){const flag=fx(field,'phase-banner');flag.textContent=`WAVE ${b.wave} · ${b.stage===20?'결계의 주인':'다음 진영'}`;await clock.wait(650);return;}
  const actor=document.getElementById(`fighter-${e.actor}`),sprite=actor?.querySelector<HTMLElement>('.pixel-sprite'),art=actor?.querySelector<HTMLElement>('.fighter-art');
  const units=[...b.party,...b.enemies],unit=units.find(u=>u.id===e.actor);if(!actor||!unit||!art||!sprite)return;
  const damage=e.hits.find(h=>h.kind==='damage'),slot=e.slot??'basicAttack',move=combatTechnique(unit.spiritId,slot,!damage),color=ELEMENT_COLOR[unit.element];
  const target=damage?document.getElementById(`fighter-${damage.id}`):null,a=art.getBoundingClientRect(),t=target?.querySelector('.fighter-art')?.getBoundingClientRect();
  const direction=unit.side==='party'?1:-1,melee=!!t&&move.delivery==='melee',offset=t?contactOffset(a,t,direction,move.delivery):{x:0,y:0};
  const phase=(value:string)=>{actor.dataset.combatPhase=value;};
  field.classList.add('motion-controlled');actor.classList.add('motion-actor');actor.dataset.delivery=move.delivery;actor.dataset.gesture=move.gesture;actor.style.zIndex='20';actor.style.setProperty('--fx',color);
  rig=new BattleRig(sprite,clock,reduced);phase('windup');rig.prepare(direction,melee);
  const announce=field.querySelector('#battle-announcement');if(announce)announce.textContent=`${unit.name} · ${e.label} · ${move.weapon}`;
  if(move.special){
   const caption=fx(field,`combat-callout ${move.ultimate?'ultimate':''}`,'',color);caption.removeAttribute('aria-hidden');
   const name=document.createElement('small'),label=document.createElement('strong');name.textContent=`${unit.name} · ${move.weapon}`;label.textContent=e.label;caption.append(name,label);
   clock.animate(caption,[{opacity:0,translate:'0 7px'},{opacity:1,translate:'0 0'}],150);
   const seal=fx(art,`technique-seal seal-${move.pattern}`,'',color);seal.textContent=move.seal;
   clock.animate(seal,[{opacity:0,scale:'.65'},{opacity:.5,scale:'1'}],220);
  }
  await Promise.all([clock.wait((move.special?240:130)*move.tempo),move.special?speak?.(unit.spiritId,slot,signal):undefined]);if(signal.aborted)return;
  // A pause during voice playback must also hold the following phase.
  await clock.wait(1);if(signal.aborted)return;
  const dust=()=>{if(reduced)return;const puff=fx(art,'combat-dust');clock.animate(puff,[{opacity:.6,scale:'.5 1'},{opacity:0,scale:'1.8 .6',translate:`${-direction*10}px 0`}],260);};
  if(melee&&!reduced){
   phase('approach');dust();const travel=Math.max(360,Math.min(620,Math.hypot(offset.x,offset.y)*1.25))*move.tempo;
   rig.travel(art,offset.x,offset.y,move.gesture,direction,travel);await clock.wait(travel);if(signal.aborted)return;rig.reset();dust();
  }
  const health=new Map<string,{hp:number;shield:number}>();
  for(const hit of e.hits){const el=document.getElementById(`fighter-${hit.id}`),f=units.find(u=>u.id===hit.id);if(!el||!f||health.has(hit.id))continue;
   const label=el.querySelector('.hp-label')?.textContent??'',shieldWidth=el.querySelector<HTMLElement>('.hp-track em')?.style.width;
   health.set(hit.id,{hp:Number(label.split('/')[0].trim())||f.hp,shield:shieldWidth?parseFloat(shieldWidth)/100*f.maxHp:0});
  }
  let contacts=0;
  const combo=move.special?fx(field,'combo-count'):undefined;
  const impact=(hit:Hit,index:number,count:number)=>{
   if(signal.aborted)return;
   const el=document.getElementById(`fighter-${hit.id}`),f=units.find(u=>u.id===hit.id);if(!el||!f)return;
   const host=el.querySelector<HTMLElement>('.fighter-art')??el,spr=el.querySelector<HTMLElement>('.pixel-sprite'),final=index===count-1;
   const absorbed=splitImpact(hit.absorbed??0,count)[index],dealt=splitImpact(hit.amount-(hit.absorbed??0),count)[index],amount=dealt+absorbed;
   const shown=health.get(hit.id)!;
   if(hit.kind==='damage'){shown.hp=Math.max(0,shown.hp-dealt);shown.shield=Math.max(0,shown.shield-absorbed);}
   else if(hit.kind==='heal')shown.hp=Math.min(f.maxHp,shown.hp+amount);else shown.shield+=amount;
   if(final){shown.hp=f.hp;shown.shield=f.shield;}
   const hp=el.querySelector<HTMLElement>('.hp-track>i'),label=el.querySelector('.hp-label');if(hp)hp.style.width=`${shown.hp/f.maxHp*100}%`;if(label)label.textContent=`${Math.ceil(shown.hp)} / ${f.maxHp}`;
   const track=el.querySelector('.hp-track');let shield=track?.querySelector<HTMLElement>('em');if(shown.shield&&!shield){shield=document.createElement('em');track?.append(shield);}if(shield)shield.style.width=`${Math.min(100,shown.shield/f.maxHp*100)}%`;
   const float=fx(el.querySelector('.damage-anchor')??el,`floating-number ${hit.kind} ${hit.crit?'critical':''}`);
   float.textContent=hit.kind==='damage'?(dealt===0?'방어':`${hit.crit?'치명 ':''}−${dealt}`):hit.kind==='heal'?`+${amount}`:`보호 +${amount}`;
   clock.animate(float,[{opacity:0,transform:'translate(-50%,0) scale(.7)'},{opacity:1,transform:'translate(-50%,-12px) scale(1.13)',offset:.17},{opacity:1,transform:'translate(-50%,-23px) scale(1)',offset:.65},{opacity:0,transform:'translate(-50%,-42px) scale(.94)'}],720);
   const hitColor=hit.kind==='heal'?'#a3d9a0':hit.kind==='shield'?'#d9c38b':color;
   const burst=fx(host,`contact-effect contact-${hit.kind} pattern-${move.pattern} element-${unit.element} ${move.ultimate?'heavy':''}`,effectArt(hit.kind==='damage'?move.effect:hit.kind==='shield'?'shield':move.effect),hitColor);
   clock.animate(burst,[{opacity:.95,scale:'.55',rotate:`${-direction*18}deg`},{opacity:.9,scale:'1.03',rotate:'0deg',offset:.22},{opacity:0,scale:'1.25',rotate:`${direction*9}deg`}],reduced?180:360);
   if(hit.kind==='damage'){
    contacts++;if(combo){combo.innerHTML=`${contacts}<small>HIT</small>`;}
    el.classList.add('motion-reacting');
    if(!reduced){
     const recoil=(move.ultimate?11:hit.crit?9:6)*(f.side==='enemy'?1:-1);
     clock.animate(spr,[{translate:'0 0',rotate:'0deg'},{translate:`${recoil}px -2px`,rotate:`${recoil*.55}deg`,offset:.2},{translate:`${recoil*.35}px 0`,rotate:`${recoil*.15}deg`,offset:.6},{translate:'0 0',rotate:'0deg'}],280);
     const halo=fx(host,'impact-halo','',color);clock.animate(halo,[{opacity:.7,scale:'.35'},{opacity:0,scale:'1.4'}],300);
     for(let i=0;i<5;i++){const streak=fx(host,'impact-streak','',color),angle=i*72+index*21;clock.animate(streak,[{transform:`rotate(${angle}deg) translateX(0) scaleX(.5)`,opacity:1},{transform:`rotate(${angle}deg) translateX(32px) scaleX(.15)`,opacity:0}],250);}
     if(final&&f.hp<=0){el.classList.add('motion-defeated');clock.animate(spr,[{rotate:'0deg',translate:'0 0'},{rotate:`${(f.side==='enemy'?1:-1)*18}deg`,translate:'0 7px'}],320);}
    }
    if(absorbed){const ring=fx(host,'guard-ring');clock.animate(ring,[{opacity:.8,scale:'.9'},{opacity:0,scale:'1.2'}],300);}
   }
  };
  const sound=(hit:Hit,heavy=false)=>impactSound(heavy,hit.kind==='damage'?`${unit.element}:${move.effect}`:hit.kind);
  const contactHold=(heavy:boolean)=>{if(reduced)return;clock.hitStop(heavy?85:48);if(heavy)clock.animate(field.querySelector('.battle-stage'),[{translate:'0 0'},{translate:`${-direction*3}px 1px`,offset:.25},{translate:`${direction*2}px -1px`,offset:.65},{translate:'0 0'}],150);};
  const nonDamage=e.hits.filter(h=>h.kind!=='damage');
  const damageHits=e.hits.filter(h=>h.kind==='damage');
  if(melee){
   const count=move.special?(move.gesture==='punch'?3:['slash','spin'].includes(move.gesture)?2:1):1;
   for(let i=0;i<count;i++){
    if(signal.aborted)return;phase('strike');const duration=(move.gesture==='shield'||move.gesture==='slam'?360:260)*move.tempo;
    rig.strike(move.gesture,direction,duration);
    const trail=fx(art,`weapon-trail trail-${move.gesture}`,effectArt(move.effect),color);trail.style.setProperty('--facing',String(direction));
    clock.animate(trail,[{opacity:0,scale:'.4',rotate:`${-direction*50}deg`},{opacity:.85,scale:'1.05',rotate:`${direction*15}deg`,offset:.6},{opacity:0,scale:'1.1',rotate:`${direction*45}deg`}],duration);
    await clock.wait(duration*.6);if(signal.aborted)return;phase('contact');
    damageHits.forEach(h=>impact(h,i,count));sound(damageHits[0],move.ultimate||damageHits.some(h=>h.crit));contactHold(move.ultimate||damageHits.some(h=>h.crit));
    await clock.wait(duration*.4+40);
   }
  }else{
   phase('release');rig.strike(move.gesture,direction,360*move.tempo);
   const bounds=field.getBoundingClientRect(),current=art.getBoundingClientRect();
   const origin={x:current.x+current.width*(.5+direction*.25)-bounds.x,y:current.y+current.height*.46-bounds.y};
   const launch=async(hit:Hit,targetIndex:number)=>{
    const host=document.getElementById(`fighter-${hit.id}`)?.querySelector('.fighter-art'),destination=host?.getBoundingClientRect();if(!destination)return;
    const end:Point={x:destination.x+destination.width*.5-bounds.x,y:destination.y+destination.height*.48-bounds.y};
    if(move.delivery==='projectile'&&!reduced){
     const count=move.ultimate?Math.max(1,Math.ceil((move.count-targetIndex)/damageHits.length)):Math.min(move.count,3);
     await Promise.all(Array.from({length:count},async(_,i)=>{
      await clock.wait(i*85+1);if(signal.aborted)return;
      const p=fx(field,`technique-projectile directed pattern-${move.pattern}`,effectArt(move.effect),color);p.style.left=`${origin.x}px`;p.style.top=`${origin.y}px`;
      const spread=i-(count-1)/2,arc=move.pattern==='rain'?-Math.min(110,Math.abs(end.x-origin.x)*.45)-i*8:move.pattern==='orbit'?spread*24:move.pattern==='fan'?spread*30:0;
      const duration=flightDuration(origin,end);clock.animate(p,projectileFrames(origin,end,arc),duration);
      await clock.wait(duration);if(signal.aborted)return;p.remove();phase('contact');impact(hit,i,count);if(hit===damageHits[0])sound(hit,move.ultimate&&i===count-1);
      if(i===count-1&&hit===damageHits[0])contactHold(move.ultimate);
     }));
    }else if(move.delivery==='beam'&&!reduced){
     const beam=fx(field,`technique-beam pattern-${move.pattern}`,'',color),length=Math.hypot(end.x-origin.x,end.y-origin.y);
     beam.style.cssText+=`;left:${origin.x}px;top:${origin.y}px;width:${length}px;rotate:${Math.atan2(end.y-origin.y,end.x-origin.x)}rad`;
     clock.animate(beam,[{scale:'0 1',opacity:.4},{scale:'1 1',opacity:.85,offset:.7},{scale:'1 1',opacity:0}],400);
     await clock.wait(280);if(signal.aborted)return;phase('contact');impact(hit,0,1);if(hit===damageHits[0]){sound(hit,move.ultimate);contactHold(move.ultimate);}
     await clock.wait(120);
    }else{
     const ring=fx(field,`ground-technique pattern-${move.pattern}`,effectArt(move.effect),color);ring.style.left=`${end.x}px`;ring.style.top=`${end.y+destination.height*.22}px`;
     clock.animate(ring,[{transform:'translate(-50%,-20%) scale(.15)',opacity:0},{transform:'translate(-50%,-50%) scale(1)',opacity:.8,offset:.7},{transform:'translate(-50%,-65%) scale(1.15)',opacity:0}],420);
     await clock.wait(reduced?160:295);if(signal.aborted)return;phase('contact');impact(hit,0,1);if(hit===damageHits[0]){sound(hit,move.ultimate);contactHold(move.ultimate);}
    }
   };
   await Promise.all(damageHits.map(launch));
  }
  if(signal.aborted)return;
  if(nonDamage.length){
   if(!damageHits.length)await clock.wait(230);
   if(signal.aborted)return;
   for(const hit of nonDamage)impact(hit,0,1);sound(nonDamage[0]);
  }
  await clock.wait(160);if(signal.aborted)return;
  phase('return');
  if(melee&&!reduced){const duration=330*move.tempo;rig.travel(art,offset.x,offset.y,move.gesture,direction,duration,true);await clock.wait(duration);}
  rig.reset();await clock.wait(200);
  if(e.phaseChange&&!signal.aborted){const flag=fx(field,'phase-banner phase-two');flag.textContent=`PHASE II · ${b.enemies.find(u=>u.boss)?.name??'보스'} 폭주`;impactSound(true,'charge');await clock.wait(850);}
 }finally{
  cleanup();signal.removeEventListener('abort',cleanup);
  field.querySelectorAll<HTMLElement>('.fighter').forEach(f=>{f.style.zIndex='';delete f.dataset.combatPhase;f.classList.remove('guarded','healed','motion-actor','motion-reacting','motion-defeated');});
 }
}
