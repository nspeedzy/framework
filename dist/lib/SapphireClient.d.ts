import type { Awaited } from '@sapphire/pieces';
import { Client, ClientOptions, Message } from 'discord.js';
import { CommandStore } from './structures/CommandStore';
import { EventStore } from './structures/EventStore';
import { PreconditionStore } from './structures/PreconditionStore';
export interface SapphirePrefixHook {
    (message: Message): Awaited<string | readonly string[] | null>;
}
export declare class SapphireClient extends Client {
    /**
     * The client's ID, used for the user prefix.
     */
    clientID: string | null;
    /**
     * The commands the framework has registered.
     */
    commands: CommandStore;
    /**
     * The events the framework has registered.
     */
    events: EventStore;
    /**
     * The precondition the framework has registered.
     */
    preconditions: PreconditionStore;
    constructor(options?: ClientOptions);
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
    fetchPrefix: SapphirePrefixHook;
}
declare module 'discord.js' {
    interface Client {
        id: string | null;
        commands: CommandStore;
        events: EventStore;
        preconditions: PreconditionStore;
        fetchPrefix: SapphirePrefixHook;
    }
    interface ClientOptions {
        id?: string;
    }
}
//# sourceMappingURL=SapphireClient.d.ts.map