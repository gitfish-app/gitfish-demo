import { FC } from 'react';
import AbsoluteButton from '../reuse/AbsoluteButton';
import { useLongPress } from 'use-long-press';

type Props = {
  onOpen: () => void;
};
const DrinkButton: FC<Props> = ({ onOpen }) => {
  const longPressBind = useLongPress(() => {}, {
    cancelOnMovement: true,
    onFinish: () => {
      onOpen();
    },
  });
  return (
    <AbsoluteButton
      {...longPressBind()}
      bottom={'40px'}
      isHorizontalCenter
      zIndex={10}
      filter={'drop-shadow(0px 0px 7px #170E7B);'}
      w={'74px'}
      h={'74px'}
      bgImage={'/assets/mobile-drink_button.png'}
    />
  );
};

export default DrinkButton;