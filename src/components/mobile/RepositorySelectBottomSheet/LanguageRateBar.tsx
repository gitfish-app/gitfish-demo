import { FC } from 'react';
import { Progress } from '@chakra-ui/react';

type Props = {
  languageColor: string;
  rate: number;
};
const LanguageRateBar: FC<Props> = ({ languageColor, rate }) => {
  return (
    <Progress
      h={'10px'}
      w={'100%'}
      value={80}
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
