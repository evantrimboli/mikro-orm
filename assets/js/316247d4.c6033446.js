(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1026:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},m=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return r?o.a.createElement(f,c(c({ref:e},u),{},{components:r})):o.a.createElement(f,c({ref:e},u))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},247:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return c})),r.d(e,"toc",(function(){return p})),r.d(e,"default",(function(){return l}));var n=r(3),o=r(8),a=(r(0),r(1026)),i={slug:"introducing-mikroorm-typescript-data-mapper-orm-with-identity-map",title:"Introducing MikroORM, TypeScript data-mapper ORM with Identity Map",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","oop"]},c={permalink:"/blog/introducing-mikroorm-typescript-data-mapper-orm-with-identity-map",source:"@site/blog/2019-04-08-introducing-mikroorm-typescript-data-mapper-orm-with-identity-map.md",description:"This might be the ORM you\u2019ve been looking for\u2026",date:"2019-04-08T00:00:00.000Z",formattedDate:"April 8, 2019",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"oop",permalink:"/blog/tags/oop"}],title:"Introducing MikroORM, TypeScript data-mapper ORM with Identity Map",readingTime:9.3,truncated:!0,prevItem:{title:"Handling Transactions and Concurrency in MikroORM",permalink:"/blog/handling-transactions-and-concurrency-in-mikroorm"}},p=[],u={toc:p};function l(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This might be the ORM you\u2019ve been looking for\u2026"))}l.isMDXComponent=!0}}]);