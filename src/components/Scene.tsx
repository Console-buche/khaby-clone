import { Plane, Scroll, ScrollControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import { VideoPlane } from "./VideoPlane";

export const Scene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ScrollControls pages={5}>
        <color attach="background" args={[new Color("black")]} />
        <Scroll>
          <VideoPlane texturePath="opener.mp4" />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
