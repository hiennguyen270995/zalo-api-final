export type GetGroupBlockedMemberPayload = {
    page?: number;
    count?: number;
};
export type GetGroupBlockedMemberResponse = {
    blocked_members: {
        id: string;
        dName: string;
        zaloName: string;
        avatar: string;
        avatar_25: string;
        accountStatus: number;
        type: number;
    }[];
    has_more: number;
};
export declare const getGroupBlockedMemberFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (payload: GetGroupBlockedMemberPayload, groupId: string) => Promise<GetGroupBlockedMemberResponse>;
