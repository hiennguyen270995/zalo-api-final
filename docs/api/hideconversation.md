---
description: Ẩn, bỏ ẩn cuộc trò chuyện
---

# hideConversation

## api.hideConversation(hidden, threadId\[, type])

### Parameters

* hidden `boolean`
* threadId `string`
* type `ThreadType?`
  * mặc định là `ThreadType.User`

### Return

`Promise<HideConversationResponse>`

### Types

```typescript
export type HideConversationResponse = "";
```

### Examples

```javascript
const threadId = "000000000000000000"

api.hideConversation(true, threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);
```
