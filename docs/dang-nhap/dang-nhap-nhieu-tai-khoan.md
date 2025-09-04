---
description: Đăng nhập vào nhiều tài khoản Zalo cá nhân
---

# Đăng nhập nhiều tài khoản

### Đăng nhập

Đăng nhập 2 tài khoản đồng thời với loginQR.

Dưới chỉ mẫu cho **loginQR**, **login** với **cookie** vẫn hỗ trợ nhiều tài khoản đồng thời

{% code title="index.js" %}
```javascript
import { Zalo } from "zalo-api-final";

// Cấu hình chung
const zalo = new Zalo({
    selfListen: false, // mặc định false, lắng nghe sự kiện của bản thân
    checkUpdate: true, // mặc định true, kiểm tra update
    logging: false // mặc định true, bật/tắt log mặc định của thư viện
});

async function app() {
    const api = await zalo.loginQR({}, (qrPath) => {
        // đã lưu mã qr
        console.log(`Quét mã tại ${qrPath} để đăng nhập`)
    });

    api.listener.start(); // bắt đầu lắng nghe sự kiện
    console.log(`Đã đăng nhập vào tài khoản ${api.getOwnId()}`)
}

// đăng nhập 2 tài khoản đồng thời
for (let i = 0; i < 2; i ++) {
    await app();
}
```
{% endcode %}
