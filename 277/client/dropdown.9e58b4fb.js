import{S as s,i as t,s as n,K as e,h as o,c as l,b as a,d as c,e as i,V as r,M as u,f as p,l as d,O as h,P as $,Q as f,t as g,o as v,H as m,W as w}from"./client.c69ffed5.js";import{c as x}from"./classes.2453fa25.js";const y=s=>({}),E=s=>({toggle:s[2]});function j(s){let t,n,m,w,j;const k=s[6].default,D=e(k,s,s[5],E);return{c(){t=o("div"),D&&D.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var n=a(t);D&&D.l(n),n.forEach(c),this.h()},h(){i(t,"class",n=r(x("dropdown-shell",s[1]))+" svelte-18ox5ni"),u(t,"open",s[0])},m(n,e){p(n,t,e),D&&D.m(t,null),s[7](t),m=!0,w||(j=d(window,"click",s[4]),w=!0)},p(s,[e]){D&&D.p&&(!m||32&e)&&h(D,k,s,s[5],m?f(k,s[5],e,y):$(s[5]),E),(!m||2&e&&n!==(n=r(x("dropdown-shell",s[1]))+" svelte-18ox5ni"))&&i(t,"class",n),3&e&&u(t,"open",s[0])},i(s){m||(g(D,s),m=!0)},o(s){v(D,s),m=!1},d(n){n&&c(t),D&&D.d(n),s[7](null),w=!1,j()}}}function k(s,t,n){let{$$slots:e={},$$scope:o}=t,{class:l=null}=t,{open:a=!1}=t;function c(){n(0,a=!a)}let i=null;function r(s){"Escape"===s.key&&a&&(s.preventDefault(),c())}const u=m();return s.$$set=s=>{"class"in s&&n(1,l=s.class),"open"in s&&n(0,a=s.open),"$$scope"in s&&n(5,o=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&u("change",{value:a}),1&s.$$.dirty&&"undefined"!=typeof document&&(a?document.addEventListener("keydown",r):document.removeEventListener("keydown",r))},[a,l,c,i,function(s){if(!i)return;!i.contains(s.target)&&a&&c()},o,e,function(s){w[s?"unshift":"push"]((()=>{i=s,n(3,i)}))}]}var D=class extends s{constructor(s){super(),t(this,s,k,j,n,{class:1,open:0,toggle:2})}get toggle(){return this.$$.ctx[2]}};function V(s){let t,n,d;const m=s[4].default,w=e(m,s,s[3],null);return{c(){t=o("div"),w&&w.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var n=a(t);w&&w.l(n),n.forEach(c),this.h()},h(){i(t,"class",n=r(x("dropdown",s[0]))+" svelte-1hjnt7a"),u(t,"right",s[1]),u(t,"top",s[2])},m(s,n){p(s,t,n),w&&w.m(t,null),d=!0},p(s,[e]){w&&w.p&&(!d||8&e)&&h(w,m,s,s[3],d?f(m,s[3],e,null):$(s[3]),null),(!d||1&e&&n!==(n=r(x("dropdown",s[0]))+" svelte-1hjnt7a"))&&i(t,"class",n),3&e&&u(t,"right",s[1]),5&e&&u(t,"top",s[2])},i(s){d||(g(w,s),d=!0)},o(s){v(w,s),d=!1},d(s){s&&c(t),w&&w.d(s)}}}function I(s,t,n){let{$$slots:e={},$$scope:o}=t,{class:l=null}=t,{right:a=!1}=t,{top:c=!1}=t;return s.$$set=s=>{"class"in s&&n(0,l=s.class),"right"in s&&n(1,a=s.right),"top"in s&&n(2,c=s.top),"$$scope"in s&&n(3,o=s.$$scope)},[l,a,c,o,e]}var L=class extends s{constructor(s){super(),t(this,s,I,V,n,{class:0,right:1,top:2})}};export{D,L as a};
