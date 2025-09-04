import { ThreadType } from "../models/index.js";
export type SetPinnedConversationsResponse = "";
export declare const setPinnedConversationsFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (pinned: boolean, threadId: string | string[], type?: ThreadType) => Promise<"">;
