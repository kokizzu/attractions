import{S as e,i as t,s as l,a as s,c as n,b as a,d as r,e as o,f as i,g as c,n as f,I as u,K as h,j as p,q as d,h as m,k as g,u as v,m as $,t as w,o as y,p as x,O as b,P as k,Q as C,F as E,w as j,x as L,L as T,M as B,V as I,l as W,a6 as A,a7 as D,N as V,R as z,T as F,X as M,U as N,G as P,H as U,J as q,_ as G,W as H,r as J,v as K}from"./client.babe84d9.js";import{c as O}from"./classes.2453fa25.js";import{F as Q}from"./file-tile.0dc9ab42.js";import{r as R}from"./button.274dc2f0.js";function S(e){let t,l,u;return{c(){t=s("svg"),l=s("path"),this.h()},l(e){t=n(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=a(t);l=n(s,"path",{d:!0},1),a(l).forEach(r),s.forEach(r),this.h()},h(){o(l,"d","M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"width","24"),o(t,"height","24"),o(t,"viewBox","0 0 24 24"),o(t,"fill","none"),o(t,"stroke","currentColor"),o(t,"stroke-width","2"),o(t,"stroke-linecap","round"),o(t,"stroke-linejoin","round"),o(t,"class",u=O(e[0]))},m(e,s){i(e,t,s),c(t,l)},p(e,[l]){1&l&&u!==(u=O(e[0]))&&o(t,"class",u)},i:f,o:f,d(e){e&&r(t)}}}function X(e,t,l){let{class:s=null}=t;return e.$$set=e=>{"class"in e&&l(0,s=e.class)},[s]}var _=class extends e{constructor(e){super(),t(this,e,X,S,l,{class:0})}};function Y(e){let t,l,u,h;return{c(){t=s("svg"),l=s("line"),u=s("line"),this.h()},l(e){t=n(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=a(t);l=n(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),a(l).forEach(r),u=n(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),a(u).forEach(r),s.forEach(r),this.h()},h(){o(l,"x1","12"),o(l,"y1","5"),o(l,"x2","12"),o(l,"y2","19"),o(u,"x1","5"),o(u,"y1","12"),o(u,"x2","19"),o(u,"y2","12"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"width","24"),o(t,"height","24"),o(t,"viewBox","0 0 24 24"),o(t,"fill","none"),o(t,"stroke","currentColor"),o(t,"stroke-width","2"),o(t,"stroke-linecap","round"),o(t,"stroke-linejoin","round"),o(t,"class",h=O(e[0]))},m(e,s){i(e,t,s),c(t,l),c(t,u)},p(e,[l]){1&l&&h!==(h=O(e[0]))&&o(t,"class",h)},i:f,o:f,d(e){e&&r(t)}}}function Z(e,t,l){let{class:s=null}=t;return e.$$set=e=>{"class"in e&&l(0,s=e.class)},[s]}var ee=class extends e{constructor(e){super(),t(this,e,Z,Y,l,{class:0})}};function te(e,t){if(null==e)return!0;return e.split(",").map((e=>e.trim().toLowerCase())).some((e=>function(e,t){if(e.startsWith("."))return t.name.toLowerCase().endsWith(e);return function(e,t){if("*"===e||"*/*"===e)return!0;const l=e.split("*");if(1===l.length)return e===t;if(2!==l.length)return!1;return t.startsWith(l[0])&&t.endsWith(l[1])}(e.toLowerCase(),(t.type||"").toLowerCase())}(e,t)))}function le(e,t,l){const s=e.slice();return s[25]=t[l],s}const se=e=>({}),ne=e=>({}),ae=e=>({wrongType:128&e,dragActive:64&e}),re=e=>({wrongType:e[7],dragActive:e[6]});function oe(e){let t;return{c(){t=J("drag & drop here or click to upload files")},l(e){t=K(e,"drag & drop here or click to upload files")},m(e,l){i(e,t,l)},d(e){e&&r(t)}}}function ie(e){let t;return{c(){t=J("release to upload")},l(e){t=K(e,"release to upload")},m(e,l){i(e,t,l)},d(e){e&&r(t)}}}function ce(e){let t;return{c(){t=J("incorrect file type")},l(e){t=K(e,"incorrect file type")},m(e,l){i(e,t,l)},d(e){e&&r(t)}}}function fe(e){let t;return{c(){t=J("file upload unavailable")},l(e){t=K(e,"file upload unavailable")},m(e,l){i(e,t,l)},d(e){e&&r(t)}}}function ue(e){let t;const l=e[18]["more-icon"],s=h(l,e,e[17],ne),n=s||function(e){let t,l;return t=new ee({props:{class:"plus"}}),{c(){p(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){$(t,e,s),l=!0},p:f,i(e){l||(w(t.$$.fragment,e),l=!0)},o(e){y(t.$$.fragment,e),l=!1},d(e){x(t,e)}}}();return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,l){n&&n.m(e,l),t=!0},p(e,n){s&&s.p&&(!t||131072&n)&&b(s,l,e,e[17],t?C(l,e[17],n,se):k(e[17]),ne)},i(e){t||(w(n,e),t=!0)},o(e){y(n,e),t=!1},d(e){n&&n.d(e)}}}function he(e,t){let l,s,n,a;var o=t[2];function c(e){return{props:{file:e[25]}}}return o&&(s=new o(c(t)),s.$on("delete",t[13])),{key:e,first:null,c(){l=E(),s&&p(s.$$.fragment),n=E(),this.h()},l(e){l=E(),s&&g(s.$$.fragment,e),n=E(),this.h()},h(){this.first=l},m(e,t){i(e,l,t),s&&$(s,e,t),i(e,n,t),a=!0},p(e,l){t=e;const a={};if(1&l&&(a.file=t[25]),o!==(o=t[2])){if(s){j();const e=s;y(e.$$.fragment,1,0,(()=>{x(e,1)})),L()}o?(s=new o(c(t)),s.$on("delete",t[13]),p(s.$$.fragment),w(s.$$.fragment,1),$(s,n.parentNode,n)):s=null}else o&&s.$set(a)},i(e){a||(s&&w(s.$$.fragment,e),a=!0)},o(e){s&&y(s.$$.fragment,e),a=!1},d(e){e&&r(l),e&&r(n),s&&x(s,e)}}}function pe(e){let t,l,s,f,E,P,U,q,H,J,K,Q,S,X=[],Y=new Map,Z=[{type:"file"},{multiple:!0},{accept:e[3]},{disabled:s=e[4]||e[0].length>=e[5]},e[15]],ee={};for(let e=0;e<Z.length;e+=1)ee=u(ee,Z[e]);const te=e[18]["empty-layer"],se=h(te,e,e[17],re),ne=se||function(e){let t,l,s,c;function f(e,t){return e[4]?fe:e[7]?ce:e[6]?ie:oe}t=new _({props:{class:"icon"}});let u=f(e),h=u(e);return{c(){p(t.$$.fragment),l=d(),s=m("div"),h.c(),this.h()},l(e){g(t.$$.fragment,e),l=v(e),s=n(e,"DIV",{class:!0});var o=a(s);h.l(o),o.forEach(r),this.h()},h(){o(s,"class","title svelte-1alvml6")},m(e,n){$(t,e,n),i(e,l,n),i(e,s,n),h.m(s,null),c=!0},p(e,t){u!==(u=f(e))&&(h.d(1),h=u(e),h&&(h.c(),h.m(s,null)))},i(e){c||(w(t.$$.fragment,e),c=!0)},o(e){y(t.$$.fragment,e),c=!1},d(e){x(t,e),e&&r(l),e&&r(s),h.d()}}}(e);let pe=e[0].length<e[5]&&ue(e),de=e[0];const me=e=>e[25];for(let t=0;t<de.length;t+=1){let l=le(e,de,t),s=me(l);Y.set(s,X[t]=he(s,l))}return{c(){t=m("label"),l=m("input"),f=d(),E=m("div"),ne&&ne.c(),P=d(),U=m("div"),pe&&pe.c(),H=d();for(let e=0;e<X.length;e+=1)X[e].c();this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=a(t);l=n(s,"INPUT",{type:!0,accept:!0}),f=v(s),E=n(s,"DIV",{class:!0});var o=a(E);ne&&ne.l(o),o.forEach(r),P=v(s),U=n(s,"DIV",{class:!0});var i=a(U);pe&&pe.l(i),i.forEach(r),H=v(s);for(let e=0;e<X.length;e+=1)X[e].l(s);s.forEach(r),this.h()},h(){T(l,ee),B(l,"svelte-1alvml6",!0),o(E,"class","empty-layer svelte-1alvml6"),o(U,"class","dropzone-layer svelte-1alvml6"),B(U,"accepting",e[6]),o(t,"class",J=I(O("file-dropzone",e[1]))+" svelte-1alvml6"),B(t,"has-content",e[0]&&0!==e[0].length),B(t,"wrong-type",e[7]),B(t,"disabled",e[4]||e[0].length>=e[5])},m(s,n){i(s,t,n),c(t,l),l.autofocus&&l.focus(),e[19](l),c(t,f),c(t,E),ne&&ne.m(E,null),e[20](E),c(t,P),c(t,U),pe&&pe.m(U,null),e[21](U),c(t,H);for(let e=0;e<X.length;e+=1)X[e].m(t,null);K=!0,Q||(S=[W(l,"change",e[12]),W(U,"dragover",A(D(e[11]))),W(U,"dragenter",e[22]),W(U,"dragleave",e[23]),W(U,"drop",A(D(e[12]))),V(q=R.call(null,U,{disabled:e[4]||e[0].length>=e[5]})),W(t,"click",e[14])],Q=!0)},p(e,[n]){T(l,ee=z(Z,[{type:"file"},{multiple:!0},(!K||8&n)&&{accept:e[3]},(!K||49&n&&s!==(s=e[4]||e[0].length>=e[5]))&&{disabled:s},32768&n&&e[15]])),B(l,"svelte-1alvml6",!0),se?se.p&&(!K||131264&n)&&b(se,te,e,e[17],K?C(te,e[17],n,ae):k(e[17]),re):ne&&ne.p&&(!K||208&n)&&ne.p(e,K?n:-1),e[0].length<e[5]?pe?(pe.p(e,n),33&n&&w(pe,1)):(pe=ue(e),pe.c(),w(pe,1),pe.m(U,null)):pe&&(j(),y(pe,1,1,(()=>{pe=null})),L()),q&&F(q.update)&&49&n&&q.update.call(null,{disabled:e[4]||e[0].length>=e[5]}),64&n&&B(U,"accepting",e[6]),8197&n&&(de=e[0],j(),X=M(X,n,me,1,e,de,Y,t,G,he,null,le),L()),(!K||2&n&&J!==(J=I(O("file-dropzone",e[1]))+" svelte-1alvml6"))&&o(t,"class",J),3&n&&B(t,"has-content",e[0]&&0!==e[0].length),130&n&&B(t,"wrong-type",e[7]),51&n&&B(t,"disabled",e[4]||e[0].length>=e[5])},i(e){if(!K){w(ne,e),w(pe);for(let e=0;e<de.length;e+=1)w(X[e]);K=!0}},o(e){y(ne,e),y(pe);for(let e=0;e<X.length;e+=1)y(X[e]);K=!1},d(l){l&&r(t),e[19](null),ne&&ne.d(l),e[20](null),pe&&pe.d(),e[21](null);for(let e=0;e<X.length;e+=1)X[e].d();Q=!1,N(S)}}}function de(e,t,l){const s=["class","files","fileComponent","accept","beforeChange","disabled","max"];let n,a,r,o=P(t,s),{$$slots:i={},$$scope:c}=t,{class:f=null}=t,{files:h=[]}=t,{fileComponent:p=Q}=t,{accept:d=null}=t,{beforeChange:m=null}=t,{disabled:g=!1}=t,{max:v=1/0}=t,$=!1,w=!1;const y=U();return e.$$set=e=>{t=u(u({},t),q(e)),l(15,o=P(t,s)),"class"in e&&l(1,f=e.class),"files"in e&&l(0,h=e.files),"fileComponent"in e&&l(2,p=e.fileComponent),"accept"in e&&l(3,d=e.accept),"beforeChange"in e&&l(16,m=e.beforeChange),"disabled"in e&&l(4,g=e.disabled),"max"in e&&l(5,v=e.max),"$$scope"in e&&l(17,c=e.$$scope)},[h,f,p,d,g,v,$,w,n,a,r,function(e){l(7,w=[...e.dataTransfer.items].some((e=>!te(d,e))))},async function(e){const t=Array.from((e.dataTransfer||e.target).files);await Promise.all(t.map((async e=>{try{"function"==typeof m&&await m(e)}catch(e){return}te(d,e)&&h.length<v&&h.push(e)}))),l(0,h),setTimeout((()=>l(7,w=!1)),1e3),y("change",{files:h,nativeEvent:e}),l(10,r.value="",r),l(6,$=!1)},function({detail:e}){l(0,h=h.filter((t=>t!==e))),y("change",{files:h})},function(e){e.target!=n&&e.target!=a&&e.target!=r&&e.preventDefault()},o,m,c,i,function(e){H[e?"unshift":"push"]((()=>{r=e,l(10,r)}))},function(e){H[e?"unshift":"push"]((()=>{n=e,l(8,n)}))},function(e){H[e?"unshift":"push"]((()=>{a=e,l(9,a)}))},()=>l(6,$=!0),()=>{l(6,$=!1),l(7,w=!1)}]}var me=class extends e{constructor(e){super(),t(this,e,de,pe,l,{class:1,files:0,fileComponent:2,accept:3,beforeChange:16,disabled:4,max:5})}};export{me as F};
