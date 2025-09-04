---
description: Gửi sticker/nhãn dán
---

# sendSticker

## api.sendSticker(sticker, threadId\[, type])

### Parameters

* sticker `Sticker`
* threadId `string`
  * id của người/nhóm cần gửi
* type `ThreadType?`
  * loại thread: người dùng/nhóm, mặc định là người dùng

### Return

`Promise<SendStickerResponse>`

### Code mẫu

Gửi sticker `"xin chào"`

```javascript
import { ThreadType } from "zalo-api-final"

// tìm sticker "hello", lấy và gửi sticker đầu tiên tìm thấy
api.getStickers("hello")
    .then(async (stickerIds) => {
        const stickersDetail = await api.getStickersDetail(stickerIds[0]);
        api.sendSticker(stickersDetail[0], "0000000000000001", ThreadType.User)
            .then(console.log)
            .catch(console.error);
    })
    .catch(console.error);
```

## References

### APIs

* [getStickers](getstickers)
* [getStickersDetail](getstickersdetail)

### Objects

* [Sticker](../getstickersdetail#stickerdetailresponse)
