"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _lexer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const Lexure = require("lexure");
const Args_1 = require("../utils/Args");
const PreconditionContainer_1 = require("../utils/preconditions/PreconditionContainer");
const BaseAliasPiece_1 = require("./base/BaseAliasPiece");
class Command extends BaseAliasPiece_1.BaseAliasPiece {
    /**
     * @since 1.0.0
     * @param context The context.
     * @param options Optional Command settings.
     */
    constructor(context, { name, ...options } = {}) {
        var _a, _b, _c, _d, _e, _f;
        super(context, { ...options, name: name === null || name === void 0 ? void 0 : name.toLowerCase() });
        /**
         * The lexer to be used for command parsing
         * @since 1.0.0
         * @private
         */
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        _lexer.set(this, new Lexure.Lexer());
        this.deletable = (_a = options.deletable) !== null && _a !== void 0 ? _a : false;
        this.description = (_b = options.description) !== null && _b !== void 0 ? _b : '';
        this.preconditions = new PreconditionContainer_1.PreconditionContainerAll(this.client, (_c = options.preconditions) !== null && _c !== void 0 ? _c : []);
        this.extendedHelp = (_d = options.extendedHelp) !== null && _d !== void 0 ? _d : '';
        this.flags = (_e = options.flags) !== null && _e !== void 0 ? _e : [];
        __classPrivateFieldGet(this, _lexer).setQuotes((_f = options.quotes) !== null && _f !== void 0 ? _f : [
            ['"', '"'],
            ['“', '”'],
            ['「', '」'] // Corner brackets (CJK)
        ]);
    }
    preParse(message, parameters) {
        const parser = new Lexure.Parser(__classPrivateFieldGet(this, _lexer).setInput(parameters).lex());
        const args = new Lexure.Args(parser.parse());
        return new Args_1.Args(message, this, args);
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
            extendedHelp: this.extendedHelp
        };
    }
}
exports.Command = Command;
_lexer = new WeakMap();
//# sourceMappingURL=Command.js.map