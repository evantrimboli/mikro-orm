(window.webpackJsonp=window.webpackJsonp||[]).push([[614,99,764],{1023:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(16),o=t(1038),i=t(1050),s=t(1029),c=t(1030);var m=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(s.a,{className:"pagination-nav__link",to:t},n.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.a.createElement(s.a,{className:"pagination-nav__link",to:r},n.a.createElement("div",{className:"pagination-nav__label"},n.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},g=t(1042);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=Object(l.default)().siteConfig.title,c=a.blogDescription,d=a.blogTitle,p="/"===a.permalink?s:d;return n.a.createElement(o.a,{title:p,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},n.a.createElement(g.a,{sidebar:r})),n.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return n.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null))})),n.a.createElement(m,{metadata:a})))))}},1039:function(e,a,t){"use strict";var r=t(3),n=t(8),l=t(0),o=t.n(l),i=t(1037),s=t.n(i),c=t(1029),m=t(16),g=t(1031),d=t(57),p=t.n(d);function u(e){var a=e.to,t=e.href,l=e.label,i=Object(n.a)(e,["to","href","label"]),s=Object(g.a)(a);return o.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:s},i),l)}var f=function(e){var a=e.url,t=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.default)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,r=t||{},n=r.copyright,l=r.links,i=void 0===l?[]:l,c=r.logo,d=void 0===c?{}:c,h=Object(g.a)(d.src);return t?o.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===t.style})},o.a.createElement("div",{className:"container"},i&&i.length>0&&o.a.createElement("div",{className:"row footer__links"},i.map((function(e,a){return o.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return"GitHub Stars"===e.label?o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:a})):"GitHub Sponsors"===e.label?o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?o.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(u,e))}))):null)}))),(d||n)&&o.a.createElement("div",{className:"text--center"},d&&d.src&&o.a.createElement("div",{className:"margin-bottom--sm"},d.href?o.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:p.a.footerLogoLink},o.a.createElement(f,{alt:d.alt,url:h})):o.a.createElement(f,{alt:d.alt,url:h})),n,"Icons made by ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);