import { Box, Popover, Progress, Text } from '@chakra-ui/react';
import { FC } from 'react';
import githubColors from '../../../constant/githubColors';
import LanguageRateBar from '../../mobile/RepositorySelectBottomSheet/LanguageRateBar';

type Props = {
  fishName: string;
  commitCount: number;
  mainLanguage: string;
  languagePercentage: number;
};

const FishPopover: FC<Props> = ({
  fishName,
  commitCount,
  mainLanguage,
  languagePercentage,
}) => {
  return (
    <Box
      w={'224px'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'flex-start'}
      bgColor={'#0E2144'}
      border={'solid 3px #D3EDFB'}
      borderRadius={'30px'}
      p={'32px 38px'}
      _before={{
        content: '""',
        border: '16px solid transparent',
        borderTop: '16px solid #0E2144',
        position: 'absolute',
        bottom: '-29px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '2',
      }}
      _after={{
        content: '""',
        border: '16px solid transparent',
        borderTop: '16px solid #D3EDFB',
        position: 'absolute',
        bottom: '-32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '1',
      }}
    >
      <Text fontSize={'26px'} mb={'16px'} color={'#D3EDFB'}>
        {fishName}
      </Text>
      <Text fontSize={'16px'} mb={'24px'} color={'#707F95'}>
        {commitCount} commits
      </Text>
      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        w={'full'}
        gap={'8px'}
      >
        <Box
          as={'i'}
          className={`devicon-${mainLanguage.toLowerCase()}-plain colored`}
        />
        <LanguageRateBar
          languageColor={githubColors[mainLanguage].color}
          rate={languagePercentage}
        />
      </Box>
    </Box>
  );
};

export default FishPopover;
