(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return l}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(a),j=n,l=m["".concat(b,".").concat(j)]||m[j]||O[j]||c;return a?r.a.createElement(l,p(p({ref:t},o),{},{components:a})):r.a.createElement(l,p({ref:t},o))}));function l(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},500:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(1256)),b={id:"core.requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.requestcontext",id:"api/classes/core.requestcontext",isDocsHomePage:!1,title:"Class: RequestContext",description:"Class: RequestContext",source:"@site/docs/api/classes/core.requestcontext.md",slug:"/api/classes/core.requestcontext",permalink:"/docs/next/api/classes/core.requestcontext",editUrl:null,version:"current",sidebar_label:"RequestContext",sidebar:"API",previous:{title:"Class: ReflectMetadataProvider",permalink:"/docs/next/api/classes/core.reflectmetadataprovider"},next:{title:"Class: SerializationContext<T>",permalink:"/docs/next/api/classes/core.serializationcontext"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[]},{value:"map",id:"map",children:[]},{value:"counter",id:"counter",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"em",id:"em",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createAsync",id:"createasync",children:[]},{value:"createDomain",id:"createdomain",children:[]},{value:"currentRequestContext",id:"currentrequestcontext",children:[]},{value:"getEntityManager",id:"getentitymanager",children:[]}]}],o={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-requestcontext"},"Class: RequestContext"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".RequestContext"),Object(c.b)("p",null,"For node 14 and above it is suggested to use ",Object(c.b)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," instead,"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/async-local-storage/"}),"https://mikro-orm.io/docs/async-local-storage/")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"RequestContext"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new RequestContext"),"(",Object(c.b)("inlineCode",{parentName:"p"},"map"),": ",Object(c.b)("em",{parentName:"p"},"Map"),"<",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.requestcontext"}),Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"map")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"Map"),"<",Object(c.b)("em",{parentName:"td"},"string"),", ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.requestcontext"}),Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L14"}),"packages/core/src/utils/RequestContext.ts:14")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"id"},"id"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"id"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L14"}),"packages/core/src/utils/RequestContext.ts:14")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"map"},"map"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"map"),": ",Object(c.b)("em",{parentName:"p"},"Map"),"<",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"counter"},"counter"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Static")," ",Object(c.b)("strong",{parentName:"p"},"counter"),": ",Object(c.b)("em",{parentName:"p"},"number"),"= 1"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L13"}),"packages/core/src/utils/RequestContext.ts:13")),Object(c.b)("h2",{id:"accessors"},"Accessors"),Object(c.b)("h3",{id:"em"},"em"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"em"),"(): ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Returns default EntityManager."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L21"}),"packages/core/src/utils/RequestContext.ts:21")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[], ",Object(c.b)("inlineCode",{parentName:"p"},"next"),": (...",Object(c.b)("inlineCode",{parentName:"p"},"args"),": ",Object(c.b)("em",{parentName:"p"},"any"),"[]) => ",Object(c.b)("em",{parentName:"p"},"void"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain."),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"next")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(...",Object(c.b)("inlineCode",{parentName:"td"},"args"),": ",Object(c.b)("em",{parentName:"td"},"any"),"[]) => ",Object(c.b)("em",{parentName:"td"},"void"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L28"}),"packages/core/src/utils/RequestContext.ts:28")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createasync"},"createAsync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"createAsync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[], ",Object(c.b)("inlineCode",{parentName:"p"},"next"),": (...",Object(c.b)("inlineCode",{parentName:"p"},"args"),": ",Object(c.b)("em",{parentName:"p"},"any"),"[]) => ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">","): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain.\nAsync variant, when the ",Object(c.b)("inlineCode",{parentName:"p"},"next")," handler needs to be awaited (like in Koa)."),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"next")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(...",Object(c.b)("inlineCode",{parentName:"td"},"args"),": ",Object(c.b)("em",{parentName:"td"},"any"),"[]) => ",Object(c.b)("em",{parentName:"td"},"Promise"),"<",Object(c.b)("em",{parentName:"td"},"void"),">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L37"}),"packages/core/src/utils/RequestContext.ts:37")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createdomain"},"createDomain"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"createDomain"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#ormdomain"}),Object(c.b)("em",{parentName:"a"},"ORMDomain"))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#ormdomain"}),Object(c.b)("em",{parentName:"a"},"ORMDomain"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L60"}),"packages/core/src/utils/RequestContext.ts:60")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"currentrequestcontext"},"currentRequestContext"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"currentRequestContext"),"(): ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.requestcontext"}),Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("p",null,"Returns current RequestContext (if available)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.requestcontext"}),Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L47"}),"packages/core/src/utils/RequestContext.ts:47")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getentitymanager"},"getEntityManager"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getEntityManager"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name?"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Returns current EntityManager (if available)."),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'default'")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/utils/RequestContext.ts#L55"}),"packages/core/src/utils/RequestContext.ts:55")))}s.isMDXComponent=!0}}]);