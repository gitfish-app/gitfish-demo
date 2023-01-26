import { Box, ChakraComponent } from '@chakra-ui/react';
import { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  text: string;
  bgColor: string;
  LeftElement?: ReactNode;
} & ComponentProps<ChakraComponent<'div'>>;

const FormButton: FC<Props> = ({ text, bgColor, LeftElement, ...attr }) => {
  return (
    <Box
      as={'button'}
      bgColor={bgColor}
      w={'100%'}
      {...attr}
      borderRadius={'18px'}
      pos={'relative'}
    >
      {LeftElement ? LeftElement : null}
      {text}
    </Box>
  );
};

export default FormButton;
