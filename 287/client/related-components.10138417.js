import{S as t,i as e,s,h as n,j as l,q as o,c as a,b as r,k as c,u as $,d as f,e as m,V as p,f as i,m as u,g,t as d,o as h,p as x,w as b,x as j,a5 as w,F as y,r as v,v as k,y as C}from"./client.838c13b4.js";import{B as R}from"./button.bb82994e.js";import{C as z}from"./card.452b9feb.js";import{L as B}from"./label.1d9cc86f.js";import{c as V}from"./classes.2453fa25.js";function q(t,e,s){const n=t.slice();return n[2]=e[s],n}function D(t){let e,s,y,v,k;s=new B({props:{$$slots:{default:[E]},$$scope:{ctx:t}}});let C=t[1],R=[];for(let e=0;e<C.length;e+=1)R[e]=L(q(t,C,e));const z=t=>h(R[t],1,1,(()=>{R[t]=null}));return{c(){e=n("div"),l(s.$$.fragment),y=o();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);c(s.$$.fragment,n),y=$(n);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(f),this.h()},h(){m(e,"class",v=p(V("related-components",t[0]))+" svelte-1w8cyzt")},m(t,n){i(t,e,n),u(s,e,null),g(e,y);for(let t=0;t<R.length;t+=1)R[t].m(e,null);k=!0},p(t,n){const l={};if(32&n&&(l.$$scope={dirty:n,ctx:t}),s.$set(l),2&n){let s;for(C=t[1],s=0;s<C.length;s+=1){const l=q(t,C,s);R[s]?(R[s].p(l,n),d(R[s],1)):(R[s]=L(l),R[s].c(),d(R[s],1),R[s].m(e,null))}for(b(),s=C.length;s<R.length;s+=1)z(s);j()}(!k||1&n&&v!==(v=p(V("related-components",t[0]))+" svelte-1w8cyzt"))&&m(e,"class",v)},i(t){if(!k){d(s.$$.fragment,t);for(let t=0;t<C.length;t+=1)d(R[t]);k=!0}},o(t){h(s.$$.fragment,t),R=R.filter(Boolean);for(let t=0;t<R.length;t+=1)h(R[t]);k=!1},d(t){t&&f(e),x(s),w(R,t)}}}function E(t){let e;return{c(){e=v("Related Components")},l(t){e=k(t,"Related Components")},m(t,s){i(t,e,s)},d(t){t&&f(e)}}}function F(t){let e,s=t[2].name+"";return{c(){e=v(s)},l(t){e=k(t,s)},m(t,s){i(t,e,s)},p(t,n){2&n&&s!==(s=t[2].name+"")&&C(e,s)},d(t){t&&f(e)}}}function I(t){let e,s,n;return e=new R({props:{href:t[2].link,$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment),s=o()},l(t){c(e.$$.fragment,t),s=$(t)},m(t,l){u(e,t,l),i(t,s,l),n=!0},p(t,s){const n={};2&s&&(n.href=t[2].link),34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t),t&&f(s)}}}function L(t){let e,s;return e=new z({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){u(e,t,n),s=!0},p(t,s){const n={};34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function N(t){let e,s,n=0!==t[1].length&&D(t);return{c(){n&&n.c(),e=y()},l(t){n&&n.l(t),e=y()},m(t,l){n&&n.m(t,l),i(t,e,l),s=!0},p(t,[s]){0!==t[1].length?n?(n.p(t,s),2&s&&d(n,1)):(n=D(t),n.c(),d(n,1),n.m(e.parentNode,e)):n&&(b(),h(n,1,1,(()=>{n=null})),j())},i(t){s||(d(n),s=!0)},o(t){h(n),s=!1},d(t){n&&n.d(t),t&&f(e)}}}function S(t,e,s){let{class:n=null}=e,{components:l}=e;return t.$$set=t=>{"class"in t&&s(0,n=t.class),"components"in t&&s(1,l=t.components)},[n,l]}class A extends t{constructor(t){super(),e(this,t,S,N,s,{class:0,components:1})}}export{A as R};
