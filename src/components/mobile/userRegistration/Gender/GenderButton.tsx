import { Image, Text, VStack } from '@chakra-ui/react';
import { FC, useState } from 'react';

type Props = {
  gender: 'woman' | 'man';
};

const GenderButton: FC<Props> = ({ gender }) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <VStack
      as={'button'}
      w={'146px'}
      bg={'#0E2144'}
      p={'16px'}
      borderRadius={'16px'}
      border={selected ? '1px solid #006EFB' : null}
      onFocus={() => setSelected(true)}
      onBlur={() => setSelected(false)}
    >
      <Image
        src={`/assets/mobile-user_registration_${gender}.png`}
        w={'66px'}
      />
      <Text
        fontWeight={'700'}
        fontSize={'14px'}
        lineHeight={'23px'}
        color={'#FFFFFF'}
        textTransform={'capitalize'}
      >
        {gender}
      </Text>
    </VStack>
  );
};

export default GenderButton;
