import { Box, Image, Text } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import AbsoluteImage from '../../../reuse/AbsoluteImage';

type Props = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const WeightChanger: FC<Props> = ({ value, setValue }) => {
  return (
    <Box
      w={'100%'}
      mt={'32px'}
      pos={'relative'}
      display={'flex'}
      justifyContent={'center'}
    >
      <Box
        pos={'absolute'}
        left={'30px'}
        top={'50%'}
        transform={'translateY(-50%)'}
        w={'50px'}
        h={'50px'}
        borderRadius={'9999px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgColor={'#0E2144'}
        onClick={() => setValue((pre) => pre - 1)}
      >
        <Image src={'/assets/system-minus.svg'} />
      </Box>
      <Text fontSize={'80px'} fontWeight={'semibold'} color={'#D3EDFB'}>
        {value}
      </Text>
      <Box
        pos={'absolute'}
        right={'30px'}
        top={'50%'}
        transform={'translateY(-50%)'}
        w={'50px'}
        h={'50px'}
        borderRadius={'9999px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgColor={'#0E2144'}
        onClick={() => setValue((pre) => pre + 1)}
      >
        <Image src={'/assets/system-plus.svg'} />
      </Box>
    </Box>
  );
};

export default WeightChanger;
