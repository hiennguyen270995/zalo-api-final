---
description: api tùy chỉnh
---

# custom

## api.custom\<T, K = any>(name, callback)

### Parameters

* name `string`
* callback `CustomAPICallback<T, K>`

### Return

`void`

### Types

```typescript
export type CustomAPIProps<T, K> = {
    ctx: ContextSession;
    utils: FactoryUtils<T>;
    props: K
};
export type CustomAPICallback<T, K> = (props: CustomAPIProps<T, K>) => T | Promise<T>;
```

### Examples

Xây dựng api lấy avatar người dùng.

```typescript
import type { API } from "zalo-api-final";

type GetUserAvatarResponse = string;
type GetUserAvatarProps = {
    uid: string;
};

api.custom<GetUserAvatarResponse, GetUserAvatarProps>("getUserAvatar", async ({ ctx, props, utils }) => {
    const { uid } = props;
    const userInfo = await api.getUserInfo(uid);
    return userInfo.changed_profiles[uid].avatar;
});

type CustomAPI = API & {
    getUserAvatar: (props: GetUserAvatarProps) => Promise<GetUserAvatarResponse>;
};

(api as CustomAPI).getUserAvatar({ uid: "000000000000000000" }).then(console.log);

```
