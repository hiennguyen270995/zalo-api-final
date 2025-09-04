---
description: Xóa ảnh đại diện khỏi danh sách ảnh đại diện
---

# deleteAvatar

## api.deleteAvatar(photoId)

### Parameters

* photoId `string` | `string[]` &#x20;

### Return

`Promise<DeleteAvatarResponse>`

### Types

```typescript
export type DeleteAvatarResponse = {
    delPhotoIds: string[];
    errMap: {
        [key: string]: {
            err: number;
        };
    };
};
```

### Examples

```typescript
api
    .deleteAvatar(["photoId_1", "photoId_2"])
    .then(console.log).catch(console.error);
```
