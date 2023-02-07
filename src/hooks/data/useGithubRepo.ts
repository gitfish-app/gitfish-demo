import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { githubApiInstance } from '../../constant/api';
import userReposDataAtom from '../../state/userReposDataAtom';
import { GithubRepoData } from '../../types/githubRepoDataType';

const useGithubRepo = (screenName: string | undefined) => {
  const [userReposData, setUserReposData] = useRecoilState(userReposDataAtom);
  const [repos, setRepos] = useState<any>('init');

  const getGithubReposPage = async (url) => {
    let next = null;
    const res = await githubApiInstance.get(url);

    if (res.headers && res.headers.link) {
      const matches = /\<([^<>]+)\>; rel\="next"/.exec(res.headers.link);
      if (matches) {
        next = matches[1];
      }
    }
    const data = res.data || null;

    return {
      next,
      data,
    };
  };

  const getGithubRepo = async () => {
    let url = `/users/${screenName}/repos`;
    const array = [];
    while (url) {
      const { next, data } = await getGithubReposPage(url);
      if (data) array.push(data);
      url = next;
    }

    return array.flat();
  };

  useEffect(() => {
    (async () => {
      if (userReposData) {
        setRepos(() => 'recoil cache loaded');
      } else if (screenName) {
        const d = await getGithubRepo();
        setRepos(() => 'set data to recoil state');
        setUserReposData(() => d);
      } else {
        setRepos(() => 'no repos');
      }
    })();
  }, [screenName]);

  return { repos };
};

export default useGithubRepo;
