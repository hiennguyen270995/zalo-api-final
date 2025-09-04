---
description: Gửi sự kiễn đã đọc tin nhắn
---

# sendSeenEvent

## api.sendSeenEvent(messages, threadId\[, type])

### Parameters

* messages `SendSeenEventMessageParam[]`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<SendSeenEventResponse>`

### Types

```typescript
export type SendSeenEventResponse = {
    status: number;
};

export type SendSeenEventMessageParam = {
    msgId: string;
    cliMsgId: string;
    uidFrom: string;
    idTo: string;
    msgType: string;
    st: number;
    at: number;
    cmd: number;
    ts: string | number;
};
```

### Examples

```javascript
const messages = [
    {
        msgId: "";
        cliMsgId: "";
        uidFrom: "";
        idTo: "";
        msgType: "";
        st: 1;
        at: 1;
        cmd: 1;
        ts: "";
    }
]

const threadId = "000000000000000"

api.sendSeenEvent(messages, threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);
```
