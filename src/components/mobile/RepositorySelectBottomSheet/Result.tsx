import {
  Text,
  VStack,
  Box,
  HStack,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import { ComponentProps, FC, useEffect } from 'react';
import Button from './Button';
import { newCharacterAnimation } from '../../../styles/animations';
import githubColors from '../../../constant/githubColors';
import LanguageRateBar from '../../reuse/LanguageRateBar';
import { Repository } from '../../../mockdata/repositories';
import characterProperties from '../../../util/characterProperties';
import { GithubRepoData } from '../../../types/githubRepoDataType';
import useGithubSelectedRepo from '../../../hooks/data/useGithubSelectedRepo';
import Link from 'next/link';

type Props = {
  resetPageCount: () => void;
  closeBottomSheet: () => void;
  selectRepository: GithubRepoData;
  characterId: string;
};

const styles: { [key: string]: ComponentProps<typeof Text> } = {
  heading: {
    fontSize: '14px',
    mb: '8px',
  },
  body: {
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};

const Result: FC<Props> = ({
  resetPageCount,
  closeBottomSheet,
  selectRepository,
  characterId,
}) => {
  const { commitCount, languagesData } = useGithubSelectedRepo(
    selectRepository.commits_url,
    selectRepository.languages_url,
  );

  console.log(commitCount, languagesData);

  return (
    <VStack w={'315px'} mx={'auto'}>
      <Box
        animation={`${newCharacterAnimation} 1.5s ease-in-out infinite alternate`}
        transformOrigin={'center'}
        as={characterProperties[characterId].element}
        size={'l'}
        mainColor={githubColors[selectRepository.language].color}
      />

      <VStack alignItems={'flex-start'} w={'100%'} gap={'24px'}>
        <Box>
          <Text {...styles.heading}>Name</Text>
          <Text {...styles.body}>{selectRepository.name}</Text>
        </Box>

        <Box w={'100%'}>
          <Text {...styles.heading}>Language</Text>
          <SimpleGrid columns={2} spacing={'16px'}>
            {languagesData ? (
              languagesData.map((language) => (
                <HStack key={language.language}>
                  <Box
                    as={'i'}
                    className={`devicon-${language.language.toLowerCase()}-plain colored`}
                    fontSize={'28px'}
                  />
                  <LanguageRateBar
                    languageColor={language.color}
                    rate={language.percent}
                  />
                </HStack>
              ))
            ) : (
              <Spinner />
            )}
          </SimpleGrid>
        </Box>

        <Box>
          <Text {...styles.heading}>Commits</Text>
          <Text {...styles.body}>
            {commitCount ? commitCount : 'loading...'}
          </Text>
        </Box>
      </VStack>

      <Link href={selectRepository.html_url} target={'_blank'}>
        <Button
          onClick={() => {
            closeBottomSheet();
            resetPageCount();
          }}
          iconUrl={'/assets/system-button_source_icon.svg'}
          buttonMessage={'See the source code'}
        />
      </Link>
    </VStack>
  );
};

export default Result;
