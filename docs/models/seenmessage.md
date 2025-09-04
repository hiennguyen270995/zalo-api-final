---
description: Tin nhắn đã xem
---

# SeenMessage

### Model

```typescript
export type TUserSeenMessage = {
    idTo: string;
    msgId: string;
    realMsgId: string;
};

export type TGroupSeenMessage = {
    msgId: string;
    groupId: string;
    seenUids: string[];
};

export class UserSeenMessage {
    type: ThreadType.User = ThreadType.User;

    data: TUserSeenMessage;
    threadId: string;
    isSelf: false;
};

export class GroupSeenMessage {
    type: ThreadType.Group = ThreadType.Group;

    data: TGroupSeenMessage;
    threadId: string;
    isSelf: boolean;
};

export type SeenMessage = UserSeenMessage | GroupSeenMessage;
```

### Related

* [ThreadType](enum)
