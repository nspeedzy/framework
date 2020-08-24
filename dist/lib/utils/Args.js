"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Args = void 0;
const UserError_1 = require("../errors/UserError");
const Result_1 = require("./Result");
/**
 * The argument parser to be used in [[Command]].
 */
class Args {
    constructor(message, command, parser) {
        this.states = [];
        this.message = message;
        this.command = command;
        this.parser = parser;
    }
    /**
     * Sets the parser to the first token.
     */
    start() {
        this.parser.state = {
            usedIndices: new Set(),
            position: 0,
            positionFromEnd: this.parser.parserOutput.ordered.length - 1
        };
        return this;
    }
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
    async pickResult(type, options = {}) {
        const argument = this.message.client.arguments.get(type);
        if (!argument)
            return Result_1.err(new UserError_1.UserError('UnavailableArgument', `The argument "${type}" was not found.`));
        const result = await this.parser.singleParseAsync(async (arg) => argument.run(arg, {
            message: this.message,
            command: this.command,
            ...options
        }));
        if (result === null)
            return Result_1.err(new UserError_1.UserError('MissingArguments', 'There are no more arguments.'));
        if (Result_1.isOk(result))
            return result;
        return result;
    }
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
    async pick(type, options) {
        const result = await this.pickResult(type, options);
        if (Result_1.isOk(result))
            return result.value;
        throw result.error;
    }
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
    async restResult(type, options = {}) {
        const argument = this.message.client.arguments.get(type);
        if (!argument)
            return Result_1.err(new UserError_1.UserError('UnavailableArgument', `The argument "${type}" was not found.`));
        if (this.parser.finished)
            return Result_1.err(new UserError_1.UserError('MissingArguments', 'There are no more arguments.'));
        const state = this.parser.save();
        const data = this.parser.many().reduce((acc, token) => `${acc}${token.value}${token.trailing}`, '');
        const result = await argument.run(data, {
            message: this.message,
            command: this.command,
            ...options
        });
        if (Result_1.isOk(result))
            return result;
        this.parser.restore(state);
        return result;
    }
    /**
     * Similar to [[Args.restResult]] but returns the value on success, throwing otherwise.
     * @param type The type of the argument.
     * @example
     * ```typescript
     * // !add 2 Hello World!
     * const a = await args.pickResult('integer');
     * const b = await args.restResult('string', { minimum: 1 });
     * await message.channel.send(`The repeated value is... ${b.repeat(a)}!`);
     * // Sends "The repeated value is... Hello World!Hello World!"
     * ```
     */
    async rest(type, options) {
        const result = await this.restResult(type, options);
        if (Result_1.isOk(result))
            return result.value;
        throw result.error;
    }
    /**
     * Saves the current state into the stack following a FILO strategy (first-in, last-out).
     * @seealso [[Args.restore]]
     */
    save() {
        this.states.push(this.parser.save());
    }
    /**
     * Restores the previously saved state from the stack.
     * @seealso [[Args.save]]
     */
    restore() {
        if (this.states.length !== 0)
            this.parser.restore(this.states.pop());
    }
}
exports.Args = Args;
//# sourceMappingURL=Args.js.map