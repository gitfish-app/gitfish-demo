import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { range } from '../../../util/range';
import AbsoluteButton from '../../reuse/AbsoluteButton';

type Props = {
  progress: 0 | 1 | 2 | 3;
};

const progressRangeArr = range(4);

const ProgressHeader: FC<Props> = ({ progress }) => {
  return (
    <Box position={'relative'} zIndex={'10'}>
      <AbsoluteButton
        w={'46px'}
        h={'46px'}
        top={'56px'}
        left={'30px'}
        borderRadius={'16px'}
        border={'1px solid #193569'}
        bgColor={'#0E2144'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image
          src={'/assets/system-tag_arrow.png'}
          alt={'arrow'}
          w={'9px'}
          transform={'scale(-1,1)'}
        />
      </AbsoluteButton>
      <HStack
        position={'absolute'}
        top={'84px'}
        left={'50%'}
        transform={'translateX(-50%)'}
      >
        {progressRangeArr.map((progressNum) => (
          <Box
            key={progressNum}
            w={progressNum === progress ? '32px' : '14px'}
            h={'7px'}
            bgColor={progressNum === progress ? '#006EFB' : '#707F95'}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ProgressHeader;
