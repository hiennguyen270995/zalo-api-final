---
description: Thay đổi ảnh đại diện
---

# changeAccountAvatar

## api.changeAccountAvatar(avatarSource)

### Parameters

* avatarSource `AttachmentSource`

### Return

`Promise<ChangeAccountAvatarResponse>`

### Types

```typescript
export type ChangeAccountAvatarResponse = "";
```

### Examples

```typescript
api
    .changeAccountAvatar("./newAvatar.jpg")
    .then(console.log).catch(console.error);
```

### Related

* [AttachmentSource](../models/attachment)
