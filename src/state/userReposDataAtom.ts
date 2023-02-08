import { atom } from 'recoil';
import { GithubRepoData } from '../types/githubRepoDataType';

const userReposDataAtom = atom<GithubRepoData[] | undefined>({
  key: 'userReposDataAtom',
  default: undefined,
});

export default userReposDataAtom;
