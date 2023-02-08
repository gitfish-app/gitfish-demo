import axios from 'axios';
import { useEffect, useState } from 'react';
import githubColors from '../../constant/githubColors';
import { FormatGithubLanguageData } from '../../types/formatGithubLanguageDataType';
import { languageGraphData } from '../../util/languageGraphData';

const useGithubSelectedRepo = (commitsUrl: string, languagesUrl: string) => {
  const [commitCount, setCommitCount] = useState<number | undefined>(undefined);
  const [languagesData, setLanguagesData] = useState<
    FormatGithubLanguageData[] | undefined
  >(undefined);
  const commitsUrlSplit = commitsUrl.split('{/sha}')[0];

  const getCommitData = async () => {
    const res = await axios.get(commitsUrlSplit);
    const data = res.data;
    const counts = data.length as number;
    return counts;
  };

  const getLanguagesData = async () => {
    const res = await axios.get(languagesUrl);
    const data = res.data;

    let languageTotalRate: number = 0;
    Object.keys(data).map((language) => {
      languageTotalRate += data[language];
    });

    const formatData: FormatGithubLanguageData[] = [];

    Object.keys(data).map((language) => {
      const percent = (data[language] / languageTotalRate) * 100;
      const color = githubColors[language].color;
      formatData.push({ language, percent, color });
    });

    const moreFormatted = languageGraphData(formatData);
    return moreFormatted;
  };

  useEffect(() => {
    (async () => {
      console.log('fetching');
      const counts = await getCommitData();
      const languages = await getLanguagesData();
      setCommitCount(() => counts);
      setLanguagesData(() => languages);
    })();
  }, []);

  return { commitCount, languagesData };
};

export default useGithubSelectedRepo;
