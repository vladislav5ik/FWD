import{S as L,i as q,s as w,k as $,l as d,m as g,h as u,n as m,b as p,C as b,g as k,v as B,f as G,d as v,D as M,y,a as I,z as A,c as D,A as F,B as H,E as N,F as E,G as O,H as S,I as j,J}from"../chunks/index.fa5136aa.js";import{L as U}from"../chunks/Link.b7e265d6.js";import{b as x}from"../chunks/paths.a29005a4.js";function T(f,e,n){const a=f.slice();return a[1]=e[n],a}function z(f){let e,n,a,o;return n=new U({props:{link:f[1],rightIcon:""}}),{c(){e=$("li"),y(n.$$.fragment),a=I(),this.h()},l(i){e=d(i,"LI",{class:!0});var t=g(e);A(n.$$.fragment,t),a=D(t),t.forEach(u),this.h()},h(){m(e,"class","link svelte-l016ac")},m(i,t){p(i,e,t),F(n,e,null),b(e,a),o=!0},p(i,t){const _={};t&1&&(_.link=i[1]),n.$set(_)},i(i){o||(k(n.$$.fragment,i),o=!0)},o(i){v(n.$$.fragment,i),o=!1},d(i){i&&u(e),H(n)}}}function V(f){let e,n,a,o,i=f[0],t=[];for(let r=0;r<i.length;r+=1)t[r]=z(T(f,i,r));const _=r=>v(t[r],1,1,()=>{t[r]=null});return{c(){e=$("header"),n=$("nav"),a=$("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=d(r,"HEADER",{});var c=g(e);n=d(c,"NAV",{});var l=g(n);a=d(l,"UL",{class:!0});var s=g(a);for(let h=0;h<t.length;h+=1)t[h].l(s);s.forEach(u),l.forEach(u),c.forEach(u),this.h()},h(){m(a,"class","links-list svelte-l016ac")},m(r,c){p(r,e,c),b(e,n),b(n,a);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(a,null);o=!0},p(r,[c]){if(c&1){i=r[0];let l;for(l=0;l<i.length;l+=1){const s=T(r,i,l);t[l]?(t[l].p(s,c),k(t[l],1)):(t[l]=z(s),t[l].c(),k(t[l],1),t[l].m(a,null))}for(B(),l=i.length;l<t.length;l+=1)_(l);G()}},i(r){if(!o){for(let c=0;c<i.length;c+=1)k(t[c]);o=!0}},o(r){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)v(t[c]);o=!1},d(r){r&&u(e),M(t,r)}}}function W(f,e,n){let{links:a=[]}=e;return f.$$set=o=>{"links"in o&&n(0,a=o.links)},[a]}class K extends L{constructor(e){super(),q(this,e,W,V,w,{links:0})}}function P(f){let e,n;return{c(){e=$("iframe"),this.h()},l(a){e=d(a,"IFRAME",{src:!0,width:!0,height:!0,title:!0,class:!0}),g(e).forEach(u),this.h()},h(){N(e.src,n="https://ghbtns.com/github-btn.html?user=vladislav5ik&repo=FWD&type=star&count=true&size=large")||m(e,"src",n),m(e,"width","170"),m(e,"height","30"),m(e,"title","GitHub"),m(e,"class","svelte-cojinp")},m(a,o){p(a,e,o)},p:E,i:E,o:E,d(a){a&&u(e)}}}class Q extends L{constructor(e){super(),q(this,e,null,P,w,{})}}let X=[{linkDestination:x+"/",linkText:"Resume",linkIconClass:"fa fa-home",linkId:"home-link"},{linkDestination:x+"/comic",linkText:"Comic",linkIconClass:"fa fa-comment",linkId:"comic-link"}];function Y(f){let e,n,a,o,i,t,_,r;n=new K({props:{links:X}});const c=f[1].default,l=O(c,f,f[0],null);return _=new Q({}),{c(){e=$("header"),y(n.$$.fragment),a=I(),o=$("main"),l&&l.c(),i=I(),t=$("footer"),y(_.$$.fragment),this.h()},l(s){e=d(s,"HEADER",{class:!0});var h=g(e);A(n.$$.fragment,h),h.forEach(u),a=D(s),o=d(s,"MAIN",{class:!0});var C=g(o);l&&l.l(C),C.forEach(u),i=D(s),t=d(s,"FOOTER",{class:!0});var R=g(t);A(_.$$.fragment,R),R.forEach(u),this.h()},h(){m(e,"class","svelte-1qcobni"),m(o,"class","svelte-1qcobni"),m(t,"class","svelte-1qcobni")},m(s,h){p(s,e,h),F(n,e,null),p(s,a,h),p(s,o,h),l&&l.m(o,null),p(s,i,h),p(s,t,h),F(_,t,null),r=!0},p(s,[h]){l&&l.p&&(!r||h&1)&&S(l,c,s,s[0],r?J(c,s[0],h,null):j(s[0]),null)},i(s){r||(k(n.$$.fragment,s),k(l,s),k(_.$$.fragment,s),r=!0)},o(s){v(n.$$.fragment,s),v(l,s),v(_.$$.fragment,s),r=!1},d(s){s&&u(e),H(n),s&&u(a),s&&u(o),l&&l.d(s),s&&u(i),s&&u(t),H(_)}}}function Z(f,e,n){let{$$slots:a={},$$scope:o}=e;return f.$$set=i=>{"$$scope"in i&&n(0,o=i.$$scope)},[o,a]}class se extends L{constructor(e){super(),q(this,e,Z,Y,w,{})}}export{se as default};
