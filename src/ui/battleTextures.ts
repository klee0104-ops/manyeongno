const textures=new Map<string,Promise<void>>();
/** Decode full sheets before the first pose change, including newly encountered bosses. */
export async function prepareBattleTextures(field:HTMLElement,signal:AbortSignal){
 if(signal.aborted)return;
 const urls=new Set(Array.from(field.querySelectorAll('.pixel-sprite')).map(el=>getComputedStyle(el).getPropertyValue('--sprite').trim().replace(/^url\(['"]?|['"]?\)$/g,'')));
 const pending=[...urls].filter(Boolean).map(url=>{
  if(!textures.has(url)){
   const img=new Image();img.src=url;
   textures.set(url,new Promise<void>(resolve=>{
    const timer=window.setTimeout(()=>{textures.delete(url);resolve();},5000);
    img.decode().then(()=>{clearTimeout(timer);resolve();},()=>{clearTimeout(timer);textures.delete(url);resolve();});
   }));
  }
  return textures.get(url)!;
 });
 await new Promise<void>(resolve=>{
  const done=()=>{signal.removeEventListener('abort',done);resolve();};
  signal.addEventListener('abort',done,{once:true});void Promise.all(pending).then(done);
 });
}
