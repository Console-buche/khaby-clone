import p1 from '/k-01.png';
import p2 from '/k-02.png';
import p3 from '/k-03.png';
import p4 from '/k-04.png';
import p5 from '/k-05.png';
import p6 from '/k-06.png';

type Photos = 'Photo1' | 'Photo2' | 'Photo3' | 'Photo4' | 'Photo5' | 'Photo6';

type DataPhotos = Record<Photos, string>;

export const dataPhotos: DataPhotos = {
  Photo1: p1,
  Photo2: p2,
  Photo3: p3,
  Photo4: p4,
  Photo5: p5,
  Photo6: p6,
};
