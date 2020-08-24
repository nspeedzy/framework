"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreArgument = void 0;
const UserError_1 = require("../lib/errors/UserError");
const Argument_1 = require("../lib/structures/Argument");
const Result_1 = require("../lib/utils/Result");
class CoreArgument extends Argument_1.Argument {
    constructor(context) {
        super(context, { name: 'integer' });
    }
    run(argument, context) {
        const parsed = Number(argument);
        if (!Number.isInteger(parsed)) {
            return Result_1.err(new UserError_1.UserError('ArgumentNumberInvalidNumber', 'The argument did not resolve to an integer.'));
        }
        if (typeof context.minimum === 'number' && parsed < context.minimum) {
            return Result_1.err(new UserError_1.UserError('ArgumentStringTooShort', 'The argument is too small.'));
        }
        if (typeof context.maximum === 'number' && parsed > context.maximum) {
            return Result_1.err(new UserError_1.UserError('ArgumentStringTooLong', 'The argument is too big.'));
        }
        return Result_1.ok(parsed);
    }
}
exports.CoreArgument = CoreArgument;
//# sourceMappingURL=CoreInteger.js.map