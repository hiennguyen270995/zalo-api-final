---
description: Xóa phó nhóm
---

# removeGroupDeputy

## api.removeGroupDeputy(memberId, groupId)

### Parameters

* memberId `string` | `string[]`
* groupId `string`

### Return

`Promise<RemoveGroupDeputyResponse>`

### Examples

```javascript
const groupId = "0000000000000000000";
const memberId = "0000000000000000001";

await api.removeGroupDeputy(memberId, groupId);
```
