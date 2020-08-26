import type { PieceContext } from '@sapphire/pieces';
import { Event, EventOptions } from '../lib/structures/Event';
import { Events } from '../lib/types/Events';
export declare class CoreEvent extends Event<Events.Ready> {
    constructor(context: PieceContext, options?: EventOptions);
    run(): void;
}
//# sourceMappingURL=CoreReady.d.ts.map