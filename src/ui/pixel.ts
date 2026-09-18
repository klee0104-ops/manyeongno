import { spiritById } from '../data/gameContent';
import { assetPath } from '../utils/assets';
import { idleProfile, idleStyle } from '../data/idleProfiles';
const idleLayers='<i class="idle-part idle-feet" aria-hidden="true"></i><i class="idle-part idle-chest" aria-hidden="true"></i><i class="idle-part idle-head" aria-hidden="true"></i><i class="idle-spark one" aria-hidden="true"></i><i class="idle-spark two" aria-hidden="true"></i><i class="idle-spark three" aria-hidden="true"></i>';

// Measured transparent gutters. Image generators do not always align rows to
// nominal cell boundaries; sampling the nominal grid clips feet and headgear.
const ART_ROWS:Record<string,number[]>={'roster-a':[0,270,520,778,1023,1280,1536],'roster-b':[0,256,513,769,1015,1264,1536],'roster-c':[0,512,1024],bosses:[0,490,1024]};
const atlasFile=(atlas:string)=>atlas==='roster-c'?'roster-c-atlas-v2.png':`${atlas}-atlas.png`;

export function illustrationStyle(id:string,awakening=0){
 const d=spiritById(id),large=d.atlas==='roster-a'||d.atlas==='roster-b',cols=large?4:3,edges=ART_ROWS[d.atlas]??[0,512,1024],row=Math.floor(d.art/cols),total=edges[edges.length-1],height=edges[row+1]-edges[row];
 const file=d.atlas==='spirits'&&awakening>=5?'awakened-atlas.png':atlasFile(d.atlas);
 return `--art:url('${assetPath(`art/${file}`)}');--x:${d.art%cols/(cols-1)*100}%;--y:${edges[row]/(total-height)*100}%;--art-cols:${cols*100}%;--art-rows:${total/height*100}%`;
}
/** Frame UVs are stored per atlas so ears and large weapons are not clipped. */
export function pixelSprite(id:string,cls='',awakening=0):string {
  const d=spiritById(id);
  const awakened=awakening>=5;
  if(d.atlas!=='spirits'&&d.atlas!=='monsters'){
    const large=d.atlas==='roster-a'||d.atlas==='roster-b',cols=large?4:3,edges=ART_ROWS[d.atlas],row=Math.floor(d.art/cols),total=edges[edges.length-1],height=edges[row+1]-edges[row],x=d.art%cols/(cols-1)*100,y=edges[row]/(total-height)*100;
    return `<span class="pixel-sprite living-sprite single-pose ${awakened?'awakened':''} ${cls}" data-idle="${idleProfile(id).kind}" role="img" aria-label="${d.name} 도트 캐릭터" style="${idleStyle(id)};--sprite:url('${assetPath(`art/${atlasFile(d.atlas)}`)}');--row:${y}%;--sheet-x:${cols*100}%;--sheet-y:${total/height*100}%;--frame-0:${x}%;--frame-1:${x}%;--frame-2:${x}%;--frame-3:${x}%">${idleLayers}</span>`;
  }
  const file=d.atlas==='spirits'?(awakened?'pixel-awakened.png':'pixel-spirits-v2.png'):'pixel-monsters.png';
  // Generated sheets have uneven row gutters. Sample the actual character rows,
  // not an assumed 256px grid, so ears and weapons from neighbours never appear.
  const rows=d.atlas==='spirits'?(awakened?[0,256,512,767,1018,1260,1536]:[0,261,493,742,997,1241,1536]):[0,262,509,754,1028,1280,1536];
  const top=rows[d.art],height=rows[d.art+1]-top;
  const width=d.id==='mangeomhon'&&!awakened?280:256,padding=(width-256)/2;
  const frames=[0,1,2,3].map(n=>(n*256-padding)/(1024-width)*100);
  return `<span class="pixel-sprite living-sprite ${awakened?'awakened':''} ${cls}" data-idle="${idleProfile(id).kind}" role="img" aria-label="${d.name}${awakened?' 진명 각성':''} 도트 캐릭터" style="${idleStyle(id)};--sprite:url('${assetPath(`art/${file}`)}');--row:${top/(1536-height)*100}%;--sheet-x:${1024/width*100}%;--sheet-y:${1536/height*100}%;${frames.map((x,i)=>`--frame-${i}:${x}%`).join(';')}">${idleLayers}</span>`;
}
export function fullIllustration(id:string,awakening=0):string {
  const d=spiritById(id);
  if(id==='gumiho'&&awakening<5)return `<img class="full-illustration original-fox" src="${assetPath('art/gumiho-transparent-v07.png')}" alt="구미호 전신 일러스트">`;
  return `<div class="full-illustration atlas-illustration ${awakening>=5?'awakened-art':''}" role="img" aria-label="${d.name}${awakening>=5?' 진명 각성':''} 전신 일러스트" style="${illustrationStyle(id,awakening)}"></div>`;
}
