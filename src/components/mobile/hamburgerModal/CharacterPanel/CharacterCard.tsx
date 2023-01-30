import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import githubColors from '../../../../constant/githubColors';
import LanguageRateBar from '../../../reuse/LanguageRateBar';

type Props = {
  fishImgSrc: string;
  fishName: string;
  commitCount: number;
  mainLanguage: string;
  rate: number;
};

const CharacterCard: FC<Props> = ({
  fishImgSrc,
  fishName,
  commitCount,
  mainLanguage,
  rate,
}) => {
  return (
    <Box
      w={'160px'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      bgColor={'#0E2144'}
      borderRadius={'12px'}
    >
      <Box mt={'16px'} w={'122px'} height={'80px'}>
        <Image src={fishImgSrc} objectFit={'contain'} />
      </Box>
      <Box
        display={'flex'}
        w={'100%'}
        flexDir={'column'}
        alignItems={'flex-start'}
        px={'20px'}
      >
        <Text fontWeight={'bold'} color={'#D3EDFB'}>
          {fishName}
        </Text>
        <Text fontSize={'12px'} color={'#707F95'} mt={'4px'}>
          {commitCount} commits
        </Text>
        <Flex
          mb={'16px'}
          mt={'4px'}
          w={'100%'}
          alignItems={'center'}
          gap={'8px'}
        >
          <Box
            as={'i'}
            fontSize={'16px'}
            className={`devicon-${mainLanguage.toLowerCase()}-plain colored`}
          />
          <LanguageRateBar
            languageColor={githubColors[mainLanguage].color}
            rate={rate}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default CharacterCard;
