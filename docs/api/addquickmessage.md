---
description: Thêm tin nhắn nhanh
---

# addQuickMessage

## api.addQuickMessage(addPayload)

### Parameters

* addPayload `AddQuickMessagePayload`

### Return

`Promise<AddQuickMessageResponse>`

### Types

```typescript
export type AddQuickMessagePayload = {
    keyword: string;
    title: string;
    media?: AttachmentSource;
};

export type AddQuickMessageResponse = {
    item: QuickMessage;
    version: number;
};
```

### Examples

```typescript
await api.addQuickMessage({
    keyword: "hi",
    title: "Xin chào, mình có thể giúp gì cho bạn?",
    media: "./hello.png"
});
```

### Related

* [AttachmentSource](../models/attachment)
* [QuickMessage](../models/quickmessage)
