# Flower & Jewelry E-commerce Platform

A modern e-commerce platform built with Next.js, FastAPI, and PostgreSQL, specializing in flowers and jewelry.

## Features

- 🌸 **Flower Catalog** - Fresh flowers with delivery scheduling
- 💎 **Jewelry Collection** - Fine jewelry with customization options
- 🛒 **Shopping Cart** - Seamless shopping experience
- 👤 **User Authentication** - Secure login and registration
- 📦 **Order Management** - Track orders from purchase to delivery
- 💳 **Payment Processing** - Secure payments with Stripe
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Query** - Data fetching and caching

### Backend
- **FastAPI** - Python web framework
- **PostgreSQL** - Primary database
- **SQLAlchemy** - ORM
- **Redis** - Caching and sessions
- **JWT** - Authentication
- **Stripe** - Payment processing

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL
- Redis (optional, for caching)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flower-jewelry-ecommerce
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up Python backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

4. **Database setup**
   ```bash
   # Create PostgreSQL database
   createdb ecommerce_db
   
   # Copy environment file
   cp .env.example .env
   # Edit .env with your database credentials
   ```

5. **Run the applications**
   
   **Backend (Terminal 1):**
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── backend/               # FastAPI backend
│   ├── routers/           # API route handlers
│   ├── models.py          # Database models
│   ├── schemas.py         # Pydantic schemas
│   ├── database.py        # Database configuration
│   └── main.py            # FastAPI app
├── package.json           # Frontend dependencies
└── README.md             # This file
```

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/token` - User login
- `GET /api/products` - Get products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/orders` - Create order
- `GET /api/users/me` - Get current user

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.