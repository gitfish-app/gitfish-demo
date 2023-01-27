import type { NextPage } from 'next';
import MobileWrap from '../../../components/mobile/MobileWrap';
import BackgroundAquarium from '../../../components/mobile/userRegistration/BackgroundAquarium';
import PathContents from '../../../components/mobile/userRegistration/PathContents';

const PAGE_LIST = [
  'gendar',
  'weight',
  'height',
  'age',
  'daily-goal',
  'reminder-time',
] as const;

export type PageName = typeof PAGE_LIST[number];

type Props = { pageName: PageName };

const Index: NextPage<Props> = ({ pageName }) => {
  return (
    <MobileWrap>
      <BackgroundAquarium />
      <PathContents pageName={pageName} />
    </MobileWrap>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: PAGE_LIST.map((pageName) => ({ params: { pageName } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { pageName },
}: {
  params: { pageName: PageName };
}) => {
  return {
    props: { pageName },
  };
};

export default Index;
