import{_ as t,a as n,b as e,c as r,i,s as o,d as a,S as s,e as c,f,g as u,h as l,j as h,k as v,l as p,n as m,o as y,y as d,x as $,p as x,A as g,z as w,q as k,r as R,m as E,D as B,u as j,v as V,w as b,L as z}from"./client.8f6d95bc.js";import{B as D}from"./button.2eba1501.js";import{f as I}from"./format-file-size.0c5da3e0.js";function C(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var a=n(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return e(this,i)}}function O(t){var n,e,r,i,o;return{c:function(){n=c("svg"),e=c("polyline"),r=c("path"),i=c("line"),o=c("line"),this.h()},l:function(t){n=f(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=u(n);e=f(a,"polyline",{points:!0},1),u(e).forEach(l),r=f(a,"path",{d:!0},1),u(r).forEach(l),i=f(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),u(i).forEach(l),o=f(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),u(o).forEach(l),a.forEach(l),this.h()},h:function(){h(e,"points","3 6 5 6 21 6"),h(r,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),h(i,"x1","10"),h(i,"y1","11"),h(i,"x2","10"),h(i,"y2","17"),h(o,"x1","14"),h(o,"y1","11"),h(o,"x2","14"),h(o,"y2","17"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"width","24"),h(n,"height","24"),h(n,"viewBox","0 0 24 24"),h(n,"fill","none"),h(n,"stroke","currentColor"),h(n,"stroke-width","2"),h(n,"stroke-linecap","round"),h(n,"stroke-linejoin","round")},m:function(t,a){v(t,n,a),p(n,e),p(n,r),p(n,i),p(n,o)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var P=function(n){t(c,s);var e=C(c);function c(t){var n;return r(this,c),n=e.call(this),i(a(n),t,null,O,o,{}),n}return c}();function q(t){var n=t.split(".");return n[n.length-1].toUpperCase()}function A(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var a=n(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return e(this,i)}}function F(t){var n,e;return n=new P({}),{c:function(){x(n.$$.fragment)},l:function(t){k(n.$$.fragment,t)},m:function(t,r){R(n,t,r),e=!0},i:function(t){e||(j(n.$$.fragment,t),e=!0)},o:function(t){V(n.$$.fragment,t),e=!1},d:function(t){b(n,t)}}}function H(t){var n,e,r,i,o,a,s,c,m,z,C,O,P=t[0].name+"",A=I(t[0].size)+"",H=q(t[0].name)+"";return(C=new D({props:{danger:!0,round:!0,$$slots:{default:[F]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){n=y("div"),e=y("div"),r=d(P),o=$(),a=y("div"),s=d(A),c=d("\n    •\n    "),m=d(H),z=$(),x(C.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var i=u(n);e=f(i,"DIV",{class:!0,title:!0});var h=u(e);r=g(h,P),h.forEach(l),o=w(i),a=f(i,"DIV",{class:!0});var v=u(a);s=g(v,A),c=g(v,"\n    •\n    "),m=g(v,H),v.forEach(l),z=w(i),k(C.$$.fragment,i),i.forEach(l),this.h()},h:function(){h(e,"class","filename svelte-1fssyil"),h(e,"title",i=t[0].name),h(a,"class","properties svelte-1fssyil"),h(n,"class","file-tile svelte-1fssyil")},m:function(t,i){v(t,n,i),p(n,e),p(e,r),p(n,o),p(n,a),p(a,s),p(a,c),p(a,m),p(n,z),R(C,n,null),O=!0},p:function(t,n){var o=E(n,1)[0];(!O||1&o)&&P!==(P=t[0].name+"")&&B(r,P),(!O||1&o&&i!==(i=t[0].name))&&h(e,"title",i),(!O||1&o)&&A!==(A=I(t[0].size)+"")&&B(s,A),(!O||1&o)&&H!==(H=q(t[0].name)+"")&&B(m,H);var a={};8&o&&(a.$$scope={dirty:o,ctx:t}),C.$set(a)},i:function(t){O||(j(C.$$.fragment,t),O=!0)},o:function(t){V(C.$$.fragment,t),O=!1},d:function(t){t&&l(n),b(C)}}}function L(t,n,e){var r=n.file,i=z();return t.$$set=function(t){"file"in t&&e(0,r=t.file)},[r,i,function(){return i("delete",r)}]}var M=function(n){t(c,s);var e=A(c);function c(t){var n;return r(this,c),n=e.call(this),i(a(n),t,L,H,o,{file:0}),n}return c}();export{M as F,q as f};
