import { ComponentProps, FC, useState } from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalContent,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import AbsoluteButton from '../reuse/AbsoluteButton';
import { SetterOrUpdater } from 'recoil';
import AbsoluteBox from '../reuse/AbsoluteBox';
import AbsoluteImage from '../reuse/AbsoluteImage';

type Props = {
  setAmountCurrentWater: SetterOrUpdater<number>;
} & Omit<ComponentProps<typeof Modal>, 'children'>;

const DrinkModal: FC<Props> = ({ setAmountCurrentWater, isOpen, onClose }) => {
  const [amountOfDrinkWater, setAmountOfDrinkWater] = useState(230);

  const drinkWater = () => {
    setAmountCurrentWater((amountCurrentWater) => {
      return amountCurrentWater + amountOfDrinkWater;
    });
    onClose();
  };

  return (
    <Modal {...{ isOpen, onClose }}>
      <ModalContent
        p={'0'}
        m={'0'}
        borderRadius={'0'}
        w={'100%'}
        h={'100%'}
        bgColor={'#050732'}
      >
        <AbsoluteBox
          color={'white'}
          textAlign={'center'}
          top={'80px'}
          isHorizontalCenter
        >
          <Text fontWeight={'bold'} fontSize={'46px'} whiteSpace={'nowrap'}>
            {amountOfDrinkWater}ml
          </Text>
        </AbsoluteBox>
        <AbsoluteButton
          onClick={onClose}
          top={'12px'}
          right={'20px'}
          w={'46px'}
          h={'46px'}
          bgImage={'/assets/system-button_close.png'}
        />
        <AbsoluteBox
          display={'flex'}
          flexDirection={'column'}
          isHorizontalCenter
          maxW={'315px'}
          w={'100%'}
          bottom={'80px'}
          gap={'40px'}
        >
          <Flex
            w={'280px'}
            h={'442px'}
            mx={'auto'}
            alignItems={'flex-end'}
            position={'relative'}
            sx={{
              maskImage: 'url(/assets/mobile-glass_mask.png)',
              maskMode: 'alpha',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
            }}
          >
            <AbsoluteImage
              src="/assets/mobile-glass_frame.png"
              zIndex={2}
              objectFit={'cover'}
            />
            <Slider
              onChange={(value) => setAmountOfDrinkWater(value)}
              orientation={'vertical'}
              defaultValue={amountOfDrinkWater}
              step={10}
              min={0}
              max={320}
              h={'400px'}
              w={'100%'}
            >
              <SliderTrack bg={'transparent'} w={'100%'}>
                <SliderFilledTrack bg={'#006EFB'} />
              </SliderTrack>
              {/* 波 */}
              <SliderThumb
                w={'100%'}
                h={'35px'}
                bg={'transparent'}
                bgImage={'/assets/mobile-glass_water_wave.png'}
                bgSize={'contain'}
                bgRepeat={'no-repeat'}
                bgPosition={'center'}
                borderRadius={'0'}
                outline={'none'}
                border={'none'}
                boxShadow={'none'}
                _active={{ transform: 'translateX(-50%)' }}
              />
            </Slider>
          </Flex>
          <Button
            w={'100%'}
            h={'55px'}
            borderRadius={'18px'}
            fontWeight={'bold'}
            bgColor={'#006EFB'}
            _active={{ bgColor: '#006EFB' }}
            _hover={{ bgColor: '#006EFB' }}
            color={'white'}
            onClick={drinkWater}
            disabled={amountOfDrinkWater === 0}
          >
            Drink
          </Button>
        </AbsoluteBox>
      </ModalContent>
    </Modal>
  );
};

export default DrinkModal;
