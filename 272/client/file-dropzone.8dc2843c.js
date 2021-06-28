import{S as e,i as t,s as l,a as s,c as n,b as a,d as r,e as i,f as o,g as c,n as f,H as u,J as h,j as p,q as d,h as m,k as g,u as $,m as v,t as w,o as y,p as x,N as b,E as k,w as C,x as E,K as j,L,R as T,l as B,a3 as I,a4 as A,M as D,O as W,P as z,U as F,Q as M,F as N,G as P,I as V,X as U,T as q,r as G,v as H}from"./client.3462c8f1.js";import{c as J}from"./classes.2453fa25.js";import{F as K}from"./file-tile.fa4c12b7.js";import{r as O}from"./button.2bfce816.js";function Q(e){let t,l,u;return{c(){t=s("svg"),l=s("path"),this.h()},l(e){t=n(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=a(t);l=n(s,"path",{d:!0},1),a(l).forEach(r),s.forEach(r),this.h()},h(){i(l,"d","M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","24"),i(t,"height","24"),i(t,"viewBox","0 0 24 24"),i(t,"fill","none"),i(t,"stroke","currentColor"),i(t,"stroke-width","2"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(t,"class",u=J(e[0]))},m(e,s){o(e,t,s),c(t,l)},p(e,[l]){1&l&&u!==(u=J(e[0]))&&i(t,"class",u)},i:f,o:f,d(e){e&&r(t)}}}function R(e,t,l){let{class:s=null}=t;return e.$$set=e=>{"class"in e&&l(0,s=e.class)},[s]}class S extends e{constructor(e){super(),t(this,e,R,Q,l,{class:0})}}function X(e){let t,l,u,h;return{c(){t=s("svg"),l=s("line"),u=s("line"),this.h()},l(e){t=n(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=a(t);l=n(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),a(l).forEach(r),u=n(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),a(u).forEach(r),s.forEach(r),this.h()},h(){i(l,"x1","12"),i(l,"y1","5"),i(l,"x2","12"),i(l,"y2","19"),i(u,"x1","5"),i(u,"y1","12"),i(u,"x2","19"),i(u,"y2","12"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","24"),i(t,"height","24"),i(t,"viewBox","0 0 24 24"),i(t,"fill","none"),i(t,"stroke","currentColor"),i(t,"stroke-width","2"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(t,"class",h=J(e[0]))},m(e,s){o(e,t,s),c(t,l),c(t,u)},p(e,[l]){1&l&&h!==(h=J(e[0]))&&i(t,"class",h)},i:f,o:f,d(e){e&&r(t)}}}function Y(e,t,l){let{class:s=null}=t;return e.$$set=e=>{"class"in e&&l(0,s=e.class)},[s]}class Z extends e{constructor(e){super(),t(this,e,Y,X,l,{class:0})}}function _(e,t){if(null==e)return!0;return e.split(",").map((e=>e.trim().toLowerCase())).some((e=>function(e,t){if(e.startsWith("."))return t.name.toLowerCase().endsWith(e);return function(e,t){if("*"===e||"*/*"===e)return!0;const l=e.split("*");if(1===l.length)return e===t;if(2!==l.length)return!1;return t.startsWith(l[0])&&t.endsWith(l[1])}(e.toLowerCase(),(t.type||"").toLowerCase())}(e,t)))}function ee(e,t,l){const s=e.slice();return s[25]=t[l],s}const te=e=>({}),le=e=>({}),se=e=>({wrongType:128&e,dragActive:64&e}),ne=e=>({wrongType:e[7],dragActive:e[6]});function ae(e){let t;return{c(){t=G("drag & drop here or click to upload files")},l(e){t=H(e,"drag & drop here or click to upload files")},m(e,l){o(e,t,l)},d(e){e&&r(t)}}}function re(e){let t;return{c(){t=G("release to upload")},l(e){t=H(e,"release to upload")},m(e,l){o(e,t,l)},d(e){e&&r(t)}}}function ie(e){let t;return{c(){t=G("incorrect file type")},l(e){t=H(e,"incorrect file type")},m(e,l){o(e,t,l)},d(e){e&&r(t)}}}function oe(e){let t;return{c(){t=G("file upload unavailable")},l(e){t=H(e,"file upload unavailable")},m(e,l){o(e,t,l)},d(e){e&&r(t)}}}function ce(e){let t;const l=e[18]["more-icon"],s=h(l,e,e[17],le),n=s||function(e){let t,l;return t=new Z({props:{class:"plus"}}),{c(){p(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){v(t,e,s),l=!0},p:f,i(e){l||(w(t.$$.fragment,e),l=!0)},o(e){y(t.$$.fragment,e),l=!1},d(e){x(t,e)}}}();return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,l){n&&n.m(e,l),t=!0},p(e,n){s&&s.p&&(!t||131072&n)&&b(s,l,e,e[17],n,te,le)},i(e){t||(w(n,e),t=!0)},o(e){y(n,e),t=!1},d(e){n&&n.d(e)}}}function fe(e,t){let l,s,n,a;var i=t[2];function c(e){return{props:{file:e[25]}}}return i&&(s=new i(c(t)),s.$on("delete",t[13])),{key:e,first:null,c(){l=k(),s&&p(s.$$.fragment),n=k(),this.h()},l(e){l=k(),s&&g(s.$$.fragment,e),n=k(),this.h()},h(){this.first=l},m(e,t){o(e,l,t),s&&v(s,e,t),o(e,n,t),a=!0},p(e,l){t=e;const a={};if(1&l&&(a.file=t[25]),i!==(i=t[2])){if(s){C();const e=s;y(e.$$.fragment,1,0,(()=>{x(e,1)})),E()}i?(s=new i(c(t)),s.$on("delete",t[13]),p(s.$$.fragment),w(s.$$.fragment,1),v(s,n.parentNode,n)):s=null}else i&&s.$set(a)},i(e){a||(s&&w(s.$$.fragment,e),a=!0)},o(e){s&&y(s.$$.fragment,e),a=!1},d(e){e&&r(l),e&&r(n),s&&x(s,e)}}}function ue(e){let t,l,s,f,k,N,P,V,q,G,H,K,Q,R=[],X=new Map,Y=[{type:"file"},{multiple:!0},{accept:e[3]},{disabled:s=e[4]||e[0].length>=e[5]},e[15]],Z={};for(let e=0;e<Y.length;e+=1)Z=u(Z,Y[e]);const _=e[18]["empty-layer"],te=h(_,e,e[17],ne),le=te||function(e){let t,l,s,c;function f(e,t){return e[4]?oe:e[7]?ie:e[6]?re:ae}t=new S({props:{class:"icon"}});let u=f(e),h=u(e);return{c(){p(t.$$.fragment),l=d(),s=m("div"),h.c(),this.h()},l(e){g(t.$$.fragment,e),l=$(e),s=n(e,"DIV",{class:!0});var i=a(s);h.l(i),i.forEach(r),this.h()},h(){i(s,"class","title svelte-1alvml6")},m(e,n){v(t,e,n),o(e,l,n),o(e,s,n),h.m(s,null),c=!0},p(e,t){u!==(u=f(e))&&(h.d(1),h=u(e),h&&(h.c(),h.m(s,null)))},i(e){c||(w(t.$$.fragment,e),c=!0)},o(e){y(t.$$.fragment,e),c=!1},d(e){x(t,e),e&&r(l),e&&r(s),h.d()}}}(e);let ue=e[0].length<e[5]&&ce(e),he=e[0];const pe=e=>e[25];for(let t=0;t<he.length;t+=1){let l=ee(e,he,t),s=pe(l);X.set(s,R[t]=fe(s,l))}return{c(){t=m("label"),l=m("input"),f=d(),k=m("div"),le&&le.c(),N=d(),P=m("div"),ue&&ue.c(),q=d();for(let e=0;e<R.length;e+=1)R[e].c();this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=a(t);l=n(s,"INPUT",{type:!0,multiple:!0,accept:!0,disabled:!0}),f=$(s),k=n(s,"DIV",{class:!0});var i=a(k);le&&le.l(i),i.forEach(r),N=$(s),P=n(s,"DIV",{class:!0});var o=a(P);ue&&ue.l(o),o.forEach(r),q=$(s);for(let e=0;e<R.length;e+=1)R[e].l(s);s.forEach(r),this.h()},h(){j(l,Z),L(l,"svelte-1alvml6",!0),i(k,"class","empty-layer svelte-1alvml6"),i(P,"class","dropzone-layer svelte-1alvml6"),L(P,"accepting",e[6]),i(t,"class",G=T(J("file-dropzone",e[1]))+" svelte-1alvml6"),L(t,"has-content",e[0]&&0!==e[0].length),L(t,"wrong-type",e[7]),L(t,"disabled",e[4]||e[0].length>=e[5])},m(s,n){o(s,t,n),c(t,l),e[19](l),c(t,f),c(t,k),le&&le.m(k,null),e[20](k),c(t,N),c(t,P),ue&&ue.m(P,null),e[21](P),c(t,q);for(let e=0;e<R.length;e+=1)R[e].m(t,null);H=!0,K||(Q=[B(l,"change",e[12]),B(P,"dragover",I(A(e[11]))),B(P,"dragenter",e[22]),B(P,"dragleave",e[23]),B(P,"drop",I(A(e[12]))),D(V=O.call(null,P,{disabled:e[4]||e[0].length>=e[5]})),B(t,"click",e[14])],K=!0)},p(e,[n]){j(l,Z=W(Y,[{type:"file"},{multiple:!0},(!H||8&n)&&{accept:e[3]},(!H||49&n&&s!==(s=e[4]||e[0].length>=e[5]))&&{disabled:s},32768&n&&e[15]])),L(l,"svelte-1alvml6",!0),te?te.p&&(!H||131264&n)&&b(te,_,e,e[17],n,se,ne):le&&le.p&&208&n&&le.p(e,n),e[0].length<e[5]?ue?(ue.p(e,n),33&n&&w(ue,1)):(ue=ce(e),ue.c(),w(ue,1),ue.m(P,null)):ue&&(C(),y(ue,1,1,(()=>{ue=null})),E()),V&&z(V.update)&&49&n&&V.update.call(null,{disabled:e[4]||e[0].length>=e[5]}),64&n&&L(P,"accepting",e[6]),8197&n&&(he=e[0],C(),R=F(R,n,pe,1,e,he,X,t,U,fe,null,ee),E()),(!H||2&n&&G!==(G=T(J("file-dropzone",e[1]))+" svelte-1alvml6"))&&i(t,"class",G),3&n&&L(t,"has-content",e[0]&&0!==e[0].length),130&n&&L(t,"wrong-type",e[7]),51&n&&L(t,"disabled",e[4]||e[0].length>=e[5])},i(e){if(!H){w(le,e),w(ue);for(let e=0;e<he.length;e+=1)w(R[e]);H=!0}},o(e){y(le,e),y(ue);for(let e=0;e<R.length;e+=1)y(R[e]);H=!1},d(l){l&&r(t),e[19](null),le&&le.d(l),e[20](null),ue&&ue.d(),e[21](null);for(let e=0;e<R.length;e+=1)R[e].d();K=!1,M(Q)}}}function he(e,t,l){const s=["class","files","fileComponent","accept","beforeChange","disabled","max"];let n,a,r,i=N(t,s),{$$slots:o={},$$scope:c}=t,{class:f=null}=t,{files:h=[]}=t,{fileComponent:p=K}=t,{accept:d=null}=t,{beforeChange:m=null}=t,{disabled:g=!1}=t,{max:$=1/0}=t,v=!1,w=!1;const y=P();return e.$$set=e=>{t=u(u({},t),V(e)),l(15,i=N(t,s)),"class"in e&&l(1,f=e.class),"files"in e&&l(0,h=e.files),"fileComponent"in e&&l(2,p=e.fileComponent),"accept"in e&&l(3,d=e.accept),"beforeChange"in e&&l(16,m=e.beforeChange),"disabled"in e&&l(4,g=e.disabled),"max"in e&&l(5,$=e.max),"$$scope"in e&&l(17,c=e.$$scope)},[h,f,p,d,g,$,v,w,n,a,r,function(e){l(7,w=[...e.dataTransfer.items].some((e=>!_(d,e))))},async function(e){const t=Array.from((e.dataTransfer||e.target).files);await Promise.all(t.map((async e=>{try{"function"==typeof m&&await m(e)}catch(e){return}_(d,e)&&h.length<$&&h.push(e)}))),l(0,h),setTimeout((()=>l(7,w=!1)),1e3),y("change",{files:h,nativeEvent:e}),l(10,r.value="",r),l(6,v=!1)},function({detail:e}){l(0,h=h.filter((t=>t!==e))),y("change",{files:h})},function(e){e.target!=n&&e.target!=a&&e.target!=r&&e.preventDefault()},i,m,c,o,function(e){q[e?"unshift":"push"]((()=>{r=e,l(10,r)}))},function(e){q[e?"unshift":"push"]((()=>{n=e,l(8,n)}))},function(e){q[e?"unshift":"push"]((()=>{a=e,l(9,a)}))},()=>l(6,v=!0),()=>{l(6,v=!1),l(7,w=!1)}]}class pe extends e{constructor(e){super(),t(this,e,he,ue,l,{class:1,files:0,fileComponent:2,accept:3,beforeChange:16,disabled:4,max:5})}}export{pe as F};
