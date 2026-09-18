import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const story=JSON.parse(readFileSync(new URL('../src/data/storyScenes.json',import.meta.url),'utf8'));
const manifest=JSON.parse(readFileSync(new URL('../public/audio/story/manifest.json',import.meta.url),'utf8').replace(/^\uFEFF/,''));
let count=0,seconds=0;
for(const chapter of story)for(const part of ['intro','outro'])for(const shot of chapter[part]){
 const clip=manifest.clips[shot.id];assert.equal(clip.text,shot.caption);
 const wav=readFileSync(new URL('../public'+clip.file,import.meta.url));
 assert.equal(wav.toString('ascii',0,4),'RIFF');assert.equal(wav.toString('ascii',8,12),'WAVE');
 let offset=12,data,rate;
 while(offset+8<=wav.length){const type=wav.toString('ascii',offset,offset+4),length=wav.readUInt32LE(offset+4);
  if(type==='fmt '){assert.equal(wav.readUInt16LE(offset+8),1);assert.equal(wav.readUInt16LE(offset+10),1);assert.equal(wav.readUInt16LE(offset+22),16);rate=wav.readUInt32LE(offset+12);}
  if(type==='data')data=wav.subarray(offset+8,offset+8+length);
  offset+=8+length+(length%2);
 }
 assert.ok(data&&rate);let energy=0;for(let i=0;i<data.length;i+=2)energy+=wavValue(data,i)**2;
 assert.ok(Math.sqrt(energy/(data.length/2))>100,`Silent narration: ${shot.id}`);
 const duration=data.length/2/rate;assert.ok(duration>1&&duration<30,`Unexpected duration: ${shot.id}`);seconds+=duration;count++;
}
function wavValue(data,i){return data.readInt16LE(i);}
assert.equal(count,120);for(const art of ['library','story-worlds','story-relics'])assert.ok(existsSync(new URL(`../public/art/${art}-v05.png`,import.meta.url)));
console.log(`Story assets verified: ${count} Korean clips, ${Math.round(seconds)} seconds, 3 illustrated plates.`);
