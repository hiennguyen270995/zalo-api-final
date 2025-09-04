import { ThreadType } from "../models/index.js";
import type { StickerDetail } from "./getStickersDetail.js";
export type SendStickerResponse = {
    msgId: number;
};
export declare const sendStickerFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (sticker: StickerDetail, threadId: string, type?: ThreadType) => Promise<SendStickerResponse>;
