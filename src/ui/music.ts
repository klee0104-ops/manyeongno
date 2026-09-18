/** Original score: ‘달빛을 따라’. 32 bars, 72 BPM, D pentatonic.
 * Synthesized locally; playback starts only after an explicit user gesture. */
export type Voice = 'flute' | 'pluck' | 'pad' | 'bell';
export interface ScoreNote { midi:number; beats:number; voice:Voice; gain:number }
export const BEAT_SECONDS=60/72;
export const SCORE_BEATS=128;
const melody=[
  [74,0,76,78],[81,0,78,0],[76,74,71,0],[69,0,0,0],
  [71,0,74,76],[78,0,76,74],[71,69,66,0],[69,0,0,0],
  [74,76,78,0],[81,0,83,81],[78,0,76,74],[76,0,0,0],
  [71,74,76,0],[78,0,76,71],[69,0,66,69],[74,0,0,0],
];
const chords=[[50,57,64],[47,54,62],[43,50,59],[45,52,59]];
export function scoreAt(beat:number):ScoreNote[]{
  const index=((beat%SCORE_BEATS)+SCORE_BEATS)%SCORE_BEATS;
  const bar=Math.floor(index/4),step=index%4,chord=chords[Math.floor(bar/2)%4];
  const notes:ScoreNote[]=[];
  if(step===0)chord.forEach(midi=>notes.push({midi,beats:4.7,voice:'pad',gain:.035}));
  notes.push({midi:chord[[0,1,2,1][step]]+12,beats:2.2,voice:'pluck',gain:.075});
  const m=melody[bar%16][step];
  if(m)notes.push({midi:m+(bar>=16&&bar<24?12:0),beats:step===3?1.8:1.5,voice:'flute',gain:.11});
  if(bar%8===0&&step===0)notes.push({midi:86,beats:5,voice:'bell',gain:.035});
  return notes;
}

