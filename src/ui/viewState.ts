/** DOM refreshes must not send a reader back to the top of a page or modal. */
export function captureView(selector:string,key:string){
 const root=document.querySelector<HTMLElement>(selector),same=root?.dataset.viewKey===key;
 const x=window.scrollX,y=window.scrollY;
 const positions=same?[':scope','.detail-content','.modal','.shop-pool','.story-archive','.profile-avatars'].flatMap(s=>Array.from(root!.querySelectorAll<HTMLElement>(s)).map((el,i)=>({selector:s,index:i,top:el.scrollTop,left:el.scrollLeft}))):[];
 const ownTop=root?.scrollTop??0;
 const active=document.activeElement instanceof HTMLElement&&root?.contains(document.activeElement)?document.activeElement:null;
 return ()=>{
  const next=document.querySelector<HTMLElement>(selector);if(!next)return;next.dataset.viewKey=key;
  if(!same)return;
  next.scrollTop=ownTop;
  for(const p of positions){const el=next.querySelectorAll<HTMLElement>(p.selector)[p.index];if(el){el.scrollTop=p.top;el.scrollLeft=p.left;}}
  if(active){const found=Array.from(next.querySelectorAll<HTMLElement>('button,input,select,a')).find(el=>active.id?el.id===active.id:!!active.dataset.action&&el.dataset.action===active.dataset.action&&el.dataset.id===active.dataset.id);if(found&&!(found as HTMLButtonElement).disabled)found.focus({preventScroll:true});}
  window.scrollTo({left:x,top:y,behavior:'instant'});
 };
}
