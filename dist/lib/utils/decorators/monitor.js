"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreEdits = exports.ignoreWebhooks = exports.ignoreOthers = exports.ignoreSelf = exports.ignoreUsers = exports.ignoreBots = exports.monitorIgnoreOptions = void 0;
const skyra_decorators_utils_1 = require("./skyra-decorators-utils");
/**
 * @since 1.0.0
 * @param prop The property on which the status should be assigned.
 * @param status Wheter the property should be ignored or not.
 * @private
 */
function monitorIgnoreOptions(prop, status) {
    return skyra_decorators_utils_1.createClassDecorator((target) => skyra_decorators_utils_1.createProxy(target, {
        construct: (ctor, [store, directory, files, options]) => {
            const command = new ctor(store, directory, files, options);
            Reflect.defineProperty(command, prop, {
                value: status !== null && status !== void 0 ? status : false,
                enumerable: true,
                configurable: true,
                writable: true
            });
            return command;
        }
    }));
}
exports.monitorIgnoreOptions = monitorIgnoreOptions;
/**
 * Should the decorated monitor ignore bots.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
exports.ignoreBots = (status) => monitorIgnoreOptions('ignoreBots', status);
/**
 * Should the decorated monitor ignore users.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
exports.ignoreUsers = (status) => monitorIgnoreOptions('ignoreUsers', status);
/**
 * Should the decorated monitor ignore its self.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
exports.ignoreSelf = (status) => monitorIgnoreOptions('ignoreSelf', status);
/**
 * Should the decorated monitor ignore others.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
exports.ignoreOthers = (status) => monitorIgnoreOptions('ignoreOthers', status);
/**
 * Should the decorated monitor ignore webhooks.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
exports.ignoreWebhooks = (status) => monitorIgnoreOptions('ignoreWebhooks', status);
/**
 * Should the decorated monitor ignore edits.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
exports.ignoreEdits = (status) => monitorIgnoreOptions('ignoreEdits', status);
//# sourceMappingURL=monitor.js.map