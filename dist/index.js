"use strict";var a=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=a(function(g,u){
var n=require('@stdlib/assert-is-string/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),F=require('@stdlib/assert-is-well-formed-string/dist'),v=/[\uDC00-\uDFFF]/,f=/[\uD800-\uDBFF]/;function l(i){var r,e;if(r="",!n(i))throw new TypeError(o('1u93B',i));if(F(i)){for(e=0;e<i.length;e++)r+=i[e];return r}for(e=0;e<i.length;e++)v.test(i[e])||f.test(i[e])?r+="\uFFFD":r+=i[e];return r}u.exports=l
});var s=t();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
