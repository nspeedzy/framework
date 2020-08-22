import { Piece } from '@sapphire/pieces';
import type { Message } from 'discord.js';
import type { Awaited } from '../utils/Types';
import type { Command } from './Command';
export declare abstract class Precondition extends Piece {
    abstract run(message: Message, command: Command, context: PreconditionContext): Awaited<boolean>;
}
export interface PreconditionContext extends Record<PropertyKey, unknown> {
}
//# sourceMappingURL=Precondition.d.ts.map