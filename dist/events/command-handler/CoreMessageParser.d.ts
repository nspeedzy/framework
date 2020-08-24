import type { PieceContext } from '@sapphire/pieces';
import type { Message } from 'discord.js';
import { Event } from '../../lib/structures/Event';
import { Events } from '../../lib/types/Events';
export declare class CoreEvent extends Event<Events.Message> {
    constructor(context: PieceContext);
    run(message: Message): Promise<void>;
    private getMentionPrefix;
    private getPrefix;
}
//# sourceMappingURL=CoreMessageParser.d.ts.map