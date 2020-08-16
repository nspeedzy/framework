import { Message, Piece, PieceOptions } from '@klasa/core';
import type { MonitorStore } from './MonitorStore';
export declare abstract class Monitor extends Piece {
    constructor(store: MonitorStore, directory: string, file: string[], options: PieceOptions);
    abstract handle(message: Message): Promise<unknown>;
    run(message: Message): Promise<void>;
}
/**
 * The Interface defining all ignore groups.
 * @since 1.0.0
 */
export interface Monitor {
    /**
     * Should this monitor ignore bots
     * @since 1.0.0
     * @public
     */
    ignoreBots?: boolean;
    /**
     * Should this monitor ignore users
     * @since 1.0.0
     * @public
     */
    ignoreUsers?: boolean;
    /**
     * Should this monitor ignore messages sent by the bot itself
     * @since 1.0.0
     * @public
     */
    ignoreSelf?: boolean;
    /**
     * Should this monitor ignore everyone except itself
     * @since 1.0.0
     * @public
     */
    ignoreOthers?: boolean;
    /**
     * Should this monitor ignore webhook messages
     * @since 1.0.0
     * @public
     */
    ignoreWebhooks?: boolean;
    /**
     * Should this monitor ignore message edits
     * @since 1.0.0
     * @public
     */
    ignoreEdits?: boolean;
}
//# sourceMappingURL=Monitor.d.ts.map