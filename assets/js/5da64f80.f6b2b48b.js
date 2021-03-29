(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,m=c["".concat(a,".").concat(u)]||c[u]||d[u]||o;return n?r.a.createElement(m,s(s({ref:t},b),{},{components:n})):r.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var b=2;b<o;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},440:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(8),o=(n(0),n(1110)),a={title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},s={unversionedId:"repositories",id:"version-2.7/repositories",isDocsHomePage:!1,title:"Using EntityRepository instead of EntityManager",description:"More convenient way of fetching entities from database is by using EntityRepository, that",source:"@site/versioned_docs/version-2.7/repositories.md",slug:"/repositories",permalink:"/docs/2.7/repositories",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/repositories.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1616995422,formattedLastUpdatedAt:"3/29/2021",sidebar_label:"Entity Repository",sidebar:"version-2.7/docs",previous:{title:"Working with Entity Manager",permalink:"/docs/2.7/entity-manager"},next:{title:"Identity Map and Request Context",permalink:"/docs/2.7/identity-map"}},l=[{value:"Custom repository",id:"custom-repository",children:[]},{value:"EntityRepository&lt;T&gt; API",id:"entityrepositoryt-api",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"More convenient way of fetching entities from database is by using ",Object(o.b)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",Object(o.b)("inlineCode",{parentName:"p"},"find")," and ",Object(o.b)("inlineCode",{parentName:"p"},"findOne")," calls:"),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),Object(o.b)("h2",{id:"custom-repository"},"Custom repository"),Object(o.b)("p",null,"To use custom repository, just extend ",Object(o.b)("inlineCode",{parentName:"p"},"EntityRepository<T>")," class:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class CustomAuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n  public findAndUpdate(...) {\n    // ...\n  }\n\n}\n")),Object(o.b)("p",null,"And register your repository as ",Object(o.b)("inlineCode",{parentName:"p"},"@Entity")," decorator:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity({ customRepository: () => CustomAuthorRepository })\nexport class Publisher {\n  // ...\n}\n")),Object(o.b)("p",null,"Note that we need to pass that repository reference inside a callback so we will not run\ninto circular dependency issues when using entity references inside that repository."),Object(o.b)("p",null,"Now you can access your custom repository via ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager.getRepository()")," method."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also register custom base repository (for all entities where you do not specify\n",Object(o.b)("inlineCode",{parentName:"p"},"customRepository"),") globally, via ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM.init({ entityRepository: CustomBaseRepository })"))),Object(o.b)("p",null,"For more examples, take a look at\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},Object(o.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},Object(o.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),Object(o.b)("h2",{id:"entityrepositoryt-api"},"EntityRepository\\<T",">"," API"),Object(o.b)("h4",{id:"findwhere-filterqueryt-options-findoptions-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"find(where?: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),Object(o.b)("p",null,"Returns array of entities found for given condition. You can specify ",Object(o.b)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n}\n")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"find(where?: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Same as previous ",Object(o.b)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",Object(o.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findalloptions-findoptions-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAll(options?: FindOptions): Promise<T[]>")),Object(o.b)("p",null,"Returns all entities for given type. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findallpopulate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAll(populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Same as previous ",Object(o.b)("inlineCode",{parentName:"p"},"findAll")," method, just with dedicated parameters for ",Object(o.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findonewhere-filterqueryt--string-populate-string-promiset--null"},Object(o.b)("inlineCode",{parentName:"h4"},"findOne(where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),Object(o.b)("p",null,"Finds an entity by given ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",Object(o.b)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"mergedata-entitydatat-t"},Object(o.b)("inlineCode",{parentName:"h4"},"merge(data: EntityData<T>): T")),Object(o.b)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"getreferenceid-string-t"},Object(o.b)("inlineCode",{parentName:"h4"},"getReference(id: string): T")),Object(o.b)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"countwhere-any-promisenumber"},Object(o.b)("inlineCode",{parentName:"h4"},"count(where: any): Promise<number>")),Object(o.b)("p",null,"Gets count of entities matching the ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistentity-ientity--ientity-flush-boolean-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"persist(entity: IEntity | IEntity[], flush?: boolean): Promise<void>")),Object(o.b)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. You can control immediate flushing via ",Object(o.b)("inlineCode",{parentName:"p"},"flush")," parameter and via ",Object(o.b)("inlineCode",{parentName:"p"},"autoFlush"),"\nconfiguration option. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistandflushentity-ientity--ientity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: IEntity | IEntity[]): Promise<void>")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"persist")," & ",Object(o.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistlaterentity-ientity--ientity-void"},Object(o.b)("inlineCode",{parentName:"h4"},"persistLater(entity: IEntity | IEntity[]): void")),Object(o.b)("p",null,"Shortcut for just ",Object(o.b)("inlineCode",{parentName:"p"},"persist"),", without flushing. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"flush-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),Object(o.b)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removewhere-ientity--any-flush-boolean-promisenumber"},Object(o.b)("inlineCode",{parentName:"h4"},"remove(where: IEntity | any, flush?: boolean): Promise<number>")),Object(o.b)("p",null,"When provided entity instance as ",Object(o.b)("inlineCode",{parentName:"p"},"where")," value, then it calls ",Object(o.b)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removeandflushentity-ientity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: IEntity): Promise<void>")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"removeEntity")," & ",Object(o.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removelaterentity-ientity-void"},Object(o.b)("inlineCode",{parentName:"h4"},"removeLater(entity: IEntity): void")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"removeEntity")," without flushing. "),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"canpopulateproperty-string-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"canPopulate(property: string): boolean")),Object(o.b)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}p.isMDXComponent=!0}}]);