import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import darken from '../../util/characterColorDarkenStyle';

type Props = { mainColor?: string; size?: 's' | 'm' | 'l' } & Omit<
  ComponentProps<typeof Box>,
  'children'
>;

const sizeList = {
  s: {
    width: '40px',
    height: '40px',
  },
  m: {
    width: '120px',
    height: '80px',
  },
  l: {
    width: '162px',
    height: '106px',
  },
};

const Porcupinefish: FC<Props> = ({
  mainColor = '#898989',
  size = 'm',
  ...rest
}) => (
  <Box
    {...sizeList[size]}
    {...rest}
    viewBox={'0 0 122 80'}
    as="svg"
    xmlSpace="preserve"
  >
    <Box
      as="path"
      d="m84.928 38.703 12.397-5.19c1.225-.504 2.666.145 2.738 1.226L101 52.036c.072 1.08-1.225 1.874-2.45 1.585l-12.685-2.955c-.72-.144-1.297-.72-1.297-1.369l-.649-9.153c-.072-.577.288-1.153 1.01-1.441Z"
      fill={mainColor}
      {...darken}
    />
    <Box
      as="path"
      d="M95.667 36.397H89.54c-.72-6.199-3.17-11.892-6.918-16.505l4.324-4.324c.432-.433.432-1.153 0-1.514l-3.82-3.748a1.131 1.131 0 0 0-1.586 0l-4.324 4.325a33 33 0 0 0-16.648-6.847V1.658c0-.577-.505-1.081-1.081-1.081H54.08C53.504.577 53 1.08 53 1.657v6.127a32.999 32.999 0 0 0-16.649 6.847l-4.324-4.325a1.131 1.131 0 0 0-1.586 0l-3.82 3.748c-.432.433-.432 1.153 0 1.514l4.325 4.324c-3.748 4.685-6.198 10.306-6.919 16.505h-6.126c-.577 0-1.081.504-1.081 1.08v5.334c0 .577.504 1.081 1.08 1.081h6.127a32.484 32.484 0 0 0 6.919 16.576l-4.324 4.253c-.433.432-.433 1.153 0 1.513l3.82 3.748a1.131 1.131 0 0 0 1.585 0l4.324-4.252c4.685 3.675 10.45 6.198 16.721 6.847v6.054c0 .576.505 1.08 1.081 1.08h5.406c.576 0 1.08-.504 1.08-1.08v-6.054A33.245 33.245 0 0 0 77.36 65.73l4.325 4.252a1.131 1.131 0 0 0 1.585 0l3.82-3.748c.432-.432.432-1.153 0-1.513l-4.468-4.18a32.483 32.483 0 0 0 6.918-16.577h6.127c.576 0 1.08-.505 1.08-1.081V37.55c0-.649-.504-1.153-1.08-1.153Z"
      fill={mainColor}
    />
    <Box
      as="path"
      d="M82.694 60.54c2.522-3.171 4.396-6.775 5.621-10.666h-62.99c1.224 3.891 3.17 7.567 5.62 10.666l-4.323 4.253c-.433.432-.433 1.153 0 1.513l3.82 3.748a1.131 1.131 0 0 0 1.585 0l4.324-4.252c4.685 3.675 10.45 6.198 16.721 6.846v6.054c0 .577.505 1.081 1.081 1.081h5.406c.576 0 1.08-.504 1.08-1.08v-6.055a33.245 33.245 0 0 0 16.721-6.846l4.325 4.252a1.131 1.131 0 0 0 1.585 0l3.82-3.748c.432-.432.432-1.153 0-1.513l-4.396-4.253Z"
      fill="#E2E1D4"
    />
    <Box
      as="path"
      d="M32.315 42.09a4.598 4.598 0 0 0 4.613-4.613c0-2.522-2.09-4.612-4.613-4.612a4.598 4.598 0 0 0-4.612 4.612C27.63 40 29.72 42.09 32.315 42.09Z"
      fill="#fff"
    />
    <Box
      as="path"
      d="M32.315 40.216c1.514 0 2.811-1.225 2.811-2.739 0-1.513-1.225-2.738-2.81-2.738-1.514 0-2.812 1.225-2.812 2.739 0 1.513 1.298 2.738 2.811 2.738Z"
      fill="#231815"
    />
    <Box
      as="path"
      d="M41.612 42.09a4.598 4.598 0 0 0 4.613-4.613c0-2.522-2.09-4.612-4.613-4.612A4.598 4.598 0 0 0 37 37.477c-.072 2.523 2.018 4.613 4.612 4.613Z"
      fill="#fff"
    />
    <Box
      as="path"
      d="M41.613 40.216c1.513 0 2.81-1.225 2.81-2.739 0-1.513-1.225-2.738-2.81-2.738-1.514 0-2.811 1.225-2.811 2.739 0 1.513 1.297 2.738 2.81 2.738Z"
      fill="#231815"
    />
    <Box
      as="path"
      d="M37.144 41.081c-2.739 0-5.045 2.234-5.045 4.973s2.234 4.973 5.045 4.973c2.739 0 5.045-2.234 5.045-4.973-.072-2.739-2.306-4.973-5.045-4.973Zm0 5.766a.8.8 0 0 1-.793-.793.8.8 0 0 1 .793-.793.8.8 0 0 1 .793.793.8.8 0 0 1-.793.793ZM63.018 40l6.126.577c.577.072 1.01.576.865 1.153l-2.09 12.036c-.072.576-.649.937-1.225.793l-6.126-1.514-2.811-7.495L63.018 40Z"
      fill={mainColor}
      {...darken}
    />
  </Box>
);

export default Porcupinefish;
