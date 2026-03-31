#!/usr/bin/env bash
set -euo pipefail

# Source environment config if it exists
if [ -f "scripts/env/deploy.env" ]; then
  # shellcheck disable=SC1091
  source scripts/env/deploy.env
fi

# Set defaults
BUCKET="${BUCKET:-robfiero.net}"
DIST_DIR="${DIST_DIR:-dist}"
AWS_REGION="${AWS_REGION:-us-east-1}"
AWS_PROFILE="${AWS_PROFILE:-}"

echo "📦 Deploying to S3..."
echo "  Bucket: $BUCKET"
echo "  Region: $AWS_REGION"

# Verify dist exists
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ Error: $DIST_DIR/ not found. Run './scripts/build-prod.sh' first."
  exit 1
fi

# Build AWS CLI command
AWS_CMD="aws s3 sync \"$DIST_DIR/\" \"s3://$BUCKET\" --delete --region \"$AWS_REGION\""

# Add profile if specified
if [ -n "$AWS_PROFILE" ]; then
  AWS_CMD="$AWS_CMD --profile \"$AWS_PROFILE\""
fi

# Execute sync
eval "$AWS_CMD"

echo "✅ S3 deployment complete"
