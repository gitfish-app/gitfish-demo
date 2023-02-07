import { atom } from 'recoil';

const userReposDataAtom = atom<any | undefined>({
  key: 'userReposDataAtom',
  default: undefined,
});

export default userReposDataAtom;
