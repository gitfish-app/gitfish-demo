import {
  Flex,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  RadioGroup,
  HStack,
  VStack,
  Radio,
  Box,
  Text,
} from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import githubColors from '../../../constant/githubColors';
import { Repository } from '../../../mockdata/repositories';
import Button from './Button';

type Props = {
  incrementPageCount: () => void;
  selectRepositoryId: string;
  setSelectRepositoryId: Dispatch<SetStateAction<string>>;
  repositories: Repository[];
};

const Repositories: FC<Props> = ({
  incrementPageCount,
  selectRepositoryId,
  setSelectRepositoryId,
  repositories,
}) => {
  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      h={'100%'}
      gap={'20px'}
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
                    value={selectRepositoryId}
                    onChange={setSelectRepositoryId}
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
                        value={repository.id}
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
      <Button
        onClick={incrementPageCount}
        iconUrl={'/assets/mobile-repository_button_icon.svg'}
        buttonMessage={'Repository Setting'}
        disabled={repositories.length === 0 || selectRepositoryId === undefined}
      />
    </Flex>
  );
};

export default Repositories;
