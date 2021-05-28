(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72003],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),k=c(r),d=n,u=k["".concat(i,".").concat(d)]||k[d]||m[d]||p;return r?a.createElement(u,o(o({ref:t},l),{},{components:r})):a.createElement(u,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<p;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},65624:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return l}});var a=r(74034),n=r(79973),p=(r(67294),r(3905)),o={id:"core.syntaxerrorexception",title:"Class: SyntaxErrorException",sidebar_label:"SyntaxErrorException",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/classes/core.syntaxerrorexception",id:"version-4.5/api/classes/core.syntaxerrorexception",isDocsHomePage:!1,title:"Class: SyntaxErrorException",description:"core.SyntaxErrorException",source:"@site/versioned_docs/version-4.5/api/classes/core.syntaxerrorexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.syntaxerrorexception",permalink:"/docs/api/classes/core.syntaxerrorexception",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1622236326,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"SyntaxErrorException",frontMatter:{id:"core.syntaxerrorexception",title:"Class: SyntaxErrorException",sidebar_label:"SyntaxErrorException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: ServerException",permalink:"/docs/api/classes/core.serverexception"},next:{title:"Class: TableExistsException",permalink:"/docs/api/classes/core.tableexistsexception"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],c={toc:i};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".SyntaxErrorException"),(0,p.kt)("p",null,"Exception for a syntax error in a statement detected in the driver."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},(0,p.kt)("em",{parentName:"a"},"ServerException"))),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"SyntaxErrorException")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new SyntaxErrorException"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.syntaxerrorexception"},(0,p.kt)("em",{parentName:"a"},"SyntaxErrorException"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"previous")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.syntaxerrorexception"},(0,p.kt)("em",{parentName:"a"},"SyntaxErrorException"))),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"code"},"code"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"code"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#code"},"code")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"errmsg"},"errmsg"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#errmsg"},"errmsg")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"errno"},"errno"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"errno"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#errno"},"errno")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"message"},"message"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"message"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#message"},"message")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"name"},"name"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#name"},"name")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,p.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Optional override for formatting stack traces"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,p.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,p.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,p.kt)("p",null,"\u25b8 (",(0,p.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,p.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"err")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,p.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"any")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#preparestacktrace"},"prepareStackTrace")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#sqlmessage"},"sqlMessage")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"sqlstate"},"sqlState"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#sqlstate"},"sqlState")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stack"},"stack"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"stack"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#stack"},"stack")),(0,p.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception#stacktracelimit"},"stackTraceLimit")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,p.kt)("em",{parentName:"p"},"object"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Create .stack property on a target object"),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"object"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serverexception"},"ServerException")),(0,p.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}l.isMDXComponent=!0}}]);