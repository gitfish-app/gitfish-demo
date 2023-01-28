import { useRouter } from 'next/router';
import { FC } from 'react';
import AbsoluteBox from '../../../reuse/AbsoluteBox';
import DefaultButton from '../../../reuse/DefaultButton';
import ProgressHeader from '../ProgressHeader';
import Title from '../Title';

const Index: FC = () => {
  const router = useRouter();
  return (
    <>
      <ProgressHeader progress={2} router={router} />
      <Title title={'What’s Your Height?'} />
      <AbsoluteBox
        w={'100%'}
        px={'30px'}
        display={'flex'}
        flexDirection={'column-reverse'}
        pos={'absolute'}
        bottom={'150px'}
        zIndex={'20'}
      >
        <DefaultButton
          text={'Next'}
          onClick={() => router.push('/mobile/user-registration/height')}
        />
      </AbsoluteBox>
    </>
  );
};

export default Index;
