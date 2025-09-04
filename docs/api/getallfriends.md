---
description: Lấy danh sách bạn bè của tài khoản đã đăng nhập
---

# getAllFriends

## api.getAllFriends()

### Parameters

* count `number?`
  * mặc định 20000
* page `number?`
  * mặc định 1

### Return

`Promise<GetAllFriendsResponse>`

### Types

```typescript
export type GetAllFriendsResponse = User[];
```

### Examples

```typescript
await api.getAllFriends()
    .then(console.log)
    .catch(console.error);
```

### Related

* [User](../models/user)
