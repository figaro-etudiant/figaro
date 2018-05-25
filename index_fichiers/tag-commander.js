/*
 * tagContainer Generator v5
 * Copyright Tag Commander
 * http://www.tagcommander.com/
 * Generated: 2018-05-15 15:01:56 Europe/Paris
 * ---
 * Version	: 19.00
 * IDTC 	: 1
 * IDS		: 1282
 */
/*!compressed by YUI*/ if(typeof tC=="undefined"){if(typeof document.domain=="undefined"||typeof document.referrer=="undefined"){document=window.document}(function(m,k){var j,r,y=m.document,a=m.location,e=m.navigator,x=m.tC,v=m.$,H=Array.prototype.push,b=Array.prototype.slice,u=Array.prototype.indexOf,g=Object.prototype.toString,i=Object.prototype.hasOwnProperty,o=String.prototype.trim,c=function(J,K){return new c.fn.init(J,K,j)},B=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,q=/\S/,t=/\s+/,d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,l=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,D=/^[\],:{}\s]*$/,z=/(?:^|:|,)(?:\s*\[)+/g,G=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,E=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,I=/^-ms-/,p=/-([\da-z])/gi,F=function(J,K){return(K+"").toUpperCase()},f={};c.fn=c.prototype={constructor:c,init:function(J,M,P){var L,N,K,O;if(!J){return this}if(J.nodeType){this.context=this[0]=J;this.length=1;return this}if(typeof J==="string"){if(J.charAt(0)==="<"&&J.charAt(J.length-1)===">"&&J.length>=3){L=[null,J,null]}else{L=w.exec(J)}if(L&&(L[1]||!M)){if(L[1]){M=M instanceof c?M[0]:M;O=(M&&M.nodeType?M.ownerDocument||M:y);J=c.parseHTML(L[1],O,true);if(l.test(L[1])&&c.isPlainObject(M)){this.attr.call(J,M,true)}return c.merge(this,J)}else{N=y.getElementById(L[2]);if(N&&N.parentNode){if(N.id!==L[2]){return P.find(J)}this.length=1;this[0]=N}this.context=y;this.selector=J;return this}}else{if(!M||M.tC){return(M||P).find(J)}else{return this.constructor(M).find(J)}}}else{if(c.isFunction(J)){return P.ready(J)}}if(J.selector!==k){this.selector=J.selector;this.context=J.context}return c.makeArray(J,this)},each:function(K,J){return c.each(this,K,J)},ready:function(J){c.ready.promise(J);return this}};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var S,L,J,K,P,Q,O=arguments[0]||{},N=1,M=arguments.length,R=false;if(typeof O==="boolean"){R=O;O=arguments[1]||{};N=2}if(typeof O!=="object"&&!c.isFunction(O)){O={}}if(M===N){O=this;--N}for(;N<M;N++){if((S=arguments[N])!=null){for(L in S){J=O[L];K=S[L];if(O===K){continue}if(R&&K&&(c.isPlainObject(K)||(P=c.isArray(K)))){if(P){P=false;Q=J&&c.isArray(J)?J:[]}else{Q=J&&c.isPlainObject(J)?J:{}}O[L]=c.extend(R,Q,K)}else{if(K!==k){O[L]=K}}}}}return O};c.extend({ssl:(("https:"==y.location.protocol)?"https://manager.":"http://redirect1282."),randOrd:function(){return(Math.round(Math.random())-0.5)},nodeNames:"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rnocache:/<(?:script|object|embed|option|style)/i,rnoshimcache:new RegExp("<(?:"+c.nodeNames+")[\\s/>]","i"),rchecked:/checked\s*(?:[^=]|=\s*.checked.)/i,containersLaunched:{}});c.extend({inArray:function(N,K,M){var J,L=Array.prototype.indexOf;if(K){if(L){return L.call(K,N,M)}J=K.length;M=M?M<0?Math.max(0,J+M):M:0;for(;M<J;M++){if(M in K&&K[M]===N){return M}}}return -1},isFunction:function(J){return c.type(J)==="function"},isArray:Array.isArray||function(J){return c.type(J)==="array"},isWindow:function(J){return J!=null&&J==J.window},isNumeric:function(J){return !isNaN(parseFloat(J))&&isFinite(J)},type:function(J){return J==null?String(J):f[g.call(J)]||"object"},each:function(O,P,L){var K,M=0,N=O.length,J=N===k||c.isFunction(O);if(L){if(J){for(K in O){if(P.apply(O[K],L)===false){break}}}else{for(;M<N;){if(P.apply(O[M++],L)===false){break}}}}else{if(J){for(K in O){if(P.call(O[K],K,O[K])===false){break}}}else{for(;M<N;){if(P.call(O[M],M,O[M++])===false){break}}}}return O},log:function(J,K){try{if(c.getCookie("tCdebugLib")&&console){console[K?K:"log"](J)}}catch(L){}}});c.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(K,J){f["[object "+J+"]"]=J.toLowerCase()});j=c(y);var h={};function C(K){var J=h[K]={};c.each(K.split(t),function(M,L){J[L]=true});return J}c.buildFragment=function(M,N,K){var L,J,O,P=M[0];N=N||y;N=!N.nodeType&&N[0]||N;N=N.ownerDocument||N;if(M.length===1&&typeof P==="string"&&P.length<512&&N===y&&P.charAt(0)==="<"&&!c.rnocache.test(P)&&(c.support.checkClone||!c.rchecked.test(P))&&(c.support.html5Clone||!c.rnoshimcache.test(P))){J=true;L=jQuery.fragments[P];O=L!==k}if(!L){L=N.createDocumentFragment();c.clean(M,N,L,K);if(J){c.fragments[P]=O&&L}}return{fragment:L,cacheable:J}};var s=a.hostname,n=s.split("."),A="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";if(n.length<2||s.match(A)){c.maindomain=s}else{c.maindomain=n[n.length-2]+"."+n[n.length-1]}m.tC=c})(window)}tC.extend({internalvars:typeof tC.internalvars!="undefined"?tC.internalvars:{},internalFunctions:typeof tC.internalFunctions!="undefined"?tC.internalFunctions:{},privacyVersion:"",containerVersion:"19.00",id_container:"1",id_site:"1282",generatorVersion:"1.0.0",dedup_done:typeof tC.dedup_done!="undefined"?tC.dedup_done:false});tC.extend({launchTag:function(e,c,d,a,b){tC.array_launched_tags.push(c);tC.array_launched_tags_keys.push(e);tC.containersLaunched[a][b].t.push({id:e,label:c,idTpl:d});window.postMessage('TC.EX:{"id":"'+e+'","idc":"'+b+'","idt":"'+d+'","ids":"'+a+'","lb":"'+c.replace(/"/g,'\\"')+'"}',"*")}});if(tC.containersLaunched===undefined){tC.containersLaunched={}}if(tC.containersLaunched[1282]===undefined){tC.containersLaunched[1282]={}}tC.containersLaunched[1282][1]={v:"19.00",t:[]};tC.extend({domReady:false,isDOMReady:function(){if(document.readyState=="complete"||document.readyState=="loaded"){return true}if(document.readyState!="interactive"){return false}if(!document.documentElement.doScroll){return true}try{document.documentElement.doScroll("left");return true}catch(a){return false}},waitingOnDomReadyCallBacks:tC.waitingOnDomReadyCallBacks||[],excuteOnDomReadyCallBacks:function(){for(var a=0;a<tC.waitingOnDomReadyCallBacks.length;a++){tC.waitingOnDomReadyCallBacks[a]()}tC.waitingOnDomReadyCallBacks=[]},onDomReady:function(b){if(this.domReady){b();return}tC.waitingOnDomReadyCallBacks.push(b);var a=false;if(document.addEventListener){a=true;document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);tC.excuteOnDomReadyCallBacks()},false)}else{if(document.attachEvent){a=true;document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);tC.excuteOnDomReadyCallBacks()}});if(document.documentElement.doScroll&&window==window.top){(function(){if(tC.domReady){return}try{document.documentElement.doScroll("left")}catch(c){setTimeout(arguments.callee,0);return}tC.excuteOnDomReadyCallBacks()})()}}}if(!a){window.onload=tC.excuteOnDomReadyCallBacks}}});if(tC.isDOMReady()){tC.domReady=true}else{tC.onDomReady(function(){tC.domReady=true})}tC.extend({isCurrentVersion:function(){var a=tC.getCookie("tc_mode_test"),b="testModeIncludeReplaceThisByTrue";return a!="1"||(a=="1"&&b=="true")}});tC.extend({pixelTrack:{add:function(a,b){a=a||0;b=b||"img";tC.onDomReady(function(){if(b=="iframe"){var c=document.createElement(b);c.src=a;c.width=1;c.height=1;c.style.display="none";document.body.appendChild(c)}else{var c=new Image();c.src=a}})}}});tC.extend({tc_hdoc:false,domain:function(){this.tc_hdoc=document;try{try{this.tc_hdoc=top.document}catch(d){this.tc_hdoc=document}var a=typeof this.tc_hdoc.domain!="undefined"?this.tc_hdoc.domain.toLowerCase().split("."):false,g="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";if(a.length<2||this.tc_hdoc.domain.match(g)){return""}else{var f=a[a.length-3],c=a[a.length-2],b=a[a.length-1];if(c=="co"||c=="com"){return"."+f+"."+c+"."+b}else{return"."+c+"."+b}}}catch(d){tC.log(["tC.domain error : ",d],"warn")}}});tC.domain();tC.extend({removeCookie:function(a){this.setCookie(a,"",-1)},setCookie:function(c,e,a,h,d,g){if(!d){d=tC.domain()}var b=new Date();b.setTime(b.getTime());if(a){a=a*1000*60*60*24}var f=new Date(b.getTime()+(a));document.cookie=c+"="+escape(e)+((a)?";expires="+f.toGMTString():"")+((h)?";path="+h:";path=/")+((d)?";domain="+d:"")+((g)?";secure":"")},getCookie:function(a){return(result=new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)").exec(document.cookie))?unescape(result[1]):""}});tC.extend({storage:{has:function(){try{if("localStorage" in window&&window.localStorage!==null){window.localStorage.setItem("TC_CHECK","1");window.localStorage.removeItem("TC_CHECK");return true}return false}catch(a){return false}},get:function(a){return this.has()?window.localStorage.getItem(a):false},set:function(b,a){return this.has()?(window.localStorage.setItem(b,a)||true):false},remove:function(a){return this.has()?(window.localStorage.removeItem(a)||true):false}}});tC.extend({hitCounter:function(){if(Math.floor(Math.random()*parseInt(150))==0){tC.pixelTrack.add("//manager.tagcommander.com/utils/hit.php?id=1&site=1282&version=19.00&frequency=150&position="+tC.container_position+"&rand="+Math.random())}}});tC.container_position=(typeof tc_container_position!=="undefined")?tc_container_position:(typeof tC.container_position!=="undefined")?tC.container_position:0;tC.container_position++;if(typeof tc_container_position!=="undefined"){tc_container_position++}tC.hitCounter();tC.extend({script:{add:function(d,f,c){var a=(document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode),b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=d;b.charset="utf-8";b.id="tc_script_"+Math.random();if(a){if(f){if(b.addEventListener){b.addEventListener("load",function(){f()},false)}else{b.onreadystatechange=function(){if(b.readyState in {loaded:1,complete:1}){b.onreadystatechange=null;f()}}}}if(c&&typeof c=="number"){setTimeout(function(){if(a&&b.parentNode){a.removeChild(b)}},c)}a.insertBefore(b,a.firstChild)}else{tC.log("tC.script error : the element <script> or <body> is not found ! the file "+d+" is not implemented !","warn")}}}});tC.extend({_R:{cR:function(a){tC.storage.set("tC_Sync",a);tC.pixelTrack.add("//engage.commander1.com/reach?tc_s=1282")},rR:function(){if(tC.storage.has()){var a=new Date().getTime();var b=tC.storage.get("tC_Sync")||0;b=parseInt(b);if(b==0||a-b>604800000){this.cR(a)}}}}});tC.onDomReady(function(){tC._R.rR()});tC.extend({crypt:function(d){var e="",a;for(var b=0;b<d.length;b++){var f=d.charCodeAt(b);if(f>=32&&f<=126){a=f+26;if(a>126){a=(a%126)+32-1}e+=String.fromCharCode(a)}else{e+=d.charAt(b)}}return e},uncrypt:function(c){var d="",a;for(var b=0;b<c.length;b++){if(c.charCodeAt(b)>=32&&c.charCodeAt(b)<=126){if(c.charCodeAt(b)>=(32+26)&&c.charCodeAt(b)<=126){a=c.charCodeAt(b)-26}else{a=c.charCodeAt(b)-26+(126-32)+1}d+=String.fromCharCode(a)}else{d+=c.charAt(b)}}return d}});tC.extend({match:function(a,d,b){try{return(a.match(new RegExp(d,b)))}catch(c){tC.log("the tC.match error ! message : "+c.message,"data : "+a,"p : "+d,"flag : "+b,"warn")}}});tC.extend({getParamURL:function(p,b){if(typeof p==="undefined"){return""}p=p.toLowerCase();var n=new Array();if(!b){var o="";try{if(typeof top!="undefined"&&typeof top.document!="undefined"){o=top.document}}catch(h){}if(o===""){o=document}b=typeof o.location!="undefined"?o.location.href:""}b=b.replace(/%23/g,"#");var m=0;var d=b.indexOf("?");var c=b.indexOf("#");if(d!=-1){m=d}else{if(c!=-1){m=c}}var a="";if(m!=0){a=b.substring(m+1,b.length).split("#").join("&")}a=a.replace(/%3d/g,"=");var f=a.split("&");for(var g=0;g<f.length;g++){var l=f[g].split("="),j=(l.shift()).toLowerCase(),k=l.join("=");n[j]=k}return((typeof n[p]!="undefined")?n[p]:"")}});tC.extend({addClass:function(f){var h,d,b,e,g,j,a;if(tC.isFunction(f)){return this.each(function(c){jQuery(this).addClass(f.call(this,c,this.className))})}if(f&&typeof f==="string"){h=f.split(core_rspace);for(d=0,b=this.length;d<b;d++){e=this[d];if(e.nodeType===1){if(!e.className&&h.length===1){e.className=f}else{g=" "+e.className+" ";for(j=0,a=h.length;j<a;j++){if(g.indexOf(" "+h[j]+" ")<0){g+=h[j]+" "}}e.className=jQuery.trim(g)}}}}return this},removeClass:function(h){var e,f,g,j,b,d,a;if(tC.isFunction(h)){return this.each(function(c){jQuery(this).removeClass(h.call(this,c,this.className))})}if((h&&typeof h==="string")||h===undefined){e=(h||"").split(core_rspace);for(d=0,a=this.length;d<a;d++){g=this[d];if(g.nodeType===1&&g.className){f=(" "+g.className+" ").replace(rclass," ");for(j=0,b=e.length;j<b;j++){while(f.indexOf(" "+e[j]+" ")>=0){f=f.replace(" "+e[j]+" "," ")}}g.className=h?jQuery.trim(f):""}}}return this},toggleClass:function(d,b){var c=typeof d,a=typeof b==="boolean";if(tC.isFunction(d)){return this.each(function(e){tC(this).toggleClass(d.call(this,e,this.className,b),b)})}return this.each(function(){if(c==="string"){var g,f=0,e=jQuery(this),h=b,j=d.split(core_rspace);while((g=j[f++])){h=a?h:!e.hasClass(g);e[h?"addClass":"removeClass"](g)}}else{if(c==="undefined"||c==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className)}this.className=this.className||d===false?"":jQuery._data(this,"__className__")||""}}})},hasClass:function(a){var d=" "+a+" ",c=0,b=this.length;for(;c<b;c++){if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(rclass," ").indexOf(d)>=0){return true}}return false}});if(tC.isCurrentVersion()){if(typeof tC.dedup_done=="undefined"||tC.dedup_done===false){tC.extend({dedup:{crypted:true,LeA:false,LeAD:false,LeC:false,LeCD:false,LeV:false,LeVD:false,FeA:false,FeAD:false,FeC:false,FeCD:false,FeV:false,FeVD:false,AeA:[],AeC:[],AeV:[],tc_hdoc:document,brands:null,d_tags:null,tc_scompshop:null,tc_scomnet:null,tc_ssearchv:null,tc_ssearche:null,cj_max:null,enable_dedup:null,ch_A:[],ch_C:[],ch_V:[],ch_0:null,detected_channel:"",detected_source:"",tc_scookcj_name:"tc_cj_v2",tc_scookcj_path:"/",tc_scookcj_days:365,tc_dm:tC.domain(),tc_scooksda_name:"tc_sdauid",tc_scooksda_path:"/",setup:function(b,a){this[b]=a;return this},init:function(){if(!this.enable_dedup){return}var o=this,h="",t="",k="",F=0;o.cj=o.getCj();for(x in o.ch_0){var j=o.ch_0[x];if(j.t=="c"||j.t=="a"){o.ch_C.push(j)}if(j.t=="v"||j.t=="a"){o.ch_V.push(j)}if(j.t!="0"&&typeof j.l!="undefined"){o.ch_A.push(j)}}try{o.tc_hdoc=top.document}catch(A){}if(tC.getCookie("TCID")==""){tC.setCookie("TCID",o.rand(),365,"/","."+o.tc_dm)}if(tC.getCookie("TCSESSION")==""){tC.setCookie("TCSESSION",o.rand(),0,"/","."+o.tc_dm)}var y=tC.getParamURL;if(typeof h.l!="undefined"){h=h.l}if(typeof h!=="undefined"&&h!=null&&h!=""){F=1}if(typeof t!=="undefined"&&t!=null&&t!=""){F=1}if(!F){var E=o.meta_origin(o.tc_hdoc.referrer);if(E){h=(E.split("@@@"))[0];t=(E.split("@@@"))[1]}}if(tC.dedup.redirect!="1"){if(h){var m=h+"@@@"+t+"@@@"+new Date().getTime()+"@@@C",u=o.cj;if(u.length>0){var a=u[u.length-1],r=a.split("@@@"),w=typeof r[0]!="undefined"?r[0]:"",B=typeof r[1]!="undefined"?r[1]:"",C=typeof r[3]!="undefined"?r[3].replace("CLICK","C"):"";if(w==h&&B==t&&C=="C"){o.cj.pop()}}o.setCj(m);if("redirect1282.tagcommander.com"!=""&&"redirect1282.tagcommander.com".indexOf("commander1.com")!==-1){tC.pixelTrack.add(("http:"==document.location.protocol?"http:":"https:")+"//redirect1282.tagcommander.com/dc3/?chn="+h+"&src="+t+"&type=C&limit="+tC.dedup.cj_max+"&rand="+Math.random(),"img")}tC.dedup.detected_channel=h;tC.dedup.detected_source=t}}else{tC.setCookie("TCREDIRECT","0",0,"/",tC.domain())}var d=o.cj;var q="";for(var x=d.length-1;x>=0;x--){var p=d[x].split("@@@");if(p.length!=4){}else{var n=p[0],D=p[1],v=o.age(p[2]),v=v==""?false:v,l=p[3].replace("VIEW","V").replace("CLICK","C"),f=o.getChannel({l:n,t:"A"}),b=o.getChannel({l:n,t:"C"}),z=o.getChannel({l:n,t:"V"});if((b||z)&&v!==false){if(b!=false&&l=="C"&&parseFloat(v)<=parseFloat(b.a)){if(!o.LeC){o.LeC=n;o.LeCD=D}o.FeC=n;o.FeCD=D;o.AeC.push({c:n,d:D});if(!o.LeA||q=="V"){o.LeA=n;o.LeAD=D;q="C"}o.FeA=n;o.FeAD=D;o.AeA.push({c:n,d:D})}if(z!=false&&l=="V"&&parseFloat(v)<=parseFloat(z.b)){if(!o.LeV){o.LeV=n;o.LeVD=D}o.FeV=n;o.FeVD=D;o.AeV.push({c:n,d:D});if(!o.LeA){o.LeA=n;o.LeAD=D;q="V"}o.FeA=n;o.FeAD=D;o.AeA.push({c:n,d:D})}}}}},getChannel:function(f){var c=f.t,b=tC.dedup,e;if(c=="C"||c=="click"){e=b.ch_C}else{if(c=="V"||c=="view"){e=b.ch_V}else{if(c=="A"||c=="all"){e=b.ch_A}else{e=b.ch_0}}}if(typeof f.l!="undefined"){f.l=f.l.replace("DIRECT_ACCESS","Direct Access").replace("EXTERNAL_LINK","External links");if(f.l=="COM"){f.l="Community websites"}if(f.l=="CSS"){f.l="Comparison shopping services"}if(f.l=="BRAND"){f.l="Brand"}}for(var a in e){if((typeof f.i!="undefined"&&parseInt(f.i)==parseInt(e[a].i))||(typeof f.l!="undefined"&&typeof e[a].l!="undefined"&&f.l.toLowerCase()==e[a].l.toLowerCase())){return e[a]}}return false},rand:function(){var a=new Date();return""+a.getYear()+(a.getMonth()+1)+a.getDay()+a.getHours()+a.getMinutes()+a.getSeconds()+parseInt(Math.random()*12345678942)},getCj:function(){var a=this.crypted?tC.uncrypt(tC.getCookie(this.tc_scookcj_name)):tC.getCookie(this.tc_scookcj_name);return a==""?[]:a.split("|||")},setCj:function(b){var c=this.cj;if(tC.isArray(b)){for(var a in b){c.push(b[a])}}else{c.push(b)}while(c.length>this.cj_max){c.shift()}this.cj=c;tC.setCookie(this.tc_scookcj_name,(this.crypted?tC.crypt(c.join("|||")):c.join("|||")),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm)},removeCj:function(){tC.setCookie(this.tc_scookcj_name,"",0,this.tc_scookcj_path,this.tc_dm)},match:function(b,c,a){if(b&&b!="ignored"&&a!=""){switch(b){case"equals":if(a==c){return true}break;case"different":if(a!=c){return true}break;case"contains":if(tC.match(a,c)){return true}break;case"notcontains":if(!tC.match(a,c)){return true}break;default:return true}}else{return true}return false},contains_channel:function(c){for(var a in c.e){var b=c.e[a];if(typeof b=="object"){if(typeof b.c!="undefined"&&typeof c.c!="undefined"&&b.c.toLowerCase()==c.c.toLowerCase()&&this.match(c.m,c.s,b.d)){return true}}}return false},ValidRules:function(id_tag){var rules=typeof this.d_tags[id_tag]!="undefined"?this.d_tags[id_tag]:false,valid_rules=true,self=this;if(!rules){return true}state_rules_string="";var tab_length=rules.length;for(var i=0;i<tab_length;i++){var rule=rules[i];if(typeof rule=="object"){var res=self.test(rule);if(i==0){state_rules_string+=res}else{state_rules_string+=" "+rule.x+" "+res}}}return eval(state_rules_string.replace(/and/g,"&&").replace(/or/g,"||"))},test:function(k){var p=this,h=channel_found_in_cj=[],m=k.t.toLowerCase(),e=k.w,n=k.m,a=k.s,l=k.f,o=typeof k.d!="undefined"?k.d:false,c=k.c;if(m=="all"){if(e=="any"){h=p.AeA}else{if(e=="last"){h=p.LeA?[{c:p.LeA,d:p.LeAD}]:[]}else{if(e=="first"){h=p.FeA?[{c:p.FeA,d:p.FeAD}]:[]}}}}else{if(m=="click"){if(e=="any"){h=p.AeC}else{if(e=="last"){h=p.LeC?[{c:p.LeC,d:p.LeCD}]:[]}else{if(e=="first"){h=p.FeC?[{c:p.FeC,d:p.FeCD}]:[]}}}}else{if(m=="view"){if(e=="any"){h=p.AeV}else{if(e=="last"){h=p.LeV?[{c:p.LeV,d:p.LeVD}]:[]}else{if(e=="first"){h=p.FeV?[{c:p.FeV,d:p.FeVD}]:[]}}}}}}for(var f in c){if(typeof c[f]!="function"){var j=c[f],b=p.getChannel({i:j,t:m}),g=b.l;if(tC.dedup.contains_channel({c:g,e:h,m:n,s:a})){channel_found_in_cj.push(j)}}}return((l=="1"&&channel_found_in_cj.length!=0)||(l=="0"&&channel_found_in_cj.length==0))},age:function(a){var b=new Date().getTime()+100;return((b-a)/3600/24/1000).toFixed(2)},meta_origin:function(c){if(c=="undefined"||!c||c==""){return("DIRECT_ACCESS@@@")}var c=c.toLowerCase(),d=this.tc_hdoc.domain.toLowerCase(),h=ref_d_s=cur_d_s="",m=this;if(c!=""){var j=c.split("/"),h=j[2];my_d_a=h.split(".");ref_d_s=my_d_a[my_d_a.length-2]}if(ref_d_s=="co"||ref_d_s=="com"||ref_d_s=="org"){ref_d_s=my_d_a[my_d_a.length-3]}if(d!=""){var b=d.split(".");cur_d_s=b[b.length-2];if(cur_d_s=="co"||cur_d_s=="com"||cur_d_s=="org"){cur_d_s=b[b.length-3]}}if(ref_d_s==cur_d_s){return false}for(var f=0;f<m.tc_ssearche.length;f++){if(ref_d_s==m.tc_ssearche[f]){var e=tC.getParamURL(m.tc_ssearchv[f],c),e=unescape(e.toLowerCase());for(type in m.brands){var l=m.brands[type];for(kb in l){var a=l[kb];if(typeof(a)=="string"){var a=a!=""?a.toLowerCase():false,g=type=="Regex"?new RegExp(a,"g"):false;if(a&&((type=="Exact word"&&e===a)||(type=="Contain"&&e.indexOf(a)!=-1)||(type=="Regex"&&g.test(e)))){return("BRAND@@@"+m.tc_ssearche[f])}}}}return("SEO@@@"+m.tc_ssearche[f])}}for(var f=0;f<m.tc_scomnet.length;f++){if(ref_d_s==m.tc_scomnet[f]){return("COM@@@"+m.tc_scomnet[f])}}for(var f=0;f<m.tc_scompshop.length;f++){if(ref_d_s==m.tc_scompshop[f]){return("CSS@@@"+m.tc_scompshop[f])}}if(ref_d_s!=cur_d_s){return("EXTERNAL_LINK@@@"+h)}return false}}});tC.dedup.redirect=typeof tc_redirect!="undefined"?tc_redirect:typeof tC.dedup.redirect!="undefined"?tC.dedup.redirect:tC.getCookie("TCREDIRECT")}tC.dedup.setup("d_tags",[]).setup("ch_0",[]);if(typeof tC.dedup_done=="undefined"||tC.dedup_done===false){tC.dedup.setup("brands",[]).setup("tc_scompshop",["shopping","kelkoo"]).setup("tc_scomnet",["facebook","linkedin","viadeo","trombi","myspace","orkut","habbo","xing","yammer","twitter"]).setup("tc_ssearchv",["q","p","q","query","encquery","query","q","q","query","query","qt","terms","query","q","q","rdata","qs","q","wd","qs","text","q","q","query","query","q","q","szukaj","qt","q","q","q","k","q","searchExpr","q","q","query","query","q","q","search_for","q","q","search_word","query","q","words","qt","q"]).setup("tc_ssearche",["google","yahoo","msn","aol","aol","lycos","ask","altavista","netscape","cnn","looksmart","about","mamma","alltheweb","gigablast","voila","virgilio","live","baidu","alice","yandex","najdi","aol","club-internet","mama","seznam","search","wp","onet","netsprint","google.interia","szukacz","yam","pchome","kvasir","sesam","ozu","terra","nostrum","mynet","ekolay","search.ilse","bing","daum","eniro","naver","kvasir","rambler","onetcenter","szukacs"]).setup("cj_max",10).setup("enable_dedup",tC.isCurrentVersion()).init();tC.dedup_done=true}}tC1282_1=tC;/* RETRO COMPATIBILITY FUNCTIONS */


if(typeof tc_vars=='undefined')var tc_vars=[];(function(){var l='tag_name3|tag_name2|tag_name1|idarticle|auteur|theme|typesession|offer|nb_billets_parents|nb_billets_enfants|TC_PAGE|TC_RUB|TC_SOUSRUB|TC_ARTICLE_NAME|TC_URL_PAGE|TC_SOUSRUB_CAT|TC_PAGE_TYPE|TC_DATE_PAGE|env_working|TC_ENV_DEVICE'.split('|');for(var k in l){if(!tc_vars.hasOwnProperty(l[k])){tc_vars[l[k]]='';}}})();

/*DYNAMIC JS BLOCK 1*/


/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/

/*END_CUSTOM_JS_BLOCK1*/
tC.array_launched_tags=[];tC.array_launched_tags_keys=[];tC.id_site='1282';if(tC.getCookie('tc_mode_test')==1){(function(){var tc_testmodescriptload=document.createElement('script');tc_testmodescriptload.type='text/javascript';tc_testmodescriptload.src='//manager.tagcommander.com/utils/test_mode_include.php?id=1&site=1282&type=load&rand='+Math.random()+'&version=';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptload);})();}else{
/*VARIABLES_BLOCK*/

tC.internalvars.device_OJD=navigator.userAgent.toLowerCase();if(/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(tC.internalvars.device_OJD)){tC.internalvars.device_OJD={"device":"tablet"};}else{if(/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(tC.internalvars.device_OJD)){tC.internalvars.device_OJD={"device":"smartphone"};}else{tC.internalvars.device_OJD={"device":"desktop"};}}
tC.internalvars.pages_Xiti="";if(tc_vars["TC_PAGE"]!==""||tc_vars["TC_RUB"]!==""||tc_vars["TC_SOUSRUB"]!==""||tc_vars["TC_ARTICLE_NAME"]!==""){tC.internalvars.pages_Xiti=tc_vars["TC_PAGE"]+"::"+tc_vars["TC_RUB"]+"::"+tc_vars["TC_SOUSRUB"]+"::"+tc_vars["TC_ARTICLE_NAME"];}
tC.internalvars.page_name="";tC.internalvars.page_name=tc_vars["TC_PAGE"]+tc_vars["TC_RUB"]+tc_vars["TC_SOUSRUB"]+tc_vars["TC_ARTICLE_NAME"];tC.internalvars.orientation="Paysage";if(window.innerHeight>window.innerWidth){tC.internalvars.orientation="Portrait";}
tC.extend({detectDevice:{get:function(){var ua=(navigator?navigator.userAgent:'No User-Agent Provided');return ua.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE-HTML/i)?"desktop":ua.match(/Xbox|PLAYSTATION.3|Wii/i)?"desktop":ua.match(/iPad/i)||ua.match(/tablet/i)&&!ua.match(/RX-34/i)||ua.match(/FOLIO/i)?"tablet":ua.match(/Linux/i)&&ua.match(/Android/i)&&!ua.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)?"tablet":ua.match(/Kindle/i)||ua.match(/Mac.OS/i)&&ua.match(/Silk/i)?"tablet":ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i)||ua.match(/MB511/i)&&ua.match(/RUTEM/i)?"tablet":ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)?"mobile":ua.match(/Opera/i)&&ua.match(/Windows.NT.5/i)&&ua.match(/HTC|Xda|Mini|Vario|SAMSUNG-GT-i8000|SAMSUNG-SGH-i9/i)?"mobile":ua.match(/Windows.(NT|XP|ME|9)/)&&!ua.match(/Phone/i)||ua.match(/Win(9|.9|NT)/i)?"desktop":ua.match(/Macintosh|PowerPC/i)&&!ua.match(/Silk/i)?"desktop":ua.match(/Linux/i)&&ua.match(/X11/i)?"desktop":ua.match(/Solaris|SunOS|BSD/i)?"desktop":ua.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i)&&!ua.match(/Mobile/i)?"desktop":"mobile";}}});tC.internalvars.device_GA=tC.detectDevice.get();tC.internalvars.kruxID="";tC.internalvars.UserAgent=navigator.userAgent;tC.internalvars.pageCategory="";switch(tc_vars["TC_PAGE"]){case"Accueil":tC.internalvars.pageCategory="homepage";break;case"Article":tC.internalvars.pageCategory="detail_article";break;case"Rubrique":tC.internalvars.pageCategory="liste_article";break;case"Sous-rubrique":tC.internalvars.pageCategory="liste_article";break;case"liste_ecoles":tC.internalvars.pageCategory="liste_annonce";break;case"detail_ecoles":tC.internalvars.pageCategory="detail_annonce";break;case"liste_diplome":tC.internalvars.pageCategory="liste_annonce";break;case"detail_formation":tC.internalvars.pageCategory="detail_annonce";break;case"Mentions_legales":tC.internalvars.pageCategory="pages_legales";break;case"recherche":tC.internalvars.pageCategory="moteur_de_recherche";break;case"liste_academie":tC.internalvars.pageCategory="liste_annonce";break;case"liste_departement":tC.internalvars.pageCategory="liste_annonce";break;case"liste_ville":tC.internalvars.pageCategory="liste_annonce";break;case"liste_candidat":tC.internalvars.pageCategory="liste_annonce";break;case"detail_candidat":tC.internalvars.pageCategory="detail_annonce";break;case"detail_lycee":tC.internalvars.pageCategory="detail_annonce";break;case"detail_candidat":tC.internalvars.pageCategory="detail_annonce";break;case"quiz":tC.internalvars.pageCategory="quiz";break;case"Battle_des_prenoms":tC.internalvars.pageCategory="jeux";break;case"Sommaire":tC.internalvars.pageCategory="liste_annonce";break;case"sommaire":tC.internalvars.pageCategory="liste_annonce";break;case"Cat sous-rubrique":tC.internalvars.pageCategory="dossier_edito";break;default:tC.internalvars.pageCategory="";break;}
tC.internalvars.level1="";switch(tc_vars["TC_PAGE"]){case"Accueil":tC.internalvars.level1="homepage";break;case"Article":tC.internalvars.level1="actualite";break;case"Cat_sous-rubrique":tC.internalvars.level1="actualite";break;case"Rubrique":tC.internalvars.level1="actualite";break;case"Sous-rubrique":tC.internalvars.level1="actualite";break;case"liste_ecoles":tC.internalvars.level1="search";break;case"detail_ecoles":tC.internalvars.level1="search";break;case"liste_diplome":tC.internalvars.level1="search";break;case"detail_formation":tC.internalvars.level1="search";break;case"recherche":tC.internalvars.level1="search";break;case"liste_academie":tC.internalvars.level1="search";break;case"liste_departement":tC.internalvars.level1="search";break;case"liste_ville":tC.internalvars.level1="search";break;case"liste_candidat":tC.internalvars.level1="search";break;case"detail_candidat":tC.internalvars.level1="search";break;case"detail_lycee":tC.internalvars.level1="search";break;case"detail_candidat":tC.internalvars.level1="search";break;case"Sommaire":tC.internalvars.level1="search";break;case"sommaire":tC.internalvars.level1="search";break;default:tC.internalvars.level1="";break;}
tC.internalvars.xtfigaro_env="";switch(tc_vars["TC_ENV_DEVICE"]){case"desktop":tC.internalvars.xtfigaro_env="411548";break;case"smartphone":tC.internalvars.xtfigaro_env="526948";break;case"tablette":tC.internalvars.xtfigaro_env="526948";break;default:tC.internalvars.xtfigaro_env="";break;}

