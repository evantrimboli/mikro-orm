(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12078],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},50030:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"core.CountOptions",title:"Interface: CountOptions<T, P>",sidebar_label:"CountOptions",custom_edit_url:null},p=void 0,l={unversionedId:"api/interfaces/core.CountOptions",id:"api/interfaces/core.CountOptions",isDocsHomePage:!1,title:"Interface: CountOptions<T, P>",description:"core.CountOptions",source:"@site/docs/api/interfaces/core.CountOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.CountOptions",permalink:"/docs/next/api/interfaces/core.CountOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.CountOptions",title:"Interface: CountOptions<T, P>",sidebar_label:"CountOptions",custom_edit_url:null},sidebar:"API",previous:{title:"ConnectionOptions",permalink:"/docs/next/api/interfaces/core.ConnectionOptions"},next:{title:"DeleteOptions",permalink:"/docs/next/api/interfaces/core.DeleteOptions"}},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"filters",id:"filters",children:[]},{value:"groupBy",id:"groupby",children:[]},{value:"having",id:"having",children:[]},{value:"populate",id:"populate",children:[]},{value:"schema",id:"schema",children:[]}]}],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".CountOptions"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string``never"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cache"},"cache"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cache"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L122"},"packages/core/src/drivers/IDatabaseDriver.ts:122")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"filters"},"filters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"filters"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L118"},"packages/core/src/drivers/IDatabaseDriver.ts:118")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"groupby"},"groupBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"groupBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L120"},"packages/core/src/drivers/IDatabaseDriver.ts:120")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"having"},"having"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"having"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#qbfilterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"QBFilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L121"},"packages/core/src/drivers/IDatabaseDriver.ts:121")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"populate"},"populate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"populate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoPath"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),">","[]"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L123"},"packages/core/src/drivers/IDatabaseDriver.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schema"},"schema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"schema"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L119"},"packages/core/src/drivers/IDatabaseDriver.ts:119")))}d.isMDXComponent=!0}}]);