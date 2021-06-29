(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21070],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44168:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i={id:"core.changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/enums/core.changesettype",id:"version-4.5/api/enums/core.changesettype",isDocsHomePage:!1,title:"Enumeration: ChangeSetType",description:"core.ChangeSetType",source:"@site/versioned_docs/version-4.5/api/enums/core.changesettype.md",sourceDirName:"api/enums",slug:"/api/enums/core.changesettype",permalink:"/docs/api/enums/core.changesettype",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1624963236,formattedLastUpdatedAt:"6/29/2021",sidebar_label:"ChangeSetType",frontMatter:{id:"core.changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Enumeration: Cascade",permalink:"/docs/api/enums/core.cascade"},next:{title:"Enumeration: EventType",permalink:"/docs/api/enums/core.eventtype"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"CREATE",id:"create",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"UPDATE",id:"update",children:[]}]}],u={toc:p};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ChangeSetType"),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,o.kt)("h3",{id:"create"},"CREATE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"CREATE"),': = "create"'),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L28"},"packages/core/src/unit-of-work/ChangeSet.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"delete"},"DELETE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"DELETE"),': = "delete"'),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L30"},"packages/core/src/unit-of-work/ChangeSet.ts:30")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"update"},"UPDATE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"UPDATE"),': = "update"'),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L29"},"packages/core/src/unit-of-work/ChangeSet.ts:29")))}l.isMDXComponent=!0}}]);