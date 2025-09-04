---
description: Khóa cuộc bình chọn
---

# lockPoll

## api.lockPoll(pollId)

### Parameters

* pollId `number`

### Return

`Promise<LockPollResponse>`

### Examples

```javascript
const pollId = 1;
api.lockPoll(pollId)
    .then(console.log)
    .catch(console.error);
```
