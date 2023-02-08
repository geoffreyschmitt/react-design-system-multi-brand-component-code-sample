import { ButtonProps as CoreButtonProps } from 'link-to-core-component';

export const AvailableButtonVariant = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'highlighted',
  'buy-button',
] as const;
export type AvailableButtonVariantType = typeof AvailableButtonVariant[number];

export const AvailableSizeVariant = ['s', 'l'] as const;
export type AvailableSizeVariantType = typeof AvailableSizeVariant[number];

export type ButtonProps = CoreButtonProps & {
  /**
   * Button variants
   */
  variantList?: AvailableButtonVariantType[] | null;
  /**
   * button size
   */
  size?: AvailableSizeVariantType;
};
