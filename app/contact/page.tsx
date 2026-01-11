import { Header } from '../components/Header'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">Visit our store in Homabay or get in touch with us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Store Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Bloom & Sparkle Store<br />
                    Homabay Town Center<br />
                    Opposite Homabay County Hospital<br />
                    Homabay, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+254 700 123 456</p>
                  <p className="text-gray-600">+254 720 987 654</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@bloomsparkle.co.ke</p>
                  <p className="text-gray-600">orders@bloomsparkle.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                  <div className="text-gray-600">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 8:00 PM</p>
                    <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                    <p className="text-sm text-primary-600 mt-1">
                      *Extended hours during Valentine's Day and Mother's Day
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Directions</h3>
                  <p className="text-gray-600">
                    Located in the heart of Homabay town, easily accessible by matatu or private vehicle. 
                    Free parking available behind the building.
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Areas */}
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Delivery Areas</h3>
              <p className="text-primary-800 text-sm">
                We deliver within Homabay County including: Homabay Town, Rachuonyo, 
                Ndhiwa, Suba North, and Suba South. Same-day delivery available for orders placed before 2:00 PM.
              </p>
            </div>
          </div>

          {/* Map and Contact Form */}
          <div className="space-y-6">
            {/* Embedded Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7234567890123!2d34.4567890!3d-0.5234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHomabay%20Town!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}