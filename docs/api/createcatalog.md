---
description: Thêm danh mục sản phẩm (dành cho zBusiness)
---

# createCatalog

## api.createCatalog(catalogName)

### Parameters

* catalogName `string`

### Return

`Promise<CreateCatalogResponse>`

### Types

```typescript
export type CreateCatalogResponse = {
    item: CatalogItem;
    version_ls_catalog: number;
    version_catalog: number;
};
```

### Examples

```typescript
api.createCatalog("Sản phẩm độc quyền")
    .then(console.log).catch(console.error);
```

### Related

* [CatalogItem](../models/catalog)
