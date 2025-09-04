---
description: Thả cảm xúc tin nhắn
---

# addReaction

## api.addReaction(icon, dest)

### Parameters

* icon `Reactions` | `CustomReaction`      &#x20;
* dest `AddReactionDestination`

### Return

`Promise<AddReactionResponse>`

### Types

```typescript
export type AddReactionResponse = {
    msgIds: number[];
};

export type CustomReaction = {
    rType: number;
    source: number;
    icon: string;
};

export type AddReactionDestination = {
    data: {
        msgId: string;
        cliMsgId: string;
    };
    threadId: string;
    type: ThreadType;
};
```

### Examples

Thả cảm xúc vào tin nhắn

```typescript
import { Reactions } from "zalo-api-final";

// thả cảm xúc HAHA vào tất cả tin nhắn văn bản gửi đến có chứa ":)"
api.listener.on("message", (message) => {
    const { threadId, type } = message.data;
    const { content, msgId, cliMsgId } = message.data;

    const isTextMessage = typeof content == "string";
    const shouldReact = isTextMessage && content.includes(":)");
    
    const addReactionDestination = {
        data: { msgId, cliMsgId },
        threadId,
        type
    };
    
    // hoặc đưa cả message vào cũng được, vd: 
    // const addReactionDestination = message;
    
    if (!message.isSelf && shouldReact) {
        api
            .addReaction(Reactions.HAHA, addReactionDestination)
            .then(console.log).catch(console.error);
    }
});
```

### Related

* [ThreadType](../models/enum)
* [Reactions](../models/reaction)
