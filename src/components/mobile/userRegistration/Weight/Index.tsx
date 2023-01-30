import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import userRegistrationAtom from '../../../../state/userRegistrationAtom';
import AbsoluteBox from '../../../reuse/AbsoluteBox';
import DefaultButton from '../../../reuse/DefaultButton';
import ProgressHeader from '../ProgressHeader';
import Title from '../Title';
import UnitSwitcher from './UnitSwitcher';
import WeightChanger from './WeightChanger';

const Index: FC = () => {
  const router = useRouter();
  const [weight, setWeight] = useState(50);
  const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
  const setUserRegistration = useSetRecoilState(userRegistrationAtom);

  useEffect(() => {
    setUserRegistration((d) => ({ ...d, weight: `${weight}${unit}` }));
  }, [weight, unit]);

  return (
    <>
      <ProgressHeader progress={1} router={router} />
      <Title title={'What’s Your Weight?'} />
      <AbsoluteBox
        as={Flex}
        zIndex={'20'}
        top={'280px'}
        flexDir={'column'}
        alignItems={'center'}
        w={'100%'}
      >
        <UnitSwitcher weight={weight} unit={unit} setUnit={setUnit} />
        <WeightChanger value={weight} setValue={setWeight} />
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
          onClick={() => router.push('/mobile/user-registration/height')}
        />
      </AbsoluteBox>
    </>
  );
};

export default Index;
