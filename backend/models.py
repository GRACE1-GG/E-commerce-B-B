from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, Text, ForeignKey, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    phone = Column(String)
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    orders = relationship("Order", back_populates="user")
    addresses = relationship("Address", back_populates="user")

class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True)
    description = Column(Text)
    image_url = Column(String)
    parent_id = Column(Integer, ForeignKey("categories.id"))
    
    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = "products"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True)
    description = Column(Text)
    price = Column(Float, nullable=False)
    compare_price = Column(Float)  # Original price for discounts
    sku = Column(String, unique=True)
    stock_quantity = Column(Integer, default=0)
    category_id = Column(Integer, ForeignKey("categories.id"))
    images = Column(JSON)  # Array of image URLs
    specifications = Column(JSON)  # Flexible product specs
    is_active = Column(Boolean, default=True)
    is_featured = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    category = relationship("Category", back_populates="products")
    order_items = relationship("OrderItem", back_populates="product")

class Address(Base):
    __tablename__ = "addresses"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    type = Column(String)  # billing, shipping
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    company = Column(String)
    address_line_1 = Column(String, nullable=False)
    address_line_2 = Column(String)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    postal_code = Column(String, nullable=False)
    country = Column(String, nullable=False)
    phone = Column(String)
    is_default = Column(Boolean, default=False)
    
    user = relationship("User", back_populates="addresses")

class Order(Base):
    __tablename__ = "orders"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    order_number = Column(String, unique=True, nullable=False)
    status = Column(String, default="pending")  # pending, confirmed, shipped, delivered, cancelled
    total_amount = Column(Float, nullable=False)
    shipping_cost = Column(Float, default=0)
    tax_amount = Column(Float, default=0)
    payment_status = Column(String, default="pending")
    payment_method = Column(String)
    shipping_address = Column(JSON)
    billing_address = Column(JSON)
    delivery_date = Column(DateTime)  # For scheduled flower deliveries
    special_instructions = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    user = relationship("User", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")

class OrderItem(Base):
    __tablename__ = "order_items"
    
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)  # Price at time of order
    customizations = Column(JSON)  # Engraving, size, etc.
    
    order = relationship("Order", back_populates="items")
    product = relationship("Product", back_populates="order_items")