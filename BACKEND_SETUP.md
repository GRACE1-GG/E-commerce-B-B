# Backend Setup Guide

## Prerequisites
1. **PostgreSQL Database**
   - Install PostgreSQL from https://www.postgresql.org/download/
   - Create a database named `ecommerce_db`
   - Note your username/password

## Step-by-Step Setup

### 1. Database Setup
```bash
# Connect to PostgreSQL (Windows)
psql -U postgres

# Create database
CREATE DATABASE ecommerce_db;

# Create user (optional)
CREATE USER ecommerce_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE ecommerce_db TO ecommerce_user;

# Exit PostgreSQL
\q
```

### 2. Environment Configuration
Edit `backend/.env` with your database credentials:
```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/ecommerce_db
SECRET_KEY=your-super-secret-jwt-key-change-this-in-production
REDIS_URL=redis://localhost:6379
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

### 3. Start Backend Server
```bash
cd backend
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 4. Verify Backend
- API Documentation: http://localhost:8000/docs
- Health Check: http://localhost:8000/

### 5. Database Migration (Optional)
```bash
cd backend
alembic init alembic
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head
```

## Troubleshooting
- **Database Connection Error**: Check PostgreSQL is running and credentials are correct
- **Import Errors**: Ensure all dependencies are installed with `pip install -r requirements.txt`
- **Port Issues**: Change port in uvicorn command if 8000 is occupied