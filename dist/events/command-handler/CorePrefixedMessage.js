"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreEvent = void 0;
const Event_1 = require("../../lib/structures/Event");
const Events_1 = require("../../lib/types/Events");
class CoreEvent extends Event_1.Event {
    constructor(context) {
        super(context, { event: Events_1.Events.PrefixedMessage });
    }
    run(message, prefix) {
        // Retrieve the command name and validate:
        const prefixLess = message.content.slice(prefix.length).trim();
        const spaceIndex = prefixLess.indexOf(' ');
        const commandName = spaceIndex === -1 ? prefixLess : prefixLess.slice(0, spaceIndex);
        if (!commandName) {
            this.client.emit(Events_1.Events.UnknownCommandName, message, prefix);
            return;
        }
        // Retrieve the command and validate:
        const command = this.client.commands.get(commandName);
        if (!command) {
            this.client.emit(Events_1.Events.UnknownCommand, message, commandName, prefix);
            return;
        }
        // Run the last stage before running the command:
        this.client.emit(Events_1.Events.PreCommandRun, message, command, commandName, prefix);
    }
}
exports.CoreEvent = CoreEvent;
//# sourceMappingURL=CorePrefixedMessage.js.map