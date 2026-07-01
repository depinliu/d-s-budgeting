const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-BHu7zP26.js","assets/heart-handshake-Eg_gLQg-.js","assets/mail-BAQMQA2b.js","assets/Register-DPb_ftAD.js","assets/users-BQqBoVnC.js","assets/Dashboard-CXxusjnL.js","assets/ProgressBar-DzVTPy-f.js","assets/grid-3x3-C--THDZj.js","assets/chevron-right-BuzIVHSp.js","assets/wallet-minimal-DISMt891.js","assets/trending-up-BlXRj8pN.js","assets/target-BjeAaaa6.js","assets/piggy-bank-BHrAfraV.js","assets/Wallet-FeVW7B83.js","assets/CurrencyInput-CmIhxafq.js","assets/x-CNs9jnuZ.js","assets/credit-card-DMIycEzQ.js","assets/smartphone-CDgzbfD-.js","assets/AddTransaction-D-kwPZ9u.js","assets/lucide-vue-next-Cy7WbWqw.js","assets/scan-line-Sh1SOtqJ.js","assets/log-out-CwZa38Wx.js","assets/chevron-left-qqbfSz_g.js","assets/shield-BxorSkzN.js","assets/send-Csv5vKCy.js","assets/sparkles-BCi-XYsa.js","assets/History-uzNmkowE.js","assets/id-DZTXb0YR.js","assets/Account-GFIEMuCh.js","assets/Budget-D8JvbALd.js","assets/Scanner-C-gAFP5j.js","assets/Goals-CEP8mpID.js","assets/Assets-jqr1GCLf.js","assets/CalendarView-Cs7_J5ZS.js","assets/subMonths-DUAWpWON.js","assets/AIAdvisor-zcH0dhvf.js","assets/Trends-B9eikuoK.js","assets/More-CZxawF9R.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function su(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},fs=[],mn=()=>{},Fp=()=>!1,Fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ua=t=>t.startsWith("onUpdate:"),et=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fv=Object.prototype.hasOwnProperty,Pe=(t,e)=>fv.call(t,e),re=Array.isArray,ds=t=>Ji(t)==="[object Map]",Vs=t=>Ji(t)==="[object Set]",df=t=>Ji(t)==="[object Date]",de=t=>typeof t=="function",Le=t=>typeof t=="string",Zt=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Up=t=>(Ce(t)||de(t))&&de(t.then)&&de(t.catch),Bp=Object.prototype.toString,Ji=t=>Bp.call(t),dv=t=>Ji(t).slice(8,-1),jp=t=>Ji(t)==="[object Object]",Ba=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pv=/-\w/g,It=ja(t=>t.replace(pv,e=>e.slice(1).toUpperCase())),mv=/\B([A-Z])/g,Wn=ja(t=>t.replace(mv,"-$1").toLowerCase()),qa=ja(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uc=ja(t=>t?`on${qa(t)}`:""),lt=(t,e)=>!Object.is(t,e),Qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$a=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gv=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let pf;const Ha=()=>pf||(pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ou(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Ev(r):ou(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||Ce(t))return t}const _v=/;(?![^(]*\))/g,yv=/:([^]+)/,vv=/\/\*[^]*?\*\//g;function Ev(t){const e={};return t.replace(vv,"").split(_v).forEach(n=>{if(n){const r=n.split(yv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(Le(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wv=su(Tv);function $p(t){return!!t||t===""}function Iv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=mr(t[r],e[r]);return n}function mr(t,e){if(t===e)return!0;let n=df(t),r=df(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zt(t),r=Zt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?Iv(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!mr(t[o],e[o]))return!1}}return String(t)===String(e)}function au(t,e){return t.findIndex(n=>mr(n,e))}const Hp=t=>!!(t&&t.__v_isRef===!0),ls=t=>Le(t)?t:t==null?"":re(t)||Ce(t)&&(t.toString===Bp||!de(t.toString))?Hp(t)?ls(t.value):JSON.stringify(t,Wp,2):String(t),Wp=(t,e)=>Hp(e)?Wp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bc(r,i)+" =>"]=s,n),{})}:Vs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bc(n))}:Zt(e)?Bc(e):Ce(e)&&!re(e)&&!jp(e)?String(e):e,Bc=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Kp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&nt&&(nt.active?(this.parent=nt,this.index=(nt.scopes||(nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){if(this._on>0&&--this._on===0){if(nt===this)nt=this.prevScope;else{let e=nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gp(t){return new Kp(t)}function zp(){return nt}function Av(t,e=!1){nt&&nt.cleanups.push(t)}let Ve;const jc=new WeakSet;class Qp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&(nt.active?nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jc.has(this)&&(jc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mf(this),Xp(this);const e=Ve,n=sn;Ve=this,sn=!0;try{return this.fn()}finally{Zp(this),Ve=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dl(this)&&this.run()}get dirty(){return dl(this)}}let Yp=0,mi,gi;function Jp(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=mi,mi=t}function cu(){Yp++}function lu(){if(--Yp>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mi;){let e=mi;for(mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),uu(r),bv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(em(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function em(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci)||(t.globalVersion=Ci,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dl(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=sn;Ve=t,sn=!0;try{Xp(t);const s=t.fn(t._value);(e.version===0||lt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,sn=r,Zp(t),t.flags&=-3}}function uu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)uu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const tm=[];function vn(){tm.push(sn),sn=!1}function En(){const t=tm.pop();sn=t===void 0?!0:t}function mf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Ci=0;class Rv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!sn||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new Rv(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,nm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){cu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lu()}}}function nm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)nm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const aa=new WeakMap,Mr=Symbol(""),pl=Symbol(""),ki=Symbol("");function Tt(t,e,n){if(sn&&Ve){let r=aa.get(t);r||aa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Wa),s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=aa.get(t);if(!o){Ci++;return}const c=l=>{l&&l.trigger()};if(cu(),e==="clear")o.forEach(c);else{const l=re(t),u=l&&Ba(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===ki||!Zt(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(ki)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Mr)),ds(t)&&c(o.get(pl)));break;case"delete":l||(c(o.get(Mr)),ds(t)&&c(o.get(pl)));break;case"set":ds(t)&&c(o.get(Mr));break}}lu()}function Sv(t,e){const n=aa.get(t);return n&&n.get(e)}function ns(t){const e=Te(t);return e===t?e:(Tt(e,"iterate",ki),qt(t)?e:e.map(on))}function Ka(t){return Tt(t=Te(t),"iterate",ki),t}function fn(t,e){return Un(t)?ws(Mn(t)?on(e):e):on(e)}const Pv={__proto__:null,[Symbol.iterator](){return qc(this,Symbol.iterator,t=>fn(this,t))},concat(...t){return ns(this).concat(...t.map(e=>re(e)?ns(e):e))},entries(){return qc(this,"entries",t=>(t[1]=fn(this,t[1]),t))},every(t,e){return An(this,"every",t,e,void 0,arguments)},filter(t,e){return An(this,"filter",t,e,n=>n.map(r=>fn(this,r)),arguments)},find(t,e){return An(this,"find",t,e,n=>fn(this,n),arguments)},findIndex(t,e){return An(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return An(this,"findLast",t,e,n=>fn(this,n),arguments)},findLastIndex(t,e){return An(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return An(this,"forEach",t,e,void 0,arguments)},includes(...t){return $c(this,"includes",t)},indexOf(...t){return $c(this,"indexOf",t)},join(t){return ns(this).join(t)},lastIndexOf(...t){return $c(this,"lastIndexOf",t)},map(t,e){return An(this,"map",t,e,void 0,arguments)},pop(){return ei(this,"pop")},push(...t){return ei(this,"push",t)},reduce(t,...e){return gf(this,"reduce",t,e)},reduceRight(t,...e){return gf(this,"reduceRight",t,e)},shift(){return ei(this,"shift")},some(t,e){return An(this,"some",t,e,void 0,arguments)},splice(...t){return ei(this,"splice",t)},toReversed(){return ns(this).toReversed()},toSorted(t){return ns(this).toSorted(t)},toSpliced(...t){return ns(this).toSpliced(...t)},unshift(...t){return ei(this,"unshift",t)},values(){return qc(this,"values",t=>fn(this,t))}};function qc(t,e,n){const r=Ka(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Cv=Array.prototype;function An(t,e,n,r,s,i){const o=Ka(t),c=o!==t&&!qt(t),l=o[e];if(l!==Cv[e]){const p=l.apply(t,i);return c?on(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,fn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function gf(t,e,n,r){const s=Ka(t),i=s!==t&&!qt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=fn(t,u)),n.call(this,u,fn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?fn(t,l):l}function $c(t,e,n){const r=Te(t);Tt(r,"iterate",ki);const s=r[e](...n);return(s===-1||s===!1)&&Ga(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function ei(t,e,n=[]){vn(),cu();const r=Te(t)[e].apply(t,n);return lu(),En(),r}const kv=su("__proto__,__v_isRef,__isVue"),rm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function Nv(t){Zt(t)||(t=String(t));const e=Te(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class sm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?jv:cm:i?am:om).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let l;if(o&&(l=Pv[n]))return l;if(n==="hasOwnProperty")return Nv}const c=Reflect.get(e,n,He(e)?e:r);if((Zt(n)?rm.has(n):kv(n))||(s||Tt(e,"get",n),i))return c;if(He(c)){const l=o&&Ba(n)?c:c.value;return s&&Ce(l)?gl(l):l}return Ce(c)?s?gl(c):Xi(c):c}}class im extends sm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=re(e)&&Ba(n);if(!this._isShallow){const u=Un(i);if(!qt(r)&&!Un(r)&&(i=Te(i),r=Te(r)),!o&&He(i)&&!He(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,He(e)?e:s);return e===Te(s)&&l&&(c?lt(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zt(n)||!rm.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",re(e)?"length":Mr),Reflect.ownKeys(e)}}class Dv extends sm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ov=new im,Vv=new Dv,xv=new im(!0);const ml=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function Mv(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?ml:e?ws:on;return!e&&Tt(i,"iterate",l?pl:Mr),et(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Fo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lv(t,e){const n={get(s){const i=this.__v_raw,o=Te(i),c=Te(s);t||(lt(s,c)&&Tt(o,"get",s),Tt(o,"get",c));const{has:l}=Lo(o),u=e?ml:t?ws:on;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Te(s),"iterate",Mr),s.size},has(s){const i=this.__v_raw,o=Te(i),c=Te(s);return t||(lt(s,c)&&Tt(o,"has",s),Tt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Te(c),u=e?ml:t?ws:on;return!t&&Tt(l,"iterate",Mr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return et(n,t?{add:Fo("add"),set:Fo("set"),delete:Fo("delete"),clear:Fo("clear")}:{add(s){const i=Te(this),o=Lo(i),c=Te(s),l=!e&&!qt(s)&&!Un(s)?c:s;return o.has.call(i,l)||lt(s,l)&&o.has.call(i,s)||lt(c,l)&&o.has.call(i,c)||(i.add(l),Cn(i,"add",l,l)),this},set(s,i){!e&&!qt(i)&&!Un(i)&&(i=Te(i));const o=Te(this),{has:c,get:l}=Lo(o);let u=c.call(o,s);u||(s=Te(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?lt(i,f)&&Cn(o,"set",s,i):Cn(o,"add",s,i),this},delete(s){const i=Te(this),{has:o,get:c}=Lo(i);let l=o.call(i,s);l||(s=Te(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Cn(i,"delete",s,void 0),u},clear(){const s=Te(this),i=s.size!==0,o=s.clear();return i&&Cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Mv(s,t,e)}),n}function hu(t,e){const n=Lv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const Fv={get:hu(!1,!1)},Uv={get:hu(!1,!0)},Bv={get:hu(!0,!1)};const om=new WeakMap,am=new WeakMap,cm=new WeakMap,jv=new WeakMap;function qv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xi(t){return Un(t)?t:fu(t,!1,Ov,Fv,om)}function lm(t){return fu(t,!1,xv,Uv,am)}function gl(t){return fu(t,!0,Vv,Bv,cm)}function fu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=qv(dv(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Mn(t){return Un(t)?Mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Un(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function Ga(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function du(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&qp(t,"__v_skip",!0),t}const on=t=>Ce(t)?Xi(t):t,ws=t=>Ce(t)?gl(t):t;function He(t){return t?t.__v_isRef===!0:!1}function xt(t){return um(t,!1)}function $v(t){return um(t,!0)}function um(t,e){return He(t)?t:new Hv(t,e)}class Hv{constructor(e,n){this.dep=new Wa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:on(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Un(e);e=r?e:Te(e),lt(e,n)&&(this._rawValue=e,this._value=r?e:on(e),this.dep.trigger())}}function ze(t){return He(t)?t.value:t}const Wv={get:(t,e,n)=>e==="__v_raw"?t:ze(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hm(t){return Mn(t)?t:new Proxy(t,Wv)}class Kv{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Wa,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Gv(t){return new Kv(t)}function zv(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=Yv(t,n);return e}class Qv{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Zt(n)?n:String(n),this._raw=Te(e);let s=!0,i=e;if(!re(e)||Zt(this._key)||!Ba(this._key))do s=!Ga(i)||qt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=ze(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&He(this._raw[this._key])){const n=this._object[this._key];if(He(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Sv(this._raw,this._key)}}function Yv(t,e,n){return new Qv(t,e,n)}class Jv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Jp(this,!0),!0}get value(){const e=this.dep.track();return em(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xv(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new Jv(r,s,n)}const Uo={},ca=new WeakMap;let Nr;function Zv(t,e=!1,n=Nr){if(n){let r=ca.get(n);r||ca.set(n,r=[]),r.push(t)}}function eE(t,e,n=be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=$=>s?$:qt($)||s===!1||s===0?kn($,1):kn($);let f,p,m,g,w=!1,P=!1;if(He(t)?(p=()=>t.value,w=qt(t)):Mn(t)?(p=()=>u(t),w=!0):re(t)?(P=!0,w=t.some($=>Mn($)||qt($)),p=()=>t.map($=>{if(He($))return $.value;if(Mn($))return u($);if(de($))return l?l($,2):$()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){vn();try{m()}finally{En()}}const $=Nr;Nr=f;try{return l?l(t,3,[g]):t(g)}finally{Nr=$}}:p=mn,e&&s){const $=p,X=s===!0?1/0:s;p=()=>kn($(),X)}const N=zp(),F=()=>{f.stop(),N&&N.active&&iu(N.effects,f)};if(i&&e){const $=e;e=(...X)=>{const ee=$(...X);return F(),ee}}let x=P?new Array(t.length).fill(Uo):Uo;const j=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const X=f.run();if($||s||w||(P?X.some((ee,R)=>lt(ee,x[R])):lt(X,x))){m&&m();const ee=Nr;Nr=f;try{const R=[X,x===Uo?void 0:P&&x[0]===Uo?[]:x,g];x=X,l?l(e,3,R):e(...R)}finally{Nr=ee}}}else f.run()};return c&&c(j),f=new Qp(p),f.scheduler=o?()=>o(j,!1):j,g=$=>Zv($,!1,f),m=f.onStop=()=>{const $=ca.get(f);if($){if(l)l($,4);else for(const X of $)X();ca.delete(f)}},e?r?j(!0):x=f.run():o?o(j.bind(null,!0),!0):f.run(),F.pause=f.pause.bind(f),F.resume=f.resume.bind(f),F.stop=F,F}function kn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,He(t))kn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Vs(t)||ds(t))t.forEach(r=>{kn(r,e,n)});else if(jp(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zi(t,e,n,r){try{return r?t(...r):t()}catch(s){za(s,e,n)}}function en(t,e,n,r){if(de(t)){const s=Zi(t,e,n,r);return s&&Up(s)&&s.catch(i=>{za(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function za(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){vn(),Zi(i,null,10,[t,l,u]),En();return}}tE(t,n,s,r,o)}function tE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let hn=-1;const ps=[];let sr=null,ss=0;const fm=Promise.resolve();let la=null;function Qa(t){const e=la||fm;return t?e.then(this?t.bind(this):t):e}function nE(t){let e=hn+1,n=kt.length;for(;e<n;){const r=e+n>>>1,s=kt[r],i=Ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function pu(t){if(!(t.flags&1)){const e=Ni(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=Ni(n)?kt.push(t):kt.splice(nE(e),0,t),t.flags|=1,dm()}}function dm(){la||(la=fm.then(mm))}function rE(t){re(t)?ps.push(...t):sr&&t.id===-1?sr.splice(ss+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),dm()}function _f(t,e,n=hn+1){for(;n<kt.length;n++){const r=kt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pm(t){if(ps.length){const e=[...new Set(ps)].sort((n,r)=>Ni(n)-Ni(r));if(ps.length=0,sr){sr.push(...e);return}for(sr=e,ss=0;ss<sr.length;ss++){const n=sr[ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,ss=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mm(t){try{for(hn=0;hn<kt.length;hn++){const e=kt[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<kt.length;hn++){const e=kt[hn];e&&(e.flags&=-2)}hn=-1,kt.length=0,pm(),la=null,(kt.length||ps.length)&&mm()}}let Ut=null,gm=null;function ua(t){const e=Ut;return Ut=t,gm=t&&t.type.__scopeId||null,e}function Di(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&pa(-1);const i=ua(e);let o;try{o=t(...s)}finally{ua(i),r._d&&pa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function nk(t,e){if(Ut===null)return t;const n=tc(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=be]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(vn(),en(l,n,8,[t.el,c,t,e]),En())}}function Yo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=ec();if(r||Lr){let s=Lr?Lr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function sE(){return!!(ec()||Lr)}const iE=Symbol.for("v-scx"),oE=()=>Jt(iE);function aE(t,e){return mu(t,null,{flush:"sync"})}function ms(t,e,n){return mu(t,e,n)}function mu(t,e,n=be){const{immediate:r,deep:s,flush:i,once:o}=n,c=et({},n),l=e&&r||!e&&i!=="post";let u;if(xi){if(i==="sync"){const g=oE();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=mn,g.resume=mn,g.pause=mn,g}}const f=wt;c.call=(g,w,P)=>en(g,f,w,P);let p=!1;i==="post"?c.scheduler=g=>{Vt(g,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(g,w)=>{w?g():pu(g)}),c.augmentJob=g=>{e&&(g.flags|=4),p&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const m=eE(t,e,c);return xi&&(u?u.push(m):l&&m()),m}function cE(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?_m(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=eo(this),c=mu(s,i.bind(r),n);return o(),c}function _m(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lE=Symbol("_vte"),ym=t=>t.__isTeleport,Qt=Symbol("_leaveCb"),ti=Symbol("_enterCb");function uE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sm(()=>{t.isMounted=!0}),Pm(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],vm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},Em=t=>{const e=t.subTree;return e.component?Em(e.component):e},hE={name:"BaseTransition",props:vm,setup(t,{slots:e}){const n=ec(),r=uE();return()=>{const s=e.default&&Im(e.default(),!0),i=s&&s.length?Tm(s):n.subTree?ga():void 0;if(!i)return;const o=Te(t),{mode:c}=o;if(r.isLeaving)return Hc(i);const l=yf(i);if(!l)return Hc(i);let u=_l(l,o,r,n,p=>u=p);l.type!==Nt&&Oi(l,u);let f=n.subTree&&yf(n.subTree);if(f&&f.type!==Nt&&!Or(f,l)&&Em(n).type!==Nt){let p=_l(f,o,r,n);if(Oi(f,p),c==="out-in"&&l.type!==Nt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Hc(i);c==="in-out"&&l.type!==Nt?p.delayLeave=(m,g,w)=>{const P=wm(r,f);P[String(f.key)]=f,m[Qt]=()=>{g(),m[Qt]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Tm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Nt){e=n;break}}return e}const fE=hE;function wm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _l(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:g,onAfterLeave:w,onLeaveCancelled:P,onBeforeAppear:N,onAppear:F,onAfterAppear:x,onAppearCancelled:j}=e,$=String(t.key),X=wm(n,t),ee=(y,I)=>{y&&en(y,r,9,I)},R=(y,I)=>{const S=I[1];ee(y,I),re(y)?y.every(A=>A.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:c,beforeEnter(y){let I=l;if(!n.isMounted)if(i)I=N||l;else return;y[Qt]&&y[Qt](!0);const S=X[$];S&&Or(t,S)&&S.el[Qt]&&S.el[Qt](),ee(I,[y])},enter(y){if(X[$]===t)return;let I=u,S=f,A=p;if(!n.isMounted)if(i)I=F||u,S=x||f,A=j||p;else return;let T=!1;y[ti]=Ke=>{T||(T=!0,Ke?ee(A,[y]):ee(S,[y]),v.delayedLeave&&v.delayedLeave(),y[ti]=void 0)};const Re=y[ti].bind(null,!1);I?R(I,[y,Re]):Re()},leave(y,I){const S=String(t.key);if(y[ti]&&y[ti](!0),n.isUnmounting)return I();ee(m,[y]);let A=!1;y[Qt]=Re=>{A||(A=!0,I(),Re?ee(P,[y]):ee(w,[y]),y[Qt]=void 0,X[S]===t&&delete X[S])};const T=y[Qt].bind(null,!1);X[S]=t,g?R(g,[y,T]):T()},clone(y){const I=_l(y,e,n,r,s);return s&&s(I),I}};return v}function Hc(t){if(Ya(t))return t=gr(t),t.children=null,t}function yf(t){if(!Ya(t))return ym(t.type)&&t.children?Tm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Im(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Yt?(o.patchFlag&128&&s++,r=r.concat(Im(o.children,e,c))):(e||o.type!==Nt)&&r.push(c!=null?gr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Am(t,e){return de(t)?et({name:t.name},e,{setup:t}):t}function bm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ha=new WeakMap;function _i(t,e,n,r,s=!1){if(re(t)){t.forEach((P,N)=>_i(P,e&&(re(e)?e[N]:e),n,r,s));return}if(yi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_i(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?tc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===be?c.refs={}:c.refs,p=c.setupState,m=Te(p),g=p===be?Fp:P=>vf(f,P)?!1:Pe(m,P),w=(P,N)=>!(N&&vf(f,N));if(u!=null&&u!==l){if(Ef(e),Le(u))f[u]=null,g(u)&&(p[u]=null);else if(He(u)){const P=e;w(u,P.k)&&(u.value=null),P.k&&(f[P.k]=null)}}if(de(l)){vn();try{Zi(l,c,12,[o,f])}finally{En()}}else{const P=Le(l),N=He(l);if(P||N){const F=()=>{if(t.f){const x=P?g(l)?p[l]:f[l]:w()||!t.k?l.value:f[t.k];if(s)re(x)&&iu(x,i);else if(re(x))x.includes(i)||x.push(i);else if(P)f[l]=[i],g(l)&&(p[l]=f[l]);else{const j=[i];w(l,t.k)&&(l.value=j),t.k&&(f[t.k]=j)}}else P?(f[l]=o,g(l)&&(p[l]=o)):N&&(w(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const x=()=>{F(),ha.delete(t)};x.id=-1,ha.set(t,x),Vt(x,n)}else Ef(t),F()}}}function Ef(t){const e=ha.get(t);e&&(e.flags|=8,ha.delete(t))}Ha().requestIdleCallback;Ha().cancelIdleCallback;const yi=t=>!!t.type.__asyncLoader,Ya=t=>t.type.__isKeepAlive;function dE(t,e){Rm(t,"a",e)}function pE(t,e){Rm(t,"da",e)}function Rm(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ja(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ya(s.parent.vnode)&&mE(r,e,n,s),s=s.parent}}function mE(t,e,n,r){const s=Ja(e,t,r,!0);Cm(()=>{iu(r[e],s)},n)}function Ja(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{vn();const c=eo(n),l=en(e,n,t,o);return c(),En(),l});return r?s.unshift(i):s.push(i),i}}const Kn=t=>(e,n=wt)=>{(!xi||t==="sp")&&Ja(t,(...r)=>e(...r),n)},gE=Kn("bm"),Sm=Kn("m"),_E=Kn("bu"),yE=Kn("u"),Pm=Kn("bum"),Cm=Kn("um"),vE=Kn("sp"),EE=Kn("rtg"),TE=Kn("rtc");function wE(t,e=wt){Ja("ec",t,e)}const km="components";function gu(t,e){return Dm(km,t,!0,e)||t}const Nm=Symbol.for("v-ndc");function yl(t){return Le(t)?Dm(km,t,!1)||t:t||Nm}function Dm(t,e,n=!0,r=!1){const s=Ut||wt;if(s){const i=s.type;{const c=oT(i,!1);if(c&&(c===e||c===It(e)||c===qa(It(e))))return i}const o=Tf(s[t]||i[t],e)||Tf(s.appContext[t],e);return!o&&r?i:o}}function Tf(t,e){return t&&(t[e]||t[It(e)]||t[qa(It(e))])}function IE(t,e,n,r){let s;const i=n,o=re(t);if(o||Le(t)){const c=o&&Mn(t);let l=!1,u=!1;c&&(l=!qt(t),u=Un(t),t=Ka(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?ws(on(t[f])):on(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const vl=t=>t?eg(t)?tc(t):vl(t.parent):null,vi=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vm(t),$forceUpdate:t=>t.f||(t.f=()=>{pu(t.update)}),$nextTick:t=>t.n||(t.n=Qa.bind(t.proxy)),$watch:t=>cE.bind(t)}),Wc=(t,e)=>t!==be&&!t.__isScriptSetup&&Pe(t,e),AE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wc(r,e))return o[e]=1,r[e];if(s!==be&&Pe(s,e))return o[e]=2,s[e];if(Pe(i,e))return o[e]=3,i[e];if(n!==be&&Pe(n,e))return o[e]=4,n[e];El&&(o[e]=0)}}const u=vi[e];let f,p;if(u)return e==="$attrs"&&Tt(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==be&&Pe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wc(s,e)?(s[e]=n,!0):r!==be&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==be&&c[0]!=="$"&&Pe(t,c)||Wc(e,c)||Pe(i,c)||Pe(r,c)||Pe(vi,c)||Pe(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fa(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function rk(t,e){return!t||!e?t||e:re(t)&&re(e)?t.concat(e):et({},fa(t),fa(e))}let El=!0;function bE(t){const e=Vm(t),n=t.proxy,r=t.ctx;El=!1,e.beforeCreate&&wf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:w,activated:P,deactivated:N,beforeDestroy:F,beforeUnmount:x,destroyed:j,unmounted:$,render:X,renderTracked:ee,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:S,components:A,directives:T,filters:Re}=e;if(u&&RE(u,r,null),o)for(const he in o){const ge=o[he];de(ge)&&(r[he]=ge.bind(n))}if(s){const he=s.call(n,n);Ce(he)&&(t.data=Xi(he))}if(El=!0,i)for(const he in i){const ge=i[he],Mt=de(ge)?ge.bind(n,n):de(ge.get)?ge.get.bind(n,n):mn,tn=!de(ge)&&de(ge.set)?ge.set.bind(n):mn,Wt=Me({get:Mt,set:tn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Fe=>Wt.value=Fe})}if(c)for(const he in c)Om(c[he],r,n,he);if(l){const he=de(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ge=>{Yo(ge,he[ge])})}f&&wf(f,t,"c");function ke(he,ge){re(ge)?ge.forEach(Mt=>he(Mt.bind(n))):ge&&he(ge.bind(n))}if(ke(gE,p),ke(Sm,m),ke(_E,g),ke(yE,w),ke(dE,P),ke(pE,N),ke(wE,v),ke(TE,ee),ke(EE,R),ke(Pm,x),ke(Cm,$),ke(vE,y),re(I))if(I.length){const he=t.exposed||(t.exposed={});I.forEach(ge=>{Object.defineProperty(he,ge,{get:()=>n[ge],set:Mt=>n[ge]=Mt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===mn&&(t.render=X),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),T&&(t.directives=T),y&&bm(t)}function RE(t,e,n=mn){re(t)&&(t=Tl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wf(t,e,n){en(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Om(t,e,n,r){let s=r.includes(".")?_m(n,r):()=>n[r];if(Le(t)){const i=e[t];de(i)&&ms(s,i)}else if(de(t))ms(s,t.bind(n));else if(Ce(t))if(re(t))t.forEach(i=>Om(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&ms(s,i,t)}}function Vm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>da(l,u,o,!0)),da(l,e,o)),Ce(e)&&i.set(e,l),l}function da(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&da(t,i,n,!0),s&&s.forEach(o=>da(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=SE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const SE={data:If,props:Af,emits:Af,methods:ai,computed:ai,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:ai,directives:ai,watch:CE,provide:If,inject:PE};function If(t,e){return e?t?function(){return et(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function PE(t,e){return ai(Tl(t),Tl(e))}function Tl(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function ai(t,e){return t?et(Object.create(null),t,e):e}function Af(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:et(Object.create(null),fa(t),fa(e??{})):e}function CE(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function xm(){return{app:null,config:{isNativeTag:Fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kE=0;function NE(t,e){return function(r,s=null){de(r)||(r=et({},r)),s!=null&&!Ce(s)&&(s=null);const i=xm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:kE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(u,...p)):de(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const g=u._ceVNode||ft(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,f,m),l=!0,u._container=f,f.__vue_app__=u,tc(g.component)}},onUnmount(f){c.push(f)},unmount(){l&&(en(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Lr;Lr=u;try{return f()}finally{Lr=p}}};return u}}let Lr=null;function sk(t,e,n=be){const r=ec(),s=It(e),i=Wn(e),o=Mm(t,s),c=Gv((l,u)=>{let f,p=be,m;return aE(()=>{const g=t[s];lt(f,g)&&(f=g,u())}),{get(){return l(),n.get?n.get(f):f},set(g){const w=n.set?n.set(g):g;if(!lt(w,f)&&!(p!==be&&lt(g,p)))return;const P=r.vnode.props,N=!!(P&&(e in P||s in P||i in P)&&(`onUpdate:${e}`in P||`onUpdate:${s}`in P||`onUpdate:${i}`in P));N||(f=g,u()),r.emit(`update:${e}`,w),lt(g,p)&&(lt(g,w)&&!lt(w,m)||N&&p!==be&&!lt(w,f))&&u(),p=g,m=w}}});return c[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||be:c,done:!1}:{done:!0}}}},c}const Mm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${It(e)}Modifiers`]||t[`${Wn(e)}Modifiers`];function DE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&Mm(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Le(f)?f.trim():f)),o.number&&(s=n.map($a)));let c,l=r[c=Uc(e)]||r[c=Uc(It(e))];!l&&i&&(l=r[c=Uc(Wn(e))]),l&&en(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,en(u,t,6,s)}}const OE=new WeakMap;function Lm(t,e,n=!1){const r=n?OE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=u=>{const f=Lm(u,e,!0);f&&(c=!0,et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ce(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):et(o,i),Ce(t)&&r.set(t,o),o)}function Xa(t,e){return!t||!Fa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Wn(e))||Pe(t,e))}function bf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:g,ctx:w,inheritAttrs:P}=t,N=ua(t);let F,x;try{if(n.shapeFlag&4){const $=s||r,X=$;F=dn(u.call(X,$,f,p,g,m,w)),x=c}else{const $=e;F=dn($.length>1?$(p,{attrs:c,slots:o,emit:l}):$(p,null)),x=e.props?c:VE(c)}}catch($){Ei.length=0,za($,t,1),F=ft(Nt)}let j=F;if(x&&P!==!1){const $=Object.keys(x),{shapeFlag:X}=j;$.length&&X&7&&(i&&$.some(Ua)&&(x=xE(x,i)),j=gr(j,x,!1,!0))}return n.dirs&&(j=gr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Oi(j,n.transition),F=j,ua(N),F}const VE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fa(n))&&((e||(e={}))[n]=t[n]);return e},xE=(t,e)=>{const n={};for(const r in t)(!Ua(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ME(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Rf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(Fm(o,r,m)&&!Xa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Rf(r,o,u):!0:!!o;return!1}function Rf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Fm(e,t,i)&&!Xa(n,i))return!0}return!1}function Fm(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ce(r)&&Ce(s)?!mr(r,s):r!==s}function LE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Um={},Bm=()=>Object.create(Um),jm=t=>Object.getPrototypeOf(t)===Um;function FE(t,e,n,r=!1){const s={},i=Bm();t.propsDefaults=Object.create(null),qm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function UE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Te(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Xa(t.emitsOptions,m))continue;const g=e[m];if(l)if(Pe(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const w=It(m);s[w]=wl(l,c,w,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{qm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Pe(e,p)&&((f=Wn(p))===p||!Pe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=wl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Cn(t.attrs,"set","")}function qm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(pi(l))continue;const u=e[l];let f;s&&Pe(s,f=It(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Te(n),u=c||be;for(let f=0;f<i.length;f++){const p=i[f];n[p]=wl(s,l,p,u[p],t,!Pe(u,p))}}return o}function wl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=eo(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Wn(n))&&(r=!0))}return r}const BE=new WeakMap;function $m(t,e,n=!1){const r=n?BE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[m,g]=$m(p,e,!0);et(o,m),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ce(t)&&r.set(t,fs),fs;if(re(i))for(let f=0;f<i.length;f++){const p=It(i[f]);Sf(p)&&(o[p]=be)}else if(i)for(const f in i){const p=It(f);if(Sf(p)){const m=i[f],g=o[p]=re(m)||de(m)?{type:m}:et({},m),w=g.type;let P=!1,N=!0;if(re(w))for(let F=0;F<w.length;++F){const x=w[F],j=de(x)&&x.name;if(j==="Boolean"){P=!0;break}else j==="String"&&(N=!1)}else P=de(w)&&w.name==="Boolean";g[0]=P,g[1]=N,(P||Pe(g,"default"))&&c.push(p)}}const u=[o,c];return Ce(t)&&r.set(t,u),u}function Sf(t){return t[0]!=="$"&&!pi(t)}const _u=t=>t==="_"||t==="_ctx"||t==="$stable",yu=t=>re(t)?t.map(dn):[dn(t)],jE=(t,e,n)=>{if(e._n)return e;const r=Di((...s)=>yu(e(...s)),n);return r._c=!1,r},Hm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_u(s))continue;const i=t[s];if(de(i))e[s]=jE(s,i,r);else if(i!=null){const o=yu(i);e[s]=()=>o}}},Wm=(t,e)=>{const n=yu(e);t.slots.default=()=>n},Km=(t,e,n)=>{for(const r in e)(n||!_u(r))&&(t[r]=e[r])},qE=(t,e,n)=>{const r=t.slots=Bm();if(t.vnode.shapeFlag&32){const s=e._;s?(Km(r,e,n),n&&qp(r,"_",s,!0)):Hm(e,r)}else e&&Wm(t,e)},$E=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Km(s,e,n):(i=!e.$stable,Hm(e,s)),o=e}else e&&(Wm(t,e),o={default:1});if(i)for(const c in s)!_u(c)&&o[c]==null&&delete s[c]},Vt=zE;function HE(t){return WE(t)}function WE(t,e){const n=Ha();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:g=mn,insertStaticContent:w}=t,P=(E,b,C,O=null,U=null,V=null,G=void 0,W=null,H=!!b.dynamicChildren)=>{if(E===b)return;E&&!Or(E,b)&&(O=M(E),Fe(E,U,V,!0),E=null),b.patchFlag===-2&&(H=!1,b.dynamicChildren=null);const{type:B,ref:ie,shapeFlag:Q}=b;switch(B){case Za:N(E,b,C,O);break;case Nt:F(E,b,C,O);break;case Gc:E==null&&x(b,C,O,G);break;case Yt:A(E,b,C,O,U,V,G,W,H);break;default:Q&1?X(E,b,C,O,U,V,G,W,H):Q&6?T(E,b,C,O,U,V,G,W,H):(Q&64||Q&128)&&B.process(E,b,C,O,U,V,G,W,H,te)}ie!=null&&U?_i(ie,E&&E.ref,V,b||E,!b):ie==null&&E&&E.ref!=null&&_i(E.ref,null,V,E,!0)},N=(E,b,C,O)=>{if(E==null)r(b.el=c(b.children),C,O);else{const U=b.el=E.el;b.children!==E.children&&u(U,b.children)}},F=(E,b,C,O)=>{E==null?r(b.el=l(b.children||""),C,O):b.el=E.el},x=(E,b,C,O)=>{[E.el,E.anchor]=w(E.children,b,C,O,E.el,E.anchor)},j=({el:E,anchor:b},C,O)=>{let U;for(;E&&E!==b;)U=m(E),r(E,C,O),E=U;r(b,C,O)},$=({el:E,anchor:b})=>{let C;for(;E&&E!==b;)C=m(E),s(E),E=C;s(b)},X=(E,b,C,O,U,V,G,W,H)=>{if(b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),E==null)ee(b,C,O,U,V,G,W,H);else{const B=E.el&&E.el._isVueCE?E.el:null;try{B&&B._beginPatch(),y(E,b,U,V,G,W,H)}finally{B&&B._endPatch()}}},ee=(E,b,C,O,U,V,G,W)=>{let H,B;const{props:ie,shapeFlag:Q,transition:ne,dirs:ce}=E;if(H=E.el=o(E.type,V,ie&&ie.is,ie),Q&8?f(H,E.children):Q&16&&v(E.children,H,null,O,U,Kc(E,V),G,W),ce&&Sr(E,null,O,"created"),R(H,E,E.scopeId,G,O),ie){for(const pe in ie)pe!=="value"&&!pi(pe)&&i(H,pe,null,ie[pe],V,O);"value"in ie&&i(H,"value",null,ie.value,V),(B=ie.onVnodeBeforeMount)&&un(B,O,E)}ce&&Sr(E,null,O,"beforeMount");const oe=KE(U,ne);oe&&ne.beforeEnter(H),r(H,b,C),((B=ie&&ie.onVnodeMounted)||oe||ce)&&Vt(()=>{try{B&&un(B,O,E),oe&&ne.enter(H),ce&&Sr(E,null,O,"mounted")}finally{}},U)},R=(E,b,C,O,U)=>{if(C&&g(E,C),O)for(let V=0;V<O.length;V++)g(E,O[V]);if(U){let V=U.subTree;if(b===V||Ym(V.type)&&(V.ssContent===b||V.ssFallback===b)){const G=U.vnode;R(E,G,G.scopeId,G.slotScopeIds,U.parent)}}},v=(E,b,C,O,U,V,G,W,H=0)=>{for(let B=H;B<E.length;B++){const ie=E[B]=W?Pn(E[B]):dn(E[B]);P(null,ie,b,C,O,U,V,G,W)}},y=(E,b,C,O,U,V,G)=>{const W=b.el=E.el;let{patchFlag:H,dynamicChildren:B,dirs:ie}=b;H|=E.patchFlag&16;const Q=E.props||be,ne=b.props||be;let ce;if(C&&Pr(C,!1),(ce=ne.onVnodeBeforeUpdate)&&un(ce,C,b,E),ie&&Sr(b,E,C,"beforeUpdate"),C&&Pr(C,!0),B&&(!E.dynamicChildren||E.dynamicChildren.length!==B.length)&&(H=0,G=!1,B=null),(Q.innerHTML&&ne.innerHTML==null||Q.textContent&&ne.textContent==null)&&f(W,""),B?I(E.dynamicChildren,B,W,C,O,Kc(b,U),V):G||ge(E,b,W,null,C,O,Kc(b,U),V,!1),H>0){if(H&16)S(W,Q,ne,C,U);else if(H&2&&Q.class!==ne.class&&i(W,"class",null,ne.class,U),H&4&&i(W,"style",Q.style,ne.style,U),H&8){const oe=b.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Ee=oe[pe],Be=Q[Ee],Qe=ne[Ee];(Qe!==Be||Ee==="value")&&i(W,Ee,Be,Qe,U,C)}}H&1&&E.children!==b.children&&f(W,b.children)}else!G&&B==null&&S(W,Q,ne,C,U);((ce=ne.onVnodeUpdated)||ie)&&Vt(()=>{ce&&un(ce,C,b,E),ie&&Sr(b,E,C,"updated")},O)},I=(E,b,C,O,U,V,G)=>{for(let W=0;W<b.length;W++){const H=E[W],B=b[W],ie=H.el&&(H.type===Yt||!Or(H,B)||H.shapeFlag&198)?p(H.el):C;P(H,B,ie,null,O,U,V,G,!0)}},S=(E,b,C,O,U)=>{if(b!==C){if(b!==be)for(const V in b)!pi(V)&&!(V in C)&&i(E,V,b[V],null,U,O);for(const V in C){if(pi(V))continue;const G=C[V],W=b[V];G!==W&&V!=="value"&&i(E,V,W,G,U,O)}"value"in C&&i(E,"value",b.value,C.value,U)}},A=(E,b,C,O,U,V,G,W,H)=>{const B=b.el=E?E.el:c(""),ie=b.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:ce}=b;ce&&(W=W?W.concat(ce):ce),E==null?(r(B,C,O),r(ie,C,O),v(b.children||[],C,ie,U,V,G,W,H)):Q>0&&Q&64&&ne&&E.dynamicChildren&&E.dynamicChildren.length===ne.length?(I(E.dynamicChildren,ne,C,U,V,G,W),(b.key!=null||U&&b===U.subTree)&&Gm(E,b,!0)):ge(E,b,C,ie,U,V,G,W,H)},T=(E,b,C,O,U,V,G,W,H)=>{b.slotScopeIds=W,E==null?b.shapeFlag&512?U.ctx.activate(b,C,O,G,H):Re(b,C,O,U,V,G,H):Ke(E,b,H)},Re=(E,b,C,O,U,V,G)=>{const W=E.component=tT(E,O,U);if(Ya(E)&&(W.ctx.renderer=te),nT(W,!1,G),W.asyncDep){if(U&&U.registerDep(W,ke,G),!E.el){const H=W.subTree=ft(Nt);F(null,H,b,C),E.placeholder=H.el}}else ke(W,E,b,C,U,V,G)},Ke=(E,b,C)=>{const O=b.component=E.component;if(ME(E,b,C))if(O.asyncDep&&!O.asyncResolved){he(O,b,C);return}else O.next=b,O.update();else b.el=E.el,O.vnode=b},ke=(E,b,C,O,U,V,G)=>{const W=()=>{if(E.isMounted){let{next:Q,bu:ne,u:ce,parent:oe,vnode:pe}=E;{const gt=zm(E);if(gt){Q&&(Q.el=pe.el,he(E,Q,G)),gt.asyncDep.then(()=>{Vt(()=>{E.isUnmounted||B()},U)});return}}let Ee=Q,Be;Pr(E,!1),Q?(Q.el=pe.el,he(E,Q,G)):Q=pe,ne&&Qo(ne),(Be=Q.props&&Q.props.onVnodeBeforeUpdate)&&un(Be,oe,Q,pe),Pr(E,!0);const Qe=bf(E),Kt=E.subTree;E.subTree=Qe,P(Kt,Qe,p(Kt.el),M(Kt),E,U,V),Q.el=Qe.el,Ee===null&&LE(E,Qe.el),ce&&Vt(ce,U),(Be=Q.props&&Q.props.onVnodeUpdated)&&Vt(()=>un(Be,oe,Q,pe),U)}else{let Q;const{el:ne,props:ce}=b,{bm:oe,m:pe,parent:Ee,root:Be,type:Qe}=E,Kt=yi(b);Pr(E,!1),oe&&Qo(oe),!Kt&&(Q=ce&&ce.onVnodeBeforeMount)&&un(Q,Ee,b),Pr(E,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(Qe,E.parent?E.parent.type:void 0);const gt=E.subTree=bf(E);P(null,gt,C,O,E,U,V),b.el=gt.el}if(pe&&Vt(pe,U),!Kt&&(Q=ce&&ce.onVnodeMounted)){const gt=b;Vt(()=>un(Q,Ee,gt),U)}(b.shapeFlag&256||Ee&&yi(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&E.a&&Vt(E.a,U),E.isMounted=!0,b=C=O=null}};E.scope.on();const H=E.effect=new Qp(W);E.scope.off();const B=E.update=H.run.bind(H),ie=E.job=H.runIfDirty.bind(H);ie.i=E,ie.id=E.uid,H.scheduler=()=>pu(ie),Pr(E,!0),B()},he=(E,b,C)=>{b.component=E;const O=E.vnode.props;E.vnode=b,E.next=null,UE(E,b.props,O,C),$E(E,b.children,C),vn(),_f(E),En()},ge=(E,b,C,O,U,V,G,W,H=!1)=>{const B=E&&E.children,ie=E?E.shapeFlag:0,Q=b.children,{patchFlag:ne,shapeFlag:ce}=b;if(ne>0){if(ne&128){tn(B,Q,C,O,U,V,G,W,H);return}else if(ne&256){Mt(B,Q,C,O,U,V,G,W,H);return}}ce&8?(ie&16&&Ot(B,U,V),Q!==B&&f(C,Q)):ie&16?ce&16?tn(B,Q,C,O,U,V,G,W,H):Ot(B,U,V,!0):(ie&8&&f(C,""),ce&16&&v(Q,C,O,U,V,G,W,H))},Mt=(E,b,C,O,U,V,G,W,H)=>{E=E||fs,b=b||fs;const B=E.length,ie=b.length,Q=Math.min(B,ie);let ne;for(ne=0;ne<Q;ne++){const ce=b[ne]=H?Pn(b[ne]):dn(b[ne]);P(E[ne],ce,C,null,U,V,G,W,H)}B>ie?Ot(E,U,V,!0,!1,Q):v(b,C,O,U,V,G,W,H,Q)},tn=(E,b,C,O,U,V,G,W,H)=>{let B=0;const ie=b.length;let Q=E.length-1,ne=ie-1;for(;B<=Q&&B<=ne;){const ce=E[B],oe=b[B]=H?Pn(b[B]):dn(b[B]);if(Or(ce,oe))P(ce,oe,C,null,U,V,G,W,H);else break;B++}for(;B<=Q&&B<=ne;){const ce=E[Q],oe=b[ne]=H?Pn(b[ne]):dn(b[ne]);if(Or(ce,oe))P(ce,oe,C,null,U,V,G,W,H);else break;Q--,ne--}if(B>Q){if(B<=ne){const ce=ne+1,oe=ce<ie?b[ce].el:O;for(;B<=ne;)P(null,b[B]=H?Pn(b[B]):dn(b[B]),C,oe,U,V,G,W,H),B++}}else if(B>ne)for(;B<=Q;)Fe(E[B],U,V,!0),B++;else{const ce=B,oe=B,pe=new Map;for(B=oe;B<=ne;B++){const ot=b[B]=H?Pn(b[B]):dn(b[B]);ot.key!=null&&pe.set(ot.key,B)}let Ee,Be=0;const Qe=ne-oe+1;let Kt=!1,gt=0;const Yn=new Array(Qe);for(B=0;B<Qe;B++)Yn[B]=0;for(B=ce;B<=Q;B++){const ot=E[B];if(Be>=Qe){Fe(ot,U,V,!0);continue}let Gt;if(ot.key!=null)Gt=pe.get(ot.key);else for(Ee=oe;Ee<=ne;Ee++)if(Yn[Ee-oe]===0&&Or(ot,b[Ee])){Gt=Ee;break}Gt===void 0?Fe(ot,U,V,!0):(Yn[Gt-oe]=B+1,Gt>=gt?gt=Gt:Kt=!0,P(ot,b[Gt],C,null,U,V,G,W,H),Be++)}const js=Kt?GE(Yn):fs;for(Ee=js.length-1,B=Qe-1;B>=0;B--){const ot=oe+B,Gt=b[ot],To=b[ot+1],Jr=ot+1<ie?To.el||Qm(To):O;Yn[B]===0?P(null,Gt,C,Jr,U,V,G,W,H):Kt&&(Ee<0||B!==js[Ee]?Wt(Gt,C,Jr,2):Ee--)}}},Wt=(E,b,C,O,U=null)=>{const{el:V,type:G,transition:W,children:H,shapeFlag:B}=E;if(B&6){Wt(E.component.subTree,b,C,O);return}if(B&128){E.suspense.move(b,C,O);return}if(B&64){G.move(E,b,C,te);return}if(G===Yt){r(V,b,C);for(let Q=0;Q<H.length;Q++)Wt(H[Q],b,C,O);r(E.anchor,b,C);return}if(G===Gc){j(E,b,C);return}if(O!==2&&B&1&&W)if(O===0)W.persisted&&!V[Qt]?r(V,b,C):(W.beforeEnter(V),r(V,b,C),Vt(()=>W.enter(V),U));else{const{leave:Q,delayLeave:ne,afterLeave:ce}=W,oe=()=>{E.ctx.isUnmounted?s(V):r(V,b,C)},pe=()=>{const Ee=V._isLeaving||!!V[Qt];V._isLeaving&&V[Qt](!0),W.persisted&&!Ee?oe():Q(V,()=>{oe(),ce&&ce()})};ne?ne(V,oe,pe):pe()}else r(V,b,C)},Fe=(E,b,C,O=!1,U=!1)=>{const{type:V,props:G,ref:W,children:H,dynamicChildren:B,shapeFlag:ie,patchFlag:Q,dirs:ne,cacheIndex:ce,memo:oe}=E;if(Q===-2&&(U=!1),W!=null&&(vn(),_i(W,null,C,E,!0),En()),ce!=null&&(b.renderCache[ce]=void 0),ie&256){b.ctx.deactivate(E);return}const pe=ie&1&&ne,Ee=!yi(E);let Be;if(Ee&&(Be=G&&G.onVnodeBeforeUnmount)&&un(Be,b,E),ie&6)Lt(E.component,C,O);else{if(ie&128){E.suspense.unmount(C,O);return}pe&&Sr(E,null,b,"beforeUnmount"),ie&64?E.type.remove(E,b,C,te,O):B&&!B.hasOnce&&(V!==Yt||Q>0&&Q&64)?Ot(B,b,C,!1,!0):(V===Yt&&Q&384||!U&&ie&16)&&Ot(H,b,C),O&&Ue(E)}const Qe=oe!=null&&ce==null;(Ee&&(Be=G&&G.onVnodeUnmounted)||pe||Qe)&&Vt(()=>{Be&&un(Be,b,E),pe&&Sr(E,null,b,"unmounted"),Qe&&(E.el=null)},C)},Ue=E=>{const{type:b,el:C,anchor:O,transition:U}=E;if(b===Yt){Qn(C,O);return}if(b===Gc){$(E);return}const V=()=>{s(C),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(E.shapeFlag&1&&U&&!U.persisted){const{leave:G,delayLeave:W}=U,H=()=>G(C,V);W?W(E.el,V,H):H()}else V()},Qn=(E,b)=>{let C;for(;E!==b;)C=m(E),s(E),E=C;s(b)},Lt=(E,b,C)=>{const{bum:O,scope:U,job:V,subTree:G,um:W,m:H,a:B}=E;Pf(H),Pf(B),O&&Qo(O),U.stop(),V&&(V.flags|=8,Fe(G,E,b,C)),W&&Vt(W,b),Vt(()=>{E.isUnmounted=!0},b)},Ot=(E,b,C,O=!1,U=!1,V=0)=>{for(let G=V;G<E.length;G++)Fe(E[G],b,C,O,U)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const b=m(E.anchor||E.el),C=b&&b[lE];return C?m(C):b};let J=!1;const z=(E,b,C)=>{let O;E==null?b._vnode&&(Fe(b._vnode,null,null,!0),O=b._vnode.component):P(b._vnode||null,E,b,null,null,null,C),b._vnode=E,J||(J=!0,_f(O),pm(),J=!1)},te={p:P,um:Fe,m:Wt,r:Ue,mt:Re,mc:v,pc:ge,pbc:I,n:M,o:t};return{render:z,hydrate:void 0,createApp:NE(z)}}function Kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function KE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gm(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Pn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Gm(o,c)),c.type===Za&&(c.patchFlag===-1&&(c=s[i]=Pn(c)),c.el=o.el),c.type===Nt&&!c.el&&(c.el=o.el)}}function GE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function zm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zm(e)}function Pf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Qm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Qm(e.subTree):null}const Ym=t=>t.__isSuspense;function zE(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):rE(t)}const Yt=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),Gc=Symbol.for("v-stc"),Ei=[];let Bt=null;function Ct(t=!1){Ei.push(Bt=t?null:[])}function QE(){Ei.pop(),Bt=Ei[Ei.length-1]||null}let Vi=1;function pa(t,e=!1){Vi+=t,t<0&&Bt&&e&&(Bt.hasOnce=!0)}function Jm(t){return t.dynamicChildren=Vi>0?Bt||fs:null,QE(),Vi>0&&Bt&&Bt.push(t),t}function Nn(t,e,n,r,s,i){return Jm(rn(t,e,n,r,s,i,!0))}function gs(t,e,n,r,s){return Jm(ft(t,e,n,r,s,!0))}function ma(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const Xm=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||He(t)||de(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function rn(t,e=null,n=null,r=0,s=null,i=t===Yt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xm(e),ref:e&&Jo(e),scopeId:gm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return c?(_a(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),Vi>0&&!o&&Bt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Bt.push(l),l}const ft=YE;function YE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Nm)&&(t=Nt),ma(t)){const c=gr(t,e,!0);return n&&_a(c,n),Vi>0&&!i&&Bt&&(c.shapeFlag&6?Bt[Bt.indexOf(t)]=c:Bt.push(c)),c.patchFlag=-2,c}if(aT(t)&&(t=t.__vccOpts),e){e=JE(e);let{class:c,style:l}=e;c&&!Le(c)&&(e.class=Ts(c)),Ce(l)&&(Ga(l)&&!re(l)&&(l=et({},l)),e.style=ou(l))}const o=Le(t)?1:Ym(t)?128:ym(t)?64:Ce(t)?4:de(t)?2:0;return rn(t,e,n,r,s,o,i,!0)}function JE(t){return t?Ga(t)||jm(t)?et({},t):t:null}function gr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?XE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Xm(u),ref:e&&e.ref?n&&i?re(i)?i.concat(Jo(e)):[i,Jo(e)]:Jo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Oi(f,l.clone(f)),f}function Zm(t=" ",e=0){return ft(Za,null,t,e)}function ga(t="",e=!1){return e?(Ct(),gs(Nt,null,t)):ft(Nt,null,t)}function dn(t){return t==null||typeof t=="boolean"?ft(Nt):re(t)?ft(Yt,null,t.slice()):ma(t)?Pn(t):ft(Za,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function _a(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_a(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!jm(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(de(e)){if(r&65){_a(t,{default:e});return}e={default:e,_ctx:Ut},n=32}else e=String(e),r&64?(n=16,e=[Zm(e)]):n=8;t.children=e,t.shapeFlag|=n}function XE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=ou([e.style,r.style]);else if(Fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Ua(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){en(t,e,7,[n,r])}const ZE=xm();let eT=0;function tT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ZE,i={uid:eT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$m(r,s),emitsOptions:Lm(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=DE.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const ec=()=>wt||Ut;let ya,Il;{const t=Ha(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ya=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),Il=e("__VUE_SSR_SETTERS__",n=>xi=n)}const eo=t=>{const e=wt;return ya(t),t.scope.on(),()=>{t.scope.off(),ya(e)}},Cf=()=>{wt&&wt.scope.off(),ya(null)};function eg(t){return t.vnode.shapeFlag&4}let xi=!1;function nT(t,e=!1,n=!1){e&&Il(e);const{props:r,children:s}=t.vnode,i=eg(t);FE(t,r,i,e),qE(t,s,n||e);const o=i?rT(t,e):void 0;return e&&Il(!1),o}function rT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,AE);const{setup:r}=n;if(r){vn();const s=t.setupContext=r.length>1?iT(t):null,i=eo(t),o=Zi(r,t,0,[t.props,s]),c=Up(o);if(En(),i(),(c||t.sp)&&!yi(t)&&bm(t),c){if(o.then(Cf,Cf),e)return o.then(l=>{kf(t,l)}).catch(l=>{za(l,t,0)});t.asyncDep=o}else kf(t,o)}else tg(t)}function kf(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=hm(e)),tg(t)}function tg(t,e,n){const r=t.type;t.render||(t.render=r.render||mn);{const s=eo(t);vn();try{bE(t)}finally{En(),s()}}}const sT={get(t,e){return Tt(t,"get",""),t[e]}};function iT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sT),slots:t.slots,emit:t.emit,expose:e}}function tc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hm(du(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}})):t.proxy}function oT(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function aT(t){return de(t)&&"__vccOpts"in t}const Me=(t,e)=>Xv(t,e,xi);function Mi(t,e,n){try{pa(-1);const r=arguments.length;return r===2?Ce(e)&&!re(e)?ma(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ma(n)&&(n=[n]),ft(t,e,n))}finally{pa(1)}}const cT="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Nf=typeof window<"u"&&window.trustedTypes;if(Nf)try{Al=Nf.createPolicy("vue",{createHTML:t=>t})}catch{}const ng=Al?t=>Al.createHTML(t):t=>t,lT="http://www.w3.org/2000/svg",uT="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Df=Sn&&Sn.createElement("template"),hT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(lT,t):e==="mathml"?Sn.createElementNS(uT,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Df.innerHTML=ng(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Df.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},er="transition",ni="animation",Li=Symbol("_vtc"),rg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fT=et({},vm,rg),dT=t=>(t.displayName="Transition",t.props=fT,t),pT=dT((t,{slots:e})=>Mi(fE,mT(t),e)),Cr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Of=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function mT(t){const e={};for(const A in t)A in rg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=gT(s),P=w&&w[0],N=w&&w[1],{onBeforeEnter:F,onEnter:x,onEnterCancelled:j,onLeave:$,onLeaveCancelled:X,onBeforeAppear:ee=F,onAppear:R=x,onAppearCancelled:v=j}=e,y=(A,T,Re,Ke)=>{A._enterCancelled=Ke,kr(A,T?f:c),kr(A,T?u:o),Re&&Re()},I=(A,T)=>{A._isLeaving=!1,kr(A,p),kr(A,g),kr(A,m),T&&T()},S=A=>(T,Re)=>{const Ke=A?R:x,ke=()=>y(T,A,Re);Cr(Ke,[T,ke]),Vf(()=>{kr(T,A?l:i),bn(T,A?f:c),Of(Ke)||xf(T,r,P,ke)})};return et(e,{onBeforeEnter(A){Cr(F,[A]),bn(A,i),bn(A,o)},onBeforeAppear(A){Cr(ee,[A]),bn(A,l),bn(A,u)},onEnter:S(!1),onAppear:S(!0),onLeave(A,T){A._isLeaving=!0;const Re=()=>I(A,T);bn(A,p),A._enterCancelled?(bn(A,m),Ff(A)):(Ff(A),bn(A,m)),Vf(()=>{A._isLeaving&&(kr(A,p),bn(A,g),Of($)||xf(A,r,N,Re))}),Cr($,[A,Re])},onEnterCancelled(A){y(A,!1,void 0,!0),Cr(j,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Cr(v,[A])},onLeaveCancelled(A){I(A),Cr(X,[A])}})}function gT(t){if(t==null)return null;if(Ce(t))return[zc(t.enter),zc(t.leave)];{const e=zc(t);return[e,e]}}function zc(t){return gv(t)}function bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Li]||(t[Li]=new Set)).add(e)}function kr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Li];n&&(n.delete(e),n.size||(t[Li]=void 0))}function Vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _T=0;function xf(t,e,n,r){const s=t._endId=++_T,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=yT(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function yT(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${er}Delay`),i=r(`${er}Duration`),o=Mf(s,i),c=r(`${ni}Delay`),l=r(`${ni}Duration`),u=Mf(c,l);let f=null,p=0,m=0;e===er?o>0&&(f=er,p=o,m=i.length):e===ni?u>0&&(f=ni,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?er:ni:null,m=f?f===er?i.length:l.length:0);const g=f===er&&/\b(?:transform|all)(?:,|$)/.test(r(`${er}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:g}}function Mf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Lf(n)+Lf(t[r])))}function Lf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ff(t){return(t?t.ownerDocument:document).body.offsetHeight}function vT(t,e,n){const r=t[Li];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Uf=Symbol("_vod"),ET=Symbol("_vsh"),TT=Symbol(""),wT=/(?:^|;)\s*display\s*:/;function IT(t,e,n){const r=t.style,s=Le(n);let i=!1;if(n&&!s){if(e)if(Le(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ci(r,c,"")}else for(const o in e)n[o]==null&&ci(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?bT(t,o,!Le(e)&&e?e[o]:void 0,c)||ci(r,o,c):ci(r,o,"")}}else if(s){if(e!==n){const o=r[TT];o&&(n+=";"+o),r.cssText=n,i=wT.test(n)}}else e&&t.removeAttribute("style");Uf in t&&(t[Uf]=i?r.display:"",t[ET]&&(r.display="none"))}const Bf=/\s*!important$/;function ci(t,e,n){if(re(n))n.forEach(r=>ci(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=AT(t,e);Bf.test(n)?t.setProperty(Wn(r),n.replace(Bf,""),"important"):t[r]=n}}const jf=["Webkit","Moz","ms"],Qc={};function AT(t,e){const n=Qc[e];if(n)return n;let r=It(e);if(r!=="filter"&&r in t)return Qc[e]=r;r=qa(r);for(let s=0;s<jf.length;s++){const i=jf[s]+r;if(i in t)return Qc[e]=i}return e}function bT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Le(r)&&n===r}const qf="http://www.w3.org/1999/xlink";function $f(t,e,n,r,s,i=wv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qf,e.slice(6,e.length)):t.setAttributeNS(qf,e,n):n==null||i&&!$p(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zt(n)?String(n):n)}function Hf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ng(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=$p(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function RT(t,e,n,r){t.removeEventListener(e,n,r)}const Wf=Symbol("_vei");function ST(t,e,n,r,s=null){const i=t[Wf]||(t[Wf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=kT(e);if(r){const u=i[e]=OT(r,s);Dn(t,c,u,l)}else o&&(RT(t,c,o,l),i[e]=void 0)}}const PT=/(Once|Passive|Capture)$/,CT=/^on:?(?:Once|Passive|Capture)$/;function kT(t){let e,n;for(;(n=t.match(PT))&&!CT.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Wn(t.slice(2)),e]}let Yc=0;const NT=Promise.resolve(),DT=()=>Yc||(NT.then(()=>Yc=0),Yc=Date.now());function OT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(re(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const u=o[l];u&&en(u,e,5,c)}}else en(s,e,5,[r])};return n.value=t,n.attached=DT(),n}const Kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,VT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?vT(t,r,o):e==="style"?IT(t,n,r):Fa(e)?Ua(e)||ST(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xT(t,e,r,o))?(Hf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$f(t,e,r,o,i,e!=="value")):t._isVueCE&&(MT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Le(r)))?Hf(t,It(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$f(t,e,r,o))};function xT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kf(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Le(n)?!1:e in t}function MT(t,e){const n=t._def.props;if(!n)return!1;const r=It(e);return Array.isArray(n)?n.some(s=>It(s)===r):Object.keys(n).some(s=>It(s)===r)}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Qo(e,n):e};function LT(t){t.target.composing=!0}function Gf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xt=Symbol("_assign");function zf(t,e,n){return e&&(t=t.trim()),n&&(t=$a(t)),t}const Qf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Xt]=_r(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{o.target.composing||t[Xt](zf(t.value,n,i))}),(n||i)&&Dn(t,"change",()=>{t.value=zf(t.value,n,i)}),e||(Dn(t,"compositionstart",LT),Dn(t,"compositionend",Gf),Dn(t,"change",Gf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Xt]=_r(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?$a(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},FT={deep:!0,created(t,e,n){t[Xt]=_r(n),Dn(t,"change",()=>{const r=t._modelValue,s=Is(t),i=t.checked,o=t[Xt];if(re(r)){const c=au(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Vs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(sg(t,i))})},mounted:Yf,beforeUpdate(t,e,n){t[Xt]=_r(n),Yf(t,e,n)}};function Yf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(re(e))s=au(e,r.props.value)>-1;else if(Vs(e))s=e.has(r.props.value);else{if(e===n)return;s=mr(e,sg(t,!0))}t.checked!==s&&(t.checked=s)}const UT={created(t,{value:e},n){t.checked=mr(e,n.props.value),t[Xt]=_r(n),Dn(t,"change",()=>{t[Xt](Is(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Xt]=_r(r),e!==n&&(t.checked=mr(e,r.props.value))}},BT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Vs(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$a(Is(o)):Is(o));t[Xt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Qa(()=>{t._assigning=!1})}),t[Xt]=_r(r)},mounted(t,{value:e}){Jf(t,e)},beforeUpdate(t,e,n){t[Xt]=_r(n)},updated(t,{value:e}){t._assigning||Jf(t,e)}};function Jf(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!Vs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Is(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=au(e,c)>-1}else o.selected=e.has(c);else if(mr(Is(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Is(t){return"_value"in t?t._value:t.value}function sg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ik={created(t,e,n){Bo(t,e,n,null,"created")},mounted(t,e,n){Bo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Bo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Bo(t,e,n,r,"updated")}};function jT(t,e){switch(t){case"SELECT":return BT;case"TEXTAREA":return Qf;default:switch(e){case"checkbox":return FT;case"radio":return UT;default:return Qf}}}function Bo(t,e,n,r,s){const o=jT(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const qT=["ctrl","shift","alt","meta"],$T={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qT.some(n=>t[`${n}Key`]&&!e.includes(n))},ok=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=$T[e[o]];if(c&&c(s,e))return}return t(s,...i)})},HT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ak=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Wn(s.key);if(e.some(o=>o===i||HT[o]===i))return t(s)})},WT=et({patchProp:VT},hT);let Xf;function KT(){return Xf||(Xf=HE(WT))}const GT=(...t)=>{const e=KT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=QT(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,zT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function QT(t){return Le(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ig;const to=t=>ig=t,og=Symbol();function bl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ti;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ti||(Ti={}));function YT(){const t=Gp(!0),e=t.run(()=>xt({}));let n=[],r=[];const s=du({install(i){to(s),s._a=i,i.provide(og,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ag=()=>{};function Zf(t,e,n,r=ag){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&zp()&&Av(s),s}function rs(t,...e){t.slice().forEach(n=>{n(...e)})}const JT=t=>t(),ed=Symbol(),Jc=Symbol();function Rl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bl(s)&&bl(r)&&t.hasOwnProperty(n)&&!He(r)&&!Mn(r)?t[n]=Rl(s,r):t[n]=r}return t}const XT=Symbol();function ZT(t){return!bl(t)||!t.hasOwnProperty(XT)}const{assign:rr}=Object;function ew(t){return!!(He(t)&&t.effect)}function tw(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=zv(n.state.value[t]);return rr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=du(Me(()=>{to(n);const g=n._s.get(t);return o[m].call(g,g)})),p),{}))}return l=cg(t,u,e,n,r,!0),l}function cg(t,e,n={},r,s,i){let o;const c=rr({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={});let P;function N(v){let y;u=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:Ti.patchFunction,storeId:t,events:g}):(Rl(r.state.value[t],v),y={type:Ti.patchObject,payload:v,storeId:t,events:g});const I=P=Symbol();Qa().then(()=>{P===I&&(u=!0)}),f=!0,rs(p,y,r.state.value[t])}const F=i?function(){const{state:y}=n,I=y?y():{};this.$patch(S=>{rr(S,I)})}:ag;function x(){o.stop(),p=[],m=[],r._s.delete(t)}const j=(v,y="")=>{if(ed in v)return v[Jc]=y,v;const I=function(){to(r);const S=Array.from(arguments),A=[],T=[];function Re(he){A.push(he)}function Ke(he){T.push(he)}rs(m,{args:S,name:I[Jc],store:X,after:Re,onError:Ke});let ke;try{ke=v.apply(this&&this.$id===t?this:X,S)}catch(he){throw rs(T,he),he}return ke instanceof Promise?ke.then(he=>(rs(A,he),he)).catch(he=>(rs(T,he),Promise.reject(he))):(rs(A,ke),ke)};return I[ed]=!0,I[Jc]=y,I},$={_p:r,$id:t,$onAction:Zf.bind(null,m),$patch:N,$reset:F,$subscribe(v,y={}){const I=Zf(p,v,y.detached,()=>S()),S=o.run(()=>ms(()=>r.state.value[t],A=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:Ti.direct,events:g},A)},rr({},l,y)));return I},$dispose:x},X=Xi($);r._s.set(t,X);const R=(r._a&&r._a.runWithContext||JT)(()=>r._e.run(()=>(o=Gp()).run(()=>e({action:j}))));for(const v in R){const y=R[v];if(He(y)&&!ew(y)||Mn(y))i||(w&&ZT(y)&&(He(y)?y.value=w[v]:Rl(y,w[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const I=j(y,v);R[v]=I,c.actions[v]=y}}return rr(X,R),rr(Te(X),R),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:v=>{N(y=>{rr(y,v)})}}),r._p.forEach(v=>{rr(X,o.run(()=>v({store:X,app:r._a,pinia:r,options:c})))}),w&&i&&n.hydrate&&n.hydrate(X.$state,w),u=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function no(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const u=sE();return c=c||(u?Jt(og,null):null),c&&to(c),c=ig,c._s.has(r)||(i?cg(r,e,s,c):tw(r,s,c)),c._s.get(r)}return o.$id=r,o}var td={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,g=u&63;l||(g=64,o||(m=64)),r.push(n[f],n[p],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new rw;const m=i<<2|c>>4;if(r.push(m),u!==64){const g=c<<4&240|u>>2;if(r.push(g),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sw=function(t){const e=lg(t);return ug.encodeByteArray(e,!0)},va=function(t){return sw(t).replace(/\./g,"")},hg=function(t){try{return ug.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=()=>iw().__FIREBASE_DEFAULTS__,aw=()=>{if(typeof process>"u"||typeof td>"u")return;const t=td.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hg(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return ow()||aw()||cw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fg=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lw=t=>{const e=fg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dg=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},pg=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function dw(){var t;const e=(t=nc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _w(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yw(){return!dw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tw,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ww(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,c,r)}}function ww(t,e){return t.replace(Iw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Iw=/\{\$([^}]+)}/g;function Aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nd(i)&&nd(o)){if(!Ea(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bw(t,e){const n=new Rw(t,e);return n.subscribe.bind(n)}class Rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xc),s.error===void 0&&(s.error=Xc),s.complete===void 0&&(s.complete=Xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kw(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cw(t){return t===Dr?void 0:t}function kw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const Dw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Ow=ye.INFO,Vw={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},xw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vu{constructor(e){this.name=e,this._logLevel=Ow,this._logHandler=xw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Mw=(t,e)=>e.some(n=>t instanceof n);let rd,sd;function Lw(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fw(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,Sl=new WeakMap,gg=new WeakMap,Zc=new WeakMap,Eu=new WeakMap;function Uw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,t)}).catch(()=>{}),Eu.set(e,t),e}function Bw(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jw(t){Pl=t(Pl)}function qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(el(this),e,...n);return gg.set(r,e.sort?e.sort():[e]),hr(r)}:Fw().includes(t)?function(...e){return t.apply(el(this),e),hr(mg.get(this))}:function(...e){return hr(t.apply(el(this),e))}}function $w(t){return typeof t=="function"?qw(t):(t instanceof IDBTransaction&&Bw(t),Mw(t,Lw())?new Proxy(t,Pl):t)}function hr(t){if(t instanceof IDBRequest)return Uw(t);if(Zc.has(t))return Zc.get(t);const e=$w(t);return e!==t&&(Zc.set(t,e),Eu.set(e,t)),e}const el=t=>Eu.get(t);function Hw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Ww=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],tl=new Map;function id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tl.get(e))return tl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ww.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return tl.set(e,i),i}jw(t=>({...t,get:(e,n,r)=>id(e,n)||t.get(e,n,r),has:(e,n)=>!!id(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",od="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new vu("@firebase/app"),Qw="@firebase/app-compat",Yw="@firebase/analytics-compat",Jw="@firebase/analytics",Xw="@firebase/app-check-compat",Zw="@firebase/app-check",eI="@firebase/auth",tI="@firebase/auth-compat",nI="@firebase/database",rI="@firebase/data-connect",sI="@firebase/database-compat",iI="@firebase/functions",oI="@firebase/functions-compat",aI="@firebase/installations",cI="@firebase/installations-compat",lI="@firebase/messaging",uI="@firebase/messaging-compat",hI="@firebase/performance",fI="@firebase/performance-compat",dI="@firebase/remote-config",pI="@firebase/remote-config-compat",mI="@firebase/storage",gI="@firebase/storage-compat",_I="@firebase/firestore",yI="@firebase/vertexai-preview",vI="@firebase/firestore-compat",EI="firebase",TI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="[DEFAULT]",wI={[Cl]:"fire-core",[Qw]:"fire-core-compat",[Jw]:"fire-analytics",[Yw]:"fire-analytics-compat",[Zw]:"fire-app-check",[Xw]:"fire-app-check-compat",[eI]:"fire-auth",[tI]:"fire-auth-compat",[nI]:"fire-rtdb",[rI]:"fire-data-connect",[sI]:"fire-rtdb-compat",[iI]:"fire-fn",[oI]:"fire-fn-compat",[aI]:"fire-iid",[cI]:"fire-iid-compat",[lI]:"fire-fcm",[uI]:"fire-fcm-compat",[hI]:"fire-perf",[fI]:"fire-perf-compat",[dI]:"fire-rc",[pI]:"fire-rc-compat",[mI]:"fire-gcs",[gI]:"fire-gcs-compat",[_I]:"fire-fst",[vI]:"fire-fst-compat",[yI]:"fire-vertex","fire-js":"fire-js",[EI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map,II=new Map,Nl=new Map;function ad(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(Nl.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,t);for(const n of Ta.values())ad(n,t);for(const n of II.values())ad(n,t);return!0}function Tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ro("app","Firebase",AI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=TI;function _g(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=dg()),!n)throw fr.create("no-options");const i=Ta.get(s);if(i){if(Ea(n,i.options)&&Ea(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new Nw(s);for(const l of Nl.values())o.addComponent(l);const c=new bI(n,r,o);return Ta.set(s,c),c}function yg(t=kl){const e=Ta.get(t);if(!e&&t===kl&&dg())return _g();if(!e)throw fr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let s=(r=wI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(c.join(" "));return}As(new Ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="firebase-heartbeat-database",SI=1,Fi="firebase-heartbeat-store";let nl=null;function vg(){return nl||(nl=Hw(RI,SI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),nl}async function PI(t){try{const n=(await vg()).transaction(Fi),r=await n.objectStore(Fi).get(Eg(t));return await n.done,r}catch(e){if(e instanceof Gn)Bn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function cd(t,e){try{const r=(await vg()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,Eg(t)),await r.done}catch(n){if(n instanceof Gn)Bn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Eg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=1024,kI=30*24*60*60*1e3;class NI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ld();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=kI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ld(),{heartbeatsToSend:r,unsentEntries:s}=DI(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function ld(){return new Date().toISOString().substring(0,10)}function DI(t,e=CI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ud(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ud(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vw()?Ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ud(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){As(new Ur("platform-logger",e=>new Gw(e),"PRIVATE")),As(new Ur("heartbeat",e=>new NI(e),"PRIVATE")),dr(Cl,od,t),dr(Cl,od,"esm2017"),dr("fire-js","")}VI("");function wu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xI=Tg,wg=new ro("auth","Firebase",Tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new vu("@firebase/auth");function MI(t,...e){wa.logLevel<=ye.WARN&&wa.warn(`Auth (${xs}): ${t}`,...e)}function Xo(t,...e){wa.logLevel<=ye.ERROR&&wa.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw Iu(t,...e)}function gn(t,...e){return Iu(t,...e)}function Ig(t,e,n){const r=Object.assign(Object.assign({},xI()),{[e]:n});return new ro("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return Ig(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Iu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wg.create(t,...e)}function ue(t,e,...n){if(!t)throw Iu(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xo(e),new Error(e)}function jn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LI(){return hd()==="http:"||hd()==="https:"}function hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LI()||mw()||"connection"in navigator)?navigator.onLine:!0}function UI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=fw()||gw()}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new io(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zn(t,e,n,r,s={}){return bg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=so(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return pw()||(u.referrerPolicy="no-referrer"),Ag.fetch()(Rg(t,t.config.apiHost,n,c),u)})}async function bg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BI),e);try{const s=new $I(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ig(t,f,u);an(t,f)}}catch(s){if(s instanceof Gn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function oo(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Au(t.config,s):`${t.config.apiScheme}://${s}`}function qI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $I{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),jI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function fd(t){return t!==void 0&&t.enterprise!==void 0}class HI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function WI(t,e){return zn(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function Sg(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GI(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=bu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wi(rl(s.auth_time)),issuedAtTime:wi(rl(s.iat)),expirationTime:wi(rl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rl(t){return Number(t)*1e3}function bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=hg(n);return s?JSON.parse(s):(Xo("Failed to decode base64 JWT payload"),null)}catch(s){return Xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dd(t){const e=bu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&zI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bs(t,Sg(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pg(i.providerUserInfo):[],c=JI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ol(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function YI(t){const e=We(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Pg(t){return t.map(e=>{var{providerId:n}=e,r=wu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){const n=await bg(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ag.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZI(t,e){return zn(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=dd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await XI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _s;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ol(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GI(this,e)}reload(){return YI(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await bs(this,KI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:$,isAnonymous:X,providerData:ee,stsTokenManager:R}=n;ue(j&&R,e,"internal-error");const v=_s.fromJSON(this.name,R);ue(typeof j=="string",e,"internal-error"),tr(p,e.name),tr(m,e.name),ue(typeof $=="boolean",e,"internal-error"),ue(typeof X=="boolean",e,"internal-error"),tr(g,e.name),tr(w,e.name),tr(P,e.name),tr(N,e.name),tr(F,e.name),tr(x,e.name);const y=new Vn({uid:j,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:X,photoURL:w,phoneNumber:g,tenantId:P,stsTokenManager:v,createdAt:F,lastLoginAt:x});return ee&&Array.isArray(ee)&&(y.providerData=ee.map(I=>Object.assign({},I))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new _s;s.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ia(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Pg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new _s;c.updateFromIdToken(r);const l=new Vn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ol(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;function xn(t){jn(t instanceof Function,"Expected a class definition");let e=pd.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cg.type="NONE";const md=Cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(xn(md),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xn(md);const o=Zo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const p=Vn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ys(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ys(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xg(e))return"Blackberry";if(Mg(e))return"Webos";if(Ng(e))return"Safari";if((e.includes("chrome/")||Dg(e))&&!e.includes("edge/"))return"Chrome";if(Vg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kg(t=At()){return/firefox\//i.test(t)}function Ng(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dg(t=At()){return/crios\//i.test(t)}function Og(t=At()){return/iemobile/i.test(t)}function Vg(t=At()){return/android/i.test(t)}function xg(t=At()){return/blackberry/i.test(t)}function Mg(t=At()){return/webos/i.test(t)}function Ru(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eA(t=At()){var e;return Ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tA(){return _w()&&document.documentMode===10}function Lg(t=At()){return Ru(t)||Vg(t)||Mg(t)||xg(t)||/windows phone/i.test(t)||Og(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e=[]){let n;switch(t){case"Browser":n=gd(At());break;case"Worker":n=`${gd(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e={}){return zn(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=6;class iA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sg(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Ln(this));const n=e?We(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),n=new iA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return We(t)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=bw(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(t){rc=t}function Ug(t){return rc.loadJS(t)}function cA(){return rc.recaptchaEnterpriseScript}function lA(){return rc.gapiScript}function uA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hA="recaptcha-enterprise",fA="NO_RECAPTCHA";class dA{constructor(e){this.type=hA,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{WI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new HI(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(fA)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&fd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cA();l.length!==0&&(l+=c),Ug(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function yd(t,e,n,r=!1){const s=new dA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await yd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e){const n=Tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ea(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function mA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gA(t,e,n){const r=Gr(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bg(e),{host:o,port:c}=_A(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),yA()}function Bg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _A(t){const e=Bg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vd(o)}}}function vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function vA(t,e){return zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return oo(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function wA(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Su{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vl(e,n,"signInWithPassword",EA);case"emailLink":return TA(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vl(e,r,"signUpPassword",vA);case"emailLink":return wA(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return oo(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="http://localhost";class Br extends Su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:IA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bA(t){const e=li(ui(t)).link,n=e?li(ui(e)).deep_link_id:null,r=li(ui(t)).deep_link_id;return(r?li(ui(r)).link:null)||r||n||e||t}class Pu{constructor(e){var n,r,s,i,o,c;const l=li(ui(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=AA((s=l.mode)!==null&&s!==void 0?s:null);ue(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=bA(e);try{return new Pu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pu.parseLink(n);return ue(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends jg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ao{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ao{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ao{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e){return oo(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vn._fromIdTokenResponse(e,r,s),o=Ed(r);return new jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ed(r);return new jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ed(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Aa(e,n,r,s)}}function qg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,i,e,r):i})}async function SA(t,e,n=!1){const r=await bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await bs(t,qg(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=bu(i.idToken);ue(o,r,"internal-error");const{sub:c}=o;return ue(t.uid===c,r,"user-mismatch"),jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t,e,n=!1){if(pn(t.app))return Promise.reject(Ln(t));const r="signIn",s=await qg(t,r,e),i=await jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CA(t,e){return $g(Gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kA(t,e,n){if(pn(t.app))return Promise.reject(Ln(t));const r=Gr(t),o=await Vl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Hg(t),l}),c=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function NA(t,e,n){return pn(t.app)?Promise.reject(Ln(t)):CA(We(t),Ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){return zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bs(r,DA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VA(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function xA(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function MA(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function LA(t){return We(t).signOut()}const ba="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=1e3,UA=10;class Kg extends Wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kg.type="LOCAL";const BA=Kg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends Wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gg.type="SESSION";const zg=Gg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await jA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Cu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function $A(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function HA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KA(){return Qg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="firebaseLocalStorageDb",GA=1,Ra="firebaseLocalStorage",Jg="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([Ra],e?"readwrite":"readonly").objectStore(Ra)}function zA(){const t=indexedDB.deleteDatabase(Yg);return new co(t).toPromise()}function xl(){const t=indexedDB.open(Yg,GA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ra,{keyPath:Jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ra)?e(r):(r.close(),await zA(),e(await xl()))})})}async function Td(t,e,n){const r=ic(t,!0).put({[Jg]:e,value:n});return new co(r).toPromise()}async function QA(t,e){const n=ic(t,!1).get(e),r=await new co(n).toPromise();return r===void 0?null:r.value}function wd(t,e){const n=ic(t,!0).delete(e);return new co(n).toPromise()}const YA=800,JA=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(KA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HA(),!this.activeServiceWorker)return;this.sender=new qA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xl();return await Td(e,ba,"1"),await wd(e,ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Td(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ic(s,!1).getAll();return new co(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const XA=Xg;new io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e){return e?xn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e0(t){return $g(t.auth,new ku(t),t.bypassAuthState)}function t0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),PA(n,new ku(t),t.bypassAuthState)}async function n0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),SA(n,new ku(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e0;case"linkViaPopup":case"linkViaRedirect":return n0;case"reauthViaPopup":case"reauthViaRedirect":return t0;default:an(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new io(2e3,1e4);class us extends Zg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r0.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="pendingRedirect",ea=new Map;class i0 extends Zg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const r=await o0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o0(t,e){const n=l0(e),r=c0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function a0(t,e){ea.set(t._key(),e)}function c0(t){return xn(t._redirectPersistence)}function l0(t){return Zo(s0,t.config.apiKey,t.name)}async function u0(t,e,n=!1){if(pn(t.app))return Promise.reject(Ln(t));const r=Gr(t),s=ZA(r,e),o=await new i0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=10*60*1e3;class f0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!e_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Id(e))}saveEventToCache(e){this.cachedEventUids.add(Id(e)),this.lastProcessedEventTime=Date.now()}}function Id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function e_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return e_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g0=/^https?/;async function _0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p0(t);for(const n of e)try{if(y0(n))return}catch{}an(t,"unauthorized-domain")}function y0(t){const e=Dl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g0.test(n))return!1;if(m0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new io(3e4,6e4);function Ad(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E0(t){return new Promise((e,n)=>{var r,s,i;function o(){Ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ad(),n(gn(t,"network-request-failed"))},timeout:v0.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const c=uA("iframefcb");return _n()[c]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},Ug(`${lA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ta=null,e})}let ta=null;function T0(t){return ta=ta||E0(t),ta}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new io(5e3,15e3),I0="__/auth/iframe",A0="emulator/auth/iframe",b0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S0(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Au(e,A0):`https://${t.config.authDomain}/${I0}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=R0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${so(r).slice(1)}`}async function P0(t){const e=await T0(t),n=_n().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:S0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),c=_n().setTimeout(()=>{i(o)},w0.get());function l(){_n().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k0=500,N0=600,D0="_blank",O0="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V0(t,e,n,r=k0,s=N0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},C0),{width:r.toString(),height:s.toString(),top:i,left:o}),u=At().toLowerCase();n&&(c=Dg(u)?D0:n),kg(u)&&(e=e||O0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,w])=>`${m}${g}=${w},`,"");if(eA(u)&&c!=="_self")return x0(e||"",c),new bd(null);const p=window.open(e||"",c,f);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new bd(p)}function x0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="__/auth/handler",L0="emulator/auth/handler",F0=encodeURIComponent("fac");async function Rd(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof jg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Aw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ao){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${F0}=${encodeURIComponent(l)}`:"";return`${U0(t)}?${so(c).slice(1)}${u}`}function U0({config:t}){return t.emulator?Au(t,L0):`https://${t.authDomain}/${M0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="webStorageSupport";class B0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zg,this._completeRedirectFn=u0,this._overrideRedirectResult=a0}async _openPopup(e,n,r,s){var i;jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rd(e,n,r,Dl(),s);return V0(e,o,Cu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rd(e,n,r,Dl(),s);return $A(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P0(e),r=new f0(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sl,{type:sl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sl];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lg()||Ng()||Ru()}}const j0=B0;var Sd="@firebase/auth",Pd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H0(t){As(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fg(t)},u=new oA(r,s,i,l);return mA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),As(new Ur("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new q0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Sd,Pd,$0(t)),dr(Sd,Pd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=5*60,K0=pg("authIdTokenMaxAge")||W0;let Cd=null;const G0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K0)return;const s=n==null?void 0:n.token;Cd!==s&&(Cd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function z0(t=yg()){const e=Tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pA(t,{popupRedirectResolver:j0,persistence:[XA,BA,zg]}),r=pg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=G0(i.toString());xA(n,o,()=>o(n.currentUser)),VA(n,c=>o(c))}}const s=fg("auth");return s&&gA(n,`http://${s}`),n}function Q0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Q0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H0("Browser");var kd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,t_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(I,S,A){for(var T=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)T[Re-2]=arguments[Re];return v.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)I[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],S=R.g[2];var A=R.g[3],T=v+(A^y&(S^A))+I[0]+3614090360&4294967295;v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[2]+606105819&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[3]+3250441966&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+I[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[6]+2821735955&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[7]+4249261313&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+I[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[10]+4294925233&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[11]+2304563134&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+I[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+I[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+I[14]+2792965006&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+I[15]+1236535329&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(S^A&(y^S))+I[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[11]+643717713&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[0]+3921069994&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+I[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[15]+3634488961&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[4]+3889429448&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+I[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[3]+4107603335&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[8]+1163531501&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+I[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+I[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+I[7]+1735328473&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+I[12]+2368359562&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(y^S^A)+I[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[11]+1839030562&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[14]+4259657740&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+I[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[7]+4139469664&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[10]+3200236656&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+I[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[3]+3572445317&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[6]+76029189&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+I[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+I[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+I[15]+530742520&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+I[2]+3299628645&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(S^(y|~A))+I[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[14]+2878612391&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[5]+4237533241&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+I[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[10]+4293915773&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[1]+2240044497&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+I[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[6]+2734768916&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[13]+1309151649&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+I[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+I[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+I[2]+718787259&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+A&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,I=this.B,S=this.h,A=0;A<v;){if(S==0)for(;A<=y;)s(this,R,A),A+=this.blockSize;if(typeof R=="string"){for(;A<v;)if(I[S++]=R.charCodeAt(A++),S==this.blockSize){s(this,I),S=0;break}}else for(;A<v;)if(I[S++]=R[A++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)R[y++]=this.g[v]>>>I&255;return R};function i(R,v){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;for(var y=[],I=!0,S=R.length-1;0<=S;S--){var A=R[S]|0;I&&A==v||(y[S]=A,I=!1)}this.g=y}var c={};function l(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return N(u(-R));for(var v=[],y=1,I=0;R>=y;I++)v[I]=R/y|0,y*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return N(f(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=p,S=0;S<R.length;S+=8){var A=Math.min(8,R.length-S),T=parseInt(R.substring(S,S+A),v);8>A?(A=u(Math.pow(v,A)),I=I.j(A).add(u(T))):(I=I.j(y),I=I.add(u(T)))}return I}var p=l(0),m=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);R+=(0<=I?I:4294967296+I)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(w(this))return"0";if(P(this))return"-"+N(this).toString(R);for(var v=u(Math.pow(R,6)),y=this,I="";;){var S=$(y,v).g;y=F(y,S.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=S,w(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function w(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function P(R){return R.h==-1}t.l=function(R){return R=F(this,R),P(R)?-1:w(R)?0:1};function N(R){for(var v=R.g.length,y=[],I=0;I<v;I++)y[I]=~R.g[I];return new o(y,~R.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0,S=0;S<=v;S++){var A=I+(this.i(S)&65535)+(R.i(S)&65535),T=(A>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);I=T>>>16,A&=65535,T&=65535,y[S]=T<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function F(R,v){return R.add(N(v))}t.j=function(R){if(w(this)||w(R))return p;if(P(this))return P(R)?N(this).j(N(R)):N(N(this).j(R));if(P(R))return N(this.j(N(R)));if(0>this.l(g)&&0>R.l(g))return u(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<R.g.length;S++){var A=this.i(I)>>>16,T=this.i(I)&65535,Re=R.i(S)>>>16,Ke=R.i(S)&65535;y[2*I+2*S]+=T*Ke,x(y,2*I+2*S),y[2*I+2*S+1]+=A*Ke,x(y,2*I+2*S+1),y[2*I+2*S+1]+=T*Re,x(y,2*I+2*S+1),y[2*I+2*S+2]+=A*Re,x(y,2*I+2*S+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function x(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function j(R,v){this.g=R,this.h=v}function $(R,v){if(w(v))throw Error("division by zero");if(w(R))return new j(p,p);if(P(R))return v=$(N(R),v),new j(N(v.g),N(v.h));if(P(v))return v=$(R,N(v)),new j(N(v.g),v.h);if(30<R.g.length){if(P(R)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=v;0>=I.l(R);)y=X(y),I=X(I);var S=ee(y,1),A=ee(I,1);for(I=ee(I,2),y=ee(y,2);!w(I);){var T=A.add(I);0>=T.l(R)&&(S=S.add(y),A=T),I=ee(I,1),y=ee(y,1)}return v=F(R,S.j(v)),new j(S,v)}for(S=p;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),T=A.j(v);P(T)||0<T.l(R);)y-=I,A=u(y),T=A.j(v);w(A)&&(A=m),S=S.add(A),R=F(R,T)}return new j(S,R)}t.A=function(R){return $(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&R.i(I);return new o(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|R.i(I);return new o(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^R.i(I);return new o(y,this.h^R.h)};function X(R){for(var v=R.g.length+1,y=[],I=0;I<v;I++)y[I]=R.i(I)<<1|R.i(I-1)>>>31;return new o(y,R.h)}function ee(R,v){var y=v>>5;v%=32;for(var I=R.g.length-y,S=[],A=0;A<I;A++)S[A]=0<v?R.i(A+y)>>>v|R.i(A+y+1)<<32-v:R.i(A+y);return new o(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,t_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Fr=o}).apply(typeof kd<"u"?kd:typeof self<"u"?self:typeof window<"u"?window:{});var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var n_,hi,r_,na,Ml,s_,i_,o_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qo=="object"&&qo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in d))break e;d=d[k]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,_=!1,k={next:function(){if(!_&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function g(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function w(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,k,D){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return h.prototype[k].apply(_,K)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(l(_)){const k=a.length||0,D=_.length||0;a.length=k+D;for(let K=0;K<D;K++)a[k+K]=_[K]}else a.push(_)}}class F{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var X=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ee(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function R(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(d in _)a[d]=_[d];for(let D=0;D<y.length;D++)d=y[D],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function S(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Mt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Re{constructor(){this.h=this.g=null}add(h,d){const _=Ke.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Ke=new F(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ge=!1,Mt=new Re,tn=()=>{const a=c.Promise.resolve(void 0);he=()=>{a.then(Wt)}};var Wt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){A(d)}var h=Ke;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ge=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Qn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function Lt(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{$(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ot[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Lt.aa.h.call(this)}}w(Lt,Ue);var Ot={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(a,h,d,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=k,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,d,_,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var K=b(a,h,_,k);return-1<K?(h=a[K],d||(h.fa=!1)):(h=new z(h,this.src,D,!!_,k),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var _=a.g[d],k=Array.prototype.indexOf.call(_,h,void 0),D;(D=0<=k)&&Array.prototype.splice.call(_,k,1),D&&(te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function b(a,h,d,_){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==_)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function U(a,h,d,_,k){if(Array.isArray(h)){for(var D=0;D<h.length;D++)U(a,h[D],d,_,k);return null}return d=ce(d),a&&a[M]?a.K(h,d,u(_)?!!_.capture:!1,k):V(a,h,d,!1,_,k)}function V(a,h,d,_,k,D){if(!h)throw Error("Invalid event type");var K=u(k)?!!k.capture:!!k,Ne=Q(a);if(Ne||(a[C]=Ne=new me(a)),d=Ne.add(h,d,_,K,D),d.proxy)return d;if(_=G(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)Qn||(k=K),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(B(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function W(a,h,d,_,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)W(a,h[D],d,_,k);else _=u(_)?!!_.capture:!!_,d=ce(d),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=b(D,d,_,k),-1<d&&(te(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,d,_,k)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])E(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(B(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[C]=null)):te(a)}}}function B(a){return a in O?O[a]:O[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Lt(h,this);var d=a.listener,_=a.ha||a.src;a.fa&&H(a),a=d.call(_,h)}return a}function Q(a){return a=a[C],a instanceof me?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function oe(){Fe.call(this),this.i=new me(this),this.M=this,this.F=null}w(oe,Fe),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(a,h,d,_){W(this,a,h,d,_)};function pe(a,h){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var k=h;h=new Ue(_,a),I(h,k)}if(k=!0,d)for(var D=d.length-1;0<=D;D--){var K=h.g=d[D];k=Ee(K,_,!0,h)&&k}if(K=h.g=a,k=Ee(K,_,!0,h)&&k,k=Ee(K,_,!1,h)&&k,d)for(D=0;D<d.length;D++)K=h.g=d[D],k=Ee(K,_,!1,h)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],_=0;_<d.length;_++)te(d[_]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},oe.prototype.L=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function Ee(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,D=0;D<h.length;++D){var K=h[D];if(K&&!K.da&&K.capture==d){var Ne=K.listener,at=K.ha||K.src;K.fa&&E(a.i,K),k=Ne.call(at,_)!==!1&&k}}return k&&!_.defaultPrevented}function Be(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Qe(a){a.g=Be(()=>{a.g=null,a.i&&(a.i=!1,Qe(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Kt extends Fe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(a){Fe.call(this),this.h=a,this.g={}}w(gt,Fe);var Yn=[];function js(a){ee(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}gt.prototype.N=function(){gt.aa.N.call(this),js(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ot=c.JSON.stringify,Gt=c.JSON.parse,To=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Jr(){}Jr.prototype.h=null;function Th(a){return a.h||(a.h=a.i())}function wh(){}var qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bc(){Ue.call(this,"d")}w(bc,Ue);function Rc(){Ue.call(this,"c")}w(Rc,Ue);var Ir={},Ih=null;function wo(){return Ih=Ih||new oe}Ir.La="serverreachability";function Ah(a){Ue.call(this,Ir.La,a)}w(Ah,Ue);function $s(a){const h=wo();pe(h,new Ah(h))}Ir.STAT_EVENT="statevent";function bh(a,h){Ue.call(this,Ir.STAT_EVENT,a),this.stat=h}w(bh,Ue);function bt(a){const h=wo();pe(h,new bh(h,a))}Ir.Ma="timingevent";function Rh(a,h){Ue.call(this,Ir.Ma,a),this.size=h}w(Rh,Ue);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ws(){this.g=!0}Ws.prototype.xa=function(){this.g=!1};function $y(a,h,d,_,k,D){a.info(function(){if(a.g)if(D)for(var K="",Ne=D.split("&"),at=0;at<Ne.length;at++){var Ie=Ne[at].split("=");if(1<Ie.length){var _t=Ie[0];Ie=Ie[1];var yt=_t.split("_");K=2<=yt.length&&yt[1]=="type"?K+(_t+"="+Ie+"&"):K+(_t+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+d+`
`+K})}function Hy(a,h,d,_,k,D,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+d+`
`+D+" "+K})}function Xr(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ky(a,d)+(_?" "+_:"")})}function Wy(a,h){a.info(function(){return"TIMEOUT: "+h})}Ws.prototype.info=function(){};function Ky(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return ot(d)}catch{return h}}var Io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sc;function Ao(){}w(Ao,Jr),Ao.prototype.g=function(){return new XMLHttpRequest},Ao.prototype.i=function(){return{}},Sc=new Ao;function Jn(a,h,d,_){this.j=a,this.i=h,this.l=d,this.R=_||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ph}function Ph(){this.i=null,this.g="",this.h=!1}var Ch={},Pc={};function Cc(a,h,d){a.L=1,a.v=Po(wn(h)),a.m=d,a.P=!0,kh(a,null)}function kh(a,h){a.F=Date.now(),bo(a),a.A=wn(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Hh(d.i,"t",_),a.C=0,d=a.j.J,a.h=new Ph,a.g=lf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Kt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Yn[0]=k.toString()),k=Yn);for(var D=0;D<k.length;D++){var K=U(d,k[D],_||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$s(),$y(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const yt=In(this.g);var h=this.g.Ba();const ts=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Jh(this.g)))){this.J||yt!=4||h==7||(h==8||0>=ts?$s(3):$s(2)),kc(this);var d=this.g.Z();this.X=d;t:if(Nh(this)){var _=Jh(this.g);a="";var k=_.length,D=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),Ks(this);var K="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(D&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,Hy(this.i,this.u,this.A,this.l,this.R,yt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,at=this.g;if((Ne=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ne)){var Ie=Ne;break t}}Ie=null}if(d=Ie)Xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nc(this,d);else{this.o=!1,this.s=3,bt(12),Ar(this),Ks(this);break e}}if(this.P){d=!0;let nn;for(;!this.J&&this.C<K.length;)if(nn=Gy(this,K),nn==Pc){yt==4&&(this.s=4,bt(14),d=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Ch){this.s=4,bt(15),Xr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Xr(this.i,this.l,nn,null),Nc(this,nn);if(Nh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||K.length!=0||this.h.h||(this.s=1,bt(16),d=!1),this.o=this.o&&d,!d)Xr(this.i,this.l,K,"[Invalid Chunked Response]"),Ar(this),Ks(this);else if(0<K.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Lc(_t),_t.M=!0,bt(11))}}else Xr(this.i,this.l,K,null),Nc(this,K);yt==4&&Ar(this),this.o&&!this.J&&(yt==4?sf(this.j,this):(this.o=!1,bo(this)))}else uv(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Ar(this),Ks(this)}}}catch{}finally{}};function Nh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Gy(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?Pc:(d=Number(h.substring(d,_)),isNaN(d)?Ch:(_+=1,_+d>h.length?Pc:(h=h.slice(_,_+d),a.C=_+d,h)))}Jn.prototype.cancel=function(){this.J=!0,Ar(this)};function bo(a){a.S=Date.now()+a.I,Dh(a,a.I)}function Dh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hs(m(a.ba,a),h)}function kc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Wy(this.i,this.A),this.L!=2&&($s(),bt(17)),Ar(this),this.s=2,Ks(this)):Dh(this,this.S-a)};function Ks(a){a.j.G==0||a.J||sf(a.j,a)}function Ar(a){kc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,js(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Nc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Dc(d.h,a))){if(!a.K&&Dc(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Vo(d),Do(d);else break e;Mc(d),bt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Hs(m(d.Za,d),6e3));if(1>=xh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Rr(d,11)}else if((a.K||d.g==a)&&Vo(d),!x(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Ie=k[h];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const _t=Ie[3];_t!=null&&(d.la=_t,d.j.info("VER="+d.la));const yt=Ie[4];yt!=null&&(d.Aa=yt,d.j.info("SVER="+d.Aa));const ts=Ie[5];ts!=null&&typeof ts=="number"&&0<ts&&(_=1.5*ts,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const nn=a.g;if(nn){const Mo=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var D=_.h;D.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Oc(D,D.h),D.h=null))}if(_.D){const Fc=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fc&&(_.ya=Fc,xe(_.I,_.D,Fc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var K=a;if(_.qa=cf(_,_.J?_.ia:null,_.W),K.K){Mh(_.h,K);var Ne=K,at=_.L;at&&(Ne.I=at),Ne.B&&(kc(Ne),bo(Ne)),_.g=K}else nf(_);0<d.i.length&&Oo(d)}else Ie[0]!="stop"&&Ie[0]!="close"||Rr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Rr(d,7):xc(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}$s(4)}catch{}}var zy=class{constructor(a,h){this.g=a,this.map=h}};function Oh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xh(a){return a.h?1:a.g?a.g.size:0}function Dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oc(a,h){a.g?a.g.add(h):a.h=h}function Mh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Oh.prototype.cancel=function(){if(this.i=Lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function Qy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,_=0;_<d;_++)h.push(a[_]);return h}h=[],d=0;for(_ in a)h[d++]=a[_];return h}function Yy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const _ in a)h[d++]=_;return h}}}function Fh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Yy(a),_=Qy(a),k=_.length,D=0;D<k;D++)h.call(void 0,_[D],d&&d[D],a)}var Uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jy(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),k=null;if(0<=_){var D=a[d].substring(0,_);k=a[d].substring(_+1)}else D=a[d];h(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,Ro(this,a.j),this.o=a.o,this.g=a.g,So(this,a.s),this.l=a.l;var h=a.i,d=new Qs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Bh(this,d),this.m=a.m}else a&&(h=String(a).match(Uh))?(this.h=!1,Ro(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),So(this,h[4]),this.l=Gs(h[5]||"",!0),Bh(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.h=!1,this.i=new Qs(null,this.h))}br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zs(h,jh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zs(h,jh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zs(d,d.charAt(0)=="/"?ev:Zy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zs(d,nv)),a.join("")};function wn(a){return new br(a)}function Ro(a,h,d){a.j=d?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function So(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Bh(a,h,d){h instanceof Qs?(a.i=h,rv(a.i,a.h)):(d||(h=zs(h,tv)),a.i=new Qs(h,a.h))}function xe(a,h,d){a.i.set(h,d)}function Po(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Xy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jh=/[#\/\?@]/g,Zy=/[#\?:]/g,ev=/[#\?]/g,tv=/[#\?@]/g,nv=/#/g;function Qs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Jy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Qs.prototype,t.add=function(a,h){Xn(this),this.i=null,a=Zr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function qh(a,h){Xn(a),h=Zr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $h(a,h){return Xn(a),h=Zr(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(d,_){d.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let _=0;_<h.length;_++){const k=a[_];for(let D=0;D<k.length;D++)d.push(h[_])}return d},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")$h(this,a)&&(h=h.concat(this.g.get(Zr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=Zr(this,a),$h(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Hh(a,h,d){qh(a,h),0<d.length&&(a.i=null,a.g.set(Zr(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var _=h[d];const D=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var k=D;K[_]!==""&&(k+="="+encodeURIComponent(String(K[_]))),a.push(k)}}return this.i=a.join("&")};function Zr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function rv(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(d,_){var k=_.toLowerCase();_!=k&&(qh(this,_),Hh(this,k,d))},a)),a.j=h}function sv(a,h){const d=new Ws;if(c.Image){const _=new Image;_.onload=g(Zn,d,"TestLoadImage: loaded",!0,h,_),_.onerror=g(Zn,d,"TestLoadImage: error",!1,h,_),_.onabort=g(Zn,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(Zn,d,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function iv(a,h){const d=new Ws,_=new AbortController,k=setTimeout(()=>{_.abort(),Zn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(k),D.ok?Zn(d,"TestPingServer: ok",!0,h):Zn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Zn(d,"TestPingServer: error",!1,h)})}function Zn(a,h,d,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(d)}catch{}}function ov(){this.g=new To}function av(a,h,d){const _=d||"";try{Fh(a,function(k,D){let K=k;u(k)&&(K=ot(k)),h.push(_+D+"="+encodeURIComponent(K))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function Co(a){this.l=a.Ub||null,this.j=a.eb||!1}w(Co,Jr),Co.prototype.g=function(){return new ko(this.l,this.j)},Co.prototype.i=function(a){return function(){return a}}({});function ko(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(ko,oe),t=ko.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Js(this),this.readyState==3&&Wh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Qa=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Js(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kh(a){let h="";return ee(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function Vc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Kh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):xe(a,h,d))}function qe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(qe,oe);var cv=/^https?$/i,lv=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sc.g(),this.v=this.o?Th(this.o):Th(Sc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Gh(this,D);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)d.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())d.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(lv,h,void 0))||_||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of d)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Gh(this,D)}};function Gh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,zh(a),No(a)}function zh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),No(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qh(this):this.bb())},t.bb=function(){Qh(this)};function Qh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)Be(a.Ea,0,a);else if(pe(a,"readystatechange"),In(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=K===0){var k=String(a.D).match(Uh)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),_=!cv.test(k?k.toLowerCase():"")}d=_}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var D=2<In(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",zh(a)}}finally{No(a)}}}}function No(a,h){if(a.g){Yh(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=_}catch{}}}function Yh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Gt(h)}};function Jh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uv(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(x(a[_]))continue;var d=S(a[_]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[k]||[];h[k]=D,D.push(d)}R(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Xh(a){this.Aa=0,this.i=[],this.j=new Ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,a),this.cb=Xs("retryDelaySeedMs",1e4,a),this.Wa=Xs("forwardChannelMaxRetries",2,a),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Oh(a&&a.concurrentRequestLimit),this.Da=new ov,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,_){bt(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=cf(this,null,this.W),Oo(this)};function xc(a){if(Zh(a),a.G==3){var h=a.U++,d=wn(a.I);if(xe(d,"SID",a.K),xe(d,"RID",h),xe(d,"TYPE","terminate"),Zs(a,d),h=new Jn(a,a.j,h),h.L=2,h.v=Po(wn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=lf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),bo(h)}af(a)}function Do(a){a.g&&(Lc(a),a.g.cancel(),a.g=null)}function Zh(a){Do(a),a.u&&(c.clearTimeout(a.u),a.u=null),Vo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Oo(a){if(!Vh(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||tn(),ge||(he(),ge=!0),Mt.add(h,a),a.B=0}}function hv(a,h){return xh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hs(m(a.Ga,a,h),of(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=tf(this,k,h),d=wn(this.I),xe(d,"RID",a),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),Zs(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(Kh(D)))+"&"+h:this.m&&Vc(d,this.m,D)),Oc(this.h,k),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",h),xe(d,"SID","null"),k.T=!0,Cc(k,d,null)):Cc(k,d,h),this.G=2}}else this.G==3&&(a?ef(this,a):this.i.length==0||Vh(this.h)||ef(this))};function ef(a,h){var d;h?d=h.l:d=a.U++;const _=wn(a.I);xe(_,"SID",a.K),xe(_,"RID",d),xe(_,"AID",a.T),Zs(a,_),a.m&&a.o&&Vc(_,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=tf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oc(a.h,d),Cc(d,_,h)}function Zs(a,h){a.H&&ee(a.H,function(d,_){xe(h,_,d)}),a.l&&Fh({},function(d,_){xe(h,_,d)})}function tf(a,h,d){d=Math.min(a.i.length,d);var _=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const K=["count="+d];D==-1?0<d?(D=k[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let Ne=!0;for(let at=0;at<d;at++){let Ie=k[at].g;const _t=k[at].map;if(Ie-=D,0>Ie)D=Math.max(0,k[at].g-100),Ne=!1;else try{av(_t,K,"req"+Ie+"_")}catch{_&&_(_t)}}if(Ne){_=K.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,_}function nf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||tn(),ge||(he(),ge=!0),Mt.add(h,a),a.v=0}}function Mc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hs(m(a.Fa,a),of(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Do(this),rf(this))};function Lc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function rf(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),Zs(a,h),a.m&&a.o&&Vc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Po(wn(h)),d.m=null,d.P=!0,kh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Do(this),Mc(this),bt(19))};function Vo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function sf(a,h){var d=null;if(a.g==h){Vo(a),Lc(a),a.g=null;var _=2}else if(Dc(a.h,h))d=h.D,Mh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=wo(),pe(_,new Rh(_,d)),Oo(a)}else nf(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&hv(a,h)||_==2&&Mc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function of(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),_=a.Xa;const k=!_;_=new br(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ro(_,"https"),Po(_),k?sv(_.toString(),d):iv(_.toString(),d)}else bt(2);a.G=0,a.l&&a.l.sa(h),af(a),Zh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function af(a){if(a.G=0,a.ka=[],a.l){const h=Lh(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function cf(a,h,d){var _=d instanceof br?wn(d):new br(d);if(_.g!="")h&&(_.g=h+"."+_.g),So(_,_.s);else{var k=c.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var D=new br(null);_&&Ro(D,_),h&&(D.g=h),k&&So(D,k),d&&(D.l=d),_=D}return d=a.D,h=a.ya,d&&h&&xe(_,d,h),xe(_,"VER",a.la),Zs(a,_),_}function lf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new qe(new Co({eb:d})):new qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function uf(){}t=uf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xo(){}xo.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){oe.call(this),this.g=new Xh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new es(this)}w(Ft,oe),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){xc(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ot(a),a=d);h.i.push(new zy(h.Ya++,a)),h.G==3&&Oo(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,Ft.aa.N.call(this)};function hf(a){bc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}w(hf,bc);function ff(){Rc.call(this),this.status=1}w(ff,Rc);function es(a){this.g=a}w(es,uf),es.prototype.ua=function(){pe(this.g,"a")},es.prototype.ta=function(a){pe(this.g,new hf(a))},es.prototype.sa=function(a){pe(this.g,new ff)},es.prototype.ra=function(){pe(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,o_=function(){return new xo},i_=function(){return wo()},s_=Ir,Ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Io.NO_ERROR=0,Io.TIMEOUT=8,Io.HTTP_ERROR=6,na=Io,Sh.COMPLETE="complete",r_=Sh,wh.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,hi=wh,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,n_=qe}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});const Nd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new vu("@firebase/firestore");function ri(){return qr.logLevel}function Z(t,...e){if(qr.logLevel<=ye.DEBUG){const n=e.map(Nu);qr.debug(`Firestore (${Ls}): ${t}`,...n)}}function qn(t,...e){if(qr.logLevel<=ye.ERROR){const n=e.map(Nu);qr.error(`Firestore (${Ls}): ${t}`,...n)}}function Rs(t,...e){if(qr.logLevel<=ye.WARN){const n=e.map(Nu);qr.warn(`Firestore (${Ls}): ${t}`,...n)}}function Nu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function we(t,e){t||ae()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class J0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class X0{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new a_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Et(e)}}class Z0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Z0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new tb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new rt(0,0))}static max(){return new le(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Bi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const sb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Bi{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return sb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Oe.fromString(e))}static fromName(e){return new se(Oe.fromString(e).popFirst(5))}static empty(){return new se(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Oe(e.slice()))}}function ib(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new yr(s,se.empty(),e)}function ob(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(le.min(),se.empty(),-1)}static max(){return new yr(le.max(),se.empty(),-1)}}function ab(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==cb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ub(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Du.oe=-1;function ho(t){return t==null}function Sa(t){return t===0&&1/t==-1/0}function hb(t){return typeof t=="number"&&Number.isInteger(t)&&!Sa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function l_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $o(this.root,e,this.comparator,!1)}getReverseIterator(){return new $o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $o(this.root,e,this.comparator,!0)}}class $o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Od(this.data.getIterator())}getIteratorFrom(e){return new Od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new jt([])}unionWith(e){let n=new dt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new u_("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const fb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(we(!!t),typeof t=="string"){let e=0;const n=fb.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vu(t){const e=t.mapValue.fields.__previous_value__;return Ou(e)?Vu(e):e}function ji(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class qi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={mapValue:{}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ou(t)?4:mb(t)?9007199254740991:pb(t)?10:11:ae()}function Tn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vr(s.timestampValue),c=vr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return $r(s.bytesValue).isEqual($r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),c=Ge(i.doubleValue);return o===c?Sa(o)===Sa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Dd(o)!==Dd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Tn(o[l],c[l])))return!1;return!0}(t,e);default:return ae()}}function $i(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Vd(t.timestampValue,e.timestampValue);case 4:return Vd(ji(t),ji(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const c=$r(i),l=$r(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Ae(c[u],l[u]);if(f!==0)return f}return Ae(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ae(Ge(i.latitude),Ge(o.latitude));return c!==0?c:Ae(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,f;const p=i.fields||{},m=o.fields||{},g=(c=p.value)===null||c===void 0?void 0:c.arrayValue,w=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=Ae(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((f=w==null?void 0:w.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:xd(g,w)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ho.mapValue&&o===Ho.mapValue)return 0;if(i===Ho.mapValue)return 1;if(o===Ho.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Ae(l[p],f[p]);if(m!==0)return m;const g=Ps(c[l[p]],u[f[p]]);if(g!==0)return g}return Ae(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Vd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=vr(t),r=vr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function xd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ps(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function Cs(t){return Ll(t)}function Ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ll(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ll(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function Md(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fl(t){return!!t&&"integerValue"in t}function xu(t){return!!t&&"arrayValue"in t}function Ld(t){return!!t&&"nullValue"in t}function Fd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ra(t){return!!t&&"mapValue"in t}function pb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ii(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ra(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Ii(this.value))}}function h_(t){const e=[];return zr(t.fields,(n,r)=>{const s=new ut([n]);if(ra(r)){const i=h_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new it(e,0,le.min(),le.min(),le.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,le.min(),le.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,le.min(),le.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.position=e,this.inclusive=n}}function Ud(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n="asc"){this.field=e,this.dir=n}}function gb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{}class Xe extends f_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yb(e,n,r):n==="array-contains"?new Tb(e,r):n==="in"?new wb(e,r):n==="not-in"?new Ib(e,r):n==="array-contains-any"?new Ab(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vb(e,r):new Eb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends f_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return d_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function d_(t){return t.op==="and"}function p_(t){return _b(t)&&d_(t)}function _b(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Ul(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(p_(t))return t.filters.map(e=>Ul(e)).join(",");{const e=t.filters.map(n=>Ul(n)).join(",");return`${t.op}(${e})`}}function m_(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&m_(o,s.filters[c]),!0):!1}(t,e):void ae()}function g_(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(g_).join(" ,")+"}"}(t):"Filter"}class yb extends Xe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class vb extends Xe{constructor(e,n){super(e,"in",n),this.keys=__("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Eb extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=__("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function __(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class Tb extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xu(n)&&$i(n.arrayValue,this.value)}}class wb extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$i(this.value.arrayValue,n)}}class Ib extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$i(this.value.arrayValue,n)}}class Ab extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$i(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function jd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new bb(t,e,n,r,s,i,o)}function Mu(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ul(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ho(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=n}return e.ue}function Lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!m_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bd(t.startAt,e.startAt)&&Bd(t.endAt,e.endAt)}function Bl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rb(t,e,n,r,s,i,o,c){return new Fs(t,e,n,r,s,i,o,c)}function oc(t){return new Fs(t)}function qd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function y_(t){return t.collectionGroup!==null}function Ai(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new dt(ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Hi(i,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new Hi(ut.keyField(),r))}return e.ce}function yn(t){const e=fe(t);return e.le||(e.le=Sb(e,Ai(t))),e.le}function Sb(t,e){if(t.limitType==="F")return jd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hi(s.field,i)});const n=t.endAt?new Pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pa(t.startAt.position,t.startAt.inclusive):null;return jd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jl(t,e){const n=t.filters.concat([e]);return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ql(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return Lu(yn(t),yn(e))&&t.limitType===e.limitType}function v_(t){return`${Mu(yn(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>g_(s)).join(", ")}]`),ho(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Ud(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ai(r),s)||r.endAt&&!function(o,c,l){const u=Ud(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ai(r),s))}(t,e)}function Pb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function E_(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=Cb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Cb(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ps(l,u):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return l_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new je(se.comparator);function $n(){return kb}const T_=new je(se.comparator);function fi(...t){let e=T_;for(const n of t)e=e.insert(n.key,n);return e}function w_(t){let e=T_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return bi()}function I_(){return bi()}function bi(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nb=new je(se.comparator),Db=new dt(se.comparator);function _e(...t){let e=Db;for(const n of t)e=e.add(n);return e}const Ob=new dt(Ae);function Vb(){return Ob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(e)?"-0":e}}function A_(t){return{integerValue:""+t}}function xb(t,e){return hb(e)?A_(e):Fu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this._=void 0}}function Mb(t,e,n){return t instanceof Wi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ou(i)&&(i=Vu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ki?R_(t,e):t instanceof Gi?S_(t,e):function(s,i){const o=b_(s,i),c=$d(o)+$d(s.Pe);return Fl(o)&&Fl(s.Pe)?A_(c):Fu(s.serializer,c)}(t,e)}function Lb(t,e,n){return t instanceof Ki?R_(t,e):t instanceof Gi?S_(t,e):n}function b_(t,e){return t instanceof Ca?function(r){return Fl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wi extends lc{}class Ki extends lc{constructor(e){super(),this.elements=e}}function R_(t,e){const n=P_(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends lc{constructor(e){super(),this.elements=e}}function S_(t,e){let n=P_(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class Ca extends lc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function $d(t){return Ge(t.integerValue||t.doubleValue)}function P_(t){return xu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.field=e,this.transform=n}}function Ub(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ki&&s instanceof Ki||r instanceof Gi&&s instanceof Gi?Ss(r.elements,s.elements,Tn):r instanceof Ca&&s instanceof Ca?Tn(r.Pe,s.Pe):r instanceof Wi&&s instanceof Wi}(t.transform,e.transform)}class Bb{constructor(e,n){this.version=e,this.transformResults=n}}class ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function C_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hc(t.key,ht.none()):new fo(t.key,t.data,ht.none());{const n=t.data,r=Dt.empty();let s=new dt(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wr(t.key,r,new jt(s.toArray()),ht.none())}}function jb(t,e,n){t instanceof fo?function(s,i,o){const c=s.value.clone(),l=Wd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(s,i,o){if(!sa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Wd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(k_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ri(t,e,n,r){return t instanceof fo?function(i,o,c,l){if(!sa(i.precondition,o))return c;const u=i.value.clone(),f=Kd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(i,o,c,l){if(!sa(i.precondition,o))return c;const u=Kd(i.fieldTransforms,l,o),f=o.data;return f.setAll(k_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return sa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function qb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=b_(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function Hd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ss(r,s,(i,o)=>Ub(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends uc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wr extends uc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function k_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wd(t,e,n){const r=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Lb(o,c,n[s]))}return r}function Kd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Mb(i,o,e))}return r}class hc extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class N_ extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=C_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>Hd(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>Hd(n,r))}}class Uu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length);let s=function(){return Nb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Uu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,ve;function D_(t){switch(t){default:return ae();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function O_(t){if(t===void 0)return qn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ye.OK:return L.OK;case Ye.CANCELLED:return L.CANCELLED;case Ye.UNKNOWN:return L.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return L.INTERNAL;case Ye.UNAVAILABLE:return L.UNAVAILABLE;case Ye.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ye.NOT_FOUND:return L.NOT_FOUND;case Ye.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ye.ABORTED:return L.ABORTED;case Ye.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ye.DATA_LOSS:return L.DATA_LOSS;default:return ae()}}(ve=Ye||(Ye={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Fr([4294967295,4294967295],0);function Gd(t){const e=Kb().encode(t),n=new t_;return n.update(e),new Uint8Array(n.digest())}function zd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([s,i],0)]}class Bu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new di(`Invalid padding: ${n}`);if(r<0)throw new di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new di(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Fr.fromNumber(r)));return s.compare(Gb)===1&&(s=new Fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Gd(e),[r,s]=zd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Gd(e),[r,s]=zd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(le.min(),s,new je(Ae),$n(),_e())}}class po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new po(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class V_{constructor(e,n){this.targetId=e,this.me=n}}class x_{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qd{constructor(){this.fe=0,this.ge=Jd(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new po(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Jd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zb{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=Yd(),this.Qe=new je(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Bl(i))if(r===0){const o=new se(i.path);this.Ue(n,o,it.newNoDocument(o,le.min()))}else we(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=$r(r).toUint8Array()}catch(l){if(l instanceof u_)return Rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Bu(o,s,i)}catch(l){return Rs(l instanceof di?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Bl(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,it.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.Qe,this.ke,r);return this.ke=$n(),this.qe=Yd(),this.Qe=new je(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Qd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new dt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Qd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Yd(){return new je(se.comparator)}function Jd(){return new je(se.comparator)}const Qb={asc:"ASCENDING",desc:"DESCENDING"},Yb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jb={and:"AND",or:"OR"};class Xb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||ho(e)?e:{value:e}}function ka(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zb(t,e){return ka(t,e.toTimestamp())}function $t(t){return we(!!t),le.fromTimestamp(function(n){const r=vr(n);return new rt(r.seconds,r.nanos)}(t))}function ju(t,e){return Hl(t,e).canonicalString()}function Hl(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function L_(t){const e=Oe.fromString(t);return we($_(e)),e}function Na(t,e){return ju(t.databaseId,e.path)}function Si(t,e){const n=L_(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(U_(n))}function F_(t,e){return ju(t.databaseId,e)}function eR(t){const e=L_(t);return e.length===4?Oe.emptyPath():U_(e)}function Wl(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function U_(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xd(t,e,n){return{name:Na(t,e),fields:n.value.mapValue.fields}}function tR(t,e){return"found"in e?function(r,s){we(!!s.found),s.found.name,s.found.updateTime;const i=Si(r,s.found.name),o=$t(s.found.updateTime),c=s.found.createTime?$t(s.found.createTime):le.min(),l=new Dt({mapValue:{fields:s.found.fields}});return it.newFoundDocument(i,o,c,l)}(t,e):"missing"in e?function(r,s){we(!!s.missing),we(!!s.readTime);const i=Si(r,s.missing),o=$t(s.readTime);return it.newNoDocument(i,o)}(t,e):ae()}function nR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(we(f===void 0||typeof f=="string"),mt.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),mt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?L.UNKNOWN:O_(u.code);return new Y(f,u.message||"")}(o);n=new x_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Si(t,r.document.name),i=$t(r.document.updateTime),o=r.document.createTime?$t(r.document.createTime):le.min(),c=new Dt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ia(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Si(t,r.document),i=r.readTime?$t(r.readTime):le.min(),o=it.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ia([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Si(t,r.document),i=r.removedTargetIds||[];n=new ia([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Wb(s,i),c=r.targetId;n=new V_(c,o)}}return n}function B_(t,e){let n;if(e instanceof fo)n={update:Xd(t,e.key,e.value)};else if(e instanceof hc)n={delete:Na(t,e.key)};else if(e instanceof wr)n={update:Xd(t,e.key,e.data),updateMask:hR(e.fieldMask)};else{if(!(e instanceof N_))return ae();n={verify:Na(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ca)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Zb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function rR(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?$t(s.updateTime):$t(i);return o.isEqual(le.min())&&(o=$t(i)),new Bb(o,s.transformResults||[])}(n,e))):[]}function sR(t,e){return{documents:[F_(t,e.path)]}}function iR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=F_(t,s);const i=function(u){if(u.length!==0)return q_(cn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:os(m.field),direction:cR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=$l(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function oR(t){let e=eR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=j_(p);return m instanceof cn&&p_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(w){return new Hi(as(w.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,ho(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,g=p.values||[];return new Pa(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,g=p.values||[];return new Pa(g,m)}(n.endAt)),Rb(e,s,o,i,c,"F",l,u)}function aR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function j_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=as(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(as(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>j_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function cR(t){return Qb[t]}function lR(t){return Yb[t]}function uR(t){return Jb[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return ut.fromServerFormat(t.fieldPath)}function q_(t){return t instanceof Xe?function(n){if(n.op==="=="){if(Fd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(Ld(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(Ld(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:lR(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>q_(s));return r.length===1?r[0]:{compositeFilter:{op:uR(n.op),filters:r}}}(t):ae()}function hR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=le.min(),o=le.min(),c=mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.ct=e}}function dR(t){const e=oR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ql(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.un=new mR}addToCollectionParentIndex(e,n){return this.un.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(yr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class mR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ks(0)}static kn(){return new ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ri(r.mutation,s,jt.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=fi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=$n();const o=bi(),c=function(){return bi()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof wr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ri(f.mutation,u,f.mutation.getFieldMask(),rt.now())):o.set(u.key,jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new _R(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=bi();let s=new je((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||jt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=I_();f.forEach(m=>{if(!i.has(m)){const g=C_(n.get(m),r.get(m));g!==null&&p.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):y_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Vr());let c=-1,l=i;return o.next(u=>q.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(f=>({batchId:c,changes:w_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=fi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=fi();return this.indexManager.getCollectionParents(e,i).next(c=>q.forEach(c,l=>{const u=function(p,m){return new Fs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let c=fi();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Ri(f.mutation,u,jt.empty(),rt.now()),cc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return q.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$t(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:dR(s.bundledQuery),readTime:$t(s.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.overlays=new je(se.comparator),this.Ir=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Vr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Vr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Vr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return q.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hb(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.Tr=new dt(st.Er),this.dr=new dt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Oe([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Oe([])),r=new st(n,e),s=new st(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new dt(st.Er)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $b(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new st(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Ae);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),q.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new st(new se(i),0);let c=new dt(Ae);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),q.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return q.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),s=this.br.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.Mr=e,this.docs=function(){return new je(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ab(ob(f),r)<=0||(s.has(f.key)||cc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Or(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AR(this)}getSize(e){return q.resolve(this.size)}}class AR extends gR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.persistence=e,this.Nr=new Us(n=>Mu(n),Lu),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qu,this.targetCount=0,this.kr=ks.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),q.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Kn(n),q.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Du(0),this.Kr=!1,this.Kr=!0,this.$r=new TR,this.referenceDelegate=e(this),this.Ur=new bR(this),this.indexManager=new pR,this.remoteDocumentCache=function(s){return new IR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new fR(n),this.Gr=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ER,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new wR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new SR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return q.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class SR extends lb{constructor(e){super(),this.currentSequenceNumber=e}}class $u{constructor(e){this.persistence=e,this.Jr=new qu,this.Yr=null}static Zr(e){return new $u(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),q.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return q.or([()=>q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yw()?8:ub(At())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new PR;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ri()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(ri()<=ye.DEBUG&&Z("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ri()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):q.resolve())}Yi(e,n){if(qd(n))return q.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ql(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,ql(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return qd(n)||s.isEqual(le.min())?q.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?q.resolve(null):(ri()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),is(n)),this.rs(e,o,n,ib(s,-1)).next(c=>c))})}ts(e,n){let r=new dt(E_(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ri()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",is(n)),this.Ji.getDocumentsMatchingQuery(e,n,yr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(Ae),this._s=new Us(i=>Mu(i),Lu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function NR(t,e,n,r){return new kR(t,e,n,r)}async function H_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function DR(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let g=q.resolve();return m.forEach(w=>{g=g.next(()=>f.getEntry(l,w)).next(P=>{const N=u.docVersions.get(w);we(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))})}),g.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function W_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function OR(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(p,g),function(P,N,F){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,g,f)&&c.push(n.Ur.updateTargetData(i,g))});let l=$n(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(VR(i,o,e.documentUpdates).next(f=>{l=f.Ps,u=f.Is})),!r.isEqual(le.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return q.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function VR(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function xR(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MR(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!uo(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Zd(t,e,n){const r=fe(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=fe(l),m=p._s.get(f);return m!==void 0?q.resolve(p.os.get(m)):p.Ur.getTargetData(u,f)}(r,o,yn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:_e())).next(c=>(LR(r,Pb(e),c),{documents:c,Ts:i})))}function LR(t,e,n){let r=t.us.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class ep{constructor(){this.activeTargetIds=Vb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FR{constructor(){this.so=new ep,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo=null;function il(){return Wo===null?Wo=function(){return 268435456+Math.round(2147483648*Math.random())}():Wo++,"0x"+Wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class qR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=il(),l=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Rs("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ls}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=BR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=il();return new Promise((o,c)=>{const l=new n_;l.setWithCredentials(!0),l.listenOnce(r_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case na.NO_ERROR:const f=l.getResponseJson();Z(vt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case na.TIMEOUT:Z(vt,`RPC '${e}' ${i} timed out`),c(new Y(L.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const p=l.getStatus();if(Z(vt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const w=function(N){const F=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(F)>=0?F:L.UNKNOWN}(g.status);c(new Y(w,g.message))}else c(new Y(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(L.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{Z(vt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(vt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=il(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=o_(),c=i_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(vt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,g=!1;const w=new jR({Io:N=>{g?Z(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(vt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,F,x)=>{N.listen(F,j=>{try{x(j)}catch($){setTimeout(()=>{throw $},0)}})};return P(p,hi.EventType.OPEN,()=>{g||(Z(vt,`RPC '${e}' stream ${s} transport opened.`),w.yo())}),P(p,hi.EventType.CLOSE,()=>{g||(g=!0,Z(vt,`RPC '${e}' stream ${s} transport closed`),w.So())}),P(p,hi.EventType.ERROR,N=>{g||(g=!0,Rs(vt,`RPC '${e}' stream ${s} transport errored:`,N),w.So(new Y(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,hi.EventType.MESSAGE,N=>{var F;if(!g){const x=N.data[0];we(!!x);const j=x,$=j.error||((F=j[0])===null||F===void 0?void 0:F.error);if($){Z(vt,`RPC '${e}' stream ${s} received error:`,$);const X=$.status;let ee=function(y){const I=Ye[y];if(I!==void 0)return O_(I)}(X),R=$.message;ee===void 0&&(ee=L.INTERNAL,R="Unknown error status: "+X+" with message "+$.message),g=!0,w.So(new Y(ee,R)),p.close()}else Z(vt,`RPC '${e}' stream ${s} received:`,x),w.bo(x)}}),P(c,s_.STAT_EVENT,N=>{N.stat===Ml.PROXY?Z(vt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ml.NOPROXY&&Z(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function ol(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new Xb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Wu(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $R extends K_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=nR(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?$t(o.readTime):le.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Bl(l)?{documents:sR(i,l)}:{query:iR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=M_(i,o.resumeToken);const u=$l(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=ka(i,o.snapshotVersion.toTimestamp());const u=$l(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=aR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wl(this.serializer),n.removeTarget=e,this.a_(n)}}class HR extends K_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=rR(e.writeResults,e.commitTime),r=$t(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>B_(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Hl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Hl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class KR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=fe(l);u.L_.add(4),await mo(u),u.q_.set("Unknown"),u.L_.delete(4),await pc(u)}(this))})}),this.q_=new KR(r,s)}}async function pc(t){if(Qr(t))for(const e of t.B_)await e(!0)}async function mo(t){for(const e of t.B_)await e(!1)}function G_(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Qu(n)?zu(n):Bs(n).r_()&&Gu(n,e))}function Ku(t,e){const n=fe(t),r=Bs(n);n.N_.delete(e),r.r_()&&z_(n,e),n.N_.size===0&&(r.r_()?r.o_():Qr(n)&&n.q_.set("Unknown"))}function Gu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bs(t).A_(e)}function z_(t,e){t.Q_.xe(e),Bs(t).R_(e)}function zu(t){t.Q_=new zb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Bs(t).start(),t.q_.v_()}function Qu(t){return Qr(t)&&!Bs(t).n_()&&t.N_.size>0}function Qr(t){return fe(t).L_.size===0}function Q_(t){t.Q_=void 0}async function zR(t){t.q_.set("Online")}async function QR(t){t.N_.forEach((e,n)=>{Gu(t,e)})}async function YR(t,e){Q_(t),Qu(t)?(t.q_.M_(e),zu(t)):t.q_.set("Unknown")}async function JR(t,e,n){if(t.q_.set("Online"),e instanceof x_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Da(t,r)}else if(e instanceof ia?t.Q_.Ke(e):e instanceof V_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(le.min()))try{const r=await W_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(mt.EMPTY_BYTE_STRING,f.snapshotVersion)),z_(i,l);const p=new ur(f.target,l,u,f.sequenceNumber);Gu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Da(t,r)}}async function Da(t,e,n){if(!uo(e))throw e;t.L_.add(1),await mo(t),t.q_.set("Offline"),n||(n=()=>W_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pc(t)})}function Y_(t,e){return e().catch(n=>Da(t,n,e))}async function mc(t){const e=fe(t),n=Er(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;XR(e);)try{const s=await xR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,ZR(e,s)}catch(s){await Da(e,s)}J_(e)&&X_(e)}function XR(t){return Qr(t)&&t.O_.length<10}function ZR(t,e){t.O_.push(e);const n=Er(t);n.r_()&&n.V_&&n.m_(e.mutations)}function J_(t){return Qr(t)&&!Er(t).n_()&&t.O_.length>0}function X_(t){Er(t).start()}async function eS(t){Er(t).p_()}async function tS(t){const e=Er(t);for(const n of t.O_)e.m_(n.mutations)}async function nS(t,e,n){const r=t.O_.shift(),s=Uu.from(r,e,n);await Y_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await mc(t)}async function rS(t,e){e&&Er(t).V_&&await async function(r,s){if(function(o){return D_(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();Er(r).s_(),await Y_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mc(r)}}(t,e),J_(t)&&X_(t)}async function np(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.L_.add(3),await mo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pc(n)}async function sS(t,e){const n=fe(t);e?(n.L_.delete(2),await pc(n)):e||(n.L_.add(2),await mo(n),n.q_.set("Unknown"))}function Bs(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new $R(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:zR.bind(null,t),Ro:QR.bind(null,t),mo:YR.bind(null,t),d_:JR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Qu(t)?zu(t):t.q_.set("Unknown")):(await t.K_.stop(),Q_(t))})),t.K_}function Er(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new HR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eS.bind(null,t),mo:rS.bind(null,t),f_:tS.bind(null,t),g_:nS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mc(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Yu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(qn("AsyncQueue",`${e}: ${t}`),uo(t))return new Y(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=fi(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.W_=new je(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ns{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ns(e,n,Es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oS{constructor(){this.queries=sp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=sp(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Y(L.ABORTED,"Firestore shutting down"))}}function sp(){return new Us(t=>v_(t),ac)}async function Z_(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new iS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Ju(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xu(n)}async function ey(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aS(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Xu(n)}function cS(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xu(t){t.Y_.forEach(e=>{e.next()})}var Gl,ip;(ip=Gl||(Gl={})).ea="default",ip.Cache="cache";class ty{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Gl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.key=e}}class ry{constructor(e){this.key=e}}class lS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=E_(e),this.Ra=new Es(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new rp,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),g=cc(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?w!==P&&(r.track({type:3,doc:g}),N=!0):this.ga(m,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(c=!0)):!m&&g?(r.track({type:0,doc:g}),N=!0):m&&!g&&(r.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(g?(o=o.add(g),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(g,w){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return P(g)-P(w)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ns(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ry(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ny(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ns.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hS{constructor(e){this.key=e,this.va=!1}}class fS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Us(c=>v_(c),ac),this.Ma=new Map,this.xa=new Set,this.Oa=new je(se.comparator),this.Na=new Map,this.La=new qu,this.Ba={},this.ka=new Map,this.qa=ks.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dS(t,e,n=!0){const r=ly(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await sy(r,e,n,!0),s}async function pS(t,e){const n=ly(t);await sy(n,e,!0,!1)}async function sy(t,e,n,r){const s=await MR(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await mS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&G_(t.remoteStore,s),c}async function mS(t,e,n,r,s){t.Ka=(p,m,g)=>async function(P,N,F,x){let j=N.view.ma(F);j.ns&&(j=await Zd(P.localStore,N.query,!1).then(({documents:R})=>N.view.ma(R,j)));const $=x&&x.targetChanges.get(N.targetId),X=x&&x.targetMismatches.get(N.targetId)!=null,ee=N.view.applyChanges(j,P.isPrimaryClient,$,X);return ap(P,N.targetId,ee.wa),ee.snapshot}(t,p,m,g);const i=await Zd(t.localStore,e,!0),o=new lS(e,i.Ts),c=o.ma(i.documents),l=po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ap(t,n,u.wa);const f=new uS(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function gS(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ac(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ku(r.remoteStore,s.targetId),zl(r,s.targetId)}).catch(lo)):(zl(r,s.targetId),await Kl(r.localStore,s.targetId,!0))}async function _S(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ku(n.remoteStore,r.targetId))}async function yS(t,e,n){const r=bS(t);try{const s=await function(o,c){const l=fe(o),u=rt.now(),f=c.reduce((g,w)=>g.add(w.key),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=$n(),P=_e();return l.cs.getEntries(g,f).next(N=>{w=N,w.forEach((F,x)=>{x.isValidDocument()||(P=P.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(N=>{p=N;const F=[];for(const x of c){const j=qb(x,p.get(x.key).overlayedDocument);j!=null&&F.push(new wr(x.key,j,h_(j.value.mapValue),ht.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,F,c)}).next(N=>{m=N;const F=N.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(g,N.batchId,F)})}).then(()=>({batchId:m.batchId,changes:w_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new je(Ae)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await go(r,s.changes),await mc(r.remoteStore)}catch(s){const i=Ju(s,"Failed to persist write");n.reject(i)}}async function iy(t,e){const n=fe(t);try{const r=await OR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?we(o.va):s.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await go(n,r,e)}catch(r){await lo(r)}}function op(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(c)&&(u=!0)}),u&&Xu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vS(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(se.comparator);o=o.insert(i,it.newNoDocument(i,le.min()));const c=_e().add(i),l=new fc(le.min(),new Map,new je(Ae),o,c);await iy(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Zu(r)}else await Kl(r.localStore,e,!1).then(()=>zl(r,e,n)).catch(lo)}async function ES(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await DR(n.localStore,e);ay(n,r,null),oy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,s)}catch(s){await lo(s)}}async function TS(t,e,n){const r=fe(t);try{const s=await function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(we(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);ay(r,e,n),oy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,s)}catch(s){await lo(s)}}function oy(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ay(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||cy(t,r)})}function cy(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ku(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Zu(t))}function ap(t,e,n){for(const r of n)r instanceof ny?(t.La.addReference(r.key,e),wS(t,r)):r instanceof ry?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||cy(t,r.key)):ae()}function wS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),Zu(t))}function Zu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new hS(n)),t.Oa=t.Oa.insert(n,r),G_(t.remoteStore,new ur(yn(oc(n.path)),r,"TargetPurposeLimboResolution",Du.oe))}}async function go(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Hu.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,m=>q.forEach(m.$i,g=>f.persistence.referenceDelegate.addReference(p,m.targetId,g)).next(()=>q.forEach(m.Ui,g=>f.persistence.referenceDelegate.removeReference(p,m.targetId,g)))))}catch(p){if(!uo(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const g=f.os.get(m),w=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(w);f.os=f.os.insert(m,P)}}}(r.localStore,i))}async function IS(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await H_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Y(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.hs)}}function AS(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function ly(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vS.bind(null,e),e.Ca.d_=aS.bind(null,e.eventManager),e.Ca.$a=cS.bind(null,e.eventManager),e}function bS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ES.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TS.bind(null,e),e}class Oa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return NR(this.persistence,new CR,e.initialUser,this.serializer)}Ga(e){return new RR($u.Zr,this.serializer)}Wa(e){return new FR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oa.provider={build:()=>new Oa};class Ql{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>op(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IS.bind(null,this.syncEngine),await sS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oS}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=function(i){return new qR(i)}(e.databaseInfo);return function(i,o,c,l){return new WR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new GR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>op(this.syncEngine,n,0),function(){return tp.D()?new tp:new UR}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new fS(s,i,o,c,l,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await mo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ql.provider={build:()=>new Ql};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Y(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=fe(s),c={documents:i.map(p=>Na(o.serializer,p))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,Oe.emptyPath(),c,i.length),u=new Map;l.forEach(p=>{const m=tR(o.serializer,p);u.set(m.key.toString(),m)});const f=[];return i.forEach(p=>{const m=u.get(p.toString());we(!!m),f.push(m)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new hc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=se.fromPath(r);this.mutations.push(new N_(s,this.precondition(s)))}),await async function(r,s){const i=fe(r),o={writes:s.map(c=>B_(i.serializer,c))};await i.Mo("Commit",i.serializer.databaseId,Oe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ae();n=le.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Y(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(le.min())?ht.exists(!1):ht.updateTime(n):ht.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(le.min()))throw new Y(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ht.updateTime(n)}return ht.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this._u=r.maxAttempts,this.t_=new Wu(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new RS(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.lu(s)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!ho(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!D_(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=c_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ju(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function al(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await H_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CS(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>np(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>np(e.remoteStore,s)),t._onlineComponents=e}async function CS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await al(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await al(t,new Oa)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await al(t,new Oa);return t._offlineComponents}async function eh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await cp(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await cp(t,new Ql))),t._onlineComponents}function kS(t){return eh(t).then(e=>e.syncEngine)}function NS(t){return eh(t).then(e=>e.datastore)}async function Yl(t){const e=await eh(t),n=e.eventManager;return n.onListen=dS.bind(null,e.syncEngine),n.onUnlisten=gS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_S.bind(null,e.syncEngine),n}function DS(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new uy({next:m=>{f.Za(),o.enqueueAndForget(()=>ey(i,p));const g=m.docs.has(c);!g&&m.fromCache?u.reject(new Y(L.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&l&&l.source==="server"?u.reject(new Y(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ty(oc(c.path),f,{includeMetadataChanges:!0,_a:!0});return Z_(i,p)}(await Yl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t,e,n){if(!n)throw new Y(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OS(t,e,n,r){if(e===!0&&r===!0)throw new Y(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function up(t){if(!se.isDocumentKey(t))throw new Y(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hp(t){if(se.isDocumentKey(t))throw new Y(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new Y(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Y0;switch(r.type){case"firstParty":return new eb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lp.get(n);r&&(Z("ComponentProvider","Removing Datastore"),lp.delete(n),r.terminate())}(this),Promise.resolve()}}function VS(t,e,n,r={}){var s;const i=(t=Ht(t,_c))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Et.MOCK_USER;else{c=hw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Y(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Et(u)}t._authCredentials=new J0(new a_(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class pr extends Yr{constructor(e,n,r){super(e,n,oc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new se(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function Wr(t,e,...n){if(t=We(t),fy("collection","path",e),t instanceof _c){const r=Oe.fromString(e,...n);return hp(r),new pr(t,null,r)}{if(!(t instanceof pt||t instanceof pr))throw new Y(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return hp(r),new pr(t.firestore,null,r)}}function Je(t,e,...n){if(t=We(t),arguments.length===1&&(e=c_.newId()),fy("doc","path",e),t instanceof _c){const r=Oe.fromString(e,...n);return up(r),new pt(t,null,new se(r))}{if(!(t instanceof pt||t instanceof pr))throw new Y(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return up(r),new pt(t.firestore,t instanceof pr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wu(this,"async_queue_retry"),this.Vu=()=>{const r=ol();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ol();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ol();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Fn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!uo(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw qn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Yu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function pp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Hn extends _c{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new dp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dp(e),this._firestoreClient=void 0,await e}}}function xS(t,e){const n=typeof t=="object"?t:yg(),r=typeof t=="string"?t:"(default)",s=Tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lw("firestore");i&&VS(s,...i)}return s}function yc(t){if(t._terminated)throw new Y(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||MS(t),t._firestoreClient}function MS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,f){return new db(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,hy(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new PS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kr(mt.fromBase64String(e))}catch(n){throw new Y(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kr(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=/^__.*__$/;class FS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}class dy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function py(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class rh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Va(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(py(this.Cu)&&LS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class US{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}Qu(e,n,r,s=!1){return new rh({Cu:e,methodName:n,qu:r,path:ut.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yo(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new US(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sh(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);oh("Data must be an object, but it was:",o,r);const c=_y(r,o);let l,u;if(i.merge)l=new jt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Jl(e,p,n);if(!o.contains(m))throw new Y(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vy(f,m)||f.push(m)}l=new jt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new FS(new Dt(c),l,u)}class Ec extends vc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ec}}class ih extends vc{_toFieldTransform(e){return new Fb(e.path,new Wi)}isEqual(e){return e instanceof ih}}function my(t,e,n,r){const s=t.Qu(1,e,n);oh("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();zr(r,(l,u)=>{const f=ah(e,l,n);u=We(u);const p=s.Nu(f);if(u instanceof Ec)i.push(f);else{const m=vo(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new jt(i);return new dy(o,c,s.fieldTransforms)}function gy(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Jl(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Jl(e,i[m])),l.push(i[m+1]);const u=[],f=Dt.empty();for(let m=c.length-1;m>=0;--m)if(!vy(u,c[m])){const g=c[m];let w=l[m];w=We(w);const P=o.Nu(g);if(w instanceof Ec)u.push(g);else{const N=vo(w,P);N!=null&&(u.push(g),f.set(g,N))}}const p=new jt(u);return new dy(f,p,o.fieldTransforms)}function BS(t,e,n,r=!1){return vo(n,t.Qu(r?4:3,e))}function vo(t,e){if(yy(t=We(t)))return oh("Unsupported field value:",e,t),_y(t,e);if(t instanceof vc)return function(r,s){if(!py(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=vo(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:ka(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ka(s.serializer,i)}}if(r instanceof th)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kr)return{bytesValue:M_(s.serializer,r._byteString)};if(r instanceof pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ju(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nh)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Fu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${gc(r)}`)}(t,e)}function _y(t,e){const n={};return l_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=vo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof th||t instanceof Kr||t instanceof pt||t instanceof vc||t instanceof nh)}function oh(t,e,n){if(!yy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=gc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Jl(t,e,n){if((e=We(e))instanceof _o)return e._internalPath;if(typeof e=="string")return ah(t,e);throw Va("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function ah(t,e,n){if(e.search(jS)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _o(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(L.INVALID_ARGUMENT,c+t+l)}function vy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ch("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qS extends xa{data(){return super.data()}}function ch(t,e){return typeof e=="string"?ah(t,e):e instanceof _o?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}class Ey extends lh{}function uh(t,e,...n){let r=[];e instanceof lh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof fh).length,c=i.filter(l=>l instanceof hh).length;if(o>1||o>0&&c>0)throw new Y(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class hh extends Ey{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hh(e,n,r)}_apply(e){const n=this._parse(e);return Ty(e._query,n),new Yr(e.firestore,e.converter,jl(e._query,n))}_parse(e){const n=yo(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gp(p,f);const g=[];for(const w of p)g.push(mp(l,i,w));m={arrayValue:{values:g}}}else m=mp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gp(p,f),m=BS(c,o,p,f==="in"||f==="not-in");return Xe.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class fh extends lh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ty(o,l),o=jl(o,l)}(e._query,n),new Yr(e.firestore,e.converter,jl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dh extends Ey{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new dh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hi(i,o)}(e._query,this._field,this._direction);return new Yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Fs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ph(t,e="asc"){const n=e,r=ch("orderBy",t);return dh._create(r,n)}function mp(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new Y(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!y_(e)&&n.indexOf("/")!==-1)throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!se.isDocumentKey(r))throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Md(t,new se(r))}if(n instanceof pt)return Md(t,n._key);throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(n)}.`)}function gp(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ty(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wy{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new nh(i)}convertGeoPoint(e){return new th(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=vr(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);we($_(r));const s=new qi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class HS extends wy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gh extends xa{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class oa extends gh{data(e={}){return super.data(e)}}class WS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new oa(this._firestore,this._userDataWriter,r.key,r,new hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new oa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new oa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:KS(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){t=Ht(t,pt);const e=Ht(t.firestore,Hn);return DS(yc(e),t._key).then(n=>Ay(e,t,n))}class _h extends wy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Xl(t,e,n){t=Ht(t,pt);const r=Ht(t.firestore,Hn),s=mh(t.converter,e,n);return wc(r,[sh(yo(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ht.none())])}function Ma(t,e,n,...r){t=Ht(t,pt);const s=Ht(t.firestore,Hn),i=yo(s);let o;return o=typeof(e=We(e))=="string"||e instanceof _o?gy(i,"updateDoc",t._key,e,n,r):my(i,"updateDoc",t._key,e),wc(s,[o.toMutation(t._key,ht.exists(!0))])}function Tc(t){return wc(Ht(t.firestore,Hn),[new hc(t._key,ht.none())])}function Iy(t,e){const n=Ht(t.firestore,Hn),r=Je(t),s=mh(t.converter,e);return wc(n,[sh(yo(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,ht.exists(!1))]).then(()=>r)}function zi(t,...e){var n,r,s;t=We(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||pp(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(pp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof pt)u=Ht(t.firestore,Hn),f=oc(t._key.path),l={next:p=>{e[o]&&e[o](Ay(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Ht(t,Yr);u=Ht(p.firestore,Hn),f=p._query;const m=new _h(u);l={next:g=>{e[o]&&e[o](new WS(u,m,p,g))},error:e[o+1],complete:e[o+2]},$S(t._query)}return function(m,g,w,P){const N=new uy(P),F=new ty(g,N,w);return m.asyncQueue.enqueueAndForget(async()=>Z_(await Yl(m),F)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>ey(await Yl(m),F))}}(yc(u),f,c,l)}function wc(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>yS(await kS(r),s,i)),i.promise}(yc(t),e)}function Ay(t,e,n){const r=n.docs.get(e._key),s=new _h(t);return new gh(t,s,e._key,r,new hs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={maxAttempts:5};function si(t,e){if((t=We(t)).firestore!==e)throw new Y(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=yo(n)}get(n){const r=si(n,this._firestore),s=new HS(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return ae();const o=i[0];if(o.isFoundDocument())return new xa(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new xa(this._firestore,s,r._key,null,r.converter);throw ae()})}set(n,r,s){const i=si(n,this._firestore),o=mh(i.converter,r,s),c=sh(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,c),this}update(n,r,s,...i){const o=si(n,this._firestore);let c;return c=typeof(r=We(r))=="string"||r instanceof _o?gy(this._dataReader,"Transaction.update",o._key,r,s,i):my(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,c),this}delete(n){const r=si(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=si(e,this._firestore),r=new _h(this._firestore);return super.get(e).then(s=>new gh(this._firestore,r,n._key,s._document,new hs(!1,!1),n.converter))}}function yp(t,e,n){t=Ht(t,Hn);const r=Object.assign(Object.assign({},GS),n);return function(i){if(i.maxAttempts<1)throw new Y(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,c){const l=new Fn;return i.asyncQueue.enqueueAndForget(async()=>{const u=await NS(i);new SS(i.asyncQueue,u,c,o,l).au()}),l.promise}(yc(t),s=>e(new zS(t,s)),r)}function Qi(){return new ih("serverTimestamp")}(function(e,n=!0){(function(s){Ls=s})(xs),As(new Ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Hn(new X0(r.getProvider("auth-internal")),new nb(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),dr(Nd,"4.7.3",e),dr(Nd,"4.7.3","esm2017")})();var QS="firebase",YS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(QS,YS,"app");const JS={apiKey:"AIzaSyA8_zaCEwLZIRL14ces2OTee3lAsqDPtCE",authDomain:"devinitelywithyu.firebaseapp.com",projectId:"devinitelywithyu",storageBucket:"devinitelywithyu.firebasestorage.app",messagingSenderId:"490951877501",appId:"1:490951877501:web:62964adb54d10e650aa214"},by=_g(JS),Ko=z0(by),De=xS(by),Ze=no("auth",()=>{const t=xt(null),e=xt(null),n=xt(!1),r=xt(""),s=xt(!1);function i(){return new Promise(f=>{MA(Ko,async p=>{if(t.value=p,p){const m=await _p(Je(De,"users",p.uid));e.value=m.exists()?m.data():null}else e.value=null;s.value=!0,f()})})}async function o(f,p){n.value=!0,r.value="";try{const m=await NA(Ko,f,p);t.value=m.user;const g=await _p(Je(De,"users",m.user.uid));return e.value=g.exists()?g.data():null,!0}catch(m){return r.value=u(m.code),!1}finally{n.value=!1}}async function c({email:f,password:p,name:m,familyName:g,joinFamilyId:w}){n.value=!0,r.value="";try{const P=await kA(Ko,f,p);await OA(P.user,{displayName:m});const N=(w==null?void 0:w.trim())||P.user.uid,F={displayName:m,email:f,familyId:N,role:w?"member":"owner",createdAt:Qi()};return await Xl(Je(De,"users",P.user.uid),F),w||await Xl(Je(De,"families",N),{name:g||"Keluarga Kami",ownerId:P.user.uid,createdAt:Qi(),wallets:[],monthlyBudget:0}),t.value=P.user,e.value=F,!0}catch(P){return r.value=u(P.code),!1}finally{n.value=!1}}async function l(){await LA(Ko),t.value=null,e.value=null}function u(f){return{"auth/invalid-email":"Format email tidak valid.","auth/user-not-found":"Akun tidak ditemukan.","auth/wrong-password":"Password salah.","auth/invalid-credential":"Email atau password salah.","auth/email-already-in-use":"Email sudah terdaftar.","auth/weak-password":"Password minimal 6 karakter."}[f]||"Terjadi kesalahan, coba lagi."}return{user:t,profile:e,loading:n,initialized:s,error:r,init:i,login:o,register:c,logout:l}}),XS=no("wallet",()=>{const t=xt([]),e=xt(!1);let n=null;const r=Me(()=>t.value.filter(g=>g.type!=="credit").reduce((g,w)=>g+Number(w.balance||0),0)),s=Me(()=>t.value.filter(g=>g.type==="savings").reduce((g,w)=>g+Number(w.balance||0),0)),i=Me(()=>t.value.filter(g=>g.type==="credit")),o=Me(()=>t.value.filter(g=>g.type!=="credit"));function c(){var P;const g=Ze();if(!((P=g.profile)!=null&&P.familyId))return;e.value=!0;const w=uh(Wr(De,"families",g.profile.familyId,"wallets"),ph("createdAt","asc"));n==null||n(),n=zi(w,N=>{t.value=N.docs.map(F=>({id:F.id,...F.data()})),e.value=!1})}async function l(g){const w=Ze();return Iy(Wr(De,"families",w.profile.familyId,"wallets"),{name:g.name,type:g.type,balance:Number(g.balance||0),creditLimit:Number(g.creditLimit||0),dueDate:g.dueDate||null,color:g.color||"#E85D8A",icon:g.icon||"wallet",createdAt:Qi()})}async function u(g,w){const P=Ze();return Ma(Je(De,"families",P.profile.familyId,"wallets",g),w)}async function f(g,w){return u(g,{balance:Number(w)})}async function p(g){const w=Ze();return Tc(Je(De,"families",w.profile.familyId,"wallets",g))}function m(){n==null||n(),n=null,t.value=[]}return{wallets:t,loading:e,totalBalance:r,totalSavings:s,creditCards:i,cashWallets:o,listen:c,addWallet:l,updateWallet:u,adjustBalance:f,deleteWallet:p,stop:m}});function La(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ZS(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const dk=6048e5,pk=864e5,Ry=6e4,Sy=36e5;function vp(t){const e=La(t);return e.setHours(0,0,0,0),e}function eP(t,e){const n=vp(t),r=vp(e);return+n==+r}function tP(t){const e=La(t),n=e.getFullYear(),r=e.getMonth(),s=ZS(t,0);return s.setFullYear(n,r+1,0),s.setHours(0,0,0,0),s.getDate()}function nP(t,e){const n=La(t),r=La(e);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function Ep(t,e){const r=oP(t);let s;if(r.date){const l=aP(r.date,2);s=cP(l.restDateString,l.year)}if(!s||isNaN(s.getTime()))return new Date(NaN);const i=s.getTime();let o=0,c;if(r.time&&(o=lP(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(c=uP(r.timezone),isNaN(c))return new Date(NaN)}else{const l=new Date(i+o),u=new Date(0);return u.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),u.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),u}return new Date(i+o+c)}const Go={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},rP=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,sP=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,iP=/^([+-])(\d{2})(?::?(\d{2}))?$/;function oP(t){const e={},n=t.split(Go.dateTimeDelimiter);let r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],Go.timeZoneDelimiter.test(e.date)&&(e.date=t.split(Go.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){const s=Go.timezone.exec(r);s?(e.time=r.replace(s[1],""),e.timezone=s[1]):e.time=r}return e}function aP(t,e){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};const s=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:i===null?s:i*100,restDateString:t.slice((r[1]||r[2]).length)}}function cP(t,e){if(e===null)return new Date(NaN);const n=t.match(rP);if(!n)return new Date(NaN);const r=!!n[4],s=ii(n[1]),i=ii(n[2])-1,o=ii(n[3]),c=ii(n[4]),l=ii(n[5])-1;if(r)return mP(e,c,l)?hP(e,c,l):new Date(NaN);{const u=new Date(0);return!dP(e,i,o)||!pP(e,s)?new Date(NaN):(u.setUTCFullYear(e,i,Math.max(s,o)),u)}}function ii(t){return t?parseInt(t):1}function lP(t){const e=t.match(sP);if(!e)return NaN;const n=cl(e[1]),r=cl(e[2]),s=cl(e[3]);return gP(n,r,s)?n*Sy+r*Ry+s*1e3:NaN}function cl(t){return t&&parseFloat(t.replace(",","."))||0}function uP(t){if(t==="Z")return 0;const e=t.match(iP);if(!e)return 0;const n=e[1]==="+"?-1:1,r=parseInt(e[2]),s=e[3]&&parseInt(e[3])||0;return _P(r,s)?n*(r*Sy+s*Ry):NaN}function hP(t,e,n){const r=new Date(0);r.setUTCFullYear(t,0,4);const s=r.getUTCDay()||7,i=(e-1)*7+n+1-s;return r.setUTCDate(r.getUTCDate()+i),r}const fP=[31,null,31,30,31,30,31,31,30,31,30,31];function Py(t){return t%400===0||t%4===0&&t%100!==0}function dP(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(fP[e]||(Py(t)?29:28))}function pP(t,e){return e>=1&&e<=(Py(t)?366:365)}function mP(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function gP(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function _P(t,e){return e>=0&&e<=59}const yP=[{key:"makanan",label:"Makanan & Minuman",icon:"utensils-crossed",color:"#E88D74"},{key:"belanja",label:"Belanja Rumah",icon:"shopping-cart",color:"#E8829F"},{key:"transport",label:"Transportasi",icon:"car",color:"#7A6270"},{key:"bbm",label:"BBM",icon:"fuel",color:"#16A34A"},{key:"listrik",label:"Listrik (Token)",icon:"zap",color:"#F59E0B"},{key:"credit-card",label:"Kartu Kredit",icon:"credit-card",color:"#8A2248"},{key:"air-pam",label:"Air PAM",icon:"droplets",color:"#38BDF8"},{key:"wifi",label:"Internet / WiFi",icon:"wifi",color:"#3B82F6"},{key:"ipl",label:"IPL",icon:"building-2",color:"#8B5CF6"},{key:"gas",label:"Gas LPG",icon:"flame",color:"#F97316"},{key:"anak",label:"Kebutuhan Anak",icon:"baby",color:"#E0A94A"},{key:"orangtua",label:"Orang Tua",icon:"heart-handshake",color:"#EC4899"},{key:"kesehatan",label:"Kesehatan",icon:"heart-pulse",color:"#D33F70"},{key:"skincare",label:"Skincare & Bodycare",icon:"sparkles",color:"#F472B6"},{key:"barbershop",label:"Salon / Barbershop",icon:"scissors",color:"#A855F7"},{key:"parkir",label:"Parkir",icon:"square-parking",color:"#64748B"},{key:"tol",label:"Tol",icon:"road",color:"#0EA5E9"},{key:"service-kendaraan",label:"Servis Kendaraan",icon:"wrench",color:"#DC2626"},{key:"hiburan",label:"Hiburan",icon:"popcorn",color:"#B02D5A"},{key:"shopping",label:"Shopping",icon:"shopping-bag",color:"#EC4899"},{key:"ngopi",label:"Kopi & Nongkrong",icon:"coffee",color:"#A16207"},{key:"langganan",label:"Subscription",icon:"tv",color:"#6366F1"},{key:"hobi",label:"Hobi",icon:"gamepad-2",color:"#8B5CF6"},{key:"pendidikan",label:"Pendidikan",icon:"graduation-cap",color:"#3FA372"},{key:"buku",label:"Buku",icon:"book-open",color:"#059669"},{key:"asuransi",label:"Asuransi",icon:"shield-check",color:"#0F766E"},{key:"investasi",label:"Investasi",icon:"chart-column",color:"#22C55E"},{key:"tabungan",label:"Tabungan",icon:"piggy-bank",color:"#65A30D"},{key:"kebersihan",label:"Kebersihan Rumah",icon:"spray-can",color:"#14B8A6"},{key:"hadiah",label:"Hadiah",icon:"gift",color:"#EAB308"},{key:"donasi",label:"Donasi / Sedekah",icon:"hand-heart",color:"#F43F5E"},{key:"pajak",label:"Pajak",icon:"receipt",color:"#475569"},{key:"lainnya",label:"Lainnya",icon:"more-horizontal",color:"#7A6270"}],vP=[{key:"gaji",label:"Gaji",icon:"briefcase",color:"#3FA372"},{key:"bonus",label:"Bonus/THR",icon:"gift",color:"#E0A94A"},{key:"usaha",label:"Usaha Sampingan",icon:"store",color:"#5FB98A"},{key:"investasi",label:"Investasi",icon:"trending-up",color:"#3FA372"},{key:"lainnya",label:"Lainnya",icon:"more-horizontal",color:"#7A6270"}],EP=no("transaction",()=>{const t=xt([]),e=xt(!1);let n=null;function r(){var N;const w=Ze();if(!((N=w.profile)!=null&&N.familyId))return;e.value=!0;const P=uh(Wr(De,"families",w.profile.familyId,"transactions"),ph("date","desc"));n==null||n(),n=zi(P,F=>{t.value=F.docs.map(x=>({id:x.id,...x.data()})),e.value=!1})}const s=Me(()=>t.value.filter(w=>eP(Ep(w.date),new Date))),i=Me(()=>t.value.filter(w=>nP(Ep(w.date),new Date))),o=Me(()=>s.value.filter(w=>w.type==="income").reduce((w,P)=>w+P.amount,0)),c=Me(()=>s.value.filter(w=>w.type==="expense").reduce((w,P)=>w+P.amount,0)),l=Me(()=>i.value.filter(w=>w.type==="income").reduce((w,P)=>w+P.amount,0)),u=Me(()=>i.value.filter(w=>w.type==="expense").reduce((w,P)=>w+P.amount,0));async function f(w){const P=Ze(),N=P.profile.familyId,F=w.walletId?Je(De,"families",N,"wallets",w.walletId):null,x=w.category==="credit-card"&&w.creditCardId?Je(De,"families",N,"wallets",w.creditCardId):null;await yp(De,async j=>{const $=F?await j.get(F):null,X=x?await j.get(x):null;if(F&&$.exists()){const R=Number($.data().balance||0),v=w.type==="income"?w.amount:-w.amount;j.update(F,{balance:R+v})}if(x&&X.exists()){const R=Number(X.data().balance||0),v=Math.max(0,R-Number(w.amount));j.update(x,{balance:v})}const ee=Je(Wr(De,"families",N,"transactions"));j.set(ee,{type:w.type,amount:Number(w.amount),category:w.category,walletId:w.walletId||null,creditCardId:w.creditCardId||null,note:w.note||"",date:w.date,createdBy:P.user.uid,createdByName:P.profile.displayName,source:w.source||"manual",createdAt:Qi()})})}async function p(w){const N=Ze().profile.familyId;await Tc(Je(De,"families",N,"transactions",w.id));const F=w.walletId?Je(De,"families",N,"wallets",w.walletId):null,x=w.creditCardId?Je(De,"families",N,"wallets",w.creditCardId):null;!F&&!x||await yp(De,async j=>{const $=F?await j.get(F):null,X=x?await j.get(x):null;if(F&&$.exists()){const ee=Number($.data().balance||0),R=w.type==="income"?-w.amount:w.amount;j.update(F,{balance:ee+R})}if(x&&X.exists()){const ee=Number(X.data().balance||0);j.update(x,{balance:ee+Number(w.amount)})}})}function m(w,P){const N=w==="income"?vP:yP;return N.find(F=>F.key===P)||N[N.length-1]}function g(){n==null||n(),n=null,t.value=[]}return{transactions:t,loading:e,todayTx:s,monthTx:i,todayIncome:o,todayExpense:c,monthIncome:l,monthExpense:u,listen:r,addTransaction:f,deleteTransaction:p,categoryMeta:m,stop:g}}),TP=no("budget",()=>{const t=xt(null),e=xt([]);let n=null,r=null;const s=Me(()=>{var f;return(f=t.value)!=null&&f.monthlyBudget?Math.floor(t.value.monthlyBudget/tP(new Date)):0});function i(){var m;const f=Ze();if(!((m=f.profile)!=null&&m.familyId))return;const p=f.profile.familyId;n==null||n(),n=zi(Je(De,"families",p),g=>{t.value=g.exists()?g.data():null}),r==null||r(),r=zi(Wr(De,"families",p,"budgets"),g=>{e.value=g.docs.map(w=>({id:w.id,...w.data()}))})}async function o(f){const p=Ze();await Ma(Je(De,"families",p.profile.familyId),{monthlyBudget:Number(f)})}async function c(f,p){const m=Ze();await Xl(Je(De,"families",m.profile.familyId,"budgets",f),{category:f,monthlyLimit:Number(p)})}async function l(f){const p=Ze();await Tc(Je(De,"families",p.profile.familyId,"budgets",f))}function u(){n==null||n(),r==null||r(),n=null,r=null,t.value=null,e.value=[]}return{family:t,categoryBudgets:e,dailyBudget:s,listen:i,setMonthlyBudget:o,setCategoryBudget:c,removeCategoryBudget:l,stop:u}}),wP=no("goals",()=>{const t=xt([]);let e=null;function n(){var f;const l=Ze();if(!((f=l.profile)!=null&&f.familyId))return;const u=uh(Wr(De,"families",l.profile.familyId,"goals"),ph("createdAt","desc"));e==null||e(),e=zi(u,p=>{t.value=p.docs.map(m=>({id:m.id,...m.data()}))})}async function r(l){const u=Ze();return Iy(Wr(De,"families",u.profile.familyId,"goals"),{name:l.name,type:l.type||"general",targetAmount:Number(l.targetAmount),currentAmount:Number(l.currentAmount||0),deadline:l.deadline||null,icon:l.icon||"target",color:l.color||"#E85D8A",createdAt:Qi()})}async function s(l,u){const f=Ze();await Ma(Je(De,"families",f.profile.familyId,"goals",l),{name:u.name,targetAmount:Number(u.targetAmount),currentAmount:Number(u.currentAmount||0),deadline:u.deadline||null,icon:u.icon||"target"})}async function i(l,u){const f=Ze(),p=t.value.find(m=>m.id===l);p&&await Ma(Je(De,"families",f.profile.familyId,"goals",l),{currentAmount:Number(p.currentAmount||0)+Number(u)})}async function o(l){const u=Ze();await Tc(Je(De,"families",u.profile.familyId,"goals",l))}function c(){e==null||e(),e=null,t.value=[]}return{goals:t,listen:n,addGoal:r,updateGoal:s,contribute:i,deleteGoal:o,stop:c}});/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=(t,e)=>({size:n,strokeWidth:r=2,absoluteStrokeWidth:s,color:i,class:o,...c},{attrs:l,slots:u})=>Mi("svg",{...zo,width:n||zo.width,height:n||zo.height,stroke:i||zo.stroke,"stroke-width":s?Number(r)*24/Number(n):r,...l,class:["lucide",`lucide-${IP(t)}`],...c},[...e.map(f=>Mi(...f)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=Eo("HistoryIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=Eo("LayoutGridIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=Eo("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=Eo("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=Eo("WalletIcon",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const cs=typeof document<"u";function Cy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cy(t.default)}const Se=Object.assign;function ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const Pi=()=>{},ln=Array.isArray;function Tp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const ky=/#/g,kP=/&/g,NP=/\//g,DP=/=/g,OP=/\?/g,Ny=/\+/g,VP=/%5B/g,xP=/%5D/g,Dy=/%5E/g,MP=/%60/g,Oy=/%7B/g,LP=/%7C/g,Vy=/%7D/g,FP=/%20/g;function yh(t){return t==null?"":encodeURI(""+t).replace(LP,"|").replace(VP,"[").replace(xP,"]")}function UP(t){return yh(t).replace(Oy,"{").replace(Vy,"}").replace(Dy,"^")}function Zl(t){return yh(t).replace(Ny,"%2B").replace(FP,"+").replace(ky,"%23").replace(kP,"%26").replace(MP,"`").replace(Oy,"{").replace(Vy,"}").replace(Dy,"^")}function BP(t){return Zl(t).replace(DP,"%3D")}function jP(t){return yh(t).replace(ky,"%23").replace(OP,"%3F")}function qP(t){return jP(t).replace(NP,"%2F")}function Yi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const $P=/\/$/,HP=t=>t.replace($P,"");function ul(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zP(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Yi(o)}}function WP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function KP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(e.matched[r],n.matched[s])&&xy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!GP(t[n],e[n]))return!1;return!0}function GP(t,e){return ln(t)?Ip(t,e):ln(e)?Ip(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Ip(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let eu=function(t){return t.pop="pop",t.push="push",t}({}),hl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function QP(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HP(t)}const YP=/^[^#]+#/;function JP(t,e){return t.replace(YP,"#")+e}function XP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ic=()=>({left:window.scrollX,top:window.scrollY});function ZP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ap(t,e){return(history.state?history.state.position-e:-1)+t}const tu=new Map;function eC(t,e){tu.set(t,e)}function tC(t){const e=tu.get(t);return tu.delete(t),e}function nC(t){return typeof t=="string"||t&&typeof t=="object"}function My(t){return typeof t=="string"||typeof t=="symbol"}let $e=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Ly=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function Os(t,e){return Se(new Error,{type:t,[Ly]:!0},e)}function Rn(t,e){return t instanceof Error&&Ly in t&&(e==null||!!(t.type&e))}const rC=["params","query","hash"];function sC(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of rC)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function iC(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Ny," "),i=s.indexOf("="),o=Yi(i<0?s:s.slice(0,i)),c=i<0?null:Yi(s.slice(i+1));if(o in e){let l=e[o];ln(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function bp(t){let e="";for(let n in t){const r=t[n];if(n=BP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(s=>s&&Zl(s)):[r&&Zl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function oC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const aC=Symbol(""),Rp=Symbol(""),Ac=Symbol(""),vh=Symbol(""),nu=Symbol("");function oi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ir(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Os($e.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):nC(m)?l(Os($e.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function fl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Cy(l)){const u=(l.__vccOpts||l)[e];u&&i.push(ir(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=CP(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&ir(m,n,r,o,c,s)()}))}}return i}function cC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ds(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ds(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lC=()=>location.protocol+"//"+location.host;function Fy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),wp(c,"")}return wp(n,t)+r+s}function uC(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const g=Fy(t,location),w=n.value,P=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===w){o=null;return}N=P?m.position-P.position:0}else r(g);s.forEach(F=>{F(n.value,w,{delta:N,type:eu.pop,direction:N?N>0?hl.forward:hl.back:hl.unknown})})};function l(){o=n.value}function u(m){s.push(m);const g=()=>{const w=s.indexOf(m);w>-1&&s.splice(w,1)};return i.push(g),g}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Se({},m.state,{scroll:Ic()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function Sp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ic():null}}function hC(t){const{history:e,location:n}=window,r={value:Fy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:lC()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Se({},e.state,Sp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Se({},s.value,e.state,{forward:l,scroll:Ic()});i(f.current,f,!0),i(l,Se({},Sp(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function fC(t){t=QP(t);const e=hC(t),n=uC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:JP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let xr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var tt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(tt||{});const dC={type:xr.Static,value:""},pC=/[a-zA-Z0-9_]/;function mC(t){if(!t)return[[]];if(t==="/")return[[dC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=tt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===tt.Static?i.push({type:xr.Static,value:u}):n===tt.Param||n===tt.ParamRegExp||n===tt.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:xr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==tt.ParamRegExp){r=n,n=tt.EscapeNext;continue}switch(n){case tt.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=tt.Param):m();break;case tt.EscapeNext:m(),n=r;break;case tt.Param:l==="("?n=tt.ParamRegExp:pC.test(l)?m():(p(),n=tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case tt.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=tt.ParamRegExpEnd:f+=l;break;case tt.ParamRegExpEnd:p(),n=tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===tt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Pp="[^/]+?",gC={sensitive:!1,strict:!1,start:!0,end:!0};var Pt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Pt||{});const _C=/[.+*?^${}()[\]/\\]/g;function yC(t,e){const n=Se({},gC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Pt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let g=Pt.Segment+(n.sensitive?Pt.BonusCaseSensitive:0);if(m.type===xr.Static)p||(s+="/"),s+=m.value.replace(_C,"\\$&"),g+=Pt.Static;else if(m.type===xr.Param){const{value:w,repeatable:P,optional:N,regexp:F}=m;i.push({name:w,repeatable:P,optional:N});const x=F||Pp;if(x!==Pp){g+=Pt.BonusCustomRegExp;try{`${x}`}catch($){throw new Error(`Invalid custom RegExp for param "${w}" (${x}): `+$.message)}}let j=P?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(j=N&&u.length<2?`(?:/${j})`:"/"+j),N&&(j+="?"),s+=j,g+=Pt.Dynamic,N&&(g+=Pt.BonusOptional),P&&(g+=Pt.BonusRepeatable),x===".*"&&(g+=Pt.BonusWildcard)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Pt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const g=f[m]||"",w=i[m-1];p[w.name]=g&&w.repeatable?g.split("/"):g}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const g of m)if(g.type===xr.Static)f+=g.value;else if(g.type===xr.Param){const{value:w,repeatable:P,optional:N}=g,F=w in u?u[w]:"";if(ln(F)&&!P)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const x=ln(F)?F.join("/"):F;if(!x)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${w}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function vC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Pt.Static+Pt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Pt.Static+Pt.Segment?1:-1:0}function Uy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Cp(r))return 1;if(Cp(s))return-1}return s.length-r.length}function Cp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const EC={strict:!1,end:!0,sensitive:!1};function TC(t,e,n){const r=yC(mC(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wC(t,e){const n=[],r=new Map;e=Tp(EC,e);function s(p){return r.get(p)}function i(p,m,g){const w=!g,P=Np(p);P.aliasOf=g&&g.record;const N=Tp(e,p),F=[P];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of $)F.push(Np(Se({},P,{components:g?g.record.components:P.components,path:X,aliasOf:g?g.record:P})))}let x,j;for(const $ of F){const{path:X}=$;if(m&&X[0]!=="/"){const ee=m.record.path,R=ee[ee.length-1]==="/"?"":"/";$.path=m.record.path+(X&&R+X)}if(x=TC($,m,N),g?g.alias.push(x):(j=j||x,j!==x&&j.alias.push(x),w&&p.name&&!Dp(x)&&o(p.name)),By(x)&&l(x),P.children){const ee=P.children;for(let R=0;R<ee.length;R++)i(ee[R],x,g&&g.children[R])}g=g||x}return j?()=>{o(j)}:Pi}function o(p){if(My(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=bC(p,n);n.splice(m,0,p),p.record.name&&!Dp(p)&&r.set(p.record.name,p)}function u(p,m){let g,w={},P,N;if("name"in p&&p.name){if(g=r.get(p.name),!g)throw Os($e.MATCHER_NOT_FOUND,{location:p});N=g.record.name,w=Se(kp(m.params,g.keys.filter(j=>!j.optional).concat(g.parent?g.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&kp(p.params,g.keys.map(j=>j.name))),P=g.stringify(w)}else if(p.path!=null)P=p.path,g=n.find(j=>j.re.test(P)),g&&(w=g.parse(P),N=g.record.name);else{if(g=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!g)throw Os($e.MATCHER_NOT_FOUND,{location:p,currentLocation:m});N=g.record.name,w=Se({},m.params,p.params),P=g.stringify(w)}const F=[];let x=g;for(;x;)F.unshift(x.record),x=x.parent;return{name:N,path:P,params:w,matched:F,meta:AC(F)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function kp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Np(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:IC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function IC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Dp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AC(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function bC(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Uy(t,e[i])<0?r=i:n=i+1}const s=RC(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function RC(t){let e=t;for(;e=e.parent;)if(By(e)&&Uy(t,e)===0)return e}function By({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Op(t){const e=Jt(Ac),n=Jt(vh),r=Me(()=>{const l=ze(t.to);return e.resolve(l)}),s=Me(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ds.bind(null,f));if(m>-1)return m;const g=Vp(l[u-2]);return u>1&&Vp(f)===g&&p[p.length-1].path!==g?p.findIndex(Ds.bind(null,l[u-2])):m}),i=Me(()=>s.value>-1&&NC(n.params,r.value.params)),o=Me(()=>s.value>-1&&s.value===n.matched.length-1&&xy(n.params,r.value.params));function c(l={}){if(kC(l)){const u=e[ze(t.replace)?"replace":"push"](ze(t.to)).catch(Pi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function SC(t){return t.length===1?t[0]:t}const PC=Am({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Op,setup(t,{slots:e}){const n=Xi(Op(t)),{options:r}=Jt(Ac),s=Me(()=>({[xp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&SC(e.default(n));return t.custom?i:Mi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),CC=PC;function kC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Vp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xp=(t,e,n)=>t??e??n,DC=Am({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(nu),s=Me(()=>t.route||r.value),i=Jt(Rp,0),o=Me(()=>{let u=ze(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Me(()=>s.value.matched[o.value]);Yo(Rp,Me(()=>o.value+1)),Yo(aC,c),Yo(nu,s);const l=xt();return ms(()=>[l.value,c.value,t.name],([u,f,p],[m,g,w])=>{f&&(f.instances[p]=u,g&&g!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!Ds(f,g)||!m)&&(f.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Mp(n.default,{Component:m,route:u});const g=p.props[f],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=Mi(m,Se({},w,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Mp(n.default,{Component:N,route:u})||N}}});function Mp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const OC=DC;function VC(t){const e=wC(t.routes,t),n=t.parseQuery||iC,r=t.stringifyQuery||bp,s=t.history,i=oi(),o=oi(),c=oi(),l=$v(nr);let u=nr;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ll.bind(null,M=>""+M),p=ll.bind(null,qP),m=ll.bind(null,Yi);function g(M,J){let z,te;return My(M)?(z=e.getRecordMatcher(M),te=J):te=M,e.addRoute(te,z)}function w(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function P(){return e.getRoutes().map(M=>M.record)}function N(M){return!!e.getRecordMatcher(M)}function F(M,J){if(J=Se({},J||l.value),typeof M=="string"){const C=ul(n,M,J.path),O=e.resolve({path:C.path},J),U=s.createHref(C.fullPath);return Se(C,O,{params:m(O.params),hash:Yi(C.hash),redirectedFrom:void 0,href:U})}let z;if(M.path!=null)z=Se({},M,{path:ul(n,M.path,J.path).path});else{const C=Se({},M.params);for(const O in C)C[O]==null&&delete C[O];z=Se({},M,{params:p(C)}),J.params=p(J.params)}const te=e.resolve(z,J),me=M.hash||"";te.params=f(m(te.params));const E=WP(r,Se({},M,{hash:UP(me),path:te.path})),b=s.createHref(E);return Se({fullPath:E,hash:me,query:r===bp?oC(M.query):M.query||{}},te,{redirectedFrom:void 0,href:b})}function x(M){return typeof M=="string"?ul(n,M,l.value.path):Se({},M)}function j(M,J){if(u!==M)return Os($e.NAVIGATION_CANCELLED,{from:J,to:M})}function $(M){return R(M)}function X(M){return $(Se(x(M),{replace:!0}))}function ee(M,J){const z=M.matched[M.matched.length-1];if(z&&z.redirect){const{redirect:te}=z;let me=typeof te=="function"?te(M,J):te;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=x(me):{path:me},me.params={}),Se({query:M.query,hash:M.hash,params:me.path!=null?{}:M.params},me)}}function R(M,J){const z=u=F(M),te=l.value,me=M.state,E=M.force,b=M.replace===!0,C=ee(z,te);if(C)return R(Se(x(C),{state:typeof C=="object"?Se({},me,C.state):me,force:E,replace:b}),J||z);const O=z;O.redirectedFrom=J;let U;return!E&&KP(r,te,z)&&(U=Os($e.NAVIGATION_DUPLICATED,{to:O,from:te}),Wt(te,te,!0,!1)),(U?Promise.resolve(U):I(O,te)).catch(V=>Rn(V)?Rn(V,$e.NAVIGATION_GUARD_REDIRECT)?V:tn(V):ge(V,O,te)).then(V=>{if(V){if(Rn(V,$e.NAVIGATION_GUARD_REDIRECT))return R(Se({replace:b},x(V.to),{state:typeof V.to=="object"?Se({},me,V.to.state):me,force:E}),J||O)}else V=A(O,te,!0,b,me);return S(O,te,V),V})}function v(M,J){const z=j(M,J);return z?Promise.reject(z):Promise.resolve()}function y(M){const J=Qn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function I(M,J){let z;const[te,me,E]=cC(M,J);z=fl(te.reverse(),"beforeRouteLeave",M,J);for(const C of te)C.leaveGuards.forEach(O=>{z.push(ir(O,M,J))});const b=v.bind(null,M,J);return z.push(b),Ot(z).then(()=>{z=[];for(const C of i.list())z.push(ir(C,M,J));return z.push(b),Ot(z)}).then(()=>{z=fl(me,"beforeRouteUpdate",M,J);for(const C of me)C.updateGuards.forEach(O=>{z.push(ir(O,M,J))});return z.push(b),Ot(z)}).then(()=>{z=[];for(const C of E)if(C.beforeEnter)if(ln(C.beforeEnter))for(const O of C.beforeEnter)z.push(ir(O,M,J));else z.push(ir(C.beforeEnter,M,J));return z.push(b),Ot(z)}).then(()=>(M.matched.forEach(C=>C.enterCallbacks={}),z=fl(E,"beforeRouteEnter",M,J,y),z.push(b),Ot(z))).then(()=>{z=[];for(const C of o.list())z.push(ir(C,M,J));return z.push(b),Ot(z)}).catch(C=>Rn(C,$e.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function S(M,J,z){c.list().forEach(te=>y(()=>te(M,J,z)))}function A(M,J,z,te,me){const E=j(M,J);if(E)return E;const b=J===nr,C=cs?history.state:{};z&&(te||b?s.replace(M.fullPath,Se({scroll:b&&C&&C.scroll},me)):s.push(M.fullPath,me)),l.value=M,Wt(M,J,z,b),tn()}let T;function Re(){T||(T=s.listen((M,J,z)=>{if(!Lt.listening)return;const te=F(M),me=ee(te,Lt.currentRoute.value);if(me){R(Se(me,{replace:!0,force:!0}),te).catch(Pi);return}u=te;const E=l.value;cs&&eC(Ap(E.fullPath,z.delta),Ic()),I(te,E).catch(b=>Rn(b,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?b:Rn(b,$e.NAVIGATION_GUARD_REDIRECT)?(R(Se(x(b.to),{force:!0}),te).then(C=>{Rn(C,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===eu.pop&&s.go(-1,!1)}).catch(Pi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ge(b,te,E))).then(b=>{b=b||A(te,E,!1),b&&(z.delta&&!Rn(b,$e.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===eu.pop&&Rn(b,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),S(te,E,b)}).catch(Pi)}))}let Ke=oi(),ke=oi(),he;function ge(M,J,z){tn(M);const te=ke.list();return te.length?te.forEach(me=>me(M,J,z)):console.error(M),Promise.reject(M)}function Mt(){return he&&l.value!==nr?Promise.resolve():new Promise((M,J)=>{Ke.add([M,J])})}function tn(M){return he||(he=!M,Re(),Ke.list().forEach(([J,z])=>M?z(M):J()),Ke.reset()),M}function Wt(M,J,z,te){const{scrollBehavior:me}=t;if(!cs||!me)return Promise.resolve();const E=!z&&tC(Ap(M.fullPath,0))||(te||!z)&&history.state&&history.state.scroll||null;return Qa().then(()=>me(M,J,E)).then(b=>b&&ZP(b)).catch(b=>ge(b,M,J))}const Fe=M=>s.go(M);let Ue;const Qn=new Set,Lt={currentRoute:l,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:P,resolve:F,options:t,push:$,replace:X,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ke.add,isReady:Mt,install(M){M.component("RouterLink",CC),M.component("RouterView",OC),M.config.globalProperties.$router=Lt,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),cs&&!Ue&&l.value===nr&&(Ue=!0,$(s.location).catch(te=>{}));const J={};for(const te in nr)Object.defineProperty(J,te,{get:()=>l.value[te],enumerable:!0});M.provide(Ac,Lt),M.provide(vh,lm(J)),M.provide(nu,l);const z=M.unmount;Qn.add(M),M.unmount=function(){Qn.delete(M),Qn.size<1&&(u=nr,T&&T(),T=null,l.value=nr,Ue=!1,he=!1),z()}}};function Ot(M){return M.reduce((J,z)=>J.then(()=>y(z)),Promise.resolve())}return Lt}function mk(){return Jt(Ac)}function Eh(t){return Jt(vh)}const xC={class:"fixed bottom-0 left-0 right-0 z-40 safe-bottom"},MC={class:"max-w-lg mx-auto px-4 pb-4"},LC={class:"bg-white/95 backdrop-blur-lg rounded-xl3 shadow-pop border border-blush-100/70 flex items-center justify-between px-2 py-2"},FC={key:0,class:"w-12 h-12 -mt-7 rounded-2xl bg-gradient-to-br from-blush-500 to-blush-600 shadow-pop flex items-center justify-center active:scale-90 transition-transform"},UC={key:0,class:"absolute -top-1 w-1 h-1 rounded-full bg-blush-500"},BC={__name:"BottomNav",setup(t){const e=Eh(),n=[{to:"/",name:"dashboard",icon:bP,label:"Beranda"},{to:"/dompet",name:"wallet",icon:PP,label:"Dompet"},{to:"/tambah",name:"add-transaction",icon:RP,label:"",fab:!0},{to:"/riwayat",name:"history",icon:AP,label:"Riwayat"},{to:"/akun",name:"account",icon:SP,label:"Akun"}];return(r,s)=>{const i=gu("router-link");return Ct(),Nn("nav",xC,[rn("div",MC,[rn("div",LC,[(Ct(),Nn(Yt,null,IE(n,o=>ft(i,{key:o.name,to:o.to,class:"flex-1 flex flex-col items-center justify-center py-1.5 relative"},{default:Di(()=>[o.fab?(Ct(),Nn("div",FC,[(Ct(),gs(yl(o.icon),{size:22,class:"text-white"}))])):(Ct(),Nn(Yt,{key:1},[(Ct(),gs(yl(o.icon),{size:20,class:Ts(ze(e).name===o.name?"text-blush-600":"text-plum-400"),"stroke-width":ze(e).name===o.name?2.4:2},null,8,["class","stroke-width"])),rn("span",{class:Ts(["text-[10px] mt-1 font-medium",ze(e).name===o.name?"text-blush-600":"text-plum-400"])},ls(o.label),3),ze(e).name===o.name?(Ct(),Nn("span",UC)):ga("",!0)],64))]),_:2},1032,["to"])),64))])])])}}};function gk(t,{compact:e=!1}={}){const n=Number(t||0);return e&&Math.abs(n)>=1e6?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",notation:"compact",maximumFractionDigits:1}).format(n):new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n)}function _k(t){return new Intl.NumberFormat("id-ID").format(Number(t||0))}function jC(t){return t?t.split(" ").slice(0,2).map(e=>{var n;return(n=e[0])==null?void 0:n.toUpperCase()}).join(""):"?"}const qC={class:"sticky top-0 z-30 safe-top bg-cream-100/80 backdrop-blur-md px-4 pt-4 pb-2"},$C={key:0,class:"flex items-center justify-between animate-fade-up"},HC={class:"text-plum-400 text-xs font-medium"},WC={class:"text-lg font-display font-semibold text-plum-800"},KC={class:"flex items-center gap-2"},GC={key:1,class:"flex items-center gap-3 animate-fade-up"},zC={class:"text-lg font-display font-semibold text-plum-800"},QC={__name:"AppHeader",setup(t){const e=Ze(),n=Eh(),r={dashboard:"Beranda",wallet:"Dompet","add-transaction":"Tambah Transaksi",history:"Riwayat Transaksi",account:"Akun",budget:"Budget",goals:"Goals",assets:"Aset",calendar:"Aktivitas Bulanan",advisor:"AI Advisor",trends:"Tren Keuangan",more:"Lainnya"},s=Me(()=>r[n.name]||""),i=Me(()=>{const o=new Date().getHours();return o<11?"Selamat pagi":o<15?"Selamat siang":o<18?"Selamat sore":"Selamat malam"});return(o,c)=>{var u,f;const l=gu("router-link");return Ct(),Nn("header",qC,[ze(n).name==="dashboard"?(Ct(),Nn("div",$C,[rn("div",null,[rn("p",HC,ls(i.value)+",",1),rn("h1",WC,ls(((f=(u=ze(e).profile)==null?void 0:u.displayName)==null?void 0:f.split(" ")[0])||"Keluarga")+" 👋",1)]),rn("div",KC,[ft(l,{to:"/akun",class:"w-10 h-10 rounded-full bg-gradient-to-br from-blush-400 to-blush-600 text-white flex items-center justify-center font-semibold text-sm shadow-soft"},{default:Di(()=>{var p;return[Zm(ls(ze(jC)((p=ze(e).profile)==null?void 0:p.displayName)),1)]}),_:1})])])):(Ct(),Nn("div",GC,[rn("h1",zC,ls(s.value),1)]))])}}},YC={class:"min-h-screen flex flex-col max-w-lg mx-auto relative"},JC={__name:"App",setup(t){const e=Ze(),n=XS(),r=EP(),s=TP(),i=wP(),o=Eh();return ms(()=>{var c;return(c=e.profile)==null?void 0:c.familyId},c=>{c?(n.listen(),r.listen(),s.listen(),i.listen()):(n.stop(),r.stop(),s.stop(),i.stop())},{immediate:!0}),(c,l)=>{const u=gu("router-view");return Ct(),Nn("div",YC,[ze(e).user&&ze(o).meta.showChrome!==!1?(Ct(),gs(QC,{key:0})):ga("",!0),rn("main",{class:Ts(["flex-1 px-4 pb-28",ze(o).meta.showChrome!==!1&&ze(e).user?"pt-2":""])},[ft(u,null,{default:Di(({Component:f,route:p})=>[ft(pT,{name:"fade-page",mode:"out-in"},{default:Di(()=>[(Ct(),gs(yl(f),{key:p.path}))]),_:2},1024)]),_:1})],2),ze(e).user&&ze(o).meta.showChrome!==!1?(Ct(),gs(BC,{key:1})):ga("",!0)])}}},XC="modulepreload",ZC=function(t){return"/"+t},Lp={},Rt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=ZC(l),l in Lp)return;Lp[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":XC,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,g)=>{p.addEventListener("load",m),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},ek=[{path:"/login",name:"login",component:()=>Rt(()=>import("./Login-BHu7zP26.js"),__vite__mapDeps([0,1,2])),meta:{guest:!0,showChrome:!1}},{path:"/register",name:"register",component:()=>Rt(()=>import("./Register-DPb_ftAD.js"),__vite__mapDeps([3,2,4])),meta:{guest:!0,showChrome:!1}},{path:"/",name:"dashboard",component:()=>Rt(()=>import("./Dashboard-CXxusjnL.js"),__vite__mapDeps([5,6,7,8,9,10,11,12]))},{path:"/dompet",name:"wallet",component:()=>Rt(()=>import("./Wallet-FeVW7B83.js"),__vite__mapDeps([13,6,14,15,16,12,17]))},{path:"/tambah",name:"add-transaction",component:()=>Rt(()=>import("./AddTransaction-D-kwPZ9u.js"),__vite__mapDeps([18,19,7,10,20,21,22,8,23,16,2,1,17,15,12,24,25,11,4,9,14]))},{path:"/riwayat",name:"history",component:()=>Rt(()=>import("./History-uzNmkowE.js"),__vite__mapDeps([26,19,7,10,20,21,22,8,23,16,2,1,17,15,12,24,25,11,4,9,27]))},{path:"/akun",name:"account",component:()=>Rt(()=>import("./Account-GFIEMuCh.js"),__vite__mapDeps([28,4,21,8,9,11,12]))},{path:"/budget",name:"budget",component:()=>Rt(()=>import("./Budget-D8JvbALd.js"),__vite__mapDeps([29,6,19,7,10,20,21,22,8,23,16,2,1,17,15,12,24,25,11,4,9,14]))},{path:"/scanner",name:"scanner",component:()=>Rt(()=>import("./Scanner-C-gAFP5j.js"),__vite__mapDeps([30,20,25]))},{path:"/goals",name:"goals",component:()=>Rt(()=>import("./Goals-CEP8mpID.js"),__vite__mapDeps([31,6,14,23,15,11,12]))},{path:"/aset",name:"assets",component:()=>Rt(()=>import("./Assets-jqr1GCLf.js"),__vite__mapDeps([32,12,16,9,11]))},{path:"/kalender",name:"calendar",component:()=>Rt(()=>import("./CalendarView-Cs7_J5ZS.js"),__vite__mapDeps([33,22,8,27,34]))},{path:"/advisor",name:"advisor",component:()=>Rt(()=>import("./AIAdvisor-zcH0dhvf.js"),__vite__mapDeps([35,24,25]))},{path:"/tren",name:"trends",component:()=>Rt(()=>import("./Trends-B9eikuoK.js"),__vite__mapDeps([36,27,34]))},{path:"/lainnya",name:"more",component:()=>Rt(()=>import("./More-CZxawF9R.js"),__vite__mapDeps([37,8,9,11,12,10]))}],jy=VC({history:fC(),routes:ek,scrollBehavior(){return{top:0}}});jy.beforeEach(async t=>{const e=Ze();return e.initialized||await e.init(),!t.meta.guest&&!e.user?{name:"login"}:t.meta.guest&&e.user?{name:"dashboard"}:!0});const ru=GT(JC),qy=YT();ru.use(qy);to(qy);const tk=Ze();tk.init().finally(()=>{ru.use(jy),ru.mount("#app");const t=document.getElementById("initial-loader");t&&(t.classList.add("loader-hide"),setTimeout(()=>t.remove(),300))});export{Am as $,Me as A,ou as B,BT as C,ms as D,Eh as E,Yt as F,yP as G,Ep as H,vP as I,jC as J,Eo as K,AP as L,bP as M,sk as N,XE as O,RP as P,rk as Q,_k as R,La as S,pT as T,SP as U,nP as V,PP as W,eP as X,ak as Y,Qa as Z,Rt as _,rn as a,Mi as a0,$v as a1,cT as a2,Sm as a3,Cm as a4,Te as a5,Ga as a6,ZS as a7,vp as a8,pk as a9,dk as aa,ft as b,Nn as c,ze as d,ik as e,gs as f,ga as g,ok as h,Zm as i,Di as j,xt as k,gu as l,mk as m,Ts as n,Ct as o,EP as p,TP as q,yl as r,XS as s,ls as t,Ze as u,Qf as v,nk as w,wP as x,gk as y,IE as z};
