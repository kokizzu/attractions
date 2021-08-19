import{S as t,i as n,s as e,I as s,j as a,k as $,m as o,R as r,Y as c,t as p,o as l,p as f,J as m,q as d,u as g,f as u,d as i,r as h,v as x,h as w,c as k,b as y,e as v,g as D,n as E,T as b}from"./client.518dedc1.js";import{L as T,H as C,P as O}from"./layout.d1443214.js";import{B as S}from"./button.469ebe11.js";import{D as j,a as I}from"./dropdown.8bbf9c98.js";import{C as A}from"./ChevronDownIcon.33600a2a.js";import{S as N}from"./showcase.9a3c666b.js";import{C as R}from"./color-preview.380277c6.js";import{S as B}from"./shadow-preview.08e065f4.js";import{R as F}from"./related-components.6b425ce3.js";import{H}from"./h2.2728299b.js";import{H as P}from"./h3.47f9672c.js";import{T as G,a as V,b as Y,c as M}from"./table.1be54ec1.js";import"./classes.2453fa25.js";import"./label.518bfb24.js";import"./copyable-code.0df347ab.js";import"./popover.8a97a92c.js";import"./card.30e05cab.js";function z(t){let n;return{c(){n=h("Dropdown")},l(t){n=x(t,"Dropdown")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function L(t){let n,e,s,a,$;return{c(){n=h("Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=w("a"),s=w("code"),a=h("DropdownShell"),$=h(" for correct behavior."),this.h()},l(t){n=x(t,"Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=k(t,"A",{href:!0});var o=y(e);s=k(o,"CODE",{});var r=y(s);a=x(r,"DropdownShell"),r.forEach(i),o.forEach(i),$=x(t," for correct behavior."),this.h()},h(){v(e,"href","./docs/components/dropdown-shell")},m(t,o){u(t,n,o),u(t,e,o),D(e,s),D(s,a),u(t,$,o)},d(t){t&&i(n),t&&i(e),t&&i($)}}}function q(t){let n,e,s;return e=new A({props:{size:"24",class:"ml dropdown-chevron"}}),{c(){n=h("I toggle a dropdown\n        "),a(e.$$.fragment)},l(t){n=x(t,"I toggle a dropdown\n        "),$(e.$$.fragment,t)},m(t,a){u(t,n,a),o(e,t,a),s=!0},p:E,i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&i(n),f(e,t)}}}function J(t){let n,e;return{c(){n=w("div"),e=h("and I am the dropdown content"),this.h()},l(t){n=k(t,"DIV",{class:!0});var s=y(n);e=x(s,"and I am the dropdown content"),s.forEach(i),this.h()},h(){v(n,"class","padded svelte-fhk3a2")},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function K(t){let n,e,s,r;return n=new S({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),n.$on("click",(function(){b(t[1])&&t[1].apply(this,arguments)})),s=new I({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};4&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};4&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(p(n.$$.fragment,t),p(s.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),r=!1},d(t){f(n,t),t&&i(e),f(s,t)}}}function Q(t){let n;return{c(){n=h("look up there")},l(t){n=x(t,"look up there")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function U(t){let n,e;return{c(){n=w("div"),e=h("right here"),this.h()},l(t){n=k(t,"DIV",{class:!0});var s=y(n);e=x(s,"right here"),s.forEach(i),this.h()},h(){v(n,"class","padded svelte-fhk3a2")},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function W(t){let n,e,s,r;return n=new S({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),n.$on("click",(function(){b(t[1])&&t[1].apply(this,arguments)})),s=new I({props:{top:!0,$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};4&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};4&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(p(n.$$.fragment,t),p(s.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),r=!1},d(t){f(n,t),t&&i(e),f(s,t)}}}function X(t){let n,e,s,r,c;return e=new j({props:{$$slots:{default:[K,({toggle:t})=>({1:t}),({toggle:t})=>t?2:0]},$$scope:{ctx:t}}}),r=new j({props:{$$slots:{default:[W,({toggle:t})=>({1:t}),({toggle:t})=>t?2:0]},$$scope:{ctx:t}}}),{c(){n=w("div"),a(e.$$.fragment),s=d(),a(r.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0,class:!0});var a=y(n);$(e.$$.fragment,a),s=g(a),$(r.$$.fragment,a),a.forEach(i),this.h()},h(){v(n,"slot","showcase"),v(n,"class","padded svelte-fhk3a2")},m(t,a){u(t,n,a),o(e,n,null),D(n,s),o(r,n,null),c=!0},p(t,n){const s={};6&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};6&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){c||(p(e.$$.fragment,t),p(r.$$.fragment,t),c=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),c=!1},d(t){t&&i(n),f(e),f(r)}}}function Z(t){let n,e;return{c(){n=w("div"),e=w("pre"),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);e=k(s,"PRE",{class:!0}),y(e).forEach(i),s.forEach(i),this.h()},h(){v(e,"class","language-svelte"),v(n,"slot","source")},m(t,s){u(t,n,s),D(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    I toggle a dropdown\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml dropdown-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      and I am the dropdown content\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    look up there\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">top</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      right here\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span></code>'},p:E,d(t){t&&i(n)}}}function _(t){let n;return{c(){n=h("Properties")},l(t){n=x(t,"Properties")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function tt(t){let n;return{c(){n=h("Style Properties")},l(t){n=x(t,"Style Properties")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function nt(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function et(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function st(t){let n;return{c(){n=h("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function at(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function $t(t){let n,e,s,r,c,m,h,x;return n=new Y({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),h=new Y({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function ot(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("right")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"right"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function rt(t){let n,e;return{c(){n=w("code"),e=h("false")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"false"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function ct(t){let n,e;return{c(){n=w("code"),e=h("boolean")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"boolean"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function pt(t){let n;return{c(){n=h("Aligns the dropdown content with the right edge of the shell.")},l(t){n=x(t,"Aligns the dropdown content with the right edge of the shell.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function lt(t){let n,e,s,r,c,m,h,x;return n=new M({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function ft(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("top")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"top"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function mt(t){let n,e;return{c(){n=w("code"),e=h("false")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"false"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function dt(t){let n,e;return{c(){n=w("code"),e=h("boolean")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"boolean"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function gt(t){let n;return{c(){n=h("Aligns the dropdown content such that it opens to the top of the shell, extending up.")},l(t){n=x(t,"Aligns the dropdown content such that it opens to the top of the shell, extending up.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function ut(t){let n,e,s,r,c,m,h,x;return n=new M({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function it(t){let n,e,s,r,c,m,h,x;return e=new V({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),h=new V({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){n=w("thead"),a(e.$$.fragment),s=d(),r=w("tbody"),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);$(e.$$.fragment,a),a.forEach(i),s=g(t),r=k(t,"TBODY",{});var o=y(r);$(c.$$.fragment,o),m=g(o),$(h.$$.fragment,o),o.forEach(i)},m(t,a){u(t,n,a),o(e,n,null),u(t,s,a),u(t,r,a),o(c,r,null),D(r,m),o(h,r,null),x=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const $={};4&n&&($.$$scope={dirty:n,ctx:t}),h.$set($)},i(t){x||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){t&&i(n),f(e),t&&i(s),t&&i(r),f(c),f(h)}}}function ht(t){let n;return{c(){n=h("Class Properties")},l(t){n=x(t,"Class Properties")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function xt(t){let n,e,s,a,$,o,r;return{c(){n=h("All "),e=w("code"),s=h("<Dropdown>"),a=h(" components use the "),$=w("code"),o=h(".dropdown"),r=h(" class.")},l(t){n=x(t,"All "),e=k(t,"CODE",{});var c=y(e);s=x(c,"<Dropdown>"),c.forEach(i),a=x(t," components use the "),$=k(t,"CODE",{});var p=y($);o=x(p,".dropdown"),p.forEach(i),r=x(t," class.")},m(t,c){u(t,n,c),u(t,e,c),D(e,s),u(t,a,c),u(t,$,c),D($,o),u(t,r,c)},d(t){t&&i(n),t&&i(e),t&&i(a),t&&i($),t&&i(r)}}}function wt(t){let n;return{c(){n=h("Falsy values passed to classes will be disregarded.")},l(t){n=x(t,"Falsy values passed to classes will be disregarded.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function kt(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function yt(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function vt(t){let n;return{c(){n=h("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Dt(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Et(t){let n,e,s,r,c,m,h,x;return n=new Y({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),h=new Y({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function bt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("class")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"class"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Tt(t){let n,e;return{c(){n=w("code"),e=h("null")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"null"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function Ct(t){let n,e;return{c(){n=w("code"),e=h("string")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"string"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function Ot(t){let n,e,s,a;return{c(){n=h("A class string to add to the underlying "),e=w("code"),s=h("<div>"),a=h(" element.")},l(t){n=x(t,"A class string to add to the underlying "),e=k(t,"CODE",{});var $=y(e);s=x($,"<div>"),$.forEach(i),a=x(t," element.")},m(t,$){u(t,n,$),u(t,e,$),D(e,s),u(t,a,$)},d(t){t&&i(n),t&&i(e),t&&i(a)}}}function St(t){let n,e,s,r,c,m,h,x;return n=new M({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function jt(t){let n,e,s,r,c,m;return e=new V({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){n=w("thead"),a(e.$$.fragment),s=d(),r=w("tbody"),a(c.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);$(e.$$.fragment,a),a.forEach(i),s=g(t),r=k(t,"TBODY",{});var o=y(r);$(c.$$.fragment,o),o.forEach(i)},m(t,a){u(t,n,a),o(e,n,null),u(t,s,a),u(t,r,a),o(c,r,null),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){m||(p(e.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&i(n),f(e),t&&i(s),t&&i(r),f(c)}}}function It(t){let n;return{c(){n=h("Slots")},l(t){n=x(t,"Slots")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function At(t){let n;return{c(){n=h("Default slot")},l(t){n=x(t,"Default slot")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Nt(t){let n;return{c(){n=h("The content of the dropdown.")},l(t){n=x(t,"The content of the dropdown.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Rt(t){let n;return{c(){n=h("SCSS Variables")},l(t){n=x(t,"SCSS Variables")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Bt(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Ft(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Ht(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Pt(t){let n,e,s,r,c,m;return n=new Y({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function Gt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("$background")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"$background"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Vt(t){let n;return{c(){n=h("The background color of the dropdown content")},l(t){n=x(t,"The background color of the dropdown content")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Yt(t){let n,e;return n=new R({props:{value:"#FFFFFF",bordered:!0}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function Mt(t){let n,e,s,r,c,m;return n=new M({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function zt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("$shadow-raised")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"$shadow-raised"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Lt(t){let n;return{c(){n=h("The shadow of the dropdown.")},l(t){n=x(t,"The shadow of the dropdown.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function qt(t){let n,e;return n=new B({props:{value:sn}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function Jt(t){let n,e,s,r,c,m;return n=new M({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function Kt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("$card-radius")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"$card-radius"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Qt(t){let n;return{c(){n=h("The curvature radius of the dropdown.")},l(t){n=x(t,"The curvature radius of the dropdown.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Ut(t){let n,e;return{c(){n=w("code"),e=h("1.25em")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"1.25em"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function Wt(t){let n,e,s,r,c,m;return n=new M({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function Xt(t){let n,e,s,r,c,m,h,x,v,E;return e=new V({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),h=new V({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),v=new V({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){n=w("thead"),a(e.$$.fragment),s=d(),r=w("tbody"),a(c.$$.fragment),m=d(),a(h.$$.fragment),x=d(),a(v.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);$(e.$$.fragment,a),a.forEach(i),s=g(t),r=k(t,"TBODY",{});var o=y(r);$(c.$$.fragment,o),m=g(o),$(h.$$.fragment,o),x=g(o),$(v.$$.fragment,o),o.forEach(i)},m(t,a){u(t,n,a),o(e,n,null),u(t,s,a),u(t,r,a),o(c,r,null),D(r,m),o(h,r,null),D(r,x),o(v,r,null),E=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const $={};4&n&&($.$$scope={dirty:n,ctx:t}),h.$set($);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),v.$set(o)},i(t){E||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(v.$$.fragment,t),E=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(v.$$.fragment,t),E=!1},d(t){t&&i(n),f(e),t&&i(s),t&&i(r),f(c),f(h),f(v)}}}function Zt(t){let n,e,s,r,c,m,h,x,w,k,y,v,D,E,b,T,S,j,I,A,R,B,V,Y,M,q,J,K,Q,U,W,nt;return n=new C({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),c=new F({props:{components:en}}),h=new N({props:{$$slots:{source:[Z],showcase:[X]},$$scope:{ctx:t}}}),w=new H({props:{id:"properties",$$slots:{default:[_]},$$scope:{ctx:t}}}),y=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),D=new G({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),b=new P({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),S=new O({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),I=new O({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),R=new G({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),V=new H({props:{id:"slots",$$slots:{default:[It]},$$scope:{ctx:t}}}),M=new P({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),J=new O({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),Q=new H({props:{id:"scss-variables",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),W=new G({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment),x=d(),a(w.$$.fragment),k=d(),a(y.$$.fragment),v=d(),a(D.$$.fragment),E=d(),a(b.$$.fragment),T=d(),a(S.$$.fragment),j=d(),a(I.$$.fragment),A=d(),a(R.$$.fragment),B=d(),a(V.$$.fragment),Y=d(),a(M.$$.fragment),q=d(),a(J.$$.fragment),K=d(),a(Q.$$.fragment),U=d(),a(W.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t),x=g(t),$(w.$$.fragment,t),k=g(t),$(y.$$.fragment,t),v=g(t),$(D.$$.fragment,t),E=g(t),$(b.$$.fragment,t),T=g(t),$(S.$$.fragment,t),j=g(t),$(I.$$.fragment,t),A=g(t),$(R.$$.fragment,t),B=g(t),$(V.$$.fragment,t),Y=g(t),$(M.$$.fragment,t),q=g(t),$(J.$$.fragment,t),K=g(t),$(Q.$$.fragment,t),U=g(t),$(W.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),u(t,x,a),o(w,t,a),u(t,k,a),o(y,t,a),u(t,v,a),o(D,t,a),u(t,E,a),o(b,t,a),u(t,T,a),o(S,t,a),u(t,j,a),o(I,t,a),u(t,A,a),o(R,t,a),u(t,B,a),o(V,t,a),u(t,Y,a),o(M,t,a),u(t,q,a),o(J,t,a),u(t,K,a),o(Q,t,a),u(t,U,a),o(W,t,a),nt=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const c={};4&e&&(c.$$scope={dirty:e,ctx:t}),y.$set(c);const p={};4&e&&(p.$$scope={dirty:e,ctx:t}),D.$set(p);const l={};4&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};4&e&&(f.$$scope={dirty:e,ctx:t}),S.$set(f);const m={};4&e&&(m.$$scope={dirty:e,ctx:t}),I.$set(m);const d={};4&e&&(d.$$scope={dirty:e,ctx:t}),R.$set(d);const g={};4&e&&(g.$$scope={dirty:e,ctx:t}),V.$set(g);const u={};4&e&&(u.$$scope={dirty:e,ctx:t}),M.$set(u);const i={};4&e&&(i.$$scope={dirty:e,ctx:t}),J.$set(i);const x={};4&e&&(x.$$scope={dirty:e,ctx:t}),Q.$set(x);const k={};4&e&&(k.$$scope={dirty:e,ctx:t}),W.$set(k)},i(t){nt||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(w.$$.fragment,t),p(y.$$.fragment,t),p(D.$$.fragment,t),p(b.$$.fragment,t),p(S.$$.fragment,t),p(I.$$.fragment,t),p(R.$$.fragment,t),p(V.$$.fragment,t),p(M.$$.fragment,t),p(J.$$.fragment,t),p(Q.$$.fragment,t),p(W.$$.fragment,t),nt=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(w.$$.fragment,t),l(y.$$.fragment,t),l(D.$$.fragment,t),l(b.$$.fragment,t),l(S.$$.fragment,t),l(I.$$.fragment,t),l(R.$$.fragment,t),l(V.$$.fragment,t),l(M.$$.fragment,t),l(J.$$.fragment,t),l(Q.$$.fragment,t),l(W.$$.fragment,t),nt=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t),t&&i(x),f(w,t),t&&i(k),f(y,t),t&&i(v),f(D,t),t&&i(E),f(b,t),t&&i(T),f(S,t),t&&i(j),f(I,t),t&&i(A),f(R,t),t&&i(B),f(V,t),t&&i(Y),f(M,t),t&&i(q),f(J,t),t&&i(K),f(Q,t),t&&i(U),f(W,t)}}}function _t(t){let n,e;const m=[t[0],tn];let d={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)d=s(d,m[t]);return n=new T({props:d}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s=1&e?r(m,[1&e&&c(t[0]),0&e&&c(tn)]):{};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}const tn={name:"Dropdown",relatedComponents:[{name:"DropdownShell",link:"./docs/components/dropdown-shell"}],shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:nn,relatedComponents:en,shadowRaised:sn}=tn;function an(t,n,e){return t.$$set=t=>{e(0,n=s(s({},n),m(t)))},[n=m(n)]}class $n extends t{constructor(t){super(),n(this,t,an,_t,e,{})}}export{$n as default,tn as metadata};
