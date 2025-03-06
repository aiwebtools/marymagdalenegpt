
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BasicSphere from './BasicSphere';
import FloatingRing from './FloatingRing';
import { useIsMobile } from '@/hooks/use-mobile';

const Scene = () => {
  const isMobile = useIsMobile();
  
  return (
    <Canvas 
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ width: '100%', height: '100%', background: 'black' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#D946EF" intensity={0.5} />
      
      <BasicSphere />
      <FloatingRing />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false} 
      />
    </Canvas>
  );
};

export default Scene;
