---
description: Xóa dấu đánh chưa đọc
---

# removeUnreadMark

## api.removeUnreadMark(threadId\[, type])

### Parameters

* threadId `string` | `string[]`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<RemoveUnreadMarkResponse>`

### Types

```typescript
export type RemoveUnreadMarkResponse = {
    data: {
        updateId: number;
    };
    status: number;
};
```

### Examples

```javascript
const threadId = "0000000000000000";

api.removeUnreadMark(threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);
```
