---
description: Lấy thông tin người dùng
---

# getUserInfo

## api.getUserInfo(userId)

### Parameters

* userId `string`

### Return

`Promise<UserInfoResponse>`

#### UserInfoResponse

* unchanged\_profiles `Record<string, any>`
* phonebook\_version `number`
* changed\_profiles `Record<string, ProfileInfo>`

#### ProfileInfo

* userId `string`
* username `string`
* displayName `string`
* zaloName `string`
* avatar `string`
* bgavatar `string`
* cover `string`
* gender `number`
* dob `number`
* sdob `string`
* status `string`
* phoneNumber `string`
* isFr `number`
* isBlocked `number`
* lastActionTime `number`
* lastUpdateTime `number`
* isActive `number`
* key `number`
* type `number`
* isActivePC `number`
* isActiveWeb `number`
* isValid `number`
* userKey `string`
* accountStatus `number`
* oaInfo `any`
* user\_mode `number`
* globalId `string`
* bizPkg
  * label `any`
  * pkgId `number`
* createdTs `number`
* oa\_status `any`

### Examples

Lấy thông tin của người dùng

```javascript
const userId = "0000000000000000001";
api.getUserInfo(userId)
    .then(console.log)
    .catch(console.error);
```
