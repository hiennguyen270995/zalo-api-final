---
description: Tin nhắn đã thu hồi
---

# Undo

### Model

```typescript
export type TUndoContent = {
    globalMsgId: number;
    cliMsgId: number;
    deleteMsg: number;
    srcId: number;
    destId: number;
};

export type TUndo = {
    actionId: string;
    msgId: string;
    cliMsgId: string;
    msgType: string;
    uidFrom: string;
    idTo: string;
    dName: string;
    ts: string;
    status: number;
    content: TUndoContent;
    notify: string;
    ttl: number;
    userId: string;
    uin: string;
    cmd: number;
    st: number;
    at: number;
    realMsgId: string;
};

export class Undo {
    data: TUndo;
    threadId: string;
    isSelf: boolean;
    isGroup: boolean;
};
```
