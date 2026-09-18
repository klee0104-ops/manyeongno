import { assetPath } from '../utils/assets';
export type ShopLine='welcome'|'summon'|'general'|'purchase'|'back';
export const SHOP_LINES:Record<ShopLine,string>={welcome:'어서 오너라, 먼 길 오느라 고생했지. 무엇이 필요하니?',summon:'새로운 인연을 찾으러 왔구나. 마음을 담아 부적을 골라 보렴.',general:'여행길에는 준비가 제일이지. 약차도 있고, 요괴를 키울 재료도 있단다.',purchase:'여기 있단다. 네 여정에 도움이 되었으면 좋겠구나.',back:'천천히 둘러보렴. 나는 여기 있을 테니.'};
export class ShopHost {
 private audio:HTMLAudioElement|null=null;private sequence=0;private line:ShopLine='welcome';
 constructor(private duck:(enabled:boolean)=>void){document.addEventListener('visibilitychange',()=>{if(document.hidden)this.stop();});}
 speak(line:ShopLine,explicit=false){
  this.stop();this.line=line;this.paint();let enabled=true;try{enabled=localStorage.getItem('manyeongno:narration')!=='off';}catch{/* Session-only preference. */}
  if(!enabled&&!explicit)return;
  const token=++this.sequence,audio=this.audio=new Audio(assetPath(`audio/shop/${line}.wav`));audio.volume=.85;audio.setAttribute('aria-label','인연 할머니의 목소리');document.querySelector('.granny-dialogue')?.append(audio);
  audio.onplaying=()=>{if(token!==this.sequence)return;this.duck(true);document.querySelector('.granny-character')?.classList.add('talking');};
  audio.onended=()=>{if(token===this.sequence)this.stop();};audio.onerror=()=>{if(token===this.sequence)this.stop();};
  void audio.play().catch(()=>{if(token===this.sequence)this.stop();});
 }
 repaint(){this.paint();if(this.audio&&!this.audio.paused){document.querySelector('.granny-dialogue')?.append(this.audio);document.querySelector('.granny-character')?.classList.add('talking');}}
 private paint(){const text=document.querySelector('.granny-dialogue p');if(text)text.textContent=SHOP_LINES[this.line];}
 stop(){this.sequence++;this.audio?.pause();this.audio?.remove();this.audio=null;document.querySelector('.granny-character')?.classList.remove('talking');this.duck(false);}
}
export function loadShop(onReady:()=>void){
 const overlay=document.createElement('section');overlay.className='shop-loading';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','인연상회로 이동');
 const app=document.querySelector<HTMLElement>('#app');if(app)app.inert=true;
 overlay.innerHTML='<div class="shop-loading-door"><i></i><i></i><span>緣</span></div><div class="shop-loading-copy"><small>백귀정 · 달빛 골목</small><h2>인연상회</h2><p role="status">등불이 켜진 가게로 들어갑니다.</p><div role="progressbar" aria-label="상점 로딩" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i></i></div></div>';
 document.body.append(overlay);document.body.classList.add('film-open');let loaded=0;
 const assets=['art/shop-interior-v06.png','art/granny-poses-v06.png','audio/shop/welcome.wav'].map(path=>assetPath(path));
 void Promise.all([...assets.map(async path=>{try{const r=await fetch(path,{signal:AbortSignal.timeout(6000)});if(!r.ok)throw Error('asset');await r.arrayBuffer();}catch{/* The shop remains navigable if an optional asset is unavailable. */}finally{loaded++;const percent=Math.round(loaded/assets.length*100);overlay.querySelector('[role="progressbar"]')?.setAttribute('aria-valuenow',String(percent));overlay.querySelector<HTMLElement>('[role="progressbar"] i')!.style.width=`${percent}%`;}}),new Promise(r=>setTimeout(r,1050))]).then(()=>{overlay.classList.add('doors-open');onReady();window.setTimeout(()=>{overlay.remove();document.body.classList.remove('film-open');if(app)app.inert=false;document.querySelector<HTMLButtonElement>('[data-action="shop-tab"]')?.focus({preventScroll:true});},650);});
}
