import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import AbsoluteBox from '../../../reuse/AbsoluteBox';
import DefaultButton from '../../../reuse/DefaultButton';
import Title from '../Title';
import GendarButton from './GendarButton';

const Index: FC = () => {
  return (
    <>
      <Title title={'What’s Your Gender?'} />
      <AbsoluteBox
        as={Flex}
        isHorizontalCenter
        zIndex={'20'}
        gap={'24px'}
        top={'240px'}
      >
        <GendarButton gendar={'woman'} />
        <GendarButton gendar={'man'} />
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
        <DefaultButton text={'Next'} />
      </AbsoluteBox>
    </>
  );
};

export default Index;
