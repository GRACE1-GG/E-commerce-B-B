'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    name: 'Fresh Flowers',
    description: 'Beautiful blooms for every occasion',
    href: '/flowers',
    color: 'bg-primary-500'
  },
  {
    name: 'Fine Jewelry',
    description: 'Handcrafted pieces that last forever',
    href: '/jewelry',
    color: 'bg-secondary-500'
  },
  {
    name: 'Wedding Collection',
    description: 'Perfect for your special day',
    href: '/wedding',
    color: 'bg-purple-500'
  },
  {
    name: 'Gift Sets',
    description: 'Curated combinations for gifting',
    href: '/gifts',
    color: 'bg-pink-500'
  }
]

export function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed to make every moment special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href} className="group block">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`${category.color} h-48 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}