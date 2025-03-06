
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Simple sphere component
const BasicSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#9b87f5" emissive="#9b87f5" emissiveIntensity={0.5} />
    </mesh>
  );
};

// Simple floating torus component
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
      <torusGeometry args={[3, 0.3, 16, 100]} />
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

const ThreeScene = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0 
    }}>
      <Scene />
    </div>
  );
};

export default ThreeScene;
