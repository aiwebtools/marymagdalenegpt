
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const BasicSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const isMobile = useIsMobile();
  
  // Reduce animation complexity on mobile
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      // Simpler animation on mobile
      if (isMobile) {
        meshRef.current.rotation.y = t * 0.2;
        meshRef.current.position.y = Math.sin(t * 0.3) * 0.3;
      } else {
        meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
        meshRef.current.rotation.y = Math.sin(t * 0.2) * 0.2;
        meshRef.current.position.y = Math.sin(t * 0.5) * 0.5;
      }
    }
  });
  
  return (
    <mesh ref={meshRef}>
      {/* Reduce geometry complexity on mobile */}
      <sphereGeometry args={[1, isMobile ? 16 : 32, isMobile ? 16 : 32]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        emissive="#9b87f5" 
        emissiveIntensity={0.5}
        roughness={0.7}
        metalness={0.3} 
      />
    </mesh>
  );
};

export default BasicSphere;
