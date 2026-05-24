import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center, Sparkles } from '@react-three/drei';
import { MeshoptDecoder } from 'meshoptimizer';
import * as THREE from 'three';

// Preload the GLB with proper meshopt decoder (3rd arg = decoder instance directly)
useGLTF.preload('/boniean-3d-logo.glb', true, MeshoptDecoder);

interface LogoModelProps {
  speed?: number;
}

const LogoModel: React.FC<LogoModelProps> = ({ speed = 0.45 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/boniean-3d-logo.glb', true, MeshoptDecoder);

  // Model's base material is a dark brown (#851A04) with no emissive.
  // Replace ALL materials with bright orange-gold metallic + strong emissive.
  const brightScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#ff7722'),
          emissive: new THREE.Color('#ff5511'),
          emissiveIntensity: 1.4,
          metalness: 0.7,
          roughness: 0.28,
        });
      }
    });
    return clone;
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <group ref={groupRef}>
      <Center scale={1.25}>
        <primitive object={brightScene} />
      </Center>
    </group>
  );
};

/** Pulsing orange ring behind the logo for depth */
const GlowRing: React.FC = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = clock.getElapsedTime();
      ringRef.current.scale.setScalar(1 + Math.sin(t * 2.5) * 0.06);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.18 + Math.sin(t * 3) * 0.08;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1.05, 0.015, 16, 64]} />
      <meshBasicMaterial
        color="#ff7733"
        transparent
        opacity={0.2}
        depthWrite={false}
      />
    </mesh>
  );
};

/** Subtle loading shimmer while model loads */
const LoadingShimmer: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z += 0.03;
      ref.current.scale.setScalar(0.6 + Math.sin(clock.getElapsedTime() * 4) * 0.15);
    }
  });

  return (
    <mesh ref={ref}>
      <ringGeometry args={[0.65, 0.72, 48]} />
      <meshBasicMaterial
        color="#ff8844"
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </mesh>
  );
};

interface Boniean3DLogoProps {
  className?: string;
  speed?: number;
  style?: React.CSSProperties;
}

export const Boniean3DLogo: React.FC<Boniean3DLogoProps> = ({
  className = '',
  speed = 0.45,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <Canvas
        camera={{ position: [0, 0.15, 2.15], fov: 32 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={<LoadingShimmer />}>
          {/* Strong ambient to prevent dark shadows */}
          <ambientLight intensity={0.7} color="#ffffff" />

          {/* Key light — warm orange from upper-right */}
          <directionalLight
            position={[4, 5, 6]}
            intensity={1.8}
            color="#ffaa66"
          />

          {/* Fill light — soft amber from front-low */}
          <directionalLight
            position={[0, -2, 4]}
            intensity={0.8}
            color="#ffcc88"
          />

          {/* Rim light — purple-blue from behind */}
          <directionalLight
            position={[-3, 0, -3]}
            intensity={0.6}
            color="#8844ff"
          />

          {/* Top-down accent */}
          <pointLight
            position={[0, 3, 1]}
            intensity={0.7}
            color="#ff9955"
          />

          {/* Sparkle particles around the logo */}
          <Sparkles
            count={30}
            scale={2.5}
            size={2}
            speed={0.3}
            opacity={0.5}
            color="#ff9944"
          />

          <GlowRing />
          <LogoModel speed={speed} />

          {/* Soft environment for reflections */}
          <Environment preset="city" environmentIntensity={0.25} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Boniean3DLogo;
