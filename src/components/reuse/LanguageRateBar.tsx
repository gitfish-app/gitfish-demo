import { FC } from 'react';
import { Progress } from '@chakra-ui/react';

const SIZE_MAP = {
  sm: '10px',
  md: '13px',
  lg: '20px',
};

type Props = {
  languageColor: string;
  rate: number;
  size?: 'sm' | 'md' | 'lg';
};
const LanguageRateBar: FC<Props> = ({ languageColor, rate, size = 'sm' }) => {
  return (
    <Progress
      h={SIZE_MAP[size]}
      w={'100%'}
      value={rate}
      bgColor={'#050732'}
      borderRadius={'10px'}
      sx={{
        '[role="progressbar"]': {
          backgroundColor: languageColor,
        },
      }}
    />
  );
};

export default LanguageRateBar;
