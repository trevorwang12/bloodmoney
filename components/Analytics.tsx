'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export default function Analytics() {
  const pathname = usePathname()
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (!scriptLoaded) return;
    
    // Wait for script to be ready, then try tracking
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Try to call plausible directly
        if (window.plausible) {
          window.plausible('pageview');
          console.log('Plausible pageview tracked');
        } else {
          console.log('Plausible not available, trying manual tracking');
          // Manual fallback
          manualTrack();
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, scriptLoaded]);

  const manualTrack = async () => {
    try {
      if (typeof window === 'undefined') return;
      
      const data = {
        n: 'pageview',
        u: window.location.href,
        d: 'blood-money.cc',
        r: document?.referrer || null
      };

      const response = await fetch('https://plausibleonline.top/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Manual tracking successful');
      }
    } catch (error) {
      console.error('Manual tracking failed:', error);
    }
  };

  return (
    <Script
      defer
      data-domain="blood-money.cc"
      data-api="https://plausibleonline.top/api/event"
      src="https://plausibleonline.top/js/script.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Plausible script loaded');
        setScriptLoaded(true);
      }}
      onError={(e) => {
        console.error('Plausible script failed:', e);
        setScriptLoaded(true); // Still try manual tracking
      }}
    />
  );
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}