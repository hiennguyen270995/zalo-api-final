import type { CatalogItem } from "../models/index.js";
export type GetCatalogListPayload = {
    limit?: number;
    lastProductId?: number;
    page?: number;
};
export type GetCatalogListResponse = {
    items: CatalogItem[];
    version: number;
    has_more: number;
};
export declare const getCatalogListFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (payload: GetCatalogListPayload) => Promise<GetCatalogListResponse>;
