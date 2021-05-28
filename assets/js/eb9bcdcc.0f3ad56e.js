(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66729],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return k}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||o;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49554:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var i=t(74034),r=t(79973),o=(t(67294),t(3905)),a={id:"knex.knex-1.pgconnectionconfig",title:"Interface: PgConnectionConfig",sidebar_label:"PgConnectionConfig",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.pgconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.pgconnectionconfig",isDocsHomePage:!1,title:"Interface: PgConnectionConfig",description:"knex.Knex.PgConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.pgconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.pgconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.pgconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1622236326,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"PgConnectionConfig",frontMatter:{id:"knex.knex-1.pgconnectionconfig",title:"Interface: PgConnectionConfig",sidebar_label:"PgConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: OrderBy<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-1.orderby"},next:{title:"Interface: PoolConfig",permalink:"/docs/api/interfaces/knex.knex-1.poolconfig"}},p=[{value:"Properties",id:"properties",children:[{value:"application_name",id:"application_name",children:[]},{value:"connectionString",id:"connectionstring",children:[]},{value:"connectionTimeoutMillis",id:"connectiontimeoutmillis",children:[]},{value:"database",id:"database",children:[]},{value:"host",id:"host",children:[]},{value:"keepAlive",id:"keepalive",children:[]},{value:"keepAliveInitialDelayMillis",id:"keepaliveinitialdelaymillis",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"statement_timeout",id:"statement_timeout",children:[]},{value:"stream",id:"stream",children:[]},{value:"user",id:"user",children:[]}]}],s={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".PgConnectionConfig"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"application_name"},"application","_","name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"application","_","name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2057"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connectionstring"},"connectionString"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"connectionString"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2050"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connectiontimeoutmillis"},"connectionTimeoutMillis"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"connectionTimeoutMillis"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2054"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"database"},"database"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"database"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2046"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"host"},"host"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"host"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2049"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"keepalive"},"keepAlive"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"keepAlive"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2051"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"keepaliveinitialdelaymillis"},"keepAliveInitialDelayMillis"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"keepAliveInitialDelayMillis"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2055"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"password"},"password"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"password"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2047"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"port"},"port"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"port"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2048"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ssl"},"ssl"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"ssl"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")," ","|"," ConnectionOptions"),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2056"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statement_timeout"},"statement","_","timeout"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"statement","_","timeout"),": ",(0,o.kt)("em",{parentName:"p"},"number")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"false")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2053"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stream"},"stream"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"stream"),": ",(0,o.kt)("em",{parentName:"p"},"Duplex")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2052"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"user"},"user"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"user"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2045"))}d.isMDXComponent=!0}}]);