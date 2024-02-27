"use strict";(self.webpackChunkRental_car=self.webpackChunkRental_car||[]).push([[180],{6180:function(n,e,r){r.r(e),r.d(e,{default:function(){return qn}});var i,t,o,s,a,c,l,d,p,x,h,u,f,g,m,Z,j,b,v,w,y,P,k,C,z,M,S,R,B,A,E,L,N,O,q,H=r(3433),T=r(5861),F=r(9439),I=r(7757),J=r.n(I),U=r(2791),V=r(7689),_=r(1087),G=r(5705),K=r(340),W=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),$=r(168),D=r(7924),Q=(0,D.ZP)(G.l0)(i||(i=(0,$.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  padding-top: 150px;\n  padding-left: 100px;\n"]))),X=D.ZP.label(t||(t=(0,$.Z)(["\n  margin-left: 50px;\n"]))),Y=(0,D.ZP)(G.gN)(o||(o=(0,$.Z)(["\n  background-color: #f7f7fb;\n  margin-left: 4px;\n  height: 44px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  width: 224px;\n\n  &:focus {\n    border: none;\n  }\n"]))),nn=(D.ZP.option(s||(s=(0,$.Z)(["\n  height: 44px;\n  border-radius: 12px;\n"]))),D.ZP.button(a||(a=(0,$.Z)(["\n  width: 145px;\n  height: 44px;\n  border-radius: 12px;\n  margin-top: 18px;\n  border: none;\n  background-color: #3470ff;\n  color: white;\n  cursor: pointer;\n\n  &:hover {\n    background-color: blue;\n  }\n"])))),en=(0,D.ZP)(G.gN)(c||(c=(0,$.Z)(["\n  background-color: #f7f7fb;\n  margin-left: 4px;\n  height: 44px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  width: 125px;\n\n  &:focus {\n    border: none;\n  }\n"]))),rn=r(184),tn=function(n){var e=n.onFilterChange,r=(0,U.useState)([]),i=(0,F.Z)(r,2),t=i[0],o=i[1];(0,U.useEffect)((function(){var n=function(){var n=(0,T.Z)(J().mark((function n(){return J().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{K.Z.get("https://65d8a715c96fbb24c1bc0564.mockapi.io/carAdvert/cars"),o(W)}catch(e){console.error("Error fetching car makes:",e)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);return(0,rn.jsx)(G.J9,{initialValues:{brand:"",price:"",mileage:""},onSubmit:function(n){e(n)},children:(0,rn.jsxs)(Q,{children:[(0,rn.jsx)(X,{children:"Car Brand"}),(0,rn.jsxs)(Y,{as:"select",name:"car brand",children:[(0,rn.jsx)("option",{children:"Select all"}),t.map((function(n,e){return(0,rn.jsx)("option",{value:n,children:n},e)}))]}),(0,rn.jsx)(X,{children:"Price/ 1 hour"}),(0,rn.jsxs)(en,{as:"select",name:"price",children:[(0,rn.jsx)("option",{value:"",children:"To $ "}),function(){for(var n=[],e=30;e<=80;e+=10)n.push((0,rn.jsx)("option",{value:e,children:e},e));return n}()]}),(0,rn.jsx)(X,{children:"Car mileage/ km"}),(0,rn.jsx)(en,{type:"text",name:"to",placeholder:"To"}),(0,rn.jsx)(en,{type:"text",name:"from",placeholder:"From"}),(0,rn.jsx)(nn,{type:"submit",children:"Search"})]})})},on=D.ZP.div(l||(l=(0,$.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  justify-content: space-between;\n  margin: 274px 129px 100px 115px;\n\n  @media screen and (max-width: 992px) {\n    justify-content: flex-start;\n  }\n"]))),sn=D.ZP.div(d||(d=(0,$.Z)(["\n  width: calc(25% - 29px);\n  margin-bottom: 29px;\n\n  @media screen and (max-width: 1200px) {\n    width: calc(33.33% - 29px);\n  }\n\n  @media screen and (max-width: 768px) {\n    width: calc(50% - 29px);\n  }\n\n  @media screen and (max-width: 576px) {\n    width: 100%;\n  }\n"]))),an=D.ZP.img(p||(p=(0,$.Z)(["\n  object-fit: cover;\n  width: 268px;\n  height: 274px;\n  border-radius: 14px;\n"]))),cn=D.ZP.div(x||(x=(0,$.Z)(["\n  padding-top: 14px;\n"]))),ln=D.ZP.div(h||(h=(0,$.Z)(["\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  width: 100%;\n\n  font-family: 'Manrope', sans-serif;\n"]))),dn=D.ZP.h3(u||(u=(0,$.Z)(["\n  padding-bottom: 8px;\n"]))),pn=D.ZP.p(f||(f=(0,$.Z)(["\n  padding-bottom: 8px;\n  width: 263px;\n\n  font-family: 'Manrope', sans-serif;\n"]))),xn=D.ZP.span(g||(g=(0,$.Z)(["\n  padding-left: 40px;\n"]))),hn=D.ZP.button(m||(m=(0,$.Z)(["\n  width: 145px;\n  height: 44px;\n  border-radius: 12px;\n  margin-top: 18px;\n  border: none;\n  background-color: #3470ff;\n  color: white;\n  cursor: pointer;\n\n  font-family: 'Manrope', sans-serif;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: blue;\n  }\n\n  @media (min-width: 1220px) {\n    width: 250px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 274px;\n  }\n"]))),un=D.ZP.span(Z||(Z=(0,$.Z)(["\n  color: #12141773;\n  font-size: 12px;\n"]))),fn=D.ZP.div(j||(j=(0,$.Z)(["\n  display: flex;\n"]))),gn=D.ZP.span(b||(b=(0,$.Z)(["\n  color: #3470ff;\n  font-size: 12px;\n"]))),mn=D.ZP.button(v||(v=(0,$.Z)(["\n  border: none;\n  background-color: transparent;\n  color: #3470ff;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  margin-left: 50%;\n  cursor: pointer;\n  padding-bottom: 150px;\n\n  font-family: 'Manrope', sans sans-serif;\n"]))),Zn=D.ZP.p(w||(w=(0,$.Z)(["\n  display: none;\n"]))),jn=r(7948),bn=r.n(jn),vn=r(4330),wn=(0,D.ZP)(bn())(y||(y=(0,$.Z)(["\n  position: relative;\n  border-radius: 12px;\n  border: 1px solid grey;\n  background-color: white;\n\n  width: 420px;\n  height: 640px;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  padding: 0%;\n  z-index: 1;\n"]))),yn=D.ZP.div(P||(P=(0,$.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-top: 30px;\n"]))),Pn=D.ZP.img(k||(k=(0,$.Z)(["\n  border-radius: 12px;\n  margin-left: auto;\n  margin-right: auto;\n\n  width: 80%;\n  height: 200px;\n"]))),kn=D.ZP.div(C||(C=(0,$.Z)(["\n  display: flex;\n  gap: 5px;\n\n  margin-top: 14px;\n  margin-left: 41px;\n  align-items: baseline;\n"]))),Cn=D.ZP.span(z||(z=(0,$.Z)(["\n  color: blue;\n"]))),zn=D.ZP.span(M||(M=(0,$.Z)(["\n  color: black;\n"]))),Mn=D.ZP.p(S||(S=(0,$.Z)(["\n  margin-top: 14px;\n  margin-left: 41px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 15px;\n  width: 300px;\n\n  font-family: 'Manrope';\n"]))),Sn=D.ZP.span(R||(R=(0,$.Z)(["\n  color: grey;\n  margin-left: 41px;\n  font-size: 12px;\n"]))),Rn=D.ZP.span(B||(B=(0,$.Z)(["\n  color: grey;\n  margin-left: 5px;\n  font-size: 12px;\n"]))),Bn=D.ZP.div(A||(A=(0,$.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),An=D.ZP.p(E||(E=(0,$.Z)(["\n  color: grey;\n  margin-left: 41px;\n  margin-top: 8px;\n  font-size: 12px;\n  width: 200px;\n"]))),En=(D.ZP.div(L||(L=(0,$.Z)(["\n  display: flex;\n"]))),D.ZP.button(N||(N=(0,$.Z)(["\n  background-color: #3470ff;\n  border: none;\n  color: white;\n  border-radius: 12px;\n  width: 168px;\n  height: 44px;\n  margin-top: -30px;\n  margin-left: auto;\n  margin-right: 20px;\n\n  &:hover {\n    background-color: blue;\n  }\n"])))),Ln=(0,D.ZP)(vn.j7p)(O||(O=(0,$.Z)(["\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  cursor: pointer;\n\n  &:hover {\n    color: blue;\n  }\n"]))),Nn=D.ZP.span(q||(q=(0,$.Z)(["\n  color: blue;\n  margin-left: 41px;\n"])));bn().setAppElement("#root");var On=function(n){var e=n.isOpen,r=n.onRequestClose,i=n.car;return i?(0,rn.jsx)(wn,{isOpen:e,onRequestClose:r,children:(0,rn.jsxs)(yn,{children:[(0,rn.jsx)(Ln,{size:24,onClick:r}),(0,rn.jsx)(Pn,{src:i.img,alt:"".concat(i.make," ").concat(i.model)}),(0,rn.jsxs)(kn,{children:[(0,rn.jsx)(dn,{children:i.make}),(0,rn.jsxs)(Cn,{children:[" ",i.model,", "]}),(0,rn.jsx)(zn,{children:i.year})]}),(0,rn.jsxs)(Bn,{children:[(0,rn.jsxs)(Sn,{children:[i.address," |"]}),(0,rn.jsxs)(Rn,{children:[" id: ",i.id," |"]}),(0,rn.jsxs)(Rn,{children:[" year: ",i.year," | "]}),(0,rn.jsxs)(Rn,{children:[" type: ",i.type," "]}),(0,rn.jsxs)(Sn,{children:["fuelConsumption: ",i.fuelConsumption," |"]}),(0,rn.jsxs)(Rn,{children:["Engine Size: ",i.engineSize]})]}),(0,rn.jsx)(Mn,{children:i.description}),(0,rn.jsx)(Mn,{children:(0,rn.jsx)("strong",{children:"Accessories and functionalities:"})}),(0,rn.jsxs)(An,{children:[" ",i.accessories]}),(0,rn.jsx)(Mn,{children:(0,rn.jsx)("strong",{children:"Rental Conditions:"})}),(0,rn.jsxs)(Mn,{children:[" ",i.rentalConditions," "]})," ",(0,rn.jsx)(Mn,{children:" Mileage:"})," ",(0,rn.jsx)(Nn,{children:i.mileage}),(0,rn.jsx)(Mn,{children:" Price:"}),(0,rn.jsx)(Nn,{children:i.rentalPrice}),(0,rn.jsx)(En,{children:"Rental Car"})]})}):null},qn=function(){var n,e,r=(0,U.useState)([]),i=(0,F.Z)(r,2),t=i[0],o=i[1],s=(0,U.useState)([]),a=(0,F.Z)(s,2),c=a[0],l=a[1],d=(0,U.useState)(!1),p=(0,F.Z)(d,2),x=p[0],h=p[1],u=(0,U.useState)(null),f=(0,F.Z)(u,2),g=f[0],m=f[1],Z=(0,U.useState)(!1),j=(0,F.Z)(Z,2),b=j[0],v=j[1],w=(0,V.TH)();(0,U.useEffect)((function(){var n=function(){var n=(0,T.Z)(J().mark((function n(){var e;return J().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K.Z.get("https://65d8a715c96fbb24c1bc0564.mockapi.io/carAdvert/cars");case 3:e=n.sent,o(e.data),l(e.data.slice(0,12)),e.data.length>12&&h(!0),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error("error",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);return(0,rn.jsxs)("div",{children:[(0,rn.jsx)(_.rU,{to:null!==(n=null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Back home"}),(0,rn.jsx)(tn,{}),(0,rn.jsx)(on,{children:c.map((function(n){var e=n.id,r=n.make,i=n.year,t=n.model,o=n.img,s=n.rentalPrice,a=n.address,c=n.rentalCompany,l=n.type,d=n.description,p=n.fuelConsumption,x=n.engineSize,h=n.accessories,u=n.rentalConditions,f=n.mileage;return(0,rn.jsxs)(sn,{children:[(0,rn.jsx)(an,{src:o,alt:"".concat(r)}),(0,rn.jsxs)(cn,{children:[(0,rn.jsxs)(ln,{children:[(0,rn.jsx)(dn,{children:r}),(0,rn.jsxs)(fn,{children:[(0,rn.jsx)(gn,{children:i}),(0,rn.jsx)(xn,{children:s})]})]}),(0,rn.jsxs)(pn,{children:[(0,rn.jsxs)(un,{children:[a," | "]}),(0,rn.jsxs)(un,{children:[c," | "]}),(0,rn.jsxs)(un,{children:[l," | "]}),(0,rn.jsxs)(gn,{children:[t," | "]}),(0,rn.jsxs)(un,{children:[e," | "]}),(0,rn.jsxs)(un,{children:[c," "]}),(0,rn.jsx)(Zn,{children:d})]}),(0,rn.jsx)(hn,{onClick:function(){return m({id:e,make:r,year:i,model:t,img:o,rentalPrice:s,address:a,rentalCompany:c,type:l,description:d,fuelConsumption:p,engineSize:x,accessories:h,rentalConditions:u,mileage:f}),void v(!0)},children:"Learn more"})]})]},e)}))}),(0,rn.jsx)(On,{isOpen:b,onRequestClose:function(){v(!1)},car:g}),x&&(0,rn.jsx)(mn,{onClick:function(){var n=t.slice(c.length,c.length+12);l((function(e){return[].concat((0,H.Z)(e),(0,H.Z)(n))})),c.length+n.length===t.length&&h(!1)},children:"Load More"})]})}}}]);
//# sourceMappingURL=180.46de79d2.chunk.js.map