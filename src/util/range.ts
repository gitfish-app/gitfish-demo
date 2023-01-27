/**
 *
 * @param num 作成する配列の大きさ ex: 3
 * @returns 完成したレンジ配列 ex: [0,1,2]
 */
export const range = (num: number) => {
  return [...Array(num)].map((_, i) => i);
};
