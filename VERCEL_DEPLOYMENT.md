# Vercel Deployment - Quick Start

## 🎯 Step-by-Step Deployment

### Prerequisites
- [ ] GitHub account
- [ ] Vercel account (free at https://vercel.com)
- [ ] Backend deployed (Railway, Render, or Heroku)

---

## **Step 1: Prepare Your Code**

### 1a. Test Build Locally
```bash
npm run build
npm run start
```
Visit `http://localhost:3000` to verify it works.

### 1b. Commit Your Code
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

---

## **Step 2: Deploy Backend (If Not Done)**

### Option A: Railway (Recommended)
1. Go to https://railway.app
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your E-commerce repo
5. Select the `/backend` directory
6. In Variables tab, add:
   ```
   DATABASE_URL=postgresql://user:password@host:5432/ecommerce_db
   SECRET_KEY=your-super-secret-key-here
   STRIPE_SECRET_KEY=sk_test_xxxxx
   ```
7. Deploy
8. **Copy the URL** (e.g., `https://ecommerce-api.railway.app`)

### Option B: Render
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repo
4. Select `/backend` directory
5. Build: `pip install -r requirements.txt`
6. Start: `uvicorn main:app --host 0.0.0.0 --port 8000`
7. Add environment variables (same as above)
8. Deploy
9. **Copy the URL** (e.g., `https://ecommerce-api.onrender.com`)

---

## **Step 3: Deploy Frontend to Vercel**

### Option A: Using Vercel Dashboard (Easiest)
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel auto-detects Next.js (skip configuration)
4. Click "Environment Variables"
5. Add:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://your-backend-url.com` (from Step 2)
6. Click "Deploy"
7. Wait 2-5 minutes for deployment
8. You'll get a URL like: `https://your-app-name.vercel.app` ✅

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

When prompted, add the environment variable:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

---

## **Step 4: Verify Deployment**

1. Visit your Vercel URL (e.g., `https://your-app-name.vercel.app`)
2. Try navigating to `/auth/login`
3. Test if API calls work (sign up/login should call your backend)

### If Login Doesn't Work:
- Check Vercel environment variable is set correctly
- Verify backend CORS allows your Vercel domain
- Check backend is running and accessible

### Update Backend CORS (if needed)
In `backend/main.py`:
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Dev
        "https://your-app-name.vercel.app",  # Your Vercel URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Then redeploy your backend.

---

## **Step 5: Custom Domain (Optional)**

In Vercel Dashboard:
1. Go to your project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

---

## **Deployment Checklist**

- [ ] Code committed and pushed to GitHub
- [ ] Backend deployed and URL copied
- [ ] Frontend deployed to Vercel
- [ ] Environment variable `NEXT_PUBLIC_API_URL` set in Vercel
- [ ] Login page works
- [ ] API calls function correctly
- [ ] Images load properly

---

## **Common Issues & Solutions**

| Issue | Solution |
|-------|----------|
| 404 on `/auth/login` | Already fixed in latest code |
| API calls return 404 | Check `NEXT_PUBLIC_API_URL` in Vercel env |
| CORS errors | Update backend CORS config |
| Database connection fails | Verify DATABASE_URL in backend |
| Build fails | Run `npm run build` locally to debug |

---

## **What You Get**

- ✅ **Frontend URL**: `https://your-app.vercel.app`
- ✅ **Backend URL**: `https://your-api.railway.app` (or similar)
- ✅ **Auto-deploys** on every GitHub push
- ✅ **Free SSL/HTTPS** (Vercel includes it)
- ✅ **Performance**: CDN-backed global delivery

---

## **Next: Custom Domain Setup**

Once verified, add your custom domain:
1. Buy domain from GoDaddy, Namecheap, etc.
2. Vercel → Settings → Domains
3. Add domain and follow DNS setup

Your Vercel deployment is production-ready! 🎉
