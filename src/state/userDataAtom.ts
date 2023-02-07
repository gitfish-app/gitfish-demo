import { atom } from 'recoil';

const userDataAtom = atom<any | undefined>({
  key: 'userDataAtom',
  default: undefined,
});

export default userDataAtom;
