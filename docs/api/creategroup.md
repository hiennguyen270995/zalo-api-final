---
description: Tạo nhóm mới
---

# createGroup

## api.createGroup(options)

### Parameters

* options `CreateGroupOptions`

### Return

`Promise<CreateGroupResponse>`

### Types

```typescript
export type CreateGroupResponse = {
    groupType: number;
    sucessMembers: string[];
    groupId: string;
    errorMembers: string[];
    error_data: Record<string, unknown>;
};

export type CreateGroupOptions = {
    /**
     * Tên nhóm
     */
    name?: string;
    /**
     * Danh sách ID thành viên nhóm (trừ bản thân)
     */
    members: string[];
    /**
     * Ảnh nhóm (tùy chọn)
     */
    avatarSource?: AttachmentSource;
};
```

### Examples

Tạo nhóm mới

```typescript
// Tạo nhóm mới cùng 2 người dùng khác
api.createGroup({
    members: ["0000000000000000002", "0000000000000000003"],
    name: "Nhóm Mới",
    avatarSource: "./avatar.jpg", // hoặc dùng buffer
})
    .then(console.log)
    .catch(console.error);
```

### Related

* [AttachmentSource](../models/attachment)
