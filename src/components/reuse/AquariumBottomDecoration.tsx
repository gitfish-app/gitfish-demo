import { FC } from 'react';
import AbsoluteImage from './AbsoluteImage';

const AquariumBottomDecoration: FC = () => {
  return (
    <>
      <AbsoluteImage
        src={'/assets/mobile-bubbles.png'}
        h={'134px'}
        bottom={'95px'}
        zIndex={5}
        isHorizontalCenter
      />
      <AbsoluteImage
        src={'/assets/mobile-bottom_decoration.png'}
        zIndex={5}
        bottom={0}
      />
    </>
  );
};

export default AquariumBottomDecoration;
