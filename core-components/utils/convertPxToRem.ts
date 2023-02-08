export const convertPxToRem = (pxValue: number, rootFontSize?: number) => {
  return `${pxValue / (rootFontSize || 16)}rem`;
};
