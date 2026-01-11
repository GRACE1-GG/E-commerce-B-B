import { Header } from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'

const flowerProducts = [
  {
    id: 1,
    name: 'Premium Red Rose Bouquet',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop&crop=center',
    category: 'Flowers',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description: 'Beautiful red roses perfect for romantic occasions'
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
    inStock: true,
    description: 'Vibrant tropical flowers for special celebrations'
  },
  {
    id: 5,
    name: 'White Lily Bouquet',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
    category: 'Flowers',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    description: 'Elegant white lilies for sympathy and remembrance'
  }
]

export default function FlowersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Fresh Flowers</h1>
          <p className="text-gray-600">Beautiful, fresh flowers delivered to your doorstep in Homabay</p>
        </div>
        <ProductGrid products={flowerProducts} />
      </div>
    </main>
  )
}