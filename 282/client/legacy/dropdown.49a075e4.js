import{_ as n,a as t,b as o,c as e,i as c,s as r,d as s,a4 as i,S as u,O as a,o as l,f,g as p,h as v,j as d,X as h,Q as $,k as y,t as g,m,T as R,u as w,v as k,L as x,Y as j}from"./client.6b2306c7.js";import{c as E}from"./classes.7d86155b.js";function B(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,r=t(n);if(e){var s=t(this).constructor;c=Reflect.construct(r,arguments,s)}else c=r.apply(this,arguments);return o(this,c)}}var D=function(n){return{}},b=function(n){return{toggle:n[2]}};function L(n){var t,o,e,c,r,s=n[6].default,i=a(s,n,n[5],b);return{c:function(){t=l("div"),i&&i.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var o=p(t);i&&i.l(o),o.forEach(v),this.h()},h:function(){d(t,"class",o=h(E("dropdown-shell",n[1]))+" svelte-18ox5ni"),$(t,"open",n[0])},m:function(o,s){y(o,t,s),i&&i.m(t,null),n[7](t),e=!0,c||(r=g(window,"click",n[4]),c=!0)},p:function(n,c){var r=m(c,1)[0];i&&i.p&&(!e||32&r)&&R(i,s,n,n[5],r,D,b),(!e||2&r&&o!==(o=h(E("dropdown-shell",n[1]))+" svelte-18ox5ni"))&&d(t,"class",o),3&r&&$(t,"open",n[0])},i:function(n){e||(w(i,n),e=!0)},o:function(n){k(i,n),e=!1},d:function(o){o&&v(t),i&&i.d(o),n[7](null),c=!1,r()}}}function O(n,t,o){var e=t.$$slots,c=void 0===e?{}:e,r=t.$$scope,s=t.class,i=void 0===s?null:s,u=t.open,a=void 0!==u&&u;function l(){o(0,a=!a)}var f=null;function p(n){"Escape"===n.key&&a&&(n.preventDefault(),l())}var v=x();return n.$$set=function(n){"class"in n&&o(1,i=n.class),"open"in n&&o(0,a=n.open),"$$scope"in n&&o(5,r=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&v("change",{value:a}),1&n.$$.dirty&&"undefined"!=typeof document&&(a?document.addEventListener("keydown",p):document.removeEventListener("keydown",p))},[a,i,l,f,function(n){f&&!f.contains(n.target)&&a&&l()},r,c,function(n){j[n?"unshift":"push"]((function(){o(3,f=n)}))}]}var I=function(t){n(a,u);var o=B(a);function a(n){var t;return e(this,a),t=o.call(this),c(s(t),n,O,L,r,{class:1,open:0,toggle:2}),t}return i(a,[{key:"toggle",get:function(){return this.$$.ctx[2]}}]),a}();function P(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,r=t(n);if(e){var s=t(this).constructor;c=Reflect.construct(r,arguments,s)}else c=r.apply(this,arguments);return o(this,c)}}function V(n){var t,o,e,c=n[4].default,r=a(c,n,n[3],null);return{c:function(){t=l("div"),r&&r.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var o=p(t);r&&r.l(o),o.forEach(v),this.h()},h:function(){d(t,"class",o=h(E("dropdown",n[0]))+" svelte-1hjnt7a"),$(t,"right",n[1]),$(t,"top",n[2])},m:function(n,o){y(n,t,o),r&&r.m(t,null),e=!0},p:function(n,s){var i=m(s,1)[0];r&&r.p&&(!e||8&i)&&R(r,c,n,n[3],i,null,null),(!e||1&i&&o!==(o=h(E("dropdown",n[0]))+" svelte-1hjnt7a"))&&d(t,"class",o),3&i&&$(t,"right",n[1]),5&i&&$(t,"top",n[2])},i:function(n){e||(w(r,n),e=!0)},o:function(n){k(r,n),e=!1},d:function(n){n&&v(t),r&&r.d(n)}}}function Q(n,t,o){var e=t.$$slots,c=void 0===e?{}:e,r=t.$$scope,s=t.class,i=void 0===s?null:s,u=t.right,a=void 0!==u&&u,l=t.top,f=void 0!==l&&l;return n.$$set=function(n){"class"in n&&o(0,i=n.class),"right"in n&&o(1,a=n.right),"top"in n&&o(2,f=n.top),"$$scope"in n&&o(3,r=n.$$scope)},[i,a,f,r,c]}var S=function(t){n(i,u);var o=P(i);function i(n){var t;return e(this,i),t=o.call(this),c(s(t),n,Q,V,r,{class:0,right:1,top:2}),t}return i}();export{I as D,S as a};
