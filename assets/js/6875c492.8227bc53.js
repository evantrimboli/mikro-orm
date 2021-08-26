(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48610,23343],{46165:function(e,t,a){"use strict";a.d(t,{Z:function(){return E}});var r=a(79973),n=a(67294),l=a(86010),s=a(16199),o=a(36742),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",f=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571);var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,i=(0,r.Z)(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return n.createElement(s.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.Z,{toc:a})))))}},94884:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var r=a(67294),n=a(86010),l=a(3905),s=a(24973),o=a(36742),i=a(44996),c=a(41773),m=a(60637),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",f="blogPostDetailsFull_3kfx",h=a(87682),p="image_1yU8";var E=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:p,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},v="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",v),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,p,E,v=(p=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,i.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,y=e.metadata,w=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,L=y.date,C=y.formattedDate,I=y.permalink,M=y.tags,U=y.readingTime,S=y.title,A=y.editUrl,B=y.authors,R=null!=(t=Z.image)?t:k.image;return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=T?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:d,itemProp:"headline"},T?S:r.createElement(o.Z,{itemProp:"url",to:I},S)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},C),void 0!==U&&r.createElement(r.Fragment,null," \xb7 ",v(U))),r.createElement(b,{authors:B,assets:Z}))),R&&r.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},N)),(M.length>0||w)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[f]=T,a))},M.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!T})},r.createElement(h.Z,{tags:M})),T&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:A})),!T&&w&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+S},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,a){"use strict";a.r(t);var r=a(67294),n=a(36742),l=a(46165),s=a(94884),o=a(24973),i=a(41773);t.default=function(e){var t,a=e.metadata,c=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,f=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(g),tagName:d});return r.createElement(l.Z,{title:h,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:u},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},86146:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(67294),n=a(24973),l=a(74034),s=a(79973),o=a(86010),i="iconEdit_2_ui",c=function(e){var t=e.className,a=(0,s.Z)(e,["className"]);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{r:function(){return g},Z:function(){return f}});var r=a(67294),n=a(86010),l=a(41773);function s(e){var t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=r.find((function(e){return s(e).top>=a}));return n?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:null!=(t=r[r.indexOf(n)-1])?t:null:r[r.length-1]}function i(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var c=function(e){var t=(0,r.useRef)(void 0),a=i();(0,r.useEffect)((function(){var r=e.linkClassName,n=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=o({anchorTopOffset:a.current}),s=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(n)),e.classList.add(n),t.current=e}else e.classList.remove(n)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return c(d),r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement(g,{toc:t}))}},37211:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(36742),s="tag_1Okp",o="tagRegular_3MiF",i="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(s,(t={},t[o]=!m,t[i]=m,t))},c,m&&r.createElement("span",null,m))}},87682:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(24973),s=a(37211),o="tags_2ga9",i="tag_11ep";function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:i},r.createElement(s.Z,{name:t,permalink:a}))}))))}},546:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(74034),n=a(79973),l=a(67294),s=a(94184),o=a.n(s),i=a(36742),c=a(52263),m=a(44996),u="footerLogoLink_qW4Z";function d(e){var t=e.to,a=e.href,s=e.label,o=(0,n.Z)(e,["to","href","label"]),c=(0,m.Z)(t);return l.createElement(i.Z,(0,r.Z)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},o),s)}var g=function(e){var t=e.url,a=e.alt;return l.createElement("img",{className:"footer__logo",alt:a,src:t})};var f=function(){var e=(0,c.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,s=r.links,i=void 0===s?[]:s,f=r.logo,h=void 0===f?{}:f,p=(0,m.Z)(h.src);return a?l.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===a.style})},l.createElement("div",{className:"container"},i&&i.length>0&&l.createElement("div",{className:"row footer__links"},i.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?l.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(d,e))}))):null)}))),(h||n)&&l.createElement("div",{className:"text--center"},h&&h.src&&l.createElement("div",{className:"margin-bottom--sm"},h.href?l.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:u},l.createElement(g,{alt:h.alt,url:p})):l.createElement(g,{alt:h.alt,url:p})),n,"Icons made by ",l.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",l.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);