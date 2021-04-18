(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=l(a),O=n,d=m["".concat(c,".").concat(O)]||m[O]||s[O]||b;return a?r.a.createElement(d,p(p({ref:t},o),{},{components:a})):r.a.createElement(d,p({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},840:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),b=(a(0),a(1026)),c={id:"core.baseentity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.baseentity",id:"version-4.5/api/classes/core.baseentity",isDocsHomePage:!1,title:"Class: BaseEntity<T, PK, P>",description:"Class: BaseEntity",source:"@site/versioned_docs/version-4.5/api/classes/core.baseentity.md",slug:"/api/classes/core.baseentity",permalink:"/docs/api/classes/core.baseentity",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618748354,formattedLastUpdatedAt:"4/18/2021",sidebar_label:"BaseEntity",sidebar:"version-4.5/API",previous:{title:"Class: ArrayType<T>",permalink:"/docs/api/classes/core.arraytype"},next:{title:"Class: BigIntType",permalink:"/docs/api/classes/core.biginttype"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toPOJO",id:"topojo",children:[]},{value:"toReference",id:"toreference",children:[]}]}],o={toc:i};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-baseentityt-pk-p"},"Class: BaseEntity<T, PK, P",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".BaseEntity"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"PK")),Object(b.b)("td",{parentName:"tr",align:"left"},"keyof T"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#populate"},Object(b.b)("em",{parentName:"a"},"Populate")),"<T",">"," ","|"," ",Object(b.b)("em",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"))))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api/interfaces/core.iwrappedentity"},Object(b.b)("em",{parentName:"a"},"IWrappedEntity")),"<T, PK, P",">")),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new BaseEntity"),"<T, PK, P",">","(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.baseentity"},Object(b.b)("em",{parentName:"a"},"BaseEntity")),"<T, PK, P",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"PK")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol")),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.baseentity"},Object(b.b)("em",{parentName:"a"},"BaseEntity")),"<T, PK, P",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L5"},"packages/core/src/entity/BaseEntity.ts:5")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"assign"},"assign"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"assign"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L35"},"packages/core/src/entity/BaseEntity.ts:35")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"init"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"populated")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:"left"},"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L39"},"packages/core/src/entity/BaseEntity.ts:39")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L11"},"packages/core/src/entity/BaseEntity.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populated"},"populated"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"populated"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"populated")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:"left"},"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L15"},"packages/core/src/entity/BaseEntity.ts:15")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"args"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...args")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L27"},"packages/core/src/entity/BaseEntity.ts:27")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toobject"},"toObject"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toObject"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ignoreFields")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L23"},"packages/core/src/entity/BaseEntity.ts:23")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"topojo"},"toPOJO"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toPOJO"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L31"},"packages/core/src/entity/BaseEntity.ts:31")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toreference"},"toReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toReference"),"(): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.iwrappedentity"},"IWrappedEntity")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/BaseEntity.ts#L19"},"packages/core/src/entity/BaseEntity.ts:19")))}l.isMDXComponent=!0}}]);