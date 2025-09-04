---
description: Lấy danh sách lời mời kết bạn nhận được
---

# getFriendRequest

## api.getFriendRequest()

### Parameters

### Return

`Promise<GetFriendRequestResponse>`

#### GetFriendRequestResponse

* expiredDuration `number`
* collapseMsgListConfig `GetFriendRequestCollapseMsgListConfig`
* recommItems `GetFriendRequestRecommItem[]`

#### GetFriendRequestCollapseMsgListConfig

* collapseId `number`
* collapseXItem `number`
* collapseYItem `number`

#### GetFriendRequestRecommItem

* recommItemType `number`
* dataInfo
  * userId `string`
  * zaloName `string`
  * displayName `string`
  * avatar `string`
  * phoneNumber `string`
  * status `string`
  * gender `number`
  * dob `number`
  * type `number`
  * recommType `number`
  * recommSrc `number`
  * recommTime `number`
  * recommInfo
    * source `number`
    * message `number`
  * bizPkg
    * pkgId `number`
  * isSeenFriendReq `boolean`

### Examples

```javascript
await api.getFriendRequest()
    .then(console.log)
    .catch(console.error);
```
