#!/usr/bin/env bash
# Production check + push to Git.
#   ./scripts/deploy.sh "commit message"
set -euo pipefail

MSG="${1:-chore: deploy}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "==> Installing dependencies"
bun install --frozen-lockfile

echo "==> Linting"
bun run lint

echo "==> Production build"
bun run build

echo "==> Committing and pushing to origin/$BRANCH"
git add -A
git commit -m "$MSG" || echo "Nothing to commit"
git push origin "$BRANCH"

echo "==> Done. Connected hosts (Vercel/Netlify/Cloudflare) will build from this commit."
