/* p5js.org */
!function(a,b){var c=b.getElementById("search_form"),d=b.getElementById("search_field"),e=function(){c.className="form__open",d.focus()},f=function(a){"focusout"===a.type?c.className="":""===d.value&&(c.className="")};c.addEventListener?(c.addEventListener("mouseover",e,!1),c.addEventListener("mouseout",f,!1),c.addEventListener("focusout",f,!1)):(c.attachEvent("onmouseover",e),c.attachEvent("onmouseout",f),c.attachEvent("onfocusout",f))}(window,document),function(a,b,c){if("p5js.org"!==window.location.hostname){var d=function(a){var b="p5js";try{return a.localStorage.setItem(b,b),a.localStorage.removeItem(b),!0}catch(a){return!1}},e=d(a),f=function(a){var b=a.navigator.languages&&a.navigator.languages[0]||a.navigator.language||a.navigator.userLanguage;b=b.split("-")[0];for(var d=0,e=c;d<e;d++)if(b==c[d])return c[d];return"en"},g=f(a),h=function(a){if("/"==a.location.pathname==!1)for(var b=0,d=c.length;b<d;b++)if(a.location.pathname.indexOf("/"+c[b]+"/")!==-1)return c[b];return"en"},i=String(a.location.pathname),j=h(a),k="/"==a.location.pathname,l="en";if(e)if(null!==a.localStorage.getItem("lang")){var m=a.localStorage.getItem("lang");m!==j?(i="en"==m?"/"+i.replace("/"+j+"/",""):"/"+m+i,a.location=i):l=m}else k&&g!=j&&(i="/"+g,a.location=i);else l=h();a.lang=l}var n=b.getElementsByClassName("js-lang"),o=null;if("en"!=a.lang)for(var p=0,q=n.length;p<q;p++)o=n[p],o.innerHTML=o.getAttribute("data-"+a.lang);for(var r=b.getElementById("i18n-btn").getElementsByTagName("button"),s="undefined"!=typeof b.addEventListener?"click":"onclick",t=function(b){var d=this.getAttribute("data-lang");if("en"==d)for(var f=0,g=c.length;f<g;f++)"en"!=c[f]&&(i="/"+i.replace("/"+c[f]+"/",""));else i="/"+d+i;e&&a.localStorage.setItem("lang",d),a.location=i},p=0,q=r.length;p<q;p++){var u=r[p].getAttribute("data-lang");j==u?r[p].setAttribute("disabled","disabled"):"click"===s?r[p].addEventListener(s,t,!1):r[p].attachEvent(s,t)}var v=document.getElementById("i18n-btn");"p5js.org"===window.location.hostname?v.parentNode.removeChild(v):v.style.display="block"}(window,document,["en","es"]),function(a,b,c,d,e,f){var g=a.location.pathname.split("/").filter(function(a){return""!==a}),h=function(a){"undefined"==typeof jQuery&&a.push("/assets/js/vendor/jquery-1.9.1.min.js");for(var c=0,d=a.length;c<d;c++){var e=b.createElement("script");e.setAttribute("src",a[c]),e.setAttribute("type","text/javascript"),b.getElementsByTagName("body")[0].appendChild(e)}},i=function(){h(d),a.addEventListener("load",function(){h(e)},!0)};if(g.length>1)i();else if(1==g.length)for(var j=0,k=c.length;j<k;j++)if("en"!=c[j]&&g[0]!=c[j]){i();break}}(window,document,["en","es"],["/assets/js/p5.all.js"],["/assets/js/all.js"]);
//# sourceMappingURL=maps/init.js.map