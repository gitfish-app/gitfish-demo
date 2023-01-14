import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
      },
    },
  },
  semanticTokens: {
    colors: {
      text: '#16161D',
      white: '#D3EDFB',
    },
  },
});

export default theme;
