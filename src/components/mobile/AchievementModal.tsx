import { Modal, ModalOverlay } from '@chakra-ui/react';
import { FC, ComponentProps } from 'react';
import AchievementModalLayout from './AchievementModalLayout';

type Props = {
  achievementType: 'present' | 'levelUp' | 'completeDailyGoal';
} & Omit<ComponentProps<typeof Modal>, 'children'>;

const AchievementModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal {...{ isOpen, onClose }}>
      <ModalOverlay />
      <AchievementModalLayout />
    </Modal>
  );
};

export default AchievementModal;
