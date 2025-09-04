import type { BusinessCategory, Gender } from "../models/index.js";
export type UpdateProfilePayload = {
    name: string;
    dob: `${string}-${string}-${string}`;
    gender: Gender;
    description?: string;
    cate?: BusinessCategory;
    address?: string;
    website?: string;
    email?: string;
};
export type ChangeAccountSettingResponse = "";
export declare const updateProfileFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (payload: UpdateProfilePayload, isBusiness?: boolean) => Promise<"">;
