---
description: Chặn người dùng xem bài đăng của mình
---

# blockViewFeed

## api.blockViewFeed(userId\[, isBlockFeed])

### Parameters

* userId `string`
* isBlockFeed `boolean?`
  * mặc định `true`

### Return

`Promise<BlockViewFeedResponse>`

### Types

```typescript
export type BlockViewFeedResponse = "";
```

### Examples

```typescript
const userId = "0000000000000000001";
api
    .blockViewFeed(userId)
    .then(console.log).catch(console.error);
```
