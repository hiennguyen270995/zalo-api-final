---
description: Báo xấu
---

# sendReport

## api.sendReport(options, threadId\[, type])

### Parameters

* options
  * reason `ReportReason`
  * content `string?`
    * Nội dung báo xấu, chỉ cần nếu reason là `ReportReason.Other`
* threadId `string`
* type `ThreadType?`
  * loại thread, mặc định là người dùng

#### ReportReason

`Sensitive`, `Annoy`, `Fraud`, `Other`

### Return

`Promise<SendReportResponse>`

#### SendReportResponse

* reportId `string`

### Examples

Báo xấu người dùng

```javascript
import { ReportReason } from "zalo-api-final";
const userId = "0000000000000001"

api.sendReport(
    {
        reason: ReportReason.Fraud
    },
    userId
)
    .then(console.log)
    .catch(console.error);
```
