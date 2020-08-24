import type { Piece, Store } from '@sapphire/pieces';
import type { Message as DjSMessage } from 'discord.js';
import type { Command } from '../structures/Command';
export declare enum Events {
    ChannelCreate = "channelCreate",
    ChannelDelete = "channelDelete",
    ChannelPinsUpdate = "channelPinsUpdate",
    ChannelUpdate = "channelUpdate",
    Debug = "debug",
    Warn = "warn",
    Disconnect = "disconnect",
    EmojiCreate = "emojiCreate",
    EmojiDelete = "emojiDelete",
    EmojiUpdate = "emojiUpdate",
    Error = "error",
    GuildBanAdd = "guildBanAdd",
    GuildBanRemove = "guildBanRemove",
    GuildCreate = "guildCreate",
    GuildDelete = "guildDelete",
    GuildUnavailable = "guildUnavailable",
    GuildIntegrationsUpdate = "guildIntegrationsUpdate",
    GuildMemberAdd = "guildMemberAdd",
    GuildMemberAvailable = "guildMemberAvailable",
    GuildMemberRemove = "guildMemberRemove",
    GuildMembersChunk = "guildMembersChunk",
    GuildMemberSpeaking = "guildMemberSpeaking",
    GuildMemberUpdate = "guildMemberUpdate",
    GuildUpdate = "guildUpdate",
    InviteCreate = "inviteCreate",
    InviteDelete = "inviteDelete",
    Message = "message",
    MessageDelete = "messageDelete",
    MessageReactionRemoveAll = "messageReactionRemoveAll",
    MessageReactionRemoveEmoji = "messageReactionRemoveEmoji",
    MessageDeleteBulk = "messageDeleteBulk",
    MessageReactionAdd = "messageReactionAdd",
    MessageReactionRemove = "messageReactionRemove",
    MessageUpdate = "messageUpdate",
    PresenceUpdate = "presenceUpdate",
    RateLimit = "rateLimit",
    Ready = "ready",
    Invalidated = "invalidated",
    RoleCreate = "roleCreate",
    RoleDelete = "roleDelete",
    RoleUpdate = "roleUpdate",
    TypingsStart = "typingStart",
    UserUpdate = "userUpdate",
    VoiceStateUpdate = "voiceStateUpdate",
    WebhookUpdate = "webhookUpdate",
    ShardDisconnect = "shardDisconnect",
    ShardError = "shardError",
    SharedReady = "shardReady",
    ShardReconnecting = "shardReconnecting",
    ShardResume = "shardResume",
    Unload = "unload",
    PostLoad = "postLoad",
    MentionPrefixOnly = "mentionPrefixOnly",
    PrefixedMessage = "prefixedMessage",
    UnknownCommandName = "unknownCommandName",
    UnknownCommand = "unknownCommand",
    PreCommandRun = "preCommandRun"
}
declare module 'discord.js' {
    interface ClientEvents {
        [Events.Unload]: [Store<Piece>, Piece];
        [Events.PostLoad]: [Store<Piece>, Piece];
        [Events.MentionPrefixOnly]: [DjSMessage];
        [Events.PrefixedMessage]: [DjSMessage, string];
        [Events.UnknownCommandName]: [DjSMessage, string];
        [Events.UnknownCommand]: [DjSMessage, string, string];
        [Events.PreCommandRun]: [DjSMessage, Command, string, string];
        [K: string]: unknown[];
    }
}
//# sourceMappingURL=Events.d.ts.map