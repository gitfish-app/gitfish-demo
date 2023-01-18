import { useState, useEffect, FC, useRef } from 'react';
import randRange from '../../util/randRange';
import AbsoluteBox from '../reuse/AbsoluteBox';

type Props = {
  characterSize?: { width: number; height: number };
  characterMoveDistance: { x: number; y: number };
  aquariumSize: { width: number; height: number };
  characterImageFileName: string;
};
const Character: FC<Props> = ({
  characterSize = {
    width: 122,
    height: 80,
  },
  characterMoveDistance,
  aquariumSize,
  characterImageFileName,
}) => {
  const characterRef = useRef<HTMLImageElement>(null);

  const [position, setPosition] = useState({
    x: (aquariumSize.width - characterSize.width) / 2,
    y: (aquariumSize.height - characterSize.height) / 2,
  });
  const [isRightDirection, setIsRightDirection] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newX =
        Math.random() * 10 < 5
          ? randRange(10, characterMoveDistance.x)
          : randRange(10, characterMoveDistance.x) * -1;
      let newY =
        Math.random() * 10 < 5
          ? randRange(10, characterMoveDistance.y)
          : randRange(10, characterMoveDistance.y) * -1;

      if (position.x + newX < 0) {
        newX = newX * -1;
      }
      if (position.y + newY < 0) {
        newY = newY * -1;
      }

      if (position.x + newX + characterSize.width > aquariumSize.width) {
        newX = newX * -1;
      }
      if (position.y + newY + characterSize.height > aquariumSize.height) {
        newY = newY * -1;
      }

      if (newX > 0) {
        setIsRightDirection(true);
      } else {
        setIsRightDirection(false);
      }

      console.log([newX, newY]);

      setPosition({
        x: position.x + newX,
        y: position.y + newY,
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <AbsoluteBox
      as={'img'}
      ref={characterRef}
      display={'block'}
      src={`/assets/${characterImageFileName}`}
      transition={'left 2000ms linear, top 2000ms linear'}
      left={position.x}
      top={position.y}
      transform={isRightDirection ? 'scaleX(-1)' : 'scaleX(1)'}
      width={`${characterSize.width}px`}
      height={`${characterSize.height}px`}
    />
  );
};

export default Character;
