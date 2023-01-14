import { atom } from 'recoil';

const amountOfGoalAtom = atom({
  key: 'amountOfGoalAtom',
  default: 2000,
});

export default amountOfGoalAtom;
