'use client';

import { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, ContactShadows, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Avatar face component with photo
function AvatarFace({ photoPath }: { photoPath?: string }) {
  try {
    const texture = useTexture(photoPath || '/selimhan.jpg');
    
    const material = useMemo(() => {
      texture.flipY = false;
      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.4,
        metalness: 0.1,
      });
      return mat;
    }, [texture]);

    return (
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <primitive object={material} attach="material" />
      </mesh>
    );
  } catch (error) {
    // Fallback if texture fails to load
    return (
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#d4a574" roughness={0.3} metalness={0.1} />
      </mesh>
    );
  }
}

// Floating animation component
function FloatingAvatar({ photoPath }: { photoPath?: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      // Gentle rotation when not hovered
      if (!hovered) {
        meshRef.current.rotation.y += 0.005;
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      } else {
        // Faster rotation on hover
        meshRef.current.rotation.y += 0.02;
        // Slight scale up on hover
        meshRef.current.scale.lerp(new THREE.Vector3(1.05, 1.05, 1.05), 0.1);
      }
    }
  });

  return (
    <group 
      ref={meshRef} 
      onPointerEnter={() => setHovered(true)} 
      onPointerLeave={() => setHovered(false)}
    >
      {/* Head with photo */}
      <Suspense fallback={
        <mesh position={[0, 1.5, 0]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      }>
        <AvatarFace photoPath={photoPath} />
      </Suspense>

      {/* Hair - Dark brown wavy hair with volume on top */}
      <mesh position={[0, 1.85, -0.15]} castShadow>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshStandardMaterial color="#3d2817" roughness={0.8} />
      </mesh>
      {/* Hair volume on top */}
      <mesh position={[0, 2.0, -0.1]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#3d2817" roughness={0.8} />
      </mesh>

      {/* Body/Torso - Black t-shirt */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.8, 1.2, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.6, 0.5, 0]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#d4a574" roughness={0.3} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.6, 0.5, 0]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#d4a574" roughness={0.3} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.25, -0.8, 0]} castShadow>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#2d3748" roughness={0.6} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.25, -0.8, 0]} castShadow>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#2d3748" roughness={0.6} />
      </mesh>

      {/* Beard - Dark brown, well-trimmed */}
      <mesh position={[0, 1.3, 0.38]} castShadow>
        <boxGeometry args={[0.35, 0.25, 0.08]} />
        <meshStandardMaterial color="#3d2817" roughness={0.7} />
      </mesh>
      
      {/* Mustache */}
      <mesh position={[0, 1.4, 0.38]} castShadow>
        <boxGeometry args={[0.3, 0.08, 0.06]} />
        <meshStandardMaterial color="#3d2817" roughness={0.7} />
      </mesh>

      {/* Dark brown eyes */}
      <mesh position={[-0.15, 1.55, 0.42]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#3d2817" />
      </mesh>

      {/* Right Eye */}
      <mesh position={[0.15, 1.55, 0.42]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#3d2817" />
      </mesh>

      {/* Eye highlights */}
      <mesh position={[-0.13, 1.57, 0.43]}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.17, 1.57, 0.43]}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Scene component
function Scene({ photoPath }: { photoPath?: string }) {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[5, -5, 5]} intensity={0.3} color="#f472b6" />

      {/* Avatar */}
      <FloatingAvatar photoPath={photoPath} />

      {/* Floor shadow */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={5}
        blur={2}
        far={1.5}
      />

      {/* Ground plane for shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  );
}

// Main Avatar3D Component
export default function Avatar3D({ photoPath = '/selimhan.jpg' }: { photoPath?: string }) {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas
        shadows
        camera={{ position: [0, 1, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />
        <Suspense fallback={null}>
          <Scene photoPath={photoPath} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Overlay hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs md:text-sm text-gray-500 bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
        <span className="hidden md:inline">💫 İnteraktif 3D Avatar - Fare ile döndürebilirsiniz</span>
        <span className="md:hidden">💫 Döndürmek için dokunun</span>
      </div>
    </div>
  );
}
