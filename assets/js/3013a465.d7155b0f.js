(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),d=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(a),o=r,s=u["".concat(c,".").concat(o)]||u[o]||m[o]||b;return a?n.a.createElement(s,l(l({ref:t},i),{},{components:a})):n.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=o;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},265:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(8),b=(a(0),a(1110)),c={id:"knex.knex-1.rawquerybuilder",title:"Interface: RawQueryBuilder<TRecord, TResult>",sidebar_label:"RawQueryBuilder",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.rawquerybuilder",id:"version-4.5/api/interfaces/knex.knex-1.rawquerybuilder",isDocsHomePage:!1,title:"Interface: RawQueryBuilder<TRecord, TResult>",description:"Interface: RawQueryBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.rawquerybuilder.md",slug:"/api/interfaces/knex.knex-1.rawquerybuilder",permalink:"/docs/api/interfaces/knex.knex-1.rawquerybuilder",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1616995422,formattedLastUpdatedAt:"3/29/2021",sidebar_label:"RawQueryBuilder",sidebar:"version-4.5/API",previous:{title:"Interface: RawBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.rawbuilder"},next:{title:"Interface: Ref<TSrc, TMapping>",permalink:"/docs/api/interfaces/knex.knex-1.ref"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],i={toc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-rawquerybuildertrecord-tresult"},"Interface: RawQueryBuilder<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".RawQueryBuilder"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"RawQueryBuilder")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.whereraw"},Object(b.b)("em",{parentName:"a"},"WhereRaw"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.groupby"},Object(b.b)("em",{parentName:"a"},"GroupBy"))))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"RawQueryBuilder"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"bindings?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.valuedict"},Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," readonly (",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",")[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"TResult")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"bindings?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.valuedict"},Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value"))," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," readonly (",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},Object(b.b)("em",{parentName:"a"},"Value"))," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",")[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1489"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"RawQueryBuilder"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"raw"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"TResult")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"raw")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.raw"},Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1493"))}d.isMDXComponent=!0}}]);