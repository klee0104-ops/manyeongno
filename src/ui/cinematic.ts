import { fullIllustration } from './pixel';
import type { SummonResult } from '../systems/adventure';
import { ELEMENT_COLOR } from '../data/gameContent';
export { storyFilm } from './storyPlayer';

export function summonFilm(results:SummonResult[],onDone:()=>void){
 const best=results.reduce((a,b)=>a.spirit.rarity>=b.spirit.rarity?a:b).spirit,overlay=document.createElement('section');overlay.className=`summon-film summon-tier-${best.rarity}`;overlay.style.setProperty('--summon-light',best.rarity===5?'#ffce79':best.rarity===4?'#d1a2f5':ELEMENT_COLOR[best.element]);overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','인연 소환 연출');
 overlay.innerHTML=`<div class="summon-starlight"></div><div class="summon-portal"><i></i><i></i><i></i><span>緣</span>${Array.from({length:12},(_,i)=>`<b style="--i:${i}">靈</b>`).join('')}</div><div class="summon-flash"></div><div class="summon-arrival">${fullIllustration(best.id)}<span>${'✦'.repeat(best.rarity)}</span><h2>${best.name}</h2><p>새로운 인연이 길을 밝힙니다</p></div><button class="outline-button film-skip">결과 바로 보기</button>`;
 document.body.append(overlay);document.body.classList.add('film-open');let done=false;
 const finish=()=>{if(done)return;done=true;clearTimeout(timer);overlay.remove();document.body.classList.remove('film-open');onDone();};const timer=setTimeout(finish,5000);
 overlay.querySelector('button')!.addEventListener('click',finish);overlay.addEventListener('keydown',e=>{if(e.key==='Escape')finish();if(e.key==='Tab'){e.preventDefault();overlay.querySelector('button')?.focus();}});overlay.querySelector('button')?.focus();return finish;
}
