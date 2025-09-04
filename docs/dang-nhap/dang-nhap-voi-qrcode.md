---
description: Đăng nhập vào tài khoản Zalo cá nhân
---

# Đăng nhập với QRCode

### Đăng nhập

<pre class="language-javascript" data-title="index.js"><code class="lang-javascript">import { Zalo } from "zalo-api-final";

const zalo = new Zalo({
    selfListen: false, // mặc định false, lắng nghe sự kiện của bản thân
    checkUpdate: true, // mặc định true, kiểm tra update
    logging: true // mặc định true, bật/tắt log mặc định của thư viện
});

const api = await zalo.loginQR({
    userAgent: "", // không bắt buộc
    qrPath: "" // đường dẫn lưu QR, mặc định ./qr.png
<strong>});
</strong>
api.listener.start(); // bắt đầu lắng nghe sự kiện
</code></pre>

