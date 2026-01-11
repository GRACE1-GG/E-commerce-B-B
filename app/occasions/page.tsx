import { Header } from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'

const occasionProducts = [
  {
    id: 7,
    name: 'Valentine\'s Day Special',
    price: 4500,
    originalPrice: 5000,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop&crop=center',
    category: 'Valentine',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    description: 'Red roses with chocolate and love card'
  },
  {
    id: 8,
    name: 'Mother\'s Day Bouquet',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop&crop=center',
    category: 'Mother\'s Day',
    rating: 4.8,
    reviews: 189,
    inStock: true,
    description: 'Mixed flowers perfect for celebrating mom'
  },
  {
    id: 9,
    name: 'Wedding Package',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop&crop=center',
    category: 'Wedding',
    rating: 4.9,
    reviews: 67,
    inStock: true,
    description: 'Complete wedding flower arrangement package'
  },
  {
    id: 10,
    name: 'Sympathy Arrangement',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
    category: 'Sympathy',
    rating: 4.7,
    reviews: 45,
    inStock: true,
    description: 'Peaceful white flowers for remembrance'
  }
]

export default function OccasionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Special Occasions</h1>
          <p className="text-gray-600">Perfect arrangements for life's most important moments</p>
        </div>
        
        {/* Occasion Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-primary-600">Valentine's Day</h3>
            <p className="text-sm text-gray-500">Express your love</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-primary-600">Mother's Day</h3>
            <p className="text-sm text-gray-500">Honor mom</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-primary-600">Weddings</h3>
            <p className="text-sm text-gray-500">Your special day</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-primary-600">Sympathy</h3>
            <p className="text-sm text-gray-500">Show you care</p>
          </div>
        </div>

        <ProductGrid products={occasionProducts} />
      </div>
    </main>
  )
}