'use client'

import { useState } from 'react'
import Link from 'next/link'
import { games, gameCategories, getGamesByCategory } from '@/lib/games'

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Games')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGames = getGamesByCategory(selectedCategory).filter(game => {
    const search = searchTerm.toLowerCase().trim()
    if (!search) return true
    
    return game.title.toLowerCase().includes(search) ||
           game.description.toLowerCase().includes(search) ||
           game.shortDescription.toLowerCase().includes(search) ||
           game.category.toLowerCase().includes(search) ||
           game.tags.some(tag => tag.toLowerCase().includes(search))
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Game Collection
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover amazing games ranging from dark themes to classic puzzles
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {gameCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div key={game.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* Game Thumbnail */}
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src={game.thumbnail} 
                alt={game.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="text-6xl">🎮</div>';
                }}
              />
            </div>
            
            {/* Game Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 flex-1">
                  {game.title}
                </h3>
                {game.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full ml-2">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {game.shortDescription}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {game.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Difficulty and Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">
                  {game.category}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </span>
              </div>
              
              {/* Play Button */}
              <Link
                href={`/games/${game.id}`}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center block"
              >
                Play Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Games Found</h3>
          <p className="text-gray-600">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Collection Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-red-600">{games.length}</div>
              <div className="text-sm text-gray-600">Total Games</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{games.filter(g => g.featured).length}</div>
              <div className="text-sm text-gray-600">Featured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{new Set(games.map(g => g.category)).size}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{filteredGames.length}</div>
              <div className="text-sm text-gray-600">Showing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}