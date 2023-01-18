import { NextPage } from 'next';
import { useState, ComponentProps } from 'react';
import AbsoluteImage from '../../components/reuse/AbsoluteImage';
import AbsoluteButton from '../../components/reuse/AbsoluteButton';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  VStack,
  ModalContent,
  Box,
  Flex,
  Text,
  SimpleGrid,
  HStack,
} from '@chakra-ui/react';
import Aquarium from '../../components/pc/Aquarium';
import PcWrap from '../../components/pc/PcWrap';
import githubColors from '../../constant/githubColors';
import LanguageRateBar from '../../components/reuse/LanguageRateBar';

const DEMO_MAX_WIDTH = 1280;
const DEMO_MAX_HEIGHT = 832;

const styles: { [key: string]: ComponentProps<typeof Text> } = {
  heading: {
    fontSize: '18px',
    fontWeight: 'medium',
  },
  body: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
};

const Index: NextPage = () => {
  const [aquariumWidth] = useState(DEMO_MAX_WIDTH);
  const [aquariumHeight] = useState(DEMO_MAX_HEIGHT - 85 - 35);

  const characterDetailModalHandler = useDisclosure();
  const openCharacterDetailModal = () => {
    characterDetailModalHandler.onOpen();
  };

  return (
    <PcWrap maxW={DEMO_MAX_WIDTH} maxH={DEMO_MAX_HEIGHT}>
      <Aquarium
        aquariumSize={{
          width: aquariumWidth,
          height: aquariumHeight,
        }}
        openCharacterDetailModal={openCharacterDetailModal}
      />

      <Modal {...characterDetailModalHandler}>
        <ModalOverlay
          background={'rgba(5, 7, 50, 0.7)'}
          backdropFilter={'blur(6.5px)'}
        />
        <ModalContent
          pos={'fixed'}
          inset={'0'}
          maxW={'650px'}
          h={'701px'}
          m={'auto'}
          borderRadius={'30px'}
          bgColor={'#0E2144'}
          color={'white'}
        >
          <VStack pt={'50px'} width={'465px'} mx={'auto'} gap={'24px'}>
            <Box
              as={'img'}
              src={'/assets/demo-pc_moving_fish_n8.png'}
              w={'300px'}
              h={'167px'}
            />

            <Flex w={'100%'}>
              <Flex w={'calc(100% - 50px)'}>
                <Flex flexDirection={'column'} w={'50%'} gap={'8px'}>
                  <Text {...styles.heading}>Repository Name</Text>
                  <Text {...styles.body} textTransform={'uppercase'}>
                    GitFish
                  </Text>
                </Flex>
                <Flex flexDirection={'column'} w={'50%'} gap={'8px'}>
                  <Text {...styles.heading}>Commits</Text>
                  <Text {...styles.body}>30</Text>
                </Flex>
              </Flex>
              <Box
                as={'button'}
                w={'50px'}
                h={'50px'}
                bgImage={'/assets/system-button_favorite_character.png'}
                bgRepeat={'no-repeat'}
                bgSize={'contain'}
              />
            </Flex>

            <Box w={'100%'}>
              <Text {...styles.heading} mb={'16px'}>
                Language
              </Text>
              <SimpleGrid columns={3} spacing={'16px'}>
                {[
                  {
                    name: 'Swift',
                    rate: 85,
                  },
                  {
                    name: 'Go',
                    rate: 74,
                  },
                  {
                    name: 'Ruby',
                    rate: 61,
                  },
                  {
                    name: 'PHP',
                    rate: 60,
                  },
                  {
                    name: 'Dart',
                    rate: 30,
                  },
                  {
                    name: 'Kotlin',
                    rate: 20,
                  },
                ].map((language) => (
                  <HStack key={language.name} w={'100%'}>
                    <Box
                      as={'i'}
                      className={`devicon-${language.name.toLowerCase()}-plain colored`}
                      fontSize={'28px'}
                    />
                    <LanguageRateBar
                      size={'md'}
                      languageColor={githubColors[language.name].color}
                      rate={language.rate}
                    />
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>

            <Box w={'100%'}>
              <Text {...styles.heading} mb={'8px'}>
                User Name
              </Text>
              <Text {...styles.body}>Murakamiyasan</Text>
            </Box>
          </VStack>
        </ModalContent>
      </Modal>

      <AbsoluteButton
        top={'40px'}
        right={'40px'}
        w={'70px'}
        h={'70px'}
        bgImage={'/assets/system-button_hamburger.png'}
        zIndex={'10'}
        onClick={() => {}}
        borderRadius={'11px'}
      />
      <AbsoluteImage
        src={'/assets/system-logo.svg'}
        zIndex={5}
        top={'30px'}
        left={'40px'}
      />
      <AbsoluteImage
        src={'/assets/pc-home_bottom_decoration.png'}
        zIndex={5}
        bottom={0}
      />
    </PcWrap>
  );
};

export default Index;
