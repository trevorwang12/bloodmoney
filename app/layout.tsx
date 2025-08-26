import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'BLOODMONEY! by SHROOMYCHRIST - Play Online Free | Dark Clicker Game',
  description: 'Play BLOODMONEY! by SHROOMYCHRIST online free - the ultimate dark clicker game! Experience thrilling moral dilemmas, click for cash, and save Harvey. Features multiple endings, dark humor, and psychological gameplay. Start playing now!',
  keywords: 'Blood Money game, Blood Money online, Blood Money play free, dark clicker game, moral choice game, psychological game, browser game, incremental game, Blood Money Harvey, click for money, ethical dilemma game, dark humor game, story driven clicker',
  authors: [{ name: 'Blood Money Game Studio' }],
  robots: 'index, follow',
  metadataBase: new URL('https://bloodmoney-game.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BLOODMONEY! by SHROOMYCHRIST - Play Online Free',
    description: 'Play BLOODMONEY! by SHROOMYCHRIST online free! The ultimate dark clicker game with moral choices. Click for cash, save Harvey, face the consequences. Multiple endings await!',
    type: 'website',
    url: 'https://bloodmoney-game.vercel.app',
    siteName: 'Blood Money Game',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blood Money Game - Click for Cash, Bleed for Fortune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLOODMONEY! by SHROOMYCHRIST - Play Free',
    description: 'Play BLOODMONEY! by SHROOMYCHRIST online free! Dark clicker game with moral choices and multiple endings.',
    images: ['/og-image.png'],
    creator: '@SHROOMYCHRIST',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch and preconnect for performance */}
        <link rel="preconnect" href="https://2games.io" />
        <link rel="preconnect" href="https://www.playpager.com" />
        <link rel="preconnect" href="https://idev.games" />
        <link rel="preconnect" href="https://funhtml5games.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
          {children}
        </main>
      </body>
    </html>
  )
}