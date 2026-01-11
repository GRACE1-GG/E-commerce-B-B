import { Header } from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'

const jewelryProducts = [
  {
    id: 2,
    name: 'Gold Diamond Ring',
    price: 45000,
    originalPrice: 50000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center',
    category: 'Jewelry',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    description: 'Elegant gold ring with premium diamond'
  },
  {
    id: 4,
    name: 'Pearl & Gold Necklace',
    price: 15000,
    originalPrice: 18000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
    category: 'Jewelry',
    rating: 4.6,
    reviews: 67,
    inStock: false,
    description: 'Classic pearl necklace with gold accents'
  },
  {
    id: 6,
    name: 'Silver Earrings Set',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center',
    category: 'Jewelry',
    rating: 4.5,
    reviews: 45,
    inStock: true,
    description: 'Handcrafted silver earrings with intricate design'
  }
]

export default function JewelryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Fine Jewelry</h1>
          <p className="text-gray-600">Handcrafted jewelry pieces that last a lifetime</p>
        </div>
        <ProductGrid products={jewelryProducts} />
      </div>
    </main>
  )
}