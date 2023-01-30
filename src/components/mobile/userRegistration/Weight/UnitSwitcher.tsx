import { Box, Text } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  weight: number;
  unit: 'kg' | 'lb';
  setUnit: Dispatch<SetStateAction<'kg' | 'lb'>>;
};

const UnitSwitcher: FC<Props> = ({ weight, unit, setUnit }) => {
  return (
    <Box
      w={'180px'}
      h={'30px'}
      display={'flex'}
      borderRadius={'9999px'}
      border={'1px solid #006EFB'}
    >
      <Box
        flex={'1'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'9999px'}
        bgColor={unit === 'kg' ? '#D3EDFB' : null}
        onClick={() => {
          setUnit(() => 'kg');
        }}
      >
        <Text color={'#006EFB'} fontSize={'14px'}>
          kg
        </Text>
      </Box>
      <Box
        flex={'1'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'9999px'}
        bgColor={unit === 'lb' ? '#D3EDFB' : null}
        onClick={() => {
          setUnit(() => 'lb');
        }}
      >
        <Text color={'#006EFB'} fontSize={'14px'}>
          lb
        </Text>
      </Box>
    </Box>
  );
};

export default UnitSwitcher;
