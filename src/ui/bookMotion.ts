export interface BookSnapshot {left:HTMLElement;right:HTMLElement}
const cleanCopy=(page:HTMLElement)=>{const clone=page.cloneNode(true) as HTMLElement;clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));clone.setAttribute('aria-hidden','true');clone.inert=true;return clone;};
const mobileSheet=(pages:HTMLElement[])=>{const sheet=document.createElement('div');sheet.className='mobile-turn-page';pages.forEach(page=>sheet.append(cleanCopy(page)));return sheet;};
export function captureBook():BookSnapshot|null {
 const pages=document.querySelectorAll<HTMLElement>('.antique-book>.paper-page');
 return pages.length===2?{left:cleanCopy(pages[0]),right:cleanCopy(pages[1])}:null;
}
/** Two printed faces on one physical sheet. No scaleX(-1) on printed content. */
export async function turnBook(previous:BookSnapshot,direction=1){
 const book=document.querySelector<HTMLElement>('.antique-book');if(!book||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const pages=Array.from(book.querySelectorAll<HTMLElement>(':scope>.paper-page'));if(pages.length!==2)return;
 const controls=Array.from(document.querySelectorAll<HTMLElement>('.book-searchbar,.book-selects'));controls.forEach(el=>el.inert=true);
 const mobile=innerWidth<=760,backward=direction<0,width=mobile?book.clientWidth:pages[0].getBoundingClientRect().width;
 const height=Math.max(book.clientHeight,mobile?previous.left.offsetHeight+previous.right.offsetHeight:0);
 const overlay=document.createElement('div');overlay.className=`folio-turn ${backward?'folio-backward':''} ${mobile?'folio-mobile':''}`;overlay.setAttribute('aria-hidden','true');overlay.inert=true;
 overlay.style.cssText=`--folio-width:${width}px;--folio-height:${height}px`;book.append(overlay);
 const animations:Animation[]=[];
 if(mobile){
  const sheet=mobileSheet([previous.left,previous.right]);sheet.classList.add('folio-mobile-sheet');overlay.append(sheet);
  animations.push(sheet.animate([{transform:'translateX(0) rotateY(0deg)',opacity:1},{transform:`translateX(${backward?'38':'-38'}%) rotateY(${backward?42:-42}deg)`,opacity:1,offset:.65},{transform:`translateX(${backward?'105':'-105'}%) rotateY(${backward?70:-70}deg)`,opacity:0}],{duration:800,easing:'cubic-bezier(.25,.05,.25,1)',fill:'forwards'}));
 }else{
  const stationary=cleanCopy(previous[backward?'right':'left']);stationary.classList.add('folio-stationary');overlay.append(stationary);
  const leaf=document.createElement('div');leaf.className='folio-leaf';overlay.append(leaf);
  for(const isBack of [false,true]){
   const face=document.createElement('div');face.className=`folio-face ${isBack?'folio-verso':'folio-recto'}`;
   const copy=cleanCopy(isBack?pages[backward?1:0]:previous[backward?'left':'right']);copy.classList.add('folio-print');face.append(copy);leaf.append(face);
  }
  const angle=backward?180:-180;
  animations.push(leaf.animate([{transform:'rotateY(0deg)'},{transform:`rotateY(${angle*.42}deg)`,offset:.4},{transform:`rotateY(${angle*.75}deg)`,offset:.7},{transform:`rotateY(${angle}deg)`}],{duration:1050,easing:'cubic-bezier(.3,.04,.25,1)',fill:'forwards'}));
  const light=document.createElement('i');light.className='folio-shading';leaf.append(light);
  animations.push(light.animate([{opacity:0},{opacity:.32,offset:.5},{opacity:0}],{duration:1050,fill:'forwards'}));
 }
 book.classList.add('turning-paper');
 try{await Promise.all(animations.map(a=>a.finished));}catch{/* Closing the reader cancels the turn. */}finally{animations.forEach(a=>a.cancel());overlay.remove();book.classList.remove('turning-paper');controls.forEach(el=>el.inert=false);}
}
