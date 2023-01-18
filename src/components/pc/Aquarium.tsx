import { FC } from 'react';
import Character from '../reuse/Character';
import AbsoluteBox from '../reuse/AbsoluteBox';
import pcAquariumCharacters from '../../mockdata/pcAquariumCharacters';

const AQUARIUM_DECORATION_PADDING = 50;

type Props = {
  aquariumSize: { width: number; height: number };
  openCharacterDetailModal: () => void;
};
const Aquarium: FC<Props> = ({ aquariumSize, openCharacterDetailModal }) => {
  return (
    <AbsoluteBox w={aquariumSize.width} h={aquariumSize.height} bottom={'0'}>
      <AbsoluteBox
        zIndex={'1'}
        display={'block'}
        width={'100%'}
        height={'35px'}
        bottom={aquariumSize.height}
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
        h={aquariumSize.height}
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
                width: aquariumSize.width,
                height: aquariumSize.height - AQUARIUM_DECORATION_PADDING,
              }}
              canSpeak
              openCharacterDetailModal={openCharacterDetailModal}
            />
          );
        })}
      </AbsoluteBox>
    </AbsoluteBox>
  );
};

export default Aquarium;
