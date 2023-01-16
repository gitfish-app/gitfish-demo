import {
  Modal,
  ModalOverlay,
  Flex,
  ModalContent,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';
import { FC, ComponentProps, useState } from 'react';
import { useRecoilState } from 'recoil';
import AchievementText from '../../constant/achievementTexts';
import presentNotificationsAtom from '../../state/presentNotificationsAtom';
import AbsoluteBox from '../reuse/AbsoluteBox';
import AbsoluteImage from '../reuse/AbsoluteImage';
import { AchievementContents } from '../../constant/achievementTexts';
import PRESENT_NOTIFICATIONS_ENUM from '../../constant/presentNotificationsEnum';
import {
  AchievementActionType,
  ACHIEVEMENT_ACTION_NAME,
} from '../../constant/achievementActionTypeEnum';
import skinProperties from '../../util/skinProperties';
import {
  itemAnimation,
  textAnimation,
  newCharacterAnimation,
} from '../../styles/animations';
import characterProperties from '../../util/characterProperties';

type Props = {
  openHamburgerModal: () => void;
  achievementType: 'present' | 'levelUp' | 'completeDailyGoal';
  openBottomSheet: () => void;
} & Omit<ComponentProps<typeof Modal>, 'children'>;

const buttonStyle = {
  width: '100%',
  borderRadius: '16px',
  h: '55px',
};

const AchievementModal: FC<Props> = ({
  openHamburgerModal,
  achievementType,
  openBottomSheet,
  isOpen,
  onClose,
}) => {
  const [modalPageCount, setModalPageCount] = useState(0);
  const resetPageCount = () => {
    setModalPageCount(0);
  };

  const [[presentNotification], setPresentNotifications] = useRecoilState(
    presentNotificationsAtom,
  );

  const achievementContents: AchievementContents =
    presentNotification.category !== PRESENT_NOTIFICATIONS_ENUM.NEW_CHARACTER
      ? AchievementText[achievementType][presentNotification.category]
      : AchievementText[achievementType][presentNotification.category][
          modalPageCount
        ];

  const actionTypeToFunction: { [key in AchievementActionType]: () => void } = {
    collection: () => {
      onClose();
      openHamburgerModal();
      setPresentNotifications((prev) => prev.slice(1));
    },
    gacha: () => {
      setModalPageCount(1);
    },
    repository: () => {
      onClose();
      openBottomSheet();
      setPresentNotifications((prev) => prev.slice(1));
    },
  };

  return (
    <Modal
      {...{ isOpen, onClose }}
      onCloseComplete={resetPageCount}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />

      <ModalContent
        pos={'fixed'}
        inset={'0'}
        m={'auto'}
        p={'24px 16px'}
        w={'calc(315px + 4px * 2)'}
        h={'calc(372px + 4px * 2)'}
        border={'4px solid #006EFB'}
        borderRadius={'44px'}
        boxShadow={'0px 0px 15px rgba(14, 38, 255, 0.3)'}
        overflow={'hidden'}
        bgColor={'#D3EDFB'}
        bgImage={'/assets/mobile-achievement_modal_water.png'}
        bgSize={'contain'}
        bgRepeat={'no-repeat'}
        bgPosition={'bottom'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-end'}
      >
        <AbsoluteBox isHorizontalCenter top={'0'} w={'192px'} h={'145px'}>
          <AbsoluteBox
            isHorizontalCenter
            isVerticalCenter
            w={'192px'}
            h={'192px'}
            bg={'rgba(0, 110, 251, 0.07)'}
            borderRadius={'100%'}
          />
          <AbsoluteBox
            isHorizontalCenter
            isVerticalCenter
            w={'134px'}
            h={'134px'}
            bg={'rgba(0, 110, 251, 0.08)'}
            borderRadius={'100%'}
          />
          <AbsoluteImage
            isHorizontalCenter
            zIndex={30}
            top={'43px'}
            src="/assets/mobile-achievement_modal_bubbles.png"
            objectFit={'cover'}
            w={'102px'}
            h={'105px'}
          />
          <AbsoluteBox
            isHorizontalCenter
            isVerticalCenter
            zIndex={'30'}
            animation={`${itemAnimation} 0.5s ease-in-out forwards`}
            opacity={'0'}
            transform={'translate(-50%, -50%) scale(0)'}
            key={modalPageCount}
          >
            {'characterId' in presentNotification ? (
              modalPageCount === 1 && (
                <Box
                  animation={`${newCharacterAnimation} 1.5s ease-in-out infinite alternate`}
                  transformOrigin={'center'}
                  as={
                    characterProperties[presentNotification.characterId].element
                  }
                  size={'l'}
                />
              )
            ) : (
              <Box as={skinProperties[presentNotification.skinId].element} />
            )}
          </AbsoluteBox>
        </AbsoluteBox>

        <Flex
          flexDirection={'column'}
          w={'100%'}
          h={'180px'}
          color={'white'}
          textAlign={'center'}
          justifyContent={'space-between'}
          key={modalPageCount}
        >
          <Text
            fontSize={'24px'}
            fontWeight={'bold'}
            opacity={'0'}
            animation={`${textAnimation} 0.5s ease-in-out forwards`}
          >
            {achievementContents.title}
          </Text>
          <Text
            fontSize={'14px'}
            mb={'14px'}
            px={'8px'}
            opacity={'0'}
            animation={`${textAnimation} 0.5s 0.2s ease-in-out forwards`}
          >
            {achievementContents.body}
          </Text>
          <Flex gap={'12px'}>
            {achievementContents.actions.map((action, index) => {
              return (
                <Button
                  {...buttonStyle}
                  fontSize={'15px'}
                  key={action}
                  color={index === 0 ? '#006EFB' : 'white'}
                  bg={index === 0 ? 'white' : '#29C8A0'}
                  _hover={{
                    bg: index === 0 ? 'white' : '#29C8A0',
                  }}
                  _active={{
                    bg: index === 0 ? 'white' : '#29C8A0',
                  }}
                  onClick={actionTypeToFunction[action]}
                  whiteSpace={'normal'}
                >
                  {ACHIEVEMENT_ACTION_NAME[action]}
                </Button>
              );
            })}
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default AchievementModal;
