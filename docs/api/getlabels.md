---
description: Lấy danh sách thẻ phân loại
---

# getLabels

## api.getLabels()

### Parameters

### Return

`Promise<GetLabelsResponse>`

### Types

```typescript
export type GetLabelsResponse = {
    labelData: {
        id: number;
        text: string;
        textKey: string;
        conversations: string[];
        color: string;
        offset: number;
        emoji: string;
        createTime: number;
    }[];
    version: number;
    lastUpdateTime: number;
}
```

### Examples

```javascript
api.getLabels()
    .then(console.log)
    .catch(console.error);
```
