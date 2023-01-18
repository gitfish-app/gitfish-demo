import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { useState, useEffect, FC } from 'react';
import randRange from '../../util/randRange';
import AbsoluteBox from './AbsoluteBox';
import AbsoluteButton from './AbsoluteButton';
import AbsoluteImage from './AbsoluteImage';

type Props = {
  characterSize?: { width: number; height: number };
  characterMoveDistance: { x: number; y: number };
  aquariumSize: { width: number; height: number };
  characterImageFileName: string;
  moveDelay?: number;
  canSpeak?: boolean;
  openCharacterDetailModal?: () => void;
};
const Character: FC<Props> = ({
  characterSize = {
    width: 122,
    height: 80,
  },
  characterMoveDistance,
  aquariumSize,
  characterImageFileName,
  moveDelay = 0,
  canSpeak = false,
  openCharacterDetailModal,
}) => {
  const initialPosition = {
    x: (aquariumSize.width - characterSize.width) * Math.random(),
    y: (aquariumSize.height - characterSize.height) * Math.random(),
  };

  const [position, setPosition] = useState(initialPosition);
  const [isRightDirection, setIsRightDirection] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newX =
        Math.random() * 10 < 5
          ? randRange(10, characterMoveDistance.x)
          : randRange(10, characterMoveDistance.x) * -1;

      const outOfScreenLeft = position.x + newX < 0;
      const outOfScreenRight =
        position.x + newX + characterSize.width > aquariumSize.width;
      if (outOfScreenLeft || outOfScreenRight) newX *= -1;

      let newY =
        Math.random() * 10 < 5
          ? randRange(10, characterMoveDistance.y)
          : randRange(10, characterMoveDistance.y) * -1;

      const outOfScreenTop = position.y + newY < 0;
      const outOfScreenBottom =
        position.y + newY + characterSize.height > aquariumSize.height;

      if (outOfScreenTop || outOfScreenBottom) newY *= -1;

      if (newX > 0) {
        setIsRightDirection(true);
      } else {
        setIsRightDirection(false);
      }

      setPosition({
        x: position.x + newX,
        y: position.y + newY,
      });
    }, 2000 + moveDelay);

    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <AbsoluteButton
      transition={'left 2000ms linear, top 2000ms linear'}
      left={position.x}
      top={position.y}
      w={'fit-content'}
      h={'fit-content'}
      onClick={canSpeak ? openCharacterDetailModal : undefined}
      _hover={{
        zIndex: '1000',
        '& > div': {
          display: 'block',
        },
      }}
    >
      <Box
        as={'img'}
        display={'block'}
        src={`/assets/${characterImageFileName}`}
        transform={isRightDirection ? 'scaleX(-1)' : 'scaleX(1)'}
        width={`${characterSize.width}px`}
        height={`${characterSize.height}px`}
        pointerEvents={'none'}
      />
      {canSpeak && (
        <AbsoluteBox
          display={'none'}
          bottom={'calc(100% + 20px)'}
          px={'32px'}
          py={'24px'}
          bgColor={'#0E2144'}
          border={'3px solid #D3EDFB'}
          isHorizontalCenter
          borderRadius={'30px'}
        >
          <VStack alignItems={'flex-start'} gap={'8px'}>
            <Text
              whiteSpace={'nowrap'}
              color={'#D3EDFB'}
              fontSize={'25px'}
              fontWeight={'bold'}
            >
              GITFISH
            </Text>
            <Text whiteSpace={'nowrap'} color={'#707F95'} fontWeight={'medium'}>
              30 commits
            </Text>
            {/* プログレスバー */}
            <HStack minW={'145px'} h={'26px'} bgColor={'tomato'}></HStack>
          </VStack>
          <AbsoluteImage
            src={'/assets/system-speech_bubble_triangle.svg'}
            bottom={'-14px'}
            isHorizontalCenter
          />
        </AbsoluteBox>
      )}
    </AbsoluteButton>
  );
};

export default Character;
