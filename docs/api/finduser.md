---
description: Tìm thông tin người dùng qua số điện thoại
---

# findUser

## api.findUser(phoneNumber)

### Parameters

* phoneNumber `string`

### Return

`Promise<FindUserResponse>`

### Types

```typescript
export type FindUserResponse = {
    avatar: string;
    cover: string;
    status: string;
    gender: Gender;
    dob: number;
    sdob: string;
    globalId: string;
    bizPkg: ZBusinessPackage;
    uid: string;
    zalo_name: string;
    display_name: string;
};
```

### Examples

Lấy thông tin người dùng qua số điện thoại `0909090909`

```javascript
api.findUser("0909090909")
    .then(console.log)
    .catch(console.error);
```

### Related

* [Gender](../models/enum)
* [ZBusinessPackage](../models/zbusiness)
