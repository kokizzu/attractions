import{_ as n,a as t,b as c,c as o,i as r,s,d as e,S as a,P as u,o as f,p as i,x as $,f as l,g as p,q as m,z as d,h as v,j as h,k as g,r as y,l as x,m as w,U as S,V as R,W as j,u as b,v as B,w as C,y as E,A as O}from"./client.7e699edd.js";import{L as P}from"./label.ddf83674.js";import{C as k}from"./copyable-code.6d40aef8.js";function q(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=t(n);if(o){var e=t(this).constructor;r=Reflect.construct(s,arguments,e)}else r=s.apply(this,arguments);return c(this,r)}}var z=function(n){return{}},A=function(n){return{}},I=function(n){return{}},L=function(n){return{}};function N(n){var t;return{c:function(){t=E("Showcase")},l:function(n){t=O(n,"Showcase")},m:function(n,c){g(n,t,c)},d:function(n){n&&v(t)}}}function T(n){var t;return{c:function(){t=E("Source")},l:function(n){t=O(n,"Source")},m:function(n,c){g(n,t,c)},d:function(n){n&&v(t)}}}function U(n){var t,c=n[0].source,o=u(c,n,n[1],A);return{c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,c){o&&o.m(n,c),t=!0},p:function(n,r){o&&o.p&&(!t||2&r)&&S(o,c,n,n[1],t?j(c,n[1],r,z):R(n[1]),A)},i:function(n){t||(b(o,n),t=!0)},o:function(n){B(o,n),t=!1},d:function(n){o&&o.d(n)}}}function V(n){var t,c,o,r,s,e,a,E;c=new P({props:{$$slots:{default:[N]},$$scope:{ctx:n}}});var O=n[0].showcase,q=u(O,n,n[1],L);return s=new P({props:{class:"code",$$slots:{default:[T]},$$scope:{ctx:n}}}),a=new k({props:{$$slots:{default:[U]},$$scope:{ctx:n}}}),{c:function(){t=f("section"),i(c.$$.fragment),o=$(),q&&q.c(),r=$(),i(s.$$.fragment),e=$(),i(a.$$.fragment),this.h()},l:function(n){t=l(n,"SECTION",{class:!0});var u=p(t);m(c.$$.fragment,u),o=d(u),q&&q.l(u),r=d(u),m(s.$$.fragment,u),e=d(u),m(a.$$.fragment,u),u.forEach(v),this.h()},h:function(){h(t,"class","showcase svelte-8pudd0")},m:function(n,u){g(n,t,u),y(c,t,null),x(t,o),q&&q.m(t,null),x(t,r),y(s,t,null),x(t,e),y(a,t,null),E=!0},p:function(n,t){var o=w(t,1)[0],r={};2&o&&(r.$$scope={dirty:o,ctx:n}),c.$set(r),q&&q.p&&(!E||2&o)&&S(q,O,n,n[1],E?j(O,n[1],o,I):R(n[1]),L);var e={};2&o&&(e.$$scope={dirty:o,ctx:n}),s.$set(e);var u={};2&o&&(u.$$scope={dirty:o,ctx:n}),a.$set(u)},i:function(n){E||(b(c.$$.fragment,n),b(q,n),b(s.$$.fragment,n),b(a.$$.fragment,n),E=!0)},o:function(n){B(c.$$.fragment,n),B(q,n),B(s.$$.fragment,n),B(a.$$.fragment,n),E=!1},d:function(n){n&&v(t),C(c),q&&q.d(n),C(s),C(a)}}}function W(n,t,c){var o=t.$$slots,r=void 0===o?{}:o,s=t.$$scope;return n.$$set=function(n){"$$scope"in n&&c(1,s=n.$$scope)},[r,s]}var _=function(t){n(u,a);var c=q(u);function u(n){var t;return o(this,u),t=c.call(this),r(e(t),n,W,V,s,{}),t}return u}();export{_ as S};
