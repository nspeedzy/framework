"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentStore = void 0;
const Argument_1 = require("./Argument");
const BaseStore_1 = require("./base/BaseStore");
class ArgumentStore extends BaseStore_1.BaseStore {
    constructor(client) {
        super(client, Argument_1.Argument, { name: 'arguments' });
    }
}
exports.ArgumentStore = ArgumentStore;
//# sourceMappingURL=ArgumentStore.js.map