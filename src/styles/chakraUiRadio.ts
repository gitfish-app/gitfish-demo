const chakraUiRadio = {
  'span.chakra-radio__control': {
    borderWidth: '0.5px',
    '&[data-checked]': {
      backgroundColor: 'white',
      '&::before': {
        width: '10px',
        height: '10px',
        borderRadius: '0',
        backgroundImage: 'url(/assets/mobile-radio_icon.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
  },
};

export default chakraUiRadio;
