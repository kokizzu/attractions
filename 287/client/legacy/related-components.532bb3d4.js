import{_ as n,a as t,b as o,c,i as r,s as e,d as a,S as f,o as s,p as i,x as u,f as l,g as $,q as m,z as p,h as v,j as d,$ as h,k as g,r as y,l as x,u as R,v as j,w,B as b,C as B,ad as C,K as k,m as z,y as D,A as q,D as A}from"./client.7e699edd.js";import{B as E}from"./button.a2f562fb.js";import{C as I}from"./card.4786c05e.js";import{L as K}from"./label.ddf83674.js";import{c as L}from"./classes.7d86155b.js";function N(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,e=t(n);if(c){var a=t(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return o(this,r)}}function O(n,t,o){var c=n.slice();return c[2]=t[o],c}function P(n){var t,o,c,r,e;o=new K({props:{$$slots:{default:[S]},$$scope:{ctx:n}}});for(var a=n[1],f=[],k=0;k<a.length;k+=1)f[k]=F(O(n,a,k));var z=function(n){return j(f[n],1,1,(function(){f[n]=null}))};return{c:function(){t=s("div"),i(o.$$.fragment),c=u();for(var n=0;n<f.length;n+=1)f[n].c();this.h()},l:function(n){t=l(n,"DIV",{class:!0});var r=$(t);m(o.$$.fragment,r),c=p(r);for(var e=0;e<f.length;e+=1)f[e].l(r);r.forEach(v),this.h()},h:function(){d(t,"class",r=h(L("related-components",n[0]))+" svelte-1w8cyzt")},m:function(n,r){g(n,t,r),y(o,t,null),x(t,c);for(var a=0;a<f.length;a+=1)f[a].m(t,null);e=!0},p:function(n,c){var s={};if(32&c&&(s.$$scope={dirty:c,ctx:n}),o.$set(s),2&c){var i;for(a=n[1],i=0;i<a.length;i+=1){var u=O(n,a,i);f[i]?(f[i].p(u,c),R(f[i],1)):(f[i]=F(u),f[i].c(),R(f[i],1),f[i].m(t,null))}for(b(),i=a.length;i<f.length;i+=1)z(i);B()}(!e||1&c&&r!==(r=h(L("related-components",n[0]))+" svelte-1w8cyzt"))&&d(t,"class",r)},i:function(n){if(!e){R(o.$$.fragment,n);for(var t=0;t<a.length;t+=1)R(f[t]);e=!0}},o:function(n){j(o.$$.fragment,n),f=f.filter(Boolean);for(var t=0;t<f.length;t+=1)j(f[t]);e=!1},d:function(n){n&&v(t),w(o),C(f,n)}}}function S(n){var t;return{c:function(){t=D("Related Components")},l:function(n){t=q(n,"Related Components")},m:function(n,o){g(n,t,o)},d:function(n){n&&v(t)}}}function V(n){var t,o=n[2].name+"";return{c:function(){t=D(o)},l:function(n){t=q(n,o)},m:function(n,o){g(n,t,o)},p:function(n,c){2&c&&o!==(o=n[2].name+"")&&A(t,o)},d:function(n){n&&v(t)}}}function _(n){var t,o,c;return t=new E({props:{href:n[2].link,$$slots:{default:[V]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment),o=u()},l:function(n){m(t.$$.fragment,n),o=p(n)},m:function(n,r){y(t,n,r),g(n,o,r),c=!0},p:function(n,o){var c={};2&o&&(c.href=n[2].link),34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){c||(R(t.$$.fragment,n),c=!0)},o:function(n){j(t.$$.fragment,n),c=!1},d:function(n){w(t,n),n&&v(o)}}}function F(n){var t,o;return t=new I({props:{$$slots:{default:[_]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment)},l:function(n){m(t.$$.fragment,n)},m:function(n,c){y(t,n,c),o=!0},p:function(n,o){var c={};34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(R(t.$$.fragment,n),o=!0)},o:function(n){j(t.$$.fragment,n),o=!1},d:function(n){w(t,n)}}}function G(n){var t,o,c=0!==n[1].length&&P(n);return{c:function(){c&&c.c(),t=k()},l:function(n){c&&c.l(n),t=k()},m:function(n,r){c&&c.m(n,r),g(n,t,r),o=!0},p:function(n,o){var r=z(o,1)[0];0!==n[1].length?c?(c.p(n,r),2&r&&R(c,1)):((c=P(n)).c(),R(c,1),c.m(t.parentNode,t)):c&&(b(),j(c,1,1,(function(){c=null})),B())},i:function(n){o||(R(c),o=!0)},o:function(n){j(c),o=!1},d:function(n){c&&c.d(n),n&&v(t)}}}function H(n,t,o){var c=t.class,r=void 0===c?null:c,e=t.components;return n.$$set=function(n){"class"in n&&o(0,r=n.class),"components"in n&&o(1,e=n.components)},[r,e]}var J=function(t){n(s,f);var o=N(s);function s(n){var t;return c(this,s),t=o.call(this),r(a(t),n,H,G,e,{class:0,components:1}),t}return s}();export{J as R};
