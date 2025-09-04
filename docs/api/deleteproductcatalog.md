---
description: Xóa sản phẩm khỏi danh mục
---

# deleteProductCatalog

## api.deleteProductCatalog(payload)

### Parameters

* payload `DeleteProductCatalogPayload`

### Return

`Promise<DeleteProductCatalogResponse>`

### Types

```typescript
export type DeleteProductCatalogPayload = {
    productIds: string | string[];
    catalogId: string;
};

export type DeleteProductCatalogResponse = {
    item: number[];
    version_ls_catalog: number;
    version_catalog: number;
};
```

### Examples

```typescript
api
    .deleteProductCatalog({
        productIds: ["productId1", "productId2"],
        catalogId: "catalogId1"
    })
    .then(console.log).catch(console.error);
```
