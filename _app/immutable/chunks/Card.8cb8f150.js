import{S as j,i as w,s as z,G as E,k as u,a as A,l as p,m as b,h as n,c as B,n as y,b as g,C as v,H as C,I,J as D,g as V,d as q,q as H,r as J}from"./index.fa5136aa.js";const F=s=>({}),S=s=>({}),K=s=>({}),G=s=>({});function L(s){let t;return{c(){t=H("Empty card header")},l(a){t=J(a,"Empty card header")},m(a,_){g(a,t,_)},d(a){a&&n(t)}}}function M(s){let t;return{c(){t=H("Empty card body")},l(a){t=J(a,"Empty card body")},m(a,_){g(a,t,_)},d(a){a&&n(t)}}}function N(s){let t,a,_,d,r;const h=s[1]["card-header"],i=E(h,s,s[0],G),c=i||L(),m=s[1]["card-body"],f=E(m,s,s[0],S),l=f||M();return{c(){t=u("div"),a=u("div"),c&&c.c(),_=A(),d=u("div"),l&&l.c(),this.h()},l(e){t=p(e,"DIV",{class:!0});var o=b(t);a=p(o,"DIV",{class:!0});var $=b(a);c&&c.l($),$.forEach(n),_=B(o),d=p(o,"DIV",{class:!0});var k=b(d);l&&l.l(k),k.forEach(n),o.forEach(n),this.h()},h(){y(a,"class","card-header"),y(d,"class","card-body"),y(t,"class","card svelte-1bgv8y1")},m(e,o){g(e,t,o),v(t,a),c&&c.m(a,null),v(t,_),v(t,d),l&&l.m(d,null),r=!0},p(e,[o]){i&&i.p&&(!r||o&1)&&C(i,h,e,e[0],r?D(h,e[0],o,K):I(e[0]),G),f&&f.p&&(!r||o&1)&&C(f,m,e,e[0],r?D(m,e[0],o,F):I(e[0]),S)},i(e){r||(V(c,e),V(l,e),r=!0)},o(e){q(c,e),q(l,e),r=!1},d(e){e&&n(t),c&&c.d(e),l&&l.d(e)}}}function O(s,t,a){let{$$slots:_={},$$scope:d}=t;return s.$$set=r=>{"$$scope"in r&&a(0,d=r.$$scope)},[d,_]}class Q extends j{constructor(t){super(),w(this,t,O,N,z,{})}}export{Q as C};
