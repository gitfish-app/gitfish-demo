import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import FishCount from './FishCount';

const CharacterPanel: FC = () => {
  const pushToSelectMode = () => {
    // 魚を選択する画面に移動する処理
    console.log('clicked');
  };

  return (
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
    </Box>
  );
};

export default CharacterPanel;
