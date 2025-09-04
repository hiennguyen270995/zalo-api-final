---
description: Bỏ chặn người dùng
---

# unblockUser

## api.unblockUser(userId)

### Parameters

* userId `string`

### Return

`Promise<UnBlockUserResponse>`

### Examples

```javascript
const userId = "0000000000000001"

api.unblockUser(userId)
    .then(console.log)
    .catch(console.error);
```
