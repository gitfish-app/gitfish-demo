const ACHIEVEMENT_ACTION_TYPE_ENUM = {
  COLLECTION: 'collection',
  GACHA: 'gacha',
  REPOSITORY: 'repository',
} as const;

export const ACHIEVEMENT_ACTION_NAME = {
  [ACHIEVEMENT_ACTION_TYPE_ENUM.COLLECTION]: 'コレクション',
  [ACHIEVEMENT_ACTION_TYPE_ENUM.GACHA]: 'ガチャを引く',
  [ACHIEVEMENT_ACTION_TYPE_ENUM.REPOSITORY]: 'リポジトリを設定する',
};

export type AchievementActionType =
  typeof ACHIEVEMENT_ACTION_TYPE_ENUM[keyof typeof ACHIEVEMENT_ACTION_TYPE_ENUM];

export default ACHIEVEMENT_ACTION_TYPE_ENUM;
