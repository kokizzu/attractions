import{S as t,i as e,s as n,N as s,p as a,q as r,r as $,X as c,a2 as o,u as l,v as i,w as f,H as m,O as p,x as d,z as u,k as g,h,y as x,A as y,F as b,G as k,n as v,D as w}from"./client.c5d9c35d.js";import{L as z,H as S,P as A}from"./layout.c1866920.js";import{U as I,L as j}from"./ul.d3f28608.js";import{f as T}from"./format-file-size.0c5da3e0.js";function W(t){let e;return{c(){e=x("Warm welcome, stranded developer")},l(t){e=y(t,"Warm welcome, stranded developer")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function C(t){let e;return{c(){e=x("Attractions is a stylish and functional UI kit for Svelte, built to solve interface tasks at hand.")},l(t){e=y(t,"Attractions is a stylish and functional UI kit for Svelte, built to solve interface tasks at hand.")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function G(t){let e;return{c(){e=x("Given the compiling nature of Svelte, the components can be used for any framework using the JavaScript API.")},l(t){e=y(t,"Given the compiling nature of Svelte, the components can be used for any framework using the JavaScript API.")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function H(t){let e;return{c(){e=x("This library is MIT licensed.")},l(t){e=y(t,"This library is MIT licensed.")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function P(t){let e;return{c(){e=x("(idk, an error occured)")},l(t){e=y(t,"(idk, an error occured)")},m(t,n){g(t,e,n)},p:v,d(t){t&&h(e)}}}function U(t){let e,n,s,a,r=T(t[2].size)+"",$=T(t[2].gzip)+"";return{c(){e=x(r),n=x(" ("),s=x($),a=x(" gzipped)")},l(t){e=y(t,r),n=y(t," ("),s=y(t,$),a=y(t," gzipped)")},m(t,r){g(t,e,r),g(t,n,r),g(t,s,r),g(t,a,r)},p(t,n){1&n&&r!==(r=T(t[2].size)+"")&&w(e,r),1&n&&$!==($=T(t[2].gzip)+"")&&w(s,$)},d(t){t&&h(e),t&&h(n),t&&h(s),t&&h(a)}}}function J(t){let e;return{c(){e=x("(calculating…)")},l(t){e=y(t,"(calculating…)")},m(t,n){g(t,e,n)},p:v,d(t){t&&h(e)}}}function L(t){let e,n,s,a={ctx:t,current:null,token:null,hasCatch:!0,pending:J,then:U,catch:P,value:2};return b(n=t[0],a),{c(){e=x("Weighs only\n"),a.block.c(),s=x(", tree-shaking-enabled")},l(t){e=y(t,"Weighs only\n"),a.block.l(t),s=y(t,", tree-shaking-enabled")},m(t,n){g(t,e,n),a.block.m(t,a.anchor=n),a.mount=()=>s.parentNode,a.anchor=s,g(t,s,n)},p(e,s){t=e,a.ctx=t,1&s&&n!==(n=t[0])&&b(n,a)||k(a,t,s)},d(t){t&&h(e),a.block.d(t),a.token=null,a=null,t&&h(s)}}}function M(t){let e;return{c(){e=x("Components are customizable with classes and Sass variables")},l(t){e=y(t,"Components are customizable with classes and Sass variables")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function N(t){let e;return{c(){e=x("Accessibility included")},l(t){e=y(t,"Accessibility included")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function q(t){let e,n,s,c,o,m;return e=new j({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),s=new j({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),o=new j({props:{$$slots:{default:[N]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=d(),a(s.$$.fragment),c=d(),a(o.$$.fragment)},l(t){r(e.$$.fragment,t),n=u(t),r(s.$$.fragment,t),c=u(t),r(o.$$.fragment,t)},m(t,a){$(e,t,a),g(t,n,a),$(s,t,a),g(t,c,a),$(o,t,a),m=!0},p(t,n){const a={};9&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r);const $={};8&n&&($.$$scope={dirty:n,ctx:t}),o.$set($)},i(t){m||(l(e.$$.fragment,t),l(s.$$.fragment,t),l(o.$$.fragment,t),m=!0)},o(t){i(e.$$.fragment,t),i(s.$$.fragment,t),i(o.$$.fragment,t),m=!1},d(t){f(e,t),t&&h(n),f(s,t),t&&h(c),f(o,t)}}}function D(t){let e,n,s,c,o,m,p,x,y,b;return e=new S({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[C]},$$scope:{ctx:t}}}),o=new A({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),p=new A({props:{$$slots:{default:[H]},$$scope:{ctx:t}}}),y=new I({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=d(),a(s.$$.fragment),c=d(),a(o.$$.fragment),m=d(),a(p.$$.fragment),x=d(),a(y.$$.fragment)},l(t){r(e.$$.fragment,t),n=u(t),r(s.$$.fragment,t),c=u(t),r(o.$$.fragment,t),m=u(t),r(p.$$.fragment,t),x=u(t),r(y.$$.fragment,t)},m(t,a){$(e,t,a),g(t,n,a),$(s,t,a),g(t,c,a),$(o,t,a),g(t,m,a),$(p,t,a),g(t,x,a),$(y,t,a),b=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r);const $={};8&n&&($.$$scope={dirty:n,ctx:t}),o.$set($);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c);const l={};9&n&&(l.$$scope={dirty:n,ctx:t}),y.$set(l)},i(t){b||(l(e.$$.fragment,t),l(s.$$.fragment,t),l(o.$$.fragment,t),l(p.$$.fragment,t),l(y.$$.fragment,t),b=!0)},o(t){i(e.$$.fragment,t),i(s.$$.fragment,t),i(o.$$.fragment,t),i(p.$$.fragment,t),i(y.$$.fragment,t),b=!1},d(t){f(e,t),t&&h(n),f(s,t),t&&h(c),f(o,t),t&&h(m),f(p,t),t&&h(x),f(y,t)}}}function F(t){let e,n;const m=[t[1],O];let p={$$slots:{default:[D]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)p=s(p,m[t]);return e=new z({props:p}),{c(){a(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){$(e,t,s),n=!0},p(t,[n]){const s=2&n?c(m,[2&n&&o(t[1]),0&n&&o(O)]):{};9&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}const O={name:"Home"};function X(t,e,n){let a=Promise.resolve(1/0);return m((()=>{n(0,a=fetch("https://bundlephobia.com/api/size?package=attractions@3.3.0").then((t=>t.json())))})),t.$$set=t=>{n(1,e=s(s({},e),p(t)))},e=p(e),[a,e]}class B extends t{constructor(t){super(),e(this,t,X,F,n,{})}}export{B as default,O as metadata};
