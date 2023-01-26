import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';
import FormButton from '../../components/mobile/Auth/FormButton';
import MobileWrap from '../../components/mobile/MobileWrap';
import AbsoluteButton from '../../components/reuse/AbsoluteButton';
import AbsoluteImage from '../../components/reuse/AbsoluteImage';

const SignUp: FC = () => {
  return (
    <MobileWrap>
      <Box
        mt={'58px'}
        display={'flex'}
        justifyContent={'center'}
        pos={'relative'}
        zIndex={'10'}
      >
        <Box w={'104px'}>
          <Image src={'/assets/gitfish-logo.png'} alt={'logo'} w={'100%'} />
        </Box>
        <AbsoluteButton
          w={'46px'}
          h={'46px'}
          top={0}
          left={'30px'}
          borderRadius={'16px'}
          border={'1px solid #193569'}
          bgColor={'#0E2144'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image
            src={'/assets/system-tag_arrow.png'}
            alt={'arrow'}
            w={'9px'}
            transform={'scale(-1,1)'}
          />
        </AbsoluteButton>
      </Box>
      <Box
        mt={'160px'}
        borderTopLeftRadius={'18px'}
        borderTopRightRadius={'18px'}
      >
        <FormButton
          text={'Continue with GitHub'}
          fontSize={'16px'}
          color={'#050732'}
          bgColor={'#D3EDFB'}
          w={'100%'}
          height={'55px'}
          fontWeight={'bold'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          LeftElement={
            <Box
              as={'i'}
              pos={'absolute'}
              left={'18px'}
              className={'devicon-github-plain colored'}
              fontSize={'26px'}
            />
          }
        />
        <FormButton
          text={'Sign Up'}
          fontSize={'16px'}
          color={'#D3EDFB'}
          bgColor={'#006EFB'}
          w={'100%'}
          height={'55px'}
          fontWeight={'bold'}
        />
      </Box>
    </MobileWrap>
  );
};

export default SignUp;
