(function(t){function e(e){for(var n,c,b=e[0],u=e[1],l=e[2],O=0,f=[];O<b.length;O++)c=b[O],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);i&&i(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,b=1;b<r.length;b++){var u=r[b];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Tetrio-Attack-Table/";var b=window["webpackJsonp"]=window["webpackJsonp"]||[],u=b.push.bind(b);b.push=e,b=b.slice();for(var l=0;l<b.length;l++)e(b[l]);var i=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"10fc":function(t,e,r){},2670:function(t,e,r){"use strict";r("10fc")},"26bf":function(t,e,r){"use strict";r("48ff")},"48ff":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=Object(n["g"])("B2B"),a=Object(n["f"])("p",null,"combo",-1),c={class:"center"};function b(t,e,r,b,u,l){var i=Object(n["p"])("Main"),O=Object(n["p"])("vue-number-input");return Object(n["l"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(i,{msg:"Tetrio Attack Table"}),Object(n["f"])("p",null,"B2B = "+Object(n["q"])(u.b2b),1),Object(n["h"])(O,{placeholder:"Small",size:"small",modelValue:u.b2b,"onUpdate:modelValue":e[0]||(e[0]=function(t){return u.b2b=t}),min:0,max:99999,inline:"",controls:""},{default:Object(n["r"])((function(){return[o]})),_:1},8,["modelValue"]),a,Object(n["f"])("div",null,[Object(n["f"])("table",c,[Object(n["f"])("tr",{style:Object(n["k"])(u.black)},[(Object(n["l"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(u.titleForTable,(function(t){return Object(n["l"])(),Object(n["e"])("th",{key:t},Object(n["q"])(t),1)})),128))],4),(Object(n["l"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(l.tableForB2B(),(function(t){return Object(n["l"])(),Object(n["e"])("tr",{key:t},[(Object(n["l"])(!0),Object(n["e"])(n["a"],null,Object(n["o"])(t,(function(t){return Object(n["l"])(),Object(n["e"])("td",{key:t,style:Object(n["k"])(l.getColor(t))},Object(n["q"])(t),5)})),128))])})),128))])])],64)}r("8ba4"),r("a9e3");var u=function(t){return Object(n["n"])("data-v-1e1791f4"),t=t(),Object(n["m"])(),t},l={class:"main"},i=u((function(){return Object(n["f"])("p",null,[Object(n["g"])(" You know that "),Object(n["f"])("a",{href:"https://tetris.wiki/TETR.IO#Mechanics",target:"_blank",rel:"noopener"},"Tetrio combo table picture"),Object(n["g"])(" is wrong? ")],-1)}));function O(t,e,r,o,a,c){return Object(n["l"])(),Object(n["e"])("div",l,[Object(n["f"])("h1",null,Object(n["q"])(r.msg),1),i])}var f={name:"Main",props:{msg:String}},p=(r("2670"),r("6b0d")),s=r.n(p);const I=s()(f,[["render",O],["__scopeId","data-v-1e1791f4"]]);var j=I,_=r("2905"),g=(r("ca21"),{garbage:{SINGLE:0,DOUBLE:1,TRIPLE:2,QUAD:4,TSPIN_MINI:0,TSPIN:0,TSPIN_MINI_SINGLE:0,TSPIN_SINGLE:2,TSPIN_MINI_DOUBLE:1,TSPIN_DOUBLE:4,TSPIN_TRIPLE:6,TSPIN_QUAD:10,BACKTOBACK_BONUS:1,BACKTOBACK_BONUS_LOG:.8,COMBO_MINIFIER:1,COMBO_MINIFIER_LOG:1.25,COMBO_BONUS:.25,ALL_CLEAR:10},b2b:function(t){return g.garbage["BACKTOBACK_BONUS"]*(Math.floor(1+Math.log1p(t*g.garbage["BACKTOBACK_BONUS_LOG"]))+(1==t?0:(1+Math.log1p(t*g.garbage["BACKTOBACK_BONUS_LOG"])%1)/3))},calAtk:function(t,e,r){var n=g.garbage[t];return e>0&&(n+=g.b2b(e)),n*=1+g.garbage["COMBO_BONUS"]*r,r>1&&(n=Math.max(Math.log1p(g.garbage["COMBO_MINIFIER"]*r*g.garbage["COMBO_MINIFIER_LOG"]),n)),Math.floor(n)}}),d=g,N={name:"App",components:{Main:j,VueNumberInput:_["a"]},methods:{getColor:function(t){if(Number.isInteger(t)){if(t>=40)return this.superAtk;if(t>=20)return this.bigAtk;if(t>=9)return this.medAtk}return this.otherColor},tableForB2B:function(){var t=[],e=0==this.b2b?this.allatktype:this.b2batktype;for(var r in e){var n=[];n.push(e[r]);for(var o=0;o<=20;o++)n.push(d.calAtk(e[r],this.b2b,o));t.push(n)}return t}},data:function(){return{black:{backgroundColor:"#000000"},superAtk:{backgroundColor:"#990099"},bigAtk:{backgroundColor:"#fc0505"},medAtk:{backgroundColor:"#f28511"},otherColor:{backgroundColor:"#02779e"},titleForTable:["ATTACK TYPE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],b2b:0,allatktype:["SINGLE","DOUBLE","TRIPLE","TSPIN_MINI_SINGLE","TSPIN_MINI_DOUBLE","TSPIN_SINGLE","QUAD","TSPIN_DOUBLE","TSPIN_TRIPLE"],b2batktype:["TSPIN_MINI_SINGLE","TSPIN_MINI_DOUBLE","TSPIN_SINGLE","QUAD","TSPIN_DOUBLE","TSPIN_TRIPLE"]}}};r("26bf");const h=s()(N,[["render",b]]);var T=h;Object(n["b"])(T).mount("#app")}});
//# sourceMappingURL=app.1f25d5c2.js.map