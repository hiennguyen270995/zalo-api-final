export type ZBusinessPackage = {
    label?: Record<string, string> | null;
    pkgId: number;
};
export declare enum BusinessCategory {
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
    Telecommunications = 14
}
/**
 * eg.
   import { BusinessCategory, BusinessCategoryName } from "../models";

   const cate = BusinessCategory.FoodAndBeverage; // 10
   const label = BusinessCategoryName[cate]; // "Thực phẩm & Đồ uống"
 */
export declare const BusinessCategoryName: Record<BusinessCategory, string>;
