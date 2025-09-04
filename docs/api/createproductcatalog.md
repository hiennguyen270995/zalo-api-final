---
description: Tạo sản phẩm trong danh mục
---

# createProductCatalog

## api.createProductCatalog(payload)

### Parameters

* payload `CreateProductCatalogPayload`

### Return

`Promise<CreateProductCatalogResponse>`&#x20;

### Types

```typescript
export type CreateProductCatalogPayload = {
    /**
     * Id của danh mục sản phẩm
     */
    catalogId: string;

    productName: string;
    price: string;
    description: string;

    /**
     * Tối đa 5 tệp, bỏ qua nếu dùng product_photos
     */
    files?: AttachmentSource[];
    /**
     * Danh sách URL ảnh sản phẩm, tối đa 5
     *
     * Có thể lấy URL tệp thủ công với api `uploadProductPhoto`
     */
    product_photos?: string[];
};

export type CreateProductCatalogResponse = {
    item: ProductCatalogItem;
    version_ls_catalog: number;
    version_catalog: number;
};
```

### Examples

```typescript
api
    .createProductCatalog({
        catalogId: "catelog_id",
        productName: "Sản phẩm mới",
        price: "500000",
        description: "Đây là sản phẩm mới",
        files: [
            "./san_pham_moi1.jpg",
            "./san_pham_moi2.jpg"
        ]
    })
    .then(console.log)
    .catch(console.error);
```

### Related

* [AttachmentSource](../models/attachment)
* [ProductCatalogItem](../models/productcatalog)
