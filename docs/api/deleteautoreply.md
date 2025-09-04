---
description: Xóa cấu hình tự động trả lời (dành cho zBusiness)
---

# deleteAutoReply

## api.deleteAutoReply(id)

### Parameters

* id `number`

### Return

`Promise<DeleteAutoReplyResponse>`

### Types

```typescript
export type DeleteAutoReplyResponse = {
    item: number;
    version: number;
};
```

### Examples

```typescript
api
    .deleteAutoReply(1)
    .then(console.log).catch(console.error);
```
