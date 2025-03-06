
import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingEye = () => {
  const eyeRef = useRef<THREE.Group>(null);
  const irisRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  useFrame(({ clock }) => {
    if (eyeRef.current) {
      eyeRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      eyeRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      eyeRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.5;
    }
    
    if (irisRef.current) {
      // Make iris follow the mouse
      irisRef.current.lookAt(new THREE.Vector3(mouse.x * 5, mouse.y * 5, 10));
    }
  });
  
  return (
    <group ref={eyeRef}>
      {/* Eye */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f5f5f5" />
      </Sphere>
      
      {/* Iris */}
      <group ref={irisRef} position={[0, 0, 0.8]}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#9b87f5" />
        </Sphere>
        
        {/* Pupil */}
        <Sphere args={[0.25, 32, 32]} position={[0, 0, 0.3]}>
          <meshStandardMaterial color="#000" />
        </Sphere>
      </group>
    </group>
  );
};

interface FloatingCircleProps {
  position: [number, number, number];
  size: number;
  speed: number;
  color: string;
}

// Custom torus component to avoid issues with drei Torus
const CustomTorus = ({ position, args, rotation, children }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <torusGeometry args={args} />
      {children}
    </mesh>
  );
};

const FloatingCircle = ({ position, size, speed, color }: FloatingCircleProps) => {
  const circleRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (circleRef.current) {
      circleRef.current.rotation.z = clock.getElapsedTime() * speed;
      
      // Add a subtle floating movement
      circleRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });
  
  return (
    <mesh
      ref={circleRef}
      position={position}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <torusGeometry args={[size, size / 10, 32, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.5}
        transparent={true}
        opacity={0.7}
      />
    </mesh>
  );
};

const GlowingParticles = ({ count = 100 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);
  
  useEffect(() => {
    if (points.current) {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Positions in a sphere-like distribution
        const radius = 5 + Math.random() * 5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
        
        // Purplish colors
        colors[i3] = 0.5 + Math.random() * 0.5; // R
        colors[i3 + 1] = 0.2 + Math.random() * 0.3; // G
        colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
      }
      
      if (points.current.geometry) {
        points.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        points.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      }
    }
  }, [count]);
  
  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <points ref={points}>
      <bufferGeometry />
      <pointsMaterial 
        size={0.1} 
        vertexColors 
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  const isMobile = useIsMobile();
  
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#D946EF" intensity={0.5} />
      
      <FloatingEye />
      
      <FloatingCircle 
        position={[0, 0, 0]} 
        size={3} 
        speed={0.1} 
        color="#9b87f5" 
      />
      
      <FloatingCircle 
        position={[0, 0, 0]} 
        size={4} 
        speed={-0.05} 
        color="#D946EF" 
      />
      
      <FloatingCircle 
        position={[0, 0, 0]} 
        size={5.5} 
        speed={0.07} 
        color="#0EA5E9" 
      />
      
      <GlowingParticles count={isMobile ? 50 : 150} />
      
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
    <div className="absolute inset-0 z-0">
      <Scene />
    </div>
  );
};

export default ThreeScene;
