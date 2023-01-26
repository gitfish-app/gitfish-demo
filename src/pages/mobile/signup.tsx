import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';
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
      <Box w={'100%'} pos={'relative'} zIndex={'1'}>
        <AbsoluteImage
          w={'100%'}
          src={'/assets/mobile-home_bottom_decoration.png'}
          alt={'deco'}
          top={'-32px'}
        />
      </Box>
    </MobileWrap>
  );
};

export default SignUp;
