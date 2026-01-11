from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Order, OrderItem, Product
from schemas import OrderCreate, OrderResponse
import uuid

router = APIRouter()

@router.post("/", response_model=OrderResponse)
async def create_order(order: OrderCreate, db: Session = Depends(get_db)):
    # Calculate total
    total_amount = 0
    order_items = []
    
    for item in order.items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        if not product:
            raise HTTPException(status_code=404, detail=f"Product {item.product_id} not found")
        
        if product.stock_quantity < item.quantity:
            raise HTTPException(status_code=400, detail=f"Insufficient stock for {product.name}")
        
        item_total = product.price * item.quantity
        total_amount += item_total
        
        order_items.append({
            "product_id": item.product_id,
            "quantity": item.quantity,
            "price": product.price,
            "customizations": item.customizations
        })
    
    # Create order
    db_order = Order(
        order_number=str(uuid.uuid4())[:8].upper(),
        total_amount=total_amount,
        shipping_address=order.shipping_address,
        billing_address=order.billing_address or order.shipping_address,
        delivery_date=order.delivery_date,
        special_instructions=order.special_instructions
    )
    
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    
    # Create order items
    for item_data in order_items:
        db_item = OrderItem(order_id=db_order.id, **item_data)
        db.add(db_item)
    
    db.commit()
    return db_order