import { Scroll } from '@react-three/drei';
import { SCREEN3_OFFSET_START_Y } from './constants';
import { dataPhotos } from './dataPhotos';
import { Photo } from './photo';

export const Screen3 = () => {
  return (
    <Scroll>
      <group position-y={SCREEN3_OFFSET_START_Y} rotation-y={Math.PI * -0.05}>
        {Object.entries(dataPhotos).map(([name, src], i) => (
          <Photo key={name} index={i} src={src} />
        ))}
      </group>
    </Scroll>
  );
};
