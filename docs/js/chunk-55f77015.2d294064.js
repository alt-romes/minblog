(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f77015"],{"0112":function(t,s,a){},"4a4b":function(t,s,a){"use strict";var e=a("0112"),i=a.n(e);i.a},7277:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-arrow-left"})])])],1)])])]),a("div",{staticClass:"main-container"},[a("section",{staticClass:"section"},[a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"field has-text-centered"},[a("router-link",{attrs:{to:"/edit"}},[a("span",{staticClass:"icon is-large"},[a("i",{staticClass:"fas fa-2x fa-plus-circle"})])]),a("label",{staticClass:"label has-text-centered",attrs:{for:""}},[t._v("new post")])],1)]),a("div",{staticClass:"level-item"},[a("div",{staticClass:"field has-text-centered"},[a("router-link",{attrs:{to:"/settings"}},[a("span",{staticClass:"icon is-large"},[a("i",{staticClass:"fas fa-2x fa-cog"})])]),a("label",{staticClass:"label has-text-centered",attrs:{for:""}},[t._v("settings")])],1)])])]),a("section",{staticClass:"section"},[a("table",{staticClass:"table is-fullwidth is-hoverable"},[a("tbody",t._l(t.posts,function(s){return a("tr",{key:s.id},[a("th",[t._v(t._s(s.title))]),a("td",[t._v(t._s(s.date))]),a("td",[a("router-link",{attrs:{to:"/edit/"+s.id}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-edit"})])])],1),a("td",[a("a",[a("span",{staticClass:"icon",on:{click:function(a){return t.confirmDelete(s.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])])}),0)])])])])},i=[],l=a("59ca"),n=a.n(l),o=(a("66ce"),{data:function(){return{posts:null,showAddNew:!1,showSettings:!1}},methods:{confirmDelete:function(t){var s=window.confirm("Do you really want to delete this post?");s&&n.a.database().ref("posts/"+t).remove()}},created:function(){var t=this;n.a.database().ref("posts/").on("value",function(s){t.posts=[];var a=s.val();for(var e in a)t.posts.push(a[e]);t.posts.reverse(),t.posts.length<=0&&console.log("Handle error for no match of posts here"),t.loading=!1})}}),c=o,r=(a("4a4b"),a("2877")),d=Object(r["a"])(c,e,i,!1,null,"0dba6bb6",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-55f77015.2d294064.js.map