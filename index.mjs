// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-well-formed-string@v0.1.0-esm/index.mjs";var e=/[\uDC00-\uDFFF]/,i=/[\uD800-\uDBFF]/;function n(n){var o,d;if(o="",!t(n))throw new TypeError(r("null3B",n));if(s(n)){for(d=0;d<n.length;d++)o+=n[d];return o}for(d=0;d<n.length;d++)e.test(n[d])||i.test(n[d])?o+="�":o+=n[d];return o}export{n as default};
//# sourceMappingURL=index.mjs.map
