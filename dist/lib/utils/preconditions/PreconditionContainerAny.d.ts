import type { Client, Message } from 'discord.js';
import type { Command } from '../../structures/Command';
import type { IPreconditionContainer } from './IPreconditionContainer';
import { PreconditionContainerSingleResolvable } from './PreconditionContainerSimple';
declare const enum PreconditionRunMode {
    Sequential = "sequential",
    Parallel = "parallel"
}
interface PreconditionContainerAnyDetailedData {
    entries: Entries;
    mode: PreconditionRunMode;
}
declare type Entry = PreconditionContainerSingleResolvable | PreconditionContainerResolvable;
declare type Entries = readonly Entry[];
export declare type PreconditionContainerResolvable = Entries | PreconditionContainerAnyDetailedData;
export declare class PreconditionContainerAny implements IPreconditionContainer {
    entries: IPreconditionContainer[];
    mode: PreconditionRunMode;
    constructor(client: Client, data: PreconditionContainerResolvable);
    run(message: Message, command: Command): Promise<boolean>;
    protected runSequential(message: Message, command: Command): Promise<boolean>;
    protected runParallel(message: Message, command: Command): Promise<boolean>;
    private static resolveData;
}
export {};
//# sourceMappingURL=PreconditionContainerAny.d.ts.map