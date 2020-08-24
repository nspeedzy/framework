import type { PieceContext } from '@sapphire/pieces';
import { UserError } from '../lib/errors/UserError';
import { Argument, ArgumentContext } from '../lib/structures/Argument';
import { Result } from '../lib/utils/Result';
import type { Awaited } from '../lib/utils/Types';
export declare class CoreArgument extends Argument {
    constructor(context: PieceContext);
    run(argument: string, context: ArgumentContext): Awaited<Result<string, UserError>>;
}
//# sourceMappingURL=CoreString.d.ts.map