import{_ as n,a as t,b as o,c,i,s as r,d as a,S as e,p as u,q as s,r as f,u as l,v as m,w as p,M as $,Y as h,a2 as d,o as v,x as g,f as y,g as x,z as b,h as L,j as O,X as j,Q,k as w,l as S,m as E,B as I,C as M,U as R,$ as k,a0 as B,aa as D,K as V,L as C,N as A,a3 as T,y as P,A as q,D as z,O as K,T as N,R as U,V as X}from"./client.e354dbc2.js";import{B as Y}from"./button.1867ef48.js";import{C as _}from"./chip.1ce609af.js";import{A as F,c as G,M as H}from"./autocomplete-field.3320af6d.js";import{X as J}from"./x.41b524c9.js";import{L as W}from"./loading.99ec3252.js";import{c as Z}from"./classes.7d86155b.js";import{p as nn}from"./plural-s.31bb9da9.js";function tn(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,r=t(n);if(c){var a=t(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return o(this,i)}}var on=function(n){return{}},cn=function(n){return{slot:"too-many-options"}},rn=function(n){return{}},an=function(n){return{slot:"not-enough-input"}},en=function(n){return{}},un=function(n){return{slot:"loading-options"}},sn=function(n){return{loadMoreOptions:131072&n}},fn=function(n){return{loadMoreOptions:n[17]}};function ln(n,t,o){var c=n.slice();return c[18]=t[o],c}function mn(n){var t,o;return t=new J({}),{c:function(){u(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){f(t,n,c),o=!0},i:function(n){o||(l(t.$$.fragment,n),o=!0)},o:function(n){m(t.$$.fragment,n),o=!1},d:function(n){p(t,n)}}}function pn(n){var t,o,c,i,r=n[18].name+"";return(c=new Y({props:{neutral:!0,round:!0,small:!0,$$slots:{default:[mn]},$$scope:{ctx:n}}})).$on("click",(function(){return n[10](n[18])})),{c:function(){t=P(r),o=g(),u(c.$$.fragment)},l:function(n){t=q(n,r),o=b(n),s(c.$$.fragment,n)},m:function(n,r){w(n,t,r),w(n,o,r),f(c,n,r),i=!0},p:function(o,a){n=o,(!i||1&a)&&r!==(r=n[18].name+"")&&z(t,r);var e={};32768&a&&(e.$$scope={dirty:a,ctx:n}),c.$set(e)},i:function(n){i||(l(c.$$.fragment,n),i=!0)},o:function(n){m(c.$$.fragment,n),i=!1},d:function(n){n&&L(t),n&&L(o),p(c,n)}}}function $n(n){var t,o;return t=new _({props:{noPadding:!0,$$slots:{default:[pn]},$$scope:{ctx:n}}}),{c:function(){u(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){f(t,n,c),o=!0},p:function(n,o){var c={};32769&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(l(t.$$.fragment,n),o=!0)},o:function(n){m(t.$$.fragment,n),o=!1},d:function(n){p(t,n)}}}function hn(n){var t,o=n[9]["too-many-options"],c=K(o,n,n[15],cn),i=c||function(n){var t,o,c,i,r,a=nn(n[4])+"";return{c:function(){t=v("div"),o=P("Cannot select more than\n        "),c=P(n[4]),i=P("\n        option"),r=P(a),this.h()},l:function(e){t=y(e,"DIV",{class:!0});var u=x(t);o=q(u,"Cannot select more than\n        "),c=q(u,n[4]),i=q(u,"\n        option"),r=q(u,a),u.forEach(L),this.h()},h:function(){O(t,"class","notice svelte-1503aum")},m:function(n,a){w(n,t,a),S(t,o),S(t,c),S(t,i),S(t,r)},p:function(n,t){16&t&&z(c,n[4]),16&t&&a!==(a=nn(n[4])+"")&&z(r,a)},d:function(n){n&&L(t)}}}(n);return{c:function(){i&&i.c()},l:function(n){i&&i.l(n)},m:function(n,o){i&&i.m(n,o),t=!0},p:function(n,r){c?c.p&&(!t||32768&r)&&N(c,o,n,n[15],r,on,cn):i&&i.p&&16&r&&i.p(n,r)},i:function(n){t||(l(i,n),t=!0)},o:function(n){m(i,n),t=!1},d:function(n){i&&i.d(n)}}}function dn(n){var t,o=n[9]["not-enough-input"],c=K(o,n,n[15],an),i=c||function(n){var t,o,c,i,r,a,e=nn(n[3])+"";return{c:function(){t=v("div"),o=P("Type\n        "),c=P(n[3]),i=P("\n        character"),r=P(e),a=P("\n        to search"),this.h()},l:function(u){t=y(u,"DIV",{class:!0});var s=x(t);o=q(s,"Type\n        "),c=q(s,n[3]),i=q(s,"\n        character"),r=q(s,e),a=q(s,"\n        to search"),s.forEach(L),this.h()},h:function(){O(t,"class","notice svelte-1503aum")},m:function(n,e){w(n,t,e),S(t,o),S(t,c),S(t,i),S(t,r),S(t,a)},p:function(n,t){8&t&&z(c,n[3]),8&t&&e!==(e=nn(n[3])+"")&&z(r,e)},d:function(n){n&&L(t)}}}(n);return{c:function(){i&&i.c()},l:function(n){i&&i.l(n)},m:function(n,o){i&&i.m(n,o),t=!0},p:function(n,r){c?c.p&&(!t||32768&r)&&N(c,o,n,n[15],r,rn,an):i&&i.p&&8&r&&i.p(n,r)},i:function(n){t||(l(i,n),t=!0)},o:function(n){m(i,n),t=!1},d:function(n){i&&i.d(n)}}}function vn(n){var t,o=n[9]["loading-options"],c=K(o,n,n[15],un),i=c||function(n){var t,o,c,i;return o=new W({}),{c:function(){t=v("li"),u(o.$$.fragment),c=P("\n        Loading..."),this.h()},l:function(n){t=y(n,"LI",{class:!0});var i=x(t);s(o.$$.fragment,i),c=q(i,"\n        Loading..."),i.forEach(L),this.h()},h:function(){O(t,"class","loading-options svelte-1503aum")},m:function(n,r){w(n,t,r),f(o,t,null),S(t,c),i=!0},i:function(n){i||(l(o.$$.fragment,n),i=!0)},o:function(n){m(o.$$.fragment,n),i=!1},d:function(n){n&&L(t),p(o)}}}();return{c:function(){i&&i.c()},l:function(n){i&&i.l(n)},m:function(n,o){i&&i.m(n,o),t=!0},p:function(n,i){c&&c.p&&(!t||32768&i)&&N(c,o,n,n[15],i,en,un)},i:function(n){t||(l(i,n),t=!0)},o:function(n){m(i,n),t=!1},d:function(n){i&&i.d(n)}}}function gn(n){var t,o,c;return t=new H({}),{c:function(){u(t.$$.fragment),o=P("\n            load more options")},l:function(n){s(t.$$.fragment,n),o=q(n,"\n            load more options")},m:function(n,i){f(t,n,i),w(n,o,i),c=!0},i:function(n){c||(l(t.$$.fragment,n),c=!0)},o:function(n){m(t.$$.fragment,n),c=!1},d:function(n){p(t,n),n&&L(o)}}}function yn(n){var t,o,c=n[9]["more-options"],i=K(c,n,n[15],fn),r=i||function(n){var t,o,c,i,r,a;return(o=new Y({props:{$$slots:{default:[gn]},$$scope:{ctx:n}}})).$on("click",(function(){X(n[17])&&n[17].apply(this,arguments)})),{c:function(){t=v("div"),u(o.$$.fragment)},l:function(n){t=y(n,"DIV",{});var c=x(t);s(o.$$.fragment,c),c.forEach(L)},m:function(e,u){w(e,t,u),f(o,t,null),i=!0,r||(a=U(c=G.call(null,t,{callback:n[17]})),r=!0)},p:function(t,i){n=t;var r={};32768&i&&(r.$$scope={dirty:i,ctx:n}),o.$set(r),c&&X(c.update)&&131072&i&&c.update.call(null,{callback:n[17]})},i:function(n){i||(l(o.$$.fragment,n),i=!0)},o:function(n){m(o.$$.fragment,n),i=!1},d:function(n){n&&L(t),p(o),r=!1,a()}}}(n);return{c:function(){t=v("li"),r&&r.c(),this.h()},l:function(n){t=y(n,"LI",{class:!0,slot:!0});var o=x(t);r&&r.l(o),o.forEach(L),this.h()},h:function(){O(t,"class","more-options svelte-1503aum"),O(t,"slot","more-options")},m:function(n,c){w(n,t,c),r&&r.m(t,null),o=!0},p:function(n,t){i?i.p&&(!o||163840&t)&&N(i,c,n,n[15],t,sn,fn):r&&r.p&&131072&t&&r.p(n,t)},i:function(n){o||(l(r,n),o=!0)},o:function(n){m(r,n),o=!1},d:function(n){n&&L(t),r&&r.d(n)}}}function xn(n){for(var t,o,c,i,r,a,e,V,C=n[0],A=[],T=0;T<C.length;T+=1)A[T]=$n(ln(n,C,T));var P=function(n){return m(A[n],1,1,(function(){A[n]=null}))},q=[{minSearchLength:n[3]},{maxOptions:n[4]},{disabled:n[5]},n[8]];function z(t){n[11](t)}function K(t){n[12](t)}function N(t){n[13](t)}for(var U={$$slots:{"more-options":[yn,function(n){return{17:n.loadMoreOptions}},function(n){return n.loadMoreOptions?131072:0}],"loading-options":[vn],"not-enough-input":[dn],"too-many-options":[hn]},$$scope:{ctx:n}},X=0;X<q.length;X+=1)U=$(U,q[X]);return void 0!==n[0]&&(U.selection=n[0]),void 0!==n[1]&&(U.searchQuery=n[1]),void 0!==n[6]&&(U.focus=n[6]),c=new F({props:U}),h.push((function(){return d(c,"selection",z)})),h.push((function(){return d(c,"searchQuery",K)})),h.push((function(){return d(c,"focus",N)})),c.$on("change",n[14]),{c:function(){t=v("div");for(var n=0;n<A.length;n+=1)A[n].c();o=g(),u(c.$$.fragment),this.h()},l:function(n){t=y(n,"DIV",{class:!0});for(var i=x(t),r=0;r<A.length;r+=1)A[r].l(i);o=b(i),s(c.$$.fragment,i),i.forEach(L),this.h()},h:function(){O(t,"class",e=j(Z("autocomplete",n[2]))+" svelte-1503aum"),Q(t,"focus",n[6]),Q(t,"disabled",n[5])},m:function(n,i){w(n,t,i);for(var r=0;r<A.length;r+=1)A[r].m(t,null);S(t,o),f(c,t,null),V=!0},p:function(n,u){var s=E(u,1)[0];if(129&s){var f;for(C=n[0],f=0;f<C.length;f+=1){var m=ln(n,C,f);A[f]?(A[f].p(m,s),l(A[f],1)):(A[f]=$n(m),A[f].c(),l(A[f],1),A[f].m(t,o))}for(I(),f=C.length;f<A.length;f+=1)P(f);M()}var p=312&s?R(q,[8&s&&{minSearchLength:n[3]},16&s&&{maxOptions:n[4]},32&s&&{disabled:n[5]},256&s&&k(n[8])]):{};163864&s&&(p.$$scope={dirty:s,ctx:n}),!i&&1&s&&(i=!0,p.selection=n[0],B((function(){return i=!1}))),!r&&2&s&&(r=!0,p.searchQuery=n[1],B((function(){return r=!1}))),!a&&64&s&&(a=!0,p.focus=n[6],B((function(){return a=!1}))),c.$set(p),(!V||4&s&&e!==(e=j(Z("autocomplete",n[2]))+" svelte-1503aum"))&&O(t,"class",e),68&s&&Q(t,"focus",n[6]),36&s&&Q(t,"disabled",n[5])},i:function(n){if(!V){for(var t=0;t<C.length;t+=1)l(A[t]);l(c.$$.fragment,n),V=!0}},o:function(n){A=A.filter(Boolean);for(var t=0;t<A.length;t+=1)m(A[t]);m(c.$$.fragment,n),V=!1},d:function(n){n&&L(t),D(A,n),p(c)}}}function bn(n,t,o){var c=["class","selection","minSearchLength","maxOptions","searchQuery","disabled"],i=V(t,c),r=t,a=r.$$slots,e=void 0===a?{}:a,u=r.$$scope,s=t.class,f=void 0===s?null:s,l=t.selection,m=void 0===l?[]:l,p=t.minSearchLength,h=void 0===p?3:p,d=t.maxOptions,v=void 0===d?1/0:d,g=t.searchQuery,y=void 0===g?"":g,x=t.disabled,b=void 0!==x&&x,L=!1;function O(n){o(0,m=m.filter((function(t){return t!==n}))),j("change",{value:m})}var j=C();return n.$$set=function(n){t=$($({},t),A(n)),o(8,i=V(t,c)),"class"in n&&o(2,f=n.class),"selection"in n&&o(0,m=n.selection),"minSearchLength"in n&&o(3,h=n.minSearchLength),"maxOptions"in n&&o(4,v=n.maxOptions),"searchQuery"in n&&o(1,y=n.searchQuery),"disabled"in n&&o(5,b=n.disabled),"$$scope"in n&&o(15,u=n.$$scope)},[m,y,f,h,v,b,L,O,i,e,function(n){return O(n)},function(n){o(0,m=n)},function(n){o(1,y=n)},function(n){o(6,L=n)},function(t){T(n,t)},u]}var Ln=function(t){n(u,e);var o=tn(u);function u(n){var t;return c(this,u),t=o.call(this),i(a(t),n,bn,xn,r,{class:2,selection:0,minSearchLength:3,maxOptions:4,searchQuery:1,disabled:5}),t}return u}();export{Ln as A};
