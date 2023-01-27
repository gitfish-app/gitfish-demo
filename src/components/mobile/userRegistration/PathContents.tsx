import { FC } from 'react';
import { PageName } from '../../../pages/mobile/user-registration/[pageName]';

import Gendar from './Gendar/Index';
import Weight from './Weight/Index';
import Height from './Height/Index';
import Age from './Age/Index';
import DailyGoal from './DailyGoal/Index';
import ReminderTime from './ReminderTime/Index';

type Props = {
  pageName: PageName;
};

const pathToComponent = {
  gendar: <Gendar />,
  weight: <Weight />,
  height: <Height />,
  age: <Age />,
  'daily-goal': <DailyGoal />,
  'reminder-time': <ReminderTime />,
};

const PathContents: FC<Props> = ({ pageName }) => {
  return pathToComponent[pageName];
};

export default PathContents;
