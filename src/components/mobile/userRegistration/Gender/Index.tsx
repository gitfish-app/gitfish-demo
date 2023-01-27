import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import AbsoluteBox from '../../../reuse/AbsoluteBox';
import DefaultButton from '../../../reuse/DefaultButton';
import ProgressHeader from '../ProgressHeader';
import Title from '../Title';
import GenderButton from './GenderButton';

const Index: FC = () => {
  const router = useRouter();

  return (
    <>
      <ProgressHeader progress={0} router={router} />
      <Title title={'What’s Your Gender?'} />
      <AbsoluteBox
        as={Flex}
        isHorizontalCenter
        zIndex={'20'}
        gap={'24px'}
        top={'240px'}
      >
        <GenderButton gender={'woman'} />
        <GenderButton gender={'man'} />
      </AbsoluteBox>
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
          onClick={() => router.push('/mobile/user-registration/weight')}
        />
      </AbsoluteBox>
    </>
  );
};

export default Index;
