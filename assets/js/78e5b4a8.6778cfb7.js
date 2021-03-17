(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,d=b["".concat(a,".").concat(f)]||b[f]||u[f]||o;return r?i.a.createElement(d,c(c({ref:t},p),{},{components:r})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},525:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(8),o=(r(0),r(1052)),a={id:"core.settings",title:"Interface: Settings",sidebar_label:"Settings",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.settings",id:"api/interfaces/core.settings",isDocsHomePage:!1,title:"Interface: Settings",description:"Interface: Settings",source:"@site/docs/api/interfaces/core.settings.md",slug:"/api/interfaces/core.settings",permalink:"/docs/next/api/interfaces/core.settings",editUrl:null,version:"current",sidebar_label:"Settings",sidebar:"API",previous:{title:"Interface: SerializedPrimaryKeyOptions<T>",permalink:"/docs/next/api/interfaces/core.serializedprimarykeyoptions"},next:{title:"Interface: TransactionEventArgs",permalink:"/docs/next/api/interfaces/core.transactioneventargs"}},s=[{value:"Properties",id:"properties",children:[{value:"configPaths",id:"configpaths",children:[]},{value:"tsConfigPath",id:"tsconfigpath",children:[]},{value:"useTsNode",id:"usetsnode",children:[]}]}],p={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-settings"},"Interface: Settings"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".Settings"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"configpaths"},"configPaths"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"configPaths"),": ",Object(o.b)("em",{parentName:"p"},"string"),"[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2b29cb7/packages/core/src/utils/ConfigurationLoader.ts#L168"},"packages/core/src/utils/ConfigurationLoader.ts:168")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tsconfigpath"},"tsConfigPath"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"tsConfigPath"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2b29cb7/packages/core/src/utils/ConfigurationLoader.ts#L167"},"packages/core/src/utils/ConfigurationLoader.ts:167")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"usetsnode"},"useTsNode"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"useTsNode"),": ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2b29cb7/packages/core/src/utils/ConfigurationLoader.ts#L166"},"packages/core/src/utils/ConfigurationLoader.ts:166")))}l.isMDXComponent=!0}}]);