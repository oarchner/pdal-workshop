import{t as y}from"./array-2ff2c7a6-ffeda358.js";import{E as i,C as v}from"./constant-2fe7eae5-45b4460e.js";import{d as b,ai as d,ak as h,ap as j}from"./mermaid.esm.min-874e93c9.js";function O(t){return t[0]}function x(t){return t[1]}function F(t,o){var r=i(!0),f=null,l=b,u=null;t=typeof t=="function"?t:t===void 0?O:i(t),o=typeof o=="function"?o:o===void 0?x:i(o);function e(n){var c,g=(n=y(n)).length,p,a=!1,s;for(f==null&&(u=l(s=v())),c=0;c<=g;++c)!(c<g&&r(p=n[c],c,n))===a&&((a=!a)?u.lineStart():u.lineEnd()),a&&u.point(+t(p,c,n),+o(p,c,n));if(s)return u=null,s+""||null}return e.x=function(n){return arguments.length?(t=typeof n=="function"?n:i(+n),e):t},e.y=function(n){return arguments.length?(o=typeof n=="function"?n:i(+n),e):o},e.defined=function(n){return arguments.length?(r=typeof n=="function"?n:i(!!n),e):r},e.curve=function(n){return arguments.length?(l=n,f!=null&&(u=l(f)),e):l},e.context=function(n){return arguments.length?(n==null?f=u=null:u=l(f=n),e):f},e}var C=j(Object.getPrototypeOf,Object);const P=C;var S="[object Object]",k=Function.prototype,w=Object.prototype,m=k.toString,B=w.hasOwnProperty,E=m.call(Object);function L(t){if(!d(t)||h(t)!=S)return!1;var o=P(t);if(o===null)return!0;var r=B.call(o,"constructor")&&o.constructor;return typeof r=="function"&&r instanceof r&&m.call(r)==E}export{L as B,P as T,F as z};