import { atom } from 'recoil';

// NOTE: 必要に応じで全て変えてください

type UserRegistration = {
  gender: 'woman' | 'man';
  weight: number;
  height: number;
  age: number;
  dailyGoal: number;
  reminder: Reminder;
};

type Reminder = {
  startActiveTime: `${string}:${string}`;
  endActiveTime: `${string}:${string}`;
  interval: number;
};

const userRegistrationAtom = atom<UserRegistration>({
  key: 'userRegistrationAtom',
  default: null,
});

export default userRegistrationAtom;
