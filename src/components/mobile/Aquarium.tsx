import { Box } from '@chakra-ui/react';
import { FC, ComponentProps, useEffect, useState } from 'react';
import AbsoluteBox from '../reuse/AbsoluteBox';
import { useRecoilValue } from 'recoil';
import AbsoluteButton from '../reuse/AbsoluteButton';
import hasPresentNotificationSelector from '../../state/hasPresentNotificationSelector';
import achievementRateSelector from '../../state/achievementRateSelector';
import { floatingAnimation } from '../../styles/animations';
import Character from '../pc/Character';
import mobileAquariumCharacters from '../../mockdata/mobileAquariumCharacters';

type Props = {
  openAchievementModal: () => void;
} & ComponentProps<typeof Box>;

const MIN_WATER_AMOUNT = 250;
const PADDING_TOP = 80;
const AQUARIUM_DECORATION_PADDING = 50;

const Aquarium: FC<Props> = ({ openAchievementModal }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  const achievementRate = useRecoilValue(achievementRateSelector);
  const hasPresentNotification = useRecoilValue(hasPresentNotificationSelector);

  const amountOfWaterLevelCalculation =
    MIN_WATER_AMOUNT +
    (windowHeight - MIN_WATER_AMOUNT - PADDING_TOP) *
      (achievementRate <= 100 ? achievementRate : 100) *
      0.01;

  const [aquariumWidth, setAquariumWidth] = useState(375);
  const [aquariumHeight, setAquariumHeight] = useState(
    amountOfWaterLevelCalculation,
  );

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setAquariumWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setAquariumHeight(amountOfWaterLevelCalculation);
  }, [achievementRate]);

  return (
    <AbsoluteBox w={'100%'} h={'100%'}>
      <AbsoluteBox
        zIndex={'1'}
        display={'block'}
        width={'100%'}
        height={'35px'}
        bottom={aquariumHeight}
        transition={'bottom 0.5s'}
        backgroundImage={'url(/assets/mobile-home_water_wave.png)'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
      />
      <AbsoluteBox
        position={'absolute'}
        zIndex={'1'}
        display={'block'}
        w={'100%'}
        h={aquariumHeight}
        bottom={'0'}
        bgColor={'#050732'}
        transition={'height 0.5s'}
      >
        {mobileAquariumCharacters.map((character, index) => (
          <Character
            key={character.characterImageFileName}
            characterMoveDistance={character.characterMoveDistance}
            characterSize={character.characterSize}
            characterImageFileName={character.characterImageFileName}
            aquariumSize={{
              width: aquariumWidth,
              height: aquariumHeight - AQUARIUM_DECORATION_PADDING,
            }}
            moveDelay={index * 100}
          />
        ))}
      </AbsoluteBox>
      {hasPresentNotification && (
        <AbsoluteButton
          bottom={aquariumHeight}
          left={'40px'}
          transformOrigin={'bottom'}
          transform={'translateY(-15px) rotate(0deg)'}
          h={'55px'}
          w={'50px'}
          zIndex={'0'}
          transition={'bottom 0.8s'}
          transitionDelay={'0.2s'}
          animation={`${floatingAnimation} 1.5s ease-in-out infinite alternate`}
          bgImage={'url(/assets/mobile-present_box.png)'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          onClick={openAchievementModal}
        />
      )}
    </AbsoluteBox>
  );
};

export default Aquarium;
