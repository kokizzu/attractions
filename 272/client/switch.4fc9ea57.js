import{S as s,i as l,s as a,N as t,t as e,o as c,H as n,h as u,q as i,c as o,b as r,u as d,d as h,K as f,L as p,e as m,R as v,f as b,g as C,l as k,w as $,x as L,O as g,Q as x,F as E,G as I,I as w,J as y}from"./client.3462c8f1.js";import{c as j}from"./classes.2453fa25.js";function D(s){let l;const a=s[10].default,n=y(a,s,s[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),l=!0},p(s,e){n&&n.p&&(!l||512&e)&&t(n,a,s,s[9],e,null,null)},i(s){l||(e(n,s),l=!0)},o(s){c(n,s),l=!1},d(s){n&&n.d(s)}}}function N(s){let l;const a=s[10].default,n=y(a,s,s[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),l=!0},p(s,e){n&&n.p&&(!l||512&e)&&t(n,a,s,s[9],e,null,null)},i(s){l||(e(n,s),l=!0)},o(s){c(n,s),l=!1},d(s){n&&n.d(s)}}}function S(s){let l,a,t,E,I,w,y,S,V,q,A,B,F,G,H=s[6]&&D(s),J=[{type:"checkbox"},{class:E=j(s[2])},{disabled:s[5]},s[8]],K={};for(let s=0;s<J.length;s+=1)K=n(K,J[s]);let O=!s[6]&&N(s);return{c(){l=u("label"),H&&H.c(),a=i(),t=u("input"),I=i(),w=u("div"),y=u("div"),q=i(),O&&O.c(),this.h()},l(s){l=o(s,"LABEL",{class:!0});var e=r(l);H&&H.l(e),a=d(e),t=o(e,"INPUT",{type:!0,class:!0,disabled:!0}),I=d(e),w=o(e,"DIV",{class:!0});var c=r(w);y=o(c,"DIV",{class:!0}),r(y).forEach(h),c.forEach(h),q=d(e),O&&O.l(e),e.forEach(h),this.h()},h(){f(t,K),p(t,"svelte-trf1oe",!0),m(y,"class",S=v(j("thumb",s[4]))+" svelte-trf1oe"),m(w,"class",V=v(j("track",s[3]))+" svelte-trf1oe"),m(l,"class",A=v(j("switch",s[1]))+" svelte-trf1oe")},m(e,c){b(e,l,c),H&&H.m(l,null),C(l,a),C(l,t),t.checked=s[0],C(l,I),C(l,w),C(w,y),C(l,q),O&&O.m(l,null),B=!0,F||(G=[k(t,"change",s[11]),k(t,"change",s[12])],F=!0)},p(s,[n]){s[6]?H?(H.p(s,n),64&n&&e(H,1)):(H=D(s),H.c(),e(H,1),H.m(l,a)):H&&($(),c(H,1,1,(()=>{H=null})),L()),f(t,K=g(J,[{type:"checkbox"},(!B||4&n&&E!==(E=j(s[2])))&&{class:E},(!B||32&n)&&{disabled:s[5]},256&n&&s[8]])),1&n&&(t.checked=s[0]),p(t,"svelte-trf1oe",!0),(!B||16&n&&S!==(S=v(j("thumb",s[4]))+" svelte-trf1oe"))&&m(y,"class",S),(!B||8&n&&V!==(V=v(j("track",s[3]))+" svelte-trf1oe"))&&m(w,"class",V),s[6]?O&&($(),c(O,1,1,(()=>{O=null})),L()):O?(O.p(s,n),64&n&&e(O,1)):(O=N(s),O.c(),e(O,1),O.m(l,null)),(!B||2&n&&A!==(A=v(j("switch",s[1]))+" svelte-trf1oe"))&&m(l,"class",A)},i(s){B||(e(H),e(O),B=!0)},o(s){c(H),c(O),B=!1},d(s){s&&h(l),H&&H.d(),O&&O.d(),F=!1,x(G)}}}function V(s,l,a){const t=["class","inputClass","trackClass","thumbClass","value","disabled","slotLeft"];let e=E(l,t),{$$slots:c={},$$scope:u}=l,{class:i=null}=l,{inputClass:o=null}=l,{trackClass:r=null}=l,{thumbClass:d=null}=l,{value:h=!1}=l,{disabled:f=!1}=l,{slotLeft:p=!1}=l;const m=I();return s.$$set=s=>{l=n(n({},l),w(s)),a(8,e=E(l,t)),"class"in s&&a(1,i=s.class),"inputClass"in s&&a(2,o=s.inputClass),"trackClass"in s&&a(3,r=s.trackClass),"thumbClass"in s&&a(4,d=s.thumbClass),"value"in s&&a(0,h=s.value),"disabled"in s&&a(5,f=s.disabled),"slotLeft"in s&&a(6,p=s.slotLeft),"$$scope"in s&&a(9,u=s.$$scope)},[h,i,o,r,d,f,p,m,e,u,c,function(){h=this.checked,a(0,h)},s=>m("change",{value:s.target.checked,nativeEvent:s})]}class q extends s{constructor(s){super(),l(this,s,V,S,a,{class:1,inputClass:2,trackClass:3,thumbClass:4,value:0,disabled:5,slotLeft:6})}}export{q as S};
