import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const lines=JSON.parse(readFileSync(new URL('../public/audio/shop/lines.json',import.meta.url),'utf8').replace(/^\uFEFF/,''));
assert.equal(Object.keys(lines).length,5);
let seconds=0;
for(const id of ['welcome','summon','general','purchase','back']){
  assert.ok(lines[id].length>10);
  const wav=readFileSync(new URL(`../public/audio/shop/${id}.wav`,import.meta.url));
  assert.equal(wav.toString('ascii',0,4),'RIFF');assert.equal(wav.toString('ascii',8,12),'WAVE');
  let data,rate;
  for(let offset=12;offset+8<=wav.length;){
    const type=wav.toString('ascii',offset,offset+4),length=wav.readUInt32LE(offset+4);
    if(type==='fmt '){assert.equal(wav.readUInt16LE(offset+8),1);assert.equal(wav.readUInt16LE(offset+10),1);assert.equal(wav.readUInt16LE(offset+22),16);rate=wav.readUInt32LE(offset+12);}
    if(type==='data')data=wav.subarray(offset+8,offset+8+length);
    offset+=8+length+length%2;
  }
  assert.ok(data&&rate);
  let energy=0;for(let i=0;i<data.length;i+=2)energy+=data.readInt16LE(i)**2;
  assert.ok(Math.sqrt(energy/(data.length/2))>100,`Silent shop clip: ${id}`);
  const duration=data.length/2/rate;assert.ok(duration>1&&duration<30);seconds+=duration;
}
for(const file of ['shop-interior-v06','granny-poses-v06']){
  const png=readFileSync(new URL(`../public/art/${file}.png`,import.meta.url));
  assert.equal(png.toString('hex',0,8),'89504e470d0a1a0a');
  assert.ok(png.readUInt32BE(16)>=1024&&png.readUInt32BE(20)>=1024);
  if(file==='granny-poses-v06'){assert.equal(png.readUInt32BE(16),png.readUInt32BE(20));assert.equal(png[25],6,'The four-pose atlas needs RGBA transparency.');}
}
console.log(`Shop assets verified: 5 Korean clips, ${Math.round(seconds)} seconds, interior and four-pose transparent character.`);
