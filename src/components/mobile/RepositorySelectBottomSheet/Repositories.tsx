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
import { format } from 'date-fns';
import { Dispatch, FC, SetStateAction } from 'react';
import githubColors from '../../../constant/githubColors';
import { GithubRepoData } from '../../../types/githubRepoDataType';
import Button from './Button';

type Props = {
  incrementPageCount: () => void;
  selectRepositoryId: string;
  setSelectRepositoryId: Dispatch<SetStateAction<string>>;
  repositories: GithubRepoData[];
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
      <TableContainer w={'100%'} overflowY={'scroll'} h={'100%'}>
        <Table>
          <Tbody>
            {repositories.map((repository) => (
              <Tr key={repository.id}>
                <Td borderColor={'rgba(112, 127, 149, 0.6)'}>
                  <RadioGroup
                    value={selectRepositoryId}
                    onChange={setSelectRepositoryId}
                  >
                    <HStack
                      justifyContent={'space-between'}
                      as={'label'}
                      w={'100%'}
                    >
                      <VStack alignItems={'flex-start'}>
                        <Text
                          color={'#006EFB'}
                          fontWeight={'medium'}
                          fontSize={'18px'}
                          overflow={'hidden'}
                          textOverflow={'ellipsis'}
                          whiteSpace={'nowrap'}
                          w={'12em'}
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
                                githubColors[repository.language]
                                  ? githubColors[repository.language].color
                                  : 'gray.500'
                              }
                            />
                            {repository.language
                              ? repository.language
                              : 'other'}
                          </Text>
                          <Text color={'#707F95'} fontSize={'14px'}>
                            Updated{' '}
                            {format(
                              new Date(repository.updated_at),
                              'yyyy/MM/dd',
                            )}
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
