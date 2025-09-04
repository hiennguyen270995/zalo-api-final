---
description: Lấy thông tin tài khoản Biz
---

# getBizAccount

## api.getBizAccount()

### Parameters

### Return

`Promise<GetBizAccountResponse>`

#### GetBizAccountResponse

* biz `DataBiz`
* pkgId `number`
* setting\_start\_page `SettingStartPage`

#### DataBiz

* desc `string`
* cate `number`
* addr `string`
* website `string`
* email `string`

#### SettingStartPage

* enable\_biz\_label `number`
* enable\_cate `number`
* enable\_add `number`
* cta\_profile `number`
* cta\_catalog `null`

### Examples

```javascript
await api.getBizAccount()
    .then(console.log)
    .catch(console.error);
```
