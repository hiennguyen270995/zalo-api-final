export declare enum UpdateLangAvailableLanguages {
    VI = "VI",
    EN = "EN",
    MY = "MY"
}
export type UpdateLangResponse = "";
export declare const updateLangFactory: (ctx: import("../context.js").ContextBase, api: import("../zalo.js").API) => (language?: UpdateLangAvailableLanguages) => Promise<"">;
