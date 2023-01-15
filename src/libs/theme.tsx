import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        margin: '0',
        padding: '0',
      },
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
  components: {
    Button: {
      baseStyle: {
        _hover: {
          opacity: '0.9',
        },
        _active: {
          opacity: '0.9',
        },
      },
    },
  },
});

export default theme;
