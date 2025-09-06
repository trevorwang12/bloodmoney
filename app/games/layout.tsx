import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Online Games Collection - Blood Money & More | Browser Games',
  description: 'Play the best free online games including Blood Money, Cookie Clicker, 2048, Chess and more. No download required - play instantly in your browser!',
  keywords: 'free online games, browser games, Blood Money game, Cookie Clicker, 2048, Chess, Solitaire, puzzle games, clicker games, dark theme games',
  alternates: {
    canonical: '/games',
  },
  openGraph: {
    title: 'Free Online Games Collection - Blood Money & More',
    description: 'Play the best free online games including Blood Money, Cookie Clicker, 2048, Chess and more. No download required!',
    type: 'website',
    url: 'https://blood-money.cc/games',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Games Collection - Blood Money & More',
    description: 'Play the best free online games including Blood Money, Cookie Clicker, 2048, Chess and more. No download required!',
  }
}

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}