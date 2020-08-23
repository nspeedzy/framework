import { PreconditionContainerAny } from './PreconditionContainerAny';
import type { Command } from '../../structures/Command';
import type { Message } from 'discord.js';
export declare class PreconditionContainerAll extends PreconditionContainerAny {
    protected runSequential(message: Message, command: Command): Promise<boolean>;
    protected runParallel(message: Message, command: Command): Promise<boolean>;
}
//# sourceMappingURL=PreconditionContainer.d.ts.map