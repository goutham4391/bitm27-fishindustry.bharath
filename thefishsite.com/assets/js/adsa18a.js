!function(){var n={266:function(){var n="/api",t=!0,e=function(n){var t=[],e=[];if(n.forEach((function(n){t.push({b:n}),e.push(n.weighting)})),t.length>0)return function(n,t){for(var e,r=(e=t.reduce((function(n,t,e,r){return n+t})),Math.random()*(e-0)+0),o=0,a=0;a<n.length;a++)if(r<=(o=+(o+=t[a]).toFixed(2)))return n[a]}(t,e)};function r(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mpu";if("leaderboard"===e)var r="\n                <a href='".concat(t.bannerLink,"' class='js-track-clicks' rel='sponsored nofollow noopener'><img src='").concat(t.image,"' width='728' height='90' loading='lazy' alt=''></a>\n            ");else r="\n                <a href='".concat(t.bannerLink,"' class='js-track-clicks' rel='sponsored nofollow noopener'><img src='").concat(t.image,"' width='300' height='250' loading='lazy' alt=''></a>\n            ");n.innerHTML=r}var o=document.body.dataset.categories,a=[];o.length&&(a=o.split(","));var i={headers:{"Content-Type":"application/json",Authorization:"Bearer stW6yRUfmIrz3VlyV31TosQAwEOm_npf"},body:JSON.stringify({query:'\n    query queryGlobal {\n        globalAds: entries(\n            section: "adverts",\n            subjectFish: ":empty:",\n            speciesFish: ":empty:",\n            region: ":empty:"\n        ) {\n            title,\n            ... on adverts_advertising_Entry {\n                ad_matrix {\n                    ... on ad_matrix_inline_BlockType {\n                        typeHandle,\n                        bannerLink,\n                        image,\n                        weighting\n                    }\n                    ... on ad_matrix_top_BlockType {\n                        typeHandle,\n                        bannerLink,\n                        image,\n                        weighting\n                    }\n                    ... on ad_matrix_hub_BlockType {\n                        typeHandle,\n                        bannerLink,\n                        image,\n                        weighting\n                    }\n                }\n            }\n        }\n    }\n'}),method:"POST"},c={headers:{"Content-Type":"application/json",Authorization:"Bearer stW6yRUfmIrz3VlyV31TosQAwEOm_npf"},body:JSON.stringify({query:'\n    query queryCategory($category: [String]) {\n        categoryAds: entries(\n            section: "adverts",\n            relatedToCategories: {\n                group: ["subjectFish"],\n                slug: $category\n            }\n        ) {\n            title,\n            ... on adverts_advertising_Entry {\n                ad_matrix {\n                    ... on ad_matrix_inline_BlockType {\n                        typeHandle,\n                        bannerLink,\n                        image,\n                        weighting\n                    }\n                }\n            }\n        }\n    }\n',variables:{category:a}}),method:"POST"};a.length?(t=!1,fetch(n,c).then((function(n){return n.json()})).then((function(n){for(var t=[],o=n.data.categoryAds,a=0;a<o.length;a++)if(o[a].ad_matrix)for(var i=0;i<o[a].ad_matrix.length;i++)"inline"==o[a].ad_matrix[i].typeHandle&&t.push(o[a].ad_matrix[i]);var c=document.getElementsByClassName("js-inline-slot");if(c.length&&t.length){var s=Math.floor((c.length-1)/2),l=e(t).b;r(c[s],l)}}))):t=!0,fetch(n,i,t).then((function(n){return n.json()})).then((function(n){for(var o=[],a=[],i=[],c=n.data.globalAds,s=0;s<c.length;s++)if(c[s].ad_matrix)for(var l=0;l<c[s].ad_matrix.length;l++)"top"==c[s].ad_matrix[l].typeHandle&&o.push(c[s].ad_matrix[l]),"hub"==c[s].ad_matrix[l].typeHandle&&a.push(c[s].ad_matrix[l]),"inline"==c[s].ad_matrix[l].typeHandle&&i.push(c[s].ad_matrix[l]);if(document.getElementById("b0rk-banner-bottom")&&o.length){var u=e(o).b;r(document.getElementById("b0rk-banner-top"),u,"leaderboard"),r(document.getElementById("b0rk-banner-bottom"),u,"leaderboard")}var h=document.getElementsByClassName("js-hub-mpu-slot");if(h.length&&a.length)for(function(n){for(var t,e,r=n.length;0!==r;)e=Math.floor(Math.random()*r),t=n[r-=1],n[r]=n[e],n[e]=t}(a),s=0;s<h.length&&!(window.matchMedia("(max-width: 1050px)").matches&&s>1);s++)a[s]&&r(h[s],a[s]);if(t){var f=document.getElementsByClassName("js-inline-slot");if(f.length&&i.length){var d=Math.floor((f.length-1)/2);u=e(i).b,r(f[d],u)}}})).catch((function(n){}))},452:function(){!function(){var n=window.Element.prototype,t=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;function e(n,t){if(n&&1==n.nodeType&&t){if("string"==typeof t||1==t.nodeType)return n==t||r(n,t);if("length"in t)for(var e,o=0;e=t[o];o++)if(n==e||r(n,e))return!0}return!1}function r(n,e){if("string"!=typeof e)return!1;if(t)return t.call(n,e);e=n.parentNode.querySelectorAll(e);for(var r,o=0;r=e[o];o++)if(r==n)return!0;return!1}var o=/:(80|443)$/,a=document.createElement("a"),i={};function c(n){if(n=n&&"."!=n?n:location.href,i[n])return i[n];if(a.href=n,"."==n.charAt(0)||"/"==n.charAt(0))return c(a.href);var t="0"==(t="80"==a.port||"443"==a.port?"":a.port)?"":t,e=a.host.replace(o,"");return i[n]={hash:a.hash,host:e,hostname:a.hostname,href:a.href,origin:a.origin?a.origin:a.protocol+"//"+e,pathname:"/"==a.pathname.charAt(0)?a.pathname:"/"+a.pathname,port:t,protocol:a.protocol,search:a.search}}var s,l,u,h=Object.assign||function(n,t){for(var e=[],r=1;r<arguments.length;++r)e[r-1]=arguments[r];r=0;for(var o=e.length;r<o;r++){var a,i=Object(e[r]);for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},f={j:1,l:2,m:3,s:4,u:5,h:6,v:7,w:8,A:9,o:10},d=Object.keys(f).length;function p(n,t){var r=this;!function(n){var t=f.h;n.set("&_av","2.4.1");var e=n.get("&_au");if((e=parseInt(e||"0",16).toString(2)).length<d)for(var r=d-e.length;r;)e="0"+e,r--;t=d-t,e=e.substr(0,t)+1+e.substr(t+1),n.set("&_au",parseInt(e||"0",2).toString(16))}(n),window.addEventListener&&(this.a=h({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},t),this.f=n,this.c=this.c.bind(this),this.b={},this.a.events.forEach((function(n){r.b[n]=function(n,t,r){function o(n){var o;if(i.composed&&"function"==typeof n.composedPath)for(var a,c=n.composedPath(),s=0;a=c[s];s++)1==a.nodeType&&e(a,t)&&(o=a);else n:{if((o=n.target)&&1==o.nodeType&&t)for(o=[o].concat(function(n){for(var t=[];n&&n.parentNode&&1==n.parentNode.nodeType;)n=n.parentNode,t.push(n);return t}(o)),c=0;s=o[c];c++)if(e(s,t)){o=s;break n}o=void 0}o&&r.call(o,n,o)}var a=document,i=void 0===(i={composed:!0,g:!0})?{}:i;return a.addEventListener(n,o,i.g),{i:function(){a.removeEventListener(n,o,i.g)}}}(n,r.a.linkSelector,r.c)})))}p.prototype.c=function(n,t){var e=this;if(this.a.shouldTrackOutboundLink(t,c)){var r=t.getAttribute("href")||t.getAttribute("xlink:href"),o=c(r),a=(o={transport:"beacon",eventCategory:"Outbound Link",eventAction:n.type,eventLabel:o.href},h({},this.a.fieldsObj,function(n,t){var e=function(n){var t={};if(!n||1!=n.nodeType)return t;if(!(n=n.attributes).length)return{};for(var e,r=0;e=n[r];r++)t[e.name]=e.value;return t}(n),r={};return Object.keys(e).forEach((function(n){if(!n.indexOf(t)&&n!=t+"on"){var o=e[n];"true"==o&&(o=!0),"false"==o&&(o=!1),n=function(n){return n.replace(/[\-\_]+(\w?)/g,(function(n,t){return t.toUpperCase()}))}(n.slice(t.length)),r[n]=o}})),r}(t,this.a.attributePrefix))),i=function(n,t,e,r,o,a){if("function"==typeof r){var i=e.get("buildHitTask");return{buildHitTask:function(e){e.set(n,null,!0),e.set(t,null,!0),r(e,o,a),i(e)}}}return h({},n,t)}(o,a,this.f,this.a.hitFilter,t,n);navigator.sendBeacon||"click"!=n.type||"_blank"==t.target||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||1<n.which?this.f.send("event",i):window.addEventListener("click",(function t(){if(window.removeEventListener("click",t),!n.defaultPrevented){n.preventDefault();var o=i.hitCallback;i.hitCallback=function(n){function t(){e||(e=!0,n())}var e=!1;return setTimeout(t,2e3),t}((function(){"function"==typeof o&&o(),location.href=r}))}e.f.send("event",i)}))}},p.prototype.shouldTrackOutboundLink=function(n,t){return(t=t(n=n.getAttribute("href")||n.getAttribute("xlink:href"))).hostname!=location.hostname&&"http"==t.protocol.slice(0,4)},p.prototype.remove=function(){var n=this;Object.keys(this.b).forEach((function(t){n.b[t].i()}))},s="outboundLinkTracker",l=p,u=window.GoogleAnalyticsObject||"ga",window[u]=window[u]||function(n){for(var t=[],e=0;e<arguments.length;++e)t[e-0]=arguments[e];(window[u].q=window[u].q||[]).push(t)},window.gaDevIds=window.gaDevIds||[],0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo"),window[u]("provide",s,l),window.gaplugins=window.gaplugins||{},window.gaplugins[s.charAt(0).toUpperCase()+s.slice(1)]=l}()}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,e),a.exports}e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){"use strict";e(266),e(452)}()}();