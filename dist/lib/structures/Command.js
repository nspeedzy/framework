"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const pieces_1 = require("@sapphire/pieces");
class Command extends pieces_1.AliasPiece {
    /**
     * @since 1.0.0
     * @param context The context.
     * @param options Optional Command settings.
     */
    constructor(context, { name, ...options } = {}) {
        var _a, _b, _c, _d;
        super(context, { ...options, name: name === null || name === void 0 ? void 0 : name.toLowerCase() });
        this.deletable = (_a = options.deletable) !== null && _a !== void 0 ? _a : false;
        this.description = (_b = options.description) !== null && _b !== void 0 ? _b : '';
        this.preconditions = (_d = (_c = options.preconditions) === null || _c === void 0 ? void 0 : _c.map((precondition) => {
            var _a;
            return typeof precondition === 'string'
                ? { name: precondition, context: {} }
                : { name: precondition.name, context: (_a = precondition.context) !== null && _a !== void 0 ? _a : {} };
        })) !== null && _d !== void 0 ? _d : [];
        this.extendedHelp = options.extendedHelp;
        this.guarded = options.guarded;
        this.hidden = options.hidden;
        this.flags = options.flags;
        this.quotedStringSupport = options.quotedStringSupport;
    }
    /**
     * Defines the JSON.stringify behavior of the command
     * @returns {Object}
     */
    toJSON() {
        return {
            ...super.toJSON(),
            deletable: this.deletable,
            description: this.description,
            extendedHelp: this.extendedHelp,
            guarded: this.guarded,
            hidden: this.hidden,
            quotedStringSupport: this.quotedStringSupport
        };
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map