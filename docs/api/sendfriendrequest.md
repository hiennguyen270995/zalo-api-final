---
description: Gửi lời mời kết bạn
---

# sendFriendRequest

## api.sendFriendRequest(msg, userId)

### Parameters

* msg `string`
* userId `string`

### Return

`Promise<SendFriendRequestResponse>`

### Examples

Gửi lời mời kết bạn với id người dùng

```javascript
const userId = "000000000000000001";
const msg = "Xin chào, hãy kết bạn với tôi!";

api.sendFriendRequest(msg, userId)
    .then(console.log)
    .catch(console.error);
```

Gửi lời mời kết bạn với số điện thoại

```javascript
const phoneNumber = "0999999999";
const userInfo = await api.findUser(phoneNumber);

const userId = userInfo.uid;
const msg = "Xin chào, hãy kết bạn với tôi!";

api.sendFriendRequest(msg, userId)
    .then(console.log)
    .catch(console.error);
```

## References

### APIs

* [findUser](finduser)
