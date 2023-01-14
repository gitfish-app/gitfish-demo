import { ComponentProps, FC, ReactNode } from 'react';
import { Box, ChakraComponent } from '@chakra-ui/react';

type Props = {
  isHorizontalCenter?: boolean;
  children?: ReactNode;
} & ComponentProps<ChakraComponent<'div'>>;

const AbsoluteBox: FC<Props> = ({
  isHorizontalCenter = false,
  children,
  ...attriblute
}) => {
  return (
    <Box
      pos={'absolute'}
      bgSize={'contain'}
      {...attriblute}
      left={isHorizontalCenter ? '50%' : undefined}
      transform={isHorizontalCenter ? 'translateX(-50%)' : undefined}
    >
      {children}
    </Box>
  );
};

export default AbsoluteBox;
