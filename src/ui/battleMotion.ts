import type { LiveBattle, BattleEvent } from '../systems/liveBattle';
import { combatStyle } from '../data/combatStyles';
import { ELEMENT_COLOR } from '../data/gameContent';
import { fullIllustration } from './pixel';
import { effectArt } from './combatEffects';

const delay=(ms:number,signal:AbortSignal)=>new Promise<void>(resolve=>{if(signal.aborted){resolve();return;}const done=()=>{clearTimeout(timer);signal.removeEventListener('abort',done);resolve();};const timer=setTimeout(done,ms);signal.addEventListener('abort',done,{once:true});});
export async function animateBattleEvent(b:LiveBattle,e:BattleEvent,speed:number,signal:AbortSignal,impactSound:(heavy:boolean,kind:string)=>void):Promise<void>{
 const field=document.querySelector<HTMLElement>('.battlefield');if(!field)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,scale=reduced?.2:1/Math.min(3,speed),animations:Animation[]=[];
 const animate=(el:Element|null,frames:Keyframe[],duration:number)=>{if(!el)return;const a=el.animate(frames,{duration:duration*scale,easing:'ease-in-out',fill:'forwards'});animations.push(a);return a;};
 const cleanup=()=>{animations.forEach(a=>a.cancel());field.querySelectorAll('.projectile,.ultimate-cutin,.impact-burst,.phase-banner,.cast-circle,.skill-caption,.guard-ring,.floating-number').forEach(el=>el.remove());field.classList.remove('motion-controlled');};
 signal.addEventListener('abort',cleanup,{once:true});
 try{
  if(e.wave){const flag=document.createElement('div');flag.className='phase-banner';flag.textContent=`WAVE ${b.wave} · ${b.stage===20?'결계의 주인':'다음 진영'}`;field.append(flag);await delay(850*scale,signal);return;}
  const actor=document.getElementById(`fighter-${e.actor}`),sprite=actor?.querySelector<HTMLElement>('.pixel-sprite'),art=actor?.querySelector<HTMLElement>('.fighter-art');
  const unit=[...b.party,...b.enemies].find(u=>u.id===e.actor);if(!actor||!unit||!art)return;
  const effect=combatStyle(unit.spiritId).effect,color=ELEMENT_COLOR[unit.element],damage=e.hits.find(h=>h.kind==='damage'),target=damage?document.getElementById(`fighter-${damage.id}`):null;
  const a=art.getBoundingClientRect(),t=target?.querySelector('.fighter-art')?.getBoundingClientRect();
  const direction=unit.side==='party'?1:-1,melee=!!target&&['blade','claw','club','stone','flame','venom'].includes(effect)&&unit.role!=='술사';
  const dx=melee&&t?t.x-a.x-direction*a.width*.53:direction*8,dy=melee&&t?t.y-a.y:0;
  field.classList.add('motion-controlled');actor.classList.add('motion-actor');actor.style.zIndex='15';
  if(e.slot&&e.slot!=='basicAttack'){
   const cast=document.createElement('i');cast.className='cast-circle';cast.style.setProperty('--fx',color);art.append(cast);
   const caption=document.createElement('span');caption.className='skill-caption';caption.textContent=e.label;caption.style.setProperty('--fx',color);actor.append(caption);
  }
  const announce=field.querySelector('#battle-announcement');if(announce)announce.textContent=e.message;
  if(e.ultimate&&!reduced&&(unit.side==='party'||unit.boss)){const cutin=document.createElement('div');cutin.className='ultimate-cutin';cutin.style.setProperty('--element',color);cutin.innerHTML=`${fullIllustration(unit.spiritId,unit.awakening)}<div><small>${unit.awakening>=5?'진명 해방':'ULTIMATE'}</small><h3>${unit.name}</h3><strong>${e.label}</strong></div>`;field.append(cutin);impactSound(true,'charge');await delay(950*scale,signal);cutin.remove();}
  if(signal.aborted)return;
  sprite?.classList.add('walking');
  const movement=animate(art,reduced?[{transform:'none'},{transform:'none'}]:[{transform:'translate(0,0)'},{transform:`translate(${-direction*9}px,4px)`,offset:.12},{transform:`translate(${dx}px,${dy-7}px)`,offset:.33},{transform:`translate(${dx}px,${dy}px)`,offset:.55},{transform:`translate(${dx}px,${dy}px)`,offset:.7},{transform:'translate(0,0)'}],1050);
  await delay(330*scale,signal);if(signal.aborted)return;
  sprite?.classList.remove('walking');if(sprite)sprite.style.backgroundPosition='var(--frame-3) var(--row)';
  if(!melee&&!reduced){
   const bounds=field.getBoundingClientRect();
   for(const hit of e.hits.filter(h=>h.kind==='damage')){
    const destination=document.getElementById(`fighter-${hit.id}`)?.querySelector('.fighter-art')?.getBoundingClientRect();if(!destination)continue;
    const p=document.createElement('span');p.className=`projectile projectile-${effect} ${unit.side==='enemy'?'from-enemy':''}`;p.innerHTML=effectArt(effect);p.style.setProperty('--fx',color);p.style.left=`${a.x+a.width/2-bounds.x}px`;p.style.top=`${a.y+a.height*.45-bounds.y}px`;field.append(p);
    animate(p,[{transform:'scale(.45)',opacity:0},{transform:`translate(${(destination.x-a.x)*.3}px,${(destination.y-a.y)*.3-18}px) scale(.9)`,opacity:1,offset:.35},{transform:`translate(${destination.x-a.x}px,${destination.y-a.y}px) scale(1.3)`,opacity:1}],190);
   }
  }
  await delay(190*scale,signal);if(signal.aborted)return;
  field.querySelectorAll('.projectile').forEach(p=>p.remove());movement?.pause();
  for(const hit of e.hits){
   const el=document.getElementById(`fighter-${hit.id}`),f=[...b.party,...b.enemies].find(u=>u.id===hit.id);if(!el||!f)continue;
   const hp=el.querySelector<HTMLElement>('.hp-track>i'),label=el.querySelector('.hp-label');if(hp)hp.style.width=`${f.hp/f.maxHp*100}%`;if(label)label.textContent=`${Math.ceil(f.hp)} / ${f.maxHp}`;
   const track=el.querySelector('.hp-track');let shield=track?.querySelector<HTMLElement>('em');if(f.shield&&!shield){shield=document.createElement('em');track?.append(shield);}if(shield)shield.style.width=`${Math.min(100,f.shield/f.maxHp*100)}%`;
   const float=document.createElement('span');float.className=`floating-number ${hit.kind} ${hit.crit?'critical':''}`;float.textContent=hit.kind==='damage'?(hit.amount===(hit.absorbed??0)?'방어':`${hit.crit?'치명 ':''}−${hit.amount-(hit.absorbed??0)}`):hit.kind==='heal'?`+${hit.amount}`:`보호 +${hit.amount}`;if(hit.kind==='damage'&&hit.amount===(hit.absorbed??0))float.classList.add('blocked');el.querySelector('.damage-anchor')?.append(float);
   const burst=document.createElement('span');burst.className=`impact-burst impact-${hit.kind} impact-${effect} ${e.ultimate?'heavy':''} ${hit.crit?'critical':''}`;burst.style.setProperty('--fx',hit.kind==='heal'?'#9df3b0':hit.kind==='shield'?'#e8d897':color);burst.innerHTML=effectArt(hit.kind==='damage'?effect:hit.kind)+Array.from({length:6},(_,i)=>`<i style="--spark:${i}"></i>`).join('');el.querySelector('.fighter-art')?.append(burst);
   if(hit.kind==='damage'){
    el.classList.add('motion-reacting');const spr=el.querySelector('.pixel-sprite');animate(spr,[{filter:'brightness(2.6) saturate(.3)'},{filter:'brightness(1.5)'},{filter:'brightness(1)'}],220);
    if(hit.absorbed){const ring=document.createElement('i');ring.className='guard-ring';el.querySelector('.fighter-art')?.append(ring);const absorb=document.createElement('span');absorb.className='floating-number absorbed';absorb.textContent=`흡수 ${hit.absorbed}`;absorb.style.top='22px';el.querySelector('.damage-anchor')?.append(absorb);}
    if(!reduced){const recoil=(e.ultimate?22:hit.crit?15:9)*(f.side==='enemy'?1:-1);animate(el.querySelector('.fighter-art'),[{translate:'0 0',rotate:'0deg'},{translate:`${recoil}px -5px`,rotate:`${recoil*.35}deg`,offset:.25},{translate:`${recoil*.45}px 2px`,rotate:`${recoil*.12}deg`,offset:.6},{translate:'0 0',rotate:'0deg'}],f.hp<=0?450:340);}
    if(f.hp<=0){el.classList.add('motion-defeated');animate(spr,[{opacity:1,transform:'translateY(0)'},{opacity:.25,transform:reduced?'none':'translateY(12px) scale(.9)'}],450);}
   }
   if(hit.kind==='shield')el.classList.add('guarded');if(hit.kind==='heal')el.classList.add('healed');
  }
  impactSound(e.ultimate||e.hits.some(h=>h.crit),e.hits[0]?.kind??'damage');
  if(!reduced&&damage)animate(field,[{translate:'0 0'},{translate:'-4px 2px'},{translate:'4px -2px'},{translate:'-2px 1px'},{translate:'0 0'}],e.ultimate?250:140);
  await delay(reduced?15:e.ultimate?95:60,signal);movement?.play();
  await delay(500*scale,signal);if(signal.aborted)return;
  if(e.phaseChange){const flag=document.createElement('div');flag.className='phase-banner phase-two';flag.textContent=`PHASE II · ${b.enemies.find(u=>u.boss)?.name??'보스'} 폭주`;field.append(flag);impactSound(true,'charge');await delay(1000*scale,signal);}
 }finally{field.querySelectorAll<HTMLElement>('.fighter').forEach(f=>{f.style.zIndex='';f.classList.remove('guarded','healed','motion-actor','motion-reacting','motion-defeated');const p=f.querySelector<HTMLElement>('.pixel-sprite');if(p){p.style.backgroundPosition='';p.classList.remove('walking');}});cleanup();signal.removeEventListener('abort',cleanup);}
}
