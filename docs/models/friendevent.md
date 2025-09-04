---
description: Các sự kiện bạn bè
---

# FriendEvent

### Model

```typescript
export enum FriendEventType {
    ADD,
    REMOVE,

    REQUEST,
    UNDO_REQUEST,
    REJECT_REQUEST,

    SEEN_FRIEND_REQUEST,

    BLOCK,
    UNBLOCK,
    BLOCK_CALL,
    UNBLOCK_CALL,

    PIN_UNPIN,
    PIN_CREATE,

    UNKNOWN,
}

export type TFriendEventBase = string;

export type TFriendEventRejectUndo = {
    toUid: string;
    fromUid: string;
};

export type TFriendEventRequest = {
    toUid: string;
    fromUid: string;
    src: number;
    message: string;
};

export type TFriendEventSeenRequest = string[];

export type TFriendEventPinCreateTopicParams = {
    senderUid: string;
    senderName: string;
    client_msg_id: string;
    global_msg_id: string;
    msg_type: number;
    title: string;
};

export type TFriendEventPinTopic = {
    topicId: string;
    topicType: number;
};

export type TFriendEventPinCreateTopic = {
    type: number;
    color: number;
    emoji: string;
    startTime: number;
    duration: number;
    params: TFriendEventPinCreateTopicParams;
    id: string;
    creatorId: string;
    createTime: number;
    editorId: string;
    editTime: number;
    repeat: number;
    action: number;
};

export type TFriendEventPinCreate = {
    oldTopic?: TFriendEventPinTopic;
    topic: TFriendEventPinCreateTopic;
    actorId: string;
    oldVersion: number;
    version: number;
    conversationId: string;
};

export type TFriendEventPinUnpin = {
    topic: TFriendEventPinTopic;
    actorId: string;
    oldVersion: number;
    version: number;
    conversationId: string;
};

export type TFriendEvent =
    | TFriendEventBase
    | TFriendEventRequest
    | TFriendEventRejectUndo
    | TFriendEventSeenRequest
    | TFriendEventPinUnpin
    | TFriendEventPinCreate;

export type FriendEvent =
    | {
          type:
              | FriendEventType.ADD
              | FriendEventType.REMOVE
              | FriendEventType.BLOCK
              | FriendEventType.UNBLOCK
              | FriendEventType.BLOCK_CALL
              | FriendEventType.UNBLOCK_CALL;
          data: TFriendEventBase;
          threadId: string;
          isSelf: boolean;
      }
    | {
          type: FriendEventType.REJECT_REQUEST | FriendEventType.UNDO_REQUEST;
          data: TFriendEventRejectUndo;
          threadId: string;
          isSelf: boolean;
      }
    | {
          type: FriendEventType.REQUEST;
          data: TFriendEventRequest;
          threadId: string;
          isSelf: boolean;
      }
    | {
          type: FriendEventType.SEEN_FRIEND_REQUEST;
          data: TFriendEventSeenRequest;
          threadId: string;
          isSelf: boolean;
      }
    | {
          type: FriendEventType.PIN_CREATE;
          data: TFriendEventPinCreate;
          threadId: string;
          isSelf: boolean;
      }
    | {
          type: FriendEventType.PIN_UNPIN;
          data: TFriendEventPinUnpin;
          threadId: string;
          isSelf: boolean;
      }
    | {
          type: FriendEventType.UNKNOWN;
          data: string;
          threadId: string;
          isSelf: boolean;
      };
```
