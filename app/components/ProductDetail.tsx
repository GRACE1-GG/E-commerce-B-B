'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Star, Minus, Plus, Truck, Shield, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  rating: number
  reviews: number
  inStock: boolean
  description: string
  specifications: Record<string, string>
  careInstructions: string[]
}

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [customMessage, setCustomMessage] = useState('')
  const [selectedTab, setSelectedTab] = useState('description')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-sm text-primary-600 font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary-600">
              KSh {product.price.toLocaleString()}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  KSh {product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                  Save KSh {(product.originalPrice - product.price).toLocaleString()}
                </span>
              </>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Custom Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1" />
                Add a personal message (optional)
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Write a special message for the recipient..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                disabled={!product.inStock}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                  product.inStock
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary-600" />
              <span className="font-medium">Delivery Information</span>
            </div>
            <p className="text-sm text-gray-600">
              • Same-day delivery available for orders before 2:00 PM
            </p>
            <p className="text-sm text-gray-600">
              • Free delivery within Homabay Town
            </p>
            <p className="text-sm text-gray-600">
              • KSh 200 delivery fee for Homabay County
            </p>
          </div>

          {/* Guarantee */}
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-primary-600" />
              <span className="font-medium text-primary-900">Our Guarantee</span>
            </div>
            <p className="text-sm text-primary-800">
              7-day freshness guarantee. If you're not satisfied, we'll replace or refund your order.
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {['description', 'specifications', 'care', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  selectedTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'care' ? 'Care Instructions' : tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-6">
          {selectedTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}

          {selectedTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'care' && (
            <div className="space-y-3">
              {product.careInstructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary-100 rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{instruction}</p>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div className="text-center py-8">
              <p className="text-gray-500">Customer reviews will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}