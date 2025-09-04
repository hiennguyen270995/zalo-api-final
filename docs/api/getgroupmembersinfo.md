---
description: Lấy thông tin của thành viên trong nhóm
---

# getGroupMembersInfo

## api.getGroupMembersInfo(memberId)

### Parameters

* memberId `string` | `string[]`

### Return

`Promise<GetGroupMembersInfoResponse>`

#### GetGroupMembersInfoResponse

* profiles
  * \[memberId `string`] `GroupMemberProfile`
* unchangeds\_profile `any[]`

#### GroupMemberProfile

* displayName `string`
* zaloName `string`
* avatar `string`
* accountStatus `number`
* type `number`
* lastUpdateTime `number`
* globalId `string`
* id `string`

### Examples

```javascript
const memberIds = ["0000000000000000000", "0000000000000000001"];
api.getGroupMembersInfo(memberIds)
    .then(console.log)
    .catch(console.error);
```
