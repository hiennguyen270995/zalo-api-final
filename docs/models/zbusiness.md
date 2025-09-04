---
description: Dành cho zBusiness
---

# ZBusiness

### Model

<pre class="language-typescript"><code class="lang-typescript"><strong>export type ZBusinessPackage = {
</strong>    label?: Record&#x3C;string, string> | null;
    pkgId: number;
};

export enum BusinessCategory {
    Other = 0,
    RealEstate = 1,
    TechnologyAndDevices = 2,
    TravelAndHospitality = 3,
    EducationAndTraining = 4,
    ShoppingAndRetail = 5,
    CosmeticsAndBeauty = 6,
    RestaurantAndCafe = 7,
    AutoAndMotorbike = 8,
    FashionAndApparel = 9,
    FoodAndBeverage = 10,
    MediaAndEntertainment = 11,
    InternalCommunications = 12,
    Transportation = 13,
    Telecommunications = 14,
}

export const BusinessCategoryName: Record&#x3C;BusinessCategory, string> = {
    [BusinessCategory.Other]: "Dịch vụ khác (Không hiển thị)",
    [BusinessCategory.RealEstate]: "Bất động sản",
    [BusinessCategory.TechnologyAndDevices]: "Công nghệ &#x26; Thiết bị",
    [BusinessCategory.TravelAndHospitality]: "Du lịch &#x26; Lưu trú",
    [BusinessCategory.EducationAndTraining]: "Giáo dục &#x26; Đào tạo",
    [BusinessCategory.ShoppingAndRetail]: "Mua sắm &#x26; Bán lẻ",
    [BusinessCategory.CosmeticsAndBeauty]: "Mỹ phẩm &#x26; Làm đẹp",
    [BusinessCategory.RestaurantAndCafe]: "Nhà hàng &#x26; Quán",
    [BusinessCategory.AutoAndMotorbike]: "Ô tô &#x26; Xe máy",
    [BusinessCategory.FashionAndApparel]: "Thời trang &#x26; May mặc",
    [BusinessCategory.FoodAndBeverage]: "Thực phẩm &#x26; Đồ uống",
    [BusinessCategory.MediaAndEntertainment]: "Truyền thông &#x26; Giải trí",
    [BusinessCategory.InternalCommunications]: "Truyền thông nội bộ",
    [BusinessCategory.Transportation]: "Vận tải",
    [BusinessCategory.Telecommunications]: "Viễn thông",
};
</code></pre>

### Related

* [ThreadType](enum)
