---
description: Lấy danh sách người dùng bị tắt thông báo
---

# getMute

## api.getMute()

### Parameters

### Return

`Promise<GetMuteResponse>`

### Types

```typescript
export type MuteEntriesInfo = {
    id: string;
    duration: number;
    startTime: number;
    systemTime: number;
    currentTime: number;
    muteMode: number;
};

export type GetMuteResponse = {
    chatEntries: MuteEntriesInfo[];
    groupChatEntries: MuteEntriesInfo[];
};
```

### Examples

```javascript
api.getMute()
    .then(console.log)
    .catch(console.error);
```
