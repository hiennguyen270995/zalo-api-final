---
description: Thêm người dùng vào danh sách chặn của nhóm
---

# addGroupBlockedMember

## api.addGroupBlockedMember(memberId, groupId)

### Parameters

* memberId `string` | `string[]`
* groupId `string`

### Return

`Promise<AddGroupBlockedMemberResponse>`

### Types

```typescript
export type AddGroupBlockedMemberResponse = "";
```

### Examples

```typescript
const memberId = "0000000000000000001";
const groupId = "0000000000000000000";

await api.addGroupBlockedMember(memberId, groupId);
```
