---
description: Thêm phó nhóm
---

# addGroupDeputy

## api.addGroupDeputy(memberId, groupId)

### Parameters

* memberId `string` | `string[]`
* groupId `string`

### Return

`Promise<AddGroupDeputyResponse>`

### Types

```typescript
export type AddGroupDeputyResponse = "";
```

### Examples

```typescript
const memberId = "0000000000000000001";
const groupId = "0000000000000000000";

await api.addGroupDeputy(memberId, groupId);
```
