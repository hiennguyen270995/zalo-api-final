---
description: Lắng nghe sự kiển thả cảm xúc tin nhắn
---

# reaction

## api.listener.on("reaction", callback)

### Callback Parameters

* reaction `Reaction`

#### Reaction

* data `TReaction`
  * dữ liệu của sự kiện
* threadId `string`
  * id người dùng/nhóm của sự kiện
* isSelf `boolean`
  * true nếu sự kiện đó bắt nguồn từ tải khoản đang sử dụng
* isGroup `boolean`
  * true nếu sự kiện đó xảy ra ở nhóm

### Examples

Lắng nghe và in ra dữ liệu của tin nhắn

```javascript
api.listener.on("reaction", (reaction) => {
    console.log(reaction);
});

api.listener.start();
```

