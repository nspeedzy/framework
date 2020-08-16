"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandStore = void 0;
const core_1 = require("@klasa/core");
const Command_1 = require("./Command");
/**
 * Stores all Command pieces
 * @since 1.0.0
 */
class CommandStore extends core_1.AliasStore {
    /**
     * Constructs the Command Store for use
     * @since 1.0.0
     * @param client The framework client
     */
    constructor(client) {
        super(client, 'commands', Command_1.Command);
    }
}
exports.CommandStore = CommandStore;
//# sourceMappingURL=CommandStore.js.map