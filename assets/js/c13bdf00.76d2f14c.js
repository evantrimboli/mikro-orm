(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76680],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58370:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a={title:"Logging"},l={unversionedId:"debugging",id:"version-4.2/debugging",isDocsHomePage:!1,title:"Logging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-4.2/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/4.2/debugging",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/debugging.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1622236326,formattedLastUpdatedAt:"5/28/2021",frontMatter:{title:"Logging"},sidebar:"version-4.2/docs",previous:{title:"Result cache",permalink:"/docs/4.2/caching"},next:{title:"Smart Nested Populate",permalink:"/docs/4.2/nested-populate"}},s=[{value:"Custom Logger",id:"custom-logger",children:[]},{value:"Logger Namespaces",id:"logger-namespaces",children:[]},{value:"Highlighters",id:"highlighters",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n});\n")),(0,i.kt)("p",null,"By doing this ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),(0,i.kt)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),(0,i.kt)("h2",{id:"custom-logger"},"Custom Logger"),(0,i.kt)("p",null,"You can also provide your own logger via ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," option. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),(0,i.kt)("h2",{id:"logger-namespaces"},"Logger Namespaces"),(0,i.kt)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest.\nJust specify array of them via the ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),(0,i.kt)("p",null,"Currently, there are 4 namespaces \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"query-params"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,i.kt)("p",null,"If you provide ",(0,i.kt)("inlineCode",{parentName:"p"},"query-params")," then you must also provide ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," in order for it to take effect."),(0,i.kt)("h2",{id:"highlighters"},"Highlighters"),(0,i.kt)("p",null,"Previously Highlight.js was used to highlight various things in the CLI,\nlike SQL and mongo queries, or migrations or entities generated via CLI.\nWhile the library worked fine, it was causing performance issues mainly\nfor those bundling via webpack and using lambdas, as the library was huge."),(0,i.kt)("p",null,"In v4 highlighting is disabled by default, and there are 2 highlighters\nyou can optionally use (you need to install them first)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SqlHighlighter } from '@mikro-orm/sql-highlighter';\n\nMikroORM.init({\n  highlighter: new SqlHighlighter(),\n  // ...\n});\n")),(0,i.kt)("p",null,"For MongoDB you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoHighlighter")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/mongo-highlighter"),"\npackage."))}p.isMDXComponent=!0}}]);