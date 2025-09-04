---
description: Chỉnh sửa nhắc hẹn
---

# editReminder

## api.editReminder(options, groupId)

### Parameters

* options `EditReminderOptions`
* groupId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<EditReminderResponse>`

### Types

```typescript
export type EditReminderOptions = {
    title: string;
    topicId: string;
    emoji?: string;
    startTime?: number;
    repeat?: ReminderRepeatMode;
};

export type EditReminderUser = ReminderUser;
export type EditReminderGroup = Omit<ReminderGroup, "responseMem">;

export type EditReminderResponse = EditReminderUser | EditReminderGroup;
```

### Examples

```typescript
import { ThreadType } from "zalo-api-final";

const groupId = "0000000000000000000";
const topicId = "";
const newTitle = "Tiêu đề mới"

api
    .editReminder(
        {
            topicId: topicId,
            title: newTitle,
        },
        groupId,
        ThreadType.Group
    )
    .then(console.log)
    .catch(console.error);
```

### Related

* [ReminderRepeatMode & ReminderUser & ReminderGroup](../models/reminder)
* [ThreadType](../models/enum)
