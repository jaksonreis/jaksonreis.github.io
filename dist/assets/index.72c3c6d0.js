var Y=Object.defineProperty,G=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var S=(o,a,n)=>a in o?Y(o,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[a]=n,k=(o,a)=>{for(var n in a||(a={}))$.call(a,n)&&S(o,n,a[n]);if(C)for(var n of C(a))J.call(a,n)&&S(o,n,a[n]);return o},I=(o,a)=>G(o,q(a));import{j as t,T as c,a as e,u as O,F as T,b as r,I as p,C as X,H as Z,c as j,S as N,B as h,d as y,L as x,e as g,P as K,f as m,R as U,g as E,h as Q,i as ee,k as ae,l as L,G as f,M as te,m as ie,n as oe,o as ne,p as re,q as se,r as le,V as z,s as P,t as ce,v as de,w as he,x as ge,y as me,z as pe,A as v,D as w,E as A,J as R,K as ue,N as B,O as fe,Q as be,U as W,W as b,X as xe,Y as ye,Z as ve,_ as we,$ as _,a0 as Ce,a1 as Se,a2 as ke,a3 as Ie,a4 as je,a5 as Ne}from"./vendor.beeec77e.js";const Ee=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Ee();function ze(){return t(c,{fontSize:["xl","3xl"],fontWeight:"bold",letterSpacing:"tight",w:"64",children:["Jakson Reis",e(c,{as:"span",ml:"1",color:"orange.500",children:"."})]})}const F=[{name:"In\xEDcio",href:"#section_1"},{name:"Sobre",href:"#section_2"},{name:"Portif\xF3lio",href:"#section_3"},{name:"Contato",href:"#section_4"}],M=({children:o,href:a})=>e(x,{px:3,py:4,rounded:"md",_hover:{textDecoration:"none",bg:g("orange.400","orange.600"),color:"gray.50"},href:a,children:o});function Ae({action:o}){const{isOpen:a,onOpen:n,onClose:l}=O();return e(T,{children:t(r,{className:o?"activeColor":"",bg:"#1F202910",px:4,width:"100%","z-index":100,children:[t(r,{h:16,alignItems:"center",justifyContent:"space-between",children:[e(p,{mr:"10px",color:"orange.500",bg:"none",size:"lg",icon:a?e(X,{}):e(Z,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:a?l:n}),t(j,{spacing:8,alignItems:"center",children:[e(ze,{}),e(N,{scrollTargetIds:["section_1","section_2","section_3","section_4"],offset:100,activeNavClass:"is-active",scrollDuration:"1000",headerBackground:"true",children:e(j,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:F.map(i=>e(M,{href:i.href,children:e(h,{h:"100%",children:i.name})},i.name))})})]})]}),a?e(h,{pb:4,display:{md:"none"},children:e(N,{scrollTargetIds:["section_1","section_2","section_3","section_4"],offset:100,activeNavClass:"is-active",scrollDuration:"1000",headerBackground:"true",direction:"row",children:e(y,{as:"nav",spacing:4,children:F.map(i=>e(M,{href:i.href,children:i.name},i.name))})})}):null]})})}var Re="/assets/bg_space.4c7567ce.jpg",Be="/assets/planet.cab2b0f4.png",_e="/assets/meteoro.c2cc2d5a.png";function Fe(){return e(K,{layers:[{translateY:[0,50],opacity:[1,0],scale:[1.05,1,"easeOutCubic"],shouldAlwaysCompleteAnimation:!0,children:e(h,{h:"100%",children:e(m,{fit:"fill",h:"100%",src:Re,alt:"Dan Abramov"})})},{translateX:[0,35],translateY:[0,55],scale:[1,0,"easeOutCubic"],expanded:!1,shouldAlwaysCompleteAnimation:!0,children:e(m,{h:["20%","45%"],src:_e,alt:"Web Developer"})},{translateX:[0,5],translateY:[0,5],scale:[1,.8,"easeOutCubic"],expanded:!1,shouldAlwaysCompleteAnimation:!0,children:e(r,{position:"relative",right:"-150px",bottom:"-80px",justify:"end",align:"end",h:"100%",children:e(m,{h:["40%","80%"],src:Be,alt:"Web Developer"})})},{translateY:[0,30],scale:[1,1.1,"easeInCubic"],shouldAlwaysCompleteAnimation:!0,expanded:!0,children:t(r,{direction:"column",position:"absolute",inset:"0",align:"center",justify:"center",mt:"100px",children:[e(c,{fontSize:["md","2xl"],color:"gray.100",lineHeight:"1",children:"PORTIF\xD3LIO"}),e(c,{fontSize:["3xl","5xl","7xl"],color:"white",lineHeight:"1",children:"Jakson Reis"}),e(c,{fontSize:["lg","xl"],color:"white",children:"| FRONT-END DEVELOPER | DESIGNER |"})]})},{opacity:[0,1,"easeOutCubic"],shouldAlwaysCompleteAnimation:!0,expanded:!1,children:e(h,{position:"absolute",inset:"0",bgGradient:"linear(rgba(28, 29, 31, 0.5) 50%, gray.900)"})}],className:"aspect"})}function Me(){return e(r,{id:"section_1",justify:"center",align:"center",h:"100vh",children:e(Fe,{})})}var De="/assets/eu.bc427cfc.png";function Oe({animation1:o,animation2:a,animation3:n}){return t(r,{flexWrap:"wrap",id:"section_2",justify:"center",align:"start",mt:"10px",pt:["50px","150px"],children:[e(m,{opacity:"0",className:a?"animationLeft":"",position:"relative",h:"90%",src:De,filter:"grayscale(1%)"}),t(r,{direction:"column",children:[e(r,{bg:"gray.800",borderRadius:8,p:"6",className:o?"animationRight":"",opacity:"0",position:"relative",fontSize:["xs","lg"],children:t(c,{fontSize:["xs","lg"],mb:"4",children:["Meu nome \xE9 Jakson da cidade de Corinto, Minas Gerais,",e("br",{}),"tenho 25 anos e sou um Web Developer.",e("br",{}),"Me tornei especialista em React, React Native",e("br",{}),"al\xE9m de varias outras tecnologias... ",e("br",{})]})}),e(r,{bg:"gray.800",borderRadius:8,p:"6",className:n?"animationRight":"",opacity:"0",position:"relative",mt:"20px",children:t(c,{fontSize:["xs","lg"],mb:"4",children:["Atuo no mercado oferecendo,",e("br",{}),"solu\xE7\xF5es para sistemas web, mobile.",e("br",{}),"O foco \xE9 sempre desenvolver da maneira ",e("br",{}),"mais profissional, moderna e perform\xE1tica possivel,",e("br",{}),"pensando sempre na experiencia do usu\xE1rio ",e("br",{}),"e na satisfa\xE7\xE3o de nossos clientes."]})})]})]})}const Te={dots:!0,arrows:!1,fade:!0,infinite:!0,autoplay:!0,speed:500,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1};function Le({cards:o}){const[a,n]=U.useState(null),l=E({base:"90%",md:"50%"}),i=E({base:"30%",md:"40px"});return t(h,{position:"relative",width:"full",overflow:"hidden",children:[e("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),e("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),e(p,{color:"orange.500","aria-label":"left-arrow",variant:"ghost",position:"absolute",left:i,top:l,transform:"translate(0%, -50%)",zIndex:2,onClick:()=>a==null?void 0:a.slickPrev(),children:e(Q,{size:"40px"})}),e(p,{color:"orange.500","aria-label":"right-arrow",variant:"ghost",position:"absolute",right:i,top:l,transform:"translate(0%, -50%)",zIndex:2,onClick:()=>a==null?void 0:a.slickNext(),children:e(ee,{size:"40px"})}),e(ae,I(k({},Te),{ref:s=>n(s),children:o.map((s,u)=>e(h,{position:"relative",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundImage:`url(${s.image})`,children:e(L,{size:"container.lg",height:"600px",position:"relative"})},u))}))]})}var Pe="/assets/Desktop01.b5a9b0a7.jpg",We="/assets/Mobile01.77784184.jpg",Ve="/assets/Mobile03.b6517039.jpg",He="/assets/Mobile04.4e90f1e4.jpg",Ye="/assets/Desktop02.1b3e9233.jpg",Ge="/assets/Mobile02.10ffa0a2.jpg";const d=[{index:0,title:"dt money - Home",image:Pe},{index:1,title:"dt money - App",image:We},{index:2,title:"to.do - App",image:Ve},{index:3,title:"Rentz - App",image:He},{index:4,title:"dt money - Modal",image:Ye},{index:5,title:"gofinance App",image:Ge}];let D;function qe(){const{isOpen:o,onOpen:a,onClose:n}=O();function l(i){D=[d[i],...d.filter(s=>s.index!==i)],a()}return e(r,{id:"section_3",justify:"center",align:"center",w:"100vw",pt:"130px",children:t(r,{direction:"column",bg:"gray.800",borderRadius:8,p:"6",w:"80vw",justify:"flex-end",children:[e(r,{borderBottom:"1px solid #4B4D63",mb:"8px",children:e(c,{fontSize:["xl","3xl"],m:"10px",fontWeight:"bold",letterSpacing:"tight",w:"64",children:"Portif\xF3lio"})}),t("div",{className:"divGrid",children:[e(f,{m:"5px",colSpan:2,rowSpan:1,children:t(r,{className:"ImgContainer",h:"100%",justify:"center",align:"center",children:[e(m,{className:"ImgView",src:d[0].image,display:"block",width:"100%",height:"100%",objectFit:"cover",onClick:()=>l(0)}),e(c,{className:"ImgText",position:"absolute",opacity:"0",color:"orange.500",fontWeight:"bold",fontSize:"2xl",letterSpacing:"tight",children:d[0].title})]})}),e(f,{m:"5px",colSpan:2,rowSpan:2,children:t(r,{className:"ImgContainer",h:"100%",justify:"center",align:"center",children:[e(m,{className:"ImgView",src:d[1].image,display:"block",width:"100%",height:"100%",objectFit:"cover",onClick:()=>l(1)}),e(c,{className:"ImgText",position:"absolute",opacity:"0",color:"orange.500",fontWeight:"bold",fontSize:"2xl",letterSpacing:"tight",children:d[1].title})]})}),e(f,{m:"5px",colSpan:2,rowSpan:1,children:t(r,{className:"ImgContainer",h:"100%",justify:"center",align:"center",children:[e(m,{className:"ImgView",src:d[2].image,display:"block",width:"100%",height:"100%",objectFit:"cover",onClick:()=>l(2)}),e(c,{className:"ImgText",position:"absolute",opacity:"0",color:"orange.500",fontWeight:"bold",fontSize:"2xl",letterSpacing:"tight",children:d[2].title})]})}),e(f,{m:"5px",colSpan:2,rowSpan:2,children:t(r,{className:"ImgContainer",h:"100%",justify:"center",align:"center",children:[e(m,{className:"ImgView",src:d[3].image,display:"block",width:"100%",height:"100%",objectFit:"cover",onClick:()=>l(3)}),e(c,{className:"ImgText",position:"absolute",opacity:"0",color:"orange.500",fontWeight:"bold",fontSize:"2xl",letterSpacing:"tight",children:d[3].title})]})}),e(f,{m:"5px",colSpan:2,rowSpan:1,children:t(r,{className:"ImgContainer",h:"100%",justify:"center",align:"center",children:[e(m,{className:"ImgView",src:d[4].image,display:"block",width:"100%",height:"100%",objectFit:"cover",onClick:()=>l(4)}),e(c,{className:"ImgText",position:"absolute",opacity:"0",color:"orange.500",fontWeight:"bold",fontSize:"2xl",letterSpacing:"tight",children:d[4].title})]})}),e(f,{m:"5px",colSpan:4,rowSpan:1,children:t(r,{className:"ImgContainer",h:"100%",justify:"center",align:"center",children:[e(m,{className:"ImgView",src:d[5].image,display:"block",width:"100%",height:"100%",objectFit:"cover",onClick:()=>l(5)}),e(c,{className:"ImgText",position:"absolute",opacity:"0",color:"orange.500",fontWeight:"bold",fontSize:"2xl",letterSpacing:"tight",children:d[5].title})]})})]}),t(te,{size:"70%",isOpen:o,onClose:n,children:[e(ie,{bg:"blackAlpha.300",backdropFilter:"blur(10px) hue-rotate(90deg)"}),t(oe,{style:{width:"800px"},children:[e(ne,{color:"gray.700",children:"Portif\xF3lio"}),e(re,{color:"gray.700"}),e(se,{children:e(Le,{cards:D})})]})]})]})})}function $e(){const{hasCopied:o,onCopy:a}=le("jakson.reis@hotmail.com");return e(r,{bg:g("gray.900","gray.900"),align:"center",justify:"center",id:"contact",w:"100%",children:e(h,{borderRadius:"lg",m:{base:5,md:16,lg:10},p:{base:5,lg:16},w:"70%",children:e(h,{flex:"1",children:t(z,{spacing:{base:4,md:8,lg:20},children:[e(P,{fontSize:{base:"4xl",md:"5xl"},children:"Se quiser conversar, entre em contato"}),t(y,{spacing:{base:4,md:8,lg:20},direction:{base:"column",md:"row"},children:[t(y,{align:"center",justify:"space-around",direction:{base:"row",md:"column"},children:[e(ce,{label:o?"Email Copiado!":"Copiar Email",closeOnClick:!1,hasArrow:!0,children:e(p,{"aria-label":"email",variant:"ghost",size:"lg",fontSize:"3xl",icon:e(de,{}),_hover:{bg:"orange.500",color:g("white","gray.700")},onClick:a,isRound:!0})}),e(x,{href:"https://www.instagram.com/jakson_reis",isExternal:!0,children:e(p,{"aria-label":"instagram",variant:"ghost",size:"lg",icon:e(he,{size:"28px"}),_hover:{bg:"orange.500",color:g("white","gray.700")},isRound:!0})}),e(x,{href:"https://api.whatsapp.com/send?phone=5538999336995",isExternal:!0,children:e(p,{"aria-label":"whatsapp",variant:"ghost",size:"lg",icon:e(ge,{size:"28px"}),_hover:{bg:"orange.500",color:g("white","gray.700")},isRound:!0})}),e(x,{href:"https://www.facebook.com/jakson.reis.54/",isExternal:!0,children:e(p,{"aria-label":"facebook",variant:"ghost",size:"lg",icon:e(me,{size:"28px"}),_hover:{bg:"orange.500",color:g("white","gray.700")},isRound:!0})}),e(x,{href:"https://www.linkedin.com/in/jakson-reis-024b3b16a/",isExternal:!0,children:e(p,{"aria-label":"linkedin",variant:"ghost",size:"lg",icon:e(pe,{size:"28px"}),_hover:{bg:"orange.500",color:g("white","gray.700")},isRound:!0})})]}),e(h,{bg:g("gray.800","gray.50"),borderRadius:"lg",p:6,color:g("gray.50","gray.700"),shadow:"base",w:["80vw","75vw","50vw"],children:t("form",{id:"contactform",action:"https://formsubmit.co/jakson.reis@hotmail.com",method:"post",children:[e("input",{type:"hidden",name:"_captcha",value:"false"}),e("input",{type:"hidden",name:"_next",value:"https://jaksonreis.github.io/sended"}),t(z,{spacing:5,children:[t(v,{isRequired:!0,children:[e(w,{children:"Nome"}),t(A,{children:[e(R,{children:e(ue,{})}),e(B,{as:"input",form:"contactform",type:"text",name:"name",placeholder:"Seu Nome",focusBorderColor:"orange.500"})]})]}),t(v,{isRequired:!0,children:[e(w,{children:"Email"}),t(A,{children:[e(R,{children:e(fe,{})}),e(B,{as:"input",form:"contactform",type:"email",name:"email",placeholder:"Seu Email",focusBorderColor:"orange.500"})]})]}),t(v,{isRequired:!0,children:[e(w,{children:"Mensagem"}),e(be,{form:"contactform",name:"message",placeholder:"Sua Mensagem",rows:4,resize:"none",focusBorderColor:"orange.500"})]}),e(W,{type:"submit",form:"contactform",colorScheme:"orange",bg:"orange.400",color:"white",_hover:{bg:"orange.500"},isFullWidth:!0,children:"Enviar Mensagem"})]})]})})]})]})})})})}function Je(){return e(r,{id:"section_4",justify:"center",align:"center",width:"100%",pt:"20px",children:e($e,{})})}function Xe(){const[o,a]=b.exports.useState(!1),[n,l]=b.exports.useState(!1),[i,s]=b.exports.useState(!1),[u,V]=b.exports.useState(!1);return b.exports.useEffect(function(){function H(){window.scrollY>40?a(!0):a(!1),window.scrollY>300&&l(!0),window.scrollY>500&&s(!0),window.scrollY>600&&V(!0)}window.addEventListener("scroll",H)},[]),t(h,{children:[e("div",{className:"divnav",children:e(Ae,{action:o})}),t("div",{className:"divsec",children:[e(Me,{}),e(Oe,{animation1:n,animation2:i,animation3:u}),e(qe,{}),e(Je,{})]})]})}function Ze(){return e(T,{children:e(L,{maxW:"3xl",children:t(y,{as:h,textAlign:"center",spacing:{base:8,md:14},py:{base:20,md:36},children:[t(P,{fontWeight:600,fontSize:{base:"2xl",sm:"4xl",md:"6xl"},lineHeight:"110%",children:["Email enviado com ",e("br",{}),e(c,{as:"span",color:"orange.400",children:"sucesso !"})]}),e(c,{color:"gray.500",children:"A sua mensagem foi enviada com sucesso, em breve iremos entrar em contato. Desde j\xE1 agradecemos!"}),t(y,{direction:"column",spacing:3,align:"center",alignSelf:"center",position:"relative",children:[e(ye,{to:"/",children:e(W,{colorScheme:"orange",bg:"orange.400",rounded:"full",px:6,_hover:{bg:"orange.500"},children:"Voltar para a p\xE1gina"})}),e(h,{children:e(ve,{as:Ke,color:g("gray.800","gray.300"),w:71,position:"absolute",right:-71,top:"10px"})})]})]})})})}const Ke=xe({displayName:"Arrow",viewBox:"0 0 72 24",path:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z",fill:"currentColor"})});function Ue(){return t(we,{children:[e(_,{path:"/",element:e(Xe,{})}),e(_,{path:"/sended",element:e(Ze,{})})]})}const Qe=Ce(Se({defaultProps:{size:"lg"},components:["PinInput"]}),{colors:{gray:{"900":"#181B23","800":"#1F2029","700":"#353646","600":"#4B4D63","500":"#616480","400":"#797D9A","300":"#9699B0","200":"#B3B5C6","100":"#D1D2DC","50":"#EEEEF2"}},fonts:{heading:"Roboto",body:"Roboto"},styles:{global:{body:{bg:"gray.900",color:"gray.50"}}}});ke.render(e(Ie,{children:e(je,{theme:Qe,children:e(Ne,{children:e(Ue,{})})})}),document.getElementById("root"));
