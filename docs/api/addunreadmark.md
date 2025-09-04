---
description: Đánh dấu chưa đọc
---

# addUnreadMark

## api.addUnreadMark(threadId\[, type])

### Parameters

* threadId `string`      &#x20;
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<AddUnreadMarkResponse>`

### Types

```typescript
export type AddUnreadMarkResponse = {
    data: {
        updateId: number;
    };
    status: number;
};
```

### Examples

Đánh dấu chưa đọc 1 nhóm

```typescript
import { ThreadType } from "zalo-api-final";

api
    .addUnreadMark("000000000000000000", ThreadType.Group)
    .then(console.log).catch(console.error);
```

### Related

* [ThreadType](../models/enum)
