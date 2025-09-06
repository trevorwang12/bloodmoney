import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Blood Money Game Site',
  description: 'Get in touch with us about Blood Money games and other gaming content.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you! Whether you have questions about our games, 
              feedback on the site, technical issues, or suggestions for improvement, 
              feel free to reach out.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-2 p-6 bg-gray-50 rounded-lg">
                <div className="text-red-500 text-3xl">📧</div>
                <h3 className="font-semibold text-gray-800">Email Support</h3>
                <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2 p-6 bg-gray-50 rounded-lg">
                <div className="text-red-500 text-3xl">💬</div>
                <h3 className="font-semibold text-gray-800">General Inquiries</h3>
                <p className="text-gray-600 text-sm">Questions about games, content, or features</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2 p-6 bg-gray-50 rounded-lg">
                <div className="text-red-500 text-3xl">🐛</div>
                <h3 className="font-semibold text-gray-800">Technical Issues</h3>
                <p className="text-gray-600 text-sm">Report bugs or technical problems</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2 p-6 bg-gray-50 rounded-lg">
                <div className="text-red-500 text-3xl">💡</div>
                <h3 className="font-semibold text-gray-800">Suggestions</h3>
                <p className="text-gray-600 text-sm">Ideas for new features or improvements</p>
              </div>
            </div>

            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ Content Advisory Note</h3>
              <p className="text-red-700 text-sm">
                Please be aware that our site focuses on mature gaming content. All communications 
                should be appropriate and respectful of the serious themes we explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}