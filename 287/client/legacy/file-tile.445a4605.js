import{_ as t,a as n,b as e,c as r,i,s as o,d as a,S as s,e as c,f,g as u,h as l,j as h,k as v,l as p,n as m,o as d,y,x as $,p as x,A as g,z as w,q as k,r as R,m as E,D as B,u as j,v as V,w as z,M as D}from"./client.c5d9c35d.js";import{B as I}from"./button.04809010.js";import{f as b}from"./format-file-size.0c5da3e0.js";function C(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var a=n(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return e(this,i)}}function M(t){var n,e,r,i,o;return{c:function(){n=c("svg"),e=c("polyline"),r=c("path"),i=c("line"),o=c("line"),this.h()},l:function(t){n=f(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=u(n);e=f(a,"polyline",{points:!0},1),u(e).forEach(l),r=f(a,"path",{d:!0},1),u(r).forEach(l),i=f(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),u(i).forEach(l),o=f(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),u(o).forEach(l),a.forEach(l),this.h()},h:function(){h(e,"points","3 6 5 6 21 6"),h(r,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),h(i,"x1","10"),h(i,"y1","11"),h(i,"x2","10"),h(i,"y2","17"),h(o,"x1","14"),h(o,"y1","11"),h(o,"x2","14"),h(o,"y2","17"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"width","24"),h(n,"height","24"),h(n,"viewBox","0 0 24 24"),h(n,"fill","none"),h(n,"stroke","currentColor"),h(n,"stroke-width","2"),h(n,"stroke-linecap","round"),h(n,"stroke-linejoin","round")},m:function(t,a){v(t,n,a),p(n,e),p(n,r),p(n,i),p(n,o)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var O=function(n){t(c,s);var e=C(c);function c(t){var n;return r(this,c),n=e.call(this),i(a(n),t,null,M,o,{}),n}return c}();function P(t){var n=t.split(".");return n[n.length-1].toUpperCase()}function q(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var a=n(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return e(this,i)}}function A(t){var n,e;return n=new O({}),{c:function(){x(n.$$.fragment)},l:function(t){k(n.$$.fragment,t)},m:function(t,r){R(n,t,r),e=!0},i:function(t){e||(j(n.$$.fragment,t),e=!0)},o:function(t){V(n.$$.fragment,t),e=!1},d:function(t){z(n,t)}}}function F(t){var n,e,r,i,o,a,s,c,m,D,C,M,O=t[0].name+"",q=b(t[0].size)+"",F=P(t[0].name)+"";return(C=new I({props:{danger:!0,round:!0,$$slots:{default:[A]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){n=d("div"),e=d("div"),r=y(O),o=$(),a=d("div"),s=y(q),c=y("\n    •\n    "),m=y(F),D=$(),x(C.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var i=u(n);e=f(i,"DIV",{class:!0,title:!0});var h=u(e);r=g(h,O),h.forEach(l),o=w(i),a=f(i,"DIV",{class:!0});var v=u(a);s=g(v,q),c=g(v,"\n    •\n    "),m=g(v,F),v.forEach(l),D=w(i),k(C.$$.fragment,i),i.forEach(l),this.h()},h:function(){h(e,"class","filename svelte-1fssyil"),h(e,"title",i=t[0].name),h(a,"class","properties svelte-1fssyil"),h(n,"class","file-tile svelte-1fssyil")},m:function(t,i){v(t,n,i),p(n,e),p(e,r),p(n,o),p(n,a),p(a,s),p(a,c),p(a,m),p(n,D),R(C,n,null),M=!0},p:function(t,n){var o=E(n,1)[0];(!M||1&o)&&O!==(O=t[0].name+"")&&B(r,O),(!M||1&o&&i!==(i=t[0].name))&&h(e,"title",i),(!M||1&o)&&q!==(q=b(t[0].size)+"")&&B(s,q),(!M||1&o)&&F!==(F=P(t[0].name)+"")&&B(m,F);var a={};8&o&&(a.$$scope={dirty:o,ctx:t}),C.$set(a)},i:function(t){M||(j(C.$$.fragment,t),M=!0)},o:function(t){V(C.$$.fragment,t),M=!1},d:function(t){t&&l(n),z(C)}}}function H(t,n,e){var r=n.file,i=D();return t.$$set=function(t){"file"in t&&e(0,r=t.file)},[r,i,function(){return i("delete",r)}]}var S=function(n){t(c,s);var e=q(c);function c(t){var n;return r(this,c),n=e.call(this),i(a(n),t,H,F,o,{file:0}),n}return c}();export{S as F,P as f};
