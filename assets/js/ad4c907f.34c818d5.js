(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29489],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return l},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},l=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),g=s(a),d=n,N=g["".concat(o,".").concat(d)]||g[d]||k[d]||i;return a?r.createElement(N,m(m({ref:e},l),{},{components:a})):r.createElement(N,m({ref:e},l))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,m=new Array(i);m[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,m[1]=p;for(var s=2;s<i;s++)m[s]=a[s];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40894:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return k}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),m={id:"migrations.migrator",title:"Class: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},p="Class: Migrator",o={unversionedId:"api/classes/migrations.migrator",id:"version-4.5/api/classes/migrations.migrator",isDocsHomePage:!1,title:"Class: Migrator",description:"migrations.Migrator",source:"@site/versioned_docs/version-4.5/api/classes/migrations.migrator.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.migrator",permalink:"/docs/api/classes/migrations.migrator",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1629680795,formattedLastUpdatedAt:"8/23/2021",frontMatter:{id:"migrations.migrator",title:"Class: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MigrationStorage",permalink:"/docs/api/classes/migrations.migrationstorage"},next:{title:"TsMorphMetadataProvider",permalink:"/docs/api/classes/reflection.tsmorphmetadataprovider"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"generator",id:"generator",children:[]},{value:"options",id:"options",children:[]},{value:"runner",id:"runner",children:[]},{value:"schemaGenerator",id:"schemagenerator",children:[]},{value:"storage",id:"storage",children:[]},{value:"umzug",id:"umzug",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createInitialMigration",id:"createinitialmigration",children:[]},{value:"createMigration",id:"createmigration",children:[]},{value:"down",id:"down",children:[]},{value:"ensureMigrationsDirExists",id:"ensuremigrationsdirexists",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"getPendingMigrations",id:"getpendingmigrations",children:[]},{value:"getSchemaDiff",id:"getschemadiff",children:[]},{value:"getStorage",id:"getstorage",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"prefix",id:"prefix",children:[]},{value:"resolve",id:"resolve",children:[]},{value:"runInTransaction",id:"runintransaction",children:[]},{value:"runMigrations",id:"runmigrations",children:[]},{value:"up",id:"up",children:[]},{value:"validateInitialMigration",id:"validateinitialmigration",children:[]}]}],l={toc:s};function k(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-migrator"},"Class: Migrator"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations"},"migrations"),".Migrator"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new Migrator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",">","): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrator"},(0,i.kt)("em",{parentName:"a"},"Migrator"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrator"},(0,i.kt)("em",{parentName:"a"},"Migrator"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L20"},"packages/migrations/src/Migrator.ts:20")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L16"},"packages/migrations/src/Migrator.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"driver"},"driver"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L14"},"packages/migrations/src/Migrator.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generator"},"generator"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"generator"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationgenerator"},(0,i.kt)("em",{parentName:"a"},"MigrationGenerator"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L19"},"packages/migrations/src/Migrator.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L17"},"packages/migrations/src/Migrator.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"runner"},"runner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"runner"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationrunner"},(0,i.kt)("em",{parentName:"a"},"MigrationRunner"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L18"},"packages/migrations/src/Migrator.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schemagenerator"},"schemaGenerator"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"schemaGenerator"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemagenerator"},(0,i.kt)("em",{parentName:"a"},"SchemaGenerator"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L15"},"packages/migrations/src/Migrator.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"storage"},"storage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"storage"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},(0,i.kt)("em",{parentName:"a"},"MigrationStorage"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L20"},"packages/migrations/src/Migrator.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"umzug"},"umzug"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"umzug"),": ",(0,i.kt)("em",{parentName:"p"},"Umzug")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L13"},"packages/migrations/src/Migrator.ts:13")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createinitialmigration"},"createInitialMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createInitialMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},(0,i.kt)("em",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},(0,i.kt)("em",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L62"},"packages/migrations/src/Migrator.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createmigration"},"createMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"blank?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"initial?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},(0,i.kt)("em",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"blank")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initial")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationresult"},(0,i.kt)("em",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L41"},"packages/migrations/src/Migrator.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"down"},"down"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"down"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},(0,i.kt)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},(0,i.kt)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L139"},"packages/migrations/src/Migrator.ts:139")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ensuremigrationsdirexists"},"ensureMigrationsDirExists"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"ensureMigrationsDirExists"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L239"},"packages/migrations/src/Migrator.ts:239")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationrow"},(0,i.kt)("em",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrationrow"},(0,i.kt)("em",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L123"},"packages/migrations/src/Migrator.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpendingmigrations"},"getPendingMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPendingMigrations"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},(0,i.kt)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},(0,i.kt)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L129"},"packages/migrations/src/Migrator.ts:129")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getschemadiff"},"getSchemaDiff"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"getSchemaDiff"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"blank"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"initial"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"blank")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initial")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L165"},"packages/migrations/src/Migrator.ts:165")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getstorage"},"getStorage"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getStorage"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},(0,i.kt)("em",{parentName:"a"},"MigrationStorage"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationstorage"},(0,i.kt)("em",{parentName:"a"},"MigrationStorage"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L143"},"packages/migrations/src/Migrator.ts:143")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected"),(0,i.kt)("strong",{parentName:"p"},"initialize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"MigrationClass"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#constructor"},(0,i.kt)("em",{parentName:"a"},"Constructor")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration")),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"name?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MigrationClass")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#constructor"},(0,i.kt)("em",{parentName:"a"},"Constructor")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"down")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("em",{parentName:"td"},"Promise"),"<void",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"up")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("em",{parentName:"td"},"Promise"),"<void",">")))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L155"},"packages/migrations/src/Migrator.ts:155")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"prefix"},"prefix"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"prefix"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": T): T"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string"),"[] ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"from?"),": ",(0,i.kt)("em",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"migrations?"),": ",(0,i.kt)("em",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"to?"),": ",(0,i.kt)("em",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"transaction?"),": ",(0,i.kt)("em",{parentName:"td"},"any"),"  }")))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L189"},"packages/migrations/src/Migrator.ts:189")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resolve"},"resolve"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected"),(0,i.kt)("strong",{parentName:"p"},"resolve"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"file"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"down")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("em",{parentName:"td"},"Promise"),"<void",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"up")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("em",{parentName:"td"},"Promise"),"<void",">")))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L147"},"packages/migrations/src/Migrator.ts:147")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"runintransaction"},"runInTransaction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"runInTransaction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"trx"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,i.kt)("em",{parentName:"p"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"down"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"trx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"down"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L229"},"packages/migrations/src/Migrator.ts:229")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"runmigrations"},"runMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"runMigrations"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,i.kt)("em",{parentName:"p"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"down"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),(0,i.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"down"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Migration[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L214"},"packages/migrations/src/Migrator.ts:214")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"up"},"up"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"up"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},(0,i.kt)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/migrations#migrateoptions"},(0,i.kt)("em",{parentName:"a"},"MigrateOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#umzugmigration"},(0,i.kt)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L135"},"packages/migrations/src/Migrator.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"validateinitialmigration"},"validateInitialMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"validateInitialMigration"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,i.kt)("p",null,"Initial migration can be created only if:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"no previous migrations were generated or executed"),(0,i.kt)("li",{parentName:"ol"},"existing schema do not contain any of the tables defined by metadata")),(0,i.kt)("p",null,"If existing schema contains all of the tables already, we return true, based on that we mark the migration as already executed.\nIf only some of the tables are present, exception is thrown."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/Migrator.ts#L87"},"packages/migrations/src/Migrator.ts:87")))}k.isMDXComponent=!0}}]);