"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _lexer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const Lexure = __importStar(require("lexure"));
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
         * Delete command's response if the trigger message was deleted
         * @since 1.0.0
         */
        Object.defineProperty(this, "deletable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * A basic summary about the command
         * @since 1.0.0
         */
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The preconditions to be run.
         * @since 1.0.0
         */
        Object.defineProperty(this, "preconditions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Longer version of command's summary and how to use it
         * @since 1.0.0
         */
        Object.defineProperty(this, "extendedHelp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Accepted flags for the command
         * @since 1.0.0
         */
        Object.defineProperty(this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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