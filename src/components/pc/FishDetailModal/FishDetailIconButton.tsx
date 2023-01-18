import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  text?: string;
  icon: string;
  size: 'wide' | 'square';
  bgColor: string;
  href?: string;
};

const FishDetailIconButton: FC<Props> = ({
  text,
  icon,
  size,
  bgColor,
  href,
}) => {
  return (
    <Box as={'a'} href={href}>
      <Box
        as={'button'}
        w={size === 'wide' ? '230px' : '50px'}
        h={size === 'wide' ? '55px' : '50px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgColor={bgColor}
        borderRadius={size === 'wide' ? '18px' : '10px'}
        gap={'8px'}
      >
        <Image src={icon} />
        {size === 'wide' ? (
          <Text fontSize={'20px'} fontWeight={'bold'} color={'#D3EDFB'}>
            {text}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
};

export default FishDetailIconButton;
