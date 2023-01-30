import { Scroll } from '@react-three/drei';
import { SCREEN2_OFFSET_START_Y } from './constants';
import { dataScreen2 } from './data';
import { PillarModel } from './PillarModel';
import { Word } from './word';

export const Screen2 = () => {
  return (
    <Scroll>
      {dataScreen2.map((word, i) => (
        <Word key={word} value={word} index={dataScreen2.length - i} />
      ))}
      <group position-y={SCREEN2_OFFSET_START_Y * 0.75}>
        <PillarModel />
      </group>
    </Scroll>
  );
};
