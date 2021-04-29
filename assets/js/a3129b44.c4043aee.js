(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),m=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),o=m(a),d=r,s=o["".concat(c,".").concat(d)]||o[d]||O[d]||b;return a?n.a.createElement(s,p(p({ref:t},i),{},{components:a})):n.a.createElement(s,p({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},663:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),b=(a(0),a(1026)),c={id:"core.queryhelper",title:"Class: QueryHelper",sidebar_label:"QueryHelper",custom_edit_url:null},p={unversionedId:"api/classes/core.queryhelper",id:"api/classes/core.queryhelper",isDocsHomePage:!1,title:"Class: QueryHelper",description:"Class: QueryHelper",source:"@site/docs/api/classes/core.queryhelper.md",slug:"/api/classes/core.queryhelper",permalink:"/docs/next/api/classes/core.queryhelper",editUrl:null,version:"current",sidebar_label:"QueryHelper",sidebar:"API",previous:{title:"Class: Platform",permalink:"/docs/next/api/classes/core.platform"},next:{title:"Class: ReadOnlyException",permalink:"/docs/next/api/classes/core.readonlyexception"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"SUPPORTED_OPERATORS",id:"supported_operators",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getActiveFilters",id:"getactivefilters",children:[]},{value:"inlinePrimaryKeyObjects",id:"inlineprimarykeyobjects",children:[]},{value:"isFilterActive",id:"isfilteractive",children:[]},{value:"processCustomType",id:"processcustomtype",children:[]},{value:"processObjectParams",id:"processobjectparams",children:[]},{value:"processParams",id:"processparams",children:[]},{value:"processWhere",id:"processwhere",children:[]}]}],i={toc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-queryhelper"},"Class: QueryHelper"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".QueryHelper"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new QueryHelper"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.queryhelper"},Object(b.b)("em",{parentName:"a"},"QueryHelper"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.queryhelper"},Object(b.b)("em",{parentName:"a"},"QueryHelper"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"supported_operators"},"SUPPORTED","_","OPERATORS"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("inlineCode",{parentName:"p"},"Static")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"SUPPORTED","_","OPERATORS"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L11"},"packages/core/src/utils/QueryHelper.ts:11")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getactivefilters"},"getActiveFilters"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getActiveFilters"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<boolean ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"filters"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<FilterDef<any",">",">","): ",Object(b.b)("em",{parentName:"p"},"FilterDef"),"<any",">","[]"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<boolean ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"filters")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<FilterDef<any",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"FilterDef"),"<any",">","[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L165"},"packages/core/src/utils/QueryHelper.ts:165")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inlineprimarykeyobjects"},"inlinePrimaryKeyObjects"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"inlinePrimaryKeyObjects"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"where"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage")),", ",Object(b.b)("inlineCode",{parentName:"p"},"key?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"where")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"key?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L45"},"packages/core/src/utils/QueryHelper.ts:45")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isfilteractive"},"isFilterActive"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"isFilterActive"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"filterName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(b.b)("em",{parentName:"p"},"FilterDef"),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<boolean ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">","): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"filterName")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"FilterDef"),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<boolean ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L186"},"packages/core/src/utils/QueryHelper.ts:186")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processcustomtype"},"processCustomType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"processCustomType"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"cond"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),", ",Object(b.b)("inlineCode",{parentName:"p"},"key?"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"fromQuery?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"cond")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"key?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L198"},"packages/core/src/utils/QueryHelper.ts:198")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processobjectparams"},"processObjectParams"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"processObjectParams"),"(",Object(b.b)("inlineCode",{parentName:"p"},"params?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">","): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"{}")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L37"},"packages/core/src/utils/QueryHelper.ts:37")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processparams"},"processParams"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"processParams"),"(",Object(b.b)("inlineCode",{parentName:"p"},"params"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"params")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L13"},"packages/core/src/utils/QueryHelper.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processwhere"},"processWhere"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"processWhere"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"where"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage")),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),", ",Object(b.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"root?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"where")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage"))),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform"))),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:"left"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"root")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:"left"},"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#filterquery"},Object(b.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/efe512d/packages/core/src/utils/QueryHelper.ts#L73"},"packages/core/src/utils/QueryHelper.ts:73")))}m.isMDXComponent=!0}}]);