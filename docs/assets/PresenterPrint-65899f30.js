import{d,u as _,a as u,c as m,b as p,r as h,e as s,f as t,t as a,g as n,F as f,h as g,n as v,i as x,o as r,j as b,k as y,l as N,m as k,_ as P}from"./index-cd680699.js";import{N as S}from"./NoteDisplay-14e2b18c.js";const w={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),s("div",{id:"page-root",style:v(n(x))},[t("div",w,[t("div",V,[t("h1",L,a(n(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(r(!0),s(f,null,g(i.value,(e,c)=>(r(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(n(b)),1),y(" "+a(e==null?void 0:e.title)+" ",1),j])]),N(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(r(),s("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/home/barais/git/gradeScope/tutorielSlides/correctexamtutorial/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
