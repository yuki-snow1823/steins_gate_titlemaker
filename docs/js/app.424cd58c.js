(function(t){function e(e){for(var r,c,l=e[0],a=e[1],s=e[2],f=0,h=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&h.push(i[c][0]),i[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Index")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.frontTitle))]),t._v("の "),n("p",[t._v(t._s(t.backTitle))]),t.switchFTitleBtn?n("button",{on:{click:function(e){return t.changeFrontTitle()}}},[t._v("先頭タイトル変更")]):n("button",{on:{click:function(e){return t.stopChangeFront()}}},[t._v("STOP!")]),t.switchBTitleBtn?n("button",{on:{click:function(e){return t.changeBackTitle()}}},[t._v("後方タイトル変更")]):n("button",{on:{click:function(e){return t.stopChangeBack()}}},[t._v("STOP!")]),n("a",{attrs:{href:t.tweetUrl}},[t._v("ツイートする！（してください）")]),t._m(0)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("created by "),n("a",{attrs:{href:"https://twitter.com/yuki82511988"}},[t._v("yuki")])])}],a={data:function(){return{frontTitle:"境界面上",backTitle:"シュタインズゲート",frontWords:["永劫回帰","支離滅裂","輪廻転生","晴耕雨読"],backWords:["エムブレム","ドリーム","ブリザード","ニライカナイ"],switchFTitleBtn:!0,switchBTitleBtn:!0,tmpFrontTitle:"",tmpBackTitle:"",url:this.tweetUrl,tweetDefault:"https://twitter.com/intent/tweet?text="}},name:"Index",methods:{randomFrontTitle:function(){this.frontTitle=this.frontWords[Math.floor(Math.random()*this.frontWords.length)]},randomBackTitle:function(){this.backTitle=this.backWords[Math.floor(Math.random()*this.backWords.length)]},changeFrontTitle:function(){var t=this;this.tmpFrontTitle=setInterval((function(){t.randomFrontTitle()}),100),this.switchFTitleBtn=!this.switchFTitleBtn},changeBackTitle:function(){var t=this;this.tmpBackTitle=setInterval((function(){t.randomBackTitle()}),100),this.switchBTitleBtn=!this.switchBTitleBtn},stopChangeFront:function(){clearInterval(this.tmpFrontTitle),this.switchFTitleBtn=!this.switchFTitleBtn},stopChangeBack:function(){clearInterval(this.tmpBackTitle),this.switchBTitleBtn=!this.switchBTitleBtn}},computed:{tweetUrl:function(){return console.log("通っている"),this.tweetDefault+this.frontTitle+"の"+this.backTitle+"&hashtags=シュタゲタイトルメーカー&url=https://test.jp"}}},s=a,u=n("2877"),f=Object(u["a"])(s,c,l,!1,null,"12ffc5fe",null),h=f.exports,p={name:"App",components:{Index:h}},d=p,T=(n("034f"),Object(u["a"])(d,i,o,!1,null,null,null)),v=T.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.424cd58c.js.map