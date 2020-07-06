(this["webpackJsonpcovid-estados"]=this["webpackJsonpcovid-estados"]||[]).push([[0],{109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},113:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"estados",(function(){return h}));var r=t(0),o=t.n(r),c=t(18),l=t.n(c),i=t(13),s=t(6),m=t(36),d=t(12),u=t(48),p=(t(91),t(49)),f="estados/load",v="estados/success",E="estados/error",g="estados/set",b={load:!1,fetch:!1,data:[],details:[],error:""};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case f:return Object(s.a)(Object(s.a)({},e),{},{load:!0});case v:return Object(s.a)(Object(s.a)(Object(s.a)({},e),a.payload),{},{load:!1});case E:return Object(s.a)(Object(s.a)({},e),{},{error:a.payload,load:!1});case g:return Object(s.a)(Object(s.a)({},e),{},{estado:a.payload});default:return e}}var x=[];x=[].concat(Object(m.a)(x),[u.a]);var y=Object(d.createStore)(Object(d.combineReducers)(Object(s.a)({},n)),Object(p.composeWithDevTools)(d.applyMiddleware.apply(void 0,Object(m.a)(x)))),N=t(20),O=t(21),k=t(26),j=t(25),w=t(30),C=t.n(w),_=t(50),M=t(31),I=t.n(M),D=function(e){for(var a=e.split("\n"),t=[],n=a[0].split(","),r=1;r<a.length;r++){for(var o={},c=a[r].split(","),l=0;l<n.length;l++)o[n[l].replace(/\s/g,"").toLowerCase()]=c[l];t.push(o)}return t};function S(e){var a={"-":" ",a:"\xe1|\xe0|\xe3|\xe2|\xc0|\xc1|\xc3|\xc2",e:"\xe9|\xe8|\xea|\xc9|\xc8|\xca",i:"\xed|\xec|\xee|\xcd|\xcc|\xce",o:"\xf3|\xf2|\xf4|\xf5|\xd3|\xd2|\xd4|\xd5",u:"\xfa|\xf9|\xfb|\xfc|\xda|\xd9|\xdb|\xdc",c:"\xe7|\xc7",n:"\xf1|\xd1"};for(var t in e=e.toLowerCase(),a)e=e.replace(new RegExp(a[t],"g"),t);return e}var A=function(){return function(){var e=Object(_.a)(C.a.mark((function e(a,t){var n,r,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:f}),e.prev=1,e.next=4,I.a.get("https://api.airtable.com/v0/appelr2zBXKCJPWJS/covidmx?api_key=keymOwmuSwgNcTH7p&sort%5B0%5D%5Bfield%5D=estado");case 4:return n=e.sent,r=n.data.records,e.next=8,I.a.get("https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos/estados_hoy.csv").then((function(e){return D(e.data)}));case 8:o=e.sent,c=r.map((function(e){return Object(s.a)({option:e.fields.estado,url:"/estado/".concat(S(e.fields.estado)),id:S(e.fields.estado)},e.fields)})),a({type:v,payload:{data:c,details:o}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),a({type:E,payload:e.t0});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}()},q=t(78),R=t(8),B=t(5),P=(t(109),t(4)),T=t.n(P),F=(t(110),function(e){var a=e.children,t=e.direction,n=void 0===t?"row":t,r=e.alignItems,c=void 0===r?"":r,l=e.className,i=void 0===l?"":l;return o.a.createElement("div",{className:"container direction-".concat(n," ").concat(c," ").concat(i)},a)});F.prototype={children:T.a.element.isRequired,direction:T.a.oneOf(["column","row"]),alignItems:T.a.oneOf(["center","end"]),className:T.a.string};var H=F,L=t(79),U=(t(111),function(e){var a=e.options,t=void 0===a?{}:a,n=e.placeholder,c=e.type,l=Object(r.useState)(!1),i=Object(L.a)(l,2),s=i[0],m=i[1],d=Object(B.g)().id;return Object(r.useEffect)((function(){m(!1)}),[d]),o.a.createElement("nav",{className:"states ".concat(c)},o.a.createElement("button",{className:"states-action",onClick:function(){return m(!s)},type:"button"},n),s&&o.a.createElement("div",{className:"states-options"},t.map((function(e,a){return o.a.createElement(R.b,{className:"states-option ".concat((t=e,d===t.id?"active":"")),to:e.url,key:a},e.option);var t}))))});U.defaultProps={placeholder:"select",type:"blue"},U.prototype={placeholder:T.a.object.isRequired,type:T.a.oneOf(["blue","white"]),options:T.a.arrayOf(T.a.shape({option:T.a.string,url:T.a.string}))};var z=U,Q=(t(113),function(e){var a=e.title,t=e.value;return o.a.createElement("div",{className:"counter"},o.a.createElement("p",null,a),o.a.createElement("span",null,t))});Q.prototype={title:T.a.string.isRequired,value:T.a.number.isRequired};var W=Q,J=function(e){var a=e.children,t=e.variant;return o.a.createElement("span",{className:"badge badge-".concat(t)},a)},V=function(e){var a=e.children,t=e.direction,n=void 0===t?"row":t,r=e.color,c=void 0===r?"base":r;return o.a.createElement("div",{className:"box direction-".concat(n," color-").concat(c)},a)},G=function(e){var a=e.image,t=e.text,n=e.link,r=void 0===n?"#":n;return o.a.createElement("a",{className:"icon",href:r,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",null,o.a.createElement("img",{src:a,alt:t})),o.a.createElement("span",null,t))},X=function(e){var a=e.v,t="";return t="whatsapp"===a[0]?"https://api.whatsapp.com/send?phone=".concat(a[1],"&text=Hola%20BC"):"correo"===a[0]?"mailto:".concat(a[1]):a[1],o.a.createElement("div",null,o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a[0].toUpperCase()))},Y=t(51),K=function(e){return o.a.createElement(Y.WaveLoading,Object.assign({color:"#5176FF"},e))},Z=(t(149),t(54)),$=t.n(Z);var ee=Object(i.b)((function(e){var a=e.estados;return{estados:a.data,load:a.load}}))((function(e){var a=e.estados,t=e.load;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(K,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"cover"},o.a.createElement("h1",{className:"mobile-title"},"Directorio",o.a.createElement("br",null),"COVID Mx"),o.a.createElement("img",{src:$.a,alt:"Home COVID CodeandoMexico"})),o.a.createElement("div",{className:"msg"},o.a.createElement("h1",{className:"desk-title"},"Directorio",o.a.createElement("br",null),"COVID Mx"),o.a.createElement("p",null,"Una espacio con informaci\xf3n oficial por estado para quien no sabe qu\xe9 hacer"),o.a.createElement(z,{options:a,placeholder:"[SELECCIONA]"})))))})),ae=t(55),te=Object(ae.a)((function(e,a){var t=e.estados,n=t.data,r=t.details,o=n.find((function(e){return e.id===a}))||{},c=o.option,l=c;switch(c){case"Estado de M\xe9xico":l="M\xe9xico"}var i=r.find((function(e){return e.estado===l&&l.trim()}));return Object(s.a)(Object(s.a)({},o),i)}),(function(e){return e}));var ne=function(){return o.a.createElement("h2",null,"P\xe1gina no encontrada")},re=t(56),oe=t.n(re),ce=t(57),le=t.n(ce),ie=t(58),se=t.n(ie),me=t(59),de=t.n(me),ue=t(60),pe=t.n(ue);function fe(e){var a=e.item,t=[],n=[];return a&&(a.violencia_genero_en_linea&&"no"!==a.violencia_genero_en_linea&&(t=a.violencia_genero_en_linea.split(",").map((function(e){return e.split(" ")}))),a.violencia_genero_telefono&&"no"!==a.violencia_genero_telefono&&(n=a.violencia_genero_telefono.split(","))),o.a.createElement(H,{direction:"column",className:"bgBlue"},o.a.createElement(H,{className:"mobileColumn pd-1"},o.a.createElement(H,{direction:"column",alignItems:"center"},o.a.createElement("h1",null,"Informaci\xf3n relevante"),o.a.createElement("img",{src:de.a,alt:"Informaci\xf3n relevante",className:"movileHide"})),o.a.createElement(H,{direction:"column"},o.a.createElement(V,{direction:"column"},o.a.createElement(H,null,o.a.createElement("h3",null,"L\xedneas de atenci\xf3n a violencia de g\xe9nero")),o.a.createElement(H,null,o.a.createElement(H,{direction:"column"},n.length>0&&o.a.createElement(H,null,"Tel\xe9fonos:"," ",o.a.createElement("div",null,n.map((function(e,a){return o.a.createElement("div",{key:a},e)})))),t.length>0&&o.a.createElement(H,null,"En l\xednea:"," ",o.a.createElement("div",null,t.map((function(e,a){return o.a.createElement(X,{key:a,v:e})}))))),o.a.createElement("img",{src:pe.a,alt:"Tel\xe9fono"}))),o.a.createElement(H,null,"no"!==a.programas&&o.a.createElement(G,{image:le.a,text:"Programas",link:a.programas}),"no"!==a.whatsapp&&o.a.createElement(G,{image:se.a,text:"whatsapp",link:a.whatsapp}),"no"!==a.centros_salud&&o.a.createElement(G,{image:oe.a,text:"Centros de salud",link:a.centros_salud})))),o.a.createElement(H,{alignItems:"center",className:"pd-1"},o.a.createElement("h4",null,"Para m\xe1s informaci\xf3n: "),o.a.createElement("a",{href:a.web,className:"button",target:"_blank",rel:"noopener noreferrer",style:{padding:"1rem"}},o.a.createElement("button",null,"SITIO WEB OFICIAL"))))}var ve=t(61),Ee=t.n(ve),ge=t(62),be=t.n(ge),he=t(63),xe=t.n(he),ye=t(64),Ne=t.n(ye),Oe=t(65),ke=t.n(Oe),je={app_android:{icon:be.a,text:"App-and"},sms:{icon:Ne.a,text:"Sms"},app_ios:{icon:ke.a,text:"App-ios"},prueba_web:{icon:xe.a,text:"Sitio Web"}};function we(e){var a=e.item,t=0===Object.keys(je).filter((function(e){return"no"!==a[e]})).length;return o.a.createElement(H,{className:"jumbotron color-primary"},o.a.createElement(H,{direction:"column",alignItems:"center"},o.a.createElement(H,{direction:"column"},o.a.createElement("h2",{className:"title"},"\xbfTienes s\xedntomas?"),o.a.createElement("h4",{className:"subtitle"},"Haz la prueba en l\xednea"),t&&o.a.createElement("p",null,"No hay informaci\xf3n por el momento."),!t&&o.a.createElement(H,{direction:"grid"},Object.keys(je).map((function(e){return"no"!==a[e]&&o.a.createElement(G,{image:je[e].icon,text:je[e].text})}))))),o.a.createElement(H,{className:"movileHide"},o.a.createElement("img",{src:Ee.a,alt:"Qu\xe9date en casa"})))}var Ce=t(66),_e=t.n(Ce),Me=t(24),Ie=t.n(Me),De={typeCases:[{key:"confirmadosnuevos",label:"Casos Nuevos"},{key:"confirmadostotales",label:"Casos Activos"},{key:"negativostotales",label:"Defunciones"}]},Se=(t(150),function(){var e=Object(B.g)().id,a=Object(i.c)((function(e){return e.estados})),t=a.data,n=a.load,r=Object(i.c)((function(a){return te(a,e)})),c=Object.keys(r).length>0,l=r||{},s=l.estado,m=l.telefono,d=m?m.split(","):[],u=function(e,a){var t=[];if("nivel"===a?t=[{text:"m\xe1ximo",value:"red"},{text:"alto",value:"orange"},{text:"medio",value:"yellow"},{text:"bajo",value:"green"}]:"tendencia"===a&&(t=[{text:"incremento",value:"red"},{text:"estable",value:"orange"},{text:"moderado",value:"yellow"},{text:"franco",value:"green"}]),0===t.length)return"red";for(var n in t)if(-1!==e.indexOf(t[n].text))return t[n].value};return n||c?n?o.a.createElement(K,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null,o.a.createElement(H,{direction:"column",className:"estado"},o.a.createElement(R.c,{className:"estado-codeando",to:"/"},o.a.createElement("img",{src:Ie.a,alt:"codeando mexico"})),o.a.createElement("div",{className:"flex"},o.a.createElement("h1",{className:"estado-title"},s),o.a.createElement("p",null,"\xbfTe interesa informaci\xf3n de otro estado?"),o.a.createElement(z,{options:t,type:"white",placeholder:"[SELECCIONA]"})),o.a.createElement("p",{className:"hidden-mobile"},"Qu\xe9date en casa y l\xe1vate las manos.")),o.a.createElement(H,{direction:"column",className:"pd-1"},o.a.createElement(V,{direction:"column"},o.a.createElement(H,null,De.typeCases.map((function(e,a){return o.a.createElement(W,{title:e.label,value:r[e.key],key:a})}))),o.a.createElement(H,{alignItems:"center",className:"pd-1"},o.a.createElement("button",null,"Conoce m\xe1s"))),o.a.createElement(V,{direction:"column"},o.a.createElement(H,null,o.a.createElement("h4",null,"L\xedneas locales de atenci\xf3n")),o.a.createElement(H,null,o.a.createElement("ul",{className:"decoration"},d.map((function(e,a){return o.a.createElement("li",{key:a},e)}))),o.a.createElement("img",{src:_e.a,alt:"Qu\xe9date en casa",className:"margin-left"})))),o.a.createElement(H,{className:"pd-1"},o.a.createElement(V,{direction:"column",color:"primary"},o.a.createElement("h3",null,"SEM\xc1FORO"),o.a.createElement("div",null,"Nivel de riesgo:",o.a.createElement(J,{variant:u(r["nivel de riesgo"],"nivel"),direction:"column"},r["nivel de riesgo"])),o.a.createElement("div",null,"Tendencia:",o.a.createElement(J,{variant:u(r.tendencia,"tendencia"),direction:"column"},r.tendencia)),o.a.createElement("p",{className:"mt"},r["medidas-01"])))),o.a.createElement(we,{item:r}),o.a.createElement(fe,{item:r}),o.a.createElement("div",{className:"content text-center color-primary"},o.a.createElement("p",null,"*Este es un esfuerzo voluntario, si encuentras informaci\xf3n incorrecta o quieres agregar algo, llena este ",o.a.createElement("a",{href:"https://docs.google.com/forms/d/1HhbbSjhkRB9rYA32lnm0b6e5mUQpDk8Eq_Yrl7-MUjI/viewform?edit_requested=true",target:"_blank",rel:"noopener noreferrer"},"formulario")),o.a.createElement("a",{href:"https://airtable.com/shrmp4rtdUkGu8BAn",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",null,"DESCARGAR DATOS")))):o.a.createElement(B.b,{component:ne})}),Ae=t(67),qe=t.n(Ae),Re=t(68),Be=t.n(Re),Pe=t(69),Te=t.n(Pe),Fe=t(70),He=t.n(Fe);t(151);var Le=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"about-container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:qe.a,alt:"Proyecto"})),o.a.createElement("div",{className:"col col-text"},o.a.createElement("h4",null,"Sobre el proyecto"),o.a.createElement("p",null,"Con el fin de la emergencia a nivel nacional, ahora es competencia de los 32 estados definir protocolos y medidas para hacer frente al COVID19. Este proyecto recopila, sistematiza y facilita el acceso a informaci\xf3n oficial relevante, l\xedneas de atenci\xf3n y medidas de restricci\xf3n o protecci\xf3n implementadas por los gobiernos estatales."))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:Be.a,alt:"Metodologia"})),o.a.createElement("div",{className:"col col-text"},o.a.createElement("h4",null,"Metodolog\xeda"),o.a.createElement("p",null,"\xbfQuieres replicar este proyecto en tu pa\xeds? Descarga nuestra metodolog\xeda. Si necesitas asistencia t\xe9cnica, puedes escribirnos a equipo@codeandomexico.org"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:Te.a,alt:"Codeando"})),o.a.createElement("div",{className:"col col-text"},o.a.createElement("h4",null,"Sobre CMX"),o.a.createElement("p",null,"Codeando M\xe9xico es una comunidad de hackers c\xedvicos que busca generar nuevas formas de participaci\xf3n ciudadana a trav\xe9s de la tecnolog\xeda. Colaboramos con personas de todos los perfiles: activistas, periodistas, funcionarias p\xfablicas, dise\xf1adoras.")))),o.a.createElement("footer",{className:"sponsors"},o.a.createElement("div",{className:"about-container"},o.a.createElement("h4",null,"Con el apoyo de"),o.a.createElement("img",{src:He.a,alt:"NDI logo"}))))},Ue=t(71),ze=t.n(Ue),Qe=t(72),We=t.n(Qe),Je=t(73),Ve=t.n(Je),Ge=t(74),Xe=t.n(Ge);t(152);var Ye=function(){return o.a.createElement("header",{className:"nav-main"},o.a.createElement(R.c,{to:"/"},o.a.createElement("img",{className:"nav-codeando",src:ze.a,alt:"codeando mexico"})),o.a.createElement("div",{className:"nav-sobre"},o.a.createElement(R.c,{className:"nav-link",to:"/sobre-el-proyecto"},"Sobre el proyecto"),o.a.createElement("div",null,o.a.createElement("a",{href:"https://www.facebook.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"nav-redes",src:We.a,alt:"facebook"})),o.a.createElement("a",{href:"https://twitter.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"nav-redes",src:Ve.a,alt:"twitter"})),o.a.createElement("a",{href:"https://github.com/CodeandoMexico/covid-estados",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"nav-redes",src:Xe.a,alt:"github"})))))},Ke=t(75),Ze=t.n(Ke),$e=t(76),ea=t.n($e),aa=t(77),ta=t.n(aa);t(153);var na=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"footer"},o.a.createElement(R.c,{to:"/"},o.a.createElement("img",{src:Ie.a,alt:"codeando mexico"})),o.a.createElement("p",null,"Hecho con ",o.a.createElement("span",{role:"img","aria-label":"sheep"},"\u2764\ufe0f")," por la comunidad de"," ",o.a.createElement("a",{className:"footer-link",href:"http://codeandomexico.org/",target:"_blank",rel:"noopener noreferrer"},"Codeando M\xe9xico")),o.a.createElement("div",{className:"footer-social"},o.a.createElement(R.c,{className:"footer-link",to:"/sobre-el-proyecto"},"Sobre el proyecto"),o.a.createElement("div",null,o.a.createElement("a",{href:"https://www.facebook.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"footer-redes",src:Ze.a,alt:"facebook"})),o.a.createElement("a",{href:"https://twitter.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"footer-redes",src:ea.a,alt:"twitter"})),o.a.createElement("a",{href:"https://github.com/CodeandoMexico/covid-estados",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"footer-redes",src:ta.a,alt:"github"}))))))},ra=(t(154),t(27)),oa=function(e){Object(k.a)(t,e);var a=Object(j.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(O.a)(t,[{key:"componentDidMount",value:function(){this.logPageChange(this.props.location.pathname,this.props.location.search)}},{key:"componentDidUpdate",value:function(e){var a=e.location,t=this.props.location,n=t.pathname,r=t.search,o=n!==a.pathname,c=r!==a.search;(o||c)&&this.logPageChange(n,r)}},{key:"logPageChange",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e+a,n=window,r=n.location;ra.a.set(Object(s.a)({page:t,location:"".concat(r.origin).concat(t)},this.props.options)),ra.a.pageview(t)}},{key:"render",value:function(){return null}}]),t}(r.Component),ca=function(){return o.a.createElement(B.b,{component:oa})},la=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=!0;return e&&ra.a.initialize("UA-170809396-1"),e},ia=function(e){Object(k.a)(t,e);var a=Object(j.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(O.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.actions.getEstados)()}},{key:"render",value:function(){var e=Object(q.a)();return o.a.createElement(R.a,{history:e},la()&&o.a.createElement(ca,null),o.a.createElement(Ye,null),o.a.createElement(B.d,null,o.a.createElement(B.a,{from:"/home",to:"/"}),o.a.createElement(B.b,{exact:!0,path:"/",component:ee}),o.a.createElement(B.b,{path:"/estado/:id",component:Se}),o.a.createElement(B.b,{path:"/sobre-el-proyecto",component:Le}),o.a.createElement(B.b,{component:ee})),o.a.createElement(na,null))}}]),t}(o.a.Component),sa=Object(i.b)(null,(function(e){return{actions:Object(d.bindActionCreators)({getEstados:A},e)}}))(ia);l.a.render(o.a.createElement(i.a,{store:y},o.a.createElement(sa,null)),document.getElementById("codeandocovid"))},24:function(e,a,t){e.exports=t.p+"static/media/codeandomexico-bco.90b7b0e1.svg"},54:function(e,a,t){e.exports=t.p+"static/media/home.684f0a9a.svg"},56:function(e,a,t){e.exports=t.p+"static/media/hospital.6bd8ce18.svg"},57:function(e,a,t){e.exports=t.p+"static/media/docs.9c1bdd82.svg"},58:function(e,a,t){e.exports=t.p+"static/media/whatsapp.ce506480.svg"},59:function(e,a,t){e.exports=t.p+"static/media/cat.a1700742.svg"},60:function(e,a,t){e.exports=t.p+"static/media/telephone2.d2f3f5fa.svg"},61:function(e,a,t){e.exports=t.p+"static/media/ilovehome.c766b930.svg"},62:function(e,a,t){e.exports=t.p+"static/media/android.c7af8d3d.svg"},63:function(e,a,t){e.exports=t.p+"static/media/web.4066e7fc.svg"},64:function(e,a,t){e.exports=t.p+"static/media/sms.aafdda80.svg"},65:function(e,a,t){e.exports=t.p+"static/media/apple.ee0404f0.svg"},66:function(e,a,t){e.exports=t.p+"static/media/telephone.ddad123c.svg"},67:function(e,a,t){e.exports=t.p+"static/media/project.9ac0bc31.svg"},68:function(e,a,t){e.exports=t.p+"static/media/methodology.b629a41a.svg"},69:function(e,a,t){e.exports=t.p+"static/media/codeando.86926323.svg"},70:function(e,a,t){e.exports=t.p+"static/media/ndi.062d38e3.png"},71:function(e,a,t){e.exports=t.p+"static/media/codeandomexico.88b693a3.svg"},72:function(e,a,t){e.exports=t.p+"static/media/facebook.98871f7e.svg"},73:function(e,a,t){e.exports=t.p+"static/media/twitter.1c8514bf.svg"},74:function(e,a,t){e.exports=t.p+"static/media/github.4814f3ab.svg"},75:function(e,a,t){e.exports=t.p+"static/media/facebook-bco.ad72b4c9.svg"},76:function(e,a,t){e.exports=t.p+"static/media/twitter-bco.2d9c572a.svg"},77:function(e,a,t){e.exports=t.p+"static/media/github-bco.961cc756.svg"},82:function(e,a,t){e.exports=t(155)}},[[82,1,2]]]);
//# sourceMappingURL=main.fce0d7dc.chunk.js.map