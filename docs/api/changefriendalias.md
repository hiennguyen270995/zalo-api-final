---
description: Cập nhật tên gợi nhớ cho bạn bè
---

# changeFriendAlias

## api.changeFriendAlias(alias, friendId)

### Parameters

* alias `string`
* friendId `string`

### Return

`Promise<ChangeFriendAliasResponse>`

### Types

```typescript
export type ChangeFriendAliasResponse = "";
```

### Examples

```typescript
const alias = "Tên gợi nhớ";
const friendId = "0000000000000000001";

api
    .changeFriendAlias(alias, friendId)
    .then(console.log).catch(console.error);
```
