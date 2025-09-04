import type { AutoReplyItem, AutoReplyScope } from "../models/index.js";
export type UpdateAutoReplyPayload = {
    content: string;
    isEnable: boolean;
    startTime: number;
    endTime: number;
    scope: AutoReplyScope;
    uids?: string | string[];
};
export type UpdateAutoReplyResponse = {
    item: AutoReplyItem;
    version: number;
};
export declare const updateAutoReplyFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (payload: UpdateAutoReplyPayload) => Promise<UpdateAutoReplyResponse>;
