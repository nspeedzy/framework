import { Store } from '@sapphire/pieces';
import type { Client } from 'discord.js';
import { Precondition } from './Precondition';
export declare class PreconditionStore extends Store<Precondition> {
    client: Client;
    constructor(client: Client);
}
//# sourceMappingURL=PreconditionStore.d.ts.map