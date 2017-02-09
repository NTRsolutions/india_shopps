(self.AMP = self.AMP || []).push({n:"amp-youtube", f:(function(AMP) {var f;(function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a})(this);function m(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var h in b)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,h);d&&Object.defineProperty(a,h,d)}else a[h]=b[h]};var n=Object.prototype.toString;Date.now();self.log=self.log||{user:null,dev:null};var q=self.log;function r(){if(q.user)return q.user;throw Error("failed to call initLogConstructor");};function t(a){var b,c,h=b||function(a){return a},d=a.dataset;a=Object.create(null);var e=c?c:/^param(.+)/,g;for(g in d){var k=g.match(e);if(k){var l=k[1][0].toLowerCase()+k[1].substr(1);a[h(l)]=d[g]}}return a};function u(a){var b=a;if(b.nodeType){var c=(b.ownerDocument||b).defaultView,h=c=c.__AMP_TOP||c,d=c.services;d||(d=c.services={});c=d;(d=c.ampdoc)||(d=c.ampdoc={obj:null,promise:null,resolve:null});d.obj||(d.obj=(void 0)(h),d.resolve&&d.resolve(d.obj));b=d.obj.getAmpDoc(b)}var e=b.isSingleDoc()?b.win:b;return e&&e.services&&e.services["video-manager"]&&e.services["video-manager"].obj};var v,w="Webkit webkit Moz moz ms O o".split(" ");function y(a,b){for(var c in b){var h=a,d=b[c],e;e=h.style;var g=c;v||(v=Object.create(null));var k=v[g];if(!k){k=g;if(void 0===e[g]){var l;l=g;l=l.charAt(0).toUpperCase()+l.slice(1);a:{for(var p=0;p<w.length;p++){var x=w[p]+l;if(void 0!==e[x]){l=x;break a}}l=""}void 0!==e[l]&&(k=l)}v[g]=k}(e=k)&&(h.style[e]=d)}};function z(a){AMP.BaseElement.call(this,a);this.c=0;this.h=this.b=this.f=this.a=this.g=null}m(z,AMP.BaseElement);f=z.prototype;f.preconnectCallback=function(a){this.preconnect.preload(A(this));this.preconnect.url("https://s.ytimg.com",a);this.preconnect.url("https://i.ytimg.com",a)};f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};f.renderOutsideViewport=function(){return.75};
f.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};f.buildCallback=function(){this.g=r().assert(this.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-youtube> %s",this.element);this.getPlaceholder()||B(this)};
function A(a){if(a.f)return a.f;var b="https://www.youtube.com/embed/"+encodeURIComponent(a.g||"")+"?enablejsapi=1",c=t(a.element);"autoplay"in c&&(delete c.autoplay,r().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay"));"playsinline"in c||(c.playsinline="1");var h=a.element.hasAttribute("autoplay");h&&("iv_load_policy"in c||(c.iv_load_policy="3"),c.playsinline="1");var d=[],e;for(e in c){var g=c[e];if(null!=g)if(Array.isArray(g))for(var k=0;k<g.length;k++){var l=g[k];d.push(encodeURIComponent(e)+
"="+encodeURIComponent(l))}else d.push(encodeURIComponent(e)+"="+encodeURIComponent(g))}if(c=d.join("&"))b=b.split("#",2),e=b[0].split("?",2),c=e[0]+(e[1]?"?"+e[1]+"&"+c:"?"+c),b=c+=b[1]?"#"+b[1]:"";return a.f=b}
f.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe"),c=A(this);b.setAttribute("frameborder","0");b.setAttribute("allowfullscreen","true");b.src=c;this.applyFillContent(b);this.element.appendChild(b);this.a=b;this.b=new Promise(function(b){a.h=b});this.win.addEventListener("message",function(b){var d=b;if("https://www.youtube.com"==d.origin&&d.source==a.a.contentWindow&&d.data&&("[object Object]"===n.call(d.data)||0==d.data.indexOf("{"))){var c;if("[object Object]"===
n.call(d.data))c=d.data;else a:{try{c=JSON.parse(d.data);break a}catch(g){}c=void 0}d=c;void 0!==d&&("onReady"==d.event?(a.element.dispatchCustomEvent("load"),a.h(a.a)):"infoDelivery"==d.event&&d.info&&void 0!==d.info.playerState&&(a.c=d.info.playerState,2==a.c?a.element.dispatchCustomEvent("pause"):1==a.c&&a.element.dispatchCustomEvent("play")))}});u(this.win.document).register(this);return this.loadPromise(b).then(function(){var b=a.win,b=b.__AMP_TOP||b;return(b.services&&b.services.timer&&b.services.timer.obj).promise(300)}).then(function(){a.a.contentWindow.postMessage(JSON.stringify({event:"listening"}),
"*")}).then(function(){return a.b})};f.pauseCallback=function(){this.a&&this.a.contentWindow&&1==this.c&&this.pause()};function C(a,b){a.a.contentWindow.postMessage(JSON.stringify({event:"command",func:b,args:""}),"*")}
function B(a){var b=a.element.ownerDocument.createElement("img"),c=a.g||"";y(b,{"object-fit":"cover",visibility:"hidden"});b.src="https://i.ytimg.com/vi/"+encodeURIComponent(c)+"/sddefault.jpg#404_is_fine";b.setAttribute("placeholder","");b.setAttribute("referrerpolicy","origin");a.applyFillContent(b);a.element.appendChild(b);a.loadPromise(b).then(function(){if(120==b.naturalWidth&&90==b.naturalHeight)throw Error("sddefault.jpg is not found");}).catch(function(){b.src="https://i.ytimg.com/vi/"+encodeURIComponent(c)+
"/hqdefault.jpg";return a.loadPromise(b)}).then(function(){y(b,{visibility:""})})}f.supportsPlatform=function(){return!0};f.isInteractive=function(){return!0};f.play=function(){var a=this;this.b.then(function(){C(a,"playVideo")})};f.pause=function(){var a=this;this.b.then(function(){C(a,"pauseVideo")})};f.mute=function(){var a=this;this.b.then(function(){C(a,"mute")})};f.unmute=function(){var a=this;this.b.then(function(){C(a,"unMute")})};f.showControls=function(){};f.hideControls=function(){};
AMP.registerElement("amp-youtube",z);
})});
//# sourceMappingURL=amp-youtube-0.1.js.map

