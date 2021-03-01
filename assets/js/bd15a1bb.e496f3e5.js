(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=c(n),m=i,u=b["".concat(o,".").concat(m)]||b[m]||s[m]||r;return n?a.a.createElement(u,l(l({ref:t},d),{},{components:n})):a.a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},776:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(8),r=(n(0),n(1052)),o={title:"Upgrading from v3 to v4"},l={unversionedId:"upgrading-v3-to-v4",id:"version-4.4/upgrading-v3-to-v4",isDocsHomePage:!1,title:"Upgrading from v3 to v4",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/versioned_docs/version-4.4/upgrading-v3-to-v4.md",slug:"/upgrading-v3-to-v4",permalink:"/docs/upgrading-v3-to-v4",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/upgrading-v3-to-v4.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1614631715},p=[{value:"Node 10.13.0+ required",id:"node-10130-required",children:[]},{value:"TypeScript 3.7+ required",id:"typescript-37-required",children:[]},{value:"Monorepo",id:"monorepo",children:[]},{value:"Default metadata provider is now <code>ReflectMetadataProvider</code>",id:"default-metadata-provider-is-now-reflectmetadataprovider",children:[]},{value:"SqlEntityManager and MongoEntityManager",id:"sqlentitymanager-and-mongoentitymanager",children:[]},{value:"Different default <code>pivotTable</code>",id:"different-default-pivottable",children:[]},{value:"Changes in folder-based discovery (<code>entitiesDirs</code> removed)",id:"changes-in-folder-based-discovery-entitiesdirs-removed",children:[]},{value:"Changes in <code>wrap()</code> helper, <code>WrappedEntity</code> interface and <code>Reference</code> wrapper",id:"changes-in-wrap-helper-wrappedentity-interface-and-reference-wrapper",children:[]},{value:"Removed <code>flush</code> parameter from <code>persist()</code> and <code>remove()</code> methods",id:"removed-flush-parameter-from-persist-and-remove-methods",children:[]},{value:"<code>remove()</code> method requires entity instances",id:"remove-method-requires-entity-instances",children:[]},{value:"Type safe references",id:"type-safe-references",children:[]},{value:"Custom types are now type safe",id:"custom-types-are-now-type-safe",children:[]},{value:"Custom type serialization",id:"custom-type-serialization",children:[]},{value:"Property <code>default</code> and <code>defaultRaw</code>",id:"property-default-and-defaultraw",children:[]},{value:"<code>autoFlush</code> option has been removed",id:"autoflush-option-has-been-removed",children:[]},{value:"<code>IdEntity</code>, <code>UuidEntity</code> and <code>MongoEntity</code> interfaces are removed",id:"identity-uuidentity-and-mongoentity-interfaces-are-removed",children:[]},{value:"MongoDB driver is no longer the default",id:"mongodb-driver-is-no-longer-the-default",children:[]},{value:"Removed configuration <code>discovery.tsConfigPath</code>",id:"removed-configuration-discoverytsconfigpath",children:[]},{value:"Changes in query highlighting",id:"changes-in-query-highlighting",children:[]}],d={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",Object(r.b)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed.")),Object(r.b)("h2",{id:"node-10130-required"},"Node 10.13.0+ required"),Object(r.b)("p",null,"Support for older node versions was dropped. "),Object(r.b)("h2",{id:"typescript-37-required"},"TypeScript 3.7+ required"),Object(r.b)("p",null,"Support for older TypeScript versions was dropped. "),Object(r.b)("h2",{id:"monorepo"},"Monorepo"),Object(r.b)("p",null,"The ORM has been split into several packages. In v4 one needs to require\n",Object(r.b)("inlineCode",{parentName:"p"},"@mikro-orm/core")," and a driver package, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"@mikro-orm/mysql"),". This driver\npackage already contains the ",Object(r.b)("inlineCode",{parentName:"p"},"mysql2")," dependency, so you can remove that from\nyour ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/core")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/reflection")," - ",Object(r.b)("inlineCode",{parentName:"li"},"TsMorphMetadataProvider")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/cli")," - CLI support, requires entity-generator, migrator and knex"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/knex")," - SQL support"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/entity-generator")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/migrations")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/mysql")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/mariadb")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/mysql-base")," - Common implementation for mysql and mariadb (internal)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/sqlite")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/postgresql")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@mikro-orm/mongodb"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For easier transition, meta package mikro-orm is still present, reexporting\ncore, reflection, migrations, entity-generator and cli packages. You should\n",Object(r.b)("strong",{parentName:"p"},"not")," install both ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@mikro-orm/core")," packages together. ")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You should prefer the ",Object(r.b)("inlineCode",{parentName:"p"},"@mikro-orm/core")," over ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm")," package, there were\nweird dependency issues reported with the ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm")," meta-package. ")),Object(r.b)("h2",{id:"default-metadata-provider-is-now-reflectmetadataprovider"},"Default metadata provider is now ",Object(r.b)("inlineCode",{parentName:"h2"},"ReflectMetadataProvider")),Object(r.b)("p",null,"If you want to use ts-morph, you need to install ",Object(r.b)("inlineCode",{parentName:"p"},"@mikro-orm/reflection")," package\nand enable the provider explicitly in the ORM config, as described ",Object(r.b)("a",{parentName:"p",href:"/docs/metadata-providers#tsmorphmetadataprovider"},"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { TsMorphMetadataProvider } from '@mikro-orm/reflection';\n\nawait MikroORM.init({\n  metadataProvider: TsMorphMetadataProvider,\n  // ...\n});\n")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"ReflectMetadataProvider")," has some limitations, so be sure to read\nabout them ",Object(r.b)("a",{parentName:"p",href:"/docs/metadata-providers#limitations-and-requirements"},"here"),"."),Object(r.b)("p",null,"One common gotcha with ",Object(r.b)("inlineCode",{parentName:"p"},"reflect-metadata")," is that you need to explicitly\nstate the property type when using property initializer:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"@Property()\ncreatedAt: Date = new Date();\n")),Object(r.b)("p",null,"Without the explicit type, we would infer ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"Date"),",\nwhich would be most probably mapped to JSON column type (depends on driver)."),Object(r.b)("h2",{id:"sqlentitymanager-and-mongoentitymanager"},"SqlEntityManager and MongoEntityManager"),Object(r.b)("p",null,"In v4 the ",Object(r.b)("inlineCode",{parentName:"p"},"core")," package, where ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," and ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository")," are\ndefined, is not dependent on knex, and therefore it cannot have a method\nreturning a ",Object(r.b)("inlineCode",{parentName:"p"},"QueryBuilder"),". You need to import the SQL flavour of the EM\nfrom the driver package to access the ",Object(r.b)("inlineCode",{parentName:"p"},"createQueryBuilder()")," method."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The SQL flavour of EM is actually called ",Object(r.b)("inlineCode",{parentName:"p"},"SqlEntityManager"),", it is exported both under\nthis name and under ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { EntityManager } from '@mikro-orm/mysql'; // or any other SQL driver package\n\nconst em: EntityManager;\nconst qb = await em.createQueryBuilder(...);\n")),Object(r.b)("p",null,"Same applies for the ",Object(r.b)("inlineCode",{parentName:"p"},"aggregate()")," method in mongo driver:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { EntityManager } from '@mikro-orm/mongodb';\n\nconst em: EntityManager;\nconst ret = await em.aggregate(...);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The mongo flavour of EM is actually called ",Object(r.b)("inlineCode",{parentName:"p"},"MongoEntityManager"),", it is exported both under\nthis name and under ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),Object(r.b)("h2",{id:"different-default-pivottable"},"Different default ",Object(r.b)("inlineCode",{parentName:"h2"},"pivotTable")),Object(r.b)("p",null,"Implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy")," and ",Object(r.b)("inlineCode",{parentName:"p"},"EntityCaseNamingStrategy"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"joinTableName()")," method has changed. You can use ",Object(r.b)("inlineCode",{parentName:"p"},"pivotTable")," on the owning side\nof M:N relation to specify the table name manually. "),Object(r.b)("p",null,"Previously the table name did not respect property name, if one defined multiple\nM:N relations between same entities, there were conflicts and one would have to\nspecify ",Object(r.b)("inlineCode",{parentName:"p"},"pivotTable")," name manually at least on one of them. With the new way,\nwe can be sure that the table name won't conflict with other pivot tables. "),Object(r.b)("p",null,"Previously the name was constructed from 2 entity names as ",Object(r.b)("inlineCode",{parentName:"p"},"entity_a_to_entity_b"),",\nignoring the actual property name. In v4 the name will be ",Object(r.b)("inlineCode",{parentName:"p"},"entity_a_coll_name")," in\ncase of the collection property on the owning side being named ",Object(r.b)("inlineCode",{parentName:"p"},"collName"),". "),Object(r.b)("h2",{id:"changes-in-folder-based-discovery-entitiesdirs-removed"},"Changes in folder-based discovery (",Object(r.b)("inlineCode",{parentName:"h2"},"entitiesDirs")," removed)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs")," and ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirsTs")," were removed in favour of ",Object(r.b)("inlineCode",{parentName:"p"},"entities")," and ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesTs"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"entities")," will be used as a default for ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesTs")," (that is used when we detect ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node"),")."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"entities")," can now contain mixture of paths to directories, globs pointing to entities,\nor references to the entities or instances of ",Object(r.b)("inlineCode",{parentName:"p"},"EntitySchema"),". "),Object(r.b)("p",null,"This basically means that all you need to change is renaming ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs")," to ",Object(r.b)("inlineCode",{parentName:"p"},"entities"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  entities: ['dist/**/entities', 'dist/**/*.entity.js', FooBar, FooBaz],\n  entitiesTs: ['src/**/entities', 'src/**/*.entity.ts', FooBar, FooBaz],\n});\n")),Object(r.b)("h2",{id:"changes-in-wrap-helper-wrappedentity-interface-and-reference-wrapper"},"Changes in ",Object(r.b)("inlineCode",{parentName:"h2"},"wrap()")," helper, ",Object(r.b)("inlineCode",{parentName:"h2"},"WrappedEntity")," interface and ",Object(r.b)("inlineCode",{parentName:"h2"},"Reference")," wrapper"),Object(r.b)("p",null,"Previously all the methods and properties of ",Object(r.b)("inlineCode",{parentName:"p"},"WrappedEntity")," interface were\nadded to the entity prototype during discovery. In v4 there is only one property\nadded: ",Object(r.b)("inlineCode",{parentName:"p"},"__helper: WrappedEntity"),". ",Object(r.b)("inlineCode",{parentName:"p"},"WrappedEntity")," has been converted to actual class."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wrap(entity)")," no longer returns the entity, now the ",Object(r.b)("inlineCode",{parentName:"p"},"WrappedEntity")," instance is\nbeing returned. It contains only public methods (",Object(r.b)("inlineCode",{parentName:"p"},"init"),", ",Object(r.b)("inlineCode",{parentName:"p"},"assign"),", ",Object(r.b)("inlineCode",{parentName:"p"},"isInitialized"),", ...),\nif you want to access internal properties like ",Object(r.b)("inlineCode",{parentName:"p"},"__meta")," or ",Object(r.b)("inlineCode",{parentName:"p"},"__em"),", you need to explicitly\nask for the helper via ",Object(r.b)("inlineCode",{parentName:"p"},"wrap(entity, true)"),"."),Object(r.b)("p",null,"Internal methods (with ",Object(r.b)("inlineCode",{parentName:"p"},"__")," prefix) were also removed from the ",Object(r.b)("inlineCode",{parentName:"p"},"Reference")," class,\nuse ",Object(r.b)("inlineCode",{parentName:"p"},"wrap(ref, true)")," to access them. "),Object(r.b)("p",null,"Instead of interface merging with ",Object(r.b)("inlineCode",{parentName:"p"},"WrappedEntity"),", one can now use classic inheritance,\nby extending ",Object(r.b)("inlineCode",{parentName:"p"},"BaseEntity")," exported from ",Object(r.b)("inlineCode",{parentName:"p"},"@mikro-orm/core"),". If you do so, ",Object(r.b)("inlineCode",{parentName:"p"},"wrap(entity)"),"\nwill return your entity. "),Object(r.b)("h2",{id:"removed-flush-parameter-from-persist-and-remove-methods"},"Removed ",Object(r.b)("inlineCode",{parentName:"h2"},"flush")," parameter from ",Object(r.b)("inlineCode",{parentName:"h2"},"persist()")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"remove()")," methods"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"flush")," param is removed, both ",Object(r.b)("inlineCode",{parentName:"p"},"persist")," and ",Object(r.b)("inlineCode",{parentName:"p"},"remove")," methods are synchronous and\nrequire explicit flushing, possibly via fluent interface call."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"// before\nawait em.persist(jon, true);\nawait em.remove(Author, jon, true);\n\n// after\nawait em.persist(jon).flush();\nawait em.remove(jon).flush();\n")),Object(r.b)("h2",{id:"remove-method-requires-entity-instances"},Object(r.b)("inlineCode",{parentName:"h2"},"remove()")," method requires entity instances"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"em.remove()")," method originally allowed to pass either entity instance, or\na condition. When one passed a condition, it was firing a native delete query,\nwithout handling transactions or hooks. "),Object(r.b)("p",null,"In v4, the method is now simplified and works only with entity instances. Use\n",Object(r.b)("inlineCode",{parentName:"p"},"em.nativeDelete()")," explicitly if you want to fire a delete query instead of\nletting the ",Object(r.b)("inlineCode",{parentName:"p"},"UnitOfWork")," doing its job."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"// before\nawait em.remove(Author, 1); // fires query directly\n\n// after \nawait em.nativeDelete(Author, 1);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"em.removeEntity()")," has been removed in favour of ",Object(r.b)("inlineCode",{parentName:"p"},"em.remove()")," (that now has almost the same signature).")),Object(r.b)("h2",{id:"type-safe-references"},"Type safe references"),Object(r.b)("p",null,"EM now returns ",Object(r.b)("inlineCode",{parentName:"p"},"Loaded<T, P>")," instead of the entity (",Object(r.b)("inlineCode",{parentName:"p"},"T"),"). This type automatically\nadds synchronous method ",Object(r.b)("inlineCode",{parentName:"p"},"get()")," that returns the entity (for references) or array\nof entities (for collections)."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Reference.get()")," is now available only with correct ",Object(r.b)("inlineCode",{parentName:"p"},"Loaded")," type hint and is used\nas a sync getter for the entity, just like ",Object(r.b)("inlineCode",{parentName:"p"},"unwrap()"),". You can use ",Object(r.b)("inlineCode",{parentName:"p"},"Reference.load(prop)"),"\nfor the original ",Object(r.b)("inlineCode",{parentName:"p"},"get()")," method functionality. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"em.find()")," and similar methods now have two type arguments, due to TypeScript not supporting partial\ntype inference, when you specify the ",Object(r.b)("inlineCode",{parentName:"p"},"T")," explicitly (without also explicitly\nspecifying the load hint), the inference will not work. This use case was mainly\nfor usage without classes (interfaces + ",Object(r.b)("inlineCode",{parentName:"p"},"EntitySchema"),") - in that case it is now\nsupported to pass actual instance of ",Object(r.b)("inlineCode",{parentName:"p"},"EntitySchema")," as the first parameter to these\nmethods, that will allow correct type inference:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const author = await em.findOne(AuthorSchema, { ... }, ['books']);\nconsole.log(author.books.get()); // `get()` is now inferred correctly\n")),Object(r.b)("h2",{id:"custom-types-are-now-type-safe"},"Custom types are now type safe"),Object(r.b)("p",null,"Generic ",Object(r.b)("inlineCode",{parentName:"p"},"Type")," class has now two type arguments - the input and output types.\nInput type defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", output type defaults to the input type. "),Object(r.b)("p",null,"You might need to explicitly provide the types if your methods are strictly typed."),Object(r.b)("h2",{id:"custom-type-serialization"},"Custom type serialization"),Object(r.b)("p",null,"Custom types used to be serialized to the database value. In v4, the runtime\nvalue is used by default. Implement custom ",Object(r.b)("inlineCode",{parentName:"p"},"toJSON()")," method if you need to\ncustomize this."),Object(r.b)("h2",{id:"property-default-and-defaultraw"},"Property ",Object(r.b)("inlineCode",{parentName:"h2"},"default")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"defaultRaw")),Object(r.b)("p",null,"Previously the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," option of properties was used as is, so we had to wrap\nstrings in quotes (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"@Property({ default: \"'foo bar'\" })"),"). "),Object(r.b)("p",null,"In v4 the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," is typed as ",Object(r.b)("inlineCode",{parentName:"p"},"string | number | boolean | null")," and when used\nwith string value, it will be automatically quoted. "),Object(r.b)("p",null,"To use SQL functions we now need to use ",Object(r.b)("inlineCode",{parentName:"p"},"defaultRaw"),": ",Object(r.b)("inlineCode",{parentName:"p"},"@Property({ defaultRaw: 'now()' })"),"."),Object(r.b)("h2",{id:"autoflush-option-has-been-removed"},Object(r.b)("inlineCode",{parentName:"h2"},"autoFlush")," option has been removed"),Object(r.b)("p",null,"Also ",Object(r.b)("inlineCode",{parentName:"p"},"persistLater()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"removeLater()")," methods are deprecated. Use ",Object(r.b)("inlineCode",{parentName:"p"},"persist()")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"remove")," respectively."),Object(r.b)("h2",{id:"identity-uuidentity-and-mongoentity-interfaces-are-removed"},Object(r.b)("inlineCode",{parentName:"h2"},"IdEntity"),", ",Object(r.b)("inlineCode",{parentName:"h2"},"UuidEntity")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"MongoEntity")," interfaces are removed"),Object(r.b)("p",null,"They were actually never needed. "),Object(r.b)("h2",{id:"mongodb-driver-is-no-longer-the-default"},"MongoDB driver is no longer the default"),Object(r.b)("p",null,"You need to specify the platform type either via ",Object(r.b)("inlineCode",{parentName:"p"},"type")," option or provide the driver\nimplementation via ",Object(r.b)("inlineCode",{parentName:"p"},"driver")," option. "),Object(r.b)("p",null,"Available platforms types: ",Object(r.b)("inlineCode",{parentName:"p"},"[ 'mongo', 'mysql', 'mariadb', 'postgresql', 'sqlite' ]")),Object(r.b)("h2",{id:"removed-configuration-discoverytsconfigpath"},"Removed configuration ",Object(r.b)("inlineCode",{parentName:"h2"},"discovery.tsConfigPath")),Object(r.b)("p",null,"Removed as it is no longer needed, it was used only for ",Object(r.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),",\nwhen the ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirsTs")," were not explicitly provided. In v4, this is no longer\nneeded, as ts-morph discovery will use ",Object(r.b)("inlineCode",{parentName:"p"},"d.ts")," files instead, that should be located\nnext to the compiled entities. "),Object(r.b)("h2",{id:"changes-in-query-highlighting"},"Changes in query highlighting"),Object(r.b)("p",null,"Previously Highlight.js was used to highlight various things in the CLI,\nlike SQL and mongo queries, or migrations or entities generated via CLI.\nWhile the library worked fine, it was causing performance issues mainly\nfor those bundling via webpack and using lambdas, as the library was huge."),Object(r.b)("p",null,"In v4 highlighting is disabled by default, and there are 2 highlighters\nyou can optionally use (you need to install them first)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { SqlHighlighter } from '@mikro-orm/sql-highlighter';\n\nMikroORM.init({\n  highlighter: new SqlHighlighter(),\n  // ...\n});\n")),Object(r.b)("p",null,"For MongoDB you can use ",Object(r.b)("inlineCode",{parentName:"p"},"@mikro-orm/mongo-highlighter"),"."))}c.isMDXComponent=!0}}]);