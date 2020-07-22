"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorStore = void 0;
const core_1 = require("@klasa/core");
const Monitor_1 = require("./Monitor");
/**
 * Stores all Monitor pieces
 * @since 0.0.1
 */
class MonitorStore extends core_1.Store {
    /**
     * Constructs the Monitor Store for use
     * @since 0.0.1
     * @param client The framework client
     */
    constructor(client) {
        super(client, 'monitors', Monitor_1.Monitor);
    }
}
exports.MonitorStore = MonitorStore;
//# sourceMappingURL=MonitorStore.js.map