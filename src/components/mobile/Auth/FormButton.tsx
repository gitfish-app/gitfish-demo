import { Box, ChakraComponent } from '@chakra-ui/react';
import { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  text: string;
  color?: string;
  bgColor: string;
  LeftElement?: ReactNode;
} & ComponentProps<ChakraComponent<'div'>>;

const FormButton: FC<Props> = ({
  text,
  bgColor,
  LeftElement,
  color,
  ...attr
}) => {
  return (
    <Box
      as={'button'}
      bgColor={bgColor}
      {...attr}
      borderRadius={'18px'}
      pos={'relative'}
      color={color}
    >
      {LeftElement ? LeftElement : null}
      {text}
    </Box>
  );
};

export default FormButton;
