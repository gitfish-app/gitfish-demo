import { ChakraProvider } from '@chakra-ui/react';

import theme from '../libs/theme';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'devicon/devicon.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
