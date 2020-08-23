"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorePrecondition = void 0;
const UserError_1 = require("../lib/errors/UserError");
const Precondition_1 = require("../lib/structures/Precondition");
const Result_1 = require("../lib/utils/Result");
class CorePrecondition extends Precondition_1.Precondition {
    run(message) {
        // `nsfw` is undefined in DMChannel, doing `=== true`
        // will result on it returning`false`.
        return Reflect.get(message.channel, 'nsfw') === true ? Result_1.err(new UserError_1.UserError(this.name, 'You cannot run this command in DMs.')) : Result_1.ok();
    }
}
exports.CorePrecondition = CorePrecondition;
//# sourceMappingURL=NSFW.js.map