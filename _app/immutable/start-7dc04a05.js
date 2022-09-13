import{S as He,i as Me,s as Xe,a as Ye,e as J,c as Qe,b as W,g as ie,t as z,d as le,f as K,h as x,j as Ze,o as be,k as et,l as tt,m as nt,n as ge,p as D,q as rt,r as at,u as st,v as H,w as Se,x as M,y as X,z as qe}from"./chunks/index-7d11cbb7.js";import{g as Ve,f as Be,s as G,a as ve,b as ot,i as it}from"./chunks/singletons-fa9d1af4.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(r,e){return new URL(r,e).href},Je={},se=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ct(o,c),o in Je)return;Je[o]=!0;const d=o.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":lt,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((w,_)=>{f.addEventListener("load",w),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,t){this.status=e,this.location=t}}function ft(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ut(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const c of dt){let o=t[c];Object.defineProperty(t,c,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,o,d)=>d(r,o),ht(t),t}function ht(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;oe.delete(c)}return Re(r,e)};const oe=new Map;function _t(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${mt(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),w=d.getAttribute("data-ttl");return w&&oe.set(e,{body:n,init:f,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,f))}return Re(r,t)}function gt(r,e){const t=oe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(r)}return Re(r,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(r){const e=[],t=[];let c=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(bt).map((d,n,f)=>{const w=decodeURIComponent(d),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=n===f.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map(($,S)=>{if(S%2){const N=wt.exec($);if(!N)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,T,C]=N;return e.push(T),t.push(C),j?"(.*?)":"([^/]+?)"}return b&&$.includes(".")&&(c=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function bt(r){return!/^\([^)]+\)$/.test(r)}function vt(r,e,t,c){const o={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],w=r[d+1]||"";if(f){const _=c[f];if(!_)throw new Error(`Missing "${f}" param matcher`);if(!_(w))return}o[n]=w}return o}function kt(r,e,t,c){const o=new Set(e);return Object.entries(t).map(([f,[w,_,b]])=>{const{pattern:$,names:S,types:N}=yt(f),j={id:f,exec:T=>{const C=$.exec(T);if(C)return vt(C,S,N,c)},errors:[1,...b||[]].map(T=>r[T]),layouts:[0,..._||[]].map(n),leaf:d(w)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function d(f){const w=f<0;return w&&(f=~f),[w,r[f]]}function n(f){return f===void 0?f:[o.has(f),r[f]]}}function Et(r){let e,t,c;var o=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&H(e.$$.fragment),t=J()},l(n){e&&Se(e.$$.fragment,n),t=J()},m(n,f){e&&M(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&2&&(w.form=n[1]),o!==(o=n[0][0])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{X(_,1)}),le()}o?(e=new o(d(n)),H(e.$$.fragment),K(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function St(r){let e,t,c;var o=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[Rt]},$$scope:{ctx:n}}}}return o&&(e=new o(d(r))),{c(){e&&H(e.$$.fragment),t=J()},l(n){e&&Se(e.$$.fragment,n),t=J()},m(n,f){e&&M(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&523&&(w.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{X(_,1)}),le()}o?(e=new o(d(n)),H(e.$$.fragment),K(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function Rt(r){let e,t,c;var o=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&H(e.$$.fragment),t=J()},l(n){e&&Se(e.$$.fragment,n),t=J()},m(n,f){e&&M(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&8&&(w.data=n[3]),f&2&&(w.form=n[1]),o!==(o=n[0][1])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{X(_,1)}),le()}o?(e=new o(d(n)),H(e.$$.fragment),K(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function Ke(r){let e,t=r[5]&&xe(r);return{c(){e=et("div"),t&&t.c(),this.h()},l(c){e=tt(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);t&&t.l(o),o.forEach(x),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(c,o){W(c,e,o),t&&t.m(e,null)},p(c,o){c[5]?t?t.p(c,o):(t=xe(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&x(e),t&&t.d()}}}function xe(r){let e;return{c(){e=rt(r[6])},l(t){e=at(t,r[6])},m(t,c){W(t,e,c)},p(t,c){c&64&&st(e,t[6])},d(t){t&&x(e)}}}function $t(r){let e,t,c,o,d;const n=[St,Et],f=[];function w(b,$){return b[0][1]?0:1}e=w(r),t=f[e]=n[e](r);let _=r[4]&&Ke(r);return{c(){t.c(),c=Ye(),_&&_.c(),o=J()},l(b){t.l(b),c=Qe(b),_&&_.l(b),o=J()},m(b,$){f[e].m(b,$),W(b,c,$),_&&_.m(b,$),W(b,o,$),d=!0},p(b,[$]){let S=e;e=w(b),e===S?f[e].p(b,$):(ie(),z(f[S],1,1,()=>{f[S]=null}),le(),t=f[e],t?t.p(b,$):(t=f[e]=n[e](b),t.c()),K(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,$):(_=Ke(b),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(b){d||(K(t),d=!0)},o(b){z(t),d=!1},d(b){f[e].d(b),b&&x(c),_&&_.d(b),b&&x(o)}}}function Lt(r,e,t){let{stores:c}=e,{page:o}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:w=null}=e;Ze(c.page.notify);let _=!1,b=!1,$=null;return be(()=>{const S=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,$=document.title||"untitled page"))});return t(4,_=!0),S}),r.$$set=S=>{"stores"in S&&t(7,c=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,d=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,w=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&c.page.set(o)},[d,n,f,w,_,b,$,c,o]}class Pt extends He{constructor(e){super(),Me(this,e,Lt,$t,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ot={},ce=[()=>se(()=>import("./chunks/0-c267a169.js"),["chunks\\0-c267a169.js","components\\pages\\_layout.svelte-91c707dd.js","assets\\_layout-1182583e.css","chunks\\index-7d11cbb7.js"],import.meta.url),()=>se(()=>import("./chunks/1-d0fae533.js"),["chunks\\1-d0fae533.js","components\\error.svelte-dee549a8.js","chunks\\index-7d11cbb7.js","chunks\\singletons-fa9d1af4.js"],import.meta.url),()=>se(()=>import("./chunks/2-3aba502d.js"),["chunks\\2-3aba502d.js","components\\pages\\_page.svelte-da48db1f.js","assets\\_page-5369430f.css","chunks\\index-7d11cbb7.js"],import.meta.url)],jt=[],Ut={"":[2]},It={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},At="/__data.js",We="sveltekit:scroll",B="sveltekit:index",ne=kt(ce,jt,Ut,Ot),ke=ce[0],Ee=ce[1];ke();Ee();let ee={};try{ee=JSON.parse(sessionStorage[We])}catch{}function ye(r){ee[r]=ve()}function Nt({target:r,base:e,trailing_slash:t}){var Ne;const c=[],o={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,w=!0,_=!1,b=1,$=null,S=!1,N,j=(Ne=history.state)==null?void 0:Ne[B];j||(j=Date.now(),history.replaceState({...history.state,[B]:j},"",location.href));const T=ee[j];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let C=!1,q,$e;function Le(){if(!$){const a=new URL(location.href);$=Promise.resolve().then(async()=>{const i=pe(a,!0);await Oe(i,a,[]),$=null,S=!1})}return $}async function fe(a,{noscroll:i=!1,replaceState:p=!1,keepfocus:s=!1,state:l={}},h){return typeof a=="string"&&(a=new URL(a,Ve(document))),he({url:a,scroll:i?ve():null,keepfocus:s,redirect_chain:h,details:{state:l,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=Ie(i),o.id=i.id,o.promise}async function Oe(a,i,p,s,l){var v,k;const h=$e={};let m=a&&await Ie(a);if(!m&&i.origin===location.origin&&i.pathname===location.pathname&&(m=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!m)return await Q(i),!1;if(i=(a==null?void 0:a.url)||i,$e!==h)return!1;if(c.length=0,m.type==="redirect")if(p.length>10||p.includes(i.pathname))m=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(m.location,i).href,{},[...p,i.pathname]),!1;else((k=(v=m.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await G.updated.check()&&await Q(i);if(_=!0,s&&s.details){const{details:y}=s,g=y.replaceState?0:1;y.state[B]=j+=g,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(f){n=m.state,m.props.page&&(m.props.page.url=i);const y=ae();N.$set(m.props),y()}else je(m);if(s){const{scroll:y,keepfocus:g}=s;if(!g){const E=document.body,U=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),U!==null?E.setAttribute("tabindex",U):E.removeAttribute("tabindex")}if(await qe(),w){const E=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):E?E.scrollIntoView():scrollTo(0,0)}}else await qe();o.promise=null,o.id=null,w=!0,m.props.page&&(q=m.props.page),l&&l(),_=!1}function je(a){var l,h;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=a.props.page;const p=ae();N=new Pt({target:r,props:{...a.props,stores:G},hydrate:!0}),p();const s={from:null,to:re("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(m=>m(s)),f=!0}async function Y({url:a,params:i,branch:p,status:s,error:l,route:h,form:m}){var U;const v=p.filter(Boolean),k={type:"loaded",state:{url:a,params:i,branch:p,error:l,route:h,session_id:b},props:{components:v.map(L=>L.node.component)}};m!==void 0&&(k.props.form=m);let y={},g=!q;for(let L=0;L<v.length;L+=1){const I=v[L];y={...y,...I.data},(g||!n.branch.some(A=>A===I))&&(k.props[`data_${L}`]=y,g=g||Object.keys((U=I.data)!=null?U:{}).length>0)}if(g||(g=Object.keys(q.data).length!==Object.keys(y).length),!n.url||a.href!==n.url.href||n.error!==l||g){k.props.page={error:l,params:i,routeId:h&&h.id,status:s,url:a,data:g?y:q.data};const L=(I,A)=>{Object.defineProperty(k.props.page,I,{get:()=>{throw new Error(`$page.${I} has been replaced by $page.url.${A}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function ue({loader:a,parent:i,url:p,params:s,routeId:l,server_data_node:h}){var y,g,E,U,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let I=function(...u){for(const R of u){const{href:P}=new URL(R,p);v.dependencies.add(P)}};const A={};for(const u in s)Object.defineProperty(A,u,{get(){return v.params.add(u),s[u]},enumerable:!0});const V={routeId:l,params:A,data:(g=h==null?void 0:h.data)!=null?g:null,url:pt(p,()=>{v.url=!0}),async fetch(u,R){let P;typeof u=="string"?P=u:(P=u.url,R={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...R});const O=new URL(P,p).href;return I(O),f?gt(O,R):_t(P,O,R)},setHeaders:()=>{},depends:I,parent(){return v.parent=!0,i()}};Object.defineProperties(V,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(E=await k.shared.load.call(null,V))!=null?E:null}return{node:k,loader:a,server:h,shared:(U=k.shared)!=null&&U.load?{type:"data",data:m,uses:v}:null,data:(L=m!=null?m:h==null?void 0:h.data)!=null?L:null}}function Ue(a,i,p){if(S)return!0;if(!p)return!1;if(p.parent&&i||a.url&&p.url)return!0;for(const s of a.params)if(p.params.has(s))return!0;for(const s of p.dependencies)if(c.some(l=>l(new URL(s))))return!0;return!1}function de(a,i){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ie({id:a,invalidating:i,url:p,params:s,route:l}){var V;if(o.id===a&&o.promise)return o.promise;const{errors:h,layouts:m,leaf:v}=l,k=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(s).filter(u=>n.params[u]!==s[u])},y=[...m,v];h.forEach(u=>u==null?void 0:u().catch(()=>{})),y.forEach(u=>u==null?void 0:u[1]().catch(()=>{}));let g=null;const E=y.reduce((u,R,P)=>{var F;const O=n.branch[P],Z=!!(R!=null&&R[0])&&((O==null?void 0:O.loader)!==R[1]||Ue(k,u.some(Boolean),(F=O.server)==null?void 0:F.uses));return u.push(Z),u},[]);if(E.some(Boolean)){try{g=await Fe(p,E)}catch(u){return te({status:500,error:u,url:p,routeId:l.id})}if(g.type==="redirect")return g}const U=g==null?void 0:g.nodes;let L=!1;const I=y.map(async(u,R)=>{var me,Te;if(!u)return;const P=n.branch[R],O=(me=U==null?void 0:U[R])!=null?me:null;if((!O||O.type==="skip")&&u[1]===(P==null?void 0:P.loader)&&!Ue(k,L,(Te=P.shared)==null?void 0:Te.uses))return P;if(L=!0,(O==null?void 0:O.type)==="error")throw O;return ue({loader:u[1],url:p,params:s,routeId:l.id,parent:async()=>{var Ce;const De={};for(let _e=0;_e<R;_e+=1)Object.assign(De,(Ce=await I[_e])==null?void 0:Ce.data);return De},server_data_node:de(O,P==null?void 0:P.server)})});for(const u of I)u.catch(()=>{});const A=[];for(let u=0;u<y.length;u+=1)if(y[u])try{A.push(await I[u])}catch(R){if(R instanceof ze)return{type:"redirect",location:R.location};let P=500,O;for(U!=null&&U.includes(R)?(P=(V=R.status)!=null?V:P,O=R.error):R instanceof we?(P=R.status,O=R.body):O=Ge(R,{params:s,url:p,routeId:l.id});u--;)if(h[u]){let Z,F=u;for(;!A[F];)F-=1;try{return Z={node:await h[u](),loader:h[u],data:{},server:null,shared:null},await Y({url:p,params:s,branch:A.slice(0,F+1).concat(Z),status:P,error:O,route:l})}catch{continue}}await Q(p);return}else A.push(void 0);return await Y({url:p,params:s,branch:A,status:200,error:null,route:l,form:i?void 0:null})}async function te({status:a,error:i,url:p,routeId:s}){var y;const l={},h=await ke();let m=null;if(h.server)try{const g=await Fe(p,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(y=g.nodes[0])!=null?y:null}catch{await Q(p);return}const v=await ue({loader:ke,url:p,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),k={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await Y({url:p,params:l,branch:[v,k],status:a,error:i instanceof we?i.body:Ge(i,{url:p,params:l,routeId:null}),route:null})}function pe(a,i){if(Ae(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of ne){const l=s.exec(p);if(l){const h=new URL(a.origin+ft(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:i,route:s,params:ut(l),url:h}}}}function Ae(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:p,redirect_chain:s,details:l,type:h,delta:m,accepted:v,blocked:k}){var L,I,A,V;let y=!1;const g=pe(a,!1),E={from:re("from",{params:n.params,routeId:(I=(L=n.route)==null?void 0:L.id)!=null?I:null,url:n.url}),to:re("to",{params:(A=g==null?void 0:g.params)!=null?A:null,routeId:(V=g==null?void 0:g.route.id)!=null?V:null,url:a}),type:h};m!==void 0&&(E.delta=m);const U={...E,cancel:()=>{y=!0}};if(d.before_navigate.forEach(u=>u(U)),y){k();return}ye(j),v(),f&&G.navigating.set(E),await Oe(g,a,s,{scroll:i,keepfocus:p,details:l},()=>{d.after_navigate.forEach(u=>u(E)),G.navigating.set(null)})}function Q(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!f)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:i}=new URL(a,location.href);c.push(p=>p.href===i)}return Le()},invalidateAll:()=>(S=!0,Le()),prefetch:async a=>{const i=new URL(a,Ve(document));await Pe(i)},prefetch_routes:async a=>{const p=(a?ne.filter(s=>a.some(l=>s.exec(l))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:p,route:s}=n;if(!s)return;let l=n.branch.length;for(;l--;)if(s.errors[l]){let h,m=l;for(;!p[m];)m-=1;try{h={node:await s.errors[l](),loader:s.errors[l],data:{},server:null,shared:null};const v=await Y({url:i,params:n.params,branch:p.slice(0,m+1).concat(h),status:500,error:a.error,route:s});n=v.state;const k=ae();N.$set(v.props),k();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==q.status&&(i.page={...q,status:a.status});const p=ae();N.$set(i),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,v;let l=!1;const h={from:re("from",{params:n.params,routeId:(v=(m=n.route)==null?void 0:m.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(k=>k(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(j);try{sessionStorage[We]=JSON.stringify(ee)}catch{}}});const a=s=>{const{url:l,options:h}=Be(s);if(l&&h.prefetch){if(Ae(l))return;Pe(l)}};let i;const p=s=>{clearTimeout(i),i=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=Be(s);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||k.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[y,g]=h.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){C=!0,ye(j),G.page.set({...q,url:h}),G.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===j)return;const l=s.state[B]-j;he({url:new URL(location.href),scroll:ee[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=s.state[B]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[B]:++j},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:p,params:s,routeId:l,data:h,form:m})=>{var y;const v=new URL(location.href);let k;try{const g=p.map(async(E,U)=>{const L=h[U];return ue({loader:ce[E],url:v,params:s,routeId:l,parent:async()=>{const I={};for(let A=0;A<U;A+=1)Object.assign(I,(await g[A]).data);return I},server_data_node:de(L)})});k=await Y({url:v,params:s,branch:await Promise.all(g),status:a,error:i,form:m,route:(y=ne.find(E=>E.id===l))!=null?y:null})}catch(g){const E=g;if(E instanceof ze){await Q(new URL(g.location,location.href));return}k=await te({status:E instanceof we?E.status:500,error:E,url:v,routeId:l})}je(k)}}}let Tt=1;async function Fe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+At,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Tt++)),await se(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Ge(r,e){var t;return(t=It.handleError({error:r,event:e}))!=null?t:{message:"Internal Error"}}const Dt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of Dt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function ae(){return()=>{}}async function Vt({env:r,hydrate:e,paths:t,target:c,trailing_slash:o}){ot(t);const d=Nt({target:c,base:t.base,trailing_slash:o});it({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Vt as start};
