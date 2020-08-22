/// <reference types="node" />
import type { PieceContext, PieceOptions } from '@sapphire/pieces';
import type { Client } from 'discord.js';
import type { EventEmitter } from 'events';
import { BasePiece } from './base/BasePiece';
export declare abstract class Event extends BasePiece {
    #private;
    readonly emitter: EventEmitter | null;
    readonly event: string;
    constructor(context: PieceContext, options?: EventOptions);
    abstract run(...args: readonly any[]): unknown;
    onLoad(): void;
    onUnload(): void;
    toJSON(): Record<PropertyKey, unknown>;
}
export interface EventOptions extends PieceOptions {
    emitter?: keyof Client | EventEmitter;
    event?: string;
}
//# sourceMappingURL=Event.d.ts.map