import{_ as t,a as e,b as n,c as s,i as a,s as $,d as o,S as r,e as c,f as p,g as l,h as f,j as i,k as m,l as u,m as d,n as g,N as h,p as x,q as k,r as w,X as y,a2 as v,u as b,v as E,w as D,O as B,x as T,o as j,y as O,z as C,A as S}from"./client.7e699edd.js";import{L as R,H as A,P as N}from"./layout.06b6e64e.js";import{B as P}from"./button.a2f562fb.js";import{B as z}from"./badge.7211264e.js";import{S as H}from"./showcase.a58d766d.js";import{C as F}from"./color-preview.8a41aed0.js";import{S as M}from"./shadow-preview.cb9349ee.js";import{H as W}from"./h2.0ee2596e.js";import{H as G}from"./h3.1241fe85.js";import{T as I,a as V,b as Y,c as L}from"./table.421fa0b9.js";import"./classes.7d86155b.js";import"./label.ddf83674.js";import"./copyable-code.6d40aef8.js";import"./asyncToGenerator.a5a815ec.js";import"./popover.a6ba940a.js";function U(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,$=e(t);if(s){var o=e(this).constructor;a=Reflect.construct($,arguments,o)}else a=$.apply(this,arguments);return n(this,a)}}function q(t){var e,n,s,a;return{c:function(){e=c("svg"),n=c("path"),s=c("path"),this.h()},l:function(t){e=p(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var a=l(e);n=p(a,"path",{d:!0},1),l(n).forEach(f),s=p(a,"path",{d:!0},1),l(s).forEach(f),a.forEach(f),this.h()},h:function(){i(n,"d","M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"),i(s,"d","M13.73 21a2 2 0 0 1-3.46 0"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width",t[0]),i(e,"height",t[0]),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke","currentColor"),i(e,"stroke-width",t[1]),i(e,"stroke-linecap","round"),i(e,"stroke-linejoin","round"),i(e,"class",a="feather feather-bell "+t[2])},m:function(t,a){m(t,e,a),u(e,n),u(e,s)},p:function(t,n){var s=d(n,1)[0];1&s&&i(e,"width",t[0]),1&s&&i(e,"height",t[0]),2&s&&i(e,"stroke-width",t[1]),4&s&&a!==(a="feather feather-bell "+t[2])&&i(e,"class",a)},i:g,o:g,d:function(t){t&&f(e)}}}function K(t,e,n){var s=e.size,a=void 0===s?"100%":s,$=e.strokeWidth,o=void 0===$?2:$,r=e.class,c=void 0===r?"":r;return"100%"!==a&&(a="x"===a.slice(-1)?a.slice(0,a.length-1)+"em":parseInt(a)+"px"),t.$$set=function(t){"size"in t&&n(0,a=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,c=t.class)},[a,o,c]}var X=function(e){t(c,r);var n=U(c);function c(t){var e;return s(this,c),e=n.call(this),a(o(e),t,K,q,$,{size:0,strokeWidth:1,class:2}),e}return c}();function _(t){let e;return{c(){e=O("Badge")},l(t){e=S(t,"Badge")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function J(t){let e;return{c(){e=O("A distinctive colored circle to bring attention to an element.")},l(t){e=S(t,"A distinctive colored circle to bring attention to an element.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Q(t){let e;return{c(){e=O("used on some text")},l(t){e=S(t,"used on some text")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Z(t){let e,n;return e=new X({props:{size:"20",class:"icon"}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function tt(t){let e,n;return e=new z({props:{hidden:t[0],$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.hidden=t[0]),8&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function et(t){let e,n,s,a,$;return n=new z({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),a=new P({props:{round:!0,$$slots:{default:[tt]},$$scope:{ctx:t}}}),a.$on("click",t[2]),{c(){e=j("div"),x(n.$$.fragment),s=T(),x(a.$$.fragment),this.h()},l(t){e=p(t,"DIV",{slot:!0,class:!0});var $=l(e);k(n.$$.fragment,$),s=C($),k(a.$$.fragment,$),$.forEach(f),this.h()},h(){i(e,"slot","showcase"),i(e,"class","padded")},m(t,o){m(t,e,o),w(n,e,null),u(e,s),w(a,e,null),$=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};9&e&&($.$$scope={dirty:e,ctx:t}),a.$set($)},i(t){$||(b(n.$$.fragment,t),b(a.$$.fragment,t),$=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),$=!1},d(t){t&&f(e),D(n),D(a)}}}function nt(t){let e,n;return{c(){e=j("div"),n=j("pre"),this.h()},l(t){e=p(t,"DIV",{slot:!0});var s=l(e);n=p(s,"PRE",{class:!0}),l(n).forEach(f),s.forEach(f),this.h()},h(){i(n,"class","language-svelte"),i(e,"slot","source")},m(t,s){m(t,e,s),u(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> hidden <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>used on some text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">round</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> hidden <span class="token operator">=</span> <span class="token operator">!</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BellIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span></code>'},p:g,d(t){t&&f(e)}}}function st(t){let e;return{c(){e=O("Properties")},l(t){e=S(t,"Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function at(t){let e;return{c(){e=O("Functional Properties")},l(t){e=S(t,"Functional Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function $t(t){let e;return{c(){e=O("Name")},l(t){e=S(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ot(t){let e;return{c(){e=O("Default")},l(t){e=S(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function rt(t){let e;return{c(){e=O("Type")},l(t){e=S(t,"Type")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ct(t){let e;return{c(){e=O("Description")},l(t){e=S(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function pt(t){let e,n,s,a,$,o,r,c;return e=new Y({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),r=new Y({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function lt(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("hidden")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=S($,"hidden"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function ft(t){let e,n;return{c(){e=j("code"),n=O("false")},l(t){e=p(t,"CODE",{});var s=l(e);n=S(s,"false"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function it(t){let e,n;return{c(){e=j("code"),n=O("boolean")},l(t){e=p(t,"CODE",{});var s=l(e);n=S(s,"boolean"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function mt(t){let e;return{c(){e=O("Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},l(t){e=S(t,"Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ut(t){let e,n,s,a,$,o,r,c;return e=new L({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function dt(t){let e,n,s,a,$,o;return n=new V({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){e=j("thead"),x(n.$$.fragment),s=T(),a=j("tbody"),x($.$$.fragment)},l(t){e=p(t,"THEAD",{});var o=l(e);k(n.$$.fragment,o),o.forEach(f),s=C(t),a=p(t,"TBODY",{});var r=l(a);k($.$$.fragment,r),r.forEach(f)},m(t,r){m(t,e,r),w(n,e,null),m(t,s,r),m(t,a,r),w($,a,null),o=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a)},i(t){o||(b(n.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($)}}}function gt(t){let e;return{c(){e=O("Class Properties")},l(t){e=S(t,"Class Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ht(t){let e,n,s,a,$,o,r;return{c(){e=O("All "),n=j("code"),s=O("<Badge>"),a=O(" components use the "),$=j("code"),o=O(".badge"),r=O(" class.")},l(t){e=S(t,"All "),n=p(t,"CODE",{});var c=l(n);s=S(c,"<Badge>"),c.forEach(f),a=S(t," components use the "),$=p(t,"CODE",{});var i=l($);o=S(i,".badge"),i.forEach(f),r=S(t," class.")},m(t,c){m(t,e,c),m(t,n,c),u(n,s),m(t,a,c),m(t,$,c),u($,o),m(t,r,c)},d(t){t&&f(e),t&&f(n),t&&f(a),t&&f($),t&&f(r)}}}function xt(t){let e;return{c(){e=O("Falsy values passed to classes will be disregarded.")},l(t){e=S(t,"Falsy values passed to classes will be disregarded.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function kt(t){let e;return{c(){e=O("Name")},l(t){e=S(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function wt(t){let e;return{c(){e=O("Default")},l(t){e=S(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function yt(t){let e;return{c(){e=O("Type")},l(t){e=S(t,"Type")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function vt(t){let e;return{c(){e=O("Description")},l(t){e=S(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function bt(t){let e,n,s,a,$,o,r,c;return e=new Y({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),r=new Y({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function Et(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("class")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=S($,"class"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function Dt(t){let e,n;return{c(){e=j("code"),n=O("null")},l(t){e=p(t,"CODE",{});var s=l(e);n=S(s,"null"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function Bt(t){let e,n;return{c(){e=j("code"),n=O("string")},l(t){e=p(t,"CODE",{});var s=l(e);n=S(s,"string"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function Tt(t){let e;return{c(){e=O("A class string to add to the handle.")},l(t){e=S(t,"A class string to add to the handle.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function jt(t){let e,n,s,a,$,o,r,c;return e=new L({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function Ot(t){let e,n,s,a,$,o;return n=new V({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){e=j("thead"),x(n.$$.fragment),s=T(),a=j("tbody"),x($.$$.fragment)},l(t){e=p(t,"THEAD",{});var o=l(e);k(n.$$.fragment,o),o.forEach(f),s=C(t),a=p(t,"TBODY",{});var r=l(a);k($.$$.fragment,r),r.forEach(f)},m(t,r){m(t,e,r),w(n,e,null),m(t,s,r),m(t,a,r),w($,a,null),o=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a)},i(t){o||(b(n.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($)}}}function Ct(t){let e;return{c(){e=O("Slots")},l(t){e=S(t,"Slots")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function St(t){let e;return{c(){e=O("Default slot")},l(t){e=S(t,"Default slot")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Rt(t){let e;return{c(){e=O("The element to attach a badge to.")},l(t){e=S(t,"The element to attach a badge to.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function At(t){let e;return{c(){e=O("SCSS Variables")},l(t){e=S(t,"SCSS Variables")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Nt(t){let e;return{c(){e=O("Name")},l(t){e=S(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Pt(t){let e;return{c(){e=O("Description")},l(t){e=S(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function zt(t){let e;return{c(){e=O("Default")},l(t){e=S(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ht(t){let e,n,s,a,$,o;return e=new Y({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t)},m(t,r){w(e,t,r),m(t,n,r),w(s,t,r),m(t,a,r),w($,t,r),o=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function Ft(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("$shadow-raised")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=S($,"$shadow-raised"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function Mt(t){let e;return{c(){e=O("The shadow of the badge.")},l(t){e=S(t,"The shadow of the badge.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Wt(t){let e,n;return e=new M({props:{value:Jt}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Gt(t){let e,n,s,a,$,o;return e=new L({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t)},m(t,r){w(e,t,r),m(t,n,r),w(s,t,r),m(t,a,r),w($,t,r),o=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function It(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("$badge-default")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=S($,"$badge-default"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function Vt(t){let e;return{c(){e=O("The default color of the badge.")},l(t){e=S(t,"The default color of the badge.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Yt(t){let e,n;return e=new F({props:{value:"#FF5757"}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Lt(t){let e,n,s,a,$,o;return e=new L({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t)},m(t,r){w(e,t,r),m(t,n,r),w(s,t,r),m(t,a,r),w($,t,r),o=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function Ut(t){let e,n,s,a,$,o,r,c;return n=new V({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),r=new V({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){e=j("thead"),x(n.$$.fragment),s=T(),a=j("tbody"),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){e=p(t,"THEAD",{});var c=l(e);k(n.$$.fragment,c),c.forEach(f),s=C(t),a=p(t,"TBODY",{});var i=l(a);k($.$$.fragment,i),o=C(i),k(r.$$.fragment,i),i.forEach(f)},m(t,p){m(t,e,p),w(n,e,null),m(t,s,p),m(t,a,p),w($,a,null),u(a,o),w(r,a,null),c=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a);const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i(t){c||(b(n.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($),D(r)}}}function qt(t){let e,n,s,a,$,o,r,c,i,d,g,h,y,v,B,R,P,z,F,M,V,Y,L,U,q,K,X,Q,Z,tt,$t,ot,rt;return e=new A({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),s=new N({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),$=new H({props:{$$slots:{source:[nt],showcase:[et]},$$scope:{ctx:t}}}),r=new W({props:{id:"properties",$$slots:{default:[st]},$$scope:{ctx:t}}}),i=new G({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),g=new I({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),y=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),B=new N({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),P=new N({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),F=new I({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),U=new W({props:{id:"slots",$$slots:{default:[Ct]},$$scope:{ctx:t}}}),K=new G({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),Q=new N({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),tt=new W({props:{id:"scss-variables",$$slots:{default:[At]},$$scope:{ctx:t}}}),ot=new I({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment),c=T(),x(i.$$.fragment),d=T(),x(g.$$.fragment),h=T(),x(y.$$.fragment),v=T(),x(B.$$.fragment),R=T(),x(P.$$.fragment),z=T(),x(F.$$.fragment),M=T(),V=j("mark"),Y=O("Bonus"),L=O(": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),x(U.$$.fragment),q=T(),x(K.$$.fragment),X=T(),x(Q.$$.fragment),Z=T(),x(tt.$$.fragment),$t=T(),x(ot.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t),c=C(t),k(i.$$.fragment,t),d=C(t),k(g.$$.fragment,t),h=C(t),k(y.$$.fragment,t),v=C(t),k(B.$$.fragment,t),R=C(t),k(P.$$.fragment,t),z=C(t),k(F.$$.fragment,t),M=C(t),V=p(t,"MARK",{});var m=l(V);Y=S(m,"Bonus"),m.forEach(f),L=S(t,": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),k(U.$$.fragment,t),q=C(t),k(K.$$.fragment,t),X=C(t),k(Q.$$.fragment,t),Z=C(t),k(tt.$$.fragment,t),$t=C(t),k(ot.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),m(t,c,p),w(i,t,p),m(t,d,p),w(g,t,p),m(t,h,p),w(y,t,p),m(t,v,p),w(B,t,p),m(t,R,p),w(P,t,p),m(t,z,p),w(F,t,p),m(t,M,p),m(t,V,p),u(V,Y),m(t,L,p),w(U,t,p),m(t,q,p),w(K,t,p),m(t,X,p),w(Q,t,p),m(t,Z,p),w(tt,t,p),m(t,$t,p),w(ot,t,p),rt=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};9&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p);const l={};8&n&&(l.$$scope={dirty:n,ctx:t}),i.$set(l);const f={};8&n&&(f.$$scope={dirty:n,ctx:t}),g.$set(f);const m={};8&n&&(m.$$scope={dirty:n,ctx:t}),y.$set(m);const u={};8&n&&(u.$$scope={dirty:n,ctx:t}),B.$set(u);const d={};8&n&&(d.$$scope={dirty:n,ctx:t}),P.$set(d);const h={};8&n&&(h.$$scope={dirty:n,ctx:t}),F.$set(h);const x={};8&n&&(x.$$scope={dirty:n,ctx:t}),U.$set(x);const k={};8&n&&(k.$$scope={dirty:n,ctx:t}),K.$set(k);const w={};8&n&&(w.$$scope={dirty:n,ctx:t}),Q.$set(w);const v={};8&n&&(v.$$scope={dirty:n,ctx:t}),tt.$set(v);const b={};8&n&&(b.$$scope={dirty:n,ctx:t}),ot.$set(b)},i(t){rt||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),b(i.$$.fragment,t),b(g.$$.fragment,t),b(y.$$.fragment,t),b(B.$$.fragment,t),b(P.$$.fragment,t),b(F.$$.fragment,t),b(U.$$.fragment,t),b(K.$$.fragment,t),b(Q.$$.fragment,t),b(tt.$$.fragment,t),b(ot.$$.fragment,t),rt=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),E(i.$$.fragment,t),E(g.$$.fragment,t),E(y.$$.fragment,t),E(B.$$.fragment,t),E(P.$$.fragment,t),E(F.$$.fragment,t),E(U.$$.fragment,t),E(K.$$.fragment,t),E(Q.$$.fragment,t),E(tt.$$.fragment,t),E(ot.$$.fragment,t),rt=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t),t&&f(c),D(i,t),t&&f(d),D(g,t),t&&f(h),D(y,t),t&&f(v),D(B,t),t&&f(R),D(P,t),t&&f(z),D(F,t),t&&f(M),t&&f(V),t&&f(L),D(U,t),t&&f(q),D(K,t),t&&f(X),D(Q,t),t&&f(Z),D(tt,t),t&&f($t),D(ot,t)}}}function Kt(t){let e,n;const s=[t[1],Xt];let a={$$slots:{default:[qt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=h(a,s[t]);return e=new R({props:a}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,[n]){const a=2&n?y(s,[2&n&&v(t[1]),0&n&&v(Xt)]):{};9&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}const Xt={name:"Badge",shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:_t,shadowRaised:Jt}=Xt;function Qt(t,e,n){let s=!1;return t.$$set=t=>{n(1,e=h(h({},e),B(t)))},e=B(e),[s,e,()=>n(0,s=!s)]}class Zt extends r{constructor(t){super(),a(this,t,Qt,Kt,$,{})}}export{Zt as default,Xt as metadata};
