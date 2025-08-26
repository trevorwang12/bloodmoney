import { MetadataRoute } from 'next'
import { games } from '@/lib/games'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bloodmoney-game.vercel.app'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Game pages
  const gamePages = games.map((game) => ({
    url: `${baseUrl}/games/${game.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: game.featured ? 0.8 : 0.7,
  }))

  return [...staticPages, ...gamePages]
}