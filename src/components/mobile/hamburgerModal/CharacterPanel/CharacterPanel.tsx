import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterSelect from './CharacterSelect/CharacterSelect';
import FishCount from './FishCount';

const CharacterPanel: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pushToSelectMode = () => {
    onOpen();
  };

  return (
    <>
      <CharacterSelect isOpen={isOpen} onClose={onClose} />
      <Box w={'100%'} pt={'16px'} px={'20px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Flex alignItems={'center'} gap={'20px'}>
            <Text color={'#D3EDFB'} fontSize={'22px'} fontWeight={'bold'}>
              Character
            </Text>
            <FishCount current={4} max={33} />
          </Flex>
          <Box w={'24px'} h={'24px'} onClick={() => pushToSelectMode()}>
            <Image
              src={'/assets/character-panel-select.png'}
              w={'100%'}
              h={'100%'}
            />
          </Box>
        </Flex>
        <Text color={'#D3EDFB'} fontSize={'14px'} mt={'6px'}>
          ギットハブのこと説明するギットハブのこと説明す目標を達成してキャラクターを集めよう！
        </Text>
        <Flex flexWrap={'wrap'} gap={'14px'} mt={'24px'}>
          <CharacterCard
            fishImgSrc={'/assets/demo-collection_preview.png'}
            fishName={'gitfish'}
            commitCount={30}
            mainLanguage={'JavaScript'}
            rate={75}
          />
          <CharacterCard
            fishImgSrc={'/assets/demo-mobile_moving_fish_n0.png'}
            fishName={'creative-work'}
            commitCount={30}
            mainLanguage={'Swift'}
            rate={50}
          />
          <CharacterCard
            fishImgSrc={'/assets/demo-mobile_moving_fish_n2.png'}
            fishName={'team'}
            commitCount={30}
            mainLanguage={'PHP'}
            rate={90}
          />
        </Flex>
      </Box>
    </>
  );
};

export default CharacterPanel;
