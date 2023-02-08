import { convertPxToRem } from 'link-to-core-component';

import { colors } from '../../../';

import { AvailableButtonVariant, ButtonProps } from './Button.types';

export const getVariantStyle = (variantList: ButtonProps['variantList']) => {
  const sortedVariantList = variantList.sort((firstVariant, secondVariant) => {
    return (
      AvailableButtonVariant.indexOf(firstVariant) -
      AvailableButtonVariant.indexOf(secondVariant)
    );
  });

  let variantCss = '';
  sortedVariantList.forEach((variant) => {
    if (['primary', 'secondary', 'tertiary'].includes(variant)) {
      variantCss += `
          background: var(--btn-color-main);
          color: white;
          
          &:hover:not(disabled, [disabled]),
          &:focus:not(disabled, [disabled]) {
            color: var(--btn-color-main);
            background: white;
          }
        `;
    }
    switch (variant) {
      case 'secondary':
        variantCss += `
            --btn-color-main: ${colors.secondary};
          `;
        break;
      case 'tertiary':
        variantCss += `
            --btn-color-main: ${colors.tertiary};
          `;
        break;
      case 'ghost':
        variantCss += `
            background: transparent;
            color: var(--btn-color-main);
            border-color: currentColor;
            
            &:hover:not(disabled, [disabled]),
            &:focus:not(disabled, [disabled]) {
              color: white;
              background: var(--btn-color-main);
              border-color: var(--btn-color-main);
            }
          `;
        break;
      case 'highlighted':
        variantCss += `
            font-weight: 700;
          `;
        break;
      case 'buy-button':
        variantCss += `
            @media screen and (max-width: 1023px) {
              font-size: ${convertPxToRem(14)};
              line-height: ${convertPxToRem(32)};
              padding: 2px 30px;
              min-width: 140px;
            }
          `;
        break;
    }
  });
  return variantCss;
};

export const getSizeStyle = (size: ButtonProps['size']) => {
  let sizeCss = '';
  switch (size) {
    case 's':
      sizeCss += `
        @media screen and (min-width: 1024px) {
          padding: 2px 38px;
          border-radius: 40px;
        }
      `;
      break;
    case 'l':
      sizeCss += `
        @media screen and (min-width: 1024px) {
          padding: 9px 58px;
          border-radius: 24px;
        }
      `;
      break;
  }
  return sizeCss;
};

export const getImplementationCustomStyle = (
  variantList: ButtonProps['variantList'],
  size: ButtonProps['size'],
) => `
  --btn-color-main: ${colors.primary};
  border: 2px solid var(--btn-color-main, currentColor);
  display: inline-block;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-out;
  
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 1023px) {
    min-width: 180px;
    line-height: 2;
    font-weight: 700;
    font-size: ${convertPxToRem(16)};
    padding: 2px 43px;
    border-radius: 64px;
  }
  
  @media screen and (min-width: 1024px) {
    font-weight: 500;
    font-size: ${convertPxToRem(18)};
    line-height: 1.78;
    padding: 6px 50px;
    border-radius: 24px;
  }
  
  ${getVariantStyle(variantList)}
  
  ${size ? getSizeStyle(size) : ''}
  
  &.btn--is-disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
