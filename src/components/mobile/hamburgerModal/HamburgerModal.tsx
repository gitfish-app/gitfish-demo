import {
  Text,
  Box,
  Modal,
  ModalContent,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Button,
  SimpleGrid,
  AspectRatio,
  HStack,
} from '@chakra-ui/react';
import { ComponentProps, FC, useState } from 'react';
import TabBackground from '../../../assets/icons/TabBackground';
import TabCharacter from '../../../assets/icons/TabCharacter';
import TabSkin from '../../../assets/icons/TabSkin';
import AbsoluteBox from '../../reuse/AbsoluteBox';
import AbsoluteButton from '../../reuse/AbsoluteButton';
import AbsoluteImage from '../../reuse/AbsoluteImage';

const DEFAULT_INDEX = 1;

type Props = {} & Omit<ComponentProps<typeof Modal>, 'children'>;

const HamburgerModal: FC<Props> = ({ isOpen, onClose }) => {
  const [tabIndex, setTabIndex] = useState(DEFAULT_INDEX);

  return (
    <Modal {...{ isOpen, onClose }}>
      <ModalContent
        p={'0'}
        m={'0'}
        borderRadius={'0'}
        w={'100%'}
        h={'100%'}
        bgColor={'#050732'}
        color={'white'}
      >
        <AbsoluteButton
          onClick={onClose}
          top={'12px'}
          right={'20px'}
          w={'46px'}
          h={'46px'}
          bgImage={'/assets/system-button_close.png'}
          borderRadius={'15px'}
        />
        <Box bgColor={'#0E2144'}>
          <Text
            mt={'12px'}
            mx={'auto'}
            mb={'24px'}
            fontSize={'35px'}
            fontWeight={'bold'}
            w={'335px'}
          >
            Collection
          </Text>

          <Tabs
            defaultIndex={DEFAULT_INDEX}
            onChange={(index) => setTabIndex(index)}
            isFitted
            variant="enclosed"
            borderBottomRadius={'12px'}
            sx={{
              '[aria-selected=true], [data-selected]': {
                borderColor: 'transparent transparent #006EFB !important',
              },
            }}
          >
            <TabList borderWidth={'0'} overflow={'hidden'}>
              {[TabCharacter, TabSkin, TabBackground].map((Element, index) => (
                <Tab
                  key={Element.toString()}
                  borderRadius={'0'}
                  borderBottom={'3px solid'}
                  borderColor={'#0E2144'}
                  {...{
                    borderBottomLeftRadius: index === 0 ? '12px' : '0',
                    borderBottomRightRadius: index === 2 ? '12px' : '0',
                  }}
                >
                  <Element isSelected={tabIndex === index} />
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Unimplemented</Text>
              </TabPanel>

              <TabPanel bgColor={'#050732'} p={'0'}>
                <VStack pos={'relative'}>
                  <Box
                    as={'img'}
                    src={'/assets/demo-collection_preview.png'}
                    w={'228px'}
                    h={'150px'}
                    mt={'40px'}
                  />
                  <AbsoluteButton
                    top={'24px'}
                    left={'20px'}
                    w={'fit-content'}
                    h={'30px'}
                    pl={'9px'}
                    pr={'25px'}
                    textTransform={'uppercase'}
                    fontWeight={'semibold'}
                    borderRadius={'30px'}
                    bgColor={'#006EFB'}
                    bgImage={'url(/assets/system-tag_arrow.png)'}
                    bgRepeat={'no-repeat'}
                    bgPos={'right 9px center'}
                    bgSize={'9px 13px'}
                  >
                    GitFish
                  </AbsoluteButton>
                </VStack>
                <AbsoluteBox
                  left={'0'}
                  bottom={'0'}
                  h={'420px'}
                  w={'100%'}
                  bg={'#0E2144'}
                  borderTopRadius={'12px'}
                  py={'24px'}
                  px={'20px'}
                >
                  <HStack>
                    <Text fontSize={'22px'} fontWeight={'bold'}>
                      Skin
                    </Text>
                    <Text
                      h={'fit-content'}
                      borderRadius={'18px'}
                      border={'1px solid #D3EDFB'}
                      letterSpacing={'-0.2px'}
                      lineHeight={'18px'}
                      fontSize={'12px'}
                      fontWeight={'medium'}
                      px={'8px'}
                    >
                      12/33
                    </Text>
                  </HStack>
                  <Text fontSize={'14px'} mb={'16px'}>
                    目標を達成してスキンを集めよう！
                  </Text>
                  <SimpleGrid spacing={'12px'} columns={4}>
                    {[...Array(12).fill(0)].map((n, index) => (
                      <AspectRatio ratio={1} key={index + n}>
                        <Button
                          p={'8px'}
                          bg={'transparent'}
                          _active={{ bg: 'transparent' }}
                          _focus={{ bg: 'transparent' }}
                          _hover={{ bg: 'transparent' }}
                          border={`1px solid ${
                            index === 5 ? '#006EFB' : '#193569'
                          }`}
                          borderRadius={'12px'}
                        >
                          <Box
                            as={'img'}
                            src={`/assets/demo-skin_n${index}.png`}
                            w={'100%'}
                          />
                        </Button>
                      </AspectRatio>
                    ))}
                  </SimpleGrid>

                  <AbsoluteButton
                    w={'40px'}
                    h={'40px'}
                    top={'18px'}
                    right={'20px'}
                    bgImage={'url(/assets/system-button_skin_apply.png)'}
                    bgSize={'cover'}
                    bgRepeat={'no-repeat'}
                  />
                </AbsoluteBox>
              </TabPanel>

              <TabPanel>
                <Text>Unimplemented</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <AbsoluteImage
          src="/assets/mobile-hamburger_modal_bottom_decoration.png"
          w={'100%'}
          bottom={'0'}
          pos={'fixed'}
        />
      </ModalContent>
    </Modal>
  );
};

export default HamburgerModal;
