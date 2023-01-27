import { FC } from 'react';
import AbsoluteBox from '../../reuse/AbsoluteBox';

type Props = {
  title: String;
};
const Title: FC<Props> = ({ title }) => {
  return (
    <AbsoluteBox
      as={'h2'}
      top={'150px'}
      zIndex={'10'}
      fontWeight={'600'}
      fontSize={'24px'}
      color={'#D3EDFB'}
      whiteSpace={'nowrap'}
      isHorizontalCenter
    >
      {title}
    </AbsoluteBox>
  );
};

export default Title;
