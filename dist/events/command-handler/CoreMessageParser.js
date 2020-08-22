"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreEvent = void 0;
const Event_1 = require("../../lib/structures/Event");
// import type { Message } from 'discord.js';
class CoreEvent extends Event_1.Event {
    constructor(context) {
        super(context, { event: 'message' });
    }
    run( /* message: Message */) {
        // TODO: Handle command.
    }
}
exports.CoreEvent = CoreEvent;
//# sourceMappingURL=CoreMessageParser.js.map