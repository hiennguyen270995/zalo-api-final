---
description: Lấy thông tin của tài khoản đã đăng nhập
---

# fetchAccountInfo

## api.fetchAccountInfo()

### Parameters

### Return

`Promise<FetchAccountInfoResponse>`

### Types

```typescript
export type FetchAccountInfoResponse = User;
```

### Examples

```typescript
api.fetchAccountInfo()
    .then(console.log)
    .catch(console.error);
```

### Related

* [User](../models/user)
