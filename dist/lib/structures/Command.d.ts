import type { AliasPieceOptions } from '@sapphire/pieces';
import type { PieceContext } from '@sapphire/pieces/dist/lib/Piece';
import type { Message } from 'discord.js';
import { PreconditionContainerAll } from '../utils/preconditions/PreconditionContainer';
import type { PreconditionContainerResolvable } from '../utils/preconditions/PreconditionContainerAny';
import type { Awaited } from '../utils/Types';
import { BaseAliasPiece } from './base/BaseAliasPiece';
import type { PreconditionContext } from './Precondition';
export declare abstract class Command extends BaseAliasPiece {
    #private;
    /**
     * Delete command's response if the trigger message was deleted
     * @since 1.0.0
     */
    deletable: boolean;
    /**
     * A basic summary about the command
     * @since 1.0.0
     */
    description: string;
    /**
     * The preconditions to be run.
     * @since 1.0.0
     */
    preconditions: PreconditionContainerAll;
    /**
     * Longer version of command's summary and how to use it
     * @since 1.0.0
     */
    extendedHelp: string;
    /**
     * Accepted flags for the command
     * @since 1.0.0
     */
    flags: string[];
    /**
     * @since 1.0.0
     * @param context The context.
     * @param options Optional Command settings.
     */
    protected constructor(context: PieceContext, { name, ...options }?: CommandOptions);
    preParse(message: Message, parameters: string): Awaited<unknown>;
    abstract run(message: Message, args: unknown): Awaited<unknown>;
    /**
     * Defines the JSON.stringify behavior of the command
     * @returns {Object}
     */
    toJSON(): Record<string, any>;
}
export interface CommandPrecondition {
    readonly name: string;
    readonly context: Readonly<PreconditionContext>;
}
export declare type PreconditionResolvable = string | {
    name: string;
    context?: PreconditionContext;
};
export interface CommandOptions extends AliasPieceOptions {
    bucket?: number;
    deletable?: boolean;
    description?: string;
    preconditions?: PreconditionContainerResolvable;
    extendedHelp?: string;
    flags?: string[];
    quotes?: [string, string][];
}
//# sourceMappingURL=Command.d.ts.map