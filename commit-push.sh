#!/bin/bash

echo "🚀 Git Commit & Push cho zalo-api-final"
echo "======================================="
echo

# Hiển thị thông tin Git hiện tại
echo "✅ Thông tin commit:"
echo "   Name: $(git config user.name)"
echo "   Email: $(git config user.email)"
echo

# Nhập GitHub username với default
echo "📱 GitHub username (Enter để dùng 'hiennguyen270995'):"
read -p "Username: " github_username

# Sử dụng default nếu không nhập gì
if [ -z "$github_username" ]; then
    github_username="hiennguyen270995"
fi

echo "✅ Sử dụng username: $github_username"
echo

# Kiểm tra và thêm remote
if git remote get-url origin >/dev/null 2>&1; then
    echo "🔗 Remote origin đã tồn tại:"
    git remote -v
else
    echo "🔗 Thêm remote repository..."
    git remote add origin github-zalo-api:$github_username/zalo-api-final.git
    echo "✅ Remote đã được thêm:"
    git remote -v
fi

echo
echo "📤 Bắt đầu commit và push..."

# Add files
echo "📦 Adding files..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "⚠️  Không có thay đổi để commit"
    exit 0
fi

# Commit
echo "💾 Committing..."
git commit -m "🎉 Initial commit - zalo-api-final v2.1.0

✨ Features:
- Complete Zalo API for JavaScript/TypeScript  
- Multi-account management support
- N8N node integration  
- Vietnamese localization
- QR code login & VietinBank donation
- Message, Group, Friend management
- Webhook support

📦 Package:
- ESM + CJS builds (575 files)
- TypeScript declarations
- Ready for npm publish

🔧 Build & Tools:
- TypeScript + Rollup
- ESLint + Prettier + Husky
- Complete Vietnamese documentation"

# Push
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo
echo "🎉 Hoàn thành!"
echo "🔗 Repository: https://github.com/$github_username/zalo-api-final"
echo "📦 Sẵn sàng publish lên npm!"
