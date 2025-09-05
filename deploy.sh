#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to display menu
show_menu() {
    echo ""
    echo "=================================="
    echo "   Zalo API Final Deploy Tool    "
    echo "=================================="
    echo "1. Publish to NPM"
    echo "2. Commit & Push (no tags)"
    echo "3. Commit & Push & Create tags"
    echo "4. Show git status"
    echo "5. Exit"
    echo "=================================="
    echo -n "Please choose an option (1-5): "
}

# Function to get current version from package.json
get_current_version() {
    node -p "require('./package.json').version"
}

# Function to publish to NPM
publish_npm() {
    echo -e "${YELLOW}Publishing to NPM...${NC}"
    
    # Build first
    echo -e "${BLUE}Building package...${NC}"
    npm run build
    if [ $? -ne 0 ]; then
        echo -e "${RED}Build failed!${NC}"
        return 1
    fi
    
    # Run tests if available
    if npm run test --silent 2>/dev/null; then
        echo -e "${BLUE}Running tests...${NC}"
        npm run test
        if [ $? -ne 0 ]; then
            echo -e "${RED}Tests failed!${NC}"
            return 1
        fi
    fi
    
    # Lint check if available
    if npm run lint --silent 2>/dev/null; then
        echo -e "${BLUE}Running lint check...${NC}"
        npm run lint
        if [ $? -ne 0 ]; then
            echo -e "${RED}Lint check failed!${NC}"
            return 1
        fi
    fi
    
    # Publish
    echo -e "${BLUE}Publishing to NPM...${NC}"
    npm publish
    if [ $? -eq 0 ]; then
        current_version=$(get_current_version)
        echo -e "${GREEN}✅ Successfully published version $current_version to NPM!${NC}"
    else
        echo -e "${RED}❌ NPM publish failed!${NC}"
        return 1
    fi
}

# Function to commit and push
commit_and_push() {
    local create_tags=$1
    
    # Check if there are any changes to commit
    if [ -z "$(git status --porcelain)" ]; then
        echo "❌ No changes to commit. Working tree is clean."
        return 1
    fi
    
    # Get commit message
    echo "Enter commit message (press Enter for default):"
    read -r commit_msg
    
    if [ -z "$commit_msg" ]; then
        current_time=$(date "+%Y-%m-%d %H:%M:%S")
        commit_msg="Update $current_time"
    fi
    
    echo "Commit message: '$commit_msg'"
    
    # Add all changes
    echo "Adding all changes..."
    git add .
    
    # Commit
    echo "Committing changes..."
    git commit -m "$commit_msg" --no-verify
    if [ $? -ne 0 ]; then
        echo "❌ Commit failed!"
        return 1
    fi
    
    # Push
    echo "Pushing to remote..."
    git push origin main
    if [ $? -ne 0 ]; then
        echo "❌ Push failed!"
        return 1
    fi
    
    # Create tags if requested
    if [ "$create_tags" = "true" ]; then
        current_version=$(get_current_version)
        tag_name="v$current_version"
        
        echo "Creating tag $tag_name..."
        git tag -a "$tag_name" -m "🚀 Release $tag_name: $commit_msg"
        
        echo "Pushing tag to remote..."
        git push origin "$tag_name"
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully created and pushed tag $tag_name!"
        else
            echo "❌ Tag push failed!"
            return 1
        fi
    fi
    
    echo "✅ Successfully committed and pushed changes!"
}

# Main script
while true; do
    show_menu
    read choice
    
    case $choice in
        1)
            echo -e "\n${BLUE}Selected: Publish to NPM${NC}"
            publish_npm
            ;;
        2)
            echo -e "\n${BLUE}Selected: Commit & Push (no tags)${NC}"
            commit_and_push false
            ;;
        3)
            echo -e "\n${BLUE}Selected: Commit & Push & Create tags${NC}"
            commit_and_push true
            ;;
        4)
            echo -e "\n${BLUE}Git Status:${NC}"
            git status
            ;;
        5)
            echo -e "\n${GREEN}👋 Goodbye!${NC}"
            exit 0
            ;;
        *)
            echo -e "\n${RED}❌ Invalid option. Please choose 1-5.${NC}"
            ;;
    esac
    
    echo ""
    echo -e "${YELLOW}Press Enter to continue...${NC}"
    read
done
done
