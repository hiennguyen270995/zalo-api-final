---
description: Bật link tham gia nhóm
---

# enableGroupLink

## api.enableGroupLink(groupId)

### Parameters

* groupId `string`

### Return

`Promise<EnableGroupLinkResponse>`

### Types

```typescript
export type EnableGroupLinkResponse = {
    link: string;
    expiration_date: number;
    enabled: number;
};
```

### Examples

```typescript
api.enableGroupLink("000000000000000000")
    .then(console.log).catch(console.error);
```

### Related

* [ReminderRepeatMode & ReminderUser & ReminderGroup](../models/reminder)
* [ThreadType](../models/enum)
