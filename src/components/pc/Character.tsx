import { useState, useEffect, FC, useRef } from 'react';
import randRange from '../../util/randRange';
import AbsoluteBox from '../reuse/AbsoluteBox';

type Props = {
  characterSize?: { width: number; height: number };
  characterMoveDistance: { x: number; y: number };
  aquariumSize: { width: number; height: number };
  characterImageFileName: string;
  moveDelay?: number;
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
}) => {
  const characterRef = useRef<HTMLImageElement>(null);

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
      let newY =
        Math.random() * 10 < 5
          ? randRange(10, characterMoveDistance.y)
          : randRange(10, characterMoveDistance.y) * -1;

      const outOfScreenTop = position.y + newY < 0;
      const outOfScreenBottom =
        position.y + newY + characterSize.height > aquariumSize.height;
      const outOfScreenLeft = position.x + newX < 0;
      const outOfScreenRight =
        position.x + newX + characterSize.width > aquariumSize.width;

      if (
        outOfScreenTop ||
        outOfScreenBottom ||
        outOfScreenLeft ||
        outOfScreenRight
      ) {
        newY = newY * -1;
      }

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
