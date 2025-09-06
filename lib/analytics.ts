// Analytics utility functions
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export const trackEvent = (event: string, props?: Record<string, string | number>) => {
  try {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(event, { props });
      console.log('Event tracked:', event, props);
    } else {
      console.warn('Plausible not available, event not tracked:', event);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

export const trackPageView = () => {
  try {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview');
      console.log('Pageview tracked');
    } else {
      console.warn('Plausible not available, pageview not tracked');
    }
  } catch (error) {
    console.error('Error tracking pageview:', error);
  }
};

// Fallback manual tracking function
export const manualTrack = async (event: string = 'pageview') => {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      console.warn('Manual tracking skipped - not in browser environment');
      return;
    }

    const data = {
      n: event,
      u: window.location.href,
      d: 'blood-money.cc',
      r: document.referrer || null
    };

    const response = await fetch('https://plausibleonline.top/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('Manual tracking successful:', event);
    } else {
      console.error('Manual tracking failed:', response.status);
    }
  } catch (error) {
    console.error('Manual tracking error:', error);
  }
};