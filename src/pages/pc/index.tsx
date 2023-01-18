import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import Character from '../../components/pc/Character';

const Aquarium: NextPage = () => {
  const [aquariumWidth, setAquariumWidth] = useState(800);
  const [aquariumHeight, setAquariumHeight] = useState(600);

  return (
    <Box>
      <Box
        pos={'relative'}
        w={aquariumWidth}
        h={aquariumHeight}
        border={'1px solid black'}
      >
        <Character
          characterMoveDistance={{ x: 100, y: 100 }}
          aquariumSize={{ width: aquariumWidth, height: aquariumHeight }}
        />
        <Character
          characterMoveDistance={{ x: 100, y: 100 }}
          aquariumSize={{ width: aquariumWidth, height: aquariumHeight }}
        />
        <Character
          characterMoveDistance={{ x: 100, y: 100 }}
          aquariumSize={{ width: aquariumWidth, height: aquariumHeight }}
        />
      </Box>
    </Box>
  );
};

export default Aquarium;
