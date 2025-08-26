'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamic imports for better code splitting
const GameFrame = dynamic(() => import('@/components/GameFrame'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: false
})

const GameInfo = dynamic(() => import('@/components/GameInfo'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
})

const GameFeatures = dynamic(() => import('@/components/GameFeatures'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
})

const GameInstructions = dynamic(() => import('@/components/GameInstructions'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
})

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
})

const GameCards = dynamic(() => import('@/components/GameCards'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
})

export default function Home() {
  const [isGameLoaded, setIsGameLoaded] = useState(false)

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoGame",
        "name": "Blood Money",
        "description": "Blood Money is a dark clicker game where players face moral dilemmas while clicking to earn money and save Harvey Harvington's life. Features multiple endings and psychological gameplay.",
        "genre": ["Clicker Game", "Incremental Game", "Psychological Game"],
        "playMode": "SinglePlayer",
        "applicationCategory": "Game",
        "operatingSystem": "Any",
        "url": "https://bloodmoney-game.vercel.app/games/blood-money",
        "gameItem": {
          "@type": "Thing",
          "name": "Virtual Currency",
          "description": "Money earned by clicking"
        },
        "characterAttribute": [
          {
            "@type": "Thing",
            "name": "Harvey Harvington",
            "description": "Character who needs $25,000 for surgery"
          }
        ],
        "numberOfPlayers": "1",
        "gamePlatform": "Web Browser",
        "contentRating": "Mature themes",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "name": "Blood Money Game",
        "alternateName": "Blood Money",
        "url": "https://bloodmoney-game.vercel.app",
        "description": "Play Blood Money online free - the ultimate dark clicker game with moral choices, multiple endings, and psychological gameplay.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://bloodmoney-game.vercel.app/games?search={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "sameAs": [
          "https://2games.io/game/bloodmoney/"
        ]
      },
      {
        "@type": "Organization",
        "name": "Blood Money Game Studio",
        "url": "https://bloodmoney-game.vercel.app",
        "description": "Creators of Blood Money and other thought-provoking games"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bloodmoney-game.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blood Money Game",
            "item": "https://bloodmoney-game.vercel.app/games/blood-money"
          }
        ]
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-6xl">
        {/* Header with Game Section Combined */}
        <section className="mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent px-2">
              Blood Money
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 font-medium px-2">
              Click for Cash, Bleed for Fortune
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed px-2">
              Experience the ultimate dark clicker game! Make moral choices, click for cash, and save Harvey's life. 
              <strong>Multiple endings</strong> await your decisions.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6 px-2 max-w-2xl mx-auto">
              🩸 <strong>Play instantly</strong> - No download • Browser-based • Free to play
            </p>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-100 border border-red-200 rounded-lg mb-6 mx-2">
              <span className="text-red-700 font-semibold text-sm sm:text-base">⚠️ Mature Content - Psychological Themes</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="text-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Start Playing Now
              </h3>
            </div>
            <GameFrame 
              gameUrl="https://2games.io/game/bloodmoney/"
              onLoad={() => setIsGameLoaded(true)}
              showLoading={!isGameLoaded}
            />
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Why Blood Money is the Best Dark Clicker Game Online
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">🎯 Unique Gameplay Experience</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Blood Money</strong> isn't just another clicker game. It's a psychological journey that challenges 
                  your moral compass while delivering addictive incremental gameplay. Every click brings you closer to 
                  saving Harvey's life, but at what personal cost?
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ <strong>Multiple Endings</strong> - Your choices matter</li>
                  <li>✓ <strong>Dark Humor</strong> - Thought-provoking narrative</li>
                  <li>✓ <strong>Quick Sessions</strong> - 30 minutes of intense gameplay</li>
                  <li>✓ <strong>Free to Play</strong> - No downloads or registrations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">🧠 Psychological Depth</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  What sets <strong>Blood Money</strong> apart from other online games is its exploration of moral complexity. 
                  This isn't mindless clicking - it's a game that makes you question your decisions and face the 
                  consequences of your choices.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ <strong>Moral Dilemmas</strong> - Test your ethical boundaries</li>
                  <li>✓ <strong>Character Development</strong> - Watch Harvey's story unfold</li>
                  <li>✓ <strong>Replay Value</strong> - Different paths lead to different outcomes</li>
                  <li>✓ <strong>Social Commentary</strong> - More than just entertainment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Game Info */}
        <GameInfo />

        {/* Features */}
        <GameFeatures />

        {/* Instructions */}
        <GameInstructions />

        {/* Featured Games */}
        <GameCards />

        {/* FAQ */}
        <FAQ />

        {/* SEO Footer Content */}
        <section className="mb-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              About Blood Money - The Dark Clicker Game Revolution
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="leading-relaxed mb-4">
                <strong>Blood Money</strong> has redefined what browser-based clicker games can achieve. Since its release, 
                this innovative title has attracted players worldwide who seek more than simple incremental mechanics. 
                The game combines the addictive nature of clicker gameplay with deep psychological storytelling, 
                creating an experience that's both entertaining and thought-provoking.
              </p>
              <p className="leading-relaxed mb-4">
                Set in a world where Harvey Harvington desperately needs $25,000 for life-saving surgery, 
                <strong>Blood Money</strong> puts you in an impossible position. The game's unique mechanics force 
                players to confront difficult questions about sacrifice, morality, and the value of human life. 
                With its distinctive pastel art style contrasting against dark themes, the game creates a visual 
                and emotional dissonance that enhances its psychological impact.
              </p>
              <p className="leading-relaxed">
                Whether you're new to clicker games or a veteran of the genre, <strong>Blood Money</strong> offers 
                an experience unlike any other. Play now and discover why critics and players alike consider it 
                one of the most innovative browser games ever created. Remember: every click counts, but so do the consequences.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 sm:py-8 text-gray-500">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-4 text-sm px-4">
            <Link href="/about" className="hover:text-red-600 transition-colors py-1">About Us</Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-red-600 transition-colors py-1">Privacy Policy</Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="/terms" className="hover:text-red-600 transition-colors py-1">Terms of Service</Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link href="/contact" className="hover:text-red-600 transition-colors py-1">Contact Us</Link>
          </div>
          <p className="text-sm sm:text-base px-4">© 2025 Blood Money Game Site. All rights reserved.</p>
          <p className="mt-2 text-xs sm:text-sm px-4">
            This is a fan-made site. Original game content belongs to its respective creators.
          </p>
        </footer>
      </div>
    </>
  )
}