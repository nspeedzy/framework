import { Command } from './Command';
import { AliasStore } from '@sapphire/pieces';
import type { Client } from 'discord.js';
/**
 * Stores all Command pieces
 * @since 1.0.0
 */
export declare class CommandStore extends AliasStore<Command> {
    client: Client;
    constructor(client: Client);
}
//# sourceMappingURL=CommandStore.d.ts.map