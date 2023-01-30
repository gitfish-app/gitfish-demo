import { Box } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { RemindTime } from './Index';

type Props = {
  time: RemindTime;
  setTime: Dispatch<SetStateAction<RemindTime>>;
};

const TimePicker: FC<Props> = ({ time, setTime }) => {
  return (
    <Box w={'100px'} mt={'8px'} display={'flex'} justifyContent={'center'}>
      <Box
        as={'input'}
        w={parseInt(time.hour) > 9 ? '1.5em' : '0.8em'}
        color={'#D3EDFB'}
        fontSize={'32px'}
        fontWeight={'semibold'}
        textAlign={'center'}
        bgColor={'transparent'}
        _focus={{ outline: 'none' }}
        value={time.hour}
        onChange={(e: any) =>
          setTime((pre) => ({ ...pre, hour: e.target.value }))
        }
      />
      <Box as={'span'} color={'#D3EDFB'} fontSize={'32px'}>
        :
      </Box>
      <Box
        as={'input'}
        w={'1.5em'}
        color={'#D3EDFB'}
        fontSize={'32px'}
        fontWeight={'semibold'}
        textAlign={'center'}
        bgColor={'transparent'}
        _focus={{ outline: 'none' }}
        value={time.min}
        onChange={(e: any) =>
          setTime((pre) => ({ ...pre, min: e.target.value }))
        }
      />
    </Box>
  );
};

export default TimePicker;
