---
description: Lắng nghe tin nhắn trực tiếp / nhóm
---

# message

## api.listener.on("message", callback)

### Callback Parameters

* message `Message`

#### Message

`UserMessage` | `GroupMessage`

#### UserMessage | GroupMessage

* type `ThreadType`
  * loại thread, người dùng hoặc nhóm
* data `TMessage` | `TGroupMessage`
  * dữ liệu của tin nhắn
* threadId `string`
  * id người dùng/nhóm của sự kiện
* isSelf `boolean`
  * true nếu sự kiện đó bắt nguồn từ tải khoản đang sử dụng

#### `ThreadType` (enum)

* `User` người dùng
* `Group` nhóm

### Examples

Lắng nghe và in ra dữ liệu của tin nhắn

```javascript
api.listener.on("message", (message) => {
    console.log(message);
});

api.listener.start();
```
