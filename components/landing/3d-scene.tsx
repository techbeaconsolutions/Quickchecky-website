'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Box, Torus, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useThemeContext } from '../theme-provider';

// Floating geometric shapes
function FloatingShape({ position, color, shape, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  color: string;
  shape: 'sphere' | 'box' | 'torus';
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  const ShapeComponent = shape === 'sphere' ? Sphere : shape === 'box' ? Box : Torus;
  const args = shape === 'sphere' ? [1, 64, 64] : shape === 'box' ? [1, 1, 1] : [1, 0.4, 32, 32];

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <ShapeComponent ref={meshRef} args={args as [number, number, number]} position={position} scale={0.8}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </ShapeComponent>
    </Float>
  );
}

// Animated particles
function Particles({ count = 200 }: { count?: number }) {
  const { isDark } = useThemeContext();
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={isDark ? '#A78BFA' : '#8B5CF6'}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Glowing ring
function GlowingRing({ position, color }: { position: [number, number, number]; color: string }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 + Math.PI / 4;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ringRef} position={position}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

// Wireframe icosahedron
function WireframeGeo({ position }: { position: [number, number, number] }) {
  const { isDark } = useThemeContext();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={isDark ? '#22D3EE' : '#06B6D4'}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Morphing blob
function MorphingBlob({ position }: { position: [number, number, number] }) {
  const { isDark } = useThemeContext();
  
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} scale={2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshWobbleMaterial
          color={isDark ? '#8B5CF6' : '#A78BFA'}
          factor={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const { isDark } = useThemeContext();
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A78BFA" />
      
      <Environment preset={isDark ? 'night' : 'dawn'} />
      
      {/* Floating shapes */}
      <FloatingShape 
        position={[-4, 2, -3]} 
        color={isDark ? '#A78BFA' : '#8B5CF6'} 
        shape="sphere" 
        speed={0.8}
        distort={0.4}
      />
      <FloatingShape 
        position={[4, -1, -2]} 
        color={isDark ? '#22D3EE' : '#06B6D4'} 
        shape="box" 
        speed={1.2}
        distort={0.2}
      />
      <FloatingShape 
        position={[-3, -2, -4]} 
        color={isDark ? '#F472B6' : '#EC4899'} 
        shape="torus" 
        speed={0.6}
        distort={0.3}
      />
      <FloatingShape 
        position={[5, 3, -5]} 
        color={isDark ? '#34D399' : '#10B981'} 
        shape="sphere" 
        speed={1}
        distort={0.5}
      />
      
      {/* Glowing rings */}
      <GlowingRing position={[0, 0, -5]} color={isDark ? '#A78BFA' : '#8B5CF6'} />
      <GlowingRing position={[3, 2, -6]} color={isDark ? '#22D3EE' : '#06B6D4'} />
      
      {/* Wireframe geometry */}
      <WireframeGeo position={[-5, 0, -4]} />
      <WireframeGeo position={[6, -2, -6]} />
      
      {/* Central morphing blob */}
      <MorphingBlob position={[0, 0, -8]} />
      
      {/* Particles */}
      <Particles count={300} />
    </>
  );
}

export function ThreeDBackground() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
