"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSecret = exports.appId = void 0;
var config_1 = require("./config");
// prod
var appId = '4s1FXKC9FaGfoqXhmXSJneb3qcm1gOak';
exports.appId = appId;
var appSecret = 'oKvCM06gvwkRbfetd6qWRrbC3rFrbIpV';
exports.appSecret = appSecret;
if (config_1.debugMode) {
    exports.appId = appId = 'KOBxGJna5qkk3JLXw3LHLX3wSNiPjAVi';
    exports.appSecret = appSecret = '4v0sv6X5IM2ASIBiNDj6kGmSfxo40w7n';
}
