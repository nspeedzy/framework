"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginHook = exports.CooldownLevel = void 0;
var CooldownLevel;
(function (CooldownLevel) {
    CooldownLevel["Author"] = "author";
    CooldownLevel["Channel"] = "channel";
    CooldownLevel["Guild"] = "guild";
})(CooldownLevel = exports.CooldownLevel || (exports.CooldownLevel = {}));
var PluginHook;
(function (PluginHook) {
    PluginHook[PluginHook["PreInitialization"] = 0] = "PreInitialization";
    PluginHook[PluginHook["PostInitialization"] = 1] = "PostInitialization";
    PluginHook[PluginHook["PreLogin"] = 2] = "PreLogin";
    PluginHook[PluginHook["PostLogin"] = 3] = "PostLogin";
})(PluginHook = exports.PluginHook || (exports.PluginHook = {}));
//# sourceMappingURL=Enums.js.map