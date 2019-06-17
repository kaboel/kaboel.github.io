(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],d=0,f=[];d<u.length;d++)a=u[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-28ca2e22":"a29a08d4","chunk-33893e40":"b4e40475","chunk-430d4ce5":"94277b55","chunk-97cdb3b0":"0f172154","chunk-e5051466":"53282a57"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-33893e40":1,"chunk-430d4ce5":1,"chunk-97cdb3b0":1,"chunk-e5051466":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-28ca2e22":"31d6cfe0","chunk-33893e40":"8d11449c","chunk-430d4ce5":"3807c0ae","chunk-97cdb3b0":"197a137d","chunk-e5051466":"9a222f1b"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===r||d===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],s.parentNode.removeChild(s),n(c)},s.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(s)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e),l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var s=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("456d"),n("ac6a"),n("5df3"),n("1c4c"),n("7514"),n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-loading",{attrs:{"is-full-page":!0}}),n("router-view")],1)},o=[],c=n("b89f"),u={name:"app",components:{BLoading:c["a"]},mounted:function(){var e=this.$loading.open();setTimeout(function(){return e.close()},1500)}},i=u,l=(n("034f"),n("2877")),d=Object(l["a"])(i,a,o,!1,null,null,null),f=d.exports,s=n("8c4f");r["default"].use(s["a"]);var m=new s["a"]({mode:"history",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-33893e40").then(n.bind(null,"bb51"))},meta:{title:"Faiq Allam | A Code Junkie, Full Stack, but prefer Back-end"}},{path:"/vitae/:lang",name:"vitae",component:function(){return n.e("chunk-e5051466").then(n.bind(null,"9c9b"))},meta:{title:"Faiq Allam | My Curriculum Vitae"}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-430d4ce5").then(n.bind(null,"b8fa"))},meta:{title:"Faiq Allam | Get in touch with me"}},{path:"/project",name:"project",component:function(){return n.e("chunk-28ca2e22").then(n.bind(null,"07bd"))},meta:{title:"Faiq Allam | Plan a new project"}},{path:"*",name:"404",component:function(){return n.e("chunk-97cdb3b0").then(n.bind(null,"9703"))},meta:{title:"404 | Page Not Found"}}]}),p=n("8a03"),h=n.n(p),b=(n("c350"),n("bb70"),n("ad3d")),v=n("ecee"),g=n("7bb1"),k=n("c074"),y=n("b702"),w=n("f2d1");v["c"].add(k["p"],k["n"],k["u"],k["l"],k["v"],k["y"],k["j"],k["A"],k["a"],k["f"],k["x"],k["m"],k["o"],k["k"],k["w"],k["r"],k["q"],k["g"],k["e"],k["d"],k["c"],k["b"],k["s"],k["t"],k["h"],k["i"],k["B"]),v["c"].add(y["a"]),v["c"].add(w["d"],w["i"],w["c"],w["l"],w["n"],w["j"],w["g"],w["f"],w["b"],w["h"],w["k"],w["a"],w["m"],w["e"],k["z"]),r["default"].config.productionTip=!1,r["default"].component("font-awesome-icon",b["a"]),r["default"].use(h.a,{defaultIconComponent:"font-awesome-icon",defaultIconPack:"fas"}),r["default"].use(g["b"],{classes:!0,classNames:{invalid:"is-danger",valid:"is-success"}}),m.beforeEach(function(e,t,n){var r=e.matched.slice().reverse().find(function(e){return e.meta&&e.meta.title}),a=e.matched.slice().reverse().find(function(e){return e.meta&&e.meta.metaTags});t.matched.slice().reverse().find(function(e){return e.meta&&e.meta.metaTags});if(r&&(document.title=r.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(e){return e.parentNode.removeChild(e)}),!a)return n();a.meta.metaTags.map(function(e){var t=document.createElement("meta");return Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(function(e){return document.head.appendChild(e)}),n()}),new r["default"]({router:m,render:function(e){return e(f)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.800a9023.js.map