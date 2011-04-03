jQuery.webshims.register("dom-extend",function(h,k,w,p,q){var s=k.modules,r=h.attr,o={},n={};h.attr=function(c,b,a,d,e){var g=(c.nodeName||"").toLowerCase();if(!g||c.nodeType!==1)return r(c,b,a,d,e);var f=o[g],j;if(f)f=f[b];if(!f)if(f=o["*"])f=f[b];if(f)if(a===q)return f.get?f.get.call(c):f.value;else{if(f.set)j=f.set.call(c,a)}else j=r(c,b,a,d,e);a!==q&&n[g]&&n[g][b]&&h.each(n[g][b],function(i,l){l.call(c,a)});return j};var t=function(c,b,a){o[c]||(o[c]={});var d=o[c][b],e=function(g,f,j){if(f&&
f[g])return f[g];if(j&&j[g])return j[g];return function(i){return r(this,b,i)}};o[c][b]=a;if(a.value===q){if(!a.set)a.set=a.writeable?e("set",a,d):k.cfg.useStrict?function(){throw b+" is readonly on "+c;}:h.noop;if(!a.get)a.get=e("get",a,d)}h.each(["value","get","set"],function(g,f){if(a[f])a["_sup"+f]=e(f,d)})},m=function(){var c={};k.addReady(function(e,g){var f={},j=function(i){if(!f[i]){f[i]=h(e.getElementsByTagName(i));if(g[0]&&h.nodeName(g[0],i))f[i]=f[i].add(g)}};h.each(c,function(i,l){j(i);
!l||!l.forEach?k.warn("Error: with "+i+"-property. methods: "+l):l.forEach(function(u){f[i].each(u)})});f=null});var b,a=h([]),d=function(e,g){if(c[e])c[e].push(g);else c[e]=[g];if(h.isDOMReady)(b||h(p.getElementsByTagName(e))).each(g)};return{createTmpCache:function(e){if(h.isDOMReady)b=b||h(p.getElementsByTagName(e));return b||a},flushTmpCache:function(){b=null},content:function(e,g){d(e,function(){h(this).filter("["+g+"]").attr(g,function(f,j){return j})})},createElement:function(e,g){d(e,g)},
extendValue:function(e,g,f){d(e,function(){h(this).each(function(){(h.data(this,"_oldPolyfilledValue")||h.data(this,"_oldPolyfilledValue",{}))[g]=this[g];this[g]=f})})}}}(),v=function(){var c=k.getPrototypeOf(p.createElement("foobar")),b=Object.prototype.hasOwnProperty;return function(a,d,e){var g=p.createElement(a),f=k.getPrototypeOf(g);if(f&&c!==f&&(!g[d]||!b.call(g,d))){var j=g[d];e._supvalue=function(){if(j&&j.apply)return j.apply(this,arguments);return j};f[d]=e.value}else{e._supvalue=function(){var i=
h.data(this,"_oldPolyfilledValue");if(i&&i[d]&&i[d].apply)return i[d].apply(this,arguments);return i&&i[d]};m.extendValue(a,d,e.value)}e.value._supvalue=e._supvalue}}();h.extend(k,{getID:function(){var c=(new Date).getTime();return function(b){b=h(b);var a=b.attr("id");if(!a){c++;a="elem-id-"+c;b.attr("id",a)}return a}}(),defineNodeNameProperty:function(c,b,a){a=h.extend({writeable:true,idl:true},a);if(a.isBoolean){var d=a.set;a.set=function(e){e=!!e;k.contentAttr(this,b,e);d&&d.call(this,e);return e};
a.get=a.get||function(){return k.contentAttr(this,b)!=null}}t(c,b,a);c!="*"&&k.cfg.extendNative&&a.value&&h.isFunction(a.value)&&v(c,b,a);a.initAttr&&m.content(c,b);a.content&&k.warn("old content prop used for "+c+": "+b);return a},defineNodeNameProperties:function(c,b,a){for(var d in b){!a&&b[d].initContent&&m.createTmpCache(c);b[d]=k.defineNodeNameProperty(c,d,b[d])}a||m.flushTmpCache();return b},createElement:function(c,b,a){var d;if(h.isFunction(b))b={after:b};m.createTmpCache(c);b.before&&m.createElement(c,
b.before);if(a)d=k.defineNodeNameProperties(c,a,true);b.after&&m.createElement(c,b.after);m.flushTmpCache();return d},onNodeNamesPropertyModify:function(c,b,a){if(typeof c=="string")c=c.split(/\s*,\s*/);if(h.isFunction(a))a={set:a};c.forEach(function(d){n[d]||(n[d]={});n[d][b]||(n[d][b]=[]);a.set&&n[d][b].push(a.set);a.initContent&&m.content(d,b)})},defineNodeNamesBooleanProperty:function(c,b,a){a=a||{};a.isBoolean=true;k.defineNodeNamesProperty(c,b,a)},contentAttr:function(c,b,a){if(c.nodeName){if(a===
q){a=(c.attributes[b]||{}).value;return a==null?q:a}if(typeof a=="boolean")a?c.setAttribute(b,b):c.removeAttribute(b);else c.setAttribute(b,a)}},activeLang:function(){var c=[navigator.browserLanguage||navigator.language||""],b=h("html").attr("lang");b&&c.push(b);return function(a,d,e){if(a)if(!d||!e){if(a!==c[0]){c[0]=a;h(p).triggerHandler("webshimLocalizationReady",c)}}else{var g=(d=s[d].options)&&d.availabeLangs,f=function(j){if(h.inArray(j,g)!==-1){k.loader.loadScript(d.langSrc+j+".js",function(){a[j]?
e(a[j]):h(function(){a[j]&&e(a[j])})});return true}return false};h.each(c,function(j,i){var l=i.split("-")[0];if(a[i]||a[l]){e(a[i]||a[l]);return false}if(g&&d.langSrc&&(f(i)||f(l)))return false})}return c}}()});h.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,b){k[c]=function(a,d,e){if(typeof a=="string")a=a.split(/\s*,\s*/);var g={};a.forEach(function(f){g[f]=k[b](f,d,e)});return g}});k.isReady("webshimLocalization",
true)});
