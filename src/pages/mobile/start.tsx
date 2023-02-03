import { Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import FormButton from '../../components/mobile/Auth/FormButton';
import MobileWrap from '../../components/mobile/MobileWrap';
import BackgroundAquarium from '../../components/mobile/userRegistration/BackgroundAquarium';
import AbsoluteBox from '../../components/reuse/AbsoluteBox';

const Start: FC = () => {
  const router = useRouter();

  return (
    <MobileWrap>
      <BackgroundAquarium />
      <AbsoluteBox
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        zIndex={'100'}
        w={'100%'}
      >
        <Box w={'270px'} mt={'224px'}>
          <Image src={'/assets/gitfish-logo.png'} w={'100%'} />
        </Box>
        <Text color={'#D3EDFB'} fontSize={'14px'} mt={'32px'}>
          魚を育てながら、体にも潤いを。
        </Text>
      </AbsoluteBox>
      <AbsoluteBox
        bottom={'200px'}
        zIndex={'100'}
        w={'100%'}
        display={'flex'}
        justifyContent={'center'}
      >
        <FormButton
          text={'はじめる'}
          color={'#D3EDFB'}
          bgColor={'#006EFB'}
          w={'75%'}
          h={'56px'}
          fontWeight={'bold'}
          onClick={() => router.replace('/mobile/login')}
        />
      </AbsoluteBox>
    </MobileWrap>
  );
};

export default Start;
