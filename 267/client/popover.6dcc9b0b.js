import{S as t,i as e,s as n,H as $,j as s,k as o,m as r,O as a,V as c,t as p,o as f,p as l,C as m,I as i,q as g,u as d,f as u,d as h,r as x,v,h as w,c as y,b as E,e as k,g as T,n as O}from"./client.a92c95ae.js";import{L as D,H as P,P as b}from"./layout.09e871b2.js";import{B as C}from"./button.cb38a728.js";import{P as j,a as A}from"./popover.0b6e5c58.js";import{S as R}from"./showcase.80610144.js";import{R as B}from"./related-components.1e8dd484.js";import{f as S}from"./fix-anchor-links.79fa91d5.js";import{H as N}from"./h2.2507653b.js";import{H}from"./h3.d8f85e3a.js";import{T as G,a as F,b as I,c as M}from"./table.5d61da7e.js";import"./classes.2453fa25.js";import"./label.46b2d529.js";import"./copyable-code.bdd30a93.js";import"./card.f0b615c9.js";function L(t){let e;return{c(){e=x("Popover")},l(t){e=v(t,"Popover")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function V(t){let e;return{c(){e=x("Extra content revealed on hover or focus within.")},l(t){e=v(t,"Extra content revealed on hover or focus within.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Y(t){let e;return{c(){e=x("hover or focus me")},l(t){e=v(t,"hover or focus me")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function q(t){let e,n;return e=new C({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function K(t){let e,n;return{c(){e=w("div"),n=x("To reveal extra content!"),this.h()},l(t){e=y(t,"DIV",{slot:!0});var $=E(e);n=v($,"To reveal extra content!"),$.forEach(h),this.h()},h(){k(e,"slot","popover-content")},m(t,$){u(t,e,$),T(e,n)},d(t){t&&h(e)}}}function z(t){let e,n,$;return n=new j({props:{position:A.BOTTOM,$$slots:{"popover-content":[K],default:[q]},$$scope:{ctx:t}}}),{c(){e=w("div"),s(n.$$.fragment),this.h()},l(t){e=y(t,"DIV",{slot:!0,class:!0});var $=E(e);o(n.$$.fragment,$),$.forEach(h),this.h()},h(){k(e,"slot","showcase"),k(e,"class","padded")},m(t,s){u(t,e,s),r(n,e,null),$=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(p(n.$$.fragment,t),$=!0)},o(t){f(n.$$.fragment,t),$=!1},d(t){t&&h(e),l(n)}}}function J(t){let e,n;return{c(){e=w("div"),n=w("pre"),this.h()},l(t){e=y(t,"DIV",{slot:!0});var $=E(e);n=y($,"PRE",{class:!0}),E(n).forEach(h),$.forEach(h),this.h()},h(){k(n,"class","language-svelte"),k(e,"slot","source")},m(t,$){u(t,e,$),T(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PopoverPositions <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'attractions/popover\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span> <span class="token attr-name">position=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>PopoverPositions<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>hover or focus me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>popover-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    To reveal extra content!\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span></code>'},p:O,d(t){t&&h(e)}}}function Q(t){let e;return{c(){e=x("Properties")},l(t){e=v(t,"Properties")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function U(t){let e;return{c(){e=x("Style Properties")},l(t){e=v(t,"Style Properties")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function W(t){let e;return{c(){e=x("Name")},l(t){e=v(t,"Name")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function X(t){let e;return{c(){e=x("Default")},l(t){e=v(t,"Default")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Z(t){let e;return{c(){e=x("Type")},l(t){e=v(t,"Type")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function _(t){let e;return{c(){e=x("Description")},l(t){e=v(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function tt(t){let e,n,$,a,c,m,i,x;return e=new I({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),i=new I({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment),a=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t),a=d(t),o(c.$$.fragment,t),m=d(t),o(i.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(c,t,s),u(t,m,s),r(i,t,s),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),i.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),x=!1},d(t){l(e,t),t&&h(n),l($,t),t&&h(a),l(c,t),t&&h(m),l(i,t)}}}function et(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("position")},l(t){e=y(t,"STRONG",{});var s=E(e);n=y(s,"CODE",{});var o=E(n);$=v(o,"position"),o.forEach(h),s.forEach(h)},m(t,s){u(t,e,s),T(e,n),T(n,$)},d(t){t&&h(e)}}}function nt(t){let e,n;return{c(){e=w("code"),n=x("PopoverPositions.TOP")},l(t){e=y(t,"CODE",{});var $=E(e);n=v($,"PopoverPositions.TOP"),$.forEach(h)},m(t,$){u(t,e,$),T(e,n)},d(t){t&&h(e)}}}function $t(t){let e,n,$,s;return{c(){e=w("a"),n=w("mark"),$=w("code"),s=x("PopoverPositions"),this.h()},l(t){e=y(t,"A",{href:!0});var o=E(e);n=y(o,"MARK",{});var r=E(n);$=y(r,"CODE",{});var a=E($);s=v(a,"PopoverPositions"),a.forEach(h),r.forEach(h),o.forEach(h),this.h()},h(){k(e,"href","#popover-positions")},m(t,o){u(t,e,o),T(e,n),T(n,$),T($,s)},d(t){t&&h(e)}}}function st(t){let e;return{c(){e=x("The position of the popover content relative to the triggering handle.")},l(t){e=v(t,"The position of the popover content relative to the triggering handle.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function ot(t){let e,n,$,a,c,m,i,x;return e=new M({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),i=new M({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment),a=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t),a=d(t),o(c.$$.fragment,t),m=d(t),o(i.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(c,t,s),u(t,m,s),r(i,t,s),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),i.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),x=!1},d(t){l(e,t),t&&h(n),l($,t),t&&h(a),l(c,t),t&&h(m),l(i,t)}}}function rt(t){let e,n,$,a,c,m;return n=new F({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=w("thead"),s(n.$$.fragment),$=g(),a=w("tbody"),s(c.$$.fragment)},l(t){e=y(t,"THEAD",{});var s=E(e);o(n.$$.fragment,s),s.forEach(h),$=d(t),a=y(t,"TBODY",{});var r=E(a);o(c.$$.fragment,r),r.forEach(h)},m(t,s){u(t,e,s),r(n,e,null),u(t,$,s),u(t,a,s),r(c,a,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&h(e),l(n),t&&h($),t&&h(a),l(c)}}}function at(t){let e;return{c(){e=x("Class Properties")},l(t){e=v(t,"Class Properties")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function ct(t){let e,n,$,s,o,r,a,c,p,f;return{c(){e=x("All "),n=w("code"),$=x("<Popover>"),s=x(" components use the "),o=w("code"),r=x(".popover-container"),a=x(" class for the main element and "),c=w("code"),p=x(".popover"),f=x(" for the popover itself.")},l(t){e=v(t,"All "),n=y(t,"CODE",{});var l=E(n);$=v(l,"<Popover>"),l.forEach(h),s=v(t," components use the "),o=y(t,"CODE",{});var m=E(o);r=v(m,".popover-container"),m.forEach(h),a=v(t," class for the main element and "),c=y(t,"CODE",{});var i=E(c);p=v(i,".popover"),i.forEach(h),f=v(t," for the popover itself.")},m(t,l){u(t,e,l),u(t,n,l),T(n,$),u(t,s,l),u(t,o,l),T(o,r),u(t,a,l),u(t,c,l),T(c,p),u(t,f,l)},d(t){t&&h(e),t&&h(n),t&&h(s),t&&h(o),t&&h(a),t&&h(c),t&&h(f)}}}function pt(t){let e;return{c(){e=x("Falsy values passed to classes will be disregarded.")},l(t){e=v(t,"Falsy values passed to classes will be disregarded.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function ft(t){let e;return{c(){e=x("Name")},l(t){e=v(t,"Name")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function lt(t){let e;return{c(){e=x("Default")},l(t){e=v(t,"Default")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function mt(t){let e;return{c(){e=x("Type")},l(t){e=v(t,"Type")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function it(t){let e;return{c(){e=x("Description")},l(t){e=v(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function gt(t){let e,n,$,a,c,m,i,x;return e=new I({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),i=new I({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment),a=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t),a=d(t),o(c.$$.fragment,t),m=d(t),o(i.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(c,t,s),u(t,m,s),r(i,t,s),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),i.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),x=!1},d(t){l(e,t),t&&h(n),l($,t),t&&h(a),l(c,t),t&&h(m),l(i,t)}}}function dt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("class")},l(t){e=y(t,"STRONG",{});var s=E(e);n=y(s,"CODE",{});var o=E(n);$=v(o,"class"),o.forEach(h),s.forEach(h)},m(t,s){u(t,e,s),T(e,n),T(n,$)},d(t){t&&h(e)}}}function ut(t){let e,n;return{c(){e=w("code"),n=x("null")},l(t){e=y(t,"CODE",{});var $=E(e);n=v($,"null"),$.forEach(h)},m(t,$){u(t,e,$),T(e,n)},d(t){t&&h(e)}}}function ht(t){let e,n;return{c(){e=w("code"),n=x("string")},l(t){e=y(t,"CODE",{});var $=E(e);n=v($,"string"),$.forEach(h)},m(t,$){u(t,e,$),T(e,n)},d(t){t&&h(e)}}}function xt(t){let e;return{c(){e=x("A class string to add to the component.")},l(t){e=v(t,"A class string to add to the component.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function vt(t){let e,n,$,a,c,m,i,x;return e=new M({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),i=new M({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment),a=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t),a=d(t),o(c.$$.fragment,t),m=d(t),o(i.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(c,t,s),u(t,m,s),r(i,t,s),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),i.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),x=!1},d(t){l(e,t),t&&h(n),l($,t),t&&h(a),l(c,t),t&&h(m),l(i,t)}}}function wt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("popoverClass")},l(t){e=y(t,"STRONG",{});var s=E(e);n=y(s,"CODE",{});var o=E(n);$=v(o,"popoverClass"),o.forEach(h),s.forEach(h)},m(t,s){u(t,e,s),T(e,n),T(n,$)},d(t){t&&h(e)}}}function yt(t){let e,n;return{c(){e=w("code"),n=x("null")},l(t){e=y(t,"CODE",{});var $=E(e);n=v($,"null"),$.forEach(h)},m(t,$){u(t,e,$),T(e,n)},d(t){t&&h(e)}}}function Et(t){let e,n;return{c(){e=w("code"),n=x("string")},l(t){e=y(t,"CODE",{});var $=E(e);n=v($,"string"),$.forEach(h)},m(t,$){u(t,e,$),T(e,n)},d(t){t&&h(e)}}}function kt(t){let e;return{c(){e=x("A class string to add to the popover.")},l(t){e=v(t,"A class string to add to the popover.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Tt(t){let e,n,$,a,c,m,i,x;return e=new M({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),i=new M({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment),a=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t),a=d(t),o(c.$$.fragment,t),m=d(t),o(i.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(c,t,s),u(t,m,s),r(i,t,s),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),i.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),x=!1},d(t){l(e,t),t&&h(n),l($,t),t&&h(a),l(c,t),t&&h(m),l(i,t)}}}function Ot(t){let e,n,$,a,c,m,i,x;return n=new F({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),i=new F({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){e=w("thead"),s(n.$$.fragment),$=g(),a=w("tbody"),s(c.$$.fragment),m=g(),s(i.$$.fragment)},l(t){e=y(t,"THEAD",{});var s=E(e);o(n.$$.fragment,s),s.forEach(h),$=d(t),a=y(t,"TBODY",{});var r=E(a);o(c.$$.fragment,r),m=d(r),o(i.$$.fragment,r),r.forEach(h)},m(t,s){u(t,e,s),r(n,e,null),u(t,$,s),u(t,a,s),r(c,a,null),T(a,m),r(i,a,null),x=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){x||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),x=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),x=!1},d(t){t&&h(e),l(n),t&&h($),t&&h(a),l(c),l(i)}}}function Dt(t){let e;return{c(){e=x("Slots")},l(t){e=v(t,"Slots")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Pt(t){let e;return{c(){e=x("Default slot")},l(t){e=v(t,"Default slot")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function bt(t){let e;return{c(){e=x("The handle – any content that will, on hover or focus, show a popover next to it.")},l(t){e=v(t,"The handle – any content that will, on hover or focus, show a popover next to it.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Ct(t){let e,n,$;return{c(){e=w("code"),n=x("popover-content"),$=x(" slot")},l(t){e=y(t,"CODE",{});var s=E(e);n=v(s,"popover-content"),s.forEach(h),$=v(t," slot")},m(t,s){u(t,e,s),T(e,n),u(t,$,s)},d(t){t&&h(e),t&&h($)}}}function jt(t){let e;return{c(){e=x("The content of the popover.")},l(t){e=v(t,"The content of the popover.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function At(t){let e;return{c(){e=x("Related Objects")},l(t){e=v(t,"Related Objects")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Rt(t){let e,n,$,s;return{c(){e=x("The following objects are available as named exports in "),n=w("code"),$=x("'attractions/popover'"),s=x(".")},l(t){e=v(t,"The following objects are available as named exports in "),n=y(t,"CODE",{});var o=E(n);$=v(o,"'attractions/popover'"),o.forEach(h),s=v(t,".")},m(t,o){u(t,e,o),u(t,n,o),T(n,$),u(t,s,o)},d(t){t&&h(e),t&&h(n),t&&h(s)}}}function Bt(t){let e,n;return{c(){e=w("code"),n=x("PopoverPositions")},l(t){e=y(t,"CODE",{});var $=E(e);n=v($,"PopoverPositions"),$.forEach(h)},m(t,$){u(t,e,$),T(e,n)},d(t){t&&h(e)}}}function St(t){let e,n,$,s;return{c(){e=x("An enum describing possible positions for the "),n=w("code"),$=x("Popover"),s=x(".")},l(t){e=v(t,"An enum describing possible positions for the "),n=y(t,"CODE",{});var o=E(n);$=v(o,"Popover"),o.forEach(h),s=v(t,".")},m(t,o){u(t,e,o),u(t,n,o),T(n,$),u(t,s,o)},d(t){t&&h(e),t&&h(n),t&&h(s)}}}function Nt(t){let e;return{c(){e=x("Field")},l(t){e=v(t,"Field")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Ht(t){let e;return{c(){e=x("Description")},l(t){e=v(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Gt(t){let e,n,$,a;return e=new I({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&h(n),l($,t)}}}function Ft(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("TOP")},l(t){e=y(t,"STRONG",{});var s=E(e);n=y(s,"CODE",{});var o=E(n);$=v(o,"TOP"),o.forEach(h),s.forEach(h)},m(t,s){u(t,e,s),T(e,n),T(n,$)},d(t){t&&h(e)}}}function It(t){let e;return{c(){e=x("Above the handle, centered with respect to it.")},l(t){e=v(t,"Above the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Mt(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&h(n),l($,t)}}}function Lt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("BOTTOM")},l(t){e=y(t,"STRONG",{});var s=E(e);n=y(s,"CODE",{});var o=E(n);$=v(o,"BOTTOM"),o.forEach(h),s.forEach(h)},m(t,s){u(t,e,s),T(e,n),T(n,$)},d(t){t&&h(e)}}}function Vt(t){let e;return{c(){e=x("Below the handle, centered with respect to it.")},l(t){e=v(t,"Below the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Yt(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&h(n),l($,t)}}}function qt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("LEFT")},l(t){e=y(t,"STRONG",{});var s=E(e);n=y(s,"CODE",{});var o=E(n);$=v(o,"LEFT"),o.forEach(h),s.forEach(h)},m(t,s){u(t,e,s),T(e,n),T(n,$)},d(t){t&&h(e)}}}function Kt(t){let e;return{c(){e=x("To the left of the handle, centered with respect to it.")},l(t){e=v(t,"To the left of the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function zt(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&h(n),l($,t)}}}function Jt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("RIGHT")},l(t){e=y(t,"STRONG",{});var s=E(e);n=y(s,"CODE",{});var o=E(n);$=v(o,"RIGHT"),o.forEach(h),s.forEach(h)},m(t,s){u(t,e,s),T(e,n),T(n,$)},d(t){t&&h(e)}}}function Qt(t){let e;return{c(){e=x("To the right of the handle, centered with respect to it.")},l(t){e=v(t,"To the right of the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&h(e)}}}function Ut(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&h(n),l($,t)}}}function Wt(t){let e,n,$,a,c,m,i,x,v,k,O,D;return n=new F({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),i=new F({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),v=new F({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),O=new F({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){e=w("thead"),s(n.$$.fragment),$=g(),a=w("tbody"),s(c.$$.fragment),m=g(),s(i.$$.fragment),x=g(),s(v.$$.fragment),k=g(),s(O.$$.fragment)},l(t){e=y(t,"THEAD",{});var s=E(e);o(n.$$.fragment,s),s.forEach(h),$=d(t),a=y(t,"TBODY",{});var r=E(a);o(c.$$.fragment,r),m=d(r),o(i.$$.fragment,r),x=d(r),o(v.$$.fragment,r),k=d(r),o(O.$$.fragment,r),r.forEach(h)},m(t,s){u(t,e,s),r(n,e,null),u(t,$,s),u(t,a,s),r(c,a,null),T(a,m),r(i,a,null),T(a,x),r(v,a,null),T(a,k),r(O,a,null),D=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),v.$set(r);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),O.$set(a)},i(t){D||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),p(v.$$.fragment,t),p(O.$$.fragment,t),D=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),f(v.$$.fragment,t),f(O.$$.fragment,t),D=!1},d(t){t&&h(e),l(n),t&&h($),t&&h(a),l(c),l(i),l(v),l(O)}}}function Xt(t){let e,n,$,a,c,m,i,x,v,w,y,E,k,T,O,D,C,j,A,S,F,I,M,Y,q,K,W,X,Z,_,tt,et,nt,$t,st,ot,ft,lt,mt,it,gt,dt;return e=new P({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),$=new b({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),c=new B({props:{components:ee}}),i=new R({props:{$$slots:{source:[J],showcase:[z]},$$scope:{ctx:t}}}),v=new N({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),y=new H({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),k=new G({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),C=new b({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),A=new b({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),F=new G({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),M=new N({props:{id:"slots",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),q=new H({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),W=new b({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),Z=new H({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),tt=new b({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),nt=new N({props:{id:"related-objects",$$slots:{default:[At]},$$scope:{ctx:t}}}),st=new b({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),ft=new H({props:{id:"popover-positions",$$slots:{default:[Bt]},$$scope:{ctx:t}}}),mt=new b({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),gt=new G({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(),s($.$$.fragment),a=g(),s(c.$$.fragment),m=g(),s(i.$$.fragment),x=g(),s(v.$$.fragment),w=g(),s(y.$$.fragment),E=g(),s(k.$$.fragment),T=g(),s(O.$$.fragment),D=g(),s(C.$$.fragment),j=g(),s(A.$$.fragment),S=g(),s(F.$$.fragment),I=g(),s(M.$$.fragment),Y=g(),s(q.$$.fragment),K=g(),s(W.$$.fragment),X=g(),s(Z.$$.fragment),_=g(),s(tt.$$.fragment),et=g(),s(nt.$$.fragment),$t=g(),s(st.$$.fragment),ot=g(),s(ft.$$.fragment),lt=g(),s(mt.$$.fragment),it=g(),s(gt.$$.fragment)},l(t){o(e.$$.fragment,t),n=d(t),o($.$$.fragment,t),a=d(t),o(c.$$.fragment,t),m=d(t),o(i.$$.fragment,t),x=d(t),o(v.$$.fragment,t),w=d(t),o(y.$$.fragment,t),E=d(t),o(k.$$.fragment,t),T=d(t),o(O.$$.fragment,t),D=d(t),o(C.$$.fragment,t),j=d(t),o(A.$$.fragment,t),S=d(t),o(F.$$.fragment,t),I=d(t),o(M.$$.fragment,t),Y=d(t),o(q.$$.fragment,t),K=d(t),o(W.$$.fragment,t),X=d(t),o(Z.$$.fragment,t),_=d(t),o(tt.$$.fragment,t),et=d(t),o(nt.$$.fragment,t),$t=d(t),o(st.$$.fragment,t),ot=d(t),o(ft.$$.fragment,t),lt=d(t),o(mt.$$.fragment,t),it=d(t),o(gt.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(c,t,s),u(t,m,s),r(i,t,s),u(t,x,s),r(v,t,s),u(t,w,s),r(y,t,s),u(t,E,s),r(k,t,s),u(t,T,s),r(O,t,s),u(t,D,s),r(C,t,s),u(t,j,s),r(A,t,s),u(t,S,s),r(F,t,s),u(t,I,s),r(M,t,s),u(t,Y,s),r(q,t,s),u(t,K,s),r(W,t,s),u(t,X,s),r(Z,t,s),u(t,_,s),r(tt,t,s),u(t,et,s),r(nt,t,s),u(t,$t,s),r(st,t,s),u(t,ot,s),r(ft,t,s),u(t,lt,s),r(mt,t,s),u(t,it,s),r(gt,t,s),dt=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),v.$set(a);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),y.$set(c);const p={};2&n&&(p.$$scope={dirty:n,ctx:t}),k.$set(p);const f={};2&n&&(f.$$scope={dirty:n,ctx:t}),O.$set(f);const l={};2&n&&(l.$$scope={dirty:n,ctx:t}),C.$set(l);const m={};2&n&&(m.$$scope={dirty:n,ctx:t}),A.$set(m);const g={};2&n&&(g.$$scope={dirty:n,ctx:t}),F.$set(g);const d={};2&n&&(d.$$scope={dirty:n,ctx:t}),M.$set(d);const u={};2&n&&(u.$$scope={dirty:n,ctx:t}),q.$set(u);const h={};2&n&&(h.$$scope={dirty:n,ctx:t}),W.$set(h);const x={};2&n&&(x.$$scope={dirty:n,ctx:t}),Z.$set(x);const w={};2&n&&(w.$$scope={dirty:n,ctx:t}),tt.$set(w);const E={};2&n&&(E.$$scope={dirty:n,ctx:t}),nt.$set(E);const T={};2&n&&(T.$$scope={dirty:n,ctx:t}),st.$set(T);const D={};2&n&&(D.$$scope={dirty:n,ctx:t}),ft.$set(D);const P={};2&n&&(P.$$scope={dirty:n,ctx:t}),mt.$set(P);const b={};2&n&&(b.$$scope={dirty:n,ctx:t}),gt.$set(b)},i(t){dt||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(i.$$.fragment,t),p(v.$$.fragment,t),p(y.$$.fragment,t),p(k.$$.fragment,t),p(O.$$.fragment,t),p(C.$$.fragment,t),p(A.$$.fragment,t),p(F.$$.fragment,t),p(M.$$.fragment,t),p(q.$$.fragment,t),p(W.$$.fragment,t),p(Z.$$.fragment,t),p(tt.$$.fragment,t),p(nt.$$.fragment,t),p(st.$$.fragment,t),p(ft.$$.fragment,t),p(mt.$$.fragment,t),p(gt.$$.fragment,t),dt=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),f(v.$$.fragment,t),f(y.$$.fragment,t),f(k.$$.fragment,t),f(O.$$.fragment,t),f(C.$$.fragment,t),f(A.$$.fragment,t),f(F.$$.fragment,t),f(M.$$.fragment,t),f(q.$$.fragment,t),f(W.$$.fragment,t),f(Z.$$.fragment,t),f(tt.$$.fragment,t),f(nt.$$.fragment,t),f(st.$$.fragment,t),f(ft.$$.fragment,t),f(mt.$$.fragment,t),f(gt.$$.fragment,t),dt=!1},d(t){l(e,t),t&&h(n),l($,t),t&&h(a),l(c,t),t&&h(m),l(i,t),t&&h(x),l(v,t),t&&h(w),l(y,t),t&&h(E),l(k,t),t&&h(T),l(O,t),t&&h(D),l(C,t),t&&h(j),l(A,t),t&&h(S),l(F,t),t&&h(I),l(M,t),t&&h(Y),l(q,t),t&&h(K),l(W,t),t&&h(X),l(Z,t),t&&h(_),l(tt,t),t&&h(et),l(nt,t),t&&h($t),l(st,t),t&&h(ot),l(ft,t),t&&h(lt),l(mt,t),t&&h(it),l(gt,t)}}}function Zt(t){let e,n;const m=[t[0],_t];let i={$$slots:{default:[Xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new D({props:i}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,[n]){const $=1&n?a(m,[1&n&&c(t[0]),0&n&&c(_t)]):{};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const _t={name:"Popover",relatedComponents:[{name:"PopoverButton",link:"./docs/components/popover-button"}]},{name:te,relatedComponents:ee}=_t;function ne(t,e,n){return m(S),t.$$set=t=>{n(0,e=$($({},e),i(t)))},[e=i(e)]}export default class extends t{constructor(t){super(),e(this,t,ne,Zt,n,{})}}export{_t as metadata};
