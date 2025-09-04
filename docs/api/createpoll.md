---
description: Tạo cuộc bình chọn
---

# createPoll

## api.createPoll(options, groupId)

### Parameters

* options `CreatePollOptions`
* groupId `string`

### Return

`Promise<CreatePollResponse>`&#x20;

### Types

```typescript
export type CreatePollOptions = {
    /**
     * Câu hỏi.
     */
    question: string;
    /**
     * Danh sách các lựa chọn.
     */
    options: string[];
    /**
     * Thời hạn của cuộc bình chọn, đơn vị mili giây, mặc định 0 (vô hạn).
     */
    expiredTime?: number;
    /**
     * Cho phép chọn nhiều lựa chọn, mặc định false.
     */
    allowMultiChoices?: boolean;
    /**
     * Cho phép thành viên thêm lựa chọn, mặc định false.
     */
    allowAddNewOption?: boolean;
    /**
     * Ẩn kết quả cho đến khi người dùng bình chọn, mặc định false.
     */
    hideVotePreview?: boolean;
    /**
     * Ẩn danh sách người bình chọn, mặc định false.
     */
    isAnonymous?: boolean;
};

export type CreatePollResponse = PollDetail;
```

### Examples

Tạo cuộc bình chọn mới

```typescript
import type { CreatePollOptions } from "zalo-api-final";

const groupId = "0000000000000000000";
const options: CreatePollOptions = {
    question: "Cuộc bình chọn mới!",
    options: [
        "Lựa chọn 1",
        "Lựa chọn 2",
        "Lựa chọn 3"
    ]
}

api.createPoll(options, groupId)
    .then(console.log)
    .catch(console.error);
```

### Related

* [PollDetail](../models/board)
