"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const PreconditionContainer_1 = require("../utils/preconditions/PreconditionContainer");
const BaseAliasPiece_1 = require("./base/BaseAliasPiece");
class Command extends BaseAliasPiece_1.BaseAliasPiece {
    /**
     * @since 1.0.0
     * @param context The context.
     * @param options Optional Command settings.
     */
    constructor(context, { name, ...options } = {}) {
        var _a, _b, _c;
        super(context, { ...options, name: name === null || name === void 0 ? void 0 : name.toLowerCase() });
        this.deletable = (_a = options.deletable) !== null && _a !== void 0 ? _a : false;
        this.description = (_b = options.description) !== null && _b !== void 0 ? _b : '';
        this.preconditions = new PreconditionContainer_1.PreconditionContainerAll(this.client, (_c = options.preconditions) !== null && _c !== void 0 ? _c : []);
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