import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import Fish from '../../components/pc/Character';

const Aquarium: NextPage = () => {
  const [aquariumWidth, setAquariumWidth] = useState(800);
  const [aquariumHeight, setAquariumHeight] = useState(600);

  return (
    <div>
      <Box
        pos={'relative'}
        w={aquariumWidth}
        h={aquariumHeight}
        border={'1px solid black'}
      >
        <Fish
          characterSize={{ width: 100, height: 100 }}
          characterMoveDistance={{ x: 100, y: 100 }}
          aquariumSize={{ width: aquariumWidth, height: aquariumHeight }}
        />
      </Box>
      <button onClick={() => setAquariumWidth((width) => width + 100)}>
        Change width
      </button>
      <button onClick={() => setAquariumHeight((height) => height + 100)}>
        Change height
      </button>
    </div>
  );
};

export default Aquarium;
