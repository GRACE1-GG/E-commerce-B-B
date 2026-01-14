import { Header } from '../../components/Header'
import { ProductDetail } from '../../components/ProductDetail'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

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
      description: 'Beautiful premium red roses arranged in an elegant bouquet...',
      specifications: {
        'Number of Roses': '12 stems',
        'Color': 'Deep Red'
      },
      careInstructions: ['Trim stems', 'Change water daily']
    }
  ]

  return products.find(p => p.id === parseInt(id)) || products[0]
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProduct(id)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <ProductDetail product={product} />
    </main>
  )
}