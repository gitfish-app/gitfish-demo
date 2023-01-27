import { useRouter } from 'next/router';
import { FC } from 'react';
import ProgressHeader from '../ProgressHeader';

const Index: FC = () => {
  const router = useRouter();
  return (
    <>
      <ProgressHeader progress={1} router={router} />
    </>
  );
};

export default Index;
