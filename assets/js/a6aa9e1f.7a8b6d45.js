(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93089,23343],{46165:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(79973),n=a(67294),l=a(86010),i=a(16199),o=a(36742),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",f=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571);var v=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.Z,{toc:a})))))}},44428:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=a(67294),n=a(52263),l=a(46165),i=a(94884),o=a(36742),s=a(24973);var c=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(o.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(o.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(41773);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,s=(0,n.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?s:d;return r.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(c,{metadata:t}))}},94884:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var r=a(67294),n=a(86010),l=a(3905),i=a(24973),o=a(36742),s=a(44996),c=a(41773),m=a(60637),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",f="blogPostDetailsFull_3kfx",h=a(87682),p="image_1yU8";var v=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:p,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},E="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",E),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,p,v,E=(p=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,y=e.metadata,w=e.truncated,T=e.isBlogPostPage,P=void 0!==T&&T,L=y.date,C=y.formattedDate,A=y.permalink,I=y.tags,B=y.readingTime,M=y.title,R=y.editUrl,S=y.authors,U=null!=(t=Z.image)?t:k.image;return r.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=P?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:d,itemProp:"headline"},P?M:r.createElement(o.Z,{itemProp:"url",to:A},M)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},C),void 0!==B&&r.createElement(r.Fragment,null," \xb7 ",E(B))),r.createElement(b,{authors:S,assets:Z}))),U&&r.createElement("meta",{itemProp:"image",content:_(U,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},N)),(I.length>0||w)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[f]=P,a))},I.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!P})},r.createElement(h.Z,{tags:I})),P&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:R})),!P&&w&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+M},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86146:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(67294),n=a(24973),l=a(74034),i=a(79973),o=a(86010),s="iconEdit_2_ui",c=function(e){var t=e.className,a=(0,i.Z)(e,["className"]);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{r:function(){return g},Z:function(){return f}});var r=a(67294),n=a(86010),l=a(41773);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=r.find((function(e){return i(e).top>=a}));return n?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:null!=(t=r[r.indexOf(n)-1])?t:null:r[r.length-1]}function s(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var c=function(e){var t=(0,r.useRef)(void 0),a=s();(0,r.useEffect)((function(){var r=e.linkClassName,n=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(n)),e.classList.add(n),t.current=e}else e.classList.remove(n)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return c(d),r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement(g,{toc:t}))}},37211:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(36742),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[o]=!m,t[s]=m,t))},c,m&&r.createElement("span",null,m))}},87682:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(24973),i=a(37211),o="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{name:t,permalink:a}))}))))}},546:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(74034),n=a(79973),l=a(67294),i=a(94184),o=a.n(i),s=a(36742),c=a(52263),m=a(44996),u="footerLogoLink_qW4Z";function d(e){var t=e.to,a=e.href,i=e.label,o=(0,n.Z)(e,["to","href","label"]),c=(0,m.Z)(t);return l.createElement(s.Z,(0,r.Z)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},o),i)}var g=function(e){var t=e.url,a=e.alt;return l.createElement("img",{className:"footer__logo",alt:a,src:t})};var f=function(){var e=(0,c.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,i=r.links,s=void 0===i?[]:i,f=r.logo,h=void 0===f?{}:f,p=(0,m.Z)(h.src);return a?l.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===a.style})},l.createElement("div",{className:"container"},s&&s.length>0&&l.createElement("div",{className:"row footer__links"},s.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?l.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(d,e))}))):null)}))),(h||n)&&l.createElement("div",{className:"text--center"},h&&h.src&&l.createElement("div",{className:"margin-bottom--sm"},h.href?l.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:u},l.createElement(g,{alt:h.alt,url:p})):l.createElement(g,{alt:h.alt,url:p})),n,"Icons made by ",l.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",l.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);