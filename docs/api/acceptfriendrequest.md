---
description: Chấp nhận lời mời kết bạn
---

# acceptFriendRequest

## api.acceptFriendRequest(userId)

### Parameters

* &#x20;userId `string`

### Return

`Promise<AcceptFriendRequestResponse>`

### Types

```typescript
export type AcceptFriendRequestResponse = "";
```

### Examples

```typescript
const userId = "0000000000000000001";

await api.acceptFriendRequest(userId);
```
