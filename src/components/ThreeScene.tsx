
import { Suspense, useEffect, useState } from 'react';
import Scene from './three/Scene';

const ThreeScene = () => {
  const [hasError, setHasError] = useState(false);
  
  console.log('ThreeScene component rendering');
  
  // Reset error state when component mounts
  useEffect(() => {
    setHasError(false);
  }, []);
  
  // Error boundary fallback
  if (hasError) {
    return (
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>3D scene temporarily unavailable</div>
        <button 
          onClick={() => setHasError(false)}
          style={{ 
            marginTop: '10px', 
            padding: '5px 10px', 
            background: '#333', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
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
      <Suspense fallback={
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          color: 'white'
        }}>
          Loading 3D scene...
        </div>
      }>
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
