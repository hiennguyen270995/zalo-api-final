---
description: Lấy danh sách cuộc trò chuyện đã ẩn bằng Pin
---

# getHiddenConversPin

## api.getHiddenConversPin()

### Parameters

### Return

`Promise<GetHiddenConversPinResponse>`

#### GetHiddenConversPinResponse

* pin `string`
* threads `{ is_group: number; thread_id: string }[]`

### Examples

```javascript
api.getHiddenConversPin()
    .then(console.log)
    .catch(console.error);
```
