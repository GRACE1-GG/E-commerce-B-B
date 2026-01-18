#!/bin/bash

echo "🚀 Vercel Deployment Setup for Flower & Jewelry E-commerce"
echo "==========================================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git repository not found"
    echo "📝 Please run: git init && git add . && git commit -m 'Initial commit'"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build test
echo ""
echo "🔨 Testing build process..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📋 Deployment Checklist:"
    echo "  ✓ Next.js project ready"
    echo "  □ Code pushed to GitHub"
    echo "  □ Backend deployed to Railway/Render"
    echo "  □ Backend URL noted"
    echo ""
    echo "📌 Next Steps:"
    echo "1. Push your code to GitHub:"
    echo "   git push origin main"
    echo ""
    echo "2. Deploy backend (if not done):"
    echo "   Go to https://railway.app or https://render.com"
    echo "   Import your GitHub repo's /backend folder"
    echo "   Note the deployed URL (e.g., https://your-api.railway.app)"
    echo ""
    echo "3. Deploy to Vercel:"
    echo "   Option A: Go to https://vercel.com/new and import your repo"
    echo "   Option B: Run: npm install -g vercel && vercel --prod"
    echo ""
    echo "4. In Vercel dashboard, add environment variable:"
    echo "   NEXT_PUBLIC_API_URL=https://your-backend-url.com"
    echo ""
    echo "5. Redeploy after adding environment variable:"
    echo "   vercel --prod"
else
    echo "❌ Build failed. Please fix errors above."
    exit 1
fi
