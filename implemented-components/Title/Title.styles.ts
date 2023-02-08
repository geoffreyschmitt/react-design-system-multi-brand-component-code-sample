import { convertPxToRem } from 'link-to-core-component';
import { colors } from '../../..';
import { AvailableVariantListType } from './Title.types';

const hasVariant = (
  variantList: AvailableVariantListType[] | null,
  variantName: AvailableVariantListType,
) => variantList?.length && variantList.includes(variantName);

const isThankYouCustomStyle = `
    font-weight: 900;
    color: ${colors.secondary};
    position: relative;
    z-index: 0;
    line-height: 1;
    &:after {
      content: attr(data-text);
      -webkit-text-stroke: 8px #FFF;
      text-shadow: 0px 4px 4px rgba(0,0,0,0.3);
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    
    @media(max-width: 767px) {
      font-size: ${convertPxToRem(32)};
    }
    @media(min-width: 768px) {
      font-size: ${convertPxToRem(60)};
    }
  `;

export const getImplementationCustomStyle = ({
  variantList,
}: {
  variantList?: AvailableVariantListType[] | null;
}) => `
    ${(() => {
      if (hasVariant(variantList, 'is-thank-you')) {
        return isThankYouCustomStyle;
      } else {
        return `
          font-weight: ${
            hasVariant(variantList, 'is-highlighted') ? '500' : '700'
          };
   
          ${(() => {
            if (hasVariant(variantList, 'primary')) {
              return `color: ${colors.primary};`;
            } else if (hasVariant(variantList, 'primary-darker')) {
              return `color: ${colors.primaryDark};`;
            } else if (hasVariant(variantList, 'secondary')) {
              return `color: ${colors.secondary};`;
            }
            return '';
          })()}
      
          @media(max-width: 767px) {
            font-size: ${
              hasVariant(variantList, 'has-lower-mobile-font-size')
                ? convertPxToRem(18)
                : convertPxToRem(24)
            };
            line-height: ${
              hasVariant(variantList, 'has-lower-mobile-font-size')
                ? '1.778'
                : '1.333'
            };
          }
          @media(min-width: 768px) {
            font-size: ${(() => {
              if (hasVariant(variantList, 'has-bigger-desktop-font-size')) {
                return convertPxToRem(40);
              } else if (
                hasVariant(variantList, 'has-lower-desktop-font-size')
              ) {
                return convertPxToRem(24);
              }
              return convertPxToRem(32);
            })()};
            line-height: ${convertPxToRem(32)};
          }
        `;
      }
    })()}
  `;
