import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Categories } from './components/Categories'
import { CustomerReviews } from './components/CustomerReviews'
import { FlowerCareGuide } from './components/FlowerCareGuide'
import { SubscriptionService } from './components/SubscriptionService'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CustomerReviews />
      <FlowerCareGuide />
      <SubscriptionService />
    </main>
  )
}