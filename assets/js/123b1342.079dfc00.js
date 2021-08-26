(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42538],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,u=k["".concat(p,".").concat(m)]||k[m]||d[m]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97202:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o={id:"core.NotNullConstraintViolationException",title:"Class: NotNullConstraintViolationException",sidebar_label:"NotNullConstraintViolationException",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/core.NotNullConstraintViolationException",id:"api/classes/core.NotNullConstraintViolationException",isDocsHomePage:!1,title:"Class: NotNullConstraintViolationException",description:"core.NotNullConstraintViolationException",source:"@site/docs/api/classes/core.NotNullConstraintViolationException.md",sourceDirName:"api/classes",slug:"/api/classes/core.NotNullConstraintViolationException",permalink:"/docs/next/api/classes/core.NotNullConstraintViolationException",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.NotNullConstraintViolationException",title:"Class: NotNullConstraintViolationException",sidebar_label:"NotNullConstraintViolationException",custom_edit_url:null},sidebar:"API",previous:{title:"NotFoundError",permalink:"/docs/next/api/classes/core.NotFoundError"},next:{title:"NullCacheAdapter",permalink:"/docs/next/api/classes/core.NullCacheAdapter"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".NotNullConstraintViolationException"),(0,i.kt)("p",null,"Exception for a NOT NULL constraint violation detected in the driver."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},(0,i.kt)("inlineCode",{parentName:"a"},"ConstraintViolationException"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"NotNullConstraintViolationException"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new NotNullConstraintViolationException"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"previous"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"previous")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Error"))))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/exceptions.ts#L12"},"packages/core/src/exceptions.ts:12")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"code"},"code"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"code"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#code"},"code")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errmsg"},"errmsg"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#errmsg"},"errmsg")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errno"},"errno"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"errno"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#errno"},"errno")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"message"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#message"},"message")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#name"},"name")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#sqlmessage"},"sqlMessage")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqlstate"},"sqlState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#sqlstate"},"sqlState")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stack"},"stack"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stack"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#stack"},"stack")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,"docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Optional override for formatting stack traces"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Error"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#preparestacktrace"},"prepareStackTrace")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/node/globals.d.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#stacktracelimit"},"stackTraceLimit")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/node/globals.d.ts:13"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Create .stack property on a target object"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.ConstraintViolationException#capturestacktrace"},"captureStackTrace")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/node/globals.d.ts:4"))}d.isMDXComponent=!0}}]);