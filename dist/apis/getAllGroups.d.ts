export type GetAllGroupsResponse = {
    version: string;
    gridVerMap: {
        [groupId: string]: string;
    };
};
export declare const getAllGroupsFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => () => Promise<GetAllGroupsResponse>;
