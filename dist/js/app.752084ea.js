(function(t){function e(e){for(var s,a,o=e[0],r=e[1],c=e[2],d=0,h=[];d<o.length;d++)a=o[d],i[a]&&h.push(i[a][0]),i[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(h.length)h.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],s=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(s=!1)}s&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},l=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=r;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00b3":function(t,e,n){},"00d6":function(t,e,n){},"1a60":function(t,e,n){},"1e5a":function(t,e,n){},"21f5":function(t,e,n){"use strict";var s=n("bbfe"),i=n.n(s);i.a},2233:function(t,e,n){"use strict";var s=n("6d92"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("94d5");var s=n("8bbf"),i=n.n(s),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Aside"),n("Main")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"left"}),n("div",{staticClass:"right"},[t.fullscreenEnabled?n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFullscreen,expression:"!isFullscreen"}],staticClass:"icon",attrs:{title:"全屏"},on:{click:t.requestFullscreen}},[n("IconFull")],1):t._e(),t.isFullscreen?n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFullscreen,expression:"isFullscreen"}],staticClass:"icon",attrs:{title:"退出全屏(ESC)"},on:{click:t.exitFullscreen}},[n("IconExitFull")],1):t._e(),n("div",{staticClass:"icon",attrs:{title:"登录"},on:{click:function(e){return t.toggleWindow({name:"login"})}}},[n("IconAccount")],1)])])},r=[],c=n("cebc"),u=n("5880"),d=n.n(u),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"none","stroke-width":"50"}},[n("circle",{attrs:{cx:"512",cy:"318",r:"270"}}),n("path",{attrs:{d:"M265 640 Q 30 760 25 999 H 999 Q 940 620 512 588","stroke-linecap":"round"}})])},p=[],f=n("2877"),m={},v=Object(f["a"])(m,h,p,!1,null,null,null),w=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"none","stroke-width":"50","stroke-linecap":"round"}},[n("path",{attrs:{d:"M25 300 V 25 H 300"}}),n("path",{attrs:{d:"M699 25 H 999 V 300"}}),n("path",{attrs:{d:"M999 699 V 999 H 699"}}),n("path",{attrs:{d:"M300 999 H 25 V 699"}}),n("path",{attrs:{d:"M25 25 L 400 400"}}),n("path",{attrs:{d:"M999 25 L 624 400"}}),n("path",{attrs:{d:"M999 999 L 624 624"}}),n("path",{attrs:{d:"M25 999 L 400 624"}})])},g=[],x={},y=Object(f["a"])(x,b,g,!1,null,null,null),_=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"none","stroke-width":"50","stroke-linecap":"round"}},[n("path",{attrs:{d:"M100 400 H 400 V 100"}}),n("path",{attrs:{d:"M624 100 V 400 H 924"}}),n("path",{attrs:{d:"M624 924 V 624 H 924"}}),n("path",{attrs:{d:"M100 624 H 400 V 924"}}),n("path",{attrs:{d:"M25 25 L 400 400"}}),n("path",{attrs:{d:"M999 25 L 624 400"}}),n("path",{attrs:{d:"M999 999 L 624 624"}}),n("path",{attrs:{d:"M25 999 L 400 624"}})])},F=[],C={},O=Object(f["a"])(C,k,F,!1,null,null,null),E=O.exports,I={components:{IconAccount:w,IconFull:_,IconExitFull:E},data:function(){return{isFullscreen:document.fullscreen,fullscreenEnabled:document.fullscreenEnabled}},methods:Object(c["a"])({},Object(u["mapMutations"])(["toggleWindow"]),{requestFullscreen:function(){document.documentElement.requestFullscreen()},exitFullscreen:function(){document.exitFullscreen()}}),mounted:function(){var t=this;document.addEventListener("fullscreenchange",function(){t.isFullscreen=!!document.fullscreenElement})}},$=I,M=(n("dbd2"),Object(f["a"])($,o,r,!1,null,"21d6e60e",null)),j=M.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside")},W=[],H=(n("8ca7"),{}),L=Object(f["a"])(H,S,W,!1,null,"7511da64",null),B=L.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Login"),n("Register")],1)},N=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Window",{attrs:{name:"login"}},[n("div",{staticClass:"login"},[n("h3",{staticClass:"title"},[t._v("登录")]),n("form",{staticClass:"form",attrs:{action:"/login"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("Input",{attrs:{placeholder:"用户名"}}),n("Input",{attrs:{type:"password",placeholder:"密码"}}),n("Button",{staticClass:"submit",attrs:{type:"submit"}},[t._v("提交")])],1),n("div",{staticClass:"links"},[n("div",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.toggleWindow({name:"register"})}}},[t._v("注册账号")]),n("div",{staticClass:"link"},[t._v("忘记密码")])])])])},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-item"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],ref:"input",attrs:{placeholder:t.placeholder,disabled:t.disabled,type:"checkbox"},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var n=t.model,s=e.target,i=!!s.checked;if(Array.isArray(n)){var l=null,a=t._i(n,l);s.checked?a<0&&(t.model=n.concat([l])):a>-1&&(t.model=n.slice(0,a).concat(n.slice(a+1)))}else t.model=i}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],ref:"input",attrs:{placeholder:t.placeholder,disabled:t.disabled,type:"radio"},domProps:{checked:t._q(t.model,null)},on:{change:function(e){t.model=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],ref:"input",attrs:{placeholder:t.placeholder,disabled:t.disabled,type:t.type},domProps:{value:t.model},on:{input:function(e){e.target.composing||(t.model=e.target.value)}}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.model,expression:"model"}],staticClass:"clear",on:{click:t.handleClear}},[n("ClearIcon",{staticClass:"clear-icon"})],1)])},q=[],A=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 1024 1024",fill:"#6c6c6c",stroke:"currentColor"}},[n("circle",{attrs:{cx:"512",cy:"512",r:"512",stroke:"none"}}),n("line",{attrs:{x1:"300",x2:"724",y1:"300",y2:"724","stroke-width":"50","stroke-linecap":"round"}}),n("line",{attrs:{x1:"724",x2:"300",y1:"300",y2:"724","stroke-width":"50","stroke-linecap":"round"}})])}),U=[],z={},Z=Object(f["a"])(z,A,U,!1,null,null,null),D=Z.exports,T={name:"Input",components:{ClearIcon:D},props:{value:[String,Number],type:{type:String,default:"text"},placeholder:String,disabled:{type:Boolean,default:!1}},data:function(){return{model:""}},watch:{value:function(t){this.model=t},model:function(t){this.$emit("input",t)}},methods:{handleClear:function(){this.model="",this.$refs.input.focus()}}},J=T,Q=(n("21f5"),Object(f["a"])(J,Y,q,!1,null,"5e35f90e",null)),R=Q.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn",class:t.theme,attrs:{type:t.type,disabled:t.disabled},on:{click:t.handleClick}},[t._t("default")],2)},K=[],tt={name:"Button",props:{type:{type:String,default:"button"},disabled:{type:Boolean,default:!1},theme:String},methods:{handleClick:function(t){this.$emit("click",t)}}},et=tt,nt=(n("c5a4"),Object(f["a"])(et,G,K,!1,null,"17455e18",null)),st=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dialog",{class:{active:t.activeUid===t._uid,full:t.isFull,show:t.visibility},style:{"z-index":t.zIndex,width:!!t.width&&t.width+"px",height:!!t.height&&t.height+"px"},attrs:{open:t.isOpen},on:{click:t.handleActive}},[n("div",{staticClass:"window-header",on:{dblclick:t.handleFull,mousedown:t.handleMousedown}},[n("div",{staticClass:"rigth",on:{mousedown:function(t){t.stopPropagation()}}},[n("div",{staticClass:"icon",on:{click:t.handleClose}},[n("IconMinus")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFull,expression:"!isFull"}],staticClass:"icon",on:{click:t.handleFull}},[n("IconSquare")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFull,expression:"isFull"}],staticClass:"icon",on:{click:t.handleFull}},[n("IconSquares")],1),t.fullscreenEnabled?n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFullscreen,expression:"!isFullscreen"}],staticClass:"icon",attrs:{title:"全屏"},on:{click:t.requestFullscreen}},[n("IconFull")],1):t._e(),n("div",{staticClass:"icon icon-close",on:{click:t.handleClose}},[n("ClearIcon")],1)])]),n("div",{ref:"window",staticClass:"window-body"},[t.isFullscreen?n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFullscreen,expression:"isFullscreen"}],staticClass:"icon-exit-full",attrs:{title:"退出全屏(ESC)"},on:{click:t.exitFullscreen}},[n("IconExitFull")],1):t._e(),t._t("default")],2)])},lt=[],at=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"none","stroke-width":"50"}},[n("path",{attrs:{d:"M25 25 H 999 V 999 H 25 V 25"}})])}),ot=[],rt={},ct=Object(f["a"])(rt,at,ot,!1,null,null,null),ut=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"none","stroke-width":"50"}},[n("path",{attrs:{d:"M200 200 V 25 H 999 V 824 H 824"}}),n("path",{attrs:{d:"M25 200 H 824 V 999 H 25 V 200"}})])},ht=[],pt={},ft=Object(f["a"])(pt,dt,ht,!1,null,null,null),mt=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"none","stroke-width":"50"}},[n("path",{attrs:{d:"M25 512 H 999"}})])},wt=[],bt={},gt=Object(f["a"])(bt,vt,wt,!1,null,null,null),xt=gt.exports,yt={components:{ClearIcon:D,IconFull:_,IconExitFull:E,IconSquare:ut,IconSquares:mt,IconMinus:xt},props:{name:String,open:Boolean,left:Number,top:Number,full:{type:Boolean,default:!1}},data:function(){return{isOpen:this.open,initZIndex:0,zIndex:0,width:0,height:0,isFullscreen:document.fullscreenElement===this.$refs.window,fullscreenEnabled:document.fullscreenEnabled,isFull:this.full,visibility:this.open,translateX:this.left,translateY:this.top}},computed:Object(u["mapState"])({activeUid:function(t){return t.window.activeUid}}),watch:{activeUid:function(){this.activeUid===this._uid?(this.isOpen=!0,this.zIndex=this.$store.state.window.count):this.zIndex=this.initZIndex},open:function(){this.isOpen=this.open},isOpen:function(){var t=this;this.$emit("changeWindow",this.isOpen),!0===this.isOpen&&(this.translateX=void 0===this.translateX?50*this.initZIndex:this.translateX,this.translateY=void 0===this.translateY?30*this.initZIndex:this.translateY,setTimeout(function(){t.handleActive(),t.visibility=!0,!1===t.isFull?(t.$el.style.transform="scale(1) translate(".concat(t.translateX,"px, ").concat(t.translateY,"px)"),t.width=t.$el.clientWidth,t.height=t.$el.clientHeight):t.$el.style.transform="scale(1) translate(0px, 0px)"},10))}},mounted:function(){this.initZIndex=this.$store.state.window.count,this.zIndex=this.initZIndex,this.incrementWindow({uid:this._uid,name:this.name}),document.addEventListener("fullscreenchange",this.handleFullscreenchange)},beforeDestroy:function(){document.removeEventListener("fullscreenchange",this.handleFullscreenchange)},methods:Object(c["a"])({},Object(u["mapMutations"])(["toggleWindow","incrementWindow"]),{handleActive:function(){this.toggleWindow({uid:this._uid})},handleMousedown:function(t){var e=this;if(1!==t.buttons||this.isFull)return!1;this.toggleWindow({uid:this._uid});var n=document.body.style.userSelect;this.$el.style.transitionDuration="0s";var s=function t(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",t),e.$el.style.transitionDuration="",e.translateX<0&&(e.translateX=0),e.translateY<0&&(e.translateY=0),e.$el.style.transform="scale(1) translate(".concat(e.translateX,"px, ").concat(e.translateY,"px)"),document.body.style.userSelect=n},i=function(t){1===t.buttons?(e.translateX+=t.movementX,e.translateY+=t.movementY,e.$el.style.transform="scale(1) translate(".concat(e.translateX,"px, ").concat(e.translateY,"px)")):s()};document.body.style.userSelect="none",document.addEventListener("mousemove",i),document.addEventListener("mouseup",s)},handleFullscreenchange:function(){this.isFullscreen=document.fullscreenElement===this.$refs.window},handleClose:function(){var t=this;this.$el.style.transform="scale(0.6) translate(-".concat(.4*this.$el.clientWidth/2*100/60,"px, -").concat(.4*this.$el.clientHeight/2*100/60,"px)"),this.visibility=!1,setTimeout(function(){t.toggleWindow(),t.isOpen=!1},350)},handleFull:function(){this.isFull=!this.isFull,this.isFull?this.$el.style.transform="scale(1) translate(0px, 0px)":this.$el.style.transform="scale(1) translate(".concat(this.translateX,"px, ").concat(this.translateY,"px)")},requestFullscreen:function(){this.$refs.window.requestFullscreen()},exitFullscreen:function(){document.exitFullscreen()}})},_t=yt,kt=(n("b5c7"),Object(f["a"])(_t,it,lt,!1,null,"49fad872",null)),Ft=kt.exports,Ct={components:{Input:R,Button:st,Window:Ft},methods:Object(c["a"])({},Object(u["mapMutations"])(["toggleWindow"]),{handleSubmit:function(){}})},Ot=Ct,Et=(n("f314"),Object(f["a"])(Ot,P,X,!1,null,"550f7ffe",null)),It=Et.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Window",{attrs:{name:"register"}},[n("div",{staticClass:"register"},[n("h3",{staticClass:"title"},[t._v("注册")]),n("form",{staticClass:"form",attrs:{action:"/register"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("Input",{attrs:{placeholder:"用户名"}}),n("Input",{attrs:{type:"password",placeholder:"密码"}}),n("Input",{attrs:{type:"password",placeholder:"确认密码"}}),n("Button",{staticClass:"submit",attrs:{type:"submit"}},[t._v("提交")])],1),n("div",{staticClass:"links"},[n("div",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.toggleWindow({name:"login"})}}},[t._v("账号登录")])])])])},Mt=[],jt={components:{Input:R,Button:st,Window:Ft},methods:Object(c["a"])({},Object(u["mapMutations"])(["toggleWindow"]),{handleSubmit:function(){}})},St=jt,Wt=(n("2233"),Object(f["a"])(St,$t,Mt,!1,null,"478b1194",null)),Ht=Wt.exports,Lt={components:{Login:It,Register:Ht}},Bt=Lt,Vt=(n("7f24"),Object(f["a"])(Bt,V,N,!1,null,"21fd7d30",null)),Nt=Vt.exports,Pt={name:"app",components:{Header:j,Aside:B,Main:Nt}},Xt=Pt,Yt=(n("98a5"),Object(f["a"])(Xt,l,a,!1,null,"f1e78d6e",null)),qt=Yt.exports,At={activeUid:void 0,uids:{},count:0},Ut={toggleWindow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.uid,s=e.name;t.activeUid=n||t.uids[s]&&t.uids[s].uid||void 0},incrementWindow:function(t,e){var n=e.uid,s=e.name;t.count++,s&&n&&(t.uids[s]={uid:n})}},zt={state:At,mutations:Ut};i.a.use(d.a);var Zt=!1,Dt=new d.a.Store({modules:{window:zt},strict:Zt});i.a.config.productionTip=!1,new i.a({store:Dt,render:function(t){return t(qt)}}).$mount("#app")},5880:function(t,e){t.exports=Vuex},"6d92":function(t,e,n){},"72a7":function(t,e,n){},"7f24":function(t,e,n){"use strict";var s=n("00b3"),i=n.n(s);i.a},"8bbf":function(t,e){t.exports=Vue},"8ca7":function(t,e,n){"use strict";var s=n("00d6"),i=n.n(s);i.a},"94d5":function(t,e,n){},"98a5":function(t,e,n){"use strict";var s=n("1a60"),i=n.n(s);i.a},b5c7:function(t,e,n){"use strict";var s=n("bb9c"),i=n.n(s);i.a},bb9c:function(t,e,n){},bbfe:function(t,e,n){},c5a4:function(t,e,n){"use strict";var s=n("fa85"),i=n.n(s);i.a},dbd2:function(t,e,n){"use strict";var s=n("1e5a"),i=n.n(s);i.a},f314:function(t,e,n){"use strict";var s=n("72a7"),i=n.n(s);i.a},fa85:function(t,e,n){}});
//# sourceMappingURL=app.752084ea.js.map