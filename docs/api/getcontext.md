---
description: Lấy danh sách nhóm đã tham gia
---

# getContext

## api.getContext()

### Parameters

### Return

`ContextSession`

#### ContextSession

* uid `string`
* imei `string`
* cookie `CookieJar`
* userAgent `string`
* language `string`
* secretKey `string`
* zpwServiceMap `Record<string, string[]>`
* settings
  * `Record<string, any>`
  * features
    * `Record<string, any>`
    * sharefile `ShareFileSettings`
* extraVer `Record<string, any>`
* uploadCallbacks `CallbacksMap`
* options `Options`
* API\_TYPE `number` (readonly)
* API\_VERSION `number` (readonly)

#### ShareFileSettings

* big\_file\_domain\_list `string[]`
* max\_size\_share\_file\_v2 `number`
* max\_size\_share\_file\_v3 `number`
* file\_upload\_show\_icon\_1GB `boolean`
* restricted\_ext `string`
* next\_file\_time `number`
* max\_file `number`
* max\_size\_photo `number`
* max\_size\_share\_file `number`
* max\_size\_resize\_photo `number`
* max\_size\_gif `number`
* max\_size\_original\_photo `number`
* chunk\_size\_file `number`
* restricted\_ext\_file `string[]`

#### Options

* selfListen `boolean`
* checkUpdate `boolean`
* logging `boolean`
* apiType `number`
* apiVersion `number`
* agent `Agent` | `string` | `undefined`
* polyfill `fetch` | `node-fetch`

### Examples

```javascript
console.log(api.getContext());
```
