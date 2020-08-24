"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreArgument = void 0;
const UserError_1 = require("../lib/errors/UserError");
const Argument_1 = require("../lib/structures/Argument");
const Result_1 = require("../lib/utils/Result");
class CoreArgument extends Argument_1.Argument {
    constructor(context) {
        super(context, { name: 'string' });
    }
    run(argument, context) {
        if (typeof context.minimum === 'number' && argument.length < context.minimum) {
            return Result_1.err(new UserError_1.UserError('ArgumentStringTooShort', 'The argument is too short.'));
        }
        if (typeof context.maximum === 'number' && argument.length > context.maximum) {
            return Result_1.err(new UserError_1.UserError('ArgumentStringTooLong', 'The argument is too long.'));
        }
        return Result_1.ok(argument);
    }
}
exports.CoreArgument = CoreArgument;
//# sourceMappingURL=CoreString.js.map