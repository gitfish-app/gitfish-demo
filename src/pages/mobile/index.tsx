import type { NextPage } from 'next';
import AbsoluteButton from '../../components/reuse/AbsoluteButton';
import MobileWrap from '../../components/mobile/MobileWrap';
import AbsoluteImage from '../../components/reuse/AbsoluteImage';
import AbsoluteBox from '../../components/reuse/AbsoluteBox';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import amountOfCurrentWaterAtom from '../../state/amountOfCurrentWaterAtom';
import DrinkModal from '../../components/mobile/DrinkModal';
import Aquarium from '../../components/mobile/Aquarium';
import achievementRateSelector from '../../state/achievementRateSelector';
import AchievementModal from '../../components/mobile/AchievementModal';
import { useLongPress } from 'use-long-press';
import hasPresentNotificationSelector from '../../state/hasPresentNotificationSelector';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import reactSpringBottomSheet from '../../styles/reactSpringBottomSheet';

const Index: NextPage = () => {
  const [amountOfCurrentWater, setAmountCurrentWater] = useRecoilState(
    amountOfCurrentWaterAtom,
  );
  const achievementRate = useRecoilValue(achievementRateSelector);
  const hasPresentNotification = useRecoilValue(hasPresentNotificationSelector);

  const drinkModalHandler = useDisclosure();
  const achievementModalHandler = useDisclosure();

  const longPressBind = useLongPress(() => {}, {
    cancelOnMovement: true,
    onFinish: () => {
      drinkModalHandler.onOpen();
    },
  });

  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(true);
  const [selectRepositoryIndex, setSelectRepositoryIndex] = useState('1');

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
          openBottomSheet={() => setIsOpenBottomSheet(true)}
          {...{
            isOpen: achievementModalHandler.isOpen,
            onClose: achievementModalHandler.onClose,
          }}
        />
      )}

      <Box as={BottomSheet} open={isOpenBottomSheet}>
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          h={'100%'}
          gap={'20px'}
          color={'white'}
        >
          <Text fontWeight={'bold'} fontSize={'24px'}>
            Repository
          </Text>
          <TableContainer w={'100%'}>
            <Table>
              <Tbody>
                <Tr>
                  <Td borderColor={'rgba(112, 127, 149, 0.6)'}>
                    <RadioGroup
                      value={selectRepositoryIndex}
                      onChange={setSelectRepositoryIndex}
                    >
                      <HStack justifyContent={'space-between'} as={'label'}>
                        <VStack alignItems={'flex-start'}>
                          {/* Repo */}
                          <Text
                            color={'#006EFB'}
                            fontWeight={'medium'}
                            fontSize={'18px'}
                          >
                            Repository Name
                          </Text>
                          <Flex gap={'16px'}>
                            {/* Language Tag */}
                            <Text color={'#707F95'} fontSize={'14px'}>
                              <Box
                                as={'span'}
                                display={'inline-block'}
                                w={'10px'}
                                h={'10px'}
                                mr={'8px'}
                                borderRadius={'100%'}
                                bgColor={'red'}
                              />
                              HTML
                            </Text>
                            {/* Last update */}
                            <Text color={'#707F95'} fontSize={'14px'}>
                              Updated Oct 27
                            </Text>
                          </Flex>
                        </VStack>
                        <Radio
                          value={'0'}
                          size="md"
                          colorScheme="white"
                          defaultChecked
                        />
                      </HStack>
                    </RadioGroup>
                  </Td>
                </Tr>
                {/* ↓ 2 */}
                <Tr>
                  <Td borderColor={'rgba(112, 127, 149, 0.6)'}>
                    <RadioGroup
                      value={selectRepositoryIndex}
                      onChange={setSelectRepositoryIndex}
                    >
                      <HStack justifyContent={'space-between'} as={'label'}>
                        <VStack alignItems={'flex-start'}>
                          {/* Repo */}
                          <Text
                            color={'#006EFB'}
                            fontWeight={'medium'}
                            fontSize={'18px'}
                          >
                            Repository Name
                          </Text>
                          <Flex gap={'16px'}>
                            {/* Language Tag */}
                            <Text color={'#707F95'} fontSize={'14px'}>
                              <Box
                                as={'span'}
                                display={'inline-block'}
                                w={'10px'}
                                h={'10px'}
                                mr={'8px'}
                                borderRadius={'100%'}
                                bgColor={'red'}
                              />
                              HTML
                            </Text>
                            {/* Last update */}
                            <Text color={'#707F95'} fontSize={'14px'}>
                              Updated Oct 27
                            </Text>
                          </Flex>
                        </VStack>
                        <Radio
                          value={'1'}
                          size="md"
                          colorScheme="white"
                          defaultChecked
                        />
                      </HStack>
                    </RadioGroup>
                  </Td>
                </Tr>
                {/* ↑ 2 */}
              </Tbody>
            </Table>
          </TableContainer>
          <AbsoluteButton
            isHorizontalCenter
            bottom={'70px'}
            w={'315px'}
            h={'55px'}
            borderRadius={'18px'}
            bgColor={'#006EFB'}
          >
            Repository Setting
          </AbsoluteButton>
        </Flex>
      </Box>

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
        {...longPressBind()}
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
