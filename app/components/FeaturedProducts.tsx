'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Mock data - will be replaced with API calls
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Red Rose Bouquet',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop&crop=center',
    category: 'Flowers',
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    name: 'Gold Diamond Ring',
    price: 45000,
    originalPrice: 50000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center',
    category: 'Jewelry',
    rating: 4.9,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: 'Mixed Tropical Arrangement',
    price: 3500,
    originalPrice: 4000,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop&crop=center',
    category: 'Flowers',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: 'Pearl & Gold Necklace',
    price: 15000,
    originalPrice: 18000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
    category: 'Jewelry',
    rating: 4.6,
    reviews: 67,
    inStock: false
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items, carefully selected for their quality and beauty
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    SALE
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute top-2 left-2 bg-gray-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    OUT OF STOCK
                  </div>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 text-sm hover:text-primary-600 transition-colors">{product.name}</h3>
                  </Link>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary-600">
                      KSh {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        KSh {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <button 
                  className={`w-full py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}