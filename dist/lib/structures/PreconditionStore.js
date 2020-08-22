"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreconditionStore = void 0;
const pieces_1 = require("@sapphire/pieces");
const Precondition_1 = require("./Precondition");
class PreconditionStore extends pieces_1.Store {
    constructor(client) {
        // @ts-expect-error Abstract classes are not assignable to Ctor<T>.
        super(Precondition_1.Precondition);
        this.client = client;
    }
}
exports.PreconditionStore = PreconditionStore;
//# sourceMappingURL=PreconditionStore.js.map