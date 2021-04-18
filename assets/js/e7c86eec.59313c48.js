(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},924:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(1026)),i={slug:"handling-transactions-and-concurrency-in-mikroorm",title:"Handling Transactions and Concurrency in MikroORM",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},c={permalink:"/blog/handling-transactions-and-concurrency-in-mikroorm",source:"@site/blog/2019-06-18-handling-transactions-and-concurrency-in-mikroorm.md",description:"How to handle transactions and concurrency with ease.",date:"2019-06-18T00:00:00.000Z",formattedDate:"June 18, 2019",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],title:"Handling Transactions and Concurrency in MikroORM",readingTime:9.705,truncated:!0,prevItem:{title:"MikroORM 3: Knex.js, CLI, Schema Updates, Entity Generator and\xa0more\u2026",permalink:"/blog/mikro-orm-3-released"},nextItem:{title:"Introducing MikroORM, TypeScript data-mapper ORM with Identity Map",permalink:"/blog/introducing-mikroorm-typescript-data-mapper-orm-with-identity-map"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"How to handle transactions and concurrency with ease."))}u.isMDXComponent=!0}}]);