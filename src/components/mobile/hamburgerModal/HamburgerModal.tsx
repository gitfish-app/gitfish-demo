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
} from '@chakra-ui/react';
import { ComponentProps, FC, useState } from 'react';
import TabBackground from '../../../assets/icons/TabBackground';
import TabCharacter from '../../../assets/icons/TabCharacter';
import TabSkin from '../../../assets/icons/TabSkin';
import AbsoluteButton from '../../reuse/AbsoluteButton';
import AbsoluteImage from '../../reuse/AbsoluteImage';
import CharacterPanel from './CharacterPanel/CharacterPanel';
import SkinPanel from './SkinPanel';

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
              <TabPanel bgColor={'#050732'} p={'0'}>
                <CharacterPanel />
              </TabPanel>

              <TabPanel bgColor={'#050732'} p={'0'}>
                <SkinPanel />
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
