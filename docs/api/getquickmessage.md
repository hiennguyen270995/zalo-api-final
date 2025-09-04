---
description: Lấy danh sách tin nhắn nhanh
---

# getQuickMessage

## api.getQuickMessage()

### Parameters

### Return

`Promise<GetQuickMessageResponse>`

### Types

```typescript
export type GetQuickMessageResponse = {
    cursor: number;
    version: number;
    items: {
        id: number;
        keyword: string;
        type: number;
        createdTime: number;
        lastModified: number;
        message: {
            title: string;
            params: string | null;
        };
        media: null;
    }[];
};
```

### Examples

```javascript
api.getQuickMessage()
    .then(console.log)
    .catch(console.error);
```
