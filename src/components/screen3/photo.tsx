import { Plane, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { MathUtils, Mesh } from 'three';
import { dataPhotos } from './dataPhotos';

type Photo = {
  src: string;
  index: number;
};

export const Photo = (props: Photo) => {
  const photo = useTexture(props.src);
  const ref = useRef<Mesh>(null);
  const scroll = useScroll();
  const isOddIndex = props.index % 2 === 0;
  const startPosition = isOddIndex ? -1.5 : 1.5;
  const previousOffset = useRef(-1);

  useFrame(() => {
    if (!ref.current || previousOffset.current === Number(scroll.offset.toFixed(4))) {
      return;
    }

    const { x } = ref.current.position;
    const dir = previousOffset.current > scroll.offset ? -1 : 1;
    ref.current.position.x = isOddIndex
      ? MathUtils.clamp(x + 0.01 * dir, startPosition, 0)
      : MathUtils.clamp(x - 0.01 * dir, 0, startPosition);

    previousOffset.current = Number(scroll.offset.toFixed(4));
  });

  return (
    <Plane ref={ref} position-x={startPosition} position-z={props.index * -0.35} args={[3, 4.5]} material-map={photo} />
  );
};
