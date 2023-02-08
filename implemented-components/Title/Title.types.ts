import { TitleProps as CoreTitleProps } from 'link-to-core-component';
import { SharedComponentsProps } from '../../..';

export const AvailableVariantList = [
  'primary',
  'primary-darker',
  'secondary',
  'is-highlighted',
  'is-thank-you',
  'has-lower-mobile-font-size',
  'has-lower-desktop-font-size',
  'has-bigger-desktop-font-size',
] as const;
export type AvailableVariantListType = typeof AvailableVariantList[number];

export type TitleProps = CoreTitleProps &
  SharedComponentsProps & {
    /**
     * Title content variants
     */
    variantList?: AvailableVariantListType[] | null;
  };
