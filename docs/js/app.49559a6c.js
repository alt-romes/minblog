(function(t){function e(e){for(var s,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},r={app:0},i={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6e09a34a","chunk-112c12a2":"c1b249bc","chunk-95fd5574":"72769e85","chunk-b11f173c":"db6c5ec9"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-112c12a2":1,"chunk-95fd5574":1,"chunk-b11f173c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"c1312229","chunk-112c12a2":"9c50631e","chunk-95fd5574":"fad0b11d","chunk-b11f173c":"8933aed6"}[t]+".css",i=c.p+s,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===s||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=s,delete r[t],f.parentNode.removeChild(f),n(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[t]=0}));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,n){s=i[t]=[e,n]});e.push(s[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");a.type=s,a.request=r,n[1](a)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3dfd":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("28a5"),n("6b54"),n("96cf"),n("3b8d")),a=(n("aef6"),n("7ba4")),o=n.n(a),c=n("b65a"),u=(n("df7c"),n("b383"),"https://github.com/alt-romes/minblog"),l="alt.romes@gmail.com",d={data:function(){return{}},created:function(){u.endsWith(".git")&&(u=u.substring(0,u.length-4)),window.fs=new o.a("fs",{wipe:!0}),c["d"].set("fs",window.fs),window.pfs=window.fs.promises,window.dir="/site"},methods:{createdLogin:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jsonData||this.getData(),t.next=3,pfs.readdir(dir).catch(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,pfs.mkdir(dir);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 3:return t.sent,t.next=6,c["b"]({dir:dir,corsProxy:"https://cors.isomorphic-git.org",url:u,ref:"master",depth:1,singleBranch:!0,tags:!1});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),login:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.username=e,this.password=n,t.next=4,c["e"]({dir:dir,remote:"origin",ref:"master",username:e,password:n}).catch(function(t){return"HTTPError"!=t.toString().substring(0,9)});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),signOut:function(){this.username=null,this.password=null},isLoggedIn:function(){return!(!this.username||!this.password)},getData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.jsonData){t.next=5;break}return e=u.split("github.com/")[1],t.next=4,fetch("https://raw.githubusercontent.com/"+e+"/master/public/data.json").then(function(t){if(200===t.status){var e=t.json().then(function(t){return t});return e}console.log("Looks like there was a problem. Status Code: "+t.status)});case 4:this.jsonData=t.sent;case 5:return t.abrupt("return",this.jsonData);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deletePost:function(t){delete this.jsonData.posts[t],this.writeToGithub()},editPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.jsonData.posts[e]=n,this.writeToGithub();case 2:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),newPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:0==this.jsonData.posts.length?e.id=0:e.id=this.jsonData.posts[this.jsonData.posts.length-1].id+1,this.jsonData.posts[e.id]=e,this.writeToGithub();case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),changeSettings:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.jsonData.settings=e,this.writeToGithub();case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),writeToGithub:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=JSON.parse(JSON.stringify(this.jsonData)),n=(new TextEncoder).encode(JSON.stringify(e)),t.next=4,pfs.writeFile(dir+"/public/data.json",n,function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e&&console.log(e);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 4:return t.t0=console,t.t1=JSON,t.t2=new TextDecoder("utf-8"),t.next=9,pfs.readFile(dir+"/public/data.json");case 9:return t.t3=t.sent,t.t4=t.t2.decode.call(t.t2,t.t3),t.t5=t.t1.parse.call(t.t1,t.t4),t.t0.log.call(t.t0,t.t5),t.next=15,c["a"]({dir:dir,filepath:"public/data.json"}).catch(function(t){console.log("add: "+t)});case 15:return t.next=17,c["c"]({dir:dir,author:{name:this.username,email:l},message:"updated content"}).catch(function(t){console.log("commit: "+t)});case 17:return t.sent,t.next=20,c["e"]({dir:dir,force:!0,remote:"origin",branch:"master",username:this.username,password:this.password}).catch(function(t){console.log("push"+t)});case 20:t.sent,this.getData();case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},f=d,h=n("2877"),p=Object(h["a"])(f,s,r,!1,null,null,null);e["a"]=p.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=n("3dfd"),i=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"main-container"},[t.loading?n("div",{staticClass:"has-text-centered"},[t._m(0)]):n("div",[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("p",{staticClass:"title is-size-5",on:{click:function(e){t.showContent=!t.showContent}}},[t._m(1)])]),n("div",{staticClass:"level-item"},[n("router-link",{attrs:{to:"/about"}},[n("p",{staticClass:"title is-size-5"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"far fa-address-card"})])])])],1),n("div",{staticClass:"level-item"},[n("label",{staticClass:"label"},[t._v(t._s(t.blogTitle))])])]),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("router-link",{attrs:{to:"/dashboard"}},[n("p",{staticClass:"title is-size-5"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-keyboard"})])])])],1)])]),t._l(t.posts,function(e){return n("Post",{key:e.id,attrs:{post:e,showContent:t.showContent}})})],2)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-circle-notch fa-spin"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-exchange-alt"})])])}],c=(n("96cf"),n("3b8d")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-post"},[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item has-text-centered"},[n("p",{staticClass:"heading"}),n("p",{staticClass:"title is-size-5"},[t._v(t._s(t.post.title))])]),t.showPost||t.showContent?t._e():n("div",[n("p",{staticClass:"title is-size-5",on:{click:function(e){t.showPost=!t.showPost}}},[t._m(0)])]),t.showPost&&!t.showContent?n("div",[n("p",{staticClass:"title is-size-5",on:{click:function(e){t.showPost=!t.showPost}}},[t._m(1)])]):t._e()]),n("div",{staticClass:"level-right"},[n("p",{staticClass:"title is-size-6"},[t._v(t._s(t.post.date))])])]),t.showContent||t.showPost?n("div",{staticClass:"post-content"},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}})]):t._e()])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-caret-down"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-caret-up"})])}],d=n("0e54"),f=n.n(d),h={data:function(){return{showPost:!1}},computed:{content:function(){return f()(this.post.content,{breaks:!0})}},props:{post:Object,showContent:Boolean}},p=h,m=(n("95dc"),n("2877")),g=Object(m["a"])(p,u,l,!1,null,"7c68ea94",null),v=g.exports,b={name:"home",components:{Post:v},data:function(){return{posts:[],loading:!0,showContent:!0,blogTitle:"loading..."}},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].methods.getData();case 2:if(e=t.sent,e){t.next=5;break}return t.abrupt("return");case 5:for(s in this.blogTitle=e.settings.blogTitle,this.posts=[],n=e.posts,n)this.posts.push(n[s]);this.posts.reverse(),this.posts.length,this.loading=!1;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},w=b,C=(n("e61a"),Object(m["a"])(w,a,o,!1,null,"eee864f8",null)),k=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-arrow-left"})])])],1)])])]),n("div",{staticClass:"hero-body"},[n("div",{staticClass:"main-container"},[n("section",{staticClass:"section"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-item"},[n("div",[n("p",{staticClass:"headline"},[t._v(t._s(t.settings.aboutDescription))]),n("p",{staticClass:"title"},[t._v(t._s(t.settings.aboutTitle))])])]),n("div",{staticClass:"level-item"},[n("div",[n("figure",{staticClass:"image is-128x128"},[n("img",{attrs:{src:t.settings.aboutImageSrc}})])])])])]),n("section",{staticClass:"section"},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.sMD)}})])])])])])},y=[],_={data:function(){return{settings:{}}},computed:{sMD:function(){return this.settings.markdown?f()(this.settings.markdown,{breaks:!0}):""}},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r["a"].methods.getData();case 2:e=t.sent,this.settings=e.settings;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},x=_,O=Object(m["a"])(x,j,y,!1,null,null,null),P=O.exports;s["a"].use(i["a"]);var T=new i["a"]({routes:[{path:"/",name:"home",component:k},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/about",name:"about",component:P},{path:"/dashboard",name:"dashboard",component:function(){return n.e("chunk-112c12a2").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/edit",name:"edit",component:function(){return n.e("chunk-b11f173c").then(n.bind(null,"1071"))},meta:{requiresAuth:!0}},{path:"/edit/:id",name:"edit post",component:function(){return n.e("chunk-b11f173c").then(n.bind(null,"1071"))},meta:{requiresAuth:!0}},{path:"/settings",name:"settings",component:function(){return n.e("chunk-95fd5574").then(n.bind(null,"26d3"))},meta:{requiresAuth:!0}}]});T.beforeEach(function(t,e,n){var s=r["a"].methods.isLoggedIn(),i=t.matched.some(function(t){return t.meta.requiresAuth});i&&!s?n("login"):n()});var D=T,R=n("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n("b3838"),s["a"].config.productionTip=!1;new s["a"]({router:D,render:function(t){return t(r["a"])}}).$mount("#app")},"84b3":function(t,e,n){},"95dc":function(t,e,n){"use strict";var s=n("84b3"),r=n.n(s);r.a},b3838:function(t,e,n){},d72a:function(t,e,n){},e61a:function(t,e,n){"use strict";var s=n("d72a"),r=n.n(s);r.a}});
//# sourceMappingURL=app.49559a6c.js.map