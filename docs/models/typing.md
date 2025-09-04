---
description: Đang soạn tin nhắn
---

# Typing

### Model

```typescript
export type TTyping = {
    uid: string;
    ts: string;
    isPC: 0 | 1;
};

export type TGroupTyping = TTyping & {
    gid: string;
};

export class UserTyping {
    type: ThreadType.User = ThreadType.User;

    data: TTyping;
    threadId: string;
    isSelf: false;
};

export class GroupTyping {
    type: ThreadType.Group = ThreadType.Group;

    data: TGroupTyping;
    threadId: string;
    isSelf: false;
};

export type Typing = UserTyping | GroupTyping;
```

### Related

* [ThreadType](enum)
