(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22546],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91552:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"core.EntityHelper",title:"Class: EntityHelper",sidebar_label:"EntityHelper",custom_edit_url:null},l=void 0,c={unversionedId:"api/classes/core.EntityHelper",id:"api/classes/core.EntityHelper",isDocsHomePage:!1,title:"Class: EntityHelper",description:"core.EntityHelper",source:"@site/docs/api/classes/core.EntityHelper.md",sourceDirName:"api/classes",slug:"/api/classes/core.EntityHelper",permalink:"/docs/next/api/classes/core.EntityHelper",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.EntityHelper",title:"Class: EntityHelper",sidebar_label:"EntityHelper",custom_edit_url:null},sidebar:"API",previous:{title:"EntityFactory",permalink:"/docs/next/api/classes/core.EntityFactory"},next:{title:"EntityLoader",permalink:"/docs/next/api/classes/core.EntityLoader"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"decorate",id:"decorate",children:[]}]}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".EntityHelper"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new EntityHelper"),"()"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"decorate"},"decorate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"decorate"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"em"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyEntity")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.EntityMetadata"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityMetadata")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.EntityManager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.IDatabaseDriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.Connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/entity/EntityHelper.ts#L16"},"packages/core/src/entity/EntityHelper.ts:16")))}d.isMDXComponent=!0}}]);