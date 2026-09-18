import type { LiveBattle, BattleEvent } from '../systems/liveBattle';
import { combatTechnique, type CombatSlot } from '../data/combatChoreography';
import { ELEMENT_COLOR } from '../data/gameContent';
import { effectArt } from './combatEffects';
import { approachFrames, contactOffset, strikeFrames } from './battleGeometry';

const delay=(ms:number,signal:AbortSignal)=>new Promise<void>(resolve=>{if(signal.aborted){resolve();return;}const done=()=>{clearTimeout(timer);signal.removeEventListener('abort',done);resolve();};const timer=setTimeout(done,ms);signal.addEventListener('abort',done,{once:true});});
type Callout=(id:string,slot:CombatSlot,signal:AbortSignal)=>Promise<void>;
/** A readable action has separate windup, approach, contact, recoil and return phases. */
export async function animateBattleEvent(b:LiveBattle,e:BattleEvent,speed:number,signal:AbortSignal,impactSound:(heavy:boolean,kind:string)=>void,speak?:Callout,isPaused:()=>boolean=()=>false):Promise<void>{
 const field=document.querySelector<HTMLElement>('.battlefield');if(!field)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,scale=1/Math.min(3,Math.max(1,speed)),animations:Animation[]=[],temporary:HTMLElement[]=[];
 const animate=(el:Element|null,frames:Keyframe[],duration:number)=>{if(!el)return;const a=el.animate(frames,{duration:duration*scale,easing:'cubic-bezier(.3,.05,.25,1)',fill:'forwards'});animations.push(a);return a;};
 const add=(parent:Element,node:HTMLElement)=>{parent.append(node);temporary.push(node);return node;};
 const wait=async(ms:number)=>{let remaining=ms,last=performance.now();const paused=new Set<Animation>();while(remaining>0&&!signal.aborted){const now=performance.now();if(isPaused()||document.hidden){for(const a of animations)if(a.playState==='running'){a.pause();paused.add(a);}}else{if(paused.size){paused.forEach(a=>{if(a.playState==='paused')a.play();});paused.clear();}else remaining-=now-last;}last=now;await delay(Math.min(32,Math.max(1,remaining)),signal);}};
 const cleanup=()=>{animations.forEach(a=>a.cancel());temporary.forEach(el=>el.remove());field.classList.remove('motion-controlled');};
 signal.addEventListener('abort',cleanup,{once:true});
 let sprite:HTMLElement|null|undefined,actor:HTMLElement|null,art:HTMLElement|null|undefined;
 try{
  if(e.wave){const flag=document.createElement('div');flag.className='phase-banner';flag.textContent=`WAVE ${b.wave} · ${b.stage===20?'결계의 주인':'다음 진영'}`;add(field,flag);await wait(650*scale);return;}
  actor=document.getElementById(`fighter-${e.actor}`);sprite=actor?.querySelector<HTMLElement>('.pixel-sprite');art=actor?.querySelector<HTMLElement>('.fighter-art');
  const unit=[...b.party,...b.enemies].find(u=>u.id===e.actor);if(!actor||!unit||!art||!sprite)return;
  const damage=e.hits.find(h=>h.kind==='damage'),slot=e.slot??'basicAttack',move=combatTechnique(unit.spiritId,slot,!damage),color=ELEMENT_COLOR[unit.element];
  const target=damage?document.getElementById(`fighter-${damage.id}`):null,a=art.getBoundingClientRect(),t=target?.querySelector('.fighter-art')?.getBoundingClientRect();
  const direction=unit.side==='party'?1:-1,melee=!!t&&move.delivery==='melee',offset=t?contactOffset(a,t,direction,move.delivery):{x:0,y:0};
  const phase=(value:string)=>{actor!.dataset.combatPhase=value;};
  const frame=(n:number)=>{sprite!.style.backgroundPosition=`var(--frame-${n}) var(--row)`;};
  field.classList.add('motion-controlled');actor.classList.add('motion-actor');actor.dataset.delivery=move.delivery;actor.dataset.gesture=move.gesture;actor.style.zIndex='20';actor.style.setProperty('--fx',color);phase('windup');frame(0);
  const announce=field.querySelector('#battle-announcement');if(announce)announce.textContent=`${unit.name} · ${e.label} · ${move.weapon}`;
  if(move.special){
   const caption=document.createElement('div');caption.className=`combat-callout ${move.ultimate?'ultimate':''}`;caption.style.setProperty('--fx',color);
   const name=document.createElement('small'),label=document.createElement('strong');name.textContent=`${unit.name} · ${move.weapon}`;label.textContent=e.label;caption.append(name,label);add(field,caption);
   const seal=document.createElement('i');seal.className=`technique-seal seal-${move.pattern}`;seal.textContent=move.seal;seal.style.setProperty('--fx',color);add(art,seal);
  }
  if(!reduced)animate(sprite,[{rotate:'0deg',translate:'0px 0px'},{rotate:`${-direction*(melee?7:3)}deg`,translate:`${melee?-direction*3:0}px ${melee?2:-3}px`}],240*move.tempo);
  // The callout finishes during the preparation pose, so later attacks never talk over it.
  await Promise.all([wait((move.special?300:150)*move.tempo*scale),move.special?speak?.(unit.spiritId,slot,signal):undefined]);if(signal.aborted)return;
  if(melee&&!reduced){
   phase('approach');frame(1);animate(art,approachFrames(offset.x,offset.y,move.gesture),390*move.tempo);
   await wait(390*move.tempo*scale);if(signal.aborted)return;
  }
  phase('strike');frame(3);
  const combo=melee&&move.special?(move.gesture==='punch'?3:move.gesture==='slash'?2:1):1;
  if(!reduced)animate(sprite,strikeFrames(move.gesture,direction,combo),(340+(combo-1)*90)*move.tempo);
  if(melee){
   const trail=document.createElement('span');trail.className=`weapon-trail trail-${move.gesture}`;trail.innerHTML=effectArt(move.effect);trail.style.setProperty('--fx',color);trail.style.setProperty('--facing',String(direction));trail.style.animationIterationCount=String(combo);trail.style.animationDuration=`${.24*scale}s`;add(art,trail);
   await wait(200*move.tempo*scale);
  }else{
   phase('release');
   const bounds=field.getBoundingClientRect(),origin={x:a.x+a.width*.5-bounds.x,y:a.y+a.height*.48-bounds.y};
   for(const hit of e.hits){
    const destination=document.getElementById(`fighter-${hit.id}`)?.querySelector('.fighter-art')?.getBoundingClientRect();if(!destination)continue;
    const end={x:destination.x+destination.width*.5-bounds.x,y:destination.y+destination.height*.5-bounds.y};
    if(reduced)continue;
    const effect=hit.kind==='damage'?move.effect:hit.kind==='shield'?'shield':move.effect;
    if(move.delivery==='beam'){
     const beam=document.createElement('span');beam.className=`technique-beam pattern-${move.pattern}`;beam.style.cssText=`--fx:${color};left:${origin.x}px;top:${origin.y}px;width:${Math.hypot(end.x-origin.x,end.y-origin.y)}px;rotate:${Math.atan2(end.y-origin.y,end.x-origin.x)}rad`;add(field,beam);
     animate(beam,[{scale:'0 1',opacity:0},{scale:'1 1',opacity:.8,offset:.7},{scale:'1 1',opacity:.15}],360);
    }else if(move.delivery==='ground'||move.delivery==='aura'){
     const ring=document.createElement('span');ring.className=`ground-technique pattern-${move.pattern}`;ring.innerHTML=effectArt(effect);ring.style.cssText=`--fx:${color};left:${end.x}px;top:${end.y+destination.height*.25}px`;add(field,ring);
     animate(ring,[{transform:'translate(-50%,-20%) scale(.15)',opacity:0},{transform:'translate(-50%,-50%) scale(1)',opacity:.8,offset:.75},{transform:'translate(-50%,-60%) scale(1.1)',opacity:.4}],360);
    }else{
     const count=Math.min(move.count,move.ultimate?9:3);
     for(let i=0;i<count;i++){
      const p=document.createElement('span');p.className=`technique-projectile pattern-${move.pattern}`;p.innerHTML=effectArt(effect);p.style.cssText=`--fx:${color};left:${origin.x}px;top:${origin.y}px`;add(field,p);
      const spread=(i-(count-1)/2)*18,arc=move.pattern==='rain'?-80:move.pattern==='orbit'?-35:move.pattern==='fan'?spread:0;
      animate(p,[{transform:'translate(-50%,-50%) scale(.35)',opacity:.5},{transform:`translate(${(end.x-origin.x)*.5-18}px,${(end.y-origin.y)*.5+arc+spread-18}px) scale(.85)`,opacity:1,offset:.5},{transform:`translate(${end.x-origin.x-18}px,${end.y-origin.y-18}px) scale(.8)`,opacity:1}],360+i*12);
     }
    }
   }
   await wait(450*scale);
  }
  if(signal.aborted)return;phase('contact');
  temporary.filter(el=>el.classList.contains('technique-projectile')||el.classList.contains('technique-beam')).forEach(el=>el.remove());
  for(const hit of e.hits){
   const el=document.getElementById(`fighter-${hit.id}`),f=[...b.party,...b.enemies].find(u=>u.id===hit.id);if(!el||!f)continue;
   const hp=el.querySelector<HTMLElement>('.hp-track>i'),label=el.querySelector('.hp-label');if(hp)hp.style.width=`${f.hp/f.maxHp*100}%`;if(label)label.textContent=`${Math.ceil(f.hp)} / ${f.maxHp}`;
   const track=el.querySelector('.hp-track');let shield=track?.querySelector<HTMLElement>('em');if(f.shield&&!shield){shield=document.createElement('em');track?.append(shield);}if(shield)shield.style.width=`${Math.min(100,f.shield/f.maxHp*100)}%`;
   const float=document.createElement('span');float.className=`floating-number ${hit.kind} ${hit.crit?'critical':''}`;float.textContent=hit.kind==='damage'?(hit.amount===(hit.absorbed??0)?'방어':`${hit.crit?'치명 ':''}−${hit.amount-(hit.absorbed??0)}`):hit.kind==='heal'?`+${hit.amount}`:`보호 +${hit.amount}`;add(el.querySelector('.damage-anchor')??el,float);
   const burst=document.createElement('span');burst.className=`contact-effect contact-${hit.kind} pattern-${move.pattern} element-${unit.element} ${move.ultimate?'heavy':''}`;burst.style.setProperty('--fx',hit.kind==='heal'?'#a3d9a0':hit.kind==='shield'?'#d9c38b':color);burst.innerHTML=effectArt(hit.kind==='damage'?move.effect:hit.kind==='shield'?'shield':move.effect);add(el.querySelector('.fighter-art')??el,burst);
   if(hit.kind==='damage'){
    el.classList.add('motion-reacting');const spr=el.querySelector<HTMLElement>('.pixel-sprite');
    // The victim stays at their own feet. Never move the full fighter to the attacker.
    if(!reduced){const recoil=(move.ultimate?7:hit.crit?5:3)*(f.side==='enemy'?1:-1);animate(spr,[{translate:'0px 0px',rotate:'0deg',filter:'brightness(1.1)'},{translate:`${recoil}px -1px`,rotate:`${recoil*.45}deg`,filter:'brightness(1.7)',offset:.3},{translate:'0px 0px',rotate:'0deg',filter:'brightness(1)'}],290);}
    if(hit.absorbed){const ring=document.createElement('i');ring.className='guard-ring';add(el.querySelector('.fighter-art')??el,ring);const absorb=document.createElement('span');absorb.className='floating-number absorbed';absorb.textContent=`흡수 ${hit.absorbed}`;absorb.style.top='22px';add(el.querySelector('.damage-anchor')??el,absorb);}
    if(f.hp<=0){el.classList.add('motion-defeated');if(!reduced)animate(spr,[{rotate:'0deg',translate:'0px 0px'},{rotate:`${direction*14}deg`,translate:'0px 7px'}],360);}
   }else el.classList.add(hit.kind==='heal'?'healed':'guarded');
  }
  impactSound(move.ultimate||e.hits.some(h=>h.crit),damage?`${unit.element}:${move.effect}`:e.hits[0]?.kind??'damage');
  if(!reduced&&move.ultimate&&damage)animate(field,[{translate:'0 0'},{translate:'-2px 1px'},{translate:'2px -1px'},{translate:'0 0'}],160);
  await wait((move.ultimate?230:150)*scale);if(signal.aborted)return;
  phase('return');frame(melee?2:0);
  if(melee&&!reduced){animate(art,[{transform:`translate(${offset.x}px,${offset.y}px)`},{transform:'translate(0px,0px)'}],350*move.tempo);await wait(350*move.tempo*scale);}
  await wait(180*scale);
  if(e.phaseChange&&!signal.aborted){const flag=document.createElement('div');flag.className='phase-banner phase-two';flag.textContent=`PHASE II · ${b.enemies.find(u=>u.boss)?.name??'보스'} 폭주`;add(field,flag);impactSound(true,'charge');await wait(850*scale);}
 }finally{
  field.querySelectorAll<HTMLElement>('.fighter').forEach(f=>{f.style.zIndex='';delete f.dataset.combatPhase;f.classList.remove('guarded','healed','motion-actor','motion-reacting','motion-defeated');const p=f.querySelector<HTMLElement>('.pixel-sprite');if(p){p.style.backgroundPosition='';p.classList.remove('walking');}});
  cleanup();signal.removeEventListener('abort',cleanup);
 }
}
