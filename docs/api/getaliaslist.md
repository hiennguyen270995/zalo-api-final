---
description: Lấy toàn bộ thẻ phân loại
---

# getAliasList

## api.getAliasList(\[count, page])

### Parameters

* count `number?`
  * mặc định 100
* page `number?`
  * mặc định 1

### Return

`Promise<GetAliasListResponse>`

### Types

```typescript
export type GetAliasListResponse = {
    items: {
        userId: string;
        alias: string;
    }[];
    updateTime: string;
};
```

### Examples

```javascript
await api.getAliasList()
    .then(console.log)
    .catch(console.error);
```
