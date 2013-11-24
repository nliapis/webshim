(function(e){window.jQuery&&(e(jQuery),e=jQuery.noop),"function"==typeof define&&define.amd&&define.amd.jQuery&&define("polyfiller",["jquery"],e)})(function(e){"use strict";var t="dom-support",n=e(document.scripts||"script"),r=e.event.special,o=e([]),a=window.Modernizr,i=window.asyncWebshims,s=a.addTest,c=window.Object;window.html5||{},a.advancedObjectProperties=a.objectAccessor=a.ES5=!!("create"in c&&"seal"in c),!a.ES5||"toJSON"in Date.prototype||(a.ES5=!1);var l={version:"1.11.4-pre",cfg:{waitReady:!0,loadStyles:!0,disableShivMethods:!0,wspopover:{appendTo:"auto",hideOnBlur:!0},ajax:{cache:!0,crossDomain:!0},basePath:function(){var t,r=n.filter('[src*="polyfiller.js"]');return r=r[0]||r.end()[r.end().length-1],t=("hrefNormalized"in e.support&&!e.support.hrefNormalized?r.getAttribute("src",4):r.src).split("?")[0],t=t.slice(0,t.lastIndexOf("/")+1)+"shims/"}()},bugs:{},modules:{},features:{},featureList:[],setOptions:function(t,n){"string"==typeof t&&void 0!==n?u[t]=e.isPlainObject(n)?e.extend(!0,u[t]||{},n):n:"object"==typeof t&&e.extend(!0,u,t)},addPolyfill:function(t,n){n=n||{};var r=n.f||t;d[r]||(d[r]=[],l.featureList.push(r),u[r]={}),!d[r].failedM&&n.nM&&e.each(n.nM.split(" "),function(e,t){return t in a?void 0:(d[r].failedM=t,!1)}),d[r].failedM&&(n.test=!0),d[r].push(t),n.options=e.extend(u[r],n.options),v(t,n),n.methodNames&&e.each(n.methodNames,function(e,t){l.addMethodName(t)})},polyfill:function(){return function(e){e||(e=l.featureList),"string"==typeof e&&(e=e.split(" "));return l._polyfill(e)}}(),_polyfill:function(){return function(t){var n=[];u.waitReady&&(e.readyWait++,p(t,function(){e.ready(!0)})),e.each(t,function(e,t){t!==d[t][0]&&p(d[t],function(){f(t,!0)}),n=n.concat(d[t])}),u.loadStyles&&g.loadCSS("styles/shim.css"),y(n)}}(),reTest:function(){var t,n=function(n,o){var a,i=h[o],s=o+"Ready";!i||i.loaded||(i.test&&e.isFunction(i.test)?i.test([]):i.test)||(r[s]&&delete r[s],a=d[i.f],t.push(o))};return function(r){"string"==typeof r&&(r=r.split(" ")),t=[],e.each(r,n),y(t)}}(),isReady:function(t,n){if(t+="Ready",n){if(r[t]&&r[t].add)return!0;r[t]=e.extend(r[t]||{},{add:function(e){e.handler.call(this,t)}}),e(document).triggerHandler(t)}return!(!r[t]||!r[t].add)||!1},ready:function(t,n){var r=arguments[2];if("string"==typeof t&&(t=t.split(" ")),r||(t=e.map(e.grep(t,function(e){return!f(e)}),function(e){return e+"Ready"})),!t.length)return n(e,l,window,document),void 0;var o=t.shift(),a=function(){p(t,n,!0)};e(document).one(o,a)},capturingEvents:function(t,n){document.addEventListener&&("string"==typeof t&&(t=[t]),e.each(t,function(t,o){var a=function(t){return t=e.event.fix(t),n&&l.capturingEventPrevented&&l.capturingEventPrevented(t),e.event.dispatch.call(this,t)};r[o]=r[o]||{},r[o].setup||r[o].teardown||e.extend(r[o],{setup:function(){this.addEventListener(o,a,!0)},teardown:function(){this.removeEventListener(o,a,!0)}})}))},register:function(t,n){var r=h[t];if(!r)return l.error("can't find module: "+t),void 0;if(r.noAutoCallback){var o=function(){n(e,l,window,document,void 0,r.options),f(t,!0)};r.d&&r.d.length?p(r.d,o):o()}},c:{},loader:{addModule:function(t,n){h[t]=n,n.name=n.name||t,n.c||(n.c=[]),e.each(n.c,function(e,n){l.c[n]||(l.c[n]=[]),l.c[n].push(t)})},loadList:function(){var t=[],n=function(n,r){"string"==typeof r&&(r=[r]),e.merge(t,r),g.loadScript(n,!1,r)},r=function(n,r){if(f(n)||-1!=e.inArray(n,t))return!0;var o=h[n];u[o.f||n]||{};var a;return o?(a=o.test&&e.isFunction(o.test)?o.test(r):o.test,a?(f(n,!0),!0):!1):!0},o=function(t,n){if(t.d&&t.d.length){var o=function(t,o){r(o,n)||-1!=e.inArray(o,n)||n.push(o)};e.each(t.d,function(t,n){h[n]?o(t,n):d[n]&&(e.each(d[n],o),p(d[n],function(){f(n,!0)}))}),t.noAutoCallback||(t.noAutoCallback=!0)}};return function(a){var i,s,c,d,f=[],p=function(r,o){return d=o,e.each(l.c[o],function(n,r){return-1==e.inArray(r,f)||-1!=e.inArray(r,t)?(d=!1,!1):void 0}),d?(n("combos/"+d,l.c[d]),!1):void 0};for(s=0;a.length>s;s++)i=h[a[s]],i&&!r(i.name,a)?(i.css&&u.loadStyles&&g.loadCSS(i.css),i.loadInit&&i.loadInit(),i.loaded=!0,o(i,a),f.push(i.name)):i||l.warn("could not find: "+a[s]);for(s=0,c=f.length;c>s;s++)d=!1,i=f[s],-1==e.inArray(i,t)&&("noCombo"!=u.debug&&e.each(h[i].c,p),d||n(h[i].src||i,i))}}(),makePath:function(e){return-1!=e.indexOf("//")||0===e.indexOf("/")?e:(-1==e.indexOf(".")&&(e+=".js"),u.addCacheBuster&&(e+=u.addCacheBuster),u.basePath+e)},loadCSS:function(){var t,n={};return function(r){r=this.makePath(r),n[r]||(t=t||e("link, style")[0]||e("script")[0],n[r]=1,e('<link rel="stylesheet" />').insertBefore(t).attr({href:r}))}}(),loadScript:function(){var t={};return function(n,r,o){if(n=g.makePath(n),!t[n]){var a=function(){r&&r(),o&&("string"==typeof o&&(o=o.split(" ")),e.each(o,function(e,t){h[t]&&(h[t].afterLoad&&h[t].afterLoad(),f(h[t].noAutoCallback?t+"FileLoaded":t,!0))}))};t[n]=1,window.require&&window.define&&window.define.amd?require([n],a):window.sssl?sssl(n,a):window.yepnope?yepnope.injectJs(n,a):e.ajax(e.extend({},u.ajax,{url:n,success:a,dataType:"script"}))}}}()}};e.webshims=l;var u=l.cfg,d=l.features,f=l.isReady,p=l.ready,m=l.addPolyfill,h=l.modules,g=l.loader,y=g.loadList,v=g.addModule,w=l.bugs,b=[],x={warn:1,error:1};return l.addMethodName=function(t){t=t.split(":");var n=t[1];1==t.length?(n=t[0],t=t[0]):t=t[0],e.fn[t]=function(){return this.callProp(n,arguments)}},e.fn.callProp=function(t,n){var r;return n||(n=[]),this.each(function(){var o=e.prop(this,t);if(o&&o.apply){if(r=o.apply(this,n),void 0!==r)return!1}else l.warn(t+" is not a method of "+this)}),void 0!==r?r:this},l.activeLang=function(){var e=navigator.browserLanguage||navigator.language||"";return p("webshimLocalization",function(){l.activeLang(e)}),function(t){if(t)if("string"==typeof t)e=t;else if("object"==typeof t){var n=arguments,r=this;p("webshimLocalization",function(){l.activeLang.apply(r,n)})}return e}}(),l.errorLog=[],e.each(["log","error","warn","info"],function(e,t){l[t]=function(e){(x[t]&&u.debug!==!1||u.debug)&&(l.errorLog.push(e),window.console&&console.log&&console[console[t]?t:"log"](e))}}),function(){e.isDOMReady=e.isReady;var t=function(){e.isDOMReady=!0,f("DOM",!0),setTimeout(function(){f("WINDOWLOAD",!0)},9999)};if(e.isDOMReady)t();else{var n=e.ready;e.ready=function(r){return r!==!0&&document.body&&(t(),e.ready=n),n.apply(this,arguments)},e.ready.promise=n.promise}e(t),e(window).on("load",function(){t(),setTimeout(function(){f("WINDOWLOAD",!0)},9)});var r=[],a=function(){1==this.nodeType&&l.triggerDomUpdate(this)};e.extend(l,{addReady:function(e){var t=function(t,n){l.ready("DOM",function(){e(t,n)})};r.push(t),t(document,o)},triggerDomUpdate:function(t){if(!t||!t.nodeType)return t&&t.jquery&&t.each(function(){l.triggerDomUpdate(this)}),void 0;var n=t.nodeType;if(1==n||9==n){var a=t!==document?e(t):o;e.each(r,function(e,n){n(t,a)})}}}),e.fn.htmlPolyfill=function(t){var n=e.fn.html.call(this,t);return n===this&&e.isDOMReady&&this.each(a),n},e.fn.jProp=function(){return this.pushStack(e(e.fn.prop.apply(this,arguments)||[]))},e.each(["after","before","append","prepend","replaceWith"],function(t,n){e.fn[n+"Polyfill"]=function(t){return t=e(t),e.fn[n].call(this,t),e.isDOMReady&&t.each(a),this}}),e.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(t,n){e.fn[n.replace(/[A-Z]/,function(e){return"Polyfill"+e})]=function(){return e.fn[n].apply(this,arguments),e.isDOMReady&&l.triggerDomUpdate(this),this}}),e.fn.updatePolyfill=function(){return e.isDOMReady&&l.triggerDomUpdate(this),this},e.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(t,n){e.fn[n]=function(){return this.pushStack(this)}})}(),function(){var t="defineProperty",n=c.prototype.hasOwnProperty,r=["configurable","enumerable","writable"],o=function(e){for(var t=0;3>t;t++)void 0!==e[r[t]]||"writable"===r[t]&&void 0===e.value||(e[r[t]]=!0)},a=function(e){if(e)for(var t in e)n.call(e,t)&&o(e[t])};c.create&&(l.objectCreate=function(t,n,r){a(n);var o=c.create(t,n);return r&&(o.options=e.extend(!0,{},o.options||{},r),r=o.options),o._create&&e.isFunction(o._create)&&o._create(r),o}),c[t]&&(l[t]=function(e,n,r){return o(r),c[t](e,n,r)}),c.defineProperties&&(l.defineProperties=function(e,t){return a(t),c.defineProperties(e,t)}),l.getOwnPropertyDescriptor=c.getOwnPropertyDescriptor,l.getPrototypeOf=c.getPrototypeOf}(),v("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,19,25,23,27]}),h.swfmini.test(),v("sizzle",{test:e.expr.filters}),v("$ajax",{test:e.ajax}),m("es5",{test:!(!a.ES5||!Function.prototype.bind),c:[14,18,19,25,20]}),m("dom-extend",{f:t,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,14,25,19,20,26,31]}),m("json-storage",{test:a.localstorage&&"sessionStorage"in window&&"JSON"in window,d:["swfmini"],noAutoCallback:!0,c:[14],nM:"localstorage"}),m("geolocation",{test:a.geolocation,options:{destroyWrite:!0},d:["json-storage"],c:[21],nM:"geolocation"}),function(){m("canvas",{src:"excanvas",test:a.canvas,options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var e=this.options.type;!e||-1===e.indexOf("flash")||h.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(this.src="flash"==e?"FlashCanvas/flashcanvas":"FlashCanvasPro/flashcanvas")},methodNames:["getContext"],d:[t],nM:"canvas"})}(),function(){var n,r,o,i="form-shim-extend",c=a.input,d=a.inputtypes,f="formvalidation",p="form-number-date-api",g=!1,y=!1,b=function(){var t,r;return b.run||(s(f,function(){return!(!c.required||!c.pattern)}),s("fieldsetdisabled",function(){var t=e("<fieldset />")[0];return"elements"in t&&"disabled"in t}),d&&d.range&&!window.opera&&(t=e('<input type="range" style="-webkit-appearance: slider-horizontal; -moz-appearance: range;" />').appendTo("html"),r=t.css("appearance"),t.remove(),s("csstrackrange",function(){return null==r||"range"==r}),s("cssrangeinput",function(){return"slider-horizontal"==r||"range"==r}),s("styleableinputrange",function(){return a.csstrackrange||a.cssrangeinput})),a[f]&&(y=!(a.fieldsetdisabled&&"value"in document.createElement("progress")&&"value"in document.createElement("output")),w.bustedValidity=g=window.opera||y||!c.list),n=a[f]&&!g?"form-native-extend":i),b.run=!0,!1};c&&d&&b(),document.createElement("datalist"),l.validationMessages=l.validityMessages={langSrc:"i18n/formcfg-",availableLangs:["ar","ch-ZN","cs","el","es","fr","he","hi","hu","it","ja","lt","nl","pl","pt","pt-BR","pt-PT","ru","sv"]},l.formcfg=e.extend({},l.validationMessages),l.inputTypes={},m("form-core",{f:"forms",d:["es5"],test:b,options:{placeholderType:"value",messagePopover:{},list:{popover:{constrainWidth:!0}},iVal:{handleBubble:!0,sel:".ws-instantvalidation",recheckDelay:400}},methodNames:["setCustomValidity","checkValidity","setSelectionRange"],c:[16,7,2,8,1,15,30,3,31],nM:"input"}),r=u.forms,m("form-native-extend",{f:"forms",test:function(t){return!a[f]||g||-1==e.inArray(p,t||[])||h[p].test()},d:["form-core",t,"form-message"],c:[6,5]}),m(i,{f:"forms",test:function(){return a[f]&&!g},d:["form-core",t,"sizzle"],c:[16,15,24]}),m(i+"2",{f:"forms",test:function(){return a[f]&&!y},d:[i],c:[24]}),m("form-message",{f:"forms",test:function(e){return!(r.customMessages||!a[f]||g||!h[n].test(e))},d:[t],c:[16,7,15,30,3,8,4]}),o={noAutoCallback:!0,options:r},v("form-validation",e.extend({d:["form-message","form-core"]},o)),v("form-validators",e.extend({},o)),m(p,{f:"forms-ext",options:{types:"datetime-local month date time range number"},test:function(){var t=!0,n=this.options;return n._types||(n._types=n.types.split(" ")),b(),e.each(n._types,function(e,n){return n in d&&!d[n]?(t=!1,!1):void 0}),t},methodNames:["stepUp","stepDown"],d:["forms",t],c:[6,5,18,17],nM:"input inputtypes"}),v("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!e.fn.rangeUI},d:["es5"],c:[6,5,9,10,18,17,11]}),m("form-number-date-ui",{f:"forms-ext",test:function(){var e=this.options;return b(),y&&!e.replaceUI&&/Android/i.test(navigator.userAgent)&&(e.replaceUI=!0),!e.replaceUI&&h[p].test()},d:["forms",t,p,"range-ui"],css:"styles/forms-ext.css",options:{widgets:{calculateWidth:!0,monthNames:"monthNamesShort",monthNamesHead:"monthNames"}},c:[6,5,9,10,18,17,11]}),m("form-datalist",{f:"forms",test:function(){return b(),c.list&&!r.fD},d:["form-core",t],c:[16,7,6,2,9,15,30,31]})}(),m("filereader",{test:"FileReader"in window,d:["swfmini",t],c:[25,26,27]}),"details"in a||s("details",function(){return"open"in document.createElement("details")}),m("details",{test:a.details,d:[t],options:{text:"Details"},c:[21,22]}),function(){l.mediaelement={},m("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{preferFlash:!1,vars:{},params:{},attrs:{},changeSWF:e.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,19,25,20,23],nM:"audio video texttrackapi"}),m("mediaelement-jaris",{f:"mediaelement",d:["mediaelement-core","swfmini",t],test:function(){if(!a.audio||!a.video||l.mediaelement.loadSwf)return!1;var e=this.options;return e.preferFlash&&!h.swfmini.test()&&(e.preferFlash=!1),!(e.preferFlash&&swfmini.hasFlashPlayerVersion("9.0.115"))},c:[21,19,25,20]}),w.track=!a.texttrackapi,m("track",{options:{positionDisplay:!0,override:w.track},test:function(){return!this.options.override&&!w.track},d:["mediaelement",t],methodNames:["addTextTrack"],c:[21,12,13,22],nM:"texttrackapi"}),v("track-ui",{d:["track",t]})}(),m("feature-dummy",{test:!0,loaded:!0,c:b}),l.$=e,l.M=a,window.webshims=l,n.filter("[data-polyfill-cfg]").each(function(){try{l.setOptions(e(this).data("polyfillCfg"))}catch(t){l.warn("error parsing polyfill cfg: "+t)}}).end().filter("[data-polyfill]").each(function(){l.polyfill(e.trim(e(this).data("polyfill")||""))}),i&&(i.cfg&&l.setOptions(i.cfg),i.lang&&l.activeLang(i.lang),"polyfill"in i&&l.polyfill(i.polyfill)),l});