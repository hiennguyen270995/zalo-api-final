import type { Gender, ZBusinessPackage } from "../models/index.js";
export type CollapseMsgListConfig = {
    collapseId: number;
    collapseXItem: number;
    collapseYItem: number;
};
export type ReceivedFriendRequestsDataInfo = {
    userId: string;
    zaloName: string;
    displayName: string;
    avatar: string;
    phoneNumber: string;
    status: string;
    gender: Gender;
    dob: number;
    type: number;
    recommType: number;
    recommSrc: number;
    recommTime: number;
    recommInfo: {
        source: number;
        message: string;
    };
    bizPkg: ZBusinessPackage;
    isSeenFriendReq: boolean;
};
export type GetReceivedFriendRequestsResponse = {
    expiredDuration: number;
    collapseMsgListConfig: CollapseMsgListConfig;
    recommItems: {
        recommItemType: number;
        dataInfo: ReceivedFriendRequestsDataInfo;
    }[];
};
export declare const getReceivedFriendRequestsFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => () => Promise<GetReceivedFriendRequestsResponse>;
