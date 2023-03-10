import { ComponentProps, FC, ReactNode } from 'react';
import { Box, ChakraComponent } from '@chakra-ui/react';

type Props = {
  isHorizontalCenter?: boolean;
  children?: ReactNode;
} & ComponentProps<ChakraComponent<'div'>>;

const AbsoluteButton: FC<Props> = ({
  isHorizontalCenter = false,
  children,
  transform = undefined,
  left = undefined,
  ...attriblute
}) => {
  return (
    <Box
      as={'button'}
      pos={'absolute'}
      bgSize={'contain'}
      {...attriblute}
      left={isHorizontalCenter ? '50%' : left}
      transform={
        transform || isHorizontalCenter ? 'translateX(-50%)' : transform
      }
    >
      {children}
    </Box>
  );
};

export default AbsoluteButton;
