export type GetGroupLinkDetailResponse = {
    link: string;
    expiration_date: number;
    enabled: number;
};
export declare const getGroupLinkDetailFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (groupId: string) => Promise<GetGroupLinkDetailResponse>;
