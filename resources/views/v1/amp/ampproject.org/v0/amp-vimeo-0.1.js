(self.AMP = self.AMP || []).push({n:"amp-vimeo", f:(function(AMP) {function d(a,c){function b(){}b.prototype=c.prototype;a.prototype=new b;a.prototype.constructor=a;for(var e in c)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(c,e);f&&Object.defineProperty(a,e,f)}else a[e]=c[e]};Date.now();self.log=self.log||{user:null,dev:null};var g=self.log;function h(a){AMP.BaseElement.apply(this,arguments)}d(h,AMP.BaseElement);h.prototype.preconnectCallback=function(a){this.preconnect.url("https://player.vimeo.com",a);this.preconnect.url("https://i.vimeocdn.com",a);this.preconnect.url("https://f.vimeocdn.com",a)};h.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
h.prototype.layoutCallback=function(){var a;if(g.user)a=g.user;else throw Error("failed to call initLogConstructor");var c=a.assert(this.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-vimeo> %s",this.element),b=this.element.ownerDocument.createElement("iframe");b.setAttribute("frameborder","0");b.setAttribute("allowfullscreen","true");b.src="https://player.vimeo.com/video/"+encodeURIComponent(c);this.applyFillContent(b);this.element.appendChild(b);this.a=b;return this.loadPromise(b)};
h.prototype.pauseCallback=function(){this.a&&this.a.contentWindow&&this.a.contentWindow.postMessage(JSON.stringify({method:"pause",value:""}),"*")};AMP.registerElement("amp-vimeo",h);
})});
//# sourceMappingURL=amp-vimeo-0.1.js.map
