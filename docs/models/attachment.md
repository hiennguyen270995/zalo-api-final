---
description: Nguồn đính kèm, có thể là đường dẫn tới tệp hoặc dữ liệu Buffer của tệp
---

# Attachment

### Model

```typescript
export type AttachmentSource =
    | string
    | {
          data: Buffer;
          filename: `${string}.${string}`;
          metadata: {
              totalSize: number;
              width?: number;
              height?: number;
          };
      };
```
