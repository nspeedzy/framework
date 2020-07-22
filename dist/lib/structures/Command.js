"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const core_1 = require("@klasa/core");
const ratelimits_1 = require("@klasa/ratelimits");
require("../types/Enums");
class Command extends core_1.AliasPiece {
    /**
     * @since 0.0.1
     * @param store The command store
     * @param directory The base directory to the pieces folder
     * @param file The path from the pieces folder to the command file
     * @param options Optional Command settings
     */
    constructor(store, directory, files, options = {}) {
        super(store, directory, files, options);
        options = options;
        this.name = this.name.toLowerCase();
        this.requiredPermissions = new core_1.Permissions(options.requiredPermissions).freeze();
        this.deletable = options.deletable;
        this.description = options.description;
        this.extendedHelp = options.extendedHelp;
        this.fullCategory = files.slice(0, -1);
        this.guarded = options.guarded;
        this.hidden = options.hidden;
        this.nsfw = options.nsfw;
        this.permissionLevel = options.permissionLevel;
        this.promptLimit = options.promptLimit;
        this.promptTime = options.promptTime;
        this.flags = options.flags;
        this.quotedStringSupport = options.quotedStringSupport;
        this.runIn = options.runIn;
        // todo - this.usage = new CommandUsage(this.client, options.usage as string, options.usageDelim as string, this);
        this.cooldownLevel = options.cooldownLevel;
        if (!["author" /* Author */, "channel" /* Channel */, "guild" /* Guild */].includes(this.cooldownLevel))
            throw new Error('Invalid cooldownLevel');
        this.cooldowns = new ratelimits_1.RateLimitManager(options.cooldown, options.bucket);
    }
    /**
     * The main category for the command
     * @since 0.0.1
     * @readonly
     */
    get category() {
        return this.fullCategory.length > 0 ? this.fullCategory[0] : 'General';
    }
    /**
     * The sub category for the command
     * @since 0.0.1
     * @readonly
     */
    get subCategory() {
        return this.fullCategory.length > 1 ? this.fullCategory[1] : 'General';
    }
    /**
     * Defines the JSON.stringify behavior of the command
     * @returns {Object}
     */
    toJSON() {
        return {
            ...super.toJSON(),
            requiredPermissions: this.requiredPermissions.toArray(),
            category: this.category,
            deletable: this.deletable,
            description: this.description,
            extendedHelp: this.extendedHelp,
            fullCategory: this.fullCategory,
            guarded: this.guarded,
            hidden: this.hidden,
            nsfw: this.nsfw,
            permissionLevel: this.permissionLevel,
            promptLimit: this.promptLimit,
            promptTime: this.promptTime,
            quotedStringSupport: this.quotedStringSupport,
            runIn: this.runIn.slice(0),
            subCategory: this.subCategory
            /* todo - usage: {
                usageString: this.usage.usageString,
                usageDelim: this.usage.usageDelim,
                nearlyFullUsage: this.usage.nearlyFullUsage
            } */
        };
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map