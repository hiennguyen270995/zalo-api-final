---
description: Xử lý liên kết
---

# parseLink

## api.parseLink(link)

### Parameters

* link `string`

### Return

`Promise<ParseLinkResponse>`

### Types

```typescript
export type ParseLinkMedia = {
    type: number;
    count: number;
    mediaTitle: string;
    artist: string;
    streamUrl: string;
    stream_icon: string;
};

export type ParseLinkErrorMaps = {
    [key: string]: number;
};

export type ParseLinkResponse = {
    data: any;
    thumb: string;
    title: string;
    desc: string;
    src: string;
    href: string;
    media: ParseLinkMedia;
    stream_icon: string;
    error_maps: ParseLinkErrorMaps;
};
```

### Examples

```javascript
api.parseLink("https://example.com")
    .then(console.log)
    .catch(console.error);
```
