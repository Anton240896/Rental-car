"use strict";(self.webpackChunkRental_car=self.webpackChunkRental_car||[]).push([[787],{7787:function(n,e,r){r.r(e),r.d(e,{default:function(){return Fn}});var i,o,t,s,a,l,c,d,p,x,h,u,f,g,m,Z,b,j,v,P,y,w,k,C,M,z,S,R,B,A,E,L,N,O,q,H,T,_=r(3433),F=r(5861),I=r(9439),J=r(7757),U=r.n(J),V=r(2791),G=r(7689),K=r(5705),W=r(340),$=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),D=r(168),Q=r(7924),X=(0,Q.ZP)(K.l0)(i||(i=(0,D.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  padding-top: 150px;\n  padding-left: 100px;\n"]))),Y=Q.ZP.label(o||(o=(0,D.Z)(["\n  margin-left: 50px;\n"]))),nn=(0,Q.ZP)(K.gN)(t||(t=(0,D.Z)(["\n  background-color: #d1fbff;\n  margin-left: 4px;\n  height: 44px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  width: 224px;\n\n  &:focus {\n    outline: none;\n    border: 1px solid blue;\n  }\n"]))),en=(Q.ZP.option(s||(s=(0,D.Z)(["\n  height: 44px;\n  border-radius: 12px;\n"]))),Q.ZP.button(a||(a=(0,D.Z)(["\n  width: 145px;\n  height: 44px;\n  border-radius: 12px;\n  margin-top: 18px;\n  border: none;\n  background-color: #3470ff;\n  color: white;\n  cursor: pointer;\n\n  &:hover {\n    background-color: blue;\n  }\n"])))),rn=(0,Q.ZP)(K.gN)(l||(l=(0,D.Z)(["\n  background-color: #d1fbff;\n  margin-left: 4px;\n  height: 44px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  width: 125px;\n\n  &:focus {\n    outline: none;\n    border: 1px solid blue;\n  }\n"]))),on=r(184),tn=function(n){var e=n.onFilterChange,r=(0,V.useState)([]),i=(0,I.Z)(r,2),o=i[0],t=i[1];(0,V.useEffect)((function(){var n=function(){var n=(0,F.Z)(U().mark((function n(){return U().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{W.Z.get("https://65d8a715c96fbb24c1bc0564.mockapi.io/carAdvert/cars"),t($)}catch(e){console.error("Error",e)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);return(0,on.jsx)(K.J9,{initialValues:{brand:"",price:"",mileage:""},onSubmit:function(n){e(n)},children:(0,on.jsxs)(X,{children:[(0,on.jsx)(Y,{children:"Car Brand"}),(0,on.jsxs)(nn,{as:"select",name:"car brand",children:[(0,on.jsx)("option",{children:"Select all"}),o.map((function(n,e){return(0,on.jsx)("option",{value:n,children:n},e)}))]}),(0,on.jsx)(Y,{children:"Price/ 1 hour"}),(0,on.jsxs)(rn,{as:"select",name:"price",children:[(0,on.jsx)("option",{value:"",children:"To $ "}),function(){for(var n=[],e=30;e<=80;e+=10)n.push((0,on.jsx)("option",{value:e,children:e},e));return n}()]}),(0,on.jsx)(Y,{children:"Car mileage/ km"}),(0,on.jsx)(rn,{type:"text",name:"to",placeholder:"To"}),(0,on.jsx)(rn,{type:"text",name:"from",placeholder:"From"}),(0,on.jsx)(en,{type:"submit",children:"Search"})]})})},sn=r(1087),an=Q.ZP.div(c||(c=(0,D.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: start;\n  gap: 80px;\n  margin: 274px auto 100px 290px;\n"]))),ln=Q.ZP.div(d||(d=(0,D.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 29px;\n"]))),cn=Q.ZP.img(p||(p=(0,D.Z)(["\n  object-fit: cover;\n  width: 268px;\n  height: 274px;\n  border-radius: 14px;\n"]))),dn=Q.ZP.div(x||(x=(0,D.Z)(["\n  padding-top: 14px;\n"]))),pn=Q.ZP.div(h||(h=(0,D.Z)(["\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  gap: 50px;\n\n  font-family: 'Manrope', sans-serif;\n\n  @media (max-width: 1220px) {\n    gap: 8px;\n  }\n"]))),xn=Q.ZP.h3(u||(u=(0,D.Z)(["\n  padding-bottom: 8px;\n"]))),hn=Q.ZP.p(f||(f=(0,D.Z)(["\n  padding-bottom: 8px;\n  width: 263px;\n  font-size: 10px;\n\n  font-family: 'Manrope', sans-serif;\n"]))),un=Q.ZP.span(g||(g=(0,D.Z)(["\n  padding-left: 40px;\n"]))),fn=Q.ZP.button(m||(m=(0,D.Z)(["\n  width: 145px;\n  height: 44px;\n  border-radius: 12px;\n  margin-top: 18px;\n  border: none;\n  background-color: #3470ff;\n  color: white;\n  cursor: pointer;\n\n  font-family: 'Manrope', sans-serif;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: blue;\n  }\n\n  @media (min-width: 1220px) {\n    width: 250px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 274px;\n  }\n"]))),gn=Q.ZP.span(Z||(Z=(0,D.Z)(["\n  color: #12141773;\n  font-size: 12px;\n"]))),mn=Q.ZP.div(b||(b=(0,D.Z)(["\n  display: flex;\n"]))),Zn=Q.ZP.span(j||(j=(0,D.Z)(["\n  color: #3470ff;\n  font-size: 12px;\n"]))),bn=Q.ZP.button(v||(v=(0,D.Z)(["\n  width: 145px;\n  height: 44px;\n  border-radius: 12px;\n  margin-top: 18px;\n  border: none;\n  background-color: #3470ff;\n  color: white;\n  cursor: pointer;\n  margin: 50px 0 50px 50%;\n\n  font-family: 'Manrope', sans sans-serif;\n\n  &:hover {\n    background-color: blue;\n  }\n"]))),jn=Q.ZP.span(P||(P=(0,D.Z)(["\n  display: none;\n"]))),vn=Q.ZP.button(y||(y=(0,D.Z)(["\n  width: 145px;\n  height: 44px;\n  border-radius: 12px;\n  margin-top: 18px;\n  border: none;\n  background-color: #3470ff;\n  cursor: pointer;\n  margin: 50px 0 50px 50%;\n\n  &:hover {\n    background-color: blue;\n  }\n"]))),Pn=(0,Q.ZP)(sn.rU)(w||(w=(0,D.Z)(["\n  color: white;\n  padding-left: 5px;\n"]))),yn=r(7948),wn=r.n(yn),kn=r(4330),Cn=(0,Q.ZP)(wn())(k||(k=(0,D.Z)(["\n  position: relative;\n  border-radius: 12px;\n  border: 1px solid grey;\n  background-color: aliceblue;\n\n  width: 420px;\n  height: 640px;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  padding: 0%;\n  z-index: 1;\n"]))),Mn=Q.ZP.div(C||(C=(0,D.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-top: 30px;\n"]))),zn=Q.ZP.img(M||(M=(0,D.Z)(["\n  border-radius: 12px;\n  margin-left: auto;\n  margin-right: auto;\n\n  width: 80%;\n  height: 200px;\n"]))),Sn=Q.ZP.div(z||(z=(0,D.Z)(["\n  display: flex;\n  gap: 5px;\n\n  margin-top: 14px;\n  margin-left: 41px;\n  align-items: baseline;\n"]))),Rn=Q.ZP.span(S||(S=(0,D.Z)(["\n  color: blue;\n"]))),Bn=Q.ZP.span(R||(R=(0,D.Z)(["\n  color: black;\n"]))),An=Q.ZP.p(B||(B=(0,D.Z)(["\n  margin-top: 14px;\n  margin-left: 41px;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 15px;\n  width: 353px;\n\n  font-family: 'Manrope';\n"]))),En=Q.ZP.span(A||(A=(0,D.Z)(["\n  color: grey;\n  margin-left: 41px;\n  font-size: 12px;\n"]))),Ln=Q.ZP.span(E||(E=(0,D.Z)(["\n  color: grey;\n  margin-left: 5px;\n  font-size: 12px;\n"]))),Nn=Q.ZP.div(L||(L=(0,D.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),On=Q.ZP.p(N||(N=(0,D.Z)(["\n  color: grey;\n  margin-left: 41px;\n  margin-top: 8px;\n  font-size: 12px;\n  width: 354px;\n"]))),qn=(Q.ZP.div(O||(O=(0,D.Z)(["\n  display: flex;\n"]))),Q.ZP.button(q||(q=(0,D.Z)(["\n  background-color: #3470ff;\n  border: none;\n  color: white;\n  border-radius: 12px;\n  width: 168px;\n  height: 44px;\n  margin-top: -65px;\n  margin-left: auto;\n  margin-right: 20px;\n\n  &:hover {\n    background-color: blue;\n  }\n"])))),Hn=(0,Q.ZP)(kn.j7p)(H||(H=(0,D.Z)(["\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  cursor: pointer;\n\n  &:hover {\n    color: blue;\n  }\n"]))),Tn=Q.ZP.span(T||(T=(0,D.Z)(["\n  color: blue;\n  margin-left: 41px;\n"])));wn().setAppElement("#root");var _n=function(n){var e=n.isOpen,r=n.onRequestClose,i=n.car;return i?(0,on.jsx)(Cn,{isOpen:e,onRequestClose:r,children:(0,on.jsxs)(Mn,{children:[(0,on.jsx)(Hn,{size:24,onClick:r}),(0,on.jsx)(zn,{src:i.img,alt:"".concat(i.make," ").concat(i.model)}),(0,on.jsxs)(Sn,{children:[(0,on.jsx)(xn,{children:i.make}),(0,on.jsxs)(Rn,{children:[" ",i.model,", "]}),(0,on.jsx)(Bn,{children:i.year})]}),(0,on.jsxs)(Nn,{children:[(0,on.jsxs)(En,{children:[i.address," |"]}),(0,on.jsxs)(Ln,{children:[" id: ",i.id," |"]}),(0,on.jsxs)(Ln,{children:[" year: ",i.year," | "]}),(0,on.jsxs)(Ln,{children:[" type: ",i.type," "]}),(0,on.jsxs)(En,{children:["fuelConsumption: ",i.fuelConsumption," |"]}),(0,on.jsxs)(Ln,{children:["Engine Size: ",i.engineSize]})]}),(0,on.jsx)(An,{children:i.description}),(0,on.jsx)(An,{children:(0,on.jsx)("strong",{children:"Accessories and functionalities:"})}),(0,on.jsxs)(On,{children:[" ",i.accessories]}),(0,on.jsx)(An,{children:(0,on.jsx)("strong",{children:"Rental Conditions:"})}),(0,on.jsxs)(An,{children:[" ",i.rentalConditions," "]})," ",(0,on.jsx)(An,{children:" Mileage:"})," ",(0,on.jsx)(Tn,{children:i.mileage}),(0,on.jsx)(An,{children:" Price:"}),(0,on.jsx)(Tn,{children:i.rentalPrice}),(0,on.jsx)(qn,{children:"Rental Car"})]})}):null},Fn=function(){var n,e,r=(0,V.useState)([]),i=(0,I.Z)(r,2),o=i[0],t=i[1],s=(0,V.useState)([]),a=(0,I.Z)(s,2),l=a[0],c=a[1],d=(0,V.useState)(!1),p=(0,I.Z)(d,2),x=p[0],h=p[1],u=(0,V.useState)(null),f=(0,I.Z)(u,2),g=f[0],m=f[1],Z=(0,V.useState)(!1),b=(0,I.Z)(Z,2),j=b[0],v=b[1],P=(0,G.TH)();(0,V.useEffect)((function(){var n=function(){var n=(0,F.Z)(U().mark((function n(){var e;return U().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.Z.get("https://65d8a715c96fbb24c1bc0564.mockapi.io/carAdvert/cars");case 3:e=n.sent,t(e.data),c(e.data.slice(0,12)),e.data.length>12&&h(!0),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error("error",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);return(0,on.jsxs)("div",{children:[(0,on.jsx)(vn,{children:(0,on.jsx)(Pn,{to:null!==(n=null===(e=P.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Back home"})}),(0,on.jsx)(tn,{}),(0,on.jsx)(an,{children:l.map((function(n,e){return(0,on.jsxs)(ln,{children:[(0,on.jsx)(cn,{src:n.img,alt:"".concat(n.make)}),(0,on.jsxs)(dn,{children:[(0,on.jsxs)(pn,{children:[(0,on.jsx)(xn,{children:n.make}),(0,on.jsxs)(mn,{children:[(0,on.jsx)("strong",{children:(0,on.jsx)(Zn,{children:n.year})}),(0,on.jsx)(un,{children:n.rentalPrice})]})]}),(0,on.jsxs)(hn,{children:[(0,on.jsxs)(gn,{children:[n.address," | "]}),(0,on.jsxs)(gn,{children:[n.rentalCompany," | "]}),(0,on.jsxs)(gn,{children:[n.type," | "]}),(0,on.jsx)("strong",{children:(0,on.jsxs)(Zn,{children:[n.model," | "]})}),(0,on.jsxs)(gn,{children:[n.id," | "]}),(0,on.jsxs)(gn,{children:[n.rentalCompany," "]}),(0,on.jsx)(jn,{children:n.description})]}),(0,on.jsx)(fn,{onClick:function(){return function(n){m(n),v(!0)}(n)},children:"Learn more"})]})]},"".concat(n.id,"_").concat(e))}))}),(0,on.jsx)(_n,{isOpen:j,onRequestClose:function(){v(!1)},car:g}),x&&(0,on.jsx)(bn,{onClick:function(){var n=o.slice(l.length,l.length+13);c((function(e){return[].concat((0,_.Z)(e),(0,_.Z)(n))})),l.length+n.length===o.length&&h(!1)},children:"Load More"})]})}}}]);
//# sourceMappingURL=787.1a28cc5e.chunk.js.map