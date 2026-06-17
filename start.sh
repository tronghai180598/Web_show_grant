#!/bin/bash
cd "$(dirname "$0")"
echo "============================================"
echo "  DJI Clone — Auto-reload dev server"
echo "  Tự động reload khi save file"
echo "  Press Ctrl+C to stop"
echo "============================================"
npx browser-sync start \
  --server \
  --files "*.html, *.css, *.js" \
  --startPath "/uav.html" \
  --port 8080 \
  --no-notify
