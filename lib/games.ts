export interface Game {
  id: string
  title: string
  description: string
  shortDescription: string
  category: string
  thumbnail: string
  iframeUrl: string
  tags: string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  featured: boolean
}

export const games: Game[] = [
  {
    id: 'blood-money',
    title: 'Blood Money',
    description: 'Experience the thrilling moral dilemma in Blood Money. Click to earn money and save a life, but at what cost? This unique clicker game explores dark themes and moral complexity.',
    shortDescription: 'Click for Cash, Bleed for Fortune!',
    category: 'Dark Theme',
    thumbnail: '/images/blood-money-thumb.svg',
    iframeUrl: 'https://2games.io/game/bloodmoney/',
    tags: ['clicker', 'moral choices', 'dark humor', 'story-driven'],
    difficulty: 'Medium',
    featured: true
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    description: 'The classic incremental game that started it all! Click cookies to bake more cookies and build a massive cookie empire. Unlock upgrades, achievements, and discover hidden secrets.',
    shortDescription: 'Bake cookies, build your empire!',
    category: 'Clicker',
    thumbnail: '/images/cookie-clicker-thumb.svg',
    iframeUrl: 'https://idev.games/embed/cookie-clicker',
    tags: ['clicker', 'incremental', 'addictive', 'classic'],
    difficulty: 'Easy',
    featured: true
  },
  {
    id: '2048',
    title: '2048',
    description: 'Slide numbered tiles on a grid to combine them and create the 2048 tile. Simple rules but strategic depth make this puzzle game endlessly engaging.',
    shortDescription: 'Slide tiles to reach 2048!',
    category: 'Puzzle',
    thumbnail: '/images/2048-thumb.svg',
    iframeUrl: 'https://funhtml5games.com/?embed=2048bit',
    tags: ['puzzle', 'math', 'strategy', 'minimalist'],
    difficulty: 'Medium',
    featured: true
  },
  {
    id: 'chess',
    title: 'Chess',
    description: 'Play the classic strategy game of chess. Challenge yourself against AI or practice your moves in this timeless board game.',
    shortDescription: 'Classic chess strategy game!',
    category: 'Strategy',
    thumbnail: '/images/chess-thumb.svg',
    iframeUrl: 'https://playpager.com/embed/chess/index.html',
    tags: ['strategy', 'chess', 'classic', 'board game'],
    difficulty: 'Hard',
    featured: false
  },
  {
    id: 'solitaire',
    title: 'Solitaire',
    description: 'The classic card game that everyone knows and loves. Arrange cards in the correct order to clear the board.',
    shortDescription: 'Classic solitaire card game!',
    category: 'Card Game',
    thumbnail: '/images/solitaire-thumb.svg',
    iframeUrl: 'https://playpager.com/embed/solitaire/index.html',
    tags: ['cards', 'solitaire', 'classic', 'puzzle'],
    difficulty: 'Easy',
    featured: false
  },
  {
    id: 'falling-cubes',
    title: 'Falling Cubes',
    description: 'Arrange falling colored cubes to create lines and clear the board. A modern twist on the classic falling block puzzle.',
    shortDescription: 'Colorful falling block puzzle!',
    category: 'Puzzle',
    thumbnail: '/images/cubes-thumb.svg',
    iframeUrl: 'https://playpager.com/embed/cubes/index.html',
    tags: ['puzzle', 'blocks', 'colorful', 'arcade'],
    difficulty: 'Medium',
    featured: false
  },
  {
    id: 'idle-particle-clicker',
    title: 'Idle Particle Clicker',
    description: 'Click to generate particles and watch mesmerizing animations. An idle clicker game with beautiful particle effects and strategic upgrades.',
    shortDescription: 'Mesmerizing particle clicker game!',
    category: 'Clicker',
    thumbnail: '/images/particle-clicker-thumb.svg',
    iframeUrl: 'https://idev.games/embed/idle-particle-clicker',
    tags: ['clicker', 'idle', 'particles', 'incremental'],
    difficulty: 'Easy',
    featured: true
  }
]

export const gameCategories = [
  'All Games',
  'Dark Theme',
  'Clicker',
  'Puzzle',
  'Strategy',
  'Card Game'
]

export const getFeaturedGames = () => games.filter(game => game.featured)
export const getGamesByCategory = (category: string) => 
  category === 'All Games' ? games : games.filter(game => game.category === category)
export const getGameById = (id: string) => games.find(game => game.id === id)