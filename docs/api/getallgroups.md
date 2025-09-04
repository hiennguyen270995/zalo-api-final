---
description: Lấy danh sách nhóm đã tham gia
---

# getAllGroups

## api.getAllGroups()

### Parameters

### Return

`Promise<GetAllGroupsResponse>`

### Types

```typescript
export type GetAllGroupsResponse = {
    version: string;
    gridVerMap: {
        [groupId: string]: string;
    };
};
```

### Examples

```typescript
await api.getAllGroups()
    .then(console.log)
    .catch(console.error);
```
