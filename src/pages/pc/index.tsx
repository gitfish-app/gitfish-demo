import { NextPage } from 'next';
import { useState } from 'react';
import Character from '../../components/pc/Character';
import PcWrap from '../../components/pc/PcWrap';
import AbsoluteBox from '../../components/reuse/AbsoluteBox';
import AbsoluteImage from '../../components/reuse/AbsoluteImage';
import pcAquariumCharacters from '../../mockdata/pcAquariumCharacters';
import AbsoluteButton from '../../components/reuse/AbsoluteButton';

const DEMO_MAX_WIDTH = 1280;
const DEMO_MAX_HEIGHT = 832;
const AQUARIUM_DECORATION_PADDING = 50;

const Aquarium: NextPage = () => {
  const [aquariumWidth, setAquariumWidth] = useState(DEMO_MAX_WIDTH);
  const [aquariumHeight, setAquariumHeight] = useState(
    DEMO_MAX_HEIGHT - 85 - 35,
  );

  return (
    <PcWrap maxW={DEMO_MAX_WIDTH} maxH={DEMO_MAX_HEIGHT}>
      <AbsoluteBox w={aquariumWidth} h={aquariumHeight} bottom={'0'}>
        <AbsoluteBox
          zIndex={'1'}
          display={'block'}
          width={'100%'}
          height={'35px'}
          bottom={aquariumHeight}
          transition={'bottom 0.5s'}
          backgroundImage={'url(/assets/pc-home_water_wave.png)'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
        />
        <AbsoluteBox
          position={'absolute'}
          zIndex={'1'}
          display={'block'}
          w={'100%'}
          h={aquariumHeight}
          bottom={'0'}
          bgColor={'#050732'}
          transition={'height 0.5s'}
        >
          {pcAquariumCharacters.map((character, index) => {
            return (
              <Character
                key={character.characterImageFileName}
                moveDelay={index * 100}
                characterMoveDistance={character.characterMoveDistance}
                characterSize={character.characterSize}
                characterImageFileName={character.characterImageFileName}
                aquariumSize={{
                  width: aquariumWidth,
                  height: aquariumHeight - AQUARIUM_DECORATION_PADDING,
                }}
              />
            );
          })}
        </AbsoluteBox>
      </AbsoluteBox>
      <AbsoluteButton
        top={'40px'}
        right={'40px'}
        w={'70px'}
        h={'70px'}
        bgImage={'/assets/system-button_hamburger.png'}
        zIndex={'10'}
        onClick={() => {}}
        borderRadius={'11px'}
      />
      <AbsoluteImage
        src={'/assets/system-logo.svg'}
        zIndex={5}
        top={'30px'}
        left={'40px'}
      />
      <AbsoluteImage
        src={'/assets/pc-home_bottom_decoration.png'}
        zIndex={5}
        bottom={0}
      />
    </PcWrap>
  );
};

export default Aquarium;
