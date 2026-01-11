'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Beautiful Flowers & 
              <span className="text-primary-600"> Elegant Jewelry</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our curated collection of fresh flowers and handcrafted jewelry 
              for life's most precious moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/flowers"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Shop Flowers
              </Link>
              <Link 
                href="/jewelry"
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors text-center"
              >
                Browse Jewelry
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">Fresh Roses</span>
                </div>
                <div className="bg-secondary-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-secondary-600 font-semibold">Gold Rings</span>
                </div>
                <div className="bg-secondary-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-secondary-600 font-semibold">Bouquets</span>
                </div>
                <div className="bg-primary-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">Necklaces</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}