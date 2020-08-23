"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreconditionContainerAny = void 0;
const PreconditionContainerSimple_1 = require("./PreconditionContainerSimple");
var PreconditionRunMode;
(function (PreconditionRunMode) {
    PreconditionRunMode["Sequential"] = "sequential";
    PreconditionRunMode["Parallel"] = "parallel";
})(PreconditionRunMode || (PreconditionRunMode = {}));
function isSingle(entry) {
    return typeof entry === 'string' || Reflect.has(entry, 'entry');
}
class PreconditionContainerAny {
    constructor(client, data) {
        this.entries = [];
        const [mode, entries] = PreconditionContainerAny.resolveData(data);
        this.mode = mode;
        for (const entry of entries) {
            this.entries.push(isSingle(entry) ? new PreconditionContainerSimple_1.PreconditionContainerSingle(client, entry) : new PreconditionContainerAny(client, entry));
        }
    }
    async run(message, command) {
        return this.mode === "sequential" /* Sequential */ ? this.runSequential(message, command) : this.runParallel(message, command);
    }
    async runSequential(message, command) {
        for (const child of this.entries) {
            if (await child.run(message, command))
                return true;
        }
        return false;
    }
    async runParallel(message, command) {
        const results = await Promise.all(this.entries.map((entry) => entry.run(message, command)));
        return results.some((result) => result);
    }
    static resolveData(data) {
        if (Array.isArray(data))
            return ["sequential" /* Sequential */, data];
        const casted = data;
        return [casted.mode, casted.entries];
    }
}
exports.PreconditionContainerAny = PreconditionContainerAny;
//# sourceMappingURL=PreconditionContainerAny.js.map