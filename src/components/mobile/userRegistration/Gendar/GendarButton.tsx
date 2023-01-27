import { Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  gendar: 'woman' | 'man';
};

const GendarButton: FC<Props> = ({ gendar }) => {
  return (
    <VStack
      as={'button'}
      w={'146px'}
      bg={'#0E2144'}
      p={'16px'}
      borderRadius={'16px'}
    >
      <Image
        src={`/assets/mobile-user_registration_${gendar}.png`}
        w={'66px'}
      />
      <Text
        fontWeight={'700'}
        fontSize={'14px'}
        lineHeight={'23px'}
        color={'#FFFFFF'}
        textTransform={'capitalize'}
      >
        {gendar}
      </Text>
    </VStack>
  );
};

export default GendarButton;
