(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68412],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=l(r),m=n,u=k["".concat(s,".").concat(m)]||k[m]||d[m]||i;return r?a.createElement(u,o(o({ref:t},c),{},{components:r})):a.createElement(u,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},332:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=r(74034),n=r(79973),i=(r(67294),r(3905)),o={id:"core.FindOptions",title:"Interface: FindOptions<T, P>",sidebar_label:"FindOptions",custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/core.FindOptions",id:"api/interfaces/core.FindOptions",isDocsHomePage:!1,title:"Interface: FindOptions<T, P>",description:"core.FindOptions",source:"@site/docs/api/interfaces/core.FindOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.FindOptions",permalink:"/docs/next/api/interfaces/core.FindOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.FindOptions",title:"Interface: FindOptions<T, P>",sidebar_label:"FindOptions",custom_edit_url:null},sidebar:"API",previous:{title:"FindOneOrFailOptions",permalink:"/docs/next/api/interfaces/core.FindOneOrFailOptions"},next:{title:"FlatQueryOrderMap",permalink:"/docs/next/api/interfaces/core.FlatQueryOrderMap"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"disableIdentityMap",id:"disableidentitymap",children:[]},{value:"fields",id:"fields",children:[]},{value:"filters",id:"filters",children:[]},{value:"flags",id:"flags",children:[]},{value:"groupBy",id:"groupby",children:[]},{value:"having",id:"having",children:[]},{value:"limit",id:"limit",children:[]},{value:"lockMode",id:"lockmode",children:[]},{value:"lockTableAliases",id:"locktablealiases",children:[]},{value:"offset",id:"offset",children:[]},{value:"orderBy",id:"orderby",children:[]},{value:"populate",id:"populate",children:[]},{value:"refresh",id:"refresh",children:[]},{value:"schema",id:"schema",children:[]},{value:"strategy",id:"strategy",children:[]}]}],c={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".FindOptions"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string``never"))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"FindOptions"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.MatchingOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"MatchingOptions"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cache"},"cache"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cache"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L91"},"packages/core/src/drivers/IDatabaseDriver.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"convertCustomTypes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L95"},"packages/core/src/drivers/IDatabaseDriver.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"disableidentitymap"},"disableIdentityMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"disableIdentityMap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L96"},"packages/core/src/drivers/IDatabaseDriver.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fields"},"fields"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fields"),": readonly ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityfield"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityField")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),">","[]"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L97"},"packages/core/src/drivers/IDatabaseDriver.ts:97")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"filters"},"filters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"filters"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L103"},"packages/core/src/drivers/IDatabaseDriver.ts:103")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"flags"},"flags"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"flags"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.QueryFlag"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryFlag")),"[]"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L99"},"packages/core/src/drivers/IDatabaseDriver.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"groupby"},"groupBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"groupBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L100"},"packages/core/src/drivers/IDatabaseDriver.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"having"},"having"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"having"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#qbfilterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"QBFilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L101"},"packages/core/src/drivers/IDatabaseDriver.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"limit"},"limit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"limit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L92"},"packages/core/src/drivers/IDatabaseDriver.ts:92")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lockmode"},"lockMode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"lockMode"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LockMode#none"},(0,i.kt)("inlineCode",{parentName:"a"},"NONE"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LockMode#pessimistic_read"},(0,i.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_READ"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LockMode#pessimistic_write"},(0,i.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_WRITE"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LockMode#pessimistic_partial_write"},(0,i.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_PARTIAL_WRITE"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LockMode#pessimistic_write_or_fail"},(0,i.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_WRITE_OR_FAIL"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LockMode#pessimistic_partial_read"},(0,i.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_PARTIAL_READ"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LockMode#pessimistic_read_or_fail"},(0,i.kt)("inlineCode",{parentName:"a"},"PESSIMISTIC_READ_OR_FAIL"))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L104"},"packages/core/src/drivers/IDatabaseDriver.ts:104")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"locktablealiases"},"lockTableAliases"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"lockTableAliases"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L105"},"packages/core/src/drivers/IDatabaseDriver.ts:105")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"offset"},"offset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L93"},"packages/core/src/drivers/IDatabaseDriver.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"orderby"},"orderBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"orderBy"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.QueryOrderMap"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryOrderMap"))),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L90"},"packages/core/src/drivers/IDatabaseDriver.ts:90")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"populate"},"populate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"populate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoPath"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),">","[]"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L89"},"packages/core/src/drivers/IDatabaseDriver.ts:89")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"refresh"},"refresh"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"refresh"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L94"},"packages/core/src/drivers/IDatabaseDriver.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schema"},"schema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"schema"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L98"},"packages/core/src/drivers/IDatabaseDriver.ts:98")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"strategy"},"strategy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"strategy"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.LoadStrategy"},(0,i.kt)("inlineCode",{parentName:"a"},"LoadStrategy"))),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/acc3a89/packages/core/src/drivers/IDatabaseDriver.ts#L102"},"packages/core/src/drivers/IDatabaseDriver.ts:102")))}d.isMDXComponent=!0}}]);