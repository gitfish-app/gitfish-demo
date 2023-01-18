import { useState, useEffect, FC, useRef } from 'react';
import AbsoluteBox from '../reuse/AbsoluteBox';

type Props = {
  characterSize?: { width: number; height: number };
  characterMoveDistance: { x: number; y: number };
  aquariumSize: { width: number; height: number };
};
const Character: FC<Props> = ({
  characterSize = {
    width: 122,
    height: 80,
  },
  characterMoveDistance,
  aquariumSize,
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
        Math.random() * characterMoveDistance.x - characterMoveDistance.x / 2;
      let newY =
        Math.random() * characterMoveDistance.y - characterMoveDistance.y / 2;

      if (position.x + newX < 0) {
        newX = Math.abs(newX);
      }
      if (position.y + newY < 0) {
        newY = Math.abs(newY);
      }

      if (position.x + newX + characterSize.width > aquariumSize.width) {
        newX = -Math.abs(newX);
      }
      if (position.y + newY + characterSize.height > aquariumSize.height) {
        newY = -Math.abs(newY);
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
    }, 2000);

    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <AbsoluteBox
      as={'img'}
      ref={characterRef}
      display={'block'}
      src={'/assets/demo-mobile_moving_fish_n2.png'}
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
