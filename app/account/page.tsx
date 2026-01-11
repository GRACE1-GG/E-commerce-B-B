import { Header } from '../components/Header'
import { UserAccount } from '../components/UserAccount'

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <UserAccount />
    </main>
  )
}