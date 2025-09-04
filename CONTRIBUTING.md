# Hướng Dẫn Đóng Góp cho zalo-api-final

Cảm ơn bạn đã quan tâm đến việc đóng góp cho zalo-api-final! Dự án này được duy trì bởi cộng đồng và chúng tôi hoan nghênh mọi đóng góp.

## Mục Lục

- [Quy Tắc Ứng Xử](#quy-tắc-ứng-xử)
- [Bắt Đầu](#bắt-đầu)
- [Thiết Lập Môi Trường Phát Triển](#thiết-lập-môi-trường-phát-triển)
- [Cách Đóng Góp](#cách-đóng-góp)
- [Quy Trình Pull Request](#quy-trình-pull-request)
- [Hướng Dẫn Code Style](#hướng-dẫn-code-style)
- [Hướng Dẫn Testing](#hướng-dẫn-testing)
- [Hướng Dẫn Documentation](#hướng-dẫn-documentation)
- [Hướng Dẫn Bảo Mật](#hướng-dẫn-bảo-mật)
- [Quy Trình Release](#quy-trình-release)
- [Nhận Trợ Giúp](#nhận-trợ-giúp)

## Quy Tắc Ứng Xử

Dự án này tuân thủ [Quy Tắc Ứng Xử](CODE_OF_CONDUCT.md) của chúng tôi. Bằng cách tham gia, bạn đồng ý tuân theo các quy tắc này.

## Bắt Đầu

### Yêu Cầu Hệ Thống

- Node.js >= 18.0.0
- Bun (khuyến nghị) hoặc npm
- Git

### Fork và Clone

1. Fork repository này
2. Clone fork của bạn:
   ```bash
   git clone https://github.com/TEN-CUA-BAN/zalo-api-final.git
   cd zalo-api-final
   ```
3. Thêm upstream remote:
   ```bash
   git remote add upstream https://github.com/hiennguyen270995/zalo-api-final.git
   ```

## Thiết Lập Môi Trường Phát Triển

### Cài Đặt Dependencies

```bash
# Sử dụng Bun (khuyến nghị)
bun install

# Hoặc sử dụng npm
npm install
```

### Build Project

```bash
# Build cả ESM và CJS
bun run build

# Build chỉ ESM
bun run build:esm

# Build chỉ CJS
bun run build:cjs
```

### Chạy Tests

```bash
# Chạy feature tests
bun run test:feat

# Chạy file test cụ thể
bun run test/test.ts
```

### Format Code

```bash
# Format code với Prettier
bun run prettier
```

## Cách Đóng Góp

### Các Loại Đóng Góp

Chúng tôi hoan nghênh các loại đóng góp sau:

- 🐛 **Báo Cáo Lỗi**: Báo cáo bug và issues
- ✨ **Đề Xuất Tính Năng**: Đề xuất tính năng mới
- 🔧 **Đóng Góp Code**: Sửa lỗi và thêm tính năng
- 📚 **Tài Liệu**: Cải thiện docs và examples
- 🧪 **Tests**: Thêm hoặc cải thiện tests
- 🔒 **Bảo Mật**: Báo cáo lỗ hổng bảo mật
- 🌐 **Dịch Thuật**: Dịch docs sang ngôn ngữ khác

### Trước Khi Bắt Đầu

1. **Kiểm tra issues hiện tại**: Tìm kiếm issues hiện có trước khi tạo mới
2. **Thảo luận thay đổi lớn**: Tạo issue để thảo luận các thay đổi lớn
3. **Theo dõi roadmap**: Kiểm tra roadmap và priority hiện tại

## Quy Trình Pull Request

### Tạo Pull Request

1. **Tạo feature branch**:
   ```bash
   git checkout -b feature/ten-tinh-nang-cua-ban
   # hoặc
   git checkout -b fix/sua-loi-cua-ban
   ```

2. **Thực hiện thay đổi**:
   - Tuân theo hướng dẫn code style
   - Thêm tests cho tính năng mới
   - Cập nhật documentation nếu cần

3. **Test thay đổi của bạn**:
   ```bash
   bun run build
   bun run test:feat
   ```

4. **Commit thay đổi**:
   ```bash
   git add .
   git commit -m "feat: thêm API method mới cho quản lý nhóm"
   ```

5. **Push lên fork của bạn**:
   ```bash
   git push origin feature/ten-tinh-nang-cua-ban
   ```

6. **Tạo Pull Request**:
   - Sử dụng PR template được cung cấp
   - Link các issues liên quan
   - Cung cấp mô tả rõ ràng về thay đổi

### Quy Trình Review PR

1. **Automated checks** phải pass
2. **Code review** bởi ít nhất một maintainer
3. **Security review** cho các thay đổi liên quan bảo mật
4. **Documentation review** cho các thay đổi API
5. **Final approval** trước khi merge

## Hướng Dẫn Code Style

### Hướng Dẫn TypeScript

- Sử dụng TypeScript strict mode
- Ưu tiên interfaces hơn types cho object shapes
- Sử dụng tên biến và function có ý nghĩa
- Thêm JSDoc comments cho public APIs
- Sử dụng async/await thay vì Promises khi có thể

### Tổ Chức Code

Dự án tuân theo cấu trúc modular để dễ bảo trì và tổ chức:

```
zalo-api-final/
├── src/                           # Thư mục source code
│   ├── apis/                      # Các API methods (100+ files)
│   │   ├── sendMessage.ts         # Chức năng messaging cốt lõi
│   │   ├── login.ts               # Phương thức xác thực
│   │   ├── loginQR.ts             # Đăng nhập QR code
│   │   ├── listen.ts              # Lắng nghe events
│   │   ├── sendVideo.ts           # Gửi video
│   │   ├── sendVoice.ts           # Gửi voice
│   │   ├── sendSticker.ts         # Gửi sticker
│   │   ├── createGroup.ts         # Quản lý nhóm
│   │   ├── addReaction.ts         # Message reactions
│   │   ├── uploadAttachment.ts    # Upload files
│   │   └── ...                    # 90+ API methods khác
│   ├── models/                    # TypeScript interfaces và types
│   │   ├── Message.ts             # Message interface
│   │   ├── Attachment.ts          # File attachment types
│   │   ├── Reaction.ts            # Reaction types
│   │   ├── FriendEvent.ts         # Friend event types
│   │   ├── GroupEvent.ts          # Group event types
│   │   ├── Typing.ts              # Typing indicators
│   │   ├── SeenMessage.ts         # Message seen events
│   │   ├── DeliveredMessage.ts    # Message delivery events
│   │   ├── Undo.ts                # Undo functionality
│   │   ├── Enum.ts                # Enumerations
│   │   └── index.ts               # Model exports
│   ├── Errors/                    # Error handling
│   │   ├── ZaloApiError.ts        # Custom API error class
│   │   └── index.ts               # Error exports
│   ├── context.ts                 # Context management và state
│   ├── utils.ts                   # Utility functions và helpers
│   ├── zalo.ts                    # Main Zalo class implementation
│   ├── update.ts                  # Update checking functionality
│   └── index.ts                   # Public API exports
├── examples/                      # Ví dụ sử dụng
│   └── echobot.ts                 # Ví dụ echo bot
├── test/                          # Test files
│   ├── feat.ts                    # Feature tests
│   ├── feat.test.ts               # Feature test suite
│   ├── test.ts                    # General tests
│   └── a.png                      # Test assets
├── docs-export/                   # Documentation tiếng Việt (117 files)
│   ├── api/                       # API documentation (84 files)
│   ├── models/                    # Model documentation (19 files)
│   ├── listener/                  # Listener documentation (5 files)
│   ├── dang-nhap/                 # Login guides (4 files)
│   ├── bat-dau/                   # Getting started (3 files)
│   └── ...                        # Các file docs khác
├── .github/                       # GitHub configuration
│   └── ISSUE_TEMPLATE/            # Issue templates
├── dist/                          # Build output (generated)
├── package.json                   # Project configuration
├── tsconfig.json                  # TypeScript configuration
├── rollup.config.js               # Build configuration
├── README.md                      # Project documentation
├── CONTRIBUTING.md                # Hướng dẫn đóng góp
├── SECURITY.md                    # Chính sách bảo mật
├── CODE_OF_CONDUCT.md             # Quy tắc cộng đồng
└── LICENSE                        # MIT License
```

### Giải Thích Các Thư Mục Chính

- **`src/apis/`**: Chứa tất cả API method implementations (~100 files)

- **`src/models/`**: TypeScript interfaces và type definitions
  - Cấu trúc dữ liệu cốt lõi cho messages, events, và API responses
  - Đảm bảo type safety trong toàn bộ ứng dụng

- **`src/Errors/`**: Xử lý lỗi tùy chỉnh
  - `ZaloApiError.ts`: Xử lý các lỗi API cụ thể
  - Cung cấp error handling nhất quán trong thư viện

- **`docs-export/`**: Documentation tiếng Việt hoàn chỉnh (117 files)
  - API documentation chi tiết cho từng method
  - Hướng dẫn sử dụng và examples bằng tiếng Việt

- **`examples/`**: Ví dụ sử dụng và demonstrations
  - `echobot.ts`: Ví dụ hoàn chỉnh về Zalo bot implementation

- **`test/`**: Test suites và test assets
  - Feature tests cho chức năng cốt lõi
  - Integration tests cho API methods

### Quy Ước Đặt Tên

- **Files**: camelCase (ví dụ: `sendMessage.ts`)
- **Classes**: PascalCase (ví dụ: `ZaloApiError`)
- **Functions**: camelCase (ví dụ: `sendMessage`)
- **Constants**: UPPER_SNAKE_CASE (ví dụ: `API_BASE_URL`)
- **Interfaces**: PascalCase với prefix `I` (ví dụ: `IMessage`)

### Xử Lý Lỗi

```typescript
// Tốt
try {
  const result = await api.sendMessage(message);
  return result;
} catch (error) {
  if (error instanceof ZaloApiError) {
      throw error;
  }
  throw new ZaloApiError(`Gửi tin nhắn thất bại: ${error.message}`);
}

// Không tốt
try {
  const result = await api.sendMessage(message);
  return result;
} catch (error) {
  console.error(error);
  return null;
}
```

## Hướng Dẫn Testing

### Cấu Trúc Test

```typescript
describe('API Method', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
  });

  it('should handle success case', async () => {
    // Test implementation
  });

  it('should handle error case', async () => {
    // Test error handling
  });
});
```

### Best Practices Testing

- Test cả trường hợp thành công và thất bại
- Mock external dependencies
- Sử dụng tên test có mô tả rõ ràng
- Giữ các tests độc lập
- Test edge cases và error conditions

### Chạy Tests

```bash
# Chạy tất cả tests
bun run test:feat

# Chạy test cụ thể
bun run test/test.ts

# Chạy với coverage (nếu có)
bun run test:coverage
```

## Hướng Dẫn Documentation

### API Documentation

- Document tất cả public methods với JSDoc
- Bao gồm parameter types và descriptions
- Cung cấp ví dụ sử dụng
- Document error conditions

```typescript
/**
 * Gửi tin nhắn đến thread cụ thể
 * @param message - Object message chứa nội dung và metadata
 * @param threadId - ID của thread để gửi tin nhắn
 * @param threadType - Loại thread (User hoặc Group)
 * @returns Promise<Message> - Object message đã gửi
 * @throws {ZaloApiError} Khi API request thất bại
 * @example
 * ```typescript
 * const message = await api.sendMessage(
 *   { msg: "Xin chào, thế giới!" },
 *   "123456789",
 *   ThreadType.User
 * );
 * ```
 */
async sendMessage(message: IMessage, threadId: string, threadType: ThreadType): Promise<Message>
```

### Cập Nhật README

- Cập nhật README.md cho tính năng mới
- Thêm ví dụ cho APIs mới
- Cập nhật hướng dẫn cài đặt nếu cần
- Giữ table of contents được cập nhật

## Hướng Dẫn Bảo Mật

### Best Practices Bảo Mật

- Không bao giờ commit dữ liệu nhạy cảm (tokens, passwords, etc.)
- Sử dụng environment variables cho configuration
- Validate tất cả user inputs
- Tuân theo nguyên tắc least privilege
- Báo cáo issues bảo mật một cách riêng tư

### Báo Cáo Bảo Mật

Nếu bạn phát hiện lỗ hổng bảo mật:

1. **KHÔNG** tạo public issue
2. Sử dụng quy trình báo cáo trong [SECURITY.md](SECURITY.md)
3. Liên hệ trực tiếp với maintainer: hiennguyen270995@gmail.com
4. Liên hệ team members trực tiếp cho issues khẩn cấp

### Code Security

```typescript
// Tốt - Validate inputs
function sendMessage(content: string, threadId: string) {
  if (!content || typeof content !== 'string') {
    throw new ZaloApiError('Content phải là string không rỗng');
  }
  if (!threadId || typeof threadId !== 'string') {
    throw new ZaloApiError('ThreadId phải là string không rỗng');
  }
  // Implementation
}

// Không tốt - Không validation
function sendMessage(content: any, threadId: any) {
  // Implementation without validation
}
```

## Quy Trình Release

### Versioning

Chúng tôi tuân theo [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: Tính năng mới (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Checklist

- [ ] Tất cả tests pass
- [ ] Documentation được cập nhật
- [ ] Version được bump trong package.json
- [ ] Build thành công
- [ ] Release notes được chuẩn bị

### Publishing

```bash
# Build project
bun run build

# Chạy tests
bun run test:feat

# Publish lên npm
npm publish
```

## Nhận Trợ Giúp

### Kênh Liên Lạc

- **GitHub Issues**: Cho bug reports và feature requests
- **GitHub Discussions**: Cho câu hỏi và thảo luận chung
- **Pull Requests**: Cho code contributions
- **Email**: hiennguyen270995@gmail.com cho các vấn đề khẩn cấp

### Team Members

- [@hiennguyen270995](https://github.com/hiennguyen270995) - Project Lead & Maintainer

### Resources

- [API Documentation](docs-export/) - Documentation tiếng Việt hoàn chỉnh
- [Examples](examples/) - Ví dụ sử dụng
- [Security Policy](SECURITY.md) - Chính sách bảo mật
- [Code of Conduct](CODE_OF_CONDUCT.md) - Quy tắc cộng đồng

## Lưu Ý Đặc Biệt cho zalo-api-final

### Thư Viện API Không Chính Thức

> [!IMPORTANT]
> ⚠️ zalo-api-final là thư viện API không chính thức cho Zalo. Hãy lưu ý:

- **Rủi Ro Tài Khoản**: Sử dụng API này có thể dẫn đến việc tài khoản bị khóa
- **Điều Khoản Dịch Vụ**: Tôn trọng ToS của Zalo trong contributions của bạn
- **Rate Limiting**: Chú ý đến giới hạn sử dụng API
- **Quyền Riêng Tư**: Bảo vệ privacy và dữ liệu người dùng

### Phát Triển Có Trách Nhiệm

- Test thay đổi kỹ lưỡng trước khi submit
- Tránh giới thiệu tính năng có thể gây hại cho users
- Cân nhắc impact lên infrastructure của Zalo
- Document bất kỳ rủi ro hoặc giới hạn nào

### Hỗ Trợ Cộng Đồng Việt Nam

- **Ngôn Ngữ**: Ưu tiên sử dụng tiếng Việt trong documentation và comments
- **Văn Hóa**: Tôn trọng văn hóa và phong tục Việt Nam
- **Hỗ Trợ**: Ưu tiên hỗ trợ các developers Việt Nam mới bắt đầu
- **SEO**: Tối ưu cho thị trường và từ khóa Việt Nam

### Tính Năng Đặc Biệt

- **Documentation Offline**: Bao gồm docs-export với 117 files tiếng Việt
- **Multi-account Support**: Hỗ trợ quản lý nhiều tài khoản Zalo
- **Business Integration**: Tích hợp cho doanh nghiệp và bán hàng
- **N8N Compatibility**: Tương thích với n8n workflows

---

**Cảm ơn bạn đã đóng góp cho zalo-api-final!** 🚀

Contributions của bạn giúp làm thư viện này tốt hơn cho toàn bộ cộng đồng developer Việt Nam. 
