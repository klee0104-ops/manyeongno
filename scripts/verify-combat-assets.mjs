import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const lines=JSON.parse(readFileSync(new URL('../public/audio/combat/lines.json',import.meta.url),'utf8'));
assert.equal(lines.length,213);assert.equal(new Set(lines.map(l=>l.file)).size,213);
let total=0,max=0;
for(const line of lines){
 const wav=readFileSync(new URL(`../public/audio/combat/${line.file}`,import.meta.url));
 assert.equal(wav.toString('ascii',0,4),'RIFF');assert.equal(wav.toString('ascii',8,12),'WAVE');
 let data,rate;
 for(let offset=12;offset+8<=wav.length;){const type=wav.toString('ascii',offset,offset+4),length=wav.readUInt32LE(offset+4);if(type==='fmt '){assert.equal(wav.readUInt16LE(offset+8),1);assert.equal(wav.readUInt16LE(offset+10),1);assert.equal(wav.readUInt16LE(offset+22),16);rate=wav.readUInt32LE(offset+12);}if(type==='data')data=wav.subarray(offset+8,offset+8+length);offset+=8+length+length%2;}
 assert.ok(data&&rate);let energy=0;for(let i=0;i<data.length;i+=2)energy+=data.readInt16LE(i)**2;
 assert.ok(Math.sqrt(energy/(data.length/2))>100,`Silent: ${line.file}`);
 const duration=data.length/2/rate;assert.ok(duration>.3&&duration<3.5,`Callout too long/short: ${line.file} ${duration}`);total+=duration;max=Math.max(max,duration);
}
console.log(`Combat assets verified: ${lines.length} voiced techniques, ${Math.round(total)} seconds, longest ${max.toFixed(2)} seconds.`);
