import{S as t,i as n,s as e,h as s,c as a,b as r,d as o,L as c,M as l,f as u,w as i,X as $,x as f,R as p,t as m,o as g,F as h,G as d,H as v,I as x,J as w,_ as b,j as y,k as P,m as k,p as N,r as L,q as j,v as M,u as E,y as S,W as I,$ as q,Z as A}from"./client.838c13b4.js";import{B}from"./button.bb82994e.js";import{T as F}from"./text-field.55dbbc10.js";import{c as G}from"./classes.2453fa25.js";function H(t,n,e){const s=t.slice();return s[21]=n[e],s}function J(t){let n,e,h,d=[],v=new Map,w=t[7];const y=t=>t[21];for(let n=0;n<w.length;n+=1){let e=H(t,w,n),s=y(e);v.set(s,d[n]=K(s,e))}let P=[{class:e=G("pagination",t[1])},t[15]],k={};for(let t=0;t<P.length;t+=1)k=x(k,P[t]);return{c(){n=s("nav");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){n=a(t,"NAV",{class:!0});var e=r(n);for(let t=0;t<d.length;t+=1)d[t].l(e);e.forEach(o),this.h()},h(){c(n,k),l(n,"svelte-sbf28e",!0)},m(t,e){u(t,n,e);for(let t=0;t<d.length;t+=1)d[t].m(n,null);h=!0},p(t,s){32757&s&&(w=t[7],i(),d=$(d,s,y,1,t,w,v,n,b,K,null,H),f()),c(n,k=p(P,[(!h||2&s&&e!==(e=G("pagination",t[1])))&&{class:e},32768&s&&t[15]])),l(n,"svelte-sbf28e",!0)},i(t){if(!h){for(let t=0;t<w.length;t+=1)m(d[t]);h=!0}},o(t){for(let t=0;t<d.length;t+=1)g(d[t]);h=!1},d(t){t&&o(n);for(let t=0;t<d.length;t+=1)d[t].d()}}}function R(t){let n,e;return n=new B({props:{neutral:t[21]!==t[0],class:G("page",t[21]===t[0]&&"current"),$$slots:{default:[W]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[18](t[21])})),{c(){y(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,s){k(n,t,s),e=!0},p(e,s){t=e;const a={};129&s&&(a.neutral=t[21]!==t[0]),129&s&&(a.class=G("page",t[21]===t[0]&&"current")),16777344&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){N(n,t)}}}function T(t){let n,e,s,a;const r=[Z,X],c=[];function l(t,n){return t[6]?0:1}return n=l(t),e=c[n]=r[n](t),{c(){e.c(),s=h()},l(t){e.l(t),s=h()},m(t,e){c[n].m(t,e),u(t,s,e),a=!0},p(t,a){let o=n;n=l(t),n===o?c[n].p(t,a):(i(),g(c[o],1,1,(()=>{c[o]=null})),f(),e=c[n],e?e.p(t,a):(e=c[n]=r[n](t),e.c()),m(e,1),e.m(s.parentNode,s))},i(t){a||(m(e),a=!0)},o(t){g(e),a=!1},d(t){c[n].d(t),t&&o(s)}}}function V(t){let n,e,s,a;const r=[C,z],c=[];function l(t,n){return t[5]?0:1}return n=l(t),e=c[n]=r[n](t),{c(){e.c(),s=h()},l(t){e.l(t),s=h()},m(t,e){c[n].m(t,e),u(t,s,e),a=!0},p(t,a){let o=n;n=l(t),n===o?c[n].p(t,a):(i(),g(c[o],1,1,(()=>{c[o]=null})),f(),e=c[n],e?e.p(t,a):(e=c[n]=r[n](t),e.c()),m(e,1),e.m(s.parentNode,s))},i(t){a||(m(e),a=!0)},o(t){g(e),a=!1},d(t){c[n].d(t),t&&o(s)}}}function W(t){let n,e,s=t[21]+"";return{c(){n=L(s),e=j()},l(t){n=M(t,s),e=E(t)},m(t,s){u(t,n,s),u(t,e,s)},p(t,e){128&e&&s!==(s=t[21]+"")&&S(n,s)},d(t){t&&o(n),t&&o(e)}}}function X(t){let n,e;return n=new B({props:{class:"page",neutral:!0,$$slots:{default:[_]},$$scope:{ctx:t}}}),n.$on("click",t[14]),{c(){y(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,s){k(n,t,s),e=!0},p(t,e){const s={};16777216&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){N(n,t)}}}function Z(t){let n,e,s;function a(n){t[17](n)}let r={type:"number",min:1,max:t[2],noSpinner:!0,autofocus:!0};return void 0!==t[4]&&(r.value=t[4]),n=new F({props:r}),I.push((()=>q(n,"value",a))),n.$on("blur",t[11]),n.$on("keydown",t[12]),{c(){y(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,e){k(n,t,e),s=!0},p(t,s){const a={};4&s&&(a.max=t[2]),!e&&16&s&&(e=!0,a.value=t[4],A((()=>e=!1))),n.$set(a)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){N(n,t)}}}function _(t){let n;return{c(){n=L("...\n          ")},l(t){n=M(t,"...\n          ")},m(t,e){u(t,n,e)},d(t){t&&o(n)}}}function z(t){let n,e;return n=new B({props:{class:"page",neutral:!0,$$slots:{default:[D]},$$scope:{ctx:t}}}),n.$on("click",t[13]),{c(){y(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,s){k(n,t,s),e=!0},p(t,e){const s={};16777216&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){N(n,t)}}}function C(t){let n,e,s;function a(n){t[16](n)}let r={type:"number",min:1,max:t[2],noSpinner:!0,autofocus:!0};return void 0!==t[4]&&(r.value=t[4]),n=new F({props:r}),I.push((()=>q(n,"value",a))),n.$on("blur",t[11]),n.$on("keydown",t[12]),{c(){y(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,e){k(n,t,e),s=!0},p(t,s){const a={};4&s&&(a.max=t[2]),!e&&16&s&&(e=!0,a.value=t[4],A((()=>e=!1))),n.$set(a)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){N(n,t)}}}function D(t){let n;return{c(){n=L("...")},l(t){n=M(t,"...")},m(t,e){u(t,n,e)},d(t){t&&o(n)}}}function K(t,n){let e,s,a,r,c;const l=[V,T,R],$=[];function p(t,n){return t[21]===t[8]?0:t[21]===t[9]?1:2}return s=p(n),a=$[s]=l[s](n),{key:t,first:null,c(){e=h(),a.c(),r=h(),this.h()},l(t){e=h(),a.l(t),r=h(),this.h()},h(){this.first=e},m(t,n){u(t,e,n),$[s].m(t,n),u(t,r,n),c=!0},p(t,e){let o=s;s=p(n=t),s===o?$[s].p(n,e):(i(),g($[o],1,1,(()=>{$[o]=null})),f(),a=$[s],a?a.p(n,e):(a=$[s]=l[s](n),a.c()),m(a,1),a.m(r.parentNode,r))},i(t){c||(m(a),c=!0)},o(t){g(a),c=!1},d(t){t&&o(e),$[s].d(t),t&&o(r)}}}function O(t){let n,e,s=(t[2]>1||1==t[2]&&t[3])&&J(t);return{c(){s&&s.c(),n=h()},l(t){s&&s.l(t),n=h()},m(t,a){s&&s.m(t,a),u(t,n,a),e=!0},p(t,[e]){t[2]>1||1==t[2]&&t[3]?s?(s.p(t,e),12&e&&m(s,1)):(s=J(t),s.c(),m(s,1),s.m(n.parentNode,n)):s&&(i(),g(s,1,1,(()=>{s=null})),f())},i(t){e||(m(s),e=!0)},o(t){g(s),e=!1},d(t){s&&s.d(t),t&&o(n)}}}function Q(t,n,e){let s;const a=["class","pages","currentPage","showLonePage"];let r=d(n,a),{class:o=null}=n,{pages:c}=n,{currentPage:l=1}=n,{showLonePage:u=!0}=n,i=null,$=!1,f=!1;const p={},m={};function g(t){t>=1&&t<=c&&(e(5,$=!1),e(6,f=!1),e(0,l=t),b("change",{value:t}))}function h(t){const n=parseInt(i);isNaN(n)||g(n)}const b=v();return t.$$set=t=>{n=x(x({},n),w(t)),e(15,r=d(n,a)),"class"in t&&e(1,o=t.class),"pages"in t&&e(2,c=t.pages),"currentPage"in t&&e(0,l=t.currentPage),"showLonePage"in t&&e(3,u=t.showLonePage)},t.$$.update=()=>{5&t.$$.dirty&&e(0,l=Math.min(Math.max(l,1),c)),5&t.$$.dirty&&e(7,s=function(t,n=1){const e=[];return 1!==n&&e.push(1),n-1==3?e.push(n-2):n-1>3&&e.push(p),n>2&&e.push(n-1),e.push(n),n<t-1&&e.push(n+1),t-n==3?e.push(n+2):t-n>3&&e.push(m),n!==t&&e.push(t),e}(c,l))},[l,o,c,u,i,$,f,s,p,m,g,h,function({detail:t}){"Enter"===t.nativeEvent.key&&(h(),e(4,i=""))},function(){e(5,$=!0),e(6,f=!1)},function(){e(5,$=!1),e(6,f=!0)},r,function(t){i=t,e(4,i)},function(t){i=t,e(4,i)},t=>g(t)]}var U=class extends t{constructor(t){super(),n(this,t,Q,O,e,{class:1,pages:2,currentPage:0,showLonePage:3})}};export{U as P};
