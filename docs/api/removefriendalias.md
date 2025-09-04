---
description: Xóa tên gợi nhớ của bạn bè
---

# removeFriendAlias

## api.removeFriendAlias(friendId)

### Parameters

* friendId `string`

### Return

`Promise<RemoveFriendAliasResponse>`

### Types

```typescript
export type RemoveFriendAliasResponse = "";
```

### Examples

```javascript
const friendId = "000000000000000000"

api.removeFriendAlias(friendId)
    .then(console.log)
    .catch(console.error);
```
