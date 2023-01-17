import { FC, useState } from 'react';
import { Box } from '@chakra-ui/react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet as ReactSpringBottomSheet } from 'react-spring-bottom-sheet';
import Repositories from './Repositories';
import Result from './Result';
import repositories from '../../../mockdata/repositories';

type Props = {
  isOpenBottomSheet: boolean;
  closeBottomSheet: () => void;
};

const RepositorySelectBottomSheet: FC<Props> = ({
  isOpenBottomSheet,
  closeBottomSheet,
}) => {
  const [bottomSheetPageCount, setBottomSheetPageCount] = useState(0);
  const [sheetTopMarginValue, setSheetTopMarginValue] = useState(80);
  const [selectRepositoryId, setSelectRepositoryId] = useState<string>();

  const incrementPageCount = () => {
    setSheetTopMarginValue(180);
    setBottomSheetPageCount((prev) => prev + 1);
  };
  const resetPageCount = () => {
    setBottomSheetPageCount(0);
  };

  return (
    <Box
      as={ReactSpringBottomSheet}
      open={isOpenBottomSheet}
      color={'white'}
      onDismiss={closeBottomSheet}
      sx={{
        '[data-rsbs-overlay]': {
          height: `calc(100% - ${sheetTopMarginValue}px)`,
          transition: 'height 0.4s',
        },
      }}
    >
      {bottomSheetPageCount === 0 && (
        <Repositories
          incrementPageCount={incrementPageCount}
          repositories={repositories}
          selectRepositoryId={selectRepositoryId}
          setSelectRepositoryId={setSelectRepositoryId}
        />
      )}
      {bottomSheetPageCount === 1 && (
        <Result
          selectRepository={repositories.find(
            (repository) => repository.id === selectRepositoryId,
          )}
          characterId={'0'}
          resetPageCount={resetPageCount}
          closeBottomSheet={closeBottomSheet}
        />
      )}
    </Box>
  );
};

export default RepositorySelectBottomSheet;