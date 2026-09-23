import{m as ec,a as tc}from"./index-BIUipFxY.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="186",nc=0,to=1,ic=2,Bi=1,rc=2,Fi=3,Gn=0,It=1,Vt=2,_n=0,zi=1,no=2,io=3,ro=4,sc=5,pi=100,ac=101,oc=102,lc=103,cc=104,uc=200,hc=201,fc=202,dc=203,al=204,ol=205,pc=206,mc=207,gc=208,_c=209,xc=210,vc=211,Mc=212,Sc=213,Ec=214,Rs=0,Cs=1,Ps=2,Gi=3,Ls=4,Ds=5,Is=6,Us=7,va=0,yc=1,bc=2,an=0,ll=1,cl=2,ul=3,Ma=4,hl=5,fl=6,dl=7,pl=300,Hn=301,vi=302,qr=303,Yr=304,Br=306,Ns=1e3,gn=1001,Fs=1002,Et=1003,Tc=1004,Zi=1005,yt=1006,Kr=1007,Bn=1008,Bt=1009,ml=1010,gl=1011,Hi=1012,Sa=1013,on=1014,Kt=1015,ln=1016,Ea=1017,ya=1018,Vi=1020,_l=35902,xl=35899,vl=1021,Ml=1022,Zt=1023,Mn=1026,zn=1027,ba=1028,Ta=1029,Vn=1030,Aa=1031,wa=1033,br=33776,Tr=33777,Ar=33778,wr=33779,Os=35840,Bs=35841,zs=35842,Gs=35843,Hs=36196,Vs=37492,ks=37496,Ws=37488,Xs=37489,Cr=37490,qs=37491,Ys=37808,Ks=37809,Zs=37810,$s=37811,Js=37812,Qs=37813,js=37814,ea=37815,ta=37816,na=37817,ia=37818,ra=37819,sa=37820,aa=37821,oa=36492,la=36494,ca=36495,ua=36283,ha=36284,Pr=36285,fa=36286,Ac=3200,da=0,wc=1,Pn="",Ft="srgb",Lr="srgb-linear",Dr="linear",Je="srgb",Zr=7680,Rc=519,Cc=512,Pc=513,Lc=514,Ra=515,Dc=516,Ic=517,Ca=518,Uc=519,Sl=35044,so="300 es",sn=2e3,ki=2001;function Nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fc(){const i=Wi("canvas");return i.style.display="block",i}const ao={};function Ir(...i){const e="THREE."+i.shift();console.log(e,...i)}function El(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=El(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=El(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _i(...i){const e=i.join(" ");e in ao||(ao[e]=!0,Ce(...i))}function Oc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Bc={[Rs]:Cs,[Ps]:Is,[Ls]:Us,[Gi]:Ds,[Cs]:Rs,[Is]:Ps,[Us]:Ls,[Ds]:Gi};class kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,pa=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function zc(i,e){return(i%e+e)%e}function Jr(i,e,t){return(1-t)*i+t*e}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ga=class Ga{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ga.prototype.isVector2=!0;let Re=Ga;class Wn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],x=s[a+2],y=s[a+3];if(d!==y||c!==u||l!==p||f!==x){let m=c*u+l*p+f*x+d*y;m<0&&(u=-u,p=-p,x=-x,y=-y,m=-m);let h=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);h=Math.sin(h*S)/w,o=Math.sin(o*S)/w,c=c*h+u*o,l=l*h+p*o,f=f*h+x*o,d=d*h+y*o}else{c=c*h+u*o,l=l*h+p*o,f=f*h+x*o,d=d*h+y*o;const S=1/Math.sqrt(c*c+l*l+f*f+d*d);c*=S,l*=S,f*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],d=s[a],u=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+f*d+c*p-l*u,e[t+1]=c*x+f*u+l*d-o*p,e[t+2]=l*x+f*p+o*u-c*d,e[t+3]=f*x-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),d=o(s/2),u=c(n/2),p=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=u*f*d+l*p*x,this._y=l*p*d-u*f*x,this._z=l*f*x+u*p*d,this._w=l*f*d-u*p*x;break;case"YXZ":this._x=u*f*d+l*p*x,this._y=l*p*d-u*f*x,this._z=l*f*x-u*p*d,this._w=l*f*d+u*p*x;break;case"ZXY":this._x=u*f*d-l*p*x,this._y=l*p*d+u*f*x,this._z=l*f*x+u*p*d,this._w=l*f*d-u*p*x;break;case"ZYX":this._x=u*f*d-l*p*x,this._y=l*p*d+u*f*x,this._z=l*f*x-u*p*d,this._w=l*f*d+u*p*x;break;case"YZX":this._x=u*f*d+l*p*x,this._y=l*p*d+u*f*x,this._z=l*f*x-u*p*d,this._w=l*f*d-u*p*x;break;case"XZY":this._x=u*f*d-l*p*x,this._y=l*p*d-u*f*x,this._z=l*f*x+u*p*d,this._w=l*f*d+u*p*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(f-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ha=class Ha{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*f,this.y=n+c*f+o*l-s*d,this.z=r+c*d+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ha.prototype.isVector3=!0;let G=Ha;const Qr=new G,oo=new Wn,Va=class Va{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],d=n[7],u=n[2],p=n[5],x=n[8],y=r[0],m=r[3],h=r[6],S=r[1],w=r[4],M=r[7],T=r[2],b=r[5],L=r[8];return s[0]=a*y+o*S+c*T,s[3]=a*m+o*w+c*b,s[6]=a*h+o*M+c*L,s[1]=l*y+f*S+d*T,s[4]=l*m+f*w+d*b,s[7]=l*h+f*M+d*L,s[2]=u*y+p*S+x*T,s[5]=u*m+p*w+x*b,s[8]=u*h+p*M+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=f*a-o*l,u=o*c-f*s,p=l*s-a*c,x=t*d+n*u+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*l-f*n)*y,e[2]=(o*n-r*a)*y,e[3]=u*y,e[4]=(f*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jr.makeScale(e,t)),this}rotate(e){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jr.makeRotation(-e)),this}translate(e,t){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Va.prototype.isMatrix3=!0;let Le=Va;const jr=new Le,lo=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gc(){const i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=xn(r.r),r.g=xn(r.g),r.b=xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?Dr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:lo,fromXYZ:co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:lo,fromXYZ:co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const He=Gc();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class Hc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zn===void 0&&(Zn=Wi("canvas")),Zn.width=e.width,Zn.height=e.height;const r=Zn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Zn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vc=0;class Pa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(es(r[a].image)):s.push(es(r[a]))}else s=es(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function es(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let kc=0;const ts=new G;class Rt extends kn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=gn,r=gn,s=yt,a=Bn,o=Zt,c=Bt,l=Rt.DEFAULT_ANISOTROPY,f=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Ln(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ts).x}get height(){return this.source.getSize(ts).y}get depth(){return this.source.getSize(ts).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=pl;Rt.DEFAULT_ANISOTROPY=1;const ka=class ka{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],d=c[8],u=c[1],p=c[5],x=c[9],y=c[2],m=c[6],h=c[10];if(Math.abs(f-u)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,M=(p+1)/2,T=(h+1)/2,b=(f+u)/4,L=(d+y)/4,_=(x+m)/4;return w>M&&w>T?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=b/n,s=L/n):M>T?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=_/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=L/s,r=_/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-y)/S,this.z=(u-f)/S,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ka.prototype.isVector4=!0;let ct=ka;class Wc extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Rt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $t extends Wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yl extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xc extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Or=class Or{constructor(e,t,n,r,s,a,o,c,l,f,d,u,p,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,f,d,u,p,x,y,m)}set(e,t,n,r,s,a,o,c,l,f,d,u,p,x,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=x,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Or().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,p=a*d,x=o*f,y=o*d;t[0]=c*f,t[4]=-c*d,t[8]=l,t[1]=p+x*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*f,p=c*d,x=l*f,y=l*d;t[0]=u+y*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=p*o-x,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*f,p=c*d,x=l*f,y=l*d;t[0]=u-y*o,t[4]=-a*d,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*f,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*f,p=a*d,x=o*f,y=o*d;t[0]=c*f,t[4]=x*l-p,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=y-u*d,t[8]=x*d+p,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*d+x,t[10]=u-y*d}else if(e.order==="XZY"){const u=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=-d,t[8]=l*f,t[1]=u*d+y,t[5]=a*f,t[9]=p*d-x,t[2]=x*d-p,t[6]=o*f,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qc,e,Yc)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),bn.crossVectors(n,Ut),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),bn.crossVectors(n,Ut)),bn.normalize(),$i.crossVectors(Ut,bn),r[0]=bn.x,r[4]=$i.x,r[8]=Ut.x,r[1]=bn.y,r[5]=$i.y,r[9]=Ut.y,r[2]=bn.z,r[6]=$i.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],d=n[5],u=n[9],p=n[13],x=n[2],y=n[6],m=n[10],h=n[14],S=n[3],w=n[7],M=n[11],T=n[15],b=r[0],L=r[4],_=r[8],E=r[12],R=r[1],I=r[5],F=r[9],V=r[13],D=r[2],k=r[6],Z=r[10],C=r[14],z=r[3],N=r[7],P=r[11],q=r[15];return s[0]=a*b+o*R+c*D+l*z,s[4]=a*L+o*I+c*k+l*N,s[8]=a*_+o*F+c*Z+l*P,s[12]=a*E+o*V+c*C+l*q,s[1]=f*b+d*R+u*D+p*z,s[5]=f*L+d*I+u*k+p*N,s[9]=f*_+d*F+u*Z+p*P,s[13]=f*E+d*V+u*C+p*q,s[2]=x*b+y*R+m*D+h*z,s[6]=x*L+y*I+m*k+h*N,s[10]=x*_+y*F+m*Z+h*P,s[14]=x*E+y*V+m*C+h*q,s[3]=S*b+w*R+M*D+T*z,s[7]=S*L+w*I+M*k+T*N,s[11]=S*_+w*F+M*Z+T*P,s[15]=S*E+w*V+M*C+T*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],d=e[6],u=e[10],p=e[14],x=e[3],y=e[7],m=e[11],h=e[15],S=c*p-l*u,w=o*p-l*d,M=o*u-c*d,T=a*p-l*f,b=a*u-c*f,L=a*d-o*f;return t*(y*S-m*w+h*M)-n*(x*S-m*T+h*b)+r*(x*w-y*T+h*L)-s*(x*M-y*b+m*L)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(s*f-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=e[9],u=e[10],p=e[11],x=e[12],y=e[13],m=e[14],h=e[15],S=t*o-n*a,w=t*c-r*a,M=t*l-s*a,T=n*c-r*o,b=n*l-s*o,L=r*l-s*c,_=f*y-d*x,E=f*m-u*x,R=f*h-p*x,I=d*m-u*y,F=d*h-p*y,V=u*h-p*m,D=S*V-w*F+M*I+T*R-b*E+L*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=(o*V-c*F+l*I)*k,e[1]=(r*F-n*V-s*I)*k,e[2]=(y*L-m*b+h*T)*k,e[3]=(u*b-d*L-p*T)*k,e[4]=(c*R-a*V-l*E)*k,e[5]=(t*V-r*R+s*E)*k,e[6]=(m*M-x*L-h*w)*k,e[7]=(f*L-u*M+p*w)*k,e[8]=(a*F-o*R+l*_)*k,e[9]=(n*R-t*F-s*_)*k,e[10]=(x*b-y*M+h*S)*k,e[11]=(d*M-f*b-p*S)*k,e[12]=(o*E-a*I-c*_)*k,e[13]=(t*I-n*E+r*_)*k,e[14]=(y*w-x*T-m*S)*k,e[15]=(f*T-d*w+u*S)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,d=o+o,u=s*l,p=s*f,x=s*d,y=a*f,m=a*d,h=o*d,S=c*l,w=c*f,M=c*d,T=n.x,b=n.y,L=n.z;return r[0]=(1-(y+h))*T,r[1]=(p+M)*T,r[2]=(x-w)*T,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(u+h))*b,r[6]=(m+S)*b,r[7]=0,r[8]=(x+w)*L,r[9]=(m-S)*L,r[10]=(1-(u+y))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=$n.set(r[0],r[1],r[2]).length();const o=$n.set(r[4],r[5],r[6]).length(),c=$n.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xt.copy(this);const l=1/a,f=1/o,d=1/c;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=f,Xt.elements[5]*=f,Xt.elements[6]*=f,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=sn,c=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r);let x,y;if(c)x=s/(a-s),y=a*s/(a-s);else if(o===sn)x=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ki)x=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=sn,c=!1){const l=this.elements,f=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,y;if(c)x=1/(a-s),y=a/(a-s);else if(o===sn)x=-2/(a-s),y=-(a+s)/(a-s);else if(o===ki)x=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Or.prototype.isMatrix4=!0;let tt=Or;const $n=new G,Xt=new tt,qc=new G(0,0,0),Yc=new G(1,1,1),bn=new G,$i=new G,Ut=new G,uo=new tt,ho=new Wn;class cn{constructor(e=0,t=0,n=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ho.setFromEuler(this),this.setFromQuaternion(ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kc=0;const fo=new G,Jn=new Wn,hn=new tt,Ji=new G,bi=new G,Zc=new G,$c=new Wn,po=new G(1,0,0),mo=new G(0,1,0),go=new G(0,0,1),_o={type:"added"},Jc={type:"removed"},Qn={type:"childadded",child:null},ns={type:"childremoved",child:null};class gt extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new G,t=new cn,n=new Wn,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Le}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(go,e)}translateOnAxis(e,t){return fo.copy(e).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ji.copy(e):Ji.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(bi,Ji,this.up):hn.lookAt(Ji,bi,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(hn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_o),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jc),ns.child=e,this.dispatchEvent(ns),ns.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_o),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,Zc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,$c,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gt.DEFAULT_UP=new G(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mi extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qc={type:"move"};class is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&u>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function rs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=He.workingColorSpace){if(e=zc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=rs(a,s,e+1/3),this.g=rs(a,s,e),this.b=rs(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Tl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return He.workingToColorSpace(wt.copy(this),e),Math.round(Ve(wt.r*255,0,255))*65536+Math.round(Ve(wt.g*255,0,255))*256+Math.round(Ve(wt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(wt.copy(this),t);const n=wt.r,r=wt.g,s=wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=f<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ft){He.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,r=wt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Qi);const n=Jr(Tn.h,Qi.h,t),r=Jr(Tn.s,Qi.s,t),s=Jr(Tn.l,Qi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ie;Ie.NAMES=Tl;class La{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new La(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jc extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qt=new G,fn=new G,ss=new G,dn=new G,jn=new G,ei=new G,xo=new G,as=new G,os=new G,ls=new G,cs=new ct,us=new ct,hs=new ct;class kt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),fn.subVectors(n,t),ss.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(fn),c=qt.dot(ss),l=fn.dot(fn),f=fn.dot(ss),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-o*f)*u,x=(a*f-o*c)*u;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return cs.setScalar(0),us.setScalar(0),hs.setScalar(0),cs.fromBufferAttribute(e,t),us.fromBufferAttribute(e,n),hs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cs,s.x),a.addScaledVector(us,s.y),a.addScaledVector(hs,s.z),a}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),fn.subVectors(e,t),qt.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),qt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;jn.subVectors(r,n),ei.subVectors(s,n),as.subVectors(e,n);const c=jn.dot(as),l=ei.dot(as);if(c<=0&&l<=0)return t.copy(n);os.subVectors(e,r);const f=jn.dot(os),d=ei.dot(os);if(f>=0&&d<=f)return t.copy(r);const u=c*d-f*l;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(jn,a);ls.subVectors(e,s);const p=jn.dot(ls),x=ei.dot(ls);if(x>=0&&p<=x)return t.copy(s);const y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(ei,o);const m=f*x-p*d;if(m<=0&&d-f>=0&&p-x>=0)return xo.subVectors(s,r),o=(d-f)/(d-f+(p-x)),t.copy(r).addScaledVector(xo,o);const h=1/(m+y+u);return a=y*h,o=u*h,t.copy(n).addScaledVector(jn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),er.subVectors(this.max,Ti),ti.subVectors(e.a,Ti),ni.subVectors(e.b,Ti),ii.subVectors(e.c,Ti),An.subVectors(ni,ti),wn.subVectors(ii,ni),In.subVectors(ti,ii);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-In.z,In.y,An.z,0,-An.x,wn.z,0,-wn.x,In.z,0,-In.x,-An.y,An.x,0,-wn.y,wn.x,0,-In.y,In.x,0];return!fs(t,ti,ni,ii,er)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,ti,ni,ii,er))?!1:(tr.crossVectors(An,wn),t=[tr.x,tr.y,tr.z],fs(t,ti,ni,ii,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new G,new G,new G,new G,new G,new G,new G,new G],Yt=new G,ji=new Xn,ti=new G,ni=new G,ii=new G,An=new G,wn=new G,In=new G,Ti=new G,er=new G,tr=new G,Un=new G;function fs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Un.fromArray(i,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),f=n.dot(Un);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const dt=new G,nr=new Re;let eu=0;class Jt extends kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Al extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const tu=new Xn,Ai=new G,ds=new G;class Si{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ai,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(ds)),this.expandByPoint(Ai.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nu=0;const Gt=new tt,ps=new gt,ri=new G,Nt=new Xn,wi=new Xn,Mt=new G;class pt extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nc(e)?wl:Al)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return ps.lookAt(e),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Nt.min,wi.min),Nt.expandByPoint(Mt),Mt.addVectors(Nt.max,wi.max),Nt.expandByPoint(Mt)):(Nt.expandByPoint(wi.min),Nt.expandByPoint(wi.max))}Nt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Mt.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(e,l),Mt.add(ri)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new G,c[_]=new G;const l=new G,f=new G,d=new G,u=new Re,p=new Re,x=new Re,y=new G,m=new G;function h(_,E,R){l.fromBufferAttribute(n,_),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,R),f.sub(l),d.sub(l),p.sub(u),x.sub(u);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(y.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(I),o[_].add(y),o[E].add(y),o[R].add(y),c[_].add(m),c[E].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,E=S.length;_<E;++_){const R=S[_],I=R.start,F=R.count;for(let V=I,D=I+F;V<D;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new G,M=new G,T=new G,b=new G;function L(_){T.fromBufferAttribute(r,_),b.copy(T);const E=o[_];w.copy(E),w.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(b,E);const I=M.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,E=S.length;_<E;++_){const R=S[_],I=R.start,F=R.count;for(let V=I,D=I+F;V<D;V+=3)L(e.getX(V+0)),L(e.getX(V+1)),L(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,f=new G,d=new G;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(f),c.add(f),l.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,d=o.normalized,u=new l.constructor(c.length*f);let p=0,x=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*f;for(let h=0;h<f;h++)u[x++]=l[p++]}return new Jt(u,f,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,d=l.length;f<d;f++){const u=l[f],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];f.push(p.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Pt=new G;class Ur{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ms=new G,ru=new G,su=new Le;class Cn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ms.subVectors(n,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ms),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||su.getNormalMatrix(e),r=this.coplanarPoint(ms).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let au=0;class qn extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=zi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rl extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let si;const Ri=new G,ai=new G,oi=new G,li=new Re,Ci=new Re,Cl=new tt,ir=new G,Pi=new G,rr=new G,vo=new Re,gs=new Re,Mo=new Re;class ou extends gt{constructor(e=new Rl){if(super(),this.isSprite=!0,this.type="Sprite",si===void 0){si=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new iu(t,5);si.setIndex([0,1,2,0,2,3]),si.setAttribute("position",new Ur(n,3,0,!1)),si.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=si,this.material=e,this.center=new Re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ai.setFromMatrixScale(this.matrixWorld),Cl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ai.multiplyScalar(-oi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;sr(ir.set(-.5,-.5,0),oi,a,ai,r,s),sr(Pi.set(.5,-.5,0),oi,a,ai,r,s),sr(rr.set(.5,.5,0),oi,a,ai,r,s),vo.set(0,0),gs.set(1,0),Mo.set(1,1);let o=e.ray.intersectTriangle(ir,Pi,rr,!1,Ri);if(o===null&&(sr(Pi.set(-.5,.5,0),oi,a,ai,r,s),gs.set(0,1),o=e.ray.intersectTriangle(ir,rr,Pi,!1,Ri),o===null))return;const c=e.ray.origin.distanceTo(Ri);c<e.near||c>e.far||t.push({distance:c,point:Ri.clone(),uv:kt.getInterpolation(Ri,ir,Pi,rr,vo,gs,Mo,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sr(i,e,t,n,r,s){li.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ci.x=s*li.x-r*li.y,Ci.y=r*li.x+s*li.y):Ci.copy(li),i.copy(e),i.x+=Ci.x,i.y+=Ci.y,i.applyMatrix4(Cl)}const mn=new G,_s=new G,ar=new G,or=new G;class Pl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_s.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),or.copy(this.origin).sub(_s);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ar),o=or.dot(this.direction),c=-or.dot(ar),l=or.lengthSq(),f=Math.abs(1-a*a);let d,u,p,x;if(f>0)if(d=a*c-o,u=a*o-c,x=s*f,d>=0)if(u>=-x)if(u<=x){const y=1/f;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_s).addScaledVector(ar,u),p}intersectSphere(e,t){if(e.radius<0)return null;mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,x=t.x-a.x,y=t.y-a.y,m=t.z-a.z,h=n.x-a.x,S=n.y-a.y,w=n.z-a.z,M=Math.abs(c),T=Math.abs(l),b=Math.abs(f);let L,_,E,R,I,F,V,D,k,Z,C,z;if(M>=T&&M>=b?(E=c,F=d,k=x,z=h,c>=0?(L=l,_=f,R=u,I=p,V=y,D=m,Z=S,C=w):(L=f,_=l,R=p,I=u,V=m,D=y,Z=w,C=S)):T>=b?(E=l,F=u,k=y,z=S,l>=0?(L=f,_=c,R=p,I=d,V=m,D=x,Z=w,C=h):(L=c,_=f,R=d,I=p,V=x,D=m,Z=h,C=w)):(E=f,F=p,k=m,z=w,f>=0?(L=c,_=l,R=d,I=u,V=x,D=y,Z=h,C=S):(L=l,_=c,R=u,I=d,V=y,D=x,Z=S,C=h)),E===0)return null;const N=L/E,P=_/E,q=1/E,re=R-N*F,ge=I-P*F,Qe=V-N*k,ze=D-P*k,ke=Z-N*z,$=C-P*z,te=ke*ze-$*Qe,ve=re*$-ge*ke,Pe=Qe*ge-ze*re;if(r){if(te<0||ve<0||Pe<0)return null}else if((te<0||ve<0||Pe<0)&&(te>0||ve>0||Pe>0))return null;const _e=te+ve+Pe;if(_e===0)return null;const Fe=q*(te*F+ve*k+Pe*z);return(_e>0?Fe<0:Fe>0)?null:this.at(Fe/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const So=new tt,Nn=new Pl,lr=new Si,Eo=new G,cr=new G,ur=new G,hr=new G,xs=new G,fr=new G,yo=new G,dr=new G;class St extends gt{constructor(e=new pt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],d=s[c];f!==0&&(xs.fromBufferAttribute(d,e),a?fr.addScaledVector(xs,f):fr.addScaledVector(xs.sub(t),f))}t.add(fr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(lr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(lr,Eo)===null||Nn.origin.distanceToSquared(Eo)>(e.far-e.near)**2))&&(So.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(So),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){const m=u[x],h=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=w;M<T;M+=3){const b=o.getX(M),L=o.getX(M+1),_=o.getX(M+2);r=pr(this,h,e,n,l,f,d,b,L,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,h=y;m<h;m+=3){const S=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);r=pr(this,a,e,n,l,f,d,S,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){const m=u[x],h=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,T=w;M<T;M+=3){const b=M,L=M+1,_=M+2;r=pr(this,h,e,n,l,f,d,b,L,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=x,h=y;m<h;m+=3){const S=m,w=m+1,M=m+2;r=pr(this,a,e,n,l,f,d,S,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function lu(i,e,t,n,r,s,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Gn,o),c===null)return null;dr.copy(o),dr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(dr);return l<t.near||l>t.far?null:{distance:l,point:dr.clone(),object:i}}function pr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,cr),i.getVertexPosition(c,ur),i.getVertexPosition(l,hr);const f=lu(i,e,t,n,cr,ur,hr,yo);if(f){const d=new G;kt.getBarycoord(yo,cr,ur,hr,d),r&&(f.uv=kt.getInterpolatedAttribute(r,o,c,l,d,new Re)),s&&(f.uv1=kt.getInterpolatedAttribute(s,o,c,l,d,new Re)),a&&(f.normal=kt.getInterpolatedAttribute(a,o,c,l,d,new G),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new G,materialIndex:0};kt.getNormal(cr,ur,hr,u.normal),f.face=u,f.barycoord=d}return f}class Ll extends Rt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Et,f=Et,d,u){super(null,a,o,c,l,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo extends Jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ci=new tt,To=new tt,mr=[],Ao=new Xn,cu=new tt,Li=new St,Di=new Si;class wo extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,cu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Ao.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(Ao)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Di.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),e.ray.intersectsSphere(Di)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ci),To.multiplyMatrices(n,ci),Li.matrixWorld=To,Li.raycast(e,mr);for(let a=0,o=mr.length;a<o;a++){const c=mr[a];c.instanceId=s,c.object=this,t.push(c)}mr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ll(new Float32Array(r*this.count),r,this.count,ba,Kt));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fn=new Si,uu=new Re(.5,.5),gr=new G;class Da{constructor(e=new Cn,t=new Cn,n=new Cn,r=new Cn,s=new Cn,a=new Cn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],d=s[5],u=s[6],p=s[7],x=s[8],y=s[9],m=s[10],h=s[11],S=s[12],w=s[13],M=s[14],T=s[15];if(r[0].setComponents(l-a,p-f,h-x,T-S).normalize(),r[1].setComponents(l+a,p+f,h+x,T+S).normalize(),r[2].setComponents(l+o,p+d,h+y,T+w).normalize(),r[3].setComponents(l-o,p-d,h-y,T-w).normalize(),n)r[4].setComponents(c,u,m,M).normalize(),r[5].setComponents(l-c,p-u,h-m,T-M).normalize();else if(r[4].setComponents(l-c,p-u,h-m,T-M).normalize(),t===sn)r[5].setComponents(l+c,p+u,h+m,T+M).normalize();else if(t===ki)r[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){Fn.center.set(0,0,0);const t=uu.distanceTo(e.center);return Fn.radius=.7071067811865476+t,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(gr.x=r.normal.x>0?e.max.x:e.min.x,gr.y=r.normal.y>0?e.max.y:e.min.y,gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dl extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ro=new tt,ma=new Pl,_r=new Si,xr=new G;class hu extends gt{constructor(e=new pt,t=new Dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;Ro.copy(r).invert(),ma.copy(e.ray).applyMatrix4(Ro);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=u,y=p;x<y;x++){const m=l.getX(x);xr.fromBufferAttribute(d,m),Co(xr,m,c,r,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=u,y=p;x<y;x++)xr.fromBufferAttribute(d,x),Co(xr,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Co(i,e,t,n,r,s,a){const o=ma.distanceSqToPoint(i);if(o<t){const c=new G;ma.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Il extends Rt{constructor(e=[],t=Hn,n,r,s,a,o,c,l,f){super(e,t,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xi extends Rt{constructor(e,t,n=on,r,s,a,o=Et,c=Et,l,f=Mn,d=1){if(f!==Mn&&f!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class fu extends Xi{constructor(e,t=on,n=Hn,r,s,a=Et,o=Et,c,l=Mn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ul extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ei extends pt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],d=[];let u=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function x(y,m,h,S,w,M,T,b,L,_,E){const R=M/L,I=T/_,F=M/2,V=T/2,D=b/2,k=L+1,Z=_+1;let C=0,z=0;const N=new G;for(let P=0;P<Z;P++){const q=P*I-V;for(let re=0;re<k;re++){const ge=re*R-F;N[y]=ge*S,N[m]=q*w,N[h]=D,l.push(N.x,N.y,N.z),N[y]=0,N[m]=0,N[h]=b>0?1:-1,f.push(N.x,N.y,N.z),d.push(re/L),d.push(1-P/_),C+=1}}for(let P=0;P<_;P++)for(let q=0;q<L;q++){const re=u+q+k*P,ge=u+q+k*(P+1),Qe=u+(q+1)+k*(P+1),ze=u+(q+1)+k*P;c.push(re,ge,ze),c.push(ge,Qe,ze),z+=6}o.addGroup(p,z,E),p+=z,u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zr extends pt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new G,f=new Re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),f.x=(a[u]/e+1)/2,f.y=(a[u+1]/e+1)/2,c.push(f.x,f.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gr extends pt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],u=[],p=[];let x=0;const y=[],m=n/2;let h=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(p,2));function S(){const M=new G,T=new G;let b=0;const L=(t-e)/n;for(let _=0;_<=s;_++){const E=[],R=_/s,I=R*(t-e)+e;for(let F=0;F<=r;F++){const V=F/r,D=V*c+o,k=Math.sin(D),Z=Math.cos(D);T.x=I*k,T.y=-R*n+m,T.z=I*Z,d.push(T.x,T.y,T.z),M.set(k,L,Z).normalize(),u.push(M.x,M.y,M.z),p.push(V,1-R),E.push(x++)}y.push(E)}for(let _=0;_<r;_++)for(let E=0;E<s;E++){const R=y[E][_],I=y[E+1][_],F=y[E+1][_+1],V=y[E][_+1];(e>0||E!==0)&&(f.push(R,I,V),b+=3),(t>0||E!==s-1)&&(f.push(I,F,V),b+=3)}l.addGroup(h,b,0),h+=b}function w(M){const T=x,b=new Re,L=new G;let _=0;const E=M===!0?e:t,R=M===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*R,0),u.push(0,R,0),p.push(.5,.5),x++;const I=x;for(let F=0;F<=r;F++){const D=F/r*c+o,k=Math.cos(D),Z=Math.sin(D);L.x=E*Z,L.y=m*R,L.z=E*k,d.push(L.x,L.y,L.z),u.push(0,R,0),b.x=k*.5+.5,b.y=Z*.5*R+.5,p.push(b.x,b.y),x++}for(let F=0;F<r;F++){const V=T+F,D=I+F;M===!0?f.push(D,D+1,V):f.push(D+1,D,V),_+=3}l.addGroup(h,_,M===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends Gr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hr extends pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),f(),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(s.slice(),3)),this.setAttribute("uv",new Ye(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new G,M=new G,T=new G;for(let b=0;b<t.length;b+=3)p(t[b+0],w),p(t[b+1],M),p(t[b+2],T),c(w,M,T,S)}function c(S,w,M,T){const b=T+1,L=[];for(let _=0;_<=b;_++){L[_]=[];const E=S.clone().lerp(M,_/b),R=w.clone().lerp(M,_/b),I=b-_;for(let F=0;F<=I;F++)F===0&&_===b?L[_][F]=E:L[_][F]=E.clone().lerp(R,F/I)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){const R=Math.floor(E/2);E%2===0?(u(L[_][R+1]),u(L[_+1][R]),u(L[_][R])):(u(L[_][R+1]),u(L[_+1][R+1]),u(L[_+1][R]))}}function l(S){const w=new G;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(S),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function f(){const S=new G;for(let w=0;w<s.length;w+=3){S.x=s[w+0],S.y=s[w+1],S.z=s[w+2];const M=m(S)/2/Math.PI+.5,T=h(S)/Math.PI+.5;a.push(M,1-T)}x(),d()}function d(){for(let S=0;S<a.length;S+=6){const w=a[S+0],M=a[S+2],T=a[S+4],b=Math.max(w,M,T),L=Math.min(w,M,T);b>.9&&L<.1&&(w<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function u(S){s.push(S.x,S.y,S.z)}function p(S,w){const M=S*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function x(){const S=new G,w=new G,M=new G,T=new G,b=new Re,L=new Re,_=new Re;for(let E=0,R=0;E<s.length;E+=9,R+=6){S.set(s[E+0],s[E+1],s[E+2]),w.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),b.set(a[R+0],a[R+1]),L.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),T.copy(S).add(w).add(M).divideScalar(3);const I=m(T);y(b,R+0,S,I),y(L,R+2,w,I),y(_,R+4,M,I)}}function y(S,w,M,T){T<0&&S.x===1&&(a[w]=S.x-1),M.x===0&&M.z===0&&(a[w]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function h(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.vertices,e.indices,e.radius,e.detail)}}class Ua extends Hr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ua(e.radius,e.detail)}}class Na extends Hr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Na(e.radius,e.detail)}}class qi extends pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,d=e/o,u=t/c,p=[],x=[],y=[],m=[];for(let h=0;h<f;h++){const S=h*u-a;for(let w=0;w<l;w++){const M=w*d-s;x.push(M,-S,0),y.push(0,0,1),m.push(w/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<o;S++){const w=S+l*h,M=S+l*(h+1),T=S+1+l*(h+1),b=S+1+l*h;p.push(w,M,b),p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nr extends pt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],f=[];let d=e;const u=(t-e)/r,p=new G,x=new Re;for(let y=0;y<=r;y++){for(let m=0;m<=n;m++){const h=s+m/n*a;p.x=d*Math.cos(h),p.y=d*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,f.push(x.x,x.y)}d+=u}for(let y=0;y<r;y++){const m=y*(n+1);for(let h=0;h<n;h++){const S=h+m,w=S,M=S+n+1,T=S+n+2,b=S+1;o.push(w,M,b),o.push(M,T,b)}}this.setIndex(o),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fa extends pt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const f=[],d=new G,u=new G,p=[],x=[],y=[],m=[];for(let h=0;h<=n;h++){const S=[],w=h/n,M=a+w*o,T=e*Math.cos(M),b=Math.sqrt(e*e-T*T);let L=0;h===0&&a===0?L=.5/t:h===n&&c===Math.PI&&(L=-.5/t);for(let _=0;_<=t;_++){const E=_/t,R=r+E*s;d.x=-b*Math.cos(R),d.y=T,d.z=b*Math.sin(R),x.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(E+L,1-w),S.push(l++)}f.push(S)}for(let h=0;h<n;h++)for(let S=0;S<t;S++){const w=f[h][S+1],M=f[h][S],T=f[h+1][S],b=f[h+1][S+1];(h!==0||a>0)&&p.push(w,M,b),(h!==n-1||c<Math.PI)&&p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oa extends pt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],f=[],d=[],u=new G,p=new G,x=new G;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let h=0;h<=r;h++){const S=h/r*s;p.x=(e+t*Math.cos(m))*Math.cos(S),p.y=(e+t*Math.cos(m))*Math.sin(S),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),x.subVectors(p,u).normalize(),f.push(x.x,x.y,x.z),d.push(h/r),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=r;m++){const h=(r+1)*y+m-1,S=(r+1)*(y-1)+m-1,w=(r+1)*(y-1)+m,M=(r+1)*y+m;c.push(h,S,M),c.push(S,w,M)}this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Po(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Po(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Mi(i[t]);for(const r in n)e[r]=n[r]}return e}function Po(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function du(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const pu={clone:Mi,merge:Lt};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(r.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(r.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _u extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vs extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xu extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vu extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Lo(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Lo(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lo(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Mu{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return l.push(f,d),this},this.removeHandler=function(f){const d=l.indexOf(f);return d!==-1&&l.splice(d,2),this},this.getHandler=function(f){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],x=l[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Su=new Mu;class Ba{constructor(e){this.manager=e!==void 0?e:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui=new WeakMap;class Eu extends Ba{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ms.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=ui.get(a);d===void 0&&(d=[],ui.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=Wi("img");function c(){f(),t&&t(this);const d=ui.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onLoad&&p.onLoad(this)}ui.delete(this),s.manager.itemEnd(e)}function l(d){f(),r&&r(d),Ms.remove(`image:${e}`);const u=ui.get(this)||[];for(let p=0;p<u.length;p++){const x=u[p];x.onError&&x.onError(d)}ui.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ms.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class yu extends Ba{constructor(e){super(e)}load(e,t,n,r){const s=new Rt,a=new Eu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Fl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class bu extends Fl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ss=new tt,Do=new G,Io=new G;class Tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Do.setFromMatrixPosition(e.matrixWorld),t.position.copy(Do),Io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Io),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ss.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ss,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ki||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vr=new G,Mr=new Wn,en=new G;class Ol extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vr,Mr,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vr,Mr,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vr,Mr,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vr,Mr,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new G,Uo=new Re,No=new Re;class Ht extends Ol{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Uo,No),t.subVectors(No,Uo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class za extends Ol{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Au extends Tu{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wu extends Fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const hi=-90,fi=1;class Ru extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(hi,fi,e,t);r.layers=this.layers,this.add(r);const s=new Ht(hi,fi,e,t);s.layers=this.layers,this.add(s);const a=new Ht(hi,fi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(hi,fi,e,t);o.layers=this.layers,this.add(o);const c=new Ht(hi,fi,e,t);c.layers=this.layers,this.add(c);const l=new Ht(hi,fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,u,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Cu extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wa=class Wa{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Wa.prototype.isMatrix2=!0;let Fo=Wa;function Oo(i,e,t,n){const r=Pu(n);switch(t){case vl:return i*e;case ba:return i*e/r.components*r.byteLength;case Ta:return i*e/r.components*r.byteLength;case Vn:return i*e*2/r.components*r.byteLength;case Aa:return i*e*2/r.components*r.byteLength;case Ml:return i*e*3/r.components*r.byteLength;case Zt:return i*e*4/r.components*r.byteLength;case wa:return i*e*4/r.components*r.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bs:case Gs:return Math.max(i,16)*Math.max(e,8)/4;case Os:case zs:return Math.max(i,8)*Math.max(e,8)/2;case Hs:case Vs:case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ks:case Cr:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $s:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Js:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oa:case la:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ua:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pr:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pu(i){switch(i){case Bt:case ml:return{byteLength:1,components:1};case Hi:case gl:case ln:return{byteLength:2,components:1};case Ea:case ya:return{byteLength:2,components:4};case on:case Sa:case Kt:return{byteLength:4,components:1};case _l:case xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bl(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Lu(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const f=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,f);else{d.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<d.length;p++){const x=d[u],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,x=d.length;p<x;p++){const y=d[p];i.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
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
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,th=`#define PI 3.141592653589793
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
} // validated`,nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ih=`vec3 transformedNormal = objectNormal;
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
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uh=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vh=`#ifdef USE_GRADIENTMAP
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
}`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bh=`#ifdef USE_ENVMAP
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
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ch=`PhysicalMaterial material;
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
#endif`,Ph=`uniform sampler2D dfgLUT;
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
}`,Lh=`
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
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
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
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,Gf=`#if DEPTH_PACKING == 3200
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
}`,Hf=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,Jf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,ed=`#define NORMAL
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
}`,td=`#define PHONG
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
}`,nd=`#define PHONG
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
}`,id=`#define STANDARD
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
}`,rd=`#define STANDARD
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
}`,sd=`#define TOON
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
}`,ad=`#define TOON
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
}`,od=`uniform float size;
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#include <common>
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
}`,ud=`uniform vec3 color;
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
}`,hd=`uniform float rotation;
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
}`,fd=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Du,alphahash_pars_fragment:Iu,alphamap_fragment:Uu,alphamap_pars_fragment:Nu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:Gu,batching_vertex:Hu,begin_vertex:Vu,beginnormal_vertex:ku,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:$u,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:ju,color_vertex:eh,common:th,cube_uv_reflection_fragment:nh,defaultnormal_vertex:ih,displacementmap_pars_vertex:rh,displacementmap_vertex:sh,emissivemap_fragment:ah,emissivemap_pars_fragment:oh,colorspace_fragment:lh,colorspace_pars_fragment:ch,envmap_fragment:uh,envmap_common_pars_fragment:hh,envmap_pars_fragment:fh,envmap_pars_vertex:dh,envmap_physical_pars_fragment:bh,envmap_vertex:ph,fog_vertex:mh,fog_pars_vertex:gh,fog_fragment:_h,fog_pars_fragment:xh,gradientmap_pars_fragment:vh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Eh,lights_pars_begin:yh,lights_toon_fragment:Th,lights_toon_pars_fragment:Ah,lights_phong_fragment:wh,lights_phong_pars_fragment:Rh,lights_physical_fragment:Ch,lights_physical_pars_fragment:Ph,lights_fragment_begin:Lh,lights_fragment_maps:Dh,lights_fragment_end:Ih,lightprobes_pars_fragment:Uh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:Gh,map_particle_fragment:Hh,map_particle_pars_fragment:Vh,metalnessmap_fragment:kh,metalnessmap_pars_fragment:Wh,morphinstance_vertex:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:$h,normal_fragment_maps:Jh,normal_pars_fragment:Qh,normal_pars_vertex:jh,normal_vertex:ef,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:rf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:af,opaque_fragment:of,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:uf,dithering_fragment:hf,dithering_pars_fragment:ff,roughnessmap_fragment:df,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:xf,skinbase_vertex:vf,skinning_pars_vertex:Mf,skinning_vertex:Sf,skinnormal_vertex:Ef,specularmap_fragment:yf,specularmap_pars_fragment:bf,tonemapping_fragment:Tf,tonemapping_pars_fragment:Af,transmission_fragment:wf,transmission_pars_fragment:Rf,uv_pars_fragment:Cf,uv_pars_vertex:Pf,uv_vertex:Lf,worldpos_vertex:Df,background_vert:If,background_frag:Uf,backgroundCube_vert:Nf,backgroundCube_frag:Ff,cube_vert:Of,cube_frag:Bf,depth_vert:zf,depth_frag:Gf,distance_vert:Hf,distance_frag:Vf,equirect_vert:kf,equirect_frag:Wf,linedashed_vert:Xf,linedashed_frag:qf,meshbasic_vert:Yf,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:$f,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:jf,meshnormal_frag:ed,meshphong_vert:td,meshphong_frag:nd,meshphysical_vert:id,meshphysical_frag:rd,meshtoon_vert:sd,meshtoon_frag:ad,points_vert:od,points_frag:ld,shadow_vert:cd,shadow_frag:ud,sprite_vert:hd,sprite_frag:fd},he={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},nn={basic:{uniforms:Lt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([he.points,he.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([he.common,he.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([he.sprite,he.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Lt([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Lt([he.lights,he.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};nn.physical={uniforms:Lt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Sr={r:0,b:0,g:0},dd=new tt,zl=new Le;zl.set(-1,0,0,0,1,0,0,0,1);function pd(i,e,t,n,r,s){const a=new Ie(0);let o=r===!0?0:1,c,l,f=null,d=0,u=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const M=S.backgroundBlurriness>0;w=e.get(w,M)}return w}function x(S){let w=!1;const M=p(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){const M=p(w);M&&(M.isCubeTexture||M.mapping===Br)?(l===void 0&&(l=new St(new Ei(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Mi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dd.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zl),l.material.toneMapped=He.getTransfer(M.colorSpace)!==Je,(f!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new St(new qi(2,2),new un({name:"BackgroundMaterial",uniforms:Mi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=He.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(Sr,Nl(i)),t.buffers.color.setClear(Sr.r,Sr.g,Sr.b,w,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:x,addToRenderList:y,dispose:h}}function md(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,F,V,D,k){let Z=!1;const C=d(I,D,V,F);s!==C&&(s=C,l(s.object)),Z=p(I,D,V,k),Z&&x(I,D,V,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(I,F,V,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function f(I){return i.deleteVertexArray(I)}function d(I,F,V,D){const k=D.wireframe===!0;let Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);const C=I.isInstancedMesh===!0?I.id:0;let z=Z[C];z===void 0&&(z={},Z[C]=z);let N=z[V.id];N===void 0&&(N={},z[V.id]=N);let P=N[k];return P===void 0&&(P=u(c()),N[k]=P),P}function u(I){const F=[],V=[],D=[];for(let k=0;k<t;k++)F[k]=0,V[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:D,object:I,attributes:{},index:null}}function p(I,F,V,D){const k=s.attributes,Z=F.attributes;let C=0;const z=V.getAttributes();for(const N in z)if(z[N].location>=0){const q=k[N];let re=Z[N];if(re===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;C++}return s.attributesNum!==C||s.index!==D}function x(I,F,V,D){const k={},Z=F.attributes;let C=0;const z=V.getAttributes();for(const N in z)if(z[N].location>=0){let q=Z[N];q===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(q=I.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),k[N]=re,C++}s.attributes=k,s.attributesNum=C,s.index=D}function y(){const I=s.newAttributes;for(let F=0,V=I.length;F<V;F++)I[F]=0}function m(I){h(I,0)}function h(I,F){const V=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;V[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),k[I]!==F&&(i.vertexAttribDivisor(I,F),k[I]=F)}function S(){const I=s.newAttributes,F=s.enabledAttributes;for(let V=0,D=F.length;V<D;V++)F[V]!==I[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function w(I,F,V,D,k,Z,C){C===!0?i.vertexAttribIPointer(I,F,V,k,Z):i.vertexAttribPointer(I,F,V,D,k,Z)}function M(I,F,V,D){y();const k=D.attributes,Z=V.getAttributes(),C=F.defaultAttributeValues;for(const z in Z){const N=Z[z];if(N.location>=0){let P=k[z];if(P===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),P!==void 0){const q=P.normalized,re=P.itemSize,ge=e.get(P);if(ge===void 0)continue;const Qe=ge.buffer,ze=ge.type,ke=ge.bytesPerElement,$=ze===i.INT||ze===i.UNSIGNED_INT||P.gpuType===Sa;if(P.isInterleavedBufferAttribute){const te=P.data,ve=te.stride,Pe=P.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<N.locationSize;_e++)h(N.location+_e,te.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<N.locationSize;_e++)m(N.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let _e=0;_e<N.locationSize;_e++)w(N.location+_e,re/N.locationSize,ze,q,ve*ke,(Pe+re/N.locationSize*_e)*ke,$)}else{if(P.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)h(N.location+te,P.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let te=0;te<N.locationSize;te++)m(N.location+te);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let te=0;te<N.locationSize;te++)w(N.location+te,re/N.locationSize,ze,q,re*ke,re/N.locationSize*te*ke,$)}}else if(C!==void 0){const q=C[z];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(N.location,q);break;case 3:i.vertexAttrib3fv(N.location,q);break;case 4:i.vertexAttrib4fv(N.location,q);break;default:i.vertexAttrib1fv(N.location,q)}}}}S()}function T(){E();for(const I in n){const F=n[I];for(const V in F){const D=F[V];for(const k in D){const Z=D[k];for(const C in Z)f(Z[C].object),delete Z[C];delete D[k]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const V in F){const D=F[V];for(const k in D){const Z=D[k];for(const C in Z)f(Z[C].object),delete Z[C];delete D[k]}}delete n[I.id]}function L(I){for(const F in n){const V=n[F];for(const D in V){const k=V[D];if(k[I.id]===void 0)continue;const Z=k[I.id];for(const C in Z)f(Z[C].object),delete Z[C];delete k[I.id]}}}function _(I){for(const F in n){const V=n[F],D=I.isInstancedMesh===!0?I.id:0,k=V[D];if(k!==void 0){for(const Z in k){const C=k[Z];for(const z in C)f(C[z].object),delete C[z];delete k[Z]}delete V[D],Object.keys(V).length===0&&delete n[F]}}}function E(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function gd(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let u=0;for(let p=0;p<f;p++)u+=l[p];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _d(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Zt&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const _=L===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Bt&&L!==Kt&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Ce("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,maxSamples:T,samples:b}}function xd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Cn,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,p){const x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!r||x===null||x.length===0||s&&!m)s?f(null):l();else{const S=s?0:n,w=S*4;let M=h.clippingState||null;c.value=M,M=f(x,u,w,p);for(let T=0;T!==w;++T)M[T]=t[T];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,u,p,x){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=c.value,x!==!0||m===null){const h=p+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,M=p;w!==y;++w,M+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const gi=4,vd=6,Md=20,Sd=256,Ii=new za,Bo=new Ie;let Es=null,ys=0,bs=0,Ts=!1;const Ed=new G,On=new G;class zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Ed}=s;Es=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),bs=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,ys,bs),this._renderer.xr.enabled=Ts,e.scissorTest=!1,di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),bs=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:ln,format:Zt,colorSpace:Lr,depthBuffer:!1},r=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yd(s)),this._blurMaterial=Td(s,e,t),this._ggxMaterial=bd(s,e,t)}return r}_compileMaterial(e){const t=new St(new pt,e);this._renderer.compile(t,Ii)}_sceneToCubeUV(e,t,n,r,s){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Bo),d.toneMapping=an,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Ei,new vn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,h=!0):(m.color.copy(Bo),h=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[w],s.y,s.z)):M===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[w]));const T=this._cubeSize;di(r,M*T,w>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(y,c),d.render(e,c)}d.toneMapping=p,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hn||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;di(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ii)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-f*f),u=l*1.25,p=d*u,{_lodMax:x}=this,y=this._sizeLods[n],m=3*y*(n>x-gi?n-x+gi:0),h=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,di(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(o,Ii),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,di(e,m,h,3*y,2*y),r.setRenderTarget(e),r.render(o,Ii)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const f=this._sizeLods[r],d=3*f*(r>this._lodMax-gi?r-this._lodMax+gi:0),u=4*(this._cubeSize-f);di(t,d,u,3*f,2*f),a.setRenderTarget(t),a.render(c,Ii)}}function yd(i){const e=[],t=[];let n=i;const r=i-gi+1+vd;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,f=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,x=new Float32Array(p*u*d),y=new Float32Array(p*u*d);for(let h=0;h<d;h++){const S=h%3*2/3-1,w=h>2?0:-1,M=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];x.set(M,p*u*h);for(let T=0;T<u;T++){const b=f[T*2]*2-1,L=f[T*2+1]*2-1;h===0?On.set(1,L,b):h===1?On.set(-b,1,-L):h===2?On.set(-b,L,1):h===3?On.set(-1,L,-b):h===4?On.set(-b,-1,L):On.set(b,L,-1),On.toArray(y,(h*u+T)*p)}}const m=new pt;m.setAttribute("position",new Jt(x,p)),m.setAttribute("outputDirection",new Jt(y,p)),t.push(new St(m,null)),n>gi&&n--}return{lodMeshes:t,sizeLods:e}}function Go(i,e,t){const n=new $t(i,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function di(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bd(i,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Td(i,e,t){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:Md,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ho(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Vo(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Vr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gl extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Il(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ei(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:_n});s.uniforms.tEquirect.value=t;const a=new St(r,s),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=yt),new Ru(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Ad(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===qr||p===Yr)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const y=new Gl(x.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,x=p===qr||p===Yr,y=p===Hn||p===vi;if(x||y){let m=t.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new zo(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return x&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new zo(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,p){return p===qr?u.mapping=Hn:p===Yr&&(u.mapping=vi),u}function c(u){let p=0;const x=6;for(let y=0;y<x;y++)u[y]!==void 0&&p++;return p===x}function l(u){const p=u.target;p.removeEventListener("dispose",l);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function wd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&_i("WebGLRenderer: "+n+" extension not supported."),r}}}function Rd(i,e,t,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,x=d.attributes.position;let y=0;if(x===void 0)return;if(p!==null){const S=p.array;y=p.version;for(let w=0,M=S.length;w<M;w+=3){const T=S[w+0],b=S[w+1],L=S[w+2];u.push(T,b,b,L,L,T)}}else{const S=x.array;y=x.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const T=w+0,b=w+1,L=w+2;u.push(T,b,b,L,L,T)}}const m=new(x.count>=65535?wl:Al)(u,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:f}}function Cd(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,s,d*a),t.update(u,n,1)}function l(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,s,d*a,p),t.update(u,n,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Pd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ld(i,e,t){const n=new WeakMap,r=new ct;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),x===!0&&(w=2),y===!0&&(w=3);let M=o.attributes.position.count*w,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*T*4*d),L=new yl(b,M,T,d);L.type=Kt,L.needsUpdate=!0;const _=w*4;for(let R=0;R<d;R++){const I=m[R],F=h[R],V=S[R],D=M*T*4*R;for(let k=0;k<I.count;k++){const Z=k*_;p===!0&&(r.fromBufferAttribute(I,k),b[D+Z+0]=r.x,b[D+Z+1]=r.y,b[D+Z+2]=r.z,b[D+Z+3]=0),x===!0&&(r.fromBufferAttribute(F,k),b[D+Z+4]=r.x,b[D+Z+5]=r.y,b[D+Z+6]=r.z,b[D+Z+7]=0),y===!0&&(r.fromBufferAttribute(V,k),b[D+Z+8]=r.x,b[D+Z+9]=r.y,b[D+Z+10]=r.z,b[D+Z+11]=V.itemSize===4?r.w:1)}}u={count:d,texture:L,size:new Re(M,T)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Dd(i,e,t,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Id={[ll]:"LINEAR_TONE_MAPPING",[cl]:"REINHARD_TONE_MAPPING",[ul]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[fl]:"AGX_TONE_MAPPING",[dl]:"NEUTRAL_TONE_MAPPING",[hl]:"CUSTOM_TONE_MAPPING"};function Ud(i,e,t,n,r,s){const a=new $t(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new pt;l.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ye([0,2,0,0,2,0],2));const f=new _u({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new St(l,f),u=new za(-1,1,1,-1,0,1);let p=null,x=null,y=!1,m,h=null,S=[],w=!1;this.setSize=function(M,T){a.setSize(M,T),o!==null&&o.setSize(M,T),c!==null&&c.setSize(M,T);for(let b=0;b<S.length;b++){const L=S[b];L.setSize&&L.setSize(M,T)}},this.setEffects=function(M){S=M,w=S.length>0&&S[0].isRenderPass===!0;const T=a.width,b=a.height;S.length>0&&o===null&&(o=new $t(T,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}),c=new $t(T,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){const _=S[L];_.setSize&&_.setSize(T,b)}},this.begin=function(M,T){if(y||M.toneMapping===an&&S.length===0)return!1;if(h=T,T!==null){const b=T.width,L=T.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return w===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=an,!0},this.hasRenderPass=function(){return w},this.end=function(M,T){M.toneMapping=m,y=!0;let b=a,L=o;for(let _=0;_<S.length;_++){const E=S[_];E.enabled!==!1&&(E.render(M,L,b,T),E.needsSwap!==!1&&(b=L,L=L===o?c:o))}if(p!==M.outputColorSpace||x!==M.toneMapping){p=M.outputColorSpace,x=M.toneMapping,f.defines={},He.getTransfer(p)===Je&&(f.defines.SRGB_TRANSFER="");const _=Id[x];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(h),M.render(d,u),h=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}const Hl=new Rt,ga=new Xi(1,1),Vl=new yl,kl=new Xc,Wl=new Il,ko=[],Wo=[],Xo=new Float32Array(16),qo=new Float32Array(9),Yo=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ko[r];if(s===void 0&&(s=new Float32Array(r),ko[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kr(i,e){let t=Wo[e];t===void 0&&(t=new Int32Array(e),Wo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function zd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Yo.set(n),i.uniformMatrix2fv(this.addr,!1,Yo),xt(t,n)}}function Gd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),xt(t,n)}}function Hd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Xo.set(n),i.uniformMatrix4fv(this.addr,!1,Xo),xt(t,n)}}function Vd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function qd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function $d(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ga.compareFunction=t.isReversedDepthBuffer()?Ca:Ra,s=ga):s=Hl,t.setTexture2D(e||s,r)}function Jd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kl,r)}function Qd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wl,r)}function jd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vl,r)}function ep(i){switch(i){case 5126:return Nd;case 35664:return Fd;case 35665:return Od;case 35666:return Bd;case 35674:return zd;case 35675:return Gd;case 35676:return Hd;case 5124:case 35670:return Vd;case 35667:case 35671:return kd;case 35668:case 35672:return Wd;case 35669:case 35673:return Xd;case 5125:return qd;case 36294:return Yd;case 36295:return Kd;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return jd}}function tp(i,e){i.uniform1fv(this.addr,e)}function np(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function ip(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function rp(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function sp(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ap(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function op(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lp(i,e){i.uniform1iv(this.addr,e)}function cp(i,e){i.uniform2iv(this.addr,e)}function up(i,e){i.uniform3iv(this.addr,e)}function hp(i,e){i.uniform4iv(this.addr,e)}function fp(i,e){i.uniform1uiv(this.addr,e)}function dp(i,e){i.uniform2uiv(this.addr,e)}function pp(i,e){i.uniform3uiv(this.addr,e)}function mp(i,e){i.uniform4uiv(this.addr,e)}function gp(i,e,t){const n=this.cache,r=e.length,s=kr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ga:a=Hl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function _p(i,e,t){const n=this.cache,r=e.length,s=kr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||kl,s[a])}function xp(i,e,t){const n=this.cache,r=e.length,s=kr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wl,s[a])}function vp(i,e,t){const n=this.cache,r=e.length,s=kr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vl,s[a])}function Mp(i){switch(i){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return up;case 35669:case 35673:return hp;case 5125:return fp;case 36294:return dp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return vp}}class Sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}}class Ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mp(t.type)}}class yp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const As=/(\w+)(\])?(\[|\.)?/g;function Ko(i,e){i.seq.push(e),i.map[e.id]=e}function bp(i,e,t){const n=i.name,r=n.length;for(As.lastIndex=0;;){const s=As.exec(n),a=As.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ko(t,l===void 0?new Sp(o,i,e):new Ep(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new yp(o),Ko(t,d)),t=d}}}class Rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);bp(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Zo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tp=37297;let Ap=0;function wp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $o=new Le;function Rp(i){He._getMatrix($o,He.workingColorSpace,i);const e=`mat3( ${$o.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case Dr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wp(i.getShaderSource(e),o)}else return s}function Cp(i,e){const t=Rp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Pp={[ll]:"Linear",[cl]:"Reinhard",[ul]:"Cineon",[Ma]:"ACESFilmic",[fl]:"AgX",[dl]:"Neutral",[hl]:"Custom"};function Lp(i,e){const t=Pp[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new G;function Dp(){He.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ip(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function Up(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Np(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Oi(i){return i!==""}function Qo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(Fp,Bp)}const Op=new Map;function Bp(i,e){let t=Ne[e];if(t===void 0){const n=Op.get(e);if(n!==void 0)t=Ne[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _a(t)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(i){return i.replace(zp,Gp)}function Gp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tl(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Hp={[Bi]:"SHADOWMAP_TYPE_PCF",[Fi]:"SHADOWMAP_TYPE_VSM"};function Vp(i){return Hp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kp={[Hn]:"ENVMAP_TYPE_CUBE",[vi]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE_UV"};function Wp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":kp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Xp={[vi]:"ENVMAP_MODE_REFRACTION"};function qp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yp={[va]:"ENVMAP_BLENDING_MULTIPLY",[yc]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function Kp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yp[i.combine]||"ENVMAP_BLENDING_NONE"}function Zp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $p(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Vp(t),l=Wp(t),f=qp(t),d=Kp(t),u=Zp(t),p=Ip(t),x=Up(s),y=r.createProgram();let m,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Oi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Oi).join(`
`),h.length>0&&(h+=`
`)):(m=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),h=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Ne.tonemapping_pars_fragment:"",t.toneMapping!==an?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Cp("linearToOutputTexel",t.outputColorSpace),Dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),a=_a(a),a=Qo(a,t),a=jo(a,t),o=_a(o),o=Qo(o,t),o=jo(o,t),a=el(a),o=el(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===so?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===so?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=S+m+a,M=S+h+o,T=Zo(r,r.VERTEX_SHADER,w),b=Zo(r,r.FRAGMENT_SHADER,M);r.attachShader(y,T),r.attachShader(y,b),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function L(I){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(T)||"",D=r.getShaderInfoLog(b)||"",k=F.trim(),Z=V.trim(),C=D.trim();let z=!0,N=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,T,b);else{const P=Jo(r,T,"vertex"),q=Jo(r,b,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+P+`
`+q)}else k!==""?Ce("WebGLProgram: Program Info Log:",k):(Z===""||C==="")&&(N=!1);N&&(I.diagnostics={runnable:z,programLog:k,vertexShader:{log:Z,prefix:m},fragmentShader:{log:C,prefix:h}})}r.deleteShader(T),r.deleteShader(b),_=new Rr(r,y),E=Np(r,y)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(y,Tp)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ap++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=b,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function em(i){return i===Vn||i===Cr||i===Pr}function tm(i,e,t,n,r,s){const a=new bl,o=new Qp,c=new Set,l=[],f=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,E,R,I,F,V){const D=I.fog,k=F.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||Z,C),N=z&&z.mapping===Br?z.image.height:null,P=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=q!==void 0?q.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let Qe,ze,ke,$;if(P){const rt=nn[P];Qe=rt.vertexShader,ze=rt.fragmentShader}else{Qe=_.vertexShader,ze=_.fragmentShader;const rt=o.getVertexShaderStage(_),Ke=o.getFragmentShaderStage(_);o.update(_,rt,Ke),ke=rt.id,$=Ke.id}const te=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Pe=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Fe=!!_.map,mt=!!_.matcap,Oe=!!z,qe=!!_.aoMap,it=!!_.lightMap,Ge=!!_.bumpMap&&_.wireframe===!1,ot=!!_.normalMap,vt=!!_.displacementMap,Dt=!!_.emissiveMap,lt=!!_.metalnessMap,ht=!!_.roughnessMap,B=_.anisotropy>0,bt=_.clearcoat>0,$e=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,H=_.sheen>0,Y=_.transmission>0,J=B&&!!_.anisotropyMap,ie=bt&&!!_.clearcoatMap,se=bt&&!!_.clearcoatNormalMap,Q=bt&&!!_.clearcoatRoughnessMap,ee=g&&!!_.iridescenceMap,ae=g&&!!_.iridescenceThicknessMap,be=H&&!!_.sheenColorMap,ue=H&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Te=!!_.specularColorMap,we=!!_.specularIntensityMap,De=Y&&!!_.transmissionMap,O=Y&&!!_.thicknessMap,le=!!_.gradientMap,j=!!_.alphaMap,ce=_.alphaTest>0,pe=!!_.alphaHash,ne=!!_.extensions;let Ae=an;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Ee={shaderID:P,shaderType:_.type,shaderName:_.name,vertexShader:Qe,fragmentShader:ze,defines:_.defines,customVertexShaderID:ke,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&F.instanceColor!==null,instancingMorph:Pe&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:mt,envMap:Oe,envMapMode:Oe&&z.mapping,envMapCubeUVHeight:N,aoMap:qe,lightMap:it,bumpMap:Ge,normalMap:ot,displacementMap:vt,emissiveMap:Dt,normalMapObjectSpace:ot&&_.normalMapType===wc,normalMapTangentSpace:ot&&_.normalMapType===da,packedNormalMap:ot&&_.normalMapType===da&&em(_.normalMap.format),metalnessMap:lt,roughnessMap:ht,anisotropy:B,anisotropyMap:J,clearcoat:bt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:Q,dispersion:$e,retroreflection:A,iridescence:g,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:H,sheenColorMap:be,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:Te,specularIntensityMap:we,transmission:Y,transmissionMap:De,thicknessMap:O,gradientMap:le,opaque:_.transparent===!1&&_.blending===zi&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:pe,combine:_.combine,mapUv:Fe&&x(_.map.channel),aoMapUv:qe&&x(_.aoMap.channel),lightMapUv:it&&x(_.lightMap.channel),bumpMapUv:Ge&&x(_.bumpMap.channel),normalMapUv:ot&&x(_.normalMap.channel),displacementMapUv:vt&&x(_.displacementMap.channel),emissiveMapUv:Dt&&x(_.emissiveMap.channel),metalnessMapUv:lt&&x(_.metalnessMap.channel),roughnessMapUv:ht&&x(_.roughnessMap.channel),anisotropyMapUv:J&&x(_.anisotropyMap.channel),clearcoatMapUv:ie&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&x(_.sheenRoughnessMap.channel),specularMapUv:oe&&x(_.specularMap.channel),specularColorMapUv:Te&&x(_.specularColorMap.channel),specularIntensityMapUv:we&&x(_.specularIntensityMap.channel),transmissionMapUv:De&&x(_.transmissionMap.channel),thicknessMapUv:O&&x(_.thicknessMap.channel),alphaMapUv:j&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ot||B),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Fe||j),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&He.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&He.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vt,flipSided:_.side===It,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(h(E,_),S(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function h(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const E=p[_.type];let R;if(E){const I=nn[E];R=pu.clone(I.uniforms)}else R=_.uniforms;return R}function M(_,E){let R=f.get(E);return R!==void 0?++R.usedTimes:(R=new $p(i,E,_,r),l.push(R),f.set(E,R)),R}function T(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),f.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function L(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:L}}function nm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function il(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,y,m,h){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:h},i[e]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=x,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=h),e++,S}function c(u,p,x,y,m,h,S){S.reversedDepth===!0&&(m=-m);const w=o(u,p,x,y,m,h);x.transmission>0?n.push(w):x.transparent===!0?r.push(w):t.push(w)}function l(u,p,x,y,m,h){const S=o(u,p,x,y,m,h);x.transmission>0?n.unshift(S):x.transparent===!0?r.unshift(S):t.unshift(S)}function f(u,p){t.length>1&&t.sort(u||im),n.length>1&&n.sort(p||nl),r.length>1&&r.sort(p||nl)}function d(){for(let u=e,p=i.length;u<p;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:f}}function rm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new il,i.set(n,[a])):r>=s.length?(a=new il,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ie};break;case"SpotLight":t={position:new G,direction:new G,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let om=0;function lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cm(i){const e=new sm,t=am(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const r=new G,s=new tt,a=new tt;function o(l){let f=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,x=0,y=0,m=0,h=0,S=0,w=0,M=0,T=0,b=0,L=0,_=0,E=0,R=0;l.sort(lm);for(let F=0,V=l.length;F<V;F++){const D=l[F],k=D.color,Z=D.intensity,C=D.distance;let z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vn?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=k.r*Z,d+=k.g*Z,u+=k.b*Z;else if(D.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(D.sh.coefficients[N],Z);R++}else if(D.isSunLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const P=D.shadow,q=t.get(D);q.shadowIntensity=P.intensity,q.shadowBias=P.bias,q.shadowNormalBias=P.normalBias,q.shadowRadius=P.radius,q.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[x]=q,n.sunShadowMap[x]=z;const re=P.getViewportCount();for(let ge=0;ge<re;ge++)n.sunShadowMatrix[y+ge]=P.getMatrix(ge),n.sunShadowCascade[y+ge]=P._cascadeData[ge];y+=re,x++}n.sun[p]=N,p++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const P=D.shadow,q=t.get(D);q.shadowIntensity=P.intensity,q.shadowBias=P.bias,q.shadowNormalBias=P.normalBias,q.shadowRadius=P.radius,q.shadowMapSize=P.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=D.shadow.matrix,T++}n.directional[m]=N,m++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(k).multiplyScalar(Z),N.distance=C,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,n.spot[S]=N;const P=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,P.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[S]=P.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=P.intensity,q.shadowBias=P.bias,q.shadowNormalBias=P.normalBias,q.shadowRadius=P.radius,q.shadowMapSize=P.mapSize,n.spotShadow[S]=q,n.spotShadowMap[S]=z,L++}S++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(k).multiplyScalar(Z),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=N,w++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const P=D.shadow,q=t.get(D);q.shadowIntensity=P.intensity,q.shadowBias=P.bias,q.shadowNormalBias=P.normalBias,q.shadowRadius=P.radius,q.shadowMapSize=P.mapSize,q.shadowCameraNear=P.camera.near,q.shadowCameraFar=P.camera.far,n.pointShadow[h]=q,n.pointShadowMap[h]=z,n.pointShadowMatrix[h]=D.shadow.matrix,b++}n.point[h]=N,h++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(Z),N.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[M]=N,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==h||I.spotLength!==S||I.rectAreaLength!==w||I.hemiLength!==M||I.numSunShadows!==x||I.numDirectionalShadows!==T||I.numPointShadows!==b||I.numSpotShadows!==L||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=h,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=p,I.directionalLength=m,I.pointLength=h,I.spotLength=S,I.rectAreaLength=w,I.hemiLength=M,I.numSunShadows=x,I.numDirectionalShadows=T,I.numPointShadows=b,I.numSpotShadows=L,I.numSpotMaps=_,I.numLightProbes=R,n.version=om++)}function c(l,f){let d=0,u=0,p=0,x=0,y=0,m=0;const h=f.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){const M=l[S];if(M.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),d++}else if(M.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),u++}else if(M.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),x++}else if(M.isRectAreaLight){const T=n.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),a.identity(),s.copy(M.matrixWorld),s.premultiply(h),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),p++}else if(M.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:o,setupView:c,state:n}}function rl(i){const e=new cm(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function um(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new rl(i),e.set(r,[o])):s>=a.length?(o=new rl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
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
}`,dm=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],pm=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],sl=new tt,Ui=new G,ws=new G;function mm(i,e,t){let n=new Da;const r=new Re,s=new Re,a=new ct,o=new xu,c=new vu,l={},f=t.maxTextureSize,d={[Gn]:It,[It]:Gn,[Vt]:Vt},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:hm,fragmentShader:fm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new pt;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new St(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bi;let h=this.type;this.render=function(b,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===rc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bi);const E=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_n),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=h!==this.type;V&&L.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=b.length;D<k;D++){const Z=b[D],C=Z.shadow;if(C===void 0){Ce("WebGLShadowMap:",Z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const z=C.getFrameExtents();r.multiply(z),s.copy(C.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,C.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,C.mapSize.y=s.y));const N=i.state.buffers.depth.getReversed();if(C.camera._reversedDepth=N,C.map===null||V===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===Fi){if(Z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new $t(r.x,r.y,{format:Vn,type:ln,minFilter:yt,magFilter:yt,generateMipmaps:!1}),C.map.texture.name=Z.name+".shadowMap",C.map.depthTexture=new Xi(r.x,r.y,Kt),C.map.depthTexture.name=Z.name+".shadowMapDepth",C.map.depthTexture.format=Mn,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=Et,C.map.depthTexture.magFilter=Et}else Z.isPointLight?(C.map=new Gl(r.x),C.map.depthTexture=new fu(r.x,on)):(C.map=new $t(r.x,r.y),C.map.depthTexture=new Xi(r.x,r.y,on)),C.map.depthTexture.name=Z.name+".shadowMap",C.map.depthTexture.format=Mn,this.type===Bi?(C.map.depthTexture.compareFunction=N?Ca:Ra,C.map.depthTexture.minFilter=yt,C.map.depthTexture.magFilter=yt):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=Et,C.map.depthTexture.magFilter=Et);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==r.x||C.map.height!==r.y)&&C.map.setSize(r.x,r.y);const P=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();Z.isPointLight!==!0&&C.updateMatrices(Z,_);for(let q=0;q<P;q++){const re=C.getCamera(q);if(Z.isPointLight){const ge=C.camera,Qe=C.matrix,ze=Z.distance||ge.far;ze!==ge.far&&(ge.far=ze,ge.updateProjectionMatrix()),Ui.setFromMatrixPosition(Z.matrixWorld),ge.position.copy(Ui),ws.copy(ge.position),ws.add(dm[q]),ge.up.copy(pm[q]),ge.lookAt(ws),ge.updateMatrixWorld(),Qe.makeTranslation(-Ui.x,-Ui.y,-Ui.z),sl.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),C._frustum.setFromProjectionMatrix(sl,ge.coordinateSystem,ge.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)i.setRenderTarget(C.map,q),i.clear();else{q===0&&(i.setRenderTarget(C.map),i.clear());const ge=C.getViewport(q);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),F.viewport(a)}n=C.getFrustum(q),M(L,_,re,Z,this.type)}C.isPointLightShadow!==!0&&this.type===Fi&&S(C,_),C.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,I)};function S(b,L){const _=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new $t(r.x,r.y,{format:Vn,type:ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,_,u,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,_,p,y,null)}function w(b,L,_,E){let R=null;const I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const F=R.uuid,V=L.uuid;let D=l[F];D===void 0&&(D={},l[F]=D);let k=D[V];k===void 0&&(k=R.clone(),D[V]=k,L.addEventListener("dispose",T)),R=k}if(R.visible=L.visible,R.wireframe=L.wireframe,E===Fi?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:d[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=i.properties.get(R);F.light=_}return R}function M(b,L,_,E,R){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Fi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const V=e.update(b),D=b.material;if(Array.isArray(D)){const k=V.groups;for(let Z=0,C=k.length;Z<C;Z++){const z=k[Z],N=D[z.materialIndex];if(N&&N.visible){const P=w(b,N,E,R);b.onBeforeShadow(i,b,L,_,V,P,z),i.renderBufferDirect(_,null,V,P,b,z),b.onAfterShadow(i,b,L,_,V,P,z)}}}else if(D.visible){const k=w(b,D,E,R);b.onBeforeShadow(i,b,L,_,V,k,null),i.renderBufferDirect(_,null,V,k,b,null),b.onAfterShadow(i,b,L,_,V,k,null)}}const F=b.children;for(let V=0,D=F.length;V<D;V++)M(F[V],L,_,E,R)}function T(b){b.target.removeEventListener("dispose",T);for(const _ in l){const E=l[_],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function gm(i,e){function t(){let O=!1;const le=new ct;let j=null;const ce=new ct(0,0,0,0);return{setMask:function(pe){j!==pe&&!O&&(i.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){O=pe},setClear:function(pe,ne,Ae,Ee,rt){rt===!0&&(pe*=Ee,ne*=Ee,Ae*=Ee),le.set(pe,ne,Ae,Ee),ce.equals(le)===!1&&(i.clearColor(pe,ne,Ae,Ee),ce.copy(le))},reset:function(){O=!1,j=null,ce.set(-1,0,0,0)}}}function n(){let O=!1,le=!1,j=null,ce=null,pe=null;return{setReversed:function(ne){if(le!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const Ee=pe;pe=null,this.setClear(Ee)}},getReversed:function(){return le},setTest:function(ne){ne?te(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(ne){j!==ne&&!O&&(i.depthMask(ne),j=ne)},setFunc:function(ne){if(le&&(ne=Bc[ne]),ce!==ne){switch(ne){case Rs:i.depthFunc(i.NEVER);break;case Cs:i.depthFunc(i.ALWAYS);break;case Ps:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Ls:i.depthFunc(i.EQUAL);break;case Ds:i.depthFunc(i.GEQUAL);break;case Is:i.depthFunc(i.GREATER);break;case Us:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ne}},setLocked:function(ne){O=ne},setClear:function(ne){pe!==ne&&(pe=ne,le&&(ne=1-ne),i.clearDepth(ne))},reset:function(){O=!1,j=null,ce=null,pe=null,le=!1}}}function r(){let O=!1,le=null,j=null,ce=null,pe=null,ne=null,Ae=null,Ee=null,rt=null;return{setTest:function(Ke){O||(Ke?te(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!O&&(i.stencilMask(Ke),le=Ke)},setFunc:function(Ke,Wt,Qt){(j!==Ke||ce!==Wt||pe!==Qt)&&(i.stencilFunc(Ke,Wt,Qt),j=Ke,ce=Wt,pe=Qt)},setOp:function(Ke,Wt,Qt){(ne!==Ke||Ae!==Wt||Ee!==Qt)&&(i.stencilOp(Ke,Wt,Qt),ne=Ke,Ae=Wt,Ee=Qt)},setLocked:function(Ke){O=Ke},setClear:function(Ke){rt!==Ke&&(i.clearStencil(Ke),rt=Ke)},reset:function(){O=!1,le=null,j=null,ce=null,pe=null,ne=null,Ae=null,Ee=null,rt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},d={},u={},p=new WeakMap,x=[],y=null,m=!1,h=null,S=null,w=null,M=null,T=null,b=null,L=null,_=new Ie(0,0,0),E=0,R=!1,I=null,F=null,V=null,D=null,k=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,z=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),C=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),C=z>=2);let P=null,q={};const re=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Qe=new ct().fromArray(re),ze=new ct().fromArray(ge);function ke(O,le,j,ce){const pe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(O,ne),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<j;Ae++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(le+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ne}const $={};$[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Gi),Ge(!1),ot(to),te(i.CULL_FACE),qe(_n);function te(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function ve(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function Pe(O,le){return u[O]!==le?(i.bindFramebuffer(O,le),u[O]=le,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(O,le){let j=x,ce=!1;if(O){j=p.get(le),j===void 0&&(j=[],p.set(le,j));const pe=O.textures;if(j.length!==pe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ae=pe.length;ne<Ae;ne++)j[ne]=i.COLOR_ATTACHMENT0+ne;j.length=pe.length,ce=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ce=!0);ce&&i.drawBuffers(j)}function Fe(O){return y!==O?(i.useProgram(O),y=O,!0):!1}const mt={[pi]:i.FUNC_ADD,[ac]:i.FUNC_SUBTRACT,[oc]:i.FUNC_REVERSE_SUBTRACT};mt[lc]=i.MIN,mt[cc]=i.MAX;const Oe={[uc]:i.ZERO,[hc]:i.ONE,[fc]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[xc]:i.SRC_ALPHA_SATURATE,[gc]:i.DST_COLOR,[pc]:i.DST_ALPHA,[dc]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[_c]:i.ONE_MINUS_DST_COLOR,[mc]:i.ONE_MINUS_DST_ALPHA,[vc]:i.CONSTANT_COLOR,[Mc]:i.ONE_MINUS_CONSTANT_COLOR,[Sc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(O,le,j,ce,pe,ne,Ae,Ee,rt,Ke){if(O===_n){m===!0&&(ve(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),O!==sc){if(O!==h||Ke!==R){if((S!==pi||T!==pi)&&(i.blendEquation(i.FUNC_ADD),S=pi,T=pi),Ke)switch(O){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",O);break}else switch(O){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case io:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ro:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",O);break}w=null,M=null,b=null,L=null,_.set(0,0,0),E=0,h=O,R=Ke}return}pe=pe||le,ne=ne||j,Ae=Ae||ce,(le!==S||pe!==T)&&(i.blendEquationSeparate(mt[le],mt[pe]),S=le,T=pe),(j!==w||ce!==M||ne!==b||Ae!==L)&&(i.blendFuncSeparate(Oe[j],Oe[ce],Oe[ne],Oe[Ae]),w=j,M=ce,b=ne,L=Ae),(Ee.equals(_)===!1||rt!==E)&&(i.blendColor(Ee.r,Ee.g,Ee.b,rt),_.copy(Ee),E=rt),h=O,R=!1}function it(O,le){O.side===Vt?ve(i.CULL_FACE):te(i.CULL_FACE);let j=O.side===It;le&&(j=!j),Ge(j),O.blending===zi&&O.transparent===!1?qe(_n):qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const ce=O.stencilWrite;o.setTest(ce),ce&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function ot(O){O!==nc?(te(i.CULL_FACE),O!==F&&(O===to?i.cullFace(i.BACK):O===ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),F=O}function vt(O){O!==V&&(C&&i.lineWidth(O),V=O)}function Dt(O,le,j){O?(te(i.POLYGON_OFFSET_FILL),(D!==le||k!==j)&&(D=le,k=j,a.getReversed()&&(le=-le),i.polygonOffset(le,j))):ve(i.POLYGON_OFFSET_FILL)}function lt(O){O?te(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ht(O){O===void 0&&(O=i.TEXTURE0+Z-1),P!==O&&(i.activeTexture(O),P=O)}function B(O,le,j){j===void 0&&(P===null?j=i.TEXTURE0+Z-1:j=P);let ce=q[j];ce===void 0&&(ce={type:void 0,texture:void 0},q[j]=ce),(ce.type!==O||ce.texture!==le)&&(P!==j&&(i.activeTexture(j),P=j),i.bindTexture(O,le||$[O]),ce.type=O,ce.texture=le)}function bt(){const O=q[P];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function g(){try{i.texSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ie(){try{i.texStorage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function se(){try{i.texStorage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function Q(){try{i.texImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ee(){try{i.texImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ae(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function be(O,le){d[O]!==le&&(i.pixelStorei(O,le),d[O]=le)}function ue(O){Qe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Qe.copy(O))}function oe(O){ze.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ze.copy(O))}function Te(O,le){let j=l.get(le);j===void 0&&(j=new WeakMap,l.set(le,j));let ce=j.get(O);ce===void 0&&(ce=i.getUniformBlockIndex(le,O.name),j.set(O,ce))}function we(O,le){const ce=l.get(le).get(O);c.get(le)!==ce&&(i.uniformBlockBinding(le,ce,O.__bindingPointIndex),c.set(le,ce))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},P=null,q={},u={},p=new WeakMap,x=[],y=null,m=!1,h=null,S=null,w=null,M=null,T=null,b=null,L=null,_=new Ie(0,0,0),E=0,R=!1,I=null,F=null,V=null,D=null,k=null,Qe.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:ve,bindFramebuffer:Pe,drawBuffers:_e,useProgram:Fe,setBlending:qe,setMaterial:it,setFlipSided:Ge,setCullFace:ot,setLineWidth:vt,setPolygonOffset:Dt,setScissorTest:lt,activeTexture:ht,bindTexture:B,unbindTexture:bt,compressedTexImage2D:$e,compressedTexImage3D:A,texImage2D:Q,texImage3D:ee,pixelStorei:be,getParameter:ae,updateUBOMapping:Te,uniformBlockBinding:we,texStorage2D:ie,texStorage3D:se,texSubImage2D:g,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:ue,viewport:oe,reset:De}}function _m(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,f=new WeakMap,d=new Set;let u;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,g){return x?new OffscreenCanvas(A,g):Wi("canvas")}function m(A,g,H){let Y=1;const J=$e(A);if((J.width>H||J.height>H)&&(Y=H/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(Y*J.width),se=Math.floor(Y*J.height);u===void 0&&(u=y(ie,se));const Q=g?y(ie,se):u;return Q.width=ie,Q.height=se,Q.getContext("2d").drawImage(A,0,0,ie,se),Ce("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ie+"x"+se+")."),Q}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function h(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,g,H,Y,J,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se;Y&&(se=e.get("EXT_texture_norm16"),se||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8),H===i.UNSIGNED_SHORT&&se&&(Q=se.R16_EXT),H===i.SHORT&&se&&(Q=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),g===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8),H===i.UNSIGNED_SHORT&&se&&(Q=se.RG16_EXT),H===i.SHORT&&se&&(Q=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&(H===i.UNSIGNED_SHORT&&se&&(Q=se.RGB16_EXT),H===i.SHORT&&se&&(Q=se.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),g===i.RGBA){const ee=ie?Dr:He.getTransfer(J);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=ee===Je?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&se&&(Q=se.RGBA16_EXT),H===i.SHORT&&se&&(Q=se.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function T(A,g){let H;return A?g===null||g===on||g===Vi?H=i.DEPTH24_STENCIL8:g===Kt?H=i.DEPTH32F_STENCIL8:g===Hi&&(H=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===on||g===Vi?H=i.DEPTH_COMPONENT24:g===Kt?H=i.DEPTH_COMPONENT32F:g===Hi&&(H=i.DEPTH_COMPONENT16),H}function b(A,g){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Et&&A.minFilter!==yt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function L(A){const g=A.target;g.removeEventListener("dispose",L),E(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&d.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),I(g)}function E(A){const g=n.get(A);if(g.__webglInit===void 0)return;const H=A.source,Y=p.get(H);if(Y){const J=Y[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(Y).length===0&&p.delete(H)}n.remove(A)}function R(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const H=A.source,Y=p.get(H);delete Y[g.__cacheKey],a.memory.textures--}function I(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let J=0;J<g.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const H=A.textures;for(let Y=0,J=H.length;Y<J;Y++){const ie=n.get(H[Y]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(H[Y])}n.remove(A)}let F=0;function V(){F=0}function D(){return F}function k(A){F=A}function Z(){const A=F;return A>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function C(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function z(A,g){const H=n.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const Y=A.image;if(Y===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,A,g);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+g)}function N(A,g){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ve(H,A,g);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+g)}function P(A,g){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ve(H,A,g);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+g)}function q(A,g){const H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Pe(H,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+g)}const re={[Ns]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},ge={[Et]:i.NEAREST,[Tc]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Qe={[Cc]:i.NEVER,[Uc]:i.ALWAYS,[Pc]:i.LESS,[Ra]:i.LEQUAL,[Lc]:i.EQUAL,[Ca]:i.GEQUAL,[Dc]:i.GREATER,[Ic]:i.NOTEQUAL};function ze(A,g){if(g.type===Kt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===yt||g.magFilter===Kr||g.magFilter===Zi||g.magFilter===Bn||g.minFilter===yt||g.minFilter===Kr||g.minFilter===Zi||g.minFilter===Bn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,re[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ge[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Qe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Et||g.minFilter!==Zi&&g.minFilter!==Bn||g.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ke(A,g){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",L));const Y=g.source;let J=p.get(Y);J===void 0&&(J={},p.set(Y,J));const ie=C(g);if(ie!==A.__cacheKey){J[ie]===void 0&&(J[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[ie].usedTimes++;const se=J[A.__cacheKey];se!==void 0&&(J[A.__cacheKey].usedTimes--,se.usedTimes===0&&R(g)),A.__cacheKey=ie,A.__webglTexture=J[ie].texture}return H}function $(A,g,H){return Math.floor(Math.floor(A/H)/g)}function te(A,g,H,Y){const ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,H,Y,g.data);else{ie.sort((be,ue)=>be.start-ue.start);let se=0;for(let be=1;be<ie.length;be++){const ue=ie[se],oe=ie[be],Te=ue.start+ue.count,we=$(oe.start,g.width,4),De=$(ue.start,g.width,4);oe.start<=Te+1&&we===De&&$(oe.start+oe.count-1,g.width,4)===we?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,ie[se]=oe)}ie.length=se+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let be=0,ue=ie.length;be<ue;be++){const oe=ie[be],Te=Math.floor(oe.start/4),we=Math.ceil(oe.count/4),De=Te%g.width,O=Math.floor(Te/g.width),le=we,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,De,O,le,j,H,Y,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ve(A,g,H){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const J=ke(A,g),ie=g.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+H);const se=n.get(ie);if(ie.version!==se.__version||J===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const j=He.getPrimaries(He.workingColorSpace),ce=g.colorSpace===Pn?null:He.getPrimaries(g.colorSpace),pe=g.colorSpace===Pn||j===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ee=m(g.image,!1,r.maxTextureSize);ee=bt(g,ee);const ae=s.convert(g.format,g.colorSpace),be=s.convert(g.type);let ue=M(g.internalFormat,ae,be,g.normalized,g.colorSpace,g.isVideoTexture);ze(Y,g);let oe;const Te=g.mipmaps,we=g.isVideoTexture!==!0,De=se.__version===void 0||J===!0,O=ie.dataReady,le=b(g,ee);if(g.isDepthTexture)ue=T(g.format===zn,g.type),De&&(we?t.texStorage2D(i.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,ae,be,null));else if(g.isDataTexture)if(Te.length>0){we&&De&&t.texStorage2D(i.TEXTURE_2D,le,ue,Te[0].width,Te[0].height);for(let j=0,ce=Te.length;j<ce;j++)oe=Te[j],we?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(i.TEXTURE_2D,j,ue,oe.width,oe.height,0,ae,be,oe.data);g.generateMipmaps=!1}else we?(De&&t.texStorage2D(i.TEXTURE_2D,le,ue,ee.width,ee.height),O&&te(g,ee,ae,be)):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,ae,be,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){we&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,Te[0].width,Te[0].height,ee.depth);for(let j=0,ce=Te.length;j<ce;j++)if(oe=Te[j],g.format!==Zt)if(ae!==null)if(we){if(O)if(g.layerUpdates.size>0){const pe=Oo(oe.width,oe.height,g.format,g.type);for(const ne of g.layerUpdates){const Ae=oe.data.subarray(ne*pe/oe.data.BYTES_PER_ELEMENT,(ne+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ne,oe.width,oe.height,1,ae,Ae)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ue,oe.width,oe.height,ee.depth,0,oe.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ae,be,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ue,oe.width,oe.height,ee.depth,0,ae,be,oe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{we&&De&&t.texStorage2D(i.TEXTURE_2D,le,ue,Te[0].width,Te[0].height);for(let j=0,ce=Te.length;j<ce;j++)oe=Te[j],g.format!==Zt?ae!==null?we?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ue,oe.width,oe.height,0,oe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(i.TEXTURE_2D,j,ue,oe.width,oe.height,0,ae,be,oe.data)}else if(g.isDataArrayTexture)if(we){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,ee.width,ee.height,ee.depth),O)if(g.layerUpdates.size>0){const j=Oo(ee.width,ee.height,g.format,g.type);for(const ce of g.layerUpdates){const pe=ee.data.subarray(ce*j/ee.data.BYTES_PER_ELEMENT,(ce+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,ee.width,ee.height,1,ae,be,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,be,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,ae,be,ee.data);else if(g.isData3DTexture)we?(De&&t.texStorage3D(i.TEXTURE_3D,le,ue,ee.width,ee.height,ee.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,be,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,ae,be,ee.data);else if(g.isFramebufferTexture){if(De)if(we)t.texStorage2D(i.TEXTURE_2D,le,ue,ee.width,ee.height);else{let j=ee.width,ce=ee.height;for(let pe=0;pe<le;pe++)t.texImage2D(i.TEXTURE_2D,pe,ue,j,ce,0,ae,be,null),j>>=1,ce>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),d.add(g),j.onpaint=ce=>{const pe=ce.changedElements;for(const ne of d)pe.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{const pe=i.RGBA,ne=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ne,Ae,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(we&&De){const j=$e(Te[0]);t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height)}for(let j=0,ce=Te.length;j<ce;j++)oe=Te[j],we?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ae,be,oe):t.texImage2D(i.TEXTURE_2D,j,ue,ae,be,oe);g.generateMipmaps=!1}else if(we){if(De){const j=$e(ee);t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,be,ee)}else t.texImage2D(i.TEXTURE_2D,0,ue,ae,be,ee);h(g)&&S(Y),se.__version=ie.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Pe(A,g,H){if(g.image.length!==6)return;const Y=ke(A,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const ie=n.get(J);if(J.version!==ie.__version||Y===!0){t.activeTexture(i.TEXTURE0+H);const se=He.getPrimaries(He.workingColorSpace),Q=g.colorSpace===Pn?null:He.getPrimaries(g.colorSpace),ee=g.colorSpace===Pn||se===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ae=g.isCompressedTexture||g.image[0].isCompressedTexture,be=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!ae&&!be?ue[ne]=m(g.image[ne],!0,r.maxCubemapSize):ue[ne]=be?g.image[ne].image:g.image[ne],ue[ne]=bt(g,ue[ne]);const oe=ue[0],Te=s.convert(g.format,g.colorSpace),we=s.convert(g.type),De=M(g.internalFormat,Te,we,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,le=ie.__version===void 0||Y===!0,j=J.dataReady;let ce=b(g,oe);ze(i.TEXTURE_CUBE_MAP,g);let pe;if(ae){O&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,De,oe.width,oe.height);for(let ne=0;ne<6;ne++){pe=ue[ne].mipmaps;for(let Ae=0;Ae<pe.length;Ae++){const Ee=pe[Ae];g.format!==Zt?Te!==null?O?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,De,Ee.width,Ee.height,0,Ee.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,Ee.width,Ee.height,Te,we,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,De,Ee.width,Ee.height,0,Te,we,Ee.data)}}}else{if(pe=g.mipmaps,O&&le){pe.length>0&&ce++;const ne=$e(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,De,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(be){O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Te,we,ue[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,ue[ne].width,ue[ne].height,0,Te,we,ue[ne].data);for(let Ae=0;Ae<pe.length;Ae++){const rt=pe[Ae].image[ne].image;O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,rt.width,rt.height,Te,we,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,De,rt.width,rt.height,0,Te,we,rt.data)}}else{O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,we,ue[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,Te,we,ue[ne]);for(let Ae=0;Ae<pe.length;Ae++){const Ee=pe[Ae];O?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Te,we,Ee.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,De,Te,we,Ee.image[ne])}}}h(g)&&S(i.TEXTURE_CUBE_MAP),ie.__version=J.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function _e(A,g,H,Y,J,ie){const se=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),ee=M(H.internalFormat,se,Q,H.normalized,H.colorSpace),ae=n.get(g),be=n.get(H);if(be.__renderTarget=g,!ae.__hasExternalTextures){const ue=Math.max(1,g.width>>ie),oe=Math.max(1,g.height>>ie);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ie,ee,ue,oe,g.depth,0,se,Q,null):t.texImage2D(J,ie,ee,ue,oe,0,se,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ht(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,be.__webglTexture,0,lt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,be.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,g,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const Y=g.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,ie=T(g.stencilBuffer,J),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(g),ie,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,A)}else{const Y=g.textures;for(let J=0;J<Y.length;J++){const ie=Y[J],se=s.convert(ie.format,ie.colorSpace),Q=s.convert(ie.type),ee=M(ie.internalFormat,se,Q,ie.normalized,ie.colorSpace);ht(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(g),ee,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(g),ee,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,g,H){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g.depthTexture);const ae=s.convert(g.depthTexture.format),be=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===Mn?ue=i.DEPTH_COMPONENT24:g.depthTexture.format===zn&&(ue=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,g.width,g.height,0,ae,be,null)}}else z(g.depthTexture,0);const ie=J.__webglTexture,se=lt(g),Q=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=g.depthTexture.format===zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Mn)ht(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Q,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Q,ie,0);else if(g.depthTexture.format===zn)ht(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Q,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Q,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(A){const g=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=Y}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)mt(g.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?mt(g.__webglFramebuffer[0],A,0):mt(g.__webglFramebuffer,A,0)}else if(H){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(g.__webglDepthbuffer[Y],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Fe(g.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(A,g,H){const Y=n.get(A);g!==void 0&&_e(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Oe(A)}function it(A){const g=A.texture,H=n.get(A),Y=n.get(g);A.addEventListener("dispose",_);const J=A.textures,ie=A.isWebGLCubeRenderTarget===!0,se=J.length>1;if(se||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,a.memory.textures++),ie){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let ee=0;ee<g.mipmaps.length;ee++)H.__webglFramebuffer[Q][ee]=i.createFramebuffer()}else H.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)H.__webglFramebuffer[Q]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(se)for(let Q=0,ee=J.length;Q<ee;Q++){const ae=n.get(J[Q]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ht(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const ee=J[Q];H.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const ae=s.convert(ee.format,ee.colorSpace),be=s.convert(ee.type),ue=M(ee.internalFormat,ae,be,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),oe=lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)_e(H.__webglFramebuffer[Q][ee],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else _e(H.__webglFramebuffer[Q],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);h(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Q=0,ee=J.length;Q<ee;Q++){const ae=J[Q],be=n.get(ae);let ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,be.__webglTexture),ze(ue,ae),_e(H.__webglFramebuffer,A,ae,i.COLOR_ATTACHMENT0+Q,ue,0),h(ae)&&S(ue)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,Y.__webglTexture),ze(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)_e(H.__webglFramebuffer[ee],A,g,i.COLOR_ATTACHMENT0,Q,ee);else _e(H.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,Q,0);h(g)&&S(Q),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Ge(A){const g=A.textures;for(let H=0,Y=g.length;H<Y;H++){const J=g[H];if(h(J)){const ie=w(A),se=n.get(J).__webglTexture;t.bindTexture(ie,se),S(ie),t.unbindTexture()}}}const ot=[],vt=[];function Dt(A){if(A.samples>0){if(ht(A)===!1){const g=A.textures,H=A.width,Y=A.height;let J=i.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(A),Q=g.length>1;if(Q)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const be=n.get(g[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,H,Y,0,0,H,Y,J,i.NEAREST),c===!0&&(ot.length=0,vt.length=0,ot.push(i.COLOR_ATTACHMENT0+ae),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ot.push(ie),vt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const be=n.get(g[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function lt(A){return Math.min(r.maxSamples,A.samples)}function ht(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function B(A){const g=a.render.frame;f.get(A)!==g&&(f.set(A,g),A.update())}function bt(A,g){const H=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Lr&&H!==Pn&&(He.getTransfer(H)===Je?(Y!==Zt||J!==Bt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",H)),g}function $e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=P,this.setTextureCube=q,this.rebindTextures=qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xm(i,e){function t(n,r=Pn){let s;const a=He.getTransfer(r);if(n===Bt)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ml)return i.BYTE;if(n===gl)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===on)return i.UNSIGNED_INT;if(n===Kt)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===Zt)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===zn)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===Ta)return i.RED_INTEGER;if(n===Vn)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===wa)return i.RGBA_INTEGER;if(n===br||n===Tr||n===Ar||n===wr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Os||n===Bs||n===zs||n===Gs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hs||n===Vs||n===ks||n===Ws||n===Xs||n===Cr||n===qs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hs||n===Vs)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ks)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ws)return s.COMPRESSED_R11_EAC;if(n===Xs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return s.COMPRESSED_RG11_EAC;if(n===qs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ys||n===Ks||n===Zs||n===$s||n===Js||n===Qs||n===js||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ys)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ks)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$s)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Js)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===js)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===la||n===ca)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===ha||n===Pr||n===fa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mm=`
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

}`;class Sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new un({vertexShader:vm,fragmentShader:Mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Em extends kn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,d=null,u=null,p=null,x=null;const y=typeof XRWebGLBinding<"u",m=new Sm,h={},S=t.getContextAttributes();let w=null,M=null;const T=[],b=[],L=new Re;let _=null,E=null;const R=new Ht;R.viewport=new ct;const I=new Ht;I.viewport=new ct;const F=[R,I],V=new Cu;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=T[$];return te===void 0&&(te=new is,T[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=T[$];return te===void 0&&(te=new is,T[$]=te),te.getGripSpace()},this.getHand=function($){let te=T[$];return te===void 0&&(te=new is,T[$]=te),te.getHandSpace()};function Z($){const te=b.indexOf($.inputSource);if(te===-1)return;const ve=T[te];ve!==void 0&&(ve.update($.inputSource,$.frame,l||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function C(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",z);for(let $=0;$<T.length;$++){const te=b[$];te!==null&&(b[$]=null,T[$].disconnect(te))}D=null,k=null,m.reset();for(const $ in h)delete h[$];if(e.setRenderTarget(w),p=null,u=null,d=null,r=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),E!==null){const $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",C),r.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?zn:Mn,Pe=S.stencil?Vi:on);const Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new $t(u.textureWidth,u.textureHeight,{format:Zt,type:Bt,depthTexture:new Xi(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new $t(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z($){for(let te=0;te<$.removed.length;te++){const ve=$.removed[te],Pe=b.indexOf(ve);Pe>=0&&(b[Pe]=null,T[Pe].disconnect(ve))}for(let te=0;te<$.added.length;te++){const ve=$.added[te];let Pe=b.indexOf(ve);if(Pe===-1){for(let Fe=0;Fe<T.length;Fe++)if(Fe>=b.length){b.push(ve),Pe=Fe;break}else if(b[Fe]===null){b[Fe]=ve,Pe=Fe;break}if(Pe===-1)break}const _e=T[Pe];_e&&_e.connect(ve)}}const N=new G,P=new G;function q($,te,ve){N.setFromMatrixPosition(te.matrixWorld),P.setFromMatrixPosition(ve.matrixWorld);const Pe=N.distanceTo(P),_e=te.projectionMatrix.elements,Fe=ve.projectionMatrix.elements,mt=_e[14]/(_e[10]-1),Oe=_e[14]/(_e[10]+1),qe=(_e[9]+1)/_e[5],it=(_e[9]-1)/_e[5],Ge=(_e[8]-1)/_e[0],ot=(Fe[8]+1)/Fe[0],vt=mt*Ge,Dt=mt*ot,lt=Pe/(-Ge+ot),ht=lt*-Ge;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const B=mt+lt,bt=Oe+lt,$e=vt-ht,A=Dt+(Pe-ht),g=qe*Oe/bt*B,H=it*Oe/bt*B;$.projectionMatrix.makePerspective($e,A,g,H,B,bt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let te=$.near,ve=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),V.near=I.near=R.near=te,V.far=I.far=R.far=ve,(D!==V.near||k!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,k=V.far),V.layers.mask=$.layers.mask|6,R.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;const Pe=$.parent,_e=V.cameras;re(V,Pe);for(let Fe=0;Fe<_e.length;Fe++)re(_e[Fe],Pe);_e.length===2?q(V,R,I):V.projectionMatrix.copy(R.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),ge($,V,Pe)};function ge($,te,ve){ve===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return h[$]};let Qe=null;function ze($,te){if(f=te.getViewerPose(l||a),x=te,f!==null){const ve=f.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Pe=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,Pe=!0);for(let Oe=0;Oe<ve.length;Oe++){const qe=ve[Oe];let it=null;if(p!==null)it=p.getViewport(qe);else{const ot=d.getViewSubImage(u,qe);it=ot.viewport,Oe===0&&(e.setRenderTargetTextures(M,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(M))}let Ge=F[Oe];Ge===void 0&&(Ge=new Ht,Ge.layers.enable(Oe),Ge.viewport=new ct,F[Oe]=Ge),Ge.matrix.fromArray(qe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(qe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(it.x,it.y,it.width,it.height),Oe===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pe===!0&&V.cameras.push(Ge)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const Oe=d.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,r.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let Oe=0;Oe<ve.length;Oe++){const qe=ve[Oe].camera;if(qe){let it=h[qe];it||(it=new Ul,h[qe]=it);const Ge=d.getCameraImage(qe);it.sourceTexture=Ge}}}}for(let ve=0;ve<T.length;ve++){const Pe=b[ve],_e=T[ve];Pe!==null&&_e!==void 0&&_e.update(Pe,te,l||a)}Qe&&Qe($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),x=null}const ke=new Bl;ke.setAnimationLoop(ze),this.setAnimationLoop=function($){Qe=$},this.dispose=function(){}}}const ym=new tt,Xl=new Le;Xl.set(-1,0,0,0,1,0,0,0,1);function bm(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Nl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,w,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,S,w):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===It&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===It&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xl),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,S,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=w*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const b=T.program;n.uniformBlockBinding(M,b)}function l(M,T){let b=r[M.id];b===void 0&&(m(M),b=f(M),r[M.id]=b,M.addEventListener("dispose",S));const L=T.program;n.updateUBOMapping(M,L);const _=e.render.frame;s[M.id]!==_&&(u(M),s[M.id]=_)}function f(M){const T=d();M.__bindingPointIndex=T;const b=i.createBuffer(),L=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const T=r[M.id],b=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,E=b.length;_<E;_++){const R=b[_];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)p(R[I],_,I,L);else p(R,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,T,b,L){if(y(M,T,b,L)===!0){const _=M.__offset,E=M.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){const F=E[I],V=h(F);x(F,M.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function x(M,T,b){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,b)}function y(M,T,b,L){const _=M.value,E=T+"_"+b;if(L[E]===void 0)return typeof _=="number"||typeof _=="boolean"?L[E]=_:ArrayBuffer.isView(_)?L[E]=_.slice():L[E]=_.clone(),!0;{const R=L[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return L[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(M){const T=M.uniforms;let b=0;const L=16;for(let E=0,R=T.length;E<R;E++){const I=Array.isArray(T[E])?T[E]:[T[E]];for(let F=0,V=I.length;F<V;F++){const D=I[F],k=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,C=k.length;Z<C;Z++){const z=k[Z],N=h(z),P=b%L,q=P%N.boundary,re=P+q;b+=q,re!==0&&L-re<N.storage&&(b+=L-re),D.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=N.storage}}}const _=b%L;return _>0&&(b+=L-_),M.__size=b,M.__cache={},this}function h(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),T}function S(M){const T=M.target;T.removeEventListener("dispose",S);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function w(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:w}}const Am=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tn=null;function wm(){return tn===null&&(tn=new Ll(Am,16,16,Vn,ln),tn.name="DFG_LUT",tn.minFilter=yt,tn.magFilter=yt,tn.wrapS=gn,tn.wrapT=gn,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}class Rm{constructor(e={}){const{canvas:t=Fc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Bt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const y=p,m=new Set([wa,Aa,Ta]),h=new Set([Bt,on,Hi,Vi,Ea,ya]),S=new Uint32Array(4),w=new Int32Array(4),M=new G;let T=null,b=null;const L=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,F=null,V=null,D=null,k=null;this._outputColorSpace=Ft;let Z=0,C=0,z=null,N=-1,P=null;const q=new ct,re=new ct;let ge=null;const Qe=new Ie(0);let ze=0,ke=t.width,$=t.height,te=1,ve=null,Pe=null;const _e=new ct(0,0,ke,$),Fe=new ct(0,0,ke,$);let mt=!1;const Oe=new Da;let qe=!1,it=!1;const Ge=new tt,ot=new G,vt=new ct,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ht(){return z===null?te:1}let B=n;function bt(v,U){return t.getContext(v,U)}let $e,A,g,H,Y,J,ie,se,Q,ee,ae,be,ue,oe,Te,we,De,O,le,j,ce,pe,ne;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),B===null){const U="webgl2";if(B=bt(U,v),B===null)throw bt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),Xe("WebGLRenderer: "+v.message),v}function Ae(){$e=new wd(B),$e.init(),ce=new xm(B,$e),A=new _d(B,$e,e,ce),g=new gm(B,$e),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=B.createFramebuffer(),D=B.createFramebuffer(),k=B.createFramebuffer(),H=new Pd(B),Y=new nm,J=new _m(B,$e,g,Y,A,ce,H),ie=new Ad(R),se=new Lu(B),pe=new md(B,se),Q=new Rd(B,se,H,pe),ee=new Dd(B,Q,se,pe,H),O=new Ld(B,A,J),Te=new xd(Y),ae=new tm(R,ie,$e,A,pe,Te),be=new bm(R,Y),ue=new rm,oe=new um($e),De=new pd(R,ie,g,ee,x,c),we=new mm(R,ee,A),ne=new Tm(B,H,A,g),le=new gd(B,$e,H),j=new Cd(B,$e,H),H.programs=ae.programs,R.capabilities=A,R.extensions=$e,R.properties=Y,R.renderLists=ue,R.shadowMap=we,R.state=g,R.info=H}y!==Bt&&(E=new Ud(y,t.width,t.height,o,r,s));const Ee=new Em(R,B);this.xr=Ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(v){v!==void 0&&(te=v,this.setSize(ke,$,!1))},this.getSize=function(v){return v.set(ke,$)},this.setSize=function(v,U,K=!0){if(Ee.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=v,$=U,t.width=Math.floor(v*te),t.height=Math.floor(U*te),K===!0&&(t.style.width=v+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(ke*te,$*te).floor()},this.setDrawingBufferSize=function(v,U,K){ke=v,$=U,te=K,t.width=Math.floor(v*K),t.height=Math.floor(U*K),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(y===Bt){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(q)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,U,K,W){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,U,K,W),g.viewport(q.copy(_e).multiplyScalar(te).round())},this.getScissor=function(v){return v.copy(Fe)},this.setScissor=function(v,U,K,W){v.isVector4?Fe.set(v.x,v.y,v.z,v.w):Fe.set(v,U,K,W),g.scissor(re.copy(Fe).multiplyScalar(te).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(v){g.setScissorTest(mt=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){Pe=v},this.getClearColor=function(v){return v.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,K=!0){let W=0;if(v){let X=!1;if(z!==null){const de=z.texture.format;X=m.has(de)}if(X){const de=z.texture.type,xe=h.has(de),fe=De.getClearColor(),Me=De.getClearAlpha(),ye=fe.r,Ue=fe.g,Be=fe.b;xe?(S[0]=ye,S[1]=Ue,S[2]=Be,S[3]=Me,B.clearBufferuiv(B.COLOR,0,S)):(w[0]=ye,w[1]=Ue,w[2]=Be,w[3]=Me,B.clearBufferiv(B.COLOR,0,w))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),De.dispose(),ue.dispose(),oe.dispose(),Y.dispose(),ie.dispose(),ee.dispose(),pe.dispose(),ne.dispose(),ae.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",qa),Ee.removeEventListener("sessionend",Ya),Dn.stop()};function rt(v){v.preventDefault(),Ir("WebGLRenderer: Context Lost."),I=!0}function Ke(){Ir("WebGLRenderer: Context Restored."),I=!1;const v=H.autoReset,U=we.enabled,K=we.autoUpdate,W=we.needsUpdate,X=we.type;Ae(),H.autoReset=v,we.enabled=U,we.autoUpdate=K,we.needsUpdate=W,we.type=X}function Wt(v){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qt(v){const U=v.target;U.removeEventListener("dispose",Qt),Yl(U)}function Yl(v){Kl(v),Y.remove(v)}function Kl(v){const U=Y.get(v).programs;U!==void 0&&(U.forEach(function(K){ae.releaseProgram(K)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,K,W,X,de){U===null&&(U=Dt);const xe=X.isMesh&&X.matrixWorld.determinantAffine()<0,fe=Jl(v,U,K,W,X);g.setMaterial(W,xe);let Me=K.index,ye=1;if(W.wireframe===!0){if(Me=Q.getWireframeAttribute(K),Me===void 0)return;ye=2}const Ue=K.drawRange,Be=K.attributes.position;let Se=Ue.start*ye,Ze=(Ue.start+Ue.count)*ye;de!==null&&(Se=Math.max(Se,de.start*ye),Ze=Math.min(Ze,(de.start+de.count)*ye)),Me!==null?(Se=Math.max(Se,0),Ze=Math.min(Ze,Me.count)):Be!=null&&(Se=Math.max(Se,0),Ze=Math.min(Ze,Be.count));const ft=Ze-Se;if(ft<0||ft===1/0)return;pe.setup(X,W,fe,K,Me);let at,nt=le;if(Me!==null&&(at=se.get(Me),nt=j,nt.setIndex(at)),X.isMesh)W.wireframe===!0?(g.setLineWidth(W.wireframeLinewidth*ht()),nt.setMode(B.LINES)):nt.setMode(B.TRIANGLES);else if(X.isLine){let Tt=W.linewidth;Tt===void 0&&(Tt=1),g.setLineWidth(Tt*ht()),X.isLineSegments?nt.setMode(B.LINES):X.isLineLoop?nt.setMode(B.LINE_LOOP):nt.setMode(B.LINE_STRIP)}else X.isPoints?nt.setMode(B.POINTS):X.isSprite&&nt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if($e.get("WEBGL_multi_draw"))nt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Tt=X._multiDrawStarts,me=X._multiDrawCounts,Ct=X._multiDrawCount,We=Me?se.get(Me).bytesPerElement:1,zt=Y.get(W).currentProgram.getUniforms();for(let jt=0;jt<Ct;jt++)zt.setValue(B,"_gl_DrawID",jt),nt.render(Tt[jt]/We,me[jt])}else if(X.isInstancedMesh)nt.renderInstances(Se,ft,X.count);else if(K.isInstancedBufferGeometry){const Tt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,me=Math.min(K.instanceCount,Tt);nt.renderInstances(Se,ft,me)}else nt.render(Se,ft)};function Xa(v,U,K,W){F!==null&&v.isNodeMaterial&&F.setObject(W,v),qe===!0&&Te.setState(v,K,!1),v.transparent===!0&&v.side===Vt&&v.forceSinglePass===!1?(v.side=It,v.needsUpdate=!0,Ki(v,U,W),v.side=Gn,v.needsUpdate=!0,Ki(v,U,W),v.side=Vt):Ki(v,U,W)}this.compile=function(v,U,K=null){K===null&&(K=v),F!==null&&F.renderStart(v,U,K),b=oe.get(K),b.init(U),_.push(b),K.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),v!==K&&v.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),it=this.localClippingEnabled,qe=Te.init(this.clippingPlanes,it),qe===!0&&Te.setGlobalState(this.clippingPlanes,U),F!==null&&we.render(b.state.shadowsArray,K,U);const W=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const de=X.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const fe=de[xe];Xa(fe,K,U,X),W.add(fe)}else Xa(de,K,U,X),W.add(de)}),b=_.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(v,U,K=null){const W=this.compile(v,U,K);return new Promise(X=>{function de(){if(W.forEach(function(xe){const Me=Y.get(xe).currentProgram;(Me===void 0||Me.isReady())&&W.delete(xe)}),W.size===0){X(v);return}setTimeout(de,10)}$e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Wr=null;function Zl(v){Wr&&Wr(v)}function qa(){Dn.stop()}function Ya(){Dn.start()}const Dn=new Bl;Dn.setAnimationLoop(Zl),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(v){Wr=v,Ee.setAnimationLoop(v),v===null?Dn.stop():Dn.start()},Ee.addEventListener("sessionstart",qa),Ee.addEventListener("sessionend",Ya),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(v,U);const K=Ee.enabled===!0&&Ee.isPresenting===!0,W=E!==null&&(z===null||K)&&E.begin(R,z);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,U,z),b=oe.get(v,_.length),b.init(U),b.state.textureUnits=J.getTextureUnits(),_.push(b),Ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Oe.setFromProjectionMatrix(Ge,sn,U.reversedDepth),it=this.localClippingEnabled,qe=Te.init(this.clippingPlanes,it),T=ue.get(v,L.length),T.init(),L.push(T),Ee.enabled===!0&&Ee.isPresenting===!0){const xe=R.xr.getDepthSensingMesh();xe!==null&&Xr(xe,U,-1/0,R.sortObjects)}Xr(v,U,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(b.state.lightsArray),R.sortObjects===!0&&T.sort(ve,Pe),lt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,lt&&De.addToRenderList(T,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Te.beginShadows();const X=b.state.shadowsArray;if(we.render(X,v,U),qe===!0&&Te.endShadows(),(W&&E.hasRenderPass())===!1){const xe=T.opaque,fe=T.transmissive;if(b.setupLights(),U.isArrayCamera){const Me=U.cameras;if(fe.length>0)for(let ye=0,Ue=Me.length;ye<Ue;ye++){const Be=Me[ye];Za(xe,fe,v,Be)}lt&&De.render(v);for(let ye=0,Ue=Me.length;ye<Ue;ye++){const Be=Me[ye];Ka(T,v,Be,Be.viewport)}}else fe.length>0&&Za(xe,fe,v,U),lt&&De.render(v),Ka(T,v,U)}z!==null&&C===0&&(J.updateMultisampleRenderTarget(z),J.updateRenderTargetMipmap(z)),W&&E.end(R),v.isScene===!0&&v.onAfterRender(R,v,U),pe.resetDefaultState(),N=-1,P=null,_.pop(),_.length>0?(b=_[_.length-1],J.setTextureUnits(b.state.textureUnits),qe===!0&&Te.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?T=L[L.length-1]:T=null,F!==null&&F.renderEnd()};function Xr(v,U,K,W){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)K=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Oe)){W&&vt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ge);const xe=ee.update(v),fe=v.material;fe.visible&&T.push(v,xe,fe,K,vt.z,null,U)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Oe))){const xe=ee.update(v),fe=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),vt.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),vt.copy(xe.boundingSphere.center)),vt.applyMatrix4(v.matrixWorld).applyMatrix4(Ge)),Array.isArray(fe)){const Me=xe.groups;for(let ye=0,Ue=Me.length;ye<Ue;ye++){const Be=Me[ye],Se=fe[Be.materialIndex];Se&&Se.visible&&T.push(v,xe,Se,K,vt.z,Be,U)}}else fe.visible&&T.push(v,xe,fe,K,vt.z,null,U)}}const de=v.children;for(let xe=0,fe=de.length;xe<fe;xe++)Xr(de[xe],U,K,W)}function Ka(v,U,K,W){const{opaque:X,transmissive:de,transparent:xe}=v;b.setupLightsView(K),qe===!0&&Te.setGlobalState(R.clippingPlanes,K),W&&g.viewport(q.copy(W)),X.length>0&&Yi(X,U,K),de.length>0&&Yi(de,U,K),xe.length>0&&Yi(xe,U,K),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Za(v,U,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Se=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new $t(1,1,{generateMipmaps:!0,type:Se?ln:Bt,minFilter:Bn,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}const de=b.state.transmissionRenderTarget[W.id],xe=W.viewport||q;de.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);const fe=R.getRenderTarget(),Me=R.getActiveCubeFace(),ye=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(Qe),ze=R.getClearAlpha(),ze<1&&R.setClearColor(16777215,.5),R.clear(),lt&&De.render(K);const Ue=R.toneMapping;R.toneMapping=an;const Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),qe===!0&&Te.setGlobalState(R.clippingPlanes,W),Yi(v,K,W),J.updateMultisampleRenderTarget(de),J.updateRenderTargetMipmap(de),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ze=0,ft=U.length;Ze<ft;Ze++){const at=U[Ze],{object:nt,geometry:Tt,material:me,group:Ct}=at;if(me.side===Vt&&nt.layers.test(W.layers)){const We=me.side;me.side=It,me.needsUpdate=!0,$a(nt,K,W,Tt,me,Ct),me.side=We,me.needsUpdate=!0,Se=!0}}Se===!0&&(J.updateMultisampleRenderTarget(de),J.updateRenderTargetMipmap(de))}R.setRenderTarget(fe,Me,ye),R.setClearColor(Qe,ze),Be!==void 0&&(W.viewport=Be),R.toneMapping=Ue}function Yi(v,U,K){const W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,de=v.length;X<de;X++){const xe=v[X],{object:fe,geometry:Me,group:ye}=xe;let Ue=xe.material;Ue.allowOverride===!0&&W!==null&&(Ue=W),fe.layers.test(K.layers)&&$a(fe,U,K,Me,Ue,ye)}}function $a(v,U,K,W,X,de){F!==null&&X.isNodeMaterial&&F.setObject(v,X),v.onBeforeRender(R,U,K,W,X,de),v.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(R,U,K,W,v,de),X.transparent===!0&&X.side===Vt&&X.forceSinglePass===!1?(X.side=It,X.needsUpdate=!0,R.renderBufferDirect(K,U,W,X,v,de),X.side=Gn,X.needsUpdate=!0,R.renderBufferDirect(K,U,W,X,v,de),X.side=Vt):R.renderBufferDirect(K,U,W,X,v,de),v.onAfterRender(R,U,K,W,X,de)}function Ki(v,U,K){U.isScene!==!0&&(U=Dt);const W=Y.get(v),X=b.state.lights,de=b.state.shadowsArray,xe=X.state.version,fe=ae.getParameters(v,X.state,de,U,K,b.state.lightProbeGridArray),Me=ae.getProgramCacheKey(fe);let ye=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=ie.get(v.envMap||W.environment,Ue),W.envMapRotation=W.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,ye===void 0&&(v.addEventListener("dispose",Qt),ye=new Map,W.programs=ye);let Be=ye.get(Me);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===xe)return Qa(v,fe),Be}else fe.uniforms=ae.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,K,fe),v.onBeforeCompile(fe,R),Be=ae.acquireProgram(fe,Me),ye.set(Me,Be),W.uniforms=fe.uniforms;const Se=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=Te.uniform),Qa(v,fe),W.needsLights=jl(v),W.lightsStateVersion=xe,W.needsLights&&(Se.ambientLightColor.value=X.state.ambient,Se.lightProbe.value=X.state.probe,Se.sunLights.value=X.state.sun,Se.sunLightShadows.value=X.state.sunShadow,Se.directionalLights.value=X.state.directional,Se.directionalLightShadows.value=X.state.directionalShadow,Se.spotLights.value=X.state.spot,Se.spotLightShadows.value=X.state.spotShadow,Se.rectAreaLights.value=X.state.rectArea,Se.ltc_1.value=X.state.rectAreaLTC1,Se.ltc_2.value=X.state.rectAreaLTC2,Se.pointLights.value=X.state.point,Se.pointLightShadows.value=X.state.pointShadow,Se.hemisphereLights.value=X.state.hemi,Se.sunShadowMatrix.value=X.state.sunShadowMatrix,Se.sunShadowCascade.value=X.state.sunShadowCascade,Se.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Se.spotLightMatrix.value=X.state.spotLightMatrix,Se.spotLightMap.value=X.state.spotLightMap,Se.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=Be,W.uniformsList=null,Be}function Ja(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Rr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Qa(v,U){const K=Y.get(v);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function $l(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let K=0,W=v.length;K<W;K++){const X=v[K];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function Jl(v,U,K,W,X){U.isScene!==!0&&(U=Dt),J.resetTextureUnits();const de=U.fog,xe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,fe=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:He.workingColorSpace,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ye=ie.get(W.envMap||xe,Me),Ue=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Be=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Se=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,ft=!!K.morphAttributes.color;let at=an;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(at=R.toneMapping);const nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=nt!==void 0?nt.length:0,me=Y.get(W),Ct=b.state.lights;if(qe===!0&&(it===!0||v!==P)){const st=v===P&&W.id===N;Te.setState(W,v,st)}let We=!1;W.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Ct.state.version||me.outputColorSpace!==fe||X.isBatchedMesh&&me.batching===!1||!X.isBatchedMesh&&me.batching===!0||X.isBatchedMesh&&me.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&me.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&me.instancing===!1||!X.isInstancedMesh&&me.instancing===!0||X.isSkinnedMesh&&me.skinning===!1||!X.isSkinnedMesh&&me.skinning===!0||X.isInstancedMesh&&me.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&me.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&me.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&me.instancingMorph===!1&&X.morphTexture!==null||me.envMap!==ye||W.fog===!0&&me.fog!==de||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Te.numPlanes||me.numIntersection!==Te.numIntersection)||me.vertexAlphas!==Ue||me.vertexTangents!==Be||me.morphTargets!==Se||me.morphNormals!==Ze||me.morphColors!==ft||me.toneMapping!==at||me.morphTargetsCount!==Tt||!!me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,me.__version=W.version);let zt=me.currentProgram;We===!0&&(zt=Ki(W,U,X),F&&W.isNodeMaterial&&F.onUpdateProgram(W,zt,me));let jt=!1,Sn=!1,Yn=!1;const je=zt.getUniforms(),ut=me.uniforms;if(g.useProgram(zt.program)&&(jt=!0,Sn=!0,Yn=!0),W.id!==N&&(N=W.id,Sn=!0),me.needsLights){const st=$l(b.state.lightProbeGridArray,X);me.lightProbeGrid!==st&&(me.lightProbeGrid=st,Sn=!0)}if(jt||P!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),je.setValue(B,"projectionMatrix",v.projectionMatrix),je.setValue(B,"viewMatrix",v.matrixWorldInverse);const yn=je.map.cameraPosition;yn!==void 0&&yn.setValue(B,ot.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&je.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&je.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),P!==v&&(P=v,Sn=!0,Yn=!0)}if(me.needsLights&&(Ct.state.sunShadowMap.length>0&&je.setValue(B,"sunShadowMap",Ct.state.sunShadowMap,J),Ct.state.directionalShadowMap.length>0&&je.setValue(B,"directionalShadowMap",Ct.state.directionalShadowMap,J),Ct.state.spotShadowMap.length>0&&je.setValue(B,"spotShadowMap",Ct.state.spotShadowMap,J),Ct.state.pointShadowMap.length>0&&je.setValue(B,"pointShadowMap",Ct.state.pointShadowMap,J)),X.isSkinnedMesh){je.setOptional(B,X,"bindMatrix"),je.setOptional(B,X,"bindMatrixInverse");const st=X.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),je.setValue(B,"boneTexture",st.boneTexture,J))}X.isBatchedMesh&&(je.setOptional(B,X,"batchingTexture"),je.setValue(B,"batchingTexture",X._matricesTexture,J),je.setOptional(B,X,"batchingIdTexture"),je.setValue(B,"batchingIdTexture",X._indirectTexture,J),je.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&je.setValue(B,"batchingColorTexture",X._colorsTexture,J));const En=K.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&O.update(X,K,zt),(Sn||me.receiveShadow!==X.receiveShadow)&&(me.receiveShadow=X.receiveShadow,je.setValue(B,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(ut.envMapIntensity.value=U.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=wm()),Sn){if(je.setValue(B,"toneMappingExposure",R.toneMappingExposure),me.needsLights&&Ql(ut,Yn),de&&W.fog===!0&&be.refreshFogUniforms(ut,de),be.refreshMaterialUniforms(ut,W,te,$,b.state.transmissionRenderTarget[v.id]),me.needsLights&&me.lightProbeGrid){const st=me.lightProbeGrid;ut.probesSH.value=st.texture,ut.probesMin.value.copy(st.boundingBox.min),ut.probesMax.value.copy(st.boundingBox.max),ut.probesResolution.value.copy(st.resolution)}Rr.upload(B,Ja(me),ut,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Rr.upload(B,Ja(me),ut,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&je.setValue(B,"center",X.center),je.setValue(B,"modelViewMatrix",X.modelViewMatrix),je.setValue(B,"normalMatrix",X.normalMatrix),je.setValue(B,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const st=W.uniformsGroups;for(let yn=0,Kn=st.length;yn<Kn;yn++){const eo=st[yn];ne.update(eo,zt),ne.bind(eo,zt)}}return zt}function Ql(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function jl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(v,U,K){const W=Y.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=U,Y.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const K=Y.get(v);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,K=0){z=v,Z=U,C=K;let W=null,X=!1,de=!1;if(v){const fe=Y.get(v);if(fe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(B.FRAMEBUFFER,fe.__webglFramebuffer),q.copy(v.viewport),re.copy(v.scissor),ge=v.scissorTest,g.viewport(q),g.scissor(re),g.setScissorTest(ge),N=-1;return}else if(fe.__webglFramebuffer===void 0)J.setupRenderTarget(v);else if(fe.__hasExternalTextures)J.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(fe.__boundDepthTexture!==Ue){if(Ue!==null&&Y.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);const ye=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ye[U])?W=ye[U][K]:W=ye[U],X=!0):v.samples>0&&J.useMultisampledRTT(v)===!1?W=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(ye)?W=ye[K]:W=ye,q.copy(v.viewport),re.copy(v.scissor),ge=v.scissorTest}else q.copy(_e).multiplyScalar(te).floor(),re.copy(Fe).multiplyScalar(te).floor(),ge=mt;if(K!==0&&(W=V),g.bindFramebuffer(B.FRAMEBUFFER,W)&&g.drawBuffers(v,W),g.viewport(q),g.scissor(re),g.setScissorTest(ge),X){const fe=Y.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,K)}else if(de){const fe=U;for(let Me=0;Me<v.textures.length;Me++){const ye=Y.get(v.textures[Me]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Me,ye.__webglTexture,K,fe)}}else if(v!==null&&K!==0){const fe=Y.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fe.__webglTexture,K)}N=-1};function ja(v){const U=Y.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=A.textureFormatReadable(v.format),U.__typeReadable=A.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,K,W,X,de,xe,fe=0){if(!(v&&v.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){g.bindFramebuffer(B.FRAMEBUFFER,Me);try{const ye=v.textures[fe],Ue=ye.format,Be=ye.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe);const Se=ja(ye);if(Se.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-W&&K>=0&&K<=v.height-X&&B.readPixels(U,K,W,X,ce.convert(Ue),ce.convert(Be),de)}finally{const ye=z!==null?Y.get(z).__webglFramebuffer:null;g.bindFramebuffer(B.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(v,U,K,W,X,de,xe,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(U>=0&&U<=v.width-W&&K>=0&&K<=v.height-X){g.bindFramebuffer(B.FRAMEBUFFER,Me);const ye=v.textures[fe],Ue=ye.format,Be=ye.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe);const Se=ja(ye);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.bufferData(B.PIXEL_PACK_BUFFER,de.byteLength,B.STREAM_READ),B.readPixels(U,K,W,X,ce.convert(Ue),ce.convert(Be),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const ft=z!==null?Y.get(z).__webglFramebuffer:null;g.bindFramebuffer(B.FRAMEBUFFER,ft);const at=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Oc(B,at,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,de),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ze),B.deleteSync(at),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,K=0){const W=Math.pow(2,-K),X=Math.floor(v.image.width*W),de=Math.floor(v.image.height*W),xe=U!==null?U.x:0,fe=U!==null?U.y:0;J.setTexture2D(v,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,xe,fe,X,de),g.unbindTexture()},this.copyTextureToTexture=function(v,U,K=null,W=null,X=0,de=0){let xe,fe,Me,ye,Ue,Be,Se,Ze,ft;const at=v.isCompressedTexture?v.mipmaps[de]:v.image;if(K!==null)xe=K.max.x-K.min.x,fe=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,ye=K.min.x,Ue=K.min.y,Be=K.isBox3?K.min.z:0;else{const ut=Math.pow(2,-X);xe=Math.floor(at.width*ut),fe=Math.floor(at.height*ut),v.isDataArrayTexture?Me=at.depth:v.isData3DTexture?Me=Math.floor(at.depth*ut):Me=1,ye=0,Ue=0,Be=0}W!==null?(Se=W.x,Ze=W.y,ft=W.z):(Se=0,Ze=0,ft=0);const nt=ce.convert(U.format),Tt=ce.convert(U.type);let me;U.isData3DTexture?(J.setTexture3D(U,0),me=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),me=B.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),me=B.TEXTURE_2D),g.activeTexture(B.TEXTURE0),g.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const Ct=g.getParameter(B.UNPACK_ROW_LENGTH),We=g.getParameter(B.UNPACK_IMAGE_HEIGHT),zt=g.getParameter(B.UNPACK_SKIP_PIXELS),jt=g.getParameter(B.UNPACK_SKIP_ROWS),Sn=g.getParameter(B.UNPACK_SKIP_IMAGES);g.pixelStorei(B.UNPACK_ROW_LENGTH,at.width),g.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at.height),g.pixelStorei(B.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(B.UNPACK_SKIP_ROWS,Ue),g.pixelStorei(B.UNPACK_SKIP_IMAGES,Be);const Yn=v.isDataArrayTexture||v.isData3DTexture,je=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const ut=Y.get(v),En=Y.get(U),st=Y.get(ut.__renderTarget),yn=Y.get(En.__renderTarget);g.bindFramebuffer(B.READ_FRAMEBUFFER,st.__webglFramebuffer),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Kn=0;Kn<Me;Kn++)Yn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,X,Be+Kn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,de,ft+Kn)),B.blitFramebuffer(ye,Ue,xe,fe,Se,Ze,xe,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);g.bindFramebuffer(B.READ_FRAMEBUFFER,null),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Y.has(v)){const ut=Y.get(v),En=Y.get(U);g.bindFramebuffer(B.READ_FRAMEBUFFER,D),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let st=0;st<Me;st++)Yn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ut.__webglTexture,X,Be+st):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ut.__webglTexture,X),je?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,En.__webglTexture,de,ft+st):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,En.__webglTexture,de),X!==0?B.blitFramebuffer(ye,Ue,xe,fe,Se,Ze,xe,fe,B.COLOR_BUFFER_BIT,B.NEAREST):je?B.copyTexSubImage3D(me,de,Se,Ze,ft+st,ye,Ue,xe,fe):B.copyTexSubImage2D(me,de,Se,Ze,ye,Ue,xe,fe);g.bindFramebuffer(B.READ_FRAMEBUFFER,null),g.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else je?v.isDataTexture||v.isData3DTexture?B.texSubImage3D(me,de,Se,Ze,ft,xe,fe,Me,nt,Tt,at.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(me,de,Se,Ze,ft,xe,fe,Me,nt,at.data):B.texSubImage3D(me,de,Se,Ze,ft,xe,fe,Me,nt,Tt,at):v.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,de,Se,Ze,xe,fe,nt,Tt,at.data):v.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,de,Se,Ze,at.width,at.height,nt,at.data):B.texSubImage2D(B.TEXTURE_2D,de,Se,Ze,xe,fe,nt,Tt,at);g.pixelStorei(B.UNPACK_ROW_LENGTH,Ct),g.pixelStorei(B.UNPACK_IMAGE_HEIGHT,We),g.pixelStorei(B.UNPACK_SKIP_PIXELS,zt),g.pixelStorei(B.UNPACK_SKIP_ROWS,jt),g.pixelStorei(B.UNPACK_SKIP_IMAGES,Sn),de===0&&U.generateMipmaps&&B.generateMipmap(me),g.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&J.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?J.setTextureCube(v,0):v.isData3DTexture?J.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?J.setTexture2DArray(v,0):J.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){Z=0,C=0,z=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const Cm=[{sky:"#142f38",ground:"#3d6153",path:"#b9ae89",rock:"#657973",leaves:"#376f58",light:"#ffe0a3",water:"#287782"},{sky:"#263039",ground:"#695e50",path:"#c8ad83",rock:"#907b70",leaves:"#b35c43",light:"#ffd392",water:"#458b96"},{sky:"#202f3b",ground:"#546365",path:"#b8ad92",rock:"#798c88",leaves:"#b49850",light:"#ffbe6a",water:"#3a727f"},{sky:"#153c42",ground:"#426b60",path:"#b2ba9b",rock:"#779a8b",leaves:"#368977",light:"#c1ffdf",water:"#32988e"},{sky:"#354955",ground:"#697f50",path:"#c4b989",rock:"#909a87",leaves:"#779e59",light:"#fff2b6",water:"#558a93"},{sky:"#22273d",ground:"#4f5574",path:"#b0a5b2",rock:"#7882a1",leaves:"#6b718a",light:"#d5c0ff",water:"#615a94"}],Fr=i=>Math.sin(i*.69)*5.4+Math.sin(i*.25)*3.8,ql=i=>1.6+Math.sin(i*.34)*1.1+Math.sin(i*.72)*.5;function Ot(i){return{x:Fr(i),y:ql(i),z:-(i-1)*8.8}}function Ni(i,e,t){const n=1-e/8.8,r=Math.abs(i-Fr(n)),s=Math.min(1,Math.max(0,(r-2.5)/5));return ql(n)+s*((Math.sin(i*.27+e*.055)+Math.cos(i*.14-e*.095))*.95+(t===1?Math.max(0,r-12)*.3:0))}function Pm(i,e){let t=i*9173+e*71;const n=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296),r=[];for(let s=0;s<23;s++)for(const a of[-1,1])for(let o=0;o<3;o++){const c=s+n(),l=Ot(c).z,f=Fr(c)+a*(5.5+o*6+n()*3),d=e===5?n()>.48?"crystal":"rock":e===4?n()>.25?"rock":"tree":e===2?o===0&&s%2===0?"house":n()>.5?"tree":"rock":e===1?n()>.55?"bamboo":n()>.5?"rock":"tree":"tree";r.push({kind:d,x:f,z:l,scale:.75+n()*.75,rotation:n()*Math.PI*2}),o===0&&r.push({kind:"rock",x:Fr(1-(l+2)/8.8)+a*(4+n()*2),z:l+2,scale:.4+n()*.5,rotation:n()*6})}for(const s of[5,10,15,20]){const a=Ot(s);r.push({kind:e===4?"ger":"shrine",x:a.x-7,z:a.z-1,scale:e===2?1.15:1,rotation:.2})}return r}function Lm(i,e){const t=ec(i),n=Ot(20),r=new mi;r.position.set(n.x,n.y+.24,n.z);let s=!1,a=!1;const o=new yu().load(tc(`art/${t.boss.atlas}-atlas.png`),()=>{if(s){o.dispose();return}a=!0,e()},void 0,()=>{s||e()});o.colorSpace=Ft,o.repeat.set(1/3,1/2),o.offset.set(t.boss.art%3/3,(1-Math.floor(t.boss.art/3))/2),o.magFilter=yt;const c=new Rl({map:o,transparent:!0,alphaTest:.04,depthWrite:!1,toneMapped:!1}),l=new ou(c);l.center.set(.5,.125),l.scale.set(t.height,t.height,1),l.position.y=.04,r.add(l);const f=new St(new zr(2.05,36),new vn({color:"#061018",transparent:!0,opacity:.42,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.scale.y=.7,f.position.y=-.03,r.add(f);const d=new St(new Nr(2.1,2.16,64),new vn({color:t.color,transparent:!0,opacity:.65,side:Vt,depthWrite:!1}));d.rotation.x=-Math.PI/2,r.add(d);const u=d.clone();u.geometry=new Nr(1.9,1.94,6),u.material=d.material.clone(),u.position.y=.01,r.add(u);const p=new mi,x=new Fa(.035,5,4),y=new vn({color:t.color,transparent:!0,opacity:.65});r.add(p);for(let S=0;S<7;S++){const w=new St(x,y);p.add(w)}function m(S,w){l.visible=a;const M=(w?0:S*.001)+t.phase,T=w?0:(1-Math.cos(M*Math.PI*2/t.duration))*.5;l.scale.y=t.height*(1+t.breath*T),c.rotation=w?0:t.tilt*Math.sin(M*Math.PI*2/t.duration),d.material.opacity=w?.6:.48+T*.25,u.rotation.z=w?0:M*.09,p.children.forEach((b,L)=>{const _=L*2.4+M*.18;b.position.set(Math.cos(_)*1.65,w?.8+L*.13:.45+(M*.22+L*.45)%2.6,Math.sin(_)*.85)})}function h(){s=!0,o.dispose();const S=new Set,w=new Set;r.traverse(M=>{const T=M;if(T.geometry&&S.add(T.geometry),T.material)for(const b of Array.isArray(T.material)?T.material:[T.material])w.add(b)});for(const M of S)M.dispose();for(const M of w)M.dispose();r.clear()}return{group:r,update:m,dispose:h,height:t.height,isReady:()=>a,breathScale:()=>l.scale.y/t.height}}const yr=(i,e,t)=>new G(i,e,t);function Dm(){const i=[-1,-.78,0,.78,1],e=[.24,0,.65,0,.24],t=[];for(let r=0;r<4;r++){const s=[i[r],e[r],-1],a=[i[r+1],e[r+1],-1],o=[i[r],e[r],1],c=[i[r+1],e[r+1],1];t.push(...s,...o,...a,...a,...o,...c)}const n=new pt;return n.setAttribute("position",new Ye(t,3)),n.computeVertexNormals(),n}function Im(i,e,t){const n=Cm[e],r=new jc;r.background=new Ie(n.sky),r.fog=new La(n.sky,48,132),r.add(new bu("#c1e4ec","#4e5744",2.25));const s=new wu("#ffdeab",2.6);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-37,right:37,top:35,bottom:-35,near:1,far:120}),s.shadow.bias=-6e-4,s.shadow.normalBias=.045,r.add(s,s.target);const a={box:new Ei(1,1,1),trunk:new Gr(.35,.5,1,7),stone:new Ua(.65,0),leaf:new Na(.7,1),cone:new Ia(.6,1,8),roof:Dm()},o=new Map,c=[];function l(C,z,N,P,q,re,ge,Qe,ze=0,ke=0){const $=o.get(C)??[];$.push({position:yr(z,N,P),scale:yr(q,re,ge),rotation:new cn(0,ze,ke),color:new Ie(Qe)}),o.set(C,$)}function f(C,z,N,P,q="#345d65"){l("roof",C,z,N,P,1.7,P*.75,q),l("box",C,z+.97,N,.15,.14,P*1.62,"#8a9b90");for(const re of[-1,1])l("box",C+re*P*.97,z+.29,N,.13,.13,P*1.6,"#829b91")}function d(C,z,N,P=1){l("trunk",C,z+.8*P,N,.19*P,1.6*P,.19*P,"#6f6250"),l("box",C,z+1.6*P,N,.48*P,.6*P,.48*P,"#694939"),c.push({position:yr(C,z+1.6*P,N),scale:yr(.36*P,.46*P,.5*P),rotation:new cn,color:new Ie(n.light)}),l("cone",C,z+2.05*P,N,.72*P,.28*P,.72*P,"#445759")}function u(C,z,N,P,q=!1){l("box",C,z+.25,N,4.1*P,.5,3.2*P,"#7c8980"),l("box",C,z+1.45*P,N,3.3*P,2.5*P,2.4*P,q?"#aaafa1":"#b9a98b");for(const re of[-1.6,1.6])for(const ge of[-1.15,1.15])l("trunk",C+re*P,z+1.6*P,N+ge*P,.3,3*P,.3,"#714c3e");for(const re of[-.9,.9])l("box",C+re*P,z+1.5*P,N+1.23*P,.85*P,1.2*P,.08,"#4c5144"),l("box",C+re*P,z+1.5*P,N+1.29*P,.55*P,.85*P,.035,"#deb47d");if(l("box",C,z+1.1*P,N+1.23*P,.7*P,2*P,.09,"#614f3d"),f(C,z+2.8*P,N,2.45*P),q){for(let re=0;re<4;re++)l("box",C,z-.03-re*.09,N+1.8*P+re*.45,2*P,.15,.5,"#9ba18f");d(C-2.6*P,z,N+2.2*P),d(C+2.6*P,z,N+2.2*P)}}const p=new qi(76,235,56,172);p.rotateX(-Math.PI/2),p.translate(0,0,-83);const x=p.getAttribute("position"),y=[];for(let C=0;C<x.count;C++){const z=x.getX(C),N=x.getZ(C),P=Ni(z,N,e);x.setY(C,P);const q=new Ie(n.ground);q.offsetHSL(Math.sin(z*.13+N*.03)*.01,0,Math.sin(z*2.31+N*3.73)*.035+P*.006),y.push(q.r,q.g,q.b)}p.setAttribute("color",new Ye(y,3)),p.computeVertexNormals();const m=new St(p,new vs({vertexColors:!0,flatShading:!0}));m.receiveShadow=!0,r.add(m);const h=[];for(let C=0;C<240;C++){const z=Ot(C*.1-1),N=Ot((C+1)*.1-1),P=(q,re)=>{const ge=q.x-14+re*1.6;return[ge,Ni(ge,q.z,e)+.07,q.z]};h.push(...P(z,-1),...P(N,-1),...P(z,1),...P(z,1),...P(N,-1),...P(N,1)),C%8===0&&l("stone",z.x-12.3,Ni(z.x-12.3,z.z,e)+.2,z.z,.65,.45,.8,n.rock)}const S=new pt;S.setAttribute("position",new Ye(h,3)),S.computeVertexNormals(),r.add(new St(S,new vs({color:n.water,side:Vt})));for(let C=0;C<107;C++){const z=C*.2-1,N=Ot(z),P=Ot(z+.02),q=Math.atan2(P.x-N.x,P.z-N.z);l("box",N.x,N.y+.035,N.z,3.1,.07,1.8,n.path,q)}for(const C of Pm(i,e)){const z=Ot(20);if(Math.hypot(C.x-z.x,C.z-z.z)<10)continue;const N=Ni(C.x,C.z,e),P=C.scale;if(C.kind==="house"||C.kind==="shrine"){u(C.x,N,C.z,P,C.kind==="shrine");continue}if(C.kind==="ger"){l("trunk",C.x,N+1.25,C.z,5*P,2.5,5*P,"#ddd1b3"),l("cone",C.x,N+3.1,C.z,4.5*P,1.8,4.5*P,"#d8cab4"),l("box",C.x,N+1,C.z+2*P,.9,2,.15,"#584e3d");continue}if(C.kind==="crystal"){l("cone",C.x,N+1.4*P,C.z,1.5*P,4*P,1.5*P,"#ad9ad0",C.rotation,.12),l("stone",C.x,N,C.z,3*P,1.5*P,2*P,n.rock);continue}if(C.kind==="rock"){l("stone",C.x,N+.5*P,C.z,2.4*P,1.3*P,1.8*P,n.rock,C.rotation);continue}if(C.kind==="bamboo"){for(let q=0;q<3;q++){const re=C.x+q*.4;l("trunk",re,N+2.2*P,C.z+q*.2,.16,4.4*P,.16,"#789c69");for(const ge of[-1,1])l("leaf",re+ge*.3,N+(3.2+q*.24)*P,C.z,.9*P,.3,.38*P,"#779268",C.rotation,ge*.45)}continue}l("trunk",C.x,N+1.65*P,C.z,.7*P,3.3*P,.7*P,"#705846",C.rotation);for(const q of[-1,1])l("trunk",C.x+q*.45*P,N+2.4*P,C.z,.32*P,1.5*P,.32*P,"#705846",C.rotation,q*.55);for(let q=0;q<3;q++){const re=new Ie(n.leaves);re.offsetHSL(0,0,q*.025),l("leaf",C.x+Math.sin(q*2+C.rotation)*.45*P,N+(2.55+q*.7)*P,C.z,3.5*P-q*.45,1.4*P,2.65*P-q*.35,"#"+re.getHexString(),C.rotation+q)}l("leaf",C.x+1.2*P,N+.3,C.z+1,1.4,.7,1.2,n.leaves)}for(let C=1;C<=20;C++){const z=Ot(C);if(l("trunk",z.x,z.y+.11,z.z,C===20?9:2.3,.18,C===20?9:2.3,C%5===0?"#b49d70":"#7c998b"),d(z.x+2.25,z.y,z.z+.25,.8),C%5===0&&C!==20){d(z.x-2.3,z.y,z.z+.25,.8);for(const N of[-1,1])l("trunk",z.x+N*2.4,z.y+2.15,z.z-2,.34,4.3,.34,"#955e48");l("box",z.x,z.y+4.2,z.z-2,5.5,.28,.3,"#955e48"),f(z.x,z.y+4.4,z.z-2,3.15)}}const w=Ot(20);for(const C of[-1,1]){const z=w.x+C*4.5,N=w.z-4,P=Ni(z,N,e);l("box",z,P+.3,N,1.6,.6,1.6,n.rock),l("trunk",z,P+2.2,N,.85,4.2,.85,n.rock),d(z,P+3.8,N,1.3)}const M=new vs({color:16777215,flatShading:!0,side:Vt}),T=new tt,b=new Wn;function L(C,z,N){const P=new wo(C,N,z.length);return z.forEach((q,re)=>{T.compose(q.position,b.setFromEuler(q.rotation),q.scale),P.setMatrixAt(re,T),P.setColorAt(re,q.color)}),P.castShadow=!0,P.receiveShadow=!0,r.add(P),P}for(const[C,z]of o)L(a[C],z,M);const _=new vn({color:n.light}),E=L(a.box,c,_);E.castShadow=!1;const R=new St(new Oa(1.35,.07,6,40),new vn({color:"#ffe2a2"}));R.rotation.x=-Math.PI/2,r.add(R);const I=new St(new zr(1.23,32),new vn({color:"#ffde9a",transparent:!0,opacity:.17,depthWrite:!1}));I.rotation.x=-Math.PI/2,r.add(I);const F=[];for(let C=0;C<145;C++)F.push(Math.sin(C*43.17)*23,2+Math.sin(C*1.3)*2,C/145*-195+15);const V=new pt;V.setAttribute("position",new Ye(F,3));const D=new hu(V,new Dl({color:n.light,size:.12,transparent:!0,opacity:.65,depthWrite:!1}));r.add(D);const k=Lm(i,t);r.add(k.group);function Z(){var N;k.dispose();const C=new Set(Object.values(a)),z=new Set;r.traverse(P=>{const q=P;if(q instanceof wo&&q.dispose(),q.geometry&&C.add(q.geometry),q.material)for(const re of Array.isArray(q.material)?q.material:[q.material])z.add(re)});for(const P of C)P.dispose();for(const P of z)P.dispose();(N=s.shadow.map)==null||N.dispose(),r.clear()}return{scene:r,sun:s,marker:R,glow:I,lights:E,particles:D,boss:k,dispose:Z}}function Nm(){const i=new Rm({antialias:!0,alpha:!1,powerPreference:"low-power"});i.setPixelRatio(Math.min(devicePixelRatio,1.5)),i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.type=Bi,i.toneMapping=Ma,i.toneMappingExposure=1.15,i.domElement.className="diorama-canvas",i.domElement.setAttribute("aria-label","입체 탐험 지도. 좌우로 끌면 시점이 회전합니다.");const e=new Ht(43,1,.1,240),t=new G;let n=null,r=null,s=0,a=0,o,c,l=!0,f=0,d=0,u=1,p=1,x=1,y=!0,m=new AbortController;const h=matchMedia("(prefers-reduced-motion: reduce)");let S=-100;function w(){cancelAnimationFrame(a),o==null||o.disconnect(),c==null||c.disconnect(),m.abort(),n=null,i.domElement.remove()}function M(){if(!n)return;const _=Number(n.dataset.camera??1);for(const E of n.querySelectorAll(".route-node")){const R=Number(E.dataset.id),I=Ot(R);if(R===20){T(E,I,_);continue}t.set(I.x,I.y+.75,I.z).project(e);const F=(t.x+1)*50,V=(1-t.y)*50,D=t.z<1&&t.z>0&&F>3&&F<97&&V>(p<550?40:25)&&V<79&&Math.abs(R-_)<4.3;E.style.cssText=`left:${F}%;top:${V}%;--node-scale:1;opacity:1;visibility:${D?"visible":"hidden"};z-index:${Math.round(45-t.z*20)}`}}function T(_,E,R){t.set(E.x,E.y+.24,E.z);const I=t.clone().applyMatrix4(e.matrixWorldInverse).z;t.project(e);const F=(t.x+1)*50,V=(1-t.y)*50,D=t.z>0&&t.z<1&&F>3&&F<97&&V>(p<550?40:28)&&V<77&&20-R<4.4,k=((r==null?void 0:r.boss.height)??8.8)*x/(2*Math.tan(e.fov*Math.PI/360)*Math.abs(I));_.style.left=F+"%",_.style.top=V+"%",_.style.visibility=D?"visible":"hidden",_.style.opacity="1",_.style.zIndex="28",_.style.setProperty("--boss-width",k*.8+"px"),_.style.setProperty("--boss-height",k*.79+"px")}function b(_){var Z;if(!(n!=null&&n.isConnected)||!r||(a=requestAnimationFrame(b),!l||document.hidden||_-f<32))return;const E=Number(n.dataset.camera??1);if(h.matches&&!y&&E===S)return;i.shadowMap.needsUpdate=y||E!==S,f=_,S=E,y=!1;const R=Ot(E+.6),I=.5+d,F=(p<550?40:34)*u;e.aspect=p/x,e.position.set(R.x+Math.sin(I)*F,R.y+F*.83,R.z+Math.cos(I)*F),e.lookAt(R.x,R.y,R.z-2),e.updateProjectionMatrix(),e.updateMatrixWorld(),r.sun.position.set(R.x-18,R.y+35,R.z+16),r.sun.target.position.set(R.x,R.y,R.z),r.sun.target.updateMatrixWorld();const V=Number(((Z=n.querySelector(".route-node.selected"))==null?void 0:Z.dataset.id)??1),D=Ot(V);r.marker.position.set(D.x,D.y+.22,D.z),r.glow.position.set(D.x,D.y+.21,D.z);const k=h.matches?1:1+Math.sin(_*.0018)*.04;r.marker.scale.setScalar(k),r.lights.material instanceof vn&&r.lights.material.color.setScalar(h.matches?1:1+Math.sin(_*.0015)*.08),r.particles.position.y=h.matches?0:Math.sin(_*4e-4)*.16,r.boss.update(_,h.matches),n.dataset.bossReady=String(r.boss.isReady()),n.dataset.bossBreath=r.boss.breathScale().toFixed(5),r.marker.visible=V!==20,r.glow.visible=V!==20,i.render(r.scene,e),M(),n.dataset.geometries=String(i.info.memory.geometries),n.dataset.drawCalls=String(i.info.render.calls),n.dataset.triangles=String(i.info.render.triangles),n.dataset.orbit=d.toFixed(3),n.dataset.zoom=u.toFixed(2)}function L(_){w(),n=_,m=new AbortController;const E=Number(n.dataset.chapter),R=Number(n.dataset.theme);(E!==s||!r)&&(r==null||r.dispose(),r=Im(E,R,()=>{y=!0}),s=E,d=0,u=1),n.querySelector(".diorama-surface").append(i.domElement),n.dataset.renderer="webgl";const F=n.querySelector("[data-diorama-status]");F&&(F.textContent="입체 지도 · 좌우로 끌어 둘러보기");function V(){n&&(p=n.clientWidth,x=n.clientHeight,i.setSize(p,x,!1),y=!0)}V(),o=new ResizeObserver(V),o.observe(n),l=!0,c=new IntersectionObserver(z=>{var N;l=((N=z[0])==null?void 0:N.isIntersecting)??!0,y=!0}),c.observe(n);let D=!1,k=0,Z=0;const C=i.domElement;C.addEventListener("pointerdown",z=>{z.button===0&&(D=!0,k=z.clientX,Z=d,C.setPointerCapture(z.pointerId))},{signal:m.signal}),C.addEventListener("pointermove",z=>{D&&(d=Math.max(-.65,Math.min(.65,Z+(z.clientX-k)*.005)),y=!0)},{signal:m.signal}),C.addEventListener("pointerup",()=>{D=!1},{signal:m.signal}),C.addEventListener("pointercancel",()=>{D=!1},{signal:m.signal}),n.querySelectorAll("[data-diorama]").forEach(z=>z.addEventListener("click",()=>{switch(z.dataset.diorama){case"left":d=Math.max(-.65,d-.16);break;case"right":d=Math.min(.65,d+.16);break;case"in":u=Math.max(.78,u-.1);break;case"out":u=Math.min(1.3,u+.1);break;case"reset":d=0,u=1;break}y=!0},{signal:m.signal})),C.addEventListener("webglcontextlost",z=>{z.preventDefault();const N=n;w(),r==null||r.dispose(),r=null,i.dispose(),N==null||N.dispatchEvent(new Event("diorama-unavailable"))},{signal:m.signal}),y=!0,f=0,b(performance.now())}return{attach:L,detach:w}}export{Nm as createDiorama};
