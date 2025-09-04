---
description: Xây dựng bot nhại lại tin nhắn văn bản của người dùng
---

# Bot nhại lại người dùng

### Code mẫu

<pre class="language-javascript" data-title="index.js"><code class="lang-javascript"><strong>import { Zalo } from "zalo-api-final";
</strong>
const zalo = new Zalo({
    selfListen: false,
});
const api = await zalo.loginQR();

const { listener } = api;

listener.on("message", (msg) => {
    if (typeof msg.data.content == "string") {
        api
            .sendMessage(msg.data.content, msg.threadId, msg.type)
            .catch(console.error);
    }
});

listener.start();
</code></pre>


