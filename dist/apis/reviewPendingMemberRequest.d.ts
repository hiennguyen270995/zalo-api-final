export type ReviewPendingMemberRequestPayload = {
    members: string | string[];
    isApprove: boolean;
};
export type ReviewPendingMemberRequestResponse = Record<string, number>;
export declare const reviewPendingMemberRequestFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (payload: ReviewPendingMemberRequestPayload, groupId: string) => Promise<ReviewPendingMemberRequestResponse>;
