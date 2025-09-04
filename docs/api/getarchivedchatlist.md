---
description: Lấy danh sách đoạn chat đã lưu trữ
---

# getArchivedChatList

## api.getArchivedChatList()

### Parameters

### Return

`Promise<GetArchivedChatListResponse>`

### Types

<pre class="language-typescript"><code class="lang-typescript"><strong>export type GetArchivedChatListResponse = {
</strong>    items: unknown[];
    version: number;
};
</code></pre>

### Examples

```typescript
await api.getArchivedChatList()
    .then(console.log)
    .catch(console.error);
```
