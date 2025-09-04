import type { ReminderRepeatMode, ReminderGroup, ReminderUser } from "../models/index.js";
import { ThreadType } from "../models/index.js";
export type EditReminderOptions = {
    title: string;
    topicId: string;
    emoji?: string;
    startTime?: number;
    repeat?: ReminderRepeatMode;
};
export type CreateReminderUser = ReminderUser;
export type CreateReminderGroup = ReminderGroup & {
    groupId: string;
    eventType: number;
    repeatInfo: null;
    repeatData: unknown[];
};
export type EditReminderResponse = CreateReminderUser | CreateReminderGroup;
export declare const editReminderFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (options: EditReminderOptions, threadId: string, type?: ThreadType) => Promise<EditReminderResponse>;
