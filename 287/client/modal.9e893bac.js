import{S as s,i as a,s as l,F as c,f as n,w as o,o as e,x as t,t as i,d as r,H as p,K as u,h as d,c as f,b as h,e as m,V as v,M as $,O as y,P as k,Q as C,l as w,a1 as b}from"./client.bf284199.js";import{c as q}from"./classes.2453fa25.js";const x=s=>({}),V=s=>({closeCallback:s[3]}),j=s=>({}),D=s=>({closeCallback:s[3]});function E(s){let a,l,c;const o=s[5].default,t=u(o,s,s[4],V);return{c(){a=d("div"),t&&t.c(),this.h()},l(s){a=f(s,"DIV",{class:!0});var l=h(a);t&&t.l(l),l.forEach(r),this.h()},h(){m(a,"class",l=v(q("modal-overlay",s[1]))+" svelte-ln570q"),$(a,"open",s[0])},m(s,l){n(s,a,l),t&&t.m(a,null),c=!0},p(s,n){t&&t.p&&(!c||16&n)&&y(t,o,s,s[4],c?C(o,s[4],n,x):k(s[4]),V),(!c||2&n&&l!==(l=v(q("modal-overlay",s[1]))+" svelte-ln570q"))&&m(a,"class",l),3&n&&$(a,"open",s[0])},i(s){c||(i(t,s),c=!0)},o(s){e(t,s),c=!1},d(s){s&&r(a),t&&t.d(s)}}}function I(s){let a,l,c,o,t;const p=s[5].default,x=u(p,s,s[4],D);return{c(){a=d("div"),x&&x.c(),this.h()},l(s){a=f(s,"DIV",{class:!0});var l=h(a);x&&x.l(l),l.forEach(r),this.h()},h(){m(a,"class",l=v(q("modal-overlay",s[1]))+" svelte-ln570q"),$(a,"open",s[0])},m(l,e){n(l,a,e),x&&x.m(a,null),c=!0,o||(t=w(a,"click",b(s[3])),o=!0)},p(s,n){x&&x.p&&(!c||16&n)&&y(x,p,s,s[4],c?C(p,s[4],n,j):k(s[4]),D),(!c||2&n&&l!==(l=v(q("modal-overlay",s[1]))+" svelte-ln570q"))&&m(a,"class",l),3&n&&$(a,"open",s[0])},i(s){c||(i(x,s),c=!0)},o(s){e(x,s),c=!1},d(s){s&&r(a),x&&x.d(s),o=!1,t()}}}function M(s){let a,l,p,u;const d=[I,E],f=[];function h(s,a){return s[2]?1:0}return a=h(s),l=f[a]=d[a](s),{c(){l.c(),p=c()},l(s){l.l(s),p=c()},m(s,l){f[a].m(s,l),n(s,p,l),u=!0},p(s,[c]){let n=a;a=h(s),a===n?f[a].p(s,c):(o(),e(f[n],1,1,(()=>{f[n]=null})),t(),l=f[a],l?l.p(s,c):(l=f[a]=d[a](s),l.c()),i(l,1),l.m(p.parentNode,p))},i(s){u||(i(l),u=!0)},o(s){e(l),u=!1},d(s){f[a].d(s),s&&r(p)}}}function g(s,a,l){let{$$slots:c={},$$scope:n}=a,{class:o=null}=a,{open:e=!1}=a,{noClickaway:t=!1}=a;const i=p();return s.$$set=s=>{"class"in s&&l(1,o=s.class),"open"in s&&l(0,e=s.open),"noClickaway"in s&&l(2,t=s.noClickaway),"$$scope"in s&&l(4,n=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&i("change",{value:e})},[e,o,t,function(){l(0,e=!1)},n,c]}var F=class extends s{constructor(s){super(),a(this,s,g,M,l,{class:1,open:0,noClickaway:2})}};export{F as M};
