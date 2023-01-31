import { Text, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import { Mesh, RepeatWrapping, ShaderMaterial } from 'three';
import { SCREEN4_OFFSET_START_Y } from './constants';
import { wallOfTextFragment } from './material.fragment';
import { wallOfTextVertex } from './material.vertex';
import OilTexture from '/oil.png';

export const WallOfText = () => {
  const ref = useRef<Mesh>(null);
  const shaderRef = useRef<ShaderMaterial>(null);
  const maskTexture = useTexture(OilTexture);
  maskTexture.wrapS = RepeatWrapping;
  maskTexture.wrapT = RepeatWrapping;

  const uniforms = useMemo(
    () => ({
      time: {
        value: 0,
      },
      Mask: {
        value: maskTexture,
      },
    }),

    [],
  );

  useFrame(({}) => {
    if (!shaderRef.current) {
      return;
    }

    shaderRef.current.uniforms.time.value += 0.01;
  });

  return (
    <Suspense fallback={null}>
      <Text
        ref={ref}
        fontSize={0.25}
        letterSpacing={0.005}
        position-y={SCREEN4_OFFSET_START_Y}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        color={'white'}
        maxWidth={10}
        lineHeight={1.5}
      >
        Khaby Lame, the social media superstar, came to Turin with his parents and four siblings when he was just a year
        old, leaving Senegal under poor circumstances. During the pandemic, he lost his job and moved back to his
        parents' folding bed in Chivasso. In March 2020, he uploaded his first videos to TikTok because he wanted to do
        something: something nice, something that makes people smile. The rest is TikTok history, and Khaby is the
        undisputed number one. His comedic talent, subtle perspective on everyday madness and open hands are his
        trademarks. Above all, he is both magical and adorable.
        <shaderMaterial
          ref={shaderRef}
          uniforms={uniforms}
          fragmentShader={wallOfTextFragment}
          vertexShader={wallOfTextVertex}
        />
      </Text>
    </Suspense>
  );
};
