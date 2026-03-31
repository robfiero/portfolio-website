#!/usr/bin/env bash
set -euo pipefail

echo "🔨 Building for production..."

# Clean dist directory if it exists
if [ -d "dist" ]; then
  echo "  Cleaning dist/"
  rm -rf dist
fi

# Run Vite build
npx vite build

echo "✅ Build complete"