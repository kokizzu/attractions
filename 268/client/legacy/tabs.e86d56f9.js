import{S as t,i as e,s as $,M as n,p as s,q as r,r as a,U as o,$ as c,u as f,v as l,w as p,N as m,x as g,o as d,y as i,z as u,f as h,g as x,A as v,h as E,j as w,k as y,l as b,Y as D,a2 as T,a0 as O,n as k}from"./client.8f6d95bc.js";import{L as C,H as A,P as S}from"./layout.dd7ddd51.js";import{T as N}from"./tabs.bffaf576.js";import{S as j}from"./showcase.c3f6d83c.js";import{C as R}from"./color-preview.8bb19032.js";import{R as F}from"./related-components.2ee6cf46.js";import{H as M}from"./h2.59784349.js";import{H as L}from"./h3.01a32025.js";import{T as G,a as H,b as P,c as z}from"./table.fe820120.js";import"./classes.7d86155b.js";import"./tab.45258127.js";import"./button.2eba1501.js";import"./label.0149d7d0.js";import"./copyable-code.f9f21609.js";import"./asyncToGenerator.756dab92.js";import"./card.d6ea8b81.js";function q(t){let e;return{c(){e=i("Tabs")},l(t){e=v(t,"Tabs")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function B(t){let e;return{c(){e=i("Tabs are used to organize content and navigate between it.")},l(t){e=v(t,"Tabs are used to organize content and navigate between it.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function U(t){let e,$,n,o;function c(e){t[2](e)}let m={name:"menu",items:["Appetizers","Main dishes","Drinks"]};return void 0!==t[0]&&(m.value=t[0]),$=new N({props:m}),D.push((()=>T($,"value",c))),{c(){e=d("div"),s($.$$.fragment),this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var n=x(e);r($.$$.fragment,n),n.forEach(E),this.h()},h(){w(e,"slot","showcase"),w(e,"class","padded")},m(t,n){y(t,e,n),a($,e,null),o=!0},p(t,e){const s={};!n&&1&e&&(n=!0,s.value=t[0],O((()=>n=!1))),$.$set(s)},i(t){o||(f($.$$.fragment,t),o=!0)},o(t){l($.$$.fragment,t),o=!1},d(t){t&&E(e),p($)}}}function V(t){let e,$;return{c(){e=d("div"),$=d("pre"),this.h()},l(t){e=h(t,"DIV",{slot:!0});var n=x(e);$=h(n,"PRE",{class:!0}),x($).forEach(E),n.forEach(E),this.h()},h(){w($,"class","language-svelte"),w(e,"slot","source")},m(t,n){y(t,e,n),b(e,$),$.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> selectedTab <span class="token operator">=</span> <span class="token string">\'Main dishes\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span>\n  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span>\n  <span class="token attr-name">items=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">\'Appetizers\'</span><span class="token punctuation">,</span> <span class="token string">\'Main dishes\'</span><span class="token punctuation">,</span> <span class="token string">\'Drinks\'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>\n  <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>selectedTab<span class="token punctuation">&#125;</span></span>\n<span class="token punctuation">/></span></span></code>'},p:k,d(t){t&&E(e)}}}function Y(t){let e;return{c(){e=i("Properties")},l(t){e=v(t,"Properties")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function I(t){let e;return{c(){e=i("Functional Properties")},l(t){e=v(t,"Functional Properties")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function K(t){let e;return{c(){e=i("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function W(t){let e;return{c(){e=i("Default")},l(t){e=v(t,"Default")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function _(t){let e;return{c(){e=i("Type")},l(t){e=v(t,"Type")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function J(t){let e;return{c(){e=i("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Q(t){let e,$,n,o,c,m,d,i;return e=new P({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),d=new P({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(d.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(d,t,s),i=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),d.$set(o)},i(t){i||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(d.$$.fragment,t),i=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(d,t)}}}function X(t){let e,$,n,s,r,a,o;return{c(){e=d("mark"),$=d("strong"),n=d("code"),s=i("name"),r=i(" "),a=d("span"),o=i("*"),this.h()},l(t){e=h(t,"MARK",{});var c=x(e);$=h(c,"STRONG",{});var f=x($);n=h(f,"CODE",{});var l=x(n);s=v(l,"name"),l.forEach(E),f.forEach(E),c.forEach(E),r=v(t," "),a=h(t,"SPAN",{class:!0});var p=x(a);o=v(p,"*"),p.forEach(E),this.h()},h(){w(a,"class","required")},m(t,c){y(t,e,c),b(e,$),b($,n),b(n,s),y(t,r,c),y(t,a,c),b(a,o)},d(t){t&&E(e),t&&E(r),t&&E(a)}}}function Z(t){let e,$;return{c(){e=d("code"),$=i("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function tt(t){let e,$,n,s,r,a,o,c,f,l,p,m;return{c(){e=i("The name passed to each of the underlying "),$=d("code"),n=i("<Tab>"),s=i("s, which in turn becomes assigned to the "),r=d("code"),a=i('<input type="radio">'),o=i("s' "),c=d("a"),f=d("code"),l=i("name"),p=i(" attribute"),m=i("."),this.h()},l(t){e=v(t,"The name passed to each of the underlying "),$=h(t,"CODE",{});var g=x($);n=v(g,"<Tab>"),g.forEach(E),s=v(t,"s, which in turn becomes assigned to the "),r=h(t,"CODE",{});var d=x(r);a=v(d,'<input type="radio">'),d.forEach(E),o=v(t,"s' "),c=h(t,"A",{href:!0,rel:!0});var i=x(c);f=h(i,"CODE",{});var u=x(f);l=v(u,"name"),u.forEach(E),p=v(i," attribute"),i.forEach(E),m=v(t,"."),this.h()},h(){w(c,"href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname"),w(c,"rel","nofollow")},m(t,g){y(t,e,g),y(t,$,g),b($,n),y(t,s,g),y(t,r,g),b(r,a),y(t,o,g),y(t,c,g),b(c,f),b(f,l),b(c,p),y(t,m,g)},d(t){t&&E(e),t&&E($),t&&E(s),t&&E(r),t&&E(o),t&&E(c),t&&E(m)}}}function et(t){let e,$,n,o,c,m,d,i;return e=new z({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),n=new z({}),c=new z({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),d=new z({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(d.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(d,t,s),i=!0},p(t,$){const n={};8&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),c.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),d.$set(r)},i(t){i||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(d.$$.fragment,t),i=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(d,t)}}}function $t(t){let e,$,n,s,r,a,o;return{c(){e=d("mark"),$=d("strong"),n=d("code"),s=i("items"),r=i(" "),a=d("span"),o=i("*"),this.h()},l(t){e=h(t,"MARK",{});var c=x(e);$=h(c,"STRONG",{});var f=x($);n=h(f,"CODE",{});var l=x(n);s=v(l,"items"),l.forEach(E),f.forEach(E),c.forEach(E),r=v(t," "),a=h(t,"SPAN",{class:!0});var p=x(a);o=v(p,"*"),p.forEach(E),this.h()},h(){w(a,"class","required")},m(t,c){y(t,e,c),b(e,$),b($,n),b(n,s),y(t,r,c),y(t,a,c),b(a,o)},d(t){t&&E(e),t&&E(r),t&&E(a)}}}function nt(t){let e,$;return{c(){e=d("code"),$=i("Array")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"Array"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function st(t){let e;return{c(){e=i("An array of strings that act as the labels of the tabs.")},l(t){e=v(t,"An array of strings that act as the labels of the tabs.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function rt(t){let e,$,n,o,c,m,d,i;return e=new z({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),n=new z({}),c=new z({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),d=new z({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(d.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(d,t,s),i=!0},p(t,$){const n={};8&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),c.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),d.$set(r)},i(t){i||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(d.$$.fragment,t),i=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(d,t)}}}function at(t){let e,$,n;return{c(){e=d("strong"),$=d("code"),n=i("value")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var r=x($);n=v(r,"value"),r.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},d(t){t&&E(e)}}}function ot(t){let e,$;return{c(){e=d("code"),$=i("null")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"null"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function ct(t){let e,$;return{c(){e=d("code"),$=i("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function ft(t){let e;return{c(){e=i("The currently selected tab.")},l(t){e=v(t,"The currently selected tab.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function lt(t){let e,$,n,o,c,m,d,i;return e=new z({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),d=new z({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(d.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(d,t,s),i=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),d.$set(o)},i(t){i||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(d.$$.fragment,t),i=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(d,t)}}}function pt(t){let e,$,n,o,c,m,i,v,w,D;return $=new H({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),w=new H({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){e=d("thead"),s($.$$.fragment),n=g(),o=d("tbody"),s(c.$$.fragment),m=g(),s(i.$$.fragment),v=g(),s(w.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);r($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var a=x(o);r(c.$$.fragment,a),m=u(a),r(i.$$.fragment,a),v=u(a),r(w.$$.fragment,a),a.forEach(E)},m(t,s){y(t,e,s),a($,e,null),y(t,n,s),y(t,o,s),a(c,o,null),b(o,m),a(i,o,null),b(o,v),a(w,o,null),D=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),i.$set(r);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a)},i(t){D||(f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),f(w.$$.fragment,t),D=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),l(w.$$.fragment,t),D=!1},d(t){t&&E(e),p($),t&&E(n),t&&E(o),p(c),p(i),p(w)}}}function mt(t){let e;return{c(){e=i("Class Properties")},l(t){e=v(t,"Class Properties")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function gt(t){let e;return{c(){e=i("Falsy values passed to classes will be disregarded.")},l(t){e=v(t,"Falsy values passed to classes will be disregarded.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function dt(t){let e;return{c(){e=i("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function it(t){let e;return{c(){e=i("Default")},l(t){e=v(t,"Default")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function ut(t){let e;return{c(){e=i("Type")},l(t){e=v(t,"Type")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function ht(t){let e;return{c(){e=i("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function xt(t){let e,$,n,o,c,m,d,i;return e=new P({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),d=new P({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(d.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(d,t,s),i=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),d.$set(o)},i(t){i||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(d.$$.fragment,t),i=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(d,t)}}}function vt(t){let e,$,n;return{c(){e=d("strong"),$=d("code"),n=i("class")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var r=x($);n=v(r,"class"),r.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},d(t){t&&E(e)}}}function Et(t){let e,$;return{c(){e=d("code"),$=i("null")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"null"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function wt(t){let e,$;return{c(){e=d("code"),$=i("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function yt(t){let e,$,n,s;return{c(){e=i("A class string to assign to the root "),$=d("code"),n=i("<nav>"),s=i(" element.")},l(t){e=v(t,"A class string to assign to the root "),$=h(t,"CODE",{});var r=x($);n=v(r,"<nav>"),r.forEach(E),s=v(t," element.")},m(t,r){y(t,e,r),y(t,$,r),b($,n),y(t,s,r)},d(t){t&&E(e),t&&E($),t&&E(s)}}}function bt(t){let e,$,n,o,c,m,d,i;return e=new z({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),d=new z({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(d.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(d,t,s),i=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),d.$set(o)},i(t){i||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(d.$$.fragment,t),i=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(d,t)}}}function Dt(t){let e,$,n;return{c(){e=d("strong"),$=d("code"),n=i("tabClass")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var r=x($);n=v(r,"tabClass"),r.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},d(t){t&&E(e)}}}function Tt(t){let e,$;return{c(){e=d("code"),$=i("null")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"null"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function Ot(t){let e,$;return{c(){e=d("code"),$=i("string")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"string"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function kt(t){let e,$,n,s;return{c(){e=i("A class string to pass to each "),$=d("code"),n=i("<Tab>"),s=i(" component.")},l(t){e=v(t,"A class string to pass to each "),$=h(t,"CODE",{});var r=x($);n=v(r,"<Tab>"),r.forEach(E),s=v(t," component.")},m(t,r){y(t,e,r),y(t,$,r),b($,n),y(t,s,r)},d(t){t&&E(e),t&&E($),t&&E(s)}}}function Ct(t){let e,$,n,o,c,m,d,i;return e=new z({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),d=new z({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(d.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(d.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(d,t,s),i=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),d.$set(o)},i(t){i||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(d.$$.fragment,t),i=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(d,t)}}}function At(t){let e,$,n,o,c,m,i,v;return $=new H({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){e=d("thead"),s($.$$.fragment),n=g(),o=d("tbody"),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);r($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var a=x(o);r(c.$$.fragment,a),m=u(a),r(i.$$.fragment,a),a.forEach(E)},m(t,s){y(t,e,s),a($,e,null),y(t,n,s),y(t,o,s),a(c,o,null),b(o,m),a(i,o,null),v=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),i.$set(r)},i(t){v||(f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),v=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),v=!1},d(t){t&&E(e),p($),t&&E(n),t&&E(o),p(c),p(i)}}}function St(t){let e;return{c(){e=i("Events")},l(t){e=v(t,"Events")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Nt(t){let e;return{c(){e=i("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function jt(t){let e;return{c(){e=i("Event Detail")},l(t){e=v(t,"Event Detail")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Rt(t){let e;return{c(){e=i("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Ft(t){let e,$,n,o,c,m;return e=new P({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function Mt(t){let e,$,n;return{c(){e=d("strong"),$=d("code"),n=i("change")},l(t){e=h(t,"STRONG",{});var s=x(e);$=h(s,"CODE",{});var r=x($);n=v(r,"change"),r.forEach(E),s.forEach(E)},m(t,s){y(t,e,s),b(e,$),b($,n)},d(t){t&&E(e)}}}function Lt(t){let e,$;return{c(){e=d("code"),$=i("{ value, nativeEvent }")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"{ value, nativeEvent }"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function Gt(t){let e,$,n,s,r,a,o,c,f,l,p,m,g,u,D,T;return{c(){e=i("Fired when selecting a different tab. The "),$=d("code"),n=i("value"),s=i(" contains the tab's "),r=d("code"),a=i("value"),o=i(" (from the "),c=d("code"),f=i("items"),l=i(" prop) and "),p=d("code"),m=i("nativeEvent"),g=i(" has the "),u=d("a"),D=i("native change event"),T=i("."),this.h()},l(t){e=v(t,"Fired when selecting a different tab. The "),$=h(t,"CODE",{});var d=x($);n=v(d,"value"),d.forEach(E),s=v(t," contains the tab's "),r=h(t,"CODE",{});var i=x(r);a=v(i,"value"),i.forEach(E),o=v(t," (from the "),c=h(t,"CODE",{});var w=x(c);f=v(w,"items"),w.forEach(E),l=v(t," prop) and "),p=h(t,"CODE",{});var y=x(p);m=v(y,"nativeEvent"),y.forEach(E),g=v(t," has the "),u=h(t,"A",{href:!0,rel:!0});var b=x(u);D=v(b,"native change event"),b.forEach(E),T=v(t,"."),this.h()},h(){w(u,"href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event"),w(u,"rel","nofollow")},m(t,d){y(t,e,d),y(t,$,d),b($,n),y(t,s,d),y(t,r,d),b(r,a),y(t,o,d),y(t,c,d),b(c,f),y(t,l,d),y(t,p,d),b(p,m),y(t,g,d),y(t,u,d),b(u,D),y(t,T,d)},d(t){t&&E(e),t&&E($),t&&E(s),t&&E(r),t&&E(o),t&&E(c),t&&E(l),t&&E(p),t&&E(g),t&&E(u),t&&E(T)}}}function Ht(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function Pt(t){let e,$,n,o,c,m;return $=new H({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){e=d("thead"),s($.$$.fragment),n=g(),o=d("tbody"),s(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);r($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var a=x(o);r(c.$$.fragment,a),a.forEach(E)},m(t,s){y(t,e,s),a($,e,null),y(t,n,s),y(t,o,s),a(c,o,null),m=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&E(e),p($),t&&E(n),t&&E(o),p(c)}}}function zt(t){let e;return{c(){e=i("SCSS Variables")},l(t){e=v(t,"SCSS Variables")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function qt(t){let e;return{c(){e=i("Name")},l(t){e=v(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Bt(t){let e;return{c(){e=i("Description")},l(t){e=v(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Ut(t){let e;return{c(){e=i("Default")},l(t){e=v(t,"Default")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Vt(t){let e,$,n,o,c,m;return e=new P({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function Yt(t){let e,$,n,s,r,a,o,c,f;return{c(){e=d("strong"),$=d("code"),n=i("$main"),s=g(),r=d("small"),a=i("From "),o=d("a"),c=d("code"),f=i("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var l=x(e);$=h(l,"CODE",{});var p=x($);n=v(p,"$main"),p.forEach(E),l.forEach(E),s=u(t),r=h(t,"SMALL",{});var m=x(r);a=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var d=x(c);f=v(d,"Tab"),d.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,l){y(t,e,l),b(e,$),b($,n),y(t,s,l),y(t,r,l),b(r,a),b(r,o),b(o,c),b(c,f)},d(t){t&&E(e),t&&E(s),t&&E(r)}}}function It(t){let e;return{c(){e=i("Affects the color of the ripple background, border color of the selected tab, and text color.")},l(t){e=v(t,"Affects the color of the ripple background, border color of the selected tab, and text color.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Kt(t){let e,$;return e=new R({props:{value:"#4300B0"}}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p:k,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){p(e,t)}}}function Wt(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function _t(t){let e,$,n,s,r,a,o,c,f;return{c(){e=d("strong"),$=d("code"),n=i("$disabled"),s=g(),r=d("small"),a=i("From "),o=d("a"),c=d("code"),f=i("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var l=x(e);$=h(l,"CODE",{});var p=x($);n=v(p,"$disabled"),p.forEach(E),l.forEach(E),s=u(t),r=h(t,"SMALL",{});var m=x(r);a=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var d=x(c);f=v(d,"Tab"),d.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,l){y(t,e,l),b(e,$),b($,n),y(t,s,l),y(t,r,l),b(r,a),b(r,o),b(o,c),b(c,f)},d(t){t&&E(e),t&&E(s),t&&E(r)}}}function Jt(t){let e;return{c(){e=i("The text color of disabled tabs.")},l(t){e=v(t,"The text color of disabled tabs.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function Qt(t){let e,$;return e=new R({props:{value:"#888888"}}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p:k,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){p(e,t)}}}function Xt(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function Zt(t){let e,$,n,s,r,a,o,c,f;return{c(){e=d("strong"),$=d("code"),n=i("$off-state"),s=g(),r=d("small"),a=i("From "),o=d("a"),c=d("code"),f=i("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var l=x(e);$=h(l,"CODE",{});var p=x($);n=v(p,"$off-state"),p.forEach(E),l.forEach(E),s=u(t),r=h(t,"SMALL",{});var m=x(r);a=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var d=x(c);f=v(d,"Tab"),d.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,l){y(t,e,l),b(e,$),b($,n),y(t,s,l),y(t,r,l),b(r,a),b(r,o),b(o,c),b(c,f)},d(t){t&&E(e),t&&E(s),t&&E(r)}}}function te(t){let e;return{c(){e=i("Affects the background color of the tab when focused or hovered on and the default border color.")},l(t){e=v(t,"Affects the background color of the tab when focused or hovered on and the default border color.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function ee(t){let e,$;return e=new R({props:{value:"#AAAAAA"}}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p:k,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){p(e,t)}}}function $e(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function ne(t){let e,$,n,s,r,a,o,c,f;return{c(){e=d("strong"),$=d("code"),n=i("$font"),s=g(),r=d("small"),a=i("From "),o=d("a"),c=d("code"),f=i("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var l=x(e);$=h(l,"CODE",{});var p=x($);n=v(p,"$font"),p.forEach(E),l.forEach(E),s=u(t),r=h(t,"SMALL",{});var m=x(r);a=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var d=x(c);f=v(d,"Tab"),d.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,l){y(t,e,l),b(e,$),b($,n),y(t,s,l),y(t,r,l),b(r,a),b(r,o),b(o,c),b(c,f)},d(t){t&&E(e),t&&E(s),t&&E(r)}}}function se(t){let e;return{c(){e=i("The font family of the content text.")},l(t){e=v(t,"The font family of the content text.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function re(t){let e,$;return{c(){e=d("code"),$=i("'Ubuntu'")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"'Ubuntu'"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function ae(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[se]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function oe(t){let e,$,n,s,r,a,o,c,f;return{c(){e=d("strong"),$=d("code"),n=i("$bold-font-weight"),s=g(),r=d("small"),a=i("From "),o=d("a"),c=d("code"),f=i("Tab"),this.h()},l(t){e=h(t,"STRONG",{});var l=x(e);$=h(l,"CODE",{});var p=x($);n=v(p,"$bold-font-weight"),p.forEach(E),l.forEach(E),s=u(t),r=h(t,"SMALL",{});var m=x(r);a=v(m,"From "),o=h(m,"A",{href:!0});var g=x(o);c=h(g,"CODE",{});var d=x(c);f=v(d,"Tab"),d.forEach(E),g.forEach(E),m.forEach(E),this.h()},h(){w(o,"href","./docs/components/tab")},m(t,l){y(t,e,l),b(e,$),b($,n),y(t,s,l),y(t,r,l),b(r,a),b(r,o),b(o,c),b(c,f)},d(t){t&&E(e),t&&E(s),t&&E(r)}}}function ce(t){let e;return{c(){e=i("The font weight of the content text.")},l(t){e=v(t,"The font weight of the content text.")},m(t,$){y(t,e,$)},d(t){t&&E(e)}}}function fe(t){let e,$;return{c(){e=d("code"),$=i("500")},l(t){e=h(t,"CODE",{});var n=x(e);$=v(n,"500"),n.forEach(E)},m(t,n){y(t,e,n),b(e,$)},d(t){t&&E(e)}}}function le(t){let e,$,n,o,c,m;return e=new z({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),n=new z({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t)},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),m=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};8&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){m||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t)}}}function pe(t){let e,$,n,o,c,m,i,v,w,D,T,O,k,C;return $=new H({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),w=new H({props:{$$slots:{default:[$e]},$$scope:{ctx:t}}}),T=new H({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),k=new H({props:{$$slots:{default:[le]},$$scope:{ctx:t}}}),{c(){e=d("thead"),s($.$$.fragment),n=g(),o=d("tbody"),s(c.$$.fragment),m=g(),s(i.$$.fragment),v=g(),s(w.$$.fragment),D=g(),s(T.$$.fragment),O=g(),s(k.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);r($.$$.fragment,s),s.forEach(E),n=u(t),o=h(t,"TBODY",{});var a=x(o);r(c.$$.fragment,a),m=u(a),r(i.$$.fragment,a),v=u(a),r(w.$$.fragment,a),D=u(a),r(T.$$.fragment,a),O=u(a),r(k.$$.fragment,a),a.forEach(E)},m(t,s){y(t,e,s),a($,e,null),y(t,n,s),y(t,o,s),a(c,o,null),b(o,m),a(i,o,null),b(o,v),a(w,o,null),b(o,D),a(T,o,null),b(o,O),a(k,o,null),C=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),i.$set(r);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a);const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),T.$set(o);const f={};8&e&&(f.$$scope={dirty:e,ctx:t}),k.$set(f)},i(t){C||(f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),f(w.$$.fragment,t),f(T.$$.fragment,t),f(k.$$.fragment,t),C=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),l(w.$$.fragment,t),l(T.$$.fragment,t),l(k.$$.fragment,t),C=!1},d(t){t&&E(e),p($),t&&E(n),t&&E(o),p(c),p(i),p(w),p(T),p(k)}}}function me(t){let e,$,n,o,c,m,D,T,O,k,C,N,R,H,P,z,K,W,_,J,Q,X,Z,tt,et,$t,nt,st,rt,at,ot;return e=new A({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),n=new S({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),c=new F({props:{components:ue}}),D=new j({props:{$$slots:{source:[V],showcase:[U]},$$scope:{ctx:t}}}),O=new M({props:{id:"properties",$$slots:{default:[Y]},$$scope:{ctx:t}}}),C=new L({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),R=new G({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),W=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),J=new S({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),X=new G({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),tt=new M({props:{id:"events",$$slots:{default:[St]},$$scope:{ctx:t}}}),$t=new G({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),st=new M({props:{id:"scss-variables",$$slots:{default:[zt]},$$scope:{ctx:t}}}),at=new G({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=g(),s(n.$$.fragment),o=g(),s(c.$$.fragment),m=g(),s(D.$$.fragment),T=g(),s(O.$$.fragment),k=g(),s(C.$$.fragment),N=g(),s(R.$$.fragment),H=g(),P=d("div"),z=i("* Required"),K=g(),s(W.$$.fragment),_=g(),s(J.$$.fragment),Q=g(),s(X.$$.fragment),Z=g(),s(tt.$$.fragment),et=g(),s($t.$$.fragment),nt=g(),s(st.$$.fragment),rt=g(),s(at.$$.fragment),this.h()},l(t){r(e.$$.fragment,t),$=u(t),r(n.$$.fragment,t),o=u(t),r(c.$$.fragment,t),m=u(t),r(D.$$.fragment,t),T=u(t),r(O.$$.fragment,t),k=u(t),r(C.$$.fragment,t),N=u(t),r(R.$$.fragment,t),H=u(t),P=h(t,"DIV",{class:!0});var s=x(P);z=v(s,"* Required"),s.forEach(E),K=u(t),r(W.$$.fragment,t),_=u(t),r(J.$$.fragment,t),Q=u(t),r(X.$$.fragment,t),Z=u(t),r(tt.$$.fragment,t),et=u(t),r($t.$$.fragment,t),nt=u(t),r(st.$$.fragment,t),rt=u(t),r(at.$$.fragment,t),this.h()},h(){w(P,"class","required")},m(t,s){a(e,t,s),y(t,$,s),a(n,t,s),y(t,o,s),a(c,t,s),y(t,m,s),a(D,t,s),y(t,T,s),a(O,t,s),y(t,k,s),a(C,t,s),y(t,N,s),a(R,t,s),y(t,H,s),y(t,P,s),b(P,z),y(t,K,s),a(W,t,s),y(t,_,s),a(J,t,s),y(t,Q,s),a(X,t,s),y(t,Z,s),a(tt,t,s),y(t,et,s),a($t,t,s),y(t,nt,s),a(st,t,s),y(t,rt,s),a(at,t,s),ot=!0},p(t,$){const s={};8&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};8&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};9&$&&(a.$$scope={dirty:$,ctx:t}),D.$set(a);const o={};8&$&&(o.$$scope={dirty:$,ctx:t}),O.$set(o);const c={};8&$&&(c.$$scope={dirty:$,ctx:t}),C.$set(c);const f={};8&$&&(f.$$scope={dirty:$,ctx:t}),R.$set(f);const l={};8&$&&(l.$$scope={dirty:$,ctx:t}),W.$set(l);const p={};8&$&&(p.$$scope={dirty:$,ctx:t}),J.$set(p);const m={};8&$&&(m.$$scope={dirty:$,ctx:t}),X.$set(m);const g={};8&$&&(g.$$scope={dirty:$,ctx:t}),tt.$set(g);const d={};8&$&&(d.$$scope={dirty:$,ctx:t}),$t.$set(d);const i={};8&$&&(i.$$scope={dirty:$,ctx:t}),st.$set(i);const u={};8&$&&(u.$$scope={dirty:$,ctx:t}),at.$set(u)},i(t){ot||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(c.$$.fragment,t),f(D.$$.fragment,t),f(O.$$.fragment,t),f(C.$$.fragment,t),f(R.$$.fragment,t),f(W.$$.fragment,t),f(J.$$.fragment,t),f(X.$$.fragment,t),f(tt.$$.fragment,t),f($t.$$.fragment,t),f(st.$$.fragment,t),f(at.$$.fragment,t),ot=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),l(c.$$.fragment,t),l(D.$$.fragment,t),l(O.$$.fragment,t),l(C.$$.fragment,t),l(R.$$.fragment,t),l(W.$$.fragment,t),l(J.$$.fragment,t),l(X.$$.fragment,t),l(tt.$$.fragment,t),l($t.$$.fragment,t),l(st.$$.fragment,t),l(at.$$.fragment,t),ot=!1},d(t){p(e,t),t&&E($),p(n,t),t&&E(o),p(c,t),t&&E(m),p(D,t),t&&E(T),p(O,t),t&&E(k),p(C,t),t&&E(N),p(R,t),t&&E(H),t&&E(P),t&&E(K),p(W,t),t&&E(_),p(J,t),t&&E(Q),p(X,t),t&&E(Z),p(tt,t),t&&E(et),p($t,t),t&&E(nt),p(st,t),t&&E(rt),p(at,t)}}}function ge(t){let e,$;const m=[t[1],de];let g={$$slots:{default:[me]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)g=n(g,m[t]);return e=new C({props:g}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p(t,[$]){const n=2&$?o(m,[2&$&&c(t[1]),0&$&&c(de)]):{};9&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n)},i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){p(e,t)}}}const de={name:"Tabs",relatedComponents:[{name:"Tab",link:"./docs/components/tab"}]},{name:ie,relatedComponents:ue}=de;function he(t,e,$){let s="Main dishes";return t.$$set=t=>{$(1,e=n(n({},e),m(t)))},e=m(e),[s,e,function(t){s=t,$(0,s)}]}export default class extends t{constructor(t){super(),e(this,t,he,ge,$,{})}}export{de as metadata};
