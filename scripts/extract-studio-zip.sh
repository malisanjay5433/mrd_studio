#!/usr/bin/env bash
# Extract a Drive/ZIP of studio JPGs into public/studio/studio-01.jpg …
# Usage: bash scripts/extract-studio-zip.sh /path/to/archive.zip
set -euo pipefail
ZIP="${1:?Usage: $0 path/to/archive.zip}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/studio"
rm -rf "$DEST"
mkdir -p "$DEST/raw"
unzip -q -o "$ZIP" -d "$DEST/raw"
n=1
while IFS= read -r -d "" f; do
	ext="${f##*.}"
	out="$DEST/studio-$(printf '%02d' "$n").${ext,,}"
	cp "$f" "$out"
	n=$((n + 1))
done < <(find "$DEST/raw" -maxdepth 1 \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0 | sort -z)
rm -rf "$DEST/raw"
echo "Wrote $((n - 1)) images to $DEST"
