'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  url?: string
  title?: string
  description?: string
}

export default function ShareButtons({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Blood Money - Click for Cash, Bleed for Fortune!',
  description = 'Experience the thrilling moral dilemma in Blood Money. A unique clicker game with dark themes and multiple endings.'
}: ShareButtonsProps) {
  const [showShareMenu, setShowShareMenu] = useState(false)

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description)
  }

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}&quote=${shareData.title}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`,
    whatsapp: `https://wa.me/?text=${shareData.title}%20${shareData.url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
    reddit: `https://reddit.com/submit?url=${shareData.url}&title=${shareData.title}`
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      setShowShareMenu(!showShareMenu)
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    } catch (error) {
      console.log('Failed to copy link:', error)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleNativeShare}
        className="clickable bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 transition-colors text-sm"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
        <span className="hidden sm:inline">Share</span>
      </button>

      {showShareMenu && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-64 z-10">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Share this game</h3>
          
          <div className="grid grid-cols-2 gap-2">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700 transition-colors"
            >
              <div className="w-5 h-5 bg-blue-600 rounded"></div>
              <span>Facebook</span>
            </a>
            
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700 transition-colors"
            >
              <div className="w-5 h-5 bg-black rounded"></div>
              <span>X (Twitter)</span>
            </a>
            
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700 transition-colors"
            >
              <div className="w-5 h-5 bg-green-500 rounded"></div>
              <span>WhatsApp</span>
            </a>
            
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700 transition-colors"
            >
              <div className="w-5 h-5 bg-blue-700 rounded"></div>
              <span>LinkedIn</span>
            </a>
          </div>
          
          <hr className="my-3" />
          
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center space-x-2 p-2 hover:bg-gray-50 rounded text-sm text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            <span>Copy Link</span>
          </button>
        </div>
      )}
      
      {showShareMenu && (
        <div 
          className="fixed inset-0 z-0"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  )
}