export class JourneyMusic {
  private context:AudioContext|null=null;
  private master:GainNode|null=null;
  private bus:GainNode|null=null;
  private timer:number|undefined;
  private next=0;
  private beat=0;
  private enabled=false;
  private volume=.55;
  private ducked=false;
  get running(){return this.context?.state==='running'&&this.enabled;}
  private init(){
    if(this.context)return;
    const c=this.context=new AudioContext();
    this.master=c.createGain();this.master.gain.value=0;this.master.connect(c.destination);
    this.bus=c.createGain();this.bus.gain.value=.48;this.bus.connect(this.master);
    const delay=c.createDelay(2),feedback=c.createGain(),lowpass=c.createBiquadFilter(),wet=c.createGain();
    delay.delayTime.value=BEAT_SECONDS*.75;feedback.gain.value=.25;wet.gain.value=.2;
    lowpass.type='lowpass';lowpass.frequency.value=1800;
    this.bus.connect(delay);delay.connect(lowpass);lowpass.connect(feedback);feedback.connect(delay);lowpass.connect(wet);wet.connect(this.master);
  }
  async setEnabled(enabled:boolean):Promise<boolean>{
    this.enabled=enabled;
    if(!enabled){this.pause();return true;}
    try{
      this.init();const c=this.context!;await c.resume();
      if(!this.enabled)return true;
      this.setVolume(this.volume);this.next=Math.max(this.next,c.currentTime+.08);
      this.pump();if(!this.timer)this.timer=window.setInterval(()=>this.pump(),180);
      return c.state==='running';
    }catch{this.enabled=false;return false;}
  }
  setVolume(volume:number){
    this.volume=Math.max(0,Math.min(1,volume));
    if(this.master&&this.context){this.master.gain.cancelScheduledValues(this.context.currentTime);this.master.gain.setTargetAtTime(this.enabled?this.volume*(this.ducked?.22:1):0,this.context.currentTime,.3);}
  }
  setDucked(value:boolean){this.ducked=value;this.setVolume(this.volume);}
  pause(){
    window.clearInterval(this.timer);this.timer=undefined;
    if(this.context&&this.master){
      const c=this.context;this.master.gain.setTargetAtTime(0,c.currentTime,.12);
      window.setTimeout(()=>{if(!this.enabled||document.hidden)void c.suspend().catch(()=>{});},500);
    }
  }
  visibility(hidden:boolean){if(hidden)this.pause();else if(this.enabled)void this.setEnabled(true);}
  private pump(){
    const c=this.context;if(!c||!this.enabled||document.hidden)return;
    if(this.next<c.currentTime-.5)this.next=c.currentTime+.08;
    while(this.next<c.currentTime+.65){
      scoreAt(this.beat).forEach(note=>this.note(note,this.next));
      this.next+=BEAT_SECONDS;this.beat=(this.beat+1)%SCORE_BEATS;
    }
  }
  private note(note:ScoreNote,time:number){
    const c=this.context!,envelope=c.createGain(),filter=c.createBiquadFilter();
    const duration=note.beats*BEAT_SECONDS,frequency=440*2**((note.midi-69)/12);
    const attack=note.voice==='pad'?.65:note.voice==='flute'?.12:.012;
    filter.type='lowpass';filter.frequency.value=note.voice==='pluck'?2300:note.voice==='pad'?850:3200;
    envelope.gain.setValueAtTime(0,time);envelope.gain.linearRampToValueAtTime(note.gain,time+attack);
    envelope.gain.exponentialRampToValueAtTime(.0001,time+duration);
    envelope.connect(filter);filter.connect(this.bus!);
    const partials=note.voice==='bell'?[1,2.005,3.01]:note.voice==='flute'?[1,2]:[1];
    partials.forEach((multiple,i)=>{
      const osc=c.createOscillator(),gain=c.createGain();
      osc.type=note.voice==='pluck'||note.voice==='pad'?'triangle':'sine';osc.frequency.value=frequency*multiple;
      gain.gain.value=i===0?1:note.voice==='bell'?.22:.12;
      osc.connect(gain);gain.connect(envelope);osc.start(time);osc.stop(time+duration+.04);
      osc.onended=()=>{osc.disconnect();gain.disconnect();};
    });
    window.setTimeout(()=>{envelope.disconnect();filter.disconnect();},Math.max(0,(time+duration-c.currentTime)*1000)+100);
  }
  impact(heavy:boolean,kind:string){
    const c=this.context;if(!this.running||!c||document.hidden)return;
    if(kind==='heal'||kind==='charge'){[523.25,659.25,783.99].forEach((hz,i)=>window.setTimeout(()=>this.effect(hz,.32,.035),i*65));return;}
    if(kind==='shield'){this.effect(330,.22,.055);this.effect(990,.13,.025);return;}
    const element=kind.split(':')[0];
    const timbre=element==='금'?{pitch:740,end:280,noise:4200,type:'sine' as OscillatorType}:element==='수'?{pitch:420,end:105,noise:650,type:'sine' as OscillatorType}:element==='목'?{pitch:270,end:120,noise:2100,type:'triangle' as OscillatorType}:element==='토'?{pitch:140,end:38,noise:440,type:'triangle' as OscillatorType}:{pitch:230,end:65,noise:1300,type:'triangle' as OscillatorType};
    const now=c.currentTime,duration=heavy?.32:.15,osc=c.createOscillator(),env=c.createGain();
    osc.type=timbre.type;osc.frequency.setValueAtTime(timbre.pitch*(heavy?.8:1),now);osc.frequency.exponentialRampToValueAtTime(timbre.end,now+duration);
    env.gain.setValueAtTime(heavy?.17:.09,now);env.gain.exponentialRampToValueAtTime(.0001,now+duration);
    osc.connect(env);env.connect(this.master!);osc.start();osc.stop(now+duration);
    const noise=c.createBuffer(1,Math.floor(c.sampleRate*.11),c.sampleRate),samples=noise.getChannelData(0);
    for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*(1-i/samples.length);
    const source=c.createBufferSource(),filter=c.createBiquadFilter(),gain=c.createGain();source.buffer=noise;filter.type=element==='수'||element==='토'?'lowpass':'highpass';filter.frequency.value=timbre.noise;gain.gain.value=heavy?.11:.065;
    source.connect(filter);filter.connect(gain);gain.connect(this.master!);source.start();
    source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();};osc.onended=()=>{osc.disconnect();env.disconnect();};
  }
  effect(frequency:number,duration:number,volume=.045){
    const c=this.context;if(!this.running||!c||document.hidden)return;
    const oscillator=c.createOscillator(),gain=c.createGain();oscillator.type='sine';oscillator.frequency.value=frequency;
    gain.gain.setValueAtTime(0,c.currentTime);gain.gain.linearRampToValueAtTime(volume,c.currentTime+.015);gain.gain.exponentialRampToValueAtTime(.0001,c.currentTime+duration);
    oscillator.connect(gain);gain.connect(this.master!);oscillator.start();oscillator.stop(c.currentTime+duration+.03);
    oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};
  }
}
