---
description: Giải tán nhóm
---

# disperseGroup

## api.disperseGroup(groupId)

### Parameters

* groupId `string`

### Return

`Promise<DisperseGroupResponse>`

### Types

```typescript
export type DisperseGroupResponse = "";
```

### Examples

```typescript
const groupId = "0000000000000000000";

api.disperseGroup(groupId)
    .then(console.log)
    .catch(console.error);
```
