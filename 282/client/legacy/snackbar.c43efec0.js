import{_ as n,a as t,b as a,c as o,i as s,s as i,d as c,S as r,p as l,q as e,r as u,u as f,v,w as d,o as p,y as h,x as m,f as x,g as $,A as b,h as y,z as C,j as k,X as g,k as O,l as A,m as R,D as j,B,C as S,a8 as w,a9 as D}from"./client.6b2306c7.js";import{B as E}from"./button.763077be.js";import{c as P}from"./classes.7d86155b.js";function q(n){var t=n-1;return t*t*t+1}function z(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.delay,o=void 0===a?0:a,s=t.duration,i=void 0===s?400:s,c=t.easing,r=void 0===c?q:c,l=t.x,e=void 0===l?0:l,u=t.y,f=void 0===u?0:u,v=t.opacity,d=void 0===v?0:v,p=getComputedStyle(n),h=+p.opacity,m="none"===p.transform?"":p.transform,x=h*(1-d);return{delay:o,duration:i,easing:r,css:function(n,t){return"\n\t\t\ttransform: ".concat(m," translate(").concat((1-n)*e,"px, ").concat((1-n)*f,"px);\n\t\t\topacity: ").concat(h-x*t)}}}function I(n,t){var a=t.transition,o=void 0===a?null:a,s=t.options;return null===o?{delay:0,duration:0,css:function(){return""}}:o(n,void 0===s?null:s)}function N(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,i=t(n);if(o){var c=t(this).constructor;s=Reflect.construct(i,arguments,c)}else s=i.apply(this,arguments);return a(this,s)}}function V(n){var t,a;return(t=new E({props:{class:P(n[2]),$$slots:{default:[X]},$$scope:{ctx:n}}})).$on("click",n[9]),{c:function(){l(t.$$.fragment)},l:function(n){e(t.$$.fragment,n)},m:function(n,o){u(t,n,o),a=!0},p:function(n,a){var o={};4&a&&(o.class=P(n[2])),1040&a&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i:function(n){a||(f(t.$$.fragment,n),a=!0)},o:function(n){v(t.$$.fragment,n),a=!1},d:function(n){d(t,n)}}}function X(n){var t,a=n[4].text+"";return{c:function(){t=h(a)},l:function(n){t=b(n,a)},m:function(n,a){O(n,t,a)},p:function(n,o){16&o&&a!==(a=n[4].text+"")&&j(t,a)},d:function(n){n&&y(t)}}}function _(n){var t,a,o,s,i,c,r,l,e=null!=n[4]&&V(n);return{c:function(){t=p("div"),a=p("span"),o=h(n[3]),i=m(),e&&e.c(),this.h()},l:function(s){t=x(s,"DIV",{class:!0});var c=$(t);a=x(c,"SPAN",{class:!0});var r=$(a);o=b(r,n[3]),r.forEach(y),i=C(c),e&&e.l(c),c.forEach(y),this.h()},h:function(){k(a,"class",s=g(P("text",n[1]))+" svelte-1fhhann"),k(t,"class",c=g(P("snackbar",n[0]))+" svelte-1fhhann")},m:function(n,s){O(n,t,s),A(t,a),A(a,o),A(t,i),e&&e.m(t,null),l=!0},p:function(i,r){var u=R(r,1)[0];n=i,(!l||8&u)&&j(o,n[3]),(!l||2&u&&s!==(s=g(P("text",n[1]))+" svelte-1fhhann"))&&k(a,"class",s),null!=n[4]?e?(e.p(n,u),16&u&&f(e,1)):((e=V(n)).c(),f(e,1),e.m(t,null)):e&&(B(),v(e,1,1,(function(){e=null})),S()),(!l||1&u&&c!==(c=g(P("snackbar",n[0]))+" svelte-1fhhann"))&&k(t,"class",c)},i:function(a){l||(f(e),w((function(){r||(r=D(t,I,{transition:n[7],options:n[8]},!0)),r.run(1)})),l=!0)},o:function(a){v(e),r||(r=D(t,I,{transition:n[7],options:n[8]},!1)),r.run(0),l=!1},d:function(n){n&&y(t),e&&e.d(),n&&r&&r.end()}}}function F(n,t,a){var o=t.class,s=void 0===o?null:o,i=t.textClass,c=void 0===i?null:i,r=t.buttonClass,l=void 0===r?null:r,e=t.text,u=t.action,f=void 0===u?null:u,v=t.closeOnAction,d=void 0===v||v,p=t.closeCallback,h=t.transition,m=void 0===h?z:h,x=t.transitionOptions,$=void 0===x?{x:-20,duration:150}:x;return n.$$set=function(n){"class"in n&&a(0,s=n.class),"textClass"in n&&a(1,c=n.textClass),"buttonClass"in n&&a(2,l=n.buttonClass),"text"in n&&a(3,e=n.text),"action"in n&&a(4,f=n.action),"closeOnAction"in n&&a(5,d=n.closeOnAction),"closeCallback"in n&&a(6,p=n.closeCallback),"transition"in n&&a(7,m=n.transition),"transitionOptions"in n&&a(8,$=n.transitionOptions)},[s,c,l,e,f,d,p,m,$,function(){"function"==typeof f.callback&&f.callback(),d&&p()}]}var G=function(t){n(l,r);var a=N(l);function l(n){var t;return o(this,l),t=a.call(this),s(c(t),n,F,_,i,{class:0,textClass:1,buttonClass:2,text:3,action:4,closeOnAction:5,closeCallback:6,transition:7,transitionOptions:8}),t}return l}();export{G as S,I as d};
