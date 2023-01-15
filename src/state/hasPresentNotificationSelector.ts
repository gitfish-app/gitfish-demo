import { selector } from 'recoil';
import presentNotificationsAtom from './presentNotificationsAtom';

const hasPresentNotification = selector({
  key: 'hasPresentNotification',
  get: ({ get }) => {
    const presentNotifications = get(presentNotificationsAtom);

    return presentNotifications.length > 0;
  },
});

export default hasPresentNotification;
