'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    name: 'Sarah Otieno',
    location: 'Homabay Town',
    rating: 5,
    comment: 'Amazing service! The roses were fresh and beautiful. Delivered exactly on time for my anniversary.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'John Ochieng',
    location: 'Rachuonyo',
    rating: 5,
    comment: 'Bought a gold necklace for my wife. Quality is excellent and the price was fair. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Grace Akinyi',
    location: 'Ndhiwa',
    rating: 5,
    comment: 'Perfect wedding flowers! The team understood exactly what I wanted. Everything was beautiful.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    date: '3 weeks ago'
  }
]

export function CustomerReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Homabay County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
              
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">{review.date}</span>
              </div>

              <p className="text-gray-700 italic">"{review.comment}"</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🌸</span>
            </div>
            <h3 className="font-semibold text-gray-900">Fresh Guarantee</h3>
            <p className="text-sm text-gray-600">7-day freshness promise</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="font-semibold text-gray-900">Same Day Delivery</h3>
            <p className="text-sm text-gray-600">Orders before 2PM</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="font-semibold text-gray-900">Certified Jewelry</h3>
            <p className="text-sm text-gray-600">Authentic materials</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="font-semibold text-gray-900">5+ Years</h3>
            <p className="text-sm text-gray-600">Serving Homabay</p>
          </div>
        </div>
      </div>
    </section>
  )
}