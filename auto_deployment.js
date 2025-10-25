#!/bin/bash

# Project Deployment Script (GitHub → Render)
REPO="https://github.com/narikeith081-lang/HKGN-Fabrication.git"
BRANCH="main"

echo "🚀 Starting Deployment..."

git add .
git commit -m "Auto-deploy $(date)"
git push origin $BRANCH

echo "✅ Code pushed to GitHub."

echo "⏳ Triggering Render deployment..."
curl -X POST \
     -H "Accept: application/json" \
     -H "Authorization: Bearer YOUR_RENDER_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"serviceId": "srv-d3t6671bh1hs73a7sts0"}' \
     https://api.render.com/v1/services/srv-d3t6671bh1hs73a7sts0/deploys

echo "✅ Deployment triggered successfully."
