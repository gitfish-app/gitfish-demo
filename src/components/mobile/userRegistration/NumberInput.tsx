import { Box, Text } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  unit?: string;
  w?: string;
};

const NumberInput: FC<Props> = ({ value, setValue, unit, w }) => {
  return (
    <Box pos={'relative'}>
      <Box
        as={'input'}
        w={w ? w : '120px'}
        color={'#D3EDFB'}
        bgColor={'transparent'}
        value={value ? value.toString() : 0}
        fontSize={'56px'}
        fontWeight={'semibold'}
        textAlign={'center'}
        _focus={{ outline: 'none' }}
        onChange={(e: any) =>
          setValue(() => (e.target.value ? parseInt(e.target.value) : 0))
        }
      />

      {unit ? (
        <Text
          pos={'absolute'}
          color={'#D3EDFB'}
          bottom={'16px'}
          right={'-16px'}
        >
          {unit}
        </Text>
      ) : null}
    </Box>
  );
};

export default NumberInput;
