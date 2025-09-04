---
description: Xóa đoạn chat
---

# deleteChat

## api.deleteChat(catalogId)

### Parameters

* lastMessage `DeleteChatLastMessage`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<DeleteChatResponse>`

### Types

```typescript
export type DeleteChatResponse = {
    status: number;
};

export type DeleteChatLastMessage = {
    /**
     * Last message owner ID to delete backwards
     */
    ownerId: string;
    /**
     * Last message client ID to delete backwards
     */
    cliMsgId: string;
    /**
     * Last message global ID to delete backwards
     */
    globalMsgId: string;
};
```

### Examples

```typescript
import { ThreadType } from "zalo-api-final";

const threadId = "00000000000000";

api
    .deleteChat(
        {
            ownerId: "00000000000000",
            cliMsgId: "00000000000000",
            globalMsgId: "00000000000000"
        },
        threadId,
        ThreadType.Group
    )
    .then(console.log).catch(console.error);
```
