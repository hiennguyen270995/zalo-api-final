import type { Gender, ZBusinessPackage } from "../models/index.js";
export type FindUserResponse = {
    avatar: string;
    cover: string;
    status: string;
    gender: Gender;
    dob: number;
    sdob: string;
    globalId: string;
    bizPkg: ZBusinessPackage;
    uid: string;
    zalo_name: string;
    display_name: string;
};
export declare const findUserFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (phoneNumber: string) => Promise<FindUserResponse>;
