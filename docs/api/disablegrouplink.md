---
description: Tắt link tham gia nhóm
---

# disableGroupLink

## api.disableGroupLink(groupId)

### Parameters

* groupId `string`&#x20;

### Return

`Promise<DisableGroupLinkResponse>`

### Types

```typescript
export type DisableGroupLinkResponse = "";
```

### Examples

```typescript
api.disableGroupLink("00000000000000000")
    .then(console.log).catch(console.error);
```
