import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Blood Money Game Site',
  description: 'Terms of Service for using the Blood Money game site and accessing embedded gaming content.',
}

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>

        <div className="text-sm text-gray-500 mb-8 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </div>

        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this Blood Money game site ("the Site"), you accept and agree to be bound 
              by the terms and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="mb-4 leading-relaxed">
              Our Site provides access to embedded games and related content, specifically focusing on games 
              with mature themes and complex narratives. The service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to embedded third-party games</li>
              <li>Game information, guides, and analysis</li>
              <li>Educational content about interactive narratives</li>
              <li>Community features and discussion opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Age Restrictions and Mature Content</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
              <p className="text-red-700 font-semibold mb-2">⚠️ Important Age Restriction</p>
              <p className="text-red-700">
                This Site contains mature content including themes of violence, moral complexity, and 
                psychological elements. You must be at least 18 years old to use this service.
              </p>
            </div>
            <p className="leading-relaxed">
              By using this Site, you represent and warrant that you are at least 18 years old and have 
              the legal capacity to enter into this agreement. Parents and guardians are responsible for 
              monitoring their children's internet usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Responsibilities</h2>
            <p className="mb-4 leading-relaxed">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Site only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to any part of the Site</li>
              <li>Not transmit any harmful, offensive, or inappropriate content</li>
              <li>Respect intellectual property rights of content creators</li>
              <li>Engage respectfully with community features</li>
              <li>Report any technical issues or inappropriate content promptly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Content</h2>
            <p className="mb-4 leading-relaxed">
              Our Site includes embedded games and content from third-party sources. We do not own, control, 
              or endorse this third-party content. Third-party content is subject to the terms and conditions 
              of those third parties.
            </p>
            <p className="leading-relaxed">
              We are not responsible for the availability, accuracy, or content of third-party sites or services. 
              Your use of third-party content is at your own risk and subject to their respective terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p className="mb-4 leading-relaxed">
              The design, layout, and original content of this Site are protected by copyright and other 
              intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, modify, or distribute our original content without permission</li>
              <li>Use our trademarks or logos without authorization</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Create derivative works based on our content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              THE SITE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, 
              WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
              OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Content Guidelines</h2>
            <p className="mb-4 leading-relaxed">
              Given the mature nature of our content, we maintain strict guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content is clearly labeled with appropriate warnings</li>
              <li>We provide context and educational information about mature themes</li>
              <li>We encourage thoughtful, respectful discussion</li>
              <li>We do not promote harmful or illegal activities</li>
              <li>We reserve the right to remove inappropriate user-generated content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Privacy</h2>
            <p className="leading-relaxed">
              Your privacy is important to us. Please review our 
              <Link href="/privacy" className="text-red-600 hover:text-red-800 underline"> Privacy Policy</Link>, 
              which also governs your use of the Site, to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be posted on this page 
              with an updated revision date. Your continued use of the Site after any changes indicates 
              your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Termination</h2>
            <p className="leading-relaxed">
              We may terminate or suspend access to our Site immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our 
              <Link href="/contact" className="text-red-600 hover:text-red-800 underline"> Contact Us</Link> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}