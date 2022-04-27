(function(){"use strict";var e={654:function(e,n,t){var l=t(963),a=t(252);function o(e,n,t,l,o,r){const s=(0,a.up)("Test");return(0,a.wg)(),(0,a.j4)(s)}const r={style:{"padding-left":"20px","padding-top":"20px"}};function s(e,n,t,l,o,s){const c=(0,a.up)("XmlViewer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{onClick:n[0]||(n[0]=(...e)=>l.toggle&&l.toggle(...e))},"Toggle Theme"),(0,a._)("div",r,[(0,a.Wm)(c,{xml:l.xml,theme:l.theme},null,8,["xml","theme"])])],64)}var c=t(577);function i(e,n,t,l,o,r){const s=(0,a.up)("XmlElement");return(0,a.wg)(),(0,a.iD)("div",{class:(0,c.C_)(e.theme)},[(0,a.Wm)(s,{node:e.rootNode},null,8,["node"])],2)}const u=e=>((0,a.dD)("data-v-d071a178"),e=e(),(0,a.Cn)(),e),d={class:"xml-element"},m=u((()=>(0,a._)("span",{class:"bracket"},"<",-1))),p={key:2,class:"bracket"},g={key:3,class:"dots"},v=u((()=>(0,a._)("span",{class:"bracket"},">",-1))),f={key:0,class:"child-elements"},w={key:1},k=u((()=>(0,a._)("span",{class:"bracket"},"<",-1))),h=u((()=>(0,a._)("span",{class:"bracket"},">",-1)));function b(e,n,t,l,o,r){const s=(0,a.up)("CaretDown"),c=(0,a.up)("CaretRight"),i=(0,a.up)("XmlElementName"),u=(0,a.up)("XmlAttributeLine"),b=(0,a.up)("XmlElement",!0),C=(0,a.up)("XmlElementContent"),_=(0,a.up)("XmlCDataSection"),D=(0,a.up)("XmlRemark");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",null,[e.selfClosing?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.collapsed?((0,a.wg)(),(0,a.j4)(c,{key:1,class:"caret",onClick:e.toggleCollapsed},null,8,["onClick"])):((0,a.wg)(),(0,a.j4)(s,{key:0,class:"caret",onClick:e.toggleCollapsed},null,8,["onClick"]))],64)),m,(0,a.Wm)(i,{class:"clickable",name:e.name,onClick:e.toggleCollapsed},null,8,["name","onClick"]),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(u,{key:1,attributes:e.attributes},null,8,["attributes"])),e.selfClosing&&!e.collapsed?((0,a.wg)(),(0,a.iD)("span",p," /")):(0,a.kq)("",!0),e.selfClosing&&e.collapsed?((0,a.wg)(),(0,a.iD)("span",g," ...")):(0,a.kq)("",!0),v]),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.childElements,((e,n)=>((0,a.wg)(),(0,a.j4)(b,{key:`e${n}`,node:e},null,8,["node"])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.childContents,((e,n)=>((0,a.wg)(),(0,a.j4)(C,{key:`t${n}`,node:e},null,8,["node"])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cdataSections,((e,n)=>((0,a.wg)(),(0,a.j4)(_,{key:`c${n}`,cdataSection:e},null,8,["cdataSection"])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.remarks,((e,n)=>((0,a.wg)(),(0,a.j4)(D,{key:`r${n}`,remark:e},null,8,["remark"])))),128))])])),e.selfClosing||e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",w,[k,(0,a.Wm)(i,{name:e.name,closing:!0},null,8,["name"]),h]))])}var C=t(262);const _={key:0,class:"bracket"};function D(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("span",null,[e.closing?((0,a.wg)(),(0,a.iD)("span",_,"/")):(0,a.kq)("",!0),(0,a._)("span",{onClick:n[0]||(n[0]=(...n)=>e.onClick&&e.onClick(...n)),class:"element-name"},(0,c.zw)(e.name),1)])}var y=(0,a.aZ)({props:{name:String,closing:Boolean},setup(e,{emit:n}){const t=()=>{n("click")};return{onClick:t}},emits:["click"]}),x=t(744);const X=(0,x.Z)(y,[["render",D],["__scopeId","data-v-5a0ac6a5"]]);var Z=X;const A={class:"content"};function j(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",A,(0,c.zw)(e.content),1)])}var S=(0,a.aZ)({props:{node:Text},setup(e){const n=(0,a.Fl)((()=>e.node.textContent));return{content:n}}});const E=(0,x.Z)(S,[["render",j],["__scopeId","data-v-75f773a5"]]);var F=E;function T(e,n,t,l,o,r){const s=(0,a.up)("XmlAttribute");return(0,a.wg)(),(0,a.iD)("span",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.attributes,((e,n)=>((0,a.wg)(),(0,a.j4)(s,{key:n,attribute:e},null,8,["attribute"])))),128))])}const O=e=>((0,a.dD)("data-v-3c430bce"),e=e(),(0,a.Cn)(),e),H=O((()=>(0,a._)("span",{class:"no-margin-padding assignment"},"=",-1))),q=O((()=>(0,a._)("span",{class:"no-margin-padding quote"},'"',-1))),N=O((()=>(0,a._)("span",{class:"no-margin-padding quote"},'"',-1)));function z(e,n,t,l,o,r){const s=(0,a.up)("XmlAttributeName"),c=(0,a.up)("XmlAttributeValue");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(s,{name:e.name,class:"margin-left-sm"},null,8,["name"]),H,q,(0,a.Wm)(c,{value:e.value,class:"no-margin-padding"},null,8,["value"]),N])}const I={class:"attribute-name"};function Y(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("span",null,[(0,a._)("span",I,(0,c.zw)(e.name),1)])}var W=(0,a.aZ)({props:{name:String}});const K=(0,x.Z)(W,[["render",Y],["__scopeId","data-v-17010745"]]);var R=K;const P={class:"attribute-value"};function V(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("span",null,[(0,a._)("span",P,(0,c.zw)(e.value),1)])}var $=(0,a.aZ)({props:{value:String}});const B=(0,x.Z)($,[["render",V],["__scopeId","data-v-36c46cbc"]]);var L=B,U=(0,a.aZ)({name:"XmlElement",components:{XmlAttributeName:R,XmlAttributeValue:L},props:{attribute:Attr},setup(e){const n=(0,a.Fl)((()=>e.attribute.name)),t=(0,a.Fl)((()=>e.attribute.value));return{name:n,value:t}}});const M=(0,x.Z)(U,[["render",z],["__scopeId","data-v-3c430bce"]]);var G=M,J=(0,a.aZ)({name:"XmlElement",components:{XmlAttribute:G},props:{attributes:Array}});const Q=(0,x.Z)(J,[["render",T]]);var ee=Q;const ne=e=>((0,a.dD)("data-v-0fce587a"),e=e(),(0,a.Cn)(),e),te={class:"content"},le=ne((()=>(0,a._)("span",null,"<![CDATA[",-1))),ae={class:"inline no-margin-padding"},oe=ne((()=>(0,a._)("span",null,"]]>",-1)));function re(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",te,[le,(0,a._)("pre",ae,(0,c.zw)(e.content),1),oe])])}var se=(0,a.aZ)({props:{cdataSection:Text},setup(e){const n=(0,a.Fl)((()=>e.cdataSection.textContent));return{content:n}}});const ce=(0,x.Z)(se,[["render",re],["__scopeId","data-v-0fce587a"]]);var ie=ce;const ue={class:"content"},de=(0,a.Uk)(" \x3c!-- "),me={class:"inline no-margin-padding"},pe=(0,a.Uk)(" --\x3e ");function ge(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",ue,[de,(0,a._)("pre",me,(0,c.zw)(e.content),1),pe])])}var ve=(0,a.aZ)({props:{remark:Comment},setup(e){const n=(0,a.Fl)((()=>e.remark.textContent));return{content:n}}});const fe=(0,x.Z)(ve,[["render",ge],["__scopeId","data-v-7bc574c6"]]);var we=fe;const ke={width:"1em",height:"1em",viewBox:"0 0 24 24"},he=(0,a._)("path",{fill:"currentColor",d:"m11.998 17l7-8h-14z"},null,-1),be=[he];function Ce(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("svg",ke,be)}var _e={name:"CaretDown"};const De=(0,x.Z)(_e,[["render",Ce]]);var ye=De;const xe={width:"1em",height:"1em",viewBox:"0 0 24 24"},Xe=(0,a._)("path",{fill:"currentColor",d:"m9 19l8-7l-8-7z"},null,-1),Ze=[Xe];function Ae(e,n,t,l,o,r){return(0,a.wg)(),(0,a.iD)("svg",xe,Ze)}var je={name:"CaretRight"};const Se=(0,x.Z)(je,[["render",Ae]]);var Ee=Se,Fe=(0,a.aZ)({name:"XmlElement",components:{XmlElementName:Z,XmlElementContent:F,XmlAttributeLine:ee,XmlCDataSection:ie,XmlRemark:we,CaretDown:ye,CaretRight:Ee},props:{node:Element},setup(e){const n=(0,C.iH)(!1),t=(0,a.Fl)((()=>e.node.nodeName)),l=(0,a.Fl)((()=>Array.from(e.node.childNodes))),o=(0,a.Fl)((()=>l.value&&l.value.filter((e=>1===e.nodeType)))),r=(0,a.Fl)((()=>l.value&&l.value.filter((e=>3===e.nodeType)))),s=(0,a.Fl)((()=>l.value&&l.value.filter((e=>4===e.nodeType)))),c=(0,a.Fl)((()=>l.value&&l.value.filter((e=>8===e.nodeType)))),i=(0,a.Fl)((()=>e.node.attributes&&Array.from(e.node.attributes)||[])),u=!o.value.length&&!r.value.length&&!s.value.length&&!c.value.length,d=()=>{n.value=!n.value};return{name:t,childElements:o,childContents:r,attributes:i,cdataSections:s,remarks:c,selfClosing:u,collapsed:n,toggleCollapsed:d}}});const Te=(0,x.Z)(Fe,[["render",b],["__scopeId","data-v-d071a178"]]);var Oe=Te,He=(0,a.aZ)({components:{XmlElement:Oe},props:{xml:String,theme:{type:String,default:"light"}},setup(e){const n=new DOMParser,t=(0,C.iH)(),l=e=>{const l=n.parseFromString(e,"text/xml"),a=l.childNodes[0];t.value=a};return(0,a.YP)((()=>e.xml),(e=>{l(e)})),l(e.xml),{rootNode:t}}});const qe=(0,x.Z)(He,[["render",i]]);var Ne=qe,ze='<?xml version="1.0" encoding="utf-8" ?>\n<document>\n    <node numeric="123" boolean="true" other-boolean="false" text="some text" />\n    <node-with-content>\n        some content\n        \x3c!-- some remark--\x3e\n    </node-with-content>\n    <node-with-cdata>\n    <![CDATA[\n        cdata content here\n    ]]>\n    </node-with-cdata>\n</document>',Ie={components:{XmlViewer:Ne},setup(){const e=(0,C.iH)(ze),n=(0,C.iH)("light");function t(){document.querySelector("body").style.backgroundColor="light"===n.value?"#111":"#fdfdfd",n.value="light"===n.value?"dark":"light"}return{xml:e,theme:n,toggle:t}}};const Ye=(0,x.Z)(Ie,[["render",s]]);var We=Ye,Ke={name:"App",components:{Test:We}};const Re=(0,x.Z)(Ke,[["render",o]]);var Pe=Re;(0,l.ri)(Pe).mount("#app")}},n={};function t(l){var a=n[l];if(void 0!==a)return a.exports;var o=n[l]={exports:{}};return e[l](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,l,a,o){if(!l){var r=1/0;for(u=0;u<e.length;u++){l=e[u][0],a=e[u][1],o=e[u][2];for(var s=!0,c=0;c<l.length;c++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[c])}))?l.splice(c--,1):(s=!1,o<r&&(r=o));if(s){e.splice(u--,1);var i=a();void 0!==i&&(n=i)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,a,o]}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var a,o,r=l[0],s=l[1],c=l[2],i=0;if(r.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var u=c(t)}for(n&&n(l);i<r.length;i++)o=r[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},l=self["webpackChunkvue3_xml_viewer"]=self["webpackChunkvue3_xml_viewer"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(654)}));l=t.O(l)})();
//# sourceMappingURL=app.8a9f3011.js.map