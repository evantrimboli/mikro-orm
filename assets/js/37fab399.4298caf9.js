(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1256:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),b=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=b(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(t),u=r,f=l["".concat(i,".").concat(u)]||l[u]||d[u]||c;return t?o.a.createElement(f,a(a({ref:n},s),{},{components:t})):o.a.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},311:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),c=(t(0),t(1256)),i={id:"knex.knex.socketconnectionconfig",title:"Interface: SocketConnectionConfig",sidebar_label:"SocketConnectionConfig",hide_title:!0},a={unversionedId:"api/interfaces/knex.knex.socketconnectionconfig",id:"version-4.4/api/interfaces/knex.knex.socketconnectionconfig",isDocsHomePage:!1,title:"Interface: SocketConnectionConfig",description:"Interface: SocketConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.socketconnectionconfig.md",slug:"/api/interfaces/knex.knex.socketconnectionconfig",permalink:"/docs/api/interfaces/knex.knex.socketconnectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.socketconnectionconfig.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612450440,sidebar_label:"SocketConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: Select<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.select"},next:{title:"Interface: Sql",permalink:"/docs/api/interfaces/knex.knex.sql"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"password",id:"password",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],s={toc:p};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-socketconnectionconfig"},"Interface: SocketConnectionConfig"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".SocketConnectionConfig"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"SocketConnectionConfig"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"database"},"database"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"database"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2067"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"debug"},"debug"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"debug"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2068"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"password"},"password"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"password"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2066"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"socketpath"},"socketPath"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"socketPath"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2064"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"user"},"user"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"user"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2065"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"expirationChecker"),":"))}b.isMDXComponent=!0}}]);