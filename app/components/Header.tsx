'use client'

import { ShoppingCart, Search, User, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart as CartComponent } from './ShoppingCart'

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItemCount] = useState(1) // This would come from cart context

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B&S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Bloom & Sparkle</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/flowers" className="text-gray-700 hover:text-primary-600 transition-colors">
                Flowers
              </Link>
              <Link href="/jewelry" className="text-gray-700 hover:text-primary-600 transition-colors">
                Jewelry
              </Link>
              <Link href="/occasions" className="text-gray-700 hover:text-primary-600 transition-colors">
                Occasions
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-primary-600 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <Link href="/account" className="text-gray-700 hover:text-primary-600 transition-colors">
                <User className="w-6 h-6" />
              </Link>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-primary-600 transition-colors relative"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t">
          <div className="px-4 py-2 space-y-1">
            <Link href="/flowers" className="block py-2 text-gray-700 hover:text-primary-600">
              Flowers
            </Link>
            <Link href="/jewelry" className="block py-2 text-gray-700 hover:text-primary-600">
              Jewelry
            </Link>
            <Link href="/occasions" className="block py-2 text-gray-700 hover:text-primary-600">
              Occasions
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-600">
              Contact
            </Link>
          </div>
        </div>
      </header>

      <CartComponent isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}