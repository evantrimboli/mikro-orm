(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return a?n.a.createElement(d,c(c({ref:t},l),{},{components:a})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},455:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),i=(a(0),a(1026)),o={layout:"homepage",title:"MikroORM v2.7",hide_title:!0},c={unversionedId:"index",id:"version-2.7/index",isDocsHomePage:!1,title:"MikroORM v2.7",description:"NPM version",source:"@site/versioned_docs/version-2.7/index.md",slug:"/index",permalink:"/docs/2.7/index",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/index.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619153319,formattedLastUpdatedAt:"4/23/2021"},b=[{value:"Table of contents",id:"table-of-contents",children:[]}],l={toc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/mikro-orm"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/mikro-orm.svg",alt:"NPM version"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://join.slack.com/t/mikroorm/shared_invite/enQtNTM1ODYzMzM4MDk3LTBmZDNlODBhYjcxNGZlMTkyYzJmODAwMDhjODc0ZTM2MzQ2Y2VkOGM0ODYzYTJjMDRiZDdjMmIxYjI2OTY0Y2U"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/chat-on%20slack-blue.svg",alt:"Chat on slack"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/mikro-orm"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/mikro-orm.svg",alt:"Downloads"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://coveralls.io/r/mikro-orm/mikro-orm?branch=master"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/coveralls/mikro-orm/mikro-orm.svg",alt:"Coverage Status"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://codeclimate.com/github/mikro-orm/mikro-orm/maintainability"},Object(i.b)("img",{parentName:"a",src:"https://api.codeclimate.com/v1/badges/27999651d3adc47cfa40/maintainability",alt:"Maintainability"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://david-dm.org/mikro-orm/mikro-orm"},Object(i.b)("img",{parentName:"a",src:"https://david-dm.org/mikro-orm/mikro-orm.svg",alt:"Dependency Status"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/actions?workflow=tests"},Object(i.b)("img",{parentName:"a",src:"https://github.com/mikro-orm/mikro-orm/workflows/tests/badge.svg?branch=master",alt:"Build Status"}))),Object(i.b)("p",null,"MikroORM is TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns."),Object(i.b)("p",null,"Currently it supports MongoDB, MySQL, PostgreSQL and SQLite databases, but more can be supported via custom drivers right now. It has first class TypeScript support, while staying back compatible with Vanilla JavaScript."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Heavily inspired by ",Object(i.b)("a",{parentName:"p",href:"https://www.doctrine-project.org/"},"Doctrine")," and ",Object(i.b)("a",{parentName:"p",href:"https://nextras.org/orm/"},"Nextras Orm"),".")),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Overview",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/installation"},"Installation & Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/defining-entities"},"Defining entities")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/entity-manager"},"Persisting, cascading and fetching entities with ",Object(i.b)("inlineCode",{parentName:"a"},"EntityManager"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/repositories"},"Using ",Object(i.b)("inlineCode",{parentName:"a"},"EntityRepository")," instead of ",Object(i.b)("inlineCode",{parentName:"a"},"EntityManager"))))),Object(i.b)("li",{parentName:"ul"},"Fundamentals",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/identity-map"},"Identity Map and Request Context")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/entity-references"},"Entity references")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/entity-constructors"},"Using entity constructors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/collections"},"Collections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/unit-of-work"},"Unit of Work")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/transactions"},"Transactions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/cascading"},"Cascading persist and remove")))),Object(i.b)("li",{parentName:"ul"},"Advanced features",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/nested-populate"},"Smart nested populate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/query-conditions"},"Smart query conditions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/query-builder"},"Using ",Object(i.b)("inlineCode",{parentName:"a"},"QueryBuilder"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/serializing"},"Serializing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/entity-helper"},"Updating entity values with ",Object(i.b)("inlineCode",{parentName:"a"},"IEntity.assign()"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/property-validation"},"Property validation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/lifecycle-hooks"},"Lifecycle hooks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/naming-strategy"},"Naming strategy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/metadata-cache"},"Metadata cache")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/debugging"},"Debugging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/schema-generator"},"Schema generator")))),Object(i.b)("li",{parentName:"ul"},"Usage with different drivers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/usage-with-sql"},"Usage with Postgres, MySQL and SQLite")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/usage-with-mongo"},"Usage with MongoDB")))),Object(i.b)("li",{parentName:"ul"},"Recipes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/usage-with-nestjs"},"Usage with NestJS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/usage-with-js"},"Usage with Vanilla JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/2.7/custom-driver"},"Creating custom driver")))),Object(i.b)("li",{parentName:"ul"},"Example integrations",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-ts"},"Express + MongoDB + TypeScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/nest"},"Nest + MySQL + TypeScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-js"},"Express + MongoDB + JavaScript"))))))}s.isMDXComponent=!0}}]);