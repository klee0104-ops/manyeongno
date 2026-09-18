export interface BookSnapshot {left:HTMLElement;right:HTMLElement}
const cleanCopy=(page:HTMLElement)=>{const clone=page.cloneNode(true) as HTMLElement;clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));clone.setAttribute('aria-hidden','true');clone.inert=true;return clone;};
const mobileSheet=(pages:HTMLElement[])=>{const sheet=document.createElement('div');sheet.className='mobile-turn-page';pages.forEach(page=>sheet.append(cleanCopy(page)));return sheet;};
export function captureBook():BookSnapshot|null {
 const pages=document.querySelectorAll<HTMLElement>('.antique-book>.paper-page');
 return pages.length===2?{left:cleanCopy(pages[0]),right:cleanCopy(pages[1])}:null;
}
/** A continuous curved sheet assembled from strips, with printed front and back. */
export async function turnBook(previous:BookSnapshot,direction=1){
 const book=document.querySelector<HTMLElement>('.antique-book');if(!book||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const controls=Array.from(document.querySelectorAll<HTMLElement>('.book-searchbar,.book-selects'));controls.forEach(el=>el.inert=true);
 const pages=book.querySelectorAll<HTMLElement>(':scope>.paper-page'),mobile=innerWidth<=760;
 const target=mobile?mobileSheet(Array.from(pages)):pages[direction<0?1:0],source=mobile?mobileSheet([previous.left,previous.right]):previous[direction<0?'left':'right'];
 const width=pages[0].getBoundingClientRect().width,height=mobile?book.clientHeight:Math.max(pages[0].getBoundingClientRect().height,pages[1].getBoundingClientRect().height);
 const overlay=document.createElement('div');overlay.className=`curved-page-turn ${direction<0?'turn-backward':''} ${mobile?'turn-mobile':''}`;overlay.setAttribute('aria-hidden','true');overlay.inert=true;
 overlay.style.cssText=`--page-width:${width}px;--page-height:${height}px`;book.append(overlay);
 const stationary=cleanCopy(previous[direction<0?'right':'left']);stationary.classList.add('turn-stationary');stationary.style.width=`${width}px`;stationary.style.height=`${height}px`;
 if(!mobile)overlay.append(stationary);
 const count=9,slice=width/count,animations:Animation[]=[];
 for(let i=0;i<count;i++){
  const strip=document.createElement('div');strip.className='paper-curl-strip';strip.style.width=`${slice+.6}px`;strip.style.height=`${height}px`;
  for(const back of [false,true]){
   const face=document.createElement('div');face.className=back?'curl-face curl-back':'curl-face curl-front';
   const copy=cleanCopy(back?target:source);copy.classList.add('curl-content');copy.style.width=`${width}px`;copy.style.height=`${height}px`;
   const crop=back?count-1-i:i;copy.style.left=`-${crop*slice}px`;if(direction<0)copy.classList.add('mirror-print');face.append(copy);strip.append(face);
  }
  overlay.append(strip);const frames:Keyframe[]=[];
  for(let f=0;f<=24;f++){
   const t=f/24,theta=Math.PI*t,bend=Math.sin(Math.PI*t)*.54;let x=0,z=0;
   for(let j=0;j<i;j++){const a=theta+bend*(j/count-.25);x+=slice*Math.cos(a);z+=slice*Math.sin(a);}
   const angle=theta+bend*(i/count-.25);frames.push({transform:`translate3d(${x}px,0,${z}px) rotateY(${-angle}rad)`,filter:`brightness(${1-Math.sin(Math.PI*t)*(.08+i*.017)})`,offset:t});
  }
  animations.push(strip.animate(frames,{duration:1250,easing:'cubic-bezier(.24,.06,.19,1)',fill:'forwards'}));
 }
 const shadow=document.createElement('div');shadow.className='curl-cast-shadow';overlay.append(shadow);animations.push(shadow.animate([{opacity:0,transform:'translateX(40%)'},{opacity:.36,offset:.5},{opacity:0,transform:'translateX(-60%)'}],{duration:1250,easing:'ease-in-out'}));
 book.classList.add('turning-paper');
 try{await Promise.all(animations.map(a=>a.finished));}catch{/* A removed reader ends its transition. */}finally{animations.forEach(a=>a.cancel());overlay.remove();book.classList.remove('turning-paper');controls.forEach(el=>el.inert=false);}
}
