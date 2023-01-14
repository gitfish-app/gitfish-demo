import { Button, Flex, ModalContent, Text } from '@chakra-ui/react';
import { FC } from 'react';
import AbsoluteBox from '../reuse/AbsoluteBox';
import AbsoluteImage from '../reuse/AbsoluteImage';

const AchievementModalLayout: FC = () => {
  return (
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
      </AbsoluteBox>
      <Flex
        flexDirection={'column'}
        w={'100%'}
        h={'180px'}
        color={'white'}
        textAlign={'center'}
        justifyContent={'space-between'}
      >
        <Text fontSize={'24px'} fontWeight={'bold'}>
          Get the Character!
        </Text>
        <Text fontSize={'14px'} mb={'14px'} px={'8px'}>
          おめでとうございます！目標を5日間連続で達成したので、ガチャを引いてキャラクターをゲットできます！
        </Text>
        <Button borderRadius={'16px'} h={'55px'} color={'#006EFB'}>
          ガチャを引く
        </Button>
      </Flex>
    </ModalContent>
  );
};

export default AchievementModalLayout;
