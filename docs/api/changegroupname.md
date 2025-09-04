---
description: Cập nhật tên nhóm
---

# changeGroupName

## api.changeGroupName(name, groupId)

### Parameters

* name `string`
* groupId `string`

### Return

`Promise<ChangeGroupNameResponse>`

### Types

```typescript
export type ChangeGroupNameResponse = {
    status: number;
};
```

### Examples

Cập nhật tên nhóm

```typescript
api
    .changeGroupName("Tên Mới", "0000000000000000000")
    .then(console.log).catch(console.error);
```
