export type GetPendingGroupMembersResponse = {
    time: number;
    users: {
        uid: string;
        dpn: string;
        avatar: string;
        user_submit: null;
    }[];
};
export declare const getPendingGroupMembersFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (groupId: string) => Promise<GetPendingGroupMembersResponse>;
