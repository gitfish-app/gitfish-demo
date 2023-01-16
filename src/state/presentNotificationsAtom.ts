import { atom } from 'recoil';
import PRESENT_NOTIFICATIONS_ENUM from '../constant/presentNotificationsEnum';

const presentNotificationsAtom = atom({
  key: 'presentNotificationsAtom',
  default: [
    {
      category: PRESENT_NOTIFICATIONS_ENUM.NEW_CHARACTER,
      characterId: '0', // characterIdはデモでは使用しない
    },
    {
      category: PRESENT_NOTIFICATIONS_ENUM.NEW_SKIN,
      skinId: '0', // skinIdはデモでは使用しない
    },
  ],
});

export default presentNotificationsAtom;
