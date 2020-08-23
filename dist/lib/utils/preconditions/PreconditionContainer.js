"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreconditionContainerAll = void 0;
const PreconditionContainerAny_1 = require("./PreconditionContainerAny");
class PreconditionContainerAll extends PreconditionContainerAny_1.PreconditionContainerAny {
    async runSequential(message, command) {
        for (const child of this.entries) {
            if (!(await child.run(message, command)))
                return false;
        }
        return true;
    }
    async runParallel(message, command) {
        const results = await Promise.all(this.entries.map((entry) => entry.run(message, command)));
        return results.every((result) => result);
    }
}
exports.PreconditionContainerAll = PreconditionContainerAll;
//# sourceMappingURL=PreconditionContainer.js.map