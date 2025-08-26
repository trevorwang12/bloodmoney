'use client'

import { useState, useRef, useEffect } from 'react'
import ShareButtons from './ShareButtons'

interface GameFrameProps {
  gameUrl: string
  onLoad?: () => void
  showLoading?: boolean
}

export default function GameFrame({ gameUrl, onLoad, showLoading = false }: GameFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleFullscreen = async () => {
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      if (!document.fullscreenElement) {
        await iframe.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (error) {
      console.log('Fullscreen error:', error)
    }
  }

  // Listen for fullscreen change events
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement)
  }

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Game Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 sm:gap-0">
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm text-gray-600">Game Controls:</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={handleFullscreen}
            className="clickable bg-gray-600 hover:bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 transition-colors text-sm"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              {isFullscreen ? (
                <path d="M3 4a1 1 0 011-1h4a1 1 0 110 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 11-2 0V4zM15 4a1 1 0 10-1-1h-4a1 1 0 100 2h1.586l-2.293 2.293a1 1 0 101.414 1.414L13 6.414V8a1 1 0 102 0V4z" />
              ) : (
                <path d="M3 4a1 1 0 011-1h4a1 1 0 110 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 11-2 0V4zM15 4a1 1 0 10-1-1h-4a1 1 0 100 2h1.586l-2.293 2.293a1 1 0 101.414 1.414L13 6.414V8a1 1 0 102 0V4z" />
              )}
            </svg>
            <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            <span className="sm:hidden">{isFullscreen ? 'Exit' : 'Full'}</span>
          </button>
          <ShareButtons />
        </div>
      </div>

      {/* Game Frame */}
      <div className="relative">
        <iframe
          ref={iframeRef}
          src={gameUrl}
          className="game-frame-responsive w-full border-2 border-gray-200 rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
          loading="lazy"
          onLoad={onLoad}
          title="Blood Money Game"
        />
        {showLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 rounded-lg">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
              <span className="ml-3 text-gray-600 text-sm">Loading Blood Money game...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}