(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});a(180);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(174),l=a(182),c=a(335),m=a(179),p=function(e){var t=e.data,a=e.location,n=Object(m.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{data:t,location:a,type:"website",title:"How To Install Ghost: Setup & Configuration - Open Source Publishing",description:"All the tools you need to get started with Ghost 👉Self-hosted install & setup, local install guide for development, contribution guidelines & premium hosted services!",image:n}),r.a.createElement(l.a,{mainClass:"bg-whitegrey-l2 pb-vw3",bodyClass:"bg-white"},r.a.createElement("section",{className:"bg-api-reference"},r.a.createElement("div",{className:o.a.page.xl+" tc-ns pt-vw6 pt-vw5-ns pb-vw5 white"},r.a.createElement("h1",{className:o.a.sectionHeading+" gh-integration-header-shadow"},"Tutorial on Image Filtering"),r.a.createElement("p",{className:o.a.sectionSubHeading},"In this tutorial, you will become familar with ",r.a.createElement("strong",null,"Image Filtering")," so that you can use it for computer vision class."))),r.a.createElement("div",{className:o.a.page.xl+" mt-vw3"},r.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-20-ns gutter-36-l"},r.a.createElement(c.a,{to:"/python/syntax/",title:"Python Syntax",icon:"Python-logo-notext",iconClass:"fill-midlightgrey w8 h8",headingClass:"mt2"},r.a.createElement("p",{className:o.a.small+" mw70"},"Learn Python Syntax")),r.a.createElement(c.a,{to:"/python/datastructure/",title:"Python Data Structure",icon:"Python-logo-notext",iconClass:"w8 h8",headingClass:"mt2"},r.a.createElement("p",{className:o.a.small+" mw70"},"Learn Python Data Structure")),r.a.createElement(c.a,{to:"/python/tensorflowpart1/",title:"Python Tensorflow(I)",icon:"Tensorflow_logo",iconClass:"w8 h8",headingClass:"mt2"},r.a.createElement("p",{className:o.a.small+" mw70"},"Learn Tensorflow with Python Part I")),r.a.createElement(c.a,{to:"/python/tensorflowpart2/",title:"Python Tensorflow(II)",icon:"Tensorflow_logo",iconClass:"w8 h8",headingClass:"mt2"},r.a.createElement("p",{className:o.a.small+" mw70"},"Learn Tensorflow with Python Part II")),r.a.createElement(c.a,{to:"/python/tensorflowpart3/",title:"Python Tensorflow (III)",icon:"Tensorflow_logo",iconClass:"w8 h8",headingClass:"mt2"},r.a.createElement("p",{className:o.a.small+" mw70"},"Learn Tensorflow with Python Part III"))))))};p.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p;var g="1531574144"},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(178),l=a.n(o),c=(a(176),a(173)),m=a.n(c),p=a(175),g=a.n(p),d=a(183),u=(a(187),function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+g.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=g.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+g.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}});u.defaultProps={fetchAuthorData:!1},u.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=u,w=function(e){var t=e.image;return r.a.createElement(m.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:t}),r.a.createElement("meta",{property:"og:image",content:t}),r.a.createElement("meta",{property:"og:image:width",content:"1000"}),r.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string.isRequired};var y=w,E=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,i=e.title,s=e.overwriteDefaultImage,o=e.image,l=t.ghostPost,c=t.site.siteMetadata,p=h(l.primary_author,n),u=g.a.map(Object(d.a)(l,{visibility:"public",fn:function(e){return e}}),"name"),w=u[0]||{name:"General",slug:"general"},E=s&&l.feature_image?l.feature_image:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,l.meta_title||i||l.title),r.a.createElement("meta",{name:"description",content:l.meta_description||l.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:c.title}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:l.og_title||i||l.meta_title||l.title}),r.a.createElement("meta",{property:"og:description",content:l.og_description||l.excerpt||l.meta_description}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:l.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:l.updated_at}),u.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}),r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:l.twitter_title||i||l.meta_title||l.title}),r.a.createElement("meta",{name:"twitter:description",content:l.twitter_description||l.excerpt||l.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:p.name}),r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),r.a.createElement("meta",{name:"twitter:data2",content:w}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(u.length?'"keywords": "'+g.a.join(u,", ")+'",':"")+'\n                        "headline": "'+(l.meta_title||i||l.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l.published_at+'",\n                        "dateModified": "'+l.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+E+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(l.meta_description||l.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+c.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:E}))};E.defaultProps={fetchAuthorData:!1},E.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=E,R=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,s=t.site.siteMetadata,o=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),l=i.keywords&&i.keywords.length?i.keywords[0]:null,c=T();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,i.meta_title||i.title),r.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:s.title}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:i.meta_title||i.title}),r.a.createElement("meta",{property:"og:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:o}),i.keywords&&i.keywords.length?i.keywords.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),r.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),l?r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,l?r.a.createElement("meta",{name:"twitter:data2",content:l}):null,r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+g.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:c}))};R.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var b=R,q=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,s=e.image,o=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:n}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),r.a.createElement(y,{image:s}))};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var _=q,v=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,s=e.image,o=e.fetchAuthorData,c=e.overwriteDefaultImage,m=e.location,p=t||{},g=p.ghostPost,d=p.markdownRemark,u=t.site.siteMetadata,h=l.a.resolve(u.siteUrl,m.pathname,"/");if("article"===a){if(g)return r.a.createElement(f,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:c});if(d)return r.a.createElement(b,{data:t,canonical:h})}else if("website"===a||"series"===a)return r.a.createElement(_,{data:t,canonical:h,title:n,description:i,image:s,type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var k=v,P="http://ghost.local:8000",I={faq:l.a.resolve(P,"/images/meta/Ghost-FAQ.jpg"),integrations:l.a.resolve(P,"/images/meta/Ghost-Integrations.jpg"),tutorials:l.a.resolve(P,"/images/meta/Ghost-Tutorials.jpg"),default:l.a.resolve(P,"/images/meta/Ghost-Docs.jpg")},A=function(e){return I[e=e||"default"]};A.proptypes={section:s.a.string.isRequired};var T=A;a.d(t,"a",function(){return k}),a.d(t,"b",function(){return T})},335:function(e,t,a){"use strict";a(180);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(177),l=a(174),c=function(e){var t=e.to,a=e.href,n=e.icon,i=e.iconClass,s=e.headingClass,c=e.title,m=e.children;return r.a.createElement(o.a,{to:t,href:a,className:"col-12 col-6-ns col-4-l pa8 tdn middarkgrey setup-box-min-height",radius:"4"},r.a.createElement(o.b,{name:n,className:i}),r.a.createElement("h4",{className:l.a.h4+" darkgrey "+s},c),r.a.createElement("div",{className:l.a.small+" mt1 midgrey"},m))};c.propTypes={children:s.a.node.isRequired,icon:s.a.string.isRequired,title:s.a.string.isRequired,to:s.a.string,href:s.a.string,iconClass:s.a.string,headingClass:s.a.string};var m=c;a.d(t,"a",function(){return m})}}]);
//# sourceMappingURL=component---src-pages-imagefiltering-js-9404f95afdc7950b8f37.js.map