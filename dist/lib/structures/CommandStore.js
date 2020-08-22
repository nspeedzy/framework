"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandStore = void 0;
const Command_1 = require("./Command");
const pieces_1 = require("@sapphire/pieces");
/**
 * Stores all Command pieces
 * @since 1.0.0
 */
class CommandStore extends pieces_1.AliasStore {
    constructor(client) {
        // @ts-expect-error Abstract classes are not assignable to Ctor<T>.
        super(Command_1.Command);
        this.client = client;
    }
}
exports.CommandStore = CommandStore;
//# sourceMappingURL=CommandStore.js.map