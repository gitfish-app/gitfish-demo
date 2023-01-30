import { Box, Image, Switch, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import userRegistrationAtom from '../../../../state/userRegistrationAtom';
import AbsoluteBox from '../../../reuse/AbsoluteBox';
import AbsoluteButton from '../../../reuse/AbsoluteButton';
import DefaultButton from '../../../reuse/DefaultButton';
import Title from '../Title';
import IntervalSelectBox from './IntervalSelectBox';
import TimePicker from './TimePicker';

export type RemindTime = {
  hour: string;
  min: string;
};

const remindTimeArr = ['15 min', '30 min', '1 h', '1.5h', '2h', '3h'];

const Index: FC = () => {
  const router = useRouter();
  const setUserRegistration = useSetRecoilState(userRegistrationAtom);

  const [startTime, setStartTime] = useState<RemindTime>({
    hour: '8',
    min: '00',
  });
  const [endTime, setEndTime] = useState<RemindTime>({ hour: '22', min: '00' });

  const [currentInterval, setCurrentInterval] = useState('15 min');

  useEffect(() => {
    setUserRegistration((d) => ({
      ...d,
      reminder: {
        startActiveTime: `${startTime.hour}:${startTime.min}`,
        endActiveTime: `${endTime.hour}:${endTime.min}`,
        interval: currentInterval,
      },
    }));
  }, [currentInterval]);

  return (
    <>
      <AbsoluteButton
        w={'46px'}
        h={'46px'}
        top={'56px'}
        left={'30px'}
        borderRadius={'16px'}
        border={'1px solid #193569'}
        bgColor={'#0E2144'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        onClick={() => router.back()}
        zIndex={'10'}
      >
        <Image
          src={'/assets/system-tag_arrow.png'}
          alt={'arrow'}
          w={'9px'}
          transform={'scale(-1,1)'}
        />
      </AbsoluteButton>
      <Title title={'Reminder Time'} />
      <AbsoluteBox
        w={'100%'}
        pos={'absolute'}
        top={'252px'}
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        zIndex={'20'}
      >
        <Switch size={'lg'} />
        <Box
          w={'100%'}
          display={'flex'}
          justifyContent={'space-between'}
          px={'50px'}
          mt={'16px'}
        >
          <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
            <Image
              src={'/assets/user-registration-sun.png'}
              w={'24px'}
              h={'24px'}
            />
            <TimePicker time={startTime} setTime={setStartTime} />
          </Box>
          <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
            <Image
              src={'/assets/user-registration-moon.png'}
              w={'24px'}
              h={'24px'}
            />
            <TimePicker time={endTime} setTime={setEndTime} />
          </Box>
        </Box>
        <Box w={'100%'} px={'30px'} mt={'16px'}>
          <Text color={'#707F95'} fontSize={'14px'}>
            Interval
          </Text>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            columnGap={'20px'}
            rowGap={'12px'}
          >
            {remindTimeArr.map((time, i) => (
              <IntervalSelectBox
                key={i}
                time={time}
                isActive={time === currentInterval}
                setCurrentInterval={setCurrentInterval}
              />
            ))}
          </Box>
        </Box>
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
