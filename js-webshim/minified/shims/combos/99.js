webshims.register("jme",function(a,b,c,d,e){"use strict";var f={},g={},h=Array.prototype.slice,i=0,j=a.extend({selector:".mediaplayer"},b.cfg.mediaelement.jme),k=j.selector;b.cfg.mediaelement.jme=j,a.jme={pluginsClasses:[],pluginsSel:"",plugins:{},props:f,fns:g,data:function(b,c,d){var f=a(b).data("jme")||a.data(b,"jme",{});return d===e?c?f[c]:f:void(f[c]=d)},runPlugin:function(b){i&&a(document.querySelectorAll(k)).each(function(){var c=this.querySelectorAll(b);c.length&&a(this).jmeFn("addControls",c)})},registerPlugin:function(b,c){this.plugins[b]=c,c.nodeName||(c.nodeName=""),c.className||(c.className=b),this.pluginsClasses.push("."+c.className),this.pluginsSel=this.pluginsClasses.join(", "),j[b]=a.extend(c.options||{},j[b]),j[b]&&j[b].text?c.text=j[b].text:j.i18n&&j.i18n[b]&&(c.text=j.i18n[b]),this.runPlugin("."+c.className)},defineMethod:function(a,b){g[a]=b},defineProp:function(b,c){c||(c={}),c.set||(c.set=c.readonly?function(){throw b+" is readonly"}:a.noop),c.get||(c.get=function(c){return a.jme.data(c,b)}),f[b]=c},prop:function(b,c,d){if(!f[c])return a.prop(b,c,d);if(d===e)return f[c].get(b);var g=f[c].set(b,d);g===e&&(g=d),"noDataSet"!=g&&a.jme.data(b,c,g)}},a.fn.jmeProp=function(b,c){return a.access(this,a.jme.prop,b,c,arguments.length>1)},a.fn.jmeFn=function(b){var c,d=h.call(arguments,1);return this.each(function(){return c=(g[b]||a.prop(this,b)).apply(this,d),c!==e?!1:void 0}),c!==e?c:this};var l={emptied:1,pause:1},m={canplay:1,canplaythrough:1};a.jme.initJME=function(b,c){i+=a(b.querySelectorAll(k)).add(c.filter(k)).jmePlayer().length},a.jme.getDOMList=function(b){var c=[];return b||(b=[]),"string"==typeof b&&(b=b.split(" ")),a.each(b,function(a,b){b&&(b=document.getElementById(b),b&&c.push(b))}),c},a.jme.getButtonText=function(b,c){var d,e,f=function(f){e!==f&&(e=f,b.removeClass(c[f?0:1]).addClass(c[f]),d&&(b.prop("checked",!!f),(b.data("checkboxradio")||{refresh:a.noop}).refresh()))};return b.is('[type="checkbox"], [type="radio"]')?(b.prop("checked",function(){return this.defaultChecked}),d=!0):b.is("a")&&b.on("click",function(a){a.preventDefault()}),f},a.fn.jmePlayer=function(b){return this.each(function(){b&&a.jme.data(this,a.extend(!0,{},b));var c,d,e,f,g,h,i=a("audio, video",this).eq(0),k=a(this),n=a.jme.data(this),o=a.jme.data(i[0]);k.addClass(i.prop("nodeName").toLowerCase()+"player"),o.player=k,o.media=i,n.media||(e=function(){i.off("canplay",d),clearTimeout(f)},d=function(){var a=i.prop("paused")?"idle":"playing";k.attr("data-state",a)},c=function(b){var c,j,n=b.type;e(),m[n]&&"waiting"!=g||h&&"emptied"==n||("ended"==n||a.prop(this,"ended")?n="ended":"waiting"==n?a.prop(this,"readyState")>2?n="":(f=setTimeout(function(){i.prop("readyState")>2&&d()},9),i.on("canPlay",d)):l[n]?n="idle":(c=a.prop(this,"readyState"),j=a.prop(this,"paused"),n=!j&&3>c?"waiting":!j&&c>2?"playing":"idle"),"idle"==n&&k._seekpause&&(n=!1),n&&(g=n,k.attr("data-state",n)))},n.media=i,n.player=k,i.on("ended emptied play",function(){var a,b=function(){h=!1},c=function(){e(),i.jmeFn("pause"),j.noReload||!i.prop("ended")||!i.prop("paused")||i.prop("autoplay")||i.prop("loop")||i.hasClass("no-reload")||(h=!0,i.jmeFn("load"),k.attr("data-state","ended"),setTimeout(b))};return function(b){clearTimeout(a),"ended"!=b.type||j.noReload||i.prop("autoplay")||i.prop("loop")||i.hasClass("no-reload")||(a=setTimeout(c))}}()).on("emptied waiting canplay canplaythrough playing ended pause mediaerror",c).on("volumechange updateJMEState",function(){var b=a.prop(this,"volume");k[!b||a.prop(this,"muted")?"addClass":"removeClass"]("state-muted"),b=.01>b?"no":.36>b?"low":.7>b?"medium":"high",k.attr("data-volume",b)}),a.jme.pluginsSel&&k.jmeFn("addControls",a(k[0].querySelectorAll(a.jme.pluginsSel))),c&&i.on("updateJMEState",c).triggerHandler("updateJMEState"))})},a.jme.defineProp("isPlaying",{get:function(b){return!a.prop(b,"ended")&&!a.prop(b,"paused")&&a.prop(b,"readyState")>1&&!a.data(b,"mediaerror")},readonly:!0}),a.jme.defineProp("player",{readonly:!0}),a.jme.defineProp("media",{readonly:!0}),a.jme.defineProp("srces",{get:function(b){var c,d=a.jme.data(b),e=d.media.prop("src");return e?[{src:e}]:c=a.map(a("source",d.media).get(),function(b){var c={src:a.prop(b,"src")},d=a.attr(b,"media");return d&&(c.media=d),d=a.attr(b,"type"),d&&(c.type=d),c})},set:function(b,c){var d=a.jme.data(b),e=function(b,c){"string"==typeof c&&(c={src:c}),a(document.createElement("source")).attr(c).appendTo(d.media)};return d.media.removeAttr("src").find("source").remove(),a.isArray(c)?a.each(c,e):e(0,c),d.media.jmeFn("load"),"noDataSet"}}),a.jme.defineMethod("togglePlay",function(){a(this).jmeFn(f.isPlaying.get(this)?"pause":"play")}),a.jme.defineMethod("addControls",function(b){var c=a.jme.data(this)||{};if(c.media){var d=a.jme.data(c.player[0],"controlElements")||a([]);b=a(b),a.jme.pluginsSel&&(b=b.find(a.jme.pluginsSel).add(b.filter(a.jme.pluginsSel))),b.length&&(a.each(a.jme.plugins,function(d,e){var f,g,h,i,j=b.filter("."+e.className);for(h=0;h<j.length;h++)if(f=a(j[h]),g=a.jme.data(j[h]),g.player=c.player,g.media=c.media,!g._rendered){if(g._rendered=!0,e.options)for(i in e.options)i in g||(g[i]=e.options[i]);e._create(f,c.media,c.player,g)}}),a.jme.data(c.player[0],"controlElements",d.add(b)),c.player.triggerHandler("controlsadded"))}}),b.addReady(a.jme.initJME),b._polyfill(["mediaelement"])}),webshims.register("mediacontrols",function(a,b,c){"use strict";var d=b.cfg.mediaelement.jme,e=d.selector,f=a.jme,g='<div class="{%class%}"></div>',h='<button class="{%class%}" type="button" aria-label="{%text%}"></button>',i='<div class="{%class%} media-range"></div>',j='<div  class="{%class%}">00:00</div>',k=function(){var a,b="";if(c.Audio)try{a=new Audio,a.volume=.55,b=Math.round(100*a.volume)/100==.55?"":" no-volume-api"}catch(d){}return b}(),l=function(){var a={},c=/\{\{(.+?)\}\}/gim;return function(e,h){return e||(e=d.barTemplate),(!a[e]||h)&&(a[e]=e.replace(c,function(a,c){var d=f.plugins[c];return d?(d.structure||(b.warn("no structure option provided for plugin: "+c+". Fallback to standard div"),d.structure=g),d.structure.replace("{%class%}",c).replace("{%text%}",d.text||"")):a})),a[e]||""}}(),m=/iP(hone|od|ad)/i.test(navigator.platform)&&parseInt((navigator.appVersion.match(/OS (\d+)_\d+/)||["","8"])[1],10)<7,n=function(){n.loaded||(n.loaded=!0,b.loader.loadList(["mediacontrols-lazy","range-ui"]))},o=function(c){c||(c="_create");var d=function(e,f){var g=this,h=arguments;n(),b.ready("mediacontrols-lazy",function(){return d!=g[c]&&a.data(f[0])?g[c].apply(g,h):void b.error("stop too much recursion")})};return d};b.loader.addModule("mediacontrols-lazy",{src:"jme/mediacontrols-lazy"});var p={_create:o()};f.plugins.useractivity=p,f.defineProp("controlbar",{set:function(e,g){g=!!g;var h,i,j=f.data(e),k=a("div.jme-mediaoverlay, div.jme-controlbar",j.player),n="";if(g&&!k[0])if(j._controlbar)j._controlbar.appendTo(j.player);else{m&&(j.media.removeAttr("controls"),j.media.mediaLoad()),j.media.prop("controls",!1),n=l(),j._controlbar=a(d.barStructure),k=j._controlbar.find("div.jme-cb-box").addClass("media-controls"),h=j._controlbar.filter(".jme-media-overlay"),h=h.add(k),a(n).appendTo(k),j._controlbar.appendTo(j.player),j.player.jmeFn("addControls",h),i=function(){var a={},b=[{size:290,name:"xx-small",names:"s xs xxs"},{size:380,name:"x-small",names:"s xs"},{size:478,name:"small",names:"s"},{size:756,name:"medium",names:"m"},{size:1024,name:"large",names:"l"},{size:Number.MAX_VALUE,name:"x-large",names:"l xl"}],c=b.length;return function(){var d,e=0,f=j.player.outerWidth(),g=Math.max(parseInt(j.player.css("fontSize"),10)||16,13);for(f*=16/g;c>e;e++)if(b[e].size>=f){d=b[e];break}a.name!=d.name&&(a=d,j.player.attr("data-playersize",d.name),j.player.attr("data-playersizes",d.names))}}();var o=function(){var a,b,d=c.swfmini&&swfmini.hasFlashPlayerVersion("10.0.3"),e=/youtube\.com\/[watch\?|v\/]+/i;return function(){var c=!!j.media.attr("poster"),f=d&&c?!1:e.test(j.media.prop("currentSrc")||"");a!==c&&(a=c,j.player[c?"removeClass":"addClass"]("no-poster")),b!==f&&(b=f,j.player[f?"addClass":"removeClass"]("has-ytposter"))}}();p._create(j.player,j.media,j.player),j.media.on("emptied",o),i(),o(),b.ready("dom-support",function(){j.player.onWSOff("updateshadowdom",i),h.add(j._controlbar).addClass(b.shadowClass),b.addShadowDom()})}else g||k.detach();return g}}),f.registerPlugin("play-pause",{structure:h,text:"play / pause",_create:o()}),f.registerPlugin("mute-unmute",{structure:h,text:"mute / unmute",_create:o()}),f.registerPlugin("jme-media-overlay",{_create:o()}),f.registerPlugin("volume-slider",{structure:i,_create:o()}),f.registerPlugin("time-slider",{structure:i,options:{format:["mm","ss"]},_create:o()}),f.defineProp("format",{set:function(b,c){a.isArray(c)||(c=c.split(":"));var d=f.data(b);return d.format=c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),f.registerPlugin("duration-display",{structure:j,options:{format:"mm:ss"},_create:o()}),f.defineProp("countdown",{set:function(b,c){var d=f.data(b);return d.countdown=!!c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),f.registerPlugin("currenttime-display",{structure:j,options:{format:"mm:ss",countdown:!1},_create:o()}),f.registerPlugin("poster-display",{structure:"<div />",options:{},_create:o()}),f.registerPlugin("fullscreen",{options:{fullscreen:!0,autoplayfs:!1},structure:h,text:"enter fullscreen / exit fullscreen",_create:o()}),f.registerPlugin("captions",{structure:h,text:"subtitles",_create:function(b,c,d){var e=c.find("track");b.wsclonedcheckbox=a(b).clone().attr({role:"checkbox"}).insertBefore(b),d.attr("data-tracks",e.length>1?"many":e.length),b.attr("aria-haspopup","true"),o().apply(this,arguments)}}),b.ready(b.cfg.mediaelement.plugins.concat(["mediaelement"]),function(){d.barTemplate||(d.barTemplate='<div class="play-pause-container">{{play-pause}}</div><div class="playlist-container"><div class="playlist-box">{{playlist-prev}}{{playlist-next}}</div></div><div class="currenttime-container">{{currenttime-display}}</div><div class="progress-container">{{time-slider}}</div><div class="duration-container">{{duration-display}}</div><div class="mute-container">{{mute-unmute}}</div><div class="volume-container">{{volume-slider}}</div><div class="subtitle-container"><div class="subtitle-controls">{{captions}}</div></div><div class="fullscreen-container">{{fullscreen}}</div>'),d.barStructure||(d.barStructure='<div class="jme-media-overlay"></div><div class="jme-controlbar'+k+'" tabindex="-1"><div class="jme-cb-box"></div></div>'),b.addReady(function(b,c){a(e,b).add(c.filter(e)).jmeProp("controlbar",!0)})}),b.ready("WINDOWLOAD",n)});