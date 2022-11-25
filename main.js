(()=>{"use strict";var n={788:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".menu-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(500px,1fr));\n    grid-auto-rows: 250px;\n    width: max(90%,500px);\n    background-color: var(--background-color);   \n    gap: 15px;\n    padding: 20px;\n    margin: auto;\n}\n\n.menu-item{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    box-shadow: 3px 3px 3px 3px rgb(77, 77, 53);\n}\n\n.dish-name{\n    font-weight: bold;\n    font-size: 25px;\n    color: rgb(204, 211, 115);\n}\n\n.price{\n    color: rgb(56, 7, 7);\n}",""]);const c=i},219:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".profile-container{\n    display: flex;\n    height: 400px;\n    width: auto;    \n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\n.profile-picture{\n    height: 100%;\n}",""]);const c=i},679:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".baratie-image-container{\n    display: flex;\n    justify-content: center;\n}\n.baratie-image{\n    width: 450px;\n}",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"*{\n    margin: 0;\n    padding: 0;\n    color: rgb(6, 8, 27);\n    --background-color: rgb(102, 196, 149);   \n}\n\nbody{\n    background-color: var(--background-color);\n}\n\n.content{\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n\n.container{\n    display: flex;\n    flex-direction: column;\n    width: max(90%,500px);\n\n    padding: 20px;\n    gap: 30px;\n    padding-top: 20px;\n    align-self: center;\n}\n\n.nav-bar{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 20px;  \n    box-shadow: 2px 2px 2px 2px rgb(77, 77, 53);\n}\n    \n.logo{\n    font-size: x-large;\n}\n.nav-bar a{\n    text-decoration: none;\n}\n\n.tab-container{\n    display: flex;\n}\n\n.tab-container button{\n    padding: 5px;\n    padding: 10px;\n    background-color: var(--background-color);   \n    border: none;\n    font-weight: bolder;\n}\n\n.tab-container button:hover{\n    box-shadow: 2px 2px 2px 2px rgb(77, 77, 53);\n\n    margin-right: 20px;\n}\n.main-content{\n    word-wrap: break-word;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var d=r(n,a),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,function(){const n=document.querySelector(".content"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("button"),i=document.createElement("button"),c=document.createElement("button"),d=document.createElement("div");n.appendChild(e),e.appendChild(t),e.appendChild(d),t.appendChild(r),t.appendChild(a),a.appendChild(o),a.appendChild(i),a.appendChild(c),n.appendChild(d),d.classList.add("main-content"),e.classList.add("container"),t.classList.add("nav-bar"),r.classList.add("logo"),r.insertAdjacentText("afterbegin","Logo"),a.classList.add("tab-container"),o.textContent="Menu",i.textContent="About",c.textContent="Contact"}();var h=t(788),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var v=t(219),b={};b.styleTagTransform=u(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const x=t.p+"ce5402095da57a114682.png";var y=t(679),C={};C.styleTagTransform=u(),C.setAttributes=d(),C.insert=i().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=l(),e()(y.Z,C),y.Z&&y.Z.locals&&y.Z.locals;const E=t.p+"d7dc75c0a0409706cc60.png";!function(){const n=document.querySelector(".tab-container button:nth-child(1)"),e=document.querySelector(".main-content");n.addEventListener("click",(()=>{for(;e.firstElementChild;)e.firstElementChild.remove();const n=document.createElement("div");let t=1;for(let r=0;r<6;r++){const a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");n.classList.add("menu-container"),a.classList.add("menu-item"),o.classList.add("dish-name"),i.classList.add("price"),e.appendChild(n),n.appendChild(a),a.appendChild(o),a.appendChild(i),o.insertAdjacentText("afterbegin",`Item: ${r+1}`),i.insertAdjacentText("afterbegin",`Cost: ${t}$`),t+=2}}))}(),function(){const n=document.querySelector(".tab-container button:nth-child(2)"),e=document.querySelector(".main-content");n.addEventListener("click",(()=>{for(;e.firstElementChild;)e.firstElementChild.remove();const n=document.createElement("img");n.src=x;const t=document.createElement("div"),r=document.createElement("div");e.appendChild(t),t.appendChild(n),t.appendChild(r),t.classList.add("profile-container"),n.classList.add("profile-picture"),r.insertAdjacentText("afterbegin","Sanji")}))}(),function(){const n=document.querySelector(".tab-container button:nth-child(3)"),e=document.querySelector(".main-content");n.addEventListener("click",(()=>{for(;e.firstElementChild;)e.firstElementChild.remove();const n=document.createElement("img"),t=document.createElement("div");n.src=E,n.classList.add("baratie-image"),e.appendChild(t),t.appendChild(n),t.classList.add("baratie-image-container")}))}()})()})();