
import { Suspense, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Scene from './three/Scene';

const ThreeScene = () => {
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();
  
  console.log('ThreeScene component rendering');
  
  // Don't render on mobile to prevent glitches
  if (isMobile) {
    return null;
  }
  
  // Reset error state when component mounts
  useEffect(() => {
    setHasError(false);
  }, []);
  
  // Error boundary fallback
  if (hasError) {
    return null; // Silently fail on mobile
  }
  
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <Suspense fallback={null}>
        <ErrorBoundary onError={() => setHasError(true)}>
          <Scene />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

// Simple error boundary component
const ErrorBoundary = ({ children, onError }: { children: React.ReactNode; onError: () => void }) => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.error?.message?.includes('removeChild') || 
          event.error?.message?.includes('WebGL') ||
          event.error?.message?.includes('Three')) {
        console.error('Three.js error caught:', event.error);
        onError();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [onError]);

  return <>{children}</>;
};

export default ThreeScene;
