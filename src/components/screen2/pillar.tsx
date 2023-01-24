import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Group } from "three";

type Pillar = {
  position: [number, number, number];
};

export const Pillar = ({ position }: Pillar) => {
  const model = useGLTF("pillar-maison.gltf");
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.003;
    ref.current.rotation.z += 0.002;
  });

  return (
    <Suspense fallback={null}>
      <group ref={ref} scale={0.25} position={position}>
        <primitive object={model.scene} />
      </group>
    </Suspense>
  );
};
