import type { GroupSetting } from "../models/index.js";
export type GetGroupLinkInfoPayload = {
    link: string;
    memberPage?: number;
};
export type GetGroupLinkInfoResponse = {
    groupId: string;
    name: string;
    desc: string;
    type: number;
    creatorId: string;
    avt: string;
    fullAvt: string;
    adminIds: string[];
    currentMems: {
        id: string;
        dName: string;
        zaloName: string;
        avatar: string;
        avatar_25: string;
        accountStatus: number;
        type: number;
    }[];
    admins: unknown[];
    hasMoreMember: number;
    subType: number;
    totalMember: number;
    setting: GroupSetting;
    globalId: string;
};
export declare const getGroupLinkInfoFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (payload: GetGroupLinkInfoPayload) => Promise<GetGroupLinkInfoResponse>;
