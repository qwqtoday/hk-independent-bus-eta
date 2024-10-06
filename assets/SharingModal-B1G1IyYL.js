import{g as oe,r as $,a8 as ue,a5 as se,a3 as ce,a4 as le,b5 as fe,am as K,bf as he,j as S,a9 as te,ab as re}from"./index-3ZrRw547.js";import{C as me}from"./TimeReport-DXs2yIAD.js";import{u as de,$ as ge,a0 as pe}from"./App-BbGSVcmn.js";import{S as ve}from"./Snackbar-CUVcwQrS.js";import"./CircularProgress-Rq-XzyyU.js";var ae={exports:{}};(function(b){(function(h){var i=k(),y=W(),R=Q(),G=Y(),M={imagePlaceholder:void 0,cacheBust:!1},d={toSvg:B,toPng:v,toJpeg:P,toBlob:E,toPixelData:p,impl:{fontFaces:R,images:G,util:i,inliner:y,options:{}}};b.exports=d;function B(n,e){return e=e||{},H(e),Promise.resolve(n).then(function(a){return V(a,e.filter,!0)}).then(z).then(_).then(r).then(function(a){return J(a,e.width||i.width(n),e.height||i.height(n))});function r(a){return e.bgcolor&&(a.style.backgroundColor=e.bgcolor),e.width&&(a.style.width=e.width+"px"),e.height&&(a.style.height=e.height+"px"),e.style&&Object.keys(e.style).forEach(function(l){a.style[l]=e.style[l]}),a}}function p(n,e){return N(n,e||{}).then(function(r){return r.getContext("2d").getImageData(0,0,i.width(n),i.height(n)).data})}function v(n,e){return N(n,e||{}).then(function(r){return r.toDataURL()})}function P(n,e){return e=e||{},N(n,e).then(function(r){return r.toDataURL("image/jpeg",e.quality||1)})}function E(n,e){return N(n,e||{}).then(i.canvasToBlob)}function H(n){typeof n.imagePlaceholder>"u"?d.impl.options.imagePlaceholder=M.imagePlaceholder:d.impl.options.imagePlaceholder=n.imagePlaceholder,typeof n.cacheBust>"u"?d.impl.options.cacheBust=M.cacheBust:d.impl.options.cacheBust=n.cacheBust}function N(n,e){return B(n,e).then(i.makeImage).then(i.delay(100)).then(function(a){var l=r(n);return l.getContext("2d").drawImage(a,0,0),l});function r(a){var l=document.createElement("canvas");if(l.width=e.width||i.width(a),l.height=e.height||i.height(a),e.bgcolor){var c=l.getContext("2d");c.fillStyle=e.bgcolor,c.fillRect(0,0,l.width,l.height)}return l}}function V(n,e,r){if(!r&&e&&!e(n))return Promise.resolve();return Promise.resolve(n).then(a).then(function(o){return l(n,o,e)}).then(function(o){return c(n,o)});function a(o){return o instanceof HTMLCanvasElement?i.makeImage(o.toDataURL()):o.cloneNode(!1)}function l(o,u,C){var I=o.childNodes;if(I.length===0)return Promise.resolve(u);return g(u,i.asArray(I),C).then(function(){return u});function g(X,A,x){var T=Promise.resolve();return A.forEach(function(F){T=T.then(function(){return V(F,x)}).then(function(j){j&&X.appendChild(j)})}),T}}function c(o,u){if(!(u instanceof Element))return u;return Promise.resolve().then(C).then(I).then(g).then(X).then(function(){return u});function C(){A(window.getComputedStyle(o),u.style);function A(x,T){x.cssText?T.cssText=x.cssText:F(x,T);function F(j,D){i.asArray(j).forEach(function(t){D.setProperty(t,j.getPropertyValue(t),j.getPropertyPriority(t))})}}}function I(){[":before",":after"].forEach(function(x){A(x)});function A(x){var T=window.getComputedStyle(o,x),F=T.getPropertyValue("content");if(F===""||F==="none")return;var j=i.uid();u.className=u.className+" "+j;var D=document.createElement("style");D.appendChild(t(j,x,T)),u.appendChild(D);function t(s,m,f){var w="."+s+":"+m,U=f.cssText?Z(f):ee(f);return document.createTextNode(w+"{"+U+"}");function Z(L){var O=L.getPropertyValue("content");return L.cssText+" content: "+O+";"}function ee(L){return i.asArray(L).map(O).join("; ")+";";function O(q){return q+": "+L.getPropertyValue(q)+(L.getPropertyPriority(q)?" !important":"")}}}}}function g(){o instanceof HTMLTextAreaElement&&(u.innerHTML=o.value),o instanceof HTMLInputElement&&u.setAttribute("value",o.value)}function X(){u instanceof SVGElement&&(u.setAttribute("xmlns","http://www.w3.org/2000/svg"),u instanceof SVGRectElement&&["width","height"].forEach(function(A){var x=u.getAttribute(A);x&&u.style.setProperty(A,x)}))}}}function z(n){return R.resolveAll().then(function(e){var r=document.createElement("style");return n.appendChild(r),r.appendChild(document.createTextNode(e)),n})}function _(n){return G.inlineAll(n).then(function(){return n})}function J(n,e,r){return Promise.resolve(n).then(function(a){return a.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(a)}).then(i.escapeXhtml).then(function(a){return'<foreignObject x="0" y="0" width="100%" height="100%">'+a+"</foreignObject>"}).then(function(a){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+a+"</svg>"}).then(function(a){return"data:image/svg+xml;charset=utf-8,"+a})}function k(){return{escape:X,parseExtension:e,mimeType:r,dataAsUrl:g,isDataUrl:a,canvasToBlob:c,resolveUrl:o,getAndEncode:I,uid:u(),delay:A,asArray:x,escapeXhtml:T,makeImage:C,width:F,height:j};function n(){var t="application/font-woff",s="image/jpeg";return{woff:t,woff2:t,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:s,jpeg:s,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function e(t){var s=/\.([^\.\/]*?)$/g.exec(t);return s?s[1]:""}function r(t){var s=e(t).toLowerCase();return n()[s]||""}function a(t){return t.search(/^(data:)/)!==-1}function l(t){return new Promise(function(s){for(var m=window.atob(t.toDataURL().split(",")[1]),f=m.length,w=new Uint8Array(f),U=0;U<f;U++)w[U]=m.charCodeAt(U);s(new Blob([w],{type:"image/png"}))})}function c(t){return t.toBlob?new Promise(function(s){t.toBlob(s)}):l(t)}function o(t,s){var m=document.implementation.createHTMLDocument(),f=m.createElement("base");m.head.appendChild(f);var w=m.createElement("a");return m.body.appendChild(w),f.href=s,w.href=t,w.href}function u(){var t=0;return function(){return"u"+s()+t++;function s(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function C(t){return new Promise(function(s,m){var f=new Image;f.onload=function(){s(f)},f.onerror=m,f.src=t})}function I(t){var s=3e4;return d.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime()),new Promise(function(m){var f=new XMLHttpRequest;f.onreadystatechange=Z,f.ontimeout=ee,f.responseType="blob",f.timeout=s,f.open("GET",t,!0),f.send();var w;if(d.impl.options.imagePlaceholder){var U=d.impl.options.imagePlaceholder.split(/,/);U&&U[1]&&(w=U[1])}function Z(){if(f.readyState===4){if(f.status!==200){w?m(w):L("cannot fetch resource: "+t+", status: "+f.status);return}var O=new FileReader;O.onloadend=function(){var q=O.result.split(/,/)[1];m(q)},O.readAsDataURL(f.response)}}function ee(){w?m(w):L("timeout of "+s+"ms occured while fetching resource: "+t)}function L(O){console.error(O),m("")}})}function g(t,s){return"data:"+s+";base64,"+t}function X(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function A(t){return function(s){return new Promise(function(m){setTimeout(function(){m(s)},t)})}}function x(t){for(var s=[],m=t.length,f=0;f<m;f++)s.push(t[f]);return s}function T(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")}function F(t){var s=D(t,"border-left-width"),m=D(t,"border-right-width");return t.scrollWidth+s+m}function j(t){var s=D(t,"border-top-width"),m=D(t,"border-bottom-width");return t.scrollHeight+s+m}function D(t,s){var m=window.getComputedStyle(t).getPropertyValue(s);return parseFloat(m.replace("px",""))}}function W(){var n=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:l,shouldProcess:e,impl:{readUrls:r,inline:a}};function e(c){return c.search(n)!==-1}function r(c){for(var o=[],u;(u=n.exec(c))!==null;)o.push(u[1]);return o.filter(function(C){return!i.isDataUrl(C)})}function a(c,o,u,C){return Promise.resolve(o).then(function(g){return u?i.resolveUrl(g,u):g}).then(C||i.getAndEncode).then(function(g){return i.dataAsUrl(g,i.mimeType(o))}).then(function(g){return c.replace(I(o),"$1"+g+"$3")});function I(g){return new RegExp(`(url\\(['"]?)(`+i.escape(g)+`)(['"]?\\))`,"g")}}function l(c,o,u){if(C())return Promise.resolve(c);return Promise.resolve(c).then(r).then(function(I){var g=Promise.resolve(c);return I.forEach(function(X){g=g.then(function(A){return a(A,X,o,u)})}),g});function C(){return!e(c)}}}function Q(){return{resolveAll:n,impl:{readAll:e}};function n(){return e().then(function(r){return Promise.all(r.map(function(a){return a.resolve()}))}).then(function(r){return r.join(`
`)})}function e(){return Promise.resolve(i.asArray(document.styleSheets)).then(a).then(r).then(function(c){return c.map(l)});function r(c){return c.filter(function(o){return o.type===CSSRule.FONT_FACE_RULE}).filter(function(o){return y.shouldProcess(o.style.getPropertyValue("src"))})}function a(c){var o=[];return c.forEach(function(u){try{i.asArray(u.cssRules||[]).forEach(o.push.bind(o))}catch(C){console.log("Error while reading CSS rules from "+u.href,C.toString())}}),o}function l(c){return{resolve:function(){var u=(c.parentStyleSheet||{}).href;return y.inlineAll(c.cssText,u)},src:function(){return c.style.getPropertyValue("src")}}}}}function Y(){return{inlineAll:e,impl:{newImage:n}};function n(r){return{inline:a};function a(l){return i.isDataUrl(r.src)?Promise.resolve():Promise.resolve(r.src).then(l||i.getAndEncode).then(function(c){return i.dataAsUrl(c,i.mimeType(r.src))}).then(function(c){return new Promise(function(o,u){r.onload=o,r.onerror=u,r.src=c})})}}function e(r){if(!(r instanceof Element))return Promise.resolve(r);return a(r).then(function(){return r instanceof HTMLImageElement?n(r).inline():Promise.all(i.asArray(r.childNodes).map(function(l){return e(l)}))});function a(l){var c=l.style.getPropertyValue("background");return c?y.inlineAll(c).then(function(o){l.style.setProperty("background",o,l.style.getPropertyPriority("background"))}).then(function(){return l}):Promise.resolve(l)}}}})()})(ae);var ye=ae.exports;const xe=oe(ye);var we={format:"image/png",quality:.92,width:void 0,height:void 0,Canvas:void 0,crossOrigin:void 0},be=function(b,h){return b===void 0&&(b=[]),h===void 0&&(h={}),new Promise(function(i){h=Object.assign({},we,h);var y=h.Canvas?new h.Canvas:window.document.createElement("canvas"),R=h.Image||window.Image,G=b.map(function(d){return new Promise(function(B,p){d.constructor.name!=="Object"&&(d={src:d});var v=new R;v.crossOrigin=h.crossOrigin,v.onerror=function(){return p(new Error("Couldn't load image"))},v.onload=function(){return B(Object.assign({},d,{img:v}))},v.src=d.src})}),M=y.getContext("2d");i(Promise.all(G).then(function(d){var B=function(p){return h[p]||Math.max.apply(Math,d.map(function(v){return v.img[p]}))};return y.width=B("width"),y.height=B("height"),d.forEach(function(p){return M.globalAlpha=p.opacity?p.opacity:1,M.drawImage(p.img,p.x||0,p.y||0)}),h.Canvas&&h.format==="image/jpeg"?new Promise(function(p,v){y.toDataURL(h.format,{quality:h.quality,progressive:!1},function(P,E){if(P){v(P);return}p(E)})}):y.toDataURL(h.format,h.quality)}))})};const ke=({routeId:b,seq:h=-1,stopId:i,event:y})=>{const[{isOpen:R,isCopied:G},M]=$.useState(Pe),{AppTitle:d,db:{routeList:B,stopList:p}}=$.useContext(ue),{colorMode:v}=$.useContext(se),{t:P}=ce(),E=le(),[H,N]=$.useState(""),{id:V}=de(),{route:z,dest:_}=B[b],J=p[i],k=$.useCallback(n=>M(e=>({...e,isOpen:n})),[]),W=$.useCallback(n=>M(e=>({...e,isCopied:n})),[]);$.useEffect(()=>(R&&Promise.all([ne("route-eta-header",v),ne("route-map",v),ne(`stop-${h}`,v)]).then(n=>{let e=0;return be(n.filter(([r])=>r).map(([r,a])=>(e+=a,{src:r,x:0,y:e-a})),{height:e})}).then(n=>{N(n)}),()=>{N("")}),[R,v,h]),$.useEffect(()=>{y&&k(!0)},[k,y]);const Q=$.useCallback(()=>{fe(`https://${window.location.hostname}/${E}/route/${V}/${i}%2C${h}`,`${h+1}. ${K(J.name[E])} - ${z} ${P("往")} ${K(_[E])} - ${P(d)}`).then(()=>{navigator.clipboard&&W(!0)}).finally(()=>{k(!1)})},[d,V,_,P,W,E,h,J.name,i,z,k]),Y=$.useCallback(()=>{he(H,`https://${window.location.hostname}/${E}/route/${V}/${i}%2C${h}`,`${h+1}. ${K(J.name[E])} - ${z} ${P("往")} ${K(_[E])} - https://hkbus.app/`).then(()=>{navigator.clipboard&&W(!0)}).finally(()=>{k(!1)})},[_,W,k,J.name,i,P,H,E,V,h,z]);return S.jsxs(S.Fragment,{children:[S.jsx(ge,{sx:Ce,onClose:()=>k(!1),open:R,children:S.jsx(pe,{maxWidth:"xs",sx:Ee,fixed:!0,children:S.jsxs(te,{sx:Ae,children:[S.jsx(te,{sx:Se,children:H?S.jsx("img",{src:H,style:{objectFit:"contain",width:396,height:400},alt:""}):S.jsx(me,{color:"inherit"})}),S.jsxs(te,{sx:Te,children:[S.jsx(re,{sx:ie,onClick:Q,children:P("以鏈結分享")}),S.jsx(re,{sx:ie,onClick:Y,disabled:H==="",children:P("以圖片分享")})]})]})})}),S.jsx(ve,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:G,autoHideDuration:1500,onClose:()=>{W(!1)},message:P("已複製到剪貼簿")})]})},ne=(b,h)=>{const i=document.getElementById(b);return i?xe.toPng(i,{bgcolor:h==="light"?"#fedb00":"#000"}).then(y=>[y,i.clientHeight,i.clientWidth]):Promise.resolve(["",0,0])},Pe={isOpen:!1,isCopied:!1},Ce={display:"flex",alignItems:"center"},Ee={display:"flex",justifyContent:"center",outline:"none"},Ae={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,background:b=>b.palette.background.default},Se={display:"flex",alignItems:"center",justifyContent:"center",height:400,width:"100%"},Te={display:"flex",width:"100%",backgroundColor:b=>b.palette.background.default},ie={flex:1,border:"1px solid rgba(255, 255, 255, 0.3)"};export{ke as default};
