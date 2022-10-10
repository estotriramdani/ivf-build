"use strict";(self.webpackChunkipb_virtual_fair=self.webpackChunkipb_virtual_fair||[]).push([[518],{5814:function(a,e,i){i.d(e,{Z:function(){return n}});var t=i(184);function n(a){var e=a.title;return(0,t.jsx)("h2",{className:"mb-7 mt-7 text-center font-primary text-3xl font-semibold text-ivfPurple",children:e})}},6691:function(a,e,i){var t=i(8693),n=i(184),r={initial:{opacity:.5,x:50},animate:{opacity:1,x:0},exit:{opacity:.5,x:-50}};e.Z=function(a){var e=a.children;return(0,n.jsx)(t.E.div,{variants:r,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:e})}},9260:function(a,e,i){i.d(e,{Z:function(){return s}});var t=i(184),n=[{id:1,link:"https://facebook.com",name:"facebook"},{id:2,link:"https://twitter.com",name:"twitter"},{id:3,link:"https://instagram.com",name:"instagram"},{id:4,link:"https://whatsapp.com",name:"whatsapp"}],r=(new Date).getFullYear();function s(a){a.isEmployer;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("footer",{className:"mt-10 flex flex-col justify-between overflow-x-hidden rounded-t-xl bg-jobfairYellow-2 p-6 font-primary lg:rounded-t-3xl xl:bg-jobfairBlue-2 lg:p-12 xl:flex-row",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-5 lg:flex-row",children:[(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)("img",{src:"/img/logos/logo-ipb.png",alt:"logo ipb",className:"h-20 w-20 md:h-28 md:w-28"}),(0,t.jsx)("img",{src:"/img/logos/logo-cda.png",alt:"logo cda",className:"h-20 md:h-28"})]}),(0,t.jsxs)("div",{className:"text-white",children:[(0,t.jsx)("p",{children:"Gedung Andi Hakim Nasoetion Lt. 1 Kampus IPB Dramaga"}),(0,t.jsx)("p",{children:"Kabupaten Bogor Jawa Barat 16680"}),(0,t.jsx)("p",{children:"0251-8423507"}),(0,t.jsx)("p",{children:"cda@apps.ipb.ac.id (Jobseeker)"}),(0,t.jsx)("p",{children:"cdaipb@apps.ipb.ac.id (Companies)"})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"mt-3 flex gap-3 xl:mt-0",children:n.map((function(a){return(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:a.link,className:"text-4xl text-white hover:text-white/75",children:(0,t.jsx)("i",{className:"bi bi-".concat(a.name)})})},a.id)}))})})]}),(0,t.jsxs)("div",{className:"flex justify-center gap-1 bg-jobfairYellow-2 p-2 text-center text-white xl:bg-jobfairBlue-2",children:[(0,t.jsx)("span",{children:"\xa9 Copyright"}),(0,t.jsx)("span",{children:r}),(0,t.jsx)("span",{children:"CDA IPB. All Rights Reserved."})]})]})}},9518:function(a,e,i){i.r(e),i.d(e,{default:function(){return w}});var t=i(885),n=i(2982),r=i(2791),s=i(4270),o=[{id:Math.random()*Math.random(),date:"2022-10-17",time:"19.30 - 21.00",link:"https://cda.ipb.ac.id/eventlist/site/view/91",title:"Personal Understanding, target karir & Personal Branding Media Sosial",location:"Zoom",speaker:{name:"Nur Fajri Rahmawati dan Yusuf Bachtiar",photo:"/img/logos/logo-cda.png",profession:"",company:"CDA IPB"}},{id:Math.random()*Math.random(),date:"2022-10-18",time:"19.30 - 21.00",link:"https://cda.ipb.ac.id/eventlist/site/view/91",title:"CV, Interview dan FGD",location:"Zoom",speaker:{name:"Nur Fajri Rahmawati",photo:"/img/logos/logo-cda.png",profession:"",company:"CDA IPB"}},{id:Math.random()*Math.random(),date:"2022-10-19",time:"19.30 - 21.00",link:"https://cda.ipb.ac.id/eventlist/site/view/91",title:"Management Trainee",location:"Zoom",speaker:{name:"Aditiyo Indrasanto",photo:"/img/logos/sekolah-karir.png",profession:"Founder Komunitas Sekolah Karir, Ex Profesional Multinational Company",company:"Sekolah Karir"}},{id:Math.random()*Math.random(),date:"2022-10-24",time:"09.00 - 11.30",link:"https://cda.ipb.ac.id/eventlist/site/view/91",title:"Seni Wawancara Kerja & Menghadapi FGD & LGD (sesi dengan simulasi langsung)",location:"Zoom",speaker:{name:"Aditiyo Indrasanto",photo:"/img/logos/sekolah-karir.png",profession:"Founder Komunitas Sekolah Karir, Ex Profesional Multinational Company",company:"Sekolah Karir"}}],l=i(3738),c=i(6538),d=i(5814),m=i(8009),p=i(6691),x=i(9260),h=i(2759),u=i(8173),g=i(3925),f=i(184);function j(a){var e=a.availableDates,i=a.activeFilter,t=a.setActiveFilter;return(0,f.jsx)("section",{className:"mb-5 px-6 lg:px-24",children:(0,f.jsx)("div",{className:"flex flex-wrap gap-3 overflow-auto",children:e.map((function(a){return(0,f.jsx)(u.Z,{onClick:function(){return t(a)},display:"block",color:i===a?"primary":"transparent",className:"".concat(i===a?"text-white":"border-jobfairBlue-1 text-jobfairBlue-1 border"," flex-shrink-0"),children:(0,f.jsx)(g.Z,{date:a,noNeedTime:!0})},Math.random())}))})})}var v=i(5509);function b(a){var e=a.activeFilter,i=a.webinarList.filter((function(a){return a.date===e}));return(0,f.jsx)("section",{className:"px-6 lg:px-24",children:(0,f.jsx)("div",{className:"mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:i.map((function(a){return(0,f.jsx)(v.Z,{ctaColor:"primary",webinarCard:a},a.id*Math.random())}))})})}var w=function(){var a=o.map((function(a){return a.date})),e=(0,n.Z)(new Set(a)).sort(),i=(0,r.useState)(e[0]||""),u=(0,t.Z)(i,2),g=u[0],v=u[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.q,{children:(0,f.jsx)("title",{children:(0,l.u)("IJF Academy")})}),(0,f.jsx)(h.Z,{active:"/ijf-academy"}),(0,f.jsx)(m.Z,{}),(0,f.jsxs)("main",{children:[(0,f.jsxs)(p.Z,{children:[(0,f.jsx)(c.Z,{className:"h-6"}),(0,f.jsx)(d.Z,{title:"IJF Academy"}),(0,f.jsx)(j,{activeFilter:g,availableDates:e,setActiveFilter:v}),(0,f.jsx)(b,{activeFilter:g,webinarList:o})]}),(0,f.jsx)(x.Z,{isEmployer:!1})]})]})}}}]);
//# sourceMappingURL=518.820712a7.chunk.js.map