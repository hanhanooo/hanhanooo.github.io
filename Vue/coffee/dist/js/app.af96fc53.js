(function(e){function n(n){for(var a,u,o=n[0],f=n[1],d=n[2],h=0,i=[];h<o.length;h++)u=o[h],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&i.push(c[u][0]),c[u]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);s&&s(n);while(i.length)i.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,u=1;u<t.length;u++){var o=t[u];0!==c[o]&&(a=!1)}a&&(r.splice(n--,1),e=f(f.s=t[0]))}return e}var a={},u={app:0},c={app:0},r=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-00ed6a6c":"4f5e14bf","chunk-02295957":"43d19168","chunk-1e395fd7":"71ab82e7","chunk-2e7b3d9b":"f5fca92d","chunk-4044a5ac":"4d85ea64","chunk-5b20f385":"a7549b74","chunk-5d32c477":"c4ed904a","chunk-664fe55a":"bc6c65d4","chunk-7df2106c":"c28b5845","chunk-7fa3e478":"5b0e730b","chunk-9037bc72":"de2853a4","chunk-93ef3a94":"d7261fdd","chunk-b6dadd86":"130aeca7","chunk-e16f012e":"fe0e9f23","chunk-f7e8d510":"7230b28f","chunk-fbc5ea88":"0af310e5"}[e]+".js"}function f(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-00ed6a6c":1,"chunk-02295957":1,"chunk-1e395fd7":1,"chunk-2e7b3d9b":1,"chunk-4044a5ac":1,"chunk-5b20f385":1,"chunk-5d32c477":1,"chunk-664fe55a":1,"chunk-7df2106c":1,"chunk-7fa3e478":1,"chunk-9037bc72":1,"chunk-93ef3a94":1,"chunk-e16f012e":1,"chunk-f7e8d510":1,"chunk-fbc5ea88":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-00ed6a6c":"bcc81fe8","chunk-02295957":"408526d4","chunk-1e395fd7":"ed4a6be5","chunk-2e7b3d9b":"64a7048a","chunk-4044a5ac":"40656c24","chunk-5b20f385":"314e13f4","chunk-5d32c477":"286bcba8","chunk-664fe55a":"55a6e3d7","chunk-7df2106c":"60ab3ef8","chunk-7fa3e478":"0ed568ad","chunk-9037bc72":"90292300","chunk-93ef3a94":"234e315d","chunk-b6dadd86":"31d6cfe0","chunk-e16f012e":"8e1be701","chunk-f7e8d510":"2f735ba0","chunk-fbc5ea88":"d8e0c3a3"}[e]+".css",c=f.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var d=r[o],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===a||h===c))return n()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){d=i[o],h=d.getAttribute("data-href");if(h===a||h===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete u[e],s.parentNode.removeChild(s),t(r)},s.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(s)})).then((function(){u[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=r);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,f.nc&&h.setAttribute("nonce",f.nc),h.src=o(e);var i=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,t[1](i)}c[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},f.m=e,f.c=a,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)f.d(t,a,function(n){return e[n]}.bind(null,a));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var i=0;i<d.length;i++)n(d[i]);var s=h;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("fb6a"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("ef80");var a=t("ae53"),u=(t("285a"),t("d336")),c=(t("48cc"),t("c364")),r=(t("f820"),t("4959")),o=(t("0fd0"),t("fd40")),f=(t("53c9"),t("fad5")),d=(t("a6ac"),t("8bbd")),h=(t("23b9"),t("8571")),i=(t("ead7"),t("2496")),s=(t("1428"),t("b1f2")),l=(t("5c57"),t("3975")),p=(t("b3bb"),t("c6eb")),b=(t("ca47"),t("a75c")),m=(t("c64f"),t("c614")),k=(t("f0ab"),t("4f4a")),g=(t("158f"),t("f047")),v=(t("5ad1"),t("8eb0")),y=(t("1630"),t("cc15")),w=(t("7276"),t("b39d")),S=(t("6176"),t("871e")),j=(t("0299"),t("5344")),E=(t("6abf"),t("f22a")),O=(t("3fa3"),t("24df")),x=(t("4fbc"),t("ca00")),P=(t("541c"),t("0c54")),_=(t("041f"),t("04ed")),A=(t("ca8b"),t("d0d3")),C=(t("4387"),t("f8c9")),M=(t("05a0"),t("3dea")),T=(t("f2d4"),t("95a4")),L=(t("21a5"),t("063f")),B=(t("35d4"),t("2aae")),N=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},F=[],R=(t("7c55"),t("2877")),H={},U=Object(R["a"])(H,D,F,!1,null,null,null),$=U.exports,q=t("8c4f"),J=[{path:"/login",name:"Login",component:function(){return t.e("chunk-1e395fd7").then(t.bind(null,"a55b"))}},{path:"/main",name:"Main",component:function(){return t.e("chunk-b6dadd86").then(t.bind(null,"cd56"))},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-e16f012e").then(t.bind(null,"b288"))}},{path:"menu",name:"Menu",component:function(){return t.e("chunk-5b20f385").then(t.bind(null,"0f38"))}},{path:"shopBag",name:"ShopBag",component:function(){return t.e("chunk-7fa3e478").then(t.bind(null,"8b0d"))}},{path:"my",name:"My",component:function(){return t.e("chunk-7df2106c").then(t.bind(null,"3837"))}}]},{path:"/detail",name:"Detail",component:function(){return t.e("chunk-00ed6a6c").then(t.bind(null,"c84b"))}},{path:"/pay",name:"Pay",component:function(){return t.e("chunk-2e7b3d9b").then(t.bind(null,"76a1"))}},{path:"/addressEdit",name:"AddressEdit",component:function(){return t.e("chunk-9037bc72").then(t.bind(null,"77d2"))}},{path:"/address",name:"Address",component:function(){return t.e("chunk-fbc5ea88").then(t.bind(null,"a821"))}},{path:"/account",name:"Account",component:function(){return t.e("chunk-4044a5ac").then(t.bind(null,"77be"))}},{path:"/order",name:"Order",component:function(){return t.e("chunk-f7e8d510").then(t.bind(null,"cf2a"))}},{path:"/favor",name:"Favor",component:function(){return t.e("chunk-02295957").then(t.bind(null,"a42b"))}},{path:"/secure",name:"Secure",component:function(){return t.e("chunk-664fe55a").then(t.bind(null,"305b"))}},{path:"/forgot",name:"Forgot",component:function(){return t.e("chunk-93ef3a94").then(t.bind(null,"0fdf"))}},{path:"/search",name:"Search",component:function(){return t.e("chunk-5d32c477").then(t.bind(null,"2d3b"))}},{path:"*",redirect:{name:"Login"}}];N["a"].use(q["a"]);var V=new q["a"]({routes:J}),G=V,I=t("82ae"),K=t.n(I),Q=t("e7aa"),W=t.n(Q);t("44ce");N["a"].use(a["a"]).use(u["a"]).use(c["a"]).use(r["a"]).use(o["a"]).use(f["a"]).use(d["a"]).use(h["a"]).use(i["a"]).use(s["a"]).use(l["a"]).use(p["a"]).use(b["a"]).use(m["a"]).use(k["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(w["a"]).use(S["a"]).use(j["a"]).use(E["a"]).use(O["a"]).use(x["a"]).use(P["a"]).use(_["a"]).use(A["a"]).use(C["a"]).use(M["a"]).use(T["a"]).use(L["a"]).use(B["a"]),N["a"].use(W.a,K.a),K.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",K.a.defaults.baseURL="http://www.kangliuyong.com:10002",N["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",N["a"].config.productionTip=!1,N["a"].filter("formatDate",(function(e,n){var t=new Date(e),a={y:t.getFullYear(),M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var u in a){var c=new RegExp("(".concat(u,"+)"));if(c.test(n)){var r=RegExp.$1;a[u]<10&&2==r.length&&(a[u]="0"+a[u]),n=n.replace(r,a[u].toString().slice(a[u].toString().length-r.length))}}return n})),new N["a"]({router:G,render:function(e){return e($)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("2395"),u=t.n(a);u.a}});
//# sourceMappingURL=app.af96fc53.js.map