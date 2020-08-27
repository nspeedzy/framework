import type { Message } from 'discord.js';
import type * as Lexure from 'lexure';
import { UserError } from '../errors/UserError';
import type { ArgumentContext } from '../structures/Argument';
import type { Command } from '../structures/Command';
import { Result } from './Result';
/**
 * The argument parser to be used in [[Command]].
 */
export declare class Args {
    /**
     * The original message that triggered the command.
     */
    readonly message: Message;
    /**
     * The command that is being running.
     */
    readonly command: Command;
    private readonly parser;
    private states;
    constructor(message: Message, command: Command, parser: Lexure.Args);
    /**
     * Sets the parser to the first token.
     */
    start(): Args;
    /**
     * Retrieves the next parameter and parses it. Advances index on success.
     * @param type The type of the argument.
     * @example
     * ```typescript
     * // !add 1 2
     * const a = await args.pickResult('integer');
     * if (!a.success) throw new UserError('AddArgumentError', 'You must write two numbers, but the first one did not match.');
     *
     * const b = await args.pickResult('integer');
     * if (!b.success) throw new UserError('AddArgumentError', 'You must write two numbers, but the second one did not match.');
     *
     * await message.channel.send(`The result is: ${a.value + b.value}!`);
     * // Sends "The result is: 3"
     * ```
     */
    pickResult<K extends keyof ArgType>(type: K, options?: ArgOptions): Promise<Result<ArgType[K], UserError>>;
    /**
     * Similar to [[Args.pickResult]] but returns the value on success, throwing otherwise.
     * @param type The type of the argument.
     * @example
     * ```typescript
     * // !add 1 2
     * const a = await args.pick('integer');
     * const b = await args.pick('integer');
     * await message.channel.send(`The result is: ${a + b}!`);
     * // Sends "The result is: 3"
     * ```
     */
    pick<K extends keyof ArgType>(type: K, options?: ArgOptions): Promise<ArgType[K]>;
    /**
     * Retrieves all the following arguments.
     * @param type The type of the argument.
     * @example
     * ```typescript
     * // !add 2 Hello World!
     * const a = await args.pickResult('integer');
     * if (!a.success) throw new UserError('AddArgumentError', 'You must write a number and a text, but the former did not match.');
     *
     * const b = await args.restResult('string', { minimum: 1 });
     * if (!b.success) throw new UserError('AddArgumentError', 'You must write a number and a text, but the latter did not match.');
     *
     * await message.channel.send(`The repeated value is... ${b.value.repeat(a.value)}!`);
     * // Sends "The repeated value is... Hello World!Hello World!"
     * ```
     */
    restResult<K extends keyof ArgType>(type: K, options?: ArgOptions): Promise<Result<ArgType[K], UserError>>;
    /**
     * Similar to [[Args.restResult]] but returns the value on success, throwing otherwise.
     * @param type The type of the argument.
     * @example
     * ```typescript
     * // !add 2 Hello World!
     * const a = await args.pick('integer');
     * const b = await args.rest('string', { minimum: 1 });
     * await message.channel.send(`The repeated value is... ${b.repeat(a)}!`);
     * // Sends "The repeated value is... Hello World!Hello World!"
     * ```
     */
    rest<K extends keyof ArgType>(type: K, options?: ArgOptions): Promise<ArgType[K]>;
    /**
     * Retrieves all the following arguments.
     * @param type The type of the argument.
     * @example
     * ```typescript
     * // !add 2 Hello World!
     * const result = await args.repeatResult('string', { times: 5 });
     * if (!result.success) throw new UserError('CountArgumentError', 'You must write up to 5 words.');
     *
     * await message.channel.send(`You have written ${result.value.length} word(s): ${result.value.join(' ')}`);
     * // Sends "You have written 2 word(s): Hello World!"
     * ```
     */
    repeatResult<K extends keyof ArgType>(type: K, options?: RepeatArgOptions): Promise<Result<ArgType[K][], UserError>>;
    /**
     * Similar to [[Args.repeatResult]] but returns the value on success, throwing otherwise.
     * @param type The type of the argument.
     * @example
     * ```typescript
     * // !add 2 Hello World!
     * const words = await args.repeat('string', { times: 5 });
     * await message.channel.send(`You have written ${words.length} word(s): ${words.join(' ')}`);
     * // Sends "You have written 2 word(s): Hello World!"
     * ```
     */
    repeat<K extends keyof ArgType>(type: K, options?: RepeatArgOptions): Promise<ArgType[K][]>;
    /**
     * Saves the current state into the stack following a FILO strategy (first-in, last-out).
     * @seealso [[Args.restore]]
     */
    save(): void;
    /**
     * Restores the previously saved state from the stack.
     * @seealso [[Args.save]]
     */
    restore(): void;
}
export interface ArgType {
    string: string;
    integer: number;
}
export interface ArgOptions extends Omit<ArgumentContext, 'message' | 'command'> {
}
export interface RepeatArgOptions extends ArgOptions {
    /**
     * The maximum amount of times the argument can be repeated.
     * @default Infinity
     */
    times?: number;
}
//# sourceMappingURL=Args.d.ts.map