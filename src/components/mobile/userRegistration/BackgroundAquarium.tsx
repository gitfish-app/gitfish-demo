import { FC, useEffect, useState } from 'react';
import AbsoluteBox from '../../reuse/AbsoluteBox';
import AquariumBottomDecoration from '../../reuse/AquariumBottomDecoration';

const BackgroundAquarium: FC = () => {
  const [windowHeight, setWindowHeight] = useState(600);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <AbsoluteBox
        zIndex={'1'}
        display={'block'}
        width={'100%'}
        height={'35px'}
        bottom={windowHeight - 80 - 35}
        transition={'bottom 0.5s'}
        backgroundImage={'url(/assets/mobile-home_water_wave.png)'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
      />
      <AbsoluteBox
        zIndex={'1'}
        display={'block'}
        w={'100%'}
        h={windowHeight - 80 - 35}
        bottom={'0'}
        bgColor={'#050732'}
        transition={'height 0.5s'}
      />
      <AquariumBottomDecoration />
    </>
  );
};

export default BackgroundAquarium;
