import { Box, Text } from '@chakra-ui/react';
import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react';

type Props = {
  time: string;
  isActive: boolean;
  setCurrentInterval: Dispatch<SetStateAction<string>>;
};

const IntervalSelectBox: FC<Props> = ({
  time,
  isActive,
  setCurrentInterval,
}) => {
  const handleIsActive = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    const textContent = e.currentTarget.childNodes[0].textContent;
    setCurrentInterval(() => textContent);
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      w={'146px'}
      h={'42px'}
      fontWeight={isActive ? 'semibold' : 'medium'}
      borderRadius={'15px'}
      border={isActive ? '1px solid #006EFB' : '1px solid #707F95'}
      bgColor={isActive ? '#D3EDFB' : 'transparent'}
      onClick={(e) => handleIsActive(e)}
    >
      <Text color={isActive ? '#006EFB' : '#707F95'} fontSize={'16px'}>
        {time}
      </Text>
    </Box>
  );
};

export default IntervalSelectBox;
