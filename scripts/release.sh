#!/usr/bin/env bash
set -euo pipefail

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🚀 Starting release process..."
echo ""

# Build for production
echo "=== BUILDING ==="
"$SCRIPT_DIR/build-prod.sh"
echo ""

# Deploy to S3
echo "=== DEPLOYING ==="
"$SCRIPT_DIR/deploy-s3.sh"
echo ""

# Invalidate CloudFront cache
echo "=== INVALIDATING CACHE ==="
"$SCRIPT_DIR/invalidate-cloudfront.sh"
echo ""

echo "🎉 Release complete!"
