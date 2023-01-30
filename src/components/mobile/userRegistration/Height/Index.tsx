import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import userRegistrationAtom from '../../../../state/userRegistrationAtom';
import AbsoluteBox from '../../../reuse/AbsoluteBox';
import DefaultButton from '../../../reuse/DefaultButton';
import NumberInput from '../NumberInput';
import ProgressHeader from '../ProgressHeader';
import Title from '../Title';

const Index: FC = () => {
  const router = useRouter();

  const setUserRegistration = useSetRecoilState(userRegistrationAtom);
  const [value, setValue] = useState(160);

  useEffect(() => {
    setUserRegistration((d) => ({ ...d, height: value }));
  }, [value]);

  return (
    <>
      <ProgressHeader progress={2} router={router} />
      <Title title={'What’s Your Height?'} />
      <AbsoluteBox
        w={'100%'}
        pos={'absolute'}
        top={'280px'}
        display={'flex'}
        justifyContent={'center'}
        zIndex={'20'}
      >
        <NumberInput value={value} setValue={setValue} unit={'cm'} />
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
          onClick={() => router.push('/mobile/user-registration/age')}
        />
      </AbsoluteBox>
    </>
  );
};

export default Index;
