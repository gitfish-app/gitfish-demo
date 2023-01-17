import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = { isSelected?: boolean };

const TabSkin: FC<Props> = ({ isSelected = false, ...rest }) => (
  <Box
    {...rest}
    viewBox={'0 0 51 29'}
    as="svg"
    xmlSpace="preserve"
    w={'51px'}
    h={'29px'}
  >
    <path
      d="M17.642 18.956c-2.5.4-5.552.85-8.103.7v-2.7c0-5.903 3.902-10.905 9.204-12.456-2.101 3.002-1.8 9.304-1.1 14.456Z"
      fill={isSelected ? '#D3EDFB' : '#707F95'}
    />
    <path
      d="M19.993 4.75c.7-.75 1.3-.75 2.201-.75.85 0 1.65.1 2.451.25 3.551 2.501 5.952 7.053 6.553 12.255-3.702.4-8.004 1.45-12.455 2.251-.95-7.053-.55-12.155 1.25-14.006Z"
      fill={isSelected ? '#D3EDFB' : '#707F95'}
    />
    <path
      d="M32.349 16.405c-.5-4.452-2.301-8.453-4.952-11.255 4.251 1.951 7.252 6.203 7.453 11.205-.85-.05-1.651-.05-2.502.05Zm9.203 5.702c-3.501 0-7.903 3.702-13.755 3.802-3.552.1-7.353-2.701-10.705-5.703 6.703-1.1 13.856-3.1 18.108-2.7 2 1.75 4.451 3.15 6.352 4.601Z"
      fill={isSelected ? '#D3EDFB' : '#707F95'}
    />
  </Box>
);

export default TabSkin;