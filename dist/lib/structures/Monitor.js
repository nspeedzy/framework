"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
const core_1 = require("@klasa/core");
class Monitor extends core_1.Piece {
    constructor(store, directory, file, options) {
        super(store, directory, file, options);
    }
    async run(message) {
        if (!this.enabled ||
            (this.ignoreBots && message.author.bot) ||
            (this.ignoreBots && !message.author.bot) ||
            (this.ignoreSelf && this.client.user === message.author) ||
            (this.ignoreOthers && this.client.user !== message.author) ||
            (this.ignoreWebhooks && message.webhookID) ||
            (this.ignoreEdits && message.editedTimestamp)) {
            return;
        }
        try {
            await this.handle(message);
        }
        catch (error) {
            // TODO: Change this into an enum
            this.client.emit('monitorError', message, error, this);
        }
    }
}
exports.Monitor = Monitor;
//# sourceMappingURL=Monitor.js.map