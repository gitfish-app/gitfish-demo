import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import AbsoluteButton from '../../reuse/AbsoluteButton';

type Props = {
  onClick: () => void;
  iconUrl: string;
  buttonMessage: string;
  disabled?: boolean;
};
const Button: FC<Props> = ({
  onClick,
  iconUrl,
  buttonMessage,
  disabled = false,
}) => {
  return (
    <AbsoluteButton
      isHorizontalCenter
      bottom={'70px'}
      w={'315px'}
      h={'55px'}
      borderRadius={'18px'}
      bgColor={'#006EFB'}
      fontWeight={'bold'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'8px'}
      onClick={onClick}
      disabled={disabled}
    >
      <Box
        as={'span'}
        display={'inline-block'}
        w={'30px'}
        h={'30px'}
        bgImage={iconUrl}
      />
      {buttonMessage}
    </AbsoluteButton>
  );
};

export default Button;
