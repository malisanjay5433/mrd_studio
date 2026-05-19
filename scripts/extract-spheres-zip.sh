#!/usr/bin/env bash
# Extract Spheres subfolder JPEGs → public/spheres/sphere-01.jpg …
# Usage: bash scripts/extract-spheres-zip.sh /path/to/Projects.zip
set -euo pipefail
ZIP="${1:?Usage: $0 path/to/archive.zip}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/spheres"
rm -rf "$DEST"
mkdir -p "$DEST/raw"
unzip -q -o "$ZIP" -d "$DEST/raw"
n=1
while IFS= read -r -d "" f; do
	ext=$(printf '%s' "${f##*.}" | tr '[:upper:]' '[:lower:]')
	out="$DEST/sphere-$(printf '%02d' "$n").$ext"
	cp "$f" "$out"
	n=$((n + 1))
done < <(
	find "$DEST/raw" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -ipath '*sphere*' \
		-print0 | LC_ALL=C sort -z
)
rm -rf "$DEST/raw"
echo "Wrote $((n - 1)) sphere images to $DEST"
