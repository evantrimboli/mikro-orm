(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=o(a),O=n,j=m["".concat(c,".").concat(O)]||m[O]||d[O]||b;return a?r.a.createElement(j,i(i({ref:t},l),{},{components:a})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},843:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"knex.knex.joinraw",title:"Interface: JoinRaw<TRecord, TResult>",sidebar_label:"JoinRaw",hide_title:!0},i={unversionedId:"api/interfaces/knex.knex.joinraw",id:"version-4.4/api/interfaces/knex.knex.joinraw",isDocsHomePage:!1,title:"Interface: JoinRaw<TRecord, TResult>",description:"Interface: JoinRaw",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.joinraw.md",slug:"/api/interfaces/knex.knex.joinraw",permalink:"/docs/api/interfaces/knex.knex.joinraw",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.joinraw.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612450440,sidebar_label:"JoinRaw",sidebar:"version-4.4/API",previous:{title:"Interface: JoinClause",permalink:"/docs/api/interfaces/knex.knex.joinclause"},next:{title:"Interface: Logger",permalink:"/docs/api/interfaces/knex.knex.logger"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],l={toc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-joinrawtrecord-tresult"},"Interface: JoinRaw<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".JoinRaw"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"JoinRaw"))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"JoinRaw"),"(",Object(b.b)("inlineCode",{parentName:"p"},"tableName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"binding?"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number")," ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," Date ","|"," ",Object(b.b)("em",{parentName:"p"},"Buffer")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("em",{parentName:"p"},"number"),"[] ","|"," Date[] ","|"," ",Object(b.b)("em",{parentName:"p"},"boolean"),"[] ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict")),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tableName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"binding?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"null")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," Date ","|"," ",Object(b.b)("em",{parentName:"td"},"Buffer")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("em",{parentName:"td"},"number"),"[] ","|"," Date[] ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean"),"[] ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<",Object(b.b)("em",{parentName:"td"},"any"),">"," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1171"))}o.isMDXComponent=!0}}]);