(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),d=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=d(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=d(a),o=r,O=m["".concat(l,".").concat(o)]||m[o]||s[o]||b;return a?n.a.createElement(O,c(c({ref:t},i),{},{components:a})):n.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=o;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},661:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(8),b=(a(0),a(1026)),l={id:"knex.knex-1.aliasquerybuilder",title:"Interface: AliasQueryBuilder<TRecord, TResult>",sidebar_label:"AliasQueryBuilder",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.aliasquerybuilder",id:"version-4.5/api/interfaces/knex.knex-1.aliasquerybuilder",isDocsHomePage:!1,title:"Interface: AliasQueryBuilder<TRecord, TResult>",description:"Interface: AliasQueryBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.aliasquerybuilder.md",slug:"/api/interfaces/knex.knex-1.aliasquerybuilder",permalink:"/docs/api/interfaces/knex.knex-1.aliasquerybuilder",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618748354,formattedLastUpdatedAt:"4/18/2021",sidebar_label:"AliasQueryBuilder",sidebar:"version-4.5/API",previous:{title:"Interface: AliasDict",permalink:"/docs/api/interfaces/knex.knex-1.aliasdict"},next:{title:"Interface: AlterColumnBuilder",permalink:"/docs/api/interfaces/knex.knex-1.altercolumnbuilder"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],i={toc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-aliasquerybuildertrecord-tresult"},"Interface: AliasQueryBuilder<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".AliasQueryBuilder"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"AliasQueryBuilder")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.select"},Object(b.b)("em",{parentName:"a"},"Select"))))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"},Object(b.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(b.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(b.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(b.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...aliases")),Object(b.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:918"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"},Object(b.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(b.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(b.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(b.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"aliases")),Object(b.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:929"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(b.b)("td",{parentName:"tr",align:"left"},"(",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"Dict"),"<any",">",")[]"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),">",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(b.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(b.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(b.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...aliases")),Object(b.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:941"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(b.b)("td",{parentName:"tr",align:"left"},"(",Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"Dict"),"<any",">",")[]"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult",">",", TRecord",">",", IncompatibleToAlt<ArrayMember<AliasUT",">",", string, never",">",">",", UnionToIntersection<IncompatibleToAlt<AliasUT ",Object(b.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(b.b)("em",{parentName:"td"},"extends")," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.ref"},Object(b.b)("em",{parentName:"a"},"Ref")),"<any, TMapping",">"," ? TMapping : I : ",Object(b.b)("em",{parentName:"td"},"never"),", Dict<any",">",", {}",">",">",">",">")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"aliases")),Object(b.b)("td",{parentName:"tr",align:"left"},"AliasUT")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:953"))}d.isMDXComponent=!0}}]);