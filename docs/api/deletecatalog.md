---
description: Xóa danh mục sản phẩm (dành cho zBusiness)
---

# deleteCatalog

## api.deleteCatalog(catalogId)

### Parameters

* catalogId `string` &#x20;

### Return

`Promise<DeleteCatalogResponse>`

### Types

```typescript
export type DeleteCatalogResponse = "";
```

### Examples

```typescript
api
    .deleteCatalog("catalogId_1")
    .then(console.log).catch(console.error);
```
