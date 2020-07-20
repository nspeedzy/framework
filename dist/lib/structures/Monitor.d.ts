import { Piece, PieceOptions, Message } from '@klasa/core';
import type { MonitorStore } from '../stores/MonitorStore';
export declare abstract class Monitor extends Piece {
    /**
     * Should this monitor ignore bots
     * @default false
     */
    ignoreBots: boolean;
    /**
     * Should this monitor ignore users
     * @default false
     */
    ignoreUsers: boolean;
    /**
     * Should this monitor ignore messages sent by the bot itself
     * @default false
     */
    ignoreSelf: boolean;
    /**
     * Should this monitor ignore everyone except itself
     * @default false
     */
    ignoreOthers: boolean;
    /**
     * Should this monitor ignore webhook messages
     * @default false
     */
    ignoreWebhooks: boolean;
    /**
     * Should this monitor ignore message edits
     * @default false
     */
    ignoreEdits: boolean;
    constructor(store: MonitorStore, directory: string, file: string[], options: PieceOptions);
    abstract handle(message: Message): Promise<unknown>;
    run(message: Message): Promise<void>;
}
//# sourceMappingURL=Monitor.d.ts.map