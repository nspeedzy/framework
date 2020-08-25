"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginManager = void 0;
require("../types/Enums");
const symbols_1 = require("./symbols");
class PluginManager {
    constructor() {
        this.registry = new Set();
    }
    registerHook(hook, type, name) {
        if (typeof hook !== 'function')
            throw new TypeError(`The provided hook ${name ? `(${name}) ` : ''}is not a function`);
        this.registry.add({ hook, type, name });
        return this;
    }
    registerPreInitializationHook(hook, name) {
        return this.registerHook(hook, 0 /* PreInitialization */, name);
    }
    registerPostInitializationHook(hook, name) {
        return this.registerHook(hook, 1 /* PostInitialization */, name);
    }
    registerPreLoginHook(hook, name) {
        return this.registerHook(hook, 2 /* PreLogin */, name);
    }
    registerPostLoginHook(hook, name) {
        return this.registerHook(hook, 3 /* PostLogin */, name);
    }
    use(plugin) {
        const possibleSymbolHooks = [
            [symbols_1.preInitialization, 0 /* PreInitialization */],
            [symbols_1.postInitialization, 1 /* PostInitialization */],
            [symbols_1.preLogin, 2 /* PreLogin */],
            [symbols_1.postLogin, 3 /* PostLogin */]
        ];
        for (const [hookSymbol, hookType] of possibleSymbolHooks) {
            const hook = Reflect.get(plugin, hookSymbol);
            if (typeof hook !== 'function')
                continue;
            this.registerHook(hook, hookType);
        }
        return this;
    }
    *values(hook) {
        for (const plugin of this.registry) {
            if (hook && plugin.type !== hook)
                continue;
            yield plugin;
        }
    }
}
exports.PluginManager = PluginManager;
//# sourceMappingURL=PluginManager.js.map