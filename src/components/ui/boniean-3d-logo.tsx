import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center } from '@react-three/drei';
import { MeshoptDecoder } from 'meshoptimizer';
import * as THREE from 'three';

// Preload the GLB with meshopt decoder so the gate opens instantly
useGLTF.preload('/boniean-3d-logo.glb', true, { decoder: MeshoptDecoder });

interface LogoModelProps {
  speed?: number;
}

const LogoModel: React.FC<LogoModelProps> = ({ speed = 0.4 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/boniean-3d-logo.glb', true, { decoder: MeshoptDecoder });

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
};

interface Boniean3DLogoProps {
  className?: string;
  speed?: number;
  style?: React.CSSProperties;
}

export const Boniean3DLogo: React.FC<Boniean3DLogoProps> = ({
  className = '',
  speed = 0.4,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} color="#ffffff" />
          <directionalLight position={[3, 4, 5]} intensity={0.8} color="#ffaa66" />
          <directionalLight position={[-2, -1, -2]} intensity={0.3} color="#6644cc" />
          <pointLight position={[0, 2, 3]} intensity={0.4} color="#ff8844" />
          <LogoModel speed={speed} />
          <Environment preset="city" environmentIntensity={0.15} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Boniean3DLogo;
