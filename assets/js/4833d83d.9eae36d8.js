(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(t),s=r,f=b["".concat(l,".").concat(s)]||b[s]||d[s]||o;return t?a.a.createElement(f,i(i({ref:n},u),{},{components:t})):a.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},330:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(1026)),l={id:"knex.knex-1.columninfo",title:"Interface: ColumnInfo",sidebar_label:"ColumnInfo",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/knex.knex-1.columninfo",id:"version-4.5/api/interfaces/knex.knex-1.columninfo",isDocsHomePage:!1,title:"Interface: ColumnInfo",description:"Interface: ColumnInfo",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.columninfo.md",slug:"/api/interfaces/knex.knex-1.columninfo",permalink:"/docs/api/interfaces/knex.knex-1.columninfo",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618748354,formattedLastUpdatedAt:"4/18/2021",sidebar_label:"ColumnInfo",sidebar:"version-4.5/API",previous:{title:"Interface: ColumnBuilder",permalink:"/docs/api/interfaces/knex.knex-1.columnbuilder"},next:{title:"Interface: ColumnNameQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.columnnamequerybuilder"}},c=[{value:"Properties",id:"properties",children:[{value:"defaultValue",id:"defaultvalue",children:[]},{value:"maxLength",id:"maxlength",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"type",id:"type",children:[]}]}],u={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-columninfo"},"Interface: ColumnInfo"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".ColumnInfo"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"defaultvalue"},"defaultValue"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"defaultValue"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},Object(o.b)("em",{parentName:"a"},"Value"))),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1849"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"maxlength"},"maxLength"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"maxLength"),": ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1851"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"nullable"},"nullable"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"nullable"),": ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1852"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"type"},"type"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"type"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1850"))}p.isMDXComponent=!0}}]);