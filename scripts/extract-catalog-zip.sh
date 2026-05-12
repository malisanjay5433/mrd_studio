#!/usr/bin/env bash
# Extract product catalogue JPEGs → public/studio2/studio2-01.jpg …
# Usage: bash scripts/extract-catalog-zip.sh /path/to/archive.zip
set -euo pipefail
ZIP="${1:?Usage: $0 path/to/archive.zip}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/studio2"
rm -rf "$DEST"
mkdir -p "$DEST/raw"
unzip -q -o "$ZIP" -d "$DEST/raw"
n=1
while IFS= read -r -d "" f; do
	ext="${f##*.}"
	out="$DEST/studio2-$(printf '%02d' "$n").${ext,,}"
	cp "$f" "$out"
	n=$((n + 1))
done < <(find "$DEST/raw" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0 | LC_ALL=C sort -z)
rm -rf "$DEST/raw"
echo "Wrote $((n - 1)) catalogue images to $DEST"
