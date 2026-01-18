# Vercel Deployment Guide

## Step 1: Prerequisites
- [ ] GitHub account (with your code pushed)
- [ ] Vercel account (sign up at https://vercel.com)
- [ ] Deployed backend API (Flask/FastAPI)

## Step 2: Deploy Backend First
Your Python backend needs to be deployed to a service like:
- **Railway**: https://railway.app (recommended)
- **Render**: https://render.com
- **Heroku**: https://heroku.com

### Backend Deployment (Example with Railway):
1. Push your `/backend` folder to GitHub
2. Connect to Railway
3. Deploy with environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `SECRET_KEY`: Your JWT secret key
   - `STRIPE_SECRET_KEY`: Your Stripe key

**Note the deployed backend URL** (e.g., `https://your-api.railway.app`)

## Step 3: Deploy Frontend to Vercel

### Option A: Using GitHub (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Vercel will auto-detect Next.js
5. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your deployed backend URL (e.g., `https://your-api.railway.app`)
6. Click "Deploy"

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

## Step 4: Configure Environment Variables on Vercel
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-domain.com
   ```

## Step 5: Update CORS in Backend
Update your FastAPI backend to allow your Vercel domain:

```python
# In backend/main.py
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://your-app.vercel.app",  # Your Vercel URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Step 6: Troubleshooting

### 404 Errors on `/auth/login`
- Already fixed in the latest code

### API Calls Fail
- Check that `NEXT_PUBLIC_API_URL` is set correctly
- Verify CORS is configured in your backend
- Check backend is deployed and running

### Images Not Loading
- All external images are from Unsplash (should work automatically)

## Step 7: Custom Domain (Optional)
1. Go to Vercel project Settings
2. Domains → Add Domain
3. Follow domain configuration steps

## Useful Commands
```bash
# Test build locally before deploying
npm run build
npm run start

# Check for build errors
npm run lint
```

## Backend Deployment Quick Start (Railway)

```bash
# 1. Create requirements.txt in backend folder
pip freeze > backend/requirements.txt

# 2. Create .env file with:
DATABASE_URL=postgresql://user:password@host:port/db
SECRET_KEY=your-secret-key
STRIPE_SECRET_KEY=your-key

# 3. Push to GitHub
git add .
git commit -m "Deployment ready"
git push

# 4. In Railway dashboard, create new project from repo
# 5. Add PostgreSQL plugin
# 6. Deploy
```

---
**Your Frontend URL**: Will be shown after deployment (e.g., `https://your-app-name.vercel.app`)
**Your Backend URL**: Depends on where you deploy it

Once both are deployed, test the application:
- Visit your Vercel URL
- Try logging in with `/auth/login`
- Check API calls work correctly
