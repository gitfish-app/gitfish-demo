import { Modal, ModalContent } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import AbsoluteButton from '../reuse/AbsoluteButton';

type Props = {} & Omit<ComponentProps<typeof Modal>, 'children'>;

const DrinkModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal {...{ isOpen, onClose }}>
      <ModalContent
        p={'0'}
        m={'0'}
        borderRadius={'0'}
        w={'100%'}
        h={'100%'}
        bgColor={'#050732'}
      >
        <AbsoluteButton
          onClick={onClose}
          top={'12px'}
          right={'20px'}
          w={'46px'}
          h={'46px'}
          bgImage={'/assets/system-button-close.png'}
        />
      </ModalContent>
    </Modal>
  );
};

export default DrinkModal;
