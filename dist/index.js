"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=a(function(g,u){
var n=require('@stdlib/assert-is-string/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),F=require('@stdlib/assert-is-well-formed-string/dist'),v=/[\uDC00-\uDFFF]/,f=/[\uD800-\uDBFF]/;function l(r){var e,i;if(e="",!n(r))throw new TypeError(o('1u93B',r));if(F(r)){for(i=0;i<r.length;i++)e+=r[i];return e}for(i=0;i<r.length;i++)v.test(r[i])||f.test(r[i])?e+="\uFFFD":e+=r[i];return e}u.exports=l
});var s=t();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
