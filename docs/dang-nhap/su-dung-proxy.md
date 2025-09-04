---
description: Cấu hình proxy cho zalo-api-final
---

# Sử dụng Proxy

### Đối với Bun

```javascript
const zalo = new Zalo({
    agent: "http(s)://user:pass@host:port",
});
```

### Đối với NodeJS

Vì native fetch của NodeJS không hỗ trợ proxy nên phải thay thế nó bằng [node-fetch](https://www.npmjs.com/package/node-fetch)

```javascript
import { Zalo } from "zalo-api-final";
import { HttpProxyAgent } from "http-proxy-agent";
import nodefetch from "node-fetch";

const zalo = new Zalo({
    agent: new HttpProxyAgent("http(s)://user:pass@host:port"),
    // @ts-ignore
    polyfill: nodefetch
});
```
