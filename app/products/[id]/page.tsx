import { Header } from '../../components/Header'
import { ProductDetail } from '../../components/ProductDetail'

// This would normally fetch from API based on the ID
const getProduct = (id: string) => {
  const products = [
    {
      id: 1,
      name: 'Premium Red Rose Bouquet',
      price: 2500,
      originalPrice: 3000,
      images: [
        'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop&crop=center'
      ],
      category: 'Flowers',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: 'Beautiful premium red roses arranged in an elegant bouquet. Perfect for romantic occasions, anniversaries, or expressing deep love and affection.',
      specifications: {
        'Number of Roses': '12 stems',
        'Color': 'Deep Red',
        'Arrangement Style': 'Hand-tied bouquet',
        'Vase': 'Not included (available separately)',
        'Care Instructions': 'Included with delivery'
      },
      careInstructions: [
        'Trim stems at 45-degree angle under running water',
        'Change water daily and add flower food',
        'Keep in cool location away from direct sunlight',
        'Remove wilted petals to extend life'
      ]
    }
  ]
  
  return products.find(p => p.id === parseInt(id)) || products[0]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <ProductDetail product={product} />
    </main>
  )
}