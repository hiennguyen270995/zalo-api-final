import type { ReminderGroup } from "../models/index.js";
export type GetReminderResponse = ReminderGroup & {
    groupId: string;
    eventType: number;
    responseMem: {
        rejectMember: number;
        myResp: number;
        acceptMember: number;
    };
    repeatInfo: null;
    repeatData: unknown[];
};
export declare const getReminderFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (reminderId: string) => Promise<GetReminderResponse>;
