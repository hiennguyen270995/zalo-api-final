---
description: Gửi video
---

# sendVideo

## api.sendVideo(options, threadId\[, type])

### Parameters

* options `SendVideoOptions`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<SendVideoResponse>`

### Types

```typescript
export type SendVideoOptions = {
    msg?: string;
    videoUrl: string;
    thumbnailUrl: string;
    duration?: number;
    width?: number;
    height?: number;
    ttl?: number;
};

export type SendVideoResponse = {
    msgId: number;
};
```

### Examples

```javascript
const options = {
    msg: "Video mẫu",
    videoUrl: "https://example.com/video.mp4",
    thumbtnailUrl: "https://example.com/videoThumbnail.jpg",
    duration: 5000,
    width: 1280;
    height: 720;
};
const threadId = "000000000000000";

api.sendVideo(options, threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);
```
