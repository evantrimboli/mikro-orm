(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62071],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=s(t),d=n,f=k["".concat(c,".").concat(d)]||k[d]||m[d]||o;return t?a.createElement(f,p(p({ref:r},l),{},{components:t})):a.createElement(f,p({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=k;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},54265:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=t(74034),n=t(79973),o=(t(67294),t(3905)),p={id:"core.manytomanyoptions",title:"Interface: ManyToManyOptions<T, O>",sidebar_label:"ManyToManyOptions",custom_edit_url:null,hide_title:!0},i="Interface: ManyToManyOptions<T, O>",c={unversionedId:"api/interfaces/core.manytomanyoptions",id:"version-4.5/api/interfaces/core.manytomanyoptions",isDocsHomePage:!1,title:"Interface: ManyToManyOptions<T, O>",description:"core.ManyToManyOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.manytomanyoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.manytomanyoptions",permalink:"/docs/api/interfaces/core.manytomanyoptions",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1630286327,formattedLastUpdatedAt:"8/30/2021",frontMatter:{id:"core.manytomanyoptions",title:"Interface: ManyToManyOptions<T, O>",sidebar_label:"ManyToManyOptions",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"LoadedReference",permalink:"/docs/api/interfaces/core.loadedreference"},next:{title:"ManyToOneOptions",permalink:"/docs/api/interfaces/core.manytooneoptions"}},s=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cascade",id:"cascade",children:[]},{value:"columnType",id:"columntype",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"entity",id:"entity",children:[]},{value:"fieldName",id:"fieldname",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"fixedOrder",id:"fixedorder",children:[]},{value:"fixedOrderColumn",id:"fixedordercolumn",children:[]},{value:"formula",id:"formula",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"inverseJoinColumn",id:"inversejoincolumn",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"inversedBy",id:"inversedby",children:[]},{value:"joinColumn",id:"joincolumn",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"mappedBy",id:"mappedby",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"orderBy",id:"orderby",children:[]},{value:"owner",id:"owner",children:[]},{value:"persist",id:"persist",children:[]},{value:"pivotTable",id:"pivottable",children:[]},{value:"primary",id:"primary",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"version",id:"version",children:[]}]}],l={toc:s};function m(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-manytomanyoptionst-o"},"Interface: ManyToManyOptions<T, O",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ManyToManyOptions"),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"O"))))),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},(0,o.kt)("em",{parentName:"a"},"ReferenceOptions")),"<T, O",">"),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"ManyToManyOptions")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cascade"},"cascade"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"cascade"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/enums/core.cascade"},(0,o.kt)("em",{parentName:"a"},"Cascade")),"[]"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#cascade"},"cascade")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L67"},"packages/core/src/decorators/Property.ts:67")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"columntype"},"columnType"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"columnType"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#columntype"},"columnType")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L42"},"packages/core/src/decorators/Property.ts:42")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"comment"},"comment"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"comment"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#comment"},"comment")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L62"},"packages/core/src/decorators/Property.ts:62")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"customtype"},"customType"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"customType"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.type"},(0,o.kt)("em",{parentName:"a"},"Type")),"<any, any",">"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#customtype"},"customType")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L41"},"packages/core/src/decorators/Property.ts:41")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("em",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"number")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"string"),"[] ","|"," ",(0,o.kt)("em",{parentName:"p"},"number"),"[]"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#default"},"default")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L47"},"packages/core/src/decorators/Property.ts:47")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"defaultraw"},"defaultRaw"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"defaultRaw"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#defaultraw"},"defaultRaw")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L48"},"packages/core/src/decorators/Property.ts:48")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"eager"},"eager"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"eager"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#eager"},"eager")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L68"},"packages/core/src/decorators/Property.ts:68")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"entity"},"entity"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"entity"),": ",(0,o.kt)("em",{parentName:"p"},"string")," ","|"," () => ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entityname"},(0,o.kt)("em",{parentName:"a"},"EntityName")),"<T",">"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#entity"},"entity")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L66"},"packages/core/src/decorators/Property.ts:66")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fieldname"},"fieldName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"fieldName"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#fieldname"},"fieldName")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L39"},"packages/core/src/decorators/Property.ts:39")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fieldnames"},"fieldNames"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"fieldNames"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#fieldnames"},"fieldNames")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L40"},"packages/core/src/decorators/Property.ts:40")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fixedorder"},"fixedOrder"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"fixedOrder"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L28"},"packages/core/src/decorators/ManyToMany.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fixedordercolumn"},"fixedOrderColumn"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"fixedOrderColumn"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L29"},"packages/core/src/decorators/ManyToMany.ts:29")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"formula"},"formula"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"formula"),": ",(0,o.kt)("em",{parentName:"p"},"string")," ","|"," (",(0,o.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,o.kt)("em",{parentName:"p"},"string"),") => ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#formula"},"formula")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L49"},"packages/core/src/decorators/Property.ts:49")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hidden"},"hidden"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"hidden"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#hidden"},"hidden")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L53"},"packages/core/src/decorators/Property.ts:53")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"index"},"index"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"index"),": ",(0,o.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#index"},"index")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L55"},"packages/core/src/decorators/Property.ts:55")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"inversejoincolumn"},"inverseJoinColumn"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"inverseJoinColumn"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L33"},"packages/core/src/decorators/ManyToMany.ts:33")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"inverseJoinColumns"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L34"},"packages/core/src/decorators/ManyToMany.ts:34")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"inversedby"},"inversedBy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"inversedBy"),": ",(0,o.kt)("em",{parentName:"p"},"string")," & keyof T ","|"," (",(0,o.kt)("inlineCode",{parentName:"p"},"e"),": T) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L25"},"packages/core/src/decorators/ManyToMany.ts:25")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"joincolumn"},"joinColumn"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"joinColumn"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L31"},"packages/core/src/decorators/ManyToMany.ts:31")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"joincolumns"},"joinColumns"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"joinColumns"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L32"},"packages/core/src/decorators/ManyToMany.ts:32")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"lazy"},"lazy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"lazy"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#lazy"},"lazy")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L57"},"packages/core/src/decorators/Property.ts:57")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"length"},"length"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"length"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#length"},"length")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L44"},"packages/core/src/decorators/Property.ts:44")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"mappedby"},"mappedBy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"mappedBy"),": ",(0,o.kt)("em",{parentName:"p"},"string")," & keyof T ","|"," (",(0,o.kt)("inlineCode",{parentName:"p"},"e"),": T) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L26"},"packages/core/src/decorators/ManyToMany.ts:26")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#name"},"name")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L38"},"packages/core/src/decorators/Property.ts:38")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nullable"},"nullable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"nullable"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#nullable"},"nullable")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L50"},"packages/core/src/decorators/Property.ts:50")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"oncreate"},"onCreate"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onCreate"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": O) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": O): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},"O")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L45"},"packages/core/src/decorators/Property.ts:45")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#oncreate"},"onCreate")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L45"},"packages/core/src/decorators/Property.ts:45")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onupdate"},"onUpdate"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onUpdate"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": O) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": O): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},"O")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L46"},"packages/core/src/decorators/Property.ts:46")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#onupdate"},"onUpdate")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L46"},"packages/core/src/decorators/Property.ts:46")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"orderby"},"orderBy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"orderBy"),": ",(0,o.kt)("em",{parentName:"p"},"object")),(0,o.kt)("h4",{id:"type-declaration-2"},"Type declaration:"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L27"},"packages/core/src/decorators/ManyToMany.ts:27")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"owner"},"owner"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"owner"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L24"},"packages/core/src/decorators/ManyToMany.ts:24")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"persist"},"persist"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"persist"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#persist"},"persist")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L52"},"packages/core/src/decorators/Property.ts:52")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pivottable"},"pivotTable"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"pivotTable"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L30"},"packages/core/src/decorators/ManyToMany.ts:30")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"primary"},"primary"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"primary"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#primary"},"primary")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L58"},"packages/core/src/decorators/Property.ts:58")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"referenceColumnName"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/ManyToMany.ts#L35"},"packages/core/src/decorators/ManyToMany.ts:35")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"serializedname"},"serializedName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"serializedName"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#serializedname"},"serializedName")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L61"},"packages/core/src/decorators/Property.ts:61")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"serializedPrimaryKey"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#serializedprimarykey"},"serializedPrimaryKey")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L59"},"packages/core/src/decorators/Property.ts:59")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"serializer"},"serializer"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"serializer"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,o.kt)("em",{parentName:"p"},"any"),") => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"type-declaration-3"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L60"},"packages/core/src/decorators/Property.ts:60")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#serializer"},"serializer")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L60"},"packages/core/src/decorators/Property.ts:60")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"strategy"},"strategy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"strategy"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy"},(0,o.kt)("em",{parentName:"a"},"LoadStrategy"))),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#strategy"},"strategy")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L69"},"packages/core/src/decorators/Property.ts:69")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"type"),": ",(0,o.kt)("em",{parentName:"p"},"unknown")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#type"},"type")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L43"},"packages/core/src/decorators/Property.ts:43")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"unique"},"unique"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"unique"),": ",(0,o.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#unique"},"unique")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L56"},"packages/core/src/decorators/Property.ts:56")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"unsigned"},"unsigned"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"unsigned"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#unsigned"},"unsigned")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L51"},"packages/core/src/decorators/Property.ts:51")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"version"},"version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"version"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions"},"ReferenceOptions"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.referenceoptions#version"},"version")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/decorators/Property.ts#L54"},"packages/core/src/decorators/Property.ts:54")))}m.isMDXComponent=!0}}]);