---
description: Chuyển tiếp tin nhắn
---

# forwardMessage

## api.forwardMessage(payload, threadIds\[, type])

### Parameters

* payload `ForwardMessagePayload`
* threadIds `string[]`&#x20;
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<ForwardMessageResponse>`

### Types

```typescript
export type ForwardMessagePayload = {
    message: string;
    ttl?: number;
    reference?: {
        id: string;
        ts: number;
        logSrcType: number;
        fwLvl: number;
    };
};

export type ForwardMessageSuccess = {
    clientId: string;
    msgId: string;
};

export type ForwardMessageFail = {
    clientId: string;
    error_code: string;
};

export type ForwardMessageResponse = {
    success: ForwardMessageSuccess[];
    fail: ForwardMessageFail[];
};
```

### Examples

Chuyển tiếp tin nhắn cho 3 người dùng

```typescript
api
    .forwardMessage(
        {
            message: "tin nhắn chuyển tiếp"
        },
        [
            "0000000000000000001",
            "0000000000000000002"
            "0000000000000000003"
        ]
    )
    .then(console.log)
    .catch(console.error);
```

### Related

* [ThreadType](../models/enum)
