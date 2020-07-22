"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandDefaults = void 0;
require("@klasa/dapi-types");
require("../types/Enums");
exports.commandDefaults = {
    aliases: [],
    bucket: 1,
    cooldown: 0,
    cooldownLevel: "author" /* Author */,
    description: '',
    extendedHelp: '',
    enabled: true,
    flags: [],
    guarded: false,
    hidden: false,
    nsfw: false,
    permissionLevel: 0,
    promptLimit: 0,
    promptTime: 30000,
    requiredSettings: [],
    requiredPermissions: 0,
    runIn: [0 /* GuildText */, 1 /* DM */],
    usage: '',
    usageDelim: '',
    quotedStringSupport: false,
    deletable: false
};
//# sourceMappingURL=constants.js.map