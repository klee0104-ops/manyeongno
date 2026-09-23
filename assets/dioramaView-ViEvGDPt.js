import{m as Su,a as xs,c as cc,b as uc,d as fc}from"./index-CEPxBpoZ.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="186",yu=0,Ko=1,bu=2,ar=1,Eu=2,ir=3,ni=0,Be=1,Re=2,Tn=0,or=1,Vn=2,$o=3,Qo=4,wu=5,Ii=100,Tu=101,Au=102,Ru=103,Cu=104,Pu=200,Lu=201,Iu=202,Du=203,hc=204,dc=205,Uu=206,Nu=207,Fu=208,Ou=209,Bu=210,zu=211,ku=212,Gu=213,Vu=214,da=0,pa=1,ma=2,ur=3,ga=4,_a=5,va=6,xa=7,ro=0,Hu=1,Wu=2,pn=0,pc=1,mc=2,gc=3,so=4,_c=5,vc=6,xc=7,Mc=300,ii=301,Oi=302,Rs=303,Cs=304,Ms=306,ls=1e3,wn=1001,Ma=1002,Ie=1003,Xu=1004,Er=1005,Ce=1006,Ps=1007,jn=1008,Ye=1009,Sc=1010,yc=1011,fr=1012,ao=1013,mn=1014,rn=1015,gn=1016,oo=1017,lo=1018,hr=1020,bc=35902,Ec=35899,wc=1021,Tc=1022,sn=1023,Pn=1026,ti=1027,co=1028,uo=1029,ri=1030,fo=1031,ho=1033,ns=33776,is=33777,rs=33778,ss=33779,Sa=35840,ya=35841,ba=35842,Ea=35843,wa=36196,Ta=37492,Aa=37496,Ra=37488,Ca=37489,cs=37490,Pa=37491,La=37808,Ia=37809,Da=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,ka=37817,Ga=37818,Va=37819,Ha=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,Za=36283,Ja=36284,us=36285,Ka=36286,qu=3200,fs=0,Yu=1,Gn="",Le="srgb",hs="srgb-linear",ds="linear",ce="srgb",Ls=7680,Zu=519,Ju=512,Ku=513,$u=514,po=515,Qu=516,ju=517,mo=518,tf=519,Ac=35044,jo="300 es",dn=2e3,dr=2001;function ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){const i=pr("canvas");return i.style.display="block",i}const tl={};function ps(...i){const t="THREE."+i.shift();console.log(t,...i)}function Rc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=Rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=Rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ni(...i){const t=i.join(" ");t in tl||(tl[t]=!0,Jt(...i))}function rf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const sf={[da]:pa,[ma]:va,[ga]:xa,[ur]:_a,[pa]:da,[va]:ma,[xa]:ga,[_a]:ur};class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Is=Math.PI/180,$a=180/Math.PI;function An(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function af(i,t){return(i%t+t)%t}function Ds(i,t,e){return(1-e)*i+e*t}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const No=class No{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};No.prototype.isVector2=!0;let Tt=No;class _n{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],h=n[r+3],u=s[a+0],d=s[a+1],_=s[a+2],A=s[a+3];if(h!==A||l!==u||c!==d||f!==_){let m=l*u+c*d+f*_+h*A;m<0&&(u=-u,d=-d,_=-_,A=-A,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),L=Math.sin(E);p=Math.sin(p*E)/L,o=Math.sin(o*E)/L,l=l*p+u*o,c=c*p+d*o,f=f*p+_*o,h=h*p+A*o}else{l=l*p+u*o,c=c*p+d*o,f=f*p+_*o,h=h*p+A*o;const E=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=E,c*=E,f*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],h=s[a],u=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+f*h+l*d-c*u,t[e+1]=l*_+f*u+c*h-o*d,t[e+2]=c*_+f*d+o*u-l*h,t[e+3]=f*_-o*h-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),h=o(s/2),u=l(n/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*f*h+c*d*_,this._y=c*d*h-u*f*_,this._z=c*f*_+u*d*h,this._w=c*f*h-u*d*_;break;case"YXZ":this._x=u*f*h+c*d*_,this._y=c*d*h-u*f*_,this._z=c*f*_-u*d*h,this._w=c*f*h+u*d*_;break;case"ZXY":this._x=u*f*h-c*d*_,this._y=c*d*h+u*f*_,this._z=c*f*_+u*d*h,this._w=c*f*h-u*d*_;break;case"ZYX":this._x=u*f*h-c*d*_,this._y=c*d*h+u*f*_,this._z=c*f*_-u*d*h,this._w=c*f*h+u*d*_;break;case"YZX":this._x=u*f*h+c*d*_,this._y=c*d*h+u*f*_,this._z=c*f*_-u*d*h,this._w=c*f*h-u*d*_;break;case"XZY":this._x=u*f*h-c*d*_,this._y=c*d*h-u*f*_,this._z=c*f*_+u*d*h,this._w=c*f*h+u*d*_;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+o+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fo=class Fo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(el.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),f=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*f,this.y=n+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fo.prototype.isVector3=!0;let J=Fo;const Us=new J,el=new _n,Oo=class Oo{constructor(t,e,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=o,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],_=n[8],A=r[0],m=r[3],p=r[6],E=r[1],L=r[4],M=r[7],w=r[2],I=r[5],k=r[8];return s[0]=a*A+o*E+l*w,s[3]=a*m+o*L+l*I,s[6]=a*p+o*M+l*k,s[1]=c*A+f*E+h*w,s[4]=c*m+f*L+h*I,s[7]=c*p+f*M+h*k,s[2]=u*A+d*E+_*w,s[5]=u*m+d*L+_*I,s[8]=u*p+d*M+_*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=f*a-o*c,u=o*l-f*s,d=c*s-a*l,_=e*h+n*u+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/_;return t[0]=h*A,t[1]=(r*c-f*n)*A,t[2]=(o*n-r*a)*A,t[3]=u*A,t[4]=(f*e-r*l)*A,t[5]=(r*s-o*e)*A,t[6]=d*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*s)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oo.prototype.isMatrix3=!0;let Kt=Oo;const Ns=new Kt,nl=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){const i={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ce&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hs]:{primaries:t,whitePoint:n,transfer:ds,toXYZ:nl,fromXYZ:il,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:nl,fromXYZ:il,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const ne=of();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class lf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=pr("canvas")),hi.width=t.width,hi.height=t.height;const r=hi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cf=0;class go{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fs(r[a].image)):s.push(Fs(r[a]))}else s=Fs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let uf=0;const Os=new J;class Pe extends oi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=wn,r=wn,s=Ce,a=jn,o=sn,l=Ye,c=Pe.DEFAULT_ANISOTROPY,f=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=An(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Os).x}get height(){return this.source.getSize(Os).y}get depth(){return this.source.getSize(Os).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Mc;Pe.DEFAULT_ANISOTROPY=1;const Bo=class Bo{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],_=l[9],A=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-A)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+A)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(c+1)/2,M=(d+1)/2,w=(p+1)/2,I=(f+u)/4,k=(h+A)/4,v=(_+m)/4;return L>M&&L>w?L<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(L),r=I/n,s=k/n):M>w?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=I/r,s=v/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=k/s,r=v/s),this.set(n,r,s,e),this}let E=Math.sqrt((m-_)*(m-_)+(h-A)*(h-A)+(u-f)*(u-f));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-A)/E,this.z=(u-f)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bo.prototype.isVector4=!0;let _e=Bo;class ff extends oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Pe(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new go(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends ff{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cc extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends Pe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const vs=class vs{constructor(t,e,n,r,s,a,o,l,c,f,h,u,d,_,A,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,f,h,u,d,_,A,m)}set(t,e,n,r,s,a,o,l,c,f,h,u,d,_,A,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=_,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vs().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/di.setFromMatrixColumn(t,0).length(),s=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=a*f,d=a*h,_=o*f,A=o*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=u-A*c,e[9]=-o*l,e[2]=A-u*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*f,d=l*h,_=c*f,A=c*h;e[0]=u+A*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=d*o-_,e[6]=A+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*f,d=l*h,_=c*f,A=c*h;e[0]=u-A*o,e[4]=-a*h,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*f,e[9]=A-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*f,d=a*h,_=o*f,A=o*h;e[0]=l*f,e[4]=_*c-d,e[8]=u*c+A,e[1]=l*h,e[5]=A*c+u,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,_=o*l,A=o*c;e[0]=l*f,e[4]=A-u*h,e[8]=_*h+d,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=d*h+_,e[10]=u-A*h}else if(t.order==="XZY"){const u=a*l,d=a*c,_=o*l,A=o*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+A,e[5]=a*f,e[9]=d*h-_,e[2]=_*h-d,e[6]=o*f,e[10]=A*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,pf)}lookAt(t,e,n){const r=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Un.crossVectors(n,We),Un.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Un.crossVectors(n,We)),Un.normalize(),wr.crossVectors(We,Un),r[0]=Un.x,r[4]=wr.x,r[8]=We.x,r[1]=Un.y,r[5]=wr.y,r[9]=We.y,r[2]=Un.z,r[6]=wr.z,r[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],_=n[2],A=n[6],m=n[10],p=n[14],E=n[3],L=n[7],M=n[11],w=n[15],I=r[0],k=r[4],v=r[8],N=r[12],P=r[1],Z=r[5],C=r[9],F=r[13],T=r[2],K=r[6],rt=r[10],nt=r[14],mt=r[3],lt=r[7],_t=r[11],Y=r[15];return s[0]=a*I+o*P+l*T+c*mt,s[4]=a*k+o*Z+l*K+c*lt,s[8]=a*v+o*C+l*rt+c*_t,s[12]=a*N+o*F+l*nt+c*Y,s[1]=f*I+h*P+u*T+d*mt,s[5]=f*k+h*Z+u*K+d*lt,s[9]=f*v+h*C+u*rt+d*_t,s[13]=f*N+h*F+u*nt+d*Y,s[2]=_*I+A*P+m*T+p*mt,s[6]=_*k+A*Z+m*K+p*lt,s[10]=_*v+A*C+m*rt+p*_t,s[14]=_*N+A*F+m*nt+p*Y,s[3]=E*I+L*P+M*T+w*mt,s[7]=E*k+L*Z+M*K+w*lt,s[11]=E*v+L*C+M*rt+w*_t,s[15]=E*N+L*F+M*nt+w*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],d=t[14],_=t[3],A=t[7],m=t[11],p=t[15],E=l*d-c*u,L=o*d-c*h,M=o*u-l*h,w=a*d-c*f,I=a*u-l*f,k=a*h-o*f;return e*(A*E-m*L+p*M)-n*(_*E-m*w+p*I)+r*(_*L-A*w+p*k)-s*(_*M-A*I+m*k)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-n*(s*f-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],d=t[11],_=t[12],A=t[13],m=t[14],p=t[15],E=e*o-n*a,L=e*l-r*a,M=e*c-s*a,w=n*l-r*o,I=n*c-s*o,k=r*c-s*l,v=f*A-h*_,N=f*m-u*_,P=f*p-d*_,Z=h*m-u*A,C=h*p-d*A,F=u*p-d*m,T=E*F-L*C+M*Z+w*P-I*N+k*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/T;return t[0]=(o*F-l*C+c*Z)*K,t[1]=(r*C-n*F-s*Z)*K,t[2]=(A*k-m*I+p*w)*K,t[3]=(u*I-h*k-d*w)*K,t[4]=(l*P-a*F-c*N)*K,t[5]=(e*F-r*P+s*N)*K,t[6]=(m*M-_*k-p*L)*K,t[7]=(f*k-u*M+d*L)*K,t[8]=(a*C-o*P+c*v)*K,t[9]=(n*P-e*C-s*v)*K,t[10]=(_*I-A*M+p*E)*K,t[11]=(h*M-f*I-d*E)*K,t[12]=(o*N-a*Z-l*v)*K,t[13]=(e*Z-n*N+r*v)*K,t[14]=(A*L-_*w-m*E)*K,t[15]=(f*w-h*L+u*E)*K,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,f=a+a,h=o+o,u=s*c,d=s*f,_=s*h,A=a*f,m=a*h,p=o*h,E=l*c,L=l*f,M=l*h,w=n.x,I=n.y,k=n.z;return r[0]=(1-(A+p))*w,r[1]=(d+M)*w,r[2]=(_-L)*w,r[3]=0,r[4]=(d-M)*I,r[5]=(1-(u+p))*I,r[6]=(m+E)*I,r[7]=0,r[8]=(_+L)*k,r[9]=(m-E)*k,r[10]=(1-(u+A))*k,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=di.set(r[0],r[1],r[2]).length();const o=di.set(r[4],r[5],r[6]).length(),l=di.set(r[8],r[9],r[10]).length();s<0&&(a=-a),tn.copy(this);const c=1/a,f=1/o,h=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=f,tn.elements[5]*=f,tn.elements[6]*=f,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,e.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=dn,l=!1){const c=this.elements,f=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let _,A;if(l)_=s/(a-s),A=a*s/(a-s);else if(o===dn)_=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===dr)_=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=dn,l=!1){const c=this.elements,f=2/(e-t),h=2/(n-r),u=-(e+t)/(e-t),d=-(n+r)/(n-r);let _,A;if(l)_=1/(a-s),A=a/(a-s);else if(o===dn)_=-2/(a-s),A=-(a+s)/(a-s);else if(o===dr)_=-1/(a-s),A=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};vs.prototype.isMatrix4=!0;let ae=vs;const di=new J,tn=new ae,df=new J(0,0,0),pf=new J(1,1,1),Un=new J,wr=new J,We=new J,rl=new ae,sl=new _n;class Ze{constructor(t=0,e=0,n=0,r=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mf=0;const al=new J,pi=new _n,Mn=new ae,Tr=new J,Xi=new J,gf=new J,_f=new _n,ol=new J(1,0,0),ll=new J(0,1,0),cl=new J(0,0,1),ul={type:"added"},vf={type:"removed"},mi={type:"childadded",child:null},Bs={type:"childremoved",child:null};class Ee extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new J,e=new Ze,n=new _n,r=new J(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new Kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Xi,Tr,this.up):Mn.lookAt(Tr,Xi,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ul),mi.child=t,this.dispatchEvent(mi),mi.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ul),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),h=a(t.shapes),u=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.DEFAULT_UP=new J(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ei extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xf={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const A of t.hand.values()){const m=e.getJointPose(A,n),p=this._getHandJoint(c,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function ks(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ne.workingColorSpace){if(t=af(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ks(a,s,t+1/3),this.g=ks(a,s,t),this.b=ks(a,s,t-1/3)}return ne.colorSpaceToWorking(this,r),this}setStyle(t,e=Le){function n(s){s!==void 0&&parseFloat(s)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ne.workingToColorSpace(Fe.copy(this),t),Math.round(ee(Fe.r*255,0,255))*65536+Math.round(ee(Fe.g*255,0,255))*256+Math.round(ee(Fe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,r=Fe.g,s=Fe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Le){ne.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,r=Fe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Ar);const n=Ds(Nn.h,Ar.h,e),r=Ds(Nn.s,Ar.s,e),s=Ds(Nn.l,Ar.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new qt;qt.NAMES=Lc;class Ss{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Ss(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _o{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new _o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vo extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const en=new J,Sn=new J,Gs=new J,yn=new J,gi=new J,_i=new J,fl=new J,Vs=new J,Hs=new J,Ws=new J,Xs=new _e,qs=new _e,Ys=new _e;class $e{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),en.subVectors(t,e),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){en.subVectors(r,e),Sn.subVectors(n,e),Gs.subVectors(t,e);const a=en.dot(en),o=en.dot(Sn),l=en.dot(Gs),c=Sn.dot(Sn),f=Sn.dot(Gs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,d=(c*l-o*f)*u,_=(a*f-o*l)*u;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Xs.setScalar(0),qs.setScalar(0),Ys.setScalar(0),Xs.fromBufferAttribute(t,e),qs.fromBufferAttribute(t,n),Ys.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Xs,s.x),a.addScaledVector(qs,s.y),a.addScaledVector(Ys,s.z),a}static isFrontFacing(t,e,n,r){return en.subVectors(n,e),Sn.subVectors(t,e),en.cross(Sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,n),_i.subVectors(s,n),Vs.subVectors(t,n);const l=gi.dot(Vs),c=_i.dot(Vs);if(l<=0&&c<=0)return e.copy(n);Hs.subVectors(t,r);const f=gi.dot(Hs),h=_i.dot(Hs);if(f>=0&&h<=f)return e.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(gi,a);Ws.subVectors(t,s);const d=gi.dot(Ws),_=_i.dot(Ws);if(_>=0&&d<=_)return e.copy(s);const A=d*c-l*_;if(A<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(_i,o);const m=f*_-d*h;if(m<=0&&h-f>=0&&d-_>=0)return fl.subVectors(s,r),o=(h-f)/(h-f+(d-_)),e.copy(r).addScaledVector(fl,o);const p=1/(m+A+u);return a=A*p,o=u*p,e.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class li{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),Cr.subVectors(this.max,qi),vi.subVectors(t.a,qi),xi.subVectors(t.b,qi),Mi.subVectors(t.c,qi),Fn.subVectors(xi,vi),On.subVectors(Mi,xi),Yn.subVectors(vi,Mi);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Yn.z,Yn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Yn.z,0,-Yn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Yn.y,Yn.x,0];return!Zs(e,vi,xi,Mi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,vi,xi,Mi,Cr))?!1:(Pr.crossVectors(Fn,On),e=[Pr.x,Pr.y,Pr.z],Zs(e,vi,xi,Mi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bn=[new J,new J,new J,new J,new J,new J,new J,new J],nn=new J,Rr=new li,vi=new J,xi=new J,Mi=new J,Fn=new J,On=new J,Yn=new J,qi=new J,Cr=new J,Pr=new J,Zn=new J;function Zs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zn.fromArray(i,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),f=n.dot(Zn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Se=new J,Lr=new Tt;let Mf=0;class Qe extends oi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),r=fe(r,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ic extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dc extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Sf=new li,Yi=new J,Js=new J;class Vi{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Yi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(Js)),this.expandByPoint(Yi.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let yf=0;const Ke=new ae,Ks=new Ee,Si=new J,Xe=new li,Zi=new li,Ae=new J;class he extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?Dc:Ic)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Xe.min,Zi.min),Xe.expandByPoint(Ae),Ae.addVectors(Xe.max,Zi.max),Xe.expandByPoint(Ae)):(Xe.expandByPoint(Zi.min),Xe.expandByPoint(Zi.max))}Xe.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ae.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(t,c),Ae.add(Si)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new J,l[v]=new J;const c=new J,f=new J,h=new J,u=new Tt,d=new Tt,_=new Tt,A=new J,m=new J;function p(v,N,P){c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,N),h.fromBufferAttribute(n,P),u.fromBufferAttribute(s,v),d.fromBufferAttribute(s,N),_.fromBufferAttribute(s,P),f.sub(c),h.sub(c),d.sub(u),_.sub(u);const Z=1/(d.x*_.y-_.x*d.y);isFinite(Z)&&(A.copy(f).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(Z),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(Z),o[v].add(A),o[N].add(A),o[P].add(A),l[v].add(m),l[N].add(m),l[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,N=E.length;v<N;++v){const P=E[v],Z=P.start,C=P.count;for(let F=Z,T=Z+C;F<T;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const L=new J,M=new J,w=new J,I=new J;function k(v){w.fromBufferAttribute(r,v),I.copy(w);const N=o[v];L.copy(N),L.sub(w.multiplyScalar(w.dot(N))).normalize(),M.crossVectors(I,N);const Z=M.dot(l[v])<0?-1:1;a.setXYZW(v,L.x,L.y,L.z,Z)}for(let v=0,N=E.length;v<N;++v){const P=E[v],Z=P.start,C=P.count;for(let F=Z,T=Z+C;F<T;F+=3)k(t.getX(F+0)),k(t.getX(F+1)),k(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const r=new J,s=new J,a=new J,o=new J,l=new J,c=new J,f=new J,h=new J;if(t)for(let u=0,d=t.count;u<d;u+=3){const _=t.getX(u+0),A=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,A),a.fromBufferAttribute(e,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let d=0,_=0;for(let A=0,m=l.length;A<m;A++){o.isInterleavedBufferAttribute?d=l[A]*o.data.stride+o.offset:d=l[A]*f;for(let p=0;p<f;p++)u[_++]=c[d++]}return new Qe(u,f,h)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const d=c[h];f.push(d.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const s=t.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const ke=new J;class ms{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),r=fe(r,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ms(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $s=new J,Ef=new J,wf=new Kt;class zn{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=$s.subVectors(n,e).cross(Ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta($s),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wf.getNormalMatrix(t),r=this.coplanarPoint($s).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Tf=0;class Wn extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=An(),this.name="",this.type="Material",this.blending=or,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xo extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yi;const Ji=new J,bi=new J,Ei=new J,wi=new Tt,Ki=new Tt,Uc=new ae,Ir=new J,$i=new J,Dr=new J,hl=new Tt,Qs=new Tt,dl=new Tt;class Nc extends Ee{constructor(t=new xo){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new he;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bf(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new ms(n,3,0,!1)),yi.setAttribute("uv",new ms(n,2,3,!1))}this.geometry=yi,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Uc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ei.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Ur(Ir.set(-.5,-.5,0),Ei,a,bi,r,s),Ur($i.set(.5,-.5,0),Ei,a,bi,r,s),Ur(Dr.set(.5,.5,0),Ei,a,bi,r,s),hl.set(0,0),Qs.set(1,0),dl.set(1,1);let o=t.ray.intersectTriangle(Ir,$i,Dr,!1,Ji);if(o===null&&(Ur($i.set(-.5,.5,0),Ei,a,bi,r,s),Qs.set(0,1),o=t.ray.intersectTriangle(Ir,Dr,$i,!1,Ji),o===null))return;const l=t.ray.origin.distanceTo(Ji);l<t.near||l>t.far||e.push({distance:l,point:Ji.clone(),uv:$e.getInterpolation(Ji,Ir,$i,Dr,hl,Qs,dl,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ur(i,t,e,n,r,s){wi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Ki.x=s*wi.x-r*wi.y,Ki.y=r*wi.x+s*wi.y):Ki.copy(wi),i.copy(t),i.x+=Ki.x,i.y+=Ki.y,i.applyMatrix4(Uc)}const En=new J,js=new J,Nr=new J,Fr=new J;class Fc{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){js.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),Fr.copy(this.origin).sub(js);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=Fr.dot(this.direction),l=-Fr.dot(Nr),c=Fr.lengthSq(),f=Math.abs(1-a*a);let h,u,d,_;if(f>0)if(h=a*l-o,u=a*o-l,_=s*f,h>=0)if(u>=-_)if(u<=_){const A=1/f;h*=A,u*=A,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(js).addScaledVector(Nr,u),d}intersectSphere(t,e){if(t.radius<0)return null;En.subVectors(t.center,this.origin);const n=En.dot(this.direction),r=En.dot(En)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),f>=0?(s=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(s=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=t.x-a.x,u=t.y-a.y,d=t.z-a.z,_=e.x-a.x,A=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,L=n.z-a.z,M=Math.abs(l),w=Math.abs(c),I=Math.abs(f);let k,v,N,P,Z,C,F,T,K,rt,nt,mt;if(M>=w&&M>=I?(N=l,C=h,K=_,mt=p,l>=0?(k=c,v=f,P=u,Z=d,F=A,T=m,rt=E,nt=L):(k=f,v=c,P=d,Z=u,F=m,T=A,rt=L,nt=E)):w>=I?(N=c,C=u,K=A,mt=E,c>=0?(k=f,v=l,P=d,Z=h,F=m,T=_,rt=L,nt=p):(k=l,v=f,P=h,Z=d,F=_,T=m,rt=p,nt=L)):(N=f,C=d,K=m,mt=L,f>=0?(k=l,v=c,P=h,Z=u,F=_,T=A,rt=p,nt=E):(k=c,v=l,P=u,Z=h,F=A,T=_,rt=E,nt=p)),N===0)return null;const lt=k/N,_t=v/N,Y=1/N,$=P-lt*C,Q=Z-_t*C,O=F-lt*K,g=T-_t*K,S=rt-lt*mt,y=nt-_t*mt,U=S*g-y*O,V=$*y-Q*S,ut=O*Q-g*$;if(r){if(U<0||V<0||ut<0)return null}else if((U<0||V<0||ut<0)&&(U>0||V>0||ut>0))return null;const Mt=U+V+ut;if(Mt===0)return null;const Ct=Y*(U*C+V*K+ut*mt);return(Mt>0?Ct<0:Ct>0)?null:this.at(Ct/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pl=new ae,Jn=new Fc,Or=new Vi,ml=new J,Br=new J,zr=new J,kr=new J,ta=new J,Gr=new J,gl=new J,Vr=new J;class se extends Ee{constructor(t=new he,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(ta.fromBufferAttribute(h,t),a?Gr.addScaledVector(ta,f):Gr.addScaledVector(ta.sub(e),f))}e.add(Gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Jn.copy(t.ray).recast(t.near),!(Or.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Or,ml)===null||Jn.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(s).invert(),Jn.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,A=u.length;_<A;_++){const m=u[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),L=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,w=L;M<w;M+=3){const I=o.getX(M),k=o.getX(M+1),v=o.getX(M+2);r=Hr(this,p,t,n,c,f,h,I,k,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),A=Math.min(o.count,d.start+d.count);for(let m=_,p=A;m<p;m+=3){const E=o.getX(m),L=o.getX(m+1),M=o.getX(m+2);r=Hr(this,a,t,n,c,f,h,E,L,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,A=u.length;_<A;_++){const m=u[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),L=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,w=L;M<w;M+=3){const I=M,k=M+1,v=M+2;r=Hr(this,p,t,n,c,f,h,I,k,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),A=Math.min(l.count,d.start+d.count);for(let m=_,p=A;m<p;m+=3){const E=m,L=m+1,M=m+2;r=Hr(this,a,t,n,c,f,h,E,L,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Af(i,t,e,n,r,s,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ni,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:i}}function Hr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,zr),i.getVertexPosition(c,kr);const f=Af(i,t,e,n,Br,zr,kr,gl);if(f){const h=new J;$e.getBarycoord(gl,Br,zr,kr,h),r&&(f.uv=$e.getInterpolatedAttribute(r,o,l,c,h,new Tt)),s&&(f.uv1=$e.getInterpolatedAttribute(s,o,l,c,h,new Tt)),a&&(f.normal=$e.getInterpolatedAttribute(a,o,l,c,h,new J),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new J,materialIndex:0};$e.getNormal(Br,zr,kr,u.normal),f.face=u,f.barycoord=h}return f}class Oc extends Pe{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Ie,f=Ie,h,u){super(null,a,o,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends Qe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ti=new ae,vl=new ae,Wr=[],xl=new li,Rf=new ae,Qi=new se,ji=new Vi;class Bi extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Rf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),xl.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),ji.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ti),vl.multiplyMatrices(n,Ti),Qi.matrixWorld=vl,Qi.raycast(t,Wr);for(let a=0,o=Wr.length;a<o;a++){const l=Wr[a];l.instanceId=s,l.object=this,e.push(l)}Wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(r*this.count),r,this.count,co,rn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kn=new Vi,Cf=new Tt(.5,.5),Xr=new J;class Mo{constructor(t=new zn,e=new zn,n=new zn,r=new zn,s=new zn,a=new zn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],d=s[7],_=s[8],A=s[9],m=s[10],p=s[11],E=s[12],L=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-a,d-f,p-_,w-E).normalize(),r[1].setComponents(c+a,d+f,p+_,w+E).normalize(),r[2].setComponents(c+o,d+h,p+A,w+L).normalize(),r[3].setComponents(c-o,d-h,p-A,w-L).normalize(),n)r[4].setComponents(l,u,m,M).normalize(),r[5].setComponents(c-l,d-u,p-m,w-M).normalize();else if(r[4].setComponents(c-l,d-u,p-m,w-M).normalize(),e===dn)r[5].setComponents(c+l,d+u,p+m,w+M).normalize();else if(e===dr)r[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){Kn.center.set(0,0,0);const e=Cf.distanceTo(t.center);return Kn.radius=.7071067811865476+e,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Xr.x=r.normal.x>0?t.max.x:t.min.x,Xr.y=r.normal.y>0?t.max.y:t.min.y,Xr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class si extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ml=new ae,Qa=new Fc,qr=new Vi,Yr=new J;class zi extends Ee{constructor(t=new he,e=new si){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),qr.radius+=s,t.ray.intersectsSphere(qr)===!1)return;Ml.copy(r).invert(),Qa.copy(t.ray).applyMatrix4(Ml);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=u,A=d;_<A;_++){const m=c.getX(_);Yr.fromBufferAttribute(h,m),Sl(Yr,m,l,r,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=u,A=d;_<A;_++)Yr.fromBufferAttribute(h,_),Sl(Yr,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sl(i,t,e,n,r,s,a){const o=Qa.distanceSqToPoint(i);if(o<e){const l=new J;Qa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bc extends Pe{constructor(t=[],e=ii,n,r,s,a,o,l,c,f){super(t,e,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zc extends Pe{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mr extends Pe{constructor(t,e,n=mn,r,s,a,o=Ie,l=Ie,c,f=Pn,h=1){if(f!==Pn&&f!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:h};super(u,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Pf extends mr{constructor(t,e=mn,n=ii,r,s,a=Ie,o=Ie,l,c=Pn){const f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class kc extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xn extends he{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(h,2));function _(A,m,p,E,L,M,w,I,k,v,N){const P=M/k,Z=w/v,C=M/2,F=w/2,T=I/2,K=k+1,rt=v+1;let nt=0,mt=0;const lt=new J;for(let _t=0;_t<rt;_t++){const Y=_t*Z-F;for(let $=0;$<K;$++){const Q=$*P-C;lt[A]=Q*E,lt[m]=Y*L,lt[p]=T,c.push(lt.x,lt.y,lt.z),lt[A]=0,lt[m]=0,lt[p]=I>0?1:-1,f.push(lt.x,lt.y,lt.z),h.push($/k),h.push(1-_t/v),nt+=1}}for(let _t=0;_t<v;_t++)for(let Y=0;Y<k;Y++){const $=u+Y+K*_t,Q=u+Y+K*(_t+1),O=u+(Y+1)+K*(_t+1),g=u+(Y+1)+K*_t;l.push($,Q,g),l.push(Q,O,g),mt+=6}o.addGroup(d,mt,N),d+=mt,u+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ci extends he{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new J,f=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/t+1)/2,f.y=(a[u+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hi extends he{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],u=[],d=[];let _=0;const A=[],m=n/2;let p=0;E(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(f),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function E(){const M=new J,w=new J;let I=0;const k=(e-t)/n;for(let v=0;v<=s;v++){const N=[],P=v/s,Z=P*(e-t)+t;for(let C=0;C<=r;C++){const F=C/r,T=F*l+o,K=Math.sin(T),rt=Math.cos(T);w.x=Z*K,w.y=-P*n+m,w.z=Z*rt,h.push(w.x,w.y,w.z),M.set(K,k,rt).normalize(),u.push(M.x,M.y,M.z),d.push(F,1-P),N.push(_++)}A.push(N)}for(let v=0;v<r;v++)for(let N=0;N<s;N++){const P=A[N][v],Z=A[N+1][v],C=A[N+1][v+1],F=A[N][v+1];(t>0||N!==0)&&(f.push(P,Z,F),I+=3),(e>0||N!==s-1)&&(f.push(Z,C,F),I+=3)}c.addGroup(p,I,0),p+=I}function L(M){const w=_,I=new Tt,k=new J;let v=0;const N=M===!0?t:e,P=M===!0?1:-1;for(let C=1;C<=r;C++)h.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),_++;const Z=_;for(let C=0;C<=r;C++){const T=C/r*l+o,K=Math.cos(T),rt=Math.sin(T);k.x=N*rt,k.y=m*P,k.z=N*K,h.push(k.x,k.y,k.z),u.push(0,P,0),I.x=K*.5+.5,I.y=rt*.5*P+.5,d.push(I.x,I.y),_++}for(let C=0;C<r;C++){const F=w+C,T=Z+C;M===!0?f.push(T,T+1,F):f.push(T+1,T,F),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ys extends Hi{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ys(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mr extends he{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),f(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const L=new J,M=new J,w=new J;for(let I=0;I<e.length;I+=3)d(e[I+0],L),d(e[I+1],M),d(e[I+2],w),l(L,M,w,E)}function l(E,L,M,w){const I=w+1,k=[];for(let v=0;v<=I;v++){k[v]=[];const N=E.clone().lerp(M,v/I),P=L.clone().lerp(M,v/I),Z=I-v;for(let C=0;C<=Z;C++)C===0&&v===I?k[v][C]=N:k[v][C]=N.clone().lerp(P,C/Z)}for(let v=0;v<I;v++)for(let N=0;N<2*(I-v)-1;N++){const P=Math.floor(N/2);N%2===0?(u(k[v][P+1]),u(k[v+1][P]),u(k[v][P])):(u(k[v][P+1]),u(k[v+1][P+1]),u(k[v+1][P]))}}function c(E){const L=new J;for(let M=0;M<s.length;M+=3)L.x=s[M+0],L.y=s[M+1],L.z=s[M+2],L.normalize().multiplyScalar(E),s[M+0]=L.x,s[M+1]=L.y,s[M+2]=L.z}function f(){const E=new J;for(let L=0;L<s.length;L+=3){E.x=s[L+0],E.y=s[L+1],E.z=s[L+2];const M=m(E)/2/Math.PI+.5,w=p(E)/Math.PI+.5;a.push(M,1-w)}_(),h()}function h(){for(let E=0;E<a.length;E+=6){const L=a[E+0],M=a[E+2],w=a[E+4],I=Math.max(L,M,w),k=Math.min(L,M,w);I>.9&&k<.1&&(L<.2&&(a[E+0]+=1),M<.2&&(a[E+2]+=1),w<.2&&(a[E+4]+=1))}}function u(E){s.push(E.x,E.y,E.z)}function d(E,L){const M=E*3;L.x=t[M+0],L.y=t[M+1],L.z=t[M+2]}function _(){const E=new J,L=new J,M=new J,w=new J,I=new Tt,k=new Tt,v=new Tt;for(let N=0,P=0;N<s.length;N+=9,P+=6){E.set(s[N+0],s[N+1],s[N+2]),L.set(s[N+3],s[N+4],s[N+5]),M.set(s[N+6],s[N+7],s[N+8]),I.set(a[P+0],a[P+1]),k.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),w.copy(E).add(L).add(M).divideScalar(3);const Z=m(w);A(I,P+0,E,Z),A(k,P+2,L,Z),A(v,P+4,M,Z)}}function A(E,L,M,w){w<0&&E.x===1&&(a[L]=E.x-1),M.x===0&&M.z===0&&(a[L]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.vertices,t.indices,t.radius,t.detail)}}class Sr extends Mr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sr(t.radius,t.detail)}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const f=n[r],u=n[r+1]-f,d=(a-f)/u;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new Tt:new J);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new J,r=[],s=[],a=[],o=new J,l=new ae;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new J)}s[0]=new J,a[0]=new J;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),u=Math.abs(r[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ee(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ee(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class So extends xn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lf extends So{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yo(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,h){let u=(a-s)/c-(o-s)/(c+f)+(o-a)/f,d=(o-a)/f-(l-a)/(f+h)+(l-o)/h;u*=f,d*=f,r(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const yl=new J,bl=new J,ea=new yo,na=new yo,ia=new yo;class Gc extends xn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new J){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(bl.subVectors(r[0],r[1]).add(r[0]),c=bl);const h=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(yl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=yl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),A=Math.pow(h.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d);A<1e-4&&(A=1),_<1e-4&&(_=A),m<1e-4&&(m=A),ea.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,_,A,m),na.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,_,A,m),ia.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,_,A,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),na.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),ia.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return n.set(ea.calc(l),na.calc(l),ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new J().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function El(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function If(i,t){const e=1-i;return e*e*t}function Df(i,t){return 2*(1-i)*i*t}function Uf(i,t){return i*i*t}function lr(i,t,e,n){return If(i,t)+Df(i,e)+Uf(i,n)}function Nf(i,t){const e=1-i;return e*e*e*t}function Ff(i,t){const e=1-i;return 3*e*e*i*t}function Of(i,t){return 3*(1-i)*i*i*t}function Bf(i,t){return i*i*i*t}function cr(i,t,e,n,r){return Nf(i,t)+Ff(i,e)+Of(i,n)+Bf(i,r)}class Vc extends xn{constructor(t=new Tt,e=new Tt,n=new Tt,r=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Tt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,r.x,s.x,a.x,o.x),cr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zf extends xn{constructor(t=new J,e=new J,n=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new J){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,r.x,s.x,a.x,o.x),cr(t,r.y,s.y,a.y,o.y),cr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hc extends xn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends xn{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends xn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(lr(t,r.x,s.x,a.x),lr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xc extends xn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(lr(t,r.x,s.x,a.x),lr(t,r.y,s.y,a.y),lr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qc extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(El(o,l.x,c.x,f.x,h.x),El(o,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Tt().fromArray(r))}return this}}var gs=Object.freeze({__proto__:null,ArcCurve:Lf,CatmullRomCurve3:Gc,CubicBezierCurve:Vc,CubicBezierCurve3:zf,EllipseCurve:So,LineCurve:Hc,LineCurve3:kf,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:Xc,SplineCurve:qc});class Gf extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new gs[r.type]().fromJSON(r))}return this}}class wl extends Gf{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hc(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Wc(this.currentPoint.clone(),new Tt(t,e),new Tt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Vc(this.currentPoint.clone(),new Tt(t,e),new Tt(n,r),new Tt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new qc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new So(t,e,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yc extends wl{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new wl().fromJSON(r))}return this}}function Vf(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Zc(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Yf(i,t,s,e)),i.length>80*e){o=i[0],l=i[1];let f=o,h=l;for(let u=e;u<r;u+=e){const d=i[u],_=i[u+1];d<o&&(o=d),_<l&&(l=_),d>f&&(f=d),_>h&&(h=_)}c=Math.max(f-o,h-l),c=c!==0?32767/c:0}return gr(s,a,e,o,l,c,0),a}function Zc(i,t,e,n,r){let s;if(r===rh(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=Tl(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Tl(a/n|0,i[a],i[a+1],s);return s&&ki(s,s.next)&&(vr(s),s=s.next),s}function ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ki(e,e.next)||ve(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Qf(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Wf(i,n,r,s):Hf(i)){t.push(l.i,i.i,c.i),vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xf(ai(i),t),gr(i,t,e,n,r,s,2)):a===2&&qf(i,t,e,n,r,s):gr(ai(i),t,e,n,r,s,1);break}}}function Hf(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,f=Math.min(r,s,a),h=Math.min(o,l,c),u=Math.max(r,s,a),d=Math.max(o,l,c);let _=n.next;for(;_!==t;){if(_.x>=f&&_.x<=u&&_.y>=h&&_.y<=d&&rr(r,o,s,l,a,c,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Wf(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ve(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,f=r.y,h=s.y,u=a.y,d=Math.min(o,l,c),_=Math.min(f,h,u),A=Math.max(o,l,c),m=Math.max(f,h,u),p=ja(d,_,t,e,n),E=ja(A,m,t,e,n);let L=i.prevZ,M=i.nextZ;for(;L&&L.z>=p&&M&&M.z<=E;){if(L.x>=d&&L.x<=A&&L.y>=_&&L.y<=m&&L!==r&&L!==a&&rr(o,f,l,h,c,u,L.x,L.y)&&ve(L.prev,L,L.next)>=0||(L=L.prevZ,M.x>=d&&M.x<=A&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&rr(o,f,l,h,c,u,M.x,M.y)&&ve(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;L&&L.z>=p;){if(L.x>=d&&L.x<=A&&L.y>=_&&L.y<=m&&L!==r&&L!==a&&rr(o,f,l,h,c,u,L.x,L.y)&&ve(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=A&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&rr(o,f,l,h,c,u,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Xf(i,t){let e=i;do{const n=e.prev,r=e.next.next;!ki(n,r)&&Kc(n,e,e.next,r)&&_r(n,r)&&_r(r,n)&&(t.push(n.i,e.i,r.i),vr(e),vr(e.next),e=i=r),e=e.next}while(e!==i);return ai(e)}function qf(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eh(a,o)){let l=$c(a,o);a=ai(a,a.next),l=ai(l,l.next),gr(a,t,e,n,r,s,0),gr(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Yf(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=Zc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(th(c))}r.sort(Zf);for(let s=0;s<r.length;s++)e=Jf(r[s],e);return e}function Zf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Jf(i,t){const e=Kf(i,t);if(!e)return t;const n=$c(e,i);return ai(n,n.next),ai(e,e.next)}function Kf(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(ki(i,e))return e;do{if(ki(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let f=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jc(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const h=Math.abs(r-e.y)/(n-e.x);_r(e,i)&&(h<f||h===f&&(e.x>a.x||e.x===a.x&&$f(a,e)))&&(a=e,f=h)}e=e.next}while(e!==o);return a}function $f(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Qf(i,t,e,n){let r=i;do r.z===0&&(r.z=ja(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,jf(r)}function jf(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function ja(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function th(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jc(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function rr(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&Jc(i,t,e,n,r,s,a,o)}function eh(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nh(i,t)&&(_r(i,t)&&_r(t,i)&&ih(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||ki(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ki(i,t){return i.x===t.x&&i.y===t.y}function Kc(i,t,e,n){const r=Jr(ve(i,t,e)),s=Jr(ve(i,t,n)),a=Jr(ve(e,n,i)),o=Jr(ve(e,n,t));return!!(r!==s&&a!==o||r===0&&Zr(i,e,t)||s===0&&Zr(i,n,t)||a===0&&Zr(e,i,n)||o===0&&Zr(e,t,n))}function Zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jr(i){return i>0?1:i<0?-1:0}function nh(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Kc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function ih(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $c(i,t){const e=to(i.i,i.x,i.y),n=to(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Tl(i,t,e,n){const r=to(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function to(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rh(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class sh{static triangulate(t,e,n=2){return Vf(t,e,n)}}class Di{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Di.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Al(t),Rl(n,t);let a=t.length;e.forEach(Al);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Rl(n,e[l]);const o=sh.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Al(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class bo extends he{constructor(t=new Yc([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:ah;let L,M=!1,w,I,k,v;if(p){L=p.getSpacedPoints(f),M=!0,u=!1;const D=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(f,D),I=new J,k=new J,v=new J}u||(m=0,d=0,_=0,A=0);const N=o.extractPoints(c);let P=N.shape;const Z=N.holes;if(!Di.isClockWise(P)){P=P.reverse();for(let D=0,W=Z.length;D<W;D++){const X=Z[D];Di.isClockWise(X)&&(Z[D]=X.reverse())}}function F(D){const X=10000000000000001e-36;let R=D[0];for(let it=1;it<=D.length;it++){const ft=it%D.length,pt=D[ft],St=pt.x-R.x,yt=pt.y-R.y,H=St*St+yt*yt,Zt=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(R.x),Math.abs(R.y)),Yt=X*Zt*Zt;if(H<=Yt){D.splice(ft,1),it--;continue}R=pt}}F(P),Z.forEach(F);const T=Z.length,K=P;for(let D=0;D<T;D++){const W=Z[D];P=P.concat(W)}function rt(D,W,X){return W||ie("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(W,X)}const nt=P.length;function mt(D,W,X){let R,it,ft;const pt=D.x-W.x,St=D.y-W.y,yt=X.x-D.x,H=X.y-D.y,Zt=pt*pt+St*St,Yt=pt*H-St*yt;if(Math.abs(Yt)>Number.EPSILON){const B=Math.sqrt(Zt),x=Math.sqrt(yt*yt+H*H),st=W.x-St/B,ct=W.y+pt/B,gt=X.x-H/x,At=X.y+yt/x,Rt=((gt-st)*H-(At-ct)*yt)/(pt*H-St*yt);R=st+pt*Rt-D.x,it=ct+St*Rt-D.y;const z=R*R+it*it;if(z<=2)return new Tt(R,it);ft=Math.sqrt(z/2)}else{let B=!1;pt>Number.EPSILON?yt>Number.EPSILON&&(B=!0):pt<-Number.EPSILON?yt<-Number.EPSILON&&(B=!0):Math.sign(St)===Math.sign(H)&&(B=!0),B?(R=-St,it=pt,ft=Math.sqrt(Zt)):(R=pt,it=St,ft=Math.sqrt(Zt/2))}return new Tt(R/ft,it/ft)}const lt=[];for(let D=0,W=K.length,X=W-1,R=D+1;D<W;D++,X++,R++)X===W&&(X=0),R===W&&(R=0),lt[D]=mt(K[D],K[X],K[R]);const _t=[];let Y,$=lt.concat();for(let D=0,W=T;D<W;D++){const X=Z[D];Y=[];for(let R=0,it=X.length,ft=it-1,pt=R+1;R<it;R++,ft++,pt++)ft===it&&(ft=0),pt===it&&(pt=0),Y[R]=mt(X[R],X[ft],X[pt]);_t.push(Y),$=$.concat(Y)}let Q;if(m===0)Q=Di.triangulateShape(K,Z);else{const D=[],W=[];for(let X=0;X<m;X++){const R=X/m,it=d*Math.cos(R*Math.PI/2),ft=_*Math.sin(R*Math.PI/2)+A;for(let pt=0,St=K.length;pt<St;pt++){const yt=rt(K[pt],lt[pt],ft);V(yt.x,yt.y,-it),R===0&&D.push(yt)}for(let pt=0,St=T;pt<St;pt++){const yt=Z[pt];Y=_t[pt];const H=[];for(let Zt=0,Yt=yt.length;Zt<Yt;Zt++){const B=rt(yt[Zt],Y[Zt],ft);V(B.x,B.y,-it),R===0&&H.push(B)}R===0&&W.push(H)}}Q=Di.triangulateShape(D,W)}const O=Q.length,g=_+A;for(let D=0;D<nt;D++){const W=u?rt(P[D],$[D],g):P[D];M?(k.copy(w.normals[0]).multiplyScalar(W.x),I.copy(w.binormals[0]).multiplyScalar(W.y),v.copy(L[0]).add(k).add(I),V(v.x,v.y,v.z)):V(W.x,W.y,0)}for(let D=1;D<=f;D++)for(let W=0;W<nt;W++){const X=u?rt(P[W],$[W],g):P[W];M?(k.copy(w.normals[D]).multiplyScalar(X.x),I.copy(w.binormals[D]).multiplyScalar(X.y),v.copy(L[D]).add(k).add(I),V(v.x,v.y,v.z)):V(X.x,X.y,h/f*D)}for(let D=m-1;D>=0;D--){const W=D/m,X=d*Math.cos(W*Math.PI/2),R=_*Math.sin(W*Math.PI/2)+A;for(let it=0,ft=K.length;it<ft;it++){const pt=rt(K[it],lt[it],R);V(pt.x,pt.y,h+X)}for(let it=0,ft=Z.length;it<ft;it++){const pt=Z[it];Y=_t[it];for(let St=0,yt=pt.length;St<yt;St++){const H=rt(pt[St],Y[St],R);M?V(H.x,H.y+L[f-1].y,L[f-1].x+X):V(H.x,H.y,h+X)}}}S(),y();function S(){const D=r.length/3;if(u){let W=0,X=nt*W;for(let R=0;R<O;R++){const it=Q[R];ut(it[2]+X,it[1]+X,it[0]+X)}W=f+m*2,X=nt*W;for(let R=0;R<O;R++){const it=Q[R];ut(it[0]+X,it[1]+X,it[2]+X)}}else{for(let W=0;W<O;W++){const X=Q[W];ut(X[2],X[1],X[0])}for(let W=0;W<O;W++){const X=Q[W];ut(X[0]+nt*f,X[1]+nt*f,X[2]+nt*f)}}n.addGroup(D,r.length/3-D,0)}function y(){const D=r.length/3;let W=0;U(K,W),W+=K.length;for(let X=0,R=Z.length;X<R;X++){const it=Z[X];U(it,W),W+=it.length}n.addGroup(D,r.length/3-D,1)}function U(D,W){let X=D.length;for(;--X>=0;){const R=X;let it=X-1;it<0&&(it=D.length-1);for(let ft=0,pt=f+m*2;ft<pt;ft++){const St=nt*ft,yt=nt*(ft+1),H=W+R+St,Zt=W+it+St,Yt=W+it+yt,B=W+R+yt;Mt(H,Zt,Yt,B)}}}function V(D,W,X){l.push(D),l.push(W),l.push(X)}function ut(D,W,X){Ct(D),Ct(W),Ct(X);const R=r.length/3,it=E.generateTopUV(n,r,R-3,R-2,R-1);kt(it[0]),kt(it[1]),kt(it[2])}function Mt(D,W,X,R){Ct(D),Ct(W),Ct(R),Ct(W),Ct(X),Ct(R);const it=r.length/3,ft=E.generateSideWallUV(n,r,it-6,it-3,it-2,it-1);kt(ft[0]),kt(ft[1]),kt(ft[3]),kt(ft[1]),kt(ft[2]),kt(ft[3])}function Ct(D){r.push(l[D*3+0]),r.push(l[D*3+1]),r.push(l[D*3+2])}function kt(D){s.push(D.x),s.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return oh(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new gs[r.type]().fromJSON(r)),new bo(n,t.options)}}const ah={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],f=t[r*3+1];return[new Tt(s,a),new Tt(o,l),new Tt(c,f)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],u=t[r*3],d=t[r*3+1],_=t[r*3+2],A=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new Tt(a,1-l),new Tt(c,1-h),new Tt(u,1-_),new Tt(A,1-p)]:[new Tt(o,1-l),new Tt(f,1-h),new Tt(d,1-_),new Tt(m,1-p)]}};function oh(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Eo extends Mr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Eo(t.radius,t.detail)}}class wo extends Mr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wo(t.radius,t.detail)}}class Ve extends he{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,h=t/o,u=e/l,d=[],_=[],A=[],m=[];for(let p=0;p<f;p++){const E=p*u-a;for(let L=0;L<c;L++){const M=L*h-s;_.push(M,-E,0),A.push(0,0,1),m.push(L/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const L=E+c*p,M=E+c*(p+1),w=E+1+c*(p+1),I=E+1+c*p;d.push(L,M,I),d.push(M,w,I)}this.setIndex(d),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class xr extends he{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let h=t;const u=(e-t)/r,d=new J,_=new Tt;for(let A=0;A<=r;A++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,f.push(_.x,_.y)}h+=u}for(let A=0;A<r;A++){const m=A*(n+1);for(let p=0;p<n;p++){const E=p+m,L=E,M=E+n+1,w=E+n+2,I=E+1;o.push(L,M,I),o.push(M,w,I)}}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Cn extends he{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new J,u=new J,d=[],_=[],A=[],m=[];for(let p=0;p<=n;p++){const E=[],L=p/n,M=a+L*o,w=t*Math.cos(M),I=Math.sqrt(t*t-w*w);let k=0;p===0&&a===0?k=.5/e:p===n&&l===Math.PI&&(k=-.5/e);for(let v=0;v<=e;v++){const N=v/e,P=r+N*s;h.x=-I*Math.cos(P),h.y=w,h.z=I*Math.sin(P),_.push(h.x,h.y,h.z),u.copy(h).normalize(),A.push(u.x,u.y,u.z),m.push(N+k,1-L),E.push(c++)}f.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const L=f[p][E+1],M=f[p][E],w=f[p+1][E],I=f[p+1][E+1];(p!==0||a>0)&&d.push(L,M,I),(p!==n-1||l<Math.PI)&&d.push(M,w,I)}this.setIndex(d),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hn extends he{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],f=[],h=[],u=new J,d=new J,_=new J;for(let A=0;A<=n;A++){const m=a+A/n*o;for(let p=0;p<=r;p++){const E=p/r*s;d.x=(t+e*Math.cos(m))*Math.cos(E),d.y=(t+e*Math.cos(m))*Math.sin(E),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),_.subVectors(d,u).normalize(),f.push(_.x,_.y,_.z),h.push(p/r),h.push(A/n)}}for(let A=1;A<=n;A++)for(let m=1;m<=r;m++){const p=(r+1)*A+m-1,E=(r+1)*(A-1)+m-1,L=(r+1)*(A-1)+m,M=(r+1)*A+m;l.push(p,E,M),l.push(E,L,M)}this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class To extends he{constructor(t=new Xc(new J(-1,-1,0),new J(-1,1,0),new J(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new J,l=new J,c=new Tt;let f=new J;const h=[],u=[],d=[],_=[];A(),this.setIndex(_),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function A(){for(let L=0;L<e;L++)m(L);m(s===!1?e:0),E(),p()}function m(L){f=t.getPointAt(L/e,f);const M=a.normals[L],w=a.binormals[L];for(let I=0;I<=r;I++){const k=I/r*Math.PI*2,v=Math.sin(k),N=-Math.cos(k);l.x=N*M.x+v*w.x,l.y=N*M.y+v*w.y,l.z=N*M.z+v*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=f.x+n*l.x,o.y=f.y+n*l.y,o.z=f.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let L=1;L<=e;L++)for(let M=1;M<=r;M++){const w=(r+1)*(L-1)+(M-1),I=(r+1)*L+(M-1),k=(r+1)*L+M,v=(r+1)*(L-1)+M;_.push(w,I,v),_.push(I,k,v)}}function E(){for(let L=0;L<=e;L++)for(let M=0;M<=r;M++)c.x=L/e,c.y=M/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new To(new gs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(Cl(r))r.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Cl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const r in n)t[r]=n[r]}return t}function Cl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const ch={clone:Gi,merge:Ge};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=lh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new J().fromArray(r.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hh extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _s extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kn extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ro,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dh extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ph extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ra={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Pl(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Pl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pl(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class mh{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gh=new mh;class Ao{constructor(t){this.manager=t!==void 0?t:gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai=new WeakMap;class _h extends Ao{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ra.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let h=Ai.get(a);h===void 0&&(h=[],Ai.set(a,h)),h.push({onLoad:e,onError:r})}return a}const o=pr("img");function l(){f(),e&&e(this);const h=Ai.get(this)||[];for(let u=0;u<h.length;u++){const d=h[u];d.onLoad&&d.onLoad(this)}Ai.delete(this),s.manager.itemEnd(t)}function c(h){f(),r&&r(h),ra.remove(`image:${t}`);const u=Ai.get(this)||[];for(let d=0;d<u.length;d++){const _=u[d];_.onError&&_.onError(h)}Ai.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ra.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class bs extends Ao{constructor(t){super(t)}load(t,e,n,r){const s=new Pe,a=new _h(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Ro extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Co extends Ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const sa=new ae,Ll=new J,Il=new J;class jc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Il),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sa,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===dr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kr=new J,$r=new _n,cn=new J;class tu extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kr,$r,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,$r,cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Kr,$r,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,$r,cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new J,Dl=new Tt,Ul=new Tt;class qe extends tu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Ul),e.subVectors(Ul,Dl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class vh extends jc{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}}class eu extends Ro{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Po extends tu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xh extends jc{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lo extends Ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new xh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ri=-90,Ci=1;class Mh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qe(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const s=new qe(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const a=new qe(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const o=new qe(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const l=new qe(Ri,Ci,t,e);l.layers=this.layers,this.add(l);const c=new qe(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Sh extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const zo=class zo{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};zo.prototype.isMatrix2=!0;let Nl=zo;function Fl(i,t,e,n){const r=yh(n);switch(e){case wc:return i*t;case co:return i*t/r.components*r.byteLength;case uo:return i*t/r.components*r.byteLength;case ri:return i*t*2/r.components*r.byteLength;case fo:return i*t*2/r.components*r.byteLength;case Tc:return i*t*3/r.components*r.byteLength;case sn:return i*t*4/r.components*r.byteLength;case ho:return i*t*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case ba:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Ta:case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:case cs:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case us:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yh(i){switch(i){case Ye:case Sc:return{byteLength:1,components:1};case fr:case yc:case gn:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case mn:case ao:case rn:return{byteLength:4,components:1};case bc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nu(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function bh(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<h.length;d++){const _=h[u],A=h[d];A.start<=_.start+_.count+1?_.count=Math.max(_.count,A.start+A.count-_.start):(++u,h[u]=A)}h.length=u+1;for(let d=0,_=h.length;d<_;d++){const A=h[d];i.bufferSubData(c,A.start*f.BYTES_PER_ELEMENT,f,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Eh,alphahash_pars_fragment:wh,alphamap_fragment:Th,alphamap_pars_fragment:Ah,alphatest_fragment:Rh,alphatest_pars_fragment:Ch,aomap_fragment:Ph,aomap_pars_fragment:Lh,batching_pars_vertex:Ih,batching_vertex:Dh,begin_vertex:Uh,beginnormal_vertex:Nh,bsdfs:Fh,iridescence_fragment:Oh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Gh,clipping_planes_vertex:Vh,color_fragment:Hh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:qh,common:Yh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Kh,displacementmap_vertex:$h,emissivemap_fragment:Qh,emissivemap_pars_fragment:jh,colorspace_fragment:td,colorspace_pars_fragment:ed,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:rd,envmap_pars_vertex:sd,envmap_physical_pars_fragment:gd,envmap_vertex:ad,fog_vertex:od,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:ud,gradientmap_pars_fragment:fd,lightmap_pars_fragment:hd,lights_lambert_fragment:dd,lights_lambert_pars_fragment:pd,lights_pars_begin:md,lights_toon_fragment:_d,lights_toon_pars_fragment:vd,lights_phong_fragment:xd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:yd,lights_fragment_begin:bd,lights_fragment_maps:Ed,lights_fragment_end:wd,lightprobes_pars_fragment:Td,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Id,map_particle_fragment:Dd,map_particle_pars_fragment:Ud,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:Fd,morphinstance_vertex:Od,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:kd,morphtarget_vertex:Gd,normal_fragment_begin:Vd,normal_fragment_maps:Hd,normal_pars_fragment:Wd,normal_pars_vertex:Xd,normal_vertex:qd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:$d,opaque_fragment:Qd,packing:jd,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:rp,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:up,skinning_pars_vertex:fp,skinning_vertex:hp,skinnormal_vertex:dp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:Mp,uv_pars_vertex:Sp,uv_vertex:yp,worldpos_vertex:bp,background_vert:Ep,background_frag:wp,backgroundCube_vert:Tp,backgroundCube_frag:Ap,cube_vert:Rp,cube_frag:Cp,depth_vert:Pp,depth_frag:Lp,distance_vert:Ip,distance_frag:Dp,equirect_vert:Up,equirect_frag:Np,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:kp,meshlambert_frag:Gp,meshmatcap_vert:Vp,meshmatcap_frag:Hp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:Zp,meshphysical_frag:Jp,meshtoon_vert:Kp,meshtoon_frag:$p,points_vert:Qp,points_frag:jp,shadow_vert:tm,shadow_frag:em,sprite_vert:nm,sprite_frag:im},Dt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},fn={basic:{uniforms:Ge([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ge([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ge([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ge([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ge([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ge([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ge([Dt.points,Dt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ge([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ge([Dt.common,Dt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ge([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ge([Dt.sprite,Dt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Ge([Dt.common,Dt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Ge([Dt.lights,Dt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};fn.physical={uniforms:Ge([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Qr={r:0,b:0,g:0},rm=new ae,iu=new Kt;iu.set(-1,0,0,0,1,0,0,0,1);function sm(i,t,e,n,r,s){const a=new qt(0);let o=r===!0?0:1,l,c,f=null,h=0,u=null;function d(E){let L=E.isScene===!0?E.background:null;if(L&&L.isTexture){const M=E.backgroundBlurriness>0;L=t.get(L,M)}return L}function _(E){let L=!1;const M=d(E);M===null?m(a,o):M&&M.isColor&&(m(M,1),L=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(E,L){const M=d(L);M&&(M.isCubeTexture||M.mapping===Ms)?(c===void 0&&(c=new se(new Xn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Gi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(iu),c.material.toneMapped=ne.getTransfer(M.colorSpace)!==ce,(f!==M||h!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new se(new Ve(2,2),new He({name:"BackgroundMaterial",uniforms:Gi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=ne.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,L){E.getRGB(Qr,Qc(i)),e.buffers.color.setClear(Qr.r,Qr.g,Qr.b,L,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,L=1){a.set(E),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:A,dispose:p}}function am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(Z,C,F,T,K){let rt=!1;const nt=h(Z,T,F,C);s!==nt&&(s=nt,c(s.object)),rt=d(Z,T,F,K),rt&&_(Z,T,F,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(rt||a)&&(a=!1,M(Z,C,F,T),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(Z){return i.bindVertexArray(Z)}function f(Z){return i.deleteVertexArray(Z)}function h(Z,C,F,T){const K=T.wireframe===!0;let rt=n[C.id];rt===void 0&&(rt={},n[C.id]=rt);const nt=Z.isInstancedMesh===!0?Z.id:0;let mt=rt[nt];mt===void 0&&(mt={},rt[nt]=mt);let lt=mt[F.id];lt===void 0&&(lt={},mt[F.id]=lt);let _t=lt[K];return _t===void 0&&(_t=u(l()),lt[K]=_t),_t}function u(Z){const C=[],F=[],T=[];for(let K=0;K<e;K++)C[K]=0,F[K]=0,T[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:T,object:Z,attributes:{},index:null}}function d(Z,C,F,T){const K=s.attributes,rt=C.attributes;let nt=0;const mt=F.getAttributes();for(const lt in mt)if(mt[lt].location>=0){const Y=K[lt];let $=rt[lt];if($===void 0&&(lt==="instanceMatrix"&&Z.instanceMatrix&&($=Z.instanceMatrix),lt==="instanceColor"&&Z.instanceColor&&($=Z.instanceColor)),Y===void 0||Y.attribute!==$||$&&Y.data!==$.data)return!0;nt++}return s.attributesNum!==nt||s.index!==T}function _(Z,C,F,T){const K={},rt=C.attributes;let nt=0;const mt=F.getAttributes();for(const lt in mt)if(mt[lt].location>=0){let Y=rt[lt];Y===void 0&&(lt==="instanceMatrix"&&Z.instanceMatrix&&(Y=Z.instanceMatrix),lt==="instanceColor"&&Z.instanceColor&&(Y=Z.instanceColor));const $={};$.attribute=Y,Y&&Y.data&&($.data=Y.data),K[lt]=$,nt++}s.attributes=K,s.attributesNum=nt,s.index=T}function A(){const Z=s.newAttributes;for(let C=0,F=Z.length;C<F;C++)Z[C]=0}function m(Z){p(Z,0)}function p(Z,C){const F=s.newAttributes,T=s.enabledAttributes,K=s.attributeDivisors;F[Z]=1,T[Z]===0&&(i.enableVertexAttribArray(Z),T[Z]=1),K[Z]!==C&&(i.vertexAttribDivisor(Z,C),K[Z]=C)}function E(){const Z=s.newAttributes,C=s.enabledAttributes;for(let F=0,T=C.length;F<T;F++)C[F]!==Z[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function L(Z,C,F,T,K,rt,nt){nt===!0?i.vertexAttribIPointer(Z,C,F,K,rt):i.vertexAttribPointer(Z,C,F,T,K,rt)}function M(Z,C,F,T){A();const K=T.attributes,rt=F.getAttributes(),nt=C.defaultAttributeValues;for(const mt in rt){const lt=rt[mt];if(lt.location>=0){let _t=K[mt];if(_t===void 0&&(mt==="instanceMatrix"&&Z.instanceMatrix&&(_t=Z.instanceMatrix),mt==="instanceColor"&&Z.instanceColor&&(_t=Z.instanceColor)),_t!==void 0){const Y=_t.normalized,$=_t.itemSize,Q=t.get(_t);if(Q===void 0)continue;const O=Q.buffer,g=Q.type,S=Q.bytesPerElement,y=g===i.INT||g===i.UNSIGNED_INT||_t.gpuType===ao;if(_t.isInterleavedBufferAttribute){const U=_t.data,V=U.stride,ut=_t.offset;if(U.isInstancedInterleavedBuffer){for(let Mt=0;Mt<lt.locationSize;Mt++)p(lt.location+Mt,U.meshPerAttribute);Z.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Mt=0;Mt<lt.locationSize;Mt++)m(lt.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,O);for(let Mt=0;Mt<lt.locationSize;Mt++)L(lt.location+Mt,$/lt.locationSize,g,Y,V*S,(ut+$/lt.locationSize*Mt)*S,y)}else{if(_t.isInstancedBufferAttribute){for(let U=0;U<lt.locationSize;U++)p(lt.location+U,_t.meshPerAttribute);Z.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let U=0;U<lt.locationSize;U++)m(lt.location+U);i.bindBuffer(i.ARRAY_BUFFER,O);for(let U=0;U<lt.locationSize;U++)L(lt.location+U,$/lt.locationSize,g,Y,$*S,$/lt.locationSize*U*S,y)}}else if(nt!==void 0){const Y=nt[mt];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(lt.location,Y);break;case 3:i.vertexAttrib3fv(lt.location,Y);break;case 4:i.vertexAttrib4fv(lt.location,Y);break;default:i.vertexAttrib1fv(lt.location,Y)}}}}E()}function w(){N();for(const Z in n){const C=n[Z];for(const F in C){const T=C[F];for(const K in T){const rt=T[K];for(const nt in rt)f(rt[nt].object),delete rt[nt];delete T[K]}}delete n[Z]}}function I(Z){if(n[Z.id]===void 0)return;const C=n[Z.id];for(const F in C){const T=C[F];for(const K in T){const rt=T[K];for(const nt in rt)f(rt[nt].object),delete rt[nt];delete T[K]}}delete n[Z.id]}function k(Z){for(const C in n){const F=n[C];for(const T in F){const K=F[T];if(K[Z.id]===void 0)continue;const rt=K[Z.id];for(const nt in rt)f(rt[nt].object),delete rt[nt];delete K[Z.id]}}}function v(Z){for(const C in n){const F=n[C],T=Z.isInstancedMesh===!0?Z.id:0,K=F[T];if(K!==void 0){for(const rt in K){const nt=K[rt];for(const mt in nt)f(nt[mt].object),delete nt[mt];delete K[rt]}delete F[T],Object.keys(F).length===0&&delete n[C]}}}function N(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfObject:v,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:m,disableUnusedAttributes:E}}function om(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];e.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function lm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(k){return!(k!==sn&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){const v=k===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==Ye&&k!==rn&&!v&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(Jt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:L,maxFragmentUniforms:M,maxSamples:w,samples:I}}function cm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new zn,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){const _=h.clippingPlanes,A=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const E=s?0:n,L=E*4;let M=p.clippingState||null;l.value=M,M=f(_,u,L,d);for(let w=0;w!==L;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,d,_){const A=h!==null?h.length:0;let m=null;if(A!==0){if(m=l.value,_!==!0||m===null){const p=d+A*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let L=0,M=d;L!==A;++L,M+=4)a.copy(h[L]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}const Ui=4,um=6,fm=20,hm=256,tr=new Po,Ol=new qt;let aa=null,oa=0,la=0,ca=!1;const dm=new J,$n=new J;class Bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=dm}=s;aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Pi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ii||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:gn,format:sn,colorSpace:hs,depthBuffer:!1},r=zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pm(s)),this._blurMaterial=gm(s,t,e),this._ggxMaterial=mm(s,t,e)}return r}_compileMaterial(t){const e=new se(new he,t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,r,s){const l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ol),h.toneMapping=pn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new Xn,new De({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,m=A.material;let p=!1;const E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(Ol),p=!0);for(let L=0;L<6;L++){const M=L%3;M===0?(l.up.set(0,c[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[L],s.y,s.z)):M===1?(l.up.set(0,0,c[L]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[L],s.z)):(l.up.set(0,c[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[L]));const w=this._cubeSize;Pi(r,M*w,L>2?w:0,w,w),h.setRenderTarget(r),p&&h.render(A,l),h.render(t,l)}h.toneMapping=d,h.autoClear=u,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ii||t.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Pi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:_}=this,A=this._sizeLods[n],m=3*A*(n>_-Ui?n-_+Ui:0),p=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,Pi(s,m,p,3*A,2*A),r.setRenderTarget(s),r.render(o,tr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Pi(t,m,p,3*A,2*A),r.setRenderTarget(t),r.render(o,tr)}_blur(t,e,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-Ui?r-this._lodMax+Ui:0),u=4*(this._cubeSize-f);Pi(e,h,u,3*f,2*f),a.setRenderTarget(e),a.render(l,tr)}}function pm(i){const t=[],e=[];let n=i;const r=i-Ui+1+um;for(let s=0;s<r;s++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,_=new Float32Array(d*u*h),A=new Float32Array(d*u*h);for(let p=0;p<h;p++){const E=p%3*2/3-1,L=p>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];_.set(M,d*u*p);for(let w=0;w<u;w++){const I=f[w*2]*2-1,k=f[w*2+1]*2-1;p===0?$n.set(1,k,I):p===1?$n.set(-I,1,-k):p===2?$n.set(-I,k,1):p===3?$n.set(-1,k,-I):p===4?$n.set(-I,-1,k):$n.set(I,k,-1),$n.toArray(A,(p*u+w)*d)}}const m=new he;m.setAttribute("position",new Qe(_,d)),m.setAttribute("outputDirection",new Qe(A,d)),e.push(new se(m,null)),n>Ui&&n--}return{lodMeshes:e,sizeLods:t}}function zl(i,t,e){const n=new an(i,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function mm(i,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Es(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function gm(i,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Es(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function kl(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Gl(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Es(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ru extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Bc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xn(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Tn});s.uniforms.tEquirect.value=e;const a=new se(r,s),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=Ce),new Mh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function _m(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Rs||d===Cs)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const A=new ru(_.height);return A.fromEquirectangularTexture(i,u),t.set(u,A),u.addEventListener("dispose",c),o(A.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,_=d===Rs||d===Cs,A=d===ii||d===Oi;if(_||A){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Bl(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const E=u.image;return _&&E&&E.height>0||A&&E&&l(E)?(n===null&&(n=new Bl(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Rs?u.mapping=ii:d===Cs&&(u.mapping=Oi),u}function l(u){let d=0;const _=6;for(let A=0;A<_;A++)u[A]!==void 0&&d++;return d===_}function c(u){const d=u.target;d.removeEventListener("dispose",c);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(u){const d=u.target;d.removeEventListener("dispose",f);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ni("WebGLRenderer: "+n+" extension not supported."),r}}}function xm(i,t,e,n){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(h){const u=[],d=h.index,_=h.attributes.position;let A=0;if(_===void 0)return;if(d!==null){const E=d.array;A=d.version;for(let L=0,M=E.length;L<M;L+=3){const w=E[L+0],I=E[L+1],k=E[L+2];u.push(w,I,I,k,k,w)}}else{const E=_.array;A=_.version;for(let L=0,M=E.length/3-1;L<M;L+=3){const w=L+0,I=L+1,k=L+2;u.push(w,I,I,k,k,w)}}const m=new(_.count>=65535?Dc:Ic)(u,1);m.version=A;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function f(h){const u=s.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Mm(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,s,h*a),e.update(u,n,1)}function c(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,s,h*a,d),e.update(u,n,d))}function f(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,d);let A=0;for(let m=0;m<d;m++)A+=u[m];e.update(A,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Sm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ym(i,t,e){const n=new WeakMap,r=new _e;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let N=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let L=0;d===!0&&(L=1),_===!0&&(L=2),A===!0&&(L=3);let M=o.attributes.position.count*L,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const I=new Float32Array(M*w*4*h),k=new Cc(I,M,w,h);k.type=rn,k.needsUpdate=!0;const v=L*4;for(let P=0;P<h;P++){const Z=m[P],C=p[P],F=E[P],T=M*w*4*P;for(let K=0;K<Z.count;K++){const rt=K*v;d===!0&&(r.fromBufferAttribute(Z,K),I[T+rt+0]=r.x,I[T+rt+1]=r.y,I[T+rt+2]=r.z,I[T+rt+3]=0),_===!0&&(r.fromBufferAttribute(C,K),I[T+rt+4]=r.x,I[T+rt+5]=r.y,I[T+rt+6]=r.z,I[T+rt+7]=0),A===!0&&(r.fromBufferAttribute(F,K),I[T+rt+8]=r.x,I[T+rt+9]=r.y,I[T+rt+10]=r.z,I[T+rt+11]=F.itemSize===4?r.w:1)}}u={count:h,texture:k,size:new Tt(M,w)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let A=0;A<c.length;A++)d+=c[A];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function bm(i,t,e,n,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==f&&(t.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const Em={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[so]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function wm(i,t,e,n,r,s){const a=new an(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new he;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));const f=new hh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new se(c,f),u=new Po(-1,1,1,-1,0,1);let d=null,_=null,A=!1,m,p=null,E=[],L=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let I=0;I<E.length;I++){const k=E[I];k.setSize&&k.setSize(M,w)}},this.setEffects=function(M){E=M,L=E.length>0&&E[0].isRenderPass===!0;const w=a.width,I=a.height;E.length>0&&o===null&&(o=new an(w,I,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new an(w,I,{type:gn,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<E.length;k++){const v=E[k];v.setSize&&v.setSize(w,I)}},this.begin=function(M,w){if(A||M.toneMapping===pn&&E.length===0)return!1;if(p=w,w!==null){const I=w.width,k=w.height;(a.width!==I||a.height!==k)&&this.setSize(I,k)}return L===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=pn,!0},this.hasRenderPass=function(){return L},this.end=function(M,w){M.toneMapping=m,A=!0;let I=a,k=o;for(let v=0;v<E.length;v++){const N=E[v];N.enabled!==!1&&(N.render(M,k,I,w),N.needsSwap!==!1&&(I=k,k=k===o?l:o))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,f.defines={},ne.getTransfer(d)===ce&&(f.defines.SRGB_TRANSFER="");const v=Em[_];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=I.texture,M.setRenderTarget(p),M.render(h,u),p=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const su=new Pe,eo=new mr(1,1),au=new Cc,ou=new hf,lu=new Bc,Vl=[],Hl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function Wi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Vl[r];if(s===void 0&&(s=new Float32Array(r),Vl[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ws(i,t){let e=Hl[t];e===void 0&&(e=new Int32Array(t),Hl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),Te(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),Te(e,n)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Te(e,n)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Gm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(eo.compareFunction=e.isReversedDepthBuffer()?mo:po,s=eo):s=su,e.setTexture2D(t||s,r)}function Vm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ou,r)}function Hm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||lu,r)}function Wm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||au,r)}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Lm;case 35676:return Im;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Wm}}function qm(i,t){i.uniform1fv(this.addr,t)}function Ym(i,t){const e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zm(i,t){const e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){const e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function Km(i,t){const e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){const e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qm(i,t){const e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function t0(i,t){i.uniform2iv(this.addr,t)}function e0(i,t){i.uniform3iv(this.addr,t)}function n0(i,t){i.uniform4iv(this.addr,t)}function i0(i,t){i.uniform1uiv(this.addr,t)}function r0(i,t){i.uniform2uiv(this.addr,t)}function s0(i,t){i.uniform3uiv(this.addr,t)}function a0(i,t){i.uniform4uiv(this.addr,t)}function o0(i,t,e){const n=this.cache,r=t.length,s=ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=eo:a=su;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function l0(i,t,e){const n=this.cache,r=t.length,s=ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ou,s[a])}function c0(i,t,e){const n=this.cache,r=t.length,s=ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||lu,s[a])}function u0(i,t,e){const n=this.cache,r=t.length,s=ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||au,s[a])}function f0(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return Zm;case 35666:return Jm;case 35674:return Km;case 35675:return $m;case 35676:return Qm;case 5124:case 35670:return jm;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xm(e.type)}}class d0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f0(e.type)}}class p0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Yl(i,t){i.seq.push(t),i.map[t.id]=t}function m0(i,t,e){const n=i.name,r=n.length;for(ua.lastIndex=0;;){const s=ua.exec(n),a=ua.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yl(e,c===void 0?new h0(o,i,t):new d0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new p0(o),Yl(e,h)),e=h}}}class as{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);m0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const g0=37297;let _0=0;function v0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Jl=new Kt;function x0(i){ne._getMatrix(Jl,ne.workingColorSpace,i);const t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case ds:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+v0(i.getShaderSource(t),o)}else return s}function M0(i,t){const e=x0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const S0={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[so]:"ACESFilmic",[vc]:"AgX",[xc]:"Neutral",[_c]:"Custom"};function y0(i,t){const e=S0[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new J;function b0(){ne.getLuminanceCoefficients(jr);const i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function w0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function $l(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(i){return i.replace(A0,C0)}const R0=new Map;function C0(i,t){let e=jt[t];if(e===void 0){const n=R0.get(t);if(n!==void 0)e=jt[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return no(e)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(i){return i.replace(P0,L0)}function L0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const I0={[ar]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function D0(i){return I0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U0={[ii]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE_UV"};function N0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":U0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const F0={[Oi]:"ENVMAP_MODE_REFRACTION"};function O0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":F0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const B0={[ro]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function z0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":B0[i.combine]||"ENVMAP_BLENDING_NONE"}function k0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=D0(e),c=N0(e),f=O0(e),h=z0(e),u=k0(e),d=E0(e),_=w0(s),A=r.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?jt.tonemapping_pars_fragment:"",e.toneMapping!==pn?y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,M0("linearToOutputTexel",e.outputColorSpace),b0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=no(a),a=$l(a,e),a=Ql(a,e),o=no(o),o=$l(o,e),o=Ql(o,e),a=jl(a),o=jl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const L=E+m+a,M=E+p+o,w=Zl(r,r.VERTEX_SHADER,L),I=Zl(r,r.FRAGMENT_SHADER,M);r.attachShader(A,w),r.attachShader(A,I),e.index0AttributeName!==void 0?r.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function k(Z){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(A)||"",F=r.getShaderInfoLog(w)||"",T=r.getShaderInfoLog(I)||"",K=C.trim(),rt=F.trim(),nt=T.trim();let mt=!0,lt=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,w,I);else{const _t=Kl(r,w,"vertex"),Y=Kl(r,I,"fragment");ie("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+K+`
`+_t+`
`+Y)}else K!==""?Jt("WebGLProgram: Program Info Log:",K):(rt===""||nt==="")&&(lt=!1);lt&&(Z.diagnostics={runnable:mt,programLog:K,vertexShader:{log:rt,prefix:m},fragmentShader:{log:nt,prefix:p}})}r.deleteShader(w),r.deleteShader(I),v=new as(r,A),N=T0(r,A)}let v;this.getUniforms=function(){return v===void 0&&k(this),v};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(A,g0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=w,this.fragmentShader=I,this}let V0=0;class H0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new W0(t),e.set(t,n)),n}}class W0{constructor(t){this.id=V0++,this.code=t,this.usedTimes=0}}function X0(i){return i===ri||i===cs||i===us}function q0(i,t,e,n,r,s){const a=new Pc,o=new H0,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function A(v,N,P,Z,C,F){const T=Z.fog,K=C.geometry,rt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?Z.environment:null,nt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,mt=t.get(v.envMap||rt,nt),lt=mt&&mt.mapping===Ms?mt.image.height:null,_t=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Jt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const Y=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$=Y!==void 0?Y.length:0;let Q=0;K.morphAttributes.position!==void 0&&(Q=1),K.morphAttributes.normal!==void 0&&(Q=2),K.morphAttributes.color!==void 0&&(Q=3);let O,g,S,y;if(_t){const pe=fn[_t];O=pe.vertexShader,g=pe.fragmentShader}else{O=v.vertexShader,g=v.fragmentShader;const pe=o.getVertexShaderStage(v),oe=o.getFragmentShaderStage(v);o.update(v,pe,oe),S=pe.id,y=oe.id}const U=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),ut=C.isInstancedMesh===!0,Mt=C.isBatchedMesh===!0,Ct=!!v.map,kt=!!v.matcap,D=!!mt,W=!!v.aoMap,X=!!v.lightMap,R=!!v.bumpMap&&v.wireframe===!1,it=!!v.normalMap,ft=!!v.displacementMap,pt=!!v.emissiveMap,St=!!v.metalnessMap,yt=!!v.roughnessMap,H=v.anisotropy>0,Zt=v.clearcoat>0,Yt=v.dispersion>0,B=v.retroreflectivity>0,x=v.iridescence>0,st=v.sheen>0,ct=v.transmission>0,gt=H&&!!v.anisotropyMap,At=Zt&&!!v.clearcoatMap,Rt=Zt&&!!v.clearcoatNormalMap,z=Zt&&!!v.clearcoatRoughnessMap,q=x&&!!v.iridescenceMap,et=x&&!!v.iridescenceThicknessMap,G=st&&!!v.sheenColorMap,ht=st&&!!v.sheenRoughnessMap,xt=!!v.specularMap,Et=!!v.specularColorMap,wt=!!v.specularIntensityMap,It=ct&&!!v.transmissionMap,j=ct&&!!v.thicknessMap,Pt=!!v.gradientMap,vt=!!v.alphaMap,Lt=v.alphaTest>0,Ut=!!v.alphaHash,bt=!!v.extensions;let Xt=pn;v.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const Ht={shaderID:_t,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:g,defines:v.defines,customVertexShaderID:S,customFragmentShaderID:y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&C._colorsTexture!==null,instancing:ut,instancingColor:ut&&C.instanceColor!==null,instancingMorph:ut&&C.morphTexture!==null,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:kt,envMap:D,envMapMode:D&&mt.mapping,envMapCubeUVHeight:lt,aoMap:W,lightMap:X,bumpMap:R,normalMap:it,displacementMap:ft,emissiveMap:pt,normalMapObjectSpace:it&&v.normalMapType===Yu,normalMapTangentSpace:it&&v.normalMapType===fs,packedNormalMap:it&&v.normalMapType===fs&&X0(v.normalMap.format),metalnessMap:St,roughnessMap:yt,anisotropy:H,anisotropyMap:gt,clearcoat:Zt,clearcoatMap:At,clearcoatNormalMap:Rt,clearcoatRoughnessMap:z,dispersion:Yt,retroreflection:B,iridescence:x,iridescenceMap:q,iridescenceThicknessMap:et,sheen:st,sheenColorMap:G,sheenRoughnessMap:ht,specularMap:xt,specularColorMap:Et,specularIntensityMap:wt,transmission:ct,transmissionMap:It,thicknessMap:j,gradientMap:Pt,opaque:v.transparent===!1&&v.blending===or&&v.alphaToCoverage===!1,alphaMap:vt,alphaTest:Lt,alphaHash:Ut,combine:v.combine,mapUv:Ct&&_(v.map.channel),aoMapUv:W&&_(v.aoMap.channel),lightMapUv:X&&_(v.lightMap.channel),bumpMapUv:R&&_(v.bumpMap.channel),normalMapUv:it&&_(v.normalMap.channel),displacementMapUv:ft&&_(v.displacementMap.channel),emissiveMapUv:pt&&_(v.emissiveMap.channel),metalnessMapUv:St&&_(v.metalnessMap.channel),roughnessMapUv:yt&&_(v.roughnessMap.channel),anisotropyMapUv:gt&&_(v.anisotropyMap.channel),clearcoatMapUv:At&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:G&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(v.sheenRoughnessMap.channel),specularMapUv:xt&&_(v.specularMap.channel),specularColorMapUv:Et&&_(v.specularColorMap.channel),specularIntensityMapUv:wt&&_(v.specularIntensityMap.channel),transmissionMapUv:It&&_(v.transmissionMap.channel),thicknessMapUv:j&&_(v.thicknessMap.channel),alphaMapUv:vt&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(it||H),vertexNormals:!!K.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!K.attributes.uv&&(Ct||vt),fog:!!T,useFog:v.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||K.attributes.normal===void 0&&it===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:V,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Re,flipSided:v.side===Be,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:bt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&v.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(v){const N=[];if(v.shaderID?N.push(v.shaderID):(N.push(v.customVertexShaderID),N.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)N.push(P),N.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(N,v),E(N,v),N.push(i.outputColorSpace)),N.push(v.customProgramCacheKey),N.join()}function p(v,N){v.push(N.precision),v.push(N.outputColorSpace),v.push(N.envMapMode),v.push(N.envMapCubeUVHeight),v.push(N.mapUv),v.push(N.alphaMapUv),v.push(N.lightMapUv),v.push(N.aoMapUv),v.push(N.bumpMapUv),v.push(N.normalMapUv),v.push(N.displacementMapUv),v.push(N.emissiveMapUv),v.push(N.metalnessMapUv),v.push(N.roughnessMapUv),v.push(N.anisotropyMapUv),v.push(N.clearcoatMapUv),v.push(N.clearcoatNormalMapUv),v.push(N.clearcoatRoughnessMapUv),v.push(N.iridescenceMapUv),v.push(N.iridescenceThicknessMapUv),v.push(N.sheenColorMapUv),v.push(N.sheenRoughnessMapUv),v.push(N.specularMapUv),v.push(N.specularColorMapUv),v.push(N.specularIntensityMapUv),v.push(N.transmissionMapUv),v.push(N.thicknessMapUv),v.push(N.combine),v.push(N.fogExp2),v.push(N.sizeAttenuation),v.push(N.morphTargetsCount),v.push(N.morphAttributeCount),v.push(N.numSunLights),v.push(N.numDirLights),v.push(N.numPointLights),v.push(N.numSpotLights),v.push(N.numSpotLightMaps),v.push(N.numHemiLights),v.push(N.numRectAreaLights),v.push(N.numSunLightShadows),v.push(N.numDirLightShadows),v.push(N.numPointLightShadows),v.push(N.numSpotLightShadows),v.push(N.numSpotLightShadowsWithMaps),v.push(N.numLightProbes),v.push(N.shadowMapType),v.push(N.toneMapping),v.push(N.numClippingPlanes),v.push(N.numClipIntersection),v.push(N.depthPacking)}function E(v,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function L(v){const N=d[v.type];let P;if(N){const Z=fn[N];P=ch.clone(Z.uniforms)}else P=v.uniforms;return P}function M(v,N){let P=f.get(N);return P!==void 0?++P.usedTimes:(P=new G0(i,N,v,r),c.push(P),f.set(N,P)),P}function w(v){if(--v.usedTimes===0){const N=c.indexOf(v);c[N]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function I(v){o.remove(v)}function k(){o.dispose()}return{getParameters:A,getProgramCacheKey:m,getUniforms:L,acquireProgram:M,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:k}}function Y0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ec(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,A,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:A,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=_,E.materialVariant=a(u),E.groupOrder=A,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function l(u,d,_,A,m,p,E){E.reversedDepth===!0&&(m=-m);const L=o(u,d,_,A,m,p);_.transmission>0?n.push(L):_.transparent===!0?r.push(L):e.push(L)}function c(u,d,_,A,m,p){const E=o(u,d,_,A,m,p);_.transmission>0?n.unshift(E):_.transparent===!0?r.unshift(E):e.unshift(E)}function f(u,d){e.length>1&&e.sort(u||Z0),n.length>1&&n.sort(d||ec),r.length>1&&r.sort(d||ec)}function h(){for(let u=t,d=i.length;u<d;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function J0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new nc,i.set(n,[a])):r>=s.length?(a=new nc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function K0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new qt};break;case"SpotLight":e={position:new J,direction:new J,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Q0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){const t=new K0,e=$0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const r=new J,s=new ae,a=new ae;function o(c){let f=0,h=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,_=0,A=0,m=0,p=0,E=0,L=0,M=0,w=0,I=0,k=0,v=0,N=0,P=0;c.sort(j0);for(let C=0,F=c.length;C<F;C++){const T=c[C],K=T.color,rt=T.intensity,nt=T.distance;let mt=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ri?mt=T.shadow.map.texture:mt=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=K.r*rt,h+=K.g*rt,u+=K.b*rt;else if(T.isLightProbe){for(let lt=0;lt<9;lt++)n.probe[lt].addScaledVector(T.sh.coefficients[lt],rt);P++}else if(T.isSunLight){const lt=t.get(T);if(lt.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const _t=T.shadow,Y=e.get(T);Y.shadowIntensity=_t.intensity,Y.shadowBias=_t.bias,Y.shadowNormalBias=_t.normalBias,Y.shadowRadius=_t.radius,Y.shadowMapSize.copy(_t.mapSize).multiply(_t.getFrameExtents()),n.sunShadow[_]=Y,n.sunShadowMap[_]=mt;const $=_t.getViewportCount();for(let Q=0;Q<$;Q++)n.sunShadowMatrix[A+Q]=_t.getMatrix(Q),n.sunShadowCascade[A+Q]=_t._cascadeData[Q];A+=$,_++}n.sun[d]=lt,d++}else if(T.isDirectionalLight){const lt=t.get(T);if(lt.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const _t=T.shadow,Y=e.get(T);Y.shadowIntensity=_t.intensity,Y.shadowBias=_t.bias,Y.shadowNormalBias=_t.normalBias,Y.shadowRadius=_t.radius,Y.shadowMapSize=_t.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=mt,n.directionalShadowMatrix[m]=T.shadow.matrix,w++}n.directional[m]=lt,m++}else if(T.isSpotLight){const lt=t.get(T);lt.position.setFromMatrixPosition(T.matrixWorld),lt.color.copy(K).multiplyScalar(rt),lt.distance=nt,lt.coneCos=Math.cos(T.angle),lt.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),lt.decay=T.decay,n.spot[E]=lt;const _t=T.shadow;if(T.map&&(n.spotLightMap[v]=T.map,v++,_t.updateMatrices(T),T.castShadow&&N++),n.spotLightMatrix[E]=_t.matrix,T.castShadow){const Y=e.get(T);Y.shadowIntensity=_t.intensity,Y.shadowBias=_t.bias,Y.shadowNormalBias=_t.normalBias,Y.shadowRadius=_t.radius,Y.shadowMapSize=_t.mapSize,n.spotShadow[E]=Y,n.spotShadowMap[E]=mt,k++}E++}else if(T.isRectAreaLight){const lt=t.get(T);lt.color.copy(K).multiplyScalar(rt),lt.halfWidth.set(T.width*.5,0,0),lt.halfHeight.set(0,T.height*.5,0),n.rectArea[L]=lt,L++}else if(T.isPointLight){const lt=t.get(T);if(lt.color.copy(T.color).multiplyScalar(T.intensity),lt.distance=T.distance,lt.decay=T.decay,T.castShadow){const _t=T.shadow,Y=e.get(T);Y.shadowIntensity=_t.intensity,Y.shadowBias=_t.bias,Y.shadowNormalBias=_t.normalBias,Y.shadowRadius=_t.radius,Y.shadowMapSize=_t.mapSize,Y.shadowCameraNear=_t.camera.near,Y.shadowCameraFar=_t.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=mt,n.pointShadowMatrix[p]=T.shadow.matrix,I++}n.point[p]=lt,p++}else if(T.isHemisphereLight){const lt=t.get(T);lt.skyColor.copy(T.color).multiplyScalar(rt),lt.groundColor.copy(T.groundColor).multiplyScalar(rt),n.hemi[M]=lt,M++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;const Z=n.hash;(Z.sunLength!==d||Z.directionalLength!==m||Z.pointLength!==p||Z.spotLength!==E||Z.rectAreaLength!==L||Z.hemiLength!==M||Z.numSunShadows!==_||Z.numDirectionalShadows!==w||Z.numPointShadows!==I||Z.numSpotShadows!==k||Z.numSpotMaps!==v||Z.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=E,n.rectArea.length=L,n.point.length=p,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=k,n.spotShadowMap.length=k,n.spotLightMatrix.length=k+v-N,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,Z.sunLength=d,Z.directionalLength=m,Z.pointLength=p,Z.spotLength=E,Z.rectAreaLength=L,Z.hemiLength=M,Z.numSunShadows=_,Z.numDirectionalShadows=w,Z.numPointShadows=I,Z.numSpotShadows=k,Z.numSpotMaps=v,Z.numLightProbes=P,n.version=Q0++)}function l(c,f){let h=0,u=0,d=0,_=0,A=0,m=0;const p=f.matrixWorldInverse;for(let E=0,L=c.length;E<L;E++){const M=c[E];if(M.isSunLight){const w=n.sun[h];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),h++}else if(M.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),u++}else if(M.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const w=n.rectArea[A];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),A++}else if(M.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function ic(i){const t=new tg(i),e=[],n=[],r=[];function s(u){h.camera=u,e.length=0,n.length=0,r.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){t.setup(e)}function f(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function eg(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ic(i),t.set(r,[o])):s>=a.length?(o=new ic(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rg=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],sg=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],rc=new ae,er=new J,fa=new J;function ag(i,t,e){let n=new Mo;const r=new Tt,s=new Tt,a=new _e,o=new dh,l=new ph,c={},f=e.maxTextureSize,h={[ni]:Be,[Be]:ni,[Re]:Re},u=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new he;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new se(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let p=this.type;this.render=function(I,k,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;this.type===Eu&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);const N=i.getRenderTarget(),P=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Tn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const F=p!==this.type;F&&k.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(K=>K.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,K=I.length;T<K;T++){const rt=I[T],nt=rt.shadow;if(nt===void 0){Jt("WebGLShadowMap:",rt,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);const mt=nt.getFrameExtents();r.multiply(mt),s.copy(nt.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/mt.x),r.x=s.x*mt.x,nt.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/mt.y),r.y=s.y*mt.y,nt.mapSize.y=s.y));const lt=i.state.buffers.depth.getReversed();if(nt.camera._reversedDepth=lt,nt.map===null||F===!0){if(nt.map!==null&&(nt.map.depthTexture!==null&&(nt.map.depthTexture.dispose(),nt.map.depthTexture=null),nt.map.dispose()),this.type===ir){if(rt.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}nt.map=new an(r.x,r.y,{format:ri,type:gn,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),nt.map.texture.name=rt.name+".shadowMap",nt.map.depthTexture=new mr(r.x,r.y,rn),nt.map.depthTexture.name=rt.name+".shadowMapDepth",nt.map.depthTexture.format=Pn,nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=Ie,nt.map.depthTexture.magFilter=Ie}else rt.isPointLight?(nt.map=new ru(r.x),nt.map.depthTexture=new Pf(r.x,mn)):(nt.map=new an(r.x,r.y),nt.map.depthTexture=new mr(r.x,r.y,mn)),nt.map.depthTexture.name=rt.name+".shadowMap",nt.map.depthTexture.format=Pn,this.type===ar?(nt.map.depthTexture.compareFunction=lt?mo:po,nt.map.depthTexture.minFilter=Ce,nt.map.depthTexture.magFilter=Ce):(nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=Ie,nt.map.depthTexture.magFilter=Ie);nt.camera.updateProjectionMatrix()}nt.map.isWebGLCubeRenderTarget!==!0&&(nt.map.width!==r.x||nt.map.height!==r.y)&&nt.map.setSize(r.x,r.y);const _t=nt.map.isWebGLCubeRenderTarget?6:nt.getViewportCount();rt.isPointLight!==!0&&nt.updateMatrices(rt,v);for(let Y=0;Y<_t;Y++){const $=nt.getCamera(Y);if(rt.isPointLight){const Q=nt.camera,O=nt.matrix,g=rt.distance||Q.far;g!==Q.far&&(Q.far=g,Q.updateProjectionMatrix()),er.setFromMatrixPosition(rt.matrixWorld),Q.position.copy(er),fa.copy(Q.position),fa.add(rg[Y]),Q.up.copy(sg[Y]),Q.lookAt(fa),Q.updateMatrixWorld(),O.makeTranslation(-er.x,-er.y,-er.z),rc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),nt._frustum.setFromProjectionMatrix(rc,Q.coordinateSystem,Q.reversedDepth)}if(nt.map.isWebGLCubeRenderTarget)i.setRenderTarget(nt.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(nt.map),i.clear());const Q=nt.getViewport(Y);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),C.viewport(a)}n=nt.getFrustum(Y),M(k,v,$,rt,this.type)}nt.isPointLightShadow!==!0&&this.type===ir&&E(nt,v),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,P,Z)};function E(I,k){const v=t.update(A);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null?I.mapPass=new an(r.x,r.y,{format:ri,type:gn}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(k,null,v,u,A,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(k,null,v,d,A,null)}function L(I,k,v,N){let P=null;const Z=v.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Z!==void 0)P=Z;else if(P=v.isPointLight===!0?l:o,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const C=P.uuid,F=k.uuid;let T=c[C];T===void 0&&(T={},c[C]=T);let K=T[F];K===void 0&&(K=P.clone(),T[F]=K,k.addEventListener("dispose",w)),P=K}if(P.visible=k.visible,P.wireframe=k.wireframe,N===ir?P.side=k.shadowSide!==null?k.shadowSide:k.side:P.side=k.shadowSide!==null?k.shadowSide:h[k.side],P.alphaMap=k.alphaMap,P.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,P.map=k.map,P.clipShadows=k.clipShadows,P.clippingPlanes=k.clippingPlanes,P.clipIntersection=k.clipIntersection,P.displacementMap=k.displacementMap,P.displacementScale=k.displacementScale,P.displacementBias=k.displacementBias,P.wireframeLinewidth=k.wireframeLinewidth,P.linewidth=k.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const C=i.properties.get(P);C.light=v}return P}function M(I,k,v,N,P){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&P===ir)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,I.matrixWorld);const F=t.update(I),T=I.material;if(Array.isArray(T)){const K=F.groups;for(let rt=0,nt=K.length;rt<nt;rt++){const mt=K[rt],lt=T[mt.materialIndex];if(lt&&lt.visible){const _t=L(I,lt,N,P);I.onBeforeShadow(i,I,k,v,F,_t,mt),i.renderBufferDirect(v,null,F,_t,I,mt),I.onAfterShadow(i,I,k,v,F,_t,mt)}}}else if(T.visible){const K=L(I,T,N,P);I.onBeforeShadow(i,I,k,v,F,K,null),i.renderBufferDirect(v,null,F,K,I,null),I.onAfterShadow(i,I,k,v,F,K,null)}}const C=I.children;for(let F=0,T=C.length;F<T;F++)M(C[F],k,v,N,P)}function w(I){I.target.removeEventListener("dispose",w);for(const v in c){const N=c[v],P=I.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function og(i,t){function e(){let j=!1;const Pt=new _e;let vt=null;const Lt=new _e(0,0,0,0);return{setMask:function(Ut){vt!==Ut&&!j&&(i.colorMask(Ut,Ut,Ut,Ut),vt=Ut)},setLocked:function(Ut){j=Ut},setClear:function(Ut,bt,Xt,Ht,pe){pe===!0&&(Ut*=Ht,bt*=Ht,Xt*=Ht),Pt.set(Ut,bt,Xt,Ht),Lt.equals(Pt)===!1&&(i.clearColor(Ut,bt,Xt,Ht),Lt.copy(Pt))},reset:function(){j=!1,vt=null,Lt.set(-1,0,0,0)}}}function n(){let j=!1,Pt=!1,vt=null,Lt=null,Ut=null;return{setReversed:function(bt){if(Pt!==bt){const Xt=t.get("EXT_clip_control");bt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Pt=bt;const Ht=Ut;Ut=null,this.setClear(Ht)}},getReversed:function(){return Pt},setTest:function(bt){bt?U(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(bt){vt!==bt&&!j&&(i.depthMask(bt),vt=bt)},setFunc:function(bt){if(Pt&&(bt=sf[bt]),Lt!==bt){switch(bt){case da:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=bt}},setLocked:function(bt){j=bt},setClear:function(bt){Ut!==bt&&(Ut=bt,Pt&&(bt=1-bt),i.clearDepth(bt))},reset:function(){j=!1,vt=null,Lt=null,Ut=null,Pt=!1}}}function r(){let j=!1,Pt=null,vt=null,Lt=null,Ut=null,bt=null,Xt=null,Ht=null,pe=null;return{setTest:function(oe){j||(oe?U(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(oe){Pt!==oe&&!j&&(i.stencilMask(oe),Pt=oe)},setFunc:function(oe,je,on){(vt!==oe||Lt!==je||Ut!==on)&&(i.stencilFunc(oe,je,on),vt=oe,Lt=je,Ut=on)},setOp:function(oe,je,on){(bt!==oe||Xt!==je||Ht!==on)&&(i.stencilOp(oe,je,on),bt=oe,Xt=je,Ht=on)},setLocked:function(oe){j=oe},setClear:function(oe){pe!==oe&&(i.clearStencil(oe),pe=oe)},reset:function(){j=!1,Pt=null,vt=null,Lt=null,Ut=null,bt=null,Xt=null,Ht=null,pe=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},d=new WeakMap,_=[],A=null,m=!1,p=null,E=null,L=null,M=null,w=null,I=null,k=null,v=new qt(0,0,0),N=0,P=!1,Z=null,C=null,F=null,T=null,K=null;const rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,mt=0;const lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(lt)[1]),nt=mt>=1):lt.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),nt=mt>=2);let _t=null,Y={};const $=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),O=new _e().fromArray($),g=new _e().fromArray(Q);function S(j,Pt,vt,Lt){const Ut=new Uint8Array(4),bt=i.createTexture();i.bindTexture(j,bt),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<vt;Xt++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Pt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return bt}const y={};y[i.TEXTURE_2D]=S(i.TEXTURE_2D,i.TEXTURE_2D,1),y[i.TEXTURE_CUBE_MAP]=S(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),y[i.TEXTURE_2D_ARRAY]=S(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),y[i.TEXTURE_3D]=S(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(i.DEPTH_TEST),a.setFunc(ur),R(!1),it(Ko),U(i.CULL_FACE),W(Tn);function U(j){f[j]!==!0&&(i.enable(j),f[j]=!0)}function V(j){f[j]!==!1&&(i.disable(j),f[j]=!1)}function ut(j,Pt){return u[j]!==Pt?(i.bindFramebuffer(j,Pt),u[j]=Pt,j===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pt),j===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Mt(j,Pt){let vt=_,Lt=!1;if(j){vt=d.get(Pt),vt===void 0&&(vt=[],d.set(Pt,vt));const Ut=j.textures;if(vt.length!==Ut.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Xt=Ut.length;bt<Xt;bt++)vt[bt]=i.COLOR_ATTACHMENT0+bt;vt.length=Ut.length,Lt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(vt)}function Ct(j){return A!==j?(i.useProgram(j),A=j,!0):!1}const kt={[Ii]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};kt[Ru]=i.MIN,kt[Cu]=i.MAX;const D={[Pu]:i.ZERO,[Lu]:i.ONE,[Iu]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function W(j,Pt,vt,Lt,Ut,bt,Xt,Ht,pe,oe){if(j===Tn){m===!0&&(V(i.BLEND),m=!1);return}if(m===!1&&(U(i.BLEND),m=!0),j!==wu){if(j!==p||oe!==P){if((E!==Ii||w!==Ii)&&(i.blendEquation(i.FUNC_ADD),E=Ii,w=Ii),oe)switch(j){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",j);break}else switch(j){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $o:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",j);break}L=null,M=null,I=null,k=null,v.set(0,0,0),N=0,p=j,P=oe}return}Ut=Ut||Pt,bt=bt||vt,Xt=Xt||Lt,(Pt!==E||Ut!==w)&&(i.blendEquationSeparate(kt[Pt],kt[Ut]),E=Pt,w=Ut),(vt!==L||Lt!==M||bt!==I||Xt!==k)&&(i.blendFuncSeparate(D[vt],D[Lt],D[bt],D[Xt]),L=vt,M=Lt,I=bt,k=Xt),(Ht.equals(v)===!1||pe!==N)&&(i.blendColor(Ht.r,Ht.g,Ht.b,pe),v.copy(Ht),N=pe),p=j,P=!1}function X(j,Pt){j.side===Re?V(i.CULL_FACE):U(i.CULL_FACE);let vt=j.side===Be;Pt&&(vt=!vt),R(vt),j.blending===or&&j.transparent===!1?W(Tn):W(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),s.setMask(j.colorWrite);const Lt=j.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(j.stencilWriteMask),o.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),o.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),pt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function R(j){Z!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),Z=j)}function it(j){j!==yu?(U(i.CULL_FACE),j!==C&&(j===Ko?i.cullFace(i.BACK):j===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),C=j}function ft(j){j!==F&&(nt&&i.lineWidth(j),F=j)}function pt(j,Pt,vt){j?(U(i.POLYGON_OFFSET_FILL),(T!==Pt||K!==vt)&&(T=Pt,K=vt,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,vt))):V(i.POLYGON_OFFSET_FILL)}function St(j){j?U(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function yt(j){j===void 0&&(j=i.TEXTURE0+rt-1),_t!==j&&(i.activeTexture(j),_t=j)}function H(j,Pt,vt){vt===void 0&&(_t===null?vt=i.TEXTURE0+rt-1:vt=_t);let Lt=Y[vt];Lt===void 0&&(Lt={type:void 0,texture:void 0},Y[vt]=Lt),(Lt.type!==j||Lt.texture!==Pt)&&(_t!==vt&&(i.activeTexture(vt),_t=vt),i.bindTexture(j,Pt||y[j]),Lt.type=j,Lt.texture=Pt)}function Zt(){const j=Y[_t];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(j){ie("WebGLState:",j)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(j){ie("WebGLState:",j)}}function x(){try{i.texSubImage2D(...arguments)}catch(j){ie("WebGLState:",j)}}function st(){try{i.texSubImage3D(...arguments)}catch(j){ie("WebGLState:",j)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(j){ie("WebGLState:",j)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(j){ie("WebGLState:",j)}}function At(){try{i.texStorage2D(...arguments)}catch(j){ie("WebGLState:",j)}}function Rt(){try{i.texStorage3D(...arguments)}catch(j){ie("WebGLState:",j)}}function z(){try{i.texImage2D(...arguments)}catch(j){ie("WebGLState:",j)}}function q(){try{i.texImage3D(...arguments)}catch(j){ie("WebGLState:",j)}}function et(j){return h[j]!==void 0?h[j]:i.getParameter(j)}function G(j,Pt){h[j]!==Pt&&(i.pixelStorei(j,Pt),h[j]=Pt)}function ht(j){O.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),O.copy(j))}function xt(j){g.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),g.copy(j))}function Et(j,Pt){let vt=c.get(Pt);vt===void 0&&(vt=new WeakMap,c.set(Pt,vt));let Lt=vt.get(j);Lt===void 0&&(Lt=i.getUniformBlockIndex(Pt,j.name),vt.set(j,Lt))}function wt(j,Pt){const Lt=c.get(Pt).get(j);l.get(Pt)!==Lt&&(i.uniformBlockBinding(Pt,Lt,j.__bindingPointIndex),l.set(Pt,Lt))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},_t=null,Y={},u={},d=new WeakMap,_=[],A=null,m=!1,p=null,E=null,L=null,M=null,w=null,I=null,k=null,v=new qt(0,0,0),N=0,P=!1,Z=null,C=null,F=null,T=null,K=null,O.set(0,0,i.canvas.width,i.canvas.height),g.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:U,disable:V,bindFramebuffer:ut,drawBuffers:Mt,useProgram:Ct,setBlending:W,setMaterial:X,setFlipSided:R,setCullFace:it,setLineWidth:ft,setPolygonOffset:pt,setScissorTest:St,activeTexture:yt,bindTexture:H,unbindTexture:Zt,compressedTexImage2D:Yt,compressedTexImage3D:B,texImage2D:z,texImage3D:q,pixelStorei:G,getParameter:et,updateUBOMapping:Et,uniformBlockBinding:wt,texStorage2D:At,texStorage3D:Rt,texSubImage2D:x,texSubImage3D:st,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:ht,viewport:xt,reset:It}}function lg(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,f=new WeakMap,h=new Set;let u;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(B,x){return _?new OffscreenCanvas(B,x):pr("canvas")}function m(B,x,st){let ct=1;const gt=Yt(B);if((gt.width>st||gt.height>st)&&(ct=st/Math.max(gt.width,gt.height)),ct<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const At=Math.floor(ct*gt.width),Rt=Math.floor(ct*gt.height);u===void 0&&(u=A(At,Rt));const z=x?A(At,Rt):u;return z.width=At,z.height=Rt,z.getContext("2d").drawImage(B,0,0,At,Rt),Jt("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+At+"x"+Rt+")."),z}else return"data"in B&&Jt("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),B;return B}function p(B){return B.generateMipmaps}function E(B){i.generateMipmap(B)}function L(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(B,x,st,ct,gt,At=!1){if(B!==null){if(i[B]!==void 0)return i[B];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Rt;ct&&(Rt=t.get("EXT_texture_norm16"),Rt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=x;if(x===i.RED&&(st===i.FLOAT&&(z=i.R32F),st===i.HALF_FLOAT&&(z=i.R16F),st===i.UNSIGNED_BYTE&&(z=i.R8),st===i.UNSIGNED_SHORT&&Rt&&(z=Rt.R16_EXT),st===i.SHORT&&Rt&&(z=Rt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(z=i.R8UI),st===i.UNSIGNED_SHORT&&(z=i.R16UI),st===i.UNSIGNED_INT&&(z=i.R32UI),st===i.BYTE&&(z=i.R8I),st===i.SHORT&&(z=i.R16I),st===i.INT&&(z=i.R32I)),x===i.RG&&(st===i.FLOAT&&(z=i.RG32F),st===i.HALF_FLOAT&&(z=i.RG16F),st===i.UNSIGNED_BYTE&&(z=i.RG8),st===i.UNSIGNED_SHORT&&Rt&&(z=Rt.RG16_EXT),st===i.SHORT&&Rt&&(z=Rt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(z=i.RG8UI),st===i.UNSIGNED_SHORT&&(z=i.RG16UI),st===i.UNSIGNED_INT&&(z=i.RG32UI),st===i.BYTE&&(z=i.RG8I),st===i.SHORT&&(z=i.RG16I),st===i.INT&&(z=i.RG32I)),x===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(z=i.RGB8UI),st===i.UNSIGNED_SHORT&&(z=i.RGB16UI),st===i.UNSIGNED_INT&&(z=i.RGB32UI),st===i.BYTE&&(z=i.RGB8I),st===i.SHORT&&(z=i.RGB16I),st===i.INT&&(z=i.RGB32I)),x===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),st===i.UNSIGNED_INT&&(z=i.RGBA32UI),st===i.BYTE&&(z=i.RGBA8I),st===i.SHORT&&(z=i.RGBA16I),st===i.INT&&(z=i.RGBA32I)),x===i.RGB&&(st===i.UNSIGNED_SHORT&&Rt&&(z=Rt.RGB16_EXT),st===i.SHORT&&Rt&&(z=Rt.RGB16_SNORM_EXT),st===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),st===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),x===i.RGBA){const q=At?ds:ne.getTransfer(gt);st===i.FLOAT&&(z=i.RGBA32F),st===i.HALF_FLOAT&&(z=i.RGBA16F),st===i.UNSIGNED_BYTE&&(z=q===ce?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT&&Rt&&(z=Rt.RGBA16_EXT),st===i.SHORT&&Rt&&(z=Rt.RGBA16_SNORM_EXT),st===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function w(B,x){let st;return B?x===null||x===mn||x===hr?st=i.DEPTH24_STENCIL8:x===rn?st=i.DEPTH32F_STENCIL8:x===fr&&(st=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mn||x===hr?st=i.DEPTH_COMPONENT24:x===rn?st=i.DEPTH_COMPONENT32F:x===fr&&(st=i.DEPTH_COMPONENT16),st}function I(B,x){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ie&&B.minFilter!==Ce?Math.log2(Math.max(x.width,x.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?x.mipmaps.length:1}function k(B){const x=B.target;x.removeEventListener("dispose",k),N(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function v(B){const x=B.target;x.removeEventListener("dispose",v),Z(x)}function N(B){const x=n.get(B);if(x.__webglInit===void 0)return;const st=B.source,ct=d.get(st);if(ct){const gt=ct[x.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&P(B),Object.keys(ct).length===0&&d.delete(st)}n.remove(B)}function P(B){const x=n.get(B);i.deleteTexture(x.__webglTexture);const st=B.source,ct=d.get(st);delete ct[x.__cacheKey],a.memory.textures--}function Z(B){const x=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(x.__webglFramebuffer[ct]))for(let gt=0;gt<x.__webglFramebuffer[ct].length;gt++)i.deleteFramebuffer(x.__webglFramebuffer[ct][gt]);else i.deleteFramebuffer(x.__webglFramebuffer[ct]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ct])}else{if(Array.isArray(x.__webglFramebuffer))for(let ct=0;ct<x.__webglFramebuffer.length;ct++)i.deleteFramebuffer(x.__webglFramebuffer[ct]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ct=0;ct<x.__webglColorRenderbuffer.length;ct++)x.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ct]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const st=B.textures;for(let ct=0,gt=st.length;ct<gt;ct++){const At=n.get(st[ct]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),a.memory.textures--),n.remove(st[ct])}n.remove(B)}let C=0;function F(){C=0}function T(){return C}function K(B){C=B}function rt(){const B=C;return B>=r.maxTextures&&Jt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),C+=1,B}function nt(B){const x=[];return x.push(B.wrapS),x.push(B.wrapT),x.push(B.wrapR||0),x.push(B.magFilter),x.push(B.minFilter),x.push(B.anisotropy),x.push(B.internalFormat),x.push(B.format),x.push(B.type),x.push(B.generateMipmaps),x.push(B.premultiplyAlpha),x.push(B.flipY),x.push(B.unpackAlignment),x.push(B.colorSpace),x.join()}function mt(B,x){const st=n.get(B);if(B.isVideoTexture&&H(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&st.__version!==B.version){const ct=B.image;if(ct===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(st,B,x);return}}else B.isExternalTexture&&(st.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+x)}function lt(B,x){const st=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&st.__version!==B.version){V(st,B,x);return}else B.isExternalTexture&&(st.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+x)}function _t(B,x){const st=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&st.__version!==B.version){V(st,B,x);return}e.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+x)}function Y(B,x){const st=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&st.__version!==B.version){ut(st,B,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+x)}const $={[ls]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},Q={[Ie]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[Ps]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},O={[Ju]:i.NEVER,[tf]:i.ALWAYS,[Ku]:i.LESS,[po]:i.LEQUAL,[$u]:i.EQUAL,[mo]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function g(B,x){if(x.type===rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ce||x.magFilter===Ps||x.magFilter===Er||x.magFilter===jn||x.minFilter===Ce||x.minFilter===Ps||x.minFilter===Er||x.minFilter===jn)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,$[x.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,$[x.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,$[x.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Q[x.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,O[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ie||x.minFilter!==Er&&x.minFilter!==jn||x.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function S(B,x){let st=!1;B.__webglInit===void 0&&(B.__webglInit=!0,x.addEventListener("dispose",k));const ct=x.source;let gt=d.get(ct);gt===void 0&&(gt={},d.set(ct,gt));const At=nt(x);if(At!==B.__cacheKey){gt[At]===void 0&&(gt[At]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,st=!0),gt[At].usedTimes++;const Rt=gt[B.__cacheKey];Rt!==void 0&&(gt[B.__cacheKey].usedTimes--,Rt.usedTimes===0&&P(x)),B.__cacheKey=At,B.__webglTexture=gt[At].texture}return st}function y(B,x,st){return Math.floor(Math.floor(B/st)/x)}function U(B,x,st,ct){const At=B.updateRanges;if(At.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,st,ct,x.data);else{At.sort((G,ht)=>G.start-ht.start);let Rt=0;for(let G=1;G<At.length;G++){const ht=At[Rt],xt=At[G],Et=ht.start+ht.count,wt=y(xt.start,x.width,4),It=y(ht.start,x.width,4);xt.start<=Et+1&&wt===It&&y(xt.start+xt.count-1,x.width,4)===wt?ht.count=Math.max(ht.count,xt.start+xt.count-ht.start):(++Rt,At[Rt]=xt)}At.length=Rt+1;const z=e.getParameter(i.UNPACK_ROW_LENGTH),q=e.getParameter(i.UNPACK_SKIP_PIXELS),et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let G=0,ht=At.length;G<ht;G++){const xt=At[G],Et=Math.floor(xt.start/4),wt=Math.ceil(xt.count/4),It=Et%x.width,j=Math.floor(Et/x.width),Pt=wt,vt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,It),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,It,j,Pt,vt,st,ct,x.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,q),e.pixelStorei(i.UNPACK_SKIP_ROWS,et)}}function V(B,x,st){let ct=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ct=i.TEXTURE_3D);const gt=S(B,x),At=x.source;e.bindTexture(ct,B.__webglTexture,i.TEXTURE0+st);const Rt=n.get(At);if(At.version!==Rt.__version||gt===!0){if(e.activeTexture(i.TEXTURE0+st),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const vt=ne.getPrimaries(ne.workingColorSpace),Lt=x.colorSpace===Gn?null:ne.getPrimaries(x.colorSpace),Ut=x.colorSpace===Gn||vt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let q=m(x.image,!1,r.maxTextureSize);q=Zt(x,q);const et=s.convert(x.format,x.colorSpace),G=s.convert(x.type);let ht=M(x.internalFormat,et,G,x.normalized,x.colorSpace,x.isVideoTexture);g(ct,x);let xt;const Et=x.mipmaps,wt=x.isVideoTexture!==!0,It=Rt.__version===void 0||gt===!0,j=At.dataReady,Pt=I(x,q);if(x.isDepthTexture)ht=w(x.format===ti,x.type),It&&(wt?e.texStorage2D(i.TEXTURE_2D,1,ht,q.width,q.height):e.texImage2D(i.TEXTURE_2D,0,ht,q.width,q.height,0,et,G,null));else if(x.isDataTexture)if(Et.length>0){wt&&It&&e.texStorage2D(i.TEXTURE_2D,Pt,ht,Et[0].width,Et[0].height);for(let vt=0,Lt=Et.length;vt<Lt;vt++)xt=Et[vt],wt?j&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,xt.width,xt.height,et,G,xt.data):e.texImage2D(i.TEXTURE_2D,vt,ht,xt.width,xt.height,0,et,G,xt.data);x.generateMipmaps=!1}else wt?(It&&e.texStorage2D(i.TEXTURE_2D,Pt,ht,q.width,q.height),j&&U(x,q,et,G)):e.texImage2D(i.TEXTURE_2D,0,ht,q.width,q.height,0,et,G,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){wt&&It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,ht,Et[0].width,Et[0].height,q.depth);for(let vt=0,Lt=Et.length;vt<Lt;vt++)if(xt=Et[vt],x.format!==sn)if(et!==null)if(wt){if(j)if(x.layerUpdates.size>0){const Ut=Fl(xt.width,xt.height,x.format,x.type);for(const bt of x.layerUpdates){const Xt=xt.data.subarray(bt*Ut/xt.data.BYTES_PER_ELEMENT,(bt+1)*Ut/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,bt,xt.width,xt.height,1,et,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,xt.width,xt.height,q.depth,et,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,ht,xt.width,xt.height,q.depth,0,xt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,xt.width,xt.height,q.depth,et,G,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,ht,xt.width,xt.height,q.depth,0,et,G,xt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{wt&&It&&e.texStorage2D(i.TEXTURE_2D,Pt,ht,Et[0].width,Et[0].height);for(let vt=0,Lt=Et.length;vt<Lt;vt++)xt=Et[vt],x.format!==sn?et!==null?wt?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,xt.width,xt.height,et,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,ht,xt.width,xt.height,0,xt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?j&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,xt.width,xt.height,et,G,xt.data):e.texImage2D(i.TEXTURE_2D,vt,ht,xt.width,xt.height,0,et,G,xt.data)}else if(x.isDataArrayTexture)if(wt){if(It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,ht,q.width,q.height,q.depth),j)if(x.layerUpdates.size>0){const vt=Fl(q.width,q.height,x.format,x.type);for(const Lt of x.layerUpdates){const Ut=q.data.subarray(Lt*vt/q.data.BYTES_PER_ELEMENT,(Lt+1)*vt/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,q.width,q.height,1,et,G,Ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,et,G,q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,q.width,q.height,q.depth,0,et,G,q.data);else if(x.isData3DTexture)wt?(It&&e.texStorage3D(i.TEXTURE_3D,Pt,ht,q.width,q.height,q.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,et,G,q.data)):e.texImage3D(i.TEXTURE_3D,0,ht,q.width,q.height,q.depth,0,et,G,q.data);else if(x.isFramebufferTexture){if(It)if(wt)e.texStorage2D(i.TEXTURE_2D,Pt,ht,q.width,q.height);else{let vt=q.width,Lt=q.height;for(let Ut=0;Ut<Pt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,ht,vt,Lt,0,et,G,null),vt>>=1,Lt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const vt=i.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),q.parentNode!==vt){vt.appendChild(q),h.add(x),vt.onpaint=Lt=>{const Ut=Lt.changedElements;for(const bt of h)Ut.includes(bt.image)&&(bt.needsUpdate=!0)},vt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{const Ut=i.RGBA,bt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,bt,Xt,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(wt&&It){const vt=Yt(Et[0]);e.texStorage2D(i.TEXTURE_2D,Pt,ht,vt.width,vt.height)}for(let vt=0,Lt=Et.length;vt<Lt;vt++)xt=Et[vt],wt?j&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,et,G,xt):e.texImage2D(i.TEXTURE_2D,vt,ht,et,G,xt);x.generateMipmaps=!1}else if(wt){if(It){const vt=Yt(q);e.texStorage2D(i.TEXTURE_2D,Pt,ht,vt.width,vt.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et,G,q)}else e.texImage2D(i.TEXTURE_2D,0,ht,et,G,q);p(x)&&E(ct),Rt.__version=At.version,x.onUpdate&&x.onUpdate(x)}B.__version=x.version}function ut(B,x,st){if(x.image.length!==6)return;const ct=S(B,x),gt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+st);const At=n.get(gt);if(gt.version!==At.__version||ct===!0){e.activeTexture(i.TEXTURE0+st);const Rt=ne.getPrimaries(ne.workingColorSpace),z=x.colorSpace===Gn?null:ne.getPrimaries(x.colorSpace),q=x.colorSpace===Gn||Rt===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const et=x.isCompressedTexture||x.image[0].isCompressedTexture,G=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let bt=0;bt<6;bt++)!et&&!G?ht[bt]=m(x.image[bt],!0,r.maxCubemapSize):ht[bt]=G?x.image[bt].image:x.image[bt],ht[bt]=Zt(x,ht[bt]);const xt=ht[0],Et=s.convert(x.format,x.colorSpace),wt=s.convert(x.type),It=M(x.internalFormat,Et,wt,x.normalized,x.colorSpace),j=x.isVideoTexture!==!0,Pt=At.__version===void 0||ct===!0,vt=gt.dataReady;let Lt=I(x,xt);g(i.TEXTURE_CUBE_MAP,x);let Ut;if(et){j&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,It,xt.width,xt.height);for(let bt=0;bt<6;bt++){Ut=ht[bt].mipmaps;for(let Xt=0;Xt<Ut.length;Xt++){const Ht=Ut[Xt];x.format!==sn?Et!==null?j?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt,0,0,Ht.width,Ht.height,Et,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt,It,Ht.width,Ht.height,0,Ht.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt,0,0,Ht.width,Ht.height,Et,wt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt,It,Ht.width,Ht.height,0,Et,wt,Ht.data)}}}else{if(Ut=x.mipmaps,j&&Pt){Ut.length>0&&Lt++;const bt=Yt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,It,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(G){j?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ht[bt].width,ht[bt].height,Et,wt,ht[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,It,ht[bt].width,ht[bt].height,0,Et,wt,ht[bt].data);for(let Xt=0;Xt<Ut.length;Xt++){const pe=Ut[Xt].image[bt].image;j?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt+1,0,0,pe.width,pe.height,Et,wt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt+1,It,pe.width,pe.height,0,Et,wt,pe.data)}}else{j?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Et,wt,ht[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,It,Et,wt,ht[bt]);for(let Xt=0;Xt<Ut.length;Xt++){const Ht=Ut[Xt];j?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt+1,0,0,Et,wt,Ht.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt+1,It,Et,wt,Ht.image[bt])}}}p(x)&&E(i.TEXTURE_CUBE_MAP),At.__version=gt.version,x.onUpdate&&x.onUpdate(x)}B.__version=x.version}function Mt(B,x,st,ct,gt,At){const Rt=s.convert(st.format,st.colorSpace),z=s.convert(st.type),q=M(st.internalFormat,Rt,z,st.normalized,st.colorSpace),et=n.get(x),G=n.get(st);if(G.__renderTarget=x,!et.__hasExternalTextures){const ht=Math.max(1,x.width>>At),xt=Math.max(1,x.height>>At);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,At,q,ht,xt,x.depth,0,Rt,z,null):e.texImage2D(gt,At,q,ht,xt,0,Rt,z,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,gt,G.__webglTexture,0,St(x)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,gt,G.__webglTexture,At),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(B,x,st){if(i.bindRenderbuffer(i.RENDERBUFFER,B),x.depthBuffer){const ct=x.depthTexture,gt=ct&&ct.isDepthTexture?ct.type:null,At=w(x.stencilBuffer,gt),Rt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(x),At,x.width,x.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(x),At,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,At,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,B)}else{const ct=x.textures;for(let gt=0;gt<ct.length;gt++){const At=ct[gt],Rt=s.convert(At.format,At.colorSpace),z=s.convert(At.type),q=M(At.internalFormat,Rt,z,At.normalized,At.colorSpace);yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(x),q,x.width,x.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(B,x,st){const ct=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=n.get(x.depthTexture);if(gt.__renderTarget=x,(!gt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ct){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,x.depthTexture.addEventListener("dispose",k)),gt.__webglTexture===void 0){gt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),g(i.TEXTURE_CUBE_MAP,x.depthTexture);const et=s.convert(x.depthTexture.format),G=s.convert(x.depthTexture.type);let ht;x.depthTexture.format===Pn?ht=i.DEPTH_COMPONENT24:x.depthTexture.format===ti&&(ht=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,x.width,x.height,0,et,G,null)}}else mt(x.depthTexture,0);const At=gt.__webglTexture,Rt=St(x),z=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+st:i.TEXTURE_2D,q=x.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Pn)yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,z,At,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,q,z,At,0);else if(x.depthTexture.format===ti)yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,z,At,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,q,z,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(B){const x=n.get(B),st=B.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==B.depthTexture){const ct=B.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ct){const gt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ct.removeEventListener("dispose",gt)};ct.addEventListener("dispose",gt),x.__depthDisposeCallback=gt}x.__boundDepthTexture=ct}if(B.depthTexture&&!x.__autoAllocateDepthBuffer)if(st)for(let ct=0;ct<6;ct++)kt(x.__webglFramebuffer[ct],B,ct);else{const ct=B.texture.mipmaps;ct&&ct.length>0?kt(x.__webglFramebuffer[0],B,0):kt(x.__webglFramebuffer,B,0)}else if(st){x.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ct]),x.__webglDepthbuffer[ct]===void 0)x.__webglDepthbuffer[ct]=i.createRenderbuffer(),Ct(x.__webglDepthbuffer[ct],B,!1);else{const gt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,At)}}else{const ct=B.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ct(x.__webglDepthbuffer,B,!1);else{const gt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,At)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(B,x,st){const ct=n.get(B);x!==void 0&&Mt(ct.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&D(B)}function X(B){const x=B.texture,st=n.get(B),ct=n.get(x);B.addEventListener("dispose",v);const gt=B.textures,At=B.isWebGLCubeRenderTarget===!0,Rt=gt.length>1;if(Rt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=x.version,a.memory.textures++),At){st.__webglFramebuffer=[];for(let z=0;z<6;z++)if(x.mipmaps&&x.mipmaps.length>0){st.__webglFramebuffer[z]=[];for(let q=0;q<x.mipmaps.length;q++)st.__webglFramebuffer[z][q]=i.createFramebuffer()}else st.__webglFramebuffer[z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){st.__webglFramebuffer=[];for(let z=0;z<x.mipmaps.length;z++)st.__webglFramebuffer[z]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let z=0,q=gt.length;z<q;z++){const et=n.get(gt[z]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(B.samples>0&&yt(B)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let z=0;z<gt.length;z++){const q=gt[z];st.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[z]);const et=s.convert(q.format,q.colorSpace),G=s.convert(q.type),ht=M(q.internalFormat,et,G,q.normalized,q.colorSpace,B.isXRRenderTarget===!0),xt=St(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,ht,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,st.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(st.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(At){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),g(i.TEXTURE_CUBE_MAP,x);for(let z=0;z<6;z++)if(x.mipmaps&&x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)Mt(st.__webglFramebuffer[z][q],B,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,q);else Mt(st.__webglFramebuffer[z],B,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);p(x)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let z=0,q=gt.length;z<q;z++){const et=gt[z],G=n.get(et);let ht=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ht=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,G.__webglTexture),g(ht,et),Mt(st.__webglFramebuffer,B,et,i.COLOR_ATTACHMENT0+z,ht,0),p(et)&&E(ht)}e.unbindTexture()}else{let z=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(z=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(z,ct.__webglTexture),g(z,x),x.mipmaps&&x.mipmaps.length>0)for(let q=0;q<x.mipmaps.length;q++)Mt(st.__webglFramebuffer[q],B,x,i.COLOR_ATTACHMENT0,z,q);else Mt(st.__webglFramebuffer,B,x,i.COLOR_ATTACHMENT0,z,0);p(x)&&E(z),e.unbindTexture()}B.depthBuffer&&D(B)}function R(B){const x=B.textures;for(let st=0,ct=x.length;st<ct;st++){const gt=x[st];if(p(gt)){const At=L(B),Rt=n.get(gt).__webglTexture;e.bindTexture(At,Rt),E(At),e.unbindTexture()}}}const it=[],ft=[];function pt(B){if(B.samples>0){if(yt(B)===!1){const x=B.textures,st=B.width,ct=B.height;let gt=i.COLOR_BUFFER_BIT;const At=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(B),z=x.length>1;if(z)for(let et=0;et<x.length;et++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const q=B.texture.mipmaps;q&&q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let et=0;et<x.length;et++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[et]);const G=n.get(x[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,st,ct,0,0,st,ct,gt,i.NEAREST),l===!0&&(it.length=0,ft.length=0,it.push(i.COLOR_ATTACHMENT0+et),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(it.push(At),ft.push(At),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let et=0;et<x.length;et++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[et]);const G=n.get(x[et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,G,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){const x=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function St(B){return Math.min(r.maxSamples,B.samples)}function yt(B){const x=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function H(B){const x=a.render.frame;f.get(B)!==x&&(f.set(B,x),B.update())}function Zt(B,x){const st=B.colorSpace,ct=B.format,gt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||st!==hs&&st!==Gn&&(ne.getTransfer(st)===ce?(ct!==sn||gt!==Ye)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",st)),x}function Yt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=rt,this.resetTextureUnits=F,this.getTextureUnits=T,this.setTextureUnits=K,this.setTexture2D=mt,this.setTexture2DArray=lt,this.setTexture3D=_t,this.setTextureCube=Y,this.rebindTextures=W,this.setupRenderTarget=X,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cg(i,t){function e(n,r=Gn){let s;const a=ne.getTransfer(r);if(n===Ye)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sc)return i.BYTE;if(n===yc)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===ao)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Tc)return i.RGB;if(n===sn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===co)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(a===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ya||n===ba||n===Ea)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===cs||n===Pa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wa||n===Ta)return a===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return s.COMPRESSED_R11_EAC;if(n===Ca)return s.COMPRESSED_SIGNED_R11_EAC;if(n===cs)return s.COMPRESSED_RG11_EAC;if(n===Pa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ga||n===Va||n===Ha||n===Wa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===La)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Xa)return a===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===us||n===Ka)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===us)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new kc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:ug,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dg extends oi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,_=null;const A=typeof XRWebGLBinding<"u",m=new hg,p={},E=e.getContextAttributes();let L=null,M=null;const w=[],I=[],k=new Tt;let v=null,N=null;const P=new qe;P.viewport=new _e;const Z=new qe;Z.viewport=new _e;const C=[P,Z],F=new Sh;let T=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let U=w[y];return U===void 0&&(U=new zs,w[y]=U),U.getTargetRaySpace()},this.getControllerGrip=function(y){let U=w[y];return U===void 0&&(U=new zs,w[y]=U),U.getGripSpace()},this.getHand=function(y){let U=w[y];return U===void 0&&(U=new zs,w[y]=U),U.getHandSpace()};function rt(y){const U=I.indexOf(y.inputSource);if(U===-1)return;const V=w[U];V!==void 0&&(V.update(y.inputSource,y.frame,c||a),V.dispatchEvent({type:y.type,data:y.inputSource}))}function nt(){r.removeEventListener("select",rt),r.removeEventListener("selectstart",rt),r.removeEventListener("selectend",rt),r.removeEventListener("squeeze",rt),r.removeEventListener("squeezestart",rt),r.removeEventListener("squeezeend",rt),r.removeEventListener("end",nt),r.removeEventListener("inputsourceschange",mt);for(let y=0;y<w.length;y++){const U=I[y];U!==null&&(I[y]=null,w[y].disconnect(U))}T=null,K=null,m.reset();for(const y in p)delete p[y];if(t.setRenderTarget(L),d=null,u=null,h=null,r=null,M=null,S.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(k.width,k.height,!1),N!==null){const y=N.camera;y.fov=N.fov,y.zoom=N.zoom,y.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){s=y,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){o=y,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(y){c=y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&A&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(y){if(r=y,r!==null){if(L=t.getRenderTarget(),r.addEventListener("select",rt),r.addEventListener("selectstart",rt),r.addEventListener("selectend",rt),r.addEventListener("squeeze",rt),r.addEventListener("squeezestart",rt),r.addEventListener("squeezeend",rt),r.addEventListener("end",nt),r.addEventListener("inputsourceschange",mt),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,ut=null,Mt=null;E.depth&&(Mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=E.stencil?ti:Pn,ut=E.stencil?hr:mn);const Ct={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ct),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new an(u.textureWidth,u.textureHeight,{format:sn,type:Ye,depthTexture:new mr(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const V={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,V),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new an(d.framebufferWidth,d.framebufferHeight,{format:sn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),S.setContext(r),S.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function mt(y){for(let U=0;U<y.removed.length;U++){const V=y.removed[U],ut=I.indexOf(V);ut>=0&&(I[ut]=null,w[ut].disconnect(V))}for(let U=0;U<y.added.length;U++){const V=y.added[U];let ut=I.indexOf(V);if(ut===-1){for(let Ct=0;Ct<w.length;Ct++)if(Ct>=I.length){I.push(V),ut=Ct;break}else if(I[Ct]===null){I[Ct]=V,ut=Ct;break}if(ut===-1)break}const Mt=w[ut];Mt&&Mt.connect(V)}}const lt=new J,_t=new J;function Y(y,U,V){lt.setFromMatrixPosition(U.matrixWorld),_t.setFromMatrixPosition(V.matrixWorld);const ut=lt.distanceTo(_t),Mt=U.projectionMatrix.elements,Ct=V.projectionMatrix.elements,kt=Mt[14]/(Mt[10]-1),D=Mt[14]/(Mt[10]+1),W=(Mt[9]+1)/Mt[5],X=(Mt[9]-1)/Mt[5],R=(Mt[8]-1)/Mt[0],it=(Ct[8]+1)/Ct[0],ft=kt*R,pt=kt*it,St=ut/(-R+it),yt=St*-R;if(U.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(yt),y.translateZ(St),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert(),Mt[10]===-1)y.projectionMatrix.copy(U.projectionMatrix),y.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const H=kt+St,Zt=D+St,Yt=ft-yt,B=pt+(ut-yt),x=W*D/Zt*H,st=X*D/Zt*H;y.projectionMatrix.makePerspective(Yt,B,x,st,H,Zt),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}}function $(y,U){U===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(U.matrixWorld,y.matrix),y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(r===null)return;let U=y.near,V=y.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(V=m.depthFar)),F.near=Z.near=P.near=U,F.far=Z.far=P.far=V,(T!==F.near||K!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),T=F.near,K=F.far),F.layers.mask=y.layers.mask|6,P.layers.mask=F.layers.mask&-5,Z.layers.mask=F.layers.mask&-3;const ut=y.parent,Mt=F.cameras;$(F,ut);for(let Ct=0;Ct<Mt.length;Ct++)$(Mt[Ct],ut);Mt.length===2?Y(F,P,Z):F.projectionMatrix.copy(P.projectionMatrix),N===null&&y.isPerspectiveCamera&&(N={camera:y,fov:y.fov,zoom:y.zoom}),Q(y,F,ut)};function Q(y,U,V){V===null?y.matrix.copy(U.matrixWorld):(y.matrix.copy(V.matrixWorld),y.matrix.invert(),y.matrix.multiply(U.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(U.projectionMatrix),y.projectionMatrixInverse.copy(U.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=$a*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(y){l=y,u!==null&&(u.fixedFoveation=y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(y){return p[y]};let O=null;function g(y,U){if(f=U.getViewerPose(c||a),_=U,f!==null){const V=f.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ut=!1;V.length!==F.cameras.length&&(F.cameras.length=0,ut=!0);for(let D=0;D<V.length;D++){const W=V[D];let X=null;if(d!==null)X=d.getViewport(W);else{const it=h.getViewSubImage(u,W);X=it.viewport,D===0&&(t.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(M))}let R=C[D];R===void 0&&(R=new qe,R.layers.enable(D),R.viewport=new _e,C[D]=R),R.matrix.fromArray(W.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(W.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(X.x,X.y,X.width,X.height),D===0&&(F.matrix.copy(R.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ut===!0&&F.cameras.push(R)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){h=n.getBinding();const D=h.getDepthInformation(V[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(Mt&&Mt.includes("camera-access")&&A){t.state.unbindTexture(),h=n.getBinding();for(let D=0;D<V.length;D++){const W=V[D].camera;if(W){let X=p[W];X||(X=new kc,p[W]=X);const R=h.getCameraImage(W);X.sourceTexture=R}}}}for(let V=0;V<w.length;V++){const ut=I[V],Mt=w[V];ut!==null&&Mt!==void 0&&Mt.update(ut,U,c||a)}O&&O(y,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),_=null}const S=new nu;S.setAnimationLoop(g),this.setAnimationLoop=function(y){O=y},this.dispose=function(){}}}const pg=new ae,cu=new Kt;cu.set(-1,0,0,0,1,0,0,0,1);function mg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,L,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),A(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,L):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),L=E.envMap,M=E.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,L){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=L*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function gg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const I=w.program;n.uniformBlockBinding(M,I)}function c(M,w){let I=r[M.id];I===void 0&&(m(M),I=f(M),r[M.id]=I,M.addEventListener("dispose",E));const k=w.program;n.updateUBOMapping(M,k);const v=t.render.frame;s[M.id]!==v&&(u(M),s[M.id]=v)}function f(M){const w=h();M.__bindingPointIndex=w;const I=i.createBuffer(),k=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,k,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,I),I}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const w=r[M.id],I=M.uniforms,k=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,N=I.length;v<N;v++){const P=I[v];if(Array.isArray(P))for(let Z=0,C=P.length;Z<C;Z++)d(P[Z],v,Z,k);else d(P,v,0,k)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,w,I,k){if(A(M,w,I,k)===!0){const v=M.__offset,N=M.value;if(Array.isArray(N)){let P=0;for(let Z=0;Z<N.length;Z++){const C=N[Z],F=p(C);_(C,M.__data,P),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(N,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function _(M,w,I){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,I)}function A(M,w,I,k){const v=M.value,N=w+"_"+I;if(k[N]===void 0)return typeof v=="number"||typeof v=="boolean"?k[N]=v:ArrayBuffer.isView(v)?k[N]=v.slice():k[N]=v.clone(),!0;{const P=k[N];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return k[N]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(M){const w=M.uniforms;let I=0;const k=16;for(let N=0,P=w.length;N<P;N++){const Z=Array.isArray(w[N])?w[N]:[w[N]];for(let C=0,F=Z.length;C<F;C++){const T=Z[C],K=Array.isArray(T.value)?T.value:[T.value];for(let rt=0,nt=K.length;rt<nt;rt++){const mt=K[rt],lt=p(mt),_t=I%k,Y=_t%lt.boundary,$=_t+Y;I+=Y,$!==0&&k-$<lt.storage&&(I+=k-$),T.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=I,I+=lt.storage}}}const v=I%k;return v>0&&(I+=k-v),M.__size=I,M.__cache={},this}function p(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",M),w}function E(M){const w=M.target;w.removeEventListener("dispose",E);const I=a.indexOf(w.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function L(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:L}}const _g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function vg(){return un===null&&(un=new Oc(_g,16,16,ri,gn),un.name="DFG_LUT",un.minFilter=Ce,un.magFilter=Ce,un.wrapS=wn,un.wrapT=wn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class xg{constructor(t={}){const{canvas:e=nf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ye}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const A=d,m=new Set([ho,fo,uo]),p=new Set([Ye,mn,fr,hr,oo,lo]),E=new Uint32Array(4),L=new Int32Array(4),M=new J;let w=null,I=null;const k=[],v=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let Z=!1,C=null,F=null,T=null,K=null;this._outputColorSpace=Le;let rt=0,nt=0,mt=null,lt=-1,_t=null;const Y=new _e,$=new _e;let Q=null;const O=new qt(0);let g=0,S=e.width,y=e.height,U=1,V=null,ut=null;const Mt=new _e(0,0,S,y),Ct=new _e(0,0,S,y);let kt=!1;const D=new Mo;let W=!1,X=!1;const R=new ae,it=new J,ft=new _e,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function yt(){return mt===null?U:1}let H=n;function Zt(b,tt){return e.getContext(b,tt)}let Yt,B,x,st,ct,gt,At,Rt,z,q,et,G,ht,xt,Et,wt,It,j,Pt,vt,Lt,Ut,bt;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",je,!1),H===null){const tt="webgl2";if(H=Zt(tt,b),H===null)throw Zt(tt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(b){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",je,!1),ie("WebGLRenderer: "+b.message),b}function Xt(){Yt=new vm(H),Yt.init(),Lt=new cg(H,Yt),B=new lm(H,Yt,t,Lt),x=new og(H,Yt),B.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),F=H.createFramebuffer(),T=H.createFramebuffer(),K=H.createFramebuffer(),st=new Sm(H),ct=new Y0,gt=new lg(H,Yt,x,ct,B,Lt,st),At=new _m(P),Rt=new bh(H),Ut=new am(H,Rt),z=new xm(H,Rt,st,Ut),q=new bm(H,z,Rt,Ut,st),j=new ym(H,B,gt),Et=new cm(ct),et=new q0(P,At,Yt,B,Ut,Et),G=new mg(P,ct),ht=new J0,xt=new eg(Yt),It=new sm(P,At,x,q,_,l),wt=new ag(P,q,B),bt=new gg(H,st,B,x),Pt=new om(H,Yt,st),vt=new Mm(H,Yt,st),st.programs=et.programs,P.capabilities=B,P.extensions=Yt,P.properties=ct,P.renderLists=ht,P.shadowMap=wt,P.state=x,P.info=st}A!==Ye&&(N=new wm(A,e.width,e.height,o,r,s));const Ht=new dg(P,H);this.xr=Ht,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(S,y,!1))},this.getSize=function(b){return b.set(S,y)},this.setSize=function(b,tt,dt=!0){if(Ht.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}S=b,y=tt,e.width=Math.floor(b*U),e.height=Math.floor(tt*U),dt===!0&&(e.style.width=b+"px",e.style.height=tt+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,b,tt)},this.getDrawingBufferSize=function(b){return b.set(S*U,y*U).floor()},this.setDrawingBufferSize=function(b,tt,dt){S=b,y=tt,U=dt,e.width=Math.floor(b*dt),e.height=Math.floor(tt*dt),this.setViewport(0,0,b,tt)},this.setEffects=function(b){if(A===Ye){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let tt=0;tt<b.length;tt++)if(b[tt].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Y)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,tt,dt,at){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,tt,dt,at),x.viewport(Y.copy(Mt).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,tt,dt,at){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,tt,dt,at),x.scissor($.copy(Ct).multiplyScalar(U).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){x.setScissorTest(kt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){ut=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(b=!0,tt=!0,dt=!0){let at=0;if(b){let ot=!1;if(mt!==null){const Ft=mt.texture.format;ot=m.has(Ft)}if(ot){const Ft=mt.texture.type,zt=p.has(Ft),Nt=It.getClearColor(),Gt=It.getClearAlpha(),Wt=Nt.r,Qt=Nt.g,te=Nt.b;zt?(E[0]=Wt,E[1]=Qt,E[2]=te,E[3]=Gt,H.clearBufferuiv(H.COLOR,0,E)):(L[0]=Wt,L[1]=Qt,L[2]=te,L[3]=Gt,H.clearBufferiv(H.COLOR,0,L))}else at|=H.COLOR_BUFFER_BIT}tt&&(at|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(at|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&H.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),C=b},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",je,!1),It.dispose(),ht.dispose(),xt.dispose(),ct.dispose(),At.dispose(),q.dispose(),Ut.dispose(),bt.dispose(),et.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Go),Ht.removeEventListener("sessionend",Vo),qn.stop()};function pe(b){b.preventDefault(),ps("WebGLRenderer: Context Lost."),Z=!0}function oe(){ps("WebGLRenderer: Context Restored."),Z=!1;const b=st.autoReset,tt=wt.enabled,dt=wt.autoUpdate,at=wt.needsUpdate,ot=wt.type;Xt(),st.autoReset=b,wt.enabled=tt,wt.autoUpdate=dt,wt.needsUpdate=at,wt.type=ot}function je(b){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function on(b){const tt=b.target;tt.removeEventListener("dispose",on),pu(tt)}function pu(b){mu(b),ct.remove(b)}function mu(b){const tt=ct.get(b).programs;tt!==void 0&&(tt.forEach(function(dt){et.releaseProgram(dt)}),b.isShaderMaterial&&et.releaseShaderCache(b))}this.renderBufferDirect=function(b,tt,dt,at,ot,Ft){tt===null&&(tt=pt);const zt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Nt=vu(b,tt,dt,at,ot);x.setMaterial(at,zt);let Gt=dt.index,Wt=1;if(at.wireframe===!0){if(Gt=z.getWireframeAttribute(dt),Gt===void 0)return;Wt=2}const Qt=dt.drawRange,te=dt.attributes.position;let Vt=Qt.start*Wt,le=(Qt.start+Qt.count)*Wt;Ft!==null&&(Vt=Math.max(Vt,Ft.start*Wt),le=Math.min(le,(Ft.start+Ft.count)*Wt)),Gt!==null?(Vt=Math.max(Vt,0),le=Math.min(le,Gt.count)):te!=null&&(Vt=Math.max(Vt,0),le=Math.min(le,te.count));const Me=le-Vt;if(Me<0||Me===1/0)return;Ut.setup(ot,at,Nt,dt,Gt);let ge,de=Pt;if(Gt!==null&&(ge=Rt.get(Gt),de=vt,de.setIndex(ge)),ot.isMesh)at.wireframe===!0?(x.setLineWidth(at.wireframeLinewidth*yt()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(ot.isLine){let Ue=at.linewidth;Ue===void 0&&(Ue=1),x.setLineWidth(Ue*yt()),ot.isLineSegments?de.setMode(H.LINES):ot.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else ot.isPoints?de.setMode(H.POINTS):ot.isSprite&&de.setMode(H.TRIANGLES);if(ot.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))de.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const Ue=ot._multiDrawStarts,Bt=ot._multiDrawCounts,ze=ot._multiDrawCount,re=Gt?Rt.get(Gt).bytesPerElement:1,Je=ct.get(at).currentProgram.getUniforms();for(let ln=0;ln<ze;ln++)Je.setValue(H,"_gl_DrawID",ln),de.render(Ue[ln]/re,Bt[ln])}else if(ot.isInstancedMesh)de.renderInstances(Vt,Me,ot.count);else if(dt.isInstancedBufferGeometry){const Ue=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Bt=Math.min(dt.instanceCount,Ue);de.renderInstances(Vt,Me,Bt)}else de.render(Vt,Me)};function ko(b,tt,dt,at){C!==null&&b.isNodeMaterial&&C.setObject(at,b),W===!0&&Et.setState(b,dt,!1),b.transparent===!0&&b.side===Re&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,br(b,tt,at),b.side=ni,b.needsUpdate=!0,br(b,tt,at),b.side=Re):br(b,tt,at)}this.compile=function(b,tt,dt=null){dt===null&&(dt=b),C!==null&&C.renderStart(b,tt,dt),I=xt.get(dt),I.init(tt),v.push(I),dt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(tt.layers)&&(I.pushLight(ot),ot.castShadow&&I.pushShadow(ot))}),b!==dt&&b.traverseVisible(function(ot){ot.isLight&&ot.layers.test(tt.layers)&&(I.pushLight(ot),ot.castShadow&&I.pushShadow(ot))}),I.setupLights(),C!==null&&C.updateLights(I.state.lightsArray),X=this.localClippingEnabled,W=Et.init(this.clippingPlanes,X),W===!0&&Et.setGlobalState(this.clippingPlanes,tt),C!==null&&wt.render(I.state.shadowsArray,dt,tt);const at=new Set;return b.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Ft=ot.material;if(Ft)if(Array.isArray(Ft))for(let zt=0;zt<Ft.length;zt++){const Nt=Ft[zt];ko(Nt,dt,tt,ot),at.add(Nt)}else ko(Ft,dt,tt,ot),at.add(Ft)}),I=v.pop(),C!==null&&C.renderEnd(),at},this.compileAsync=function(b,tt,dt=null){const at=this.compile(b,tt,dt);return new Promise(ot=>{function Ft(){if(at.forEach(function(zt){const Gt=ct.get(zt).currentProgram;(Gt===void 0||Gt.isReady())&&at.delete(zt)}),at.size===0){ot(b);return}setTimeout(Ft,10)}Yt.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Ts=null;function gu(b){Ts&&Ts(b)}function Go(){qn.stop()}function Vo(){qn.start()}const qn=new nu;qn.setAnimationLoop(gu),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(b){Ts=b,Ht.setAnimationLoop(b),b===null?qn.stop():qn.start()},Ht.addEventListener("sessionstart",Go),Ht.addEventListener("sessionend",Vo),this.render=function(b,tt){if(tt!==void 0&&tt.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;C!==null&&C.renderStart(b,tt);const dt=Ht.enabled===!0&&Ht.isPresenting===!0,at=N!==null&&(mt===null||dt)&&N.begin(P,mt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(tt),tt=Ht.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,tt,mt),I=xt.get(b,v.length),I.init(tt),I.state.textureUnits=gt.getTextureUnits(),v.push(I),R.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),D.setFromProjectionMatrix(R,dn,tt.reversedDepth),X=this.localClippingEnabled,W=Et.init(this.clippingPlanes,X),w=ht.get(b,k.length),w.init(),k.push(w),Ht.enabled===!0&&Ht.isPresenting===!0){const zt=P.xr.getDepthSensingMesh();zt!==null&&As(zt,tt,-1/0,P.sortObjects)}As(b,tt,0,P.sortObjects),w.finish(),C!==null&&C.updateLights(I.state.lightsArray),P.sortObjects===!0&&w.sort(V,ut),St=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,St&&It.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&Et.beginShadows();const ot=I.state.shadowsArray;if(wt.render(ot,b,tt),W===!0&&Et.endShadows(),(at&&N.hasRenderPass())===!1){const zt=w.opaque,Nt=w.transmissive;if(I.setupLights(),tt.isArrayCamera){const Gt=tt.cameras;if(Nt.length>0)for(let Wt=0,Qt=Gt.length;Wt<Qt;Wt++){const te=Gt[Wt];Wo(zt,Nt,b,te)}St&&It.render(b);for(let Wt=0,Qt=Gt.length;Wt<Qt;Wt++){const te=Gt[Wt];Ho(w,b,te,te.viewport)}}else Nt.length>0&&Wo(zt,Nt,b,tt),St&&It.render(b),Ho(w,b,tt)}mt!==null&&nt===0&&(gt.updateMultisampleRenderTarget(mt),gt.updateRenderTargetMipmap(mt)),at&&N.end(P),b.isScene===!0&&b.onAfterRender(P,b,tt),Ut.resetDefaultState(),lt=-1,_t=null,v.pop(),v.length>0?(I=v[v.length-1],gt.setTextureUnits(I.state.textureUnits),W===!0&&Et.setGlobalState(P.clippingPlanes,I.state.camera)):I=null,k.pop(),k.length>0?w=k[k.length-1]:w=null,C!==null&&C.renderEnd()};function As(b,tt,dt,at){if(b.visible===!1)return;if(b.layers.test(tt.layers)){if(b.isGroup)dt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(tt);else if(b.isLightProbeGrid)I.pushLightProbeGrid(b);else if(b.isLight)I.pushLight(b),b.castShadow&&I.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(D)){at&&ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(R);const zt=q.update(b),Nt=b.material;Nt.visible&&w.push(b,zt,Nt,dt,ft.z,null,tt)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(D))){const zt=q.update(b),Nt=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ft.copy(b.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ft.copy(zt.boundingSphere.center)),ft.applyMatrix4(b.matrixWorld).applyMatrix4(R)),Array.isArray(Nt)){const Gt=zt.groups;for(let Wt=0,Qt=Gt.length;Wt<Qt;Wt++){const te=Gt[Wt],Vt=Nt[te.materialIndex];Vt&&Vt.visible&&w.push(b,zt,Vt,dt,ft.z,te,tt)}}else Nt.visible&&w.push(b,zt,Nt,dt,ft.z,null,tt)}}const Ft=b.children;for(let zt=0,Nt=Ft.length;zt<Nt;zt++)As(Ft[zt],tt,dt,at)}function Ho(b,tt,dt,at){const{opaque:ot,transmissive:Ft,transparent:zt}=b;I.setupLightsView(dt),W===!0&&Et.setGlobalState(P.clippingPlanes,dt),at&&x.viewport(Y.copy(at)),ot.length>0&&yr(ot,tt,dt),Ft.length>0&&yr(Ft,tt,dt),zt.length>0&&yr(zt,tt,dt),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Wo(b,tt,dt,at){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[at.id]===void 0){const Vt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[at.id]=new an(1,1,{generateMipmaps:!0,type:Vt?gn:Ye,minFilter:jn,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const Ft=I.state.transmissionRenderTarget[at.id],zt=at.viewport||Y;Ft.setSize(zt.z*P.transmissionResolutionScale,zt.w*P.transmissionResolutionScale);const Nt=P.getRenderTarget(),Gt=P.getActiveCubeFace(),Wt=P.getActiveMipmapLevel();P.setRenderTarget(Ft),P.getClearColor(O),g=P.getClearAlpha(),g<1&&P.setClearColor(16777215,.5),P.clear(),St&&It.render(dt);const Qt=P.toneMapping;P.toneMapping=pn;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),I.setupLightsView(at),W===!0&&Et.setGlobalState(P.clippingPlanes,at),yr(b,dt,at),gt.updateMultisampleRenderTarget(Ft),gt.updateRenderTargetMipmap(Ft),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let le=0,Me=tt.length;le<Me;le++){const ge=tt[le],{object:de,geometry:Ue,material:Bt,group:ze}=ge;if(Bt.side===Re&&de.layers.test(at.layers)){const re=Bt.side;Bt.side=Be,Bt.needsUpdate=!0,Xo(de,dt,at,Ue,Bt,ze),Bt.side=re,Bt.needsUpdate=!0,Vt=!0}}Vt===!0&&(gt.updateMultisampleRenderTarget(Ft),gt.updateRenderTargetMipmap(Ft))}P.setRenderTarget(Nt,Gt,Wt),P.setClearColor(O,g),te!==void 0&&(at.viewport=te),P.toneMapping=Qt}function yr(b,tt,dt){const at=tt.isScene===!0?tt.overrideMaterial:null;for(let ot=0,Ft=b.length;ot<Ft;ot++){const zt=b[ot],{object:Nt,geometry:Gt,group:Wt}=zt;let Qt=zt.material;Qt.allowOverride===!0&&at!==null&&(Qt=at),Nt.layers.test(dt.layers)&&Xo(Nt,tt,dt,Gt,Qt,Wt)}}function Xo(b,tt,dt,at,ot,Ft){C!==null&&ot.isNodeMaterial&&C.setObject(b,ot),b.onBeforeRender(P,tt,dt,at,ot,Ft),b.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ot.onBeforeRender(P,tt,dt,at,b,Ft),ot.transparent===!0&&ot.side===Re&&ot.forceSinglePass===!1?(ot.side=Be,ot.needsUpdate=!0,P.renderBufferDirect(dt,tt,at,ot,b,Ft),ot.side=ni,ot.needsUpdate=!0,P.renderBufferDirect(dt,tt,at,ot,b,Ft),ot.side=Re):P.renderBufferDirect(dt,tt,at,ot,b,Ft),b.onAfterRender(P,tt,dt,at,ot,Ft)}function br(b,tt,dt){tt.isScene!==!0&&(tt=pt);const at=ct.get(b),ot=I.state.lights,Ft=I.state.shadowsArray,zt=ot.state.version,Nt=et.getParameters(b,ot.state,Ft,tt,dt,I.state.lightProbeGridArray),Gt=et.getProgramCacheKey(Nt);let Wt=at.programs;at.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?tt.environment:null,at.fog=tt.fog;const Qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;at.envMap=At.get(b.envMap||at.environment,Qt),at.envMapRotation=at.environment!==null&&b.envMap===null?tt.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",on),Wt=new Map,at.programs=Wt);let te=Wt.get(Gt);if(te!==void 0){if(at.currentProgram===te&&at.lightsStateVersion===zt)return Yo(b,Nt),te}else Nt.uniforms=et.getUniforms(b),C!==null&&b.isNodeMaterial&&C.build(b,dt,Nt),b.onBeforeCompile(Nt,P),te=et.acquireProgram(Nt,Gt),Wt.set(Gt,te),at.uniforms=Nt.uniforms;const Vt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Vt.clippingPlanes=Et.uniform),Yo(b,Nt),at.needsLights=Mu(b),at.lightsStateVersion=zt,at.needsLights&&(Vt.ambientLightColor.value=ot.state.ambient,Vt.lightProbe.value=ot.state.probe,Vt.sunLights.value=ot.state.sun,Vt.sunLightShadows.value=ot.state.sunShadow,Vt.directionalLights.value=ot.state.directional,Vt.directionalLightShadows.value=ot.state.directionalShadow,Vt.spotLights.value=ot.state.spot,Vt.spotLightShadows.value=ot.state.spotShadow,Vt.rectAreaLights.value=ot.state.rectArea,Vt.ltc_1.value=ot.state.rectAreaLTC1,Vt.ltc_2.value=ot.state.rectAreaLTC2,Vt.pointLights.value=ot.state.point,Vt.pointLightShadows.value=ot.state.pointShadow,Vt.hemisphereLights.value=ot.state.hemi,Vt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Vt.sunShadowCascade.value=ot.state.sunShadowCascade,Vt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Vt.spotLightMatrix.value=ot.state.spotLightMatrix,Vt.spotLightMap.value=ot.state.spotLightMap,Vt.pointShadowMatrix.value=ot.state.pointShadowMatrix),at.lightProbeGrid=I.state.lightProbeGridArray.length>0,at.currentProgram=te,at.uniformsList=null,te}function qo(b){if(b.uniformsList===null){const tt=b.currentProgram.getUniforms();b.uniformsList=as.seqWithValue(tt.seq,b.uniforms)}return b.uniformsList}function Yo(b,tt){const dt=ct.get(b);dt.outputColorSpace=tt.outputColorSpace,dt.batching=tt.batching,dt.batchingColor=tt.batchingColor,dt.instancing=tt.instancing,dt.instancingColor=tt.instancingColor,dt.instancingMorph=tt.instancingMorph,dt.skinning=tt.skinning,dt.morphTargets=tt.morphTargets,dt.morphNormals=tt.morphNormals,dt.morphColors=tt.morphColors,dt.morphTargetsCount=tt.morphTargetsCount,dt.numClippingPlanes=tt.numClippingPlanes,dt.numIntersection=tt.numClipIntersection,dt.vertexAlphas=tt.vertexAlphas,dt.vertexTangents=tt.vertexTangents,dt.toneMapping=tt.toneMapping}function _u(b,tt){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(tt.matrixWorld);for(let dt=0,at=b.length;dt<at;dt++){const ot=b[dt];if(ot.texture!==null&&ot.boundingBox.containsPoint(M))return ot}return null}function vu(b,tt,dt,at,ot){tt.isScene!==!0&&(tt=pt),gt.resetTextureUnits();const Ft=tt.fog,zt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?tt.environment:null,Nt=mt===null?P.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ne.workingColorSpace,Gt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Wt=At.get(at.envMap||zt,Gt),Qt=at.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,te=!!dt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Vt=!!dt.morphAttributes.position,le=!!dt.morphAttributes.normal,Me=!!dt.morphAttributes.color;let ge=pn;at.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ge=P.toneMapping);const de=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Ue=de!==void 0?de.length:0,Bt=ct.get(at),ze=I.state.lights;if(W===!0&&(X===!0||b!==_t)){const me=b===_t&&at.id===lt;Et.setState(at,b,me)}let re=!1;at.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ze.state.version||Bt.outputColorSpace!==Nt||ot.isBatchedMesh&&Bt.batching===!1||!ot.isBatchedMesh&&Bt.batching===!0||ot.isBatchedMesh&&Bt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Bt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Bt.instancing===!1||!ot.isInstancedMesh&&Bt.instancing===!0||ot.isSkinnedMesh&&Bt.skinning===!1||!ot.isSkinnedMesh&&Bt.skinning===!0||ot.isInstancedMesh&&Bt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Bt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Bt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Bt.instancingMorph===!1&&ot.morphTexture!==null||Bt.envMap!==Wt||at.fog===!0&&Bt.fog!==Ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Et.numPlanes||Bt.numIntersection!==Et.numIntersection)||Bt.vertexAlphas!==Qt||Bt.vertexTangents!==te||Bt.morphTargets!==Vt||Bt.morphNormals!==le||Bt.morphColors!==Me||Bt.toneMapping!==ge||Bt.morphTargetsCount!==Ue||!!Bt.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Bt.__version=at.version);let Je=Bt.currentProgram;re===!0&&(Je=br(at,tt,ot),C&&at.isNodeMaterial&&C.onUpdateProgram(at,Je,Bt));let ln=!1,Ln=!1,ui=!1;const ue=Je.getUniforms(),xe=Bt.uniforms;if(x.useProgram(Je.program)&&(ln=!0,Ln=!0,ui=!0),at.id!==lt&&(lt=at.id,Ln=!0),Bt.needsLights){const me=_u(I.state.lightProbeGridArray,ot);Bt.lightProbeGrid!==me&&(Bt.lightProbeGrid=me,Ln=!0)}if(ln||_t!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(H,"projectionMatrix",b.projectionMatrix),ue.setValue(H,"viewMatrix",b.matrixWorldInverse);const Dn=ue.map.cameraPosition;Dn!==void 0&&Dn.setValue(H,it.setFromMatrixPosition(b.matrixWorld)),B.logarithmicDepthBuffer&&ue.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ue.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),_t!==b&&(_t=b,Ln=!0,ui=!0)}if(Bt.needsLights&&(ze.state.sunShadowMap.length>0&&ue.setValue(H,"sunShadowMap",ze.state.sunShadowMap,gt),ze.state.directionalShadowMap.length>0&&ue.setValue(H,"directionalShadowMap",ze.state.directionalShadowMap,gt),ze.state.spotShadowMap.length>0&&ue.setValue(H,"spotShadowMap",ze.state.spotShadowMap,gt),ze.state.pointShadowMap.length>0&&ue.setValue(H,"pointShadowMap",ze.state.pointShadowMap,gt)),ot.isSkinnedMesh){ue.setOptional(H,ot,"bindMatrix"),ue.setOptional(H,ot,"bindMatrixInverse");const me=ot.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ue.setValue(H,"boneTexture",me.boneTexture,gt))}ot.isBatchedMesh&&(ue.setOptional(H,ot,"batchingTexture"),ue.setValue(H,"batchingTexture",ot._matricesTexture,gt),ue.setOptional(H,ot,"batchingIdTexture"),ue.setValue(H,"batchingIdTexture",ot._indirectTexture,gt),ue.setOptional(H,ot,"batchingColorTexture"),ot._colorsTexture!==null&&ue.setValue(H,"batchingColorTexture",ot._colorsTexture,gt));const In=dt.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&j.update(ot,dt,Je),(Ln||Bt.receiveShadow!==ot.receiveShadow)&&(Bt.receiveShadow=ot.receiveShadow,ue.setValue(H,"receiveShadow",ot.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&tt.environment!==null&&(xe.envMapIntensity.value=tt.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=vg()),Ln){if(ue.setValue(H,"toneMappingExposure",P.toneMappingExposure),Bt.needsLights&&xu(xe,ui),Ft&&at.fog===!0&&G.refreshFogUniforms(xe,Ft),G.refreshMaterialUniforms(xe,at,U,y,I.state.transmissionRenderTarget[b.id]),Bt.needsLights&&Bt.lightProbeGrid){const me=Bt.lightProbeGrid;xe.probesSH.value=me.texture,xe.probesMin.value.copy(me.boundingBox.min),xe.probesMax.value.copy(me.boundingBox.max),xe.probesResolution.value.copy(me.resolution)}as.upload(H,qo(Bt),xe,gt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(as.upload(H,qo(Bt),xe,gt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ue.setValue(H,"center",ot.center),ue.setValue(H,"modelViewMatrix",ot.modelViewMatrix),ue.setValue(H,"normalMatrix",ot.normalMatrix),ue.setValue(H,"modelMatrix",ot.matrixWorld),at.uniformsGroups!==void 0){const me=at.uniformsGroups;for(let Dn=0,fi=me.length;Dn<fi;Dn++){const Jo=me[Dn];bt.update(Jo,Je),bt.bind(Jo,Je)}}return Je}function xu(b,tt){b.ambientLightColor.needsUpdate=tt,b.lightProbe.needsUpdate=tt,b.sunLights.needsUpdate=tt,b.sunLightShadows.needsUpdate=tt,b.directionalLights.needsUpdate=tt,b.directionalLightShadows.needsUpdate=tt,b.pointLights.needsUpdate=tt,b.pointLightShadows.needsUpdate=tt,b.spotLights.needsUpdate=tt,b.spotLightShadows.needsUpdate=tt,b.rectAreaLights.needsUpdate=tt,b.hemisphereLights.needsUpdate=tt}function Mu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(b,tt,dt){const at=ct.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),ct.get(b.texture).__webglTexture=tt,ct.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:dt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,tt){const dt=ct.get(b);dt.__webglFramebuffer=tt,dt.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(b,tt=0,dt=0){mt=b,rt=tt,nt=dt;let at=null,ot=!1,Ft=!1;if(b){const Nt=ct.get(b);if(Nt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(H.FRAMEBUFFER,Nt.__webglFramebuffer),Y.copy(b.viewport),$.copy(b.scissor),Q=b.scissorTest,x.viewport(Y),x.scissor($),x.setScissorTest(Q),lt=-1;return}else if(Nt.__webglFramebuffer===void 0)gt.setupRenderTarget(b);else if(Nt.__hasExternalTextures)gt.rebindTextures(b,ct.get(b.texture).__webglTexture,ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qt=b.depthTexture;if(Nt.__boundDepthTexture!==Qt){if(Qt!==null&&ct.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(b)}}const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ft=!0);const Wt=ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[tt])?at=Wt[tt][dt]:at=Wt[tt],ot=!0):b.samples>0&&gt.useMultisampledRTT(b)===!1?at=ct.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?at=Wt[dt]:at=Wt,Y.copy(b.viewport),$.copy(b.scissor),Q=b.scissorTest}else Y.copy(Mt).multiplyScalar(U).floor(),$.copy(Ct).multiplyScalar(U).floor(),Q=kt;if(dt!==0&&(at=F),x.bindFramebuffer(H.FRAMEBUFFER,at)&&x.drawBuffers(b,at),x.viewport(Y),x.scissor($),x.setScissorTest(Q),ot){const Nt=ct.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Nt.__webglTexture,dt)}else if(Ft){const Nt=tt;for(let Gt=0;Gt<b.textures.length;Gt++){const Wt=ct.get(b.textures[Gt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,dt,Nt)}}else if(b!==null&&dt!==0){const Nt=ct.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,dt)}lt=-1};function Zo(b){const tt=ct.get(b);return(tt.__readFormat!==b.format||tt.__readType!==b.type)&&(tt.__readFormat=b.format,tt.__readType=b.type,tt.__formatReadable=B.textureFormatReadable(b.format),tt.__typeReadable=B.textureTypeReadable(b.type)),tt}this.readRenderTargetPixels=function(b,tt,dt,at,ot,Ft,zt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt){x.bindFramebuffer(H.FRAMEBUFFER,Gt);try{const Wt=b.textures[Nt],Qt=Wt.format,te=Wt.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);const Vt=Zo(Wt);if(Vt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=b.width-at&&dt>=0&&dt<=b.height-ot&&H.readPixels(tt,dt,at,ot,Lt.convert(Qt),Lt.convert(te),Ft)}finally{const Wt=mt!==null?ct.get(mt).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(b,tt,dt,at,ot,Ft,zt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt)if(tt>=0&&tt<=b.width-at&&dt>=0&&dt<=b.height-ot){x.bindFramebuffer(H.FRAMEBUFFER,Gt);const Wt=b.textures[Nt],Qt=Wt.format,te=Wt.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);const Vt=Zo(Wt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.bufferData(H.PIXEL_PACK_BUFFER,Ft.byteLength,H.STREAM_READ),H.readPixels(tt,dt,at,ot,Lt.convert(Qt),Lt.convert(te),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Me=mt!==null?ct.get(mt).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,Me);const ge=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await rf(H,ge,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ft),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(le),H.deleteSync(ge),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,tt=null,dt=0){const at=Math.pow(2,-dt),ot=Math.floor(b.image.width*at),Ft=Math.floor(b.image.height*at),zt=tt!==null?tt.x:0,Nt=tt!==null?tt.y:0;gt.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,dt,0,0,zt,Nt,ot,Ft),x.unbindTexture()},this.copyTextureToTexture=function(b,tt,dt=null,at=null,ot=0,Ft=0){let zt,Nt,Gt,Wt,Qt,te,Vt,le,Me;const ge=b.isCompressedTexture?b.mipmaps[Ft]:b.image;if(dt!==null)zt=dt.max.x-dt.min.x,Nt=dt.max.y-dt.min.y,Gt=dt.isBox3?dt.max.z-dt.min.z:1,Wt=dt.min.x,Qt=dt.min.y,te=dt.isBox3?dt.min.z:0;else{const xe=Math.pow(2,-ot);zt=Math.floor(ge.width*xe),Nt=Math.floor(ge.height*xe),b.isDataArrayTexture?Gt=ge.depth:b.isData3DTexture?Gt=Math.floor(ge.depth*xe):Gt=1,Wt=0,Qt=0,te=0}at!==null?(Vt=at.x,le=at.y,Me=at.z):(Vt=0,le=0,Me=0);const de=Lt.convert(tt.format),Ue=Lt.convert(tt.type);let Bt;tt.isData3DTexture?(gt.setTexture3D(tt,0),Bt=H.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(gt.setTexture2DArray(tt,0),Bt=H.TEXTURE_2D_ARRAY):(gt.setTexture2D(tt,0),Bt=H.TEXTURE_2D),x.activeTexture(H.TEXTURE0),x.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,tt.flipY),x.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),x.pixelStorei(H.UNPACK_ALIGNMENT,tt.unpackAlignment);const ze=x.getParameter(H.UNPACK_ROW_LENGTH),re=x.getParameter(H.UNPACK_IMAGE_HEIGHT),Je=x.getParameter(H.UNPACK_SKIP_PIXELS),ln=x.getParameter(H.UNPACK_SKIP_ROWS),Ln=x.getParameter(H.UNPACK_SKIP_IMAGES);x.pixelStorei(H.UNPACK_ROW_LENGTH,ge.width),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge.height),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Wt),x.pixelStorei(H.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(H.UNPACK_SKIP_IMAGES,te);const ui=b.isDataArrayTexture||b.isData3DTexture,ue=tt.isDataArrayTexture||tt.isData3DTexture;if(b.isDepthTexture){const xe=ct.get(b),In=ct.get(tt),me=ct.get(xe.__renderTarget),Dn=ct.get(In.__renderTarget);x.bindFramebuffer(H.READ_FRAMEBUFFER,me.__webglFramebuffer),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let fi=0;fi<Gt;fi++)ui&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ct.get(b).__webglTexture,ot,te+fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ct.get(tt).__webglTexture,Ft,Me+fi)),H.blitFramebuffer(Wt,Qt,zt,Nt,Vt,le,zt,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ot!==0||b.isRenderTargetTexture||ct.has(b)){const xe=ct.get(b),In=ct.get(tt);x.bindFramebuffer(H.READ_FRAMEBUFFER,T),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,K);for(let me=0;me<Gt;me++)ui?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,xe.__webglTexture,ot,te+me):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,xe.__webglTexture,ot),ue?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,In.__webglTexture,Ft,Me+me):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,In.__webglTexture,Ft),ot!==0?H.blitFramebuffer(Wt,Qt,zt,Nt,Vt,le,zt,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):ue?H.copyTexSubImage3D(Bt,Ft,Vt,le,Me+me,Wt,Qt,zt,Nt):H.copyTexSubImage2D(Bt,Ft,Vt,le,Wt,Qt,zt,Nt);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ue?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(Bt,Ft,Vt,le,Me,zt,Nt,Gt,de,Ue,ge.data):tt.isCompressedArrayTexture?H.compressedTexSubImage3D(Bt,Ft,Vt,le,Me,zt,Nt,Gt,de,ge.data):H.texSubImage3D(Bt,Ft,Vt,le,Me,zt,Nt,Gt,de,Ue,ge):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ft,Vt,le,zt,Nt,de,Ue,ge.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ft,Vt,le,ge.width,ge.height,de,ge.data):H.texSubImage2D(H.TEXTURE_2D,Ft,Vt,le,zt,Nt,de,Ue,ge);x.pixelStorei(H.UNPACK_ROW_LENGTH,ze),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,re),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),x.pixelStorei(H.UNPACK_SKIP_ROWS,ln),x.pixelStorei(H.UNPACK_SKIP_IMAGES,Ln),Ft===0&&tt.generateMipmaps&&H.generateMipmap(Bt),x.unbindTexture()},this.initRenderTarget=function(b){ct.get(b).__webglFramebuffer===void 0&&gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?gt.setTextureCube(b,0):b.isData3DTexture?gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?gt.setTexture2DArray(b,0):gt.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){rt=0,nt=0,mt=null,x.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const vn=i=>Math.sin(i*.69)*5.4+Math.sin(i*.25)*3.8,Io=i=>1.6+Math.sin(i*.34)*1.1+Math.sin(i*.72)*.5;function be(i){return{x:vn(i),y:Io(i),z:-(i-1)*8.8}}function ts(i,t,e){const n=1-t/8.8,r=Math.abs(i-vn(n)),s=Math.min(1,Math.max(0,(r-2.5)/5));return Io(n)+s*((Math.sin(i*.27+t*.055)+Math.cos(i*.14-t*.095))*.95+(e===1?Math.max(0,r-12)*.3:0))}function Mg(i,t){let e=i*9173+t*71;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),r=[];for(let s=0;s<23;s++)for(const a of[-1,1])for(let o=0;o<3;o++){const l=s+n(),c=be(l).z,f=vn(l)+a*(5.5+o*6+n()*3),h=t===5?n()>.48?"crystal":"rock":t===4?n()>.25?"rock":"tree":t===2?o===0&&s%2===0?"house":n()>.5?"tree":"rock":t===1?n()>.55?"bamboo":n()>.5?"rock":"tree":"tree";r.push({kind:h,x:f,z:c,scale:.75+n()*.75,rotation:n()*Math.PI*2}),o===0&&r.push({kind:"rock",x:vn(1-(c+2)/8.8)+a*(4+n()*2),z:c+2,scale:.4+n()*.5,rotation:n()*6})}for(const s of[5,10,15,20]){const a=be(s);r.push({kind:t===4?"ger":"shrine",x:a.x-7,z:a.z-1,scale:t===2?1.15:1,rotation:.2})}return r}const Sg=[{id:"moonlit-shrine",landmark:"산신당과 오래된 숲",sky:"#152a36",ground:"#34423c",stone:"#66716a",wood:"#554334",roof:"#354b54",leaf:"#254b3c",light:"#ffbd65",fog:95,ambient:1.15,sun:1.5},{id:"sunset-cliffs",landmark:"절벽 잔도와 산정 정자",sky:"#857582",ground:"#55574c",stone:"#8b8978",wood:"#664738",roof:"#3f5353",leaf:"#426145",light:"#ffd17c",fog:150,ambient:1.5,sun:2.1},{id:"lantern-street",landmark:"홍등 골목과 층층의 기와",sky:"#232b49",ground:"#424450",stone:"#6a6978",wood:"#793c35",roof:"#364253",leaf:"#b3839f",light:"#ff8f48",fog:105,ambient:1.15,sun:1.2},{id:"overgrown-temple",landmark:"덩굴에 잠긴 석조 사원",sky:"#435154",ground:"#454e3a",stone:"#7e8064",wood:"#4e4b32",roof:"#626a4d",leaf:"#385c35",light:"#ffbd65",fog:110,ambient:1.35,sun:1.65},{id:"starry-steppe",landmark:"별빛 초원과 오보 제단",sky:"#15284e",ground:"#3e513d",stone:"#717b70",wood:"#685742",roof:"#a79d87",leaf:"#657859",light:"#ffbf69",fog:145,ambient:1.2,sun:1.2},{id:"fractured-boundary",landmark:"공중 석도와 무너진 회랑",sky:"#38344c",ground:"#454558",stone:"#7c7d8a",wood:"#57525f",roof:"#4b455d",leaf:"#675679",light:"#96d9ff",fog:150,ambient:1.4,sun:1.45}];function yg(i){const t=i%2/2,e=(2-Math.floor(i/2))/3,n=.5/1086,r=.5/1448;return{x:t+n,y:e+r,width:.5-2*n,height:1/3-2*r}}function Ot(i,t,e=0){const n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function Li(i){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle=i==="earth"?"#84907c":"#b8b8b1",e.fillRect(0,0,128,128);for(let r=0;r<128;r+=2)for(let s=0;s<128;s+=2){const a=Ot(s,r,7);e.fillStyle=`rgba(${a>.5?"255,255,240":"10,15,20"},${.025+a*.16})`,e.fillRect(s,r,2,2)}if(i==="stone")for(let r=0;r<4;r++)for(let s=-1;s<3;s++){const a=s*64+r%2*32,o=r*32;e.strokeStyle="#555b576e",e.lineWidth=2,e.strokeRect(a+1,o+1,62,30),e.strokeStyle="#eef0d943",e.lineWidth=1,e.strokeRect(a+3,o+3,58,26),e.beginPath(),e.moveTo(a+16,o+1),e.lineTo(a+20,o+7),e.lineTo(a+18,o+14),e.strokeStyle="#454d4740",e.stroke()}else if(i==="wood")for(let r=0;r<24;r++)e.beginPath(),e.moveTo(r*6,0),e.bezierCurveTo(r*6+6,42,r*6-5,85,r*6+2,128),e.strokeStyle=r%3?"#514b404a":"#eae0c432",e.stroke();else if(i==="roof"){for(let r=0;r<128;r+=16){const s=e.createLinearGradient(r,0,r+16,0);s.addColorStop(0,"#3b4144"),s.addColorStop(.55,"#b4babb"),s.addColorStop(1,"#717a7a"),e.fillStyle=s,e.fillRect(r,0,16,128)}e.strokeStyle="#282e3680";for(let r=0;r<128;r+=32)e.beginPath(),e.moveTo(0,r),e.lineTo(128,r),e.stroke()}else if(i==="foliage"){e.fillStyle="#879382",e.fillRect(0,0,128,128);for(let r=0;r<340;r++){const s=Ot(r,1)*128,a=Ot(r,2)*128,o=Ot(r,3);e.save(),e.translate(s,a),e.rotate(o*6.3),e.fillStyle=o>.4?"#a1ad99":"#6e7e70",e.beginPath(),e.ellipse(0,0,3+o*3,1.4+o,0,0,Math.PI*2),e.fill(),e.restore()}}else if(i==="rock"){for(let r=0;r<80;r++){const s=Ot(r,1)*128,a=Ot(r,2)*128;e.fillStyle=r%3?"#45504b25":"#dae0cf40",e.beginPath(),e.ellipse(s,a,3+Ot(r,4)*12,2+Ot(r,3)*8,Ot(r,5)*3,0,Math.PI*2),e.fill()}e.strokeStyle="#343f3d55";for(let r=0;r<8;r++){const s=Ot(r,5)*128,a=Ot(r,6)*128;e.beginPath(),e.moveTo(s,a),e.lineTo(s+8,a+11),e.lineTo(s+5,a+19),e.lineTo(s+13,a+27),e.stroke()}}else for(let r=0;r<230;r++){const s=Ot(r,1)*128,a=Ot(r,2)*128;e.fillStyle=r%3?"#243d242b":"#e7deba25",e.fillRect(s,a,2+Ot(r,3)*5,1)}const n=new zc(t);return n.colorSpace=Le,n.wrapS=n.wrapT=ls,n.anisotropy=2,n}function sc(i){const t=new kn({map:i,flatShading:!0});return t.onBeforeCompile=e=>{e.vertexShader=`varying vec3 vStonePosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
   vec4 stonePosition=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    stonePosition=instanceMatrix*stonePosition;
   #endif
   vStonePosition=(modelMatrix*stonePosition).xyz;`),e.fragmentShader=`varying vec3 vStonePosition;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`vec3 stoneNormal=abs(normalize(cross(dFdx(vStonePosition),dFdy(vStonePosition))));
   vec2 stoneUV=stoneNormal.y>stoneNormal.x&&stoneNormal.y>stoneNormal.z?vStonePosition.xz:stoneNormal.x>stoneNormal.z?vStonePosition.zy:vStonePosition.xy;
   diffuseColor*=texture2D(map,stoneUV*.35);`)},t}function Do(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#fff6dcaa"),e.addColorStop(.17,"#ffe8b960"),e.addColorStop(.5,"#ffc16a18"),e.addColorStop(1,"#ffc16a00"),t.fillStyle=e,t.fillRect(0,0,64,64),new zc(i)}function Uo(i,t,e=be(20)){const n=Su(i),r=new ei;r.position.set(e.x,e.y+.24,e.z);let s=!1,a=!1;const o=new bs().load(xs(`art/${n.boss.atlas}-atlas.png`),()=>{if(s){o.dispose();return}a=!0,t()},void 0,()=>{s||t()});o.colorSpace=Le,o.repeat.set(1/3,1/2),o.offset.set(n.boss.art%3/3,(1-Math.floor(n.boss.art/3))/2),o.magFilter=Ce;const l=new xo({map:o,transparent:!0,alphaTest:.04,depthWrite:!1,toneMapped:!1}),c=new Nc(l);c.center.set(.5,.125),c.scale.set(n.height,n.height,1),c.position.y=.04,r.add(c);const f=new se(new ci(2.05,36),new De({color:"#061018",transparent:!0,opacity:.42,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.scale.y=.7,f.position.y=-.03,r.add(f);const h=new se(new xr(2.1,2.16,64),new De({color:n.color,transparent:!0,opacity:.65,side:Re,depthWrite:!1}));h.rotation.x=-Math.PI/2,r.add(h);const u=h.clone();u.geometry=new xr(1.9,1.94,6),u.material=h.material.clone(),u.position.y=.01,r.add(u);const d=new ei,_=new Cn(.035,5,4),A=new De({color:n.color,transparent:!0,opacity:.65});r.add(d);for(let E=0;E<7;E++){const L=new se(_,A);d.add(L)}function m(E,L){c.visible=a;const M=(L?0:E*.001)+n.phase,w=L?0:(1-Math.cos(M*Math.PI*2/n.duration))*.5;c.scale.y=n.height*(1+n.breath*w),l.rotation=L?0:n.tilt*Math.sin(M*Math.PI*2/n.duration),h.material.opacity=L?.6:.48+w*.25,u.rotation.z=L?0:M*.09,d.children.forEach((I,k)=>{const v=k*2.4+M*.18;I.position.set(Math.cos(v)*1.65,L?.8+k*.13:.45+(M*.22+k*.45)%2.6,Math.sin(v)*.85)})}function p(){s=!0,o.dispose();const E=new Set,L=new Set;r.traverse(M=>{const w=M;if(w.geometry&&E.add(w.geometry),w.material)for(const I of Array.isArray(w.material)?w.material:[w.material])L.add(I)});for(const M of E)M.dispose();for(const M of L)M.dispose();r.clear()}return{group:r,update:m,dispose:p,height:n.height,isReady:()=>a,breathScale:()=>c.scale.y/n.height}}const bg={id:"forest-sanctuary-v036"};function Qn(i,t){const e=1-t/8.8,n=Math.abs(i-vn(e)),r=Math.min(1,Math.max(0,(n-4.4)/12));return Io(e)+r*(1.5+Math.sin(i*.12+t*.047)*1.6+Math.cos(i*.061-t*.053)*1.4+Math.max(0,n-28)*.055)}function Eg(i){const t=[];for(let e=0;e<32;e++)for(const n of[-1,1])for(let r=0;r<2;r++){const s=30-e*9.2+Ot(e,r+n+i)*3,a=vn(1-s/8.8),o=a+n*(16+r*17+Ot(e,i+r)*5),l=be(20);Math.hypot(o-l.x,s-l.z)<17||t.push({x:o,y:Qn(o,s),z:s,scale:(r===0?.9:1.1)+Ot(e,n+i)*.45,seed:e*13+r*7+n+i*3,distant:r===1})}return t}function wg(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new he;let c=0;for(let f=0;f<i.length;++f){const h=i[f];let u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(e){let f=0;const h=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let _=0;_<d.count;++_)h.push(d.getX(_)+f);f+=i[u].attributes.position.count}l.setIndex(h)}for(const f in s){const h=ac(s[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(const f in a){const h=a[f][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<h;++u){const d=[];for(let A=0;A<a[f].length;++A)d.push(a[f][A][u]);const _=ac(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(_)}}}return l}function ac(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*e}const a=new t(s),o=new Qe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const h=l/e;for(let u=0,d=f.count;u<d;u++)for(let _=0;_<e;_++){const A=f.getComponent(u,_);o.setComponent(u+h,_,A)}}else a.set(f.array,l);l+=f.count*e}return r!==void 0&&(o.gpuType=r),o}function es(i,t,e,n=5){const r=new Gc(i),s=new To(r,n,t,6,!1),a=s.getAttribute("position");for(let o=0;o<a.count;o++){const l=Math.floor(o/7),c=l/n,f=r.getPointAt(c),h=1-c*(1-e);a.setXYZ(o,f.x+(a.getX(o)-f.x)*h,f.y+(a.getY(o)-f.y)*h,f.z+(a.getZ(o)-f.z)*h)}return s.computeVertexNormals(),s}function os(i){const t=(r,s,a)=>new J(r,s,a),e=[];e.push(es([t(0,0,0),t(.35,3,.1),t(-.25,6,.3),t(.5,10,.2),t(.2,14,0)],.7,.14,10));for(let r=0;r<5;r++){const s=r*2.4+i,a=2.5+Ot(r,i),o=Math.cos(s),l=Math.sin(s);e.push(es([t(o*a,.03,l*a),t(o*1.1,.25,l*1.1),t(o*.3,1.2,l*.3)],.2,1.7,4))}for(let r=0;r<7;r++){const s=r*2.4+i,a=Math.cos(s),o=Math.sin(s),l=6.3+r*.6,c=3.3+Ot(r,i)*2;e.push(es([t(.1,l,0),t(a*c*.45,l+.45,o*c*.45),t(a*c,l+2,o*c)],.29,.12,5)),e.push(es([t(a*c*.45,l+.45,o*c*.45),t(a*c*.68+.6,l+1.8,o*c*.7-.5),t(a*c+.7,l+2.6,o*c-.7)],.13,.08,4))}const n=wg(e,!1);for(const r of e)r.dispose();return n}function uu(){const i=new Ve(2,2,24,16);i.rotateX(-Math.PI/2);const t=i.getAttribute("position");for(let e=0;e<t.count;e++){const n=t.getX(e),r=t.getZ(e),s=Math.max(Math.abs(r),Math.max(0,(Math.abs(n)-.66)/.34)*.78);t.setY(e,Math.pow(1-s,1.8)*.9+Math.pow(s,7)*.23+Math.pow(Math.abs(n*r),5)*.18)}return i.computeVertexNormals(),i}function fu(){const i=new Yc;i.moveTo(-.46,-.5),i.lineTo(.44,-.5),i.lineTo(.5,-.4),i.lineTo(.48,.44),i.lineTo(.4,.5),i.lineTo(-.43,.49),i.lineTo(-.5,.4),i.lineTo(-.5,-.4),i.closePath();const t=new bo(i,{depth:.11,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:1,steps:1});return t.rotateX(-Math.PI/2),t}function Oe(i,t,e,n="#d4d3c8"){const r=new _s({map:i,color:n,roughness:.93,metalness:0});return r.onBeforeCompile=s=>{s.vertexShader=`varying vec3 vForestWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
   vec4 forestPosition=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    forestPosition=instanceMatrix*forestPosition;
   #endif
   vForestWorld=(modelMatrix*forestPosition).xyz;`),s.fragmentShader=`varying vec3 vForestWorld;
`+s.fragmentShader;const a=t%2*.5,o=t<2?.5:0;s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`
   vec3 fn=abs(normalize(cross(dFdx(vForestWorld),dFdy(vForestWorld))));
   vec2 coords=fn.y>fn.x&&fn.y>fn.z?vForestWorld.xz:fn.x>fn.z?vForestWorld.zy:vForestWorld.xy;
   vec2 tileUV=fract(coords*${e.toFixed(4)})*.496+vec2(${(a+.002).toFixed(3)},${(o+.002).toFixed(3)});
   // Use continuous world-coordinate derivatives: fract() otherwise makes bright mip seams.
   diffuseColor*=textureGrad(map,tileUV,dFdx(coords)*${(e*.496).toFixed(6)},dFdy(coords)*${(e*.496).toFixed(6)});`)},r.customProgramCacheKey=()=>`forest-cell-${t}-${e}`,r}function hu(i){const t={value:0},e=new kn({map:i,color:"#f4f6e9",side:Re,alphaTest:.44,depthWrite:!0});return e.onBeforeCompile=n=>{n.uniforms.uForestWind=t,n.vertexShader=`uniform float uForestWind;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  float phase=0.0;
  #ifdef USE_INSTANCING
   phase=instanceMatrix[3].x*.53+instanceMatrix[3].z*.13;
  #endif
  transformed.x+=sin(uForestWind*.7+phase+position.y)*.055*uv.y;
  transformed.z+=cos(uForestWind*.5+phase)*.035*uv.y;`)},{mat:e,time:t}}function Tg(){return new He({side:Be,depthWrite:!1,uniforms:{},vertexShader:"varying vec3 direction; void main(){ direction=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec3 direction; void main(){ float h=normalize(direction).y; vec3 horizon=vec3(.085,.16,.19); vec3 zenith=vec3(.015,.038,.08); gl_FragColor=vec4(mix(horizon,zenith,smoothstep(0.,.7,h)),1.); }"})}function du(){const i={value:0};return{mat:new He({transparent:!0,depthWrite:!1,side:Re,uniforms:{uTime:i},vertexShader:"varying vec2 mistUV; void main(){mistUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 mistUV;uniform float uTime;
  void main(){vec2 p=mistUV-.5;float edge=smoothstep(.5,.15,length(p));float wave=.65+.2*sin(mistUV.x*17.+mistUV.y*9.+uTime*.12);gl_FragColor=vec4(.37,.52,.56,edge*wave*.095);}`}),time:i}}const nr=(i,t,e)=>new J(i,t,e);function Ag(i,t){const e=new vo;e.background=new qt("#182c34"),e.fog=new Ss("#182c34",.0115),e.add(new Co("#d5e2ec","#747761",2.5));const n=new Lo("#d4e6f4",2.8);n.castShadow=!0,n.shadow.mapSize.set(1024,1024),Object.assign(n.shadow.camera,{left:-43,right:43,top:40,bottom:-40,near:1,far:145}),n.shadow.bias=-15e-5,n.shadow.normalBias=.045,e.add(n,n.target);let r=!1,s=0,a=!1;const o=new bs,l=[];function c(z){const q=o.load(xs(z),()=>{if(r){q.dispose();return}s++,t()},void 0,()=>{r||(a=!0,t())});return q.colorSpace=Le,q.anisotropy=4,l.push(q),q}const f=c("art/forest-v036/materials.png"),h=c("art/forest-v036/leaves.png"),u=Do();l.push(u);const d=Oe(f,2,.22,"#eeece4"),_=Oe(f,0,.17,"#d7dcd8"),A=Oe(f,1,.12,"#dce0cf"),m=Oe(f,3,.16,"#c3d0d2"),p=new _s({roughness:.85}),E=new De({toneMapped:!1});m.side=Re;const L=hu(h),M=du(),w={box:new Xn(1,1,1),slab:fu(),rock:new Sr(.65,1),trunk:new Hi(.42,.5,1,10),sphere:new Cn(.5,12,8),roof:uu(),card:new Ve(1,1),torus:new Hn(.5,.08,5,12)},I=Array.from({length:3},(z,q)=>os(q*1.3)),k=new Map;function v(z,q,et,G,ht,xt,Et,wt,It,j="#ffffff",Pt=0,vt=0,Lt=0){const Ut=k.get(z)??{geometry:q,material:et,parts:[]},bt={position:nr(G,ht,xt),scale:nr(Et,wt,It),rotation:new Ze(Lt,Pt,vt),color:new qt(j)};return Ut.parts.push(bt),k.set(z,Ut),bt}const N=(z,q,et,G,ht,xt,Et="#ffffff",wt=0)=>v("stone",w.box,_,z,q,et,G,ht,xt,Et,wt),P=(z,q,et,G,ht,xt,Et="#574239",wt=0,It=0)=>v("beams",w.box,p,z,q,et,G,ht,xt,Et,wt,It),Z=(z,q,et,G,ht,xt,Et=0)=>v("boulders",w.rock,_,z,q,et,G,ht,xt,"#9fa59c",Et,Et*.07),C=[];function F(z,q,et,G=1){N(z,q+.12*G,et,1.3*G,.24*G,1.3*G),N(z,q+.3*G,et,1.04*G,.16*G,1.04*G),v("stone-columns",w.trunk,_,z,q+1*G,et,.72*G,1.35*G,.72*G),N(z,q+1.72*G,et,1.22*G,.2*G,1.22*G),N(z,q+2.7*G,et,1.22*G,.16*G,1.22*G);for(const ht of[-1,1])for(const xt of[-1,1])N(z+ht*.49*G,q+2.2*G,et+xt*.49*G,.15*G,.85*G,.15*G);v("lights",w.box,E,z,q+2.2*G,et,.66*G,.68*G,.66*G,"#ffd58b"),v("lamp-roofs",w.roof,_,z,q+2.78*G,et,.91*G,.74*G,.91*G,"#959d92"),v("finials",w.sphere,_,z,q+3.45*G,et,.23*G,.4*G,.23*G),C.push(nr(z,q+2.2*G,et))}function T(z,q,et,G,ht,xt){v("tile-roofs",w.roof,m,z,q,et,G,xt,ht),P(z,q+.88*xt,et,G*1.24,.22,.24,"#71858b");for(const Et of[-1,1]){P(z,q+.23*xt,et+Et*ht,G*2,.19,.2,"#536868");for(let wt=-5;wt<=5;wt++)P(z+wt*G*.16,q+.02,et+Et*ht*.89,.17,.22,ht*.4,"#5b5141");v("ridge-ends",w.torus,p,z+Et*G*.64,q+.99*xt,et,.8,.8,.8,"#788886",0,0,0)}}function K(z,q,et,G){N(z,q+.4,et,15*G,.8,10*G,"#c3c4b8"),N(z,q+.88,et,14*G,.2,9.2*G),v("plaster",w.box,p,z,q+3*G,et,11.3*G,4.2*G,6.2*G,"#adad8e");for(const ht of[-1,1])for(let xt=-2;xt<=2;xt++){const Et=z+xt*2.8*G,wt=et+ht*3.5*G;v("wood-columns",w.trunk,d,Et,q+3.15*G,wt,.53*G,5.25*G,.53*G,"#b1a49b"),N(Et,q+1.05*G,wt,.84*G,.36*G,.84*G),P(Et,q+5.5*G,wt,1.2*G,.24*G,1.05*G,"#496358"),P(Et,q+5.76*G,wt,1.55*G,.23*G,.84*G,"#816354")}for(const ht of[-1,1]){P(z,q+1.23*G,et+ht*3.35*G,12*G,.2*G,.3*G),P(z,q+5.3*G,et+ht*3.5*G,13*G,.3*G,.42*G);for(const xt of[-1.5,-.5,.5,1.5]){const Et=z+xt*2.75*G,wt=et+ht*3.16*G;v("lights",w.box,E,Et,q+3.13*G,wt,2.35*G,3.15*G,.045,"#b69560");for(let It=-4;It<=4;It++)P(Et+It*.255*G,q+3.13*G,wt+ht*.08,.055*G,3.25*G,.04,"#493a2e");for(let It=-3;It<=3;It++)P(Et,q+(3.13+It*.45)*G,wt+ht*.09,2.4*G,.055*G,.04,"#493a2e")}}T(z,q+5.72*G,et,7.9*G,5.3*G,3.3*G),P(z,q+5.3*G,et+3.8*G,3*G,.75*G,.12,"#233f42");for(let ht=-2;ht<=2;ht++)P(z+ht*.47*G,q+5.3*G,et+3.89*G,.1,.34*G,.035,"#ceb879");for(const ht of[-1,1])F(z+ht*8.5*G,q,et+4*G,1.1*G),rt(z+ht*6.7*G,q+.95,et+4.2*G,1.4*G)}function rt(z,q,et,G){N(z,q,et,1.6*G,.4*G,1.8*G),v("statues",w.sphere,_,z,q+.78*G,et,1.35*G,1.55*G,1.15*G,"#969e92"),v("statues",w.sphere,_,z,q+1.72*G,et+.13*G,1.27*G,1.16*G,1.25*G,"#afb2a4"),v("statues",w.sphere,_,z,q+1.52*G,et+.65*G,.86*G,.52*G,.74*G);for(const ht of[-1,1])v("statues",w.sphere,_,z+ht*.37*G,q+.36*G,et+.53*G,.44*G,.64*G,.86*G),v("statues",w.sphere,_,z+ht*.47*G,q+2.05*G,et+.04*G,.48*G,.6*G,.33*G),v("statue-eyes",w.sphere,p,z+ht*.26*G,q+1.82*G,et+.62*G,.14*G,.1*G,.07*G,"#2c3735")}function nt(z,q,et,G=1){for(const ht of[-1,1])N(z+ht*4.4*G,q+.3,et,1.2,.6,1.2),v("wood-columns",w.trunk,d,z+ht*4.4*G,q+3.5*G,et,.64,7*G,.64);P(z,q+6.3*G,et,10*G,.45,.55,"#655346"),T(z,q+6.7*G,et,6*G,2.3*G,1.7*G)}const mt=new Ve(170,375,90,185);mt.rotateX(-Math.PI/2),mt.translate(0,0,-110);const lt=mt.getAttribute("position"),_t=[];for(let z=0;z<lt.count;z++){const q=lt.getX(z),et=lt.getZ(z);lt.setY(z,Qn(q,et));const G=new qt("#eef1dd").multiplyScalar(.72+Ot(q,et)*.2);_t.push(G.r,G.g,G.b)}mt.setAttribute("color",new $t(_t,3)),mt.computeVertexNormals(),A.vertexColors=!0;const Y=new se(mt,A);Y.receiveShadow=!0,e.add(Y);for(let z=0;z<270;z++){const q=-2+z*.089,et=be(q),G=be(q+.01),ht=Math.atan2(G.x-et.x,G.z-et.z),xt=Math.cos(ht),Et=Math.sin(ht);for(let wt=0;wt<2;wt++){const It=(wt-.5)*3.4,j=(Ot(z,wt)-.5)*.13;v("paving",w.slab,_,et.x+xt*It,et.y+.035,et.z-Et*It,3.32,.6,.78,"#d5d9cb",ht+j*.3)}if(z%5===0)for(const wt of[-1,1]){const It=wt*(3.7+Ot(z,wt)*.7);Z(et.x+xt*It,Qn(et.x+xt*It,et.z)+.2,et.z-Et*It,1.05,.64,.8,z*.7)}}const $=Eg(i);for(let z=0;z<$.length;z++){const q=$[z],et=q.scale,G=z%3;v("trees-"+G,I[G],d,q.x,q.y,q.z,et,et,et,"#eeeeea",q.seed).treeZ=q.z;const ht=q.distant?10:18;for(let xt=0;xt<ht;xt++){const Et=xt*2.399+q.seed,wt=(1+Ot(xt,q.seed)*3.9)*et,It=9+Ot(xt,q.seed+1)*4.2;v("canopy",w.card,L.mat,q.x+Math.cos(Et)*wt,q.y+It*et,q.z+Math.sin(Et)*wt,(4+Ot(xt,2)*2.4)*et,(3.8+Ot(xt,3)*2)*et,1,"#ffffff",Et,Ot(xt,q.seed)*.7-.35,-.45-Ot(xt,q.seed+5)*1).treeZ=q.z}}for(let z=0;z<490;z++){const q=Ot(z,3)*25-2,et=be(q),G=z%2?1:-1,ht=et.x+G*(5.2+Ot(z,4)*26),xt=et.z,Et=Qn(ht,xt);if(z%3===0)Z(ht,Et+.25,xt,1.2+Ot(z,6)*2.5,.7+Ot(z,7),1.3+Ot(z,8)*1.7,z);else for(let wt=0;wt<3;wt++)v("undergrowth",w.card,L.mat,ht,Et+.55,xt,1.4,.95,1,"#b1ca95",z+wt*1.04,0,-.18)}for(let z=1;z<=20;z++){const q=be(z);F(q.x+(z%2?4.8:-4.8),q.y,q.z,.72),z%5===0&&F(q.x+(z%2?-4.8:4.8),q.y,q.z,.85)}const Q=be(11);nt(Q.x,Q.y,Q.z-3,1);for(const z of[6,15]){const q=be(z),et=z===6?-1:1,G=q.x+et*14;K(G,Qn(G,q.z),q.z-5,.52)}const O=be(20),g=O.x,S=O.y,y=O.z;N(g,S-.04,y-4,24,.2,16,"#cad0c5");for(let z=0;z<11;z++)N(g,S+.14+z*.145,y-7.5-z*.55,11,.27,.61,"#d0d4ca");K(g,S+1.4,y-20,1.12);for(const z of[-1,1])for(let q=0;q<9;q++){const et=g+z*(7+q*1.7);N(et,S+.83,y-12,1.62,1.7,1),N(et,S+1.8,y-12,1.8,.24,1.25,"#a1aba0"),q%3===0&&(N(et,S+1.4,y-12,1.1,2.8,1.1),v("wall-caps",w.roof,_,et,S+2.8,y-12,.94,.6,.94))}for(const z of[-1,1])F(g+z*7,S,y-3,1.25);const U=new ae,V=new _n;let ut;const Mt=[];for(const[z,q]of k){const et=new Bi(q.geometry,q.material,q.parts.length);q.parts.forEach((G,ht)=>{U.compose(G.position,V.setFromEuler(G.rotation),G.scale),et.setMatrixAt(ht,U),et.setColorAt(ht,G.color)}),et.castShadow=!["lights","undergrowth"].includes(z),et.receiveShadow=z!=="lights",et.name=z,e.add(et),z==="lights"&&(ut=et),(z.startsWith("trees-")||z==="canopy")&&Mt.push({mesh:et,parts:q.parts})}const Ct=Array.from({length:2},()=>{const z=new eu("#ffb96b",24,14,1.6);return e.add(z),z}),kt=C.flatMap(z=>[z.x,z.y,z.z]),D=new he;D.setAttribute("position",new $t(kt,3));const W=new si({map:u,color:"#ffc47d",size:5.8,transparent:!0,blending:Vn,depthWrite:!1,opacity:.75});e.add(new zi(D,W));const X=new se(new Cn(195,24,16),Tg());e.add(X);const R=new se(new Cn(3,24,16),new De({color:"#e5f0ed",toneMapped:!1}));X.add(R),R.position.set(-58,66,-125);const it=new Nc(new xo({map:u,color:"#b8d4e3",opacity:.24,transparent:!0,depthWrite:!1,blending:Vn}));it.scale.set(27,27,1),it.position.copy(R.position),X.add(it);const ft=new ei,pt=new Ve(1,1);for(let z=0;z<14;z++){const q=new se(pt,M.mat),et=12-z*17,G=vn(1-et/8.8);q.position.set(G,Qn(G,et)+.5,et),q.scale.set(32,21,1),q.rotation.x=-Math.PI/2+.04,ft.add(q)}e.add(ft);const St=[];for(let z=0;z<160;z++){const q=15-z*1.3,et=vn(1-q/8.8)+Math.sin(z*4.1)*11;St.push(et,Qn(et,q)+.8+Ot(z,7)*2.8,q)}const yt=new he;yt.setAttribute("position",new $t(St,3));const H=new zi(yt,new si({color:"#d4e7a0",map:u,size:.32,transparent:!0,opacity:.85,depthWrite:!1,blending:Vn}));e.add(H);const Zt=new se(new Hn(1.28,.046,5,48),new De({color:"#e8cf90"}));Zt.rotation.x=-Math.PI/2,e.add(Zt);const Yt=new se(new ci(1.2,36),new De({color:"#d9bf74",transparent:!0,opacity:.12,depthWrite:!1}));Yt.rotation.x=-Math.PI/2,e.add(Yt);const B=Uo(i,t);e.add(B.group);let x=1/0;const st=nr(0,0,0),ct=nr(0,0,0);function gt(z,q,et,G,ht){if(L.time.value=q?0:z*.001,M.time.value=q?0:z*.001,W.opacity=q?.72:.7+Math.sin(z*.0016)*.055,ht){X.position.set(ht.x,ht.y,ht.z),ct.set(ht.x,ht.y,ht.z);const xt=[...C].sort((wt,It)=>wt.distanceToSquared(ct)-It.distanceToSquared(ct)).slice(0,2);Ct.forEach((wt,It)=>{xt[It]&&wt.position.copy(xt[It]),wt.intensity=q?24:24+Math.sin(z*.0017+It)*1.1});const Et=ht.z+7;if(Math.abs(Et-x)>.2){x=Et;for(const wt of Mt){let It=!1;wt.parts.forEach((j,Pt)=>{const vt=j.treeZ<=Et;vt!==j.visible&&(j.visible=vt,U.compose(j.position,V.setFromEuler(j.rotation),vt?j.scale:st),wt.mesh.setMatrixAt(Pt,U),It=!0)}),It&&(wt.mesh.instanceMatrix.needsUpdate=!0)}}}}function At(z,q,et,G,ht,xt){const Et=be(q),wt=.18+ht*.7,It=(et<550?34:29)*xt;z.aspect=et/G,z.position.set(Et.x+Math.sin(wt)*It,Et.y+It*(et<550?.59:.48),Et.z+Math.cos(wt)*It),z.lookAt(Et.x,Et.y+1.9,Et.z-5),z.updateProjectionMatrix(),z.updateMatrixWorld()}function Rt(){var et;r=!0,B.dispose();for(const G of l)G.dispose();const z=new Set([...Object.values(w),...I]),q=new Set([d,_,A,m,p,E,L.mat,M.mat]);e.traverse(G=>{const ht=G;if(ht instanceof Bi&&ht.dispose(),ht.geometry&&z.add(ht.geometry),ht.material)for(const xt of Array.isArray(ht.material)?ht.material:[ht.material])q.add(xt)});for(const G of z)G.dispose();for(const G of q)G.dispose();(et=n.shadow.map)==null||et.dispose(),e.clear()}return{scene:e,sun:n,marker:Zt,glow:Yt,lights:ut,particles:H,boss:B,updateAmbient:gt,dispose:Rt,placeCamera:At,scenery:bg.id,backdropReady:()=>s===2,assetsFailed:()=>a}}function Rg(i,t){const e=fc(i),n=Y=>uc(i,Y),r=(Y,$)=>cc(i,Y,$),s={box:new Xn(1,1,1),column:new Hi(.5,.5,1,12),cone:new ys(.5,1,12),rock:new Sr(.65,1),sphere:new Cn(.5,12,8),ring:new Hn(.5,.045,6,28),fineRing:new Hn(.5,.012,6,48),seal:new xr(.493,.5,72),disc:new ci(.5,40),roof:uu(),slab:fu(),card:new Ve(1,1),jade:new wo(.5,1),tree0:os(0),tree1:os(1.3),tree2:os(2.6)},a=new Map,o=[],l=[],c=new Map;let f;function h(Y,$,Q,O,g,S,y,U,V="#ffffff",ut=0,Mt=0,Ct=0){const kt=Y+":"+$,D=a.get(kt)??{geometry:s[Y],material:t[$],parts:[]};D.parts.push({position:new J(Q,O,g),scale:new J(S,y,U),rotation:new Ze(Ct,ut,Mt),color:new qt(V),cutZ:f}),a.set(kt,D)}const u=(Y,$,Q,O,g,S,y,U="#ffffff",V=0)=>h("box",Y,$,Q,O,g,S,y,U,V),d=(Y,$,Q,O,g,S,y="#ffffff")=>h("column",Y,$,Q,O,g,S,g,y);function _(Y,$,Q,O,g="#ffffff"){const S=$.clone().add(Q).multiplyScalar(.5),y=new _n().setFromUnitVectors(new J(0,1,0),Q.clone().sub($).normalize()),U=new Ze().setFromQuaternion(y);h("column",Y,S.x,S.y,S.z,O,$.distanceTo(Q),O,g,U.y,U.z,U.x)}function A(Y,$){const Q=()=>[...a.values()].reduce((g,S)=>g+S.parts.length,l.length),O=Q();$(),c.set(Y,Q()-O)}function m(Y,$){const Q=f;f=Y,$(),f=Q}const p=(Y,$,Q,O=3,g=2,S=3,y=0)=>h("rock","cliff",Y,$,Q,O,g,S,"#bbc4c0",y,y*.07);function E(Y,$,Q,O,g,S=2){h("roof","roof",Y,$,Q,O,S,g,"#cad6d6"),u("wood",Y,$+.88*S,Q,O*1.25,.18,.22);for(const y of[-1,1]){u("wood",Y,$+.2*S,Q+y*g,O*2,.15,.2);for(let U=-4;U<=4;U++)u("wood",Y+U*O*.2,$+.01,Q+y*g*.89,.13,.2,g*.35)}}function L(Y,$,Q,O=1,g=!1){g||(u("stone",Y,$+.15*O,Q,1.1*O,.3*O,1.1*O),d("stone",Y,$+.95*O,Q,.55*O,1.5*O),u("stone",Y,$+1.68*O,Q,1.05*O,.18*O,1.05*O));const S=$+(g?.55:2.16)*O;if(h(g?"sphere":"box","light",Y,S,Q,.76*O,.79*O,.76*O,e.light),g)d("wood",Y,S+.53*O,Q,.52*O,.16*O),d("wood",Y,S-.5*O,Q,.5*O,.1*O),u("cloth",Y,S-.93*O,Q,.12*O,.65*O,.06,"#cf8670");else{for(const y of[-1,1])for(const U of[-1,1])u("stone",Y+y*.46*O,S,Q+U*.46*O,.12*O,.91*O,.12*O);h("roof","stone",Y,S+.5*O,Q,.83*O,.6*O,.83*O)}o.push(new J(Y,S,Q))}function M(Y,$,Q,O=1,g="plaster",S=!1){m(Q,()=>{u("stone",Y,$+.3*O,Q,13.8*O,.6*O,9*O),u("wood",Y,$+.67*O,Q,12.8*O,.18*O,8.2*O),S||u(g,Y,$+2.8*O,Q,11.5*O,4.2*O,6.3*O);for(const y of[-1,1])for(let U=-2;U<=2;U++){const V=Y+U*2.7*O,ut=Q+y*3.65*O;d(g==="red"?"red":"wood",V,$+3.1*O,ut,.47*O,5.1*O),u("stone",V,$+.9*O,ut,.85*O,.32*O,.85*O),u("wood",V,$+5.2*O,ut,1.3*O,.26*O,.75*O)}if(!S)for(const y of[-1.5,-.5,.5,1.5]){const U=Y+y*2.75*O,V=Q+3.19*O;u("light",U,$+2.85*O,V,2.25*O,2.9*O,.045,"#c8b387");for(let ut=-3;ut<=3;ut++)u("wood",U+ut*.29*O,$+2.85*O,V+.07,.065*O,2.96*O,.05),u("wood",U,$+(2.85+ut*.4)*O,V+.08,2.3*O,.055*O,.05)}for(const y of[-1,1])u("wood",Y,$+5.05*O,Q+y*3.65*O,13.3*O,.3*O,.36*O);E(Y,$+5.3*O,Q,7.7*O,5*O,2.8*O)})}function w(Y,$,Q,O=1,g="wood"){m(Q,()=>{for(const S of[-1,1])u("stone",Y+S*4.8*O,$+.3,Q,1.2,.6,1.2),d(g,Y+S*4.8*O,$+3.6*O,Q,.65*O,7.2*O);u(g,Y,$+6.65*O,Q,11.2*O,.45*O,.55*O),E(Y,$+7*O,Q,6.4*O,2.5*O,1.9*O)})}function I(Y,$,Q,O=12,g=9,S="sand"){m(Q,()=>{for(const y of[-1,1])u(S,Y+y*O/2,$+g*.4,Q,1.8,g*.8,2.3),u(S,Y+y*O/2,$+.3,Q,2.6,.6,3),u(S,Y+y*O/2,$+g*.76,Q,2.4,.45,2.7);for(let y=0;y<=10;y++){const U=y/10*Math.PI;h("box",S,Y+Math.cos(U)*O/2,$+g*.72+Math.sin(U)*O*.28,Q,O*.17,1.25,2.5,"#e0d6c3",0,U-Math.PI/2)}})}function k(Y,$,Q,O=1,g=1,S=!1){m(Q,()=>{if(h(["tree0","tree1","tree2"][Math.abs(Math.floor(g))%3],S?"ash":"bark",Y,$,Q,O,O,O,"#e3e5d9",g),!S)for(let y=0;y<12;y++){const U=y*2.399+g,V=(1+Ot(y,g)*4)*O;h("card","leaves",Y+Math.cos(U)*V,$+(9+Ot(y,g+1)*4)*O,Q+Math.sin(U)*V,5.3*O,4.5*O,1,"#f0f1e0",U,Ot(y,g)*.5,-.5-Ot(y,g+4))}})}function v(Y,$,Q,O=1,g=1){m(Q,()=>{for(let S=0;S<5;S++){const y=Y+Math.sin(S*2.4)*1.5,U=Q+Math.cos(S*2.4)*1.5,V=(7+Ot(S,g)*4)*O;d("plain",y,$+V/2,U,.21*O,V,"#74876a");for(let ut=1;ut<7;ut++)d("plain",y,$+ut*V/7,U,.24*O,.08,"#abc29a");for(let ut=0;ut<4;ut++)h("card","leaves",y+Math.sin(ut*2.4)*1.5,$+V-1+ut*.45,U,3*O,1.5*O,1,"#cadcb8",ut*1.3,0,-.5)}})}function N(Y,$,Q,O,g="z",S=!1){const y=S?"iron":"wood";for(let U=0;U<=O;U+=1.2){const V=U-O/2;d(y,Y+(g==="x"?V:0),$+1.5,Q+(g==="z"?V:0),S?.16:.28,3)}u(y,Y,$+1.1,Q,g==="x"?O:.18,.18,g==="z"?O:.18),u(y,Y,$+2.6,Q,g==="x"?O:.18,.18,g==="z"?O:.18)}function P(Y,$,Q,O=!0,g=0){u("wood",Y,$+1.15,Q,3.5,.35,5.7);for(const S of[-1,1])for(const y of[-1,1]){h("ring","iron",Y+S*1.95,$+.85,Q+y*1.8,1.8,1.8,1.8,"#b8b4aa",Math.PI/2);for(let U=0;U<6;U++)h("box","wood",Y+S*1.97,$+.85,Q+y*1.8,.1,1.66,.1,"#d3c5ac",0,U*Math.PI/3,Math.PI/2)}for(const S of[-1,1])if(u("wood",Y+S*1.25,$+1,Q+4,.16,.16,3),O)for(let y=0;y<8;y++)d("iron",Y+S*1.6,$+2.8,Q-2.5+y*.72,.11,3.05);if(O){for(const S of[-1,1])for(let y=0;y<6;y++)d("iron",Y-1.55+y*.62,$+2.8,Q+S*2.5,.11,3.05);u("wood",Y,$+4.35,Q,3.7,.25,5.85)}else for(let S=0;S<4;S++)Z(Y+(S%2-.5)*1.6,$+1.35,Q+(Math.floor(S/2)-.5)*2,1.35)}function Z(Y,$,Q,O=1.5){u("wood",Y,$+O*.5,Q,O,O,O);for(const g of[-1,1])u("iron",Y+g*O*.35,$+O*.5,Q,O*.08,O*1.04,O*1.03)}function C(Y,$,Q,O=1,g=!1){const S=g?"ash":"wood";for(const y of[-1,1])u(S,Y+y*2.35*O,$+2.5*O,Q,.23*O,5*O,1.3*O);for(let y=0;y<4;y++){const U=$+(.25+y*1.4)*O;u(S,Y,U,Q,5*O,.18*O,1.45*O);for(let V=0;V<7;V++)g&&V%3===0||(u(g?"ash":"plaster",Y+(V-3)*.61*O,U+.43*O,Q,.45*O,.73*O,1.01*O,["#eadabe","#aba79b","#b8c3b8"][V%3]),u("red",Y+(V-3)*.61*O,U+.43*O,Q+.52*O,.08*O,.75*O,.025))}}function F(Y,$,Q,O=6,g="#b58b6f"){d("wood",Y,$+O/2,Q,.15,O),h("card","cloth",Y+1,$+O-1.4,Q,2,2.5,1,g)}function T(Y,$,Q,O=1,g=!1){m(Q,()=>{d(g?"ash":"plaster",Y,$+1.5*O,Q,6.8*O,3*O,g?"#8f8270":"#e0d6bb"),h("cone",g?"ash":"plaster",Y,$+3.8*O,Q,7.2*O,2*O,7.2*O,"#c0baa1");for(const S of[.7,2.4])h("fineRing","wood",Y,$+S*O,Q,6.9*O,6.9*O,6.9*O,"#a28873",0,0,Math.PI/2);u("wood",Y,$+1.1*O,Q+3.43*O,1.5*O,2.2*O,.12)})}function K(Y,$,Q,O=1){u("stone",Y,$+.2,Q,5.4*O,.4,6*O);for(const g of[-1,1]){for(let S=0;S<8;S++)d("iron",Y+g*2.5*O,$+2.7*O,Q+(S-3.5)*.8*O,.13*O,5*O);for(let S=0;S<7;S++)d("iron",Y+(S-3)*.8*O,$+2.7*O,Q+g*2.8*O,.13*O,5*O);u("iron",Y,$+5.25*O,Q+g*2.8*O,5.3*O,.23,.28)}u("stone",Y,$+5.45*O,Q,5.7*O,.4,6.1*O),u("plaster",Y,$+4.3*O,Q+2.88*O,1.05*O,.7*O,.07)}function rt(Y,$,Q=!0){_("iron",Y,$,.38),Q&&_("light",Y.clone().add(new J(0,.04,0)),$.clone().add(new J(0,.04,0)),.13,e.light)}function nt(Y,$,Q,O=1,g=!0){d("stone",Y,$+.25*O,Q,5.2*O,.5*O),d("iron",Y,$+1.9*O,Q,2.7*O,3.2*O);for(let S=0;S<3;S++)h("fineRing",g?"light":"iron",Y,$+(1.1+S*.83)*O,Q,3.4*O,3.4*O,3.4*O,g?e.light:"#82939c",0,0,Math.PI/2);for(const S of[-1,1])d("iron",Y+S*2*O,$+2.2*O,Q,.35*O,4.2*O)}function mt(Y,$=13,Q=!1){const O=n(Y);u(Q?"wood":"stone",O.x,O.y-.3,O.z,8,.6,$);for(const g of[-1,1]){for(let S=-$/2;S<=$/2;S+=2.5)d(Q?"wood":"stone",O.x+g*3.8,O.y+.75,O.z+S,.22,1.5);for(let S=0;S<12;S++){const y=S/12*$-$/2,U=(S+1)/12*$-$/2;_(Q?"wood":"stone",new J(O.x+g*3.8,O.y+1.1-Math.sin(S/12*Math.PI)*.25,O.z+y),new J(O.x+g*3.8,O.y+1.1-Math.sin((S+1)/12*Math.PI)*.25,O.z+U),.11)}}}function lt(Y,$,Q){d("stone",Y,$+.5,Q,3.1,1),h("disc","plain",Y,$+1.01,Q,2.25,2.25,1,"#193039",0,0,-Math.PI/2),h("ring","stone",Y,$+1.02,Q,3,3,3,"#d2d1c6",0,0,Math.PI/2)}function _t(Y){const $=new ae,Q=new _n,O=[];for(const y of a.values()){const U=new Bi(y.geometry,y.material,y.parts.length);y.parts.forEach((V,ut)=>{$.compose(V.position,Q.setFromEuler(V.rotation),V.scale),U.setMatrixAt(ut,$),U.setColorAt(ut,V.color)}),U.castShadow=y.material!==t.light&&y.material!==t.leaves,U.receiveShadow=y.material!==t.light,Y.add(U),y.parts.some(V=>V.cutZ!==void 0)&&O.push({mesh:U,parts:y.parts})}let g=1/0;const S=new J;return y=>{const U=y+7;if(!(Math.abs(g-U)<.2)){g=U;for(const V of O){let ut=!1;V.parts.forEach((Mt,Ct)=>{const kt=Mt.cutZ===void 0||Mt.cutZ<=U;kt!==Mt.visible&&(Mt.visible=kt,$.compose(Mt.position,Q.setFromEuler(Mt.rotation),kt?Mt.scale:S),V.mesh.setMatrixAt(Ct,$),ut=!0)}),ut&&(V.mesh.instanceMatrix.needsUpdate=!0)}}}}return{chapter:i,environment:e,at:n,height:r,geometry:s,batches:a,lamps:o,waterfalls:l,landmarks:c,put:h,block:u,column:d,beam:_,mark:A,cutaway:m,rock:p,roof:E,lantern:L,house:M,gate:w,arch:I,tree:k,bamboo:v,fence:N,wagon:P,crate:Z,shelf:C,banner:F,ger:T,cage:K,conduit:rt,machine:nt,bridge:mt,well:lt,finish:_t}}const ye=(i,t,e)=>new J(i,t,e);function Cg(i){const{chapter:t,environment:e,at:n,height:r,put:s,block:a,column:o,rock:l,house:c,gate:f,arch:h,tree:u,bamboo:d,lantern:_,fence:A,wagon:m,crate:p,shelf:E,banner:L,ger:M,cage:w,conduit:I,machine:k,bridge:v,well:N,mark:P}=i,Z=n(20),C=Z.x,F=Z.y,T=Z.z,K=(g,S,y=13)=>{for(const U of g){const V=n(U);for(const ut of[-1,1]){const Mt=V.x+ut*y;S(Mt,r(Mt,V.z),V.z,ut,U)}}};function rt(g,S,y,U=8,V=10){for(let ut=0;ut<U;ut++)a("stone",g,S+ut*.15,y-ut*.6,V,.32,.7)}function nt(g,S,y,U=4){a("wood",g,S+1.2,y,U,.23,2);for(const V of[-1,1])a("wood",g+V*(U/2-.3),S+.6,y,.18,1.2,1.65);for(let V=0;V<4;V++)a("plaster",g+(V-1.5)*.65,S+1.37,y,.5,.05,1,"#e8d9bb")}function mt(g,S,y,U=1,V=!1){const ut=V?"ash":"wood";i.cutaway(y,()=>{for(const Mt of[-1,1])for(const Ct of[-1,1])o(ut,g+Mt*2*U,S+4*U,y+Ct*2*U,.45*U,8*U);a(ut,g,S+7.4*U,y,5*U,.4,5*U);for(const Mt of[-1,1])a(ut,g+Mt*2.3*U,S+8.2*U,y,.13,1.3,4.6*U),i.beam(ut,ye(g-2*U,S,y+Mt*2*U),ye(g+2*U,S+7*U,y+Mt*2*U),.28);if(!V){for(const Mt of[-1,1])for(const Ct of[-1,1])o("wood",g+Mt*2*U,S+8.8*U,y+Ct*2*U,.25*U,2.8*U);i.roof(g,S+10*U,y,3.1*U,3.1*U,1.8*U)}})}function lt(g,S,y,U="#a8624d"){for(const V of[-1,1])o("wood",g+V*2.2,S+2,y,.15,4);s("card","cloth",g,S+4,y,5.4,4,1,U,0,0,-Math.PI/2+.15),nt(g,S,y);for(let V=0;V<3;V++)p(g+(V-1)*1.3,S,y+2.3,1)}function _t(g,S=16){const y=n(g);for(const U of[-1,1])o("wood",y.x+U*S/2,y.y+4.3,y.z,.18,8.6);for(let U=0;U<10;U++){const V=y.x-S/2+U*S/9,ut=y.y+8.3-Math.sin(U/9*Math.PI)*1.4;a("wood",V,ut,y.z,S/8,.055,.055),U%2===0&&_(V,ut-1,y.z,.72,!0)}}function Y(g,S,y,U=1){for(let V=0;V<6;V++){const ut=(3-V*.42)*U;for(let Mt=0;Mt<9;Mt++){const Ct=Mt/9*Math.PI*2;l(g+Math.cos(Ct)*ut,S+V*.7*U,y+Math.sin(Ct)*ut,1.6*U,1.05*U,1.4*U,Mt+V)}}o("wood",g,S+4*U,y,.18,8*U);for(let V=0;V<10;V++){const ut=V/10*Math.PI*2;L(g+Math.cos(ut)*4.8*U,S,y+Math.sin(ut)*4.8*U,5.5*U,["#c7ab81","#839bad","#aa6d64"][V%3])}}function $(g,S,y,U=1){o("iron",g,S+3*U,y,7*U,6*U,"#b2a69c"),o("cliff",g,S+8*U,y,4.4*U,5*U),s("ring","iron",g,S+2.9*U,y+3.54*U,4.2*U,4.2*U,4.2*U),s("disc","light",g,S+2.9*U,y+3.58*U,3.2*U,3.2*U,1,"#ff842d");for(const V of[-1,1])a("iron",g+V*3.4*U,S+2.1*U,y,.4,4.2*U,6*U);i.lamps.push(ye(g,S+2.8*U,y+4*U))}function Q(g,S,y,U=9){o("stone",g,S-.025,y,U*2,.4),s("seal","iron",g,S+.19,y,U*1.8,U*1.8,U*1.8,"#a8aa9c",0,0,Math.PI/2)}for(let g=0;g<270;g++){const S=-2+g*.09,y=n(S),U=n(S+.015),V=Math.atan2(U.x-y.x,-(U.z-y.z)),ut=Math.cos(V),Mt=Math.sin(V);for(const Ct of[-1,1])s("slab",e.ground==="metal"?"iron":"stone",y.x+Ct*1.7*ut,y.y+.035,y.z+Ct*1.7*Mt,3.3,.6,.81,"#d4d5c8",-V);g%3===0&&["cliff","water","void"].includes(e.terrain)&&a("cliff",y.x,y.y-.48,y.z,12,1,2.55,"#bbc3bd",-V)}for(let g=1;g<=20;g++){const S=n(g);_(S.x+(g%2?4.9:-4.9),S.y,S.z,.68)}if(e.terrain==="land")for(let g=0;g<108;g++){const S=-2+g*.34,y=n(S),U=g%2?1:-1,V=y.x+U*(17+Ot(g,t)*19),ut=r(V,y.z);["village","convoy","dojo"].includes(e.kind)?e.kind==="dojo"&&g%3!==0?d(V,ut,y.z,1,g):u(V,ut,y.z,.85+Ot(g,t+2)*.35,g):["archive","registry","festival","palace"].includes(e.kind)?g%3===0?c(V,ut,y.z,.7,e.kind==="palace"?"red":"plaster"):g%4===0&&u(V,ut,y.z,.7,g):(l(V,ut+.4,y.z,2+Ot(g,3)*3,1.6,3,g),g%14===0&&u(V,ut,y.z,.65,g,e.kind==="burned"))}else if(e.terrain==="cliff")for(let g=0;g<44;g++){const S=n(-2+g*.63),y=g%2?1:-1,U=S.x+y*(21+Ot(g,t)*22);l(U,-13,S.z,16+Ot(g,4)*12,34+Ot(g,5)*27,18+Ot(g,6)*10,g),g%3===0&&d(U,-1,S.z,.8,g)}else if(e.terrain==="interior"){for(let g=0;g<18;g++){const S=n(-1+g*1.45);for(const y of[-1,1])a("cliff",S.x+y*22,S.y+7,S.z,6,18,14,"#97a5a9"),o("sand",S.x+y*13,S.y+4.5,S.z,2.1,9,"#bbc1b4"),a("sand",S.x+y*13,S.y+9,S.z,3.3,.65,3.1)}for(const g of[1,7,13,19]){const S=n(g);h(S.x,S.y,S.z-5,25,13,"stone")}}else if(e.terrain==="water")for(let g=0;g<36;g++){const S=n(g*.7-2),y=g%2?1:-1,U=S.x+y*(14+Ot(g,t)*25);o("sand",U,2.5,S.z,1.8,7+Ot(g,2)*6),l(U,-1,S.z,7,3,6,g),g%4===0&&u(U,-1,S.z,.75,g)}else for(let g=0;g<38;g++){const S=n(g*.72-2),y=g%2?1:-1;l(S.x+y*(14+Ot(g,2)*25),S.y-8+Ot(g,t)*12,S.z,7+Ot(g,4)*8,5+Ot(g,5)*8,8,g)}if(e.terrain==="interior"){for(const g of[-1,1])a("cliff",C+g*17,F+9,T-52,28,22,6,"#8b9b9e");a("cliff",C,F+18,T-52,12,5,6,"#8b9b9e")}if(e.ground==="grass"){for(let g=0;g<18;g++){const S=n(-3+g*2.1),y=g%2?1:-1;s("sphere","grass",S.x+y*64,S.y-10,S.z,65,30+Ot(g,t)*12,62,"#b9c9a3")}for(let g=0;g<350;g++){const S=n(-2+Ot(g,t)*31),y=g%2?1:-1,U=S.x+y*(5.5+Ot(g,2)*25),V=r(U,S.z);for(let ut=0;ut<3;ut++)s("cone","plain",U+ut*.11,V+.28,S.z+ut*.1,.1,.56+Ot(g,ut)*.35,.11,e.kind==="burned"?"#807660":"#969e63",0,ut*.13-.13)}}switch(e.kind){case"village":P("village-houses",()=>K([2,6,10,15],(g,S,y,U,V)=>{c(g,S,y,V===15?.8:.65,"plaster"),A(g,S,y+5,9,"x"),U===1&&p(g-3,S,y+5.5,1.3)},11)),P("well",()=>{const g=n(8);N(g.x-7,g.y,g.z),nt(g.x+9,g.y,g.z)}),P("requisition-yard",()=>{a("stone",C,F-.08,T-4,25,.18,21),c(C-13,F,T-10,.8),c(C+13,F,T-10,.8),f(C,F,T-18,.85),nt(C,F,T-10,5);for(const g of[-1,1])L(C+g*7,F,T-7,5,"#aaa17e"),p(C+g*8,F,T+1,1.5)});break;case"convoy":P("cage-wagons",()=>K([3,7,11,16],(g,S,y,U,V)=>{m(g,S,y,!0),U===1&&V>8&&p(g+4,S,y,2)},8)),P("palisade",()=>K([4,8,12,16],(g,S,y)=>A(g,S,y,18),12)),P("checkpoint",()=>{const g=n(10);f(g.x,g.y,g.z-4,.95),a("stone",C,F-.1,T-6,29,.2,24);for(const S of[-1,1])m(C+S*8,F,T-3,!0),mt(C+S*12,F,T-14,.8);f(C,F,T-19,1.2),L(C-5,F,T-9,6,"#778582")});break;case"warehouse":P("shrine-door",()=>{const g=n(1);f(g.x,g.y,g.z-9,1,"wood")}),P("supply-racks",()=>K([4,8,12,16],(g,S,y,U)=>{E(g,S,y,1);for(let V=0;V<3;V++)p(g+U*2,S,y+V*2+3,1.8)},10)),P("three-link-machinery",()=>{a("stone",C,F-.1,T-6,27,.2,27);for(const g of[-1,1])w(C+g*10,F,T-3),k(C+g*8,F,T-13,.9),I(ye(C+g*8,F+1,T-13),ye(C,F+1,T-19));k(C,F,T-20,1.6),h(C,F,T-26,19,10,"sand")});break;case"waterfall":P("waterfall",()=>{for(const g of[6,15,20]){const S=n(g);l(S.x-22,-5,S.z-11,18,50,13,g),i.waterfalls.push({x:S.x-15,y:24,z:S.z-4,w:8,h:35,up:!1})}}),P("rope-bridge",()=>{v(8,17,!0),v(15,17,!0),K([3,11],(g,S,y)=>{a("stone",g,n(1-y/8.8).y-.7,y,11,1.4,15),m(g,n(1-y/8.8).y,y,!1)},10)}),P("convoy-shelter",()=>{a("cliff",C,F-.5,T-8,27,1,29),m(C-8,F,T-4,!0),m(C+8,F,T-9,!0),c(C,F,T-23,1,"wood",!0),v(20,17,!0)});break;case"dojo":P("bamboo-grove",()=>K([2,5,8,11,14,17],(g,S,y,U,V)=>d(g,S,y,1.15,V+U),9)),P("training-dummies",()=>K([6,10,14],(g,S,y)=>{o("wood",g,S+1.8,y,.5,3.6),a("wood",g,S+2.1,y,2.6,.22,.22),s("sphere","cloth",g,S+3.2,y,1.3,1.3,1.3,"#baaa87")},7)),P("barricaded-dojo",()=>{a("stone",C,F-.1,T-5,32,.2,29),c(C,F,T-23,1.4,"wood",!0);for(const g of[-1,1])c(C+g*15,F,T-8,.68),A(C+g*7,F,T-15,8,"x"),L(C+g*9,F,T+1,6,"#c1c3ad");rt(C,F,T-10,7,13)});break;case"foundry":P("ore-rails",()=>K([2,5,8,11],(g,S,y)=>{for(const U of[-1,1])a("iron",g+U,S+.06,y,.13,.1,22);for(let U=-5;U<=5;U++)a("wood",g,S,y+U*2,3,.15,.25);m(g,S+.15,y,!1)},9)),P("furnaces",()=>K([7,14],(g,S,y)=>$(g,S,y,.8),13)),P("forging-anvil",()=>{a("iron",C,F-.1,T-6,30,.2,29),$(C,F,T-23,1.8);for(const g of[-1,1]){$(C+g*11,F,T-8,.85),a("iron",C+g*7,F+1,T+1,2.4,2,3.3),a("iron",C+g*7,F+2.1,T+1,4,.45,1.8);for(let S=0;S<4;S++)s("box","iron",C+g*10+S*.3,F+1.5,T+4,.12,3,.18,"#cbd3d2",0,g*.23)}});break;case"archive":P("archive-buildings",()=>K([3,8,13],(g,S,y)=>c(g,S,y,.9,"plaster",!0),14)),P("document-shelves",()=>K([5,10,15],(g,S,y)=>{E(g,S,y,1.1),nt(g,S,y+3)},8)),P("inspector-hall",()=>{a("stone",C,F-.1,T-5,31,.2,28),c(C,F,T-23,1.45,"plaster",!0);for(const g of[-1,1])for(let S=0;S<3;S++)E(C+g*10,F,T-4-S*5,.85);nt(C,F,T-15,8),rt(C,F,T-12,6,13)});break;case"registry":P("market-stalls",()=>K([2,5,8,11],(g,S,y,U,V)=>{lt(g,S,y,V%2?"#a95f54":"#6d8f8c"),_(g,S+5,y,.8,!0),U===1&&L(g+3,S,y,5,"#c4b18e")},9)),P("canal-bridge",()=>{v(12,18);for(const g of[-1,1]){const S=n(12);a("plain",S.x+g*17,S.y-.75,S.z,21,.08,12,"#406c76")}_t(12)}),P("permit-booths",()=>{a("stone",C,F-.1,T-7,29,.2,29),c(C,F,T-21,1.3,"wood",!0);for(const g of[-1,1]){for(let S=0;S<3;S++)A(C+g*(6+S*1.2),F,T-3,10,"z");nt(C+g*7,F,T-12),E(C+g*10,F,T-15,.85)}f(C,F,T-15,1.15)});break;case"festival":P("lantern-canopies",()=>{for(const g of[3,6,10,14,18])_t(g,20);K([4,9,14],(g,S,y,U)=>lt(g,S,y,U===1?"#b86558":"#637dae"),10)}),P("festival-stage",()=>{const g=n(11);a("wood",g.x-13,g.y+.5,g.z,13,1,11),c(g.x-13,g.y+1,g.z-3,.7,"red",!0);for(const S of[-1,1])o("red",g.x-13+S*3,g.y+2,g.z+2,2.4,2)}),P("overloaded-conductor",()=>{a("stone",C,F-.1,T-7,38,.2,31),k(C,F,T-19,2.1);for(const g of[-1,1]){f(C+g*14,F,T-14,.8,"red");for(let S=0;S<3;S++)_(C+g*(7+S*3),F+6,T-8,.9,!0),o("wood",C+g*(7+S*3),F+3,T-8,.12,6);I(ye(C+g*15,F+.2,T+5),ye(C,F+.2,T-18))}Q(C,F,T,9)});break;case"palace":P("lotus-courts",()=>K([4,8,12],(g,S,y)=>{a("stone",g,S,y,12,.5,18),a("plain",g,S+.27,y,10,.04,16,"#557b76");for(let U=0;U<7;U++)s("disc","plain",g+Math.sin(U*3)*3,S+.31,y+Math.cos(U*3)*5,1.1,1.1,1,"#75987e",0,0,-Math.PI/2)},14)),P("red-palace-gates",()=>{for(const g of[5,11,16]){const S=n(g);f(S.x,S.y,S.z-4,1.2,"red")}}),P("banquet-hall",()=>{a("stone",C,F-.1,T-9,39,.2,35),rt(C,F,T-8,12,17),a("stone",C,F+.9,T-26,26,1.8,18),c(C,F+1.8,T-26,1.7,"red"),i.roof(C,F+15,T-26,6.5,5,2.6);for(const g of[-1,1])c(C+g*20,F,T-11,.8,"red"),_(C+g*8,F,T-4,1.25);nt(C,F+2,T-16,9)});break;case"sunken":P("flooded-pillars",()=>{for(const g of[3,7,12]){const S=n(g);h(S.x,S.y,S.z-6,17,11,"sand"),v(g,14)}}),P("submerged-shelves",()=>K([4,9,14],(g,S,y)=>{a("sand",g,.25,y,8,.6,11),E(g,-.5,y,1.25)},11)),P("dry-record-dais",()=>{a("sand",C,F-.3,T-7,29,.6,28);for(const g of[-1,1]){for(let S=0;S<3;S++)o("sand",C+g*11,F+5,T-3-S*7,2.2,10);E(C+g*7,F,T-15,1.25)}h(C,F,T-22,22,12),nt(C,F,T-18,8),Q(C,F,T,8)});break;case"prison":P("numbered-cells",()=>K([3,7,11,15],(g,S,y)=>w(g,S,y,1.05),10)),P("extraction-conduits",()=>K([5,10,15],(g,S,y,U)=>{k(g,S,y,.65),I(ye(g,S+2,y),ye(g-U*3,S+.15,y-8))},9)),P("release-chamber",()=>{a("stone",C,F-.1,T-7,32,.2,29);for(const g of[-1,1])w(C+g*10,F,T-7,1.2),w(C+g*10,F,T-17,1.2),I(ye(C+g*10,F+.2,T-7),ye(C,F+.2,T-23));k(C,F,T-23,2)});break;case"reverse":P("ascending-water",()=>{for(const g of[5,12,19]){const S=n(g);for(const y of[-1,1])o("sand",S.x+y*12,S.y+4,S.z,3,8),i.waterfalls.push({x:S.x+y*12,y:S.y+12,z:S.z+1.5,w:3.5,h:11,up:!0})}}),P("broken-colonnades",()=>K([3,8,14],(g,S,y,U)=>{o("sand",g,S+4,y,2.5,8),s("column","sand",g+U*4,S+1,y,2,8,2,"#b4bbaa",0,U*.9)},17)),P("reverse-pillar",()=>{Q(C,F,T,11),a("sand",C,F-.25,T-12,31,.5,30),k(C,F,T-20,2.1),o("sand",C,F+9,T-20,2,15);for(let g=0;g<3;g++)s("fineRing","light",C,F+5+g*3,T-20,8+g,8+g,8+g,"#95d8c4",0,0,Math.PI/2);for(const g of[-1,1])h(C+g*15,F,T-21,8,10)});break;case"outpost":P("dry-river",()=>{const g=n(6);for(let S=0;S<28;S++){const y=g.x-35+S*2.6,U=g.z+Math.sin(S*.5)*3;l(y,r(y,U)+.1,U,3,.7,3,S)}v(6,11,!0)}),P("watchtowers",()=>K([3,10,16],(g,S,y)=>{mt(g,S,y,.75),A(g,S,y+5,10,"x")},14)),P("abandoned-post",()=>{a("grass",C,F-.1,T-8,34,.2,30),mt(C-11,F,T-15,1.1),M(C+10,F,T-12,1.1);for(const g of[-1,1])A(C+g*15,F,T-3,19),L(C+g*5,F,T-16,7,"#b29c7c");nt(C,F,T-13,6)});break;case"obo":P("refugee-gers",()=>K([3,7,11],(g,S,y,U)=>{M(g,S,y,.8),m(g+U*5,S,y,!1)},13)),P("prayer-flags",()=>K([5,10,15],(g,S,y,U,V)=>{L(g,S,y,7,["#b57361","#809baf","#c5b27f"][V%3]),l(g+U*2,S+.5,y,3,2,3,V)},7)),P("siege-obo",()=>{Q(C,F,T,12),Y(C,F,T-15,1.55),M(C-16,F,T-6,.85),M(C+15,F,T-10,.85);for(const g of[-1,1]){A(C+g*12,F,T+5,10,"x");for(let S=0;S<4;S++)l(C+g*10,F+.6,T-S*3,2.5,1.8,2,S)}});break;case"burned":P("burned-timbers",()=>K([3,7,11],(g,S,y,U)=>{for(let V=0;V<5;V++)s("column","ash",g+(V-2)*1.7,S+2,y,.25,4+Ot(V,t)*2,.25,"#b1a899",0,U*.35);a("ash",g,S+.1,y,10,.2,12)},10)),P("courier-station",()=>{const g=n(12);mt(g.x-14,g.y,g.z,.85,!0),m(g.x+10,g.y,g.z,!1),L(g.x+6,g.y,g.z-8,6,"#807a72")}),P("saved-records",()=>{a("ash",C,F-.1,T-8,34,.2,30);for(const g of[-1,1]){for(let S=0;S<4;S++)o("ash",C+g*11,F+3.5,T-4-S*5,.5,7-S*.45);E(C+g*8,F,T-14,1,!0)}s("box","ash",C,F+6,T-20,23,.35,.45,"#a9a08d",0,.09),nt(C,F,T-11,7);for(let g=0;g<5;g++)p(C+(g-2)*2,F,T-18,1.5)});break;case"junction":P("branching-causeways",()=>{for(const g of[5,11,16]){const S=n(g);a("stone",S.x,S.y-.2,S.z,34,.4,8);for(const y of[-1,1])h(S.x+y*14,S.y,S.z-2,7,7)}}),P("three-dark-conduits",()=>{for(const g of[6,12,18]){const S=n(g);k(S.x-8,S.y,S.z,.8,!1),k(S.x+8,S.y,S.z,.8,!1)}}),P("triple-gate",()=>{a("stone",C,F-.25,T-9,47,.5,33);for(const g of[-15,0,15])h(C+g,F,T-20,11,11),a("cliff",C+g,F+4,T-23,9,8,1.6,"#586572"),I(ye(C+g,F+.08,T-19),ye(C+g*.4,F+.08,T-1),!1)});break;case"power":P("energy-turbines",()=>K([4,9,14],(g,S,y)=>k(g,S,y,1.25),11)),P("hostage-platforms",()=>K([6,12,17],(g,S,y,U)=>{w(g,S,y,.9),I(ye(g,S+.5,y),ye(g-U*6,S+.15,y-7))},11)),P("armour-conduits",()=>{Q(C,F,T,11),a("iron",C,F-.25,T-11,38,.5,37);for(const g of[-1,1])k(C+g*12,F,T-13,2),I(ye(C+g*12,F+.25,T-13),ye(C,F+.25,T-1));h(C,F,T-27,27,15,"stone"),s("ring","iron",C,F+9,T-23,13,13,13,"#c2c5c3")});break;case"judgment":P("dormant-conduits",()=>K([4,9,14],(g,S,y)=>k(g,S,y,1.1,!1),13)),P("duel-court",()=>{a("stone",C,F-.18,T-7,39,.36,33),Q(C,F,T,11);for(const g of[-1,1]){for(let S=0;S<4;S++)o("stone",C+g*16,F+6,T+5-S*10,2.2,12),a("stone",C+g*16,F+12,T+5-S*10,3.5,.6,3.2);I(ye(C+g*10,F+.05,T+5),ye(C+g*10,F+.05,T-20),!1)}}),P("single-jade-dais",()=>{rt(C,F,T-10,10,14),o("stone",C,F+2,T-22,8,2),o("iron",C,F+4,T-22,2.7,3),s("jade","light",C,F+6.1,T-22,1.4,2.3,1.4,"#afe3c9"),h(C,F+1,T-28,21,14)});break;case"evacuation":P("fractured-bridges",()=>{for(const g of[3,8,13,18]){v(g,13);const S=n(g);for(const y of[-1,1])l(S.x+y*8,S.y-3,S.z-5,7,5,8,g),s("column","stone",S.x+y*8,S.y+3,S.z-3,1.8,9,1.8,"#aaa8b2",0,y*.24)}}),P("shelter-three-groups",()=>{for(let g=0;g<3;g++){const S=n(6+g*5),y=g%2?1:-1,U=S.x+y*13;a("stone",U,S.y-.4,S.z,16,.8,15),c(U,S.y,S.z-2,.6,"plaster",!0);for(let V=0;V<3;V++)p(U+(V-1)*2,S.y,S.z+3,1.4),_(U+(V-1)*3,S.y,S.z+5,.6)}}),P("two-sky-rift",()=>{a("stone",C,F-.5,T-5,30,1,26);for(const g of[-1,1])s("column","stone",C+g*12,F+7,T-15,2.6,15,2.6,"#c1b6c8",0,g*.2),l(C+g*17,F+8,T-28,11,7,12,g),s("fineRing","light",C+g*12,F+11,T-35,14,19,14,g===1?"#e1ac85":"#93cbcb",g*.3);for(let g=0;g<8;g++)l(C+Math.sin(g*2.4)*18,F+10+g*1.2,T-40-g*3,3,2,4,g)});break}for(const g of[-1,1])_(C+g*6.8,F,T-3,1.08);return{ground:e.kind==="burned"?"ash":e.ground==="moss"?"earth":e.ground==="metal"?"iron":e.ground,landmarks:Object.fromEntries(i.landmarks),jadeCount:[...i.batches.values()].filter(g=>g.geometry===i.geometry.jade).reduce((g,S)=>g+S.parts.length,0)}}function Pg(i,t,e){return new He({side:Be,depthWrite:!1,uniforms:{uSky:{value:new qt(i).convertLinearToSRGB()},uFog:{value:new qt(t).convertLinearToSRGB()},uSplit:{value:e?1:0}},vertexShader:"varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position.z=gl_Position.w*.999;}",fragmentShader:"varying vec3 direction;uniform vec3 uSky;uniform vec3 uFog;uniform float uSplit;void main(){vec3 d=normalize(direction);vec3 c=mix(uFog,uSky*.52,smoothstep(0.,.8,d.y));if(uSplit>.5)c=mix(c,mix(vec3(.36,.20,.15),vec3(.13,.29,.35),smoothstep(-.12,.12,d.x)),smoothstep(.0,.65,d.y)*.75);gl_FragColor=vec4(c,1.);}"})}function oc(i,t=!1,e=!1){const n={value:0},r="varying vec2 vFlow;varying float flowDepth;uniform float uTime;uniform float uDirection;uniform vec3 uFog;",s=t?"float stripe=.5+.5*sin(vFlow.x*143.+sin(vFlow.x*33.)*3.+vFlow.y*8.+uTime*uDirection*3.);float edge=smoothstep(0.,.12,vFlow.x)*(1.-smoothstep(.88,1.,vFlow.x));gl_FragColor=vec4(mix(vec3(.31,.56,.59),vec3(.7,.87,.87),stripe),edge*(.27+stripe*.34));":"float r=sin(vFlow.x*330.+uTime*.7+sin(vFlow.y*80.)*3.)*.5+.5;float wave=sin(vFlow.y*180.-uTime*.5)*.5+.5;gl_FragColor=vec4(vec3(.12,.31,.34)+vec3(.12,.18,.18)*pow(r*wave,4.),.83);";return{material:new He({transparent:!0,depthWrite:!1,side:Re,uniforms:{uTime:n,uDirection:{value:e?-1:1},uFog:{value:new qt(i).convertLinearToSRGB()}},vertexShader:"varying vec2 vFlow;varying float flowDepth;void main(){vFlow=uv;vec4 p=modelViewMatrix*vec4(position,1.);flowDepth=-p.z;gl_Position=projectionMatrix*p;}",fragmentShader:r+"void main(){"+s+"gl_FragColor.rgb=mix(gl_FragColor.rgb,uFog,1.-exp(-.000289*flowDepth*flowDepth));}"}),time:n}}function Lg(i,t){const e=fc(i),n=V=>uc(i,V),r=new vo;r.background=new qt(e.sky),r.fog=new Ss(e.fog,e.terrain==="interior"?.023:.017),r.add(new Co(e.terrain==="interior"?"#acbecb":"#d7e3eb",e.ground==="grass"?"#a69c79":"#8a8b7b",e.terrain==="interior"?2.05:2.5));const s=new Lo(e.terrain==="interior"?"#b2cbcf":"#e3e6db",e.terrain==="interior"?1.8:2.7);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-43,right:43,top:40,bottom:-40,near:1,far:145}),s.shadow.bias=-15e-5,s.shadow.normalBias=.05,r.add(s,s.target);const a=[],o=new bs;let l=!1,c=0,f=!1;const h=V=>{const ut=o.load(xs(V),()=>{if(l){ut.dispose();return}c++,t()},void 0,()=>{l||(f=!0,t())});return ut.colorSpace=Le,ut.anisotropy=4,a.push(ut),ut},u=h("art/forest-v036/materials.png"),d=h("art/chapters-v037/structures.png"),_=h("art/chapters-v037/terrain.png"),A=h("art/forest-v036/leaves.png"),m=Do();a.push(m);const p=hu(A),E=du(),L={value:0},M=new _s({roughness:.95,side:Re});M.onBeforeCompile=V=>{V.uniforms.uClothWind=L,V.vertexShader=`uniform float uClothWind;
`+V.vertexShader,V.vertexShader=V.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z+=sin(uClothWind+position.x*3.)*.055*(1.-uv.y);`)};const w={stone:Oe(u,0,.17,"#d7dcd8"),earth:Oe(u,1,.12,"#dce0cf"),bark:Oe(u,2,.22,"#eeece4"),roof:Oe(u,3,.16,"#c3d0d2"),wood:Oe(d,0,.19,"#ddd0ba"),sand:Oe(d,1,.15,"#d0cec1"),iron:Oe(d,2,.16,"#c2cbd0"),red:Oe(d,3,.12,"#ede0d0"),grass:Oe(_,0,.13,"#c3cea8"),cliff:Oe(_,1,.11,"#c5d0d2"),ash:Oe(_,2,.14,"#c5bbb0"),plaster:Oe(_,3,.15,"#e0daca"),plain:new _s({roughness:.85}),light:new De({toneMapped:!1}),leaves:p.mat,cloth:M};w.roof.side=Re;const I=Rg(i,w),k=Cg(I),v=I.finish(r);if(e.terrain!=="void"){const V=new Ve(240,430,90,175);V.rotateX(-Math.PI/2),V.translate(0,0,-130);const ut=V.getAttribute("position"),Mt=[];for(let D=0;D<ut.count;D++){const W=ut.getX(D),X=ut.getZ(D);ut.setY(D,cc(i,W,X)-.12);const R=new qt("#eef0df").multiplyScalar(.77+Ot(W,X)*.17);Mt.push(R.r,R.g,R.b)}V.setAttribute("color",new $t(Mt,3)),V.computeVertexNormals();const Ct=w[k.ground].clone();Ct.vertexColors=!0,Ct.onBeforeCompile=w[k.ground].onBeforeCompile,Ct.customProgramCacheKey=w[k.ground].customProgramCacheKey;const kt=new se(V,Ct);kt.receiveShadow=!0,r.add(kt)}const N=oc(e.fog),P=oc(e.fog,!0,e.kind==="reverse");if(["water","cliff"].includes(e.terrain)){const V=new Ve(190,390);V.rotateX(-Math.PI/2);const ut=new se(V,N.material);ut.position.set(0,e.terrain==="cliff"?-15:.4,-100),r.add(ut)}for(const V of I.waterfalls){const ut=new se(new Ve(V.w,V.h,3,24),P.material);ut.position.set(V.x,V.y-V.h/2,V.z),r.add(ut)}const Z=new se(new Cn(210,24,16),Pg(e.sky,e.fog,e.kind==="evacuation"));if(r.add(Z),e.terrain!=="interior"){const V=new se(new Cn(e.kind==="evacuation"?4.5:2.5,20,12),new De({color:e.kind==="outpost"?"#fff0cb":"#dee9df",toneMapped:!1}));V.position.set(-55,64,-150),Z.add(V)}const C=Array.from({length:2},()=>{const V=new eu(e.light,e.kind==="foundry"?48:28,17,1.6);return r.add(V),V}),F=new he;F.setAttribute("position",new $t(I.lamps.flatMap(V=>[V.x,V.y,V.z]),3));const T=new zi(F,new si({map:m,color:e.light,size:5,transparent:!0,blending:Vn,depthWrite:!1,opacity:.68}));r.add(T);const K=[];for(let V=0;V<110;V++){const ut=n(-1+V*.22);K.push(ut.x+Math.sin(V*3.1)*12,ut.y+.7+Ot(V,Ig(i))*3.8,ut.z)}const rt=new he;rt.setAttribute("position",new $t(K,3));const nt=new zi(rt,new si({color:["foundry","burned","festival"].includes(e.kind)?"#efb975":"#bacfcb",map:m,size:e.kind==="burned"?.13:.21,transparent:!0,opacity:.65,depthWrite:!1,blending:Vn}));r.add(nt);const mt=new Ve(1,1);for(let V=0;V<11;V++){const ut=n(V*2),Mt=new se(mt,E.mat);Mt.position.set(ut.x,ut.y+.25,ut.z),Mt.rotation.x=-Math.PI/2,Mt.scale.set(e.terrain==="interior"?21:36,19,1),r.add(Mt)}const lt=new se(new Hn(1.28,.046,5,48),new De({color:"#e8cf90"}));lt.rotation.x=-Math.PI/2,r.add(lt);const _t=new se(new ci(1.2,36),new De({color:"#d9bf74",transparent:!0,opacity:.12,depthWrite:!1}));_t.rotation.x=-Math.PI/2,r.add(_t);const Y=Uo(i,t,n(20));r.add(Y.group);const $=new J;let Q=[],O=1/0;const g=new se(I.geometry.box,w.light);function S(V,ut,Mt,Ct,kt){const D=ut?0:V*.001;p.time.value=D,E.time.value=D,L.value=D*.7,N.time.value=D,P.time.value=D,T.material.opacity=ut?.68:.64+Math.sin(D*1.5)*.04,kt&&(Z.position.set(kt.x,kt.y,kt.z),v(kt.z),Math.abs(O-kt.z)>.3&&(O=kt.z,$.set(kt.x,kt.y,kt.z),Q=[...I.lamps].sort((W,X)=>W.distanceToSquared($)-X.distanceToSquared($)).slice(0,2)),C.forEach((W,X)=>{Q[X]&&W.position.copy(Q[X]),W.intensity=(e.kind==="foundry"?48:28)+(ut?0:Math.sin(D*1.7+X)*1.3)}))}function y(V,ut,Mt,Ct,kt,D){const W=n(ut),X=.18+kt*.7,R=(Mt<550?34:29)*D;V.aspect=Mt/Ct,V.position.set(W.x+Math.sin(X)*R,W.y+R*(Mt<550?.59:.48),W.z+Math.cos(X)*R),V.lookAt(W.x,W.y+1.9,W.z-5),V.updateProjectionMatrix(),V.updateMatrixWorld()}function U(){var Mt;l=!0,Y.dispose();for(const Ct of a)Ct.dispose();const V=new Set(Object.values(I.geometry)),ut=new Set([...Object.values(w),N.material,P.material,E.mat]);r.traverse(Ct=>{const kt=Ct;if(kt instanceof Bi&&kt.dispose(),kt.geometry&&V.add(kt.geometry),kt.material)for(const D of Array.isArray(kt.material)?kt.material:[kt.material])ut.add(D)});for(const Ct of V)Ct.dispose();for(const Ct of ut)Ct.dispose();(Mt=s.shadow.map)==null||Mt.dispose(),r.clear()}return{scene:r,sun:s,marker:lt,glow:_t,lights:g,particles:nt,boss:Y,updateAmbient:S,dispose:U,placeCamera:y,atStage:n,scenery:"chapter-"+e.id+"-v037",backdropReady:()=>c===4,assetsFailed:()=>f,landmarks:k.landmarks,jadeCount:k.jadeCount}}const Ig=i=>i*19,ha=(i,t,e)=>new J(i,t,e);function Dg(){const i=[-1,-.82,-.45,0,.45,.82,1],t=[.34,.05,.2,.74,.2,.05,.34],e=[],n=[];for(let s=0;s<6;s++)e.push(i[s],t[s],-1,i[s],t[s],1,i[s+1],t[s+1],-1,i[s+1],t[s+1],-1,i[s],t[s],1,i[s+1],t[s+1],1),n.push(s/6,0,s/6,2,(s+1)/6,0,(s+1)/6,0,s/6,2,(s+1)/6,2);const r=new he;return r.setAttribute("position",new $t(e,3)),r.setAttribute("uv",new $t(n,2)),r.rotateY(Math.PI/2),r.computeVertexNormals(),r}function lc(i,t,e,n=!1){if(!n)return Lg(i,e);if(t===0)return Ag(i,e);const r=Sg[t],s=new vo;s.background=new qt(r.sky),s.fog=new _o(r.sky,44,r.fog),s.add(new Co(t===1?"#ffe2b8":"#d4dbce","#636250",r.ambient+1.2));const a=new Lo(t===1?"#ffca8b":"#bdcfe9",r.sun);a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-40,right:40,top:38,bottom:-38,near:1,far:140}),a.shadow.bias=-8e-4,a.shadow.normalBias=.05,s.add(a,a.target);let o=!1,l=!1;const c=new bs().load(xs("art/regions-atlas.png"),()=>{if(o){c.dispose();return}s.background=c,l=!0,e()},void 0,()=>{o||e()});c.colorSpace=Le,c.magFilter=Ce,s.backgroundIntensity=.64;const f={stone:Li("stone"),rock:Li("rock"),wood:Li("wood"),roof:Li("roof"),earth:Li("earth"),foliage:Li("foliage"),glow:Do()};f.earth.repeat.set(25,70);const h={stone:sc(f.stone),rock:sc(f.rock),wood:new kn({map:f.wood}),roof:new kn({map:f.roof,side:Re}),plain:new kn({flatShading:!0}),light:new De({toneMapped:!1}),foliage:new kn({map:f.foliage})},u=new he;u.setAttribute("position",new $t([0,0,0,.7,-.12,0,.3,-.95,.12],3)),u.computeVertexNormals();const d={box:new Xn(1,1,1),trunk:new Hi(.38,.5,1,6),rock:new Sr(.65,0),leaf:new Eo(.7,0),cone:new ys(.6,1,7),roof:Dg(),flag:u};d.rock.computeBoundingBox();const _=d.rock.boundingBox.max.y,A=new Map,m=[];function p(D,W,X,R,it,ft,pt,St,yt="plain",H=0,Zt=0,Yt=0){D==="leaf"&&yt==="plain"&&(yt="foliage"),D==="rock"&&yt==="stone"&&(yt="rock");const B=D+":"+yt,x=A.get(B)??{shape:D,surface:yt,parts:[]};x.parts.push({position:ha(W,X,R),scale:ha(it,ft,pt),rotation:new Ze(Yt,H,Zt),color:new qt(St)}),A.set(B,x)}const E=(D,W,X,R,it,ft,pt=r.stone,St=0)=>p("box",D,W,X,R,it,ft,pt,"stone",St),L=(D,W,X,R,it,ft,pt=0,St=0)=>p("box",D,W,X,R,it,ft,r.wood,"wood",pt,St);function M(D,W,X,R,it=R*.82){p("roof",D,W,X,R,1.8,it,r.roof,"roof"),E(D,W+1.36,X,R*2.12,.2,.21,r.roof);for(const ft of[-1,1]){L(D,W+.56,X+ft*it*.98,R*2.1,.13,.13);for(let pt=-2;pt<=2;pt++)L(D+pt*R*.38,W-.08,X+ft*it*.75,.18,.19,.45)}for(const ft of[-1,1])p("cone",D+ft*R,W+1.58,X,.25,.6,.25,r.roof)}function w(D,W,X,R=1,it=!1){it||(E(D,W+.15,X,.85*R,.3*R,.85*R),E(D,W+.8*R,X,.45*R,1.3*R,.45*R),E(D,W+1.4*R,X,.85*R,.18*R,.85*R));const ft=W+(it?0:1.85*R);p("box",D,ft,X,.53*R,.74*R,.53*R,t===2?"#ff8243":r.light,"light");for(const pt of[-1,1])for(const St of[-1,1])L(D+pt*.29*R,ft,X+St*.29*R,.07*R,.88*R,.07*R);E(D,ft-.46*R,X,.8*R,.15*R,.8*R,r.roof),p("roof",D,ft+.46*R,X,.62*R,.44*R,.5*R,r.roof,"roof"),it&&(L(D,ft+.9*R,X,.06,.55,.06),p("trunk",D,ft-.7*R,X,.05,.45,.05,"#ad4731")),m.push(ha(D,ft,X))}function I(D,W,X,R){for(let it=0;it<5;it++)E(D,W-.05-it*.12,X+it*.45,R,.26,.52)}function k(D,W,X,R,it=!1,ft=!1){const pt=it?2:1;E(D,W+.25,X,5.8*R,.5,4.8*R),I(D,W+.17,X+2.5*R,3*R);for(let St=0;St<pt;St++){const yt=W+St*3.5*R;p("box",D,yt+1.8*R,X,4.5*R,3.2*R,3.5*R,t===2?"#715646":"#aaa58b","wood");for(const H of[-2.25,2.25])for(const Zt of[-1.8,1.8])L(D+H*R,yt+1.8*R,X+Zt*R,.24*R,3.7*R,.24*R);for(const H of[-1,1])for(const Zt of[-1.4,0,1.4]){p("box",D+Zt*R,yt+1.7*R,X+H*1.79*R,.98*R,1.65*R,.04,r.light,"light");for(let Yt=-2;Yt<=2;Yt++)L(D+(Zt+Yt*.2)*R,yt+1.7*R,X+H*1.84*R,.045,1.7*R,.04);for(let Yt=0;Yt<3;Yt++)L(D+Zt*R,yt+(1.15+Yt*.54)*R,X+H*1.85*R,1.05*R,.05,.04)}L(D,yt+.2*R,X+1.98*R,5*R,.2,.55*R),L(D,yt+2.95*R,X+1.87*R,4.8*R,.2,.13),M(D,yt+3.4*R,X,3.15*R,2.25*R)}if(ft){p("box",D,W+2.7*R,X+1.91*R,1.9*R,.64*R,.1,"#253536","wood");for(let St=-1;St<=1;St++)p("box",D+St*.45*R,W+2.7*R,X+1.98*R,.12*R,.3*R,.02,"#c1a36a")}w(D-2.3*R,W+2.9*R,X+2*R,.75,!0),w(D+2.3*R,W+2.9*R,X+2*R,.75,!0)}function v(D,W,X,R,it,ft=!1){p("trunk",D,W+2.8*R,X,.95*R,5.6*R,.85*R,r.wood,"wood",it,.06);for(let pt=0;pt<5;pt++){const St=pt*2.4+it;p("trunk",D+Math.cos(St)*.65*R,W+.25*R,X+Math.sin(St)*.65*R,.28*R,1.9*R,.28*R,r.wood,"wood",-St,1.1),p("trunk",D+Math.cos(St)*1*R,W+(3+pt*.24)*R,X+Math.sin(St)*.7*R,.35*R,3*R,.32*R,r.wood,"wood",-St,.8)}for(let pt=0;pt<23;pt++){const St=pt*2.4+it,yt=(.4+Ot(pt,it)*2)*R,H=new qt(ft?"#c3a2af":r.leaf).offsetHSL(0,0,.06+Ot(pt,it+2)*.14);p("leaf",D+Math.cos(St)*yt,W+(4.5+Ot(pt,it+3)*1.6)*R,X+Math.sin(St)*yt,1.8*R,.65*R,1.6*R,"#"+H.getHexString(),"plain",St)}}function N(D,W,X,R,it){for(let ft=0;ft<4;ft++){const pt=D+ft*.38,St=X+Math.sin(ft)*.5,yt=(4+ft*.65)*R;p("trunk",pt,W+yt/2,St,.17,yt,.17,"#61774e","wood");for(let H=1;H<8;H++)p("trunk",pt,W+yt*H/8,St,.2,.07,.2,"#adad70");for(let H=0;H<4;H++)p("leaf",pt+Math.sin(it+H)*.65,W+yt-H*.45,St+Math.cos(it+H)*.45,1.8,.18,.35,r.leaf,"plain",it+H)}}function P(D,W,X,R,it=5){E(D,W+R/2,X,1.15,R,it),E(D,W+R+.15,X,1.55,.3,it+.2,r.roof);for(let ft=-1;ft<=1;ft++)E(D,W+R*.5,X+ft*it*.3,1.26,.28,.38,"#92927c"),p("leaf",D-.62,W+R*.8,X+ft*.7,.35,1.7,.4,r.leaf)}function Z(D,W,X,R){for(let it=0;it<4;it++)E(D,W+it*.45,X,(8-it*.65)*R,.5,(5.6-it*.35)*R);for(const it of[-1,1]){P(D+it*2.6*R,W+1.5,X,5.3*R,3.4*R);for(let ft=0;ft<5;ft++)E(D+it*2.6*R,W+(6.9+ft*.55)*R,X,(2.6-ft*.35)*R,.7*R,(3.6-ft*.4)*R)}E(D,W+6.4*R,X,7*R,.9*R,3.6*R),E(D,W+7.1*R,X,6.3*R,.5*R,3.2*R),I(D,W+.1,X+3*R,5*R);for(let it=-2;it<=2;it++)E(D+it*.7*R,W+6.4*R,X+1.83*R,.36*R,.35*R,.09,"#a7a184"),p("trunk",D+it*.55,W+5.3*R,X+1.9*R,.06,2*R,.06,r.leaf,"wood",0,it*.12);w(D-4*R,W+.1,X+2*R,1.2),w(D+4*R,W+.1,X+2*R,1.2)}function C(D,W,X,R){E(D,W+.12,X,6*R,.24,5.8*R),p("trunk",D,W+1.45*R,X,6*R,2.8*R,6*R,"#b8b6a4","wood"),p("cone",D,W+3.15*R,X,5*R,1.7*R,5*R,"#c8bca1","plain");for(let it=0;it<14;it++){const ft=it*Math.PI/7;p("trunk",D+Math.cos(ft)*2.65*R,W+1.5*R,X+Math.sin(ft)*2.65*R,.08,2.4*R,.08,r.wood,"wood")}p("box",D,W+1.1*R,X+2.59*R,1.2*R,2*R,.15,"#714832","wood"),p("box",D,W+1.2*R,X+2.69*R,.65*R,1.5*R,.04,r.light,"light"),w(D+1.5*R,W,X+2.8*R,.7)}function F(D,W,X,R,it,ft=!1){for(let pt=0;pt<7;pt++){const St=pt*2.4+it,yt=(ft?9:15)+Ot(pt,it)*15;p("rock",D+Math.sin(St)*2*R,W-_*yt*R,X+Math.cos(St)*2*R,(3+Ot(pt,2))*R,yt*R,(3+Ot(pt,3))*R,r.stone,"stone",St)}E(D,W,X,8*R,.65,7*R);for(let pt=0;pt<5;pt++)p("rock",D+Math.sin(pt*2)*3*R,W+.2,X+Math.cos(pt*2)*2*R,1.4*R,.7,1.3*R,r.leaf,"plain",pt)}function T(D,W,X,R){for(const ft of[-1,1])L(D+ft*R/2,W+2.7,X,.16,5.4,.16);const it=["#bfb8a2","#916a4e","#596f86","#96855c","#678679"];for(let ft=0;ft<14;ft++){const pt=-R/2+ft*R/13,St=4.9-Math.sin(ft/13*Math.PI)*1.2;L(D+pt,W+St,X,R/13+.1,.045,.05,0,-Math.cos(ft/13*Math.PI)*.16),p("flag",D+pt,W+St,X,.9,1,1,it[ft%5],"plain")}}if(t!==5){const D=new Ve(94,260,72,190);D.rotateX(-Math.PI/2),D.translate(0,0,-86);const W=D.getAttribute("position"),X=[];for(let it=0;it<W.count;it++){const ft=W.getX(it),pt=W.getZ(it),St=vn(1-pt/8.8),yt=Math.abs(ft-St),H=t===1?Math.min(28,Math.max(0,yt-5)*1.8):0;W.setY(it,ts(ft,pt,t)-H);const Zt=new qt(r.ground).offsetHSL(0,0,(Ot(ft,pt)-.5)*.035).multiplyScalar(1.8);X.push(Zt.r,Zt.g,Zt.b)}D.setAttribute("color",new $t(X,3)),D.computeVertexNormals();const R=new se(D,new kn({map:f.earth,vertexColors:!0}));R.receiveShadow=!0,s.add(R)}for(let D=0;D<310;D++){const W=-2+D*.078,X=be(W),R=be(W+.01),it=Math.atan2(R.x-X.x,R.z-X.z),ft=Math.cos(it),pt=Math.sin(it),St=t===2?7.5:t===5?6:4.9;t===5&&D%7===0&&(E(X.x,X.y-.55,X.z,8,1.1,6.4,r.stone,it),p("rock",X.x,X.y-3.5,X.z,7,8,6,r.stone,"stone",it));for(let yt=0;yt<4;yt++){const H=(yt-1.5)*St/4,Zt=new qt(r.stone).offsetHSL(0,0,(Ot(D,yt)-.5)*.09);E(X.x+ft*H,X.y+.045,X.z-pt*H,St/4-.055,.1,.72,"#"+Zt.getHexString(),it)}if(D%5===0&&t!==5)for(const yt of[-1,1]){const H=yt*(St/2+.4);p("rock",X.x+ft*H,X.y+.14,X.z-pt*H,.8,.35,.6,r.stone,"stone",D)}}for(const D of Mg(i,t)){const W=be(20);if(D.z<W.z-2||Math.hypot(D.x-W.x,D.z-W.z)<12)continue;const X=vn(1-D.z/8.8),R=Math.sign(D.x-X),it=Math.abs(D.x-X),ft=D.x+R*(t===2?1:2.2),pt=D.z,St=ts(ft,pt,t),yt=D.scale;if(t===0){if(D.kind==="shrine"){k(ft,St,pt,yt,!1,!0);continue}if(D.kind==="rock"){p("rock",ft,St+.5,pt,2.1*yt,1.1*yt,1.8*yt,r.stone,"stone",D.rotation);continue}v(ft,St,pt,yt,D.rotation)}if(t===1){if(it>12)D.kind==="rock"&&F(ft+R*6,R<0?St+3+Ot(ft,pt)*5:St-11,pt,yt*.85,D.rotation);else if(D.kind==="shrine")F(ft,St,pt,yt*.7,D.rotation),k(ft,St+.4,pt,yt,!1,!0);else if(D.kind==="bamboo"){const H=X+R*6.3;N(H,ts(H,pt,t)-2.34,pt,yt*.85,D.rotation)}}if(t===2&&(D.kind==="house"||D.kind==="shrine"?k(ft,St,pt,yt,!0,D.kind==="shrine"):D.kind==="tree"&&it>12&&v(ft,St,pt,yt*.9,D.rotation,!0)),t===3)if(D.kind==="shrine")Z(ft+R*2,St,pt,yt*.8);else if(D.kind==="rock")P(ft,St,pt,1.6*yt,2.5);else if(it>10)v(ft,St,pt,yt*1.1,D.rotation);else{p("rock",ft,St+.45,pt,2*yt,1.1,2*yt,r.stone,"stone");for(let H=0;H<4;H++)p("leaf",ft+Math.sin(H)*.7,St+.5,pt+Math.cos(H)*.6,1.6,.3,.7,r.leaf,"plain",H)}if(t===4&&(D.kind==="ger"?(C(ft,St,pt,yt),T(ft,St,pt-3,8)):D.kind==="rock"&&p("rock",ft,St+.2,pt,1.5*yt,.55*yt,1.2*yt,r.stone,"stone",D.rotation)),t===5&&it>10&&(F(ft,St+Math.sin(pt*.1)*2,pt,yt*.85,D.rotation,!0),D.kind==="crystal")){for(const H of[-1.7,1.7])E(ft+H,St+3.2,pt,.9,6.4,.9);E(ft,St+6.3,pt,4.7,.7,1.3)}}if([0,3,4].includes(t))for(let D=0;D<650;D++){const W=Ot(D,10)*22-1,X=be(W),R=D%2?1:-1,it=X.x+R*(3.6+Ot(D,11)*23),ft=ts(it,X.z,t);if(p("leaf",it,ft+.12,X.z,.25+Ot(D,12)*.7,.12,.55,r.leaf,"plain",D),D%3===0)for(let pt=0;pt<3;pt++)p("trunk",it+pt*.09,ft+.25,X.z,.035,.5,.035,r.leaf,"plain",pt,(pt-1)*.25);t===0&&D%9===0&&p("leaf",it,ft+.42,X.z,.15,.12,.15,"#b8beb0")}for(let D=1;D<=20;D++){const W=be(D);if(p("trunk",W.x,W.y+.11,W.z,D===20?9:2.2,.18,D===20?9:2.2,r.stone,"stone"),w(W.x+3.1,W.y,W.z+.6,D%5===0?1.1:.8),D%5===0&&D!==20){if(w(W.x-3.1,W.y,W.z+.6,1.1),t===2){for(const X of[-1,1])L(W.x+X*4.2,W.y+3.5,W.z-1,.22,7,.22);for(let X=0;X<9;X++)L(W.x-4+X,W.y+6.6-Math.sin(X/8*Math.PI)*.6,W.z-1,1.1,.06,.06),X%2===0&&w(W.x-4+X,W.y+5.8-Math.sin(X/8*Math.PI)*.6,W.z-1,.7,!0)}else if(t===4)T(W.x-8,W.y,W.z-2,9);else if(t===1)for(const X of[-1,1]){for(let R=-3;R<=3;R++)L(W.x+X*3,W.y+.8,W.z+R,.14,1.6,.14);L(W.x+X*3,W.y+1.35,W.z,.15,.15,7)}else if(t===5)for(const X of[-1,1])E(W.x+X*4,W.y+2.3,W.z,1.05,4.6,1.05),E(W.x+X*4,W.y+4.8,W.z,1.6,.45,1.6)}}const K=be(20),rt=K.x,nt=K.y,mt=K.z;if(t===0||t===2){k(rt,nt+.65,mt-12,t===2?1.6:1.8,t===2,!0),E(rt,nt+.15,mt-9,15,.4,9),I(rt,nt+.5,mt-5.8,8);for(const D of[-1,1]){v(rt+D*12,nt,mt-13,1.8,D+i,t===2);for(let W=0;W<5;W++)E(rt+D*(4.3+W*1.3),nt+.9,mt-7,1.1,1.6,1.1)}}if(t===1&&(F(rt,nt-.4,mt-14,2.3,7),k(rt,nt,mt-14,1.5,!1,!0)),t===3&&Z(rt,nt,mt-13,1.55),t===4){for(let D=0;D<26;D++){const W=D*2.4,X=2.9*(1-D/32);p("rock",rt+Math.cos(W)*X,nt+D*.12,mt-12+Math.sin(W)*X,1.5,.95,1.3,r.stone,"stone",W)}T(rt,nt,mt-12,12),C(rt-10,nt,mt-7,1.15)}if(t===5){F(rt,nt-.4,mt-10,2.3,4,!0);for(const D of[-1,1])E(rt+D*7,nt+5,mt-10,1.6,10,1.6),E(rt+D*7,nt+10,mt-10,2.3,.7,2.3);E(rt,nt+10.1,mt-10,15,.9,1.7)}for(const D of[-1,1])w(rt+D*4.7,nt,mt-3,1.5);const lt=new ae,_t=new _n;let Y;for(const D of A.values()){const W=D.shape==="flag"?new kn({side:Re}):h[D.surface],X=new Bi(d[D.shape],W,D.parts.length);D.parts.forEach((R,it)=>{lt.compose(R.position,_t.setFromEuler(R.rotation),R.scale),X.setMatrixAt(it,lt),X.setColorAt(it,R.color)}),X.castShadow=D.surface!=="light",X.receiveShadow=D.surface!=="light",s.add(X),D.surface==="light"&&(Y=X)}const $=new he;$.setAttribute("position",new $t(m.flatMap(D=>[D.x,D.y,D.z]),3));const Q=new si({map:f.glow,color:r.light,size:4.6,transparent:!0,depthWrite:!1,blending:Vn,opacity:.7}),O=new zi($,Q);s.add(O);const g=[];for(let D=0;D<180;D++)g.push(Math.sin(D*43.17)*27,2+Ot(D,2)*4,D/180*-195+15);const S=new he;S.setAttribute("position",new $t(g,3));const y=new zi(S,new si({color:t===2?"#e2b4c6":r.light,size:t===2?.1:.06,transparent:!0,opacity:.65,depthWrite:!1}));s.add(y);const U=new se(new Hn(1.35,.07,6,40),new De({color:"#ffe2a2"}));U.rotation.x=-Math.PI/2,s.add(U);const V=new se(new ci(1.23,32),new De({color:"#ffde9a",transparent:!0,opacity:.17,depthWrite:!1}));V.rotation.x=-Math.PI/2,s.add(V);const ut=Uo(i,e);s.add(ut.group);let Mt=0;function Ct(D,W,X,R,it){if(Mt!==X/R){Mt=X/R;const ft=yg(t),pt=543/482;let St=ft.width,yt=ft.height;Mt>pt?yt*=pt/Mt:St*=Mt/pt,c.repeat.set(St,yt),c.offset.set(ft.x+(ft.width-St)/2,ft.y+(ft.height-yt)/2)}Q.opacity=W?.66:.64+Math.sin(D*.0015)*.06}function kt(){var X;o=!0,ut.dispose(),c.dispose();for(const R of Object.values(f))R.dispose();const D=new Set(Object.values(d)),W=new Set(Object.values(h));s.traverse(R=>{const it=R;if(it instanceof Bi&&it.dispose(),it.geometry&&D.add(it.geometry),it.material)for(const ft of Array.isArray(it.material)?it.material:[it.material])W.add(ft)});for(const R of D)R.dispose();for(const R of W)R.dispose();(X=a.shadow.map)==null||X.dispose(),s.clear()}return{scene:s,sun:a,marker:U,glow:V,lights:Y,particles:y,boss:ut,updateAmbient:Ct,dispose:kt,scenery:r.id,backdropReady:()=>l}}function Ng(){const i=new xg({antialias:!0,alpha:!1,powerPreference:"low-power"});i.setPixelRatio(Math.min(devicePixelRatio,1.5)),i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=ar,i.toneMapping=so,i.toneMappingExposure=1.15,i.domElement.className="diorama-canvas",i.domElement.setAttribute("aria-label","입체 탐험 지도. 좌우로 끌면 시점이 회전합니다.");const t=new qe(43,1,.1,240),e=new J;let n=null,r=null,s=0,a=0,o,l,c=!0,f=0,h=0,u=1,d=1,_=1,A=!0,m=new AbortController;const p=matchMedia("(prefers-reduced-motion: reduce)");let E=-100,L=!1;const M=P=>r&&"atStage"in r?r.atStage(P):be(P);function w(){cancelAnimationFrame(a),o==null||o.disconnect(),l==null||l.disconnect(),m.abort(),n=null,i.domElement.remove()}function I(){if(!n)return;const P=Number(n.dataset.camera??1);for(const Z of n.querySelectorAll(".route-node")){const C=Number(Z.dataset.id),F=M(C);if(C===20){k(Z,F,P);continue}e.set(F.x,F.y+.75,F.z).project(t);const T=(e.x+1)*50,K=(1-e.y)*50,rt=e.z<1&&e.z>0&&T>3&&T<97&&K>(d<550?40:25)&&K<79&&Math.abs(C-P)<4.3;Z.style.cssText=`left:${T}%;top:${K}%;--node-scale:1;opacity:1;visibility:${rt?"visible":"hidden"};z-index:${Math.round(45-e.z*20)}`}}function k(P,Z,C){e.set(Z.x,Z.y+.24,Z.z);const F=e.clone().applyMatrix4(t.matrixWorldInverse).z;e.project(t);const T=(e.x+1)*50,K=(1-e.y)*50,rt=e.z>0&&e.z<1&&T>3&&T<97&&K>(d<550?40:28)&&K<77&&20-C<4.4,nt=((r==null?void 0:r.boss.height)??8.8)*_/(2*Math.tan(t.fov*Math.PI/360)*Math.abs(F));P.style.left=T+"%",P.style.top=K+"%",P.style.visibility=rt?"visible":"hidden",P.style.opacity="1",P.style.zIndex="28",P.style.setProperty("--boss-width",nt*.8+"px"),P.style.setProperty("--boss-height",nt*.79+"px")}function v(P){var mt;if(!(n!=null&&n.isConnected)||!r)return;if("assetsFailed"in r&&r.assetsFailed()){const lt=n;w(),r.dispose(),r=null,i.dispose(),lt.dispatchEvent(new Event("diorama-unavailable"));return}if(a=requestAnimationFrame(v),!c||document.hidden||P-f<32)return;const Z=Number(n.dataset.camera??1);if(p.matches&&!A&&Z===E)return;i.shadowMap.needsUpdate=A||Z!==E,f=P,E=Z,A=!1;const C=M(Z+.6),F=.5+h,T=(d<550?40:34)*u;t.aspect=d/_,t.position.set(C.x+Math.sin(F)*T,C.y+T*.83,C.z+Math.cos(F)*T),t.lookAt(C.x,C.y,C.z-2),t.updateProjectionMatrix(),t.updateMatrixWorld(),"placeCamera"in r&&r.placeCamera(t,Z,d,_,h,u),r.sun.position.set(C.x-18,C.y+35,C.z+16),r.sun.target.position.set(C.x,C.y,C.z),r.sun.target.updateMatrixWorld();const K=Number(((mt=n.querySelector(".route-node.selected"))==null?void 0:mt.dataset.id)??1),rt=M(K);r.marker.position.set(rt.x,rt.y+.22,rt.z),r.glow.position.set(rt.x,rt.y+.21,rt.z);const nt=p.matches?1:1+Math.sin(P*.0018)*.04;r.marker.scale.setScalar(nt),r.lights.material instanceof De&&r.lights.material.color.setScalar(p.matches?1:1+Math.sin(P*.0015)*.08),r.particles.position.y=p.matches?0:Math.sin(P*4e-4)*.16,r.updateAmbient(P,p.matches,d,_,C),r.boss.update(P,p.matches),r.boss.group.visible=!n.classList.contains("scenery-view"),n.dataset.scenery=r.scenery,n.dataset.backdropReady=String(r.backdropReady()),n.dataset.bossReady=String(r.boss.isReady()),n.dataset.bossBreath=r.boss.breathScale().toFixed(5),r.marker.visible=K!==20&&!n.classList.contains("scenery-view"),r.glow.visible=K!==20&&!n.classList.contains("scenery-view"),i.render(r.scene,t),I(),n.dataset.backgroundKind=r.scene.background instanceof Pe?"image":"geometry",n.dataset.geometries=String(i.info.memory.geometries),n.dataset.textures=String(i.info.memory.textures),n.dataset.drawCalls=String(i.info.render.calls),n.dataset.triangles=String(i.info.render.triangles),n.dataset.orbit=h.toFixed(3),n.dataset.zoom=u.toFixed(2),n.dataset.landmarks="landmarks"in r?JSON.stringify(r.landmarks):"",n.dataset.jadeCount="jadeCount"in r?String(r.jadeCount):"0"}function N(P){w(),n=P,m=new AbortController;const Z=Number(n.dataset.chapter),C=Number(n.dataset.theme);(Z!==s||!r)&&(Z!==s&&(L=!1),r==null||r.dispose(),r=lc(Z,C,()=>{A=!0},L),s=Z,h=0,u=1),n.querySelector(".diorama-surface").append(i.domElement),n.dataset.renderer="webgl";const T=n.querySelector("[data-diorama-status]");T&&(T.textContent="입체 지도 · 좌우로 끌어 둘러보기");function K(){n&&(d=n.clientWidth,_=n.clientHeight,i.setSize(d,_,!1),A=!0)}K(),o=new ResizeObserver(K),o.observe(n),c=!0,l=new IntersectionObserver($=>{var Q;c=((Q=$[0])==null?void 0:Q.isIntersecting)??!0,A=!0}),l.observe(n);let rt=!1,nt=0,mt=0;const lt=i.domElement;lt.addEventListener("pointerdown",$=>{$.button===0&&(rt=!0,nt=$.clientX,mt=h,lt.setPointerCapture($.pointerId))},{signal:m.signal}),lt.addEventListener("pointermove",$=>{rt&&(h=Math.max(-.65,Math.min(.65,mt+($.clientX-nt)*.005)),A=!0)},{signal:m.signal}),lt.addEventListener("pointerup",()=>{rt=!1},{signal:m.signal}),lt.addEventListener("pointercancel",()=>{rt=!1},{signal:m.signal});const _t=n.querySelector("[data-diorama=compare]");_t&&(_t.textContent=L?"새 챕터 지도로":"이전 지도와 비교");const Y=n.querySelector(".diorama-tools-toggle");Y==null||Y.addEventListener("click",()=>{const $=Y.parentElement.classList.toggle("tools-open");Y.setAttribute("aria-expanded",String($)),Y.textContent=$?"조작 닫기":"지도 조작"},{signal:m.signal}),n.querySelectorAll("[data-diorama]").forEach($=>$.addEventListener("click",()=>{switch($.dataset.diorama){case"left":h=Math.max(-.65,h-.16);break;case"right":h=Math.min(.65,h+.16);break;case"in":u=Math.max(.78,u-.1);break;case"out":u=Math.min(1.3,u+.1);break;case"reset":h=0,u=1;break;case"compare":L=!L,r==null||r.dispose(),r=lc(Z,C,()=>{A=!0},L),$.textContent=L?"새 챕터 지도로":"이전 지도와 비교";break;case"scenery":{const Q=(n==null?void 0:n.classList.toggle("scenery-view"))??!1;$.textContent=Q?"탐험 표시 복원":"풍경 감상",$.setAttribute("aria-pressed",String(Q));break}}A=!0},{signal:m.signal})),lt.addEventListener("webglcontextlost",$=>{$.preventDefault();const Q=n;w(),r==null||r.dispose(),r=null,i.dispose(),Q==null||Q.dispatchEvent(new Event("diorama-unavailable"))},{signal:m.signal}),A=!0,f=0,v(performance.now())}return{attach:N,detach:w}}export{Ng as createDiorama};
