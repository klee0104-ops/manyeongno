import { assetPath } from '../utils/assets';
export type ShopLine='welcome'|'summon'|'general'|'purchase'|'back';
export const SHOP_LINES:Record<ShopLine,string>={welcome:'어서 오너라, 먼 길 오느라 고생했지. 무엇이 필요하니?',summon:'새로운 인연을 찾으러 왔구나. 마음을 담아 부적을 골라 보렴.',general:'여행길에는 준비가 제일이지. 약차도 있고, 요괴를 키울 재료도 있단다.',purchase:'여기 있단다. 네 여정에 도움이 되었으면 좋겠구나.',back:'천천히 둘러보렴. 나는 여기 있을 테니.'};
export class ShopHost {
 private audio:HTMLAudioElement|null=null;private sequence=0;private line:ShopLine='welcome';
 private sessionVoice:boolean|null=null;private status='인연상회의 주인';
 constructor(private duck:(enabled:boolean)=>void){document.addEventListener('visibilitychange',()=>{if(document.hidden)this.stop();});}
 get voiceEnabled(){if(this.sessionVoice!==null)return this.sessionVoice;try{return localStorage.getItem('manyeongno:narration')!=='off';}catch{return true;}}
 toggleVoice(){
  const enabled=!this.voiceEnabled;this.sessionVoice=enabled;
  try{localStorage.setItem('manyeongno:narration',enabled?'on':'off');this.sessionVoice=null;}catch{/* Keep the preference for this visit. */}
  if(!enabled)this.stop();
  this.paint();
 }
 toggleReplay(line:ShopLine){if(this.audio)this.stop();else this.speak(line,true);}
 speak(line:ShopLine,explicit=false){
  this.stop();this.line=line;this.paint();
  if(!this.voiceEnabled&&!explicit)return;
  const token=++this.sequence,audio=this.audio=new Audio(assetPath(`audio/shop/${line}.wav`));audio.volume=.85;audio.setAttribute('aria-label','인연 할머니의 목소리');document.querySelector('.granny-dialogue')?.append(audio);
  this.status='음성 준비 중';this.paint();
  audio.onplaying=()=>{if(token!==this.sequence)return;this.duck(true);this.status='안내 음성 재생 중';this.paint();};
  audio.onended=()=>{if(token===this.sequence)this.stop();};
  const failed=()=>{if(token!==this.sequence)return;this.stop();this.status='음성을 불러오지 못했어요. 다시 듣기를 눌러주세요.';this.paint();};
  audio.onerror=failed;void audio.play().catch(failed);
 }
 repaint(){if(this.audio)document.querySelector('.granny-dialogue')?.append(this.audio);this.paint();}
 private paint(){
  const text=document.querySelector('.granny-dialogue p');if(text)text.textContent=SHOP_LINES[this.line];
  const toggle=document.querySelector('[data-action="granny-voice"]');if(toggle){toggle.textContent=`안내 음성 ${this.voiceEnabled?'켜짐':'꺼짐'}`;toggle.setAttribute('aria-pressed',String(this.voiceEnabled));}
  const replay=document.querySelector('[data-action="granny-repeat"]');if(replay){replay.textContent=this.audio?'음성 멈추기':'다시 듣기';replay.setAttribute('aria-label',this.audio?'할머니 음성 멈추기':'할머니 목소리 다시 듣기');}
  const status=document.querySelector('.granny-voice-status');if(status)status.textContent=this.status;
 }
 stop(){this.sequence++;this.audio?.pause();this.audio?.remove();this.audio=null;this.status='인연상회의 주인';this.duck(false);this.paint();}
}

/** Keep the counter in place when a purchase or selection refreshes its markup. */
export function captureShopView(){
 const previous=document.querySelector<HTMLElement>('.merchant-world');
 const room=previous?.dataset.shopRoom,top=previous?.scrollTop??0;
 const active=document.activeElement instanceof HTMLElement&&previous?.contains(document.activeElement)?document.activeElement:null;
 return ()=>{
  const current=document.querySelector<HTMLElement>('.merchant-world');if(!current||room!==current.dataset.shopRoom)return;
  current.scrollTop=top;
  if(active){const next=Array.from(current.querySelectorAll<HTMLElement>('button,select,input')).find(el=>active.id?el.id===active.id:!!active.dataset.action&&el.dataset.action===active.dataset.action&&el.dataset.id===active.dataset.id);if(next&&!(next as HTMLButtonElement).disabled)next.focus({preventScroll:true});}
 };
}
export function loadShop(onReady:()=>void){
 const overlay=document.createElement('section');overlay.className='shop-loading';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','인연상회로 이동');
 const app=document.querySelector<HTMLElement>('#app');if(app)app.inert=true;
 overlay.innerHTML='<div class="shop-loading-door"><i></i><i></i><span>緣</span></div><div class="shop-loading-copy"><small>백귀정 · 달빛 골목</small><h2>인연상회</h2><p role="status">등불이 켜진 가게로 들어갑니다.</p><div role="progressbar" aria-label="상점 로딩" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i></i></div></div>';
 document.body.append(overlay);document.body.classList.add('film-open');let loaded=0;
 const assets=['art/shop-interior-v06.png','art/granny-poses-v06.png','audio/shop/welcome.wav'].map(path=>assetPath(path));
 void Promise.all([...assets.map(async path=>{try{const r=await fetch(path,{signal:AbortSignal.timeout(6000)});if(!r.ok)throw Error('asset');await r.arrayBuffer();}catch{/* The shop remains navigable if an optional asset is unavailable. */}finally{loaded++;const percent=Math.round(loaded/assets.length*100);overlay.querySelector('[role="progressbar"]')?.setAttribute('aria-valuenow',String(percent));overlay.querySelector<HTMLElement>('[role="progressbar"] i')!.style.width=`${percent}%`;}}),new Promise(r=>setTimeout(r,1050))]).then(()=>{overlay.classList.add('doors-open');onReady();window.setTimeout(()=>{overlay.remove();document.body.classList.remove('film-open');if(app)app.inert=false;document.querySelector<HTMLButtonElement>('[data-action="shop-tab"]')?.focus({preventScroll:true});},650);});
}
