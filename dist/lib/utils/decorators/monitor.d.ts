/**
 * @since 1.0.0
 * @param prop The property on which the status should be assigned.
 * @param status Wheter the property should be ignored or not.
 * @private
 */
export declare function monitorIgnoreOptions(prop: string, status?: boolean): ClassDecorator;
/**
 * Should the decorated monitor ignore bots.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
export declare const ignoreBots: (status?: boolean | undefined) => ClassDecorator;
/**
 * Should the decorated monitor ignore users.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
export declare const ignoreUsers: (status?: boolean | undefined) => ClassDecorator;
/**
 * Should the decorated monitor ignore its self.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
export declare const ignoreSelf: (status?: boolean | undefined) => ClassDecorator;
/**
 * Should the decorated monitor ignore others.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
export declare const ignoreOthers: (status?: boolean | undefined) => ClassDecorator;
/**
 * Should the decorated monitor ignore webhooks.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
export declare const ignoreWebhooks: (status?: boolean | undefined) => ClassDecorator;
/**
 * Should the decorated monitor ignore edits.
 * @since 1.0.0
 * @param status Whether the given group should be ignored or not.
 */
export declare const ignoreEdits: (status?: boolean | undefined) => ClassDecorator;
//# sourceMappingURL=monitor.d.ts.map