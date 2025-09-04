---
description: Tạo ghi chú mới
---

# createNote

## api.createNote(options, groupId)

### Parameters

* options `CreateNoteOptions`
  * title `string`
  * pinAct `boolean?`
    * Ghim ghi chú, mặc định `false`
* groupId `string`

### Return

`Promise<CreateNoteResponse>`&#x20;

### Types

```typescript
export type CreateNoteOptions = {
    title: string;
    pinAct?: boolean;
};

export type CreateNoteResponse = NoteDetail;
```

### Examples

Tạp ghi chú mới

```typescript
const groupId = "0000000000000000000";

api.createNote(
    {
        title: "ghi chú mới",
        pinAct: true
    },
    groupId,
)
    .then(console.log)
    .catch(console.error);
```

### Related

* [NoteDetail](../models/board)
