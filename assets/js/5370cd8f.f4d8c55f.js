(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3866],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},15373:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={id:"knex.knex-1.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",custom_edit_url:null,hide_title:!0},l="Interface: OnConflictQueryBuilder<TRecord, TResult>",c={unversionedId:"api/interfaces/knex.knex-1.onconflictquerybuilder",id:"version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder",isDocsHomePage:!1,title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",description:"knex.Knex.OnConflictQueryBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.onconflictquerybuilder",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1630286327,formattedLastUpdatedAt:"8/30/2021",frontMatter:{id:"knex.knex-1.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MySqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},next:{title:"OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig"}},u=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Methods",id:"methods",children:[{value:"ignore",id:"ignore",children:[]},{value:"merge",id:"merge",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-onconflictquerybuildertrecord-tresult"},"Interface: OnConflictQueryBuilder<TRecord, TResult",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OnConflictQueryBuilder"),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TRecord"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TResult"))))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"ignore"},"ignore"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"ignore"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,o.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,o.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:456"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"merge"},"merge"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"merge"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"data?"),": ",(0,o.kt)("em",{parentName:"p"},"Readonly"),"<Partial<AnyOrUnknownToOther<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},(0,o.kt)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">","): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,o.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"data?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"Readonly"),"<Partial<AnyOrUnknownToOther<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},(0,o.kt)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,o.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:457"))}p.isMDXComponent=!0}}]);