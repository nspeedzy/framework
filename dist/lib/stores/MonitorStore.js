"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorStore = void 0;
const core_1 = require("@klasa/core");
const Monitor_1 = require("../structures/Monitor");
class MonitorStore extends core_1.Store {
    constructor(client) {
        super(client, 'monitors', Monitor_1.Monitor);
    }
}
exports.MonitorStore = MonitorStore;
//# sourceMappingURL=MonitorStore.js.map