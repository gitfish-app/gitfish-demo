import { Text, VStack, Box, HStack, SimpleGrid } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import Button from './Button';
import { newCharacterAnimation } from '../../../styles/animations';
import githubColors from '../../../constant/githubColors';
import LanguageRateBar from '../../reuse/LanguageRateBar';
import { Repository } from '../../../mockdata/repositories';
import characterProperties from '../../../util/characterProperties';

type Props = {
  resetPageCount: () => void;
  closeBottomSheet: () => void;
  selectRepository: Repository;
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
  return (
    <VStack w={'315px'} mx={'auto'}>
      <Box
        animation={`${newCharacterAnimation} 1.5s ease-in-out infinite alternate`}
        transformOrigin={'center'}
        as={characterProperties[characterId].element}
        size={'l'}
        mainColor={githubColors[selectRepository.mainLanguage].color}
      />

      <VStack alignItems={'flex-start'} w={'100%'} gap={'24px'}>
        <Box>
          <Text {...styles.heading}>Name</Text>
          <Text {...styles.body}>{selectRepository.name}</Text>
        </Box>

        <Box w={'100%'}>
          <Text {...styles.heading}>Language</Text>
          <SimpleGrid columns={2} spacing={'16px'}>
            {selectRepository.languages.map((language) => (
              <HStack key={language.name}>
                <Box
                  as={'i'}
                  className={`devicon-${language.name.toLowerCase()}-plain colored`}
                  fontSize={'28px'}
                />
                <LanguageRateBar
                  languageColor={githubColors[language.name].color}
                  rate={language.rate}
                />
              </HStack>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Text {...styles.heading}>Commits</Text>
          <Text {...styles.body}>{selectRepository.commitCount}</Text>
        </Box>
      </VStack>

      <Button
        onClick={() => {
          closeBottomSheet();
          resetPageCount();
        }}
        iconUrl={'/assets/mobile-source_button_icon.svg'}
        buttonMessage={'See the source code'}
      />
    </VStack>
  );
};

export default Result;
