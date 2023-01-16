import { FC } from 'react';
import AbsoluteButton from '../reuse/AbsoluteButton';
import { useLongPress } from 'use-long-press';
import sleep from '../../util/sleep';

type Props = {
  onOpen: () => void;
};
const DrinkButton: FC<Props> = ({ onOpen }) => {
  const longPressBind = useLongPress(() => {}, {
    cancelOnMovement: true,
    onFinish: async () => {
      await sleep(0.1);
      onOpen();
    },
  });
  return (
    <AbsoluteButton
      {...longPressBind()}
      borderRadius={'15px'}
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
