---
description: Chặn người dùng
---

# blockUser

## api.blockUser(userId)

### Parameters

* userId `string`

### Return

`Promise<BlockUserResponse>`

### Types

```typescript
export type BlockUserResponse = "";
```

### Examples

```typescript
const userId = "0000000000000000001";
api
    .blockUser(userId)
    .then(console.log).catch(console.error);
```
