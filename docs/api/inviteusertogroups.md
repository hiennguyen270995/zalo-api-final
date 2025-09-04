---
description: Mời người dùng vào (các) nhóm
---

# inviteUserToGroups

## api.inviteUserToGroups(memberId, groupId)

### Parameters

* memberId `string`
* groupId `string | string[]`

### Return

`Promise<InviteUserToGroupsResponse>`

### Types

```typescript
export type InviteUserToGroupsResponse = {
    grid_message_map: {
        [gridId: string]: {
            error_code: number;
            error_message: string;
            data: string;
        };
    };
};
```

### Examples

```javascript
const userId = "000000000000000000";
const groupIds = ["000000000000000001", "000000000000000002"]

api.inviteUserToGroups(userId, groupIds)
    .then(console.log)
    .catch(console.error);
```
