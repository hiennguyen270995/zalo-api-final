import type { PollDetail } from "../models/index.js";
export type PollDetailResponse = PollDetail;
export declare const getPollDetailFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (pollId: string) => Promise<PollDetail>;
