import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import { Opener } from './opener';
import { Screen2 } from './screen2';

export const Scene = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ScrollControls pages={5}>
        <color attach="background" args={[new Color('black')]} />
        <Opener />
        <Screen2 />
      </ScrollControls>
      <ambientLight />
    </Canvas>
  );
};
