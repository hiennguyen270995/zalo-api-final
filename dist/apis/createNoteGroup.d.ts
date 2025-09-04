import type { NoteDetail } from "../models/index.js";
export type CreateNoteGroupOptions = {
    title: string;
    pinAct?: boolean;
};
export type CreateNoteGroupResponse = NoteDetail;
export declare const createNoteGroupFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (options: CreateNoteGroupOptions, groupId: string) => Promise<NoteDetail>;
