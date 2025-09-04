---
description: Gửi danh thiếp
---

# sendCard

## api.sendCard(options, threadId\[, type])

### Parameters

* options
  * userId `string`
  * phoneNumber `string?`
  * ttl `number?`
    * thời gian tồn tại danh thiếp, mặc định là 0 (vô hạn)
* threadId `string`
  * id của người dùng hoặc nhóm
* type `ThreadType?`
  * loại thread: người dùng/nhóm, mặc định là người dùng

### Return

`Promise<SendCardResponse>`

#### SendCardResponse

* msgId `number`

### Examples

Gửi danh thiếp của tài khoản đã đăng nhập tới 1 nhóm

```javascript
import { ThreadType } from "zalo-api-final";

const threadId = "0000000000000000000";
const loggedInId = api.getOwnId();
const phoneNumber = "0900000000";

api.sendCard(
    {
        userId: loggedInId,
        phoneNumber: phoneNumber,
    },
    threadId,
    ThreadType.Group
)
    .then(console.log)
    .catch(console.error);
```
