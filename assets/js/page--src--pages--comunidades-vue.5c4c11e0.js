(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3BRl":function(t,a,e){"use strict";var n={props:{community:Object}},s=e("KHd+"),i={components:{CommunityCard:Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("g-link",{staticClass:"text-decoration-none text-reset card h-100 shadow px-2 px-lg-3 card-span",attrs:{to:t.community.node.path}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex align-communitys-center"},[e("g-image",{staticClass:"me-3 me-md-3",attrs:{src:t.community.node.image,alt:"Logo "+t.community.node.title}}),e("div",{staticClass:"my-3"},[e("p",{staticClass:"mb-0 text-black fw-bold fs-1 d-inline-block"},[t._v("\n          "+t._s(t.community.node.title)+"\n        ")]),e("p",{staticClass:"fw-normal mb-0"},[e("font-awesome",{attrs:{icon:["fas","map-marker-alt"]}}),e("g-link",{attrs:{to:t.community.node.location.path}},[t._v("\n            "+t._s(t.community.node.location.title)+"\n          ")])],1)])],1),e("div",{staticClass:"fw-bold text-uppercase"},[t._v("Descripción")]),e("p",{staticClass:"text-wrap text-body text-truncate text-black mb-1"},[t._v("\n      "+t._s(t.community.node.description.length>=150?t.community.node.description.slice(0,150)+"...":t.community.node.description)+"\n    ")]),e("div",{staticClass:"fw-bold text-uppercase"},[t._v("Tags")]),e("div",{staticClass:"d-flex align-communitys-center mt-1 fs-1"},[e("div",{staticClass:"tagcloud"},t._l(t.community.node.tags.slice(0,3),(function(a){return e("g-link",{key:a.id,attrs:{to:a.path}},[t._v("\n          "+t._s(a.title)+"\n        ")])})),1)])])])}),[],!1,null,"1d9c4fa1",null).exports},props:{communities:Array}},l=Object(s.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},this._l(this.communities,(function(t){return a("div",{key:t.id,staticClass:"col-lg-4 col-md-6 col-xs-12 mb-4"},[a("CommunityCard",{attrs:{community:t}})],1)})),0)}),[],!1,null,"8ed3b06a",null);a.a=l.exports},HOqn:function(t,a,e){},VV1l:function(t,a,e){"use strict";e("HOqn")},aWtE:function(t,a,e){"use strict";e("Kw5r");var n=e("DOVJ"),s=(e("Y6W1"),e("VTBJ")),i=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ma9I"),e("fVfk")),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,l=a.data,o=a.parent,c=e.info,d=e.showLinks,u=e.showNavigation,p=e.ariaLabel,g=function(t,a){var e=t.currentPage,n=void 0===e?1:e,s=t.totalPages,i=void 0===s?1:s,l=Math.ceil(a/2),r=Math.floor(n-l),o=Math.floor(n+l);i<=a?(r=0,o=i):n<=l?(r=0,o=a):n+l>=i&&(r=i-a,o=i);for(var c=[],d=r+1;d<=o;d++)c.push(d);return{current:n,total:i,start:r,end:o,pages:c}}(c,e.range),f=g.current,m=g.total,v=g.pages,b=g.start,C=g.end,y=Object(i.d)(o.$route),h=function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===f&&(l=e.ariaCurrentLabel);var c={to:r(y,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(n.a,{class:[e.linkClass,o],attrs:Object(s.a)(Object(s.a)({},c),{},{"aria-label":l.replace("%n",a),"aria-current":f===a})},[i])},L=d?v.map((function(t){return h(t,t,e.ariaLinkLabel)})):[];if(u){var k=e.firstLabel,x=e.prevLabel,_=e.nextLabel,w=e.lastLabel,S=e.ariaFirstLabel,O=e.ariaPrevLabel,P=e.ariaNextLabel,j=e.ariaLastLabel,N=e.firstClass,$=e.prevClass,V=e.nextClass,B=e.lastClass,E=e.navClass;f>1&&L.unshift(h(f-1,x,O,[$,E])),b>0&&L.unshift(h(1,k,S,[N,E])),f<m&&L.push(h(f+1,_,P,[V,E])),C<m&&L.push(h(m,w,j,[B,E]))}return L.length<2?null:t("nav",Object(s.a)(Object(s.a)({},l),{},{attrs:{role:"navigation","aria-label":p}}),L)}};function r(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(i.g)(t)+"/".concat(a).concat(e):t}e("6NbQ");var o={components:{Pager:l},data:function(){return{showNavigation:!1,showLinks:!0}},props:{data:Object}},c=(e("VV1l"),e("KHd+")),d=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("Pager",{staticClass:"pager-container",attrs:{info:this.data,showNavigation:this.showNavigation,showLinks:this.showLinks,linkClass:"pager-container__link"}})}),[],!1,null,"35560e90",null);a.a=d.exports},bnGp:function(t,a,e){"use strict";e.r(a);var n=e("3BRl"),s={components:{Pager:e("aWtE").a,CommunityCards:n.a},metaInfo:{title:"Comunidades"}},i=e("KHd+"),l=null,r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{staticClass:"container mt-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 order-1"},[e("h1",{staticClass:"fw-bold mb-4"},[t._v("Comunidades")]),e("Pager",{attrs:{data:t.$page.communities.pageInfo}}),e("CommunityCards",{attrs:{communities:t.$page.communities.edges}})],1),e("div",{staticClass:"col-lg-2 sidebar order-0"},[e("div",{staticClass:"sidebar-box mt-2"},[e("h3",[t._v("Tags")]),e("div",{staticClass:"tagcloud"},t._l(t.$page.tags.edges,(function(a){return e("g-link",{key:a.node.id,attrs:{to:a.node.path}},[t._v("\n              "+t._s(a.node.title)+"\n            ")])})),1)]),e("div",{staticClass:"sidebar-box"},[e("h3",[t._v("Países")]),e("div",{staticClass:"tagcloud"},t._l(t.$page.locations.edges,(function(a){return e("g-link",{key:a.node.id,attrs:{to:a.node.path}},[t._v("\n              "+t._s(a.node.title)+"\n            ")])})),1)])])])])])}),[],!1,null,null,null);"function"==typeof l&&l(r);a.default=r.exports}}]);