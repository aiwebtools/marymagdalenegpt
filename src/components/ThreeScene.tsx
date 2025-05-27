
import { Suspense } from 'react';
import Scene from './three/Scene';

const ThreeScene = () => {
  console.log('ThreeScene component rendering');
  
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0,
      overflow: 'hidden' // Ensure no scrollbars appear
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
        <Scene />
      </Suspense>
    </div>
  );
};

export default ThreeScene;
