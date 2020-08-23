import type { Message } from 'discord.js';
import type { UserError } from '../errors/UserError';
import type { Result } from '../utils/Result';
import type { Awaited } from '../utils/Types';
import { BasePiece } from './base/BasePiece';
import type { Command } from './Command';
export declare abstract class Precondition extends BasePiece {
    abstract run(message: Message, command: Command, context: PreconditionContext): Awaited<Result<unknown, UserError>>;
}
export interface PreconditionContext extends Record<PropertyKey, unknown> {
}
//# sourceMappingURL=Precondition.d.ts.map