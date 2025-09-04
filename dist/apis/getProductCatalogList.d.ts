import type { ProductCatalogItem } from "../models/index.js";
export type GetProductCatalogListPayload = {
    catalogId: string;
    limit?: number;
    versionCatalog?: number;
    lastProductId?: string;
    page?: number;
};
export type GetProductCatalogListResponse = {
    items: ProductCatalogItem[];
    version: number;
    has_more: number;
};
export declare const getProductCatalogListFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (payload: GetProductCatalogListPayload) => Promise<GetProductCatalogListResponse>;
