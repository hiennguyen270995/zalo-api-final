---
description: Gửi tin nhắn văn bản
---

# sendMessage

## api.sendMessage(message, threadId\[, type])

### Parameters

* message `string` | `MessageContent`
* threadId `string`
  * Id của người dùng/nhóm
* type `ThreadType?`
  * loại thread: người dùng/nhóm, mặc định là người dùng

#### MessageContent

* msg `string`
  * Nội dung văn bản
* styles `Style[]?`
  * Thêm định dạng cho nội dung văn bản
* urgency `Urgency?`
  * Mức độ quan trọng của tin nhắn
* mentions `Mention[]?`
  * Mảng các object thông tin đề cập, chỉ hoạt động trong nhóm
* attachments `string[]?`
  * Đường dẫn của các tệp đính kèm
* quote `Message?`
  * đối tượng tin nhắn để trích dẫn
* ttl `number?`
  * thời gian tồn tại của tin nhắn theo mili giây

#### Style

* start `number`
  * Vị trí bắt đầu áp dụng định dạng
* len `number`
  * Độ dài văn bản, tính từ vị trí bắt đầu
* st `TextStyle`
  * Định dạng
* indentSize `number?`
  * Độ dài của thục lề, chỉ áp dụng cho `TextStyle.Indent` (không bắt buộc, mặc định 1)

#### TextStyle (enum)

`Bold`, `Italic`, `Underline`, `StrikeThrough`

`Red`, `Orange`, `Yellow`, `Green`

`Small`, `Big`

`UnorderedList`, `OrderedList`

`Indent`

#### Urgency (enum)

`Default`, `Important`, `Urgent`

#### Mention

* pos `number`
  * vị trí bắt đầu đề cập\
    ví dụ: `Xin chào @ZCA`,  pos sẽ là 9 (vị trí của @ là 9)
* len `number`
  * độ dài của chuỗi đề cập\
    ví dụ: `@ZCA` có len là 4
* uid `string`
  * id của người dùng được đề cập

### Return

`Promise<SendMessageResponse>`

#### SendMessageResponse

* message `null` | `SendMessageResult`
* attachment `SendMessageResult[]`

#### SendMessageResult

* msgId `number`

### Examples

Gửi tin nhắn văn bản đến nhóm

```javascript
import { ThreadType } from "zalo-api-final";

api.sendMessage("Xin chào", "0000000000000000", ThreadType.Group);
```

Gửi tin nhắn với định dạng và mức độ quan trọng tùy chỉnh

```javascript
import { ThreadType, Urgency, TextStyle } from "zalo-api-final";

const text = "TIN QUAN TRỌNG!!!";

api.sendMessage({
    msg: text,
    urgency: Urgency.Important,
    styles: [
        {
            start: 0,
            len: text.length,
            st: TextStyle.Bold // in đậm
        },
        {
            start: 0,
            len: text.length,
            st: TextStyle.Red // màu đỏ
        },
        {
            start: 0,
            len: text.length,
            st: TextStyle.Big // cỡ chữ lớn
        }
    ]
}, "0000000000000000", ThreadType.Group)
```

Gửi tin nhắn văn bản và đề cập người dùng khác

```javascript
import { ThreadType } from "zalo-api-final";

api.sendMessage({
    msg: "Xin chào @ZCA",
    mentions: [
        {
            pos: 9,
            uid: "0000000000000000",
            len: 4
        }
    ]
}, "0000000000000000", ThreadType.Group);
```

Gửi tin nhắn văn bản kèm trích dẫn

```javascript
// phản hồi kèm trích dẫn lại mọi tin nhắn của người khác
api.listener.on("message", (message) => {
    if (!message.isSelf) {
        api.sendMessage({
            msg: "ok",
            quote: message
        }, message.threadId, message.type);
    }
});
```

Gửi tệp đính kèm

```javascript
import path from "path";

// gửi file chỉ định vào nhóm mỗi khi có ai nhắn "file"
api.listener.on("message", (message) => {
    const isPlainText = typeof message.data.content == "string";
    if (isPlainText && message.data.content == "file") {
        api.sendMessage(
            {
                msg: "",
                attachments: [path.resolve("./file.txt")]
            },
            message.threadId,
            message.type
        )
            .then(console.log)
            .catch(console.error);
    }
});
```
