import { FC, useState } from 'react';
import AbsoluteButton from '../reuse/AbsoluteButton';
import {
  Box,
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
  VStack,
} from '@chakra-ui/react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet as ReactSpringBottomSheet } from 'react-spring-bottom-sheet';
import githubColors from '../../constant/githubColors';

type Props = {
  isOpenBottomSheet: boolean;
};

const repositories = [
  {
    id: 0,
    name: '2022_wd2a',
    mainLanguage: 'HTML',
    lastUpdate: 'Oct 29',
  },
  {
    id: 1,
    name: 'gitfish-mobile',
    mainLanguage: 'CSS',
    lastUpdate: 'Oct 27',
  },
  {
    id: 2,
    name: 'gitfish-web',
    mainLanguage: 'JavaScript',
    lastUpdate: 'Oct 27',
  },
  {
    id: 3,
    name: '2023_wd3a',
    mainLanguage: 'TypeScript',
    lastUpdate: 'Oct 27',
  },
  {
    id: 4,
    name: 'liff-starter',
    mainLanguage: 'Dart',
    lastUpdate: 'Oct 27',
  },
  {
    id: 5,
    name: 'bat-fish',
    mainLanguage: 'Rust',
    lastUpdate: 'Oct 27',
  },
];

const OriginalBottomSheet: FC<Props> = ({ isOpenBottomSheet }) => {
  const [selectRepositoryIndex, setSelectRepositoryIndex] = useState('1');

  return (
    <Box as={ReactSpringBottomSheet} open={isOpenBottomSheet}>
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
              {repositories.map((repository) => (
                <Tr key={repository.id}>
                  <Td borderColor={'rgba(112, 127, 149, 0.6)'}>
                    <RadioGroup
                      value={selectRepositoryIndex}
                      onChange={setSelectRepositoryIndex}
                    >
                      <HStack justifyContent={'space-between'} as={'label'}>
                        <VStack alignItems={'flex-start'}>
                          <Text
                            color={'#006EFB'}
                            fontWeight={'medium'}
                            fontSize={'18px'}
                          >
                            {repository.name}
                          </Text>
                          <Flex gap={'16px'}>
                            <Text color={'#707F95'} fontSize={'14px'}>
                              <Box
                                as={'span'}
                                display={'inline-block'}
                                w={'10px'}
                                h={'10px'}
                                mr={'8px'}
                                borderRadius={'100%'}
                                bgColor={
                                  githubColors[repository.mainLanguage].color ??
                                  'red'
                                }
                              />
                              {repository.mainLanguage}
                            </Text>
                            <Text color={'#707F95'} fontSize={'14px'}>
                              Updated {repository.lastUpdate}
                            </Text>
                          </Flex>
                        </VStack>
                        <Radio
                          value={repository.id.toString()}
                          size="md"
                          colorScheme="white"
                          defaultChecked
                        />
                      </HStack>
                    </RadioGroup>
                  </Td>
                </Tr>
              ))}
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
          fontWeight={'bold'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'8px'}
        >
          <Box
            as={'span'}
            display={'inline-block'}
            w={'30px'}
            h={'30px'}
            bgImage={'/assets/mobile-repository_button_icon.svg'}
          />
          Repository Setting
        </AbsoluteButton>
      </Flex>
    </Box>
  );
};

export default OriginalBottomSheet;
