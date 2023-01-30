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
import hasPresentNotificationSelector from '../../state/hasPresentNotificationSelector';
import { useState } from 'react';
import DrinkButton from '../../components/mobile/DrinkButton';
import RepositorySelectBottomSheet from '../../components/mobile/RepositorySelectBottomSheet';
import HamburgerModal from '../../components/mobile/hamburgerModal/HamburgerModal';

const Index: NextPage = () => {
  const [amountOfCurrentWater, setAmountCurrentWater] = useRecoilState(
    amountOfCurrentWaterAtom,
  );
  const achievementRate = useRecoilValue(achievementRateSelector);
  const hasPresentNotification = useRecoilValue(hasPresentNotificationSelector);

  const drinkModalHandler = useDisclosure();
  const achievementModalHandler = useDisclosure();
  const hamburgerModalHandler = useDisclosure();

  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);

  return (
    <MobileWrap>
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

      <AbsoluteButton
        top={'12px'}
        right={'20px'}
        w={'46px'}
        h={'46px'}
        bgImage={'/assets/system-button_hamburger.png'}
        zIndex={'10'}
        onClick={hamburgerModalHandler.onOpen}
        borderRadius={'11px'}
      />
      <HamburgerModal
        {...{
          isOpen: hamburgerModalHandler.isOpen,
          onClose: hamburgerModalHandler.onClose,
        }}
      />

      <DrinkButton onOpen={drinkModalHandler.onOpen} />
      <DrinkModal
        setAmountCurrentWater={setAmountCurrentWater}
        {...{
          isOpen: drinkModalHandler.isOpen,
          onClose: drinkModalHandler.onClose,
        }}
      />
      {hasPresentNotification && (
        <AchievementModal
          openHamburgerModal={hamburgerModalHandler.onOpen}
          achievementType={'present'}
          openBottomSheet={() => setIsOpenBottomSheet(true)}
          {...{
            isOpen: achievementModalHandler.isOpen,
            onClose: achievementModalHandler.onClose,
          }}
        />
      )}

      <RepositorySelectBottomSheet
        isOpenBottomSheet={isOpenBottomSheet}
        closeBottomSheet={() => {
          setIsOpenBottomSheet(false);
        }}
      />
    </MobileWrap>
  );
};

export default Index;
