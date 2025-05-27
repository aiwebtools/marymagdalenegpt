
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BasicSphere from './BasicSphere';
import FloatingRing from './FloatingRing';
import { useIsMobile } from '@/hooks/use-mobile';

const Scene = () => {
  const isMobile = useIsMobile();
  
  console.log('Scene component rendering, isMobile:', isMobile);
  
  return (
    <Canvas 
      camera={{ position: [0, 0, isMobile ? 12 : 10], fov: isMobile ? 70 : 60 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      dpr={[1, isMobile ? 1.5 : 2]} // Lower resolution on mobile for performance
      performance={{ min: 0.5 }} // Allow frame rate to drop for performance
      onCreated={() => console.log('Three.js Canvas created successfully')}
      onError={(error) => console.error('Three.js Canvas error:', error)}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#D946EF" intensity={0.5} />
      
      {/* Conditionally render simplified scene for mobile */}
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
