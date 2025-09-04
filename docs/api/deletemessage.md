---
description: Xóa tin nhắn của bản thân hoặc thành viên nhóm
---

# deleteMessage

## api.deleteMessage(options, threadId\[, type])

### Parameters

* dest `DeleteMessageDestination`
* onlyMe `boolean?`
  * mặc định `true` , chỉ xóa ở phía bản thân

### Return

`Promise<DeleteMessageResponse>`

### Types

```typescript
export type DeleteMessageResponse = {
    status: number;
};

export type DeleteMessageDestination = {
    data: {
        cliMsgId: string;
        msgId: string;
        uidFrom: string;
    };
    threadId: string;
    /**
     * mặc định ThreadType.User
     */
    type?: ThreadType;
};
```

### Examples

Xóa tin nhắn bản thân sau 5s

```typescript
// xóa tin nhắn của bản thân sau 5s nếu nội dung là "test"
api.listener.on("message", (message) => {
    const { content } = message.data;
    const isTextMessage = typeof content == "string";
    const shouldDelete = isTextMessage && content == "test";

    if (message.isSelf && shouldDelete) {
        setTimeout(() => {
            api.deleteMessage(
                {
                    data: {
                        cliMsgId: message.data.cliMsgId,
                        msgId: message.data.msgId,
                        uidFrom: message.data.uidFrom,
                    },
                    threadId: message.threadId,
                    type: message.type
                }
            )
                .then(console.log)
                .catch(console.error);
        }, 5_000);
    }
});
```
