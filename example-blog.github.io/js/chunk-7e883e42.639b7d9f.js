(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e883e42"],{"02f4":function(t,e,n){var a=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var s,i,c=String(r(e)),o=a(n),l=c.length;return o<0||o>=l?t?"":void 0:(s=c.charCodeAt(o),s<55296||s>56319||o+1===l||(i=c.charCodeAt(o+1))<56320||i>57343?t?c.charAt(o):s:t?c.slice(o,o+2):i-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"05c6":function(t,e,n){"use strict";var a=n("0651"),r=n.n(a);r.a},"0651":function(t,e,n){},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),r=n("32e9"),s=n("79e5"),i=n("be13"),c=n("2b4c"),o=n("520a"),l=c("species"),u=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),v=!s(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=v?!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e}):void 0;if(!v||!p||"replace"===t&&!u||"split"===t&&!f){var h=/./[d],g=n(i,d,""[t],function(t,e,n,a,r){return e.exec===o?v&&!r?{done:!0,value:h.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),x=g[0],b=g[1];a(String.prototype,t,x),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"520a":function(t,e,n){"use strict";var a=n("0bfb"),r=RegExp.prototype.exec,s=String.prototype.replace,i=r,c="lastIndex",o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(i=function(t){var e,n,i,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",a.call(f))),o&&(e=f[c]),i=r.call(f,t),o&&i&&(f[c]=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&s.call(i[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},7277:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-arrow-left"})])])],1)]),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("a",{on:{click:function(e){return t.logout()}}},[t._m(0)])])])])]),n("div",{staticClass:"main-container"},[n("section",{staticClass:"section"},[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item"},[n("div",{staticClass:"field has-text-centered"},[n("router-link",{attrs:{to:"/edit"}},[n("span",{staticClass:"icon is-large"},[n("i",{staticClass:"fas fa-2x fa-plus-circle"})])]),n("label",{staticClass:"label has-text-centered",attrs:{for:""}},[t._v("new post")])],1)]),n("div",{staticClass:"level-item"},[n("div",{staticClass:"field has-text-centered"},[n("router-link",{attrs:{to:"/settings"}},[n("span",{staticClass:"icon is-large"},[n("i",{staticClass:"fas fa-2x fa-cog"})])]),n("label",{staticClass:"label has-text-centered",attrs:{for:""}},[t._v("settings")])],1)])])]),n("section",{staticClass:"section"},[t.loading?n("div",{staticClass:"has-text-centered"},[t._m(1)]):n("table",{staticClass:"table is-fullwidth is-hoverable"},[n("tbody",t._l(t.posts,function(e){return n("tr",{key:e.id},[n("th",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.date))]),n("td",[n("router-link",{attrs:{to:"/edit/"+e.id}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-edit"})])])],1),n("td",[n("a",[n("span",{staticClass:"icon",on:{click:function(n){return t.confirmDelete(e.id)}}},[n("i",{staticClass:"fas fa-trash-alt"})])])])])}),0)])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-door-open"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-circle-notch fa-spin"})])}],s=(n("96cf"),n("3b8d")),i=(n("a481"),n("3dfd")),c={data:function(){return{posts:null,showAddNew:!1,showSettings:!1,loading:!0}},methods:{confirmDelete:function(t){var e=window.confirm("Do you really want to delete this post?");e&&i["a"].methods.deletePost(t)},logout:function(){i["a"].methods.signOut(),this.$router.replace("/")}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].methods.getData();case 2:for(n in e=t.sent,this.posts=[],e.posts)this.posts.push(e.posts[n]);this.posts.reverse(),this.posts.length<=0&&console.log("Handle error for no match of posts here"),this.loading=!1;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},o=c,l=(n("05c6"),n("2877")),u=Object(l["a"])(o,a,r,!1,null,"6be0fc34",null);e["default"]=u.exports},a481:function(t,e,n){"use strict";var a=n("cb7c"),r=n("4bf8"),s=n("9def"),i=n("4588"),c=n("0390"),o=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(a,r){var s=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,s,r):n.call(String(s),a,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var f=a(t),d=String(this),v="function"===typeof e;v||(e=String(e));var x=f.global;if(x){var b=f.unicode;f.lastIndex=0}var C=[];while(1){var m=o(f,d);if(null===m)break;if(C.push(m),!x)break;var w=String(m[0]);""===w&&(f.lastIndex=c(d,s(f.lastIndex),b))}for(var y="",_=0,k=0;k<C.length;k++){m=C[k];for(var E=String(m[0]),$=l(u(i(m.index),d.length),0),S=[],R=1;R<m.length;R++)S.push(p(m[R]));var A=m.groups;if(v){var j=[E].concat(S,$,d);void 0!==A&&j.push(A);var D=String(e.apply(void 0,j))}else D=g(E,d,$,S,A,e);$>=_&&(y+=d.slice(_,$)+D,_=$+E.length)}return y+d.slice(_)}];function g(t,e,a,s,i,c){var o=a+t.length,l=s.length,u=v;return void 0!==i&&(i=r(i),u=d),n.call(c,u,function(n,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(o);case"<":c=i[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var d=f(u/10);return 0===d?n:d<=l?void 0===s[d-1]?r.charAt(1):s[d-1]+r.charAt(1):n}c=s[u-1]}return void 0===c?"":c})}})},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})}}]);
//# sourceMappingURL=chunk-7e883e42.639b7d9f.js.map