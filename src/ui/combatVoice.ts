import { assetPath } from '../utils/assets';
import type { CombatSlot } from '../data/combatChoreography';
/** One short local Korean callout at a time; never queues stale attacks. */
export class CombatVoice {
 private audio:HTMLAudioElement|null=null;
 private finish:(()=>void)|null=null;
 constructor(private duck:(value:boolean)=>void){}
 stop(){this.finish?.();this.finish=null;this.audio?.pause();this.audio=null;this.duck(false);}
 async speak(id:string,slot:CombatSlot,speed:number,volume:number,signal:AbortSignal){
  this.stop();if(slot==='basicAttack'||signal.aborted||document.hidden||volume<=0)return;
  const audio=new Audio(assetPath(`audio/combat/${id}-${slot}.wav`));this.audio=audio;
  audio.volume=Math.min(1,volume);audio.playbackRate=speed>=4?1.6:speed>=2?1.45:1;this.duck(true);
  await new Promise<void>(resolve=>{
   let settled=false;const finish=()=>{if(settled)return;settled=true;clearTimeout(timer);signal.removeEventListener('abort',finish);audio.pause();if(this.audio===audio){this.audio=null;this.finish=null;this.duck(false);}resolve();};
   const timer=window.setTimeout(finish,3800);this.finish=finish;signal.addEventListener('abort',finish,{once:true});audio.onended=finish;audio.onerror=finish;void audio.play().catch(finish);
  });
 }
}
