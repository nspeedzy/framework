"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreconditionStore = void 0;
const BaseStore_1 = require("./base/BaseStore");
const Precondition_1 = require("./Precondition");
class PreconditionStore extends BaseStore_1.BaseStore {
    constructor(client) {
        // @ts-expect-error Abstract classes are not assignable to Ctor<T>.
        super(client, Precondition_1.Precondition);
    }
}
exports.PreconditionStore = PreconditionStore;
//# sourceMappingURL=PreconditionStore.js.map