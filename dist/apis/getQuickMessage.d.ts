import type { QuickMessage } from "../models/index.js";
export type GetQuickMessageResponse = {
    cursor: number;
    version: number;
    items: QuickMessage[];
};
export declare const getQuickMessageFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => () => Promise<GetQuickMessageResponse>;
