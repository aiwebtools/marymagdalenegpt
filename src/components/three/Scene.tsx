
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import BasicSphere from './BasicSphere';
import FloatingRing from './FloatingRing';
import { useIsMobile } from '@/hooks/use-mobile';

const Scene = () => {
  const isMobile = useIsMobile();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  console.log('Scene component rendering, isMobile:', isMobile);
  
  // Cleanup Three.js context on unmount
  useEffect(() => {
    return () => {
      // Force cleanup of WebGL context
      if (canvasRef.current) {
        const gl = canvasRef.current.getContext('webgl2') || canvasRef.current.getContext('webgl');
        if (gl && gl.getExtension('WEBGL_lose_context')) {
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      }
    };
  }, []);
  
  return (
    <Canvas 
      ref={canvasRef}
      camera={{ position: [0, 0, isMobile ? 12 : 10], fov: isMobile ? 70 : 60 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      dpr={[1, isMobile ? 1 : 2]}
      performance={{ min: 0.5 }}
      frameloop="demand"
      onCreated={(state) => {
        console.log('Three.js Canvas created successfully');
        // Lower pixel ratio for better performance
        state.gl.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
        // Ensure proper disposal on context loss
        state.gl.domElement.addEventListener('webglcontextlost', (e) => {
          console.log('WebGL context lost, preventing default');
          e.preventDefault();
        });
      }}
      onError={(error) => {
        console.error('Three.js Canvas error:', error);
      }}
    >
      <ambientLight intensity={isMobile ? 0.5 : 0.3} />
      <directionalLight position={[10, 10, 5]} intensity={isMobile ? 0.8 : 1} />
      <pointLight position={[-10, -10, -5]} color="#D946EF" intensity={isMobile ? 0.3 : 0.5} />
      
      <BasicSphere />
      {!isMobile && <FloatingRing />}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false} 
      />
    </Canvas>
  );
};

export default Scene;
