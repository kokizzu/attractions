import{_ as n,a as t,b as o,c,i as e,s,d as r,a7 as i,S as u,P as a,o as l,f,g as p,h as d,j as v,$ as h,R as $,k as y,t as g,m,U as R,V as w,W as k,u as x,v as j,M as E,a0 as B}from"./client.c5d9c35d.js";import{c as D}from"./classes.7d86155b.js";function P(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,s=t(n);if(c){var r=t(this).constructor;e=Reflect.construct(s,arguments,r)}else e=s.apply(this,arguments);return o(this,e)}}var V=function(n){return{}},b=function(n){return{toggle:n[2]}};function I(n){var t,o,c,e,s,r=n[6].default,i=a(r,n,n[5],b);return{c:function(){t=l("div"),i&&i.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var o=p(t);i&&i.l(o),o.forEach(d),this.h()},h:function(){v(t,"class",o=h(D("dropdown-shell",n[1]))+" svelte-18ox5ni"),$(t,"open",n[0])},m:function(o,r){y(o,t,r),i&&i.m(t,null),n[7](t),c=!0,e||(s=g(window,"click",n[4]),e=!0)},p:function(n,e){var s=m(e,1)[0];i&&i.p&&(!c||32&s)&&R(i,r,n,n[5],c?k(r,n[5],s,V):w(n[5]),b),(!c||2&s&&o!==(o=h(D("dropdown-shell",n[1]))+" svelte-18ox5ni"))&&v(t,"class",o),3&s&&$(t,"open",n[0])},i:function(n){c||(x(i,n),c=!0)},o:function(n){j(i,n),c=!1},d:function(o){o&&d(t),i&&i.d(o),n[7](null),e=!1,s()}}}function L(n,t,o){var c=t.$$slots,e=void 0===c?{}:c,s=t.$$scope,r=t.class,i=void 0===r?null:r,u=t.open,a=void 0!==u&&u;function l(){o(0,a=!a)}var f=null;function p(n){"Escape"===n.key&&a&&(n.preventDefault(),l())}var d=E();return n.$$set=function(n){"class"in n&&o(1,i=n.class),"open"in n&&o(0,a=n.open),"$$scope"in n&&o(5,s=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&d("change",{value:a}),1&n.$$.dirty&&"undefined"!=typeof document&&(a?document.addEventListener("keydown",p):document.removeEventListener("keydown",p))},[a,i,l,f,function(n){f&&!f.contains(n.target)&&a&&l()},s,e,function(n){B[n?"unshift":"push"]((function(){o(3,f=n)}))}]}var O=function(t){n(a,u);var o=P(a);function a(n){var t;return c(this,a),t=o.call(this),e(r(t),n,L,I,s,{class:1,open:0,toggle:2}),t}return i(a,[{key:"toggle",get:function(){return this.$$.ctx[2]}}]),a}();function M(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,s=t(n);if(c){var r=t(this).constructor;e=Reflect.construct(s,arguments,r)}else e=s.apply(this,arguments);return o(this,e)}}function S(n){var t,o,c,e=n[4].default,s=a(e,n,n[3],null);return{c:function(){t=l("div"),s&&s.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var o=p(t);s&&s.l(o),o.forEach(d),this.h()},h:function(){v(t,"class",o=h(D("dropdown",n[0]))+" svelte-1hjnt7a"),$(t,"right",n[1]),$(t,"top",n[2])},m:function(n,o){y(n,t,o),s&&s.m(t,null),c=!0},p:function(n,r){var i=m(r,1)[0];s&&s.p&&(!c||8&i)&&R(s,e,n,n[3],c?k(e,n[3],i,null):w(n[3]),null),(!c||1&i&&o!==(o=h(D("dropdown",n[0]))+" svelte-1hjnt7a"))&&v(t,"class",o),3&i&&$(t,"right",n[1]),5&i&&$(t,"top",n[2])},i:function(n){c||(x(s,n),c=!0)},o:function(n){j(s,n),c=!1},d:function(n){n&&d(t),s&&s.d(n)}}}function U(n,t,o){var c=t.$$slots,e=void 0===c?{}:c,s=t.$$scope,r=t.class,i=void 0===r?null:r,u=t.right,a=void 0!==u&&u,l=t.top,f=void 0!==l&&l;return n.$$set=function(n){"class"in n&&o(0,i=n.class),"right"in n&&o(1,a=n.right),"top"in n&&o(2,f=n.top),"$$scope"in n&&o(3,s=n.$$scope)},[i,a,f,s,e]}var W=function(t){n(i,u);var o=M(i);function i(n){var t;return c(this,i),t=o.call(this),e(r(t),n,U,S,s,{class:0,right:1,top:2}),t}return i}();export{O as D,W as a};
