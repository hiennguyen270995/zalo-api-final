import { ZaloApiError } from "../Errors/ZaloApiError.js";
import { ThreadType } from "../models/index.js";
import { apiFactory } from "../utils.js";
export const sendBankCardFactory = apiFactory()((api, ctx, utils) => {
    const serviceURL = utils.makeURL(`${api.zpwServiceMap.zimsg[0]}/api/transfer/card`);
    /**
     * Send bank card
     *
     * @param payload The payload containing the bank card information
     * @param threadId The ID of the thread to send the bank card to
     * @param type REQUIRE The type of thread to send the bank card to
     *
     * @note message call key eg: 99867xxxxx vietcombank (key: vietcombank, sacombank, etc,...)
     *
     * @throws ZaloApiError
     */
    return async function sendBankCard(payload, threadId, type) {
        var _a;
        const params = {
            binBank: payload.binBank,
            numAccBank: payload.numAccBank,
            nameAccBank: ((_a = payload.nameAccBank) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "---",
            cliMsgId: Date.now().toString(),
            tsMsg: Date.now(),
            destUid: threadId,
            destType: type === ThreadType.Group ? 1 : 0,
        };
        const encryptedParams = utils.encodeAES(JSON.stringify(params));
        if (!encryptedParams)
            throw new ZaloApiError("Failed to encrypt params");
        const response = await utils.request(serviceURL, {
            method: "POST",
            body: new URLSearchParams({
                params: encryptedParams,
            }),
        });
        return utils.resolve(response);
    };
});
