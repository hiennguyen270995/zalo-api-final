export type EditNoteGroupOptions = {
    /**
     * New note title
     */
    title: string;
    /**
     * Topic ID to edit note from
     */
    topicId: string;
    /**
     * Should the note be pinned?
     */
    pinAct?: boolean;
};
export type EditNoteGroupResponse = {
    id: string;
    type: number;
    color: number;
    emoji: string;
    startTime: number;
    duration: number;
    params: {
        title: string;
        extra: string;
    };
    creatorId: string;
    editorId: string;
    createTime: number;
    editTime: number;
    repeat: number;
};
export declare const editNoteGroupFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (options: EditNoteGroupOptions, groupId: string) => Promise<EditNoteGroupResponse>;
