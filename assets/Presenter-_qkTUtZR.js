import{o as i,e as _,f as e,d as A,b as k,p as $,q as h,s as C,_ as Z,v as y,w as D,x as F,c as N,a as I,y as R,z as M,A as E,B as q,C as O,D as U,E as W,G,H as X,I as J,J as K,K as Q,L as Y,M as ee,g as t,N as te,l as o,t as se,n as p,i as V,O as P,S as B,m as S,P as oe,Q as H,R as L,T as ne,j as le,U as b,V as ae,W as ie,F as re,X as ce,Y as ue,Z as de,$ as T,a0 as _e,a1 as ve,a2 as me,a3 as pe}from"./index-Avjr5li6.js";import{N as he}from"./NoteDisplay-I_rx5Jnn.js";import fe from"./DrawingControls-pM-tzBGQ.js";const ge={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ye=[xe,we];function Se(l,r){return i(),_("svg",ge,[...ye])}const be={name:"carbon-zoom-out",render:Se},ke={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$e=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),Ce=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ze=[$e,Ce];function Ne(l,r){return i(),_("svg",ke,[...ze])}const Me={name:"carbon-zoom-in",render:Ne},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Be=[Pe];function He(l,r){return i(),_("svg",Ve,[...Be])}const Le={name:"carbon-renew",render:He},Te={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ae=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ze=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),je=[Ae,Ze];function De(l,r){return i(),_("svg",Te,[...je])}const Fe={name:"carbon-time",render:De},Ie="/javadoc/assets/logo-title-horizontal-XSaaVPPu.png",Re=A({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=k(()=>{var c,u,n;return(n=(u=(c=$.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=k(()=>{var c,u,n;return(n=(u=(c=$.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(i(),h(he,{class:C(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),Ee=Z(Re,[["__file","/home/runner/work/javadoc/javadoc/node_modules/.pnpm/@slidev+client@0.45.0_postcss@8.4.32_vite@5.0.7/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(me("data-v-2115f18a"),l=l(),pe(),l),qe={class:"bg-main h-full slidev-presenter"},Oe={class:"grid-section top flex"},Ue=f(()=>e("img",{src:Ie,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),We=f(()=>e("div",{class:"flex-auto"},null,-1)),Ge={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Xe=f(()=>e("div",{class:"context"}," current ",-1)),Je=f(()=>e("div",{class:"context"}," next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Qe={class:"border-t border-main py-1 px-2 text-sm"},Ye={class:"grid-section bottom"},et={class:"progress-bar"},tt=A({__name:"Presenter",setup(l){const r=y();D(),F(r);const g=N.titleTemplate.replace("%s",N.title||"Slidev");I({title:`Presenter - ${g}`}),y(!1);const{timer:x,resetTimer:c}=R(),u=y([]),n=k(()=>M.value<E.value?{route:$.value,clicks:M.value+1}:q.value?{route:O.value,clicks:0}:null);return U(),W(()=>{const z=r.value.querySelector("#slide-content"),s=G(X()),w=J();K(()=>{if(!w.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),v=(s.x-d.left)/d.width*100,m=(s.y-d.top)/d.height*100;if(!(v<0||v>100||m<0||m>100))return{x:v,y:m}},d=>{Q.cursor=d})}),(z,s)=>{const w=Fe,d=Le,v=Me,m=be;return i(),_(re,null,[e("div",qe,[e("div",{class:C(["grid-container",`layout${t(te)}`])},[e("div",Oe,[Ue,We,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...a)=>t(c)&&t(c)(...a))},[o(w,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Ge,se(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:p(t(V))},[o(B,{key:"main",class:"h-full w-full"},{default:P(()=>[o(ce,{"render-context":"presenter"})]),_:1}),Xe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:p(t(V))},[n.value?(i(),h(B,{key:"next",class:"h-full w-full"},{default:P(()=>{var a;return[o(t(de),{is:(a=n.value.route)==null?void 0:a.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=j=>u.value=j),clicks:n.value.clicks,"clicks-disabled":!1,class:C(t(ue)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):S("v-if",!0),Je],4),S(" Notes "),(i(),_("div",Ke,[(i(),h(Ee,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:p({fontSize:`${t(oe)}em`})},null,8,["style"])),e("div",Qe,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...a)=>t(H)&&t(H)(...a))},[o(T,{text:"Increase font size"}),o(v)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...a)=>t(L)&&t(L)(...a))},[o(T,{text:"Decrease font size"}),o(m)]),S("v-if",!0)])])),e("div",Ye,[o(_e,{persist:!0})]),(i(),h(fe,{key:2}))],2),e("div",et,[e("div",{class:"progress h-2px bg-primary transition-all",style:p({width:`${(t(ne)-1)/(t(le)-1)*100}%`})},null,4)])]),o(ve),o(ie,{modelValue:t(b),"onUpdate:modelValue":s[5]||(s[5]=a=>ae(b)?b.value=a:null)},null,8,["modelValue"])],64)}}}),lt=Z(tt,[["__scopeId","data-v-2115f18a"],["__file","/home/runner/work/javadoc/javadoc/node_modules/.pnpm/@slidev+client@0.45.0_postcss@8.4.32_vite@5.0.7/node_modules/@slidev/client/internals/Presenter.vue"]]);export{lt as default};
