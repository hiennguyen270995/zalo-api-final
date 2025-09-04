#!/bin/bash

# Fix all internal links to use relative paths
echo "Fixing internal links..."

# Fix models links
cd models && sed -i 's|/zalo-api-final/models/||g' README.md && cd ..

# Fix listener links  
cd listener && sed -i 's|/zalo-api-final/listener/||g' README.md && cd ..

# Fix bat-dau links
find bat-dau -name "*.md" -exec sed -i 's|/zalo-api-final/bat-dau/||g' {} \;
find bat-dau -name "*.md" -exec sed -i 's|/zalo-api-final/||g' {} \;

# Fix dang-nhap links
find dang-nhap -name "*.md" -exec sed -i 's|/zalo-api-final/dang-nhap/||g' {} \;
find dang-nhap -name "*.md" -exec sed -i 's|/zalo-api-final/||g' {} \;

# Fix cross-references in all files
find . -name "*.md" -exec sed -i 's|/zalo-api-final/api/|../api/|g' {} \;
find . -name "*.md" -exec sed -i 's|/zalo-api-final/models/|../models/|g' {} \;
find . -name "*.md" -exec sed -i 's|/zalo-api-final/listener/|../listener/|g' {} \;
find . -name "*.md" -exec sed -i 's|/zalo-api-final/bat-dau/|../bat-dau/|g' {} \;
find . -name "*.md" -exec sed -i 's|/zalo-api-final/dang-nhap/|../dang-nhap/|g' {} \;

echo "✅ Fixed all internal links!"
