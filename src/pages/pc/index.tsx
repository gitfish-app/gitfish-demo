import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import Fish from '../../components/pc/Character';
import FishDetailModal from '../../components/pc/FishDetailModal/FishDetailModal';
import FishPopover from '../../components/pc/FishPopover/FishPopover';

const Aquarium: NextPage = () => {
  const [aquariumWidth, setAquariumWidth] = useState(800);
  const [aquariumHeight, setAquariumHeight] = useState(600);

  return (
    <Box bgColor={'#050732'}>
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
        <Box pos={'absolute'}>
          <FishPopover
            fishName="test"
            commitCount={30}
            mainLanguage={'JavaScript'}
            languagePercentage={50}
          />
        </Box>
      </Box>
      <button onClick={() => setAquariumWidth((width) => width + 100)}>
        Change width
      </button>
      <button onClick={() => setAquariumHeight((height) => height + 100)}>
        Change height
      </button>
      <FishDetailModal />
    </Box>
  );
};

export default Aquarium;
