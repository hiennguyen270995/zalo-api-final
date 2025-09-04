---
description: Gửi liên kết
---

# sendLink

## api.sendLink(options, threadId\[, type])

### Parameters

* options
  * link `string`
  * ttl `number?`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<SendLinkResponse>`

### Types

```typescript
export type SendLinkResponse = {
    msgId: string;
};
```

### Examples

```javascript
const options = {
    link: "https://example.com",
};

const threadId = "0000000000000000"

api.sendLink(
    options,
    threadId,
    ThreadType.Group
)
    .then(console.log)
    .catch(console.error);
```
