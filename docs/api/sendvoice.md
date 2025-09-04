---
description: Gửi đoạn hội thoại
---

# sendVoice

## api.sendVoice(options, threadId\[, type])

### Parameters

* options
  * voiceUrl `string`
  * ttl `number?`
    * thời gian tồn tại danh thiếp, mặc định là 0 (vô hạn)
* threadId `string`
* type `ThreadType?`
  * loại thread, mặc định là người dùng

### Return

`Promise<SendVoiceResponse>`

#### SendVoiceResponse

* msgId `string`

### Examples

Gửi đoạn hội thoại

```javascript
const userId = "0000000000000001"

api.sendVoice(
    {
        voiceUrl: "https://example.com/voice.mp3"
    },
    userId
)
    .then(console.log)
    .catch(console.error);
```
