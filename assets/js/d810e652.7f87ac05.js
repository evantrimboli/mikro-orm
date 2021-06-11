(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20752],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=u(n),d=o,m=y["".concat(c,".").concat(d)]||y[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74134:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a={title:"Using Entity Constructors"},s={unversionedId:"entity-constructors",id:"version-4.4/entity-constructors",isDocsHomePage:!1,title:"Using Entity Constructors",description:"Internally, MikroORM never calls entity constructor, so you are free to use it as you wish.",source:"@site/versioned_docs/version-4.4/entity-constructors.md",sourceDirName:".",slug:"/entity-constructors",permalink:"/docs/4.4/entity-constructors",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/entity-constructors.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1623417244,formattedLastUpdatedAt:"6/11/2021",frontMatter:{title:"Using Entity Constructors"},sidebar:"version-4.4/docs",previous:{title:"Usage with Babel",permalink:"/docs/4.4/usage-with-babel"},next:{title:"Using Multiple Schemas",permalink:"/docs/4.4/multiple-schemas"}},c=[{value:"Using native private properties",id:"using-native-private-properties",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Internally, ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," never calls entity constructor, so you are free to use it as you wish.\nThe constructor will be called only when you instantiate the class yourself via ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," operator,\nso it is a handy place to require your data when creating new entity."),(0,i.kt)("p",null,"For example following ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity definition will always require to set ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"author"),",\nbut ",(0,i.kt)("inlineCode",{parentName:"p"},"publisher")," will be optional:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n  @ManyToOne()\n  publisher?: Publisher;\n\n  @ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),(0,i.kt)("h2",{id:"using-native-private-properties"},"Using native private properties"),(0,i.kt)("p",null,"If we want to use native private properties inside entities, the default approach of\nhow MikroORM creates entity instances via ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.create()")," is not viable (more about this\nin the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/issues/1226"},"issue"),"). To force usage of entity\nconstructors, we can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.4/configuration#using-native-private-properties"},(0,i.kt)("inlineCode",{parentName:"a"},"forceEntityConstructor"))," toggle."))}l.isMDXComponent=!0}}]);