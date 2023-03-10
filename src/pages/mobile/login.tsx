import { Box, Image, Text } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import FormButton from '../../components/mobile/Auth/FormButton';
import MobileWrap from '../../components/mobile/MobileWrap';
import AbsoluteButton from '../../components/reuse/AbsoluteButton';

import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { auth } from '../../libs/firebase';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import githubScreenNameAtom from '../../state/githubScreenNameAtom';

const LogIn: FC = () => {
  const router = useRouter();
  const [_githubScreenName, setGithubScreenName] =
    useRecoilState(githubScreenNameAtom);
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

  useEffect(() => {
    if (user) {
      const githubLoginUserInfo = user as any;
      setGithubScreenName(
        () =>
          githubLoginUserInfo.user.reloadUserInfo.providerUserInfo[0]
            .screenName as string,
      );
      router.replace('/mobile/user-registration/gender');
    }
  }, [user]);

  return (
    <MobileWrap>
      <Box
        mt={'58px'}
        display={'flex'}
        justifyContent={'center'}
        pos={'relative'}
        zIndex={'10'}
      >
        <Box w={'138px'}>
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
      <Box w={'100%'} h={'127px'} transform={'translateY(-28px)'}>
        <Image src={'/assets/mobile-auth-bg-image.png'} w={'100%'} h={'100%'} />
      </Box>
      <Box
        transform={'translateY(-46px)'}
        borderTopLeftRadius={'18px'}
        borderTopRightRadius={'18px'}
        bgColor={'#0E2144'}
        pt={'32px'}
        px={'30px'}
      >
        <Text fontSize={'30px'} fontWeight={'bold'} color={'#D3EDFB'}>
          Log in
        </Text>
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
          mt={'32px'}
          LeftElement={
            <Box
              as={'i'}
              pos={'absolute'}
              left={'18px'}
              className={'devicon-github-plain colored'}
              fontSize={'26px'}
            />
          }
          onClick={() => signInWithGithub()}
        />
        {error ? (
          <Text
            textAlign="center"
            fontSize={'14px'}
            color={'red.500'}
            mt={'30px'}
          >
            {error.message ? error.message : 'error'}
          </Text>
        ) : null}
      </Box>
    </MobileWrap>
  );
};

export default LogIn;
