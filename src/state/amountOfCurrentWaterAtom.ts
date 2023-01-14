import { atom } from 'recoil';

const amountOfCurrentWaterAtom = atom({
  key: 'amountOfCurrentWaterAtom',
  default: 0,
});

export default amountOfCurrentWaterAtom;
