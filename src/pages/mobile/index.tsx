import type { NextPage } from 'next';
import AbsoluteButton from '../../components/reuse/AbsoluteButton';
import MobileWrap from '../../components/mobile/MobileWrap';
import AbsoluteImage from '../../components/reuse/AbsoluteImage';
import AbsoluteBox from '../../components/reuse/AbsoluteBox';
import { Text, useDisclosure } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import amountOfCurrentWaterAtom from '../../state/amountOfCurrentWaterAtom';
import DrinkModal from '../../components/mobile/DrinkModal';
import Aquarium from '../../components/mobile/Aquarium';
import achievementRateSelector from '../../state/achievementRateSelector';
import AchievementModal from '../../components/mobile/AchievementModal';
import { useLongPress } from 'use-long-press';
import hasPresentNotificationSelector from '../../state/hasPresentNotificationSelector';

const Index: NextPage = () => {
  const [amountOfCurrentWater, setAmountCurrentWater] = useRecoilState(
    amountOfCurrentWaterAtom,
  );
  const achievementRate = useRecoilValue(achievementRateSelector);
  const hasPresentNotification = useRecoilValue(hasPresentNotificationSelector);

  const drinkModalHandler = useDisclosure();
  const achievementModalHandler = useDisclosure();

  const bind = useLongPress(() => {}, {
    cancelOnMovement: true,
    onFinish: () => {
      drinkModalHandler.onOpen();
    },
  });

  return (
    <MobileWrap>
      <DrinkModal
        setAmountCurrentWater={setAmountCurrentWater}
        {...{
          isOpen: drinkModalHandler.isOpen,
          onClose: drinkModalHandler.onClose,
        }}
      />
      {hasPresentNotification && (
        <AchievementModal
          achievementType={'present'}
          {...{
            isOpen: achievementModalHandler.isOpen,
            onClose: achievementModalHandler.onClose,
          }}
        />
      )}

      <Aquarium openAchievementModal={achievementModalHandler.onOpen} />

      <AbsoluteBox
        color={'white'}
        textAlign={'center'}
        top={'80px'}
        isHorizontalCenter
        zIndex={'10'}
      >
        <Text fontWeight={'bold'} fontSize={'46px'} whiteSpace={'nowrap'}>
          {amountOfCurrentWater}ml
        </Text>
        <Text fontWeight={'medium'} fontSize={'18px'}>
          目標の
          <Text as={'span'} fontWeight={'semibold'}>
            {achievementRate}%
          </Text>
        </Text>
      </AbsoluteBox>
      <AbsoluteButton
        top={'12px'}
        right={'20px'}
        w={'46px'}
        h={'46px'}
        bgImage={'/assets/system-button-hamburger.png'}
        zIndex={'10'}
      />
      <AbsoluteButton
        {...bind()}
        bottom={'40px'}
        isHorizontalCenter
        zIndex={10}
        filter={'drop-shadow(0px 0px 7px #170E7B);'}
        w={'74px'}
        h={'74px'}
        bgImage={'/assets/mobile-drink_button.png'}
      />
      <AbsoluteImage
        src={'/assets/mobile-bubbles.png'}
        h={'134px'}
        bottom={'95px'}
        zIndex={5}
        isHorizontalCenter
      />
      <AbsoluteImage
        src={'/assets/mobile-home_bottom_decoration.png'}
        zIndex={5}
        bottom={0}
      />
    </MobileWrap>
  );
};

export default Index;
