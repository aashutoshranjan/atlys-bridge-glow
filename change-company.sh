#!/usr/bin/env bash
# change-company.sh — update the company name across the entire site by
# editing the single source of truth at src/config/company.ts.
#
# Usage:
#   ./change-company.sh "New Company Name"
#   npm run change-company "New Company Name"
#
# All other branding (logo, domain, emails, WhatsApp, QR code, etc.)
# can be edited directly in src/config/company.ts — every page, header,
# footer, form and metadata reference reads from that file automatically.

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 \"New Company Name\"" >&2
  exit 1
fi

NEW_NAME="$1"
CONFIG="src/config/company.ts"

if [ ! -f "$CONFIG" ]; then
  echo "Error: $CONFIG not found." >&2
  exit 1
fi

# Replace the "name:" line in the company config (first match only).
# Works on both BSD (macOS) and GNU sed by writing to a temp file.
TMP="$(mktemp)"
awk -v new="$NEW_NAME" '
  BEGIN { done = 0 }
  {
    if (!done && $0 ~ /^[[:space:]]*name:[[:space:]]*".*",?[[:space:]]*$/) {
      sub(/".*"/, "\"" new "\"")
      done = 1
    }
    print
  }
' "$CONFIG" > "$TMP"
mv "$TMP" "$CONFIG"

echo "✓ Updated company name to: $NEW_NAME"
echo "  Edited: $CONFIG"
echo
echo "Next steps:"
echo "  npm run build   # rebuild static site"
echo "  Deploy the dist/ folder to your Nginx server."
