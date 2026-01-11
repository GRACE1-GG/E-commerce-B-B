'use client'

import { motion } from 'framer-motion'
import { Droplets, Scissors, Sun, Thermometer } from 'lucide-react'

const careInstructions = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: 'Trim the Stems',
    description: 'Cut stems at a 45-degree angle under running water to improve water absorption.'
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Fresh Water Daily',
    description: 'Change water every day and add flower food to extend the life of your blooms.'
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Avoid Direct Sunlight',
    description: 'Place flowers in a cool spot away from direct sunlight and heat sources.'
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: 'Cool Temperature',
    description: 'Keep flowers in temperatures between 18-22°C for optimal longevity.'
  }
]

export function FlowerCareGuide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flower Care Instructions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to keep your flowers fresh and beautiful for longer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careInstructions.map((instruction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-600">
                {instruction.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{instruction.title}</h3>
              <p className="text-gray-600 text-sm">{instruction.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Care Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">For Roses:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Remove thorns carefully to avoid stem damage</li>
                <li>• Mist petals lightly with water spray</li>
                <li>• Remove wilted outer petals to reveal fresh ones</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">For Mixed Bouquets:</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Separate flowers by type if some wilt faster</li>
                <li>• Use flower food provided with your arrangement</li>
                <li>• Trim stems every 2-3 days for best results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}