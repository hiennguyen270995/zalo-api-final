import type { NoteDetail, PinnedMessageDetail, PollDetail } from "../models/index.js";
import { BoardType } from "../models/index.js";
export type ListBoardOptions = {
    page?: number;
    count?: number;
};
export type BoardItem = {
    boardType: BoardType;
    data: PollDetail | NoteDetail | PinnedMessageDetail;
};
export type GetListBoardResponse = {
    items: BoardItem[];
    count: number;
};
export declare const getListBoardFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (options: ListBoardOptions, groupId: string) => Promise<GetListBoardResponse>;
