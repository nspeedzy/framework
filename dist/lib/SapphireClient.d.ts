import type { Piece, Store } from '@sapphire/pieces';
import { Client, ClientOptions, Message } from 'discord.js';
import type { Plugin } from './plugins/Plugin';
import { PluginManager } from './plugins/PluginManager';
import { ArgumentStore } from './structures/ArgumentStore';
import { CommandStore } from './structures/CommandStore';
import { EventStore } from './structures/EventStore';
import { PreconditionStore } from './structures/PreconditionStore';
import type { Awaited } from './utils/Types';
export interface SapphirePrefixHook {
    (message: Message): Awaited<string | readonly string[] | null>;
}
export declare class SapphireClient extends Client {
    /**
     * The client's ID, used for the user prefix.
     * @since 1.0.0
     */
    id: string | null;
    /**
     * The commands the framework has registered.
     * @since 1.0.0
     */
    arguments: ArgumentStore;
    /**
     * The commands the framework has registered.
     * @since 1.0.0
     */
    commands: CommandStore;
    /**
     * The events the framework has registered.
     * @since 1.0.0
     */
    events: EventStore;
    /**
     * The precondition the framework has registered.
     * @since 1.0.0
     */
    preconditions: PreconditionStore;
    /**
     * The registered stores.
     * @since 1.0.0
     */
    stores: Set<Store<Piece>>;
    constructor(options?: ClientOptions);
    /**
     * Registers a store.
     * @param store The store to register.
     */
    registerStore<T extends Piece>(store: Store<T>): this;
    /**
     * The method to be overriden by the developer.
     * @since 1.0.0
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
    /**
     * Loads all pieces, then logs the client in, establishing a websocket connection to Discord.
     * @since 1.0.0
     * @param token Token of the account to log in with.
     * @retrun Token of the account used.
     */
    login(token?: string): Promise<string>;
    static plugins: PluginManager;
    static use(plugin: typeof Plugin): typeof SapphireClient;
}
declare module 'discord.js' {
    interface Client {
        id: string | null;
        arguments: ArgumentStore;
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