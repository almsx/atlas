(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3BRl":function(t,a,e){"use strict";var s={props:{communities:Array}},n=e("KHd+"),i=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},t._l(t.communities,(function(a){return e("div",{key:a.id,staticClass:"col-lg-4 col-md-6 col-xs-12 mb-4"},[e("g-link",{staticClass:"text-decoration-none text-reset card h-100 shadow px-2 px-lg-3 card-span",attrs:{to:a.node.path}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex align-items-center"},[e("g-image",{staticClass:"me-3 me-md-3",attrs:{src:a.node.image,alt:"Logo "+a.node.title}}),e("div",{staticClass:"my-3"},[e("p",{staticClass:"mb-0 text-black fw-bold fs-1 d-inline-block"},[t._v("\n              "+t._s(a.node.title)+"\n            ")]),e("p",{staticClass:"fw-normal mb-0"},[e("font-awesome",{attrs:{icon:["fas","map-marker-alt"]}}),t._v("\n              "+t._s(a.node.location)+"\n            ")],1)])],1),e("div",{staticClass:"fw-bold text-uppercase"},[t._v("Descripción")]),e("p",{staticClass:"text-wrap text-body text-truncate text-black mb-1"},[t._v("\n          "+t._s(a.node.description.length>=150?a.node.description.slice(0,150)+"...":a.node.description)+"\n        ")]),e("div",{staticClass:"fw-bold text-uppercase"},[t._v("Tags")]),e("div",{staticClass:"d-flex align-items-center mt-1 fs-1"},[e("div",{staticClass:"tagcloud"},t._l(a.node.tags.slice(0,3),(function(a){return e("g-link",{key:a.id,attrs:{to:a.path}},[t._v("\n              "+t._s(a.title)+"\n            ")])})),1)])])])],1)})),0)}),[],!1,null,"2e8a592c",null);a.a=i.exports},HOqn:function(t,a,e){},VV1l:function(t,a,e){"use strict";e("HOqn")},aWtE:function(t,a,e){"use strict";e("Kw5r");var s=e("DOVJ"),n=(e("Y6W1"),e("VTBJ")),i=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ma9I"),e("fVfk")),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,l=a.data,o=a.parent,c=e.info,d=e.showLinks,u=e.showNavigation,p=e.ariaLabel,g=function(t,a){var e=t.currentPage,s=void 0===e?1:e,n=t.totalPages,i=void 0===n?1:n,l=Math.ceil(a/2),r=Math.floor(s-l),o=Math.floor(s+l);i<=a?(r=0,o=i):s<=l?(r=0,o=a):s+l>=i&&(r=i-a,o=i);for(var c=[],d=r+1;d<=o;d++)c.push(d);return{current:s,total:i,start:r,end:o,pages:c}}(c,e.range),f=g.current,v=g.total,b=g.pages,C=g.start,m=g.end,L=Object(i.d)(o.$route),h=function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===f&&(l=e.ariaCurrentLabel);var c={to:r(L,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:Object(n.a)(Object(n.a)({},c),{},{"aria-label":l.replace("%n",a),"aria-current":f===a})},[i])},y=d?b.map((function(t){return h(t,t,e.ariaLinkLabel)})):[];if(u){var x=e.firstLabel,k=e.prevLabel,w=e.nextLabel,_=e.lastLabel,S=e.ariaFirstLabel,O=e.ariaPrevLabel,P=e.ariaNextLabel,j=e.ariaLastLabel,N=e.firstClass,V=e.prevClass,$=e.nextClass,B=e.lastClass,G=e.navClass;f>1&&y.unshift(h(f-1,k,O,[V,G])),C>0&&y.unshift(h(1,x,S,[N,G])),f<v&&y.push(h(f+1,w,P,[$,G])),m<v&&y.push(h(v,_,j,[B,G]))}return y.length<2?null:t("nav",Object(n.a)(Object(n.a)({},l),{},{attrs:{role:"navigation","aria-label":p}}),y)}};function r(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(i.g)(t)+"/".concat(a).concat(e):t}e("6NbQ");var o={components:{Pager:l},data:function(){return{showNavigation:!1,showLinks:!0}},props:{data:Object}},c=(e("VV1l"),e("KHd+")),d=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("Pager",{staticClass:"pager-container",attrs:{info:this.data,showNavigation:this.showNavigation,showLinks:this.showLinks,linkClass:"pager-container__link"}})}),[],!1,null,"35560e90",null);a.a=d.exports},bnGp:function(t,a,e){"use strict";e.r(a);var s=e("3BRl"),n={components:{Pager:e("aWtE").a,CommunityCards:s.a},metaInfo:{title:"Comunidades"}},i=e("KHd+"),l=null,r=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{staticClass:"container mt-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 order-1"},[e("h1",{staticClass:"fw-bold"},[t._v("Comunidades")]),e("Pager",{attrs:{data:t.$page.communities.pageInfo}}),e("CommunityCards",{attrs:{communities:t.$page.communities.edges}})],1),e("div",{staticClass:"col-lg-2 sidebar order-0"},[e("div",{staticClass:"sidebar-box mt-2"},[e("h3",[t._v("Tags")]),e("div",{staticClass:"tagcloud"},t._l(t.$page.tags.edges,(function(a){return e("g-link",{key:a.node.id,attrs:{to:a.node.path}},[t._v("\n              "+t._s(a.node.title)+"\n            ")])})),1)])])])])])}),[],!1,null,null,null);"function"==typeof l&&l(r);a.default=r.exports}}]);