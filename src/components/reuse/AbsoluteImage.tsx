import { ComponentProps, FC, ReactNode } from 'react';
import { ChakraComponent, Img } from '@chakra-ui/react';

type Props = {
  isHorizontalCenter?: boolean;
  children?: ReactNode;
} & ComponentProps<ChakraComponent<'img'>>;

const AbsoluteImage: FC<Props> = ({
  isHorizontalCenter = false,
  children,
  ...attriblute
}) => {
  return (
    <Img
      pos={'absolute'}
      {...attriblute}
      left={isHorizontalCenter ? '50%' : undefined}
      transform={isHorizontalCenter ? 'translateX(-50%)' : undefined}
    />
  );
};

export default AbsoluteImage;
