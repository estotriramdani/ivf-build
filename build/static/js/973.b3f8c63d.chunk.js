"use strict";(self.webpackChunkipb_virtual_fair=self.webpackChunkipb_virtual_fair||[]).push([[973],{5814:function(e,i,n){n.d(i,{Z:function(){return l}});var a=n(184);function l(e){var i=e.title;return(0,a.jsx)("h2",{className:"mb-7 mt-7 text-center font-primary text-3xl font-semibold text-ivfPurple",children:i})}},6691:function(e,i,n){var a=n(8693),l=n(184),s={initial:{opacity:.5,x:50},animate:{opacity:1,x:0},exit:{opacity:.5,x:-50}};i.Z=function(e){var i=e.children;return(0,l.jsx)(a.E.div,{variants:s,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:i})}},9260:function(e,i,n){n.d(i,{Z:function(){return t}});var a=n(184),l=[{id:1,link:"https://facebook.com",name:"facebook"},{id:2,link:"https://twitter.com",name:"twitter"},{id:3,link:"https://instagram.com",name:"instagram"},{id:4,link:"https://whatsapp.com",name:"whatsapp"}],s=(new Date).getFullYear();function t(e){e.isEmployer;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("footer",{className:"mt-10 flex flex-col justify-between overflow-x-hidden rounded-t-xl bg-ivfPurple2  p-6 font-primary lg:flex-row lg:rounded-t-3xl lg:p-12",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-5 lg:flex-row",children:[(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("img",{src:"/img/logos/logo-ipb.png",alt:"logo ipb",className:"h-28 w-28"}),(0,a.jsx)("img",{src:"/img/logos/logo-cda.png",alt:"logo cda",className:"w-30 h-28"})]}),(0,a.jsxs)("div",{className:"text-white",children:[(0,a.jsx)("p",{children:"Gedung Andi Hakim Nasoetion Lt. 1 Kampus IPB Dramaga"}),(0,a.jsx)("p",{children:"Kabupaten Bogor Jawa Barat 16680"}),(0,a.jsx)("p",{children:"0251-8423507"}),(0,a.jsx)("p",{children:"cda@apps.ipb.ac.id (Jobseeker)"}),(0,a.jsx)("p",{children:"cdaipb@apps.ipb.ac.id (Companies)"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{className:"mt-3 flex gap-3 lg:mt-0",children:l.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.link,className:"text-4xl text-white hover:text-white/75",children:(0,a.jsx)("i",{className:"bi bi-".concat(e.name)})})},e.id)}))})})]}),(0,a.jsxs)("div",{className:"flex justify-center gap-1 bg-ivfPurple2 p-2 text-center text-white",children:[(0,a.jsx)("span",{children:"\xa9 Copyright"}),(0,a.jsx)("span",{children:s}),(0,a.jsx)("span",{children:"CDA IPB. All Rights Reserved."})]})]})}},5973:function(e,i,n){n.r(i),n.d(i,{default:function(){return y}});var a=n(885),l=n(2791),s=n(4270),t=n(4546),r=n(1845),c=n(3738),o=n(8173),d=n(5814),x=n(8009),m=n(6691),h=n(184);function p(e){var i=e.children,n=e.className;return(0,h.jsx)("div",{className:"".concat(n||""," px-6 lg:px-24"),children:i})}var u=n(9260),f=n(2759),j=n(7506);function v(e){var i=e.company;return(0,h.jsxs)("div",{className:"mt-2 flex flex-col gap-4 md:flex-row",children:[(0,h.jsx)("img",{src:i.image,className:"mx-auto block w-full rounded-lg border md:w-36",alt:i.name}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{className:"text-2xl font-semibold",children:i.name}),(0,h.jsx)("p",{children:i.address})]})]})}function b(e){var i=e.vacancy,n=e.index;return(0,h.jsxs)("li",{className:"mb-2 flex items-center justify-between border-b border-primary/50 px-2 pb-2 hover:border-b-2 hover:border-primary",children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{className:"mr-2 inline-block font-mono",children:n}),(0,h.jsx)("span",{children:null===i||void 0===i?void 0:i.title})]}),(0,h.jsx)("span",{children:(0,h.jsx)(j.Z,{href:null===i||void 0===i?void 0:i.link,isNativeAnchor:!0,color:"warning",display:"block",className:"flex-shrink-0 text-gray-800",children:"Lamar"})})]})}function g(e){var i,n=e.company;return(0,h.jsx)("ol",{children:null===n||void 0===n||null===(i=n.vacancies)||void 0===i?void 0:i.map((function(e,i){return(0,h.jsx)(b,{index:i+1,vacancy:e},e.id)}))})}function w(e){var i=e.company;return(0,h.jsxs)("div",{className:"mb-5 w-full font-primary lg:mb-10",children:[(0,h.jsxs)("div",{className:"flex flex-col justify-between lg:flex-row",children:[(0,h.jsx)(v,{company:i}),(0,h.jsx)("div",{children:(0,h.jsx)(j.Z,{display:"block",href:"/booth/".concat(i.id),className:"mt-3 text-white lg:mt-0",isNativeAnchor:!0,target:"_self",children:"Company Booth"})})]}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)(g,{company:i})})]})}function y(){var e=(0,l.useState)(1),i=(0,a.Z)(e,2),n=i[0],j=i[1],v=t.Z.filter((function(e){return e.vacancies&&"blankCompany"!==e.id})),b=(0,r.Hw)(v,10,n),g=Math.ceil(v.length/10);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.q,{children:(0,h.jsx)("title",{children:(0,c.u)("Vacancy List")})}),(0,h.jsx)(f.Z,{active:"/vacancy"}),(0,h.jsx)(x.Z,{}),(0,h.jsx)("main",{className:"min-h-screen",children:(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(d.Z,{title:"Vacancy List"}),(0,h.jsxs)(p,{className:"mt-4 lg:mt-9",children:[b.map((function(e,i){return(0,h.jsx)(w,{company:e},i)})),(0,h.jsxs)("div",{className:"flex justify-center gap-3",children:[(0,h.jsx)(o.Z,{display:"inline-block",onClick:function(){1!==n&&(window.scroll({behavior:"smooth",top:0}),j(n-1))},className:"text-white",disabled:1===n,children:"Prev"}),Array(g).fill(0).map((function(e,i){return(0,h.jsx)(o.Z,{display:"inline-block",onClick:function(){return j(i+1),void window.scroll({behavior:"smooth",top:0})},className:"text-white",disabled:n===i+1,children:i+1})})),(0,h.jsx)(o.Z,{display:"inline-block",onClick:function(){n!==g&&(window.scroll({behavior:"smooth",top:0}),j(n+1))},className:"text-white",disabled:n===g,children:"Next"})]})]})]})}),(0,h.jsx)(u.Z,{isEmployer:!1})]})}}}]);
//# sourceMappingURL=973.b3f8c63d.chunk.js.map