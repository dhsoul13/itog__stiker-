export const PriceSlice = (number: number): string => {
  const numberString = String(number);
  const numberEnd = numberString.split('').slice(-3);
  const numberStart = numberString.split('').slice(0, numberString.length - 3);
  const string = `${numberStart.join('')} ${numberEnd.join('')}P`;
  return string;
};
