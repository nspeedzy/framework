import type { Awaited } from '@sapphire/pieces';
import type { Message } from 'discord.js';
import { UserError } from '../lib/errors/UserError';
import { Precondition } from '../lib/structures/Precondition';
import { Result } from '../lib/utils/Result';
export declare class CorePrecondition extends Precondition {
    run(message: Message): Awaited<Result<unknown, UserError>>;
}
//# sourceMappingURL=NSFW.d.ts.map