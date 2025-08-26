'use client'

import Link from 'next/link'
import { getFeaturedGames } from '@/lib/games'

export default function GameCards() {
  const featuredGames = getFeaturedGames().slice(0, 6)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'  
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Games
          </h2>
          <Link 
            href="/games"
            className="text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            View All Games →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                {/* Game Thumbnail */}
                <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src={game.thumbnail} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-4xl">🎮</div>';
                    }}
                  />
                </div>
                
                {/* Game Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors flex-1">
                      {game.title}
                    </h3>
                    {game.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full ml-2">
                        ★
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {game.shortDescription}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {game.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Category and Difficulty */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {game.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(game.difficulty)}`}>
                      {game.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/games"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <span>Explore All Games</span>
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}