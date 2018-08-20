!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){e.getCmdName=function(t){return/(.*\/)(.*)(\.cmd)/.exec(t)[2]},e.getMethodName=function(t){return/(method=)(.*)(\&?)/.exec(t)[2]},e.transferFirstLetterUpper=function(t){return t.slice(0,1).toLocaleUpperCase()+t.slice(1)}},function(t,e,n){"use strict";n.r(e);n(8);var r=n(2),a=Vue.extend({template:'\n\t\t<div id="app">\n\t\t\t<div class="input">\n\t\t\t\t<textarea rows="20" cols="150" v-model="inputJson"></textarea>\n\t\t\t</div>\n\t\t\t<div id="trans" @click="trans">生成代码</div>\n\t\t\t<div class="output">\n\t\t\t\t<div class="navbar">\n\t\t\t\t\t<div class="navitem" @click="nav( \'1\' )" :class="[tabSel==\'1\' ? \'seled\' : \'\']">CMD</div>\n\t\t\t\t\t<div class="navitem" @click="nav( \'2\' )" :class="[tabSel==\'2\' ? \'seled\' : \'\']">IService</div>\n\t\t\t\t\t<div class="navitem" @click="nav( \'3\' )" :class="[tabSel==\'3\' ? \'seled\' : \'\']">Service</div>\n\t\t\t\t\t<div class="navitem" @click="nav( \'4\' )" :class="[tabSel==\'4\' ? \'seled\' : \'\']">IDomain</div>\n\t\t\t\t\t<div class="navitem" @click="nav( \'5\' )" :class="[tabSel==\'5\' ? \'seled\' : \'\']">Domain</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<textarea v-show="tabSel==\'1\'" rows="20" cols="150">{{cmdRlt}}</textarea>\n\t\t\t\t\t<textarea v-show="tabSel==\'2\'" rows="20" cols="150">{{iServiceRlt}}</textarea>\n\t\t\t\t\t<textarea v-show="tabSel==\'3\'" rows="20" cols="150">{{serviceRlt}}</textarea>\n\t\t\t\t\t<textarea v-show="tabSel==\'4\'" rows="20" cols="150">{{idomainRlt}}</textarea>\n\t\t\t\t\t<textarea v-show="tabSel==\'5\'" rows="20" cols="150">{{domainRlt}}</textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',data:()=>({inputJson:'{\n\t"interfaceName": "重点终端质量分析数据获取",\n\t"interfaceUrl": "/imm/job_evaluation.cmd?method=getQulityEvaluationData",\n\t"desc": "区域查询条件没啥用，只按人查",\n\t"method": "GET",\n\t"author": "zhangwj",\n\t"date": "2018-3-13",\n\t"params": {\n\t\t"empSearch": "客户经理，以逗号分隔"\n\t},\n\t"result": {\n\t\t"ok": true,\n\t\t"msg": "异常消息",\n\t\t"data":[\n\t\t\t{\n\t\t\t\t"POSITION_CODE": "POSITION_CODE"\n\t\t\t}\n\t\t]\n\t}\n}',tabSel:"1",cmdRlt:"",iServiceRlt:"",serviceRlt:"",idomainRlt:"",domainRlt:""}),methods:{reduceOutPut(){let t=this,e=JSON.parse(this.inputJson);/(.*\/)(.*)(\.cmd)/.exec(e.interfaceUrl)[2];[{name:"cmdRlt",template:"renderMethod"},{name:"iServiceRlt",template:"renderIDomain"},{name:"serviceRlt",template:"renderIService"},{name:"idomainRlt",template:"renderDomain"},{name:"domainRlt",template:"renderService"}].map(n=>{t[n.name]=r[n.template](e)}),this.$forceUpdate()},nav(t){this.tabSel=t},trans(){try{console.log(this.inputJson),JSON.parse(this.inputJson),this.reduceOutPut()}catch(t){console.log(t)}}},mounted(){this.reduceOutPut()},watch:{inputJson(t,e){try{JSON.parse(t),this.reduceOutPut()}catch(t){console.log(t)}}}});$(function(){(new a).$mount("#app")})},function(t,e,n){e.renderMethod=n(3),e.renderIService=n(4),e.renderIDomain=n(5),e.renderService=n(6),e.renderDomain=n(7)},function(t,e,n){var r;r=n(0),t.exports=function(t){var e,n,a,o,i,s,c;if(e=r.getCmdName(t.interfaceUrl),i="","POST"===t.method||"post"===t.method)i='String dataInfo = XsmTool.getBodyString( req );\n\t\tMap paraMap = JsonUtils.readToObject( dataInfo, Map.class );\n\t\tif ( paraMap == null ) {\n\t\t\tthrow new RuntimeException( "参数为空！" );\n\t\t}';else{if(n="",t.params instanceof Array)for(a=0,o=(c=t.params).length;a<o;a++)n+=`\t\tparaMap.put( "${(s=c[a]).name}", req.getParameter( "${s.name}" ) );\n`;else for(s in t.params)n+=`\t\tparaMap.put( "${s}", req.getParameter( "${s}" ) );\n`;i=`Map paraMap = new HashMap();\n${n}`}return`\n\n@MethodDesc(\n\tname = "${t.interfaceName}",\n\tauthor = "${t.author}", \n\tcreateDate = "${t.date}", \n\tinputJson = "${JSON.stringify(t.params).replace(/\"/g,"'")}", \n\tmethod = "${t.method}", \n\toutputJson = "${JSON.stringify(t.result).replace(/\"/g,"'")}", \n\tpath = "${t.interfaceUrl}",\n\tdesc="${t.desc}",\n\tversion="1.0"\n)\npublic void ${r.getMethodName(t.interfaceUrl)}(HttpServletRequest req, HttpServletResponse rep,\n\t\tIErrorHandler errorHandler, IMessageHandler messageHandler,\tViewHelper viewHelper) {\n\n\tif (log.isInfoEnabled()) {\n\t\tlog.info("[${t.author}] ${r.transferFirstLetterUpper(e)}Cmd.${r.getMethodName(t.interfaceUrl)}--begin");\n\t}\n\n\tMap rltMap = new HashMap();\n\ttry{\n\t\t${i}\n\t\tMap data = get${r.transferFirstLetterUpper(e)}Service().${r.getMethodName(t.interfaceUrl)}( paraMap );\n\t\trltMap.put( "data", data );\n\t\trltMap.put( "ok", "true" );\n\t}catch( Exception e ){\n\t\tif( log.isErrorEnabled() ){\n\t\t\tlog.error( "${r.getMethodName(t.interfaceUrl)} Exception = ", e );\n\t\t}\n\t\trltMap.put( "ok", false );\n\t\trltMap.put( "msg", e.toString() );\n\t}finally{\n\t\tRepSendJson.sendJson(rltMap, rep);\n\t}\n\n\tif (log.isInfoEnabled()) {\n\t\tlog.info("[${t.author}] ${r.transferFirstLetterUpper(e)}Cmd.${r.getMethodName(t.interfaceUrl)}--end");\n\t}\n\n}\n`}},function(t,e,n){var r;r=n(0),t.exports=function(t){return`\n\n/**\n * ${t.interfaceName}\n * @autor ${t.author}\n * @desc ${t.desc}\n */\npublic Map ${r.getMethodName(t.interfaceUrl)}( Map beanMap );\n\n`}},function(t,e,n){var r;r=n(0),t.exports=function(t){return`\n\n/**\n * ${t.interfaceName}\n * @autor ${t.author}\n * @desc ${t.desc}\n */\npublic Map ${r.getMethodName(t.interfaceUrl)}( Map beanMap );\n\n`}},function(t,e,n){var r;r=n(0),t.exports=function(t){var e;return e=r.getCmdName(t.interfaceUrl),"POST"===t.method||"post"===t.method?`\n\n/**\n* ${t.interfaceName}\n* @autor ${t.author}\n* @desc ${t.desc}\n*/\npublic Map ${r.getMethodName(t.interfaceUrl)}( Map beanMap ){\n\tObject rlt = getTransactionTemplate().execute( new TransactionCallback() {\n\t\tprotected Object doInTransaction( TransactionStatus arg0 ) {\n\t\t\treturn get${r.transferFirstLetterUpper(e)}Domain().${r.getMethodName(t.interfaceUrl)}( beanMap );\n\t\t}\n\t});\n\treturn ( Map )rlt;\n}\n\n`:`\n\n/**\n* ${t.interfaceName}\n* @autor ${t.author}\n* @desc ${t.desc}\n*/\npublic Map ${r.getMethodName(t.interfaceUrl)}( Map beanMap ){\n\treturn get${r.transferFirstLetterUpper(e)}Domain().${r.getMethodName(t.interfaceUrl)}( beanMap );\n}\n\n`}},function(t,e,n){var r;r=n(0),t.exports=function(t){return`\n\n/**\n * ${t.interfaceName}\n * @autor ${t.author}\n * @desc ${t.desc}\n */\npublic Map ${r.getMethodName(t.interfaceUrl)}( Map beanMap ){\n\treturn V6SqlSessionUtil.getSqlSession().selectOne( "${r.getCmdName(t.interfaceUrl)}Domain.${r.getMethodName(t.interfaceUrl)}", beanMap );\n}\n\n`}},function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(11)(r,a);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(10)(!1)).push([t.i,"#app{\r\n\twidth: 90%;\r\n\tmargin: auto;\r\n\ttext-align: center;\r\n}\r\n#app #trans{\r\n\twidth: 150px;\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\tborder: 1px solid #f2f2f2;\r\n\tbackground-color: #488aff;\r\n\tcursor: pointer;\r\n\ttext-align: center;\r\n\tmargin: auto;\r\n\tmargin-top: 15px;\r\n}\r\n.output .navbar{\r\n\twidth: 1000px;\r\n\theight: 35px;\r\n\tline-height: 35px;\r\n\tdisplay: flex;\r\n\ttext-align: center;\r\n\tmargin: auto;\r\n\tmargin-top: 15px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.navitem{\r\n\twidth: 200px;\r\n\theight: 100%;\r\n\tline-height: 35px;\r\n\tborder: 1px solid #f2f2f2;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navitem.seled{\r\n\tbackground-color: #488aff;\r\n}\r\n\r\n.content{\r\n\r\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([a]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r={},a=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),i=null,s=0,c=[],l=n(12);function u(t,e){for(var n=0;n<t.length;n++){var a=t[n],o=r[a.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](a.parts[i]);for(;i<a.parts.length;i++)o.parts.push(v(a.parts[i],e))}else{var s=[];for(i=0;i<a.parts.length;i++)s.push(v(a.parts[i],e));r[a.id]={id:a.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function f(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=o(t.insertAt.before,n);n.insertBefore(e,a)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return h(e,t.attrs),f(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,a,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=s++;n=i||(i=m(e)),r=g.bind(null,n,c,!1),a=g.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,a=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||o)&&(r=l(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),a=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return u(n,e),function(t){for(var a=[],o=0;o<n.length;o++){var i=n[o];(s=r[i.id]).refs--,a.push(s)}t&&u(p(t,e),e);for(o=0;o<a.length;o++){var s;if(0===(s=a[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var a,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}}])});