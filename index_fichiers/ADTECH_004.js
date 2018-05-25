
__ADTECH_CODE__ = "";
__theDocument = document;
__theWindow = window;
__bCodeFlushed = false;

function __flushCode() {
	if (!__bCodeFlushed) {
		var span = parent.document.createElement("SPAN");
		span.innerHTML = __ADTECH_CODE__;
		window.frameElement.parentNode.appendChild(span);
		__bCodeFlushed = true;
	}
}

if (typeof inFIF != "undefined" && inFIF) {
    document.nativeWrite = document.write;
    document.nativeWriteln = document.writeln;
	document.write = function(str) {
		__ADTECH_CODE__ += str;
	};
	document.writeln = function(str) {
		document.write(str + "\n");
	};
	__theDocument = parent.document;
	__theWindow = parent;
}
document.write("<a href=\"http://adtech.adencf.net/adlink/296/6278038/0/703/AdId=19024611;BnId=1;guid=1A3e54eb90-5dbd-11e8-8d67-d89d671a84cc;itime=992800733;gdpr=1;nodecode=yes;link=http://lesfacultes.univ-catholille.fr/fr/nouveau-decouvrez-lecole-360-0\" target=\"_blank\"><img src=\"http://aka-cdn-ns.adtech.de/apps/227/Ad19024611St3Sz703Sq112339754V0Id1/BANNIERE_360_V4.jpg\" border=\"0\" alt=\"Cliquez ici !\" title=\"Cliquez ici !\"></a>\n");
function cleanUp() {
 if (typeof __parent.swappedRefs6278038 == "undefined") {
   __parent.swappedRefs6278038 = new Array();
 }
   
 while (__parent.swappedRefs6278038.length > 0) {
   var ref = __parent.swappedRefs6278038.pop();
   if (ref != "swappedRefs6278038") {
     __parent[ref] = null;
   }
 }
}

if (typeof inFIF != "undefined" && inFIF == true) {
 __parent = window.parent;
 window.onunload = cleanUp;
 cleanUp();

 for (var ref in window) {
   if ((typeof __parent[ref] == "undefined" || __parent[ref] == null) 
         && ref != "frameElement" && ref != "event" && ref != "swappedRefs6278038" && ref != "onunload") {
     try {__parent[ref] = window[ref]; __parent.swappedRefs6278038.push(ref);} catch (e) {}
  } 
 }  
}

function __restoreOverwrittenFuncs() {
document.write = document.nativeWrite;
document.writeln = document.nativeWriteln;
}

if (typeof inFIF != "undefined" && inFIF) {
	__flushCode();
}

if (typeof inFIF != "undefined" && inFIF == true) {
try {parent.write = write;
} catch (e) {}try {parent.writeln = writeln;
} catch (e) {}try {parent.__flushCode = __flushCode;
} catch (e) {}try{__restoreOverwrittenFuncs();}catch(e){}}


