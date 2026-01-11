'use client'

import { motion } from 'framer-motion'
import { Calendar, Gift, Truck, Star } from 'lucide-react'

const subscriptionPlans = [
  {
    name: 'Weekly Fresh',
    price: 1500,
    interval: 'per week',
    description: 'Fresh flowers delivered every week',
    features: [
      'Mixed seasonal bouquet',
      'Free delivery in Homabay Town',
      'Care instructions included',
      'Skip or pause anytime'
    ],
    popular: false
  },
  {
    name: 'Monthly Premium',
    price: 4500,
    interval: 'per month',
    description: 'Premium arrangements monthly',
    features: [
      'Large premium bouquet',
      'Free delivery county-wide',
      'Personalized card message',
      'Priority customer support',
      'Seasonal variety guarantee'
    ],
    popular: true
  },
  {
    name: 'Special Occasions',
    price: 2500,
    interval: 'per occasion',
    description: 'Never miss important dates',
    features: [
      'Automatic delivery on special dates',
      'Birthday, anniversary reminders',
      'Custom arrangement options',
      'Gift wrapping included'
    ],
    popular: false
  }
]

export function SubscriptionService() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flower Subscription Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Never run out of fresh flowers! Subscribe for regular deliveries and save money while keeping your space beautiful.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <Calendar className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Flexible Schedule</h3>
            <p className="text-sm text-gray-600">Choose your delivery frequency</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <Gift className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Surprise Varieties</h3>
            <p className="text-sm text-gray-600">Different flowers each delivery</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <Truck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Free Delivery</h3>
            <p className="text-sm text-gray-600">No extra delivery charges</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <Star className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
            <p className="text-sm text-gray-600">Hand-picked fresh flowers</p>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white rounded-lg shadow-lg p-6 relative ${
                plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    KSh {plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">{plan.interval}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="bg-primary-100 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Subscribe Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            All subscriptions can be paused, modified, or cancelled anytime. 
            <br />
            Contact us at +254 700 123 456 for custom subscription options.
          </p>
        </div>
      </div>
    </section>
  )
}