#!/usr/bin/env bash
set -euo pipefail

# Source environment config if it exists
if [ -f "scripts/env/deploy.env" ]; then
  # shellcheck disable=SC1091
  source scripts/env/deploy.env
fi

# Require DISTRIBUTION_ID
if [ -z "${DISTRIBUTION_ID:-}" ]; then
  echo "❌ Error: DISTRIBUTION_ID must be set in scripts/env/deploy.env"
  exit 1
fi

# Set defaults
PATHS="${PATHS:-/*}"
AWS_PROFILE="${AWS_PROFILE:-}"

echo "🔄 Invalidating CloudFront cache..."
echo "  Distribution: $DISTRIBUTION_ID"
echo "  Paths: $PATHS"

# Build AWS CLI command
AWS_CMD="aws cloudfront create-invalidation --distribution-id \"$DISTRIBUTION_ID\" --paths \"$PATHS\""

# Add profile if specified
if [ -n "$AWS_PROFILE" ]; then
  AWS_CMD="$AWS_CMD --profile \"$AWS_PROFILE\""
fi

# Execute invalidation
eval "$AWS_CMD"

echo "✅ CloudFront invalidation complete"
