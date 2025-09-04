---
description: Gửi sự kiễn đang gõ tin nhắn
---

# sendTypingEvent

## api.sendTypingEvent(options, threadId)

### Parameters

* options
  * type `ThreadType`
  * destType `DestType?`
    * Chỉ yêu cầu khi `type` là `ThreadType.User`
* threadId `string`

### Return

`Promise<SendTypingEventResponse>`

### Types

```typescript
export enum DestType {
    User = 3,
    Page = 5,
}

export type SendTypingEventResponse = {
    status: number;
};

export type SendTypingEventOptions =
    | {
          type: ThreadType.Group;
          destType?: undefined;
      }
    | {
          type: ThreadType.User;
          /**
           * Only required for User threads
           */
          destType: DestType;
      };
```

### Examples

```javascript
const threadId = "000000000000000";
const options = {
    type: ThreadType.User,
    destType: DestType.User  
};

api.sendTypingEvent(options, threadId)
    .then(console.log)
    .catch(console.error);
```
