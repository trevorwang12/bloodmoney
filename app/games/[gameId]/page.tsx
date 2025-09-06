import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getGameById, games } from '@/lib/games'
import GameFrame from '@/components/GameFrame'

interface Props {
  params: {
    gameId: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameById(params.gameId)
  
  if (!game) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.'
    }
  }

  return {
    title: `${game.title} - Blood Money Games`,
    description: game.description,
    keywords: game.tags.join(', '),
    alternates: {
      canonical: `/games/${game.id}`,
    },
    openGraph: {
      title: game.title,
      description: game.shortDescription,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return games.map((game) => ({
    gameId: game.id,
  }))
}

export default function GamePage({ params }: Props) {
  const game = getGameById(params.gameId)

  if (!game) {
    notFound()
  }

  const relatedGames = games
    .filter(g => g.id !== game.id && (g.category === game.category || g.tags.some(tag => game.tags.includes(tag))))
    .slice(0, 4)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          href="/games" 
          className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors"
        >
          ← Back to Games
        </Link>
      </div>

      {/* Game Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              {game.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {game.shortDescription}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {game.featured && (
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ Featured
              </span>
            )}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(game.difficulty)}`}>
              {game.difficulty}
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {game.category}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Game Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <GameFrame 
          gameUrl={game.iframeUrl}
        />
      </div>

      {/* Game Description */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Game</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {game.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Game Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Category:</strong> {game.category}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Difficulty:</strong> {game.difficulty}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Platform:</strong> Browser-based
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <strong>Controls:</strong> Mouse/Touch
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                No download required
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Instant play in browser
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Mobile-friendly
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Free to play
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedGames.map((relatedGame) => (
              <Link
                key={relatedGame.id}
                href={`/games/${relatedGame.id}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-3 flex items-center justify-center">
                    <div className="text-2xl">🎮</div>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors mb-1">
                    {relatedGame.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {relatedGame.shortDescription}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(relatedGame.difficulty)}`}>
                    {relatedGame.difficulty}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}