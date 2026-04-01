#!/usr/bin/env bash
set -euo pipefail

echo "🔍 Checking dependencies..."

if [ ! -d "node_modules" ]; then
  echo "📦 node_modules not found. Installing dependencies..."
  npm install
else
  echo "✅ Dependencies already installed"
fi

echo "🚀 Starting Vite development server..."
npx vite