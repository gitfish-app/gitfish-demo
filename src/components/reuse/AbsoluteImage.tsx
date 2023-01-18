import { ComponentProps, FC, ReactNode } from 'react';
import { ChakraComponent, Img } from '@chakra-ui/react';

type Props = {
  isHorizontalCenter?: boolean;
  children?: ReactNode;
} & ComponentProps<ChakraComponent<'img'>>;

const AbsoluteImage: FC<Props> = ({
  isHorizontalCenter = false,
  left,
  transform,
  children,
  ...attriblute
}) => {
  return (
    <Img
      pointerEvents={'none'}
      pos={'absolute'}
      {...attriblute}
      left={isHorizontalCenter ? '50%' : left}
      transform={
        transform || isHorizontalCenter ? 'translateX(-50%)' : transform
      }
    />
  );
};

export default AbsoluteImage;
