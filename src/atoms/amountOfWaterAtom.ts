import { atom } from 'recoil';

const amountOfWaterAtom = atom({
  key: 'amountOfWaterAtom',
  default: 0,
});

export default amountOfWaterAtom;
