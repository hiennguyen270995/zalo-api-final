---
description: Ghim hoặc bỏ ghim các cuộc hội thoại
---

# pinConversations

## api.pinConversations(pin, threadId\[, type])

### Parameters

* pin `boolean`
* threadId `string` | `string[]`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<PinConversationsResponse>`

### Examples

Ghim cuộc hội thoại nhóm

```javascript
import { ThreadType } from "zalo-api-final";

const threadId = "0000000000000000000";

api.pinConversations(true, threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);
```

Bỏ ghim cuộc hội thoại nhóm

```javascript
import { ThreadType } from "zalo-api-final";

const threadId = "0000000000000000000";

api.pinConversations(false, threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);
```
