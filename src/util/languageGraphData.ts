import { FormatGithubLanguageData } from '../types/formatGithubLanguageDataType';

export const languageGraphData = (data: FormatGithubLanguageData[]) => {
  const otherColor = '#a3a3a3';

  let otherPercent: number = 0;
  const graphData = data.map((d, i) => {
    if (d.percent < 0.4) {
      otherPercent += d.percent;
    } else {
      return d;
    }

    if (i === data.length - 1)
      return { language: 'other', percent: otherPercent, color: otherColor };
  });

  const newData = graphData.filter((d) => d !== undefined);

  return newData as FormatGithubLanguageData[];
};
