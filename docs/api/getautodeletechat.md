---
description: Lấy danh sách cuộc trò chuyện tự động xóa
---

# getAutoDeleteChat

## api.getAutoDeleteChat()

### Parameters

### Return

`Promise<GetAutoDeleteChatResponse>`

#### GetAutoDeleteChatResponse

* destId `string`
* isGroup `boolean`
* ttl `number`
* createdAt `number`

### Examples

```javascript
await api.getAutoDeleteChat()
    .then(console.log)
    .catch(console.error);
```
