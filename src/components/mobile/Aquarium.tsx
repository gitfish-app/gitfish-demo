import { Box, keyframes } from '@chakra-ui/react';
import { FC, ComponentProps, useEffect, useState } from 'react';
import AbsoluteBox from '../reuse/AbsoluteBox';
import { useRecoilValue } from 'recoil';
import achievementRateSelector from '../../state/achievementRateSelector';
import AbsoluteButton from '../reuse/AbsoluteButton';

const floatingAnimation = keyframes`
  from { transform: translateY(calc(10px - 15px)); }
  to { transform: translateY(-15px); }
`;

type Props = {
  openPresent: () => void;
} & ComponentProps<typeof Box>;

const MIN_WATER_AMOUNT = 250;
const PADDING_TOP = 80;

const Aquarium: FC<Props> = ({ openPresent }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const achievementRate = useRecoilValue(achievementRateSelector);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const waterHeight =
    MIN_WATER_AMOUNT +
    (windowHeight - MIN_WATER_AMOUNT - PADDING_TOP) *
      (achievementRate <= 100 ? achievementRate : 100) *
      0.01;

  return (
    <AbsoluteBox
      w={'100%'}
      h={'100%'}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '1',
        display: 'block',
        width: '100%',
        height: '35px',
        bottom: waterHeight,
        transition: 'bottom 0.5s',
        backgroundImage: 'url(/assets/mobile-home_water_wave.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        zIndex: '1',
        display: 'block',
        w: '100%',
        h: waterHeight,
        bottom: '0',
        bgColor: '#050732',
        transition: 'height 0.5s',
      }}
    >
      <AbsoluteButton
        bottom={waterHeight}
        left={'40px'}
        transformOrigin={'bottom'}
        transform={'translateY(-15px)'}
        h={'55px'}
        w={'50px'}
        zIndex={'0'}
        transition={'bottom 0.8s'}
        transitionDelay={'0.2s'}
        animation={`${floatingAnimation} 1.5s ease-in-out infinite alternate`}
        bgImage={'url(/assets/mobile-present_box.png)'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        onClick={openPresent}
      />
    </AbsoluteBox>
  );
};

export default Aquarium;
