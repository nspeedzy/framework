"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStore = void 0;
const pieces_1 = require("@sapphire/pieces");
class BaseStore extends pieces_1.Store {
    constructor(client, Ctor) {
        super(Ctor, {
            onError: (error) => client.emit('error', error),
            onUnload: (store, piece) => client.emit('unload', store, piece),
            onPostLoad: (store, piece) => client.emit('postLoad', store, piece)
        });
        this.client = client;
    }
    get extras() {
        return { ...super.extras, client: this.client };
    }
}
exports.BaseStore = BaseStore;
//# sourceMappingURL=BaseStore.js.map