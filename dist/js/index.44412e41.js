(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)o=r[d],i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={index:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"231a":function(t,e,n){},"5e45":function(t,e,n){},"9ba6":function(t,e,n){t.exports=n.p+"img/fb.d2850d31.jpg"},"9f0c":function(t,e,n){"use strict";var a=n("231a"),i=n.n(a);i.a},c31f:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-tabs-chrome",{ref:"tab",attrs:{tabs:t.tabs},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}}),n("button",{on:{click:t.addTab}},[t._v("＋")])],1)},s=[],o={name:"app",data:function(){return{tab:"google",tabs:[{label:"google",key:"google",favico:n("c448")},{label:"facebook",key:"facebook",favico:n("9ba6")}]}},methods:{addTab:function(){var t,e=this.tabs.length,n=[{label:"tab"+(e+1),key:"tab"+(e+1)}];(t=this.$refs.tab).addTab.apply(t,n),this.tab="tab"+(e+1)}}},r=o,c=(n("e780"),n("2877")),u=Object(c["a"])(r,i,s,!1,null,null,null),l=u.exports,d=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-tabs-chrome"},[n("div",{ref:"content",staticClass:"tabs-content"},[t._l(t.tabs.length,function(e){return n("div",{key:e,staticClass:"tabs-divider",style:{left:(t.tabWidth-2*t.gap)*e+t.gap+"px"}})}),t._l(t.tabs,function(e,a){return n("div",{key:e[t.tabKey],staticClass:"tabs-item",class:[{active:e[t.tabKey]===t.value},"tab-"+e[t.tabKey]],style:{width:t.tabWidth+"px"}},[n("div",{staticClass:"tabs-background"},[n("div",{staticClass:"tabs-background-content"}),n("svg",{staticClass:"tabs-background-before",attrs:{width:"7",height:"7"}},[n("path",{attrs:{d:"M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z"}})]),n("svg",{staticClass:"tabs-background-after",attrs:{width:"7",height:"7"}},[n("path",{attrs:{d:"M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z"}})])]),n("div",{staticClass:"tabs-close",on:{click:function(n){return n.stopPropagation(),t.handleDelete(e,a)}}},[t.$slots["close-icon"]?t._t("close-icon"):n("svg",{staticClass:"tabs-close-icon",attrs:{width:"16",height:"16",stroke:"#595959"}},[n("path",{attrs:{d:"M 4 4 L 12 12 M 12 4 L 4 12"}})])],2),n("div",{staticClass:"tabs-main",attrs:{title:e.label}},[t.$slots["favico"]||e.favico?n("span",{staticClass:"tabs-favicon"},[t.$slots["favico"]?t._t("favico",null,{tab:e,index:a}):e.favico?n("img",{attrs:{src:e.favico}}):t._e()],2):t._e(),n("span",{staticClass:"tabs-label"},[t._v(t._s(e.label))])])])})],2)])}),f=[],h=(n("20d6"),n("ac6a"),n("c5f6"),n("a0a8")),b=n.n(h),p=function(t,e,n,a,i){for(var s=(n-i)/2,o=e._instance.position.x,r=0;r<t.length;r++){var c=t[r]._x-1;if(e[a]!==t[r][a]){if(c<=o&&o<c+s/2)return{direction:"left",instance:t[r]._instance,targetTab:t[r]};if(c+s/2<=o&&o<c+s)return{direction:"right",instance:t[r]._instance,targetTab:t[r]}}}return{direction:null,instance:null,targetTab:e}},v={name:"vue-tabs-chrome",props:{value:{type:[String,Number],default:""},tabs:{type:Array,default:function(){return[]}},tabKey:{type:String,default:"key"},minWidth:{type:Number,default:40},maxWidth:{type:Number,default:245}},data:function(){return{gap:7,tabWidth:null}},mounted:function(){this.calcTabWidth(),window.addEventListener("resize",this.handleResize),this.setup()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{calcTabWidth:function(){var t=this.tabs,e=this.maxWidth,n=this.minWidth,a=this.gap,i=this.$refs.content;if(!i)return Math.max(e,n);var s=i.clientWidth-2*a,o=s/t.length;o+=2*a,o>e&&(o=e),o<n&&(o=n),this.tabWidth=o},setup:function(){var t=this,e=this.tabs;e.forEach(function(e,n){t.addInstance(e,n)})},addInstance:function(t,e){var n=this,a=this.tabWidth,i=this.tabKey,s=this.gap;if(!t._instance){var o=this.$refs.content,r=o.querySelector(".tab-".concat(t[i]));t._instance=new b.a(r,{axis:"x",containment:o,handle:".tabs-main"});var c=(a-2*s)*e;t._x=c,t._instance.setPosition(c,0),t._instance.on("pointerDown",function(a,i){return n.handlePointerDown(a,t,e)}),t._instance.on("dragMove",function(a,i,s){return n.handleDragMove(a,s,t,e)}),t._instance.on("dragEnd",function(a,i){return n.handleDraEnd(a,t,e)})}},addTab:function(){var t,e=this;(t=this.tabs).push.apply(t,arguments),this.$nextTick(function(){e.setup(),e.doLayout()})},doLayout:function(){this.calcTabWidth();var t=this.tabWidth,e=this.tabs,n=this.gap;e.forEach(function(e,a){var i=e._instance,s=(t-2*n)*a;e._x=s,i.setPosition(s,0)})},handleDelete:function(t,e){var n=this.tabKey,a=this.tabs,i=this.value,s=a.findIndex(function(t){return t[n]===i});if(e===s){var o=a[e-1];this.$emit("input",o?o[n]:null)}a.splice(e,1),this.doLayout()},handleResize:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){e.doLayout()},100)},handlePointerDown:function(t,e,n){var a=this.tabKey;this.$emit("input",e[a])},handleDragMove:function(t,e,n,a){var i=this.tabWidth,s=this.tabs,o=this.tabKey,r=this.gap,c=p(s,n,i,o,r),u=c.instance,l=c.targetTab;u&&this.swapTab(n,l)},handleDraEnd:function(t,e){var n=e._instance;0!==n.position.x&&(setTimeout(function(){n.element.classList.add("move"),n.setPosition(e._x,0)},50),setTimeout(function(){n.element.classList.remove("move")},200))},swapTab:function(t,e){for(var n,a,i=this.tabKey,s=this.tabs,o=0;o<s.length;o++)t[i]===s[o][i]&&(n=o),e[i]===s[o][i]&&(a=o);if(n!==a){var r=[s[a],s[n]];s[n]=r[0],s[a]=r[1]}var c=t._x;t._x=e._x,e._x=c;var u=e._instance;setTimeout(function(){u.element.classList.add("move"),u.setPosition(c,u.position.y)},50),setTimeout(function(){u.element.classList.remove("move")},200)}}},g=v,m=(n("9f0c"),Object(c["a"])(g,d,f,!1,null,null,null)),y=m.exports,_=function t(e){t.installed||(t.installed=!0,e.component(y.name,y))};"undefined"!==typeof window&&window.Vue&&_(window.Vue);var x={install:_,VueTabsChrome:y};a["a"].use(x),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(l)}}).$mount("#app")},c448:function(t,e,n){t.exports=n.p+"img/google.f3418a44.jpg"},e780:function(t,e,n){"use strict";var a=n("5e45"),i=n.n(a);i.a}});
//# sourceMappingURL=index.44412e41.js.map