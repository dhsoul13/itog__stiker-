/* eslint-disable no-unused-vars */
export const nameSlice = (name:any) => {
  const firstBukva = name[0];
  if (name.indexOf(' ') > 0) {
    const position = name.indexOf(' ') + 1;
    return `${firstBukva}${name[position]}`;
  }
  return name[0];
};
