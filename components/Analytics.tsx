'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { trackPageView, manualTrack } from '@/lib/analytics'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Wait a bit for the script to load, then try tracking
    const timer = setTimeout(() => {
      // Try Plausible first
      trackPageView()
      
      // Fallback to manual tracking after another delay
      setTimeout(() => {
        if (typeof window !== 'undefined' && !window.plausible) {
          console.log('Plausible not detected, using manual tracking');
          manualTrack('pageview');
        }
      }, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname])

  // Debug info in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const checkPlausible = () => {
        console.log('Checking Plausible availability...');
        console.log('window.plausible:', typeof window.plausible);
        console.log('Current URL:', window.location.href);
        console.log('Domain should be:', 'blood-money.cc');
      };
      
      // Check immediately and after delays
      checkPlausible();
      setTimeout(checkPlausible, 2000);
    }
  }, []);

  return (
    <Script
      defer
      data-domain="blood-money.cc"
      data-api="https://plausibleonline.top/api/event"
      src="https://plausibleonline.top/js/script.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Plausible script loaded successfully');
        // Manual trigger for debugging
        if (typeof window !== 'undefined' && window.plausible) {
          console.log('Plausible function available');
        }
      }}
      onError={(e) => {
        console.error('Plausible script failed to load:', e);
      }}
    />
  );
}