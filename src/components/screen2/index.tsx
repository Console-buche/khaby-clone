import { Scroll } from "@react-three/drei";
import { Vector3 } from "three";
import { OFFSET_START_Y } from "./constants";
import { dataScreen2 } from "./data";
import { Pillar } from "./pillar";
import { Word } from "./word";

export const Screen2 = () => {
  return (
    <Scroll>
      {dataScreen2.map((word, i) => (
        <Word key={word} value={word} index={dataScreen2.length - i} />
      ))}
      <group position-y={OFFSET_START_Y * 0.75}>
        <Pillar position={[5, 0, -2]} />
      </group>
    </Scroll>
  );
};
