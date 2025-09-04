---
description: Đăng nhập vào tài khoản Zalo cá nhân
---

# Đăng nhập với Cookie

### Chuẩn bị

**UPDATE:** giờ đây bạn có thể sử dụng tiện ích [ZaloDataExtractor](https://github.com/JustKemForFun/ZaloDataExtractor) để lấy các thông tin cần thiết để đăng nhập như: IMEI, userAgent và Cookies

1. Đăng nhập vào [Zalo](https://chat.zalo.me/) trên trình duyệt
2. Mở **DevTools** trên trình duyệt, bấm `F12` hoặc tổ hợp `CTRL + SHIFT + C`
3. Vào **console** của **DevTools** lấy `imei` bằng 1 trong 2 mã sau:
   1. `localStorage.getItem('z_uuid')`
   2. `localStorage.getItem('sh_z_uuid')`
4. Cũng tại **console**, gõ `navigator.userAgent` để lấy `userAgent`
5. Lấy Cookie thông qua các tiện ích như [J2TEAM Cookies](https://chromewebstore.google.com/detail/j2team-cookies/okpidcojinmlaakglciglbpcpajaibco), [Cookie-Editor](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm) hoặc [ZaloDataExtractor](https://github.com/JustKemForFun/ZaloDataExtractor/)

### Đăng nhập với Cookie

<pre class="language-javascript" data-title="index.js"><code class="lang-javascript">import { Zalo } from "zalo-api-final";
import fs from "fs";

const zalo = new Zalo({
    selfListen: false, // mặc định false, lắng nghe sự kiện của bản thân
    checkUpdate: true, // mặc định true, kiểm tra update
    logging: true // mặc định true, bật/tắt log mặc định của thư viện
});

// đọc cookie đã lưu ở bước 5
const cookie = JSON.parse(fs.readFileSync("./cookie.json", "utf-8"));

const api = await zalo.login({
    cookie: cookie,
    imei: "điền_vào_đây", // điền giá trị đã lấy ở bước 3
    userAgent: "điền_vào_đây", // điền giá trị đã lấy ở bước 4
<strong>});
</strong>
api.listener.start(); // bắt đầu lắng nghe sự kiện
</code></pre>

