"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentStore = void 0;
const BaseStore_1 = require("./base/BaseStore");
class ArgumentStore extends BaseStore_1.BaseStore {
    constructor(client) {
        // @ts-expect-error Abstract classes are not assignable to Ctor<T>.
        super(client, Argument);
    }
}
exports.ArgumentStore = ArgumentStore;
//# sourceMappingURL=ArgumentStore.js.map