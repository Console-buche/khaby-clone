import { Scroll, Html } from "@react-three/drei";
import { VideoPlane } from "../VideoPlane";

export const Opener = () => {
  return (
    <Scroll>
      <VideoPlane texturePath="opener.mp4" />
    </Scroll>
  );
};
