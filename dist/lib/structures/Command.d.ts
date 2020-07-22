import { AliasPiece, AliasPieceOptions, Permissions, PermissionsResolvable } from '@klasa/core';
import type { CommandStore } from './CommandStore';
import type { ChannelType } from '@klasa/dapi-types';
import { RateLimitManager } from '@klasa/ratelimits';
import { CooldownLevel } from '../types/Enums';
export declare abstract class Command extends AliasPiece {
    /**
     * Permissions required by the bot to run the command
     * @since 0.0.1
     */
    requiredPermissions: Permissions;
    /**
     * Delete command's response if the trigger message was deleted
     * @since 0.0.1
     */
    deletable: boolean;
    /**
     * A basic summary about the command
     * @since 0.0.1
     */
    description: string;
    /**
     * Longer version of command's summary and how to use it
     * @since 0.0.1
     */
    extendedHelp: string;
    /**
     * Full category name of the command
     * @since 0.0.1
     */
    fullCategory: string[];
    /**
     * Allow disabling of the command in a guild or not
     * @since 0.0.1
     */
    guarded: boolean;
    /**
     * Whehter to show the command in the help message or not
     * @since 0.0.1
     */
    hidden: boolean;
    /**
     * If the command will only work in NSFW channels
     * @since 0.0.1
     */
    nsfw: boolean;
    /**
     * Required level of permission to use the command
     * @since 0.0.1
     */
    permissionLevel: number;
    /**
     * Number of re-prompts of an argument
     * @since 0.0.1
     */
    promptLimit: number;
    /**
     * Time allowed for re-prompts
     * @since 0.0.1
     */
    promptTime: number;
    /**
     * Accepted flags for the command
     * @since 0.0.1
     */
    flags: string[];
    /**
     * Allow use of quoted strings for arguments
     * @since 0.0.1
     */
    quotedStringSupport: boolean;
    /**
     * Which type of channel the command can execute in
     * @since 0.0.1
     */
    runIn: ChannelType[];
    /**
     * Whether the cooldown applies to author, channel or guild
     * @since 0.0.1
     */
    cooldownLevel: CooldownLevel;
    /**
     * The time and limit for cooldown
     * @since 0.0.1
     */
    cooldowns: RateLimitManager;
    /**
     * @since 0.0.1
     * @param store The command store
     * @param directory The base directory to the pieces folder
     * @param file The path from the pieces folder to the command file
     * @param options Optional Command settings
     */
    constructor(store: CommandStore, directory: string, files: readonly string[], options?: CommandOptions);
    /**
     * The main category for the command
     * @since 0.0.1
     * @readonly
     */
    get category(): string;
    /**
     * The sub category for the command
     * @since 0.0.1
     * @readonly
     */
    get subCategory(): string;
    /**
     * Defines the JSON.stringify behavior of the command
     * @returns {Object}
     */
    toJSON(): Record<string, any>;
}
export interface CommandOptions extends AliasPieceOptions {
    bucket?: number;
    cooldown?: number;
    cooldownLevel?: CooldownLevel;
    deletable?: boolean;
    description?: string;
    extendedHelp?: string;
    flags?: string[];
    guarded?: boolean;
    hidden?: boolean;
    nsfw?: boolean;
    permissionLevel?: number;
    promptLimit?: number;
    promptTime?: number;
    quotedStringSupport?: boolean;
    requiredPermissions?: PermissionsResolvable;
    runIn?: ChannelType[];
    usage?: string;
    usageDelim?: string | undefined;
}
//# sourceMappingURL=Command.d.ts.map