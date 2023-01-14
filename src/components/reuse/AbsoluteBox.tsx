import { ComponentProps, FC, ReactNode } from 'react';
import { Box, ChakraComponent } from '@chakra-ui/react';

type Props = {
  isHorizontalCenter?: boolean;
  isVerticalCenter?: boolean;
  children?: ReactNode;
} & ComponentProps<ChakraComponent<'div'>>;

const AbsoluteBox: FC<Props> = ({
  isHorizontalCenter = false,
  isVerticalCenter = false,
  top,
  left,
  children,
  ...attriblute
}) => {
  return (
    <Box
      pos={'absolute'}
      bgSize={'contain'}
      {...attriblute}
      top={isVerticalCenter ? '50%' : top}
      left={isHorizontalCenter ? '50%' : left}
      // transform={isHorizontalCenter ? 'translateX(-50%)' : undefined}
      transform={`translate(${isHorizontalCenter ? '-50%' : '0'}, ${
        isVerticalCenter ? '-50%' : '0'
      })`}
    >
      {children}
    </Box>
  );
};

export default AbsoluteBox;
