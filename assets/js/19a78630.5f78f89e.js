(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return t?a.a.createElement(f,c(c({ref:n},u),{},{components:t})):a.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(1026)),o={id:"knex.knex-1.multikeyforeignconstraintbuilder",title:"Interface: MultikeyForeignConstraintBuilder",sidebar_label:"MultikeyForeignConstraintBuilder",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",id:"version-4.5/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",isDocsHomePage:!1,title:"Interface: MultikeyForeignConstraintBuilder",description:"Interface: MultikeyForeignConstraintBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder.md",slug:"/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",permalink:"/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618748354,formattedLastUpdatedAt:"4/18/2021",sidebar_label:"MultikeyForeignConstraintBuilder",sidebar:"version-4.5/API",previous:{title:"Interface: MsSqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mssqlconnectionconfig"},next:{title:"Interface: MySql2ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mysql2connectionconfig"}},l=[{value:"Methods",id:"methods",children:[{value:"references",id:"references",children:[]}]}],u={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-multikeyforeignconstraintbuilder"},"Interface: MultikeyForeignConstraintBuilder"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MultikeyForeignConstraintBuilder"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"references"},"references"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"references"),"(",Object(i.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},Object(i.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"columnNames")),Object(i.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(i.b)("em",{parentName:"td"},"string"),"[]")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},Object(i.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1826"))}s.isMDXComponent=!0}}]);