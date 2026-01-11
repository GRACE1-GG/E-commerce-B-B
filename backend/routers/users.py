from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import User
from schemas import UserResponse

router = APIRouter()

@router.get("/me", response_model=UserResponse)
async def get_current_user(db: Session = Depends(get_db)):
    # This would normally use JWT token validation
    # For now, returning a placeholder
    return {"id": 1, "email": "user@example.com", "username": "user"}