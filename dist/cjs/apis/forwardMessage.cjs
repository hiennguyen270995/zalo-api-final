'use strict';

var ZaloApiError = require('../Errors/ZaloApiError.cjs');
var Enum = require('../models/Enum.cjs');
require('../models/FriendEvent.cjs');
require('../models/GroupEvent.cjs');
require('../models/Reaction.cjs');
require('../models/ZBusiness.cjs');
require('../models/AutoReply.cjs');
var utils = require('../utils.cjs');

const forwardMessageFactory = utils.apiFactory()((api, ctx, utils) => {
    const serviceURL = {
        [Enum.ThreadType.User]: utils.makeURL(`${api.zpwServiceMap.file[0]}/api/message/mforward`),
        [Enum.ThreadType.Group]: utils.makeURL(`${api.zpwServiceMap.file[0]}/api/group/mforward`),
    };
    /**
     * Forward message to multiple threads
     *
     * @param payload Forward message payload
     * @param threadId Thread ID(s)
     * @param type Thread type (User/Group)
     *
     * @throws ZaloApiError
     */
    return async function forwardMessage(payload, type = Enum.ThreadType.User) {
        var _a, _b;
        if (!payload.message)
            throw new ZaloApiError.ZaloApiError("Missing message content");
        if (!payload.threadIds || payload.threadIds.length === 0)
            throw new ZaloApiError.ZaloApiError("Missing thread IDs");
        const timestamp = Date.now();
        const clientId = timestamp.toString();
        const msgInfo = {
            message: payload.message,
            reference: payload.reference
                ? JSON.stringify({
                    type: 3,
                    data: JSON.stringify(payload.reference),
                })
                : undefined,
        };
        const decorLog = payload.reference
            ? {
                fw: {
                    pmsg: {
                        st: 1,
                        ts: payload.reference.ts,
                        id: payload.reference.id,
                    },
                    rmsg: {
                        st: 1,
                        ts: payload.reference.ts,
                        id: payload.reference.id,
                    },
                    fwLvl: payload.reference.fwLvl,
                },
            }
            : null;
        let params;
        if (type === Enum.ThreadType.User) {
            params = {
                toIds: payload.threadIds.map((threadId) => {
                    var _a;
                    return ({
                        clientId,
                        toUid: threadId,
                        ttl: (_a = payload.ttl) !== null && _a !== void 0 ? _a : 0,
                    });
                }),
                imei: ctx.imei,
                ttl: (_a = payload.ttl) !== null && _a !== void 0 ? _a : 0,
                msgType: "1",
                totalIds: payload.threadIds.length,
                msgInfo: JSON.stringify(msgInfo),
                decorLog: JSON.stringify(decorLog),
            };
        }
        else {
            params = {
                grids: payload.threadIds.map((threadId) => {
                    var _a;
                    return ({
                        clientId,
                        grid: threadId,
                        ttl: (_a = payload.ttl) !== null && _a !== void 0 ? _a : 0,
                    });
                }),
                ttl: (_b = payload.ttl) !== null && _b !== void 0 ? _b : 0,
                msgType: "1",
                totalIds: payload.threadIds.length,
                msgInfo: JSON.stringify(msgInfo),
                decorLog: JSON.stringify(decorLog),
            };
        }
        const encryptedParams = utils.encodeAES(JSON.stringify(params));
        if (!encryptedParams)
            throw new ZaloApiError.ZaloApiError("Failed to encrypt params");
        const response = await utils.request(serviceURL[type], {
            method: "POST",
            body: new URLSearchParams({
                params: encryptedParams,
            }),
        });
        return utils.resolve(response);
    };
});

exports.forwardMessageFactory = forwardMessageFactory;
