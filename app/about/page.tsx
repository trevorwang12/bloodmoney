import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Blood Money Game Site',
  description: 'Learn about our mission to provide engaging gaming experiences and explore thought-provoking narratives.',
}

export default function AboutPage() {
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
          About Us
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We are passionate about creating and curating gaming experiences that challenge conventional thinking 
              and explore complex themes. Our platform serves as a gateway to thought-provoking games that blend 
              entertainment with meaningful narrative exploration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">🎮 Game Curation</h3>
                <p className="text-gray-600">
                  We carefully select and present games that offer unique perspectives, moral complexities, 
                  and innovative gameplay mechanics that go beyond traditional entertainment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">📝 Content Creation</h3>
                <p className="text-gray-600">
                  Our team creates comprehensive guides, analyses, and contextual information to help 
                  players better understand and appreciate the deeper meanings in interactive narratives.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">🌟 Community Building</h3>
                <p className="text-gray-600">
                  We foster a community of gamers who appreciate artistic expression, moral complexity, 
                  and the potential of games as a medium for exploring difficult topics.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">🔍 Critical Analysis</h3>
                <p className="text-gray-600">
                  We provide thoughtful analysis and discussion around games that tackle mature themes, 
                  helping players engage more deeply with the content.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-800">Artistic Expression:</strong>
                  <span className="text-gray-600"> We believe games are a legitimate art form capable of conveying complex emotions and ideas.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-800">Responsible Presentation:</strong>
                  <span className="text-gray-600"> We provide appropriate context and warnings for mature content while respecting creative vision.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-800">Critical Thinking:</strong>
                  <span className="text-gray-600"> We encourage players to think critically about the games they play and the messages they contain.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-800">Community Respect:</strong>
                  <span className="text-gray-600"> We maintain a respectful environment for discussing challenging topics and diverse perspectives.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to providing a safe, informative, and engaging platform for exploring games 
              that push boundaries and challenge players intellectually and emotionally. We believe that 
              interactive media has the power to create meaningful experiences and foster important conversations 
              about morality, society, and human nature.
            </p>
          </section>

          <section className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-4">Content Advisory</h2>
            <p className="text-red-700">
              We specialize in games that explore mature themes and complex moral questions. All content 
              is presented with appropriate warnings and context. We encourage thoughtful engagement and 
              respectful discussion of the challenging topics these games address.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}