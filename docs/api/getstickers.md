---
description: Tìm sticker bằng từ khóa
---

# getStickers

## api.getStickers(keyword)

### Parameters

* keyword `string`
  * từ khóa tìm kiếm

### Return

`Promise<number[]>` id của các sticker tìm thấy

### Examples

Lấy sticker với từ khóa `"xin chào"`

```javascript
try {
    const keyword = "xin chào";
    const stickerIds = await api.getStickers(keyword);
    
    console.log(stickerIds);
} catch(e) {
    console.error(e);
}
```
