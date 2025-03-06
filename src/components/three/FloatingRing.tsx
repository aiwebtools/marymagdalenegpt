
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3, 0.3, 16, 64]} /> {/* Reduced geometry complexity from 100 to 64 */}
      <meshStandardMaterial 
        color="#D946EF" 
        emissive="#D946EF"
        emissiveIntensity={0.5}
        transparent={true}
        opacity={0.7}
      />
    </mesh>
  );
};

export default FloatingRing;
