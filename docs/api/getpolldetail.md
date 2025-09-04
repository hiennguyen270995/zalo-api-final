---
description: Lấy thông tin của cuộc bình chọn
---

# getPollDetail

## api.getPollDetail(pollId)

### Parameters

* pollId `string`

### Return

`Promise<PollDetailResponse>`

### Types

```typescript
export type PollDetailResponse = {
    creator: string;
    question: string;
    options: {
        content: string;
        votes: number;
        voted: boolean;
        voters: string[];
        option_id: number;
    }[];
    joined: boolean;
    closed: boolean;
    poll_id: number;
    allow_multi_choices: boolean;
    allow_add_new_option: boolean;
    is_anonymous: boolean;
    poll_type: number;
    created_time: number;
    updated_time: number;
    expired_time: number;
    is_hide_vote_preview: boolean;
    num_vote: boolean;
};
```

### Examples

```javascript
api.getPollDetail("poll_id_here")
    .then(console.log)
    .catch(console.error);
```
