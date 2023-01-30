import { useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Group } from 'three';

type Pillar = {
  position: [number, number, number];
};

export const Pillar = ({ position }: Pillar) => {
  const { scene } = useGLTF('pedestal.glb');
  const ref = useRef<Group>(null);

  return (
    <Suspense fallback={null}>
      <group ref={ref} scale={0.025} position={position}>
        <primitive object={scene} />
      </group>
    </Suspense>
  );
};
