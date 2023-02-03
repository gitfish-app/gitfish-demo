import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  current: number;
  max: number;
};

const FishCount: FC<Props> = ({ current, max }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      w={'44px'}
      h={'18px'}
      borderRadius={'9999px'}
      bgColor={'transparent'}
      border={'1px solid #D3EDFB'}
    >
      <Text color={'#D3EDFB'} fontSize={'12px'}>
        {current}/{max}
      </Text>
    </Box>
  );
};

export default FishCount;
