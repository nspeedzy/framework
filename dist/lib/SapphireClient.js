"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SapphireClient = void 0;
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const CommandStore_1 = require("./structures/CommandStore");
const EventStore_1 = require("./structures/EventStore");
const PreconditionStore_1 = require("./structures/PreconditionStore");
class SapphireClient extends discord_js_1.Client {
    constructor(options = {}) {
        var _a;
        super(options);
        /**
         * The client's ID, used for the user prefix.
         */
        this.clientID = null;
        /**
         * The method to be overriden by the developer.
         * @return A string for a single prefix, an array of strings for matching multiple, or null for no match (mention prefix only).
         * @example
         * ```typescript
         * // Return always the same prefix (unconfigurable):
         * client.fetchPrefix = () => '!';
         * ```
         * @example
         * ```typescript
         * // Retrieving the prefix from a SQL database:
         * client.fetchPrefix = async (message) => {
         *   const guild = await driver.getOne('SELECT prefix FROM public.guild WHERE id = $1', [message.guild.id]);
         *   return guild?.prefix ?? '!';
         * };
         * ```
         * @example
         * ```typescript
         * // Retrieving the prefix from an ORM:
         * client.fetchPrefix = async (message) => {
         *   const guild = await driver.getRepository(GuildEntity).findOne({ id: message.guild.id });
         *   return guild?.prefix ?? '!';
         * };
         * ```
         */
        this.fetchPrefix = () => null;
        this.clientID = (_a = options.clientID) !== null && _a !== void 0 ? _a : null;
        this.commands = new CommandStore_1.CommandStore(this);
        this.events = new EventStore_1.EventStore(this).registerPath(path_1.join(__dirname, '..', 'events'));
        this.preconditions = new PreconditionStore_1.PreconditionStore(this).registerPath(path_1.join(__dirname, '..', 'preconditions'));
    }
}
exports.SapphireClient = SapphireClient;
//# sourceMappingURL=SapphireClient.js.map