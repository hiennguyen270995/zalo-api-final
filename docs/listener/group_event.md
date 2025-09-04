---
description: Lắng nghe các sự kiện của nhóm
---

# group\_event

## api.listener.on("group\_event", callback)

### Callback Parameters

* data `GroupEvent`

#### GroupEventType (enum)

* `JOIN_REQUEST` người dùng yêu cầu vào nhóm (thành viên không nhận event này)
* `JOIN` người dùng tham gia nhóm
* `LEAVE` người dùng rời nhóm
* `REMOVE_MEMBER` người dùng bị xóa khỏi nhóm
* `BLOCK_MEMBER` người dùng bị cấm khỏi nhóm
* `UPDATE_SETTING` cài đặt nhóm được cập nhật
* `UPDATE` các cập nhật khác như thay đổi avatar nhóm
* `NEW_LINK` link nhóm mới được khởi tạo
* `ADD_ADMIN` ai đó trở thành trưởng/phó nhóm
* `REMOVE_ADMIN` ai đó bị gỡ quyền phó nhóm
* `NEW_PIN_TOPIC`
* `UPDATE_PIN_TOPIC`
* `REORDER_PIN_TOPIC`
* `UPDATE_BOARD`
* `REMOVE_BOARD`
* `UPDATE_TOPIC`
* `UNPIN_TOPIC`
* `REMOVE_TOPIC`
* `ACCEPT_REMIND`
* `REJECT_REMIND`
* `REMIND_TOPIC`
* `UNKNOWN` sự kiện chưa được xử lý

### Examples

Lắng nghe và in ra dữ liệu của sự kiện nhóm, khuyến khích kiểm tra type của sự kiện như code mẫu bên dưới để có được hỗ trợ tốt hơn cho **code-completion**

```javascript
import { GroupEventType } from "zalo-api-final";

api.listener.on("group_event", (data) => {
    if (data.type == GroupEventType.JOIN_REQUEST) {
        // sự kiện yêu cầu tham gia
    } else {
        // các sự kiện khác
    }
});

api.listener.start();
```

