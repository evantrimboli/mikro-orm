(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79985],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},72349:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),l={id:"knex.knex-1.joinraw",title:"Interface: JoinRaw<TRecord, TResult>",sidebar_label:"JoinRaw",custom_edit_url:null,hide_title:!0},o="Interface: JoinRaw<TRecord, TResult>",p={unversionedId:"api/interfaces/knex.knex-1.joinraw",id:"version-4.5/api/interfaces/knex.knex-1.joinraw",isDocsHomePage:!1,title:"Interface: JoinRaw<TRecord, TResult>",description:"knex.Knex.JoinRaw",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.joinraw.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.joinraw",permalink:"/docs/api/interfaces/knex.knex-1.joinraw",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1629680795,formattedLastUpdatedAt:"8/23/2021",frontMatter:{id:"knex.knex-1.joinraw",title:"Interface: JoinRaw<TRecord, TResult>",sidebar_label:"JoinRaw",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"JoinClause",permalink:"/docs/api/interfaces/knex.knex-1.joinclause"},next:{title:"Logger",permalink:"/docs/api/interfaces/knex.knex-1.logger"}},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-joinrawtrecord-tresult"},"Interface: JoinRaw<TRecord, TResult",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".JoinRaw"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TResult")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,i.kt)("h2",{id:"callable"},"Callable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"JoinRaw"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"tableName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"binding?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},(0,i.kt)("em",{parentName:"a"},"Value"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.valuedict"},(0,i.kt)("em",{parentName:"a"},"ValueDict")),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tableName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"binding?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},(0,i.kt)("em",{parentName:"a"},"Value"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.valuedict"},(0,i.kt)("em",{parentName:"a"},"ValueDict")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1177"))}u.isMDXComponent=!0}}]);