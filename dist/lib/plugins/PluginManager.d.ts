import type { ClientOptions } from 'discord.js';
import type { SapphireClient } from '../SapphireClient';
import { PluginHook } from '../types/Enums';
import type { Plugin } from './Plugin';
export interface SapphirePluginHook {
    (this: SapphireClient, options?: ClientOptions): unknown;
}
export interface SapphirePluginHookEntry {
    hook: SapphirePluginHook;
    type: PluginHook;
    name?: string;
}
export declare class PluginManager {
    readonly registry: Set<SapphirePluginHookEntry>;
    registerHook(hook: SapphirePluginHook, type: PluginHook, name?: string): this;
    registerPreInitializationHook(hook: SapphirePluginHook, name?: string): this;
    registerPostInitializationHook(hook: SapphirePluginHook, name?: string): this;
    registerPreLoginHook(hook: SapphirePluginHook, name?: string): this;
    registerPostLoginHook(hook: SapphirePluginHook, name?: string): this;
    use(plugin: typeof Plugin): this;
    values(hook?: PluginHook): Generator<SapphirePluginHookEntry, void, unknown>;
}
//# sourceMappingURL=PluginManager.d.ts.map