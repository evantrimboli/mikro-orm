(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),l=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=l(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},o=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),O=l(a),o=r,j=O["".concat(c,".").concat(o)]||O[o]||s[o]||n;return a?b.a.createElement(j,p(p({ref:t},m),{},{components:a})):b.a.createElement(j,p({ref:t},m))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=o;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var m=2;m<n;m++)c[m]=a[m];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},757:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),b=a(7),n=(a(0),a(1256)),c={id:"core.eventsubscriber",title:"Interface: EventSubscriber<T>",sidebar_label:"EventSubscriber",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/core.eventsubscriber",id:"api/interfaces/core.eventsubscriber",isDocsHomePage:!1,title:"Interface: EventSubscriber<T>",description:"Interface: EventSubscriber",source:"@site/docs/api/interfaces/core.eventsubscriber.md",slug:"/api/interfaces/core.eventsubscriber",permalink:"/docs/next/api/interfaces/core.eventsubscriber",editUrl:null,version:"current",sidebar_label:"EventSubscriber",sidebar:"API",previous:{title:"Interface: EventArgs<T>",permalink:"/docs/next/api/interfaces/core.eventargs"},next:{title:"Interface: FactoryOptions",permalink:"/docs/next/api/interfaces/core.factoryoptions"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"afterCreate",id:"aftercreate",children:[]},{value:"afterDelete",id:"afterdelete",children:[]},{value:"afterFlush",id:"afterflush",children:[]},{value:"afterTransactionCommit",id:"aftertransactioncommit",children:[]},{value:"afterTransactionRollback",id:"aftertransactionrollback",children:[]},{value:"afterTransactionStart",id:"aftertransactionstart",children:[]},{value:"afterUpdate",id:"afterupdate",children:[]},{value:"beforeCreate",id:"beforecreate",children:[]},{value:"beforeDelete",id:"beforedelete",children:[]},{value:"beforeFlush",id:"beforeflush",children:[]},{value:"beforeTransactionCommit",id:"beforetransactioncommit",children:[]},{value:"beforeTransactionRollback",id:"beforetransactionrollback",children:[]},{value:"beforeTransactionStart",id:"beforetransactionstart",children:[]},{value:"beforeUpdate",id:"beforeupdate",children:[]},{value:"getSubscribedEntities",id:"getsubscribedentities",children:[]},{value:"onFlush",id:"onflush",children:[]},{value:"onInit",id:"oninit",children:[]}]}],m={toc:i};function l(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"interface-eventsubscribert"},"Interface: EventSubscriber<T",">"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".EventSubscriber"),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"EventSubscriber"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"aftercreate"},"afterCreate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"afterCreate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L25"}),"packages/core/src/events/EventSubscriber.ts:25")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"afterdelete"},"afterDelete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"afterDelete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L29"}),"packages/core/src/events/EventSubscriber.ts:29")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"afterflush"},"afterFlush"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"afterFlush"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.flusheventargs"}),Object(n.b)("em",{parentName:"a"},"FlushEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.flusheventargs"}),Object(n.b)("em",{parentName:"a"},"FlushEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L32"}),"packages/core/src/events/EventSubscriber.ts:32")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"aftertransactioncommit"},"afterTransactionCommit"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"afterTransactionCommit"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L37"}),"packages/core/src/events/EventSubscriber.ts:37")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"aftertransactionrollback"},"afterTransactionRollback"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"afterTransactionRollback"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L39"}),"packages/core/src/events/EventSubscriber.ts:39")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"aftertransactionstart"},"afterTransactionStart"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"afterTransactionStart"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L35"}),"packages/core/src/events/EventSubscriber.ts:35")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"afterupdate"},"afterUpdate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"afterUpdate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L27"}),"packages/core/src/events/EventSubscriber.ts:27")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"beforecreate"},"beforeCreate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"beforeCreate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L24"}),"packages/core/src/events/EventSubscriber.ts:24")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"beforedelete"},"beforeDelete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"beforeDelete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L28"}),"packages/core/src/events/EventSubscriber.ts:28")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"beforeflush"},"beforeFlush"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"beforeFlush"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.flusheventargs"}),Object(n.b)("em",{parentName:"a"},"FlushEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.flusheventargs"}),Object(n.b)("em",{parentName:"a"},"FlushEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L30"}),"packages/core/src/events/EventSubscriber.ts:30")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"beforetransactioncommit"},"beforeTransactionCommit"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"beforeTransactionCommit"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-10"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L36"}),"packages/core/src/events/EventSubscriber.ts:36")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"beforetransactionrollback"},"beforeTransactionRollback"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"beforeTransactionRollback"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-11"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L38"}),"packages/core/src/events/EventSubscriber.ts:38")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"beforetransactionstart"},"beforeTransactionStart"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"beforeTransactionStart"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-12"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.transactioneventargs"}),Object(n.b)("em",{parentName:"a"},"TransactionEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L34"}),"packages/core/src/events/EventSubscriber.ts:34")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"beforeupdate"},"beforeUpdate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"beforeUpdate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-13"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L26"}),"packages/core/src/events/EventSubscriber.ts:26")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getsubscribedentities"},"getSubscribedEntities"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"getSubscribedEntities"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entityname"}),Object(n.b)("em",{parentName:"a"},"EntityName")),"<T",">","[]"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entityname"}),Object(n.b)("em",{parentName:"a"},"EntityName")),"<T",">","[]"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L22"}),"packages/core/src/events/EventSubscriber.ts:22")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"onflush"},"onFlush"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"onFlush"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.flusheventargs"}),Object(n.b)("em",{parentName:"a"},"FlushEventArgs")),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("h4",{id:"parameters-14"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.flusheventargs"}),Object(n.b)("em",{parentName:"a"},"FlushEventArgs")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L31"}),"packages/core/src/events/EventSubscriber.ts:31")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"oninit"},"onInit"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"onInit"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("h4",{id:"parameters-15"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.eventargs"}),Object(n.b)("em",{parentName:"a"},"EventArgs")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/da25f9e/packages/core/src/events/EventSubscriber.ts#L23"}),"packages/core/src/events/EventSubscriber.ts:23")))}l.isMDXComponent=!0}}]);