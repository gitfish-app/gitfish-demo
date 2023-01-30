import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import userRegistrationAtom from '../../../../state/userRegistrationAtom';
import { dailyGoalCalc } from '../../../../util/dailyGoalCalc';
import AbsoluteBox from '../../../reuse/AbsoluteBox';
import DefaultButton from '../../../reuse/DefaultButton';
import NumberInput from '../NumberInput';
import Title from '../Title';

const Index: FC = () => {
  const router = useRouter();
  const [userRegistration, setUserRegistration] =
    useRecoilState(userRegistrationAtom);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (userRegistration) {
      setValue(() => dailyGoalCalc(userRegistration.weight));
    }
  }, []);

  useEffect(() => {
    setUserRegistration((d) => ({ ...d, dailyGoal: value }));
  }, [value]);

  return (
    <>
      <Title title={'Daily Goal'} />
      <AbsoluteBox
        w={'100%'}
        pos={'absolute'}
        top={'280px'}
        display={'flex'}
        justifyContent={'center'}
        zIndex={'20'}
      >
        <NumberInput
          value={value}
          setValue={setValue}
          w={'150px'}
          unit={'ml'}
        />
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
          onClick={() => router.push('/mobile/user-registration/reminder-time')}
        />
      </AbsoluteBox>
    </>
  );
};

export default Index;
