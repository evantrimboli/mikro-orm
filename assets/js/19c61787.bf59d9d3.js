(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=a,m=s["".concat(o,".").concat(b)]||s[b]||u[b]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(1026)),o={title:"Metadata Cache"},c={unversionedId:"metadata-cache",id:"version-4.2/metadata-cache",isDocsHomePage:!1,title:"Metadata Cache",description:"In v4 you need to explicitly install @mikro-orm/reflection to use TsMorphMetadataProvider.",source:"@site/versioned_docs/version-4.2/metadata-cache.md",slug:"/metadata-cache",permalink:"/docs/4.2/metadata-cache",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/metadata-cache.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618748354,formattedLastUpdatedAt:"4/18/2021",sidebar:"version-4.2/docs",previous:{title:"Metadata Providers",permalink:"/docs/4.2/metadata-providers"},next:{title:"Schema Generator",permalink:"/docs/4.2/schema-generator"}},l=[{value:"Automatic Invalidation",id:"automatic-invalidation",children:[]},{value:"Disabling Metadata Cache",id:"disabling-metadata-cache",children:[]},{value:"Pretty Printing",id:"pretty-printing",children:[]},{value:"Using Different temp Folder",id:"using-different-temp-folder",children:[]},{value:"Providing Custom Cache Adapter",id:"providing-custom-cache-adapter",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In v4 you need to explicitly install ",Object(i.b)("inlineCode",{parentName:"p"},"@mikro-orm/reflection")," to use ",Object(i.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),".")),Object(i.b)("p",null,"Under the hood, ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(i.b)("a",{parentName:"p",href:"https://github.com/dsherret/ts-morph"},Object(i.b)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),Object(i.b)("p",null,"If you use folder-based discovery, you should specify paths to\nthe compiled entities via ",Object(i.b)("inlineCode",{parentName:"p"},"entities")," as well as paths to the TS source files of\nthose entities via ",Object(i.b)("inlineCode",{parentName:"p"},"entitiesTs"),". When you run the ORM via ",Object(i.b)("inlineCode",{parentName:"p"},"ts-node"),", the latter\nwill be used automatically, or if you explicitly pass ",Object(i.b)("inlineCode",{parentName:"p"},"tsNode: true")," in the config."),Object(i.b)("p",null,"After the discovery process ends, all metadata will be cached. By default, ",Object(i.b)("inlineCode",{parentName:"p"},"FileCacheAdapter"),"\nwill be used to store the cache inside ",Object(i.b)("inlineCode",{parentName:"p"},"./temp")," folder to JSON files. "),Object(i.b)("h2",{id:"automatic-invalidation"},"Automatic Invalidation"),Object(i.b)("p",null,"Entity metadata are cached together with modified time of the source file, and every time\nthe cache is requested, it first checks if the cache is not invalid. This way you can forgot\nabout the caching mechanism most of the time."),Object(i.b)("p",null,"One case where you can end up needing to wipe the cache manually is when you work withing a\ngit branch where contents of entities folder differs. "),Object(i.b)("h2",{id:"disabling-metadata-cache"},"Disabling Metadata Cache"),Object(i.b)("p",null,"You can disable caching via:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { enabled: false },\n  // ...\n});\n")),Object(i.b)("h2",{id:"pretty-printing"},"Pretty Printing"),Object(i.b)("p",null,"By default, cached metadata will be one line JSON string. You can force pretty printing it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { pretty: true },\n  // ...\n});\n")),Object(i.b)("h2",{id:"using-different-temp-folder"},"Using Different temp Folder"),Object(i.b)("p",null,"You can set the temp folder via:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { options: { cacheDir: '...' } },\n  // ...\n});\n")),Object(i.b)("h2",{id:"providing-custom-cache-adapter"},"Providing Custom Cache Adapter"),Object(i.b)("p",null,"You can also implement your own cache adapter, for example to store the cache in redis.\nTo do so, just implement simple ",Object(i.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"export interface CacheAdapter {\n\n  get(name: string): any;\n\n  set(name: string, data: any, origin: string): void;\n\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"export class RedisCacheAdapter implements CacheAdapter { ... }\n")),Object(i.b)("p",null,"And provide the implementation in ",Object(i.b)("inlineCode",{parentName:"p"},"cache.adapter")," option:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  cache: { adapter: RedisCacheAdapter, options: { ... } },\n  // ...\n});\n")))}d.isMDXComponent=!0}}]);