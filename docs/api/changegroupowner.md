---
description: Cập nhật tên nhóm
---

# changeGroupOwner

## api.changeGroupOwner(memberId, groupId)

### Parameters

* memberId `string`
* groupId `string`

### Return

`Promise<ChangeGroupOwnerResponse>`

### Types

```typescript
export type ChangeGroupOwnerResponse = {
    time: number;
};
```

### Examples

Thay chủ nhóm

```typescript
const memberId = "0000000000000000001";
const groupId = "0000000000000000000";

api
    .changeGroupOwner(memberId, groupId)
    .then(console.log).catch(console.error);
```
