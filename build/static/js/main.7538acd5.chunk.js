(this.webpackJsonptrackerfront=this.webpackJsonptrackerfront||[]).push([[0],{127:function(e,a,t){e.exports=t.p+"static/media/logo.dc62b3fa.svg"},137:function(e,a,t){e.exports=t(247)},142:function(e,a,t){},247:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),i=(t(142),t(79),t(35)),o=t(6),m=t(10),s=t(23),d=t(266),h=t(269),u=t(273),E=t(272),p=t(268),f=t(270),b=t(271),v=t(248),j=t(278),g=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),textDecoration:"none",display:"block",textAlign:"center"}}}}));function O(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(i.b,{to:"/"},r.a.createElement(j.a,null,"Back To Home")))}var y=Object(d.a)({table:{width:"50%",margin:"0 auto"}}),k={width:"80%",height:"300px",margin:"0 auto"};var w=function(e){var a=Object(n.useState)(e.title),t=Object(m.a)(a,2),c=t[0],l=(t[1],Object(n.useState)({})),i=Object(m.a)(l,2),o=i[0],d=i[1],j=Object(n.useState)([]),g=Object(m.a)(j,2),w=g[0],x=g[1];Object(n.useEffect)((function(){fetch("https://api.covidindiatracker.com/state_data.json").then((function(e){return e.json()})).then((function(e){var a=[];e.map((function(e){e.state===c&&e.districtData.map((function(e){"Other-States"===e.id&&(e.id="Others"),a.push({id:e.id,confirmed:e.confirmed})}))})),x(a);var t=a.map((function(e){return e.id})),n=a.map((function(e){return e.confirmed}));console.log(),d({labels:t,datasets:[{label:"Cases in ".concat(c),data:n,borderColor:"red",hoverBorderColor:"green",fill:!1,backgroundColor:"red"}]})}))}),[]);var C=[];w.map((function(e){var a,t,n=(a=e.id,t=e.confirmed,{district:a,cases:t});C.push(n),console.log(n)}));var D=y();return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},c),r.a.createElement(p.a,{component:v.a},r.a.createElement(h.a,{className:D.table,"aria-label":"simple table"},r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(E.a,null,"District"),r.a.createElement(E.a,{align:"center"},"Confirmed Cases"))),r.a.createElement(u.a,null,C.map((function(e){return r.a.createElement(b.a,{key:e.district},r.a.createElement(E.a,null,e.district),r.a.createElement(E.a,{align:"center"},e.cases))}))))),r.a.createElement("div",{style:k},r.a.createElement(s.Bar,{data:o,options:{responsive:!0,maintainAspectRatio:!1}})),r.a.createElement(O,null))},x=t(274),C=t(277),D=t(275),M=t(276),S=function(e){var a;switch(e.title){case"Recovered":a="green";break;case"Confirmed Cases":a="red";break;case"Deaths":a="#d80000";break;default:a="black"}var t=Object(d.a)({root:{minWidth:200,maxHeight:1e3,margin:"10px auto",color:a,border:"1px solid black",boxShadow:"inset 0px 14px 50px -11px rgba(220,220,220,1)"},title:{fontSize:14,fontWeight:"bold",color:"black"},pos:{marginBottom:12}})();return r.a.createElement(x.a,{className:t.root},r.a.createElement(D.a,null,r.a.createElement(M.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.title),r.a.createElement(M.a,{variant:"h5",component:"h2"},e.val),r.a.createElement(M.a,{className:t.pos,color:"textSecondary"},e.plus,e.cc)),r.a.createElement(C.a,null))},A=t(9),N=t(22),P=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(N.useMediaQuery)({query:"(min-width: 1024px)"}),i={margin:"0 auto"};Object(N.useMediaQuery)({query:"(min-width: 768px)"})?i=Object(A.a)(Object(A.a)({},i),{},{width:"70%"}):l&&(i=Object(A.a)(Object(A.a)({},i),{},{width:"50%"}));return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/country/india").then((function(e){return e.json()})).then((function(e){var a={};e.map((function(e){var t=e.Date.slice(0,5)+e.Date.slice(5,7);a[t]=parseInt(e.Confirmed)})),c({labels:Object.keys(a),datasets:[{label:"Confirmed Cases",data:Object.values(a),fill:!1,borderColor:"red"}]})}))}),[]),r.a.createElement("div",{style:i},r.a.createElement(s.Line,{data:t,options:{responsive:!0,maintainAspectRatio:!0}}))},R=function(){var e=Object(N.useMediaQuery)({query:"(min-width: 1024px)"}),a={margin:"0 auto"};Object(N.useMediaQuery)({query:"(min-width: 768px)"})?a=Object(A.a)(Object(A.a)({},a),{},{width:"70%"}):e&&(a=Object(A.a)(Object(A.a)({},a),{},{width:"50%"}));var t=Object(n.useState)({}),c=Object(m.a)(t,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/country/india").then((function(e){return e.json()})).then((function(e){var a={};e.map((function(e){var t=e.Date.slice(0,5)+e.Date.slice(5,7);a[t]=parseInt(e.Recovered)})),i({labels:Object.keys(a),datasets:[{label:"Recovered",data:Object.values(a),fill:!1,borderColor:"green"}]})}))}),[]),r.a.createElement("div",{style:a},r.a.createElement(s.Line,{data:l,options:{responsive:!0,maintainAspectRatio:!0}}))},B=t(73),T=Object(B.a)((function(){var e=Object(N.useMediaQuery)({query:"(min-width: 1024px)"}),a={margin:"0 auto"};Object(N.useMediaQuery)({query:"(min-width: 768px)"})?a=Object(A.a)(Object(A.a)({},a),{},{width:"70%"}):e&&(a=Object(A.a)(Object(A.a)({},a),{},{width:"50%"}));var t=Object(n.useState)({}),c=Object(m.a)(t,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/country/india").then((function(e){return e.json()})).then((function(e){var a={};e.map((function(e){var t=e.Date.slice(0,5)+e.Date.slice(5,7);a[t]=parseInt(e.Deaths)})),i({labels:Object.keys(a),datasets:[{label:"Deaths",data:Object.values(a),fill:!1,borderColor:"#d80000"}]})}))}),[]),r.a.createElement("div",{style:a},r.a.createElement(s.Line,{data:l,options:{responsive:!0,maintainAspectRatio:!0}}))})),H=Object(d.a)({table:{width:"50%",margin:"0 auto"}}),I={textDecoration:"none",color:"blue"};function W(){var e=H(),a=Object(n.useState)([{}]),t=Object(m.a)(a,2),c=t[0],l=t[1],i=[];Object(n.useEffect)((function(){fetch("https://api.covidindiatracker.com/state_data.json").then((function(e){return e.json()})).then((function(e){e.map((function(e){i.push({state:e.state,confirmed:e.confirmed,deaths:e.deaths,recovered:e.recovered})})),l(i)}))}),[]);var o=[];return c.map((function(e){var a,t,n,r,c=(a=e.state,t=e.confirmed,n=e.deaths,r=e.recovered,{state:a,confirmed:t,deaths:n,recovered:r});o.push(c)})),r.a.createElement(p.a,{component:v.a},r.a.createElement(h.a,{className:e.table},r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(E.a,{align:"left"},"State"),r.a.createElement(E.a,{align:"center"},"Confirmed Cases"),r.a.createElement(E.a,{align:"center"},"Deaths"),r.a.createElement(E.a,{align:"center"},"Recovered"))),r.a.createElement(u.a,null,o.map((function(e){return r.a.createElement(b.a,{key:e.state+e.confirmed},r.a.createElement(E.a,{align:"left"},r.a.createElement("a",{style:I,href:"/".concat(e.state)},e.state)),r.a.createElement(E.a,{align:"center"}," ",e.confirmed," "),r.a.createElement(E.a,{align:"center"}," ",e.deaths," "),r.a.createElement(E.a,{align:"center"}," ",e.recovered," "))})))))}var q=t(127),J=t.n(q),K={height:"90%",width:"90vw",margin:"0 auto",marginTop:"100px"},Q=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){fetch("https://api.covidindiatracker.com/total.json").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("img",{src:J.a,alt:"logo",style:{width:"50%",padding:"50px"}})),r.a.createElement("div",{className:"App",style:{display:"flex",marginRight:"0",flexWrap:"wrap"}},r.a.createElement(S,{val:t.confirmed,cc:t.cChanges,plus:"+",title:"Confirmed Cases"}),r.a.createElement(S,{val:t.active,title:"Active Cases"}),r.a.createElement(S,{val:t.deaths,cc:t.dChanges,plus:"+",title:"Deaths"}),r.a.createElement(S,{val:t.recovered,cc:t.rChanges,plus:"+",title:"Recovered"})),r.a.createElement("div",{style:K},r.a.createElement(P,null),r.a.createElement(R,null),r.a.createElement(T,null)),r.a.createElement(W,null))},L=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/Covid-Tracker_India/",component:Q}),r.a.createElement(o.a,{path:"/Maharashtra"},r.a.createElement(w,{title:"Maharashtra"})),r.a.createElement(o.a,{path:"/Tamil Nadu"},r.a.createElement(w,{title:"Tamil Nadu"})),r.a.createElement(o.a,{path:"/Andhra Pradesh"},r.a.createElement(w,{title:"Andhra Pradesh"})),r.a.createElement(o.a,{path:"/Karnataka"},r.a.createElement(w,{title:"Karnataka"})),r.a.createElement(o.a,{path:"/Delhi"},r.a.createElement(w,{title:"Delhi"})),r.a.createElement(o.a,{path:"/Uttar Pradesh"},r.a.createElement(w,{title:"Uttar Pradesh"})),r.a.createElement(o.a,{path:"/West Bengal"},r.a.createElement(w,{title:"West Bengal"})),r.a.createElement(o.a,{path:"/Bihar"},r.a.createElement(w,{title:"Bihar"})),r.a.createElement(o.a,{path:"/Telangana"},r.a.createElement(w,{title:"Telangana"})),r.a.createElement(o.a,{path:"/Gujarat"},r.a.createElement(w,{title:"Gujarat"})),r.a.createElement(o.a,{path:"/Assam"},r.a.createElement(w,{title:"Assam"})),r.a.createElement(o.a,{path:"/Rajasthan"},r.a.createElement(w,{title:"Rajasthan"})),r.a.createElement(o.a,{path:"/Odisha"},r.a.createElement(w,{title:"Odisha"})),r.a.createElement(o.a,{path:"/Haryana"},r.a.createElement(w,{title:"Haryana"})),r.a.createElement(o.a,{path:"/Madhya Pradesh"},r.a.createElement(w,{title:"Madhya Pradesh"})),r.a.createElement(o.a,{path:"/Kerala"},r.a.createElement(w,{title:"Kerala"})),r.a.createElement(o.a,{path:"/Jammu and Kashmir"},r.a.createElement(w,{title:"Jammu and Kashmir"})),r.a.createElement(o.a,{path:"/Punjab"},r.a.createElement(w,{title:"Punjab"})),r.a.createElement(o.a,{path:"/Jharkhand"},r.a.createElement(w,{title:"Jharkhand"})),r.a.createElement(o.a,{path:"/Chhattisgarh"},r.a.createElement(w,{title:"Chhattisgarh"})),r.a.createElement(o.a,{path:"/Uttarakhand"},r.a.createElement(w,{title:"Uttarakhand"})),r.a.createElement(o.a,{path:"/Goa"},r.a.createElement(w,{title:"Goa"})),r.a.createElement(o.a,{path:"/Tripura"},r.a.createElement(w,{title:"Tripura"})),r.a.createElement(o.a,{path:"/Puducherry"},r.a.createElement(w,{title:"Puducherry"})),r.a.createElement(o.a,{path:"/Manipur"},r.a.createElement(w,{title:"Manipur"})),r.a.createElement(o.a,{path:"/Himachal Pradesh"},r.a.createElement(w,{title:"Himachal Pradesh"})),r.a.createElement(o.a,{path:"/Nagaland"},r.a.createElement(w,{title:"Nagaland"})),r.a.createElement(o.a,{path:"/Arunachal Pradesh"},r.a.createElement(w,{title:"Arunachal Pradesh"})),r.a.createElement(o.a,{path:"/Ladakh"},r.a.createElement(w,{title:"Ladakh"})),r.a.createElement(o.a,{path:"/Andaman and Nicobar Islands"},r.a.createElement(w,{title:"Andaman and Nicobar Islands"})),r.a.createElement(o.a,{path:"/Chandigarh"},r.a.createElement(w,{title:"Chandigarh"})),r.a.createElement(o.a,{path:"/Meghalaya"},r.a.createElement(w,{title:"Meghalaya"})),r.a.createElement(o.a,{path:"/Sikkim"},r.a.createElement(w,{title:"Sikkim"})),r.a.createElement(o.a,{path:"/Daman and Diu"},r.a.createElement(w,{title:"Daman and Diu"})),r.a.createElement(o.a,{path:"/Dadra and Nagar Haveli"},r.a.createElement(w,{title:"Dadra and Nagar Haveli"})),r.a.createElement(o.a,{path:"/Mizoram"},r.a.createElement(w,{title:"Mizoram"})))},G=t(74);var U=function(){return r.a.createElement(G.a,null,r.a.createElement(i.a,{basename:"/Covid-Tracker_India"},r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.7538acd5.chunk.js.map