---
description: Lấy thông tin của các sticker
---

# getStickersDetail

## api.getStickersDetail(stickerIds)

### Parameters

* stickerIds `number` | `number[]`&#x20;
  * mảng hoặc 1 id sticker cần lấy thông tin

### Return

`Promise<StickerDetailResponse[]>`

#### StickerDetailResponse

* id `number`
* cateId `number`
* type `number`
* stickerUrl `string`
* stickerSpriteUrl `string`
* stickerWebpUrl `string` | `null`

### Examples

Lấy sticker với từ khóa `"xin chào"`

```javascript
// lấy thông tin của 5 sticker đầu tiên tìm thấy với từ khóa
    
try {
    const keyword = "xin chào";
    const stickerIds = await api.getStickers(keyword);
    const stickersDetail = await api.getStickersDetail(stickerIds.slice(0, 5));
    
    console.log(stickersDetail);
} catch(e) {
    console.error(e);
}
```
