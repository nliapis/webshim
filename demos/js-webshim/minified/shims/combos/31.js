webshims.register("dom-extend",function(e,t,i,n,a){"use strict";var r=!("hrefNormalized"in e.support)||e.support.hrefNormalized,o=!("getSetAttribute"in e.support)||e.support.getSetAttribute,s=Object.prototype.hasOwnProperty;if(t.assumeARIA=o||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),"debug"in t&&t.error('Use webshims.setOptions("debug", true||false||"noCombo"); to debug flag'),!t.cfg.no$Switch){var l=function(){if(!i.jQuery||i.$&&i.jQuery!=i.$||i.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),i.$&&(i.$=t.$),i.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};l(),setTimeout(l,90),t.ready("DOM",l),e(l),t.ready("WINDOWLOAD",l)}t.modules;var u=/\s*,\s*/,c={},d={},p={},f={},h={},m={},v=e.fn.val,g=function(t,i,n,a,r){return r?v.call(e(t)):v.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(i){if(!e.widget)for(var n,a=0;null!=(n=i[a]);a++)try{e(n).triggerHandler("remove")}catch(r){}t(i)}}(),e.fn.val=function(t){var i=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return i&&1===i.nodeType?e.prop(i,"value",t,"val",!0):v.call(this);if(e.isArray(t))return v.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(i=this,1===i.nodeType)if(n){var o=t.call(i,r,e.prop(i,"value",a,"val",!0));null==o&&(o=""),e.prop(i,"value",o,"val")}else e.prop(i,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,i,a,r){return r||(r=n),e(r)[a?"onTrigger":"on"](t,i),this.on("remove",function(n){n.originalEvent||e(r).off(t,i)}),this};var y="_webshimsLib"+Math.round(1e3*Math.random()),b=function(t,i,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,y);return n!==a&&(r||(r=e.data(t,y,{})),i&&(r[i]=n)),i?r&&r[i]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var i=[];return this.each(function(){var n=b(this,"shadowData"),a=n&&n[t.prop]||this;-1==e.inArray(a,i)&&i.push(a)}),this.pushStack(i)}}),t.cfg.extendNative||t.cfg.noTriggerOverride||function(t){e.event.trigger=function(i,n,a,r){if(!p[i]||r||!a||1!==a.nodeType)return t.apply(this,arguments);var o,l,u,c=a[i],d=e.prop(a,i),f=d&&c!=d;return f&&(u="__ws"+i,l=i in a&&s.call(a,i),a[i]=d,a[u]=c),o=t.apply(this,arguments),f&&(l?a[i]=c:delete a[i],delete a[u]),o}}(e.event.trigger),["removeAttr","prop","attr"].forEach(function(i){c[i]=e[i],e[i]=function(t,n,r,o,s){var l="val"==o,u=l?g:c[i];if(!t||!d[n]||1!==t.nodeType||!l&&o&&"attr"==i&&e.attrFn[n])return u(t,n,r,o,s);var p,h,v,y=(t.nodeName||"").toLowerCase(),b=f[y],w="attr"!=i||r!==!1&&null!==r?i:"removeAttr";if(b||(b=f["*"]),b&&(b=b[n]),b&&(p=b[w]),p){if("value"==n&&(h=p.isVal,p.isVal=l),"removeAttr"===w)return p.value.call(t);if(r===a)return p.get?p.get.call(t):p.value;p.set&&("attr"==i&&r===!0&&(r=n),v=p.set.call(t,r)),"value"==n&&(p.isVal=h)}else v=u(t,n,r,o,s);if((r!==a||"removeAttr"===w)&&m[y]&&m[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!r:!0,m[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==i)||"attr"==e.only&&"prop"!=i)&&e.call(t,r,T,l?"val":w,i)})}return v},h[i]=function(e,n,r){f[e]||(f[e]={}),f[e][n]||(f[e][n]={});var o=f[e][n][i],s=function(e,t,a){var o;return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==i&&"value"==n?function(e){var t=this;return r.isVal?g(t,n,e,!1,0===arguments.length):c[i](t,n,e)}:"prop"==i&&"value"==e&&r.value.apply?(o="__ws"+n,p[n]=!0,function(){var e=this[o]||c[i](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}):function(e){return c[i](this,n,e)}};f[e][n][i]=r,r.value===a&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var w=function(){var e=t.getPrototypeOf(n.createElement("foobar")),i=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(a,r,o){var l,u;if(!(i&&(l=n.createElement(a))&&(u=t.getPrototypeOf(l))&&e!==u)||l[r]&&s.call(l,r))o._supvalue=function(){var e=b(this,"propValue");return e&&e[r]&&e[r].apply?e[r].apply(this,arguments):e&&e[r]},T.extendValue(a,r,o.value);else{var c=l[r];o._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[r]=o.value}o.value._supvalue=o._supvalue}}(),T=function(){var i={};t.addReady(function(n,r){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(i,function(e,i){return s(e),i&&i.forEach?(i.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+i),a)}),o=null});var r,o=e([]),s=function(t,a){i[t]?i[t].push(a):i[t]=[a],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,i){s(t,function(){var t=e.attr(this,i);null!=t&&e.attr(this,i,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,i,n){s(t,function(){e(this).each(function(){var e=b(this,"propValue",{});e[i]=this[i],this[i]=n})})}}}(),x=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(i){i=e(i);var n=i.prop("id");return n||(t++,n="ID-"+t,i.eq(0).prop("id",n)),n}}(),implement:function(e,i){var n=b(e,"implemented")||b(e,"implemented",{});return n[i]?(t.warn(i+" already implemented for element #"+e.id),!1):(n[i]=!0,!0)},extendUNDEFProp:function(t,i){e.each(i,function(e,i){e in t||(t[e]=i)})},createPropDefault:x,data:b,moveToFirstEvent:function(t,i,n){var a,r=(e._data(t,"events")||{})[i];r&&r.length>1&&(a=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(i).width(),l=e(i).width();if(l==r&&a==o)return;r=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var i=n.body,a=n.documentElement;s[t]=function(){return Math.max(i["scroll"+e],a["scroll"+e],i["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).on("updatelayout",this.handler),e(i).on("resize",this.handler),function(){var t,i=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),i.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start(),null==e.support.boxSizing&&e(function(){e.support.boxSizing&&s.handler({type:"boxsizing"})})})},function(i,n,a){if(i&&n){a=a||{},i.jquery&&(i=i[0]),n.jquery&&(n=n[0]);var r=e.data(i,y)||e.data(i,y,{}),o=e.data(n,y)||e.data(n,y,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,y)||e.data(a.shadowFocusElement,y,s)):a.shadowFocusElement=n,e(i).on("remove",function(t){t.originalEvent||setTimeout(function(){e(n).remove()},4)}),r.hasShadow=n,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=r.shadowData={nativeElement:i,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){b(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){x(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(i,n){x(i),i.prop||(i.prop={set:function(e){i.attr.set.call(this,e)},get:function(){var i,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!r){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(o){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}})}}(),enumarated:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(i,n){"string"==typeof n&&(n=n.split(u)),n.forEach(function(n){t.defineNodeNamesProperty(i,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(i,n,a){return d[n]=!0,a.reflect&&(a.propType&&!t.propTypes[a.propType]?t.error("could not finde propType "+a.propType):t.propTypes[a.propType||"standard"](a,n)),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),h[r](i,n,o),"*"!=i&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&w(i,n,o),a[r]=o)}),a.initAttr&&T.content(i,n),a},defineNodeNameProperties:function(e,i,n,a){for(var r in i)!a&&i[r].initAttr&&T.createTmpCache(e),n&&(i[r][n]||(i[r][n]={},["value","set","get"].forEach(function(e){e in i[r]&&(i[r][n][e]=i[r][e],delete i[r][e])}))),i[r]=t.defineNodeNameProperty(e,r,i[r]);return a||T.flushTmpCache(),i},createElement:function(i,n,a){var r;return e.isFunction(n)&&(n={after:n}),T.createTmpCache(i),n.before&&T.createElement(i,n.before),a&&(r=t.defineNodeNameProperties(i,a,!1,!0)),n.after&&T.createElement(i,n.after),T.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,i,n,a){"string"==typeof t&&(t=t.split(u)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){m[e]||(m[e]={}),"string"==typeof i&&(i=i.split(u)),n.initAttr&&T.createTmpCache(e),i.forEach(function(t){m[e][t]||(m[e][t]=[],d[t]=!0),n.set&&(a&&(n.set.only=a),m[e][t].push(n.set)),n.initAttr&&T.content(e,t)}),T.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(i,n,{attr:{set:function(e){this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,i){if(e.nodeName){var n;return i===a?(n=e.attributes[t]||{},i=n.specified?n.value:null,null==i?a:i):("boolean"==typeof i?i?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,i),a)}},activeLang:function(){var i=[],n=[],r={},o=function(n,a,o){a._isLoading=!0,r[n]?r[n].push(a):(r[n]=[a],t.loader.loadScript(n,function(){o==i.join()&&e.each(r[n],function(e,t){s(t)}),delete r[n]}))},s=function(t){var n=t.__active,r=function(e,n){return t._isLoading=!1,t[n]||-1!=t.availableLangs.indexOf(n)?(t[n]?t.__active=t[n]:o(t.langSrc+n,t,i.join()),!1):a};e.each(i,r),t.__active||(t.__active=t[""]),n!=t.__active&&e(t).trigger("change")};return function(e){var t;if("string"==typeof e)i[0]!=e&&(i=[e],t=i[0].split("-")[0],t&&t!=e&&i.push(t),n.forEach(s));else if("object"==typeof e)return e.__active||(n.push(e),s(e)),e.__active;return i[0]}}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,i){t[e]=function(e,n,a,r){"string"==typeof e&&(e=e.split(u));var o={};return e.forEach(function(e){o[e]=t[i](e,n,a,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var i=e.getAttribute("role");i||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(i,function(t,i){for(var o=e(t,a).add(r.filter(t)),s=0,l=o.length;l>s;s++)n(o[s],i)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||n(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,i,n,a,r){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var i=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var i=["form-validation"];r.lazyCustomMessages&&(r.customMessages=!0,i.push("form-message")),r.customDatalist&&(r.fD=!0,i.push("form-datalist")),r.addValidators&&i.push("form-validators"),t.reTest(i),e(n).off(".lazyloadvalidation")},l=/^(?:form|fieldset)$/i,u=function(t){var i=!1;return e(t).jProp("elements").each(function(){return!l.test(t.nodeName||"")&&(i=e(this).is(":invalid"))?!1:a}),i},c=function(){if(e.extend(e.expr[":"],{"valid-element":function(t){return l.test(t.nodeName||"")?!u(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return l.test(t.nodeName||"")?u(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr[":"][t+"-element"]}),"unknown"==typeof n.activeElement){var i=e.expr[":"].focus;e.expr[":"].focus=function(){try{return i.apply(this,arguments)}catch(e){t.error(e)}return!1}}};e.expr.filters?c():t.ready("sizzle",c),t.triggerInlineForm=function(t,i){e(t).trigger(i)};var d=function(e,i,n){s(),t.ready("form-validation",function(){e[i].apply(e,n)})},p="transitionDelay"in n.documentElement.style?"":" no-transition",f=t.cfg.wspopover;f.position||f.position===!1||(f.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},f,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+p+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){d(this,"show",arguments)}},t.validityAlert={showFor:function(){d(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,i,n){var r=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return n&&r[n]?r=r[n]:r&&(i=i||e.prop(t,"validity")||{valid:1},i.valid&&(r="")),"object"==typeof r&&(i=i||e.prop(t,"validity")||{valid:1},i.valid||(e.each(i,function(e,t){return t&&"valid"!=e&&r[e]?(r=r[e],!1):a}),"object"==typeof r&&(i.typeMismatch&&r.badInput&&(r=r.badInput),i.badInput&&r.typeMismatch&&(r=r.typeMismatch)))),"object"==typeof r&&(r=r.defaultMessage),r||""},e.fn.getErrorMessage=function(i){var n="",a=this[0];return a&&(n=t.getContentValidationMessage(a,!1,i)||e.prop(a,"customValidationMessage")||e.prop(a,"validationMessage")),n},e(n).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&(t.target.list||e(t.target).is(":invalid"))&&s()}),t.ready("WINDOWLOAD",s)}),webshims.register("form-datalist",function(e,t,i,n,a,r){"use strict";var o=function(e){e&&"string"==typeof e||(e="DOM"),o[e+"Loaded"]||(o[e+"Loaded"]=!0,t.ready(e,function(){t.loader.loadList(["form-datalist-lazy"])}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(s,{number:1,time:1}),t.propTypes.element=function(i,a){t.createPropDefault(i,"attr"),i.prop||(i.prop={get:function(){var t=e.attr(this,a);return t&&(t=n.getElementById(t),t&&i.propNodeName&&!e.nodeName(t,i.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var l=e.webshims.cfg.forms,u=Modernizr.input.list;if(!u||l.customDatalist){var c=function(){var i=function(){var t;!e.data(this,"datalistWidgetData")&&(t=e.prop(this,"id"))?e('input[list="'+t+'"], input[data-wslist="'+t+'"]').eq(0).attr("list",t):e(this).triggerHandler("updateDatalist")},n={autocomplete:{attr:{get:function(){var t=this,i=e.data(t,"datalistWidget");return i?i._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var i=this,n=e.data(i,"datalistWidget");n?(n._autocomplete=t,"off"==t&&n.hideList()):"autocomplete"in i?i.autocomplete=t:i.setAttribute("autocomplete",t)}}}};u?((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var i=this,n=e("select",i);n[0]&&n[0].options&&n[0].options.length&&(t=n[0].options)}return t}}}),n.list={attr:{get:function(){var i=t.contentAttr(this,"list");return null!=i?(e.data(this,"datalistListAttr",i),s[e.prop(this,"type")]||s[e.attr(this,"type")]||this.removeAttribute("list")):i=e.data(this,"datalistListAttr"),null==i?a:i},set:function(i){var n=this;e.data(n,"datalistListAttr",i),s[e.prop(this,"type")]||s[e.attr(this,"type")]?n.setAttribute("list",i):(t.objectCreate(d,a,{input:n,id:i,datalist:e.prop(n,"list")}),n.setAttribute("data-wslist",i)),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):t.defineNodeNameProperties("input",{list:{attr:{get:function(){var e=t.contentAttr(this,"list");return null==e?a:e},set:function(i){var n=this;t.contentAttr(n,"list",i),t.objectCreate(r.shadowListProto,a,{input:n,id:i,datalist:e.prop(n,"list")}),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),t.defineNodeNameProperties("input",n),t.addReady(function(e,t){t.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(i)})},d={_create:function(i){if(!s[e.prop(i.input,"type")]&&!s[e.attr(i.input,"type")]){var n=i.datalist,r=e.data(i.input,"datalistWidget"),l=this;return n&&r&&r.datalist!==n?(r.datalist=n,r.id=i.id,e(r.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(r,"_resetListCached")),r._resetListCached(),a):n?(r&&r.datalist===n||(this.datalist=n,this.id=i.id,this.hasViewableData=!0,this._autocomplete=e.attr(i.input,"autocomplete"),e.data(i.input,"datalistWidget",this),e.data(n,"datalistWidgetData",this),o("WINDOWLOAD"),t.isReady("form-datalist-lazy")?this._lazyCreate(i):(e(i.input).one("focus",o),t.ready("form-datalist-lazy",function(){l._destroyed||l._lazyCreate(i)}))),a):(r&&r.destroy(),a)}},destroy:function(t){var r,o=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(n).off(".datalist"+this.id),e(i).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),o===a?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",o),t&&"beforeunload"==t.type&&(r=this.input,setTimeout(function(){e.attr(r,"list",e.attr(r,"list"))},9)),this._destroyed=!0}};t.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:e.extend(r,{shadowListProto:d})}),r.list||(r.list={}),c()}}()});