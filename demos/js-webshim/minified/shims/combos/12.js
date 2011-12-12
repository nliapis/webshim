(function(e){if(!Modernizr.genericDOM){var f=document,l,j,m=/<([\w:]+)/,n={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};e.webshims.fixHTML5=function(e){if(typeof e!="string"||n[(m.exec(e)||["",""])[1].toLowerCase()])return e;if(!j){l=f.body;if(!l)return e;j=f.createElement("div");j.style.display="none"}var g=j.cloneNode(!1);l.appendChild(g);g.innerHTML=e;l.removeChild(g);return g.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(e,f,l,j,m){var n=f.modules,k=/\s*,\s*/,g={},s={},o={},p={},i={},r=e.fn.val,C=function(c,a,b,d,h){return h?r.call(e(c)):r.call(e(c),b)};e.fn.val=function(c){var a=this[0];arguments.length&&c==null&&(c="");if(!arguments.length)return!a||a.nodeType!==1?r.call(this):e.prop(a,"value",c,"val",!0);if(e.isArray(c))return r.apply(this,arguments);var b=e.isFunction(c);return this.each(function(d){a=this;a.nodeType===1&&(b?(d=c.call(a,d,e.prop(a,"value",m,"val",
!0)),d==null&&(d=""),e.prop(a,"value",d,"val")):e.prop(a,"value",c,"val"))})};var w="_webshimsLib"+Math.round(Math.random()*1E3),t=function(c,a,b){c=c.jquery?c[0]:c;if(!c)return b||{};var d=e.data(c,w);b!==m&&(d||(d=e.data(c,w,{})),a&&(d[a]=b));return a?d&&d[a]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){e.fn[c.name]=function(){return this.map(function(){var a=t(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){g[c]=e[c];e[c]=function(a,b,d,h,x){var k=h=="val",f=!k?g[c]:C;if(!a||!s[b]||a.nodeType!==1||!k&&h&&c=="attr"&&e.attrFn[b])return f(a,b,d,h,x);var A=(a.nodeName||"").toLowerCase(),u=o[A],y=c=="attr"&&(d===!1||d===null)?"removeAttr":c,p,r,j;u||(u=o["*"]);u&&(u=u[b]);u&&(p=u[y]);if(p){if(b=="value")r=p.isVal,p.isVal=k;if(y==="removeAttr")return p.value.call(a);else if(d===m)return p.get?p.get.call(a):p.value;
else p.set&&(c=="attr"&&d===!0&&(d=b),j=p.set.call(a,d));if(b=="value")p.isVal=r}else j=f(a,b,d,h,x);if((d!==m||y==="removeAttr")&&i[A]&&i[A][b]){var n;n=y=="removeAttr"?!1:y=="prop"?!!d:!0;i[A][b].forEach(function(b){if(!b.only||(b.only=c=="prop")||b.only=="attr"&&c!="prop")b.call(a,d,n,k?"val":y,c)})}return j};p[c]=function(a,b,d){o[a]||(o[a]={});o[a][b]||(o[a][b]={});var h=o[a][b][c],x=function(a,h,e){return h&&h[a]?h[a]:e&&e[a]?e[a]:c=="prop"&&b=="value"?function(a){return d.isVal?C(this,b,a,
!1,arguments.length===0):g[c](this,b,a)}:c=="prop"&&a=="value"&&d.value.apply?function(a){var d=g[c](this,b);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return g[c](this,b,a)}};o[a][b][c]=d;if(d.value===m){if(!d.set)d.set=d.writeable?x("set",d,h):f.cfg.useStrict&&b=="prop"?function(){throw b+" is readonly on "+a;}:e.noop;if(!d.get)d.get=x("get",d,h)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=x(a,h))})}});var v=!e.browser.msie||parseInt(e.browser.version,10)>8,B=
function(){var c=f.getPrototypeOf(j.createElement("foobar")),a=Object.prototype.hasOwnProperty;return function(b,d,h){var e=j.createElement(b),i=f.getPrototypeOf(e);if(v&&i&&c!==i&&(!e[d]||!a.call(e,d))){var k=e[d];h._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k};i[d]=h.value}else h._supvalue=function(){var a=t(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},q.extendValue(b,d,h.value);h.value._supvalue=h._supvalue}}(),q=function(){var c={};f.addReady(function(a,
b){var d={},k=function(c){d[c]||(d[c]=e(a.getElementsByTagName(c)),b[0]&&e.nodeName(b[0],c)&&(d[c]=d[c].add(b)))};e.each(c,function(a,b){k(a);!b||!b.forEach?f.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){d[a].each(b)})});d=null});var a,b=e([]),d=function(b,d){c[b]?c[b].push(d):c[b]=[d];e.isDOMReady&&(a||e(j.getElementsByTagName(b))).each(d)};return{createTmpCache:function(d){e.isDOMReady&&(a=a||e(j.getElementsByTagName(d)));return a||b},flushTmpCache:function(){a=null},content:function(a,
b){d(a,function(){e(this).filter("["+b+"]").attr(b,function(a,b){return b})})},createElement:function(a,b){d(a,b)},extendValue:function(a,b,c){d(a,function(){e(this).each(function(){t(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),z=function(c,a){if(c.defaultValue===m)c.defaultValue="";if(!c.removeAttr)c.removeAttr={value:function(){c[a||"prop"].set.call(this,c.defaultValue);c.removeAttr._supvalue.call(this)}}};e.extend(f,{getID:function(){var c=(new Date).getTime();return function(a){var a=e(a),
b=a.attr("id");b||(c++,b="ID-"+c,a.attr("id",b));return b}}(),extendUNDEFProp:function(c,a){e.each(a,function(a,d){a in c||(c[a]=d)})},createPropDefault:z,data:t,moveToFirstEvent:function(){var c=e._data?"_data":"data";return function(a,b,d){if((a=(e[c](a,"events")||{})[b])&&a.length>1)b=a.pop(),d||(d="bind"),d=="bind"&&a.delegateCount?a.splice(a.delegateCount,0,b):a.unshift(b)}}(),addShadowDom:function(c,a,b){b=b||{};c.jquery&&(c=c[0]);a.jquery&&(a=a[0]);if(!b.shadowFocusElement)b.shadowFocusElement=
a;var d=e.data(c,w)||e.data(c,w,{}),h=e.data(a,w)||e.data(a,w,{});d.hasShadow=a;h.nativeElement=c;h.shadowData=d.shadowData={nativeElement:c,shadowElement:a,shadowFocusElement:b.shadowFocusElement};b.shadowChilds&&b.shadowChilds.each(function(){t(this,"shadowData",h.shadowData)});if(b.data)d.shadowData.data=b.data,h.shadowData.data=b.data;b=null},propTypes:{standard:function(c){z(c);if(!c.prop)c.prop={set:function(a){c.attr.set.call(this,""+a)},get:function(){return c.attr.get.call(this)||c.defaultValue}}},
"boolean":function(c){z(c);if(!c.prop)c.prop={set:function(a){a?c.attr.set.call(this,""):c.removeAttr.value.call(this)},get:function(){return c.attr.get.call(this)!=null}}}},reflectProperties:function(c,a){typeof a=="string"&&(a=a.split(k));a.forEach(function(a){f.defineNodeNamesProperty(c,a,{prop:{set:function(d){e.attr(this,a,d)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(c,a,b){s[a]=!0;if(b.reflect)f.propTypes[b.propType||"standard"](b);["prop","attr","removeAttr"].forEach(function(d){var h=
b[d];h&&(h=d==="prop"?e.extend({writeable:!0},h):e.extend({},h,{writeable:!0}),p[d](c,a,h),c!="*"&&f.cfg.extendNative&&d=="prop"&&h.value&&e.isFunction(h.value)&&B(c,a,h),b[d]=h)});b.initAttr&&q.content(c,a);return b},defineNodeNameProperties:function(c,a,b,d){for(var h in a)!d&&a[h].initAttr&&q.createTmpCache(c),b&&(a[h][b]?f.log("override: "+c+"["+h+"] for "+b):(a[h][b]={},["value","set","get"].forEach(function(d){d in a[h]&&(a[h][b][d]=a[h][d],delete a[h][d])}))),a[h]=f.defineNodeNameProperty(c,
h,a[h]);d||q.flushTmpCache();return a},createElement:function(c,a,b){var d;e.isFunction(a)&&(a={after:a});q.createTmpCache(c);a.before&&q.createElement(c,a.before);b&&(d=f.defineNodeNameProperties(c,b,!1,!0));a.after&&q.createElement(c,a.after);q.flushTmpCache();return d},onNodeNamesPropertyModify:function(c,a,b,d){typeof c=="string"&&(c=c.split(k));e.isFunction(b)&&(b={set:b});c.forEach(function(c){i[c]||(i[c]={});typeof a=="string"&&(a=a.split(k));b.initAttr&&q.createTmpCache(c);a.forEach(function(a){i[c][a]||
(i[c][a]=[],s[a]=!0);if(b.set){if(d)b.set.only=d;i[c][a].push(b.set)}b.initAttr&&q.content(c,a)});q.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,a,b){b||(b={});if(e.isFunction(b))b.set=b;f.defineNodeNamesProperty(c,a,{attr:{set:function(d){this.setAttribute(a,d);b.set&&b.set.call(this,!0)},get:function(){return this.getAttribute(a)==null?m:a}},removeAttr:{value:function(){this.removeAttribute(a);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},
contentAttr:function(c,a,b){if(c.nodeName){if(b===m)return b=(c.attributes[a]||{}).value,b==null?m:b;typeof b=="boolean"?b?c.setAttribute(a,a):c.removeAttribute(a):c.setAttribute(a,b)}},activeLang:function(){var c=[],a={},b,d,h=/:\/\/|^\.*\//,k=function(a,b,d){return b&&d&&e.inArray(b,d.availabeLangs||[])!==-1?(a.loading=!0,d=d.langSrc,h.test(d)||(d=f.cfg.basePath+d),f.loader.loadScript(d+b+".js",function(){a.langObj[b]?(a.loading=!1,g(a,!0)):e(function(){a.langObj[b]&&g(a,!0);a.loading=!1})}),!0):
!1},i=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},g=function(a,c){if(a.activeLang!=b&&a.activeLang!==d){var e=n[a.module].options;if(a.langObj[b]||d&&a.langObj[d])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[d],b),i(a.module);else if(!c&&!k(a,b,e)&&!k(a,d,e)&&a.langObj[""]&&a.activeLang!=="")a.activeLang="",a.callback(a.langObj[""],b),i(a.module)}};return function(h){if(typeof h=="string"&&h!==b)b=h,d=b.split("-")[0],b==d&&(d=!1),e.each(c,function(a,b){g(b)});else if(typeof h==
"object")if(h.register)a[h.register]||(a[h.register]=[]),a[h.register].push(h),h.callback();else{if(!h.activeLang)h.activeLang="";c.push(h);g(h)}return b}}()});e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,a){f[c]=function(b,d,c,e){typeof b=="string"&&(b=b.split(k));var i={};b.forEach(function(b){i[b]=f[a](b,d,c,e)});return i}});f.isReady("webshimLocalization",!0)});
(function(e,f){var l=e.webshims.browserVersion;if(!(e.browser.mozilla&&l>5)&&(!e.browser.msie||l<12&&l>7)){var j={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(e,k){e.getAttribute("role")||e.setAttribute("role",k)};e.webshims.addReady(function(n,k){e.each(j,function(g,i){for(var f=e(g,n).add(k.filter(g)),o=0,j=f.length;o<j;o++)m(f[o],i)});if(n===f){var g=f.getElementsByTagName("header")[0],l=f.getElementsByTagName("footer"),o=l.length;
g&&!e(g).closest("section, article")[0]&&m(g,"banner");o&&(g=l[o-1],e(g).closest("section, article")[0]||m(g,"contentinfo"))}})}})(jQuery,document);
(function(e,f,l){var j=f.audio&&f.video,m=!1;if(j){var n=document.createElement("video");f.videoBuffered="buffered"in n;m="loop"in n;l.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));f.videoBuffered||(l.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),l.reTest("mediaelement-native-fix"))}e.webshims.ready("dom-support swfobject",function(e,g,f,o,p){var i=g.mediaelement,
r=g.cfg.mediaelement,l=function(a,b){var a=e(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var c=a.attr("type");if(c)d.type=c,d.container=e.trim(c.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),b=="source"&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),c=i.getTypeForSrc(d.src,b))d.type=c,d.container=c,g.warn("you should always provide a proper mime-type using the source element. "+d.src+" detected as: "+c),e.nodeName(a[0],"source")&&
a.attr("type",c);if(c=a.attr("media"))d.media=c;return d},n=swfobject.hasFlashPlayerVersion("9.0.115"),t=function(){g.ready("mediaelement-swf",function(){if(!i.createSWF)g.modules["mediaelement-swf"].test=e.noop,g.reTest(["mediaelement-swf"],j)})};i.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};i.mimeTypes.source=e.extend({},i.mimeTypes.audio,i.mimeTypes.video);i.getTypeForSrc=function(a,b){if(a.indexOf("youtube.com/watch?")!=-1)return"video/youtube";var a=
a.split("?")[0].split("."),a=a[a.length-1],d;e.each(i.mimeTypes[b],function(b,c){if(c.indexOf(a)!==-1)return d=b,!1});return d};i.srces=function(a,b){a=e(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(b)||(b=[b]),b.forEach(function(b){var d=o.createElement("source");typeof b=="string"&&(b={src:b});d.setAttribute("src",b.src);b.type&&d.setAttribute("type",b.type);b.media&&d.setAttribute("media",b.media);a.append(d)});else{var b=[],d=a[0].nodeName.toLowerCase(),c=l(a,
d);c.src?b.push(c):e("source",a).each(function(){c=l(this,d);c.src&&b.push(c)});return b}};e.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==p&&(e(this).removeAttr("poster"),b&&e.attr(this,"poster",b));i.srces(this,a);e(this).mediaLoad()})};i.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
i.canSwfPlaySrces=function(a,b){var d="";n&&(a=e(a),b=b||i.srces(a),e.each(b,function(a,b){if(b.container&&b.src&&i.swfMimeTypes.indexOf(b.container)!=-1)return d=b,!1}));return d};var v={};i.canNativePlaySrces=function(a,b){var d="";if(j){var a=e(a),c=(a[0].nodeName||"").toLowerCase();if(!v[c])return d;b=b||i.srces(a);e.each(b,function(b,e){if(e.type&&v[c].prop._supvalue.call(a[0],e.type))return d=e,!1})}return d};i.setError=function(a,b){b||(b="can't play sources");e(a).pause().data("mediaerror",
b);g.warn("mediaelementError: "+b);setTimeout(function(){e(a).data("mediaerror")&&e(a).trigger("mediaerror")},1)};var B=function(){var a;return function(b,d,c){g.ready("mediaelement-swf",function(){i.createSWF?i.createSWF(b,d,c):a||(a=!0,t(),B(b,d,c))})}}(),q=function(a,b,d,c,e){d||d!==!1&&b&&b.isActive=="flash"?(d=i.canSwfPlaySrces(a,c))?B(a,d,b):e?i.setError(a,!1):q(a,b,!1,c,!0):(d=i.canNativePlaySrces(a,c))?b&&b.isActive=="flash"&&i.setActive(a,"html5",b):e?(i.setError(a,!1),b&&b.isActive=="flash"&&
i.setActive(a,"html5",b)):q(a,b,!0,c,!0)},z=/^(?:embed|object)$/i,c=function(a,b){var d=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{}),c=i.srces(a),f=a.parentNode;clearTimeout(d.loadTimer);e.data(a,"mediaerror",!1);if(c.length&&f&&!z.test(f.nodeName||""))b=b||g.data(a,"mediaelement"),q(a,b,r.preferFlash||p,c)};e(o).bind("ended",function(a){var b=g.data(a.target,"mediaelement");(!m||b&&b.isActive!="html5"||e.prop(a.target,"loop"))&&setTimeout(function(){!e.prop(a.target,"paused")&&e.prop(a.target,
"loop")&&e(a.target).prop("currentTime",0).play()},1)});m||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=g.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=g.data(this,"mediaelement");c(this,a);j&&(!a||a.isActive=="html5")&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});v[a]=g.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(b){var c="";j&&v[a].prop._supvalue&&(c=v[a].prop._supvalue.call(this,b),c=="no"&&
(c=""));!c&&n&&(b=e.trim((b||"").split(";")[0]),i.swfMimeTypes.indexOf(b)!=-1&&(c="maybe"));return c}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){c(a);a=null},9)}});j&&g.isReady("mediaelement-core",!0);g.addReady(function(a,b){e("video, audio",a).add(b.filter("video, audio")).each(function(){e.browser.msie&&g.browserVersion>
8&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay])')?e(this).prop("preload","metadata").mediaLoad():c(this);if(j){var a,b,i=this,f=function(){var a=e.prop(i,"buffered");if(a){for(var b="",c=0,d=a.length;c<d;c++)b+=a.end(c);return b}},o=function(){var a=f();a!=b&&(b=a,e(i).triggerHandler("progress"))};e(this).bind("play loadstart progress",function(c){c.type=="progress"&&(b=f());clearTimeout(a);a=setTimeout(o,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){c.type=="emptied"&&(b=!1);clearTimeout(a)})}})});j?n&&g.ready("WINDOWLOAD",t):g.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("details",function(e,f,l,j,m,n){var k=function(g){var f=e(g).parent("details");if(f[0]&&f.children(":first").get(0)===g)return f},g=function(g,f){var g=e(g),f=e(f),i=e.data(f[0],"summaryElement");e.data(g[0],"detailsElement",f);if(!i||g[0]!==i[0])i&&(i.hasClass("fallback-summary")?i.remove():i.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(f[0],
"summaryElement",g),f.prop("open",f.prop("open"))};f.createElement("summary",function(){var f=k(this);if(f&&!e.data(this,"detailsElement")){var j;g(this,f);e(this).bind("focus.summaryPolyfill",function(){e(this).addClass("summary-has-focus")}).bind("blur.summaryPolyfill",function(){e(this).removeClass("summary-has-focus")}).bind("mouseenter.summaryPolyfill",function(){e(this).addClass("summary-has-hover")}).bind("mouseleave.summaryPolyfill",function(){e(this).removeClass("summary-has-hover")}).bind("click.summaryPolyfill",
function(e){var f=k(this);f&&(clearTimeout(j),j=setTimeout(function(){e.isDefaultPrevented()||f.attr("open",!f.attr("open"))},0))}).bind("keydown.summaryPolyfill",function(f){if(f.keyCode==13||f.keyCode==32){var g=this;clearTimeout(j);j=setTimeout(function(){f.isDefaultPrevented()||e(g).trigger("click")},0)}}).attr({tabindex:"0",role:"button"}).prepend('<span class="details-open-indicator" />')}});var s;f.defineNodeNamesBooleanProperty("details","open",function(f){var g=e(e.data(this,"summaryElement"));
if(g){var i=f?"removeClass":"addClass",j=e(this);if(!s&&n.animate){j.stop().css({width:"",height:""});var k={width:j.width(),height:j.height()}}g.attr("aria-expanded",""+f);j[i]("closed-details-summary").children().not(g[0])[i]("closed-details-child");!s&&n.animate&&(f={width:j.width(),height:j.height()},j.css(k).animate(f,{complete:function(){e(this).css({width:"",height:""})}}))}});f.createElement("details",function(){s=!0;var f=e.data(this,"summaryElement");f||(f=e("> summary:first-child",this),
f[0]?g(f,this):(e(this).prependWebshim('<summary class="fallback-summary">'+n.text+"</summary>"),e.data(this,"summaryElement")));e.prop(this,"open",e.prop(this,"open"));s=!1})});
