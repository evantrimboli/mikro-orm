(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56010],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=m(r),k=n,u=c["".concat(l,".").concat(k)]||c[k]||s[k]||o;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},80251:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=r(74034),n=r(79973),o=(r(67294),r(3905)),i={id:"core.commitordercalculator",title:"Class: CommitOrderCalculator",sidebar_label:"CommitOrderCalculator",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.commitordercalculator",id:"version-4.5/api/classes/core.commitordercalculator",isDocsHomePage:!1,title:"Class: CommitOrderCalculator",description:"core.CommitOrderCalculator",source:"@site/versioned_docs/version-4.5/api/classes/core.commitordercalculator.md",sourceDirName:"api/classes",slug:"/api/classes/core.commitordercalculator",permalink:"/docs/api/classes/core.commitordercalculator",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1622236326,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"CommitOrderCalculator",frontMatter:{id:"core.commitordercalculator",title:"Class: CommitOrderCalculator",sidebar_label:"CommitOrderCalculator",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: Collection<T, O\\>",permalink:"/docs/api/classes/core.collection"},next:{title:"Class: Configuration<D\\>",permalink:"/docs/api/classes/core.configuration"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"nodes",id:"nodes",children:[]},{value:"sortedNodeList",id:"sortednodelist",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addDependency",id:"adddependency",children:[]},{value:"addNode",id:"addnode",children:[]},{value:"discoverProperty",id:"discoverproperty",children:[]},{value:"hasNode",id:"hasnode",children:[]},{value:"sort",id:"sort",children:[]},{value:"visit",id:"visit",children:[]},{value:"visitOpenNode",id:"visitopennode",children:[]}]}],m={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".CommitOrderCalculator"),(0,o.kt)("p",null,"CommitOrderCalculator implements topological sorting, which is an ordering\nalgorithm for directed graphs (DG) and/or directed acyclic graphs (DAG) by\nusing a depth-first searching (DFS) to traverse the graph built in memory.\nThis algorithm have a linear running time based on nodes (V) and dependency\nbetween the nodes (E), resulting in a computational complexity of O(V + E)."),(0,o.kt)("p",null,"Based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php"},"https://github.com/doctrine/orm/blob/master/lib/Doctrine/ORM/Internal/CommitOrderCalculator.php")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new CommitOrderCalculator"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.commitordercalculator"},(0,o.kt)("em",{parentName:"a"},"CommitOrderCalculator"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.commitordercalculator"},(0,o.kt)("em",{parentName:"a"},"CommitOrderCalculator"))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"nodes"},"nodes"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"nodes"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},(0,o.kt)("em",{parentName:"a"},"Node")),">"),(0,o.kt)("p",null,"Matrix of nodes, keys are provided hashes and values are the node definition objects."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L34"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:34")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sortednodelist"},"sortedNodeList"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"sortedNodeList"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Volatile variable holding calculated nodes during sorting process."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L37"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:37")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"adddependency"},"addDependency"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addDependency"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"from"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"weight"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Adds a new dependency (edge) to the graph using their hashes."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"from")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"to")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"weight")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L56"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:56")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"addnode"},"addNode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addNode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"hash"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Adds a new node to the graph, assigning its hash."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hash")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L49"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:49")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"discoverproperty"},"discoverProperty"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"discoverProperty"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,o.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"prop")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,o.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entityName")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L60"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:60")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hasnode"},"hasNode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"hasNode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"hash"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Checks for node existence in graph."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hash")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L42"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:42")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sort"},"sort"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"sort"),"(): ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Return a valid order list of all current nodes.\nThe desired topological sorting is the reverse post order of these searches."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L81"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:81")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"visit"},"visit"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private"),(0,o.kt)("strong",{parentName:"p"},"visit"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},(0,o.kt)("em",{parentName:"a"},"Node")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Visit a given node definition for reordering."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),(0,o.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.node"},(0,o.kt)("em",{parentName:"a"},"Node")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L102"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:102")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"visitopennode"},"visitOpenNode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private"),(0,o.kt)("strong",{parentName:"p"},"visitOpenNode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},(0,o.kt)("em",{parentName:"a"},"Node")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.node"},(0,o.kt)("em",{parentName:"a"},"Node")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edge"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.edge"},(0,o.kt)("em",{parentName:"a"},"Edge")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Visits all target's dependencies if in cycle with given node"),(0,o.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.node"},(0,o.kt)("em",{parentName:"a"},"Node")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"target")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.node"},(0,o.kt)("em",{parentName:"a"},"Node")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edge")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.edge"},(0,o.kt)("em",{parentName:"a"},"Edge")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L124"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:124")))}d.isMDXComponent=!0}}]);