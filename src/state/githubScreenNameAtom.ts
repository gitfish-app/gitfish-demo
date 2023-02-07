import { atom } from 'recoil';

const githubScreenNameAtom = atom<string>({
  key: 'githubScreenNameAtom',
  default: undefined,
});

export default githubScreenNameAtom;
