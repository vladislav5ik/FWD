import{S as M,i as R,s as J,k as p,a as S,l as d,m as $,c as V,h as u,n as g,b as I,C as _,g as y,v as K,f as O,d as D,D as W,q as H,r as P,y as C,z as U,A as j,B as T,F as A,u as N,E as re}from"../chunks/index.fa5136aa.js";import{L as ie}from"../chunks/Link.aa03fb8f.js";import{C as ae}from"../chunks/Card.8cb8f150.js";import{l as ce,s as oe,a as fe,b as ue,c as he,e as _e}from"../chunks/data.dc88249a.js";function Y(c,e,s){const l=c.slice();return l[1]=e[s],l}function Z(c){let e,s;return{c(){e=p("p"),s=H("No links yet")},l(l){e=d(l,"P",{});var t=$(e);s=P(t,"No links yet"),t.forEach(u)},m(l,t){I(l,e,t),_(e,s)},d(l){l&&u(e)}}}function ee(c){let e,s,l,t;return s=new ie({props:{link:c[1]}}),{c(){e=p("li"),C(s.$$.fragment),l=S(),this.h()},l(r){e=d(r,"LI",{class:!0});var n=$(e);U(s.$$.fragment,n),l=V(n),n.forEach(u),this.h()},h(){g(e,"class","link svelte-p7j97f")},m(r,n){I(r,e,n),j(s,e,null),_(e,l),t=!0},p(r,n){const i={};n&1&&(i.link=r[1]),s.$set(i)},i(r){t||(y(s.$$.fragment,r),t=!0)},o(r){D(s.$$.fragment,r),t=!1},d(r){r&&u(e),T(s)}}}function me(c){let e,s,l,t,r=c[0].length===0&&Z(),n=c[0],i=[];for(let f=0;f<n.length;f+=1)i[f]=ee(Y(c,n,f));const a=f=>D(i[f],1,1,()=>{i[f]=null});return{c(){e=p("div"),r&&r.c(),s=S(),l=p("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=d(f,"DIV",{class:!0});var m=$(e);r&&r.l(m),s=V(m),l=d(m,"UL",{class:!0});var o=$(l);for(let h=0;h<i.length;h+=1)i[h].l(o);o.forEach(u),m.forEach(u),this.h()},h(){g(l,"class","links-list svelte-p7j97f"),g(e,"class","links")},m(f,m){I(f,e,m),r&&r.m(e,null),_(e,s),_(e,l);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(l,null);t=!0},p(f,[m]){if(f[0].length===0?r||(r=Z(),r.c(),r.m(e,s)):r&&(r.d(1),r=null),m&1){n=f[0];let o;for(o=0;o<n.length;o+=1){const h=Y(f,n,o);i[o]?(i[o].p(h,m),y(i[o],1)):(i[o]=ee(h),i[o].c(),y(i[o],1),i[o].m(l,null))}for(K(),o=n.length;o<i.length;o+=1)a(o);O()}},i(f){if(!t){for(let m=0;m<n.length;m+=1)y(i[m]);t=!0}},o(f){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)D(i[m]);t=!1},d(f){f&&u(e),r&&r.d(),W(i,f)}}}function pe(c,e,s){let{links:l=[]}=e;return c.$$set=t=>{"links"in t&&s(0,l=t.links)},[l]}class de extends M{constructor(e){super(),R(this,e,pe,me,J,{links:0})}}function ve(c){let e=c[0].name+"",s;return{c(){s=H(e)},l(l){s=P(l,e)},m(l,t){I(l,s,t)},p(l,t){t&1&&e!==(e=l[0].name+"")&&N(s,e)},d(l){l&&u(s)}}}function ge(c){let e=c[0].name+"",s,l,t=c[0].level+"",r;return{c(){s=H(e),l=S(),r=H(t)},l(n){s=P(n,e),l=V(n),r=P(n,t)},m(n,i){I(n,s,i),I(n,l,i),I(n,r,i)},p(n,i){i&1&&e!==(e=n[0].name+"")&&N(s,e),i&1&&t!==(t=n[0].level+"")&&N(r,t)},d(n){n&&u(s),n&&u(l),n&&u(r)}}}function $e(c){let e;function s(r,n){return r[0].level?ge:ve}let l=s(c),t=l(c);return{c(){e=p("div"),t.c(),this.h()},l(r){e=d(r,"DIV",{class:!0});var n=$(e);t.l(n),n.forEach(u),this.h()},h(){g(e,"class","skill svelte-111w1qk")},m(r,n){I(r,e,n),t.m(e,null)},p(r,[n]){l===(l=s(r))&&t?t.p(r,n):(t.d(1),t=l(r),t&&(t.c(),t.m(e,null)))},i:A,o:A,d(r){r&&u(e),t.d()}}}function ke(c,e,s){let{skill:l}=e;return c.$$set=t=>{"skill"in t&&s(0,l=t.skill)},[l]}class be extends M{constructor(e){super(),R(this,e,ke,$e,J,{skill:0})}}function te(c,e,s){const l=c.slice();return l[2]=e[s],l}function Ee(c){let e,s,l=c[1],t=[];for(let n=0;n<l.length;n+=1)t[n]=le(te(c,l,n));const r=n=>D(t[n],1,1,()=>{t[n]=null});return{c(){e=p("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=d(n,"UL",{class:!0});var i=$(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(u),this.h()},h(){g(e,"class","skills-list svelte-1va1vgz")},m(n,i){I(n,e,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);s=!0},p(n,i){if(i&2){l=n[1];let a;for(a=0;a<l.length;a+=1){const f=te(n,l,a);t[a]?(t[a].p(f,i),y(t[a],1)):(t[a]=le(f),t[a].c(),y(t[a],1),t[a].m(e,null))}for(K(),a=l.length;a<t.length;a+=1)r(a);O()}},i(n){if(!s){for(let i=0;i<l.length;i+=1)y(t[i]);s=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)D(t[i]);s=!1},d(n){n&&u(e),W(t,n)}}}function ye(c){let e,s;return{c(){e=p("p"),s=H("There are no skills to show")},l(l){e=d(l,"P",{});var t=$(e);s=P(t,"There are no skills to show"),t.forEach(u)},m(l,t){I(l,e,t),_(e,s)},p:A,i:A,o:A,d(l){l&&u(e)}}}function le(c){let e,s,l,t;return s=new be({props:{skill:c[2]}}),{c(){e=p("li"),C(s.$$.fragment),l=S(),this.h()},l(r){e=d(r,"LI",{class:!0});var n=$(e);U(s.$$.fragment,n),l=V(n),n.forEach(u),this.h()},h(){g(e,"class","skill")},m(r,n){I(r,e,n),j(s,e,null),_(e,l),t=!0},p(r,n){const i={};n&2&&(i.skill=r[2]),s.$set(i)},i(r){t||(y(s.$$.fragment,r),t=!0)},o(r){D(s.$$.fragment,r),t=!1},d(r){r&&u(e),T(s)}}}function Ie(c){let e,s,l,t,r,n,i;const a=[ye,Ee],f=[];function m(o,h){return o[1].length===0?0:1}return r=m(c),n=f[r]=a[r](c),{c(){e=p("div"),s=p("h1"),l=H(c[0]),t=S(),n.c(),this.h()},l(o){e=d(o,"DIV",{class:!0});var h=$(e);s=d(h,"H1",{class:!0});var k=$(s);l=P(k,c[0]),k.forEach(u),t=V(h),n.l(h),h.forEach(u),this.h()},h(){g(s,"class","skills-title svelte-1va1vgz"),g(e,"class","skills")},m(o,h){I(o,e,h),_(e,s),_(s,l),_(e,t),f[r].m(e,null),i=!0},p(o,[h]){(!i||h&1)&&N(l,o[0]);let k=r;r=m(o),r===k?f[r].p(o,h):(K(),D(f[k],1,1,()=>{f[k]=null}),O(),n=f[r],n?n.p(o,h):(n=f[r]=a[r](o),n.c()),y(n,1),n.m(e,null))},i(o){i||(y(n),i=!0)},o(o){D(n),i=!1},d(o){o&&u(e),f[r].d()}}}function xe(c,e,s){let{title:l="Skills title"}=e,{skills:t=[]}=e;return c.$$set=r=>{"title"in r&&s(0,l=r.title),"skills"in r&&s(1,t=r.skills)},[l,t]}class Q extends M{constructor(e){super(),R(this,e,xe,Ie,J,{title:0,skills:1})}}function De(c){let e,s,l,t=c[0].position+"",r,n,i,a=c[0].company+"",f,m,o,h,k=c[0].date+"",L;return{c(){e=p("div"),s=p("div"),l=p("h2"),r=H(t),n=S(),i=p("h3"),f=H(a),m=S(),o=p("div"),h=p("span"),L=H(k),this.h()},l(b){e=d(b,"DIV",{slot:!0});var E=$(e);s=d(E,"DIV",{});var q=$(s);l=d(q,"H2",{class:!0});var x=$(l);r=P(x,t),x.forEach(u),n=V(q),i=d(q,"H3",{class:!0});var w=$(i);f=P(w,a),w.forEach(u),q.forEach(u),m=V(E),o=d(E,"DIV",{});var v=$(o);h=d(v,"SPAN",{class:!0});var z=$(h);L=P(z,k),z.forEach(u),v.forEach(u),E.forEach(u),this.h()},h(){g(l,"class","position svelte-1bohrup"),g(i,"class","company svelte-1bohrup"),g(h,"class","date"),g(e,"slot","card-header")},m(b,E){I(b,e,E),_(e,s),_(s,l),_(l,r),_(s,n),_(s,i),_(i,f),_(e,m),_(e,o),_(o,h),_(h,L)},p(b,E){E&1&&t!==(t=b[0].position+"")&&N(r,t),E&1&&a!==(a=b[0].company+"")&&N(f,a),E&1&&k!==(k=b[0].date+"")&&N(L,k)},d(b){b&&u(e)}}}function we(c){let e,s=c[0].description+"",l;return{c(){e=p("p"),l=H(s),this.h()},l(t){e=d(t,"P",{slot:!0});var r=$(e);l=P(r,s),r.forEach(u),this.h()},h(){g(e,"slot","card-body")},m(t,r){I(t,e,r),_(e,l)},p(t,r){r&1&&s!==(s=t[0].description+"")&&N(l,s)},d(t){t&&u(e)}}}function Se(c){let e,s;return e=new ae({props:{$$slots:{"card-body":[we],"card-header":[De]},$$scope:{ctx:c}}}),{c(){C(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,t){j(e,l,t),s=!0},p(l,[t]){const r={};t&3&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(y(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){T(e,l)}}}function Ve(c,e,s){let{experienceItem:l}=e;return c.$$set=t=>{"experienceItem"in t&&s(0,l=t.experienceItem)},[l]}class Le extends M{constructor(e){super(),R(this,e,Ve,Se,J,{experienceItem:0})}}function se(c,e,s){const l=c.slice();return l[2]=e[s],l}function He(c){let e,s,l=c[1],t=[];for(let n=0;n<l.length;n+=1)t[n]=ne(se(c,l,n));const r=n=>D(t[n],1,1,()=>{t[n]=null});return{c(){e=p("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=d(n,"UL",{class:!0});var i=$(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(u),this.h()},h(){g(e,"class","experience-list svelte-zfub5q")},m(n,i){I(n,e,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);s=!0},p(n,i){if(i&2){l=n[1];let a;for(a=0;a<l.length;a+=1){const f=se(n,l,a);t[a]?(t[a].p(f,i),y(t[a],1)):(t[a]=ne(f),t[a].c(),y(t[a],1),t[a].m(e,null))}for(K(),a=l.length;a<t.length;a+=1)r(a);O()}},i(n){if(!s){for(let i=0;i<l.length;i+=1)y(t[i]);s=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)D(t[i]);s=!1},d(n){n&&u(e),W(t,n)}}}function Pe(c){let e,s;return{c(){e=p("p"),s=H("No experience yet")},l(l){e=d(l,"P",{});var t=$(e);s=P(t,"No experience yet"),t.forEach(u)},m(l,t){I(l,e,t),_(e,s)},p:A,i:A,o:A,d(l){l&&u(e)}}}function ne(c){let e,s,l,t;return s=new Le({props:{experienceItem:c[2]}}),{c(){e=p("li"),C(s.$$.fragment),l=S(),this.h()},l(r){e=d(r,"LI",{class:!0});var n=$(e);U(s.$$.fragment,n),l=V(n),n.forEach(u),this.h()},h(){g(e,"class","experience-item svelte-zfub5q")},m(r,n){I(r,e,n),j(s,e,null),_(e,l),t=!0},p(r,n){const i={};n&2&&(i.experienceItem=r[2]),s.$set(i)},i(r){t||(y(s.$$.fragment,r),t=!0)},o(r){D(s.$$.fragment,r),t=!1},d(r){r&&u(e),T(s)}}}function qe(c){let e,s,l,t,r,n,i;const a=[Pe,He],f=[];function m(o,h){return o[1].length===0?0:1}return r=m(c),n=f[r]=a[r](c),{c(){e=p("div"),s=p("h1"),l=H(c[0]),t=S(),n.c(),this.h()},l(o){e=d(o,"DIV",{class:!0});var h=$(e);s=d(h,"H1",{class:!0});var k=$(s);l=P(k,c[0]),k.forEach(u),t=V(h),n.l(h),h.forEach(u),this.h()},h(){g(s,"class","experience-title"),g(e,"class","experience")},m(o,h){I(o,e,h),_(e,s),_(s,l),_(e,t),f[r].m(e,null),i=!0},p(o,[h]){(!i||h&1)&&N(l,o[0]);let k=r;r=m(o),r===k?f[r].p(o,h):(K(),D(f[k],1,1,()=>{f[k]=null}),O(),n=f[r],n?n.p(o,h):(n=f[r]=a[r](o),n.c()),y(n,1),n.m(e,null))},i(o){i||(y(n),i=!0)},o(o){D(n),i=!1},d(o){o&&u(e),f[r].d()}}}function Be(c,e,s){let{title:l="Experience title"}=e,{experience:t=[]}=e;return c.$$set=r=>{"title"in r&&s(0,l=r.title),"experience"in r&&s(1,t=r.experience)},[l,t]}class ze extends M{constructor(e){super(),R(this,e,Be,qe,J,{title:0,experience:1})}}function Ne(c){let e,s,l,t=c[0].name+"",r,n,i,a=c[0].position+"",f,m,o,h,k,L,b,E=c[0].description+"",q;return{c(){e=p("div"),s=p("div"),l=p("h1"),r=H(t),n=S(),i=p("h2"),f=H(a),m=S(),o=p("div"),h=p("h1"),k=H("About me"),L=S(),b=p("p"),q=H(E),this.h()},l(x){e=d(x,"DIV",{class:!0});var w=$(e);s=d(w,"DIV",{class:!0});var v=$(s);l=d(v,"H1",{class:!0});var z=$(l);r=P(z,t),z.forEach(u),n=V(v),i=d(v,"H2",{class:!0});var B=$(i);f=P(B,a),B.forEach(u),v.forEach(u),m=V(w),o=d(w,"DIV",{class:!0});var F=$(o);h=d(F,"H1",{class:!0});var G=$(h);k=P(G,"About me"),G.forEach(u),L=V(F),b=d(F,"P",{class:!0});var X=$(b);q=P(X,E),X.forEach(u),F.forEach(u),w.forEach(u),this.h()},h(){g(l,"class","name svelte-18hr349"),g(i,"class","position svelte-18hr349"),g(s,"class","header svelte-18hr349"),g(h,"class","summary-header"),g(b,"class","summary-description"),g(o,"class","summary svelte-18hr349"),g(e,"class","bio")},m(x,w){I(x,e,w),_(e,s),_(s,l),_(l,r),_(s,n),_(s,i),_(i,f),_(e,m),_(e,o),_(o,h),_(h,k),_(o,L),_(o,b),_(b,q)},p(x,[w]){w&1&&t!==(t=x[0].name+"")&&N(r,t),w&1&&a!==(a=x[0].position+"")&&N(f,a),w&1&&E!==(E=x[0].description+"")&&N(q,E)},i:A,o:A,d(x){x&&u(e)}}}function Ae(c,e,s){let{bio:l}=e;return c.$$set=t=>{"bio"in t&&s(0,l=t.bio)},[l]}class Ce extends M{constructor(e){super(),R(this,e,Ae,Ne,J,{bio:0})}}const Ue=""+new URL("../assets/img.c3a3e075.png",import.meta.url).href;function je(c){let e,s,l,t,r,n,i,a,f,m,o,h,k,L,b,E,q,x,w;return n=new de({props:{links:ce}}),a=new Q({props:{title:"Soft Skills",skills:oe}}),m=new Q({props:{title:"Hard Skills",skills:fe}}),h=new Q({props:{title:"Languages",skills:ue}}),E=new Ce({props:{bio:he}}),x=new ze({props:{title:"Experience",experience:_e}}),{c(){e=p("div"),s=p("div"),l=p("img"),r=S(),C(n.$$.fragment),i=S(),C(a.$$.fragment),f=S(),C(m.$$.fragment),o=S(),C(h.$$.fragment),k=S(),L=p("div"),b=p("div"),C(E.$$.fragment),q=S(),C(x.$$.fragment),this.h()},l(v){e=d(v,"DIV",{id:!0,class:!0});var z=$(e);s=d(z,"DIV",{class:!0});var B=$(s);l=d(B,"IMG",{src:!0,alt:!0,class:!0}),r=V(B),U(n.$$.fragment,B),i=V(B),U(a.$$.fragment,B),f=V(B),U(m.$$.fragment,B),o=V(B),U(h.$$.fragment,B),B.forEach(u),z.forEach(u),k=V(v),L=d(v,"DIV",{id:!0,class:!0});var F=$(L);b=d(F,"DIV",{class:!0});var G=$(b);U(E.$$.fragment,G),q=V(G),U(x.$$.fragment,G),G.forEach(u),F.forEach(u),this.h()},h(){re(l.src,t=Ue)||g(l,"src",t),g(l,"alt","Profile"),g(l,"class","svelte-1ssrafo"),g(s,"class","content svelte-1ssrafo"),g(e,"id","left"),g(e,"class","svelte-1ssrafo"),g(b,"class","content svelte-1ssrafo"),g(L,"id","right"),g(L,"class","svelte-1ssrafo")},m(v,z){I(v,e,z),_(e,s),_(s,l),_(s,r),j(n,s,null),_(s,i),j(a,s,null),_(s,f),j(m,s,null),_(s,o),j(h,s,null),I(v,k,z),I(v,L,z),_(L,b),j(E,b,null),_(b,q),j(x,b,null),w=!0},p:A,i(v){w||(y(n.$$.fragment,v),y(a.$$.fragment,v),y(m.$$.fragment,v),y(h.$$.fragment,v),y(E.$$.fragment,v),y(x.$$.fragment,v),w=!0)},o(v){D(n.$$.fragment,v),D(a.$$.fragment,v),D(m.$$.fragment,v),D(h.$$.fragment,v),D(E.$$.fragment,v),D(x.$$.fragment,v),w=!1},d(v){v&&u(e),T(n),T(a),T(m),T(h),v&&u(k),v&&u(L),T(E),T(x)}}}class Re extends M{constructor(e){super(),R(this,e,null,je,J,{})}}export{Re as default};
