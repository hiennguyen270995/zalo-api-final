import { ThreadType } from "../models/index.js";
export type SetHiddenConversationsResponse = "";
export declare const setHiddenConversationsFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (hidden: boolean, threadId: string, type?: ThreadType) => Promise<"">;
