'use client'

import { useState } from 'react'
import { X, Plus, Minus, Calendar, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  customization?: string
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Red Rose Bouquet',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=100&h=100&fit=crop&crop=center',
      quantity: 1,
      customization: 'With love card'
    }
  ])

  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryTime, setDeliveryTime] = useState('')
  const [deliveryArea, setDeliveryArea] = useState('')
  const [specialInstructions, setSpecialInstructions] = useState('')

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = deliveryArea === 'homabay-town' ? 0 : deliveryArea === 'homabay-county' ? 200 : 500
  const total = subtotal + deliveryFee

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      {item.customization && (
                        <p className="text-xs text-gray-500">{item.customization}</p>
                      )}
                      <p className="text-primary-600 font-semibold">
                        KSh {item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Delivery Options */}
                <div className="border-t pt-4 space-y-4">
                  <h3 className="font-semibold text-gray-900">Delivery Details</h3>
                  
                  {/* Delivery Area */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Delivery Area
                    </label>
                    <select
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm"
                    >
                      <option value="">Select delivery area</option>
                      <option value="homabay-town">Homabay Town (Free)</option>
                      <option value="homabay-county">Homabay County (+KSh 200)</option>
                      <option value="outside-county">Outside County (+KSh 500)</option>
                    </select>
                  </div>

                  {/* Delivery Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm"
                    />
                  </div>

                  {/* Delivery Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Preferred Time
                    </label>
                    <select
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 6PM)</option>
                    </select>
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Instructions
                    </label>
                    <textarea
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="Card message, delivery instructions, etc."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 space-y-3">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>KSh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span>KSh {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-base border-t pt-1">
                  <span>Total:</span>
                  <span>KSh {total.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}