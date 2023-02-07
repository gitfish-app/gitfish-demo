import { Box, Flex, Image, Modal, ModalContent, Text } from '@chakra-ui/react';
import { FC } from 'react';
import AbsoluteImage from '../../../../reuse/AbsoluteImage';
import CharacterCard from '../CharacterCard';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CharacterSelect: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
      <ModalContent bgColor={'#050732'} px={'20px'}>
        <Box
          mt={'58px'}
          w={'100%'}
          h={'52px'}
          borderRadius={'9999px'}
          bgColor={'#29C8A0'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          pos={'relative'}
        >
          <Box
            pos={'absolute'}
            w={'97%'}
            h={'85%'}
            border={'2px solid #D3EDFB'}
            borderRadius={'9999px'}
          />
          <Text color={'#D3EDFB'} fontSize={'28px'} fontWeight={'bold'}>
            Tank Lv.1
          </Text>
        </Box>
        <Box
          mt={'22px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text color={'#D3EDFB'} fontSize={'22px'} fontWeight={'bold'}>
            Select a character
          </Text>
          <Box w={'23px'} h={'23px'} onClick={onClose}>
            <Image src={'/assets/system-x.svg'} w={'100%'} h={'100%'} />
          </Box>
        </Box>
        <Text color={'#D3EDFB'} fontSize={'14px'} mt={'4px'}>
          水槽レベルに応じて水槽に入れることができる数は決まっています。水槽に入れる魚を選ぼう！
        </Text>
        <Flex flexWrap={'wrap'} gap={'14px'} mt={'24px'}>
          <CharacterCard
            fishImgSrc={'/assets/demo-collection_preview.png'}
            fishName={'gitfish'}
            commitCount={30}
            mainLanguage={'JavaScript'}
            rate={75}
            isInAquarium
          />
          <CharacterCard
            fishImgSrc={'/assets/demo-mobile_moving_fish_n0.png'}
            fishName={'creative-work'}
            commitCount={30}
            mainLanguage={'Swift'}
            rate={50}
            isInAquarium
          />
          <CharacterCard
            fishImgSrc={'/assets/demo-mobile_moving_fish_n2.png'}
            fishName={'team'}
            commitCount={30}
            mainLanguage={'PHP'}
            rate={90}
            isInAquarium
          />
        </Flex>
        <AbsoluteImage
          src="/assets/mobile-hamburger_modal_bottom_decoration.png"
          w={'100vw'}
          left={'0'}
          bottom={'0'}
          pos={'fixed'}
          zIndex={'100'}
        />
      </ModalContent>
    </Modal>
  );
};

export default CharacterSelect;
