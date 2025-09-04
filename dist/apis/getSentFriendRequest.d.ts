import type { ZBusinessPackage } from "../models/ZBusiness.js";
export type GetSentFriendRequestResponse = {
    [userId: string]: {
        userId: string;
        zaloName: string;
        displayName: string;
        avatar: string;
        globalId: string;
        bizPkg: ZBusinessPackage;
        fReqInfo: {
            message: string;
            src: number;
            time: number;
        };
    };
};
export declare const getSentFriendRequestFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => () => Promise<GetSentFriendRequestResponse>;
