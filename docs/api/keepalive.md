---
description: Không rõ...
---

# keepAlive

## api.keepAlive()

### Parameters

### Return

`Promise<KeepAliveResponse>`

### Types

```typescript
export type KeepAliveResponse = { config_vesion: number };
```

### Examples

```javascript
api.keepAlive()
    .then(console.log)
    .catch(console.error);
```
