import { extendTheme } from '@chakra-ui/react';
import chakraUiRadio from '../styles/chakraUiRadio';
import reactSpringBottomSheet from '../styles/reactSpringBottomSheet';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        backgroundColor: '#050732',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
      },
      body: {
        fontFamily: ['Montserrat', 'Noto Sans JP', 'sans-serif'].join(','),
      },
      '*:focus-visible, [data-focus-visible]': {
        boxShadow: 'none !important',
      },

      button: {
        '&:disabled': {
          filter: 'brightness(0.7)',
        },
      },
      ...reactSpringBottomSheet,
      ...chakraUiRadio,
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
          filter: 'brightness(0.9)',
        },
        _active: {
          filter: 'brightness(0.9)',
        },
      },
    },
  },
});

export default theme;
