KISSY.add("app/reg-login-third",function(a,b,c,d,e,f,g,h,i,j,k){function I(a){this.el=c.get("#"+a),this.init()}function J(){var a=I.getInstance("input-login-email"),b=I.getInstance("input-login-pwd");return!a.value()||!b.value()?!1:!0}function K(){var a=ENV.page,b=c.viewportHeight(),d=c.viewportWidth(),e=c.get("#logo-startpage"),f=c.get("#startpage-wrap"),g=c.get("#register-wrap"),h=c.get("#login-wrap"),i,j,k=b<y?y:b,l=d<z?z:d,m;c.css("#startpage",{width:l}),m=k-r-s,c.css(e,{"padding-top":m/2.5+"px"}),c.css("body",{height:k}),c.css("body",{width:l}),i=c.width(e),c.css(e,{left:(i-j)/2+v}),L()}function L(a){var b=c.get("#footer"),d=c.viewportHeight(),e=c.viewportWidth(),a=a||ENV.page,f=d<y?y:d,g=e<z?z:e,h;c.css(b,{top:f-t})}function M(){return REG_HEIGHT_WITHOUT_SLIDE}function N(){c.val("#login-form input.startpage-input-text")===""&&c.get("#login-form input.startpage-input-text").focus()}function O(){j.init();var b=c.query(".input-wrap"),e=ENV.page;a.each(b,function(a){new I(a.id)}),K(),d.on(window,"resize",function(){K()}),d.on("#login-form","submit",function(a){J()||a.halt()}),a.UA.ie&&d.on("#login-form","keydown",function(a){a.keyCode==13&&a.target.tagName=="INPUT"&&c.get(this).submit()}),j.get("login-submit").on("click",function(){if(!J())return;c.get("#login-form").submit()}),c.css("#startpage-wrap",{"margin-left":0}),d.on("#show-more-third-span","click",function(){c.remove("#show-more-third"),c.get("#login-error")?(c.show("#more-third-register"),g("#more-third-register",{opacity:"1"},.1).run()):g("#third-party-wrap",{top:"-25px"},.1,"easeNone",function(){c.show("#more-third-register"),g("#more-third-register",{opacity:"1"},.1).run()}).run()}),window.onload=N()}function P(){j.init();var a=ENV.page;K(),d.on(window,"resize",function(){K()}),d.on("#show-more-third-span","click",function(){c.remove("#show-more-third"),c.show("#more-third-register")}),c.css("#startpage-wrap",{"margin-left":0})}var l=/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.\w+/,m=/^[a-zA-Z0-9\-]+$/,n={},o={},p,q,r=76,s=240,t=20,u=61,v=20,w=765,x=542,y=400,z=900,A=300,B,C=72,D,E="/",F="",G=location.pathname,H;return I.instances={},I.getInstance=function(a){return I.instances[a]},a.augment(I,a.EventTarget,{init:function(){var a=this;this.tip=c.get(".tip",this.el),this.input=c.get(".startpage-input-text",this.el),this.label=c.get("label",this.el),this.bindEvent(),I.instances[this.el.id]=this,!h.chrome||setTimeout(function(){a._hackChromeAutoFill()},1)},bindEvent:function(){var a=this;d.on(this.input,"focus",function(b){a._focus()}),d.on(this.input,"blur",function(b){a._blur()}),d.on(this.input,"keydown",function(b){a.fire("keydown"),setTimeout(function(){var b=a.input.value;b?a._hideLabel():a._showLabel()},1)}),d.on(this.input,"keyup",function(b){a.fire("keyup")}),d.on(this.input,"change",function(b){a.fire("change")}),setInterval(function(){var b=a.input.value;!b||a._hideLabel()},100)},value:function(a){if(!a)return this.input.value;this.input.value=a},_showLabel:function(){c.show(this.label)},_hideLabel:function(){c.hide(this.label)},_focus:function(){c.addClass(this.el,"focus"),this.fire("focus")},_blur:function(){c.removeClass(this.el,"focus"),this.fire("blur")},focus:function(){this.input.focus()},blur:function(){this.input.blur()},error:function(a){},noError:function(){},showTip:function(a){},hideTip:function(){},_hackChromeAutoFill:function(){var a=this.input,b=c.clone(a,!0,!0,!0);c.insertAfter(b,a),c.remove(a),b.value+="",this.input=b}}),{initLogin:O,initRegister:P}},{requires:["node","dom","event","util.$7202","ajax","anim","ua","cookie","sky.$6939","lib/tracker.$6736"]});