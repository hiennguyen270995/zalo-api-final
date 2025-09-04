---
description: Thu hồi tin nhắn
---

# undo

## api.undo(message)

### Parameters

* message `Message`

### Return

`Promise<UndoResponse>`

### Examples

```javascript
// Thu hồi tin nhắn của bản thân nếu nó có chứa từ undo
api.listener.on("message", (message) => {
    const { content } = message.data;
    const isTextMessage = typeof content == "string";
    const shouldUndo = isTextMessage && content.includes("undo");
    if (message.isSelf && shouldUndo) {
        api.undo(message).then(console.log).catch(console.error);
    }
});
```
