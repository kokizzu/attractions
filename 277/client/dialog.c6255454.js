import{S as s,i as l,s as a,j as t,k as n,m as e,t as c,o as i,p as o,h as r,q as d,r as u,c as $,b as f,u as m,v as p,d as g,e as h,V as v,f as x,g as C,O as b,P as k,Q as j,y as w,K as W,M as y,w as D,x as V,T as E}from"./client.c69ffed5.js";import{B as I}from"./button.0afe79fa.js";import{X as q}from"./x.d827db7f.js";import{c as B}from"./classes.2453fa25.js";const K=s=>({}),M=s=>({}),O=s=>({}),P=s=>({});function Q(s){let l,a;return l=new I({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[S]},$$scope:{ctx:s}}}),l.$on("click",(function(){E(s[3])&&s[3].apply(this,arguments)})),{c(){t(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,t){e(l,s,t),a=!0},p(a,t){s=a;const n={};128&t&&(n.$$scope={dirty:t,ctx:s}),l.$set(n)},i(s){a||(c(l.$$.fragment,s),a=!0)},o(s){i(l.$$.fragment,s),a=!1},d(s){o(l,s)}}}function S(s){let l;const a=s[6]["close-icon"],r=W(a,s,s[7],P),d=r||function(s){let l,a;return l=new q({}),{c(){t(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,t){e(l,s,t),a=!0},i(s){a||(c(l.$$.fragment,s),a=!0)},o(s){i(l.$$.fragment,s),a=!1},d(s){o(l,s)}}}();return{c(){d&&d.c()},l(s){d&&d.l(s)},m(s,a){d&&d.m(s,a),l=!0},p(s,t){r&&r.p&&(!l||128&t)&&b(r,a,s,s[7],l?j(a,s[7],t,O):k(s[7]),P)},i(s){l||(c(d,s),l=!0)},o(s){i(d,s),l=!1},d(s){d&&d.d(s)}}}function T(s){let l,a,t,n,e;const o=s[6]["title-icon"],y=W(o,s,s[7],M);return{c(){l=r("div"),y&&y.c(),a=d(),t=u(s[4]),this.h()},l(n){l=$(n,"DIV",{class:!0});var e=f(l);y&&y.l(e),a=m(e),t=p(e,s[4]),e.forEach(g),this.h()},h(){h(l,"class",n=v(B("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi")},m(s,n){x(s,l,n),y&&y.m(l,null),C(l,a),C(l,t),e=!0},p(s,a){y&&y.p&&(!e||128&a)&&b(y,o,s,s[7],e?j(o,s[7],a,K):k(s[7]),M),(!e||16&a)&&w(t,s[4]),(!e||10&a&&n!==(n=v(B("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi"))&&h(l,"class",n)},i(s){e||(c(y,s),e=!0)},o(s){i(y,s),e=!1},d(s){s&&g(l),y&&y.d(s)}}}function z(s){let l,a,t,n,e,o=null!=s[3]&&Q(s),u=null!=s[4]&&T(s);const p=s[6].default,w=W(p,s,s[7],null);return{c(){l=r("div"),o&&o.c(),a=d(),u&&u.c(),t=d(),w&&w.c(),this.h()},l(s){l=$(s,"DIV",{class:!0});var n=f(l);o&&o.l(n),a=m(n),u&&u.l(n),t=m(n),w&&w.l(n),n.forEach(g),this.h()},h(){h(l,"class",n=v(B("dialog",s[0]))+" svelte-1a6g8xi"),y(l,"danger",s[2]),y(l,"constrain-width",s[5])},m(s,n){x(s,l,n),o&&o.m(l,null),C(l,a),u&&u.m(l,null),C(l,t),w&&w.m(l,null),e=!0},p(s,[r]){null!=s[3]?o?(o.p(s,r),8&r&&c(o,1)):(o=Q(s),o.c(),c(o,1),o.m(l,a)):o&&(D(),i(o,1,1,(()=>{o=null})),V()),null!=s[4]?u?(u.p(s,r),16&r&&c(u,1)):(u=T(s),u.c(),c(u,1),u.m(l,t)):u&&(D(),i(u,1,1,(()=>{u=null})),V()),w&&w.p&&(!e||128&r)&&b(w,p,s,s[7],e?j(p,s[7],r,null):k(s[7]),null),(!e||1&r&&n!==(n=v(B("dialog",s[0]))+" svelte-1a6g8xi"))&&h(l,"class",n),5&r&&y(l,"danger",s[2]),33&r&&y(l,"constrain-width",s[5])},i(s){e||(c(o),c(u),c(w,s),e=!0)},o(s){i(o),i(u),i(w,s),e=!1},d(s){s&&g(l),o&&o.d(),u&&u.d(),w&&w.d(s)}}}function A(s,l,a){let{$$slots:t={},$$scope:n}=l,{class:e=null}=l,{titleClass:c=null}=l,{danger:i=!1}=l,{closeCallback:o=null}=l,{title:r=null}=l,{constrainWidth:d=!1}=l;return s.$$set=s=>{"class"in s&&a(0,e=s.class),"titleClass"in s&&a(1,c=s.titleClass),"danger"in s&&a(2,i=s.danger),"closeCallback"in s&&a(3,o=s.closeCallback),"title"in s&&a(4,r=s.title),"constrainWidth"in s&&a(5,d=s.constrainWidth),"$$scope"in s&&a(7,n=s.$$scope)},[e,c,i,o,r,d,t,n]}var F=class extends s{constructor(s){super(),l(this,s,A,z,a,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5})}};export{F as D};
