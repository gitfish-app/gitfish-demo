import { FC, ReactNode, ComponentProps } from 'react';
import { Grid, Box, ChakraComponent } from '@chakra-ui/react';

type Props = {
  isDeepBg?: boolean;
  children: ReactNode;
} & ComponentProps<ChakraComponent<'div'>>;
const PcWrap: FC<Props> = ({ isDeepBg = false, maxW, maxH, children }) => {
  return (
    <Grid h={'100vh'} placeItems={'center'}>
      <Box
        h={'100%'}
        w={'100%'}
        maxW={maxW || '1280px'}
        maxH={maxH || '832px'}
        bg={isDeepBg ? '#050732' : '#0E2144'}
        pos={'relative'}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default PcWrap;
