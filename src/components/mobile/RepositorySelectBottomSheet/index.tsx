import { FC, useState } from 'react';
import { Box } from '@chakra-ui/react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet as ReactSpringBottomSheet } from 'react-spring-bottom-sheet';
import Repositories from './Repositories';

export type Repository = {
  id: number;
  name: string;
  mainLanguage: string;
  lastUpdate: string;
};

const repositories: Repository[] = [
  {
    id: 0,
    name: '2022_wd2a',
    mainLanguage: 'HTML',
    lastUpdate: 'Oct 29',
  },
  {
    id: 1,
    name: 'gitfish-mobile',
    mainLanguage: 'CSS',
    lastUpdate: 'Oct 27',
  },
  {
    id: 2,
    name: 'gitfish-web',
    mainLanguage: 'JavaScript',
    lastUpdate: 'Oct 27',
  },
  {
    id: 3,
    name: '2023_wd3a',
    mainLanguage: 'TypeScript',
    lastUpdate: 'Oct 27',
  },
  {
    id: 4,
    name: 'liff-starter',
    mainLanguage: 'Dart',
    lastUpdate: 'Oct 27',
  },
  {
    id: 5,
    name: 'bat-fish',
    mainLanguage: 'Rust',
    lastUpdate: 'Oct 27',
  },
];

type Props = {
  isOpenBottomSheet: boolean;
};

const RepositorySelectBottomSheet: FC<Props> = ({ isOpenBottomSheet }) => {
  const [bottomSheetPageCount, setBottomSheetPageCount] = useState(0);
  const incrementPageCount = () => {
    setBottomSheetPageCount((prev) => prev + 1);
  };
  const resetPageCount = () => {
    setBottomSheetPageCount(0);
  };

  const [selectRepositoryIndex, setSelectRepositoryIndex] = useState();

  return (
    <Box as={ReactSpringBottomSheet} open={isOpenBottomSheet}>
      {bottomSheetPageCount === 0 && (
        <Repositories
          incrementPageCount={incrementPageCount}
          repositories={repositories}
          selectRepositoryIndex={selectRepositoryIndex}
          setSelectRepositoryIndex={setSelectRepositoryIndex}
        />
      )}
      {bottomSheetPageCount === 1 && <Box>hoge</Box>}
    </Box>
  );
};

export default RepositorySelectBottomSheet;
