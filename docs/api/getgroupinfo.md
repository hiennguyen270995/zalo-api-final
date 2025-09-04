---
description: Lấy thông tin của các nhóm
---

# getGroupInfo

## api.getGroupInfo(groupId)

### Parameters

* groupId `string` | `string[]`

### Return

`Promise<GroupInfoResponse>`

#### GroupInfoResponse

* removedsGroup `string[]`
* unchangedsGroup `string[]`
* gridInfoMap
  * \[groupId `string`] `GroupInfo`

#### GroupInfo

* groupId `string`
* name `string`
* desc `string`
* type `number`
* creatorId `string`
* version `string`
* avt `string`
* fullAvt `string`
* memberIds `any[]`
* adminIds `string[]`
* currentMems `any[]`
* updateMems `any[]`
* memVerList `string[]`
* admins `any[]`
* hasMoreMember `number`
* subType `number`
* totalMember `number`
* maxMember `number`
* setting `GroupSetting`
* createdTime `number`
* visibility `number`
* globalId `string`
* e2ee `number`
* pendingApprove
  * time `number`
  * uids `null` | `string[]`
* extraInfo
  * `Record<string, any>`
  * enable\_media\_store `number`

#### GroupSetting

* blockName `number`
* signAdminMsg `number`
* addMemberOnly `number`
* setTopicOnly `number`
* enableMsgHistory `number`
* joinAppr `number`
* lockCreatePost `number`
* lockCreatePoll `number`
* lockSendMsg `number`
* lockViewMember `number`
* bannFeature `number`
* dirtyMedia `number`
* banDuration `number`

### Examples

Lấy thông tin của nhóm

```javascript
const groupId = "0000000000000000000";
api.getGroupInfo(groupId)
    .then(console.log)
    .catch(console.error);
```
