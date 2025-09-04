export type LabelData = {
    id: number;
    text: string;
    textKey: string;
    conversations: string[];
    color: string;
    offset: number;
    emoji: string;
    createTime: number;
};
export type UpdateLabelsPayload = {
    labelData: LabelData[];
    version: number;
};
export type UpdateLabelsResponse = {
    labelData: LabelData[];
    version: number;
    lastUpdateTime: number;
};
export declare const updateLabelsFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (label: UpdateLabelsPayload) => Promise<{
    labelData: any;
    version: number;
    lastUpdateTime: number;
}>;
