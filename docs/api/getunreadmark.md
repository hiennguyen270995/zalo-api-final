---
description: Lấy danh sách cuộc trò chuyện được đánh dấu chưa đọc
---

# getUnreadMark

## api.getUnreadMark()

### Parameters

### Return

`Promise<GetUnreadMarkResponse>`

### Types

```typescript
export type UnreadMark = {
    id: number;
    cliMsgId: number;
    fromUid: number;
    ts: number;
};

export type GetUnreadMarkResponse = {
    data: {
        convsGroup: UnreadMark[];
        convsUser: UnreadMark[];
    };
    status: number;
};
```

### Examples

```javascript
api.getUnreadMark()
    .then(console.log)
    .catch(console.error);
```
