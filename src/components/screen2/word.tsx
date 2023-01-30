import { Text, useScroll } from '@react-three/drei';
import { SCREEN2_OFFSET_START_Y } from './constants';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { DoubleSide, MathUtils, Mesh, MeshBasicMaterial } from 'three';
import { dataScreen2 } from './data';

type Word = {
  value: string;
  index: number;
};

export const Word = ({ index, value }: Word) => {
  const scroll = useScroll();
  const ref = useRef<Mesh>(null);
  const refMaterial = useRef<MeshBasicMaterial>(null);

  useFrame(() => {
    if (!ref.current || !refMaterial.current) {
      return;
    }

    const rotY = scroll.offset * 5 - Math.abs(dataScreen2.length - index) * 0.25 - Math.PI / 8;
    ref.current.rotation.y = rotY;
    refMaterial.current.opacity = MathUtils.clamp(Math.pow(rotY + 1, 20), -Infinity, 1);
  });

  return (
    <Text
      ref={ref}
      fontSize={1.25}
      letterSpacing={0.005}
      position-y={SCREEN2_OFFSET_START_Y - 1 * -index * 1.1}
      textAlign={'left'}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
    >
      {value}
      <meshBasicMaterial transparent ref={refMaterial} side={DoubleSide} />
    </Text>
  );
};
