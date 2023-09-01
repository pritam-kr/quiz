export const zeroBeforeTen = (number) => {
  return number && number < 10 ? `0${number ?? 0}` : number;
};