/*END_VARIABLES_BLOCK*/


/*DYNAMIC JS BLOCK 2*/


/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/
for(i=0;i<=localStorage.length-1;i++){key=localStorage.key(i);if(key=="kxuser"){tC.internalvars.kruxID=localStorage.getItem(key);}}
/*END_CUSTOM_JS_BLOCK2*/}

//----------------------------------------------------




//----

if(tC.getCookie('tc_mode_test')==1){(function(){var tc_testmodescriptexec=document.createElement('script');tc_testmodescriptexec.type='text/javascript';tc_testmodescriptexec.src='//manager.tagcommander.com/utils/test_mode_include.php?id=1&site=1282&type=exec&rand='+Math.random()+'&version=19.00';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptexec);})();(function(){setTimeout(function(){if(typeof top.tc_count!=='undefined'){top.tc_count++;}else{top.tc_count=1;}var tc_newscript=document.createElement('script');tc_newscript.type='text/javascript';tc_newscript.src='//manager.tagcommander.com/utils/livetest/bookmarklet.php?r='+Math.random()+'&nb='+top.tc_count+'&container=1282!1&version=19.00';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_newscript);},1000);})();}else{if(tC.dedup.ValidRules('14')){tC.launchTag('14','Krux ControlTag','72','1282','1');window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);(function(){var k=document.createElement('script');k.type='text/javascript';k.async=true;k.src=(location.protocol==='https:'?'https:':'http:')+'//cdn.krxd.net/controltag/JKthxZo1.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);}());}
if(tC.dedup.ValidRules('12')){tC.launchTag('12','Universal Analytics Groupe','1503','1282','1');(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-101739686-1','auto',{'name':'groupe','cookieExpires':34190000});ga('groupe.set','dimension1','figaro_etudiant');ga('groupe.set','dimension2',tc_vars["env_working"]);ga('groupe.set','dimension3',tC.internalvars.level1);ga('groupe.set','dimension4',tc_vars["TC_RUB"]);ga('groupe.set','dimension5',tc_vars["TC_SOUSRUB"]);ga('groupe.set','dimension6',tC.internalvars.pageCategory);ga('groupe.set','dimension7',tC.internalvars.device_GA);ga('groupe.set','dimension8',tC.internalvars.UserAgent);ga('groupe.set','dimension9','classique');ga('groupe.set','dimension10',tc_vars["auteur"]);ga('groupe.set','dimension11',tc_vars["theme"]);ga('groupe.set','dimension12',tc_vars["idarticle"]);ga('groupe.set','dimension13',tc_vars["tag_name1"]);ga('groupe.set','dimension14',tc_vars["tag_name2"]);ga('groupe.set','dimension15',tc_vars["tag_name3"]);ga('groupe.set','dimension16','ouvert');ga('groupe.set','dimension17','gratuit');ga('groupe.set','dimension18',tC.internalvars.kruxID);ga('groupe.set','dimension19','');ga('groupe.set','dimension20','inconnu');ga('groupe.set','dimension21','');ga('groupe.set','dimension22',tc_vars["typesession"]);ga('groupe.set','dimension23',tC.internalvars.orientation);ga('groupe.set','dimension24','');ga('groupe.send','pageview');}
if(tC.dedup.ValidRules('10')){tC.launchTag('10','Universal Analytics Sdt_Figaro','1503','1282','1');(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-716671-1','auto',{'name':'trackerFigaro','cookieExpires':34190000});ga('trackerFigaro.set','dimension1','figaro_etudiant');ga('trackerFigaro.set','dimension2',tc_vars["env_working"]);ga('trackerFigaro.set','dimension3','actualité');ga('trackerFigaro.set','dimension4',tc_vars["TC_RUB"]);ga('trackerFigaro.set','dimension5',tc_vars["TC_SOUSRUB"]);ga('trackerFigaro.set','dimension6',tc_vars["TC_PAGE"]);ga('trackerFigaro.set','dimension7',tC.internalvars.device_GA);ga('trackerFigaro.set','dimension8',tC.internalvars.UserAgent);ga('trackerFigaro.set','dimension9','classique');ga('trackerFigaro.set','dimension10',tc_vars["auteur"]);ga('trackerFigaro.set','dimension11',tc_vars["theme"]);ga('trackerFigaro.set','dimension12',tc_vars["idarticle"]);ga('trackerFigaro.set','dimension13',tc_vars["tag_name1"]);ga('trackerFigaro.set','dimension14',tc_vars["tag_name2"]);ga('trackerFigaro.set','dimension15',tc_vars["tag_name3"]);ga('trackerFigaro.set','dimension16','ouvert');ga('trackerFigaro.set','dimension17','gratuit');ga('trackerFigaro.set','dimension18',tC.internalvars.kruxID);ga('trackerFigaro.set','dimension19','');ga('trackerFigaro.set','dimension20','non_reconnu');ga('trackerFigaro.set','dimension21',tc_vars["offer"]);ga('trackerFigaro.set','dimension22',tc_vars["typesession"]);ga('trackerFigaro.set','dimension23',tC.internalvars.orientation);ga('trackerFigaro.set','dimension24','');ga('trackerFigaro.send','pageview');}
if(tC.dedup.ValidRules('8')){if((tc_vars["TC_PAGE"].toString().toLowerCase().indexOf(('Article').toLowerCase())!=-1)){tC.launchTag('8','Facebook_Content','26','1282','1');if(typeof fbq!=="undefined"){fbq('track','ViewContent');}}}
if(tC.dedup.ValidRules('15')){tC.launchTag('15','Facebook - Custom Audience (BUILDER)','1811','1282','1');!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');fbq('init',"105429083317392");fbq('track','PageView');}}
function tc_events_1(tc_elt,tc_id_event,tc_array_events){tc_array_events["id"]=tc_id_event;(function(){var l='ga_category|ga_action|ga_label|ga_value|id'.split('|');for(var k in l){if(!tc_array_events.hasOwnProperty(l[k])){tc_array_events[l[k]]='';}}})();if(tc_array_events["id"]=='gaclick'){tC.launchTag('egaclick','ga_click','-1','1282','1');ga('fcms.send','event',tc_array_events["ga_category"],tc_array_events["ga_action"],tc_array_events["ga_label"],tc_array_events["ga_value"])}}