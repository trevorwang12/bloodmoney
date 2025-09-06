import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Blood Money Game Site',
  description: 'Our privacy policy outlines how we collect, use, and protect your information when you visit our gaming platform.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <div className="text-sm text-gray-500 mb-8 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </div>

        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-gray-700 mb-3">1.1 Information You Provide</h3>
            <p className="mb-4 leading-relaxed">
              We may collect information you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Contact us through our contact form</li>
              <li>Subscribe to newsletters or updates</li>
              <li>Participate in surveys or feedback forms</li>
              <li>Report technical issues or provide suggestions</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-700 mb-3">1.2 Automatically Collected Information</h3>
            <p className="mb-4 leading-relaxed">
              When you visit our site, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our gaming platform</li>
              <li>To improve user experience and site functionality</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To analyze site usage and optimize performance</li>
              <li>To ensure site security and prevent abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Third-Party Services</h2>
            
            <h3 className="text-lg font-semibold text-gray-700 mb-3">3.1 Embedded Games</h3>
            <p className="mb-4 leading-relaxed">
              Our site includes games embedded from third-party sources (such as 2games.io). These embedded 
              games may collect their own data according to their respective privacy policies. We recommend 
              reviewing the privacy policies of these third-party services.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-3">3.2 Analytics</h3>
            <p className="mb-4 leading-relaxed">
              We may use analytics services to understand how visitors interact with our site. These services 
              may use cookies and similar technologies to collect and analyze information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies</h2>
            <p className="mb-4 leading-relaxed">
              We may use cookies and similar tracking technologies to enhance your browsing experience. You can 
              control cookie settings through your browser preferences.
            </p>
            <p className="leading-relaxed">
              Types of cookies we may use:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Essential cookies:</strong> Required for basic site functionality</li>
              <li><strong>Performance cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
            <p className="mb-4 leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our service is not intended for children under 18 years of age, especially given the mature 
              nature of the content we present. We do not knowingly collect personal information from 
              children under 18. If you believe a child has provided us with personal information, 
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our 
              <Link href="/contact" className="text-red-600 hover:text-red-800 underline"> Contact Us</Link> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}