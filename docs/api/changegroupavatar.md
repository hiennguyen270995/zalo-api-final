---
description: Cập nhật ảnh nhóm
---

# changeGroupAvatar

## api.changeGroupAvatar(avatarPath, groupId)

### Parameters

* avatarSource `AttachmentSource`
* groupId `string`

### Return

`Promise<ChangeGroupAvatarResponse>`

### Types

```typescript
export type ChangeGroupAvatarResponse = "";
```

### Examples

Cập nhật ảnh nhóm

```typescript
// Với Buffer

async function getBufferFromUrl(url: string) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Lỗi");
            }
            return response.arrayBuffer();
        })
        .then((buffer) => {
            return Buffer.from(buffer);
        });
}

const avatarURL = "https://placehold.co/400";
const avatarBuffer = await getBufferFromUrl(avatarURL);

const groupId = "0000000000000000000";
api
    .changeGroupAvatar(
        {
            data: avatarBuffer,
            filename: "avatar.jpg",
            metadata: {
                totalSize: avatarBuffer.length,
                width: 400,
                height: 400
            }
        },
        groupId
    )
    .then(console.log).catch(console.error);


// Với đường dẫn tới file

const groupId = "0000000000000000000";
api
    .changeGroupAvatar("./avatar.jpg", "0000000000000000000")
    .then(console.log).catch(console.error);
```

### Related

* [AttachmentSource](../models/attachment)
