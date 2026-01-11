from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime

# User schemas
class UserBase(BaseModel):
    email: EmailStr
    username: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

# Product schemas
class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    compare_price: Optional[float] = None
    sku: Optional[str] = None
    stock_quantity: int = 0
    category_id: Optional[int] = None
    images: Optional[List[str]] = []
    specifications: Optional[Dict[str, Any]] = {}
    is_featured: bool = False

class ProductCreate(ProductBase):
    slug: str

class ProductResponse(ProductBase):
    id: int
    slug: str
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None
    
    class Config:
        from_attributes = True

# Category schemas
class CategoryBase(BaseModel):
    name: str
    description: Optional[str] = None
    image_url: Optional[str] = None

class CategoryResponse(CategoryBase):
    id: int
    slug: str
    
    class Config:
        from_attributes = True

# Order schemas
class OrderItemBase(BaseModel):
    product_id: int
    quantity: int
    customizations: Optional[Dict[str, Any]] = {}

class OrderCreate(BaseModel):
    items: List[OrderItemBase]
    shipping_address: Dict[str, Any]
    billing_address: Optional[Dict[str, Any]] = None
    delivery_date: Optional[datetime] = None
    special_instructions: Optional[str] = None

class OrderResponse(BaseModel):
    id: int
    order_number: str
    status: str
    total_amount: float
    created_at: datetime
    
    class Config:
        from_attributes = True