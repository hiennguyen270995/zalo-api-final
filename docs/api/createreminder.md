---
description: Tạo nhắc hẹn
---

# createReminder

## api.createReminder(options, threadId\[, type])

### Parameters

* options `CreateReminderOptions`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`   &#x20;

### Return

`Promise<CreateReminderResponse>`&#x20;

### Types

```typescript
export type CreateReminderOptions = {
    title: string;
    emoji?: string;
    startTime?: number;
    repeat?: ReminderRepeatMode;
};

export type CreateReminderUser = ReminderUser;
export type CreateReminderGroup = Omit<ReminderGroup, "responseMem">;

export type CreateReminderResponse = CreateReminderUser | CreateReminderGroup;
```

### Examples

```typescript
const startTime = new Date();
startTime.setHours(22, 0, 0, 0);

api
    .createReminder({
        title: "Đến hẹn đi ăn tối.",
        startTime: startTime.getTime()
    })
    .then(console.log)
    .catch(console.error);
```

### Related

* [ReminderRepeatMode & ReminderUser & ReminderGroup](../models/reminder)
* [ThreadType](../models/enum)
