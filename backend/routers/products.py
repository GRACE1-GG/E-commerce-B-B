from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from database import get_db
from models import Product, Category
from schemas import ProductResponse, ProductCreate

router = APIRouter()

@router.get("/", response_model=List[ProductResponse])
async def get_products(
    skip: int = 0,
    limit: int = 20,
    category: Optional[str] = None,
    search: Optional[str] = None,
    featured: Optional[bool] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Product).filter(Product.is_active == True)
    
    if category:
        query = query.join(Category).filter(Category.slug == category)
    
    if search:
        query = query.filter(Product.name.ilike(f"%{search}%"))
    
    if featured is not None:
        query = query.filter(Product.is_featured == featured)
    
    products = query.offset(skip).limit(limit).all()
    return products

@router.get("/{product_id}", response_model=ProductResponse)
async def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id, Product.is_active == True).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.get("/slug/{slug}", response_model=ProductResponse)
async def get_product_by_slug(slug: str, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.slug == slug, Product.is_active == True).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product