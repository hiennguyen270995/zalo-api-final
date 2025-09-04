export var ThreadType;
(function (ThreadType) {
    ThreadType[ThreadType["User"] = 0] = "User";
    ThreadType[ThreadType["Group"] = 1] = "Group";
})(ThreadType || (ThreadType = {}));
export var DestType;
(function (DestType) {
    DestType[DestType["Group"] = 1] = "Group";
    DestType[DestType["User"] = 3] = "User";
    DestType[DestType["Page"] = 5] = "Page";
})(DestType || (DestType = {}));
export var ReminderRepeatMode;
(function (ReminderRepeatMode) {
    ReminderRepeatMode[ReminderRepeatMode["None"] = 0] = "None";
    ReminderRepeatMode[ReminderRepeatMode["Daily"] = 1] = "Daily";
    ReminderRepeatMode[ReminderRepeatMode["Weekly"] = 2] = "Weekly";
    ReminderRepeatMode[ReminderRepeatMode["Monthly"] = 3] = "Monthly";
})(ReminderRepeatMode || (ReminderRepeatMode = {}));
export var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
export var BoardType;
(function (BoardType) {
    BoardType[BoardType["Note"] = 1] = "Note";
    BoardType[BoardType["PinnedMessage"] = 2] = "PinnedMessage";
    BoardType[BoardType["Poll"] = 3] = "Poll";
})(BoardType || (BoardType = {}));
/**
 * @note Bank codes list after Mitm on Mobile and Bank's supported by Zalo
 * @documents https://developers.zalo.me/docs/zalo-notification-service/phu-luc/danh-sach-bin-code - docs missing bin code and short_name bank
 */
export var BinBankCard;
(function (BinBankCard) {
    BinBankCard[BinBankCard["ABBank"] = 970425] = "ABBank";
    BinBankCard[BinBankCard["ACB"] = 970416] = "ACB";
    BinBankCard[BinBankCard["Agribank"] = 970405] = "Agribank";
    BinBankCard[BinBankCard["BIDV"] = 970418] = "BIDV";
    BinBankCard[BinBankCard["BVBank"] = 970454] = "BVBank";
    BinBankCard[BinBankCard["BacA_Bank"] = 970409] = "BacA_Bank";
    BinBankCard[BinBankCard["BaoViet_Bank"] = 970438] = "BaoViet_Bank";
    BinBankCard[BinBankCard["CAKE"] = 546034] = "CAKE";
    BinBankCard[BinBankCard["CB_Bank"] = 970444] = "CB_Bank";
    BinBankCard[BinBankCard["CIMB_Bank"] = 422589] = "CIMB_Bank";
    BinBankCard[BinBankCard["Coop_Bank"] = 970446] = "Coop_Bank";
    BinBankCard[BinBankCard["DBS_Bank"] = 796500] = "DBS_Bank";
    BinBankCard[BinBankCard["DongA_Bank"] = 970406] = "DongA_Bank";
    BinBankCard[BinBankCard["Eximbank"] = 970431] = "Eximbank";
    BinBankCard[BinBankCard["GPBank"] = 970408] = "GPBank";
    BinBankCard[BinBankCard["HDBank"] = 970437] = "HDBank";
    BinBankCard[BinBankCard["HSBC"] = 458761] = "HSBC";
    BinBankCard[BinBankCard["HongLeong_Bank"] = 970442] = "HongLeong_Bank";
    BinBankCard[BinBankCard["IBK_HCM"] = 970456] = "IBK_HCM";
    BinBankCard[BinBankCard["IBK_HN"] = 970455] = "IBK_HN";
    BinBankCard[BinBankCard["Indovina_Bank"] = 970434] = "Indovina_Bank";
    BinBankCard[BinBankCard["KBank"] = 668888] = "KBank";
    BinBankCard[BinBankCard["KienlongBank"] = 970452] = "KienlongBank";
    BinBankCard[BinBankCard["Kookmin_Bank_HCM"] = 970463] = "Kookmin_Bank_HCM";
    BinBankCard[BinBankCard["Kookmin_Bank_HN"] = 970462] = "Kookmin_Bank_HN";
    BinBankCard[BinBankCard["LPBank"] = 970449] = "LPBank";
    BinBankCard[BinBankCard["MB_Bank"] = 970422] = "MB_Bank";
    BinBankCard[BinBankCard["MSB"] = 970426] = "MSB";
    BinBankCard[BinBankCard["NCB"] = 970419] = "NCB";
    BinBankCard[BinBankCard["Nam_A_Bank"] = 970428] = "Nam_A_Bank";
    BinBankCard[BinBankCard["NongHyup_Bank"] = 801011] = "NongHyup_Bank";
    BinBankCard[BinBankCard["OCB"] = 970448] = "OCB";
    BinBankCard[BinBankCard["Ocean_Bank"] = 970414] = "Ocean_Bank";
    BinBankCard[BinBankCard["PGBank"] = 970430] = "PGBank";
    BinBankCard[BinBankCard["PVcomBank"] = 970412] = "PVcomBank";
    BinBankCard[BinBankCard["Public_Bank_Vietnam"] = 970439] = "Public_Bank_Vietnam";
    BinBankCard[BinBankCard["SCB"] = 970429] = "SCB";
    BinBankCard[BinBankCard["SHB"] = 970443] = "SHB";
    BinBankCard[BinBankCard["Sacombank"] = 970403] = "Sacombank";
    BinBankCard[BinBankCard["Saigon_Bank"] = 970400] = "Saigon_Bank";
    BinBankCard[BinBankCard["SeABank"] = 970440] = "SeABank";
    BinBankCard[BinBankCard["Shinhan_Bank"] = 970424] = "Shinhan_Bank";
    BinBankCard[BinBankCard["Standard_Chartered_Vietnam"] = 970410] = "Standard_Chartered_Vietnam";
    BinBankCard[BinBankCard["TNEX"] = 9704261] = "TNEX";
    BinBankCard[BinBankCard["TPBank"] = 970423] = "TPBank";
    BinBankCard[BinBankCard["Techcombank"] = 970407] = "Techcombank";
    BinBankCard[BinBankCard["Timo"] = 963388] = "Timo";
    BinBankCard[BinBankCard["UBank"] = 546035] = "UBank";
    BinBankCard[BinBankCard["United_Overseas_Bank_Vietnam"] = 970458] = "United_Overseas_Bank_Vietnam";
    BinBankCard[BinBankCard["VIB"] = 970441] = "VIB";
    BinBankCard[BinBankCard["VPBank"] = 970432] = "VPBank";
    BinBankCard[BinBankCard["VRB"] = 970421] = "VRB";
    BinBankCard[BinBankCard["VietABank"] = 970427] = "VietABank";
    BinBankCard[BinBankCard["VietBank"] = 970433] = "VietBank";
    BinBankCard[BinBankCard["Vietcombank"] = 970436] = "Vietcombank";
    BinBankCard[BinBankCard["VietinBank"] = 970415] = "VietinBank";
    BinBankCard[BinBankCard["Woori_Bank"] = 970457] = "Woori_Bank";
})(BinBankCard || (BinBankCard = {}));
