import { ComponentProps, FC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  text: String;
} & Omit<ComponentProps<typeof Button>, 'children'>;
const DefaultButton: FC<Props> = ({ text, ...arg }) => {
  return (
    <Button
      w={'100%'}
      h={'55px'}
      borderRadius={'18px'}
      fontWeight={'bold'}
      bgColor={'#006EFB'}
      _active={{ bgColor: '#006EFB' }}
      _hover={{ bgColor: '#006EFB' }}
      color={'white'}
      {...arg}
    >
      {text}
    </Button>
  );
};

export default DefaultButton;
