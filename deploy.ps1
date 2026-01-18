Write-Host "🚀 Vercel Deployment Setup for Flower & Jewelry E-commerce" -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-Not (Test-Path ".git")) {
    Write-Host "❌ Git repository not found" -ForegroundColor Red
    Write-Host "📝 Please run: git init && git add . && git commit -m 'Initial commit'" -ForegroundColor Yellow
    exit 1
}

# Check if node_modules exists
if (-Not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
    npm install
}

# Build test
Write-Host ""
Write-Host "🔨 Testing build process..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Deployment Checklist:" -ForegroundColor Cyan
    Write-Host "  ✓ Next.js project ready"
    Write-Host "  □ Code pushed to GitHub"
    Write-Host "  □ Backend deployed to Railway/Render"
    Write-Host "  □ Backend URL noted"
    Write-Host ""
    Write-Host "📌 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Push your code to GitHub:" -ForegroundColor Yellow
    Write-Host "   git push origin main"
    Write-Host ""
    Write-Host "2. Deploy backend (if not done):" -ForegroundColor Yellow
    Write-Host "   Go to https://railway.app or https://render.com"
    Write-Host "   Import your GitHub repo's /backend folder"
    Write-Host "   Note the deployed URL (e.g., https://your-api.railway.app)"
    Write-Host ""
    Write-Host "3. Deploy to Vercel:" -ForegroundColor Yellow
    Write-Host "   Option A: Go to https://vercel.com/new and import your repo"
    Write-Host "   Option B: Run: npm install -g vercel && vercel --prod"
    Write-Host ""
    Write-Host "4. In Vercel dashboard, add environment variable:" -ForegroundColor Yellow
    Write-Host "   NEXT_PUBLIC_API_URL=https://your-backend-url.com"
    Write-Host ""
    Write-Host "5. Redeploy after adding environment variable:" -ForegroundColor Yellow
    Write-Host "   vercel --prod"
} else {
    Write-Host "❌ Build failed. Please fix errors above." -ForegroundColor Red
    exit 1
}
