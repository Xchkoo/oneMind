(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{"rounded-pill":"",app:"",color:"primary",dark:"","clipped-left":""}},[n("v-avatar",{attrs:{size:"60"}},[n("v-icon",{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1),n("v-spacer"),n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1)],1),n("v-navigation-drawer",{attrs:{app:"",permanent:"",clipped:""}},[n("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:"","rounded-xl":""}},[n("v-list",{attrs:{rounded:""}},[n("v-subheader",[t._v("Menu")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,a){return n("router-link",{key:a,attrs:{to:e.url}},[n("v-list-item",{staticClass:"md-5"},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)],1)})),1)],1)],1)],1),n("v-main",[n("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:"","rounded-xl":""}},[n("router-view")],1)],1),n("v-footer",{staticClass:"white",attrs:{app:""}},[n("v-container",{staticClass:"text-center"},[t._v(" © copyright 2021 Xchkoo All rights reserved. ")])],1)],1)},o=[],i={name:"App",data:function(){return{selectedItem:1,items:[{text:"主页 - Home",icon:"mdi-home-variant-outline",url:"/Home"},{text:"写下 - Idea",icon:"mdi-lightbulb-on",url:"/Idea"},{text:"分享 - Share",icon:"mdi-share-variant",url:"/Share"}]}}},s=i,c=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),p=n("7496"),d=n("40dc"),f=n("8212"),m=n("a523"),v=n("553a"),h=n("132d"),b=n("adda"),g=n("8860"),y=n("da13"),_=n("5d23"),x=n("1baa"),w=n("34c3"),V=n("f6c4"),I=n("f774"),j=n("8dd9"),O=n("2fa4"),k=n("e0c7"),C=Object(c["a"])(s,r,o,!1,null,null,null),S=C.exports;u()(C,{VApp:p["a"],VAppBar:d["a"],VAvatar:f["a"],VContainer:m["a"],VFooter:v["a"],VIcon:h["a"],VImg:b["a"],VList:g["a"],VListItem:y["a"],VListItemContent:_["a"],VListItemGroup:x["a"],VListItemIcon:w["a"],VListItemTitle:_["b"],VMain:V["a"],VNavigationDrawer:I["a"],VSheet:j["a"],VSpacer:O["a"],VSubheader:k["a"]});var P=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v(t._s(t.info))])},$=[],A=n("bc3a"),M={name:"Home",data:function(){return{info:null}},mounted:function(){var t=this;A.get("https://127.0.0.1/api/time").then((function(e){return t.info=e}))}},T=M,E=(n("cccb"),Object(c["a"])(T,L,$,!1,null,null,null)),H=E.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],z={},B=Object(c["a"])(z,J,N,!1,null,null,null),D=B.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Test")])},G=[],X={},q=Object(c["a"])(X,F,G,!1,null,null,null),K=q.exports;a["a"].use(P["a"]);var Q=[{path:"/Home",name:"Home",component:H},{path:"/about",name:"About",component:D},{path:"/Idea",name:"Idea",component:K}],R=new P["a"]({routes:Q}),U=R,W=n("f309");a["a"].use(W["a"]);var Y=new W["a"]({}),Z=n("bc3a"),tt=n.n(Z);a["a"].prototype.$axios=tt.a,a["a"].config.productionTip=!1,new a["a"]({router:U,vuetify:Y,render:function(t){return t(S)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.26f5b97a.js.map