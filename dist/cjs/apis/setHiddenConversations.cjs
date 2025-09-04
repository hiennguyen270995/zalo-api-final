'use strict';

var ZaloApiError = require('../Errors/ZaloApiError.cjs');
var Enum = require('../models/Enum.cjs');
require('../models/FriendEvent.cjs');
require('../models/GroupEvent.cjs');
require('../models/Reaction.cjs');
require('../models/ZBusiness.cjs');
require('../models/AutoReply.cjs');
var utils = require('../utils.cjs');

const setHiddenConversationsFactory = utils.apiFactory()((api, ctx, utils) => {
    const serviceURL = utils.makeURL(`${api.zpwServiceMap.conversation[0]}/api/hiddenconvers/add-remove`);
    /**
     * Set hidden conversation
     *
     * @param hidden - Whether to hide or unhide the conversation
     * @param threadId Thread ID
     * @param type Thread type (User/Group)
     *
     * @throws ZaloApiError
     */
    return async function setHiddenConversations(hidden, threadId, type = Enum.ThreadType.User) {
        const params = {
            [hidden ? "add_threads" : "del_threads"]: JSON.stringify([
                {
                    thread_id: threadId,
                    is_group: type === Enum.ThreadType.Group ? 1 : 0,
                },
            ]),
            [hidden ? "del_threads" : "add_threads"]: "[]",
            imei: ctx.imei,
        };
        const encryptedParams = utils.encodeAES(JSON.stringify(params));
        if (!encryptedParams)
            throw new ZaloApiError.ZaloApiError("Failed to encrypt params");
        const response = await utils.request(serviceURL, {
            method: "POST",
            body: new URLSearchParams({
                params: encryptedParams,
            }),
        });
        return utils.resolve(response);
    };
});

exports.setHiddenConversationsFactory = setHiddenConversationsFactory;
