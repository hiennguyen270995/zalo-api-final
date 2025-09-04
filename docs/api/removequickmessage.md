---
description: Xóa tin nhắn nhanh
---

# removeQuickMessage

## api.removeQuickMessage(itemIds)

### Parameters

* itemIds `string | string[]`
  * id của tin nhắn nhanh

### Return

`Promise<RemoveQuickMessageResponse>`

### Types

```typescript
export type RemoveQuickMessageResponse = {
    itemIds: number[];
    version: number;
};
```

### Examples

```javascript
const itemIds = [1,2,3,4];

api.removeQuickMessage(itemIds)
    .then(console.log)
    .catch(console.error);
```
