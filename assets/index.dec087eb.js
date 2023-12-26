(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Kr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Gr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=fe(s)?af(s):Gr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(fe(t))return t;if(se(t))return t}}const rf=/;(?![^(]*\))/g,of=/:([^]+)/,lf=/\/\*.*?\*\//gs;function af(t){const e={};return t.replace(lf,"").split(rf).forEach(n=>{if(n){const s=n.split(of);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yr(t){let e="";if(fe(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=Yr(t[n]);s&&(e+=s+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uf=Kr(cf);function Ja(t){return!!t||t===""}const Mi=t=>fe(t)?t:t==null?"":k(t)||se(t)&&(t.toString===tc||!M(t.toString))?JSON.stringify(t,Xa,2):String(t),Xa=(t,e)=>e&&e.__v_isRef?Xa(t,e.value):yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Za(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!k(e)&&!nc(e)?String(e):e,ne={},mn=[],Ge=()=>{},hf=()=>!1,ff=/^on[^a-z]/,ai=t=>ff.test(t),Qr=t=>t.startsWith("onUpdate:"),be=Object.assign,Jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},df=Object.prototype.hasOwnProperty,V=(t,e)=>df.call(t,e),k=Array.isArray,yn=t=>ci(t)==="[object Map]",Za=t=>ci(t)==="[object Set]",M=t=>typeof t=="function",fe=t=>typeof t=="string",Xr=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",ec=t=>se(t)&&M(t.then)&&M(t.catch),tc=Object.prototype.toString,ci=t=>tc.call(t),pf=t=>ci(t).slice(8,-1),nc=t=>ci(t)==="[object Object]",Zr=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_f=/-(\w)/g,rt=ui(t=>t.replace(_f,(e,n)=>n?n.toUpperCase():"")),gf=/\B([A-Z])/g,cn=ui(t=>t.replace(gf,"-$1").toLowerCase()),hi=ui(t=>t.charAt(0).toUpperCase()+t.slice(1)),Li=ui(t=>t?`on${hi(t)}`:""),Us=(t,e)=>!Object.is(t,e),Ms=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$s=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fl;const mf=()=>fl||(fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tt;class yf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function vf(t,e=tt){e&&e.active&&e.effects.push(t)}const eo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},sc=t=>(t.w&xt)>0,ic=t=>(t.n&xt)>0,Cf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xt},bf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];sc(i)&&!ic(i)?i.delete(t):e[n++]=i,i.w&=~xt,i.n&=~xt}e.length=n}},cr=new WeakMap;let jn=0,xt=1;const ur=30;let Ve;const Xt=Symbol(""),hr=Symbol("");class to{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vf(this,s)}run(){if(!this.active)return this.fn();let e=Ve,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ve,Ve=this,Et=!0,xt=1<<++jn,jn<=ur?Cf(this):dl(this),this.fn()}finally{jn<=ur&&bf(this),xt=1<<--jn,Ve=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ve===this?this.deferStop=!0:this.active&&(dl(this),this.onStop&&this.onStop(),this.active=!1)}}function dl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const rc=[];function Dn(){rc.push(Et),Et=!1}function Pn(){const t=rc.pop();Et=t===void 0?!0:t}function Ue(t,e,n){if(Et&&Ve){let s=cr.get(t);s||cr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=eo()),oc(i)}}function oc(t,e){let n=!1;jn<=ur?ic(t)||(t.n|=xt,n=!sc(t)):n=!t.has(Ve),n&&(t.add(Ve),Ve.deps.push(t))}function ut(t,e,n,s,i,r){const o=cr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&k(t)){const a=Xn(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":k(t)?Zr(n)&&l.push(o.get("length")):(l.push(o.get(Xt)),yn(t)&&l.push(o.get(hr)));break;case"delete":k(t)||(l.push(o.get(Xt)),yn(t)&&l.push(o.get(hr)));break;case"set":yn(t)&&l.push(o.get(Xt));break}if(l.length===1)l[0]&&fr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);fr(eo(a))}}function fr(t,e){const n=k(t)?t:[...t];for(const s of n)s.computed&&pl(s);for(const s of n)s.computed||pl(s)}function pl(t,e){(t!==Ve||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ef=Kr("__proto__,__v_isRef,__isVue"),lc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xr)),wf=no(),If=no(!1,!0),Tf=no(!0),_l=Sf();function Sf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=q(this);for(let r=0,o=this.length;r<o;r++)Ue(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dn();const s=q(this)[e].apply(this,n);return Pn(),s}}),t}function no(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Hf:fc:e?hc:uc).get(s))return s;const o=k(s);if(!t&&o&&V(_l,i))return Reflect.get(_l,i,r);const l=Reflect.get(s,i,r);return(Xr(i)?lc.has(i):Ef(i))||(t||Ue(s,"get",i),e)?l:xe(l)?o&&Zr(i)?l:l.value:se(l)?t?dc(l):ro(l):l}}const Af=ac(),xf=ac(!0);function ac(t=!1){return function(n,s,i,r){let o=n[s];if(Zn(o)&&xe(o)&&!xe(i))return!1;if(!t&&(!dr(i)&&!Zn(i)&&(o=q(o),i=q(i)),!k(n)&&xe(o)&&!xe(i)))return o.value=i,!0;const l=k(n)&&Zr(s)?Number(s)<n.length:V(n,s),a=Reflect.set(n,s,i,r);return n===q(r)&&(l?Us(i,o)&&ut(n,"set",s,i):ut(n,"add",s,i)),a}}function Nf(t,e){const n=V(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ut(t,"delete",e,void 0),s}function Rf(t,e){const n=Reflect.has(t,e);return(!Xr(e)||!lc.has(e))&&Ue(t,"has",e),n}function Df(t){return Ue(t,"iterate",k(t)?"length":Xt),Reflect.ownKeys(t)}const cc={get:wf,set:Af,deleteProperty:Nf,has:Rf,ownKeys:Df},Pf={get:Tf,set(t,e){return!0},deleteProperty(t,e){return!0}},kf=be({},cc,{get:If,set:xf}),so=t=>t,fi=t=>Reflect.getPrototypeOf(t);function Es(t,e,n=!1,s=!1){t=t.__v_raw;const i=q(t),r=q(e);n||(e!==r&&Ue(i,"get",e),Ue(i,"get",r));const{has:o}=fi(i),l=s?so:n?ao:lo;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ws(t,e=!1){const n=this.__v_raw,s=q(n),i=q(t);return e||(t!==i&&Ue(s,"has",t),Ue(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Is(t,e=!1){return t=t.__v_raw,!e&&Ue(q(t),"iterate",Xt),Reflect.get(t,"size",t)}function gl(t){t=q(t);const e=q(this);return fi(e).has.call(e,t)||(e.add(t),ut(e,"add",t,t)),this}function ml(t,e){e=q(e);const n=q(this),{has:s,get:i}=fi(n);let r=s.call(n,t);r||(t=q(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Us(e,o)&&ut(n,"set",t,e):ut(n,"add",t,e),this}function yl(t){const e=q(this),{has:n,get:s}=fi(e);let i=n.call(e,t);i||(t=q(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ut(e,"delete",t,void 0),r}function vl(){const t=q(this),e=t.size!==0,n=t.clear();return e&&ut(t,"clear",void 0,void 0),n}function Ts(t,e){return function(s,i){const r=this,o=r.__v_raw,l=q(o),a=e?so:t?ao:lo;return!t&&Ue(l,"iterate",Xt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Ss(t,e,n){return function(...s){const i=this.__v_raw,r=q(i),o=yn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?so:e?ao:lo;return!e&&Ue(r,"iterate",a?hr:Xt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:this}}function Of(){const t={get(r){return Es(this,r)},get size(){return Is(this)},has:ws,add:gl,set:ml,delete:yl,clear:vl,forEach:Ts(!1,!1)},e={get(r){return Es(this,r,!1,!0)},get size(){return Is(this)},has:ws,add:gl,set:ml,delete:yl,clear:vl,forEach:Ts(!1,!0)},n={get(r){return Es(this,r,!0)},get size(){return Is(this,!0)},has(r){return ws.call(this,r,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Ts(!0,!1)},s={get(r){return Es(this,r,!0,!0)},get size(){return Is(this,!0)},has(r){return ws.call(this,r,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Ts(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ss(r,!1,!1),n[r]=Ss(r,!0,!1),e[r]=Ss(r,!1,!0),s[r]=Ss(r,!0,!0)}),[t,n,e,s]}const[Mf,Lf,Ff,Bf]=Of();function io(t,e){const n=e?t?Bf:Ff:t?Lf:Mf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(V(n,i)&&i in s?n:s,i,r)}const Uf={get:io(!1,!1)},$f={get:io(!1,!0)},Wf={get:io(!0,!1)},uc=new WeakMap,hc=new WeakMap,fc=new WeakMap,Hf=new WeakMap;function Vf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jf(t){return t.__v_skip||!Object.isExtensible(t)?0:Vf(pf(t))}function ro(t){return Zn(t)?t:oo(t,!1,cc,Uf,uc)}function qf(t){return oo(t,!1,kf,$f,hc)}function dc(t){return oo(t,!0,Pf,Wf,fc)}function oo(t,e,n,s,i){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=jf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function vn(t){return Zn(t)?vn(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function dr(t){return!!(t&&t.__v_isShallow)}function pc(t){return vn(t)||Zn(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function _c(t){return $s(t,"__v_skip",!0),t}const lo=t=>se(t)?ro(t):t,ao=t=>se(t)?dc(t):t;function zf(t){Et&&Ve&&(t=q(t),oc(t.dep||(t.dep=eo())))}function Kf(t,e){t=q(t),t.dep&&fr(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function Gf(t){return xe(t)?t.value:t}const Yf={get:(t,e,n)=>Gf(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function gc(t){return vn(t)?t:new Proxy(t,Yf)}var mc;class Qf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[mc]=!1,this._dirty=!0,this.effect=new to(e,()=>{this._dirty||(this._dirty=!0,Kf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=q(this);return zf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}mc="__v_isReadonly";function Jf(t,e,n=!1){let s,i;const r=M(t);return r?(s=t,i=Ge):(s=t.get,i=t.set),new Qf(s,i,r||!i,n)}function wt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){di(r,e,n)}return i}function We(t,e,n,s){if(M(t)){const r=wt(t,e,n,s);return r&&ec(r)&&r.catch(o=>{di(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(We(t[r],e,n,s));return i}function di(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){wt(a,null,10,[t,o,l]);return}}Xf(t,n,i,s)}function Xf(t,e,n,s=!0){console.error(t)}let es=!1,pr=!1;const Te=[];let st=0;const Cn=[];let lt=null,qt=0;const yc=Promise.resolve();let co=null;function Zf(t){const e=co||yc;return t?e.then(this?t.bind(this):t):e}function ed(t){let e=st+1,n=Te.length;for(;e<n;){const s=e+n>>>1;ts(Te[s])<t?e=s+1:n=s}return e}function uo(t){(!Te.length||!Te.includes(t,es&&t.allowRecurse?st+1:st))&&(t.id==null?Te.push(t):Te.splice(ed(t.id),0,t),vc())}function vc(){!es&&!pr&&(pr=!0,co=yc.then(bc))}function td(t){const e=Te.indexOf(t);e>st&&Te.splice(e,1)}function nd(t){k(t)?Cn.push(...t):(!lt||!lt.includes(t,t.allowRecurse?qt+1:qt))&&Cn.push(t),vc()}function Cl(t,e=es?st+1:0){for(;e<Te.length;e++){const n=Te[e];n&&n.pre&&(Te.splice(e,1),e--,n())}}function Cc(t){if(Cn.length){const e=[...new Set(Cn)];if(Cn.length=0,lt){lt.push(...e);return}for(lt=e,lt.sort((n,s)=>ts(n)-ts(s)),qt=0;qt<lt.length;qt++)lt[qt]();lt=null,qt=0}}const ts=t=>t.id==null?1/0:t.id,sd=(t,e)=>{const n=ts(t)-ts(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bc(t){pr=!1,es=!0,Te.sort(sd);const e=Ge;try{for(st=0;st<Te.length;st++){const n=Te[st];n&&n.active!==!1&&wt(n,null,14)}}finally{st=0,Te.length=0,Cc(),es=!1,co=null,(Te.length||Cn.length)&&bc()}}function id(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ne;d&&(i=n.map(_=>fe(_)?_.trim():_)),h&&(i=n.map(Xn))}let l,a=s[l=Li(e)]||s[l=Li(rt(e))];!a&&r&&(a=s[l=Li(cn(e))]),a&&We(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,We(c,t,6,i)}}function Ec(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const u=Ec(c,e,!0);u&&(l=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(se(t)&&s.set(t,null),null):(k(r)?r.forEach(a=>o[a]=null):be(o,r),se(t)&&s.set(t,o),o)}function pi(t,e){return!t||!ai(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,cn(e))||V(t,e))}let Fe=null,wc=null;function Ws(t){const e=Fe;return Fe=t,wc=t&&t.type.__scopeId||null,e}function _r(t,e=Fe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Rl(-1);const r=Ws(e);let o;try{o=t(...i)}finally{Ws(r),s._d&&Rl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Fi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:C,inheritAttrs:T}=t;let L,W;const ce=Ws(t);try{if(n.shapeFlag&4){const K=i||s;L=nt(u.call(K,K,h,r,_,d,C)),W=a}else{const K=e;L=nt(K.length>1?K(r,{attrs:a,slots:l,emit:c}):K(r,null)),W=e.props?a:rd(a)}}catch(K){zn.length=0,di(K,t,1),L=re(Ye)}let P=L;if(W&&T!==!1){const K=Object.keys(W),{shapeFlag:de}=P;K.length&&de&7&&(o&&K.some(Qr)&&(W=od(W,o)),P=Nt(P,W))}return n.dirs&&(P=Nt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),L=P,Ws(ce),L}const rd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ai(n))&&((e||(e={}))[n]=t[n]);return e},od=(t,e)=>{const n={};for(const s in t)(!Qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ld(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?bl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!pi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?bl(s,o,c):!0:!!o;return!1}function bl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!pi(n,r))return!0}return!1}function ad({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cd=t=>t.__isSuspense;function ud(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):nd(t)}function hd(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Ls(t,e,n=!1){const s=ye||Fe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&M(e)?e.call(s.proxy):e}}const As={};function Bi(t,e,n){return Ic(t,e,n)}function Ic(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ne){const l=ye;let a,c=!1,u=!1;if(xe(t)?(a=()=>t.value,c=dr(t)):vn(t)?(a=()=>t,s=!0):k(t)?(u=!0,c=t.some(P=>vn(P)||dr(P)),a=()=>t.map(P=>{if(xe(P))return P.value;if(vn(P))return Gt(P);if(M(P))return wt(P,l,2)})):M(t)?e?a=()=>wt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),We(t,l,3,[d])}:a=Ge,e&&s){const P=a;a=()=>Gt(P())}let h,d=P=>{h=W.onStop=()=>{wt(P,l,4)}},_;if(ss)if(d=Ge,e?n&&We(e,l,3,[a(),u?[]:void 0,d]):a(),i==="sync"){const P=ap();_=P.__watcherHandles||(P.__watcherHandles=[])}else return Ge;let C=u?new Array(t.length).fill(As):As;const T=()=>{if(!!W.active)if(e){const P=W.run();(s||c||(u?P.some((K,de)=>Us(K,C[de])):Us(P,C)))&&(h&&h(),We(e,l,3,[P,C===As?void 0:u&&C[0]===As?[]:C,d]),C=P)}else W.run()};T.allowRecurse=!!e;let L;i==="sync"?L=T:i==="post"?L=()=>Ne(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),L=()=>uo(T));const W=new to(a,L);e?n?T():C=W.run():i==="post"?Ne(W.run.bind(W),l&&l.suspense):W.run();const ce=()=>{W.stop(),l&&l.scope&&Jr(l.scope.effects,W)};return _&&_.push(ce),ce}function fd(t,e,n){const s=this.proxy,i=fe(t)?t.includes(".")?Tc(s,t):()=>s[t]:t.bind(s,s);let r;M(e)?r=e:(r=e.handler,n=e);const o=ye;Tn(this);const l=Ic(i,r.bind(s),n);return o?Tn(o):Zt(),l}function Tc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Gt(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))Gt(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)Gt(t[n],e);else if(Za(t)||yn(t))t.forEach(n=>{Gt(n,e)});else if(nc(t))for(const n in t)Gt(t[n],e);return t}function dd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rc(()=>{t.isMounted=!0}),Dc(()=>{t.isUnmounting=!0}),t}const $e=[Function,Array],pd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},setup(t,{slots:e}){const n=Xd(),s=dd();let i;return()=>{const r=e.default&&xc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const T of r)if(T.type!==Ye){o=T;break}}const l=q(t),{mode:a}=l;if(s.isLeaving)return Ui(o);const c=El(o);if(!c)return Ui(o);const u=gr(c,l,s,n);mr(c,u);const h=n.subTree,d=h&&El(h);let _=!1;const{getTransitionKey:C}=c.type;if(C){const T=C();i===void 0?i=T:T!==i&&(i=T,_=!0)}if(d&&d.type!==Ye&&(!zt(c,d)||_)){const T=gr(d,l,s,n);if(mr(d,T),a==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ui(o);a==="in-out"&&c.type!==Ye&&(T.delayLeave=(L,W,ce)=>{const P=Ac(s,d);P[String(d.key)]=d,L._leaveCb=()=>{W(),L._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ce})}return o}}},Sc=pd;function Ac(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function gr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:C,onBeforeAppear:T,onAppear:L,onAfterAppear:W,onAppearCancelled:ce}=e,P=String(t.key),K=Ac(n,t),de=(F,oe)=>{F&&We(F,s,9,oe)},mt=(F,oe)=>{const Z=oe[1];de(F,oe),k(F)?F.every(Ee=>Ee.length<=1)&&Z():F.length<=1&&Z()},Je={mode:r,persisted:o,beforeEnter(F){let oe=l;if(!n.isMounted)if(i)oe=T||l;else return;F._leaveCb&&F._leaveCb(!0);const Z=K[P];Z&&zt(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),de(oe,[F])},enter(F){let oe=a,Z=c,Ee=u;if(!n.isMounted)if(i)oe=L||a,Z=W||c,Ee=ce||u;else return;let x=!1;const ie=F._enterCb=Me=>{x||(x=!0,Me?de(Ee,[F]):de(Z,[F]),Je.delayedLeave&&Je.delayedLeave(),F._enterCb=void 0)};oe?mt(oe,[F,ie]):ie()},leave(F,oe){const Z=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return oe();de(h,[F]);let Ee=!1;const x=F._leaveCb=ie=>{Ee||(Ee=!0,oe(),ie?de(C,[F]):de(_,[F]),F._leaveCb=void 0,K[Z]===t&&delete K[Z])};K[Z]=t,d?mt(d,[F,x]):x()},clone(F){return gr(F,e,n,s)}};return Je}function Ui(t){if(_i(t))return t=Nt(t),t.children=null,t}function El(t){return _i(t)?t.children?t.children[0]:void 0:t}function mr(t,e){t.shapeFlag&6&&t.component?mr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ae?(o.patchFlag&128&&i++,s=s.concat(xc(o.children,e,l))):(e||o.type!==Ye)&&s.push(l!=null?Nt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const Fs=t=>!!t.type.__asyncLoader,_i=t=>t.type.__isKeepAlive;function _d(t,e){Nc(t,"a",e)}function gd(t,e){Nc(t,"da",e)}function Nc(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(gi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)_i(i.parent.vnode)&&md(s,e,n,i),i=i.parent}}function md(t,e,n,s){const i=gi(e,t,s,!0);Pc(()=>{Jr(s[e],i)},n)}function gi(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dn(),Tn(n);const l=We(e,n,t,o);return Zt(),Pn(),l});return s?i.unshift(r):i.push(r),r}}const pt=t=>(e,n=ye)=>(!ss||t==="sp")&&gi(t,(...s)=>e(...s),n),yd=pt("bm"),Rc=pt("m"),vd=pt("bu"),Cd=pt("u"),Dc=pt("bum"),Pc=pt("um"),bd=pt("sp"),Ed=pt("rtg"),wd=pt("rtc");function Id(t,e=ye){gi("ec",t,e)}function xs(t,e){const n=Fe;if(n===null)return t;const s=vi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=ne]=e[r];o&&(M(o)&&(o={mounted:o,updated:o}),o.deep&&Gt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Lt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Dn(),We(a,n,8,[t.el,l,t,e]),Pn())}}const kc="components";function Oc(t,e){return Sd(kc,t,!0,e)||t}const Td=Symbol();function Sd(t,e,n=!0,s=!1){const i=Fe||ye;if(i){const r=i.type;if(t===kc){const l=sp(r,!1);if(l&&(l===e||l===rt(e)||l===hi(rt(e))))return r}const o=wl(i[t]||r[t],e)||wl(i.appContext[t],e);return!o&&s?r:o}}function wl(t,e){return t&&(t[e]||t[rt(e)]||t[hi(rt(e))])}function Ns(t,e,n,s){let i;const r=n&&n[s];if(k(t)||fe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(se(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const yr=t=>t?zc(t)?vi(t)||t.proxy:yr(t.parent):null,qn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yr(t.parent),$root:t=>yr(t.root),$emit:t=>t.emit,$options:t=>ho(t),$forceUpdate:t=>t.f||(t.f=()=>uo(t.update)),$nextTick:t=>t.n||(t.n=Zf.bind(t.proxy)),$watch:t=>fd.bind(t)}),$i=(t,e)=>t!==ne&&!t.__isScriptSetup&&V(t,e),Ad={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if($i(s,e))return o[e]=1,s[e];if(i!==ne&&V(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&V(c,e))return o[e]=3,r[e];if(n!==ne&&V(n,e))return o[e]=4,n[e];vr&&(o[e]=0)}}const u=qn[e];let h,d;if(u)return e==="$attrs"&&Ue(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ne&&V(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,V(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return $i(i,e)?(i[e]=n,!0):s!==ne&&V(s,e)?(s[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ne&&V(t,o)||$i(e,o)||(l=r[0])&&V(l,o)||V(s,o)||V(qn,o)||V(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vr=!0;function xd(t){const e=ho(t),n=t.proxy,s=t.ctx;vr=!1,e.beforeCreate&&Il(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:C,activated:T,deactivated:L,beforeDestroy:W,beforeUnmount:ce,destroyed:P,unmounted:K,render:de,renderTracked:mt,renderTriggered:Je,errorCaptured:F,serverPrefetch:oe,expose:Z,inheritAttrs:Ee,components:x,directives:ie,filters:Me}=e;if(c&&Nd(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const Y=o[le];M(Y)&&(s[le]=Y.bind(n))}if(i){const le=i.call(n,n);se(le)&&(t.data=ro(le))}if(vr=!0,r)for(const le in r){const Y=r[le],Ot=M(Y)?Y.bind(n,n):M(Y.get)?Y.get.bind(n,n):Ge,Cs=!M(Y)&&M(Y.set)?Y.set.bind(n):Ge,Mt=rp({get:Ot,set:Cs});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Xe=>Mt.value=Xe})}if(l)for(const le in l)Mc(l[le],s,n,le);if(a){const le=M(a)?a.call(n):a;Reflect.ownKeys(le).forEach(Y=>{hd(Y,le[Y])})}u&&Il(u,t,"c");function pe(le,Y){k(Y)?Y.forEach(Ot=>le(Ot.bind(n))):Y&&le(Y.bind(n))}if(pe(yd,h),pe(Rc,d),pe(vd,_),pe(Cd,C),pe(_d,T),pe(gd,L),pe(Id,F),pe(wd,mt),pe(Ed,Je),pe(Dc,ce),pe(Pc,K),pe(bd,oe),k(Z))if(Z.length){const le=t.exposed||(t.exposed={});Z.forEach(Y=>{Object.defineProperty(le,Y,{get:()=>n[Y],set:Ot=>n[Y]=Ot})})}else t.exposed||(t.exposed={});de&&t.render===Ge&&(t.render=de),Ee!=null&&(t.inheritAttrs=Ee),x&&(t.components=x),ie&&(t.directives=ie)}function Nd(t,e,n=Ge,s=!1){k(t)&&(t=Cr(t));for(const i in t){const r=t[i];let o;se(r)?"default"in r?o=Ls(r.from||i,r.default,!0):o=Ls(r.from||i):o=Ls(r),xe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Il(t,e,n){We(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mc(t,e,n,s){const i=s.includes(".")?Tc(n,s):()=>n[s];if(fe(t)){const r=e[t];M(r)&&Bi(i,r)}else if(M(t))Bi(i,t.bind(n));else if(se(t))if(k(t))t.forEach(r=>Mc(r,e,n,s));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&Bi(i,r,t)}}function ho(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Hs(a,c,o,!0)),Hs(a,e,o)),se(e)&&r.set(e,a),a}function Hs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Hs(t,r,n,!0),i&&i.forEach(o=>Hs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Rd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Rd={data:Tl,props:$t,emits:$t,methods:$t,computed:$t,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:$t,directives:$t,watch:Pd,provide:Tl,inject:Dd};function Tl(t,e){return e?t?function(){return be(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Dd(t,e){return $t(Cr(t),Cr(e))}function Cr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function $t(t,e){return t?be(be(Object.create(null),t),e):e}function Pd(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Se(t[s],e[s]);return n}function kd(t,e,n,s=!1){const i={},r={};$s(r,yi,1),t.propsDefaults=Object.create(null),Lc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:qf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Od(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=q(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(pi(t.emitsOptions,d))continue;const _=e[d];if(a)if(V(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const C=rt(d);i[C]=br(a,l,C,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Lc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!V(e,h)&&((u=cn(h))===h||!V(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=br(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!V(e,h)&&!0)&&(delete r[h],c=!0)}c&&ut(t,"set","$attrs")}function Lc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Os(a))continue;const c=e[a];let u;i&&V(i,u=rt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:pi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=q(n),c=l||ne;for(let u=0;u<r.length;u++){const h=r[u];n[h]=br(i,a,h,c[h],t,!V(c,h))}}return o}function br(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=V(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&M(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Tn(i),s=c[n]=a.call(null,e),Zt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===cn(n))&&(s=!0))}return s}function Fc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const u=h=>{a=!0;const[d,_]=Fc(h,e,!0);be(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return se(t)&&s.set(t,mn),mn;if(k(r))for(let u=0;u<r.length;u++){const h=rt(r[u]);Sl(h)&&(o[h]=ne)}else if(r)for(const u in r){const h=rt(u);if(Sl(h)){const d=r[u],_=o[h]=k(d)||M(d)?{type:d}:Object.assign({},d);if(_){const C=Nl(Boolean,_.type),T=Nl(String,_.type);_[0]=C>-1,_[1]=T<0||C<T,(C>-1||V(_,"default"))&&l.push(h)}}}const c=[o,l];return se(t)&&s.set(t,c),c}function Sl(t){return t[0]!=="$"}function Al(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xl(t,e){return Al(t)===Al(e)}function Nl(t,e){return k(e)?e.findIndex(n=>xl(n,t)):M(e)&&xl(e,t)?0:-1}const Bc=t=>t[0]==="_"||t==="$stable",fo=t=>k(t)?t.map(nt):[nt(t)],Md=(t,e,n)=>{if(e._n)return e;const s=_r((...i)=>fo(e(...i)),n);return s._c=!1,s},Uc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Bc(i))continue;const r=t[i];if(M(r))e[i]=Md(i,r,s);else if(r!=null){const o=fo(r);e[i]=()=>o}}},$c=(t,e)=>{const n=fo(e);t.slots.default=()=>n},Ld=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),$s(e,"_",n)):Uc(e,t.slots={})}else t.slots={},e&&$c(t,e);$s(t.slots,yi,1)},Fd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ne;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(be(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Uc(e,i)),o=e}else e&&($c(t,e),o={default:1});if(r)for(const l in i)!Bc(l)&&!(l in o)&&delete i[l]};function Wc(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bd=0;function Ud(t,e){return function(s,i=null){M(s)||(s=Object.assign({},s)),i!=null&&!se(i)&&(i=null);const r=Wc(),o=new Set;let l=!1;const a=r.app={_uid:Bd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:cp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&M(c.install)?(o.add(c),c.install(a,...u)):M(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=re(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,vi(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Er(t,e,n,s,i=!1){if(k(t)){t.forEach((d,_)=>Er(d,e&&(k(e)?e[_]:e),n,s,i));return}if(Fs(s)&&!i)return;const r=s.shapeFlag&4?vi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ne?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(fe(c)?(u[c]=null,V(h,c)&&(h[c]=null)):xe(c)&&(c.value=null)),M(a))wt(a,l,12,[o,u]);else{const d=fe(a),_=xe(a);if(d||_){const C=()=>{if(t.f){const T=d?V(h,a)?h[a]:u[a]:a.value;i?k(T)&&Jr(T,r):k(T)?T.includes(r)||T.push(r):d?(u[a]=[r],V(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,V(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,Ne(C,n)):C()}}}const Ne=ud;function $d(t){return Wd(t)}function Wd(t,e){const n=mf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Ge,insertStaticContent:C}=t,T=(f,p,g,y=null,m=null,w=null,S=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!zt(f,p)&&(y=bs(f),Xe(f,m,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:v,ref:N,shapeFlag:A}=p;switch(v){case mi:L(f,p,g,y);break;case Ye:W(f,p,g,y);break;case Wi:f==null&&ce(p,g,y,S);break;case Ae:x(f,p,g,y,m,w,S,E,I);break;default:A&1?de(f,p,g,y,m,w,S,E,I):A&6?ie(f,p,g,y,m,w,S,E,I):(A&64||A&128)&&v.process(f,p,g,y,m,w,S,E,I,fn)}N!=null&&m&&Er(N,f&&f.ref,w,p||f,!p)},L=(f,p,g,y)=>{if(f==null)s(p.el=l(p.children),g,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},W=(f,p,g,y)=>{f==null?s(p.el=a(p.children||""),g,y):p.el=f.el},ce=(f,p,g,y)=>{[f.el,f.anchor]=C(f.children,p,g,y,f.el,f.anchor)},P=({el:f,anchor:p},g,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,y),f=m;s(p,g,y)},K=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},de=(f,p,g,y,m,w,S,E,I)=>{S=S||p.type==="svg",f==null?mt(p,g,y,m,w,S,E,I):oe(f,p,m,w,S,E,I)},mt=(f,p,g,y,m,w,S,E)=>{let I,v;const{type:N,props:A,shapeFlag:R,transition:O,dirs:H}=f;if(I=f.el=o(f.type,w,A&&A.is,A),R&8?u(I,f.children):R&16&&F(f.children,I,null,y,m,w&&N!=="foreignObject",S,E),H&&Lt(f,null,y,"created"),A){for(const z in A)z!=="value"&&!Os(z)&&r(I,z,null,A[z],w,f.children,y,m,ot);"value"in A&&r(I,"value",null,A.value),(v=A.onVnodeBeforeMount)&&et(v,y,f)}Je(I,f,f.scopeId,S,y),H&&Lt(f,null,y,"beforeMount");const Q=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;Q&&O.beforeEnter(I),s(I,p,g),((v=A&&A.onVnodeMounted)||Q||H)&&Ne(()=>{v&&et(v,y,f),Q&&O.enter(I),H&&Lt(f,null,y,"mounted")},m)},Je=(f,p,g,y,m)=>{if(g&&_(f,g),y)for(let w=0;w<y.length;w++)_(f,y[w]);if(m){let w=m.subTree;if(p===w){const S=m.vnode;Je(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},F=(f,p,g,y,m,w,S,E,I=0)=>{for(let v=I;v<f.length;v++){const N=f[v]=E?bt(f[v]):nt(f[v]);T(null,N,p,g,y,m,w,S,E)}},oe=(f,p,g,y,m,w,S)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:v,dirs:N}=p;I|=f.patchFlag&16;const A=f.props||ne,R=p.props||ne;let O;g&&Ft(g,!1),(O=R.onVnodeBeforeUpdate)&&et(O,g,p,f),N&&Lt(p,f,g,"beforeUpdate"),g&&Ft(g,!0);const H=m&&p.type!=="foreignObject";if(v?Z(f.dynamicChildren,v,E,g,y,H,w):S||Y(f,p,E,null,g,y,H,w,!1),I>0){if(I&16)Ee(E,p,A,R,g,y,m);else if(I&2&&A.class!==R.class&&r(E,"class",null,R.class,m),I&4&&r(E,"style",A.style,R.style,m),I&8){const Q=p.dynamicProps;for(let z=0;z<Q.length;z++){const ue=Q[z],He=A[ue],dn=R[ue];(dn!==He||ue==="value")&&r(E,ue,He,dn,m,f.children,g,y,ot)}}I&1&&f.children!==p.children&&u(E,p.children)}else!S&&v==null&&Ee(E,p,A,R,g,y,m);((O=R.onVnodeUpdated)||N)&&Ne(()=>{O&&et(O,g,p,f),N&&Lt(p,f,g,"updated")},y)},Z=(f,p,g,y,m,w,S)=>{for(let E=0;E<p.length;E++){const I=f[E],v=p[E],N=I.el&&(I.type===Ae||!zt(I,v)||I.shapeFlag&70)?h(I.el):g;T(I,v,N,null,y,m,w,S,!0)}},Ee=(f,p,g,y,m,w,S)=>{if(g!==y){if(g!==ne)for(const E in g)!Os(E)&&!(E in y)&&r(f,E,g[E],null,S,p.children,m,w,ot);for(const E in y){if(Os(E))continue;const I=y[E],v=g[E];I!==v&&E!=="value"&&r(f,E,v,I,S,p.children,m,w,ot)}"value"in y&&r(f,"value",g.value,y.value)}},x=(f,p,g,y,m,w,S,E,I)=>{const v=p.el=f?f.el:l(""),N=p.anchor=f?f.anchor:l("");let{patchFlag:A,dynamicChildren:R,slotScopeIds:O}=p;O&&(E=E?E.concat(O):O),f==null?(s(v,g,y),s(N,g,y),F(p.children,g,N,m,w,S,E,I)):A>0&&A&64&&R&&f.dynamicChildren?(Z(f.dynamicChildren,R,g,m,w,S,E),(p.key!=null||m&&p===m.subTree)&&Hc(f,p,!0)):Y(f,p,g,N,m,w,S,E,I)},ie=(f,p,g,y,m,w,S,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?m.ctx.activate(p,g,y,S,I):Me(p,g,y,m,w,S,I):Fn(f,p,I)},Me=(f,p,g,y,m,w,S)=>{const E=f.component=Jd(f,y,m);if(_i(f)&&(E.ctx.renderer=fn),Zd(E),E.asyncDep){if(m&&m.registerDep(E,pe),!f.el){const I=E.subTree=re(Ye);W(null,I,p,g)}return}pe(E,f,p,g,m,w,S)},Fn=(f,p,g)=>{const y=p.component=f.component;if(ld(f,p,g))if(y.asyncDep&&!y.asyncResolved){le(y,p,g);return}else y.next=p,td(y.update),y.update();else p.el=f.el,y.vnode=p},pe=(f,p,g,y,m,w,S)=>{const E=()=>{if(f.isMounted){let{next:N,bu:A,u:R,parent:O,vnode:H}=f,Q=N,z;Ft(f,!1),N?(N.el=H.el,le(f,N,S)):N=H,A&&Ms(A),(z=N.props&&N.props.onVnodeBeforeUpdate)&&et(z,O,N,H),Ft(f,!0);const ue=Fi(f),He=f.subTree;f.subTree=ue,T(He,ue,h(He.el),bs(He),f,m,w),N.el=ue.el,Q===null&&ad(f,ue.el),R&&Ne(R,m),(z=N.props&&N.props.onVnodeUpdated)&&Ne(()=>et(z,O,N,H),m)}else{let N;const{el:A,props:R}=p,{bm:O,m:H,parent:Q}=f,z=Fs(p);if(Ft(f,!1),O&&Ms(O),!z&&(N=R&&R.onVnodeBeforeMount)&&et(N,Q,p),Ft(f,!0),A&&Oi){const ue=()=>{f.subTree=Fi(f),Oi(A,f.subTree,f,m,null)};z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=Fi(f);T(null,ue,g,y,f,m,w),p.el=ue.el}if(H&&Ne(H,m),!z&&(N=R&&R.onVnodeMounted)){const ue=p;Ne(()=>et(N,Q,ue),m)}(p.shapeFlag&256||Q&&Fs(Q.vnode)&&Q.vnode.shapeFlag&256)&&f.a&&Ne(f.a,m),f.isMounted=!0,p=g=y=null}},I=f.effect=new to(E,()=>uo(v),f.scope),v=f.update=()=>I.run();v.id=f.uid,Ft(f,!0),v()},le=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Od(f,p.props,y,g),Fd(f,p.children,g),Dn(),Cl(),Pn()},Y=(f,p,g,y,m,w,S,E,I=!1)=>{const v=f&&f.children,N=f?f.shapeFlag:0,A=p.children,{patchFlag:R,shapeFlag:O}=p;if(R>0){if(R&128){Cs(v,A,g,y,m,w,S,E,I);return}else if(R&256){Ot(v,A,g,y,m,w,S,E,I);return}}O&8?(N&16&&ot(v,m,w),A!==v&&u(g,A)):N&16?O&16?Cs(v,A,g,y,m,w,S,E,I):ot(v,m,w,!0):(N&8&&u(g,""),O&16&&F(A,g,y,m,w,S,E,I))},Ot=(f,p,g,y,m,w,S,E,I)=>{f=f||mn,p=p||mn;const v=f.length,N=p.length,A=Math.min(v,N);let R;for(R=0;R<A;R++){const O=p[R]=I?bt(p[R]):nt(p[R]);T(f[R],O,g,null,m,w,S,E,I)}v>N?ot(f,m,w,!0,!1,A):F(p,g,y,m,w,S,E,I,A)},Cs=(f,p,g,y,m,w,S,E,I)=>{let v=0;const N=p.length;let A=f.length-1,R=N-1;for(;v<=A&&v<=R;){const O=f[v],H=p[v]=I?bt(p[v]):nt(p[v]);if(zt(O,H))T(O,H,g,null,m,w,S,E,I);else break;v++}for(;v<=A&&v<=R;){const O=f[A],H=p[R]=I?bt(p[R]):nt(p[R]);if(zt(O,H))T(O,H,g,null,m,w,S,E,I);else break;A--,R--}if(v>A){if(v<=R){const O=R+1,H=O<N?p[O].el:y;for(;v<=R;)T(null,p[v]=I?bt(p[v]):nt(p[v]),g,H,m,w,S,E,I),v++}}else if(v>R)for(;v<=A;)Xe(f[v],m,w,!0),v++;else{const O=v,H=v,Q=new Map;for(v=H;v<=R;v++){const Le=p[v]=I?bt(p[v]):nt(p[v]);Le.key!=null&&Q.set(Le.key,v)}let z,ue=0;const He=R-H+1;let dn=!1,cl=0;const Bn=new Array(He);for(v=0;v<He;v++)Bn[v]=0;for(v=O;v<=A;v++){const Le=f[v];if(ue>=He){Xe(Le,m,w,!0);continue}let Ze;if(Le.key!=null)Ze=Q.get(Le.key);else for(z=H;z<=R;z++)if(Bn[z-H]===0&&zt(Le,p[z])){Ze=z;break}Ze===void 0?Xe(Le,m,w,!0):(Bn[Ze-H]=v+1,Ze>=cl?cl=Ze:dn=!0,T(Le,p[Ze],g,null,m,w,S,E,I),ue++)}const ul=dn?Hd(Bn):mn;for(z=ul.length-1,v=He-1;v>=0;v--){const Le=H+v,Ze=p[Le],hl=Le+1<N?p[Le+1].el:y;Bn[v]===0?T(null,Ze,g,hl,m,w,S,E,I):dn&&(z<0||v!==ul[z]?Mt(Ze,g,hl,2):z--)}}},Mt=(f,p,g,y,m=null)=>{const{el:w,type:S,transition:E,children:I,shapeFlag:v}=f;if(v&6){Mt(f.component.subTree,p,g,y);return}if(v&128){f.suspense.move(p,g,y);return}if(v&64){S.move(f,p,g,fn);return}if(S===Ae){s(w,p,g);for(let A=0;A<I.length;A++)Mt(I[A],p,g,y);s(f.anchor,p,g);return}if(S===Wi){P(f,p,g);return}if(y!==2&&v&1&&E)if(y===0)E.beforeEnter(w),s(w,p,g),Ne(()=>E.enter(w),m);else{const{leave:A,delayLeave:R,afterLeave:O}=E,H=()=>s(w,p,g),Q=()=>{A(w,()=>{H(),O&&O()})};R?R(w,H,Q):Q()}else s(w,p,g)},Xe=(f,p,g,y=!1,m=!1)=>{const{type:w,props:S,ref:E,children:I,dynamicChildren:v,shapeFlag:N,patchFlag:A,dirs:R}=f;if(E!=null&&Er(E,null,g,f,!0),N&256){p.ctx.deactivate(f);return}const O=N&1&&R,H=!Fs(f);let Q;if(H&&(Q=S&&S.onVnodeBeforeUnmount)&&et(Q,p,f),N&6)sf(f.component,g,y);else{if(N&128){f.suspense.unmount(g,y);return}O&&Lt(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,m,fn,y):v&&(w!==Ae||A>0&&A&64)?ot(v,p,g,!1,!0):(w===Ae&&A&384||!m&&N&16)&&ot(I,p,g),y&&ll(f)}(H&&(Q=S&&S.onVnodeUnmounted)||O)&&Ne(()=>{Q&&et(Q,p,f),O&&Lt(f,null,p,"unmounted")},g)},ll=f=>{const{type:p,el:g,anchor:y,transition:m}=f;if(p===Ae){nf(g,y);return}if(p===Wi){K(f);return}const w=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:E}=m,I=()=>S(g,w);E?E(f.el,w,I):I()}else w()},nf=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},sf=(f,p,g)=>{const{bum:y,scope:m,update:w,subTree:S,um:E}=f;y&&Ms(y),m.stop(),w&&(w.active=!1,Xe(S,f,p,g)),E&&Ne(E,p),Ne(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ot=(f,p,g,y=!1,m=!1,w=0)=>{for(let S=w;S<f.length;S++)Xe(f[S],p,g,y,m)},bs=f=>f.shapeFlag&6?bs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),al=(f,p,g)=>{f==null?p._vnode&&Xe(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,g),Cl(),Cc(),p._vnode=f},fn={p:T,um:Xe,m:Mt,r:ll,mt:Me,mc:F,pc:Y,pbc:Z,n:bs,o:t};let ki,Oi;return e&&([ki,Oi]=e(fn)),{render:al,hydrate:ki,createApp:Ud(al,ki)}}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hc(t,e,n=!1){const s=t.children,i=e.children;if(k(s)&&k(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=bt(i[r]),l.el=o.el),n||Hc(o,l)),l.type===mi&&(l.el=o.el)}}function Hd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Vd=t=>t.__isTeleport,Ae=Symbol(void 0),mi=Symbol(void 0),Ye=Symbol(void 0),Wi=Symbol(void 0),zn=[];let qe=null;function _e(t=!1){zn.push(qe=t?null:[])}function jd(){zn.pop(),qe=zn[zn.length-1]||null}let ns=1;function Rl(t){ns+=t}function Vc(t){return t.dynamicChildren=ns>0?qe||mn:null,jd(),ns>0&&qe&&qe.push(t),t}function we(t,e,n,s,i,r){return Vc(ee(t,e,n,s,i,r,!0))}function jc(t,e,n,s,i){return Vc(re(t,e,n,s,i,!0))}function wr(t){return t?t.__v_isVNode===!0:!1}function zt(t,e){return t.type===e.type&&t.key===e.key}const yi="__vInternal",qc=({key:t})=>t!=null?t:null,Bs=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||xe(t)||M(t)?{i:Fe,r:t,k:e,f:!!n}:t:null;function ee(t,e=null,n=null,s=0,i=null,r=t===Ae?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qc(e),ref:e&&Bs(e),scopeId:wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return l?(po(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),ns>0&&!o&&qe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&qe.push(a),a}const re=qd;function qd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Td)&&(t=Ye),wr(t)){const l=Nt(t,e,!0);return n&&po(l,n),ns>0&&!r&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag|=-2,l}if(ip(t)&&(t=t.__vccOpts),e){e=zd(e);let{class:l,style:a}=e;l&&!fe(l)&&(e.class=Yr(l)),se(a)&&(pc(a)&&!k(a)&&(a=be({},a)),e.style=Gr(a))}const o=fe(t)?1:cd(t)?128:Vd(t)?64:se(t)?4:M(t)?2:0;return ee(t,e,n,s,i,o,r,!0)}function zd(t){return t?pc(t)||yi in t?be({},t):t:null}function Nt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Gd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&qc(l),ref:e&&e.ref?n&&i?k(i)?i.concat(Bs(e)):[i,Bs(e)]:Bs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nt(t.ssContent),ssFallback:t.ssFallback&&Nt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Kd(t=" ",e=0){return re(mi,null,t,e)}function Hi(t="",e=!1){return e?(_e(),jc(Ye,null,t)):re(Ye,null,t)}function nt(t){return t==null||typeof t=="boolean"?re(Ye):k(t)?re(Ae,null,t.slice()):typeof t=="object"?bt(t):re(mi,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nt(t)}function po(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),po(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(yi in e)?e._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),s&64?(n=16,e=[Kd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yr([e.class,s.class]));else if(i==="style")e.style=Gr([e.style,s.style]);else if(ai(i)){const r=e[i],o=s[i];o&&r!==o&&!(k(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function et(t,e,n,s=null){We(t,e,7,[n,s])}const Yd=Wc();let Qd=0;function Jd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yd,r={uid:Qd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fc(s,i),emitsOptions:Ec(s,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=id.bind(null,r),t.ce&&t.ce(r),r}let ye=null;const Xd=()=>ye||Fe,Tn=t=>{ye=t,t.scope.on()},Zt=()=>{ye&&ye.scope.off(),ye=null};function zc(t){return t.vnode.shapeFlag&4}let ss=!1;function Zd(t,e=!1){ss=e;const{props:n,children:s}=t.vnode,i=zc(t);kd(t,n,i,e),Ld(t,s);const r=i?ep(t,e):void 0;return ss=!1,r}function ep(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_c(new Proxy(t.ctx,Ad));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?np(t):null;Tn(t),Dn();const r=wt(s,t,0,[t.props,i]);if(Pn(),Zt(),ec(r)){if(r.then(Zt,Zt),e)return r.then(o=>{Dl(t,o,e)}).catch(o=>{di(o,t,0)});t.asyncDep=r}else Dl(t,r,e)}else Kc(t,e)}function Dl(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=gc(e)),Kc(t,n)}let Pl;function Kc(t,e,n){const s=t.type;if(!t.render){if(!e&&Pl&&!s.render){const i=s.template||ho(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=be(be({isCustomElement:r,delimiters:l},o),a);s.render=Pl(i,c)}}t.render=s.render||Ge}Tn(t),Dn(),xd(t),Pn(),Zt()}function tp(t){return new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}})}function np(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=tp(t))},slots:t.slots,emit:t.emit,expose:e}}function vi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gc(_c(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qn)return qn[n](t)},has(e,n){return n in e||n in qn}}))}function sp(t,e=!0){return M(t)?t.displayName||t.name:t.name||e&&t.__name}function ip(t){return M(t)&&"__vccOpts"in t}const rp=(t,e)=>Jf(t,e,ss);function op(t,e,n){const s=arguments.length;return s===2?se(e)&&!k(e)?wr(e)?re(t,null,[e]):re(t,e):re(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wr(n)&&(n=[n]),re(t,e,n))}const lp=Symbol(""),ap=()=>Ls(lp),cp="3.2.45",up="http://www.w3.org/2000/svg",Kt=typeof document<"u"?document:null,kl=Kt&&Kt.createElement("template"),hp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Kt.createElementNS(up,t):Kt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{kl.innerHTML=s?`<svg>${t}</svg>`:t;const l=kl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function fp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dp(t,e,n){const s=t.style,i=fe(n);if(n&&!i){for(const r in n)Ir(s,r,n[r]);if(e&&!fe(e))for(const r in e)n[r]==null&&Ir(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Ol=/\s*!important$/;function Ir(t,e,n){if(k(n))n.forEach(s=>Ir(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pp(t,e);Ol.test(n)?t.setProperty(cn(s),n.replace(Ol,""),"important"):t[s]=n}}const Ml=["Webkit","Moz","ms"],Vi={};function pp(t,e){const n=Vi[e];if(n)return n;let s=rt(e);if(s!=="filter"&&s in t)return Vi[e]=s;s=hi(s);for(let i=0;i<Ml.length;i++){const r=Ml[i]+s;if(r in t)return Vi[e]=r}return e}const Ll="http://www.w3.org/1999/xlink";function _p(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ll,e.slice(6,e.length)):t.setAttributeNS(Ll,e,n);else{const r=uf(e);n==null||r&&!Ja(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function gp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ja(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _n(t,e,n,s){t.addEventListener(e,n,s)}function mp(t,e,n,s){t.removeEventListener(e,n,s)}function yp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=vp(e);if(s){const c=r[e]=Ep(s,i);_n(t,l,c,a)}else o&&(mp(t,l,o,a),r[e]=void 0)}}const Fl=/(?:Once|Passive|Capture)$/;function vp(t){let e;if(Fl.test(t)){e={};let s;for(;s=t.match(Fl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cn(t.slice(2)),e]}let ji=0;const Cp=Promise.resolve(),bp=()=>ji||(Cp.then(()=>ji=0),ji=Date.now());function Ep(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;We(wp(s,n.value),e,5,[s])};return n.value=t,n.attached=bp(),n}function wp(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Bl=/^on[a-z]/,Ip=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?fp(t,s,i):e==="style"?dp(t,n,s):ai(e)?Qr(e)||yp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tp(t,e,s,i))?gp(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_p(t,e,s,i))};function Tp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bl.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bl.test(e)&&fe(n)?!1:e in t}const vt="transition",Un="animation",Vs=(t,{slots:e})=>op(Sc,Sp(t),e);Vs.displayName="Transition";const Gc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vs.props=be({},Sc.props,Gc);const Bt=(t,e=[])=>{k(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ul=t=>t?k(t)?t.some(e=>e.length>1):t.length>1:!1;function Sp(t){const e={};for(const x in t)x in Gc||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=Ap(i),T=C&&C[0],L=C&&C[1],{onBeforeEnter:W,onEnter:ce,onEnterCancelled:P,onLeave:K,onLeaveCancelled:de,onBeforeAppear:mt=W,onAppear:Je=ce,onAppearCancelled:F=P}=e,oe=(x,ie,Me)=>{Ut(x,ie?u:l),Ut(x,ie?c:o),Me&&Me()},Z=(x,ie)=>{x._isLeaving=!1,Ut(x,h),Ut(x,_),Ut(x,d),ie&&ie()},Ee=x=>(ie,Me)=>{const Fn=x?Je:ce,pe=()=>oe(ie,x,Me);Bt(Fn,[ie,pe]),$l(()=>{Ut(ie,x?a:r),Ct(ie,x?u:l),Ul(Fn)||Wl(ie,s,T,pe)})};return be(e,{onBeforeEnter(x){Bt(W,[x]),Ct(x,r),Ct(x,o)},onBeforeAppear(x){Bt(mt,[x]),Ct(x,a),Ct(x,c)},onEnter:Ee(!1),onAppear:Ee(!0),onLeave(x,ie){x._isLeaving=!0;const Me=()=>Z(x,ie);Ct(x,h),Rp(),Ct(x,d),$l(()=>{!x._isLeaving||(Ut(x,h),Ct(x,_),Ul(K)||Wl(x,s,L,Me))}),Bt(K,[x,Me])},onEnterCancelled(x){oe(x,!1),Bt(P,[x])},onAppearCancelled(x){oe(x,!0),Bt(F,[x])},onLeaveCancelled(x){Z(x),Bt(de,[x])}})}function Ap(t){if(t==null)return null;if(se(t))return[qi(t.enter),qi(t.leave)];{const e=qi(t);return[e,e]}}function qi(t){return Xn(t)}function Ct(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ut(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function $l(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xp=0;function Wl(t,e,n,s){const i=t._endId=++xp,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=Np(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=_=>{_.target===t&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},l+1),t.addEventListener(c,d)}function Np(t,e){const n=window.getComputedStyle(t),s=C=>(n[C]||"").split(", "),i=s(`${vt}Delay`),r=s(`${vt}Duration`),o=Hl(i,r),l=s(`${Un}Delay`),a=s(`${Un}Duration`),c=Hl(l,a);let u=null,h=0,d=0;e===vt?o>0&&(u=vt,h=o,d=r.length):e===Un?c>0&&(u=Un,h=c,d=a.length):(h=Math.max(o,c),u=h>0?o>c?vt:Un:null,d=u?u===vt?r.length:a.length:0);const _=u===vt&&/\b(transform|all)(,|$)/.test(s(`${vt}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:_}}function Hl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Vl(n)+Vl(t[s])))}function Vl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Rp(){return document.body.offsetHeight}const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return k(e)?n=>Ms(e,n):e};function Dp(t){t.target.composing=!0}function ql(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rs={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=jl(i);const r=s||i.props&&i.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Xn(l)),t._assign(l)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",Dp),_n(t,"compositionend",ql),_n(t,"change",ql))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=jl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Xn(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Pp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ds=(t,e)=>n=>{if(!("key"in n))return;const s=cn(n.key);if(e.some(i=>i===s||Pp[i]===s))return t(n)},kp=be({patchProp:Ip},hp);let zl;function Op(){return zl||(zl=$d(kp))}const Mp=(...t)=>{const e=Op().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Lp(s);if(!i)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Lp(t){return fe(t)?document.querySelector(t):t}var is={};/**
 * A lightweight image loader plugin for Vue.js
 *
 * @version 3.0.1
 * @author Charlie LEDUC <contact@graphique.io>
 * @license ISC
 * @requires 'vue'
 */Object.defineProperty(is,"__esModule",{value:!0});var Yc=is.plugin=is.preload=void 0;function Qc(t,e){var n=new Image;n.onload=function(){e(n)},n.src=t}function Fp(t,e){e.src=t.src,e.width=t.width,e.height=t.height;var n=["img-square","img-portrait","img-landscape"];n.forEach(function(i){e.classList.remove(i)});var s="img-square";t.width<t.height?s="img-portrait":t.width/t.height>=10/9&&(s="img-landscape"),e.classList.contains(s)||e.classList.add(s),e.removeAttribute("data-src")}function Kl(t,e){var n=e.value;n!==t.src&&(t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",t.setAttribute("data-src",n),Qc(n,function(s){Fp(s,t)}))}function Bp(t,e){var n=t.length,s=0,i=!1;if(t.length)for(var r=0;r<t.length;r++){var o=t[r];Qc(o,function(l){s++,typeof e=="function"&&(e(i,s/n),s>=n&&(i=!0,e(i,1)))})}else typeof e=="function"&&(i=!0,e(i,1))}is.preload=Bp;var Up={install:function(t){t.directive("onload",{mounted:function(e,n,s){if(s.type!=="img"){console.warn("Current node is not an image!");return}Kl(e,n)},updated:function(e,n,s){if(s.type!=="img"){console.warn("Current node is not an image!");return}Kl(e,n)}})}};Yc=is.plugin=Up;const Jc=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},$p={},Wp={id:"intro"},Hp=ee("div",{id:"welcomeBanner"},[ee("h1",{id:"welcomeBannerText"}," Herzlich Willkommen! ")],-1);function Vp(t,e){const n=Oc("Div");return _e(),we("div",Wp,[ee("div",null,[re(n,{Class:"firework1"}),re(n,{Class:"firework3",style:{left:"10%",top:"10%"}}),re(n,{Class:"firework2",style:{left:"29%",top:"30%"}}),re(n,{Class:"firework1",style:{left:"40%",top:"80%"}}),re(n,{Class:"firework3",style:{left:"60%",top:"90%"}}),re(n,{Class:"firework1",style:{left:"80%",top:"90%"}}),re(n,{Class:"firework2",style:{left:"20%",top:"20%"}}),re(n,{Class:"firework2",style:{left:"90%",top:"20%"}})]),Hp])}const jp=Jc($p,[["render",Vp]]);/**
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
 */const Xc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw kn(e)},kn=function(t){return new Error("Firebase Database ("+Xc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Zc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new zp;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const C=c<<6&192|h;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eu=function(t){const e=Zc(t);return _o.encodeByteArray(e,!0)},js=function(t){return eu(t).replace(/\./g,"")},Tr=function(t){try{return _o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kp(t){return tu(void 0,t)}function tu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gp(n)||(t[n]=tu(t[n],e[n]));return t}function Gp(t){return t!=="__proto__"}/**
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
 */function Yp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qp=()=>Yp().__FIREBASE_DEFAULTS__,Jp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},nu=()=>{try{return Qp()||Jp()||Xp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zp=t=>{var e,n;return(n=(e=nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},e_=t=>{const e=Zp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},su=()=>{var t;return(t=nu())===null||t===void 0?void 0:t.config};/**
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
 */class Ci{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function t_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[js(JSON.stringify(n)),js(JSON.stringify(o)),l].join(".")}/**
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
 */function n_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(n_())}function s_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function i_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ru(){return Xc.NODE_ADMIN===!0}function ou(){try{return typeof indexedDB=="object"}catch{return!1}}function lu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function r_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const o_="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=o_,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?l_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new un(i,l,s)}}function l_(t,e){return t.replace(a_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const a_=/\{\$([^}]+)}/g;/**
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
 */function rs(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const au=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rs(Tr(r[0])||""),n=rs(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},c_=function(t){const e=au(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},u_=function(t){const e=au(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Sn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function zs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Yl(r)&&Yl(o)){if(!zs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Yl(t){return t!==null&&typeof t=="object"}/**
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
 */function h_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class f_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function go(t,e){return`${t} failed: ${e} argument `}/**
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
 */const d_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ei=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const p_=1e3,__=2,g_=4*60*60*1e3,m_=.5;function Ql(t,e=p_,n=__){const s=e*Math.pow(n,t),i=Math.round(m_*s*(Math.random()-.5)*2);return Math.min(g_,s+i)}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class ht{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class y_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ci;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C_(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:v_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v_(t){return t===Wt?void 0:t}function C_(t){return t.instantiationMode==="EAGER"}/**
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
 */class b_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new y_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const E_={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},w_=J.INFO,I_={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},T_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=I_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mo{constructor(e){this.name=e,this._logLevel=w_,this._logHandler=T_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const S_=(t,e)=>e.some(n=>t instanceof n);let Jl,Xl;function A_(){return Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x_(){return Xl||(Xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,Sr=new WeakMap,uu=new WeakMap,zi=new WeakMap,yo=new WeakMap;function N_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(It(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cu.set(n,t)}).catch(()=>{}),yo.set(e,t),e}function R_(t){if(Sr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Sr.set(t,e)}let Ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function D_(t){Ar=t(Ar)}function P_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ki(this),e,...n);return uu.set(s,e.sort?e.sort():[e]),It(s)}:x_().includes(t)?function(...e){return t.apply(Ki(this),e),It(cu.get(this))}:function(...e){return It(t.apply(Ki(this),e))}}function k_(t){return typeof t=="function"?P_(t):(t instanceof IDBTransaction&&R_(t),S_(t,A_())?new Proxy(t,Ar):t)}function It(t){if(t instanceof IDBRequest)return N_(t);if(zi.has(t))return zi.get(t);const e=k_(t);return e!==t&&(zi.set(t,e),yo.set(e,t)),e}const Ki=t=>yo.get(t);function O_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=It(o);return s&&o.addEventListener("upgradeneeded",a=>{s(It(o.result),a.oldVersion,a.newVersion,It(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const M_=["get","getKey","getAll","getAllKeys","count"],L_=["put","add","delete","clear"],Gi=new Map;function Zl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gi.get(e))return Gi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=L_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||M_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Gi.set(e,r),r}D_(t=>({...t,get:(e,n,s)=>Zl(e,n)||t.get(e,n,s),has:(e,n)=>!!Zl(e,n)||t.has(e,n)}));/**
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
 */class F_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(B_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function B_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xr="@firebase/app",ea="0.9.25";/**
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
 */const tn=new mo("@firebase/app"),U_="@firebase/app-compat",$_="@firebase/analytics-compat",W_="@firebase/analytics",H_="@firebase/app-check-compat",V_="@firebase/app-check",j_="@firebase/auth",q_="@firebase/auth-compat",z_="@firebase/database",K_="@firebase/database-compat",G_="@firebase/functions",Y_="@firebase/functions-compat",Q_="@firebase/installations",J_="@firebase/installations-compat",X_="@firebase/messaging",Z_="@firebase/messaging-compat",eg="@firebase/performance",tg="@firebase/performance-compat",ng="@firebase/remote-config",sg="@firebase/remote-config-compat",ig="@firebase/storage",rg="@firebase/storage-compat",og="@firebase/firestore",lg="@firebase/firestore-compat",ag="firebase",cg="10.7.1";/**
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
 */const Nr="[DEFAULT]",ug={[xr]:"fire-core",[U_]:"fire-core-compat",[W_]:"fire-analytics",[$_]:"fire-analytics-compat",[V_]:"fire-app-check",[H_]:"fire-app-check-compat",[j_]:"fire-auth",[q_]:"fire-auth-compat",[z_]:"fire-rtdb",[K_]:"fire-rtdb-compat",[G_]:"fire-fn",[Y_]:"fire-fn-compat",[Q_]:"fire-iid",[J_]:"fire-iid-compat",[X_]:"fire-fcm",[Z_]:"fire-fcm-compat",[eg]:"fire-perf",[tg]:"fire-perf-compat",[ng]:"fire-rc",[sg]:"fire-rc-compat",[ig]:"fire-gcs",[rg]:"fire-gcs-compat",[og]:"fire-fst",[lg]:"fire-fst-compat","fire-js":"fire-js",[ag]:"fire-js-all"};/**
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
 */const Ks=new Map,Rr=new Map;function hg(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(Rr.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;Rr.set(e,t);for(const n of Ks.values())hg(n,t);return!0}function ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new bi("app","Firebase",fg);/**
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
 */class dg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const pg=cg;function hu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Tt.create("bad-app-name",{appName:String(i)});if(n||(n=su()),!n)throw Tt.create("no-options");const r=Ks.get(i);if(r){if(zs(n,r.options)&&zs(s,r.config))return r;throw Tt.create("duplicate-app",{appName:i})}const o=new b_(i);for(const a of Rr.values())o.addComponent(a);const l=new dg(n,s,o);return Ks.set(i,l),l}function fu(t=Nr){const e=Ks.get(t);if(!e&&t===Nr&&su())return hu();if(!e)throw Tt.create("no-app",{appName:t});return e}function it(t,e,n){var s;let i=(s=ug[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}Rt(new ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _g="firebase-heartbeat-database",gg=1,os="firebase-heartbeat-store";let Yi=null;function du(){return Yi||(Yi=O_(_g,gg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),Yi}async function mg(t){try{return await(await du()).transaction(os).objectStore(os).get(pu(t))}catch(e){if(e instanceof un)tn.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function ta(t,e){try{const s=(await du()).transaction(os,"readwrite");await s.objectStore(os).put(e,pu(t)),await s.done}catch(n){if(n instanceof un)tn.warn(n.message);else{const s=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(s.message)}}}function pu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yg=1024,vg=30*24*60*60*1e3;class Cg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Eg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=na();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=vg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=na(),{heartbeatsToSend:s,unsentEntries:i}=bg(this._heartbeatsCache.heartbeats),r=js(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function na(){return new Date().toISOString().substring(0,10)}function bg(t,e=yg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Eg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ou()?lu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sa(t){return js(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wg(t){Rt(new ht("platform-logger",e=>new F_(e),"PRIVATE")),Rt(new ht("heartbeat",e=>new Cg(e),"PRIVATE")),it(xr,ea,t),it(xr,ea,"esm2017"),it("fire-js","")}wg("");var Ig="firebase",Tg="10.7.1";/**
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
 */it(Ig,Tg,"app");const Sg=(t,e)=>e.some(n=>t instanceof n);let ia,ra;function Ag(){return ia||(ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xg(){return ra||(ra=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,Dr=new WeakMap,gu=new WeakMap,Qi=new WeakMap,vo=new WeakMap;function Ng(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(St(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_u.set(n,t)}).catch(()=>{}),vo.set(e,t),e}function Rg(t){if(Dr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Dr.set(t,e)}let Pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dg(t){Pr=t(Pr)}function Pg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ji(this),e,...n);return gu.set(s,e.sort?e.sort():[e]),St(s)}:xg().includes(t)?function(...e){return t.apply(Ji(this),e),St(_u.get(this))}:function(...e){return St(t.apply(Ji(this),e))}}function kg(t){return typeof t=="function"?Pg(t):(t instanceof IDBTransaction&&Rg(t),Sg(t,Ag())?new Proxy(t,Pr):t)}function St(t){if(t instanceof IDBRequest)return Ng(t);if(Qi.has(t))return Qi.get(t);const e=kg(t);return e!==t&&(Qi.set(t,e),vo.set(e,t)),e}const Ji=t=>vo.get(t);function Og(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=St(o);return s&&o.addEventListener("upgradeneeded",a=>{s(St(o.result),a.oldVersion,a.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Mg=["get","getKey","getAll","getAllKeys","count"],Lg=["put","add","delete","clear"],Xi=new Map;function oa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xi.get(e))return Xi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Lg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Mg.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Xi.set(e,r),r}Dg(t=>({...t,get:(e,n,s)=>oa(e,n)||t.get(e,n,s),has:(e,n)=>!!oa(e,n)||t.has(e,n)}));const mu="@firebase/installations",Co="0.6.4";/**
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
 */const yu=1e4,vu=`w:${Co}`,Cu="FIS_v2",Fg="https://firebaseinstallations.googleapis.com/v1",Bg=60*60*1e3,Ug="installations",$g="Installations";/**
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
 */const Wg={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},nn=new bi(Ug,$g,Wg);function bu(t){return t instanceof un&&t.code.includes("request-failed")}/**
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
 */function Eu({projectId:t}){return`${Fg}/projects/${t}/installations`}function wu(t){return{token:t.token,requestStatus:2,expiresIn:Vg(t.expiresIn),creationTime:Date.now()}}async function Iu(t,e){const s=(await e.json()).error;return nn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Tu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Hg(t,{refreshToken:e}){const n=Tu(t);return n.append("Authorization",jg(e)),n}async function Su(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Vg(t){return Number(t.replace("s","000"))}function jg(t){return`${Cu} ${t}`}/**
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
 */async function qg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Eu(t),i=Tu(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Cu,appId:t.appId,sdkVersion:vu},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Su(()=>fetch(s,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:wu(c.authToken)}}else throw await Iu("Create Installation",a)}/**
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
 */function Au(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function zg(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kg=/^[cdef][\w-]{21}$/,kr="";function Gg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Yg(t);return Kg.test(n)?n:kr}catch{return kr}}function Yg(t){return zg(t).substr(0,22)}/**
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
 */function wi(t){return`${t.appName}!${t.appId}`}/**
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
 */const xu=new Map;function Nu(t,e){const n=wi(t);Ru(n,e),Qg(n,e)}function Ru(t,e){const n=xu.get(t);if(!!n)for(const s of n)s(e)}function Qg(t,e){const n=Jg();n&&n.postMessage({key:t,fid:e}),Xg()}let Yt=null;function Jg(){return!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=t=>{Ru(t.data.key,t.data.fid)}),Yt}function Xg(){xu.size===0&&Yt&&(Yt.close(),Yt=null)}/**
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
 */const Zg="firebase-installations-database",em=1,sn="firebase-installations-store";let Zi=null;function bo(){return Zi||(Zi=Og(Zg,em,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(sn)}}})),Zi}async function Gs(t,e){const n=wi(t),i=(await bo()).transaction(sn,"readwrite"),r=i.objectStore(sn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Nu(t,e.fid),e}async function Du(t){const e=wi(t),s=(await bo()).transaction(sn,"readwrite");await s.objectStore(sn).delete(e),await s.done}async function Ii(t,e){const n=wi(t),i=(await bo()).transaction(sn,"readwrite"),r=i.objectStore(sn),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Nu(t,l.fid),l}/**
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
 */async function Eo(t){let e;const n=await Ii(t.appConfig,s=>{const i=tm(s),r=nm(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===kr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tm(t){const e=t||{fid:Gg(),registrationStatus:0};return Pu(e)}function nm(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(nn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=sm(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:im(t)}:{installationEntry:e}}async function sm(t,e){try{const n=await qg(t,e);return Gs(t.appConfig,n)}catch(n){throw bu(n)&&n.customData.serverCode===409?await Du(t.appConfig):await Gs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function im(t){let e=await la(t.appConfig);for(;e.registrationStatus===1;)await Au(100),e=await la(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Eo(t);return s||n}return e}function la(t){return Ii(t,e=>{if(!e)throw nn.create("installation-not-found");return Pu(e)})}function Pu(t){return rm(t)?{fid:t.fid,registrationStatus:0}:t}function rm(t){return t.registrationStatus===1&&t.registrationTime+yu<Date.now()}/**
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
 */async function om({appConfig:t,heartbeatServiceProvider:e},n){const s=lm(t,n),i=Hg(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:vu,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Su(()=>fetch(s,l));if(a.ok){const c=await a.json();return wu(c)}else throw await Iu("Generate Auth Token",a)}function lm(t,{fid:e}){return`${Eu(t)}/${e}/authTokens:generate`}/**
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
 */async function wo(t,e=!1){let n;const s=await Ii(t.appConfig,r=>{if(!ku(r))throw nn.create("not-registered");const o=r.authToken;if(!e&&um(o))return r;if(o.requestStatus===1)return n=am(t,e),r;{if(!navigator.onLine)throw nn.create("app-offline");const l=fm(r);return n=cm(t,l),l}});return n?await n:s.authToken}async function am(t,e){let n=await aa(t.appConfig);for(;n.authToken.requestStatus===1;)await Au(100),n=await aa(t.appConfig);const s=n.authToken;return s.requestStatus===0?wo(t,e):s}function aa(t){return Ii(t,e=>{if(!ku(e))throw nn.create("not-registered");const n=e.authToken;return dm(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function cm(t,e){try{const n=await om(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Gs(t.appConfig,s),n}catch(n){if(bu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Du(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Gs(t.appConfig,s)}throw n}}function ku(t){return t!==void 0&&t.registrationStatus===2}function um(t){return t.requestStatus===2&&!hm(t)}function hm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Bg}function fm(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function dm(t){return t.requestStatus===1&&t.requestTime+yu<Date.now()}/**
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
 */async function pm(t){const e=t,{installationEntry:n,registrationPromise:s}=await Eo(e);return s?s.catch(console.error):wo(e).catch(console.error),n.fid}/**
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
 */async function _m(t,e=!1){const n=t;return await gm(n),(await wo(n,e)).token}async function gm(t){const{registrationPromise:e}=await Eo(t);e&&await e}/**
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
 */function mm(t){if(!t||!t.options)throw er("App Configuration");if(!t.name)throw er("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw er(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function er(t){return nn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ou="installations",ym="installations-internal",vm=t=>{const e=t.getProvider("app").getImmediate(),n=mm(e),s=ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Cm=t=>{const e=t.getProvider("app").getImmediate(),n=ps(e,Ou).getImmediate();return{getId:()=>pm(n),getToken:i=>_m(n,i)}};function bm(){Rt(new ht(Ou,vm,"PUBLIC")),Rt(new ht(ym,Cm,"PRIVATE"))}bm();it(mu,Co);it(mu,Co,"esm2017");/**
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
 */const Ys="analytics",Em="firebase_id",wm="origin",Im=60*1e3,Tm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Io="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pe=new mo("@firebase/analytics");/**
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
 */const Sm={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new bi("analytics","Analytics",Sm);/**
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
 */function Am(t){if(!t.startsWith(Io)){const e=Be.create("invalid-gtag-resource",{gtagURL:t});return Pe.warn(e.message),""}return t}function Mu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xm(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Nm(t,e){const n=xm("firebase-js-sdk-policy",{createScriptURL:Am}),s=document.createElement("script"),i=`${Io}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Rm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Dm(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const a=(await Mu(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){Pe.error(l)}t("config",i,r)}async function Pm(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Mu(n);for(const a of o){const c=l.find(h=>h.measurementId===a),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Pe.error(r)}}function km(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,a]=o;await Pm(t,e,n,l,a)}else if(r==="config"){const[l,a]=o;await Dm(t,e,n,s,l,a)}else if(r==="consent"){const[l]=o;t("consent","update",l)}else if(r==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Pe.error(l)}}return i}function Om(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=km(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Mm(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Io)&&n.src.includes(t))return n;return null}/**
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
 */const Lm=30,Fm=1e3;class Bm{constructor(e={},n=Fm){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Lu=new Bm;function Um(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $m(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Um(s)},r=Tm.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Wm(t,e=Lu,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Be.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Be.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new jm;return setTimeout(async()=>{l.abort()},n!==void 0?n:Im),Fu({appId:s,apiKey:i,measurementId:r},o,l,e)}async function Fu(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Lu){var r;const{appId:o,measurementId:l}=t;try{await Hm(s,e)}catch(a){if(l)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await $m(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!Vm(c)){if(i.deleteThrottleMetadata(o),l)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ql(n,i.intervalMillis,Lm):Ql(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Pe.debug(`Calling attemptFetch again in ${u} millis`),Fu(t,h,s,i)}}function Hm(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Be.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Vm(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qm(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function zm(){if(ou())try{await lu()}catch(t){return Pe.warn(Be.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Pe.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Km(t,e,n,s,i,r,o){var l;const a=Wm(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Pe.error(_)),e.push(a);const c=zm().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([a,c]);Mm(r)||Nm(r,u.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[wm]="firebase",d.update=!0,h!=null&&(d[Em]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class Gm{constructor(e){this.app=e}_delete(){return delete Kn[this.app.options.appId],Promise.resolve()}}let Kn={},ca=[];const ua={};let tr="dataLayer",Ym="gtag",ha,Bu,fa=!1;function Qm(){const t=[];if(s_()&&t.push("This is a browser extension environment."),r_()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:e});Pe.warn(n.message)}}function Jm(t,e,n){Qm();const s=t.options.appId;if(!s)throw Be.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(Kn[s]!=null)throw Be.create("already-exists",{id:s});if(!fa){Rm(tr);const{wrappedGtag:r,gtagCore:o}=Om(Kn,ca,ua,tr,Ym);Bu=r,ha=o,fa=!0}return Kn[s]=Km(t,ca,ua,e,ha,tr,n),new Gm(t)}function Xm(t=fu()){t=kt(t);const e=ps(t,Ys);return e.isInitialized()?e.getImmediate():Zm(t)}function Zm(t,e={}){const n=ps(t,Ys);if(n.isInitialized()){const i=n.getImmediate();if(zs(e,n.getOptions()))return i;throw Be.create("already-initialized")}return n.initialize({options:e})}function ey(t,e,n,s){t=kt(t),qm(Bu,Kn[t.app.options.appId],e,n,s).catch(i=>Pe.error(i))}const da="@firebase/analytics",pa="0.10.0";function ty(){Rt(new ht(Ys,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Jm(s,i,n)},"PUBLIC")),Rt(new ht("analytics-internal",t,"PRIVATE")),it(da,pa),it(da,pa,"esm2017");function t(e){try{const n=e.getProvider(Ys).getImmediate();return{logEvent:(s,i,r)=>ey(n,s,i,r)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}ty();const _a="@firebase/database",ga="1.0.2";/**
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
 */let Uu="";function ny(t){Uu=t}/**
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
 */class sy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class iy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $u=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sy(e)}}catch{}return new iy},Qt=$u("localStorage"),Or=$u("sessionStorage");/**
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
 */const bn=new mo("@firebase/database"),ry=function(){let t=1;return function(){return t++}}(),Wu=function(t){const e=d_(t),n=new f_;n.update(e);const s=n.digest();return _o.encodeByteArray(s)},_s=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=_s.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let en=null,ma=!0;const oy=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(bn.logLevel=J.VERBOSE,en=bn.log.bind(bn),e&&Or.set("logging_enabled",!0)):typeof t=="function"?en=t:(en=null,Or.remove("logging_enabled"))},Ie=function(...t){if(ma===!0&&(ma=!1,en===null&&Or.get("logging_enabled")===!0&&oy(!0)),en){const e=_s.apply(null,t);en(e)}},gs=function(t){return function(...e){Ie(t,...e)}},Mr=function(...t){const e="FIREBASE INTERNAL ERROR: "+_s(...t);bn.error(e)},ft=function(...t){const e=`FIREBASE FATAL ERROR: ${_s(...t)}`;throw bn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+_s(...t);bn.warn(e)},ly=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ay=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},An="[MIN_NAME]",rn="[MAX_NAME]",On=function(t,e){if(t===e)return 0;if(t===An||e===rn)return-1;if(e===An||t===rn)return 1;{const n=ya(t),s=ya(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},cy=function(t,e){return t===e?0:t<e?-1:1},$n=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},To=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=To(t[e[s]]);return n+="}",n},Vu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ju=function(t){b(!Hu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},uy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const dy=new RegExp("^-?(0*)\\d{1,10}$"),py=-2147483648,_y=2147483647,ya=function(t){if(dy.test(t)){const e=Number(t);if(e>=py&&e<=_y)return e}return null},Mn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},gy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class my{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class En{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}En.OWNER="owner";/**
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
 */const So="5",qu="v",zu="s",Ku="r",Gu="f",Yu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qu="ls",Ju="p",Lr="ac",Xu="websocket",Zu="long_polling";/**
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
 */class eh{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function th(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Xu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vy(t)&&(n.ns=t.namespace);const i=[];return Oe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Cy{constructor(){this.counters_={}}incrementCounter(e,n=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Kp(this.counters_)}}/**
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
 */const nr={},sr={};function Ao(t){const e=t.toString();return nr[e]||(nr[e]=new Cy),nr[e]}function by(t,e){const n=t.toString();return sr[n]||(sr[n]=e()),sr[n]}/**
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
 */class Ey{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Mn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const va="start",wy="close",Iy="pLPCommand",Ty="pRTLPCB",nh="id",sh="pw",ih="ser",Sy="cb",Ay="seg",xy="ts",Ny="d",Ry="dframe",rh=1870,oh=30,Dy=rh-oh,Py=25e3,ky=3e4;class gn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gs(e),this.stats_=Ao(n),this.urlFn=a=>(this.appCheckToken&&(a[Lr]=this.appCheckToken),th(n,Zu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ey(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ky)),ay(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===va)this.id=l,this.password=a;else if(o===wy)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[va]="t",s[ih]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Sy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qu]=So,this.transportSessionId&&(s[zu]=this.transportSessionId),this.lastSessionId&&(s[Qu]=this.lastSessionId),this.applicationId&&(s[Ju]=this.applicationId),this.appCheckToken&&(s[Lr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yu.test(location.hostname)&&(s[Ku]=Gu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gn.forceAllow_=!0}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){return gn.forceAllow_?!0:!gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uy()&&!hy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eu(n),i=Vu(s,Dy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ry]="t",s[nh]=e,s[sh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ry(),window[Iy+this.uniqueCallbackIdentifier]=e,window[Ty+this.uniqueCallbackIdentifier]=n,this.myIFrame=xo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nh]=this.myID,e[sh]=this.myPW,e[ih]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+oh+s.length<=rh;){const o=this.pendingSegs.shift();s=s+"&"+Ay+i+"="+o.seg+"&"+xy+i+"="+o.ts+"&"+Ny+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Py)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Oy=16384,My=45e3;let Qs=null;typeof MozWebSocket<"u"?Qs=MozWebSocket:typeof WebSocket<"u"&&(Qs=WebSocket);class je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gs(this.connId),this.stats_=Ao(n),this.connURL=je.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[qu]=So,typeof location<"u"&&location.hostname&&Yu.test(location.hostname)&&(o[Ku]=Gu),n&&(o[zu]=n),s&&(o[Qu]=s),i&&(o[Lr]=i),r&&(o[Ju]=r),th(e,Xu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let s;ru(),this.mySock=new Qs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qs!==null&&!je.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vu(n,Oy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(My))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2;je.healthyTimeout=3e4;/**
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
 */class ls{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gn,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=je&&je.isAvailable();let s=n&&!je.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[je];else{const i=this.transports_=[];for(const r of ls.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
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
 */const Ly=6e4,Fy=5e3,By=10*1024,Uy=100*1024,ir="t",Ca="d",$y="s",ba="r",Wy="e",Ea="o",wa="a",Ia="n",Ta="p",Hy="h";class Vy{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gs("c:"+this.id+":"),this.transportManager_=new ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>By?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ir in e){const n=e[ir];n===wa?this.upgradeIfSecondaryHealthy_():n===ba?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ea&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$n("t",e),s=$n("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ta,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ia,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$n("t",e),s=$n("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$n(ir,e);if(Ca in e){const s=e[Ca];if(n===Hy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ia){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$y?this.onConnectionShutdown_(s):n===ba?this.onReset_(s):n===Wy?Mr("Server Error: "+s):n===Ea?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),So!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Gn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ly))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ta,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class lh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ah{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Js extends ah{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!iu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Js}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sa=32,Aa=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new G("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function ch(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function he(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new G(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=B(t),s=B(e);if(n===null)return e;if(n===s)return Re(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function No(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class qy{constructor(e,n){this.errorPrefix_=n,this.parts_=uh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ei(this.parts_[s]);fh(this)}}function zy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ei(e),fh(t)}function Ky(t){const e=t.parts_.pop();t.byteLength_-=Ei(e),t.parts_.length>0&&(t.byteLength_-=1)}function fh(t){if(t.byteLength_>Aa)throw new Error(t.errorPrefix_+"has a key path longer than "+Aa+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sa+") or object contains a cycle "+Ht(t))}function Ht(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ro extends ah{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ro}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wn=1e3,Gy=60*5*1e3,xa=30*1e3,Yy=1.3,Qy=3e4,Jy="server_kill",Na=3;class ct extends lh{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ct.nextPersistentConnectionId_++,this.log_=gs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=Gy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ru())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Js.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ci,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ct.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_t(e,"w")){const s=Sn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||u_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=c_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mr("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qy&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Vy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gl(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>To(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Na&&(this.reconnectDelay_=xa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Na&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Uu.replace(/\./g,"-")]=1,iu()?e["framework.cordova"]=1:i_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Js.getInstance().currentlyOnline();return Gl(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class Ti{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new U(An,e),i=new U(An,n);return this.compare(s,i)!==0}minPost(){return U.MIN}}/**
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
 */let Ps;class dh extends Ti{static get __EMPTY_NODE(){return Ps}static set __EMPTY_NODE(e){Ps=e}compare(e,n){return On(e.name,n.name)}isDefinedOn(e){throw kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(rn,Ps)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Ps)}toString(){return".key"}}const wn=new dh;/**
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
 */class ks{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:me.RED,this.left=i!=null?i:De.EMPTY_NODE,this.right=r!=null?r:De.EMPTY_NODE}copy(e,n,s,i,r){return new me(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Xy{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ks(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new Xy;/**
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
 */function Zy(t,e){return On(t.name,e.name)}function Do(t,e){return On(t,e)}/**
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
 */let Fr;function ev(t){Fr=t}const ph=function(t){return typeof t=="number"?"number:"+ju(t):"string:"+t},_h=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else b(t===Fr||t.isEmpty(),"priority of unexpected type.");b(t===Fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ra;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_h(this.priorityNode_)}static set __childrenNodeConstructor(e){Ra=e}static get __childrenNodeConstructor(){return Ra}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:B(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=B(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ph(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ju(this.value_):e+=this.value_,this.lazyHash_=Wu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gh,mh;function tv(t){gh=t}function nv(t){mh=t}class sv extends Ti{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?On(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(rn,new ge("[PRIORITY-POST]",mh))}makePost(e,n){const s=gh(e);return new U(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const ae=new sv;/**
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
 */const iv=Math.log(2);class rv{constructor(e){const n=r=>parseInt(Math.log(r)/iv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new me(d,h.node,me.BLACK,null,null);{const _=parseInt(u/2,10)+a,C=i(a,_),T=i(_+1,c);return h=t[_],d=n?n(h):h,new me(d,h.node,me.BLACK,C,T)}},r=function(a){let c=null,u=null,h=t.length;const d=function(C,T){const L=h-C,W=h;h-=C;const ce=i(L+1,W),P=t[L],K=n?n(P):P;_(new me(K,P.node,T,null,ce))},_=function(C){c?(c.left=C,c=C):(u=C,c=C)};for(let C=0;C<a.count;++C){const T=a.nextBitIsOne(),L=Math.pow(2,a.count-(C+1));T?d(L,me.BLACK):(d(L,me.BLACK),d(L,me.RED))}return u},o=new rv(t.length),l=r(o);return new De(s||e,l)};/**
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
 */let rr;const pn={};class at{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(pn&&ae,"ChildrenNode.ts has not been loaded"),rr=rr||new at({".priority":pn},{".priority":ae}),rr}get(e){const n=Sn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,n){b(e!==wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(U.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Xs(s,e.getCompare()):l=pn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new at(u,c)}addToIndexes(e,n){const s=qs(this.indexes_,(i,r)=>{const o=Sn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===pn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Xs(l,o.getCompare())}else return pn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new at(s,this.indexSet_)}removeFromIndexes(e,n){const s=qs(this.indexes_,i=>{if(i===pn)return i;{const r=n.get(e.name);return r?i.remove(new U(e.name,r)):i}});return new at(s,this.indexSet_)}}/**
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
 */let Hn;class D{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_h(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hn||(Hn=new D(new De(Do),null,at.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new U(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hn:this.priorityNode_;return new D(i,o,r)}}updateChild(e,n){const s=B(e);if(s===null)return n;{b(B(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(X(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),s++,r&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ph(this.getPriority().val())+":"),this.forEachChild(ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new U(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ms?-1:0}withIndex(e){if(e===wn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ae),i=n.getIterator(ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ov extends D{constructor(){super(new De(Do),D.EMPTY_NODE,at.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ms=new ov;Object.defineProperties(U,{MIN:{value:new U(An,D.EMPTY_NODE)},MAX:{value:new U(rn,ms)}});dh.__EMPTY_NODE=D.EMPTY_NODE;ge.__childrenNodeConstructor=D;ev(ms);nv(ms);/**
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
 */const lv=!0;function Ce(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,Ce(e))}if(!(t instanceof Array)&&lv){const n=[];let s=!1;if(Oe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return D.EMPTY_NODE;const r=Xs(n,Zy,o=>o.name,Do);if(s){const o=Xs(n,ae.getCompare());return new D(r,Ce(e),new at({".priority":o},{".priority":ae}))}else return new D(r,Ce(e),at.Default)}else{let n=D.EMPTY_NODE;return Oe(t,(s,i)=>{if(_t(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}tv(Ce);/**
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
 */class av extends Ti{constructor(e){super(),this.indexPath_=e,b(!$(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?On(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,s);return new U(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ms);return new U(rn,e)}toString(){return uh(this.indexPath_,0).join("/")}}/**
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
 */class cv extends Ti{compare(e,n){const s=e.node.compareTo(n.node);return s===0?On(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const s=Ce(e);return new U(n,s)}toString(){return".value"}}const uv=new cv;/**
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
 */function yh(t){return{type:"value",snapshotNode:t}}function xn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function as(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Po{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(as(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(xn(n,s)):o.trackChildChange(cs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(as(i,r))}),n.isLeafNode()||n.forEachChild(ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cs(i,r,o))}else s.trackChildChange(xn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class us{constructor(e){this.indexedFilter_=new Po(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new U(n,s))||(s=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(ae,(o,l)=>{r.matches(new U(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class fv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new U(n,s))||(s=D.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new U(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(cs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(as(n,h));const T=l.updateImmediateChild(n,D.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(xn(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(as(c.name,c.node)),r.trackChildChange(xn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
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
 */class ko{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:An}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new ko;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dv(t){return t.loadsAllData()?new Po(t.getIndex()):t.hasLimit()?new fv(t):new us(t)}function Da(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===uv?n="$value":t.index_===wn?n="$key":(b(t.index_ instanceof av,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
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
 */class Zs extends lh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Da(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Sn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Zs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Da(e._queryParams),s=e._path.toString(),i=new Ci;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+h_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=rs(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class pv{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ei(){return{value:null,children:new Map}}function vh(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=B(e);t.children.has(s)||t.children.set(s,ei());const i=t.children.get(s);e=X(e),vh(i,e,n)}}function Br(t,e,n){t.value!==null?n(e,t.value):_v(t,(s,i)=>{const r=new G(e.toString()+"/"+s);Br(i,r,n)})}function _v(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class gv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Oe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ka=10*1e3,mv=30*1e3,yv=5*60*1e3;class vv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gv(e);const s=ka+(mv-ka)*Math.random();Gn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Oe(e,(i,r)=>{r>0&&_t(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Gn(this.reportStats_.bind(this),Math.floor(Math.random()*2*yv))}}/**
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
 */var Ke;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ke||(Ke={}));function Ch(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ti{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ke.ACK_USER_WRITE,this.source=Ch()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new ti(j(),n,this.revert)}}else return b(B(this.path)===e,"operationForChild called for unrelated child."),new ti(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class hs{constructor(e,n){this.source=e,this.path=n,this.type=Ke.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new hs(this.source,j()):new hs(this.source,X(this.path))}}/**
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
 */class on{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ke.OVERWRITE}operationForChild(e){return $(this.path)?new on(this.source,j(),this.snap.getImmediateChild(e)):new on(this.source,X(this.path),this.snap)}}/**
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
 */class fs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ke.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new on(this.source,j(),n.value):new fs(this.source,j(),n)}else return b(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ln{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Cv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hv(o.childName,o.snapshotNode))}),Vn(t,i,"child_removed",e,s,n),Vn(t,i,"child_added",e,s,n),Vn(t,i,"child_moved",r,s,n),Vn(t,i,"child_changed",e,s,n),Vn(t,i,"value",e,s,n),i}function Vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>wv(t,l,a)),o.forEach(l=>{const a=Ev(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ev(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wv(t,e,n){if(e.childName==null||n.childName==null)throw kn("Should only compare child_ events.");const s=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Si(t,e){return{eventCache:t,serverCache:e}}function Yn(t,e,n,s){return Si(new ln(e,n,s),t.serverCache)}function bh(t,e,n,s){return Si(t.eventCache,new ln(e,n,s))}function Ur(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function an(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let or;const Iv=()=>(or||(or=new De(cy)),or);class te{constructor(e,n=Iv()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Oe(e,(s,i)=>{n=n.set(new G(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if($(e))return null;{const s=B(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(X(e),n);return r!=null?{path:he(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=B(e),s=this.children.get(n);return s!==null?s.subtree(X(e)):new te(null)}}set(e,n){if($(e))return new te(n,this.children);{const s=B(e),r=(this.children.get(s)||new te(null)).set(X(e),n),o=this.children.insert(s,r);return new te(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=B(e),s=this.children.get(n);if(s){const i=s.remove(X(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if($(e))return this.value;{const n=B(e),s=this.children.get(n);return s?s.get(X(e)):null}}setTree(e,n){if($(e))return n;{const s=B(e),r=(this.children.get(s)||new te(null)).setTree(X(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new te(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(he(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if($(e))return null;{const r=B(e),o=this.children.get(r);return o?o.findOnPath_(X(e),he(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if($(e))return this;{this.value&&s(n,this.value);const i=B(e),r=this.children.get(i);return r?r.foreachOnPath_(X(e),he(n,i),s):new te(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(he(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new te(null))}}function Qn(t,e,n){if($(e))return new Qe(new te(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Re(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new te(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function Oa(t,e,n){let s=t;return Oe(n,(i,r)=>{s=Qn(s,he(e,i),r)}),s}function Ma(t,e){if($(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new te(null));return new Qe(n)}}function $r(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function La(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(s,i)=>{e.push(new U(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new U(s,i.value))}),e}function At(t,e){if($(e))return t;{const n=hn(t,e);return n!=null?new Qe(new te(n)):new Qe(t.writeTree_.subtree(e))}}function Wr(t){return t.writeTree_.isEmpty()}function Nn(t,e){return Eh(j(),t.writeTree_,e)}function Eh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Eh(he(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(he(t,".priority"),s)),n}}/**
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
 */function Lo(t,e){return Sh(e,t)}function Tv(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Qn(t.visibleWrites,e,n)),t.lastWriteId=s}function Sv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Av(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xv(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Nv(t),!0;if(s.snap)t.visibleWrites=Ma(t.visibleWrites,s.path);else{const l=s.children;Oe(l,a=>{t.visibleWrites=Ma(t.visibleWrites,he(s.path,a))})}return!0}else return!1}function xv(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(he(t.path,n),e))return!0;return!1}function Nv(t){t.visibleWrites=wh(t.allWrites,Rv,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Rv(t){return t.visible}function wh(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Re(n,o),s=Qn(s,l,r.snap)):ze(o,n)&&(l=Re(o,n),s=Qn(s,j(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Re(n,o),s=Oa(s,l,r.children);else if(ze(o,n))if(l=Re(o,n),$(l))s=Oa(s,j(),r.children);else{const a=Sn(r.children,B(l));if(a){const c=a.getChild(X(l));s=Qn(s,j(),c)}}}else throw kn("WriteRecord should have .snap or .children")}}return s}function Ih(t,e,n,s,i){if(!s&&!i){const r=hn(t.visibleWrites,e);if(r!=null)return r;{const o=At(t.visibleWrites,e);if(Wr(o))return n;if(n==null&&!$r(o,j()))return null;{const l=n||D.EMPTY_NODE;return Nn(o,l)}}}else{const r=At(t.visibleWrites,e);if(!i&&Wr(r))return n;if(!i&&n==null&&!$r(r,j()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},l=wh(t.allWrites,o,e),a=n||D.EMPTY_NODE;return Nn(l,a)}}}function Dv(t,e,n){let s=D.EMPTY_NODE;const i=hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=At(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const a=Nn(At(r,new G(o)),l);s=s.updateImmediateChild(o,a)}),La(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(t.visibleWrites,e);return La(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Pv(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=he(e,n);if($r(t.visibleWrites,r))return null;{const o=At(t.visibleWrites,r);return Wr(o)?i.getChild(n):Nn(o,i.getChild(n))}}function kv(t,e,n,s){const i=he(e,n),r=hn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=At(t.visibleWrites,i);return Nn(o,s.getNode().getImmediateChild(n))}else return null}function Ov(t,e){return hn(t.visibleWrites,e)}function Mv(t,e,n,s,i,r,o){let l;const a=At(t.visibleWrites,e),c=hn(a,j());if(c!=null)l=c;else if(n!=null)l=Nn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Lv(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function ni(t,e,n,s){return Ih(t.writeTree,t.treePath,e,n,s)}function Fo(t,e){return Dv(t.writeTree,t.treePath,e)}function Fa(t,e,n,s){return Pv(t.writeTree,t.treePath,e,n,s)}function si(t,e){return Ov(t.writeTree,he(t.treePath,e))}function Fv(t,e,n,s,i,r){return Mv(t.writeTree,t.treePath,e,n,s,i,r)}function Bo(t,e,n){return kv(t.writeTree,t.treePath,e,n)}function Th(t,e){return Sh(he(t.treePath,e),t.writeTree)}function Sh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Bv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,cs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,xn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,cs(s,e.snapshotNode,i.oldSnap));else throw kn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Uv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ah=new Uv;class Uo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:an(this.viewCache_),r=Fv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function $v(t){return{filter:t}}function Wv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Hv(t,e,n,s,i){const r=new Bv;let o,l;if(n.type===Ke.OVERWRITE){const c=n;c.source.fromUser?o=Hr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!$(c.path),o=ii(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ke.MERGE){const c=n;c.source.fromUser?o=jv(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Vr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ke.ACK_USER_WRITE){const c=n;c.revert?o=Kv(t,e,c.path,s,i,r):o=qv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ke.LISTEN_COMPLETE)o=zv(t,e,n.path,s,r);else throw kn("Unknown operation type: "+n.type);const a=r.getChanges();return Vv(e,o,a),{viewCache:o,changes:a}}function Vv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ur(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(yh(Ur(e)))}}function xh(t,e,n,s,i,r){const o=e.eventCache;if(si(s,n)!=null)return e;{let l,a;if($(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=an(e),u=c instanceof D?c:D.EMPTY_NODE,h=Fo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ni(s,an(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=B(n);if(c===".priority"){b(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Fa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=X(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Fa(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Bo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Yn(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function ii(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if($(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=B(n);if(!a.isCompleteForPath(n)&&Dt(n)>1)return e;const C=X(n),L=a.getNode().getImmediateChild(_).updateChild(C,s);_===".priority"?c=u.updatePriority(a.getNode(),L):c=u.updateChild(a.getNode(),_,L,C,Ah,null)}const h=bh(e,c,a.isFullyInitialized()||$(n),u.filtersNodes()),d=new Uo(i,h,r);return xh(t,h,n,i,d,l)}function Hr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Uo(i,e,r);if($(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Yn(e,c,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Yn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=X(n),_=l.getNode().getImmediateChild(h);let C;if($(d))C=s;else{const T=u.getCompleteChild(h);T!=null?ch(d)===".priority"&&T.getChild(hh(d)).isEmpty()?C=T:C=T.updateChild(d,s):C=D.EMPTY_NODE}if(_.equals(C))a=e;else{const T=t.filter.updateChild(l.getNode(),h,C,d,u,o);a=Yn(e,T,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ba(t,e){return t.eventCache.isCompleteForChild(e)}function jv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=he(n,a);Ba(e,B(u))&&(l=Hr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=he(n,a);Ba(e,B(u))||(l=Hr(t,l,u,c,i,r,o))}),l}function Ua(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Vr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;$(n)?c=s:c=new te(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),C=Ua(t,_,d);a=ii(t,a,new G(h),C,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const C=e.serverCache.getNode().getImmediateChild(h),T=Ua(t,C,d);a=ii(t,a,new G(h),T,i,r,o,l)}}),a}function qv(t,e,n,s,i,r,o){if(si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ii(t,e,n,a.getNode().getChild(n),i,r,l,o);if($(n)){let c=new te(null);return a.getNode().forEachChild(wn,(u,h)=>{c=c.set(new G(u),h)}),Vr(t,e,n,c,i,r,l,o)}else return e}else{let c=new te(null);return s.foreach((u,h)=>{const d=he(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Vr(t,e,n,c,i,r,l,o)}}function zv(t,e,n,s,i){const r=e.serverCache,o=bh(e,r.getNode(),r.isFullyInitialized()||$(n),r.isFiltered());return xh(t,o,n,s,Ah,i)}function Kv(t,e,n,s,i,r){let o;if(si(s,n)!=null)return e;{const l=new Uo(s,e,i),a=e.eventCache.getNode();let c;if($(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ni(s,an(e));else{const h=e.serverCache.getNode();b(h instanceof D,"serverChildren would be complete if leaf node"),u=Fo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=B(n);let h=Bo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,X(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,D.EMPTY_NODE,X(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ni(s,an(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||si(s,j())!=null,Yn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Gv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Po(s.getIndex()),r=dv(s);this.processor_=$v(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(D.EMPTY_NODE,l.getNode(),null),u=new ln(a,o.isFullyInitialized(),i.filtersNodes()),h=new ln(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Si(h,u),this.eventGenerator_=new Cv(this.query_)}get query(){return this.query_}}function Yv(t){return t.viewCache_.serverCache.getNode()}function Qv(t,e){const n=an(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function $a(t){return t.eventRegistrations_.length===0}function Jv(t,e){t.eventRegistrations_.push(e)}function Wa(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ha(t,e,n,s){e.type===Ke.MERGE&&e.source.queryId!==null&&(b(an(t.viewCache_),"We should always have a full cache before handling merges"),b(Ur(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Hv(t.processor_,i,e,n,s);return Wv(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Nh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Xv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(r,o)=>{s.push(xn(r,o))}),n.isFullyInitialized()&&s.push(yh(n.getNode())),Nh(t,s,n.getNode(),e)}function Nh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return bv(t.eventGenerator_,e,n,i)}/**
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
 */let ri;class Zv{constructor(){this.views=new Map}}function eC(t){b(!ri,"__referenceConstructor has already been defined"),ri=t}function tC(){return b(ri,"Reference.ts has not been loaded"),ri}function nC(t){return t.views.size===0}function $o(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Ha(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ha(o,e,n,s));return r}}function sC(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ni(n,i?s:null),a=!1;l?a=!0:s instanceof D?(l=Fo(n,s),a=!1):(l=D.EMPTY_NODE,a=!1);const c=Si(new ln(l,a,!1),new ln(s,i,!1));return new Gv(e,c)}return o}function iC(t,e,n,s,i,r){const o=sC(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Jv(o,n),Xv(o,n)}function rC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Pt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Wa(c,n,s)),$a(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Wa(a,n,s)),$a(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Pt(t)&&r.push(new(tC())(e._repo,e._path)),{removed:r,events:o}}function Rh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const s of t.views.values())n=n||Qv(s,e);return n}function Dh(t,e){if(e._queryParams.loadsAllData())return Ai(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ph(t,e){return Dh(t,e)!=null}function Pt(t){return Ai(t)!=null}function Ai(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let oi;function oC(t){b(!oi,"__referenceConstructor has already been defined"),oi=t}function lC(){return b(oi,"Reference.ts has not been loaded"),oi}let aC=1;class Va{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=Lv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kh(t,e,n,s,i){return Tv(t.pendingWriteTree_,e,n,s,i),i?ys(t,new on(Ch(),e,n)):[]}function Jt(t,e,n=!1){const s=Sv(t.pendingWriteTree_,e);if(Av(t.pendingWriteTree_,e)){let r=new te(null);return s.snap!=null?r=r.set(j(),!0):Oe(s.children,o=>{r=r.set(new G(o),!0)}),ys(t,new ti(s.path,r,n))}else return[]}function xi(t,e,n){return ys(t,new on(Oo(),e,n))}function cC(t,e,n){const s=te.fromObject(n);return ys(t,new fs(Oo(),e,s))}function uC(t,e){return ys(t,new hs(Oo(),e))}function hC(t,e,n){const s=Ho(t,n);if(s){const i=Vo(s),r=i.path,o=i.queryId,l=Re(r,e),a=new hs(Mo(o),l);return jo(t,r,a)}else return[]}function jr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ph(o,e))){const a=rC(o,e,n,s);nC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Pt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=pC(d);for(let C=0;C<_.length;++C){const T=_[C],L=T.query,W=Lh(t,T);t.listenProvider_.startListening(Jn(L),li(t,L),W.hashFn,W.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Jn(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Ni(d));t.listenProvider_.stopListening(Jn(d),_)}))}_C(t,c)}return l}function fC(t,e,n,s){const i=Ho(t,s);if(i!=null){const r=Vo(i),o=r.path,l=r.queryId,a=Re(o,e),c=new on(Mo(l),a,n);return jo(t,o,c)}else return[]}function dC(t,e,n,s){const i=Ho(t,s);if(i){const r=Vo(i),o=r.path,l=r.queryId,a=Re(o,e),c=te.fromObject(n),u=new fs(Mo(l),a,c);return jo(t,o,u)}else return[]}function ja(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const C=Re(d,i);r=r||In(_,C),o=o||Pt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Pt(l),r=r||In(l,j())):(l=new Zv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,C)=>{const T=In(C,j());T&&(r=r.updateImmediateChild(_,T))}));const c=Ph(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ni(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=gC();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Lo(t.pendingWriteTree_,i);let h=iC(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Dh(l,e);h=h.concat(mC(t,e,d))}return h}function Wo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Re(o,e),c=In(l,a);if(c)return c});return Ih(i,e,r,n,!0)}function ys(t,e){return Oh(e,t.syncPointTree_,null,Lo(t.pendingWriteTree_,j()))}function Oh(t,e,n,s){if($(t.path))return Mh(t,e,n,s);{const i=e.get(j());n==null&&i!=null&&(n=In(i,j()));let r=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Th(s,o);r=r.concat(Oh(l,a,c,u))}return i&&(r=r.concat($o(i,t,s,n))),r}}function Mh(t,e,n,s){const i=e.get(j());n==null&&i!=null&&(n=In(i,j()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Th(s,o),u=t.operationForChild(o);u&&(r=r.concat(Mh(u,l,a,c)))}),i&&(r=r.concat($o(i,t,s,n))),r}function Lh(t,e){const n=e.query,s=li(t,n);return{hashFn:()=>(Yv(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?hC(t,n._path,s):uC(t,n._path);{const r=fy(i,n);return jr(t,n,null,r)}}}}function li(t,e){const n=Ni(e);return t.queryToTagMap.get(n)}function Ni(t){return t._path.toString()+"$"+t._queryIdentifier}function Ho(t,e){return t.tagToQueryMap.get(e)}function Vo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function jo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Lo(t.pendingWriteTree_,e);return $o(s,n,i,null)}function pC(t){return t.fold((e,n,s)=>{if(n&&Pt(n))return[Ai(n)];{let i=[];return n&&(i=Rh(n)),Oe(s,(r,o)=>{i=i.concat(o)}),i}})}function Jn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(lC())(t._repo,t._path):t}function _C(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function gC(){return aC++}function mC(t,e,n){const s=e._path,i=li(t,e),r=Lh(t,n),o=t.listenProvider_.startListening(Jn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Pt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!$(c)&&u&&Pt(u))return[Ai(u).query];{let d=[];return u&&(d=d.concat(Rh(u).map(_=>_.query))),Oe(h,(_,C)=>{d=d.concat(C)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Jn(u),li(t,u))}}return o}/**
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
 */class qo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qo(n)}node(){return this.node_}}class zo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new zo(this.syncTree_,n)}node(){return Wo(this.syncTree_,this.path_)}}const yC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qa=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CC(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},CC=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bC=function(t,e,n,s){return Ko(e,new zo(n,t),s)},Fh=function(t,e,n){return Ko(t,new qo(e),n)};function Ko(t,e,n){const s=t.getPriority().val(),i=qa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=qa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(ae,(l,a)=>{const c=Ko(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Go{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yo(t,e){let n=e instanceof G?e:new G(e),s=t,i=B(n);for(;i!==null;){const r=Sn(s.node.children,i)||{children:{},childCount:0};s=new Go(i,s,r),n=X(n),i=B(n)}return s}function Ln(t){return t.node.value}function Bh(t,e){t.node.value=e,qr(t)}function Uh(t){return t.node.childCount>0}function EC(t){return Ln(t)===void 0&&!Uh(t)}function Ri(t,e){Oe(t.node.children,(n,s)=>{e(new Go(n,t,s))})}function $h(t,e,n,s){n&&!s&&e(t),Ri(t,i=>{$h(i,e,!0,s)}),n&&s&&e(t)}function wC(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vs(t){return new G(t.parent===null?t.name:vs(t.parent)+"/"+t.name)}function qr(t){t.parent!==null&&IC(t.parent,t.name,t)}function IC(t,e,n){const s=EC(n),i=_t(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,qr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qr(t))}/**
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
 */const TC=/[\[\].#$\/\u0000-\u001F\u007F]/,SC=/[\[\].#$\u0000-\u001F\u007F]/,lr=10*1024*1024,Wh=function(t){return typeof t=="string"&&t.length!==0&&!TC.test(t)},Hh=function(t){return typeof t=="string"&&t.length!==0&&!SC.test(t)},AC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hh(t)},Vh=function(t,e,n,s){s&&e===void 0||Qo(go(t,"value"),e,n)},Qo=function(t,e,n){const s=n instanceof G?new qy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ht(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ht(s)+" with contents = "+e.toString());if(Hu(e))throw new Error(t+"contains "+e.toString()+" "+Ht(s));if(typeof e=="string"&&e.length>lr/3&&Ei(e)>lr)throw new Error(t+"contains a string greater than "+lr+" utf8 bytes "+Ht(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Oe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ht(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zy(s,o),Qo(t,l,s),Ky(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ht(s)+" in addition to actual children.")}},jh=function(t,e,n,s){if(!(s&&n===void 0)&&!Hh(n))throw new Error(go(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jh(t,e,n,s)},Jo=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},NC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!AC(n))throw new Error(go(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!No(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qh(t,e,n){Xo(t,n),zh(t,s=>No(s,e))}function dt(t,e,n){Xo(t,n),zh(t,s=>ze(s,e)||ze(e,s))}function zh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(DC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();en&&Ie("event: "+n.toString()),Mn(s)}}}/**
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
 */const PC="repo_interrupt",kC=25;class OC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ei(),this.transactionQueueTree_=new Go,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MC(t,e,n){if(t.stats_=Ao(t.repoInfo_),t.forceRestClient_||gy())t.server_=new Zs(t.repoInfo_,(s,i,r,o)=>{za(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ka(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ct(t.repoInfo_,e,(s,i,r,o)=>{za(t,s,i,r,o)},s=>{Ka(t,s)},s=>{LC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=by(t.repoInfo_,()=>new vv(t.stats_,t.server_)),t.infoData_=new pv,t.infoSyncTree_=new Va({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=xi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),el(t,"connected",!1),t.serverSyncTree_=new Va({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Kh(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zo(t){return yC({timestamp:Kh(t)})}function za(t,e,n,s,i){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=qs(n,c=>Ce(c));o=dC(t.serverSyncTree_,r,a,i)}else{const a=Ce(n);o=fC(t.serverSyncTree_,r,a,i)}else if(s){const a=qs(n,c=>Ce(c));o=cC(t.serverSyncTree_,r,a)}else{const a=Ce(n);o=xi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Di(t,r)),dt(t.eventQueue_,l,o)}function Ka(t,e){el(t,"connected",e),e===!1&&BC(t)}function LC(t,e){Oe(e,(n,s)=>{el(t,n,s)})}function el(t,e,n){const s=new G("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=xi(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function Gh(t){return t.nextWriteId_++}function FC(t,e,n,s,i){tl(t,"set",{path:e.toString(),value:n,priority:s});const r=Zo(t),o=Ce(n,s),l=Wo(t.serverSyncTree_,e),a=Fh(o,l,r),c=Gh(t),u=kh(t.serverSyncTree_,e,a,c,!0);Xo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const C=d==="ok";C||ke("set at "+e+" failed: "+d);const T=Jt(t.serverSyncTree_,c,!C);dt(t.eventQueue_,e,T),WC(t,i,d,_)});const h=Zh(t,e);Di(t,h),dt(t.eventQueue_,h,[])}function BC(t){tl(t,"onDisconnectEvents");const e=Zo(t),n=ei();Br(t.onDisconnect_,j(),(i,r)=>{const o=bC(i,r,t.serverSyncTree_,e);vh(n,i,o)});let s=[];Br(n,j(),(i,r)=>{s=s.concat(xi(t.serverSyncTree_,i,r));const o=Zh(t,i);Di(t,o)}),t.onDisconnect_=ei(),dt(t.eventQueue_,j(),s)}function UC(t,e,n){let s;B(e._path)===".info"?s=ja(t.infoSyncTree_,e,n):s=ja(t.serverSyncTree_,e,n),qh(t.eventQueue_,e._path,s)}function Ga(t,e,n){let s;B(e._path)===".info"?s=jr(t.infoSyncTree_,e,n):s=jr(t.serverSyncTree_,e,n),qh(t.eventQueue_,e._path,s)}function $C(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PC)}function tl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function WC(t,e,n,s){e&&Mn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Yh(t,e,n){return Wo(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function nl(t,e=t.transactionQueueTree_){if(e||Pi(t,e),Ln(e)){const n=Jh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HC(t,vs(e),n)}else Uh(e)&&Ri(e,n=>{nl(t,n)})}function HC(t,e,n){const s=n.map(c=>c.currentWriteId),i=Yh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Re(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{tl(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Jt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Pi(t,Yo(t.transactionQueueTree_,e)),nl(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Mn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Di(t,e)}},o)}function Di(t,e){const n=Qh(t,e),s=vs(n),i=Jh(t,n);return VC(t,i,s),s}function VC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Re(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=kC)u=!0,h="maxretry",i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Yh(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Qo("transaction failed: Data returned ",_,a.path);let C=Ce(_);typeof _=="object"&&_!=null&&_t(_,".priority")||(C=C.updatePriority(d.getPriority()));const L=a.currentWriteId,W=Zo(t),ce=Fh(C,d,W);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=ce,a.currentWriteId=Gh(t),o.splice(o.indexOf(L),1),i=i.concat(kh(t.serverSyncTree_,a.path,ce,a.currentWriteId,a.applyLocally)),i=i.concat(Jt(t.serverSyncTree_,L,!0))}else u=!0,h="nodata",i=i.concat(Jt(t.serverSyncTree_,a.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Pi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Mn(s[l]);nl(t,t.transactionQueueTree_)}function Qh(t,e){let n,s=t.transactionQueueTree_;for(n=B(e);n!==null&&Ln(s)===void 0;)s=Yo(s,n),e=X(e),n=B(e);return s}function Jh(t,e){const n=[];return Xh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Xh(t,e,n){const s=Ln(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ri(e,i=>{Xh(t,i,n)})}function Pi(t,e){const n=Ln(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Bh(e,n.length>0?n:void 0)}Ri(e,s=>{Pi(t,s)})}function Zh(t,e){const n=vs(Qh(t,e)),s=Yo(t.transactionQueueTree_,e);return wC(s,i=>{ar(t,i)}),ar(t,s),$h(s,i=>{ar(t,i)}),n}function ar(t,e){const n=Ln(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bh(e,void 0):n.length=r+1,dt(t.eventQueue_,vs(e),i);for(let o=0;o<s.length;o++)Mn(s[o])}}/**
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
 */function jC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ya=function(t,e){const n=zC(t),s=n.namespace;n.domain==="firebase.com"&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ly();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new G(n.pathString)}},zC=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=jC(t.substring(u,h)));const d=qC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Qa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",KC=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Qa.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Qa.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class ef{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class tf{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class GC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class sl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return $(this._path)?null:ch(this._path)}get ref(){return new gt(this._repo,this._path)}get _queryIdentifier(){const e=Pa(this._queryParams),n=To(e);return n==="{}"?"default":n}get _queryObject(){return Pa(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof sl))return!1;const n=this._repo===e._repo,s=No(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jy(this._path)}}class gt extends sl{constructor(e,n){super(e,n,new ko,!1)}get parent(){const e=hh(this._path);return e===null?null:new gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ds{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),s=Rn(this.ref,e);return new ds(this._node.getChild(n),s,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ds(i,Rn(this.ref,s),ae)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vt(t,e){return t=kt(t),t._checkNotDeleted("ref"),e!==void 0?Rn(t._root,e):t._root}function Rn(t,e){return t=kt(t),B(t._path)===null?xC("child","path",e,!1):jh("child","path",e,!1),new gt(t._repo,he(t._path,e))}function YC(t,e){t=kt(t),Jo("push",t._path),Vh("push",e,t._path,!0);const n=Kh(t._repo),s=KC(n),i=Rn(t,s),r=Rn(t,s);let o;return e!=null?o=il(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function QC(t){return Jo("remove",t._path),il(t,null)}function il(t,e){t=kt(t),Jo("set",t._path),Vh("set",e,t._path,!1);const n=new Ci;return FC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class rl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ef("value",this,new ds(e.snapshotNode,new gt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tf(this,e,n):null}matches(e){return e instanceof rl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ol{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tf(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=Rn(new gt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ef(e.type,this,new ds(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ol?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function JC(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Ga(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new GC(n,r||void 0),l=e==="value"?new rl(o):new ol(e,o);return UC(t._repo,t,l),()=>Ga(t._repo,t,l)}function XC(t,e,n,s){return JC(t,"value",e,n,s)}eC(gt);oC(gt);/**
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
 */const ZC="FIREBASE_DATABASE_EMULATOR_HOST",zr={};let eb=!1;function tb(t,e,n,s){t.repoInfo_=new eh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function nb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ya(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[ZC]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ya(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new En(En.OWNER):new yy(t.name,t.options,e);NC("Invalid Firebase Database URL",o),$(o.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ib(l,t,u,new my(t.name,n));return new rb(h,t)}function sb(t,e){const n=zr[e];(!n||n[t.key]!==t)&&ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$C(t),delete n[t.key]}function ib(t,e,n,s){let i=zr[e.name];i||(i={},zr[e.name]=i);let r=i[t.toURLString()];return r&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new OC(t,eb,n,s),i[t.toURLString()]=r,r}class rb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ft("Cannot call "+e+" on a deleted database.")}}function ob(t=fu(),e){const n=ps(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=e_("database");s&&lb(n,...s)}return n}function lb(t,e,n,s={}){t=kt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ft("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new En(En.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:t_(s.mockUserToken,t.app.options.projectId);r=new En(o)}tb(i,e,n,r)}/**
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
 */function ab(t){ny(pg),Rt(new ht("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return nb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),it(_a,ga,t),it(_a,ga,"esm2017")}ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ab();const cb="/icons/add.png",ub="/icons/accept.png",hb="/icons/delete.png",fb={apiKey:"AIzaSyCtLNO1xLSUyoAbKtyiDF0vYq7rvGoeXXo",authDomain:"silvestertest-751fc.firebaseapp.com",projectId:"silvestertest-751fc",URL:"https://silvestertest-751fc-default-rtdb.firebaseio.com",storageBucket:"silvestertest-751fc.appspot.com",messagingSenderId:"723391995141",appId:"1:723391995141:web:9484396d497b7ac83beb6c",measurementId:"G-YYBKBDV4JD"},db=hu(fb);Xm(db);const jt=ob(),pb=Vt(jt,"Silvester/"),_b={components:{intro:jp},data(){return{isFirstVisit:!1,seen:!0,selectedValue:"",mainMenu:String,menu:String,hover:!1,boxes:[{link:"\\icons\\alohool.png",des:"Alohool",id:"box1"},{link:"\\icons\\essen.png",des:"Essen",id:"box2"},{link:"\\icons\\trinken.png",des:"Trinken",id:"box3"},{link:"\\icons\\sonstiges.png",des:"Sonstiges",id:"box4"}],tables:{},newItem:{person:"",element:"",amount:""},activeRef:"",selectedRow:"",changeItem:""}},watch:{},mounted(){this.checkIfFirstVisit(),this.updateTable()},methods:{checkIfFirstVisit(){localStorage.getItem("visitedBefore")?(this.isFirstVisit=!1,this.mainMenu="active"):(localStorage.setItem("visitedBefore",!0),this.isFirstVisit=!0)},updateTable(){XC(pb,t=>{t.toJSON()?this.tables=t.val():this.tables=[]},{onlyOnce:!0})},disappear(){this.isFirstVisit=!1,this.mainMenu="active"},select:function(t){var e=t.currentTarget.id;e=="box1"&&(this.activeRef=Vt(jt,"Silvester/Alohool/"),this.category="Alohool"),e=="box2"&&(this.activeRef=Vt(jt,"Silvester/Essen/"),this.category="Essen"),e=="box3"&&(this.activeRef=Vt(jt,"Silvester/Trinken/"),this.category="Trinken"),e=="box4"&&(this.activeRef=Vt(jt,"Silvester/Sonstiges/"),this.category="Sonstiges")},hoverMenu(t){this.boxDescritpion=t},backToMain(){this.mainMenu="",setTimeout(()=>this.mainMenu="active",1e3)},toggleProject:function(t){var e=t.currentTarget.id;this.activeProject==e?this.activeProject="":this.activeProject=e},fullScreen:function(t){var e=t.currentTarget.id;this.fscreen=!this.fscreen,e!=="4"&&e!=="3"&&(document.getElementById(e).classList.toggle("projectIframesDivfscreen"),document.getElementById("iframe"+e).classList.toggle("projectIframesfscreen"))},addItem(){YC(this.activeRef,this.newItem),this.updateTable(),this.newItem.element="",this.newItem.amount=""},editItem(t,e,n){if(this.changeItem==""){this.selectedValue="";return}var s="Silvester/"+t+"/"+e+"/"+n+"/";const i=Vt(jt,s);il(i,this.changeItem),this.updateTable(),this.selectedValue="",this.changeItem="",this.selectedRow=null},deleteItem(t,e){var n="Silvester/"+t+"/"+e+"/";const s=Vt(jt,n);QC(s),this.updateTable(),this.selectedRow=null},focus(t){console.log(t),this.selectedValue!=""&&document.getElementById(t).focus()}}},gb={key:0,id:"parentDiv"},mb={id:"menuDiv"},yb=ee("h1",{style:{"text-align":"center"}},"Was m\xF6chtest du mitbringen?",-1),vb={id:"buttonDiv"},Cb=["id"],bb=["src"],Eb={key:0,class:"menuDesDiv"},wb={id:"menuDesText"},Ib={key:1,class:"menuDesDiv"},Tb=ee("p",{id:"placeHolder"}," test ",-1),Sb=[Tb],Ab={key:2,id:"inputTableDiv"},xb=ee("img",{src:cb},null,-1),Nb=[xb],Rb={id:"mainTableDiv"},Db=["id"],Pb=["id"],kb={class:"tableRows"},Ob={key:0,class:"changeMask"},Mb=["onKeyup","id"],Lb=["onClick"],Fb=ee("img",{src:ub},null,-1),Bb=[Fb],Ub=["onClick"],$b=["onClick"],Wb=ee("img",{src:hb},null,-1),Hb=[Wb];function Vb(t,e,n,s,i,r){const o=Oc("intro");return _e(),we(Ae,null,[re(Vs,{name:"intro-fade"},{default:_r(()=>[i.isFirstVisit?(_e(),jc(o,{key:0,onClick:r.disappear},null,8,["onClick"])):Hi("",!0)]),_:1}),re(Vs,{name:"normal-fade"},{default:_r(()=>[i.mainMenu==="active"?(_e(),we("div",gb,[ee("div",mb,[yb,ee("div",vb,[(_e(!0),we(Ae,null,Ns(i.boxes,l=>(_e(),we("div",{class:"box glow-on-hover",onClick:e[0]||(e[0]=(...a)=>r.select&&r.select(...a)),id:l.id},[ee("img",{src:l.link},null,8,bb)],8,Cb))),256))]),i.activeRef!=""?(_e(),we("div",Eb,[ee("p",wb,Mi(t.category)+" ",1)])):(_e(),we("div",Ib,Sb)),i.activeRef!=""?(_e(),we("div",Ab,[xs(ee("input",{onKeyup:e[1]||(e[1]=Ds((...l)=>r.addItem&&r.addItem(...l),["enter"])),type:"text",fil:"",autocomplete:"off","onUpdate:modelValue":e[2]||(e[2]=l=>i.newItem.person=l),placeholder:"Name",class:"inputTable"},null,544),[[Rs,i.newItem.person]]),xs(ee("input",{onKeyup:e[3]||(e[3]=Ds((...l)=>r.addItem&&r.addItem(...l),["enter"])),type:"text",fil:"",autocomplete:"off","onUpdate:modelValue":e[4]||(e[4]=l=>i.newItem.element=l),placeholder:"Mitbringsel",class:"inputTable"},null,544),[[Rs,i.newItem.element]]),xs(ee("input",{onKeyup:e[5]||(e[5]=Ds((...l)=>r.addItem&&r.addItem(...l),["enter"])),type:"text",fil:"",autocomplete:"off","onUpdate:modelValue":e[6]||(e[6]=l=>i.newItem.amount=l),placeholder:"Anzahl",class:"inputTable"},null,544),[[Rs,i.newItem.amount]]),ee("button",{onClick:e[7]||(e[7]=(...l)=>r.addItem&&r.addItem(...l)),class:"tableButtons"},Nb)])):Hi("",!0)]),ee("div",Rb,[(_e(!0),we(Ae,null,Ns(i.tables,(l,a)=>(_e(),we("table",{class:"mainTable",id:a+"Table"},[ee("tr",null,[ee("th",{id:a+"Column",class:"tableHeader",colspan:"4"},Mi(a),9,Pb)]),(_e(!0),we(Ae,null,Ns(l,(c,u)=>(_e(),we("tr",kb,[(_e(!0),we(Ae,null,Ns(c,(h,d)=>(_e(),we("td",null,[i.selectedValue==u+d?(_e(),we("div",Ob,[xs(ee("input",{onKeyup:Ds(_=>r.editItem(a,u,d),["enter"]),type:"text","onUpdate:modelValue":e[8]||(e[8]=_=>i.changeItem=_),class:"changeInputTable",autofocus:"",id:a+u+d+"input"},null,40,Mb),[[Rs,i.changeItem]]),ee("button",{onClick:_=>r.editItem(a,u,d),class:"tableButtons"},Bb,8,Lb)])):(_e(),we("p",{key:1,onClick:_=>(i.selectedValue=u+d,i.changeItem=h)},Mi(h),9,Ub))]))),256)),ee("td",null,[ee("button",{onClick:h=>r.deleteItem(a,u),class:"tableButtons"},Hb,8,$b)])]))),256))],8,Db))),256))])])):Hi("",!0)]),_:1})],64)}const jb=Jc(_b,[["render",Vb]]);Mp(jb).use(Yc).mount("#app");
