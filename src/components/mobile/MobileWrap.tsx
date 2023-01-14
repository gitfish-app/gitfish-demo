import { FC, ReactNode } from 'react';
import { Grid, Box } from '@chakra-ui/react';

type Props = {
  isDeepBg?: boolean;
  children: ReactNode;
};
const MobileWrap: FC<Props> = ({ isDeepBg = false, children }) => {
  return (
    <Grid h={'100vh'} placeItems={'center'}>
      <Box
        h={'100%'}
        w={'100%'}
        maxW={'375px'}
        maxH={'812px'}
        bg={isDeepBg ? '#050732' : '#0E2144'}
        pos={'relative'}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default MobileWrap;
