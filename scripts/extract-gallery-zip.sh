#!/usr/bin/env bash
# Extract gallery stills → public/quiet-harvest/quiet-harvest-01.ext …
# Usage: bash scripts/extract-gallery-zip.sh /path/to/archive.zip
set -euo pipefail
ZIP="${1:?Usage: $0 path/to/archive.zip}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/quiet-harvest"
rm -rf "$DEST"
mkdir -p "$DEST/raw"
unzip -q -o "$ZIP" -d "$DEST/raw"
n=1
while IFS= read -r -d "" f; do
	ext=$(printf '%s' "${f##*.}" | tr '[:upper:]' '[:lower:]')
	out="$DEST/quiet-harvest-$(printf '%02d' "$n").$ext"
	cp "$f" "$out"
	n=$((n + 1))
done < <(
	find "$DEST/raw" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
		-print0 | LC_ALL=C sort -z
)
rm -rf "$DEST/raw"
echo "Wrote $((n - 1)) gallery images to $DEST"
