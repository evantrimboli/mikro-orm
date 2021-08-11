(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67525],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return l},kt:function(){return g}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),s=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},l=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=s(a),g=n,c=d["".concat(m,".").concat(g)]||d[g]||k[g]||i;return a?r.createElement(c,o(o({ref:e},l),{},{components:a})):r.createElement(c,o({ref:e},l))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8219:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),o={id:"migrations.migrationgenerator",title:"Class: MigrationGenerator",sidebar_label:"MigrationGenerator",custom_edit_url:null,hide_title:!0},p="Class: MigrationGenerator",m={unversionedId:"api/classes/migrations.migrationgenerator",id:"version-4.5/api/classes/migrations.migrationgenerator",isDocsHomePage:!1,title:"Class: MigrationGenerator",description:"migrations.MigrationGenerator",source:"@site/versioned_docs/version-4.5/api/classes/migrations.migrationgenerator.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.migrationgenerator",permalink:"/docs/api/classes/migrations.migrationgenerator",editUrl:null,version:"4.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1628697990,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"migrations.migrationgenerator",title:"Class: MigrationGenerator",sidebar_label:"MigrationGenerator",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Migration",permalink:"/docs/api/classes/migrations.migration"},next:{title:"MigrationRunner",permalink:"/docs/api/classes/migrations.migrationrunner"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"driver",id:"driver",children:[]},{value:"namingStrategy",id:"namingstrategy",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createStatement",id:"createstatement",children:[]},{value:"generate",id:"generate",children:[]},{value:"generateJSMigrationFile",id:"generatejsmigrationfile",children:[]},{value:"generateTSMigrationFile",id:"generatetsmigrationfile",children:[]}]}],l={toc:s};function k(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-migrationgenerator"},"Class: MigrationGenerator"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations"},"migrations"),".MigrationGenerator"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new MigrationGenerator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"namingStrategy"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},(0,i.kt)("em",{parentName:"a"},"NamingStrategy")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions")),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationgenerator"},(0,i.kt)("em",{parentName:"a"},"MigrationGenerator"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"driver")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"namingStrategy")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.namingstrategy"},(0,i.kt)("em",{parentName:"a"},"NamingStrategy")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationgenerator"},(0,i.kt)("em",{parentName:"a"},"MigrationGenerator"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationGenerator.ts#L5"},"packages/migrations/src/MigrationGenerator.ts:5")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"driver"},"driver"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"namingstrategy"},"namingStrategy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"namingStrategy"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},(0,i.kt)("em",{parentName:"a"},"NamingStrategy"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createstatement"},"createStatement"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createStatement"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"padLeft"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sql")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"padLeft")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationGenerator.ts#L30"},"packages/migrations/src/MigrationGenerator.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generate"},"generate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"diff"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[], ",(0,i.kt)("inlineCode",{parentName:"p"},"path?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("em",{parentName:"p"},"string"),"]",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"diff")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("em",{parentName:"p"},"string"),"]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationGenerator.ts#L11"},"packages/migrations/src/MigrationGenerator.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generatejsmigrationfile"},"generateJSMigrationFile"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generateJSMigrationFile"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"className"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"diff"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"className")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"diff")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"),"[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationGenerator.ts#L39"},"packages/migrations/src/MigrationGenerator.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generatetsmigrationfile"},"generateTSMigrationFile"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generateTSMigrationFile"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"className"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"diff"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"className")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"diff")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"),"[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationGenerator.ts#L53"},"packages/migrations/src/MigrationGenerator.ts:53")))}k.isMDXComponent=!0}}]);